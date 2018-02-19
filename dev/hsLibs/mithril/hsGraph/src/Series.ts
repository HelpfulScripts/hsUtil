/**
 * # Series
 * renders the one or more series in a variety of styles.
 * 
 * ### Configurations and Defaults
 * See {@link Series.Series.defaultConfig Series.defaultConfig} for defaults
 * and {@link Series.SeriesDef SeriesDef} for defining configuration details.
 * 
 * ### Attributes
 * The `Series` class is called by {@link Graph.Graph `Graph`} as 
 * `m(Series, { cfg:cfg.series, scales:scales, data:this.data })`
 * with the following attributes:
 * - cfg: {@link Series.SeriesConfig `SeriesConfig`} configuration parameters for series
 * - scales: {@link Axes.XYScale `XYScale`} the scales to use
 * - data: {@link hsData:Data.Data `Data`} array of `Data` sets to use, indexed by cfg[].dataIndex
 * 
 * @module Series
 */

/** */
import { m, Vnode}      from 'hslayout';
import { Config,
         VisibleCfg }   from './Graph';
import { Data, 
         DataSet }      from 'hsdata';
import { Condition }    from 'hsdata';
import { SVGElem }      from './SVGElem';
import { Axes }         from './Axes';
import { XYScale }      from './AxesTypes';
import { PlotLine }     from './PlotLine';
import { PlotMarkers }  from './PlotMarkers';
import { PlotBar }      from './PlotBar';
import { PlotArea }     from './PlotArea';


function copyDefault(target:any, source:any, defaults:any) {
    Object.keys(source).forEach((key:string) => {
        if (typeof source[key] === 'object') { 
            if (target[key] === undefined) { target[key] = {}; }
            copyDefault(target[key], source[key], defaults); 
        } else {
            if (target[key] === undefined) { target[key] = source[key]; }
            if (target[key] === 'default') { target[key] = defaults[key]; }
        }
    });
}

/**
 * 
 */
export class Series extends SVGElem { 
    /**
     * Defines available styles for series marker:
     * - circle
     * - square
     * - diamond
     * - upTriangle
     * - downTriangle
     */
    static marker = {
        circle:         Symbol('circle marker'),
        square:         Symbol('square marker'),
        diamond:        Symbol('diamond marker'),
        upTriangle:     Symbol('upward triangle marker'),
        downTriangle:   Symbol('downward triangle marker')
    };

    /**
     * Defines available plot types:
     * - line
     * - bar
     */
    static plot = {
        line:    new PlotLine(),
        marker:  new PlotMarkers(),
        bar:     new PlotBar(),
        area:    new PlotArea()
    };

    static map = {
        stacked: 'stacked',
        shared:  'shared'
    };

    /** 
     * Defines default values for all configurable parameters in `Series`
     * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations.
     * 
     * ### Configurations and Defaults
     * ```
     *  cfg.series = {@link Series.SeriesConfig <SeriesConfig>}{
     *          // pool of `Data` sets to be plotted, initialized as `[]`
     *      data: {@link hsData:Data.DataSet <DataSet[]>},     
     *          // series an markers are clipped to the plot area
     *      clip: true,       
     *          // array of series descriptors, initialized to empty array (no series)
     *      series: {@link Series.SeriesDef <SeriesDef>}[],
     *          // sets the default colors that will be assigend to series by index
     *      defaultColors:
     *          ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#000', '#444', '#888', '#ccc'],
     *          // sets the default style to be applied to series
     *      defaultStyle: {@link Series.SeriesStyle <SeriesStyle>} {
     *          line:   { 
     *              color: <color>, // the line color to use, preset from defaultColors
     *              width: 5,       // the line width in viewbox units
     *              visible: true   // whether line is draw or not
     *          },
     *          marker: { 
     *              color: <color>, // the marker color to use, preset from defaultColors
     *              size: 10,       // the marker size in viewbox coordinates
     *              shape: Series.marker.circle, // the marker shaper, See {@link Series.Series.marker Series.marker}
     *              visible: true 
     *          },
     *          fill: { 
     *              color: <color>, // the fill color to use, preset from defaultColors
     *              visible: true 
     *          },
     *          bar: { 
     *              color: <color>, // the bar color to use, preset from defaultColors
     *              width: 10,
     *              visible: true 
     *          }
     *      }
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components.
     */
    static defaultConfig(cfg:Config) {
        cfg.series = new SeriesConfig();
    }

    /**
     * Makes adjustments to cfg based on current settings
     * @param cfg the configuration object, containing default settings for all components
     */
    static adjustConfig(cfg:Config) { 
        cfg.series.series.forEach((s:SeriesDef) => {
            if (s.x === undefined) { // undefined x-value -> use index as x-value
                cfg.axes.primary.x.title.hOffset = 0;
                cfg.axes.primary.x.scale.type = Axes.type.index;
                cfg.grid.minor.ver.visible = false;
            }
        });
    }
    
    drawClipRect(clipID:string, scales:XYScale) {
        return !clipID? m('') : this.clipRect(
            {   x:scales.x.range()[0], y:scales.y.range()[1]}, 
            {
                w:scales.x.range()[1] - scales.x.range()[0], 
                h:scales.y.range()[0] - scales.y.range()[1]
            }, 
            clipID);
    }

    view(node?: Vnode): Vnode {
        const cfg:SeriesConfig  = node.attrs.cfg;
        const scales:XYScale = node.attrs.scales.primary;
        const data:Data[]    = node.attrs.data;
        const clipID = cfg.clip? 'hs'+Math.floor(Math.random()*10000) : undefined;
        cfg.series.map((s:SeriesDef) => {
            if (s.map === Series.map.shared) {  // reset ySum if needed
                s.ySum = '$sum';
                data[s.dataIndex].colAdd(s.ySum);            // add $max if not present
                data[s.dataIndex].colInitialize(s.ySum, 0);  // and initialize to 0
            }
        });
        cfg.series.map((s:SeriesDef) => {
            const dt = data[s.dataIndex];
            if (s.map===Series.map.shared) {    // aggregate ySum over series
                const valCol = dt.colNumber(s.y);                       
                dt.colInitialize(s.ySum, (v:number, i:number, row:number[])=>{ return v+row[valCol]; });
            }
            if (s.map) {
                s.yBase = '$'+ s.map;
                dt.colAdd(s.yBase);             // add $stacked or $shared if not present
                dt.colInitialize(s.yBase, 0);   // and initialize to 0
            }
        });
        return m('svg', { class:'hs-graph-series'}, [
            this.drawClipRect(clipID, scales),
            m('svg', cfg.series.map((s:SeriesDef, i:number) => { 
                const dt = data[s.dataIndex];
                const type = Series.plot[s.type] || Series.plot.line;
                type.setDefaults(dt, s, scales);
                const d = s.cond? dt.filter(s.cond) : dt;
                const plot = type.plot(d, s, scales, i, clipID);  // plot y above yBase; 
                if (s.map) {                                      // if 'stacked' or 'shared' -> accumulate y
                    const valCol = d.colNumber(s.y);                       
                    d.colInitialize(s.yBase, (v:number, i:number, row:number[])=>{ return v+row[valCol]; });
                }
                return m('svg', {class:`hs-graph-series-${i}`}, plot);
            }))
        ]);
    }
}

export interface ColoredCfg extends VisibleCfg {
    /** the color in hex */
    color: string;
}
export interface LineStyle extends ColoredCfg {
    /** the stroke width in px */
    width: number; 
}

export interface MarkerStyle extends ColoredCfg {
    /** the stroke width in px */
    size:  number;      

    /** the marker shape, selected from {@link Series.Series.marker Series.marker} */
    shape: Symbol;              
}

export interface FillStyle extends ColoredCfg {
}

export interface TextStyle extends ColoredCfg {
}

export interface BarStyle extends ColoredCfg {
    /** width of bars in % of space between bars */
    width: number;  
    
    /** offset between column series in % between bars */
    offset:number; 
}

export interface SeriesStyle {
    line:   LineStyle;
    marker: MarkerStyle;
    fill:   FillStyle;
    bar:    BarStyle;
    label:  TextStyle;
}

/** 
 * Defines Series columns and values to use, as well as the plot type to apply.
 * The following settings are available for configuration:
 * ```
 * cfg.series.series = [{
 *    type: TYPE,        // the series type, e.g. 'line', etc. See below.
 *    dataIndex: number, // the `Data` set to use. The index refers to the position in `series.data`
 *    x: string,         // the column name or index of the x-coordinate to use for drawing
 *    y: string,         // the column name or index of the y-coordinate to use for drawing
 *    yBase: string,     // if specified, used as lower series for filling the area
 *    l: string,         // the column name or index to use for series labels
 *    hOffset: number;   // horizontal label offset in em o
 *    vOffset?: number;  // vertical label offset in em
 *    map?: 'stacked' | 'shared'; // stack series, or show the share (normalize to 100%)
 *    style: {@link SeriesStyle SeriesStyle},  // allows overriding a default style setting
 *    cond: {@link hsData:DataFilters.Condition Condition} // allows specifying a filter applied to data before rendering.
 * }]
 * ```
 * The following series <TYPE>s are available. For configuration details, see:
 * - 'line':  (or omitted): {@link PlotLine PlotLine}
 * - 'markers': {@link PlotMarkers PlotMarkers}
 * - 'area':    {@link PlotArea PlotArea}
 * - 'bar':     {@link PlotBar PlotBar}
 */
export interface SeriesDef {
    /** 
     * required column names or indices. 
     * [0] is reserved for the x direction. 
     * Further elements are dependent on the {@link Series.type plot} type. 
     */
    x:string;               // x values
    y?:string;              // y values
    yBase?:string;          // if specified, treats (y/yBase) as (high/low) series
    ySum?:string;           // internal support column for 'shared' mode;
    l?:string;              // labels
    hOffset?: number;       // offset in em
    vOffset?: number;       // offset in em
    map?: string;           // accepts 'stacked'and 'shared'
    /** An index into the `Data[]` pool, identifying the `Data` set to use. defaults to `0` */
    dataIndex?: number;
    /** optional plot type, selected from {@link Series.Series.plot Series.plot} as string; defaults to  'line' */
    type?:string;   
    /** style information to use for plotting; if ommitted, a `type`-dependent default is used */
    style?:SeriesStyle;
    /** optinal filter condition on the data prior to drawing */
    cond?: Condition;
}


/** 
 * Defines the default settings. 
 * Implemented as a class rather than interface to allow for a getter/setter implementation
 * of `series`. This allows for postprocessing user configurations while maintaining 
 * convenient notation, e.g.
 * ```
 *  cfg.series.series = [           // invoke the setter
 *      { x:'time', y:'volume'},    // behind the scenes, adds 
 *      { x:'time', y:'price']}     // missing fields such as .style
 *  ];
 *  fg.series.series[0].style.marker.visible = true;    // invoke the getter
 * ```
 */
export class SeriesConfig {
    private seriesDefs:SeriesDef[] = [];

    /** 
     * the `DataSet`s to be used for plots.
     * Each set describes the column names and the rows-of-columns data.
     * The `SeriesDef.dataIndex` determines which set to use.
     */
    public data: DataSet[]; 

    /** determines if seires plot will be clipped to the chart area */
    public clip = true;   

    /** 
     * determines the default style applied to each series.
     * Colors will be chosen by series index from `defaultColors`.
     */
    public defaultStyle:SeriesStyle = {
        line:   { color:'default', visible: true, width: 2},
        marker: { color:'default', visible: false, size: 10, shape: Series.marker.circle},
        label:  { color:'default', visible: false },
        fill:   { color:'default', visible: false },
        bar:    { color:'default', visible: false, width: 50, offset: 30 }
    };       
           
    /** determines the default color for the first couple of series */
    public defaultColors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#000', '#444', '#888', '#ccc'];

    /** 
     * `series` accessor method: array of series definitions to define plots. 
     * 
     */
    public set series(cfg: SeriesDef[]) {    // array of series descriptions
        const defStyle = this.defaultStyle;
        const defColors = this.defaultColors;
        cfg.forEach((s:SeriesDef) => {
            s.type = s.type || 'line';
            s.style = s.style || <SeriesStyle>{};
            s.dataIndex = s.dataIndex || 0;
            const defaults = {
                color:defColors[this.seriesDefs.length]
            };
            copyDefault(s.style, defStyle, defaults);
            this.seriesDefs.push(s);
            switch (s.type) {
                case 'line': 
                    s.style.line.visible = true; 
                    break;
                case 'marker': 
                    s.style.marker.visible = true; 
                    break;
                case 'area': 
                    s.style.fill.visible = true; 
                    break;
                case 'bar': 
                    s.style.fill.visible = true; 
                    break;
            }
        });
    }
    public get series():SeriesDef[] { return this.seriesDefs; }
}

