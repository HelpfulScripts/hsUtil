/**
 Definitions of the abstratc base classes `Component` and `Container`.
 */

/** */
import { m, Vnode}      from '../../../mithril';

import { Layout }       from './Layout'; 

/**
 * abstract base class of a viewable component. Subclasses can be passed into `mithril` 
 * to create render trees.
 * ### Example
 * `m('', [m(Component, {parameters})])`
 */
export abstract class Component {
//    id:number;
    constructor() { /*this.id = id++;*/ }

    /** 
     * the standard `Mithril` component view function 
     * @param vnode the vnode passed by `Mithril`
     * @return A vnode that represents the view of this `Component` 
     */
    public abstract view(vnode?: Vnode): Vnode;
}

/**
Abstract base class for applying layouts. Subclasses should implement a `view` method that returns
the result of a call to `this.layout()`, as in the following example:
<code>
import { Container, px, FILL }  from 'hsLayout';
const TitleHeight   = px(30); 
const FooterHeight  = px(10); 
class MyLayout extends Container {
    view(node:Vnode):Vnode {
        return this.layout('.my-layout', { rows:[TitleHeight, FILL, FooterHeight] }, [
            m(), 
            m(),
            m()
        ]);
    }
} 
</code>
The call to `this.layout` takes as parameters
- the css class to associate with the container,
- the container Vnode,
- the layout configration (see {@link #methods_layout layout} method), and
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

    oninit(node:Vnode) { 
        this.style = node.style || undefined; 
    }

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
     * @param layout the attribute object literal that configures the layout
     * @param components the components to layout within the container. 
     * This is either a primitive `string`, or an array of `Container`s or `string`s.
     * @return a vnode that has an associated `cssClass` style.
     */
    protected layout(cssClass:string, layout:any, components:Array<typeof Container|string>|string): Vnode {
        function makeContent(components:Array<typeof Container|string>|string): Vnode {
            if (typeof components === 'string') { 
                return m(Leaf, {content: components}); 
            }
            if (components.length>0) { // an array:
                return components.map((comp:string|typeof Container) => 
                    (typeof comp === 'string')? m(Leaf, {content:comp}) : comp);
            }
            return components;
        }
        const content = makeContent(components); // --> Vnode[]
        let css = Layout.createLayout(layout, content);
        return m(`${cssClass||''} ${css} .hs-layout`, {style: this.style}, content);
    }

    protected leaf(components:Array<typeof Container|string>|string): Vnode {
        return m(`.hs-layout .hs-leaf`, {style: this.style}, components);
    }

    /** default implementation of standard Mithril view method. */
    view(node:Vnode) {
        const cssStyle = node.attrs.css || '.hs';
        const content  = node.attrs.content; 
        return this.layout(cssStyle, node.attrs, content);
    } 
}

/**
 * Leaf implements a terminal Container, i.e. one that doesn't have any children.
 * We need to use a Leaf rather than a simple m() terminal since styles need to be applied from the parent.
 */
export class Leaf extends Container {
    view(node:Vnode) { 
        return m(`.hs-layout .hs-leaf`, {style: node.style}, node.attrs.content);
    }
}