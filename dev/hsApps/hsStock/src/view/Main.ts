import { m, Vnode}      from 'hslayout';
import { Layout }    from 'hslayout';
import { Graph, 
         DataSet }      from 'hsgraph';
import { EquityList,
         EquityItem }   from './Equity';
import { gEquityList }  from '../Site';

export class Main extends Layout {
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
    return m(Layout, {
        css: 'myColumn',
        rows: ["200px", "fill"],
        content:[details(item), graph(item)]
    });
}

function details(item:EquityItem) {
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
        m('.hs-equity-cat', `${item.quotes?item.quotes.getData().length:0} quotes`)
    ]);
}

function graph(item:EquityItem) {
    const data:DataSet = item.quotes? item.quotes.export() : {names:[], data:[]};
    return m(Graph, {cfgFn: (cfg:any) => {
            cfg.chart.title.text   = 'Simple Example';
            cfg.series.data   = data.data;
            cfg.series.series = [{ cols: data.names }];
    }});
}
