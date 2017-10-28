import { Vnode}         from 'hslayout';
import { SVGElem }      from './SVGElem';
import { Data }         from './Data';
import { XYScale }      from './Scale';
import { SeriesStyle }  from './Series';


export abstract class Plot extends SVGElem {
    abstract plot(data:Data, x:number, y:number, scales:XYScale, cfg:SeriesStyle, clipID:string): Vnode[];
} 
