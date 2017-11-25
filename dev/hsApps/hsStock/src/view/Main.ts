import { m, Vnode}      from 'hslayout';
import { Layout }       from 'hslayout';
import { Graph,
         DataSet, 
         Series,
         Axes }         from 'hsgraph';
import { EquityItem }   from './Equity';
import { gEquityList }  from '../Site';

export class Main extends Layout {
    getComponents(node: Vnode): Vnode {
        let symbol:string;
        let list = gEquityList;
        if (node.attrs && node.attrs.route) {
            symbol = node.attrs.route.symbol;
        }
        const item = list.getItem(symbol);
        return m(Layout, {
            css: '.hs-main-components',
            rows: ["100px", "fill"],
            content:[ graph(item)]
        });
    }     
} 

export class MainDetails extends Layout {
    getComponents(node: Vnode): Vnode {
        let symbol:string;
        let list = gEquityList;
        if (node.attrs && node.attrs.route) {
            symbol = node.attrs.route.symbol;
        }
        const item = list.getItem(symbol);
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
} 

export class MainGraph extends Layout {
    getComponents(node: Vnode): Vnode {
        let symbol:string;
        let list = gEquityList;
        if (node.attrs && node.attrs.route) {
            symbol = node.attrs.route.symbol;
        }
        const item = list.getItem(symbol);
        const data:DataSet = item.quotes? item.quotes.export() : {names:['Date', 'Close'], rows:[['1/1/17',0], ['12/31/17', 1]]};
        return m(Graph, {cfgFn: (cfg:any) => {
                cfg.chart.title.visible = false;
                cfg.axes.primary.x.scale.type = Axes.type.date;
                cfg.axes.primary.x.title.visible = false;
                cfg.axes.primary.x.scale.domain = ['auto', new Date()]; // always up to today
                cfg.axes.primary.y.scale.type = Axes.type.log;
                cfg.axes.primary.y.scale.domain = ['tight', 'tight']; // always up to today
                cfg.axes.primary.y.title.visible = false;
                cfg.axes.primary.y.ticks.minor.labels.visible = true;
                cfg.grid.minor.hor.visible = true;
                cfg.series.data   = data;
                cfg.series.defaultStyle.line.width = 1;
                cfg.series.series = [
                    { cols: ['Date', 'Close'], type: Series.plot.line },
                    { cols: ['Date', 'High'], type: Series.plot.line }
                ];
            }});
    }     
} 

function graph(item:EquityItem) { 
}
