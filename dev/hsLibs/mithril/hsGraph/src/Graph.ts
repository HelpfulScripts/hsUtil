/**
 * # Graph
 * The main `Graph` object that contains all graph components and sets up the controlling logic.
 * `Graph` sets up a viewBox that is always 1000 units wide. the height automatically adjusts to fill available space while 
 * preserving a uniform scaling (i.e. preserveAspectRatio = default (xMidYMid)).
 *
 * ### Example
 * <example>
 * <file name='script.js'>
 * let series = {
 *    names:['time', 'volume', 'price'],
 *    rows:[
 *          [-1,   0.2, 0.8],
 *          [0.2,  0.7, 0.87],
 *          [0.4, -0.2, 0.7],
 *          [0.6,    0, 0.7],
 *          [0.8,  0.5, 0.6],
 *          [1,    0.7, 0.75]
 *    ]};
 * 
 * function myConfig(cfg) {
 *      cfg.series.data   = series;
 *      cfg.series.series = [
 *          { cols: ['time', 'volume']},
 *          { cols: ['time', 'price']}
 *      ];
 *      cfg.series.series[0].style.marker.visible = true;
 *      cfg.series.series[1].style.marker.visible = true;
 *      cfg.series.series[1].style.marker.shape = hsgraph.Series.marker.diamond;
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
 * See {@link Graph.Graph.defaultConfig Graph.defaultConfig}
 */

/** */
import { m, Vnode}      from 'hslayout';
import { Data, 
         ColSpecifier,
         NumDomain }    from 'hsdata';
import { Axes }         from './Axes';
import { AxesConfig,
         Scales }       from './AxesTypes';
import { Scale }        from './Scale';
import { Canvas, 
         CanvasConfig } from './Canvas';
import { Series, 
         SeriesDef,
         SeriesConfig } from './Series';
import { Chart, 
         ChartConfig }  from './Chart';
import { Grid, 
         GridsConfig }  from './Grid';
import { Legend, 
         LegendConfig } from './Legend';
import { SVGElem, 
         TextElem,
         Rect, 
         round }        from './SVGElem';
import { delay }        from 'hsutil';

const viewBoxWidth:number  = 1000;  // the viewBox size in px
let   viewBoxHeight:number = 700;   // the viewBox size in px


export interface VisibleCfg extends GraphBaseCfg{
    visible: boolean;
}

/** 
 * Configurator for a title, such as Chart title, or Axis title. 
 * Titles have their own visible switch.
 */
export interface LabelCfg extends TextElem, VisibleCfg {
}

export interface GraphBaseCfg {
}

/**
 */
export interface Config {
    viewBox?: { w: number; h: number; };
    graph?:  GraphConfig;
    canvas?: CanvasConfig;
    axes?:   AxesConfig;
    chart?:  ChartConfig;
    grid?:   GridsConfig;
    series?: SeriesConfig;
    legend?: LegendConfig;
}

/**
 * `Graph` related configuration options.
 * See {@link Graph.Graph.makeConfig Graph.makeConfig} for all configurations and
 * {@link Graph.Graph.config Graph.config} for default `Graph` configuration.
 */
export interface GraphConfig extends GraphBaseCfg {
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
    private static makeConfig(userCfg?:CfgFn):Config { 
        const cfg:Config = {};
        Graph.defaultConfig(cfg);
        Canvas.defaultConfig(cfg);
        Axes.defaultConfig(cfg);
        Series.defaultConfig(cfg);
        Grid.defaultConfig(cfg);
        Chart.defaultConfig(cfg);
        Legend.defaultConfig(cfg);
        if (userCfg) { 
            try { 
                userCfg(cfg); 
            } catch(e) {
                console.log('error in usercfg');
                console.log(e);
                console.log(e.stack);
            }
        }
        return cfg;
    }

    /** 
     * Defines default values for all configurable parameters in `Graph`
     * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations.
     * 
     * #### Configurations and Defaults
     * ```
     *  cfg.graph = {@link Graph.GraphConfig <GraphConfig>} {
     *     margin: {      // the margin between viewBox edges and nearest plot component
     *        top: 10,    // viewBox units      
     *        left: 10,   // viewBox units    
     *        bottom: 10, // viewBox units    
     *        right: 10   // viewBox units 
     *     }   
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components.
     */
    protected static defaultConfig(cfg:Config) {      
        cfg.graph = <GraphConfig>{
            margin :{
                top: 10,    // viewBox units      
                left: 10,   // viewBox units    
                bottom: 10, // viewBox units    
                right: 10   // viewBox units    
            }
        };
    }

    /**
     * Makes adjustments to cfg based on current settings
     * @param cfg the configuration object, containing default settings for all components
     */
    protected static adjustConfig(cfg:Config) {
        Canvas.adjustConfig(cfg);
        Axes.adjustConfig(cfg);
        Series.adjustConfig(cfg);
        Grid.adjustConfig(cfg);
        Chart.adjustConfig(cfg);
        Legend.adjustConfig(cfg);
    }

    private marginOffset = {
        left:   0,     // in px
        right:  0,     // in px
        top:    0,     // in px
        bottom: 0      // in px
    };


    private scales: Scales;
    private data:   Data;

    private createPlotArea(cfgm:{top:number, left:number, bottom:number, right:number}):Rect {
        const tl = {
            x: cfgm.left + this.marginOffset.left,
            y: cfgm.top + this.marginOffset.top
        };
        const br = {
            x: viewBoxWidth  - cfgm.right  - this.marginOffset.right,
            y: viewBoxHeight - cfgm.bottom - this.marginOffset.bottom
        };
        return { tl: tl, br: br };
    }

    private createData(cfg:any) {
        if (!cfg.series.data || !cfg.series.data.rows || !cfg.series.data.names) {
            console.log('cfg.series.data not set');
        }
        this.data = new Data();
        this.data.setData(cfg.series.data.rows, cfg.series.data.names);
    }

    private createScales(axes:any):Scales {
        if (!this.scales) { this.scales = {
            primary:   { x: new Scale(axes.primary.x.scale),   y: new Scale(axes.primary.y.scale) },
            secondary: { x: new Scale(axes.secondary.x.scale), y: new Scale(axes.secondary.y.scale) }
        };}
        return this.scales;
    }

    adjustRange(plotArea:Rect, scales:Scales) { 
        scales.primary.x.range([plotArea.tl.x, plotArea.br.x]);
        scales.primary.y.range([plotArea.br.y, plotArea.tl.y]);
        scales.secondary.x.range([plotArea.tl.x, plotArea.br.x]);
        scales.secondary.y.range([plotArea.br.y, plotArea.tl.y]);
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
                margin.t = Math.max(margin.t, cfgm.top-box[0].y);               
                margin.l = Math.max(margin.l, cfgm.left-box[0].x);               
                margin.b = Math.max(margin.b,  box[0].y+box[0].height+cfgm.bottom-viewBoxHeight);               
                margin.r = Math.max(margin.r, box[0].x+box[0].width +cfgm.right -viewBoxWidth);               
            }
            margin.t = Math.min(margin.t, 40);  // limit to max 20px
            margin.b = Math.min(margin.b, 40);  // limit to max 20px
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
        Promise.resolve(node.attrs.cfg)
               .then(delay(10))
               .then(this.adjustMargins.bind(this))
               .then(m.redraw);
    }

    /** 
     * determines the max ranges each coordinate of each series and auto-sets the domains on the respective scales. 
     */
    adjustDomains(cfg:SeriesConfig, scales:Scales) {
        let domainDims = 0;
        cfg.series.forEach((s:SeriesDef) => 
            domainDims = Math.max(domainDims,s.cols.length)
        );

        const domains:NumDomain[] = Array(domainDims).fill(1).map(() => <NumDomain>[1e20, -1e20]);
    
        cfg.series.map((s:SeriesDef) => { // for each series:
            s.cols.forEach((colIdx:ColSpecifier, i:number) => {
                this.data.findDomain(colIdx, domains[i]);
            });
        });
        scales.primary.x.setAutoDomain(domains[0]);
        scales.primary.y.setAutoDomain(domains[1]);
    }


    view(node?: Vnode): Vnode {
        const cfgFn = node.attrs.cfgFn;
        const cfg:Config = Graph.makeConfig(cfgFn);
        const plotArea = this.createPlotArea(cfg.graph.margin);
        const scales:Scales = this.createScales(cfg.axes);
        this.adjustRange(plotArea, scales);
        this.createData(cfg);
        this.adjustDomains(cfg.series, scales);

        Graph.adjustConfig(cfg);
        node.attrs.cfg = cfg;
        const result = m('svg', { class:'hs-graph', width:'100%', height:'100%', 
                viewBox:`0 0 ${round(viewBoxWidth)} ${round(viewBoxHeight)}` }, [
            m(Canvas, { cfg:cfg.canvas}),
            m(Chart, { cfg:cfg.chart, plotArea:plotArea }),
            m(Grid, { cfg:cfg.grid, scales:scales }),
            m(Axes, { cfg:cfg.axes, scales:scales }),
            m(Series, { cfg:cfg.series, scales:scales, data:this.data }),
            m(Legend, { cfg:cfg.legend })
        ]);
        return result;
    }
}

