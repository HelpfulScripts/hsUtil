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
            m(ModuleDetail, {field:field})
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
        const name = node.attrs.name;
        node.attrs.name = undefined;
        return m('.hs-module-name', { href:`/api/${name}/`, oncreate: m.route.link, onupdate: m.route.link}, name);
    }
};


//----------- MainArea parts --------------------------------------------------------

class ModuleNav extends Layout { 
    view(node: typeof m.Vnode): typeof m.Vnode {
        const lib = node.attrs.lib;
        const mdl = Modules.get(node.attrs.lib) || {name:lib, children:[], id:'none'};
        node.attrs.lib = undefined;
        return this.layout('.hs-module-nav', node, {}, [m(ModuleNavList, {mdl:mdl, lib:lib, prefix:''})]);
        
    } 
}

class ModuleDetail extends Layout { 
    view(node:typeof m.Vnode): typeof m.Vnode {
        const field = Modules.get(node.attrs.field) || 'hui';
        node.attrs.field = undefined;
        return this.layout('.hs-module-detail', node, {}, [m(ItemDetail, {field: field})]); 
    }
}

//----------- MainNav parts --------------------------------------------------------

class ModuleNavList {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        const name = mdl.name.replace(/["'](.+)["']|(.+)/g, "$1$2");  // remove quotes 
        const longName = `${node.attrs.prefix}${name}`;  
        const lib = node.attrs.lib;
        node.attrs.mdl = undefined;
        node.attrs.lib = undefined;
        node.attrs.prefix = undefined;
        const mNode = m('div', {href:`/api/${lib}/${longName}`, oncreate: m.route.link, onupdate: m.route.link}, name);
        return m('.hs-module-list', {}, [mNode, mdl.children?
            m('.hs-member-list', mdl.children.map((c:any) => m(ModuleNavList, {mdl:c, lib:lib, prefix:longName+'.'}))) 
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

