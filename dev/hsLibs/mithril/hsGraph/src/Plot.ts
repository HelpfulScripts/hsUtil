import { m, Vnode}      from 'hslayout';
import { SVGElem }      from './SVGElem';
import { Data, 
         DataRows }     from './Data';
import { XYScale }      from './Scale';
import { Series, 
         SeriesStyle,
         SeriesDef }    from './Series';

/**
 * 
 */
export abstract class Plot extends SVGElem {
    drawLine(clipID:string, data:DataRows, x:number, y:number, scales:XYScale, sStyle:SeriesStyle) {
        const style = `stroke: ${sStyle.line.color}; stroke-width:${sStyle.line.width};`;
        return !sStyle.line.visible? m('.invisible-line','') : this.polyline(data, x, y, scales, clipID, style);
    }

    drawMarker(clipID:string, data:DataRows, x:number, y:number, scales:XYScale, sStyle:SeriesStyle) {
        const mrk = Series.marker;
        let style = `fill:${sStyle.marker.color}`;
        return !sStyle.marker.visible? m('.invisible-marker','') : m('svg', {class:'hs-graph-series-markers'},
            data.map((p:number[]) => {
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

    abstract plot(data:Data, series:SeriesDef, scales:XYScale, i:number, clipID:string): Vnode[];

    setDefaults(data:Data, series:SeriesDef, scales:XYScale) {
    }
} 



/**
 * ## PlotLine
 * Plots data as a line
 * 
 * <example>
 * <file name='script.js'>
 * let series = {
 *    names:['time', 'volume'],
 *    rows:[
 *      [-1, 0.2],
 *      [0.2, 0.7],
 *      [0.4, -0.2],
 *      [0.6, 0],
 *      [0.8, 0.5],
 *      [1, 0.7]
 * ]};
 * 
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
 *          cfg.chart.title.text          = 'Simple Example';
 *          cfg.series.data   = series;
 *          cfg.series.series = [{ cols: ['time', 'volume'] }];
 *      }})
 * });
 *
 * </file>
 * </example>
 */
export class PlotLine extends Plot { 
    plot(data:Data, series:SeriesDef, scales:XYScale, i:number, clipID:string): Vnode[] {
        const x = data.colNumber(series.cols[0]);
        const y = data.colNumber(series.cols[1]);
        if (x===undefined || y===undefined) { 
            console.log(`${series.cols[0]} or ${series.cols[1]} not found in data`); 
            return m('.error','');
        } else { return [
            this.drawLine(clipID, data.getData(), x, y, scales, series.style),
            this.drawMarker(clipID, data.getData(), x, y, scales, series.style)
        ];}
    }
}


/**
 * ## PlotBar
 * Plots data as vertical bars
 * 
 * <example>
 * <file name='script.js'>
 * let series = {
 *    names:['volume', 'open', 'close'],
 *    rows:[
 *      [0.2, 0.3, 0.5],
 *      [0.7, 0.1, 0.2],
 *      [0.4, 0.5, 0.6],
 *      [0.1, 0.4, 0.6],
 *      [0.5, 0.3, 0.55],
 *      [0.3, 0.4, 0.5]
 * ]};
 * 
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
 *          cfg.chart.title.text = 'Simple Example';
 *          cfg.series.data   = series;
 *          cfg.series.series = [
 *              { 
 *                  cols: [undefined, 'volume'], 
 *                  type:hsgraph.Series.plot.bar 
 *              },{ 
 *                  cols: [undefined, 'open', 'close'], 
 *                  type:hsgraph.Series.plot.bar 
 *              }
 *          ];
 *      }})
 * });
 *
 * </file>
 * </example>
 */
 export class PlotBar extends Plot { 
    drawBar(clipID:string, data:Data, x:number, y:number, y0:number, scales:XYScale, sStyle:SeriesStyle, s:number) {
        const style = `fill: ${sStyle.bar.color};`;
        const w = sStyle.bar.width;
        let index = (x === undefined);
        return m('svg', {class:'hs-graph-series-bars'}, data.getData().map(
            (p:number[], i:number) => {
                const rx = scales.x.convert(index? i : p[x]) + s*sStyle.bar.offset;
                const ry0 = scales.y.convert(y0<0? 0 : p[y0]);
                const ry = scales.y.convert(p[y]);
                return this.rect({x:rx-w/2, y:ry0}, {h:ry-ry0, w:w}, style);
            })
        );
    }

    setDefaults(data:Data, series:SeriesDef, scales:XYScale) {
        super.setDefaults(data, series, scales);
        let  dom = scales.y.domain();
        if (dom[0] > 0) { 
            dom[0] = 0; 
            scales.y.domain(dom);
        }
        scales.x.domain([-0.5, data.getData().length-0.5]);
    }

    plot(data:Data, series:SeriesDef, scales:XYScale, i:number, clipID:string): Vnode[] {
        const x = data.colNumber(series.cols[0]);
        const y = data.colNumber(series.cols[1]);
        const y0 = series.cols.length < 3? -1 : data.colNumber(series.cols[2]);
        if (y===undefined) { 
            console.log(`${series.cols[1]} not found in data`); 
            return m('.error','');
        } else { return [
            this.drawBar(clipID, data, x, y, y0, scales, series.style, i),
        ];}
    }
}
