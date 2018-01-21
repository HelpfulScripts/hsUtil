/**
 * ## PlotArea
 * Plots data as an area. `PlotArea` is called if the series' `type` is 'area'.
 * The area will be filled between a series as indexed by `y` and the x-axis, 
 * or a second series indexed by `yBase`.
 * If `yBase` equals `$stacked`, subsequent series will be stacked upon each other.
 * `PlotArea` recognizes the following attributes:
 * - `x`: name of the x series
 * - `y`: name of the y series, also used as higher series when filling against `yBase`
 * - `yBase`: optional lower series to fill against instead of the x-axis. 
 * - `map`: Use 'stacked' to stack series upon each other. Use 'shared' to show the share of
 *    each series, normalized to 1.
 * 
 * <example>
 * <file name='script.js'>
 * let series = {
 *    colNames:['time', 'volume', 'costs'],
 *    rows:[
 *      [-1,  0.2, 0.3],
 *      [0.2, 0.7, 0.2],
 *      [0.4, 0.1, 0.3],
 *      [0.6, 0,   0.1],
 *      [0.8, 0.3, 0.5],
 *      [1,   0.2, 0.4]
 * ]};
 * 
 * m.mount(root, { 
 *    view:() => m(hslayout.Layout, {
 *       rows: [],
 *       content: [
 *          m(hsgraph.Graph, {cfgFn: cfg => defCfg(cfg)}),
 *          m(hsgraph.Graph, {cfgFn: cfg => defCfg(cfg, 'stacked')}),
 *          m(hsgraph.Graph, {cfgFn: cfg => defCfg(cfg, 'shared')})
 *       ]
 *    })
 * });
 * function defCfg(cfg, map) {
 *     cfg.series.series = [
 *        { x:'time', y:'volume', map:map, type: 'area' },
 *        { x:'time', y:'costs',  map:map, type: 'area' }
 *     ];
 *     cfg.series.data      = [series];
 *     cfg.series.series[0].style.fill.color = 'rgba(128, 128, 255, 0.5)';
 *     cfg.series.series[1].style.fill.color = 'rgba(0, 128, 0, 0.5)';
 *     cfg.axes.primary.y.scale.domain = [0, 1];
 *     cfg.axes.primary.y.title.visible = false;
 *     cfg.chart.title.visible = false;
 * }
 * 
 * </file>
 * </example>
 */


/** */
import { m, Vnode}      from 'hslayout';
import { Data }         from 'hsdata';
import { XYScale }      from './AxesTypes';
import { Plot }         from './Plot';
import { SeriesDef }    from './Series';

export class PlotArea extends Plot { 
    plot(data:Data, series:SeriesDef, scales:XYScale, i:number, clipID:string): Vnode[] {
        const x = data.colNumber(series.x);
        const y = data.colNumber(series.y);
        const yBase = data.colNumber(series.yBase);  // or undefined
        const yMax = data.colNumber('$sum');
        if (y===undefined) { return m('.error',''); }
        const d = (!series.map)? data.getData() : data.getData().map((row:any[]) => {
            const r = row.slice(); 
            r[y] = (r[y]+r[yBase]); 
            if (yMax!==undefined) {
                r[y]     /= r[yMax];
                r[yBase] /= r[yMax];
            }
            return r; 
        });
        return [this.drawArea(clipID, d, x, y, yBase, scales, series.style)];
    }
}
