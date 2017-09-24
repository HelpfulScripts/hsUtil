
import { m, Vnode}  from 'hslayout';
import { Config }   from './Config';
import { Scale }    from './Scale';

export interface AxisStruct {
    visible:    boolean;    // to be rendered - or not
    title:      string;     // the axis title
    crossesAt:  number;      // where the axis crosses the other axis, in viewBox coordinates
    ticks: {
        major: { length: number; }; // length in viewBox coordinates
        minor: { length: number; }; // length in viewBox coordinates
    };
}
export interface AxisSet {
    primary:   { x: AxisStruct, y: AxisStruct };
    secondary: { x: AxisStruct, y: AxisStruct };
}

export function config(config:Config) {
    config.axes = <AxisSet>{
        primary: {
            x: {visible: true, title:'x', 
                crossesAt:config.graph.bottom,
                ticks: { 
                    major: { length: 10 },
                    minor: { length: 5 },
                }
            },
            y: {visible: true, title:'y', 
                crossesAt:config.graph.left,
                ticks: { 
                    major: { length: 10 },
                    minor: { length: 5 },
                }
            }
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
    drawTickMarks(x:boolean, scale:Scale, cfg:AxisStruct) {
        const ticks = scale.majorTicks;
        return m('svg', ticks.map((t:string) => { 
            const v = scale.convert(parseFloat(t));
            return x? 
                m('line', { x1:v, x2:v, y1:cfg.crossesAt, y2:(cfg.crossesAt+cfg.ticks.major.length) }) :
                m('line', { y1:v, y2:v, x1:cfg.crossesAt, x2:(cfg.crossesAt-cfg.ticks.major.length) });
        }));
    }
    drawTickLabels(x:boolean, scale:Scale, cfg:AxisStruct) {
        const ticks = scale.majorTicks;
        return m('svg', {class:'hs-graph-axis-tick-label'}, ticks.map((t:string) => { 
            const v = scale.convert(parseFloat(t));
            return m('text', { x:x?v:cfg.crossesAt, y:x?cfg.crossesAt:v, dx:x?'0':'-0.7em'}, t);
        }));
    }
    draw(x:boolean, attrs:any) {
        const dir   = x?'x':'y';
        const type  = attrs.type;
        const scale = attrs.scale[type][dir];
        const range = scale.range;
        const cfg   = attrs.cfg[type][dir];
        return !cfg.visible? undefined : m('svg', { class:`hs-graph-axis hs-graph-axis-${x?'x':'y'} hs-graph-axis-${type}`}, [
            this.drawLine(x, range, cfg.crossesAt),
            this.drawTitle(cfg.title, x, range, cfg.crossesAt),
            this.drawTickMarks(x, scale, cfg),
            this.drawTickLabels(x, scale, cfg)
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
