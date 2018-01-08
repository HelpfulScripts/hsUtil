import { m, Vnode}      from 'hslayout';
import { Layout }       from 'hslayout';
import { Data,
         DataSet }      from 'hsdata';
import { Condition }    from 'hsdata';
//import { RadioButtons } from 'hswidget';
import { 
//         Button,
         ToggleButton } from 'hswidget';
import { Graph,
         Series,
         Axes }         from 'hsgraph';
import { gEquities,
         EquityItem }   from '../controller/Equities';

let limitDateIndex = 0;

function getLimitDate(time:string):Date {
    const result = new Date();
    switch (time) {
        case 'max':  result.setFullYear(result.getFullYear()-30); break;
        case '20yr': result.setFullYear(result.getFullYear()-20); break;
        case '10yr': result.setFullYear(result.getFullYear()-10); break;
        case '5yr':  result.setFullYear(result.getFullYear()-5); break;
        case '1yr':  result.setFullYear(result.getFullYear()-1); break;
        case '1mo':  result.setMonth(result.getMonth()-1); break;
        case '10d':  result.setDate(result.getDate()-10); break;
        case '1d':   result.setDate(result.getDate()-1); break;
    }
    result.setHours(0);
    return result;
}

export class MainGraph extends Layout { 
    getComponents(node: Vnode): Vnode { 
        const timeWindows = ['1d', '10d', '1mo', '1yr', '5yr', '10yr', '20yr', 'max'];
        const limitDates = timeWindows.map(getLimitDate);
        let limitDate = limitDates[limitDateIndex];
        let maxDate = new Date();
        const symbol = m.route.param('symbol');
        const item:EquityItem = gEquities.getItem(symbol);
        if (limitDateIndex===0 && item.intraday) {
            limitDate = <Date>item.intraday.rows[0][0]; // the date
            maxDate = <Date>item.intraday.rows[item.intraday.rows.length-1][0];
        }
        const dataQuotes:DataSet = item.quotes? item.quotes : {names:['Date', 'Close'], rows:[]};
        const dataIntra:DataSet = item.intraday? item.intraday : {names:['Date', 'Close'], rows:[]};
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
            cfg.axes.primary.x.scale.domain = ['auto', 'tight']; // always up to today
            cfg.axes.primary.y.scale.type = Axes.type.log;
            cfg.axes.primary.y.scale.domain = ['tight', 'tight']; // always up to today
            cfg.axes.primary.y.title.visible = false;
            cfg.axes.primary.y.ticks.minor.labels.visible = true;
            cfg.grid.minor.hor.visible = true;
            cfg.series.data   = [dataQuotes, shares, dataIntra];
            cfg.series.defaultStyle.line.width = 1;
            cfg.series.series = [
                { x:'Date', yh:'High', yl:'Low', type: Series.plot.area, dataIndex:limitDateIndex===0?2:0},
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
            cfg.series.series[2].vOffset = 5;   // em
            cfg.series.series[3].style.line.visible = false;
            cfg.series.series[3].style.marker.shape = Series.marker.downTriangle;
            cfg.series.series[3].style.marker.color = '#a00';
            cfg.series.series[3].style.label.color = '#a00';
            cfg.series.series[3].style.marker.size = 8;
            cfg.series.series[3].vOffset = 5;   // em 
        }}),
        m(ToggleButton, { 
            style: 'left:100px; width:35px;',
            desc: {
                items:timeWindows, 
                selectedItem: timeWindows[1],
                changed: (item:string) => {
                    const i = (timeWindows.indexOf(item) + 1) % timeWindows.length;
                    limitDateIndex = i;
                }
            }
        })
        ];
    }     
} 
