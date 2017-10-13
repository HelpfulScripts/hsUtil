/**
 * # Series
 * renders the one or more series in a variety of styles.
 * 
 * ### Configurations and Defaults
 * See {@link Series.Series.config Series.config}
 * 
 */

/** */
import { m, Vnode}                  from 'hslayout';
import { Config }                   from './Graph';
import { DataSet }                  from './Data';
import { SVGElem }                  from './SVGElem';
import { XYScale, Scale, Scales }   from './Scale';

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

/** Defines configurable settings. */
export interface SeriesSet {
    data: DataSet;          // array of rows; 1st row contains column headers
    clip: boolean;          // clip series to the chart area
    styles: SeriesStyle[];  // the series' style
    series: [{              // array of series descriptions
        xName:string;       // the name to index the x values
        yName:string;       // the name to index the y values
    }];
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
     *       xName:string,  //    name of x-column in `data`
     *       yName:string   //    name of y-column in `data`
     *    }]>[],            // initialized to empty array (no series)
     *    styles: [         // arra of predefined styles. styles[i] will be assigned to series[i].
     *       { line:   { 
     *            color: '#f00', // the line color to use
     *            width: 5,      // the line width in viewbox units
     *            visible: true  // whether line is draw or not
     *       },
     *         marker: { 
     *            color: '#f00', // the marker color to use
     *            size: 10,      // the marker size in viewbox coordinates
     *            shape: Series.marker.circle, // the marker shaper, See {@link Series.Series.marker Series.marker}
     *            visible: true 
     *       }},
     *       { line:   { color: '#0f0', width: 5, visible: true },
     *         marker: { color: '#0f0', size: 10, shape: Series.marker.circle, visible: true }},
     *       { line:   { color: '#00f', width: 5, visible: true },
     *         marker: { color: '#00f', size: 10, shape: Series.marker.circle, visible: true }},
     *       { line:   { color: '#ff0', width: 5, visible: true },
     *         marker: { color: '#ff0', size: 10, shape: Series.marker.circle, visible: true }},
     *       { line:   { color: '#0ff', width: 5, visible: true },
     *         marker: { color: '#0ff', size: 10, shape: Series.marker.circle, visible: true }},
     *       { line:   { color: '#f0f', width: 5, visible: true },
     *         marker: { color: '#f0f', size: 10, shape: Series.marker.circle, visible: true }},
     *       { line:   { color: '#000', width: 5, visible: true },
     *         marker: { color: '#000', size: 10, shape: Series.marker.circle, visible: true }},
     *       { line:   { color: '#444', width: 5, visible: true },
     *         marker: { color: '#444', size: 10, shape: Series.marker.circle, visible: true }},
     *       { line:   { color: '#888', width: 5, visible: true },
     *         marker: { color: '#888', size: 10, shape: Series.marker.circle, visible: true }},
     *       { line:   { color: '#ccc', width: 5, visible: true },
     *         marker: { color: '#ccc', size: 10, shape: Series.marker.circle, visible: true }}
     *    ]
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components.
     */
    static config(cfg:Config) {
        cfg.series = <SeriesSet>{
            data: null,
            clip: true,
            series: <[{xName:string, yName:string}]>[],
            styles: [
                { line:   { color: '#f00', width: 5, visible: true },
                  marker: { color: '#f00', size: 10, shape: Series.marker.circle, visible: false }},
                { line:   { color: '#0f0', width: 5, visible: true },
                  marker: { color: '#0f0', size: 10, shape: Series.marker.circle, visible: false }},
                { line:   { color: '#00f', width: 5, visible: true },
                  marker: { color: '#00f', size: 10, shape: Series.marker.circle, visible: false }},
                { line:   { color: '#ff0', width: 5, visible: true },
                  marker: { color: '#ff0', size: 10, shape: Series.marker.circle, visible: false }},
                { line:   { color: '#0ff', width: 5, visible: true },
                  marker: { color: '#0ff', size: 10, shape: Series.marker.circle, visible: false }},
                { line:   { color: '#f0f', width: 5, visible: true },
                  marker: { color: '#f0f', size: 10, shape: Series.marker.circle, visible: false }},
                { line:   { color: '#000', width: 5, visible: true },
                  marker: { color: '#000', size: 10, shape: Series.marker.circle, visible: false }},
                { line:   { color: '#444', width: 5, visible: true },
                  marker: { color: '#444', size: 10, shape: Series.marker.circle, visible: false }},
                { line:   { color: '#888', width: 5, visible: true },
                  marker: { color: '#888', size: 10, shape: Series.marker.circle, visible: false }},
                { line:   { color: '#ccc', width: 5, visible: true },
                  marker: { color: '#ccc', size: 10, shape: Series.marker.circle, visible: false }}
            ]
        };
    }

    /** detrmines the max ranges each coordinate of each series and auto-sets the domains on the respective scales. */
    static adjustDomains(cfg:SeriesSet, scales:Scales) {
        function findDomain(dateType:boolean, name:string, minMax:[number, number]) {
            const index = cfg.data[0].indexOf(name);
            if (index<0) { console.log(`coordinate ${name} not found in setAutoDomain`); }
            else {
                cfg.data.forEach((p:Array<string|number>, i:number) => {
                    if (i>0) {
                        let v:number = dateType? Date.parse(<string>p[index]) : <number>p[index];
                        minMax[0] = Math.min(minMax[0], v);
                        minMax[1] = Math.max(minMax[1], v);
                    } 
                });
            }
        }
        
        let xMinMax:[number, number] = [1e20, -1e20];
        let yMinMax:[number, number] = [1e20, -1e20];
        const xDateType = scales.primary.x.scaleType() === Scale.type.date;
        const yDateType = scales.primary.y.scaleType() === Scale.type.date;
        cfg.series.map((s:{xName:string, yName:string})=>{ // for each series:
            findDomain(xDateType, s.xName, xMinMax);
            findDomain(yDateType, s.yName, yMinMax);
        });
        scales.primary.x.setAutoDomain(xMinMax);
        scales.primary.y.setAutoDomain(yMinMax);
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

    drawLine(clipID:string, data:Array<number|string>[], x:number, y:number, scales:XYScale, sStyle:SeriesStyle) {
        const style = `stroke: ${sStyle.line.color}; stroke-width:${sStyle.line.width};`;
        return !sStyle.line.visible? m('.invisible-line','') : this.polyline(data, x, y, scales, clipID, style);
    }

    drawMarker(clipID:string, data:Array<number|string>[], x:number, y:number, scales:XYScale, sStyle:SeriesStyle) {
        const mrk = Series.marker;
        let style = `fill:${sStyle.marker.color}`;
        return !sStyle.marker.visible? m('.invisible-marker','') : m('svg', {class:'hs-graph-series-markers'},
            data.filter((e:any, i:number) => i>0)
                .map((p:number[]) => {
                    const cx = scales.x.convert(p[x]);
                    const cy = scales.y.convert(p[y]);
                    const r  = sStyle.marker.size;
                    switch (sStyle.marker.shape) {
                        case mrk.circle: 
                            return this.circle({x:cx, y:cy}, r, style);
                        case mrk.square: 
                            return this.rect({x:cx-r, y:cy-r}, {w:2*r, h:2*r}, style);
                        case mrk.diamond: 
                            return this.polygon([[cx-r, cy], [cx, cy+r], [cx+r, cy], [cx, cy-r]], undefined, style);
                        case mrk.upTriangle: 
                            return this.polygon([[cx-r, cy+r], [cx+r, cy+r], [cx, cy-r]], undefined, style);
                        case mrk.downTriangle: 
                            return this.polygon([[cx-r, cy-r], [cx+r, cy-r], [cx, cy+r]], undefined, style);
                    }
                    return m(`.unkown-marker-${sStyle.marker.shape}`,'');
                })
        );
    }

    generate(data: number[]) {
        const genFunc = function* () {
            for (let i=0; i<data.length; i++) {
                yield data[i];
            }
        };
        for (let d of genFunc()) { console.log(d); }
    }


    view(node?: Vnode): Vnode {
        const cfg    = node.attrs.cfg;
        const scales = node.attrs.scales.primary;
        const data   = cfg.data;
        const clipID = cfg.clip? 'hs'+Math.floor(Math.random()*10000) : undefined;
        return m('svg', { class:'hs-graph-series'}, [
            this.drawClipRect(clipID, scales),
            m('svg', cfg.series.map((series:{xName:string, yName:string}, i:number) => { 
                const x = data[0].indexOf(series.xName);
                const y = data[0].indexOf(series.yName);
                if (x<0 || y<0) { 
                    console.log(`${series.xName} or ${series.yName} not found in ${data[0]}`); 
                    return m('.error','');
                } else {
                    return m('svg', {class:`hs-graph-series-${i}`}, [
                        this.drawLine(clipID, data, x, y, scales, cfg.styles[i]),
                        this.drawMarker(clipID, data, x, y, scales, cfg.styles[i])
                    ]);
                }
            }))
        ]);
    }
}
