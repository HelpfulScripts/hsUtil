/**
 * # Graph
 * <example>
 * <file name='script.js'>
 * let series = [
 *      ['time', 'volume'],
 *      [0, 0.2],
 *      [0.2, 0.7],
 *      [0.4, 0],
 *      [0.6, 0],
 *      [0.8, 0.5],
 *      [1, 0.7]
 * ];
 * 
 * const cfg = {
 *      series: { 
 *          data: series, 
 *          series: [{ xHeader: 'time', yHeader:'volume'}]
 *      },
 *      axes: { primary: { x: { title:'time' }, y: { title:'volume' }}}
 * }
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfg: cfg})
 * });
 *
 * </file>
 * <file name='style.css'>
 * .hs-graph { fill: #e8e8e8; }
 * .hs-graph-chart { fill: #fff; }
 * .hs-graph-series { stroke-width: 5;
 * </file>
 * </example>

 */

/** */
import { m, Vnode}                      from 'hslayout';
import { Axes, config as axesCfg }      from './Axes';
import { Scale, config as scaleCfg }    from './Scale';
import { Config }                       from './Config';

const viewBoxWidth:number  = 1000;  // the viewBox size
const viewBoxHeight:number = 700;   // the viewBox size
const marginLeft:number    = 50;
const marginRight:number   = 10;
const marginTop:number     = 60;
const marginBottom:number  = 80;


export interface GraphSet {
    range?:  { w?: number, h?: number };    // graph viewBox width and height
    bottom?: number;                        // position of chart in viewBox
    left?:   number;                        // position of chart in viewBox
    top?:    number;                        // position of chart in viewBox
    right?:  number;                        // position of chart in viewBox
}

const config:Config = {
    graph: {
        range:  { w: viewBoxWidth, h: viewBoxHeight },  // graph width and height
        bottom: viewBoxHeight-marginBottom,             // position of chart in viewBox
        left:   marginLeft,                             // position of chart in viewBox
        top:    marginTop,                              // position of chart in viewBox
        right:  viewBoxWidth-marginRight                // position of chart in viewBox
    }
};

scaleCfg(config);
axesCfg(config);

config.chart = {
};
config.grid = {
};
config.series = {
};
config.title = {
    align: {h:'center', v: 'top' }
};
config.legend = {
};


/**
 * Creates a deep copy of `org` in `dest`.
 * Fields already set in `dest` are preserved.
 * @param org 
 * @param dest 
 */
function copy(org:any, dest:any):any {
    Object.keys(org).map((k:string) => {
        if (typeof org[k] === 'object') { 
            dest[k] = dest[k] || {};
            copy(org[k], dest[k]); 
        } else {
            dest[k] = dest[k] || org[k];
        }
    });
    return dest;
}



export class Graph {
    private scales = { 
        primary:  <{x:Scale, y:Scale}> { },
        secondary:<{x:Scale, y:Scale}> { }
    };

    private createScales(cfg:any) {
        const cg = cfg.graph;
        const cs = cfg.scale;
        if (!this.scales.primary.x) { 
            this.scales.primary.x   = new Scale(cs.primary.x,   [cg.left,   cg.right]);
            this.scales.primary.y   = new Scale(cs.primary.y,   [cg.bottom, cg.top]);
            this.scales.secondary.x = new Scale(cs.secondary.x, [cg.left,   cg.right]);
            this.scales.secondary.y = new Scale(cs.secondary.y, [cg.bottom, cg.top]);
        }
    }

    view(node?: Vnode): Vnode {
        const background = () => m('rect', { width:cg.range.w, height:cg.range.h});
        const cp = copy(config, node.attrs.cfg || {});
        const cg = cp.graph;
        this.createScales(cp);
        return m('svg', { class:'hs-graph', width:'100%', height:'100%', viewBox:`0 0 ${cg.range.w} ${cg.range.h}`, preserveAspectRatio:'none'}, [
            background(),
            m(Chart, { cfg:cp.chart, x:cg.left, y:cg.top, 
                       width: cg.right-cg.left, height:cg.bottom-cg.top }),
            m(Axes, { cfg:cp.axes, scales:this.scales }),
            m(Grid, { cfg:cp.grid }),
            m(Series, { cfg:cp.series, scales:this.scales }),
            m(Title, { cfg:cp.title }),
            m(Legend, { cfg:cp.legend })
        ]);
    }
}

class Chart { 
    view(node?: Vnode): Vnode {
        const cfg = node.attrs.cfg;   if(cfg){}
        return m('rect', { class:'hs-graph-chart', 
            x:      node.attrs.x, 
            y:      node.attrs.y,
            width:  node.attrs.width,
            height: node.attrs.height
        });
    }
}


class Grid {
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-grid', width:'100%', height:'100%'});
    }
}

class Series {
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
                    return m('polyline', { points: data.map((p:any[], i:number) => i===0?'': 
                        `${scales.x.convert(p[x])},${scales.y.convert(p[y])}`).join(' ')}); 
                }
            })
        ]);
    }
}

class Title {
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-title', width:'100%', height:'100%'});
    }
}

class Legend {
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-legend', width:'100%', height:'100%'});
    }
}
