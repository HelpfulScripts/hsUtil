/**
 * # Legend
 * renders the series' legend .
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
import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
//import { SVGElem }  from './SVGElem';


/**
 * Defines configurable settings and CSS style classes.
 */
export interface LegendSet {
};

export class Legend {
    /** Defines default values for all configurable parameters */
    static config(config:Config) {
        config.legend = <LegendSet>{
        };
    }
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-legend', width:'100%', height:'100%'});
    }
}
