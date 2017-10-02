import { m }            from 'hslayout';
import { Scale }        from './Scale';

/** defines a [min-max] range */
export interface Range {
    min: number;
    max: number;
}

export interface Point {
    x:   number;
    y:   number;
    dx?: number;
    dy?: number;
    xunit?: string;
    yunit?: string;
    dxunit?: string;
    dyunit?: string;
}

export interface Area {
    w: number;
    h: number;
    wunit?: string;
    hunit?: string;
}

export interface Style {
    cssClass?:      string;     // the css class to set
    style?:         string;     // the style attributes to set
    textAnchor?:    string;     // horizontal text alignment: 'start' | 'middle' | 'end'
    baselineShift?: string;     // vertical text alignment in 'em'
}

export interface TextCfg {
    cssClass?:      string;     // the css class to set
    hAlign?:        string;     // horizontal text-align: 'start' | 'middle' | 'end'
    vAlign?:        string;     // vertical align: 'top' | 'center' | 'bottom'
    hOffset?:       number;     // horizontal label offset in 'em'
    vOffset?:       number;     // vertical label offset in 'em'
}

export const round = (num:number) => (''+num).substr(0, 5+(num<0?1:0));

export abstract class SVGElem {
    text(xy:Point, text:string, cfg:TextCfg={}) {
        let baselineShift = '0em';
        switch(cfg.vAlign) {
            case 'top':    baselineShift = -0.7 +'em'; break;
            case 'center': baselineShift = -0.35+'em'; break;
            case 'bottom': baselineShift =  0   +'em'; break;
        }
        const param = { 
            x: round(xy.x)     + (xy.xunit||''), 
            y: round(xy.y)     + (xy.yunit||''),
            dx:round(cfg.hOffset||0) + 'em',    
            dy:round(cfg.vOffset||0) + 'em',
            class: cfg.cssClass,
            style: `text-anchor:${cfg.hAlign}; baseline-shift: ${baselineShift};`
         };
        return m('text', param, text);
    }

    rect(tl:Point, area:Area, style:Style) {
        const param = {
            x: round(tl.x),       y: round(tl.y),
            width: round(area.w)  + (area.wunit||''), 
            height: round(area.h) + (area.hunit||''),
            class: style? style.cssClass : undefined,
            style: style? `text-anchor:${style.textAnchor}; baseline-shift: ${style.baselineShift}` : undefined
        };
        return m('rect', param);
    }

    clipRect(tl:Point, area:Area, id:string) {
        const param = {
            x: round(tl.x),       y: round(tl.y),
            width: round(area.w)  + (area.wunit||''), 
            height: round(area.h) + (area.hunit||'')
        };
        return m('defs', m('clipPath', {id: id}, m('rect', param)));
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
    polyline(data:[number, number][], x:number, y:number, scales:{x:Scale, y:Scale}, id?:string) {
        return m('polyline', { 
            'clip-path': id? `url(#${id})` : undefined,
            points: data.map((p:number[], i:number) => i===0?'': 
                `${round(scales.x.convert(p[x]))},${round(scales.y.convert(p[y]))}`).join(' ')}); 
    }
}

