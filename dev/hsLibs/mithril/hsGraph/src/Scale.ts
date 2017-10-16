/**
 * # Scale
 * provides scaling functionality for an axis.
 */

/** */ 
import { Range }    from './Data';

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
    /** scale type: {@link Scale.Scale.type Scale.type}.linear | log | date | index | percent | ordinal | nominal */
    type: string;

    /** scale domain: 'auto' or numeric domain value */
    domain: DomainCfg;
}

export interface TicksCfg {
    major: number[];
    minor: number[];
}

function addTick(t:number[], v:number) { t.push((Math.round(v*1000000)/1000000)); }

function linScaleTickMarks(dom:Range, ticks:TicksCfg, numTicks:number) {
    let d = (dom[1] - dom[0]) / numTicks;   // major ticks
    let exp = Math.pow(10, Math.floor(Math.log10(d)));
    d = Math.floor(d / exp)*exp;
    let dd = d / numTicks;                  // minor ticks
    exp = Math.pow(10, Math.floor(Math.log10(dd)));
    dd = Math.floor(dd / exp)*exp;
    for (let i=0; i*dd<d; i++) {
        for (let v=Math.floor(dom[0]/d)*d; v+i*dd<=dom[1]; v+=d) {
            if (v+i*dd >= dom[0]) {
                addTick((i===0)? ticks.major : ticks.minor, v+i*dd);
            }
        }
    }
}

function logScaleTickMarks(dom:Range, ticks:TicksCfg) {
    let min = Math.pow(10, (dom[1]/dom[0] > 10)? 
                    Math.floor(Math.log10(dom[0])) :
                    Math.log10(dom[0]));
    for (let i=1; i<10; i++) {
        for (let v = min; v*i<=dom[1]; v*=10) {
            if (v*i >= dom[0]) {
                addTick((i===1)? ticks.major : ticks.minor, v*i);
            }
        }
    }
}

function dateScaleTickMarks(dom:Range, ticks:TicksCfg) {
    
}

/** calculates major tick mark domain values */
function createTickMarks(type:string, domain:DomainCfg, numTicks:number):TicksCfg {
    const sort = (a:number,b:number) => b-a;
    const dom:Range = [<number>domain[0], <number>domain[1]];
    const ticks:TicksCfg = {major:[], minor:[]};
    switch(type) {
        case Scale.type.log:     logScaleTickMarks(dom, ticks); break;
        case Scale.type.date:    dateScaleTickMarks(dom, ticks); break;
        case Scale.type.percent: break;
        case Scale.type.index:   break;
        case Scale.type.ordinal: break; 
        case Scale.type.nominal: break;
        case Scale.type.linear:
        default:                 linScaleTickMarks(dom, ticks, numTicks);
    }
    ticks.minor.sort(sort);
    ticks.major.sort(sort);
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
        linear:     'linear axis',
        log:        'log axis',
        date:       'date axis',
        index:      'index axis',
        percent:    'percent axis',
        ordinal:    'ordinal axis',
        nominal:    'nominal axis'
    };
    
    /** Defines default values for all configurable parameters */
    private typeVal:string  = Scale.type.linear;
    private rangeVal:Range  = [0,1];
    private domVal:Range    = [0,1];
    private domMinAuto      = false; 
    private domMaxAuto      = false; 

    constructor(private cfg:ScaleCfg) { 
        this.scaleType(cfg.type);
        this.domain(cfg.domain);
    }

    private checkDomForScale() {
        switch(this.typeVal) {
            case Scale.type.log:
                if (this.domVal[1] <= 0) { this.domVal[1] = 10; }
                if (this.domVal[0] <= 0) { this.domVal[0] = this.domVal[1]/1000; }
                break;
        }
    }

    public range(r?:Range):Range   { 
        if (r) { 
            this.rangeVal = r; 
        }
        return this.rangeVal;
    }
    public domain(dom?:DomainCfg):Range { 
        if (dom) {
            if (this.scaleType() === Scale.type.date) {
                if (typeof dom[0] === 'string'|| typeof dom[1] === 'string') {
                    this.domVal[0] = (dom[0] === 'auto')? 0 : Date.parse(<string>dom[0]); 
                    this.domVal[1] = (dom[1] === 'auto')? 1 : Date.parse(<string>dom[1]); 
                }
            } else {
                    this.domVal[0] = (dom[0] === 'auto')? 0 : <number>dom[0]; 
                    this.domVal[1] = (dom[1] === 'auto')? 1 : <number>dom[1]; 
            }
            this.domMinAuto = (dom[0] === 'auto');
            this.domMaxAuto = (dom[1] === 'auto');
        }
        this.checkDomForScale();
        return this.domVal;
    }
    public scaleType(s?:string):string {
        if (s) { 
            this.typeVal = s; 
        }
        return this.typeVal;
    }

    /**
     * If a `domain` limit is set to `auto`, calling this function tells the scale
     * what the values of the min or max of the data set in the `domain` range are. 
     * `setAutoDomain` is typically called by {@link Series.Series.adjustDomains Series.adjustDomains} 
     * and receives a generator that passes through the data.
     */
    public setAutoDomain(dom:Range) {
        if (this.domMinAuto) { this.domVal[0] = dom[0]; }
        if (this.domMaxAuto) { this.domVal[1] = dom[1]; }
    }

    /**
     * Calculates major and minor tick marks in domain coordinates
     */
    public ticks(numTicks:number=4):TicksCfg   { 
        return createTickMarks(this.scaleType(), this.domain(), numTicks);
    }
    
    /** converts a domain value to a range value */
    convert(domVal:number):number { 
        const dom = this.domain();
        const range = this.range();
        let result;
        switch(this.scaleType()) {
            case Scale.type.log: 
                result = Math.log(domVal/dom[0]) / Math.log(dom[1]/dom[0]) * (range[1] - range[0]) + range[0];
                break;
            case Scale.type.nominal: break;
            case Scale.type.date:    
            case Scale.type.percent: 
            case Scale.type.index:   
            case Scale.type.ordinal:  
            case Scale.type.linear:
            default:
                result = (domVal- dom[0]) / (dom[1] - dom[0]) * (range[1] - range[0]) + range[0];
        }
        return result;
    }
}
