import { m, Vnode}      from 'hslayout';
import { Layout }       from 'hslayout';
import { Data,
         DataSet }      from 'hsdata';
import { Condition }    from 'hsdata';
//import { RadioButtons } from 'hswidget';
import { ToggleButton } from 'hswidget';
import { Graph,
         Series,
         Axes }         from 'hsgraph';
import { gEquityList,
         EquityItem }   from '../controller/Equity';

let limitDate:Date;

export class MainGraph extends Layout { 
    getComponents(node: Vnode): Vnode { 
        const timeWindows = ['max', '10yr', '5yr', '1yr', '1mo', '10d', '1d'];
        const limitDates = [
            new Date('1/1/1990'), new Date('1/1/2007'), new Date('1/1/2013'), new Date('1/1/2017'), new Date('12/1/2017'),
            new Date('12/20/2017'),  new Date('12/29/2017')
        ];
        if (!limitDate) { limitDate = limitDates[1]; }
        const symbol = m.route.param('symbol');
        const item:EquityItem = gEquityList.getItem(symbol);
        const data:DataSet = item.quotes? item.quotes : {names:['Date', 'Close'], rows:[['1/1/17',0], ['12/31/17', 1]]};
        const shares:DataSet = Data.toDataSet(item.trades);
//        const cond:Condition = { Date: (d:Date) => d.getFullYear()>1900};
        const buyCond:Condition = { change: (c:number) => c>0};
        const sellCond:Condition = { change: (c:number) => c<0};
        
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
                { cols: ['Date', 'price'], type: Series.plot.marker, dataIndex:1, cond:buyCond },
                { cols: ['Date', 'price'], type: Series.plot.marker, dataIndex:1, cond:sellCond }
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
//        m(RadioButtons, { 
        m(ToggleButton, { 
            css:'.hs-time-button', 
            desc: {
                items:timeWindows, 
                selectedItem: timeWindows[1],
                changed: (item:string) => {
                    const i = (timeWindows.indexOf(item) + 1) % timeWindows.length;
                    limitDate = limitDates[i];
                }
            }
        })];
    }     
} 
