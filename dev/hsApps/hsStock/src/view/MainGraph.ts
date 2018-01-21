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
        case '40yr': result.setFullYear(result.getFullYear()-40); break;
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
        const timeWindows = ['1yr', '1mo', '10d', '1d', '40yr', '20yr', '10yr', '5yr'];
        const limitDates = timeWindows.map(getLimitDate);
        let limitDate = limitDates[limitDateIndex];
        let maxDate = new Date();
        const symbol = m.route.param('symbol');
        const item:EquityItem = gEquities.getItem(symbol);
        if (timeWindows[limitDateIndex]==='1d' && item.intraday) {
            limitDate = <Date>item.intraday.rows[0][0]; // the date
            maxDate = <Date>item.intraday.rows[item.intraday.rows.length-1][0];
        }
        const dataQuotes:DataSet = item.quotes? item.quotes : 
            {name:'Quotes', colNames:['Date', 'Close'], rows:[]};
        const dataIntra:DataSet = item.intraday? item.intraday : 
            {name:'Intraday', colNames:['Date', 'Close'], rows:[[]]};
        const shares:DataSet = Data.toDataSet(item.trades, 'Shares');
        const buyCond:Condition = { change: (c:number) => c>0};
        const sellCond:Condition = { change: (c:number) => c<0};
        const timeCond:Condition = { Date: (d:Date) => d>limitDate};
        return [m('.hs-layout-fill', { onmousemove:console.log}, m(Graph, { cfgFn: (cfg:any) => {
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
                { x:'Date', y:'High', yBase:'Low', type: 'area', dataIndex:timeWindows[limitDateIndex]==='1d'?2:0},
                { x:'Date', y:'Close', type: 'line' },
                { x:'Date', y:'price', l:'change', type: 'marker', dataIndex:1, cond:buyCond },
                { x:'Date', y:'price', l:'change', type: 'marker', dataIndex:1, cond:sellCond }
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
        }})),
        m(ToggleButton, { 
            style: 'left:100px; width:35px;',
            desc: {
                items:timeWindows, 
                selectedItem: timeWindows[limitDateIndex],
                changed: (item:string) => {
                    const i = (timeWindows.indexOf(item) + 1) % timeWindows.length;
                    limitDateIndex = i;
                }
            }
        })
        ];
    }     
} 
