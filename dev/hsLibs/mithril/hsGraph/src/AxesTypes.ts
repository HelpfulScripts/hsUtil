/**
 * @module Axes
 */

 /** */
import { VisibleCfg, 
         LabelCfg } from './Graph';
import { Scale }    from './Scale';
import { Domain }   from 'hsdata';

/** Set of `Scales` for x- and y-axis*/
export interface XYScale { x: Scale; y:Scale; }

/** Set of `Scales` for primary and secondary x- and y-axes. */
export interface Scales {
    primary:   XYScale;
    secondary: XYScale;
}

/**
 * Configures the scale type and domain boundaries `[min, max]` to be displayed.
 */
export interface ScaleCfg {
    /** scale type: {@link Axes.Axes.type Axes.type}.`linear` | `log` | `date` | `index` | `percent` | `ordinal` | `nominal` */
    type: string;

    /**
     * Configures the domain boundaries `[min, max]` to be displayed.
     * For ordinal values these are the numeric min and max values of the domain,
     * or the special values 
     * - `auto`: determines the domain automatically from the data. Boundaries are set 'loosely' 
     *   so that the major tick mark below and above the data range are displayed as well.
     * - `tight`: same as `auto`, except the domain covers exactly the values contained in data. 
     * Both values can be set indepoendently for `min` and `max`
     */
    domain: Domain;
}

export interface Ticks {
    major: TickDefs;
    minor: TickDefs;
}

export interface TickLabel {
    pos:number;     // domain value, at which to print tick label
    text:string;    // string to print at labelPos
}

export interface TickDefs {
    marks:  number[];   // domain values where to draw a mark
    labels: TickLabel[];// 
};

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

    /** axis type  */
    scale: ScaleCfg;

    /** configures the major and minor ticks */
    ticks: TicksCfg;
}
