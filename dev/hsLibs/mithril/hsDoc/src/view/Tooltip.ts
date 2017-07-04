import { m, Vnode} from '../../../mithril';

export function tooltip(text:string, tip:string, position:string):Vnode { 
    // position: top, left, botton, right
    return m('.tooltip[href=#]', [text, m(`span.tooltip-${position}`, tip)]);
}

