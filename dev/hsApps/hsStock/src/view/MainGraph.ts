import { m, Vnode}      from 'hslayout';
import { Layout }       from 'hslayout';
import { Data,
         DataSet }      from 'hsdata';
import { Condition }    from 'hsdata';
//import { RadioButtons } from 'hswidget';
import { Button,
         ToggleButton } from 'hswidget';
import { Graph,
         Series,
         Axes }         from 'hsgraph';
import { gEquities,
         EquityItem }   from '../controller/Equities';

let limitDate:Date;

export class MainGraph extends Layout { 
    getComponents(node: Vnode): Vnode { 
        const timeWindows = ['max', '20yr', '10yr', '5yr', '1yr', '1mo', '10d', '1d'];
        const limitDates = [
            new Date('1/1/1990'), new Date('1/1/1997'), new Date('1/1/2007'), new Date('1/1/2013'), new Date('1/1/2017'), new Date('12/1/2017'),
            new Date('12/20/2017'),  new Date('12/29/2017')
        ];
        if (!limitDate) { limitDate = limitDates[1]; }
        const symbol = m.route.param('symbol');
        const item:EquityItem = gEquities.getItem(symbol);
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
                { x:'Date', yh:'High', yl:'Low', type: Series.plot.area },
                { x:'Date', y:'Close', type: Series.plot.line },
                { x:'Date', y:'price', l:'change', type: Series.plot.marker, dataIndex:1, cond:buyCond },
                { x:'Date', y:'price', l:'change', type: Series.plot.marker, dataIndex:1, cond:sellCond }
            ];
            cfg.series.series[0].style.fill.color = '#ccf';
            cfg.series.series[1].style.line.color = '#008';
            cfg.series.series[2].style.line.visible = false;
            cfg.series.series[2].style.marker.shape = Series.marker.upTriangle;
            cfg.series.series[2].style.marker.color = '#0c0';
            cfg.series.series[2].style.label.color = '#0c0';
            cfg.series.series[2].style.marker.size = 8;
            cfg.series.series[3].style.line.visible = false;
            cfg.series.series[3].style.marker.shape = Series.marker.downTriangle;
            cfg.series.series[3].style.marker.color = '#a00';
            cfg.series.series[3].style.label.color = '#a00';
            cfg.series.series[3].style.marker.size = 8;
        }}),
        m(ToggleButton, { 
            css:'.hs-time-button', 
            style: 'left:100px; width:30px;',
            desc: {
                items:timeWindows, 
                selectedItem: timeWindows[1],
                changed: (item:string) => {
                    const i = (timeWindows.indexOf(item) + 1) % timeWindows.length;
                    limitDate = limitDates[i];
                }
            }
        }),
        m(Button, { 
//            css:'.hs-time-button', 
            style: 'left:150px; width:30px;',
            name: 'Update',
            onclick: () => gEquities.getMarketUpdate()
        })
        ];
    }     
} 
