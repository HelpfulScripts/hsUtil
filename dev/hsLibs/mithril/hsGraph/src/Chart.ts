/**
 * # Chart
 * renders the chart background and title.
 * ### Configurations and Defaults
 * ```
 *  title:  {           // the chart title
 *      visible: true,  // Chart title is visible 
 *      text:'',        // the sting to display
 *      x:'50%',        // hor. title position: 0-100%
 *      y:'0%',         // ver. title position: 0-100%
 *      xref: 'canvas', // reference for x: 'canvas' | 'chart'
 *      yref: 'canvas', // reference for y: 'canvas' | 'chart'
 *      hmargin: 5,     // left-andor right-align margin in px
 *      vmargin: 0.1    // top- and bottom-align margin in em
 *  }
 * ```
 * ### Style classes
 * ```
 * styleClasses: {
 *      chart:      'hs-graph-chart',               // the svg class for all chart elements
 *      background: 'hs-graph-chart-background',    // the rect class for the chart background
 *      title:      'hs-graph-chart-title',         // the text class for the chart title
 *  }
 * ```
 */

 /** */
import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
import { SVGElem, TextCfg }  from './SVGElem';

/**
 * Defines configurable settings and CSS style classes.
 */
export interface ChartSet {
    title:  {               // the graph title
        visible: boolean;   // Chart title is visible
        text:string;        // the sting to display
        xpos:string;        // hor. title position: '0'-'100%'
        ypos:string;        // ver. title position: '0'-'100%'
        xref:string;        // reference for x: 'canvas' | 'chart'
        yref:string;        // reference for y: 'canvas' | 'chart'
        hmargin: number;    // left- and right-align margin in px
        vmargin: number;    // top- and bottom-align margin in em
        hAlign:  string,    // label text-align: 'start' | 'middle' | 'end'
        vAlign:  string,    // label  vertical align: 'top' | 'center' | 'bottom'
        hOffset: number,    // horizontal label offset in 'em'
        vOffset: number,    // vertical label offset in 'em'
    };
    styleClasses: {
        chart:      string; // the svg class for all chart elements
        background: string; // the rect class for the chart background
        title:      string; // the text class for the chart title
    };
};

/**
 * 
 */
export class Chart extends SVGElem { 
    /** Defines default values for all configurable parameters */
    static config(cfg:Config) {
        cfg.chart = <ChartSet>{
            visible: true,          // Chart area is visible
            title:  {               // the chart title
                visible: true,      // Chart title is visible
                text:'',            // the sting to display
                hAlign:  'middle',  // label text-align: 'start' | 'middle' | 'end'
                vAlign:  'top',     // label  vertical align: 'top' | 'center' | 'bottom'
                hOffset: 0,         // horizontal label offset in 'em'
                vOffset: 0.2,       // vertical label offset in 'em'
                xpos:'50%',         // hor. title position: 0-100%
                ypos:'0%',          // ver. title position: 0-100%
                xref: 'canvas',     // reference for x: 'canvas' | 'chart'
                yref: 'canvas',     // reference for y: 'canvas' | 'chart'
                hmargin: 5,         // left- and right-align margin in px
                vmargin: 0.1        // top- and bottom-align margin in em
            },
            styleClasses: {
                chart:      'hs-graph-chart',               // the svg class for the chart elements
                background: 'hs-graph-chart-background',    // the rect class for the chart background
                title:      'hs-graph-chart-title',         // the text class for the chart title
            }
        };
    return cfg;
    }

    static clientWidth:number;
    static clientHeight:number;

    onupdate(node?: Vnode) {
        const c = node.dom.lastChild;
        if (c && c.clientWidth>0) {
            if (Chart.clientWidth !== c.clientWidth) {
                Chart.clientWidth = c.clientWidth;
                Chart.clientHeight = c.clientHeight;
                m.redraw();
            }
        }
    }

    drawBackground(na:{x:number, y:number,  width:number, height:number}, cfg:ChartSet) {
        return this.rect({x:na.x, y:na.y}, {w: na.width, h: na.height});
    }

    drawTitle(na:{x:number, y:number,  width:number, height:number}, cfg:ChartSet) {
        const mHor = cfg.title.hmargin;
        const mVer = cfg.title.vmargin;
        const xpos  = parseFloat(cfg.title.xpos), ypos = parseFloat(cfg.title.ypos); 
        const txtPt = { 
            x:xpos, xunit:'%',
            y:ypos, yunit:'%',
            dx: mHor * (2-3*xpos/100) -xpos/100*Chart.clientWidth, dxunit: 'px',
            dy: mVer * (1-4*ypos/100) + (1-ypos/100),              dyunit: 'em'
        };
        if (cfg.title.xref==='chart') {
            txtPt.x = xpos*na.width/100+na.x;
            txtPt.xunit = 'px';
        }
        if (cfg.title.yref==='chart') {
            txtPt.y = ypos*na.height/100+na.y;
            txtPt.yunit = 'px';
        }
        const txtCfg:TextCfg = {
            cssClass: cfg.styleClasses.title,
            hAlign:  cfg.title.hAlign,
            vAlign:  cfg.title.vAlign, 
            hOffset: cfg.title.hOffset,
            vOffset: cfg.title.vOffset
        };
        return !cfg.title.visible? undefined : this.text(txtPt, cfg.title.text, txtCfg);
    }

    view(node?: Vnode): Vnode {
        const cfg:ChartSet = node.attrs.cfg;
        return m('svg', { class:cfg.styleClasses.chart}, [
            this.drawBackground(node.attrs, cfg),
            this.drawTitle(node.attrs, cfg)
        ]);
    }
}

