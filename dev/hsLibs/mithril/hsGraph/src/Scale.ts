import { Config } from './Config';

export interface ScaleStruct {
    domain?: [number, number];
    range?:  [number, number];
}

export interface ScaleSet {
    primary:   { x: ScaleStruct, y: ScaleStruct };
    secondary: { x: ScaleStruct, y: ScaleStruct };
}

export function config(config:Config) {
    config.scale = {
        primary: {
            x: { domain: [0, 1], range: [config.graph.left, config.graph.right] },
            y: { domain: [0, 1], range: [config.graph.bottom, config.graph.top] }
        },
        secondary: {
            x: { domain: [0, 1], range: [config.graph.left, config.graph.right] },
            y: { domain: [0, 1], range: [config.graph.bottom, config.graph.top] }
        }
    };
}

/**
 * translates a domain into a range
 */
export class Scale {
    constructor(private _range:number[], private _domain=[0,1]) {}
    get range():number[]  { return this._range; }
    get domain():number[] { return this._domain; }
    set domain(dom:number[]) { this._domain = dom; }
    convert(domVal:number) { 
        const dom = this._domain;
        const range = this._range;
        return (domVal- dom[0]) / (dom[1] - dom[0]) * (range[1] - range[0]) + range[0];
    }
}
