import { m, Vnode}     from '../../../mithril';
import { Container }   from '../../../hsLayout/src/';
import { markDown } from '../showdown';


const COPYRIGHT     = "&copy; Helpful Scripts";

export class FooterBar extends Container {
    view(node:Vnode):Vnode {
        return this.layout('.hs-site-footer', node, { }, m.trust(markDown(COPYRIGHT)));
    }
};