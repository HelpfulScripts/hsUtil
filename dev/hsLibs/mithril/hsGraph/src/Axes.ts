
import { m, Vnode}  from 'hslayout';
import { Config }   from './Config';

export interface AxisStruct {
    visible:    boolean;    // to be rendered - or not
    title:      string;     // the axis title
    crossesAt:  number;      // where the axis crosses the other axis, in viewBox coordinates
}
export interface AxisSet {
    primary:   { x: AxisStruct, y: AxisStruct };
    secondary: { x: AxisStruct, y: AxisStruct };
}

export function config(config:Config) {
    config.axes = <AxisSet>{
        primary: {
            x: { visible: true, title:'x', crossesAt:config.graph.bottom },
            y: { visible: true, title:'y', crossesAt:config.graph.left }
        },
        secondary: {
            x: { visible: false, title:'x', crossesAt:config.graph.top },
            y: { visible: false, title:'y', crossesAt:config.graph.right }
        }
    };
}

class Axis {
    drawLine(x:boolean, range:number[], cross:number) {
        return x? m('line', { x1:range[0], x2: range[1], y1:cross, y2:cross }) :
                  m('line', { y1:range[0], y2: range[1], x1:cross, x2:cross });
    }
    drawTitle(title:string, x:boolean, range:number[], cross:number) {
        return x? m('text', { x:range[1], y:cross }, title) :
                  m('text', { y:range[1], x:cross }, title);
    }
    draw(x:boolean, attrs:any) {
        const dir   = x?'x':'y';
        const type  = attrs.type;
        const scale = attrs.scale[type][dir];
        const range = scale.range;
        const cfg   = attrs.cfg[type][dir];
        return !cfg.visible? undefined : m('svg', { class:`hs-graph-axis hs-graph-axis-${x?'x':'y'} hs-graph-axis-${type}`}, [
                this.drawLine(x, range, cfg.crossesAt),
                this.drawTitle(cfg.title, x, range, cfg.crossesAt)
                // labels, ticks, ...
            ]);
    }
}

class XAxis extends Axis {
    view(node?: Vnode): Vnode { return this.draw(true, node.attrs); }
}

class YAxis extends Axis {
    view(node?: Vnode): Vnode { return this.draw(false, node.attrs); }
}

export class Axes {
    view(node?: Vnode): Vnode {
        const cfg       = node.attrs.cfg;
        const scales    = node.attrs.scales;
        return m('svg', [
            m(XAxis, { scale:scales, type:'primary',   cfg: cfg }),
            m(YAxis, { scale:scales, type:'primary',   cfg: cfg }),
            m(XAxis, { scale:scales, type:'secondary', cfg: cfg }),
            m(YAxis, { scale:scales, type:'secondary', cfg: cfg })
        ]);
    }
}
