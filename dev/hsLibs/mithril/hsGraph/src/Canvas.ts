/**
 * # Canvas
 * renders the graph's background.
 * 
 * ### Configurations and Defaults
 * See {@link Canvas.Canvas.defaultConfig Canvas.defaultConfig}
 */

/** */
import { m, Vnode}              from 'hslayout';
import { SVGElem, Area }        from './SVGElem';
import { Config, VisibleCfg }   from './Graph';


/** Defines configurable settings. */
export interface CanvasConfig extends VisibleCfg{
    range?:  Area;              // graph width and height
}

export class Canvas extends SVGElem {
    /** 
     * Defines default values for all configurable parameters in `Graph`.
     * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations.
     * 
     * ### Configurations and Defaults
     * ```
     *  cfg.canvas = {@link Canvas.CanvasConfig <CanvasConfig>}{
     *     range: {         // the graphs background rect:
     *        w: 100,       //    width
     *        h: 100,       //    height
     *        wunit:'%',    //    unit for width
     *        hunit:'%'     //    unit for height
     *     }   
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components. 
     */
    static defaultConfig(cfg:Config) {
        cfg.canvas = <CanvasConfig>{
            range:  <Area>{ // graph width and height
                w: 100, wunit:'%',
                h: 100, hunit:'%'
            }  
        };
    }

    /**
     * Makes adjustments to cfg based on current settings
     * @param cfg the configuration object, containing default settings for all components
     */
    static adjustConfig(cfg:Config) {
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

