/**
 * ## PlotMarkers
 * Plots data as markers by configuring the series' `type` 
 * as {@link Series.Series.plot 'markers'}. 
 * The `cols` name array starts with 
 * the x-value column, followed by the y-column.
 * 
 * <example>
 * <file name='script.js'>
 * let series = {
 *    colNames:['time', 'volume'],
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
 *          cfg.chart.title.text = 'Simple Example';
 *          cfg.series.data      = [series];
 *          cfg.series.series    = [{ x:'time', y:'volume', type: 'marker' }];
 *      }})
 * });
 *
 * </file>
 * </example>
 */

/** */
import { m, Vnode}  from 'hslayout';
import { Data }     from 'hsdata';
import { XYScale }  from './AxesTypes';
import { Plot }     from './Plot';
import { SeriesDef }from './Series';

export class PlotMarkers extends Plot { 
    plot(data:Data, series:SeriesDef, scales:XYScale, i:number, clipID:string): Vnode[] {
        const x = data.colNumber(series.x);
        const y = data.colNumber(series.y);
        const l = series.l? data.colNumber(series.l) : undefined;
        if (x===undefined) { return m('.error',''); }
        if (y===undefined) { return m('.error',''); }
        return [
            this.drawMarker(clipID, data.getData(), x, y, scales, series.style, series.y),
            (l===undefined)? undefined :
                this.drawLabel(clipID, data.getData(), x, y, l, scales, series)
        ];
    }
}
