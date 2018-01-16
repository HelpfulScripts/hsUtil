/**
 * ## PlotArea
 * Plots data as a line by configuring the series' `type` 
 * as {@link Series.Series.plot 'line'}. The `cols` name array starts with 
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
 *          cfg.series.data   = [series];
 *          cfg.series.series = [{ x:'time', yh:'volume', type: 'area' }];
 *      }})
 * });
 *
 * </file>
 * </example>
 */

/** */
import { m, Vnode}          from 'hslayout';
import { Data, DataRow }    from 'hsdata';
import { XYScale }          from './AxesTypes';
import { Plot }             from './Plot';
import { SeriesDef, 
         SeriesStyle }      from './Series';

export class PlotArea extends Plot { 
    drawArea(clipID:string, data:DataRow[], x:number, yFore:number, yBack:number, scales:XYScale, sStyle:SeriesStyle) {
        if (sStyle.fill.visible) {
            const style = `fill: ${sStyle.fill.color};`;
            return this.polygon(data, data.slice().reverse(), x, yFore, yBack, scales, clipID, style);
        } else {
            m('.invisible-line','');
        }
    }

    plot(data:Data, series:SeriesDef, scales:XYScale, i:number, clipID:string): Vnode[] {
        const x = data.colNumber(series.x);
        const yh = data.colNumber(series.yh);
        const yl = data.colNumber(series.yl);  // or undefined
        if (x===undefined) { return m('.error',''); }
        if (yh===undefined) { return m('.error',''); }
        return [
            this.drawArea(clipID, data.getData(), x, yh, yl, scales, series.style),
        ];
    }
}
