
import { m, Vnode}         from 'hslayout';
import { Config, Area }    from './Graph';
import { Scale }           from './Scale';
import { SVGElem, Style }  from './SVGElem';

export interface AxisStruct {
    visible:    boolean;    // to be rendered - or not
    title:      string;     // the axis title
    crossesAt:  number;     // where the axis crosses the other axis, in viewBox coordinates
    ticks: {
        major:  number;     // length in viewBox coordinates
        minor: number;      // length in viewBox coordinates
    };
}
export interface AxisSet {
    primary:   { x: AxisStruct, y: AxisStruct };
    secondary: { x: AxisStruct, y: AxisStruct };
}

class Axis extends SVGElem {
    drawAxis(x:boolean, range:Area, cross:number) {
        const style:Style = {
            cssClass: 'hs-graph-axis-line'
        };
        return x? this.line({x:range[0], y:cross}, {x:range[1], y:cross}, style) :
                  this.line({x:cross, y:range[0]}, {x:cross, y:range[1]}, style);
    }
    drawTitle(title:string, x:boolean, range:Area, cross:number) {
        const style:Style = {
            cssClass: 'hs-graph-axis-title'
        };
        return this.text({x:x?range[1]:cross, y:x?cross:range[1]}, title, style);
    }
    drawTickMarks(x:boolean, scale:Scale, cfg:AxisStruct) {
        const ticks = scale.majorTicks();
        return m('svg', { class:'hs-graph-axis-tick-marks'}, ticks.map((t:string) => { 
            const v = scale.convert(parseFloat(t));
            return this.line({
                x: x? v : cfg.crossesAt, 
                y: x? cfg.crossesAt : v
            }, {
                x: x? v : cfg.crossesAt-cfg.ticks.major, 
                y: x? cfg.crossesAt+cfg.ticks.major : v
            });
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
        const pa = config.plotArea;
        config.axes = <AxisSet>{
            primary: {
                x: {visible: true, title:'x', 
                    crossesAt:pa.t+pa.h,
                    ticks: { major: 10, minor: 5 },
                },
                y: {visible: true, title:'y', 
                    crossesAt:pa.l,
                    ticks: { major: 10, minor: 5 },
                }
            },
            secondary: {
                x: { visible: false, title:'x', crossesAt:pa.t },
                y: { visible: false, title:'y', crossesAt:pa.l+pa.w }
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
