/**
 * # Canvas
 */

/** */
import { m, Vnode}      from 'hslayout';
import { SVGElem }      from './SVGElem';
import { Config, Area } from './Graph';


export interface CanvasSet {
    range?:  Area;              // graph viewBox width and height
}

export class Canvas extends SVGElem {
    static config(config:Config) {
        config.canvas = <CanvasSet>{
            range:  { // graph width and height
                w: 100, wunit:'%',
                h: 100, hunit:'%'
            }  
        };
        return config;
    }
    
    view(node?: Vnode): Vnode {
        const cg = node.attrs.cfg;
        return m('svg', {class: 'hs-graph-canvas'}, [
            this.rect({x:0, y:0}, {w:cg.range.w, h:cg.range.h}, { cssClass:'hs-graph-canvas-background'}),
        ]);
    }
}

