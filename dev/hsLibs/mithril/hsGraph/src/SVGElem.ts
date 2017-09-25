import { m }        from 'hslayout';
import { Scale }    from './Scale';

const round = (num:number) => (''+num).substr(0, 5);
export class SVGElem {
    text(x:number, y:number, text:string) {
        return m('text', { x:round(x), y:round(y) }, text);
    }

    rect(left:number, top:number, width:number, height:number, cssClass:string) {
        return m('rect', { class:cssClass, x:round(left), y:round(top), width:round(width), height:round(height) });
    }

    line(from:[number, number], to:[number, number]) {
        return m('line', { x1:round(from[0]), x2:round(to[0]), y1:round(from[1]), y2:round(to[1]) });
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

