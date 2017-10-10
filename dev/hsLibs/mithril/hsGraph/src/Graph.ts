/**
 * # Graph
 * The main `Graph` object that contains all graph components and sets up the controlling logic.
 * `Graph` sets up a viewBox that is always 1000 units wide. the height automatically adjusts to fill available space while 
 * preserving a uniform scaling (i.e. preserveAspectRatio = default (xMidYMid)).
 *
 * ### Example
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
 *      cfg.series.styles[1].marker.shape = hsgraph.Series.marker.diamond;
 *      cfg.series.series = [
 *          { xName: 'time', yName:'volume'},
 *          { xName: 'time', yName:'price'}
 *      ];
 *      const axes = cfg.axes.primary;
 *      cfg.chart.title.text          = 'Volume over Time';
 *      cfg.chart.title.xpos          = 'end';
 *      cfg.chart.title.ypos          = 'top';
 *      cfg.chart.title.vOffset       = -1.5;
 *      axes.x.title.text = 'time';
 *      axes.y.title.text = 'volume';
 *      axes.x.crossesAt = 0;
 *      axes.y.crossesAt = 0;
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
 * See {@link Graph.Graph.config Graph.config}
 */

/** */
import { m, Vnode}           from 'hslayout';
import { Axes, AxesSet }     from './Axes';
import { Scale, Scales }     from './Scale';
import { Canvas, CanvasSet } from './Canvas';
import { Series, SeriesSet } from './Series';
import { Chart, ChartSet }   from './Chart';
import { Grid, GridSet }     from './Grid';
import { Legend, LegendSet } from './Legend';
import { SVGElem, Rect, round }    from './SVGElem';

const viewBoxWidth:number  = 1000;  // the viewBox size in px
let   viewBoxHeight:number = 700;   // the viewBox size in px

/**
 */
export interface Config {
    viewBox?: { w: number; h: number; };
    graph?:  GraphSet;
    canvas?: CanvasSet;
    axes?:   AxesSet;
    chart?:  ChartSet;
    grid?:   GridSet;
    series?: SeriesSet;
    legend?: LegendSet;
}

/**
 * `Graph` related configuration options.
 * See {@link Graph.Graph.makeConfig Graph.makeConfig} for all configurations and
 * {@link Graph.Graph.config Graph.config} for default `Graph` configuration.
 */
export interface GraphSet {
    margin :{           // in viewBox units 
        top:    number;          
        left:   number;   
        bottom: number;   
        right:  number;   
    };
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

/** 
 * signature of a user configuration function, used in {@link Graph.Graph.makeConfig `Graph.makeConfig`} 
 * @param cfg the fully initialized configuration object. `CfgFn` should overwrite selected values as needed.
 */
export interface CfgFn { (cfg:Config):void; }

/** The main `Graph` object, responsible for setting up the grpahing components and logic. */
export class Graph extends SVGElem {
    /**
     * Creates and returns a `cfg` configuration object containing configuration entries
     * for  `Graph` and all of its subcomponents:
     * - &nbsp; {@link Graph.Graph.config `cfg.graph`}: some general Graph setting, such as margins
     * - &nbsp; {@link Canvas.Canvas.config `cfg.canvas`}:  the background canvas on which all components are rendered
     * - &nbsp; {@link Chart.Chart.config `cfg.chart`}: the chart area and title
     * - &nbsp; {@link Axes.Axes.config `cfg.axes`}: the x- and y-axes, tick marks and labels, and axis title
     * - &nbsp; {@link Grid.Grid.config `cfg.grid`}: the major and minor gridlines
     * - &nbsp; {@link Series.Series.config `cfg.series`}: the one or more data series to render
     * - &nbsp; {@link Legend.Legend.config `cfg.legend`}: the legend for the shown series
     * if a `userCfg` function is provided, it gets called after all configurations are
     * initialized with default values. The `cfg` object is passed as parameter into the 
     * function, which then can selectively overwrite certain settings as needed.
     * @param userCfg a user defined configuration function with the signature 
     * `(cfg:{@link Config Config}):void.`
     */
    static makeConfig(userCfg?:CfgFn) { return ():Config => {
        const cfg = {};
        Graph.config(cfg);
        Canvas.config(cfg);
        Axes.config(cfg);
        Series.config(cfg);
        Grid.config(cfg);
        Chart.config(cfg);
        Legend.config(cfg);
        if (userCfg) { userCfg(cfg); }
        return cfg;
    };}

    /** 
     * Defines default values for all configurable parameters in `Graph`
     * #### Configurations and Defaults
     * ```
     *  cfg.graph = {@link Graph.GraphSet <GraphSet>} {
     *     margin: {      // the margin between viewBox edges and nearest plot component
     *        top: 10,    // viewBox units      
     *        left: 10,   // viewBox units    
     *        bottom: 10, // viewBox units    
     *        right: 10   // viewBox units 
     *     }   
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components. See {@link Graph.Graph.makeConfig Graph.makeConfig} for 
     * the sequence of initializations.
     */
    protected static config(cfg:Config={}) {      
        cfg.graph = <GraphSet>{
            margin :{
                top: 10,    // viewBox units      
                left: 10,   // viewBox units    
                bottom: 10, // viewBox units    
                right: 10   // viewBox units    
            }
        };
    }

    private marginOffset = {
        nm:     'marginOffset',
        left:   0,     // in px
        right:  0,     // in px
        top:    0,     // in px
        bottom: 0      // in px
    };


    private scales:Scales;

    private createPlotArea(cfg:Config):Rect {
        const cfgm = cfg.graph.margin;
        const plotArea:Rect = { 
            nm: 'plotArea',
            t: cfgm.top + this.marginOffset.top, 
            l: cfgm.left + this.marginOffset.left, 
            w: viewBoxWidth, // not final
            h: viewBoxHeight // not final
        };
        plotArea.w -= plotArea.l + cfgm.right + this.marginOffset.right;
        plotArea.h -= plotArea.t + cfgm.bottom + this.marginOffset.bottom; 
        return plotArea;
    }

    private createScales(cfg:any) {
        const as = cfg.axes;
        if (!this.scales) { this.scales = {
            primary:   { x: new Scale(as.primary.x.scale),   y: new Scale(as.primary.y.scale) },
            secondary: { x: new Scale(as.secondary.x.scale), y: new Scale(as.secondary.y.scale) }
        };}
    }

    adjustRange(plotArea:Rect) { 
        this.scales.primary.x.range([plotArea.l, plotArea.l+plotArea.w]);
        this.scales.primary.y.range([plotArea.t+plotArea.h, plotArea.t]);
        this.scales.secondary.x.range([plotArea.l, plotArea.l+plotArea.w]);
        this.scales.secondary.y.range([plotArea.t+plotArea.h, plotArea.t]);
    }

    /**
     * adjust the height of the viewBox to match available height in containing window,
     * e.g. after a resize
     * @param node the Graph node
     */
    adjustHeight(node?: Vnode) {
        if (node.dom && node.dom.parentElement) {
            const p = node.dom.parentElement;
            const temp = viewBoxWidth * p.clientHeight / p.clientWidth;
            if (!isNaN(temp) && temp !== viewBoxHeight) {
                viewBoxHeight = temp; 
            }
        }
    }

    /**
     * check on update of axes bounding box and notify Graph.boxNotify
     */
    adjustMargins(cfg:Config) {
        const cfgm = cfg.graph.margin;
        function getBBox(css: string) {
            const elems = document.getElementsByClassName(css);
            const box = Array.prototype.map.call(elems, (e:any)=>e.getBBox());
            if(box && box[0]) { 
                box[0].nm = css;
                margin.t = Math.max(margin.t, cfgm.top-box[0].y);               
                margin.l = Math.max(margin.l, cfgm.left-box[0].x);               
                margin.b = Math.max(margin.b,  box[0].y+box[0].height+cfgm.bottom-viewBoxHeight);               
                margin.r = Math.max(margin.r, box[0].x+box[0].width +cfgm.right -viewBoxWidth);               
            }
        }
        const margin = {t:-1e6,l:-1e6,b:-1e6,r:-1e6};
        getBBox('hs-graph-axis');
        getBBox('hs-graph-chart');
        this.marginOffset.top    += Math.max(margin.t);
        this.marginOffset.left   += Math.max(margin.l);
        this.marginOffset.bottom += Math.max(margin.b);
        this.marginOffset.right  += Math.max(margin.r);
    }

    onupdate(node?: Vnode) { 
        this.adjustHeight(node); 
    }

    oncreate(node?: Vnode) {
        window.addEventListener("resize", function() { m.redraw(); });
        this.adjustHeight(node); 
        setTimeout(() => {
            this.adjustMargins(node.attrs.cfg);
            m.redraw();
        }, 0);
    }

    view(node?: Vnode): Vnode {
        const cfgFn = node.attrs.cfgFn;
        const cfg = Graph.makeConfig(cfgFn);
        const cp = copy(cfg());
        node.attrs.cfg = cp;
        const plotArea = this.createPlotArea(cp);
        this.createScales(cp);
        this.adjustRange(plotArea);
        Series.adjustDomains(cp.series, this.scales);
        const result = m('svg', { class:'hs-graph', width:'100%', height:'100%', 
                viewBox:`0 0 ${round(viewBoxWidth)} ${round(viewBoxHeight)}` }, [
            m(Canvas, { cfg:cp.canvas}),
            m(Chart, { cfg:cp.chart, plotArea:plotArea }),
            m(Grid, { cfg:cp.grid, scales:this.scales }),
            m(Axes, { cfg:cp.axes, scales:this.scales }),
            m(Series, { cfg:cp.series, scales:this.scales }),
            m(Legend, { cfg:cp.legend })
        ]);
        return result;
    }
}

