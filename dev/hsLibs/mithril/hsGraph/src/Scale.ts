/**
 * @module Axes
 */

/** */ 
import { Domain, 
         NumRange }     from './Data';
import { Axes }         from './Axes';
import { date }       from 'hsutil';
import { Ticks,
         TickDefs,
         TickLabel,
         ScaleCfg }     from './AxesTypes';


function addTickNumber(t:TickDefs, v:number) { 
    t.labels.push({ pos: v, text: ''+Math.round(v*1000000)/1000000 }); 
}

function addTickDate(t:TickDefs, v:Date, fmt:string) { 
    t.labels.push({ pos: v.getTime(), text:date(fmt, v) }); 
}


/** calculate major and minor ticks on a lionear scale. The first and last tick will be smaller and larger than the provided domain. */
function linScaleTickMarks(dom:NumRange, ticks:Ticks, numTicks:number) {
    function addTicks(unit:number, ticks:TickDefs):number {
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

function percentScaleTickMarks(dom:NumRange, ticks:Ticks, numTicks:number) {
    const formatPercent = (m:TickLabel) => m.text = `${Math.round(m.pos)*100}%`;
    linScaleTickMarks(dom, ticks, numTicks);
    ticks.major.labels.forEach(formatPercent);
    ticks.minor.labels.forEach(formatPercent);
//    addMinMaxTicks(dom, ticks);
}

function logScaleTickMarks(dom:NumRange, ticks:Ticks) {
    dom[0] = Math.max(dom[0], 1e-20);
    dom[1] = Math.max(dom[1], 1e-20);
    let min = Math.pow(10, Math.floor(Math.log10(dom[0])));
    let max = Math.pow(10, Math.ceil(Math.log10(dom[1])));
    for (let i=1; i<20; i++) {
        for (let v = min; v*i<=max; v*=10) {
            if (i===1) { addTickNumber(ticks.major, v*i); }
            else if (i===10) {}
            else { addTickNumber(ticks.minor, v*i); }
        }
    }
}

const DAY = 1000*60*60*24;
const tickCategories = [
    [10,0,0], [1,0,0], [0,3,0], [0,1,0], [0,0,7], [0,0,1]
];

function dateScaleTickMarks(dom:Domain, ticks:Ticks, fmt='%MM/%DD/%YY') {
    function addDates(i:number, tickDefs:TickDefs) {
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
            addTickDate(tickDefs, d, fmt); 
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

/** calculates major tick label domain values */
function createTickLabels(type:string, domain:Domain, numTicks:number, fmt:string):Ticks {
    const sort = (a:TickLabel,b:TickLabel) => a.pos-b.pos;
    function sortTicks() { 
        ticks.minor.labels.sort(sort); ticks.major.labels.sort(sort); 
    };
    const dom:NumRange = [<number>domain[0], <number>domain[1]];
    const ticks:Ticks = {
        major: {marks:[], labels: <TickLabel[]>[]},
        minor: {marks:[], labels: <TickLabel[]>[]}
    };
    switch(type) {
        case Axes.type.log:     logScaleTickMarks(dom, ticks); sortTicks(); break;
        case Axes.type.date:    dateScaleTickMarks(dom, ticks, fmt); sortTicks(); break;
        case Axes.type.percent: percentScaleTickMarks(dom, ticks, numTicks); sortTicks(); break;
        case Axes.type.ordinal: break; 
        case Axes.type.nominal: break;
        case Axes.type.index:   
        case Axes.type.linear:
        default:                linScaleTickMarks(dom, ticks, numTicks); sortTicks(); 
    }  
    return ticks;
}


/**
 * translates a domain into a range
 */
export class Scale {    
    /** Defines default values for all configurable parameters */
    private typeVal:string      = Axes.type.linear;
    private rangeVal:NumRange   = [0,1];
    private domVal:Domain       = [0,1];
    private domMinAuto          = 0; // 0: explicit domain; 1: auto domain loose, 2: auto tight
    private domMaxAuto          = 0; // 0: explicit domain; 1: auto domain loose, 2: auto tight
    private labelFmt:string;

    constructor(private cfg:ScaleCfg) { 
        this.scaleType(cfg.type);
        this.domain(cfg.domain);
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
    public domain(dom?:Domain):Domain { 
        if (dom) {
            if (this.scaleType() === Axes.type.date) {
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
        if (this.typeVal === Axes.type.log) {
            if (this.domVal[1] <= 0) { this.domVal[1] = 10; }
            if (this.domVal[0] <= 0) { this.domVal[0] = (<number>this.domVal[1])/1000; }
        }
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
        const ticks:Ticks = createTickLabels(this.scaleType(), dom, 4, this.labelFmt);
        switch (this.domMinAuto) {
            case 1: this.domVal[0] = ticks.major.labels[0].pos; break; // loose
            case 2: this.domVal[0] = dom[0]; break;             // tight
        }
        switch (this.domMaxAuto) {
            case 1: this.domVal[1] = ticks.major.labels[ticks.major.labels.length-1].pos; break;
            case 2: this.domVal[1] = dom[1]; break;
        }
    }

    /**
     * Calculates major and minor tick marks in domain coordinates
     */
    public ticks(numTicks:number=4):Ticks   { 
        function marksFromLabels(ticks:Ticks, type:string) {
            switch(type) {
                case Axes.type.nominal: 
                case Axes.type.index:   
                    const numLabels = ticks.major.labels.length;
                    ticks.major.marks = Array(numLabels+1).fill(1).map((e:any, i:number) => i-0.5);
                    ticks.minor.marks = ticks.minor.labels? ticks.minor.labels.map((l:TickLabel) => l.pos) : [];
                    break;
                case Axes.type.log: 
                case Axes.type.date:    
                case Axes.type.percent: 
                case Axes.type.ordinal:  
                case Axes.type.linear:
                default:
                    ticks.major.marks = ticks.major.labels? ticks.major.labels.map((l:TickLabel) => l.pos) : [];
                    ticks.minor.marks = ticks.minor.labels? ticks.minor.labels.map((l:TickLabel) => l.pos) : [];
            }
        }
        const dom:NumRange = [<number>this.domain()[0], <number>this.domain()[1]];
        const inRange = (t:TickLabel) => t.pos>=dom[0] && t.pos<=dom[1];
        const ticks:Ticks =  createTickLabels(this.scaleType(), this.domain(), numTicks, this.labelFmt);
        ticks.minor.labels = ticks.minor.labels.filter(inRange);
        ticks.major.labels = ticks.major.labels.filter(inRange);
        if (ticks.major.labels.length === 0) { ticks.major.labels = ticks.minor.labels; ticks.minor.labels = []; }
        marksFromLabels(ticks, this.scaleType());
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
            case Axes.type.log: 
                result = Math.log(domVal/domMin) / Math.log(domMax/domMin) * (range[1] - range[0]) + range[0];
                break;
            case Axes.type.nominal: break;
            case Axes.type.date:    
            case Axes.type.percent: 
            case Axes.type.index:   
            case Axes.type.ordinal:  
            case Axes.type.linear:
            default:
                result = (domVal- domMin) / (domMax - domMin) * (range[1] - range[0]) + range[0];
        }
        return result;
    }
}
