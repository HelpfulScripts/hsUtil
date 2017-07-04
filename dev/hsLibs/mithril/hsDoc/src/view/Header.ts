import { m, Vnode} from '../../../mithril';
import { Layout, px, FILL } from '../../../hsLayout/src/';
import { Modules } from '../Modules'; 

export const LeftNavWidth  = px(200);
const SiteName      = 'HSDocs';

export class HeaderBar extends Layout {
    view(node:Vnode):Vnode {
        return this.layout('.hs-site-header', node, { columns: [LeftNavWidth, FILL]}, [
            m(SiteTitle),
            m(ModulesMenuBar)           
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
        return this.layout('.hs-module-title', node, { columns: <any[]>[] }, 
            Modules.get().map((lib:string) => m(ModulesMenu, {lib:lib})));
    }
};

class ModulesMenu extends Layout {
    view(node: Vnode): Vnode {
        const lib = node.attrs.lib;
        node.attrs.lib = undefined;
        return this.layout('.hs-module-name', node, { href:`/api/${lib}/0`, oncreate: m.route.link, onupdate: m.route.link}, [m('',lib)]);
    }
};

