
import { m, Vnode}  from 'hslayout';
import { Config }   from './Config';
import { SVGElem }  from './SVGElem';


export interface SeriesSet {
    data?: Array<number|string>[];   // array of rows; 1st row contains column headers
    series?: [{ 
        xHeader:string; 
        yHeader:string; 
    }];
}

export class Series extends SVGElem { 
    static config(config:Config) {
        config.series = <SeriesSet>{
            data: null,
            series: []
        };
    }
    view(node?: Vnode): Vnode {
        const cfg       = node.attrs.cfg;
        const scales    = node.attrs.scales.primary;
        const data      = cfg.data;
        return m('svg', { class:'hs-graph-series'}, [
            cfg.series.map((s:any) => {
                const x = data[0].indexOf(s.xHeader);
                const y = data[0].indexOf(s.yHeader);
                if (x<0 || y<0) { 
                    console.log(`${s.xHeader} or ${s.yHeader} not found in ${data[0]}`); 
                    return undefined;
                } else {
                    return this.polyline(data, x, y, scales);
                }
            })
        ]);
    }
}
