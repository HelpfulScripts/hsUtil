/**
 * # Scale
 * provides scaling functionality for an axis.
 */

/** */ 
import { Domain, NumRange } from './Data';
import { hsDate }           from 'hsutil';

export interface XYScale { x: Scale; y:Scale; }

export interface Scales {
    primary:   XYScale;
    secondary: XYScale;
}

/**
 * Configures the domain boundaries `[min, max]` to be displayed.
 * For ordinal values these are the numeric min and max values of the domain,
 * or the special values 
 * - `auto`: determines the domain automatically from the data. Boundaries are set 'loosely' 
 *   so that the major tick mark below and above the data range are displayed as well.
 * - `tight`: same as `auto`, except the domain covers exactly the values contained in data. 
 * Both values can be set indepoendently for `min` and `max`
 */
export interface DomainCfg {
    [0]: string|number;
    [1]: string|number;
}

export interface ScaleCfg {
    /** scale type: {@link Scale.Scale.type Scale.type}.`linear` | `log` | `date` | `index` | `percent` | `ordinal` | `nominal` */
    type: string;

    /** scale domain: `auto`, `tight` or numeric domain value */
    domain: DomainCfg;
}

export interface TicksCfg {
    major: TickType[];
    minor: TickType[];
}

export interface TickType {
    pos?:   number;    // domain value, at which to print tick mark, or undefined for nominal types
    label?: string;    // string to print at pos, or category name for nominal types
}

function addTickNumber(t:TickType[], v:number) { 
    t.push({ pos: v, label: ''+Math.round(v*1000000)/1000000 }); 
}

function addTickDate(t:TickType[], v:Date, fmt:string) { 
    t.push({ pos: v.getTime(), label:hsDate(fmt, v) }); 
}

/** calculate major and minor ticks on a lionear scale. The first and last tick will be smaller and larger than the provided domain. */
function linScaleTickMarks(dom:NumRange, ticks:TicksCfg, numTicks:number) {
    function addTicks(unit:number, ticks:TickType[]):number {
        let exp = Math.pow(10, Math.floor(Math.log10(unit)));
        unit = Math.floor(unit / exp)*exp;
        const min = Math.floor(dom[0]/unit)*unit;
        const max = Math.ceil(dom[1]/unit)*unit;
        for (let v=min; v<=max; v+=unit) { addTickNumber(ticks, v); }
        return unit;
    }
    const majorUnit = addTicks((dom[1] - dom[0]) / numTicks, ticks.major);
    addTicks(majorUnit / numTicks, ticks.minor);
}

function percentScaleTickMarks(dom:NumRange, ticks:TicksCfg, numTicks:number) {
    const formatPercent = (m:TickType) => m.label = `${Math.round(m.pos)*100}%`;
    linScaleTickMarks(dom, ticks, numTicks);
    ticks.major.forEach(formatPercent);
    ticks.minor.forEach(formatPercent);
}

function logScaleTickMarks(dom:NumRange, ticks:TicksCfg) {
    let min = Math.pow(10, Math.floor(Math.log10(dom[0])));
    let max = Math.pow(10, Math.ceil(Math.log10(dom[1])));
    for (let i=1; i<10; i++) {
        for (let v = min; v*i<=max; v*=10) {
            addTickNumber((i===1)? ticks.major : ticks.minor, v*i);
        }
    }
}

const DAY = 1000*60*60*24;
const tickCategories = [
    [10,0,0], [1,0,0], [0,3,0], [0,1,0], [0,0,7], [0,0,1]
];

function dateScaleTickMarks(dom:Domain, ticks:TicksCfg, fmt='%MM/%DD/%YY') {
    function addDates(i:number, ticks:TickType[]) {
        const createDate = (idx:number) => new Date(
            Math.floor(dateDom[idx].getFullYear()/modYr)*modYr + (idx?incYr:0),
            (incYr > 0)? 0 : Math.floor(dateDom[idx].getMonth()/modMo)*modMo + (idx?incMo:0),
            (incMo > 0)? 1 : (dateDom[idx].getDate()- ((incDay === 7)? dateDom[idx].getDay() : 0)) + (idx?incDay:0)
        );
        const incYr  = tickCategories[i][0]; 
        const incMo  = tickCategories[i][1]; 
        const incDay = tickCategories[i][2];
        const modYr  = incYr || 1;
        const modMo  = incMo || 1;
        const date0  = createDate(0);
        const date1  = createDate(1);
        for (let d = date0; d<=date1; d = new Date(d.getFullYear()+incYr, d.getMonth()+incMo, d.getDate()+incDay)) { 
            addTickDate(ticks, d, fmt); 
        } 

    }
    const dateDom:Date[] = [
        (typeof dom[0] === 'number')? new Date(dom[0]) : <Date>dom[0], 
        (typeof dom[1] === 'number')? new Date(dom[1]) : <Date>dom[1]
    ];
    const d = dateDom[1].getTime() - dateDom[0].getTime();
    tickCategories.some((cat:number[], i:number) => {
        const dMin = (cat[0]*365 + cat[1]*30 + cat[2]) * 1.5 * DAY;
        if (d>dMin) {
            addDates(i, ticks.major);
            addDates(Math.min(i+1, tickCategories.length-1), ticks.minor);
            return true;
        } else {
            return false;
        }
    });
}

/** calculates major tick mark domain values */
function createTickMarks(type:string, domain:Domain, numTicks:number, fmt:string):TicksCfg {
    const sort = (a:TickType,b:TickType) => a.pos-b.pos;
    function sortTicks() { 
        ticks.minor.sort(sort); ticks.major.sort(sort); 
    };
    const dom:NumRange = [<number>domain[0], <number>domain[1]];
    const ticks:TicksCfg = {major:[], minor:[]};
    switch(type) {
        case Scale.type.log:     logScaleTickMarks(dom, ticks); sortTicks(); break;
        case Scale.type.date:    dateScaleTickMarks(dom, ticks, fmt); sortTicks(); break;
        case Scale.type.percent: percentScaleTickMarks(dom, ticks, numTicks); sortTicks(); break;
        case Scale.type.index:   break;
        case Scale.type.ordinal: break; 
        case Scale.type.nominal: break;
        case Scale.type.linear:
        default:                 linScaleTickMarks(dom, ticks, numTicks); sortTicks(); 
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
        linear:     'linear axis',
        log:        'log axis',
        date:       'date axis',
        index:      'index axis',
        percent:    'percent axis',
        ordinal:    'ordinal axis',
        nominal:    'nominal axis'
    };
    
    /** Defines default values for all configurable parameters */
    private typeVal:string      = Scale.type.linear;
    private rangeVal:NumRange   = [0,1];
    private domVal:Domain       = [0,1];
    private domMinAuto          = 0; // 0: explicit domain; 1: auto domain loose, 2: auto tight
    private domMaxAuto          = 0; // 0: explicit domain; 1: auto domain loose, 2: auto tight
    private labelFmt:string;

    constructor(private cfg:ScaleCfg) { 
        this.scaleType(cfg.type);
        this.domain(cfg.domain);
    }

    private checkDomForScale() {
        switch(this.typeVal) {
            case Scale.type.log:
                if (this.domVal[1] <= 0) { this.domVal[1] = 10; }
                if (this.domVal[0] <= 0) { this.domVal[0] = (<number>this.domVal[1])/1000; }
                break;
        }
    }

    public setLabelFormat(labelFmt:string) {
        this.labelFmt = labelFmt;
    }

    public range(r?:NumRange):NumRange   { 
        if (r) { 
            this.rangeVal = r; 
        }
        return this.rangeVal;
    }
    public domain(dom?:DomainCfg):Domain { 
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
            switch(dom[0]) {
                case 'tight' : this.domMinAuto = 2; break;
                case 'auto' :  this.domMinAuto = 1; break;
                default:       this.domMinAuto = 0;
            }
            switch(dom[1]) {
                case 'tight' : this.domMaxAuto = 2; break;
                case 'auto' :  this.domMaxAuto = 1; break;
                default:       this.domMaxAuto = 0;
            }
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
     * If a `domain` limit is set to `auto`, calling this function tells the `Scale`
     * what the values of the min or max of the data set in the `domain` range are. 
     * These will be rounded down (for min) and up (for max) to determine the auto-range.
     * @param dom the `[min,max]` range of the data
     */
    public setAutoDomain(dom:NumRange) {
        const ticks = createTickMarks(this.scaleType(), dom, 4, this.labelFmt);
        switch (this.domMinAuto) {
            case 1: this.domVal[0] = ticks.major[0].pos; break; // loose
            case 2: this.domVal[0] = dom[0]; break;             // tight
        }
        switch (this.domMaxAuto) {
            case 1: this.domVal[1] = ticks.major[ticks.major.length-1].pos; break;
            case 2: this.domVal[1] = dom[1]; break;
        }
    }

    /**
     * Calculates major and minor tick marks in domain coordinates
     */
    public ticks(numTicks:number=4):TicksCfg   { 
        const dom:NumRange = [<number>this.domain()[0], <number>this.domain()[1]];
        const inRange = (t:TickType) => t.pos>=dom[0] && t.pos<=dom[1];
        const ticks:TicksCfg =  createTickMarks(this.scaleType(), this.domain(), numTicks, this.labelFmt);
        ticks.minor = ticks.minor.filter(inRange);
        ticks.major = ticks.major.filter(inRange);
        return ticks;
    }
    
    /** converts a domain value to a range value */
    convert(domVal:number):number { 
        const dom = this.domain();
        const range = this.range();
        const domMin = <number>dom[0];
        const domMax = <number>dom[1];
        let result;
        switch(this.scaleType()) {
            case Scale.type.log: 
                result = Math.log(domVal/domMin) / Math.log(domMax/domMin) * (range[1] - range[0]) + range[0];
                break;
            case Scale.type.nominal: break;
            case Scale.type.date:    
            case Scale.type.percent: 
            case Scale.type.index:   
            case Scale.type.ordinal:  
            case Scale.type.linear:
            default:
                result = (domVal- domMin) / (domMax - domMin) * (range[1] - range[0]) + range[0];
        }
        return result;
    }
}
