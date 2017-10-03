/**
 * # Canvas
 * renders the graph's background .
 * ### Configurations and Defaults
 * ```
 *  title:  {           // the chart title
 *  }
 * ```
 * ### Style classes
 * ```
 * styleClasses: {
 *  }
 * ```
 */

/** */
import { m, Vnode}      from 'hslayout';
import { SVGElem, Area }from './SVGElem';
import { Config }       from './Graph';


/**
 * Defines configurable settings and CSS style classes.
 */
export interface CanvasSet {
    range?:  Area;              // graph viewBox width and height
}

export class Canvas extends SVGElem {
    /** Defines default values for all configurable parameters */
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
            this.rect({x:0, y:0}, {w:cg.range.w, h:cg.range.h}),
        ]);
    }
}

