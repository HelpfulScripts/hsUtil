/**
 * # Grid
 * renders the major and minor gridlines in each direction.
 * 
 * ### Configurations and Defaults
 * See {@link Grid.Grid.config Grid.config}
 * 
 */

/** */
import { m, Vnode}      from 'hslayout';
import { Config, 
         VisibleCfg }   from './Graph';
import { SVGElem }      from './SVGElem';
import { NumRange }     from './Data';
import { Scale }        from './Scale';
import { TickDefs }     from './AxesTypes';

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
        const cfg = node.attrs.cfg;
        const scales = node.attrs.scales.primary;
        return m('svg', { class:'hs-graph-grid'}, [
            m('svg', { class:'hs-graph-grid-minor' }, [
                this.drawHorGrid(cfg.minor.hor, scales.y, scales.x.range(), scales.y.ticks().minor),
                this.drawVerGrid(cfg.minor.ver, scales.x, scales.y.range(), scales.x.ticks().minor)
            ]),
            m('svg', { class:'hs-graph-grid-major' }, [
                this.drawHorGrid(cfg.major.hor, scales.y, scales.x.range(), scales.y.ticks().major),
                this.drawVerGrid(cfg.major.ver, scales.x, scales.y.range(), scales.x.ticks().major)
            ])
        ]);
    }
}
