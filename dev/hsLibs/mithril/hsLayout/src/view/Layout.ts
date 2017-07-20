/**
Layout.ts provides basic mechanisms for laying out a view container. 
Two abstract classes provide the basic mechanism:
 
##{@link hsLayout:Layout.Container Container}
Extensions of `Container` layout  `Compnonent`s they hold in one of a number of ways. 
Being a `Component` themselves, 
For example, 
   ``
*/

/** */
import { Vnode} from '../../../mithril';

import { LayoutToken } from './Tokens';
import { Container }   from './Container';

/**
 * Abstract base class for creating layout style implementations.
 * Subclasses  should 
 */
export abstract class Layout {
    /**
     * statis list of available styles. The key for each entry is the keyword that triggers the style,
     * and the value is a constructor for that style
     */
    static layoutStyles:{string?: Layout} = {};

    /**
     * 
     * @param keyword the keyword used in the attributes to `this.layout`
     * @param style the `Layout` implementation to instantiate when encountering `keyword` 
     */
    public static register(keyword:string, style:typeof Layout) {
        console.log(`registering ${keyword} layout`);
        Layout.layoutStyles[keyword] = style;
    }

    /**
     * Lays out the `components` according to the configuration in `attrs`.
     * The method will search for a registered layout key in `attrs`, then construct the `Layout` associated with the key
     * with the parameters for the key, and call the `getStyles` method on the style with the provided `components`.
     * @param attrs an object literal, typically provided as middle attribuites objevctin the m(css, {}, '') call.
     * @param components 
     * @return returns the css class that the `getStyles` function returns.
     */
    public static createLayout(attrs:any, components:Array<Vnode>):string {
        let css = '';
        Object.keys(Layout.layoutStyles).some(key => { // executes the first match key in attrs.
            if (attrs[key]) { 
                css = new Layout.layoutStyles[key](attrs[key]).getStyles(components); 
                attrs[key] = undefined;
                return true;
            }
            return false;
        });
        return css;
    }


    spacing = 0;   
    
    /**
     * Layout Constructor, will be called by the static `createLayout` method when creating the layout on a {@link hsLayout:Container.Container `Container`}.
     * The `areaDesc` parameter is expected to be of the form {<keyword>: {@link hsLayout:Tokens.LayoutToken `LayoutToken`}[]}} 
     * and will be passed through form the `Container` requesting the layout.
     * @param areaDesc 
     */
    constructor(public areaDesc:LayoutToken[]) { };

    /**
     * Calculates the style attributes required for each component in `Components`.
     * These attributes are saved in a `styles` field on the component itself. 
     * During rendering these `styles` attributes are copied to the `node.attrs.styles` field.
     * @param components 
     */
    protected abstract getStyles(components:Array<Vnode|Container>):string;
}

