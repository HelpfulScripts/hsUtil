const m = require("mithril");

import { Layout } from './Layout';
//import { px } from '../LayoutAreas';
import { Module }    from '../Modules';

//const TitleTabWidth = px(100);

class ModuleName extends Layout{
    constructor() { super('.hs-module-name'); }
    content(node: typeof m.Vnode):typeof m.Vnode  { return node.attrs.name; };
}

export class ModulesTitleBar extends Layout{
    constructor() { super('.hs-module-title'); }
    attrs()   { return {columns: <any[]>[]}; }
    content(node: typeof m.Vnode) { 
        return node.attrs.titles.map((mdl:Module) => m(ModuleName, {name: mdl.name} )); 
    };
};

export class ModuleNav extends Layout{ 
    constructor() { super('.hs-module-nav'); }
    content() { return 'mn'; }
}

export class ModuleDetail extends Layout{
    constructor() { super('.hs-module-detail'); }
    content() { return 'md'; }
}