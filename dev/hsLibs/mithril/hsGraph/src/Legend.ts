/**
 * # Legend
 * renders the series' legend .
 * 
 * ### Attributes
 * The `Legend` class is called by {@link Graph.Graph `Graph`} as 
 * `m(Legend, { cfg:cfg.legend })`
 * with the following attributes:
 * - cfg: a {@link Legend.LegendConfig LegendConfig} object
 * 
 * ### Configurations and Defaults
 * See {@link Legend.Legend.defaultConfig Legend.defaultConfig}
 * 
 */

/** */
import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
//import { SVGElem }  from './SVGElem';


/** Defines configurable settings. */ 
export interface LegendConfig {
};

export class Legend {
    /** 
     * Defines default values for all configurable parameters in `Legend`
     * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations.
     * 
     * ### Configurations and Defaults
     * ```
     *  cfg.legend = {@link Legend.LegendConfig <LegendConfig>}{
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components.
     */
    static defaultConfig(cfg:Config) {
        cfg.legend = <LegendConfig>{
        };
    }

    /**
     * Makes adjustments to cfg based on current settings
     * @param cfg the configuration object, containing default settings for all components
     */
    static adjustConfig(cfg:Config) {
        
    }
    
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-legend', width:'100%', height:'100%'});
    }
}
