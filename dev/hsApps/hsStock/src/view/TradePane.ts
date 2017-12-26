import { m, Vnode }     from 'hslayout';
import { Layout }       from 'hslayout';

export const TradePane = {
    view: (node: Vnode): Vnode => {
        return m(Layout, {
            columns: [],
            css: '.hs-trade-pane',
            content: 'Trade...'
        });
    }    
};

