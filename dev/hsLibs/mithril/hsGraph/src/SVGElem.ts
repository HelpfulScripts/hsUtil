import { m }        from 'hslayout';
import { XYScale }  from './Scale';

/** defines a [min-max] range */
export interface Range {
    [0]: number;
    [1]: number;
}

export interface Rect {
    nm?:string; // optional name field
    t:number;   // top
    l:number;   // left
    w:number;   // width
    h:number;   // height
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

export interface TitleCfg extends TextCfg {
    /** determines if the axis title will be rendered */
    visible:boolean;

    /** the axis title */
    text: string; 
}

export interface TextCfg {
    /** the css class to set */
    cssClass?:  string;   

    /** optional absolute x positioning on the canvas, e.g. '50%' */
    x?:         string;

    /** optional absolute y positioning on the canvas, e.g. '50%' */
    y?:         string;
    
    /** horizontal align: 'start' | 'middle' | 'end'; uses `text-align` attribute */
    xpos:       string;

    /** vertical align: 'top' | 'center' | 'bottom'; uses `baseline-shift` attribute */
    ypos:       string;

    /** horizontal label offset in 'em' */
    hOffset:    number;

    /** vertical label offset in 'em' */
    vOffset:    number;
}

export function round (num:number):string { 
    return num.toFixed(1);
}

export abstract class SVGElem {
    /**
     * plot some text 
     * @param cfg configures the text alignment and positioning
     * @param text the text to plot
     */
    text(cfg:TextCfg, text:string) {
        let baselineShift = '0em';
        let hAlign = cfg.xpos;
        switch(cfg.xpos) {
            case 'start':  break;
            case 'end':    break;
            case 'middle': 
            default:       hAlign = 'middle'; break;
        }
        switch(cfg.ypos) {
            case 'top':    baselineShift = -0.7 +'em'; break;
            case 'center': baselineShift = -0.35+'em'; break;
            case 'bottom': 
            default:       baselineShift =  0   +'em'; break;
        }
        const param = { 
            x: cfg.x? cfg.x : '',
            y: cfg.y? cfg.y : '',
            dx:round(cfg.hOffset||0) + 'em',    
            dy:round(cfg.vOffset||0) + 'em',
            style: `text-anchor:${hAlign}; baseline-shift: ${baselineShift};`,
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
    rect(tl:Point, area:Area, style?:string) {
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
    circle(c:Point, r:number, style?:string) {
        return m('circle', { cx: round(c.x), cy: round(c.y), r: round(r), style: style });
    }

    /**
     * defines a clip rect to apply to other elelements via the `id`
     * @param tl top-left corner of the `clipRect` in domain coordinates
     * @param area width and height of the `clipRect` in domain coordinates
     * @param id a unique clip id to reference the `clipRect` by
     */
    clipRect(tl:Point, area:Area, id:string) {
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
    line(x0:number, x1:number, y0:number, y1:number, cssClass?:string) {
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
    horLine(x0:number, x1:number, y:number, cssClass?:string) {
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
    verLine(x:number, y0:number, y1:number, cssClass?:string) {
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
    polyline(data:(string | number)[][], x:number, y:number, scales:XYScale, id:string, style?:string) {
        return m('polyline', { 
            'clip-path': id? `url(#${id})` : undefined,
            style: style,
            points: data.map((row:number[], i:number) => i===0?'': 
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
    polygon(points:[number, number][], id:string, style?:string) {
        return m('polyline', { 
            'clip-path': id? `url(#${id})` : undefined,
            style: style,
            points: points.map((row:number[]) => 
                `${round(row[0])},${round(row[1])}`).join(' ')}); 
    }
}

