/**
 * # Legend
 * renders the series' legend .
 * 
 * ### Configurations and Defaults
 * See {@link Legend.Legend.config Legend.config}
 * 
 */

/** */
import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
//import { SVGElem }  from './SVGElem';


/** Defines configurable settings. */
export interface LegendSet {
};

export class Legend {
    /** 
     * Defines default values for all configurable parameters in `Legend`
     * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations.
     * 
     * ### Configurations and Defaults
     * ```
     *  cfg.legend = {@link Legend.LegendSet <LegendSet>}{
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components. See {@link Graph.Graph.makeConfig Graph.makeConfig} for 
     * the sequence of initializations.
     */
    static config(cfg:Config) {
        cfg.legend = <LegendSet>{
        };
    }
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-legend', width:'100%', height:'100%'});
    }
}