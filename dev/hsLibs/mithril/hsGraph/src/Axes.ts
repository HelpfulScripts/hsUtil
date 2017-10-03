/**
 * # Axes
 * renders the x- and y-axis with title, tick marks and labels.
 * ### Configurations and Defaults
 * ```
 *  primary: {                              // Primary axis:
 *      x: {visible: true,                  // axis visibility
 *          crossesAt:'min',                // axis crossing in domain: 'min', 'max', or domain value
 *          title: {                        // axis title configuration
 *              visible: true,              //    title visibility
 *              text: 'x'                   //    title text
 *              hAlign:  'end',             //    label text-align: 'start' | 'middle' | 'end'
 *              vAlign:  'top',             //    label  vertical align: 'top' | 'center' | 'bottom'
 *              hOffset: -2,                //    horizontal label offset in 'em'
 *              vOffset: 0.4                //    vertical label offset in 'em'
 *          },
 *          ticks: {                        // tick mark configuration
 *              major: {                    // major ticks:
 *                  marks: {                // tick marks:
 *                      visible: true,      //    tick visibility
 *                      length: 10          //    tick length in viewBox coordinates
 *                  },  
 *                  labels: {               // tick labels:
 *                      hAlign: 'middle',   //    label text-align: 'start' | 'middle' | 'end'
 *                      vAlign: 'top',      //    label vertical align: 'top' | 'center' | 'bottom'
 *                      hOffset: 0,         //    horizontal label offset in 'em'
 *                      vOffset: 0.7        //    vertical label offset in 'em'
 *                  }      
 *              },
 *              minor: { marks: { visible: true,  length: 5, },
 *                      labels:{ hAlign: 'middle', vAlign: 'top', hOffset: 0, vOffset: 0.7 }
 *              }   
 *          } 
 *      },
 *      y: {visible: true, 
 *          crossesAt:'min',
 *          title: {text:'y', visible:true,
 *              hAlign:  'middle', hOffset: 0,
 *              vAlign:  'bottom', vOffset: -0.5
 *          },
 *          ticks: { 
 *              major: { marks: { visible:true, length:10 },
 *                      labels:{ hAlign: 'end', vAlign: 'center', hOffset: -0.7, vOffset: 0 }
 *              }, 
 *              minor: { marks: { visible:true, length:5 },
 *                       labels:{ hAlign: 'end', vAlign: 'center', hOffset: -0.7, vOffset: 0 }
 *              } 
 *          }
 *      }
 *  },
 *  secondary: {                        // Secondary axis:
 *      x: {visible: true, 
 *          crossesAt:'max',
 *          title: {text:'x2', visible:true, 
 *                  hAlign:  'end', hOffset: -2,
 *                  vAlign:  'top', vOffset: -1.2
 *          },
 *          ticks: { 
 *              major: { marks: { visible:true, length:-10 },
 *                          labels:{ hAlign: 'middle', vAlign: 'bottom', hOffset: 0, vOffset: -0.7 }
 *              }, 
 *              minor: { marks: { visible:true, length:-5 },
 *                          labels:{ hAlign: 'middle', vAlign: 'bottom', hOffset: 0, vOffset: -0.7 }
 *              } 
 *          }
 *      },
 *      y: {visible: true, 
 *          crossesAt:'max',
 *          title: {text:'y2', visible:true, 
 *                  hAlign:  'start', hOffset: 0.3,
 *                  vAlign:  'top', vOffset: 0.7
 *          },
 *          ticks: { 
 *              major: { marks: { visible:true, length:-10 },
 *                          labels:{ hAlign: 'start', vAlign: 'center', hOffset: 0.7, vOffset: 0 }
 *              }, 
 *              minor: { marks: { visible:true, length:-5 },
 *                          labels:{ hAlign: 'start', vAlign: 'center', hOffset: 0.7, vOffset: 0 }
 *              } 
 *          }
 *      }
 *  }
 * ```
 */

 /** */
import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
import { Scale, XYScale }    from './Scale';
import { SVGElem, round, Area, Point, TextCfg } 
                    from './SVGElem';

/** Defines configurable settings for tick marks and labels per axis */
export interface TickStruct {
    marks: {
        /** determines if the axis ticks will be rendered */
        visible: boolean;

        /** length in viewBox coordinates */
        length:  number; 
    };
    labels: {
        /** label text-align: 'start' | 'middle' | 'end' */
        hAlign:  string;  

        /** label  vertical align: 'top' | 'center' | 'bottom' */
        vAlign:  string; 

        /** horizontal label offset in 'em' */
        hOffset: number; 

        /** vertical label offset in 'em' */
        vOffset: number; 
    };
}

/** Defines settings for the axis title */
export interface AxisTitleCfg {
    /** determines if the axis title will be rendered */
    visible:boolean;

    /** the axis title */
    text: string;       

    /** label text-align: 'start' | 'middle' | 'end' */
    hAlign:  string; 

    /** label  vertical align: 'top' | 'center' | 'bottom' */
    vAlign:  string; 

    /** horizontal label offset in 'em' */
    hOffset: number; 

    /** vertical label offset in 'em' */
    vOffset: number; 
}

/** Defines coinfigurable settings per axis */
export interface AxisCfg {
    /** determines if the axis will be rendered */
    visible:    boolean;     
     
    /** configures the axis title */  
    title:      AxisTitleCfg;

    /** axis crossing in domain: 'min', 'max', or domain value */
    crossesAt:  number|string; 

    /** configures the major and minor ticks */
    ticks: {
        major:  TickStruct;
        minor:  TickStruct;
    };
}

/**
 * Defines configurable settings and CSS style classes for all primary and secondary axes.
 */
export interface AxisSet {
    primary:   { x: AxisCfg, y: AxisCfg };
    secondary: { x: AxisCfg, y: AxisCfg };
}

/** 
 * calculates the range value of axis crossing from a domain value.
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


export class Axes extends SVGElem {
    /** Defines default values for all configurable parameters */
    static config(config:Config) {
        config.axes = <AxisSet>{
            primary: {
                x: {visible: true,                  // axis visibility
                    crossesAt:'min',                // axis crossing in domain: 'min', 'max', or domain value
                    title: <AxisTitleCfg>{          // axis title configuration
                        visible: true,              //    title visibility
                        text:    'x',               //    title text
                        hAlign:  'end',             // label text-align: 'start' | 'middle' | 'end'
                        vAlign:  'top',             // label  vertical align: 'top' | 'center' | 'bottom'
                        hOffset: -2,                // horizontal label offset in 'em'
                        vOffset: 0.4                // vertical label offset in 'em'
                    },
                    ticks: {                        // tick mark configuration
                        major: {                    // major ticks:
                            marks: {                // tick marks:
                                visible: true,      //    tick visibility
                                length: 10          //    tick length in viewBox coordinates
                            },  
                            labels: {               // tick labels:
                                hAlign: 'middle',   //    label text-align: 'start' | 'middle' | 'end'
                                vAlign: 'top',      //    label vertical align: 'top' | 'center' | 'bottom'
                                hOffset: 0,         //    horizontal label offset in 'em'
                                vOffset: 0.7        //    vertical label offset in 'em'
                            }      
                        },
                        minor: { marks: { visible: true,  length: 5, },
                                 labels:{ hAlign: 'middle', vAlign: 'top', hOffset: 0, vOffset: 0.7 }      
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
                        major: { marks: { visible:true, length:10 },
                                 labels:{ hAlign: 'end', vAlign: 'center', hOffset: -0.7, vOffset: 0 }
                        }, 
                        minor: { marks: { visible:true, length:5 },
                                 labels:{ hAlign: 'end', vAlign: 'center', hOffset: -0.7, vOffset: 0 }
                        } 
                    }
                }
            },
            secondary: {
                x: {visible: false, 
                    crossesAt:'max',
                    title: {text:'x2', visible:true, 
                            hAlign:  'end', hOffset: -2,
                            vAlign:  'top', vOffset: -1.2
                    },
                    ticks: { 
                        major: { marks: { visible:true, length:-10 },
                                 labels:{ hAlign: 'middle', vAlign: 'bottom', hOffset: 0, vOffset: -0.7 }
                        }, 
                        minor: { marks: { visible:true, length:-5 },
                                 labels:{ hAlign: 'middle', vAlign: 'bottom', hOffset: 0, vOffset: -0.7 }
                        } 
                    }
                },
                y: {visible: false, 
                    crossesAt:'max',
                    title: {text:'y2', visible:true, 
                            hAlign:  'start', hOffset: 0.3,
                            vAlign:  'top', vOffset: 0.7
                    },
                    ticks: { 
                        major: { marks: { visible:true, length:-10 },
                                 labels:{ hAlign: 'start', vAlign: 'center', hOffset: 0.7, vOffset: 0 }
                        }, 
                        minor: { marks: { visible:true, length:-5 },
                                 labels:{ hAlign: 'start', vAlign: 'center', hOffset: 0.7, vOffset: 0 }
                        } 
                    }
                }
            }
        };
    }

    /**
     * draws the axis line
     */
    drawAxisLine(x:boolean, range:Area, cross:number) {
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
            !cfg.marks.visible? '' : ticks.map((t:number) => { 
                const v:number = scale.convert(t);
                return this.line({
                    x: x? v : crossesAt, 
                    y: x? crossesAt : v
                }, {
                    x: x? v : crossesAt-cfg.marks.length, 
                    y: x? crossesAt+cfg.marks.length : v
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
                hAlign:  tickCfg.labels.hAlign,
                vAlign:  tickCfg.labels.vAlign, 
                hOffset: tickCfg.labels.hOffset,
                vOffset: tickCfg.labels.vOffset
            };
            return this.text(xy, round(t), cfg);
        }));
    }

    /**
     * draws a single axis
     * @param dir axis to draw: 'x' or 'y'
     * @param attrs attributes required for rendering:
     * - type: 'primary' or 'secondary'
     * - scales:
     * - cfg: 
     */
    drawAxis(dir:string, scales: XYScale, type:string, axisCfg:AxisSet) {
        const x = dir==='x';
        const range = scales[dir].range;
        const cfg   = axisCfg[type][dir];
        const crossesAt:number = getCrossAt(cfg.crossesAt, scales[x?'y':'x']);
        return !cfg.visible? undefined : m('svg', { class:`hs-graph-axis-${dir} hs-graph-axis-${type}`}, [
            this.drawAxisLine(x, range, crossesAt),
            this.drawTitle(x, cfg.title, type, range, crossesAt),
            this.drawTickMarks(dir, 'minor', crossesAt, scales[dir], scales[dir].ticks().minor, cfg.ticks.minor),
            this.drawTickMarks(dir, 'major', crossesAt, scales[dir], scales[dir].ticks().major, cfg.ticks.major),
            this.drawTickLabels(x, crossesAt, scales[dir], scales[dir].ticks().major, cfg.ticks.major)
        ]);
    }

    onupdate(node?: Vnode) {
        if(node) {}
        const elems = document.getElementsByClassName('hs-graph-axis');
        const box = Array.prototype.map.call(elems, (e:any)=>e.getBBox());
        if(box && box[0]) { 
            box[0].comp='Axes';
            Axes.boxNotify(box[0]); 
        }
        
    }

    static boxNotify:(box:any)=>void;

    view(node?: Vnode): Vnode {
        const cfg       = node.attrs.cfg;
        const scales    = node.attrs.scales;
        Axes.boxNotify  = node.attrs.sizeFn;
        return m('svg', {class:'hs-graph-axis'}, [
            this.drawAxis('x', scales.primary, 'primary', cfg),
            this.drawAxis('y', scales.primary, 'primary', cfg),
            this.drawAxis('x', scales.secondary, 'secondary', cfg),
            this.drawAxis('y', scales.secondary, 'secondary', cfg)
        ]);
    }
}
