import { m }            from 'hslayout';
import { Scale }        from './Scale';
import { Point, Area }  from './Graph';

export interface Style {
    cssClass?:      string; // the css class to set
    style?:         string; // the style attributes to set
    textAnchor?:    string; // horizontal text alignment: 'start' | 'middle' | 'end'
    baselineShift?: string; // vertical text alignment in 'em'
}

const round = (num:string|number) => (''+num).substr(0, 5);

export abstract class SVGElem {
    text(xy:Point, text:string, style?:Style) {
        const param = { 
            x: round(xy.x), y: round(xy.y),
            class: style? style.cssClass : undefined,
            style: style? `text-anchor:${style.textAnchor}; baseline-shift: ${style.baselineShift}` : undefined
         };
        return m('text', param, text);
    }

    rect(tl:Point, area:Area, style?:Style) {
        const param = {
            x: round(tl.x),       y: round(tl.y),
            width: round(area.w), height: round(area.h),
            class: style? style.cssClass : undefined,
            style: style? `text-anchor:${style.textAnchor}; baseline-shift: ${style.baselineShift}` : undefined
        };
        return m('rect', param);
    }

    line(from:Point, to:Point, style?:Style) {
        const param = {
            x1: round(from.x), y1: round(from.y), 
            x2: round(to.x),   y2: round(to.y), 
            class: style? style.cssClass : undefined,
        };
        return m('line', param);
    }

    /**
     * plots a polyline from points in `data`. `x` and `y` are the indices to reference 
     * the data for the x-axis, respectively the y-axis in each row in `data`.
     * @param data an array of rows; each row is an array of data. The first row contains the 
     * series names.
     * @param x the index in each row to use as x coordinate
     * @param y the index in each row to use as y coordinate
     */
    polyline(data:[number, number][], x:number, y:number, scales:{x:Scale, y:Scale}) {
        return m('polyline', { points: data.map((p:number[], i:number) => i===0?'': 
            `${round(scales.x.convert(p[x]))},${round(scales.y.convert(p[y]))}`).join(' ')}); 
    }
}

