import { Vnode}     from '../../../mithril';
import { Layout }   from '../../../hsLayout/src/';

const COPYRIGHT     = "(c) Helpful Scripts";

export class FooterBar extends Layout {
    view(node:Vnode):Vnode {
        return this.layout('.hs-site-footer', node, { }, COPYRIGHT);
    }
}; 

