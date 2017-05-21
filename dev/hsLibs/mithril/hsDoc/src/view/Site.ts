const m = require("mithril");

import { Layout } from './Layout';
import { px, FILL } from './PillaredLayout';
import { Module, Modules } from '../Modules'; 


const TitleHeight   = px(30);   // 
const FooterHeight  = px(10);   // 
const LeftNavWidth  = px(150);
const SiteName      = 'HSDocs';
const COPYRIGHT     = "(c) Helpful Scripts";

export class HsSite extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        return this.layout('.hs-site', node, { rows:[TitleHeight, FILL, FooterHeight]}, [
            m(HeaderBar), 
            m(MainArea),
            m(FooterBar)
        ]);
    }
}

class HeaderBar extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        return this.layout('.hs-site-header', node, { columns: [LeftNavWidth, FILL]}, [
            m(SiteTitle),
            m(ModulesTitleBar)           
        ]);
    }
};

class FooterBar extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        return this.layout('.hs-site-footer', node, { }, COPYRIGHT);
    }
};

class MainArea extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        return this.layout('.hs-site-main', node, { columns: [LeftNavWidth, FILL]}, [
            m(ModuleNav), 
            m(ModuleDetail)
        ]);
    }
};

class SiteTitle extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        return this.layout('.hs-site-title', node, { }, SiteName);
    }
};

class ModuleName extends Layout {
    view(node: typeof m.Vnode): typeof m.Vnode {
        return this.layout('.hs-module-name', node, { }, node.attrs.name);
    }
}

class ModulesTitleBar extends Layout {
    view(node: typeof m.Vnode): typeof m.Vnode {
        return this.layout('.hs-module-title', node, { columns: <any[]>[] }, 
            Modules.list.map((mdl:Module) => m(ModuleName, {name:mdl.name})));
    }
};

class ModuleNav extends Layout { 
    view(node: typeof m.Vnode): typeof m.Vnode {
        return this.layout('.hs-module-nav', node, {}, 'mn');
    }
}

class ModuleDetail extends Layout {
    view(node:typeof m.Vnode): typeof m.Vnode {
        return this.layout('.hs-module-detail', node, {}, 'md');
    }
}
