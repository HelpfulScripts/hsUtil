
import { m, Vnode}              from 'hslayout';
import { Plot }                 from './Plot';
import { Data, DataRows }       from './Data';
import { XYScale }              from './Scale';
import { Series, SeriesStyle }  from './Series';

export class PlotLine extends Plot { 
    drawLine(clipID:string, data:DataRows, x:number, y:number, scales:XYScale, sStyle:SeriesStyle) {
        const style = `stroke: ${sStyle.line.color}; stroke-width:${sStyle.line.width};`;
        return !sStyle.line.visible? m('.invisible-line','') : this.polyline(data, x, y, scales, clipID, style);
    }

    drawMarker(clipID:string, data:DataRows, x:number, y:number, scales:XYScale, sStyle:SeriesStyle) {
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

    plot(data:Data, x:number, y:number, scales:XYScale, cfg:SeriesStyle, clipID:string): Vnode[] {
        return [
            this.drawLine(clipID, data.getData(), x, y, scales, cfg),
            this.drawMarker(clipID, data.getData(), x, y, scales, cfg)
        ];
    }
}
