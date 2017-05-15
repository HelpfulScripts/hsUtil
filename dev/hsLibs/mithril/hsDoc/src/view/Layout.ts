/**
 * @description:
 * layout('.myclass', {columns: [layout.px(10), layout.pc(10), layout.fill], []})
 */

const m = require("mithril");

import { Rows, Columns } from '../LayoutAreas';

//import { RowLayout, ColumnLayout } from './PillaredLayout';

const CSSLayout             = '.hs-layout';
//const CSSLayoutTerminal     = '.hs-terminal-layout';
//const CSSLayoutContainer    = '.hs-container-layout';

//export interface Vnode { tag:string; attrs?: {id: string}; children: Vnode[]|string; }

let id = 0;

export abstract class Component {
    constructor(public cssClass:string) { };
    public abstract view(vnode?: typeof m.Vnode): typeof m.Vnode;
}

let layItOut = function(cssClass:string, attrs:any, areas:Component[]):Component {
    let css = '';
    if (attrs.columns)  { css = new Columns(attrs.columns).styles(areas); }
    if (attrs.rows)     { css = new Rows(attrs.rows).styles(areas); }
    attrs.columns = attrs.rows = undefined;
    return m(`${cssClass} ${css}`, attrs, areas);
};

export class Layout extends Component{
    public style:string;
    constructor(cssClass:string) { super(`${CSSLayout} ${cssClass}`); };
    oninit(node: typeof m.Vnode) { 
        node.mid = id++; 
//        console.log(`init ${node.mid} ${this.cssClass}`);  
//        console.log(node);
    }
    content(node: typeof m.Vnode):typeof m.Vnode  { return m("default"); };
    attrs(node?: typeof m.Vnode):any { return {}; }
    view(node?: typeof m.Vnode) { 
        const attrs = this.attrs(node);
        attrs.id = node.mid;
        node.style = node.style || '';
        attrs.style = node.style; 
        console.log(`${attrs.id} ${this.cssClass} ${attrs.style}`);
        return layItOut(`${this.cssClass}`, attrs, this.content(node)); 
    };
}



