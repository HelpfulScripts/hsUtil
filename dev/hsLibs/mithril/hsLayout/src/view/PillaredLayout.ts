import { Container }    from './Container';
import { Layout }       from './Layout';
import { LayoutToken, DefinedToken, PixelToken }    from './Tokens';
import { Vnode}         from '../../../mithril';

/**
 * PillardLayout. Provides functionality to create row- and column-pillar layouts.
 */

/**
 * interface definition for entries in `cParams`
 */
interface PillarParams {
    cssClass: string;
    fields: string[];
}

/**
 * array of trigger keywords for column and row layout styles
 */
export const PillarLayouts = [
    'columns', 'rows'
];

/**
 * contains style settings for the row and column layout
 */
const cParams = {
    columns: <PillarParams>{
        cssClass: '.hs-column-layout',
        fields: ['top', 'bottom', 'left', 'right', 'height', 'width']
    },
    rows: <PillarParams>{
        cssClass: '.hs-row-layout',
        fields: ['left', 'right', 'top', 'bottom', 'width', 'height']
    }
};

type descriptor = {size:number, code:string, fields:{}};

/**
Lays its components out in pillars, i.e. either {@link hsLayout:PillaredLayout.Columns columns}
or {@link hsLayout:PillaredLayout.Rows rows}
Use `{rows: [attributes]}` or `{columns: [attributes]}` to invoke this layout.
[Examples]("/example/layout.html")
### Example
<code>
    {rows: [px(200), FILL]} // --> top row has height 200px, all other rows evenly share remaining space 
</code>

## Attributes
The following values **v** are valid entries in The Attributes array:
- **px(n)** -- a fixed number of pixels 
- **pc(n)** -- a fixed percentage of available space
- **FILL**  -- a special constant to indicate - may appear only once per array.

The following options are supported for the Attributes array:
- **[ ]**: An empty array; all components will be evenly spaced across the available width. 
- **[v]**: All components have the specified width (in px or %) and will fill the available space from the left,
    leaving any remaining unused space on the right. 
- **[v1, v2]**: All components have the specified widths (in px or %) and will fill the available space from the left,
    leaving any remaining unused space on the right. If there are more components than widths, the right-most width
    will be used for the reminaing widgets.
- **[v, FILL]**: Sets the first (left) widget to a width of `v`.<br>
    if `v` is specified in %, the remaining n-1 components will have equal relative widths of `(100-v)/(n-1)%`<br>
    if `v` is specified in px, the remaining n-1 components will have their right borders at location `i*100/n%`, with i=1...n.
- **[FILL, v]**: Sets the last (right) widget to a width of `v`.<br>
    if `v` is specified in %, the remaining n-1 components will have equal relative widths of `(100-v)/(n-1)%`<br>
    if `v` is specified in px, the remaining n-1 components will have their left borders at location `i*100/n%`, with i=0...n-1.
- **[va, FILL, vb]**: Sets the first and last widget to a width of `va`/`vb`.<br>
    Both have to be specified either in px or in %.<br>
    if the unit is %, the remaining n-2 components will have equal relative widths of `(100-vb-va)/(n-2)%`<br>
    if the unit is px, the remaining n-2 components will have their left/right borders at location `i*100/n%`.
- **[v1, v2, FILL, v3, v4]**: multiple widths can be specified in uninterrupted sequence both from the left and the right. 
 */
class Pillars extends Layout{
    firstFixed: number; // number of DefinedToken entries at the beginning
    lastFixed:  number; // number of DefinedToken entries at the end
    unit:(num:number)=>descriptor[];
    fields: string[];
    cssClass:string;

    /**
     * Constructs a Pillared layout (rows or columns)
     * @param params Style params for either rows or columns layout
     * @param areaDesc Description of the requested layout 
     */
    constructor(params:PillarParams, public areaDesc:LayoutToken[]) { 
        super(areaDesc); 
        this.fields = params.fields;
        this.cssClass = params.cssClass;

        let n = areaDesc.length-1;
        let first = 0;
        let last  = 0;        
        // if any of the dimensions are in px, use the pixel method; else use the percent method
        // get index of first and last undefined area, if any            
        this.unit = areaDesc.some((area:LayoutToken) => (area instanceof PixelToken))? this.unitPixel : this.unitPercent;   // true if any area is PixelToken
        
        // determine first = number of consecutive fixed fields at start
        areaDesc.some((area:LayoutToken, i:number) => ((areaDesc[i]   instanceof DefinedToken)? ++first<0 : true));         

        // determine last  = number of consecutive fixed fields at end
        areaDesc.some((area:LayoutToken, i:number) => ((areaDesc[n-i] instanceof DefinedToken)? ++last<0  : true));         

        this.firstFixed = first;
        this.lastFixed  = Math.min(last, areaDesc.length-first);
    };

    // num: number of areas to layout
    /**
     * Creates an iterable list of size descriptors, one for each area to be layed out.
     * Each descriptor 
     * @param num the number pof areas to be layed out
     * @return Iterable list of size descriptors, one for each area to be layed out
     */
    private getSizes(num:number):descriptor[] {
        const first = this.firstFixed;
        const last  = this.lastFixed;
        const desc  = this.areaDesc;
        const len = desc.length;
        function getSize(i:number):descriptor {
            let size:number = null;
            let t = null;
            if (i > num-1-last)  { size = desc[len - (num-i)].getSize(); t = 'end'; }       // end sequence
            else if (i < first)  { size = desc[i].getSize(); t = 'start'; }                 // start sequence
            else if (len>0 && len===first){ size = desc[len-1].getSize(); t = 'start'; }    // all items 
if (desc.length === 1) {  
console.log(`${i} of ${num}: size=${size}, t=${t}`);      
}
            return {size:size, code:t, fields:{}};
        } 
if (desc.length === 1) {        
console.log('---------');
console.log(desc);
console.log(`first=${first}, last=${last}`);
}
        return [...Array(num).keys()].map(getSize);
    }

    private unitPercent(num:number):descriptor[] {
        let f = this.fields;
        let max = 100.0;
        let defDim = max / num;      // divvy up remaining space
        let styles:descriptor[] = this.getSizes(num);

        styles.forEach(style => { if (style.size) { max = max - style.size; num--; } });

        function pass(styles:descriptor[], ix0:number, ix1:number, breakCond:(cond:string)=>boolean) {
            let sumDim = 0;
            styles.some(style => { // stop when breakCond is met
                let size = style.size || defDim;
                if (breakCond(style.code)) { return true; }
                style.fields[f[ix0]] = sumDim+'%';
                sumDim += size;
                style.fields[f[ix1]] = (100-sumDim)+'%'; 
                style.fields[f[5]] = 'auto';
                return false;
            });
        }

        pass(styles, 2, 3, (e:string) => e==='end');              // forward pass
        pass(styles.reverse(), 3, 2, (e:string) => e!=='end');    // backward pass
        return styles.reverse();    // reverse a second time for original sequence.
    };

    private unitPixel(num:number):descriptor[] { // pattern: [px, px, FILL , px, px]
        let styles:descriptor[] = this.getSizes(num);
        let f = this.fields;
       
        let defDim = 100.0/num;          // used for unspecified widths

        // work forwards through the heights
        let sumDim = 0;
        styles.some((style, i) => {
            if (style.code==='start') {   // so far, all heights explicitly set as px
                style.fields[f[2]] = sumDim +'px';
                sumDim += style.size + (this.spacing || 0) + (this.spacing || 0);
                style.fields[f[3]] = 'auto';
                style.fields[f[5]] = style.size +'px';
            } else if (style.code === null) {
                style.fields[f[2]] = (sumDim>0)? (sumDim +'px') : (i*defDim + '%');
                sumDim = -1;
                style.fields[f[3]] = (100-(i+1)*defDim) + '%';
                style.fields[f[5]] = 'auto';
            } else if (style.code==='end') { return true; }
            return false;
        });
        
        // work backwards through the heights
        sumDim = 0;
        styles.slice().reverse().some((style, i) => {
            style.fields[f[3]] = sumDim + 'px';
            if (style.code === 'end') { 
                sumDim += style.size + (this.spacing || 0) + (this.spacing || 0);
                style.fields[f[2]] = 'auto';
                style.fields[f[5]] = style.size+'px';
            } else {
                if (sumDim>0 && style.code !== 'start') {
                    style.fields[f[5]] = 'auto';
                }
                return true; 
            } 
            return false;
        });  
        return styles;
    };
    
    /**
     * Calculates the style attributes required for each component in `Components`.
     * These attributes are saved in a `styles` field on the component itself. 
     * During rendering these `styles` attributes are copied to the `node.attrs.styles` field.
     * @param components 
     */
    protected getStyles(components:Array<Vnode|Container>):string  { 
        let f = this.fields;
        let styles:descriptor[] = this.unit(components.length);
        components.map((c:Container|Vnode, i:number) => {
            c.style = `${f[0]}:0%; ${f[1]}:0%; `;
            Object.keys(styles[i].fields).forEach((st:string) => { c.style += `${st}: ${styles[i].fields[st]};`; });
        });   
        return this.cssClass;
    };
};

/**
 * constructs a columns pillar layout style.
 */
class Columns extends Pillars {
    constructor(public areaDesc:LayoutToken[]) { super(cParams[PillarLayouts[0]], areaDesc);  };
};

/**
 * constructs a rows pillar layout style.
 */
class Rows extends Pillars {
    constructor(public areaDesc:LayoutToken[]) { super(cParams[PillarLayouts[1]], areaDesc);  };
};

Layout.register(PillarLayouts[0], Columns);
Layout.register(PillarLayouts[1],    Rows);
