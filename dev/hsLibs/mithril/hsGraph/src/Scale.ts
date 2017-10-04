/**
 * # Scale
 * provides scaling functionality for an axis.
 * ### Configurations and Defaults
 * ```
 *  title:  {           // the chart title
 *  }
 * ```
 * ### Style classes
 * ```
 * styleClasses: {
 *  }
 * ```
 */

/** */
import { ScaleCfg } from './Axes';

export interface XYScale { x: Scale; y:Scale; }

export interface DomainDef {
    [0]: number|string;
    [1]: number|string;
}

export interface ScaleStruct {
    domain?: [number, number];
    range?:  [number, number];
    scale?:  string;            // Scale.linear | log | date | index | percent | ordinal | nominal
}

/**
 * Defines configurable settings and CSS style classes.
 */
export interface ScaleSet {
    primary:   { x: ScaleStruct, y: ScaleStruct };
    secondary: { x: ScaleStruct, y: ScaleStruct };
}

/** calculates major tick mark domain values */
function createMajorTickMarks(dom: [number, number], numTicks:number, scale:string):number[] {
    const ticks:number[] = [];
    switch(scale) {
        case 'log':     break;
        case 'date':    break;
        case 'percent': break;
        case 'index':   break;
        case 'ordinal': break; 
        case 'nominal': break;
        case 'linear':
        default:
            let d = (dom[1] - dom[0]) / numTicks;
            let exp = Math.pow(10, Math.floor(Math.log10(d)));
            d = Math.floor(d / exp)*exp;
            for (let v = Math.floor(dom[0] / (d*exp)); v<=dom[1]; v+=d) {
                if (v>=dom[0]) { ticks.push((Math.round(v*1000000)/1000000)); }
            }
    }
    return ticks;
}

/** calculates minor tick mark domain values */
function createMinorTickMarks(dom:[number, number], numTicks:number, scale:string):number[] {
    const ticks:number[] = [];
    switch(scale) {
        case 'log':     break;
        case 'date':    break;
        case 'percent': break;
        case 'index':   break;
        case 'ordinal': break; 
        case 'nominal': break;
        case 'linear':
        default:
            let d = (dom[1] - dom[0]) / numTicks;
            let exp = Math.pow(10, Math.floor(Math.log10(d)));
            d = Math.floor(d / exp)*exp;
            for (let v = Math.floor(dom[0] / (d*exp)); v<=dom[1]; v+=d) {
                if (v>=dom[0]) { ticks.push((Math.round(v*1000000)/1000000)); }
            }
    }
    return ticks;
}


/**
 * translates a domain into a range
 */
export class Scale {
    /** Defines default values for all configurable parameters */
/*
    static config(config:Config) {
        config.scale = <ScaleSet>{
            primary: {
                x: <ScaleStruct>{ domain: [0, 1], range: [0, 1], scale: 'linear' },
                y: <ScaleStruct>{ domain: [0, 1], range: [0, 1], scale: 'linear' }
            },
            secondary: {
                x: <ScaleStruct>{ domain: [0, 1], range: [0, 1], scale: 'linear' },
                y: <ScaleStruct>{ domain: [0, 1], range: [0, 1], scale: 'linear' }
            }
        };
    }
*/
    scaleType   = 'linear';
    rangeVal:[number, number]   = [0,1];
    domVal:[number, number]     = [0,1];
    domMinAuto  = false; 
    domMaxAuto  = false; 

    constructor(private cfg:ScaleCfg) { 
        this.scaleType = cfg.type;
        this.domain(cfg.domain);
    }

    range(r?:[number, number]):[number, number]   { 
        if (r) { this.rangeVal = r; }
        return this.rangeVal;
    }
    domain(dom?:[number|string, number|string]):[number, number] { 
        if (dom) {
            this.domVal[0] = (dom[0] === 'auto')? 0 : <number>dom[0]; 
            this.domVal[1] = (dom[1] === 'auto')? 1 : <number>dom[1]; 
            this.domMinAuto = (dom[0] === 'auto');
            this.domMaxAuto = (dom[1] === 'auto');
        }
        return this.domVal;
    }
    get scale(): string             { return this.scaleType; }
    set scale(s:string)             { this.scaleType = s; }

    /**
     * If a `domain` limit is set to `auto`, this function sets the 
     * `domain` range to the min or max of the data set.
     * Called after a pass through the data.
     */
    setAutoDomain(min:number, max:number) {
        if (this.domMinAuto) { this.domVal[0] = min; }
        if (this.domMaxAuto) { this.domVal[1] = max; }
    }

    /**
     * Calculates major and minor tick marks in domain coordinates
     * @return { major: number[], minor: number[] }
     */
    ticks(numTicks:number=4):{ major: number[], minor: number[] }   { 
        const majorTicks = createMajorTickMarks(this.domain(), numTicks, this.scaleType);
        const minorTicks = createMinorTickMarks(this.domain(), numTicks, this.scaleType);
        return { major: majorTicks, minor: minorTicks };
    }
    
    /** converts a domain value to a range value */
    convert(domVal:number):number { 
        const dom = this.domain();
        const range = this.range();
        const rangeVal = (domVal- dom[0]) / (dom[1] - dom[0]) * (range[1] - range[0]) + range[0];
        return rangeVal;
    }
}
