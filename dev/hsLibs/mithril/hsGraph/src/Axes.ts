/**
 * # Axes
 * renders the x- and y-axis with title, tick marks and labels.
 * ### Configurations and Defaults
 * See {@link Axes.Axes.config Axes.config}
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * let series = [
 *      ['time', 'volume', 'price'],
 *      [0.2, 0.7, 0.87],
 *      [0.4, 0.015, 0.7],
 *      [0.6, 0.01, 0.7],
 *      [0.8, 5, 0.6],
 *      [1, 10, 0.75]
 * ];
 * 
 * function myConfig(cfg) {
 *      cfg.series.data   = series;
 *      cfg.series.styles[0].marker.visible = true;
 *      cfg.series.styles[1].marker.visible = true;
 *      cfg.series.styles[1].marker.shape = hsgraph.Series.marker.square;
 *      cfg.series.series = [
 *          { xName: 'time', yName:'volume'},
 *          { xName: 'time', yName:'price'}
 *      ];
 *      const axes = cfg.axes.primary;
 *      cfg.chart.title.text          = 'Volume over Time';
 *      cfg.chart.title.xpos          = 'end';
 *      cfg.chart.title.ypos          = 'top';
 *      cfg.chart.title.vOffset       = -1.5;
 *      axes.x.title.text = 'time';
 *      axes.y.title.text = 'volume';
 *      axes.y.scale.type = hsgraph.Scale.type.log;
 *      cfg.axes.secondary.x.visible = false;
 *      cfg.axes.secondary.y.visible = false;
 * }
 * 
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfgFn: myConfig })
 * });
 *
 * </file>
 * <file name='style.css'>
 * .hs-graph-chart { fill: #fff; }
 * .hs-graph-series { stroke-width: 5; }
 * </file>
 * </example>
 * 
 * ### Configurations and Defaults
 * See {@link Axes.Axes.config Axes.config}
 */

 /** */
import { m, Vnode}                          from 'hslayout';
import { Config }                           from './Graph';
import { Scale, XYScale, Scales, ScaleCfg, DomainCfg  }           from './Scale';
import { SVGElem, round, Area, TitleCfg }   from './SVGElem';

/** Defines configurable settings for tick marks */
export interface MarkCfg {
    /** determines if the axis ticks will be rendered */
    visible: boolean;

    /** length in viewBox coordinates */
    length:  number; 
}

/** Defines configurable settings for tick marks and labels per axis */
export interface TickStruct {
    marks:  MarkCfg;
    labels: TitleCfg;
}

/** Defines configurable settings for major and minor ticks (marks and labels) */
export interface TicksCfg {
    major:  TickStruct;
    minor:  TickStruct;
}

/** Defines configurable settings. */
export interface AxesSet {
    primary:   { x: AxisCfg; y: AxisCfg; };
    secondary: { x: AxisCfg; y: AxisCfg; };
}

/** 
 * calculates the range value of axis crossing from a domain value.
 * @param cross the domain value where the axis crosses. Either 'min', 'max', or a numeric domain value
 * @param scale the Scale object for the perpendicular axis.
 */
function getCrossAt(cross:string|number, scale:Scale):number {
    let crossesAt:number;
    switch (cross) {
        case 'min': crossesAt = scale.domain()[0]; break;
        case 'max': crossesAt = scale.domain()[1]; break;
        default:    crossesAt = <number>cross || 0;
    }
    return scale.convert(crossesAt);
}

/** Defines configurable settings per axis */
export interface AxisCfg {
    /** determines if the axis will be rendered */
    visible:    boolean;     
     
    /** configures the axis title */  
    title:      TitleCfg;

    /** axis crossing in domain: 'min', 'max', or domain value */
    crossesAt:  number|string; 

    /** scale type and domain */
    scale: ScaleCfg;

    /** configures the major and minor ticks */
    ticks: TicksCfg;
}

export class Axes extends SVGElem {
   /** 
    * Defines default values for display elements in `Axes`
    * sets the default configuration for the primary and secondary axes.
    * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations. 
    * 
    * ### Configurations and Defaults
    * #### defaultScale: {@link Scale.ScaleCfg Scale.ScaleCfg} =
    * ```
    *  {
    *      type: Scale.type.linear,   // {@link Scale.Scale.type Scale.type} 
    *      domain:['auto', 'auto']    // {@link Scale.DomainCfg Scale.DomainCfg}: min/max of domain; 'auto', or a domain value
    *  }
    * ```
    * #### cfg.[primary|secondary].[x|y].title: {@link SVGElem.TitleCfg titleCfg} =
    * ```
    *  {
    *     visible: true,  
    *     text:    (x? 'x' : 'y') + (primary? '' : '2'),    // 'x'/'y' or 'x2'/'y2'
    *     xpos:    x? 'end' : (primary? 'middle' : 'start'),          
    *     ypos:    x? 'top' : (primary? 'bottom' : 'top'),           
    *     hOffset: x? -2 : (primary? 0 : 0.3),            
    *     vOffset: x? (primary? 0.4 : -1.2) : (primary? -0.5 : 0.7) 
    *  }      
    * ```
    * #### cfg.[primary|secondary].[x|y].ticks.[major|minor].marks: {@link AxisDefaultCfg.MarkCfg markCfg} =
    * ```
    *  {
    *     visible: true, 
    *     length: (primary? 1 : -1) * (major? 10 : 5) 
    *  }      
    * ```
    * #### cfg.[primary|secondary].[x|y].ticks.[major|minor].labels: {@link SVGElem.TitleCfg labelCfg} =
    * ```
    *  {
    *     visible: true, 
    *     xpos: x? 'middle' : (primary? 'end' : 'start')
    *     ypos: x? (primary? 'top' : 'bottom') : 'center', 
    *     hOffset: x? 0 (primary? -0.7 : 0.7), 
    *     vOffset: x? (primary? 0.7 : -0.7) : 0
    *  }      
    * ```
    * #### cfg.[primary|secondary].[x|y]: {@link Axis.AxisCfg axisCfg} =
    * ```
    *  {
    *     visible:    primary? true : false,   // hide secondary axes
    *     crossesAt:  primary?'min':'max',     // default axis crossing
    *     scale:      defaultScale,            // see above
    *     title:      titleCfg(primary, x),
    *     ticks: {                    
    *         major: {                
    *             marks: markCfg(primary, true),  
    *             labels: tickLabelCfg(primary, x)      
    *         },
    *         minor: { 
    *             marks: markCfg(primary, false),
    *             labels: tickLabelCfg(primary, x)     
    *         }
    *     } 
    *  }
    * ```
    * #### cfg.axes: {@link Axes.AxesSet AxesSet} =
    * ```
    * {
    *    primary: {                // Primary axis:
    *       x: axisCfg(true, true),
    *       y: axisCfg(true, false)
    *    },
    *    secondary: {               // Secondary axis:
    *       x: axisCfg(false, true),
    *       y: axisCfg(false, false)
    *    }
    *  }
    * ```
    * @param cfg the configuration object, containing default settings for all 
    * previously configured components. See {@link Graph.Graph.makeConfig Graph.makeConfig} for 
    * the sequence of initializations.
    */
    static config(cfg:Config) {
        const defaultScale:ScaleCfg = {         // axis scaling information
            type: Scale.type.linear,            //    scale type
            domain:<DomainCfg>['auto', 'auto']  //    min/max of domain; 'auto', or a domain value
        };
        function labelCfg(primary:boolean, x:boolean):TitleCfg {
            return { 
                visible: true, text: '',
                xpos: x? 'middle' : (primary? 'end' : 'start'),
                ypos: x? (primary? 'top' : 'bottom') : 'center', 
                hOffset: x? 0 : (primary? -0.7 : 0.7), 
                vOffset: x? (primary? 0.7 : -0.7) : 0
            }; 
        }
        function markCfg(primary: boolean, major:boolean):MarkCfg {
            return { 
                visible: true, 
                length: (primary? 1 : -1) * (major? 10 : 5) 
            };
        }
        function titleCfg(primary:boolean, x:boolean):TitleCfg {
            return {
                visible: true,  text: (x? 'x' : 'y') + (primary? '' : '2'),    
                xpos:  x? 'end' : (primary? 'middle' : 'start'),          
                ypos:  x? 'top' : (primary? 'bottom' : 'top'),           
                hOffset: x? -2 : (primary? 0 : 0.3),            
                vOffset: x? (primary? 0.4 : -1.2) : (primary? -0.5 : 0.7)       
            };
        }
        function axisCfg(primary:boolean, x:boolean):AxisCfg {
            return {
                visible:    primary? true : false, 
                crossesAt:  primary?'min':'max', 
                scale:      defaultScale,
                title: titleCfg(primary, x),
                ticks: {                    
                    major: {                
                        marks:  markCfg(primary, true),  
                        labels: labelCfg(primary, x)      
                    },
                    minor: { 
                        marks:  markCfg(primary, false),
                        labels: labelCfg(primary, x)     
                    }
                } 
            };
        }
        cfg.axes = {
            primary: {
                x: axisCfg(true, true),
                y: axisCfg(true, false)
            },
            secondary: {
                x: axisCfg(false, true),
                y: axisCfg(false, false)
            }
        };
    }

    /**
     * draws the axis line
     */
    drawAxisLine(x:boolean, range:Area, cross:number) {
        return x? this.horLine(range[0], range[1], cross, 'hs-graph-axis-line') :
                  this.verLine(cross, range[0], range[1], 'hs-graph-axis-line');
    }

    /**
     * draws the axis title
     */
    drawTitle(x:boolean, ttlCfg:TitleCfg, type: string, range:Area, cross:number) {
        ttlCfg.cssClass = 'hs-graph-axis-title';
        const xy = { transform:`translate(${x?range[1]:cross}, ${x?cross:range[1]})` };
        return !ttlCfg.visible? undefined : 
            m('g', xy, this.text(ttlCfg, ttlCfg.text));
    }

    /**
     * draws the tick marks. Labels are plotted for major tick marks only.
     */
    drawTickMarks(dir:string, type:string, crossesAt:number, scale:Scale, ticks:number[], cfg:TickStruct) {
        const x = dir==='x';
        return m('svg', { class:`hs-graph-axis-${type}-tick-marks`}, 
            !cfg.marks.visible? '' : ticks.map((t:number) => { 
                return x? this.verLine(scale.convert(t), crossesAt, crossesAt+cfg.marks.length) :
                          this.horLine(crossesAt, crossesAt-cfg.marks.length, scale.convert(t));
            })
        );
    }

    /**
     * draws the tick labels. Labels are plotted for major tick marks only.
     */
    drawTickLabels(x:boolean, crossesAt:number, scale:Scale, ticks:number[], cfg:TickStruct) {
        return m('svg', {class:'hs-graph-axis-tick-label'}, 
            !cfg.labels.visible? '' : ticks.map((t:number) => { 
                const v = scale.convert(t);
                const xy = { transform:`translate(${x?v:crossesAt}, ${x?crossesAt:v})` };
                return m('g', xy, this.text(cfg.labels, round(t)));
            })
        );
    }

    /**
     * draws a single axis
     * @param dir axis to draw: 'x' or 'y'
     * @param attrs attributes required for rendering:
     * - type: 'primary' or 'secondary'
     * - scales:
     * - cfg: 
     */
    drawAxis(dir:string, scales: XYScale, type:string, axisCfg:AxesSet) {
        const x = dir==='x';
        const range = scales[dir].range();
        const cfg   = axisCfg[type][dir];
        scales[dir].scaleType(cfg.scale);
        const crossesAt:number = getCrossAt(cfg.crossesAt, scales[x?'y':'x']);
        return !cfg.visible? undefined : m('svg', { class:`hs-graph-axis-${dir} hs-graph-axis-${type}`}, [
            this.drawAxisLine(x, range, crossesAt),
            this.drawTitle(x, cfg.title, type, range, crossesAt),
            this.drawTickMarks(dir, 'minor', crossesAt, scales[dir], scales[dir].ticks().minor, cfg.ticks.minor),
            this.drawTickMarks(dir, 'major', crossesAt, scales[dir], scales[dir].ticks().major, cfg.ticks.major),
            this.drawTickLabels(x, crossesAt, scales[dir], scales[dir].ticks().major, cfg.ticks.major)
        ]);
    }

    setScaleTypes(cfg: AxesSet, scales: Scales) {
        scales.primary.x.scaleType(cfg.primary.x.scale.type);
        scales.primary.y.scaleType(cfg.primary.y.scale.type);
        scales.secondary.x.scaleType(cfg.secondary.x.scale.type);
        scales.secondary.y.scaleType(cfg.secondary.y.scale.type);
    }

    view(node?: Vnode): Vnode {
        const cfg:AxesSet    = node.attrs.cfg;
        const scales = node.attrs.scales;
//        this.setScaleTypes(cfg, scales);
        return m('svg', {class:'hs-graph-axis'}, [
            this.drawAxis('x', scales.primary, 'primary', cfg),
            this.drawAxis('y', scales.primary, 'primary', cfg),
            this.drawAxis('x', scales.secondary, 'secondary', cfg),
            this.drawAxis('y', scales.secondary, 'secondary', cfg)
        ]);
    }
}
