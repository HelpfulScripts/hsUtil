const m = require("mithril");

import { ModulesTitleBar, ModuleNav, ModuleDetail }  from './ModuleView';
import { Layout } from './Layout';
import { px, FILL } from '../LayoutAreas';
import { Modules } from '../Modules';


const TitleHeight   = px(40);   // 
const LeftNavWidth  = px(150);

class SiteTitle extends Layout {
    constructor() { super('.hs-site-title'); }
    content(vnode: typeof m.Vnode) { return vnode.attrs.name; }
}

class HeaderBar extends Layout{
    constructor() { super('.hs-site-header'); }
    attrs():any { return { columns: [LeftNavWidth, FILL]}; }
    content(vnode: typeof m.Vnode) { return [
        m(SiteTitle, {name: vnode.attrs.name}),
        m(ModulesTitleBar, {titles: Modules.list })
    ]; }
}

class MainArea extends Layout{
    constructor() { super('.hs-site-main'); }
    attrs() { return { columns: [LeftNavWidth, FILL]}; }
    content()  { 
        return [
            m(ModuleNav), 
            m(ModuleDetail)
        ]; 
    };
}

export class HsSite extends Layout{
    constructor() { super('.hs-site'); }
    gSiteName = 'HSDocs';
    attrs():any { return { rows:[TitleHeight, FILL]}; }
    content():typeof m.Vnode  { 
        return [
            m(HeaderBar, {name: this.gSiteName}), 
            m(MainArea)
        ]; 
    };
};