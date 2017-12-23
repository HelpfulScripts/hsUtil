/**
 * ## PlotLine
 * Plots data as a line by configuring the series' `type` 
 * as {@link Series.Series.plot `Series.plot.line`}. The `cols` name array starts with 
 * the x-value column, followed by the y-column.
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

/** */
import { m, Vnode}  from 'hslayout';
import { Data }     from 'hsdata';
import { XYScale }  from './AxesTypes';
import { Plot }     from './Plot';
import { SeriesDef }from './Series';

export class PlotLine extends Plot { 
    plot(data:Data, series:SeriesDef, scales:XYScale, i:number, clipID:string): Vnode[] {
        const x = data.colNumber(series.cols[0]);
        const y = data.colNumber(series.cols[1]);
        if (x===undefined) { 
            console.log(`${series.cols[0]} not found in data`); 
            return m('.error','');
        } else if (y===undefined) { 
            console.log(`${series.cols[1]} not found in data`); 
            return m('.error','');
        } else { return [
            this.drawLine(clipID, data.getData(), x, y, scales, series.style),
            this.drawMarker(clipID, data.getData(), x, y, scales, series.style)
        ];}
    }
}
