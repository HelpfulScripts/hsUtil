/**
 * # Chart
 * renders the chart background and title.
 * ### Configurations
 * ```
 *  visible: true,       // Chart area is visible
 *  title:  {            // the chart title
 *      visible: true,   // Chart title is visible 
 *      text:'',         // the sting to display
 *      x:'middle',      // hor. title position: left | middle | right
 *      y:'top'          // ver. title position: top | center | bottom
 *  }
 * ```
 * ### Configuration Defaults
 * ```
 *  defaults: {
 *      titlePosition: { // presets for x and y title position keywords
 *          left:       { x:'0',    textAnchor:    'start',  ref:'canvas' },
 *          middle:     { x:'50%',  textAnchor:    'middle', ref:'canvas' },
 *          right:      { x:'100%', textAnchor:    'end',    ref:'canvas' },
 *          chartLeft:  { x:'0',    textAnchor:    'start',  ref:'chart' },
 *          chartRight: { x:'100%', textAnchor:    'end',    ref:'chart' },
 *          top:        { y:'0',    baselineShift: '-1em',   ref:'canvas' },
 *          center:     { y:'50%',  baselineShift: '0em',    ref:'canvas' },
 *          bottom:     { y:'100%', baselineShift: '0.2em',  ref:'canvas' },
 *          chartTop:   { y:'0',    baselineShift: '-1em',   ref:'chart' },
 *          chartBottom:{ y:'0',    baselineShift: '-1em',   ref:'chart' },
 *      }
 *  },
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
import { SVGElem, Style }  from './SVGElem';


export interface ChartSet {
    visible: boolean;       // Chart area is visible
    title:  {               // the graph title
        visible: boolean;   // Chart title is visible
        text:string;        // the sting to display
        x:string;           // left | middle | right | chartLeft | chartRight
        y:string;           // top | center | bottom | chartTop | chartBottom
        xref:string;        // reference for x: 'canvas' | 'chart'
        yref:string;        // reference for y: 'canvas' | 'chart'
    };
    defaults: {
        titleMargin: {
            hor: number;    // left- or right-align margin in px
            ver: number;    // top- or bottom-align margin in em
        }
    };
    styleClasses: {
        chart:      string;     // the svg class for all chart elements
        background: string;     // the rect class for the chart background
        title:      string;     // the text class for the chart title
    };
};

export class Chart extends SVGElem { 
    static config(cfg:Config) {
        cfg.chart = <ChartSet>{
            visible: true,      // Chart area is visible
            title:  {           // the chart title
                visible: true,  // Chart title is visible
                text:'',        // the sting to display
                x:'50%',        // hor. title position: 0-100%
                y:'0%',         // ver. title position: 0-100%
                xref: 'canvas', // reference for x: 'canvas' | 'chart'
                yref: 'canvas'  // reference for y: 'canvas' | 'chart'
            },
            defaults: {
                titleMargin: {
                    hor: 5,     // left- or right-align margin in px
                    ver: 0.1    // top- or bottom-align margin in em
                }
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

    view(node?: Vnode): Vnode {
console.log('view '+ Chart.clientWidth + ' ' + Chart.clientHeight); 
        const cfg:ChartSet = node.attrs.cfg;
        const na =  node.attrs;
        const x  = parseFloat(cfg.title.x), y = parseFloat(cfg.title.y); 
        const mHor = cfg.defaults.titleMargin.hor;
        const mVer = cfg.defaults.titleMargin.ver;
        const txtPt = { 
            x:x, xunit:'%',
            y:y, yunit:'%',
            dx: mHor * (2-3*x/100) -x/100*Chart.clientWidth, dxunit: 'px',
            dy: mVer * (1-4*y/100) + (1-y/100),              dyunit: 'em'
        };
        if (cfg.title.xref==='chart') {
            txtPt.x = x*na.width/100+na.x;
            txtPt.xunit = 'px';
        }
        if (cfg.title.yref==='chart') {
            txtPt.y = y*na.height/100+na.y;
            txtPt.yunit = 'px';
        }
        let textStyle:Style = { 
                cssClass:       cfg.styleClasses.title,
//                textAnchor:     'left',
//                baselineShift:  '0'
            };
        return m('svg', { class:cfg.styleClasses.chart}, cfg.visible?[
            this.rect({x:na.x, y:na.y}, {w: na.width, h: na.height}, {cssClass:cfg.styleClasses.background}),
            cfg.title.visible? this.text(txtPt, cfg.title.text, textStyle) : undefined
        ] : undefined);
    }
}

