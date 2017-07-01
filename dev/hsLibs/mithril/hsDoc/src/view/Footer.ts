const m = require("mithril");
import { Layout } from '../../../hsLayout/src/';

const COPYRIGHT     = "(c) Helpful Scripts";

export class FooterBar extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        return this.layout('.hs-site-footer', node, { }, COPYRIGHT);
    }
}; 

