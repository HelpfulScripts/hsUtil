/**
 * # Grid
 * renders the major and minor gridlines in each direction.
 * ### Configurations and Defaults
 * ```
 *  title:  {           // the chart title
 *  }
 * ```
 * ### Style classes
 * ```
 * styleClasses: {
 *  }
 * ```
 */

/** */
import { m, Vnode}          from 'hslayout';
import { Config }           from './Graph';
import { SVGElem, Range }   from './SVGElem';
import { Scale }            from './Scale';


/**
 * Defines configurable settings and CSS style classes.
 */
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

export class Grid extends SVGElem{ 
    /** Defines default values for all configurable parameters */
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

    /** 
     * Draws horizontal gridlines parallel to the x-axis
     */
    drawHorGrid(cfg:{visible:boolean}, scale:Scale, range:Range, ticks:number[]) {
        return m('svg', { class:'hs-graph-grid-hor' }, ticks.map((t:number) =>
            this.line({x:range[0], y:scale.convert(t)}, {x:range[1], y:scale.convert(t)})
        ));
    }

    /** 
     * Draws vertical gridlines parallel to the y-axis
     */
    drawVerGrid(cfg:{visible:boolean}, scale:Scale, range:Range, ticks:number[]) {
        return m('svg', { class:'hs-graph-grid-ver' }, ticks.map((t:number) =>
            this.line({x:scale.convert(t), y:range[0]}, {x:scale.convert(t), y:range[1]})
        ));
    }


    view(node?: Vnode): Vnode {
        const cfg = node.attrs.cfg;
        const scales = node.attrs.scales.primary;
        return m('svg', { class:'hs-graph-grid'}, [
            m('svg', { class:'hs-graph-grid-major' }, [
                this.drawHorGrid(cfg.major.hor, scales.y, scales.x.range(), scales.y.ticks().major),
                this.drawVerGrid(cfg.major.ver, scales.x, scales.y.range(), scales.y.ticks().major)
            ]),
            m('svg', { class:'hs-graph-grid-minor' }, [
                this.drawHorGrid(cfg.minor.hor, scales.y, scales.x.range(), scales.y.ticks().minor),
                this.drawVerGrid(cfg.minor.ver, scales.x, scales.y.range(), scales.y.ticks().minor)
            ])
        ]);
    }
}
