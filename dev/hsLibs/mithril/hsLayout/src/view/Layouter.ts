/**
Layouter.ts provides basic mechanisms for laying out a view container. 
Subclasses of `Layouter` should
- implement the {@link Layouter.Layouter.getStyles getStyles} method.
- register the subclass and configuration keyword with the static 
   {@link Layouter.Layouter.register register} method.
*/

/** */
import { Vnode} from '../mithril';

import { LayoutToken }  from './Tokens';
import { Layout }    from './Layout';
import { px, pc, FILL } from './Tokens';

/**
Abstract base class for creating layout style implementations.
Subclasses should implement `getStyles`. In addition, subclasses need to be registered with the 
static `Layouter.register` method.
### Example
<code>
class MyLayouter extends Layouter {
    cssClass = '.my-css-class';
    constructor(public areaDesc:LayoutToken[]) { 
        super(areaDesc); 
    }
    
    protected getStyles(components:Array<Vnode|Layout>):string {
        components.map((c:Layout|Vnode, i:number) => {
            c.style = `width:auto; height:auto;
        });   
        return this.cssClass;
   }
}

Layouter.register('MyLayouter', MyLayouter);
</code>
 */
export abstract class Layouter {
    /**
     * statis list of available styles. The key for each entry is the keyword that triggers the style,
     * and the value is a constructor for that style
     */
    static layoutStyles:{string?: Layouter} = {};

        /**
     * Translates `string` params to {@link hsLayout:Tokens.LayoutToken LayoutTokens}.
     * The `params` are expected to either
     * - end in 'px'
     * - end in '%'
     * - be equal to 'fill' (case insensitive)
     * @param params an Array of strings that will be converted to an array of LayourTokens.
     * 
     */
    private static translate(params:Array<string|any>):Array<LayoutToken> {
        if (params.length === 0) { params.push(''); }   //  [] --> ['']
        return params.map((param:string|any) => {
            if (typeof param === 'string') {
                if (param.endsWith('px')) { return px(parseInt(param)); }
                if (param.endsWith('%')) { return pc(parseInt(param)); }
                if (param.toLowerCase()==='fill') { return FILL;}
            } else {
                return param;
            }
        });
    }

    /**
     * Register a new Layouter style with corresponding configuration keyword.
     * Example:```
     * class ColumnsLayout extends Layouter {...}
     * Layouter.register('Column', Columns);
     * ```
     * @param keyword the keyword used in the attributes to `this.layout`
     * @param style the `Layouter` implementation to instantiate when encountering `keyword` 
     */
    public static register(keyword:string, style:typeof Layouter) {
//        console.log(`registering ${keyword} layout`);
        Layouter.layoutStyles[keyword] = style;
    }

    /**
     * Lays out the `components` according to the configuration in `attrs`.
     * The method will search for a registered layout key in `attrs`, then construct the `Layouter` associated with the key
     * with the parameters for the key, and call the `getStyles` method on the style with the provided `components`.
     * @param attrs an object literal, typically provided as middle attributes object in the m(css, {}, '') call.
     * @param components 
     * @return returns the css class that the `getStyles` function returns.
     */
    public static createLayout(attrs:any, components:Array<Vnode>):string {
        let css = '';
        Object.keys(Layouter.layoutStyles).some(key => { // executes the first match key in attrs.
            if (attrs[key]) { 
                css = new Layouter.layoutStyles[key](Layouter.translate(attrs[key])).getStyles(components); 
                attrs[key] = undefined;
                return true;
            }
            return false;
        });
        return css;
    }


    spacing = 0;   
    
    /**
     * Layouter Constructor, will be called by the static `createLayout` method when creating the layout on a {@link hsLayout:Layout.Layout `Layout`}.
     * The `areaDesc` parameter is expected to be of the form {<keyword>: {@link hsLayout:Tokens.LayoutToken `LayoutToken`}[]}} 
     * and will be passed through form the `Layout` requesting the layout.
     * @param areaDesc 
     */
    constructor(public areaDesc:LayoutToken[]) {};

    /**
     * Calculates the style attributes required for each component in `Components`.
     * These attributes are saved in a `style` field on the component itself. 
     * During rendering these `style` attributes are copied to the `node.attrs.styles` field.
     * ### Example
    <code>protected getStyles(components:Array<Vnode|Layout>):string {
        components.map((c:Layout|Vnode, i:number) => {
            c.style = `width:auto; height:auto;
        });   
        return this.cssClass;
    }
    </code>
     * @param components 
     */
    protected abstract getStyles(components:Array<Vnode|Layout>):string;
}

