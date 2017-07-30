import { m, Vnode}     from '../../../mithril';
import { Container }   from '../../../hsLayout/src/';
import { markDown } from '../showdown';


const COPYRIGHT     = "&copy; Helpful Scripts";

export class FooterBar extends Container {
    view(node:Vnode):Vnode {
        return this.leaf(m('.hs-site-footer', m.trust(markDown(COPYRIGHT))));
    }
};