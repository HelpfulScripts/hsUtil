/**
 * Abstract base class for plots.
 */

/** */
import { m, Vnode}      from 'hslayout';
import { SVGElem }      from './SVGElem';
import { Data, 
         DataRow }      from 'hsdata';
import { XYScale }      from './AxesTypes';
import { Series, 
         SeriesStyle,
         SeriesDef }    from './Series';

export abstract class Plot extends SVGElem {
    drawLine(clipID:string, data:DataRow[], x:number, y:number, scales:XYScale, sStyle:SeriesStyle) {
        const style = `stroke: ${sStyle.line.color}; stroke-width:${sStyle.line.width};`;
        return !sStyle.line.visible? m('.invisible-line','') : this.polyline(data, x, y, scales, clipID, style);
    }

    drawMarker(clipID:string, data:DataRow[], x:number, y:number, scales:XYScale, sStyle:SeriesStyle) {
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



