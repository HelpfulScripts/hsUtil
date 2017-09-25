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
 * .hs-graph-chart { fill: #fff; }
 * .hs-graph-series { stroke-width: 5;
 * </file>
 * </example>

 */

/** */
import { m, Vnode}  from 'hslayout';
import { Axes }     from './Axes';
import { Scale }    from './Scale';
import { Config }   from './Config';
import { Series }   from './Series';
import { Chart }    from './Chart';
import { Grid }     from './Grid';
import { SVGElem }  from './SVGElem';

const viewBoxWidth:number  = 1000;  // the viewBox size
let   viewBoxHeight:number = 700;   // the viewBox size
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

/**
 * Creates a deep copy of `def`, taking fields present in `update` to supercede the default value.
 * @param def contains the default setting for each parameter
 * @param update contains updates to some or all of the settings
 */
function copy(def:any, update:any):any {
    let result:any = {};
    Object.keys(def).map((k:string) => {
        if (typeof def[k] === 'object' && !Array.isArray(def[k]) && def[k]!==null) {
            result[k] = copy(def[k], update[k] || {});
        } else {
            result[k] = update[k] || def[k];
        }
    });
    return result;
}

export class Graph extends SVGElem {
    static defConfig:Config = {};

    static config(config=Graph.defConfig) {
        config.graph = {
            range:  { w: viewBoxWidth, h: viewBoxHeight },  // graph width and height
            bottom: viewBoxHeight-marginBottom,             // position of chart in viewBox
            left:   marginLeft,                             // position of chart in viewBox
            top:    marginTop,                              // position of chart in viewBox
            right:  viewBoxWidth-marginRight                // position of chart in viewBox
        };
        Scale.config(config);
        Axes.config(config);
        Series.config(config);
        Grid.config(config);
        Chart.config(config);

        config.title = {
            align: {h:'center', v: 'top' }
        };
        config.legend = {
        };
        return config;
    }
    
    private scales = { 
        primary:  <{x:Scale, y:Scale}> { },
        secondary:<{x:Scale, y:Scale}> { }
    };

    private createScales(cfg:any) {
        const cg = cfg.graph;
        const cs = cfg.scale;
        if (!this.scales.primary.x) { 
            this.scales.primary.x   = new Scale(cs.primary.x);
            this.scales.primary.y   = new Scale(cs.primary.y);
            this.scales.secondary.x = new Scale(cs.secondary.x);
            this.scales.secondary.y = new Scale(cs.secondary.y);
        }
        this.scales.primary.x.range   = [cg.left, cg.right];
        this.scales.primary.y.range   = [cg.bottom, cg.top];
        this.scales.secondary.x.range = [cg.left, cg.right];
        this.scales.secondary.y.range = [cg.bottom, cg.top];
    }

    adjustHeight(node?: Vnode) {
        if (node.dom && node.dom.parentElement) {
            const p = node.dom.parentElement;
            const temp = viewBoxWidth * p.clientHeight / p.clientWidth;
            if (!isNaN(temp) && temp !== viewBoxHeight) {
                viewBoxHeight = temp; 
                console.log('new height = ' + temp);
            }
        }
    }

    onupdate(node?: Vnode) { this.adjustHeight(node); }
    oncreate(node?: Vnode) {
        this.adjustHeight(node);
        window.addEventListener("resize", function() { m.redraw(); });
    }

    view(node?: Vnode): Vnode {
        const cp = copy(Graph.config(), node.attrs.cfg || {});
        const cg = cp.graph;
        this.createScales(cp);
        return m('svg', { class:'hs-graph', width:'100%', height:'100%', viewBox:`0 0 ${cg.range.w} ${cg.range.h}`, preserveAspectRatio:'xMaxYMin'}, [
            this.rect(0, 0, cg.range.w, cg.range.h, 'hs-graph-background'),
            m(Chart, { cfg:cp.chart, x:cg.left, y:cg.top, 
                       width: cg.right-cg.left, height:cg.bottom-cg.top }),
            m(Axes, { cfg:cp.axes, scales:this.scales }),
            m(Grid, { cfg:cp.grid, scales:this.scales }),
            m(Series, { cfg:cp.series, scales:this.scales }),
            m(Title, { cfg:cp.title }),
            m(Legend, { cfg:cp.legend })
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
