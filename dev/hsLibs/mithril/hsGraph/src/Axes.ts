/**
 * # Axes
 * renders the x- and y-axis with title, tick marks and labels.
 * ### Configurations and Defaults
 * ```
 *  primary: {
 *      x: {visible: true,              // axis visibility
 *          crossesAt:'min',            // axis crossing in domain: 'min', 'max', or domain value
 *          title: {                    // axis title configuration
 *              visible: true,          //    title visibility
 *              text: 'x'               //    title text
 *          },
 *          ticks: {                    // tick mark configuration
 *              major: {                // major tick marks:
 *                  visible: true,      //   tick visibility
 *                  length: 10,         //   tick length in viewBox coordinates
 *                  hAlign: 'middle',   //   label text-align: 'start' | 'middle' | 'end'
 *                  vAlign: 'top',      //   label vertical align: 'top' | 'center' | 'bottom'
 *                  hOffset: 0,         //   horizontal label offset in 'em'
 *                  vOffset: -1.5       //   vertical label offset in 'em'
 *              },
 *              minor: { 
 *                  visible: true, length: 5, hOffset: 0 
 *              }
 *          } 
 *      },
 *      y: {visible: true, 
 *          crossesAt:'min',
 *          title: { text:'y', visible:true },
 *          ticks: { 
 *              major: {
 *                  visible:true, length:10, 
 *                  hAlign: 'end', vAlign: 'middle', hOffset: -0.7, vOffset: -0.4
 *              }, 
 *              minor: {
 *                  visible:true, length:5,  
 *                  hAlign: 'end', vAlign: 'middle', hOffset: -0.7, vOffset: -0.4
 *              } 
 *          }
 *      }
 *  },
 *  secondary: {
 *      x: {visible: false, 
 *          crossesAt:'max',
 *          title:{ text:'x2', visible:true }, 
 *          ticks: { 
 *              major: {
 *                  visible:true, length:10, 
 *                  hAlign: 'middle', vAlign: 'bottom', hOffset: 0, vOffset: -1.5
 *              }, 
 *              minor: {
 *                  visible:true, length:5,  
 *                  hAlign: 'middle', vAlign: 'bottom', hOffset: 0, vOffset: -1.5
 *              } 
 *          }
 *      },
 *      y: {visible: false, 
 *          crossesAt:'max',
 *          title:{ text:'y2', visible:true }, 
 *          ticks: { 
 *              major: {
 *                  visible:true, length:10, 
 *                  hAlign: 'start', vAlign: 'middle', hOffset: -0.7, vOffset: -0.4
 *              }, 
 *              minor: {
 *                  visible:true, length:5,  
 *                  hAlign: 'start', vAlign: 'middle', hOffset: -0.7, vOffset: -0.4
 *              } 
 *          }
 *      }
 *  }
 * ```
 */

 /** */
import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
import { Scale }    from './Scale';
import { SVGElem, round, Area, Point, TextCfg } 
                    from './SVGElem';

/**
 * Defines coinfigurable settings per axis
 */
export interface TickStruct {
    visible: boolean;
    length:  number;    // length in viewBox coordinates
    hAlign:  string;    // label text-align: 'start' | 'middle' | 'end'
    vAlign:  string;    // label  vertical align: 'top' | 'center' | 'bottom'
    hOffset: number;    // horizontal label offset in 'em'
    vOffset: number;    // vertical label offset in 'em'
}

export interface AxisTitleCfg {
    visible:boolean;
    text: string;       // the axis title
    hAlign:  string;    // label text-align: 'start' | 'middle' | 'end'
    vAlign:  string;    // label  vertical align: 'top' | 'center' | 'bottom'
    hOffset: number;    // horizontal label offset in 'em'
    vOffset: number;    // vertical label offset in 'em'
}

/**
 * Defines coinfigurable settings per axis
 */
export interface AxisCfg {
    visible:    boolean;        // to be rendered - or not
    title:      AxisTitleCfg;
    crossesAt:  number|string;  // axis crossing in domain: 'min', 'max', or domain value
    ticks: {
        major:  TickStruct;
        minor:  TickStruct;
    };
}

/**
 * Defines configurable settings and CSS style classes.
 */
export interface AxisSet {
    primary:   { x: AxisCfg, y: AxisCfg };
    secondary: { x: AxisCfg, y: AxisCfg };
}

/** calculate range value of axis crossing from domain input.
 * @param cross the domain value where the axis crosses. Either 'min', 'max', or a numeric domain value
 * @param scale the Scale object for the perpendicular axis.
 */
function getCrossAt(cross:string|number, scale:Scale):number {
    let crossesAt:number;
    switch (cross) {
        case 'min': crossesAt = scale.domain[0]; break;
        case 'max': crossesAt = scale.domain[1]; break;
        default:    crossesAt = <number>cross || 0;
    }
    return scale.convert(crossesAt);
}



/**
 * Plots an axis with title, tick marks and labels
 */
class Axis extends SVGElem {
    onupdate(node?: Vnode) {
        console.log(node.dom);
    }

    /**
     * draws the axis line
     */
    drawAxis(x:boolean, range:Area, cross:number) {
        return this.line(
            { x: x?range[0]:cross, y: x?cross:range[0]}, 
            { x: x?range[1]:cross, y: x?cross:range[1]}, 
            { cssClass: 'hs-graph-axis-line' } 
        );
    }

    /**
     * draws the axis title
     */
    drawTitle(x:boolean, ttlCfg:AxisTitleCfg, type: string, range:Area, cross:number) {
        const cfg:TextCfg = { cssClass: 'hs-graph-axis-title' };
        cfg.hAlign = ttlCfg.hAlign;
        cfg.vAlign = ttlCfg.vAlign;
        cfg.hOffset= ttlCfg.hOffset;
        cfg.vOffset= ttlCfg.vOffset;
        const xy = { x: x?range[1]:cross, y: x?cross:range[1] };
        return !ttlCfg.visible? undefined : this.text(xy, ttlCfg.text, cfg);
    }

    drawTickMarks(dir:string, type:string, crossesAt:number, scale:Scale, ticks:number[], cfg:TickStruct) {
        const x = dir==='x';
        return m('svg', { class:`hs-graph-axis-${type}-tick-marks`}, 
            !cfg.visible? '' : ticks.map((t:number) => { 
                const v:number = scale.convert(t);
                return this.line({
                    x: x? v : crossesAt, 
                    y: x? crossesAt : v
                }, {
                    x: x? v : crossesAt-cfg.length, 
                    y: x? crossesAt+cfg.length : v
                });
            }
        ));
    }

    /**
     * draws the tick labels. Labels are plotted for major tick marks only.
     */
    drawTickLabels(x:boolean, crossesAt:number, scale:Scale, ticks:number[], tickCfg:TickStruct) {
        return m('svg', {class:'hs-graph-axis-tick-label'}, ticks.map((t:number) => { 
            const v = scale.convert(t);
            const xy:Point = {
                x: x?v:crossesAt, 
                y: x?crossesAt:v
            };
            const cfg:TextCfg = {
                hAlign:  tickCfg.hAlign,
                vAlign:  tickCfg.vAlign, 
                hOffset: tickCfg.hOffset,
                vOffset: tickCfg.vOffset
            };
            return this.text(xy, round(t), cfg);
        }));
    }

    /**
     * @param dir axis to draw: 'x' or 'y'
     * @param attrs attributes required for rendering:
     * - type: 'primary' or 'secondary'
     * - scales:
     * - cfg: 
     */
    draw(dir:string, attrs:any) {
        const x = dir==='x';
        const type  = attrs.type;   // primary or secondary
        const scales = attrs.scale;
        const range = scales[dir].range;
        const cfg   = attrs.cfg[type][dir];
        const crossesAt:number = getCrossAt(cfg.crossesAt, scales[x?'y':'x']);
        return !cfg.visible? undefined : m('svg', { class:`hs-graph-axis-${dir} hs-graph-axis-${type}`}, [
            this.drawAxis(x, range, crossesAt),
            this.drawTitle(x, cfg.title, type, range, crossesAt),
            this.drawTickMarks(dir, 'minor', crossesAt, scales[dir], scales[dir].ticks().minor, cfg.ticks.minor),
            this.drawTickMarks(dir, 'major', crossesAt, scales[dir], scales[dir].ticks().major, cfg.ticks.major),
            this.drawTickLabels(x, crossesAt, scales[dir], scales[dir].ticks().major, cfg.ticks.major)
        ]);
    }
}

class XAxis extends Axis {
    view(node?: Vnode): Vnode { return this.draw('x', node.attrs); }
}

class YAxis extends Axis {
    view(node?: Vnode): Vnode { return this.draw('y', node.attrs); }
}

export class Axes {
    /** Defines default values for all configurable parameters */
    static config(config:Config) {
        config.axes = <AxisSet>{
            primary: {
                x: {visible: true,              // axis visibility
                    crossesAt:'min',            // axis crossing in domain: 'min', 'max', or domain value
                    title: <AxisTitleCfg>{      // axis title configuration
                        visible: true,          //    title visibility
                        text:    'x',           //    title text
                        hAlign:  'end',         // label text-align: 'start' | 'middle' | 'end'
                        vAlign:  'top',         // label  vertical align: 'top' | 'center' | 'bottom'
                        hOffset: -2,            // horizontal label offset in 'em'
                        vOffset: 0.4            // vertical label offset in 'em'
                    },
                    ticks: {                    // tick mark configuration
                        major: {                // major tick marks:
                            visible: true,      //   tick visibility
                            length: 10,         //   tick length in viewBox coordinates
                            hAlign: 'middle',   // label text-align: 'start' | 'middle' | 'end'
                            vAlign: 'top',      // label vertical align: 'top' | 'center' | 'bottom'
                            hOffset: 0,         // horizontal label offset in 'em'
                            vOffset: 0.7        // vertical label offset in 'em'
                        },
                        minor: {                // minor tick marks:
                            visible: true,      //   tick visibility
                            length: 5,          //   tick length in viewBox coordinates
                            hAlign: 'middle',   // label text-align: 'start' | 'middle' | 'end'
                            vAlign: 'top',      // label vertical align: 'top' | 'center' | 'bottom'
                            hOffset: 0,         // horizontal label offset in 'em'
                            vOffset: 0.7        // vertical label offset in 'em'
                        }
                    } // length of tick marks
                },
                y: {visible: true, 
                    crossesAt:'min',
                    title: {text:'y', visible:true,
                            hAlign:  'middle', hOffset: 0,
                            vAlign:  'bottom', vOffset: -0.5
                    },
                    ticks: { 
                        major: {
                            visible:true, length:10, 
                            hAlign: 'end', vAlign: 'center', hOffset: -0.7, vOffset: 0
                        }, 
                        minor: {
                            visible:true, length:5,  
                            hAlign: 'end', vAlign: 'center', hOffset: -0.7, vOffset: 0
                        } 
                    }
                }
            },
            secondary: {
                x: {visible: true, 
                    crossesAt:'max',
                    title: {text:'x2', visible:true, 
                            hAlign:  'end', hOffset: -2,
                            vAlign:  'top', vOffset: -1.2
                    },
                    ticks: { 
                        major: {
                            visible:true, length:-10, 
                            hAlign: 'middle', vAlign: 'bottom', hOffset: 0, vOffset: -0.7
                        }, 
                        minor: {
                            visible:true, length:-5,  
                            hAlign: 'middle', vAlign: 'bottom', hOffset: 0, vOffset: -0.7
                        } 
                    }
                },
                y: {visible: true, 
                    crossesAt:'max',
                    title: {text:'y2', visible:true, 
                            hAlign:  'start', hOffset: 0.3,
                            vAlign:  'top', vOffset: 0.7
                    },
                    ticks: { 
                        major: {
                            visible:true, length:-10, 
                            hAlign: 'start', vAlign: 'center', hOffset: 0.7, vOffset: 0
                        }, 
                        minor: {
                            visible:true, length:-5,  
                            hAlign: 'start', vAlign: 'center', hOffset: 0.7, vOffset: 0
                        } 
                    }
                }
            }
        };
    }
    
    view(node?: Vnode): Vnode {
        const cfg       = node.attrs.cfg;
        const scales    = node.attrs.scales;
        return m('svg', {class:'hs-graph-axis'}, [
            m(XAxis, { scale:scales.primary,   type:'primary',   cfg: cfg }),
            m(YAxis, { scale:scales.primary,   type:'primary',   cfg: cfg }),
            m(XAxis, { scale:scales.secondary, type:'secondary', cfg: cfg }),
            m(YAxis, { scale:scales.secondary, type:'secondary', cfg: cfg })
        ]);
    }
}
