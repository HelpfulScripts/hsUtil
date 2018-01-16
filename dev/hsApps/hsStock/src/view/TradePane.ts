import { m, Vnode }     from 'hslayout';
import { Layout }       from 'hslayout';
import { Data }         from 'hsdata';
import { Graph,
         Axes }         from 'hsgraph';
import { gEquities,
         Category,
         EquityItem }   from '../controller/Equities';
import { Transaction }  from '../controller/Assets';


export const TradePane = {
    view: (node: Vnode): Vnode => {
        return m(Layout, {
            columns: [],
            css: '.hs-trade-pane',
            content: [m(EquityShare)]
        });
    }    
};

class EquityShare extends Layout {
    getComponents(node: Vnode): Vnode { 
        let investment = new Data({ colNames: ['Date', 'Total'], rows: [], name:'Investments'});
        let categories = new Data({ colNames: ['Date', 'Total'], rows: [], name:'Categories' });

        // create columns
        gEquities.getCategories().map((cat:Category)=>{
            categories.addColumn(cat.cat);
            cat.equities.map((item:EquityItem) => investment.addColumn(item.symbol) );
        });

        // fill columns
        const dateCol = investment.colNumber('Date');
        const totalCol = investment.colNumber('Total');
        const invRows = investment.export().rows;
        const catRows = categories.export().rows;
        gEquities.getCategories().map((cat:Category)=>{
            const catCol = categories.colNumber(cat.cat);
            cat.equities.map((item:EquityItem) => {
                const symCol = investment.colNumber(item.symbol);
                if (item.trades) {
                    item.trades.map((trade:Transaction) => {
                        const invRow:any[] = investment.export().colNames.map(()=>0);
                        const catRow:any[] = categories.export().colNames.map(()=>0);
                        const value = trade.change * trade.price;
                        invRow[dateCol]  = trade.Date;
                        catRow[dateCol]  = trade.Date;
                        invRow[symCol]   = value;
                        catRow[catCol]   = value;
                        invRow[totalCol] = value;
                        catRow[totalCol] = value;
                        invRows.push(invRow);
                        catRows.push(catRow);
                    });
                }
            });
        });

        // sort and accumulate columns
        investment.sort('ascending', 'Date');
        categories.sort('ascending', 'Date');
        const invNames = investment.colNames();
        invNames.shift();
        investment = investment.map('cumulate', invNames); // all cols except Date
        const catNames = categories.colNames();
        catNames.shift();
        categories = categories.map('cumulate', catNames); // all cols except Date
        const show = ['cats', 'stocks'][0];
        const dataSet = show==='cats'? categories : investment;
        const names = dataSet.colNames();
        names.shift(); // remove Date
        names.shift(); // remove Total

        return [m('.hs-layout-fill', { onmousemove:console.log}, m(Graph, { cfgFn: (cfg:any) => {
            cfg.axes.primary.x.scale.type = Axes.type.date;
            cfg.axes.primary.x.title.visible = false;
            cfg.series.data   = [dataSet];
            cfg.axes.primary.x.scale.domain = ['auto', 'auto']; // always up to today
            cfg.series.series = names.map((n:string, i:number):any => {
                return { x:'Date', yh:n, yl:i>0?names[i-1]:undefined, type: 'area' };
            })
            .concat([
                { x:'Date', y:'Total', type: 'line' }
            ]);
        }}))];
    }
}
