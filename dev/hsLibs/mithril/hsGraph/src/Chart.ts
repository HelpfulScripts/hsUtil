/**
 * # Chart
 * renders the chart background and title.
 * 
 * ### Attributes
 * The `Chart` class is called by {@link Graph.Graph `Graph`} as 
 * `m(Chart, { cfg:cfg.chart, plotArea:plotArea })`
 * with the following attributes:
 * - cfg: a {@link Chart.ChartConfig ChartConfig} object
 * - plotArea: a {@link SVGElem.Rect Rect } object for plotting the chart background
 * 
 * ### Configurations and Defaults
 * See {@link Chart.Chart.defaultConfig Chart.defaultConfig}
 */

 /** */
import { m, Vnode}          from 'hslayout';
import { Config, 
         LabelCfg,
         VisibleCfg }       from './Graph';
import { SVGElem,  Rect }   from './SVGElem';


/** Defines configurable settings. */
export interface ChartConfig extends VisibleCfg {
    /** the title text and positioning  */
    title:  LabelCfg;
};

/**
 * Renders the chart background and title.
 */
export class Chart extends SVGElem { 
    /** 
     * Defines default values for display elements in `Chart`
     * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations.
     * 
     * ### Configurations and Defaults
     * ```
     *  cfg.chart = {@link Chart.ChartConfig <ChartConfig>}{
     *     visible: true,          // Chart area is visible
     *     title:  {               // the chart title
     *        visible: true,      // Chart title is visible
     *        text:'',            // the sting to display
     *        hOffset: 0,         // horizontal label offset in 'em'
     *        vOffset: -1.5,      // vertical label offset in 'em'
     *        xpos:'middle',      // hor. title position: 0-100%, rel. to Chart
     *        ypos:'top'          // ver. title position: 0-100%, rel. to Chart
     *     }   
     *  } 
     * ``` 
     * @param cfg the configuration object, containing default settings for all 
     * previously configured components.
     */
    static defaultConfig(cfg:Config) {
        cfg.chart = <ChartConfig>{
            visible: true,          // Chart area is visible
            title:  <LabelCfg>{     // the chart title
                visible: true,      // Chart title is visible
                text:'',            // the sting to display
                hOffset: 0,         // horizontal label offset in 'em'
                vOffset: -1.5,      // vertical label offset in 'em'
                xpos:'middle',      // hor. title position: 0-100%, rel. to Chart
                ypos:'top'          // ver. title position: 0-100%, rel. to Chart
            }
        };
    return cfg;
    }

    /**
     * Makes adjustments to cfg based on current settings
     * @param cfg the configuration object, containing default settings for all components
     */
    static adjustConfig(cfg:Config) {        
    }
    
    static clientWidth:number;
    static clientHeight:number;

    onupdate(node?: Vnode) { 
        this.updateTitleSize(node);
//                m.redraw();
    }

    updateTitleSize(node: Vnode) {
        // get clientWidth /Height of title
        if (node.dom) {
            const c = node.dom.lastChild;
            if (c && c.clientWidth>0) {
                if (Chart.clientWidth !== c.clientWidth) {
                    Chart.clientWidth = c.clientWidth;
                    Chart.clientHeight = c.clientHeight;
                }
            }
        }
    }

    drawBackground(plotArea:Rect) {
        const tl = plotArea.tl;
        const br = plotArea.br;
        return this.rect({x:tl.x, y:tl.y}, {w: br.x-tl.x, h: br.y-tl.y});
    }

    drawTitle(plotArea:Rect, cfg:ChartConfig) {
        const tl = plotArea.tl;
        const br = plotArea.br;
        cfg.title.cssClass = 'hs-graph-chart-title';
        switch(cfg.title.xpos) {
            case 'start':   cfg.title.x = tl.x+'';   break;
            case 'middle':  cfg.title.x = (tl.x+br.x)/2+'';  break;
            case 'end':     cfg.title.x = br.x+''; break;
        }
        switch(cfg.title.ypos) {
            case 'top':     cfg.title.y = tl.y+'';   break;
            case 'center':  cfg.title.y = (tl.y+br.y)/2+'';  break;
            case 'bottom':  cfg.title.y = br.y+''; break;
        }
        return !cfg.title.visible? undefined : this.text(cfg.title, cfg.title.text);
    }

    view(node?: Vnode): Vnode {
        const cfg:ChartConfig = node.attrs.cfg;
        const plotArea:Rect = node.attrs.plotArea;
        return m('svg', { class:'hs-graph-chart'}, [
            this.drawBackground(plotArea),
            this.drawTitle(plotArea, cfg)
        ]);
    }
}

