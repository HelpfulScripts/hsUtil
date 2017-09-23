/**
 * # Graph
 * <example>
 * <file name='script.js'>
 * let c = [1,2,3,4,5];
 * 
 * const cfg = {
 * }
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfg: cfg})
 * });
 *
 * </file>
 * <file name='style.css'>
 * .hs-graph { fill: #ddd; }
 * .hs-graph-chart { fill: #fff; }
 * </file>
 * </example>

 */

/** */
import { m, Vnode}      from 'hslayout';

const viewBoxSize:number  = 1000;     // the viewBox size
const marginLeft:number   = 100;
const marginRight:number  = 30;
const marginTop:number    = 30;
const marginBottom:number = 100;

interface ScaleStruct {
    domain?: [number, number];
    range?:  [number, number];
}

interface Config {
    graph?:{
        range?:  { w?: number, h?: number },    // graph viewBox width and height
        bottom?: number,                        // position of chart in viewBox
        left?:   number,                        // position of chart in viewBox
        top?:    number,                        // position of chart in viewBox
        right?:  number                         // position of chart in viewBox
    };
    scale?:{
        primary:   { x: ScaleStruct, y: ScaleStruct },
        secondary: { x: ScaleStruct, y: ScaleStruct }
    };
    axes?:{

    };
    chart?:{

    };
}
const config:Config = {};
config.graph = {
    range:  { w: viewBoxSize, h: viewBoxSize }, // graph width and height
    bottom: viewBoxSize-marginBottom,           // position of chart in viewBox
    left:   marginLeft,                         // position of chart in viewBox
    top:    marginTop,                          // position of chart in viewBox
    right:  viewBoxSize-marginRight             // position of chart in viewBox
};
config.scale = {
    primary: {
        x: { domain: [0, 1], range: [config.graph.left, config.graph.right] },
        y: { domain: [0, 1], range: [config.graph.bottom, config.graph.top] }
    },
    secondary: {
        x: { domain: [0, 1], range: [config.graph.left, config.graph.right] },
        y: { domain: [0, 1], range: [config.graph.bottom, config.graph.top] }
    }
};
config.axes = {
    primary: {
        x: { visible: true, crossesAt:config.graph.bottom },
        y: { visible: true, crossesAt:config.graph.left }
    },
    secondary: {
        x: { visible: false, crossesAt:config.graph.top },
        y: { visible: false, crossesAt:config.graph.right }
    }
};
config.chart = {
};

/**
 * Creates a deep copy of `org` in `dest`.
 * Fields already set in `dest` are preserved.
 * @param org 
 * @param dest 
 */
function copy(org:any, dest:any):any {
    Object.keys(org).map((k:string) => {
        if (typeof org[k] === 'object') { 
            dest[k] = dest[k] || {};
            copy(org[k], dest[k]); 
        } else {
            dest[k] = dest[k] || org[k];
        }
    });
    return dest;
}


/**
 * translates a domain into a range
 */
class Scale {
    constructor(private _range:number[], private _domain=[0,1]) {}
    get range():number[]  { return this._range; }
    get domain():number[] { return this._domain; }
    set domain(dom:number[]) { this._domain = dom; }
    convert(domVal:number) { 
        const dom = this._domain;
        const range = this._range;
        return (domVal- dom[0]) / (dom[1] - dom[0]) * (range[1] - range[0]) + range[0];
    }
}

export class Graph {
    private scales = { 
        primary:  <{x:Scale, y:Scale}> { },
        secondary:<{x:Scale, y:Scale}> { }
    };

    private createScales(cfg:any) {
        if (!this.scales.primary.x) { 
            this.scales.primary.x   = new Scale([cfg.left,   cfg.right]);
            this.scales.primary.y   = new Scale([cfg.bottom, cfg.top]);
            this.scales.secondary.x = new Scale([cfg.left,   cfg.right]);
            this.scales.secondary.y = new Scale([cfg.bottom, cfg.top]);
        }
    }

    view(node?: Vnode): Vnode {
        const cp = copy(config, node.attrs.cfg || {});
        const cg = cp.graph;
        this.createScales(cg);
        return m('svg', { width:'100%', height:'100%', viewBox:`0 0 ${cg.range.w} ${cg.range.h}`, preserveAspectRatio:'none'}, [
            m('rect', { class:'hs-graph', width:cg.range.w, height:cg.range.h}),
            m(Chart, {  cfg:cp.chart, x:cg.left, y:cg.top, 
                        width: cg.right-cg.left, height:cg.bottom-cg.top }),
            m(Axes, {cfg:cp.axes, scales:this.scales }),
            m(Grid),
            m(Series),
            m(Title),
            m(Legend)
        ]);
    }
}

class Chart {
    view(node?: Vnode): Vnode {
        const cfg = node.attrs.cfg;   if(cfg){}
        return m('rect', { class:'hs-graph-chart', 
            x:      node.attrs.x, 
            y:      node.attrs.y,
            width:  node.attrs.width,
            height: node.attrs.height
        });
    }
}

class Axis {
    drawLine(x:boolean, range:number[], cross:number) {
        return x? m('line', {x1:range[0], x2: range[1], y1:cross, y2:cross }) :
                  m('line', {y1:range[0], y2: range[1], x1:cross, x2:cross });
    }
    draw(x:boolean, attrs:any) {
        const type = attrs.type;
        const range = attrs.scale.range;
        const cross = attrs.cfg.crossesAt;
        return m('svg', { class:`hs-graph-axis hs-graph-axis-${x?'x':'y'} hs-graph-axis-${type}`}, [
                this.drawLine(x, range, cross)
                // labels, ticks, ...
            ]);
    }
}

class XAxis extends Axis {
    view(node?: Vnode): Vnode { return !node.attrs.cfg.visible? undefined : this.draw(true, node.attrs); }
}

class YAxis extends Axis {
    view(node?: Vnode): Vnode { return !node.attrs.cfg.visible? undefined : this.draw(false, node.attrs); }
}

class Axes {
    view(node?: Vnode): Vnode {
        const cfg       = node.attrs.cfg;         if(cfg){}
        const scales    = node.attrs.scales;
        return m('svg', [
            m(XAxis, { scale:scales.primary.x,   type:'primary',   cfg: cfg.primary.x }),
            m(YAxis, { scale:scales.primary.y,   type:'primary',   cfg: cfg.primary.y }),
            m(XAxis, { scale:scales.secondary.x, type:'secondary', cfg: cfg.primary.x }),
            m(YAxis, { scale:scales.secondary.y, type:'secondary', cfg: cfg.primary.y })
        ]);
    }
}

class Grid {
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-grid', width:'100%', height:'100%'});
    }
}

class Series {
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-series', width:'100%', height:'100%'});
    }
}

class Title {
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-title', width:'100%', height:'100%'});
    }
}

class Legend {
    view(node?: Vnode): Vnode {
        return m('svg', { class:'hs-graph-legend', width:'100%', height:'100%'});
    }
}
