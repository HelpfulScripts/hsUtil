
import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
import { SVGElem }  from './SVGElem';


export interface GridSet {
    major: {
        hor: { visible:boolean; };
        ver: { visible:boolean; };
    };
    minor: {
        hor: { visible:boolean; };
        ver: { visible:boolean; };
    };
}

class HorGrid extends SVGElem {
    view(node?: Vnode): Vnode {
        const scale = node.attrs.scale.y;
        const range = node.attrs.scale.x.range;
        const ticks = scale.majorTicks();
        return m('svg', { class:'hs-graph-grid-hor' }, ticks.map((t:number) =>
            this.line({x:range[0], y:scale.convert(t)}, {x:range[1], y:scale.convert(t)})
        ));
    }    
}

class VerGrid extends SVGElem  {
    view(node?: Vnode): Vnode {
        const scale = node.attrs.scale.x;
        const range = node.attrs.scale.y.range;
        const ticks = scale.majorTicks();
        return m('svg', { class:'hs-graph-grid-ver' }, ticks.map((t:number) =>
            this.line({x:scale.convert(t), y:range[0]}, {x:scale.convert(t), y:range[1]})
        ));
    }    
}

export class Grid { 
    static config(cfg:Config) {
        cfg.grid = <GridSet>{
            major: {
                hor: { visible:true },
                ver: { visible:true }
            },
            minor: {
                hor: { visible:false },
                ver: { visible:false }
            }
        };
    }
    view(node?: Vnode): Vnode {
        const cfg = node.attrs.cfg;
        const scale = node.attrs.scales.primary;
        return m('svg', { class:'hs-graph-grid'}, [
            m('svg', { class:'hs-graph-grid-major' }, [
                m(HorGrid, { cfg:cfg.major.hor, scale:scale }),
                m(VerGrid, { cfg:cfg.major.ver, scale:scale }),
            ]),
            m('svg', { class:'hs-graph-grid-minor' }, [
                m(HorGrid, { cfg:cfg.minor.hor, scale:scale }),
                m(VerGrid, { cfg:cfg.minor.ver, scale:scale }),
            ])
        ]);
    }
}
