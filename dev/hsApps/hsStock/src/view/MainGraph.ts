import { m, Vnode}      from 'hslayout';
import { Layout }       from 'hslayout';
import { Data,
         DataSet }      from 'hsdata';
import { Condition }    from 'hsdata';
import { Graph,
         Series,
         Axes }         from 'hsgraph';
import { gEquityList,
         EquityItem }   from '../controller/Equity';


export class MainGraph extends Layout {
    getComponents(node: Vnode): Vnode { 
        const symbol = m.route.param('symbol');
        const item:EquityItem = gEquityList.getItem(symbol);
        const data:DataSet = item.quotes? item.quotes : {names:['Date', 'Close'], rows:[['1/1/17',0], ['12/31/17', 1]]};
        const shares:DataSet = Data.toDataSet(item.trades);
//        const cond:Condition = { Date: (d:Date) => d.getFullYear()>1900};
        const buyCond:Condition = { change: (c:number) => c>0};
        const sellCond:Condition = { change: (c:number) => c<0};
        let limitDate = new Date('1/1/2015');
        const timeCond:Condition = { Date: (d:Date) => d>limitDate};
        return [m(Graph, {cfgFn: (cfg:any) => {
            cfg.graph.timeCond = timeCond;
            cfg.chart.title.visible = false;
            cfg.axes.primary.x.scale.type = Axes.type.date;
            cfg.axes.primary.x.title.visible = false;
            cfg.axes.primary.x.scale.domain = ['auto', new Date()]; // always up to today
            cfg.axes.primary.y.scale.type = Axes.type.log;
            cfg.axes.primary.y.scale.domain = ['tight', 'tight']; // always up to today
            cfg.axes.primary.y.title.visible = false;
            cfg.axes.primary.y.ticks.minor.labels.visible = true;
            cfg.grid.minor.hor.visible = true;
            cfg.series.data   = [data, shares];
            cfg.series.defaultStyle.line.width = 1;
            cfg.series.series = [
                { cols: ['Date', 'High', 'Low'], type: Series.plot.area },
                { cols: ['Date', 'Close'], type: Series.plot.line },
                { cols: ['date', 'price'], type: Series.plot.marker, dataIndex:1, cond:buyCond },
                { cols: ['date', 'price'], type: Series.plot.marker, dataIndex:1, cond:sellCond }
            ];
            cfg.series.series[0].style.fill.color = '#ccf';
            cfg.series.series[1].style.line.color = '#008';
            cfg.series.series[2].style.line.visible = false;
            cfg.series.series[2].style.marker.shape = Series.marker.upTriangle;
            cfg.series.series[2].style.marker.color = '#0c0';
            cfg.series.series[2].style.marker.size = 8;
            cfg.series.series[3].style.line.visible = false;
            cfg.series.series[3].style.marker.shape = Series.marker.downTriangle;
            cfg.series.series[3].style.marker.color = '#a00';
            cfg.series.series[3].style.marker.size = 8;
        }}),
//            m(Collapsible, {css:'hs-stock-setting-overlay', components: [
//                m('', 'Options:'),
//                [m(Button, { name: 'option 1'}), m('', 'option 2')]
//            ]})
        ];
    }     
} 
