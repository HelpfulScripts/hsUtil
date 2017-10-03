/**
 * # Graph
 * <example>
 * <file name='script.js'>
 * let series = [
 *      ['time', 'volume', 'price'],
 *      [-1, 0.2, 0.8],
 *      [0.2, 0.7, 0.87],
 *      [0.4, -0.2, 0.7],
 *      [0.6, 0, 0.7],
 *      [0.8, 0.5, 0.6],
 *      [1, 0.7, 0.75]
 * ];
 * 
 * function myConfig(cfg) {
 *      cfg.series.data   = series;
 *      cfg.series.styles[0].marker.visible = true;
 *      cfg.series.styles[1].marker.visible = true;
 *      cfg.series.styles[1].marker.shape = hsgraph.Series.marker.square;
 *      cfg.series.series = [
 *          { xName: 'time', yName:'volume'},
 *          { xName: 'time', yName:'price'}
 *      ];
 *      const axes = cfg.axes.primary;
 *      cfg.chart.title.text          = 'Volume over Time';
 *      cfg.chart.title.x             = '50%';
 *      cfg.chart.title.y             = '0%';
 *      axes.x.title.text = 'time';
 *      axes.y.title.text = 'volume';
 *      cfg.axes.secondary.x.visible = false;
 *      cfg.axes.secondary.y.visible = false;
 * }
 * 
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfgFn: myConfig })
 * });
 *
 * </file>
 * <file name='style.css'>
 * .hs-graph-chart { fill: #fff; }
 * .hs-graph-series { stroke-width: 5; }
 * </file>
 * </example>
 * 
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
import { m, Vnode}           from 'hslayout';
import { Axes, AxisSet }     from './Axes';
import { Scale, ScaleSet, XYScale } from './Scale';
import { Canvas, CanvasSet } from './Canvas';
import { Series, SeriesSet } from './Series';
import { Chart, ChartSet }   from './Chart';
import { Grid, GridSet }     from './Grid';
import { Legend, LegendSet } from './Legend';
import { SVGElem, round }    from './SVGElem';

const viewBoxWidth:number  = 1000;  // the viewBox size
let   viewBoxHeight:number = 700;   // the viewBox size
let   marginLeft:number    = 10; // 50;
let   marginRight:number   = 10; // 50;
let   marginTop:number     = 10; // 80;
let   marginBottom:number  = 40;

export interface Config {
    viewBox?:  { w: number; h: number; };
    plotArea?: { t: number; l: number; w: number; h: number; };
    scale?:  ScaleSet;
    canvas?: CanvasSet;
    axes?:   AxisSet;
    chart?:  ChartSet;
    grid?:   GridSet;
    series?: SeriesSet;
    legend?: LegendSet;
}
/**
 * Creates a deep copy of `def`, taking fields present in `update` to supercede the default value.
 * @param def contains the default setting for each parameter
 */
function copy(def:any):any {
    let result:any = {};
    Object.keys(def).map((k:string) => {
        if (typeof def[k] === 'object' && !Array.isArray(def[k]) && def[k]!==null) {
            result[k] = copy(def[k]);
        } else {
            result[k] = def[k];
        }
    });
    return result;
}

export interface CfgFn { (cfg:Config):Config; }

export class Graph extends SVGElem {
    static makeConfig(userCfg?:CfgFn) { return () => {
        const cfg = Graph.config();
        if (userCfg) { userCfg(cfg); }
        return cfg;
    };}

    /** Defines default values for all configurable parameters */
    protected static config(cfg:Config={}) {      
        cfg.viewBox = { 
            w: viewBoxWidth, 
            h: viewBoxHeight 
        };
        cfg.plotArea = { 
            t: marginTop, l: marginLeft, 
            w: viewBoxWidth - marginRight - marginLeft,
            h: viewBoxHeight - marginTop - marginBottom
        };
        Canvas.config(cfg);
        Scale.config(cfg);
        Axes.config(cfg);
        Series.config(cfg);
        Grid.config(cfg);
        Chart.config(cfg);
        Legend.config(cfg);
        return cfg;
    }

    private scales = { 
        primary:  <XYScale> { },
        secondary:<XYScale> { }
    };

    private createScales(cfg:any) {
        const pa = cfg.plotArea;
        const cs = cfg.scale;
        if (!this.scales.primary.x) { 
            this.scales.primary.x   = new Scale(cs.primary.x);
            this.scales.primary.y   = new Scale(cs.primary.y);
            this.scales.secondary.x = new Scale(cs.secondary.x);
            this.scales.secondary.y = new Scale(cs.secondary.y);
        }
        this.scales.primary.x.range   = [pa.l, pa.l+pa.w];
        this.scales.primary.y.range   = [pa.t+pa.h, pa.t];
        this.scales.secondary.x.range = [pa.l, pa.l+pa.w];
        this.scales.secondary.y.range = [pa.t+pa.h, pa.t];
    }

    adjustHeight(node?: Vnode) {
        if (node.dom && node.dom.parentElement) {
            const p = node.dom.parentElement;
            const temp = viewBoxWidth * p.clientHeight / p.clientWidth;
            if (!isNaN(temp) && temp !== viewBoxHeight) {
                viewBoxHeight = temp; 
//                console.log('new height = ' + temp);
            }
        }
    }

    onupdate(node?: Vnode) { this.adjustHeight(node); }
    oncreate(node?: Vnode) {
        this.adjustHeight(node);
        window.addEventListener("resize", function() { m.redraw(); });
    }

    static checkMargins(rect:{comp:string, x:number, y:number, width:number, height:number}) {
        let changed = false;
        if (rect) {
            console.log(`${rect.comp}: ${rect.x}/${rect.y}, ${rect.width}x${rect.height}`);
             if (rect.x < 0) { 
               marginLeft -= rect.x/2 - 10;  
               changed = true;
            }
            if (rect.x+rect.width > viewBoxWidth) { 
               marginRight += (rect.x+rect.width-viewBoxWidth)/2 +10; 
               changed = true;
            }
            if (rect.y < 0) { 
               marginTop -= rect.y/2 - 25; 
               changed = true;
            }
            if (changed) { m.redraw(); }
        }
    }

    view(node?: Vnode): Vnode {
        const cfgFn = node.attrs.cfgFn;
        const cfg = cfgFn? Graph.makeConfig(cfgFn) : Graph.config;
        const cp = copy(cfg());
        const pa = cp.plotArea;
        this.createScales(cp);
        return m('svg', { class:'hs-graph', width:'100%', height:'100%', 
                viewBox:`0 0 ${round(cp.viewBox.w)} ${round(cp.viewBox.h)}` }, [
            m(Canvas, { cfg:cp.canvas}),
            m(Chart, { cfg:cp.chart, x:pa.l, y:pa.t, width: pa.w, height:pa.h }),
            m(Grid, { cfg:cp.grid, scales:this.scales }),
            m(Axes, { cfg:cp.axes, scales:this.scales, sizeFn: Graph.checkMargins }),
            m(Series, { cfg:cp.series, scales:this.scales }),
            m(Legend, { cfg:cp.legend })
        ]);
    }
}

