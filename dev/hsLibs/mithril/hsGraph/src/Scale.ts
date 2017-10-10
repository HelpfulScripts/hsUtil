/**
 * # Scale
 * provides scaling functionality for an axis.
 */

/** */
export interface XYScale { x: Scale; y:Scale; }

export interface Scales {
    primary:   XYScale;
    secondary: XYScale;
}

export interface DomainCfg {
    [0]: string|number;
    [1]: string|number;
}

export interface ScaleCfg {
    /** scale type: 'linear'|'log'|'date'|'index'|'percent'|'ordinal'|'nominal' */
    type: symbol;

    /** scale domain: 'auto' or numeric domain value */
    domain: DomainCfg;
}


/** calculates major tick mark domain values */
function createTickMarks(cfg:ScaleCfg, numTicks:number, masjor:boolean):number[] {
    const dom = [<number>cfg.domain[0], <number>cfg.domain[1]];
    const ticks:number[] = [];
    switch(cfg.type) {
        case Scale.type.log:     break;
        case Scale.type.date:    break;
        case Scale.type.percent: break;
        case Scale.type.index:   break;
        case Scale.type.ordinal: break; 
        case Scale.type.nominal: break;
        case Scale.type.linear:
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
    /**
     * Defines available axis scale types:
     * - linear
     * - log
     * - date
     * - index
     * - percent
     * - ordinal
     * - nominal
     */
    static type = {
        linear:         Symbol('linear axis'),
        log:            Symbol('log axis'),
        date:           Symbol('date axis'),
        index:          Symbol('index axis'),
        percent:        Symbol('percent axis'),
        ordinal:        Symbol('ordinal axis'),
        nominal:        Symbol('nominal axis'),
    };
    
    /** Defines default values for all configurable parameters */
    private typeVal   = Scale.type.linear;
    private rangeVal:[number, number]   = [0,1];
    private domVal:[number, number]     = [0,1];
    private domMinAuto  = false; 
    private domMaxAuto  = false; 

    constructor(private cfg:ScaleCfg) { 
        this.scaleType(cfg.type);
        this.domain(cfg.domain);
    }

    range(r?:[number, number]):[number, number]   { 
        if (r) { this.rangeVal = r; }
        return this.rangeVal;
    }
    domain(dom?:DomainCfg):[number, number] { 
        if (dom) {
            this.domVal[0] = (dom[0] === 'auto')? 0 : <number>dom[0]; 
            this.domVal[1] = (dom[1] === 'auto')? 1 : <number>dom[1]; 
            this.domMinAuto = (dom[0] === 'auto');
            this.domMaxAuto = (dom[1] === 'auto');
        }
        return this.domVal;
    }
    scaleType(s?:symbol):symbol { 
        if (s) { this.typeVal = s; }
        return this.typeVal;
    }

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
        const cfg:ScaleCfg = { type: this.scaleType(), domain:this.domain()};
        const majorTicks = createTickMarks(cfg, numTicks, true);
        const minorTicks = createTickMarks(cfg, numTicks, false);
        return { major: majorTicks, minor: minorTicks };
    }
    
    /** converts a domain value to a range value */
    convert(domVal:number):number { 
        const log = Math.log;
        const dom = this.domain();
        const log0 = log(dom[0]);
        const log1 = log(dom[1]);
        const range = this.range();
        switch(this.scaleType()) {
            case Scale.type.log: return (log(domVal)- log0) / (log1 - log0) * (range[1] - range[0]) + range[0];
            case Scale.type.date:    break;
            case Scale.type.percent: break;
            case Scale.type.index:   break;
            case Scale.type.ordinal: break; 
            case Scale.type.nominal: break;
            case Scale.type.linear:
            default:
                return (domVal- dom[0]) / (dom[1] - dom[0]) * (range[1] - range[0]) + range[0];
        }
    }
}
