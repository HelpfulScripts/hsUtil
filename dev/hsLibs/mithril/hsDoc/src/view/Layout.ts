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

/**
 * @ngdoc directive
 * @name hsLayout.directive:hsLayout
 * @restrict E
 * @element ANY
 * @description hs-layout directive. Establishes a space in which 
 * {@link hsLayout.directive:hsWidget widgets} live.
# Attributes
All attributes are optional except where marked as required. For emphasis, optional attributes
are wrapped in square brackets: `[...]`. When optional, the default value is <u>underlined</u>.
- [**hs-type** = '<u>tiles</u> | columns | rows | relative']
    sets the type of layout. For options see below
- [**hs-tiles**] alternative to `hs-type=tiles`; creates a {@link hsLayout.object.HsTileLayout tile layout}
- [**hs-columns='[<i>Array</i>, ]'**] 
    Please see {@link hsLayout.object.HsColumnsLayout columns layout} on avaliable options for `Array`
- [**hs-rows='[<i>Array</i>, ]'**] 
    Please see {@link hsLayout.object.HsRowsLayout rows layout} on avaliable options for `Array`
- [**hs-relative**] create a {@link hsLayout.object.HsRelativeLayout relative layout}
- [**hs-fill-last-col**] applies to tile layout only; if specified, the last colum of tiles are stretched horizontally 
    to fill the remaining space.

Elements in `Array` will be used as width indicators for the widgets that are children of this layout. 
All widths have to be specified either in px or in %.
The following options are supported for `Array`:
- []: An empty array; all widgets will be evenly spaced across the available width. 
- [fw]: All widgets have the specified width (in px or %) and will fill the available space with from the left,
    leaving any remaining unused space on the right. 
- [fw,]: Sets the first (left) widget to a width of `fw`.<br>
    if `fw` is specified in %, the remaining n-1 widgets will have equal relative widths of `(100-fw)/(n-1)%`<br>
    if `fw` is specified in px, the remaining n-1 widgets will have their right borders at location `i*100/n%`, with i=1...n.
- [,lw]: Sets the last (right) widget to a width of `lw`.<br>
    if `lw` is specified in %, the remaining n-1 widgets will have equal relative widths of `(100-lw)/(n-1)%`<br>
    if `lw` is specified in px, the remaining n-1 widgets will have their left borders at location `i*100/n%`, with i=0...n-1.
- [fw,,lw]: Sets the first and last widget to a width of `fw`/`lw`.<br>
    Both have to be specified either in px or in %.<br>
    if the unit is %, the remaining n-2 widgets will have equal relative widths of `(100-lw-fw)/(n-2)%`<br>
    if the unit is px, the remaining n-2 widgets will have their left/right borders at location `i*100/n%`.
- [1w, 2w, , w2, w1]: multiple widths can be specified in uninterrupted sequence both from the left and the right. 
 */

export class Layout extends Component{
    public style:string;
    constructor(cssClass:string) { super(`${CSSLayout} ${cssClass}`); };
    oninit(node: typeof m.Vnode) { 
        node.mid = id++; 
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



