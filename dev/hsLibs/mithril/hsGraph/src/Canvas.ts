/**
 * # Canvas
 * renders the graph's background.
 * 
 * ### Configurations and Defaults
 * See {@link Graph.Graph.config Graph.config}
 */

/** */
import { m, Vnode}      from 'hslayout';
import { SVGElem, Area }from './SVGElem';
import { Config }       from './Graph';


/**
 * Defines configurable settings and CSS style classes.
 */
export interface CanvasSet {
    range?:  Area;              // graph width and height
}

export class Canvas extends SVGElem {
    /** 
     * Defines default values for all configurable parameters in `Graph`
     * ### Configurations and Defaults
     * ```
     *  cfg.canvas = {@link Canvas.CanvasSet <CanvasSet>}{
     *     range: {         // the graphs background rect:
     *        w: 100,       //    width
     *        h: 100,       //    height
     *        wunit:'%',    //    unit for width
     *        hunit:'%'     //    unit for height
     *     }   
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components. See {@link Graph.Graph.makeConfig Graph.makeConfig} for 
     * the sequence of initializations.
     */
    static config(cfg:Config) {
        cfg.canvas = <CanvasSet>{
            range:  <Area>{ // graph width and height
                w: 100, wunit:'%',
                h: 100, hunit:'%'
            }  
        };
    }
    
    view(node?: Vnode): Vnode {
        const cg = node.attrs.cfg;
        return m('svg', {class: 'hs-graph-canvas'}, [
            this.rect({x:0, y:0},
                { w:cg.range.w, h:cg.range.h, 
                  wunit:cg.range.wunit, hunit:cg.range.hunit}),
        ]);
    }
}

