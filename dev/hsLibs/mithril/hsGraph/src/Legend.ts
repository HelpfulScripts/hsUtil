import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
//import { SVGElem }  from './SVGElem';


export interface LegendSet {
};

export class Legend {
    static config(config:Config) {
        config.legend = <LegendSet>{
        };
    }
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-legend', width:'100%', height:'100%'});
    }
}
