import { m, Vnode} from '../../../mithril';

export function tooltip(text:string, tip:string, position:string):Vnode { 
    // position: top, left, botton, right
    return m('.hs-tooltip[href=#]', [text, m(`span.hs-tooltip-${position}`, tip)]);
}

