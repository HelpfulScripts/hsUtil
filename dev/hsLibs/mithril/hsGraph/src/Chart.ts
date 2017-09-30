
import { m, Vnode}  from 'hslayout';
import { Config }   from './Graph';
import { SVGElem, Style }  from './SVGElem';


export interface ChartSet {
    title?:  {              // the graph title
        visible?: boolean;  //
        text:string;        // the sting to display
        x:string;           // left | middle | right
        y:string;           // top | center | bottom
    };
}

export class Chart extends SVGElem { 
    static config(cfg:Config) {
        cfg.chart = <ChartSet>{
            visible: true,
            title:  { text:'', x:'middle', y:'top' } 
        };
    return cfg;
    }

    onupdate(node?: Vnode) {
        console.log(node);
    }

    view(node?: Vnode): Vnode {
        const cfg:ChartSet = node.attrs.cfg;
        const na =  node.attrs;
        let x, y, 
            style:Style={ cssClass: 'hs-graph-chart-background' };
        switch(cfg.title.x) {
            case 'left':    x=0;      style.textAnchor='start'; break;
            case 'right':   x='100%'; style.textAnchor='end'; break;
            case 'middle':  x='50%';  style.textAnchor='middle'; break;
            default: console.log('unrecognized x-position for graph title: ' + cfg.title.x);
        }
        switch(cfg.title.y) {
            case 'top':    y=0;      style.baselineShift='top'; break;
            case 'bottom':   y='100%'; style.baselineShift='center'; break;
            case 'middle':  y='50%';  style.baselineShift='bottom'; break;
            default: console.log('unrecognized y-position for graph title: ' + cfg.title.y);
        }
        return m('svg', { class:'hs-graph-chart'}, [
            this.rect({x:na.x, y:na.y}, {w: na.width, h: na.height}),
            this.text({x:x, y:y}, cfg.title.text, style)
        ]);
    }
}

