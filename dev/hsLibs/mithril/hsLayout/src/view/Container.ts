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
- the css class to associate with the Container,
- the Container Vnode,
- the layout configration (see {@link #methods_layout layout} method), and
- the components to be layed out.

 */
export abstract class Container extends Component {
    /**
     * holds structural elements in style form: left, right, top, bottom, width, height
     */
    public style:string;

//    oninit(node:Vnode)   { this.report('Container:init', node); }
//    oncreate(node:Vnode) { this.report('Container:create', node); } 
//    onupdate(node:Vnode) { this.report('Container:update', node); }

    /**
     * Called during the lifecycle `view` call to retrieve the subcomponents to render in this container.
     * The default implementation returns components stored in `node.attrs.content`. This allows for 
     * creating containers directly via mithril: `m(Container, {content:[...]})`. 
     * In case `node.attrs.content` is an array of literals with a `compClass` field describing a Component class, 
     * the method will create a Mithril node on that class and pass the `node.attrs.route` argument down to it.
     * Override this method to create containers that return more sophisticated content.
     * @return a Vnode or an array or Vnodes
     */
    protected getComponents(node:Vnode):Vnode {
        return !Array.isArray(node.attrs.content)? node.attrs.content :
            node.attrs.content.map((c:any) => {
                if (c.compClass) { 
                    c.attrs.route = node.attrs.route;
                    return m(c.compClass, c.attrs);
                } else {
                    return c;
                }
            });
    }

    /**
     * Called during the lifecycle `view` call to retrieve the css style class to apply to this container.
     * The default implementation returns components stored in `node.attrs.css`. This allows for 
     * creating containers directly via mithril: `m(Container, {content:[...], css:'.my-class'})`.
     * Override this method to create containers that return more sophisticated content.
     */
    protected getCSS(node:Vnode):string {
        return node.attrs.css || '';
    }


    private normalizeContent(components:Array<typeof Container|string>|string): Vnode {
        if (typeof components === 'string') { 
            return [m('.hs-leaf', m.trust(components))]; 
        }
        if (components.length>0) { // an array:
            if (components.some((c:any) => (typeof c !== 'object'))) {
                return components.map((comp:string|typeof Container):Vnode => 
                    (comp instanceof Container)? comp : m(Container, {content:comp})
                );
            } else {
                return components;
            }
        }
        return [components];
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
    view(node:Vnode): Vnode {
        const content = this.normalizeContent(this.getComponents(node)); // --> Vnode[]
        let css = Layout.createLayout(node.attrs, content);
        const attrs:any = {
            style: node.style,
            route: node.attrs.route,     
            onclick: node.attrs.onclick
        };
        node.attrs.route = undefined;
        if (node.attrs.href) { 
            attrs.href = node.attrs.href;
            attrs.oncreate = m.route.link;
            attrs.onupdate = m.route.link;
        }
        return m(`.hs-layout ${css} ${this.getCSS(node)}`, attrs, content.map((c:any) => c));
    }
}
