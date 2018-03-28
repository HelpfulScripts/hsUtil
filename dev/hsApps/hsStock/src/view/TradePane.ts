import { m, Vnode }     from 'hslayout';
import { Layout }       from 'hslayout';
import { Data }         from 'hsdata';
import { Graph,
         SeriesDef,
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
/*
function getInvestments2():[Data, Data] {
    let investment = new Data({ colNames: ['Date', 'Total'], rows: [], name:'Investments'});
    let categories = new Data({ colNames: ['Date', 'Total'], rows: [], name:'Categories' });

    // create columns
    gEquities.getCategories().map((cat:Category)=>{
        categories.colAdd(cat.cat);
        cat.equities.map((item:EquityItem) => investment.colAdd(item.symbol) );
    });

    
    investment.sort('ascending', 'Date');
    categories.sort('ascending', 'Date');
    return [investment, categories];
}
*/
function getInvestments():[Data, Data] {
    let investment = new Data({ colNames: ['Date', 'Total'], rows: [], name:'Investments'});
    let categories = new Data({ colNames: ['Date', 'Total'], rows: [], name:'Categories' });

    // create columns
    gEquities.getCategories().map((cat:Category)=>{
        categories.colAdd(cat.cat);
        cat.equities.map((item:EquityItem) => investment.colAdd(item.symbol) );
    });

    // fill columns
    const dateCol = investment.colNumber('Date');
    const totalCol = investment.colNumber('Total');
    const investRows = investment.export().rows;
    const categRows  = categories.export().rows;
    gEquities.getCategories().map((cat:Category)=>{
        const catCol = categories.colNumber(cat.cat);
        cat.equities.map((item:EquityItem) => {
            const symCol = investment.colNumber(item.symbol);
            if (item.trades) {
                item.trades.map((trade:Transaction) => {
                    const invRow:any[] = investment.export().colNames.map(()=>undefined);
                    const catRow:any[] = categories.export().colNames.map(()=>undefined);
                    const value = trade.total * trade.price;
                    invRow[dateCol]  = trade.Date;
                    catRow[dateCol]  = trade.Date;
                    invRow[symCol]   = value;
                    catRow[catCol]   = value;
                    invRow[totalCol] = value;
                    catRow[totalCol] = value;
                    investRows.push(invRow);
                    categRows.push(catRow);
                });
            }
        });
    });
    investment.sort('ascending', 'Date');
    categories.sort('ascending', 'Date');
    return [investment, categories];
}


class EquityShare extends Layout {
    getComponents(node: Vnode): Vnode { 
        const impute = (val:number, c:number, i:number, rows:any[][]) =>
            (val !== null && val !== undefined)? val : ((i>0)? rows[i-1][c] : 0);

        let [investment, categories] = getInvestments();
        const show = ['cats', 'stocks'][0];
        let dataSet = show==='cats'? categories : investment;

        const names = dataSet.colNames();
        names.shift(); // remove Date
        dataSet = dataSet.map(names, impute); // all cols except Date
        names.shift(); // remove Total

        return [m('.hs-layout-fill', { onmousemove:console.log}, m(Graph, { cfgFn: (cfg:any) => {
            cfg.series.data   = [dataSet];
            cfg.series.series = names.map((n:string, i:number):SeriesDef => {
                return { x:'Date', y:n, map:'shared', type: 'area'};
            });
            cfg.axes.primary.x.scale.type = Axes.type.date;
//            cfg.axes.primary.y.scale.type = Axes.type.percent;
            cfg.axes.primary.x.title.visible = false;
            cfg.axes.primary.x.scale.domain = ['tight', 'tight']; // always up to today
            cfg.axes.primary.y.scale.domain = [0, 1]; // always up to today
//            .concat([
//                { x:'Date', y:'Total', type: 'line' }
//            ]);
        }}))];
    }
}
