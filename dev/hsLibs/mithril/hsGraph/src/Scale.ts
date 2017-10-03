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
import { Config } from './Graph';

export interface XYScale { x: Scale; y:Scale; }

export interface ScaleStruct {
    domain?: [number, number];
    range?:  [number, number];
    scale?:  Symbol;            // Scale.linear | log | date | index | percent | ordinal | nominal
}

/**
 * Defines configurable settings and CSS style classes.
 */
export interface ScaleSet {
    primary:   { x: ScaleStruct, y: ScaleStruct };
    secondary: { x: ScaleStruct, y: ScaleStruct };
}

/** calculates major tick mark domain values */
function createMajorTickMarks(dom: number[], numTicks:number, scale:Symbol):number[] {
    const ticks:number[] = [];
    switch(scale) {
        case Scale.log:     break;
        case Scale.date:    break;
        case Scale.percent: break;
        case Scale.index:   break;
        case Scale.ordinal: break; 
        case Scale.nominal: break;
        case Scale.linear:
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
function createMinorTickMarks(dom: number[], numTicks:number, scale:Symbol):number[] {
    const ticks:number[] = [];
    switch(scale) {
        case Scale.log:     break;
        case Scale.date:    break;
        case Scale.percent: break;
        case Scale.index:   break;
        case Scale.ordinal: break; 
        case Scale.nominal: break;
        case Scale.linear:
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
    static linear   = Symbol('linear scale');
    static log      = Symbol('log scale');
    static date     = Symbol('date scale');
    static index    = Symbol('index scale');
    static percent  = Symbol('percent scale');
    static ordinal  = Symbol('ordinal scale');
    static nominal  = Symbol('nominal scale');
    
    /** Defines default values for all configurable parameters */
    static config(config:Config) {
        config.scale = <ScaleSet>{
            primary: {
                x: <ScaleStruct>{ domain: [0, 1], range: [0, 1], scale: Scale.linear },
                y: <ScaleStruct>{ domain: [0, 1], range: [0, 1], scale: Scale.linear }
            },
            secondary: {
                x: <ScaleStruct>{ domain: [0, 1], range: [0, 1], scale: Scale.linear },
                y: <ScaleStruct>{ domain: [0, 1], range: [0, 1], scale: Scale.linear }
            }
        };
    }
    
    constructor(private cfg:ScaleStruct) { }
    
    get range():[number, number]     { return this.cfg.range; }
    set range(r:[number, number])    { this.cfg.range = r; }
    get domain():[number, number]    { return this.cfg.domain; }
    set domain(dom:[number, number]) { this.cfg.domain = dom; }

    /**
     * Calculates major and minor tick marks in domain coordinates
     * @return { major: number[], minor: number[] }
     */
    ticks(numTicks:number=4):{ major: number[], minor: number[] }   { 
        const majorTicks = createMajorTickMarks(this.domain, numTicks, this.cfg.scale);
        const minorTicks = createMinorTickMarks(this.domain, numTicks, this.cfg.scale);
        return { major: majorTicks, minor: minorTicks };
    }
    
    /** converts a domain value to a range value */
    convert(domVal:number):number { 
        const dom = this.domain;
        const range = this.range;
        return (domVal- dom[0]) / (dom[1] - dom[0]) * (range[1] - range[0]) + range[0];
    }
}
