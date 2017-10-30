/**
 * # Axes
 * renders the x- and y-axis with title, tick marks and labels.
 * ### Configurations and Defaults
 * See {@link Axes.Axes.config Axes.config}
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * let series = {
 *    names:['time', 'volume', 'price'],
 *    rows:[
 *      [0.2, 0.7, 0.87],
 *      [0.4, 0.015, 0.7],
 *      [0.6, 0.01, 0.7],
 *      [0.7, 5, 0.6],
 *      [0.8, 10, 0.75]
 * ]};
 * 
 * function myConfig(cfg) {
 *      cfg.series.data   = series;
 *      cfg.series.series = [
 *          { cols: ['time','volume']},
 *          { cols: ['time', 'price']}
 *      ];
 *      cfg.series.series[0].style.marker.visible = true;
 *      cfg.series.series[1].style.marker.visible = true;
 *      cfg.series.series[1].style.marker.shape = hsgraph.Series.marker.square;
 *      cfg.chart.title.text          = 'Volume over Time';
 *      cfg.chart.title.xpos          = 'end';
 *      cfg.chart.title.ypos          = 'top';
 *      cfg.chart.title.vOffset       = -1.5;
 *      cfg.grid.minor.hor = true;
 * 
 *      const axes = cfg.axes.primary;
 *      axes.x.title.text = 'time';
 *      axes.y.title.text = 'volume';
 *      axes.y.scale.type = hsgraph.Scale.type.log;
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
import { m, Vnode}  from 'hslayout';
import { Config, 
         VisibleCfg, 
         LabelCfg } from './Graph';
import { Scale, 
         XYScale, 
         Scales }   from './Scale';
import { ScaleCfg, 
         TickType } from './Scale';
import { Domain }   from './Data';
import { SVGElem, 
         Area }     from './SVGElem';

/** Defines configurable settings for tick marks */
export interface MarkCfg extends VisibleCfg {
    /** length in viewBox coordinates */
    length:  number; 
}

/** Defines configurable settings for tick marks and labels per axis */
export interface TickStruct {
    marks:  MarkCfg;
    labels: LabelCfg;
    labelFmt: string;
}

/** Defines configurable settings for major and minor ticks (marks and labels) */
export interface TicksCfg {
    major:  TickStruct;
    minor:  TickStruct;
}

/** Defines configurable settings. */
export interface AxesConfig  {
    primary:   { x: AxisCfg; y: AxisCfg; };
    secondary: { x: AxisCfg; y: AxisCfg; };
}

/** Defines configurable settings per axis */
export interface AxisCfg extends VisibleCfg{
    /** configures the axis title */  
    title:      LabelCfg;

    /** axis crossing in domain: 'min', 'max', or domain value */
    crossesAt:  number|string; 

    /** scale type and domain */
    scale: ScaleCfg;

    /** configures the major and minor ticks */
    ticks: TicksCfg;
}

/** 
 * calculates the range value of axis crossing from a domain value.
 * @param cross the domain value where the axis crosses. Either 'min', 'max', or a numeric domain value
 * @param scale the Scale object for the perpendicular axis.
 */
function getCrossAt(cross:string|number, scale:Scale):number {
    let crossesAt:number;
    switch (cross) {
        case 'min': crossesAt = <number>scale.domain()[0]; break;
        case 'max': crossesAt = <number>scale.domain()[1]; break;
        default:    crossesAt = <number>cross || 0;
    }
    return scale.convert(crossesAt);
}

export class Axes extends SVGElem {
   /** 
    * Defines default values for display elements in `Axes`
    * sets the default configuration for the primary and secondary axes.
    * See {@link Graph.Graph.makeConfig Graph.makeConfig} for the sequence of initializations. 
    * 
    * ### Configurations and Defaults
    * ```
    * cfg.axes = {@link Axes.AxesConfig <AxesConfig>} {
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
    * #### axisCfg(primary:boolean, x:boolean):
    * ```
    *  cfg.[primary|secondary].[x|y] = {@link Axes.AxisCfg <Axes.AxisCfg>}{
    *     visible:    primary? true : false,   // hide secondary axes
    *     crossesAt:  primary? 'min':'max',    // default axis crossing
    *     scale:      scaleCfg,                // see {@link Scale.ScaleCfg Scale.ScaleCfg}
    *     title:      titleCfg(primary, x),
    *     ticks: {                    
    *         major: {                
    *             marks:  markCfg(primary, true),  
    *             labels: labelCfg(primary, x, true),     
    *             labelFmt: undefined 
    *         },
    *         minor: { 
    *             marks:  markCfg(primary, false),
    *             labels: labelCfg(primary, x, false),     
    *             labelFmt: undefined 
    *         }
    *     } 
    *  }
    * ```
    * #### scaleCfg():
    * ```
    *  cfg.[primary|secondary].[x|y].scale = {@link Scale.ScaleCfg <Scale.ScaleCfg>}{
    *      type: Scale.type.linear,   // {@link Scale.Scale.type Scale.type} 
    *      domain:['auto', 'auto']    // {@link Scale.DomainCfg Scale.DomainCfg}: min/max of domain; 'auto', or a domain value
    *  }
    * ```
    * #### titleCfg(primary:boolean, x:boolean):
    * ```
    *  cfg.[primary|secondary].[x|y].title = {@link SVGElem.TextElem <SVGElem.TextElem>}{
    *     visible: true,  
    *     text:    (x? 'x' : 'y') + (primary? '' : '2'),    // 'x'/'y' or 'x2'/'y2'
    *     xpos:    x? 'end' : (primary? 'middle' : 'start'),          
    *     ypos:    x? 'top' : (primary? 'bottom' : 'top'),           
    *     hOffset: x? -2 : (primary? 0 : 0.3),            
    *     vOffset: x? (primary? 0.4 : -1.2) : (primary? -0.5 : 0.7) 
    *  }      
    * ```
    * #### markCfg(primary:boolean, major:boolean):
    * ```
    *  cfg.[primary|secondary].[x|y].ticks.[major|minor].marks = {@link Axes.MarkCfg <Axes.MarkCfg>}{
    *     visible: major, 
    *     length: (primary? 1 : -1) * (major? 10 : 5) 
    *  }      
    * ```
    * #### labelCfg(primary:boolean, x:boolean, major:boolean):
    * ```
    *  cfg.[primary|secondary].[x|y].ticks.[major|minor].labels = {@link SVGElem.TextElem <SVGElem.TextElem>}{
    *     visible: major, 
    *     xpos: x? 'middle' : (primary? 'end' : 'start')
    *     ypos: x? (primary? 'top' : 'bottom') : 'center', 
    *     hOffset: x? 0 (primary? -0.7 : 0.7), 
    *     vOffset: x? (primary? 0.7 : -0.7) : 0
    *  }      
    * ```
    * @param cfg the configuration object, containing default settings for all 
    * previously configured components.
    */
    static config(cfg:Config) {
        function scaleCfg():ScaleCfg {
            return {                             // axis scaling information
                type: Scale.type.linear,         //    scale type
                domain:<Domain>['auto', 'auto']  //    min/max of domain; 'auto', or a domain value
            };
        }
        function labelCfg(primary:boolean, x:boolean, major:boolean):LabelCfg {
            return { 
                visible: major, text: '',
                xpos: x? 'middle' : (primary? 'end' : 'start'),
                ypos: x? (primary? 'top' : 'bottom') : 'center', 
                hOffset: x? 0 : (primary? -0.7 : 0.7), 
                vOffset: x? (primary? 0.7 : -0.7) : 0
            }; 
        }
        function markCfg(primary: boolean, major:boolean):MarkCfg {
            return { 
                visible: major, 
                length: (primary? 1 : -1) * (major? 10 : 5) 
            };
        }
        function titleCfg(primary:boolean, x:boolean):LabelCfg {
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
                scale:      scaleCfg(),
                title: titleCfg(primary, x),
                ticks: {                    
                    major: {                
                        marks:  markCfg(primary, true),  
                        labels: labelCfg(primary, x, true),
                        labelFmt: undefined    
                    },
                    minor: { 
                        marks:  markCfg(primary, false),
                        labels: labelCfg(primary, x, false),    
                        labelFmt: undefined    
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
    drawTitle(x:boolean, ttlCfg:LabelCfg, type: string, range:Area, cross:number):Vnode {
        ttlCfg.cssClass = 'hs-graph-axis-title';
        const xy = { transform:`translate(${x?range[1]:cross}, ${x?cross:range[1]})` };
        return !ttlCfg.visible? undefined : 
            m('g', xy, this.text(ttlCfg, ttlCfg.text));
    }

    /**
     * draws the tick marks. Labels are plotted for major tick marks only.
     */
    drawTickMarks(dir:string, type:string, crossesAt:number, scale:Scale, ticks:TickType[], cfg:TickStruct):Vnode {
        const x = dir==='x';
        return m('svg', { class:`hs-graph-axis-${type}-tick-marks`}, 
            !cfg.marks.visible? '' : ticks.map((t:TickType) => { 
                return x? this.verLine(scale.convert(t.pos), crossesAt, crossesAt+cfg.marks.length) :
                          this.horLine(crossesAt, crossesAt-cfg.marks.length, scale.convert(t.pos));
            })
        );
    }

    /**
     * draws the tick labels. Labels are plotted for major tick marks only.
     */
    drawTickLabels(x:boolean, crossesAt:number, scale:Scale, ticks:TickType[], cfg:TickStruct):Vnode {
        scale.setLabelFormat(cfg.labelFmt);
        return m('svg', {class:'hs-graph-axis-tick-label'}, 
            !cfg.labels.visible? '' : ticks.map((t:TickType) => { 
                const v = scale.convert(t.pos);
                const xy = { transform:`translate(${x?v:crossesAt}, ${x?crossesAt:v})` };
                return m('g', xy, this.text(cfg.labels, t.label));
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
    drawAxis(dir:string, scales: XYScale, type:string, axisCfg:AxesConfig):Vnode {
        const x = dir==='x';
        const range = scales[dir].range();
        const cfg   = axisCfg[type][dir];
        scales[dir].scaleType(cfg.scale.type);
        const crossesAt:number = getCrossAt(cfg.crossesAt, scales[x?'y':'x']);
        const ticks = scales[dir].ticks();
        return !cfg.visible? undefined : m('svg', { class:`hs-graph-axis-${dir} hs-graph-axis-${type}`}, [
            this.drawAxisLine(x, range, crossesAt),
            this.drawTitle(x, cfg.title, type, range, crossesAt),
            this.drawTickMarks(dir, 'minor', crossesAt, scales[dir], ticks.minor, cfg.ticks.minor),
            this.drawTickMarks(dir, 'major', crossesAt, scales[dir], ticks.major, cfg.ticks.major),
            this.drawTickLabels(x, crossesAt, scales[dir], ticks.major, cfg.ticks.major)
        ]);
    }

    setScaleTypes(cfg: AxesConfig, scales: Scales) {
        scales.primary.x.scaleType(cfg.primary.x.scale.type);
        scales.primary.y.scaleType(cfg.primary.y.scale.type);
        scales.secondary.x.scaleType(cfg.secondary.x.scale.type);
        scales.secondary.y.scaleType(cfg.secondary.y.scale.type);
    }

    view(node?: Vnode): Vnode {
        const cfg:AxesConfig    = node.attrs.cfg;
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

/**
 * ### Simple Example
 * <example>
 * <file name='script.js'>
 * let series = {
 *    names:['time', 'volume'],
 *    rows:[
 *      [-1, 0.2],
 *      [0.2, 0.7],
 *      [0.4, -0.2],
 *      [0.6, 0],
 *      [0.8, 0.5],
 *      [1, 0.7]
 * ]};
 * 
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
 *          cfg.chart.title.text          = 'Simple Example';
 *          cfg.series.data   = series;
 *          cfg.series.series = [{ cols: ['time', 'volume'] }];
 *      }})
 * });
 *
 * </file>
 * <file name='style.css'>
 * .hs-graph-chart { fill: #fff; }
 * .hs-graph-series { stroke-width: 5; }
 * </file>
 * </example>
 */
class ExampleLinearAxis {}

/**
* ### Logarithmic Axis
* <example>
* <file name='script.js'>
* let series = {
*    names:['time', 'volume'],
*    rows:[[0.3, 0.2], [0.32, 0.7], [0.4, 8], [0.56, 10], [0.7, 0.5], [0.8, 15]]
* };
* 
* m.mount(root, { 
*      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
*          cfg.chart.title.text = 'Log Y Axis';
*          cfg.series.data   = series;
*          cfg.series.series = [{ cols: ['time', 'volume'] }];
*          cfg.axes.primary.x.scale.type = hsgraph.Scale.type.log;
*          cfg.axes.primary.x.scale.domain = ['tight', 'tight'];
*          cfg.axes.primary.y.scale.type = hsgraph.Scale.type.log;
*          cfg.axes.primary.y.scale.domain = ['auto', 'auto'];
*      }})
* });
*
* </file>
* </example>
*/
class ExampleLogAxis {}

/**
* ### Date Axis
* <example>
* <file name='script.js'>
* let series = {
*    names:['time', 'volume'],
*    rows:[['2/6/17', 0.2], ['3/18/17', 0.7], ['5/1/17', 8], ['11/20/17', 10], ['1/15/18', 0.5]]
* };
* 
* m.mount(root, { 
*      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
*          cfg.chart.title.text = 'Date X Axis';
*          cfg.series.data   = series;
*          cfg.series.series = [{ cols: ['time', 'volume'] }];
*          cfg.axes.primary.x.scale.type = hsgraph.Scale.type.date;
*          cfg.axes.primary.x.ticks.major.labelFmt = '%MMM %YY';
*      }})
* });
*
* </file>
* <file name='style.css'>
* .hs-graph-series { stroke-width: 5; }
* </file>
* </example>
*/
class ExampleDateAxis {}
