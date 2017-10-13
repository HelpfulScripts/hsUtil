/**
 * 
 */

/** */
export interface DataSet {
    [row:number]: Array<number|string>;
    forEach(fn: (p: any, i: number)=>void):void;
}


export class Data {
}