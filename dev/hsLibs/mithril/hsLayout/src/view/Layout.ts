/**
 * Layout.ts provides basic mechanisms for laying out the view container. 
 */

/**
 * 
 */
import { m, Vnode} from '../../../mithril';

/**
 * Abstract token for a layout area. It is defined by a single number available via the constructor. 
 */
export abstract class LayoutToken {
    constructor(private size: number) {}
    public getSize() { return this.size; }
}

/**
 * A layout token that is defined in size.
 */
export abstract class DefinedToken extends LayoutToken{
    constructor(size: number) { super(size); } 
}

/**
 * A layout token that is undefined in size, and that fill will the available space.
 */
export class FillToken extends LayoutToken {
    constructor() { super(-1); }
}

/**
 * A defined token that sets a size in pixel.
 */
export class PixelToken extends DefinedToken {
    constructor(size:number) { super(size); }
}

/**
 * A defined token that sets a size in percent of available space.
 */
export class PercentToken extends DefinedToken {
    constructor(size:number) { super(size); }
}

/**
 * A convenience function that returns a defined pixel-sized token
 * @param px the number of pixels in the token
 */
export function px(px:number)   { return new PixelToken(px); }

/**
 * A convenience function that returns a defined percent-sized token
 * @param px the percentage in the token
 */
export function pc(pc:number)   { return new PercentToken(pc); }

/**
 * Convenience constant, standing for an undefined fill token.
 */
export const FILL = new FillToken();


/**
 * Abstract base class for layout style implementations.
 */
export abstract class LayoutStyle {
    /**
     * statis list of available styles. The key for each entry is the keyword that triggers the style,
     * and the value is a constructor for that style
     */
    static layoutStyles:{string?: LayoutStyle} = {};

    /**
     * 
     * @param keyword the keyword used in the attributes to `this.layout`
     * @param style the `LayoutStyle` implementation to instantiate when encountering `keyword` 
     */
    public static register(keyword:string, style:typeof LayoutStyle) {
        console.log(`registering ${keyword} layout`);
        LayoutStyle.layoutStyles[keyword] = style;
    }

    /**
     * 
     * @param attrs an object literal, typically provided as middle attribuites objevctin the m(css, {}, '') call.
     * @param content 
     * @return returns the css class that the `getStyles` function returns.
     */
    public static createLayout(attrs:any, content:Array<Vnode>):string {
        let css = '';
        Object.keys(LayoutStyle.layoutStyles).some(key => { // executes the first match key in attrs.
            if (attrs[key]) { 
                css = new LayoutStyle.layoutStyles[key](attrs[key]).getStyles(content); 
                attrs[key] = undefined;
                return true;
            }
            return false;
        });
        return css;
    }


    spacing = 0;    
    constructor(public areaDesc:LayoutToken[]) { };

    /**
     * 
     * @param content 
     */
    protected abstract getStyles(content:Vnode[]):string;
}

/**
 * abstract base class of a viewable component. Subclasses can be passed into `mithril` 
 * to create render trees.
 * #Example
 * `m('', [m(Component, {parameters})])`
 */
abstract class Component {
//    id:number;
    constructor() { /*this.id = id++;*/ }
    public abstract view(vnode?: Vnode): Vnode;
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
    /**
     * holds structural elements in style form: left, right, top, bottom, width, height
     */
    public style:string;
    
    /**
     * constructs a Layout component.
     */
    constructor() { super(); } 

    /**
     * lays out the component.
     * @param cssClass same as m(cssClass, ...) 
     * @param node the node on which to do the layout
     * @param attrs the attribute object literal that configures the layout
     * @param content the (set of) vnodes to layout within the container
     * @return a vnode 
     */
    public layout(cssClass:string, node: Vnode, attrs:any, content:Array<Vnode|string>|string): Vnode {
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
        const _content = makeContent(content); // --> Vnode[]
        if (node.style) { attrs.style = node.style; }
        let css = LayoutStyle.createLayout(attrs, _content);
        try {
            return m(`${cssClass} ${css} .hs-layout`, attrs, _content);
        } catch(e) { console.log(e); }
    }
}

class TextLayout extends Layout {
    constructor() { super(); }
    view(node:Vnode): Vnode {
        if (node.style) { node.attrs.style = node.style; }
        return m('.hs-layout', node.attrs, node.attrs.content); 
    }
}


