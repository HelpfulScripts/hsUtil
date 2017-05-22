/**
 * @description:
 * layout('.myclass', {columns: [layout.px(10), layout.pc(10), layout.fill], []})
 */

const m = require("mithril");
let id = 0;

/**
 * 
 */
export abstract class LayoutArea {
    constructor(public size: number) {}
}

/**
 * 
 */
export abstract class LayoutStyle {
    static layoutStyles = {};
    public static register(keyword:string, style:typeof LayoutStyle) {
        console.log(`registering ${keyword} layout`);
        LayoutStyle.layoutStyles[keyword] = style;
    }

    public static createLayout(attrs:any, content:Array<typeof m.Vnode>):string {
        let css = '';
        Object.keys(LayoutStyle.layoutStyles).some(key => {
            if (attrs[key]) { 
                css = new LayoutStyle.layoutStyles[key](attrs[key]).styles(content); 
                attrs[key] = undefined;
                return true;
            }
            return false;
        });
        return css;
    }


    spacing = 0;    
    constructor(public areaDesc:LayoutArea[]) { };

    styles(content:Array<typeof Layout>) {
        return this.getStyles(content);
    }
    protected abstract getStyles(content:typeof m.Vnode[]):string;
}

/**
 * 
 */
export abstract class Component {
    id:number;
    constructor() { this.id = id++; }
    public abstract view(vnode?: typeof m.Vnode): typeof m.Vnode;
}

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
export abstract class Layout extends Component {
    public style:string;
    cssClass: string;
    content: typeof m.Vnode;

    constructor() { super(); }

    public layout(cssClass:string, node: typeof m.Vnode, attrs:any, content:Array<typeof m.Vnode|string>|string): typeof m.Vnode {
        function makeContent(content:Array<typeof Layout|string>|string): any {
            let result:any = [];
            if (typeof content === 'string') { 
                result = content; 
            } else if (content.length>0) {
                result = content.map((area:string) => 
                    (typeof area === 'string')? m(TextLayout, {content: area}) : area
                );
            }
            return result;
        }

        function copyAttrs(attrs:any, node: typeof m.Vnode) {
            Object.keys(attrs).forEach((key:string) => node.attrs[key] = attrs[key]);
        }

        const _content = makeContent(content); // --> typeof m.Vnode[]
        copyAttrs(attrs, node);

        if (node.style) { node.attrs.style = node.style;  }
        let css = LayoutStyle.createLayout(node.attrs, _content);
/*        
        if (node.attrs.columns)  { 
            css = new Columns(node.attrs.columns).styles(_content); 
            node.attrs.columns = undefined;
        }
        if (node.attrs.rows)     { 
            css = new Rows(node.attrs.rows).styles(_content);       
            node.attrs.rows = undefined;
        }
*/        
        return m(`${cssClass} ${css} .hs-layout`, node.attrs, _content);
    }
}

class TextLayout extends Layout {
    constructor() { super(); }
    view(node: typeof m.Vnode): typeof m.Vnode { 
        if (node.style) { node.attrs.style = node.style; }
        return m('.hs-layout', node.attrs, node.attrs.content); 
    }
}


