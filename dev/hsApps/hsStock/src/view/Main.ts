import { m, Vnode}      from 'hslayout';
import { Container }    from 'hslayout';
import { EquityList }   from './Equity';
import { gEquityList }  from '../Site';

export class Main extends Container {
    getComponents(node: Vnode): Vnode {
        let symbol:string;
        let list = gEquityList;
        if (node.attrs && node.attrs.route) {
            symbol = node.attrs.route.symbol;
        }
        return m('.hs-main', symbol? equityDetail(list, symbol) : 'main');
    }     
} 

function equityDetail(list:EquityList, sym: string) {
    const item = list.getItem(sym);
    return m('.hs-equity-detail', [
        m('.hs-equity-name', item.name),
        m('.hs-equity-symbol', item.symbol),
        m('.hs-equity-cat', item.cat),
        m('.hs-equity-cat', item.pe),
        m('.hs-equity-cat', item.week52High),
        m('.hs-equity-cat', item.week52Low),
        m('.hs-equity-cat', item.marketCap),
        m('.hs-equity-cat', item.sector),
        m('.hs-equity-cat', item.primaryExchange),
        m('.hs-equity-cat', item.change),
        m('.hs-equity-cat', `${item.quotes?item.quotes.colNames().length:0} quotes`),
    ]);
}

