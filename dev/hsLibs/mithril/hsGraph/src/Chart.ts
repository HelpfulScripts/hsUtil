/**
 * # Chart
 * renders the chart background and title.
 * ### Configurations and Defaults
 * See {@link Chart.Chart.config Chart.config}
 * ```
 *  title:  {               // the chart title
 *      visible: true,      // Chart title is visible 
 *      text:'',            // the sting to display
 *      xpos:'middle',      // hor. title position: 'left'|'middle'|'right', rel. to Graph
 *      ypos:'top',         // ver. title position: 'top'|'center'|'bottom', rel. to Graph
 *      hOffset: number,    // horizontal label offset in 'em'
 *      vOffset: number     // vertical label offset in 'em'
 *  }
 * ```
 */

 /** */
import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
import { SVGElem, TextCfg, Rect, TitleCfg }  from './SVGElem';

/**
 * Defines configurable settings and CSS style classes.
 */
export interface ChartSet {
    /** the title text and positioning  */
    title:  TitleCfg;
};

/**
 * Renders the chart background and title.
 */
export class Chart extends SVGElem { 
    /** 
     * Defines default values for display elements in `Chart`
     * ### Configurations and Defaults
     * ```
     *  cfg.chart = {@link Chart.ChartSet <ChartSet>}{
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
     * previously configured components. See {@link Graph.Graph.makeConfig Graph.makeConfig} for 
     * the sequence of initializations.
     */
    static config(cfg:Config) {
        cfg.chart = <ChartSet>{
            visible: true,          // Chart area is visible
            title:  {               // the chart title
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
        return this.rect({x:plotArea.l, y:plotArea.t}, {w: plotArea.w, h: plotArea.h});
    }

    drawTitle(plotArea:Rect, cfg:ChartSet) {
        const txtCfg:TextCfg = {
            xpos: cfg.title.xpos,
            ypos: cfg.title.ypos,
            cssClass: 'hs-graph-chart-title',
            hOffset: cfg.title.hOffset,
            vOffset: cfg.title.vOffset
        };
        switch(cfg.title.xpos) {
            case 'start':   txtCfg.x = plotArea.l+'';   break;
            case 'middle':  txtCfg.x = plotArea.l+plotArea.w/2+'';  break;
            case 'end':     txtCfg.x = plotArea.l+plotArea.w+''; break;
        }
        switch(cfg.title.ypos) {
            case 'top':     txtCfg.y = plotArea.t+'';   break;
            case 'center':  txtCfg.y = plotArea.t+plotArea.h/2+'';  break;
            case 'bottom':  txtCfg.y = plotArea.t+plotArea.h+''; break;
        }
        return !cfg.title.visible? undefined : this.text(txtCfg, cfg.title.text);
    }

    view(node?: Vnode): Vnode {
        const cfg:ChartSet = node.attrs.cfg;
        const plotArea:Rect = node.attrs.plotArea;
        return m('svg', { class:'hs-graph-chart'}, [
            this.drawBackground(plotArea),
            this.drawTitle(plotArea, cfg)
        ]);
    }
}

