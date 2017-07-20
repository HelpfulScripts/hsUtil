/**
 Definitions of the abstratc base classes `Component` and `Container`.
 */

/** */
import { m, Vnode} from '../../../mithril';

import { Layout } from './Layout'; 

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
Abstract base class for applying layouts. Subclasses should follow the following pattern:<pre><code>
import { Container, px, FILL }  from 'hsLayout';
const TitleHeight   = px(30); 
const FooterHeight  = px(10); 
class MyLayout extends Container {
    view(node:Vnode):Vnode {
        try {
            return this.layout('.my-layout', node, { rows:[TitleHeight, FILL, FooterHeight] }, [
                m(), 
                m(),
                m()
            ]);
        }
        catch(e) { console.log(e); }
    }
} 
</code></pre>
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
export abstract class Container extends Component {
    /**
     * holds structural elements in style form: left, right, top, bottom, width, height
     */
    public style:string;
    
    /**
     * constructs a Container component.
     */
    constructor() { super(); } 

    /**
     * lays out the component in `components` according to the configuration in `attrs`.
     * The method returns a vnode container that has an associated `cssClass` style.
     * `layout` is called during the `render` phase of the mithril` lifecycle, which ensures an outside-in
     * calling sequence on containers; i.e. the outermost containers are called first 
     * `node` will already have the `styles` field set with required style attributes. These are 
     * added to the provided `attrs` parameter.
     * 
     * @param cssClass a css style designator; same as used in m(cssClass, ...) 
     * @param node the node on which to do the layout
     * @param attrs the attribute object literal that configures the layout
     * @param components the components to layout within the container. 
     * This is either a primitive `string`, or an array of `Container`s or `string`s.
     * @return a vnode that has an associated `cssClass` style.
     */
    public layout(cssClass:string, node: Vnode, attrs:any, components:Array<typeof Container|string>|string): Vnode {
        function makeContent(components:Array<typeof Container|string>|string): Vnode {
            if (typeof components === 'string') { return m('',components); }
            else if (components.length>0) { // an array:
                return components.map((comp:string|typeof Container) => (typeof comp === 'string')? m('.hs-layout', comp) : comp);
            }
            return m('',[]);
        }
        const _content = makeContent(components); // --> Vnode[]
        if (node.style) { attrs.style = node.style; }
        let css = Layout.createLayout(attrs, _content);
        return m(`${cssClass} ${css} .hs-layout`, attrs, _content);
    }
}
