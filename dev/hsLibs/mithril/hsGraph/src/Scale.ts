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


/**
 * translates a domain into a range
 */
export class Scale {
    static config(config:Config) {
        const cg = config.graph;
        config.scale = {
            primary: {
                x: <ScaleStruct>{ domain: [0, 1], range: [cg.left, cg.right], scale:'linear' },
                y: <ScaleStruct>{ domain: [0, 1], range: [cg.bottom, cg.top], scale:'linear' }
            },
            secondary: {
                x: <ScaleStruct>{ domain: [0, 1], range: [cg.left, cg.right], scale:'linear' },
                y: <ScaleStruct>{ domain: [0, 1], range: [cg.bottom, cg.top], scale:'linear' }
            }
        };
    }
    
    gMajorTicks:string[] = [];
    gMinorTicks:string[] = [];
    
    constructor(private cfg:ScaleStruct) { }
    
    get range():[number, number]     { return this.cfg.range; }
    set range(r:[number, number])    { this.cfg.range = r; }
    get domain():[number, number]    { return this.cfg.domain; }
    set domain(dom:[number, number]) { this.cfg.domain = dom; }

    majorTicks(numTicks:number=4):string[]   { 
        this.createTickMarks(this.domain, numTicks);
        return this.gMajorTicks; 
    }
    
    minorTicks(numTicks:number=4):string[]   { 
        this.createTickMarks(this.domain, numTicks);
        return this.gMinorTicks; 
    }
    
    convert(domVal:number) { 
        const dom = this.domain;
        const range = this.range;
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
