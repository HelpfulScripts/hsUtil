
import { Vnode}  from 'hslayout';
import { Config }   from './Config';
import { SVGElem }  from './SVGElem';


export interface ChartSet {
}

export class Chart extends SVGElem { 
    static config(config:Config) {
        config.chart = <ChartSet>{
        };
    }

    view(node?: Vnode): Vnode {
        const cfg = node.attrs.cfg;   if(cfg){}
        const a =  node.attrs;
        return this.rect(a.x, a.y, a.width, a.height, 'hs-graph-chart');
    }
}

