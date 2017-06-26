const m = require("mithril");

import { Layout, px, FILL } from '../../../hsLayout/src/';
import { Modules } from '../Modules'; 


const TitleHeight   = px(30);   // 
const FooterHeight  = px(10);   // 
const LeftNavWidth  = px(200);
const SiteName      = 'HSDocs';
const COPYRIGHT     = "(c) Helpful Scripts";

export class HsSite extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        try {
            const lib   = node.attrs.lib || 'projectOverview';
            const field = node.attrs.field || 'libOverview';
            node.attrs.lib = undefined;
            node.attrs.field = undefined;
console.log(`HsSite ${lib}: ${field}`);        
            return this.layout('.hs-site', node, { rows:[TitleHeight, FILL, FooterHeight] }, [
                m(HeaderBar), 
                m(MainArea, {lib:lib, field:field}),
                m(FooterBar)
            ]);
        }
        catch(e) { console.log(e); }
    }
} 


//----------- Main Site parts --------------------------------------------------------

class HeaderBar extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        return this.layout('.hs-site-header', node, { columns: [LeftNavWidth, FILL]}, [
            m(SiteTitle),
            m(ModulesMenuBar)           
        ]);
    }
};

class MainArea extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        const lib = node.attrs.lib;
        const field = node.attrs.field;
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        return this.layout('.hs-site-main', node, { columns: [LeftNavWidth, FILL]}, [
            m(ModuleNav, {lib:lib}), 
            m(ModuleDetail, {lib:lib, field:field})
        ]);
    }
};

class FooterBar extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        return this.layout('.hs-site-footer', node, { }, COPYRIGHT);
    }
};


//----------- HeaderBar parts --------------------------------------------------------

class SiteTitle extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        return this.layout('.hs-site-title', node, { href:`/api/`, oncreate: m.route.link, onupdate: m.route.link }, SiteName);
    }
};

class ModulesMenuBar extends Layout {
    view(node: typeof m.Vnode): typeof m.Vnode {
        return this.layout('.hs-module-title', node, { columns: <any[]>[] }, 
            Modules.get().map((lib:string) => m(ModulesMenu, {lib:lib})));
    }
};

class ModulesMenu extends Layout {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const lib = node.attrs.lib;
        node.attrs.lib = undefined;
        return this.layout('.hs-module-name', node, { href:`/api/${lib}/0`, oncreate: m.route.link, onupdate: m.route.link}, [m('',lib)]);
    }
};


//----------- MainArea parts --------------------------------------------------------

class ModuleNav extends Layout { 
    view(node: typeof m.Vnode): typeof m.Vnode {
        const lib = node.attrs.lib;
        node.attrs.lib = undefined;
        const mdl = Modules.get(lib, 0) || {name:'unknown', id:0};
        return this.layout('.hs-module-nav', node, {}, [
            m(ModuleNavList, {mdl:mdl}), 
//            m(ModuleNavIndentList, {mdl:mdl})
        ]);
    } 
}

class ModuleDetail extends Layout { 
    view(node:typeof m.Vnode): typeof m.Vnode {
        const lib = node.attrs.lib || '';
        const mdl = Modules.get(lib, node.attrs.field) || '';
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        return this.layout('.hs-module-detail', node, {}, [
//            m(ItemDoc, {mdl: mdl}),
            m(ItemDetail, {mdl: mdl})
        ]); 
    }
}

//----------- MainNav parts --------------------------------------------------------

class ModuleNavList {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;

//console.log(`ModuleNavList ${mdl.lib}, name:${mdl.name}, ${mdl.children?mdl.children.length:'-'} children`);        
        if (mdl.kind === 0) { // External Modules
            return m('', [
                m(`.hs-library-name`, {href:`/api/${mdl.lib}/${mdl.id}`, oncreate: m.route.link, onupdate: m.route.link}, m('', mdl.name)),
                m('', (mdl.children? mdl.children.map((c:any) => m(ExternalModule, {mdl:c})) : 'no children'))
            ]);
        } else {
            console.log('error: not a head node');
        }
    }
}

class ExternalModule {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;

//console.log(`ExternalModule ${mdl.lib} ${mdl.name}, ${mdl.groups?mdl.groups.length:'-'} groups`);        
        return m(`.hs-ext-module`, [
            m(`.hs-ext-module-name`, {href:`/api/${mdl.lib}/${mdl.id}`, oncreate: m.route.link, onupdate: m.route.link}, m('', mdl.name)),
            mdl.groups? m('', mdl.groups.map((g:any) => m(ModuleEntries, {group:g, mdl:mdl}))) : undefined
        ]);
    }
}

class ModuleEntries {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const group = node.attrs.group;
        const mdl = node.attrs.mdl;
        node.attrs.group = undefined;
        node.attrs.mdl = undefined;
//console.log(`ModuleEntries ${mdl.lib} ${mdl.name}`);        
//console.log(group);        
        return m(`.hs-module-entries`, group? [
            m('.hs-module-header', group.title),
            m('', group.children.map((c:any) => m(ModuleEntry, {mID:c, lib:mdl.lib})))
        ] : '--');
    }
}

class ModuleEntry {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const lib = node.attrs.lib;
//console.log(`ModuleEntry ${lib} ${node.attrs.mID}`);        
        const mdl = Modules.get(lib, node.attrs.mID);
        node.attrs.lib = undefined;
        node.attrs.mID = undefined;
        const exported = (mdl.flags && mdl.flags.isExported);
//console.log(`ModuleEntry name:${mdl.name}, id:${mdl.id}`);        
        return m(`.hs-module-entry ${exported?'.hs-exported' : ''}`, 
            {href:`/api/${lib}/${mdl.id}`, oncreate: m.route.link, onupdate: m.route.link}, 
            mdl.name);
    }
}

class ItemDoc {

}




//-----------------
class ModuleNavIndentList {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;

        const mNode = m(`.hs-member`, {href:`/api/${mdl.lib}/${mdl.id}`, oncreate: m.route.link, onupdate: m.route.link}, mdl.name);
        return m(`.hs-module-list`, {}, [mNode, mdl.children?
            m('.hs-indent', mdl.children.map((c:any) => 
                m(ModuleNavIndentList, {mdl:c, lib:mdl.lib}))) 
            : undefined
        ]);
    }
}

class ItemDetail  {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;
        return m('table', {}, [Object.keys(mdl).map((k:string) => {
            let content;
            if (typeof mdl[k] === 'object') {
                content = (k==='children')? 
                    `[${mdl.children.length}]` : 
                    m(ItemDetail, {mdl: mdl[k]}); 
            } else {
                content = `${mdl[k]}`;
            }
            return m('tr', [m('td', m('b', `${k}:`)), m('td', content)]);
        })]);
    }
}

