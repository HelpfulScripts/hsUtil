import { ScaleSet } from './Scale';
import { GraphSet } from './Graph';
import { AxisSet }  from './Axes';

export interface Config {
    scale?: ScaleSet;
    graph?: GraphSet;
    axes?:  AxisSet;
    chart?:{

    };
    grid?:{

    };
    series?:{
        data?: Array<number|string>[];   // array of rows; 1st row contains column headers
        series?: [
            { xHeader:string, yHeader:string }
        ]
    };
    title?:{
        text?: string;
        align?: {h:string; v:string}   // h: center | left | right; v: center | top  | bottom
    };
    legend?:{

    };
}
