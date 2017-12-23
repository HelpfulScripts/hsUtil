import { m, Vnode }     from 'hslayout';
import { Layout }       from 'hslayout';

export class TradePane extends Layout {
    getComponents(node: Vnode): Vnode {
        return m('Trade...');
    }
}
