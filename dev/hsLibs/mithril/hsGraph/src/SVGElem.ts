import { m, Vnode } from 'hslayout';
import { XYScale }  from './AxesTypes';
import { DataRow }  from 'hsdata';

/** svg primitive Point, measured in viewbox coordinates.  */
export interface Point {
    /** x-viewbox value of the point */
    x:   number;
    /** y-viewbox value of the point */
    y:   number;
    /** viewbox unit to use for x coordinate. Allowed values are 'px' or '%'; defaults to 'px' */
    xunit?: string;
    /** viewbox unit to use for y coordinate. Allowed values are 'px' or '%'; defaults to 'px' */
    yunit?: string;
}

/** svg primitive Rect, measured in viewbox coordinates.  */
export interface Rect {
    /** top left point */
    tl: Point;
    /** bottom right point */
    br: Point;
}

/** 
 * svg extended Point, measured in viewbox coordinates. 
 * Extends `Point` with optional `dx` and 'dy' offsets and optional units.
 */
export interface ExtendedPoint extends Point{
    dx?: number;
    dy?: number;
    dxunit?: string;
    dyunit?: string;
}


export interface Area {
    w: number;
    h: number;
    wunit?: string;
    hunit?: string;
}

export interface TextElem {
    /** the text to show */
    text: string; 

    /** a css class to set */
    cssClass?:  string;   

    /** a style to set */
    style?:  string;   

    /** optional absolute x positioning on the canvas, e.g. '50%' */
    x?:         string;

    /** optional absolute y positioning on the canvas, e.g. '50%' */
    y?:         string;
    
    /** horizontal align: 'start' | 'middle' | 'end'; uses `text-align` attribute */
    xpos:       TextHAlign;

    /** vertical align: 'top' | 'center' | 'bottom'; uses `dy` attribute */
    ypos:       TextVAlign;

    /** horizontal label offset in 'em'; uses `dx` attribute */
    hOffset:    number;

    /** vertical label offset in 'em'; uses `dy` attribute */
    vOffset:    number;
}

export function round (num:number):string { 
    const result = num.toFixed(1);
    if (result === 'Infinity') {
        return '1e20';
    } 
    return result;
}

export enum TextHAlign {
    start   = 'start',
    middle  = 'middle',
    end     = 'end'
}

export enum TextVAlign {
    top     = 'top',
    center  = 'center',
    bottom  = 'bottom'
}

export abstract class SVGElem {
    /**
     * plot some text 
     * @param cfg configures the text alignment and positioning
     * @param text the text to plot
     */
    text(cfg:TextElem, text:string):Vnode {
        let yShift = 0;
        let hAlign:TextHAlign = cfg.xpos;
        switch(cfg.xpos) {
            case TextHAlign.start:  break;
            case TextHAlign.end:    break;
            case TextHAlign.middle: 
            default:       hAlign = TextHAlign.middle; break;
        }
        switch(cfg.ypos) { // additional y 'em' shift
            case TextVAlign.top:    yShift = 0.7; break;
            case TextVAlign.center: yShift = 0.35; break;
            case TextVAlign.bottom: 
            default:                yShift =  0; break;
        }
        const param = { 
            x: cfg.x || '', 
            y: cfg.y || '',
            dx:round(cfg.hOffset||0) + 'em',    
            dy:round((cfg.vOffset||0)+yShift) + 'em',
            style: `text-anchor:${hAlign}; ${cfg.style||''}`,
            class: cfg.cssClass,
        };
        return m('text', param, text);
    }

    /**
     * plot a rectangle in domain coordinates
     * @param tl the top-left corner of the rect
     * @param area the width and height of the rect
     * @param style optional css style setting, such as stroke or stroke-width
     */
    rect(tl:Point, area:Area, style?:string):Vnode {
        if (area.w < 0) {
            tl.x += area.w;
            area.w = -area.w;
        }
        if (area.h < 0) {
            tl.y += area.h;
            area.h = -area.h;
        }
        const param = {
            x: round(tl.x),       y: round(tl.y),
            width: round(area.w)  + (area.wunit||''), 
            height: round(area.h) + (area.hunit||''),
            style: style
        };
        return m('rect', param);
    }

    /**
     * plot a circle around the center domain point `c`, with radius `r`
     * @param c the circle's center point in domain coordinates
     * @param r the circle's radius, in domain coordinates
     * @param style optional css style setting, such as stroke or stroke-width
     */
    circle(c:Point, r:number, style?:string):Vnode {
        return m('circle', { cx: round(c.x), cy: round(c.y), r: round(r), style: style });
    }

    /**
     * defines a clip rect to apply to other elelements via the `id`
     * @param tl top-left corner of the `clipRect` in domain coordinates
     * @param area width and height of the `clipRect` in domain coordinates
     * @param id a unique clip id to reference the `clipRect` by
     */
    clipRect(tl:Point, area:Area, id:string):Vnode {
        const param = {
            x: round(tl.x),       y: round(tl.y),
            width: round(area.w)  + (area.wunit||''), 
            height: round(area.h) + (area.hunit||'')
        };
        return m('defs', m('clipPath', {id: id}, m('rect', param)));
    }

    /**
     * plots a straight line from `x0/y0` to `x1/y1`.
     * @param x0 starting point x domain coordinate 
     * @param x1 ending point x domain coordinate 
     * @param y0 starting point y domain coordinate 
     * @param y1 ending point y domain coordinate 
     * @param cssClass optional css class attribute
     */
    line(x0:number, x1:number, y0:number, y1:number, cssClass?:string):Vnode {
        const param = {
            x1: round(x0), y1: round(y0), 
            x2: round(x1),   y2: round(y1), 
            class: cssClass
        };
        return m('line', param);
    }

    /**
     * plots a horizontal line from `x0/y` to `x1/y`.
     * @param x0 starting point x domain coordinate 
     * @param x1 ending point x domain coordinate 
     * @param y  starting and ending point y domain coordinate 
     * @param cssClass optional css class attribute
     */
    horLine(x0:number, x1:number, y:number, cssClass?:string):Vnode {
        const param = {
            x1: round(x0), y1: round(y), 
            x2: round(x1), y2: round(y), 
            class: cssClass
        };
        return m('line', param);
    }

    /**
     * plots a vertical line from `x/y0` to `x/y1`.
     * @param x  starting and ending point x domain coordinate 
     * @param y0 starting point y domain coordinate 
     * @param y1 ending point y domain coordinate 
     * @param cssClass optional css class attribute
     */
    verLine(x:number, y0:number, y1:number, cssClass?:string):Vnode {
        const param = {
            x1: round(x), y1: round(y0), 
            x2: round(x), y2: round(y1), 
            class: cssClass
        };
        return m('line', param);
    }

    /**
     * plots a polyline from points in `data`. `x` and `y` are the indices to reference 
     * the data for the x-axis, respectively the y-axis in each row in `data`. That is,
     * plot `data[row][x] / data[row][y]` for all rows. 
     * @param data an array of rows; each row is an array of data. The first row contains the 
     * series names and will be skipped.
     * @param x the index in each row to use as x coordinate
     * @param y the index in each row to use as y coordinate
     * @param scales the scales to use to convert coordinates into range values
     * @param id the unique clip-path id to use, or undefined
     * @param style an optional `style` attribute, e.g. to set the stroke and stroke-width.
     */
    polyline(data:DataRow[], x:number, y:number, scales:XYScale, id:string, style?:string):Vnode {
        return m('polyline', { 
            'clip-path': id? `url(#${id})` : undefined,
            style: style,
            points: data.map((row:number[]) => 
                `${round(scales.x.convert(row[x]))},${round(scales.y.convert(row[y]))}`).join(' ')}); 
    }

    /**
     * plots a polygon from points in `data`. `x` and `y` are the indices to reference 
     * the data for the x-axis, respectively the y-axis in each row in `data`. That is,
     * plot `data[row][x] / data[row][y]` for all rows. 
     * @param data an array of rows; each row is an array of data. The first row contains the 
     * series names and will be skipped.
     * @param x the index in each row to use as x coordinate
     * @param y the index in each row to use as y coordinate
     * @param scales the scales to use to convert coordinates into range values
     * @param id the unique clip-path id to use, or undefined
     * @param style an optional `style` attribute, e.g. to set the stroke and stroke-width.
     */
    polygon(dataFore:DataRow[], dataBack:DataRow[], x:number, yFore:number, yBack:number, scales:XYScale, id:string, style?:string):Vnode {
        const sx = (x:number) => round(scales.x.convert(x));
        const sy = (y:number) => round(scales.y.convert(y));
        const clip = id? `url(#${id})` : undefined;
        let points = dataFore.map((row:number[]) => `${sx(row[x])},${sy(row[yFore])}`).join(' ') + ' ';
        points += yBack? 
            dataBack.map((row:number[]) => `${sx(row[x])},${sy(row[yBack])}`).join(' ') :
            `${sx((<number[]>dataBack[dataBack.length-1])[x])},${0} ${sx((<number[]>dataBack[0])[x])},${0}`;
        return m('polygon', { 'clip-path': clip, style: style, points: points });
    }

    /**
     * plots a shape from points in `data`. `x` and `y` are the indices to reference 
     * the data for the x-axis, respectively the y-axis in each row in `data`. That is,
     * plot `data[row][x] / data[row][y]` for all rows. 
     * @param data an array of rows; each row is an array of data. The first row contains the 
     * series names and will be skipped.
     * @param x the index in each row to use as x coordinate
     * @param y the index in each row to use as y coordinate
     * @param scales the scales to use to convert coordinates into range values
     * @param id the unique clip-path id to use, or undefined
     * @param style an optional `style` attribute, e.g. to set the stroke and stroke-width.
     */
    shape(points:DataRow[], id:string, style?:string):Vnode {
        return m('polyline', { 
            'clip-path': id? `url(#${id})` : undefined,
            style: style,
            points: points.map((row:number[]) => 
                `${round(row[0])},${round(row[1])}`).join(' ')}); 
    }
}

