import { m, Vnode} from '../../../mithril';
import { Layout, px, FILL } from '../../../hsLayout/src/';
import { Modules } from '../Modules'; 

export const LeftNavWidth  = px(200);
let SiteName      = 'HSDocs';

export class HeaderBar extends Layout {
    view(node:Vnode):Vnode {
        const lib = node.attrs.lib;
        node.attrs.lib = undefined;
        SiteName = Modules.title() || SiteName;
        return this.layout('.hs-site-header', node, { columns: [LeftNavWidth, FILL]}, [
            m(SiteTitle),
            m(ModulesMenuBar, {lib:lib})           
        ]);
    }
};

class SiteTitle extends Layout {
    view(node:Vnode):Vnode {
        return this.layout('.hs-site-title', node, { href:`/api/`, oncreate: m.route.link, onupdate: m.route.link }, SiteName);
    }
};

class ModulesMenuBar extends Layout {
    view(node: Vnode): Vnode {
        const lib = node.attrs.lib;
        node.attrs.lib = undefined;
        return this.layout('.hs-module-title', node, { columns: <any[]>[] }, 
            Modules.get().map((l:string) => m(ModulesMenu, {lib:lib, setLib:l})));
    }
};

class ModulesMenu extends Layout {
    view(node: Vnode): Vnode {
        const lib = node.attrs.lib;
        const setLib = node.attrs.setLib;
        node.attrs.lib = undefined;
        node.attrs.setLib = undefined;
        const selected = (lib===setLib)? '.hs-header-tab-selected': '';
        return this.layout(`.hs-header-tab ${selected}`, node, { href:`/api/${setLib}/0`, oncreate: m.route.link, onupdate: m.route.link}, [m('',setLib)]);
    }
};

