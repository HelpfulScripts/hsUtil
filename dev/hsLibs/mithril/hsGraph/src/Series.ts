/**
 * # Series
 * renders the one or more series in a variety of styles.
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
import { SVGElem }  from './SVGElem';


export interface SeriesSet {
    data?: Array<number|string>[];  // array of rows; 1st row contains column headers
    clip: boolean;                  // clip series to the chart area
    series?: [{ 
        xHeader:string;             // the name to index the x values
        yHeader:string;             // the name to index the y values
    }];
}

export class Series extends SVGElem { 
    /** Defines default values for all configurable parameters */
    static config(config:Config) {
        config.series = <SeriesSet>{
            data: null,
            clip: true,
            series: []
        };
    }
    view(node?: Vnode): Vnode {
        const cfg    = node.attrs.cfg;
        const scales = node.attrs.scales.primary;
        const data   = cfg.data;
        const x = scales.x.range[0];
        const y = scales.y.range[1];
        const w = scales.x.range[1] - scales.x.range[0];
        const h = scales.y.range[0] - scales.y.range[1];
        const id = 'hs'+Math.floor(Math.random()*10000);
        return m('svg', { class:'hs-graph-series'}, [
            cfg.clip? this.clipRect({x:x, y:y}, {w:w, h:h}, id) : undefined,
            cfg.series.map((s:any) => {
                const x = data[0].indexOf(s.xHeader);
                const y = data[0].indexOf(s.yHeader);
                if (x<0 || y<0) { 
                    console.log(`${s.xHeader} or ${s.yHeader} not found in ${data[0]}`); 
                    return undefined;
                } else {
                    return this.polyline(data, x, y, scales, cfg.clip?id:undefined);
                }
            })
        ]);
    }
}
