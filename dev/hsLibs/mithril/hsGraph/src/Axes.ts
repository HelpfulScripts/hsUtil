
import { m, Vnode}  from 'hslayout';
import { Config }   from './Config';
import { Scale }    from './Scale';
import { SVGElem }  from './SVGElem';

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

class Axis extends SVGElem {
    drawAxis(x:boolean, range:number[], cross:number) {
        return x? this.line([range[0], cross], [range[1], cross]) :
                  this.line([cross, range[0]], [cross, range[1]]);
    }
    drawTitle(title:string, x:boolean, range:number[], cross:number) {
        return this.text(x?range[1]:cross, x?cross:range[1], title);
    }
    drawTickMarks(x:boolean, scale:Scale, cfg:AxisStruct) {
        const ticks = scale.majorTicks();
        return m('svg', { class:'hs-graph-axis-tick-marks'}, ticks.map((t:string) => { 
            const v = scale.convert(parseFloat(t));
            return x? this.line([v, cfg.crossesAt], [v, cfg.crossesAt+cfg.ticks.major.length]) :
                    this.line([cfg.crossesAt, v], [cfg.crossesAt-cfg.ticks.major.length, v]);
        }));
    }
    drawTickLabels(x:boolean, scale:Scale, cfg:AxisStruct) {
        const ticks = scale.majorTicks();
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
        return !cfg.visible? undefined : m('svg', { class:`hs-graph-axis-${x?'x':'y'} hs-graph-axis-${type}`}, [
            this.drawAxis(x, range, cfg.crossesAt),
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
    static config(config:Config) {
        const cg = config.graph;
        config.axes = <AxisSet>{
            primary: {
                x: {visible: true, title:'x', 
                    crossesAt:cg.bottom,
                    ticks: { 
                        major: { length: 10 },
                        minor: { length: 5 },
                    }
                },
                y: {visible: true, title:'y', 
                    crossesAt:cg.left,
                    ticks: { 
                        major: { length: 10 },
                        minor: { length: 5 },
                    }
                }
            },
            secondary: {
                x: { visible: false, title:'x', crossesAt:cg.top },
                y: { visible: false, title:'y', crossesAt:cg.right }
            }
        };
    }
    
    view(node?: Vnode): Vnode {
        const cfg       = node.attrs.cfg;
        const scales    = node.attrs.scales;
        return m('svg', {class:'hs-graph-axis'}, [
            m(XAxis, { scale:scales, type:'primary',   cfg: cfg }),
            m(YAxis, { scale:scales, type:'primary',   cfg: cfg }),
            m(XAxis, { scale:scales, type:'secondary', cfg: cfg }),
            m(YAxis, { scale:scales, type:'secondary', cfg: cfg })
        ]);
    }
}
