import { ScaleSet }     from './Scale';
import { GraphSet }     from './Graph';
import { AxisSet }      from './Axes';
import { SeriesSet }    from './Series';
import { ChartSet }     from './Chart';
import { GridSet }      from './Grid';

export interface Config {
    scale?:  ScaleSet;
    graph?:  GraphSet;
    axes?:   AxisSet;
    chart?:  ChartSet;
    grid?:   GridSet;
    series?: SeriesSet;
    title?:{
        text?: string;
        align?: {h:string; v:string}   // h: center | left | right; v: center | top  | bottom
    };
    legend?:{

    };
}
