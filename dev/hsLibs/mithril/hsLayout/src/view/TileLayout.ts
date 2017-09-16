/**
Lays out components in tiles
Use 
- `{tiles: [attributes]}`

to invoke this layout.

### Example
<code>
    {tiles: ["20%]}   // --> tiles will all have 20% of available height and width 
</code>
 * <example>
 * <file name='script.js'>
 * let c = [1,2,3,4,5];
 * 
 * m.mount(root, { 
 *     view:() => m(layout.Container, {
 *         tiles:[], 
 *         content: c.map((c,i)=>(''+i)),
 *         css: '.myExample'
 *     })
 * });
 *
 * function next() {
 *     if (c.length >= 9) { c = []; }
 *     else { c.push(''); }
 *     setTimeout(next, 2000);
 *     m.redraw();
 * }
 * //next();
 * </file>
 * <file name='style.css'>
 * .myExample .hs-layout { 
 *     border: 1px solid white;
 *     background-color: #ccc;
 *     color:       #a44; 
 *     text-align:  center;
 * }
 * </file>
 * </example>

## Attributes
The following values **v** are valid entries in The Attributes array:
- **px(n)** or **"_n_ px"** -- a fixed number of pixels 
- **pc(n)** or **"_n_ %"**  -- a fixed percentage of available space
- **FILL** or **"fill"**   -- a special constant to indicate - may appear only once per array.

The following options are supported for the Attributes array:
- **[ ]**: An empty array; The available tiles will cover the entire width and height. 
    Their size will adapt as tiles are added.
- **[FILL]**: like [ ], except the last tile fills the available space. 
- **[v]**: All components have the specified width and height (in px or %) and will fill the available space from the left,
    leaving any remaining unused space on the right. 
- **[w, h]**: All components have the specified width w and height h (in px or %) and will fill the available space from the left,
    leaving any remaining unused space on the right. 
- **[v, FILL]**: like [v], except that the last tile in each row will fill the remaining available width 
    and the tiles in the bottom row will fill the remaining height
- **[w, h, FILL]**: like [w, h], except that the last tile will fill the remaining available width. 
 */
/** */
import { Container }    from './Container';
import { Layout }       from './Layout';
import { LayoutToken, FillToken, DefinedToken, PixelToken }    from './Tokens';
import { Vnode}         from '../../../mithril';

type descriptor = {top:string, left:string, right:string, bottom:string, width:string, height:string};

/**
 */
class Tiles extends Layout {
    cssClass:string;
    unit: any;

    /**
     * Constructs a Pillared layout (rows or columns)
     * @param params Style params for either rows or columns layout
     * @param areaDesc Description of the requested layout 
     */
    constructor(public areaDesc:LayoutToken[]) { 
        super(areaDesc); 
        // if any of the dimensions are in px, use the pixel method; else use the percent method
        // get unitPixel if any area is PixelToken           
        this.unit = areaDesc.some((area:LayoutToken) => (area instanceof PixelToken))? 
            this.unitPixel : this.unitPercent;           
    };

    private unitPercent(num:number) {
        const desc = this.areaDesc;
        const fill = this.areaDesc.some(a => (a instanceof FillToken));
        const root = Math.sqrt(num);
        const rows = Math.round(root);
        let   cols = Math.floor(root);
        if (root > cols) { cols++; }
        let width  = (desc[0] instanceof DefinedToken)? desc[0].getSize() : undefined;
        let height = (desc[1] instanceof DefinedToken)? desc[1].getSize() : width;

        width  = width  || 100/cols;
        height = height || 100/rows;
        let left = 0;
        let top  = 0;


        let styles = [...Array(num).keys()].map(i => { 
            let r = 'auto';    let w = width+'%'; 
            let b = 'auot';    let h = height+'%';
            if ((left + 2*width) > 100 && fill) { r = '0%'; w = 'auto'; }
            if ((top + 2*height) > 100 && fill) { b = '0%'; h = 'auto'; }
            const style = `
                top: ${Math.floor(top)}%; bottom:${b};
                left: ${left}%;           right:${r};
                width: ${w};              height: ${h};
            `;
            if (Math.round(left += width) > 100-Math.floor(width)) { left = 0; top += height; }
            return style;
         });
        return styles;    // reverse a second time for original sequence.
    };

    private unitPixel(num:number) { // pattern: [px, px, FILL]
    };
    
    /**
     * Calculates the style attributes required for each component in `Components`.
     * These attributes are saved in a `styles` field on the component itself. 
     * During rendering these `styles` attributes are copied to the `node.attrs.styles` field.
     * @param components 
     */
    protected getStyles(components:Array<Vnode|Container>):string  { 
        let styles = this.unit(components.length);
        components.map((c:Container|Vnode, i:number) => {
            c.style = styles[i];
        });   
        return '.hs-tile-layout';
    };
};


Layout.register('tiles', Tiles);
