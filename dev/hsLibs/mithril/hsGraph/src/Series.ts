/**
 * # Series
 * renders the one or more series in a variety of styles.
 * 
 * ### Configurations and Defaults
 * See {@link Series.Series.config Series.config}
 * 
 */

/** */
import { m, Vnode}              from 'hslayout';
import { Config }               from './Graph';
import { DataSet, ColIndex }    from './Data';
import { SVGElem }              from './SVGElem';
import { XYScale }              from './Scale';
import { PlotLine }             from './PlotLine';

export interface SeriesStyle {
    line: {
        visible: boolean;           
        color: string;              // the stroke color in hex
        width: number;              // the stroke width in px
    };
    marker: {
        visible: boolean;           
        color: string;              // the stroke color in hex (#xxx)
        size:  number;              // the stroke width in px
        shape: Symbol;              
    };
}

/** Defines Series columns and values to use. */
export interface SeriesCfg {
    xCol:ColIndex;     // the column name or index for the x values
    yCol:ColIndex;     // the column name or index for the y values
}

/** Defines configurable settings. */
export interface SeriesSet {
    data: DataSet;          // array of rows; 1st row contains column headers
    clip: boolean;          // clip series to the chart area
    styles: SeriesStyle[];  // the series' style
    series: SeriesCfg[];    // array of series descriptions
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
     * Defines default values for all configurable parameters in `Series`
     * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations.
     * 
     * ### Configurations and Defaults
     * ```
     *  cfg.series = {@link Series.SeriesSet <SeriesSet>}{
     *    data:<[][]>null,  // row array of columns, initialized to null; first row contains column names
     *    clip: true,       // series an markers are clipped to the plot area
     *    series: <[{       // array of series descriptors:
     *       xCol:string,   //    name of x-column in `data`
     *       yCol:string    //    name of y-column in `data`
     *    }]>[],            // initialized to empty array (no series)
     *    styles: [         // array of predefined styles. styles[i] will be assigned to series[i].
     *       { line:   { 
     *            color: <color>,// the line color to use
     *            width: 5,      // the line width in viewbox units
     *            visible: true  // whether line is draw or not
     *       },
     *         marker: { 
     *            color: <color>,// the marker color to use
     *            size: 10,      // the marker size in viewbox coordinates
     *            shape: Series.marker.circle, // the marker shaper, See {@link Series.Series.marker Series.marker}
     *            visible: true 
     *       }}
     *    ]
     *  } 
     * with <color> in sequence ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#000', '#444', '#888', '#ccc']
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components.
     */
    static config(cfg:Config) {
        cfg.series = <SeriesSet>{
            data: {names:[], rows:[]},
            clip: true,
            series: <SeriesCfg[]>[],
            styles: ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#000', '#444', '#888', '#ccc']
                .map((c:string) => {
                    return {line:   { color: c, width: 5, visible: true},
                            marker: { color: c, size: 10, shape: Series.marker.circle, visible: false }
                    };
                })              
        };
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
        const cfg    = node.attrs.cfg;
        const scales = node.attrs.scales.primary;
        const data   = node.attrs.data;
        const clipID = cfg.clip? 'hs'+Math.floor(Math.random()*10000) : undefined;
        return m('svg', { class:'hs-graph-series'}, [
            this.drawClipRect(clipID, scales),
            m('svg', cfg.series.map((series:SeriesCfg, i:number) => { 
                const x = data.colNumber(series.xCol);
                const y = data.colNumber(series.yCol);
                if (x<0 || y<0) { 
                    console.log(`${series.xCol} or ${series.yCol} not found in data`); 
                    return m('.error','');
                } else {
                    const plot = new PlotLine();
                    return m('svg', {class:`hs-graph-series-${i}`}, 
                        plot.plot(data, x, y, scales, cfg.styles[i], clipID)
                    );
                }
            }))
        ]);
    }
}
