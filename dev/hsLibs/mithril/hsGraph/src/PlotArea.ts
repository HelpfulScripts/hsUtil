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
 *          cfg.series.data   = [series];
 *          cfg.series.series = [{ cols: ['time', 'volume'] }];
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
        const x = data.colNumber(series.cols[0]);
        const y0 = data.colNumber(series.cols[1]);
        const y1 = data.colNumber(series.cols[2]);  // or undefined
        if (x===undefined) { 
            return m('.error','');
        } else if (y0===undefined) { 
            return m('.error','');
        } else { return [
            this.drawArea(clipID, data.getData(), x, y0, y1, scales, series.style),
        ];}
    }
}
