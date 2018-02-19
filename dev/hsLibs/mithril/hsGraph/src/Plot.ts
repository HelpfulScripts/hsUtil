/**
 * Abstract base class for plots.
 */

/** */
import { m, Vnode}      from 'hslayout';
import { SVGElem,
         TextElem,
         TextHAlign,
         TextVAlign }   from './SVGElem';
import { Data, 
         DataRow }      from 'hsdata';
import { XYScale }      from './AxesTypes';
import { Series, 
         SeriesStyle,
         SeriesDef }    from './Series';
import { round }        from 'hsutil';

export abstract class Plot extends SVGElem {
    drawLine(clipID:string, data:DataRow[], x:number, y:number, scales:XYScale, sStyle:SeriesStyle, title?:string) {
        const style = `stroke: ${sStyle.line.color}; stroke-width:${sStyle.line.width};`;
        return !sStyle.line.visible? m('.invisible-line','') : this.polyline(data, x, y, scales, clipID, style, title);
    }

    drawMarker(clipID:string, data:DataRow[], x:number, y:number, scales:XYScale, sStyle:SeriesStyle, title?:string) {
        const mrk = Series.marker;
        let style = `fill:${sStyle.marker.color}`;
        return !sStyle.marker.visible? m('.invisible-marker','') : m('svg', {class:'hs-graph-series-markers'},
            data.map((p:number[]) => {
                const cx = scales.x.convert(p[x]);
                const cy = scales.y.convert(p[y]);
                const r  = sStyle.marker.size;
                switch (sStyle.marker.shape) {
                    case mrk.circle: 
                        return this.circle({x:cx, y:cy}, r, style, title);
                    case mrk.square: 
                        return this.rect({x:cx-r, y:cy-r}, {w:2*r, h:2*r}, style, title);
                    case mrk.diamond: 
                        return this.shape([[cx-r, cy], [cx, cy+r], [cx+r, cy], [cx, cy-r]], undefined, style, title);
                    case mrk.upTriangle: 
                        return this.shape([[cx-r, cy+r], [cx+r, cy+r], [cx, cy-r]], undefined, style, title);
                    case mrk.downTriangle: 
                        return this.shape([[cx-r, cy-r], [cx+r, cy-r], [cx, cy+r]], undefined, style, title);
                }
                return m(`.unkown-marker-${sStyle.marker.shape}`,'');
            })
        );
    }

    drawLabel(clipID:string, data:DataRow[], x:number, y:number, lbl:number, scales:XYScale, sDef:SeriesDef) {
        const sStyle = sDef.style;
        const cfg:TextElem = {
            text:       '', 
            cssClass:   ``,
            style:      `fill:${sStyle.label.color}`,
            xpos:       TextHAlign.middle,
            ypos:       TextVAlign.center,
            hOffset:    sDef.hOffset,
            vOffset:    sDef.vOffset
        };
        return !sStyle.marker.visible? m('.invisible-marker','') : m('svg', {class:'hs-graph-series-labels'},
            data.map((p:DataRow) => {
                cfg.x = ''+scales.x.convert(<number>p[x]);
                cfg.y = ''+scales.y.convert(<number>p[y]);
                return this.text(cfg, round(<number>p[lbl], 3));
            })
        );
    }

    drawArea(clipID:string, data:DataRow[], x:number, yFore:number, yBack:number, scales:XYScale, sStyle:SeriesStyle, title:string) {
        if (sStyle.fill.visible) {
            const style = `fill: ${sStyle.fill.color};`;
            const drawFore = data;
            const drawBack = data.slice().reverse();
            return this.polygon(drawFore, drawBack, x, yFore, yBack, scales, clipID, style, title);
        } else {
            m('.invisible-line','');
        }
    }

    abstract plot(data:Data, series:SeriesDef, scales:XYScale, i:number, clipID:string): Vnode[];

    setDefaults(data:Data, series:SeriesDef, scales:XYScale) {
    }
} 



