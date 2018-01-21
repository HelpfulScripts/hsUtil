/**
 * ## PlotBar 
 * Plots data as vertical bars by configuring the series' `type` 
 * as {@link Series.Series.plot 'bar'}. The `cols` name array starts with 
 * the x-value column, or `undefined` to use the row index as x-values.
 * 
 * #### Mode 1 - Classic Bars
 * Specify a single name for y-values to generate bars that reach up from the
 * x-axis to the value in each data row. Negative heights are allowed.
 * Example: `y:'volume'`
 * 
 * #### Mode 2 - High-Low Bars
 * Specify names for y and yBase values to create high-low bars that reach from the 
 * y-value to the yBase-value for each data row. Negative heights are allowed.
 * Example: `y:'open', yBase:'close'`
 * 
 * #### Example
 * <example>
 * <file name='script.js'>
 * let series = {
 *    colNames:['time', 'volume', 'open', 'close'],
 *    rows:[
 *      [5, 0.2, 0.3, 0.5],
 *      [10, 0.7, 0.1, 0.2],
 *      [15, 0.4, 0.5, 0.6],
 *      [20, 0.1, 0.4, 0.6],
 *      [25,0.5, 0.3, 0.55],
 *      [30, 0.3, 0.4, 0.5]
 * ]};
 * 
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
 *          cfg.chart.title.text = 'Bar Chart';
 *          cfg.series.data   = [series];
 *          cfg.series.series = [
 *              { y:'volume', type: 'bar'},
 *              { y:'open', yBase:'close', type: 'bar'}
 *          ];
 *          cfg.series.series[0].style.bar.width = 80;
 *          cfg.series.series[1].style.bar.offset = 0;
 *          cfg.series.series[1].style.bar.width = 10;
 *      }})
 * });
 *
 * </file>
 * </example>
 */

/** */
import { m, Vnode}      from 'hslayout';
import { Data }         from 'hsdata';
import { NumDomain }    from 'hsdata';
import { XYScale }      from './AxesTypes';
import { Plot }         from './Plot';
import { SeriesDef,
         SeriesStyle }  from './Series';

export class PlotBar extends Plot {
    drawBar(clipID:string, data:Data, x:number, y:number, y0:number, scales:XYScale, sStyle:SeriesStyle, s:number) {
        const style = `fill: ${sStyle.bar.color};`;
        const index = (x === undefined);
        const domain = <NumDomain>scales.x.domain();
        const offset = s*sStyle.bar.offset * (domain[1] - domain[0])/ (100 * data.getData().length);
        const width  = sStyle.bar.width    * (domain[1] - domain[0])/ (100 * data.getData().length);
        return m('svg', {class:'hs-graph-series-bars'}, data.getData().map(
            (p:number[], i:number) => {
                const rx0 = scales.x.convert((index? i : p[x]) + offset - width/2);
                const rx1 = scales.x.convert((index? i : p[x]) + offset + width/2);
                const ry0 = scales.y.convert(y0===undefined? 0 : p[y0]);
                const ry = scales.y.convert(p[y]);
                return this.rect({x:rx0, y:ry0}, {h:ry-ry0, w:rx1-rx0}, style);
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
        if (series.x === undefined) {
            scales.x.domain([-0.5, data.getData().length-0.5]);
        }
    }

    plot(data:Data, series:SeriesDef, scales:XYScale, i:number, clipID:string): Vnode[] {
        const x = data.colNumber(series.x);
        const y = data.colNumber(series.y);
        const yBase = series.yBase? data.colNumber(series.yBase) : undefined;
        if (y===undefined) { return m('.error',''); }
        return [
            this.drawBar(clipID, data, x, y, yBase, scales, series.style, i),
        ];
    }
}
