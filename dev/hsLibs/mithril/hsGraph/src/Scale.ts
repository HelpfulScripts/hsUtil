import { Config } from './Config';

export interface ScaleStruct {
    domain?: [number, number];
    range?:  [number, number];
    scale?:  string;            // linear | log | date | index | percent | ordinal | nominal
}

export interface ScaleSet {
    primary:   { x: ScaleStruct, y: ScaleStruct };
    secondary: { x: ScaleStruct, y: ScaleStruct };
}

export function config(config:Config) {
    config.scale = {
        primary: {
            x: { domain: [0, 1], range: [config.graph.left, config.graph.right], scale:'linear' },
            y: { domain: [0, 1], range: [config.graph.bottom, config.graph.top], scale:'linear' }
        },
        secondary: {
            x: { domain: [0, 1], range: [config.graph.left, config.graph.right], scale:'linear' },
            y: { domain: [0, 1], range: [config.graph.bottom, config.graph.top], scale:'linear' }
        }
    };
}

/**
 * translates a domain into a range
 */
export class Scale {
    gMajorTicks:string[] = [];
    gMinorTicks:string[] = [];
    
    constructor(private cfg:ScaleStruct, private gRange:number[], private gDomain=[0,1]) {
        this.domain = gDomain;
    }
    
    get range():number[]        { return this.gRange; }
    get domain():number[]       { return this.gDomain; }
    set domain(dom:number[])    { this.gDomain = dom; this.createTickMarks(dom, 4);}

    get majorTicks():string[]   { return this.gMajorTicks; }
    
    convert(domVal:number) { 
        const dom = this.gDomain;
        const range = this.gRange;
        return (domVal- dom[0]) / (dom[1] - dom[0]) * (range[1] - range[0]) + range[0];
    }

    createTickMarks(dom: number[], numTicks:number) {
        this.gMajorTicks = [];
        this.gMinorTicks = [];
        switch(this.cfg.scale) {
            case 'log':
            case 'ordinal': 
            case 'nominal': 
            case 'linear':
            default:
                let d = (dom[1] - dom[0]) / numTicks;
                let exp = Math.pow(10, Math.floor(Math.log10(d)));
                d = Math.floor(d / exp)*exp;
                for (let v = Math.floor(dom[0] / (d*exp)); v<=dom[1]; v+=d) {
                    if (v>=dom[0]) { this.gMajorTicks.push((Math.round(v*1000000)/1000000).toString()); }
                }
        }
    }
}
