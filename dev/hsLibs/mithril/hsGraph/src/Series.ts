/**
Series
*/

/** */
import { m, Vnode}      from 'hslayout';



export class Series {
    view(vnode?: Vnode): Vnode {
        return m('svg', {x1:'0%', y1:'0%', x2:'30%', y2:'100%'});
    }
}