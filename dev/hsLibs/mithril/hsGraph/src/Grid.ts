/**
 * # Grid
 * renders the major and minor gridlines in each direction.
 * 
 * ### Attributes
 * The `Chart` class is called by {@link Graph.Graph `Graph`} as 
 * `m(Grid, { cfg:cfg.grid, scales:scales })`
 * with the following attributes:
 * - cfg: a {@link Grid.GridsConfig GridsConfig} object
 * - scales: a {@link Axes.Scales Scales } object
 * 
 * ### Configurations and Defaults
 * See {@link Grid.Grid.defaultConfig Grid.defaultConfig}
 * 
 */

/** */
import { m, Vnode}      from 'hslayout';
import { Config, 
         VisibleCfg }   from './Graph';
import { SVGElem }      from './SVGElem';
import { NumRange }     from 'hsdata';
import { Scale }        from './Scale';
import { TickDefs,
         Scales }       from './AxesTypes';

/** defines configurable parameters for a grid */
export interface GridCfg extends VisibleCfg{
}

/** defines configurable parameters for horizontal and vertical grids */
export interface  GridsCfg {
    hor: GridCfg;
    ver: GridCfg;
}

/** Defines configurable settings. */
export interface GridsConfig {
    /** major grid lines */
    major: GridsCfg;

    /** minor grid lines */
    minor: GridsCfg;
}

export class Grid extends SVGElem{ 
    /** 
     * Defines default values for all configurable parameters in `Graph`
     * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations.
     * 
     * ### Configurations and Defaults
     * ```
     *  cfg.grid = {@link Grid.GridsConfig <GridsConfig>}{
     *      major: {
     *          hor: { visible:true },
     *          ver: { visible:true }
     *      },
     *      minor: {
     *          hor: { visible:false },
     *          ver: { visible:false }
     *      }
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components.
     */
    static defaultConfig(cfg:Config) {
        cfg.grid = <GridsConfig>{
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
     * Makes adjustments to cfg based on current settings
     * @param cfg the configuration object, containing default settings for all components
     */
    static adjustConfig(cfg:Config) {     
    }
    
    /** 
     * Draws horizontal gridlines parallel to the x-axis
     */
    private drawHorGrid(cfg:{visible:boolean}, scale:Scale, range:NumRange, ticks:TickDefs) {
        return !cfg.visible? m('svg') : m('svg', { class:'hs-graph-grid-hor' }, ticks.marks.map((t) =>
            this.horLine(range[0], range[1], scale.convert(t))
        ));
    }

    /** 
     * Draws vertical gridlines parallel to the y-axis
     */
    private drawVerGrid(cfg:{visible:boolean}, scale:Scale, range:NumRange, ticks:TickDefs) {
        return !cfg.visible? m('svg') : m('svg', { class:'hs-graph-grid-ver' }, ticks.marks.map((t) =>
            this.verLine(scale.convert(t), range[0], range[1])
        ));
    }


    view(node?: Vnode): Vnode {
        const cfg:GridsConfig = node.attrs.cfg;
        const scales:Scales = node.attrs.scales;
        const ps = scales.primary;
        return m('svg', { class:'hs-graph-grid'}, [
            m('svg', { class:'hs-graph-grid-minor' }, [
                this.drawHorGrid(cfg.minor.hor, ps.y, ps.x.range(), ps.y.ticks().minor),
                this.drawVerGrid(cfg.minor.ver, ps.x, ps.y.range(), ps.x.ticks().minor)
            ]),
            m('svg', { class:'hs-graph-grid-major' }, [
                this.drawHorGrid(cfg.major.hor, ps.y, ps.x.range(), ps.y.ticks().major),
                this.drawVerGrid(cfg.major.ver, ps.x, ps.y.range(), ps.x.ticks().major)
            ])
        ]);
    }
}
