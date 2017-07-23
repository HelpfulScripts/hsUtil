/**
 Definitions of the abstratc base classes `Component` and `Container`.
 */

/** */
import { m, Vnode} from '../../../mithril';

import { Layout } from './Layout'; 

/**
 * abstract base class of a viewable component. Subclasses can be passed into `mithril` 
 * to create render trees.
 * ### Example
 * `m('', [m(Component, {parameters})])`
 */
abstract class Component {
//    id:number;
    constructor() { /*this.id = id++;*/ }
    public abstract view(vnode?: Vnode): Vnode;
}

/**
Abstract base class for applying layouts. Subclasses should follow the following pattern:<code>
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
</code>
The call to `this.layout` takes as parameters
- the css class to associate with the container,
- the container Vnode,
- the layout configration, and
- the components to be layed out.

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
    lays out the component in `components` according to the configuration in `attrs`.
    The method returns a vnode container that has an associated `cssClass` style.
    `layout` is called during the `render` phase of the `mithril` lifecycle, 
    which ensures an outside-in calling sequence on containers; 
    i.e. the outermost containers are called first, and `node` will already have the 
    `style` field set with required style attributes. 
    These are added to any `attrs` parameter provided.

    The format for the layout configuration in `attrs` is <code>
    {<keyword>: <parameter>}
    </code>
     where `keyword` is the keyword with which the `Layout` was registered.
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
