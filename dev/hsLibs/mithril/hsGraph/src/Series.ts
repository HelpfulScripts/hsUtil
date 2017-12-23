/**
 * # Series
 * renders the one or more series in a variety of styles.
 * 
 * ### Configurations and Defaults
 * See {@link Series.Series.defaultConfig Series.defaultConfig}
 * 
 * @module Series
 */

/** */
import { m, Vnode}      from 'hslayout';
import { Config,
         VisibleCfg }   from './Graph';
import { Data }         from 'hsdata';
import { ColSpecifier } from 'hsdata';
import { SVGElem }      from './SVGElem';
import { Axes }         from './Axes';
import { XYScale }      from './AxesTypes';
import { Plot }         from './Plot';
import { PlotLine }     from './PlotLine';
import { PlotBar }      from './PlotBar';


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
        line:   new PlotLine(),
        bar:    new PlotBar()
    };

    /** 
     * Defines default values for all configurable parameters in `Series`
     * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations.
     * 
     * ### Configurations and Defaults
     * ```
     *  cfg.series = {@link Series.SeriesConfig <SeriesConfig>}{
     *          // data to be plotted, initialized as `undefined`
     *      data: {@link Data.Data <Data>},     
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
            s.type = s.type || Series.plot.line;
            s.style = s.style || <SeriesStyle>{};
            if (s.cols[0] === undefined) { // no x-value -> use index
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
        const data:Data      = node.attrs.data;
        const clipID = cfg.clip? 'hs'+Math.floor(Math.random()*10000) : undefined;
        cfg.series.map((series:SeriesDef) => series.type.setDefaults(data, series, scales));
        return m('svg', { class:'hs-graph-series'}, [
            this.drawClipRect(clipID, scales),
            m('svg', cfg.series.map((series:SeriesDef, i:number) => { 
                return m('svg', {class:`hs-graph-series-${i}`}, series.type.plot(data, series, scales, i, clipID));
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

    /** the marker shape, selected from {@link Series.marker Series.marker} */
    shape: Symbol;              
}

export interface FillStyle extends ColoredCfg {
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
}

/** 
 * Defines Series columns and values to use, as well as the plot type to apply 
 */
export interface SeriesDef {
    /** 
     * required column names or indices. 
     * [0] is reserved for the x direction. 
     * Further elements are dependent on the {@link Series.type plot} type. 
     */
    cols:ColSpecifier[];  
    /** optional plot type, selected from {@link Series.Series.plot Series.plot}; defaults to  `Series.plot.line` */
    type?:Plot;   
    /** style information to use for plotting; if ommitted, a `type`-dependent default is used */
    style?:SeriesStyle;
}


/** Defines configurable settings. */
export class SeriesConfig {
    private seriesDefs:SeriesDef[] = [];

    /** the data set to plot, describing the column names and the rows-of-columns data */
    public data: Data; 

    /** determines if seires plot will be clipped to the chart area */
    public clip = true;   

    /** 
     * determines the default style applied to each series.
     * Colors will be chosen by series index from `defaultColors`.
     */
    public defaultStyle = {
        line:   { color:'default', visible: true, width: 5},
        marker: { color:'default', visible: false, size: 10, shape: Series.marker.circle},
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
            s.type = s.type || Series.plot.line;
            s.style = s.style || <SeriesStyle>{};
            const defaults = {
                color:defColors[this.seriesDefs.length]
            };
            copyDefault(s.style, defStyle, defaults);
            this.seriesDefs.push(s);
        });
    }
    public get series():SeriesDef[] { return this.seriesDefs; }
}

