import { m, Vnode}      from 'hslayout';
import { Layout }    from 'hslayout';
import { tabView }      from './ViewPane';
import { tabTrade }     from './TradePane';
import { tabImport }    from './ImportPane';
import { gEquityList }  from '../Site';

export class LeftNav extends Layout { 
    getComponents(node: Vnode): Vnode {
        let mode:string = 'View';
        let symbol:string;
        let list = gEquityList;
        if (node.attrs && node.attrs.route) {
            mode = node.attrs.route.mode;
            symbol = node.attrs.route.symbol;
        }
        let content = '???';
        switch(mode) {
            case 'Import':  content = tabImport(list, symbol); break;
            case 'Trade':   content = tabTrade(list, symbol); break;
            case 'View':
            default:        content = tabView(list, symbol);
        }
        return m('.hs-left', [content]);
    }     
} 

