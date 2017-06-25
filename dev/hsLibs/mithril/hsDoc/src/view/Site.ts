const m = require("mithril");

import { Layout, px, FILL } from '../../../hsLayout/src/';
import { Module, Modules } from '../Modules'; 


const TitleHeight   = px(30);   // 
const FooterHeight  = px(10);   // 
const LeftNavWidth  = px(150);
const SiteName      = 'HSDocs';
const COPYRIGHT     = "(c) Helpful Scripts";

export class HsSite extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        const lib   = node.attrs.lib || 'projectOverview';
        const field = node.attrs.field || 'libOverview';
        return this.layout('.hs-site', node, { rows:[TitleHeight, FILL, FooterHeight] }, [
            m(HeaderBar), 
            m(MainArea, {lib:lib, field:field}),
            m(FooterBar)
        ]);
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
            Modules.get().map((mdl:Module) => m(ModulesMenu, {name:mdl.name})));
    }
};

class ModulesMenu extends Layout {
    view(node: typeof m.Vnode): typeof m.Vnode {
        return m('.hs-module-name', { href:`/api/${node.attrs.name}/`, oncreate: m.route.link, onupdate: m.route.link}, node.attrs.name);
    }
};


//----------- MainArea parts --------------------------------------------------------

class ModuleNav extends Layout { 
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = Modules.get(node.attrs.lib) || {name:node.attrs.lib, children:[], id:'none'};
        return this.layout('.hs-module-nav', node, {}, [m(ModuleNavList, {mdl:mdl, lib:node.attrs.lib})]);
        
    } 
}

class ModuleDetail extends Layout { 
    view(node:typeof m.Vnode): typeof m.Vnode {
        const field = Modules.get(node.attrs.field);
        return this.layout('.hs-module-detail', node, {}, [m(ItemDetail, {field: field})]); 
    }
}

//----------- MainNav parts --------------------------------------------------------

class ModuleNavList {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        const lib = node.attrs.lib;
        node.attrs.mdl = undefined;
        node.attrs.lib = undefined;
        const name = mdl.name.replace(/["'](.+)["']|(.+)/g, "$1$2");  // remove quotes 
        const mNode = m('li', {href:`/api/${lib}/${name}`, oncreate: m.route.link, onupdate: m.route.link}, name);
        return m('li', {}, [mNode, mdl.children?
            m('li.hs-nav-list', mdl.children.map((c:any) => m(ModuleNavList, {mdl:c, lib:lib}))) 
            : undefined
        ]);
    }
}

class ItemDetail  {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const field = node.attrs.field;
        node.attrs.field = undefined;
        return m('table', {}, [Object.keys(field).map((k:string) => {
            let content = `${field[k]}`;
            if (k==='children') { content = field.children.length; }
            else if (typeof field[k] === 'object') { content = m(ItemDetail, {field: field[k]}); }
            return m('tr', [m('td', m('b', `${k}:`)), m('td', content)]);
        })]);
    }
}





class ModuleNavLevel {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        const indent = node.attrs.indent;  
//        const field = node.attrs.field;  
 //       field.field = mdl;
        return m('li.hs-nav-level', Object.keys(mdl).map(key => {
            return m(ModuleNavItem, {indent: indent, key: key, content: mdl[key]}); 
        }));
    }
}

class ModuleNavItem {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const key       = node.attrs.key;
        const content   = node.attrs.content;
        const indent    = node.attrs.indent; 
        const spacer    = Array(indent+1).join('.'); 
        node.attrs.key = undefined;
        node.attrs.content = undefined;
        node.attrs.indent = undefined;
        if (key === 'children' && content.length > 0) { 
            return m('li', [
                m('li', `${spacer} ${content.length} Children`),
                m('li', content.map((c:any, i:number) => m('li', [
                    m('li', `${spacer} child ${i}:`),
                    m(ModuleNavLevel, {mdl:c, indent:(indent+3)})
            ])))]); 
        } else if (typeof content === 'object' && content.length > 0) {
            return m('li', `${spacer} ${key}:[${content.length}]`); 
        } else {
            return m('li', `${spacer} ${key}: ${content}`); 
        }
    }
}