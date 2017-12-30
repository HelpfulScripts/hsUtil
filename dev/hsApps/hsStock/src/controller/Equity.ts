import { DataSet }      from 'hsdata';
import { Trader,
         TraderSplit,
         TraderQuote }  from './Trader';
import { ms }           from 'hsutil'; 
import { load, save }   from '../fileIO';
import { Transaction }  from './Assets';

const DEF_EQUITY_LIST   = 'defEquityList.json';
const EQUITY_LIST       = 'equityList.json';
const SAVE_PATH         = 'hsStock/data';   // relative to 'apps/', defines in save.js cgi
const LOAD_PATH         = 'data';           // relative to 'hsStock/', root of webapp location

export interface Category {
    cat:      string;         // the category name
    equities: EquityItem[];   // array of equities in this category
}

export interface ItemStats {
    /** date of stats */
    latestDate?:        Date;
    latestPrice? :      number;
    /** number of shares traded */
    latestVolume?:      number;
    change?:            number;
    /** price-to-earnings ratio */
    peRatio?:           number;
    /** 52 week high */
    week52high?:        number;
    /** 52 week low */
    week52low?:         number;
    /** market capitalziation */
    marketCap?:         number;
    /** total cash (Trailing twelve months) */
    cash?:              number;
    /** total revenue (Trailing twelve months) */
    revenue?:           number;
    /** total earnings (Trailing twelve months) */
    EBITDA?:            number;
    /** latest Earnings per Share */
    latestEPS?:         number;
    /** date of latest Earnings per Share */
    latestEPSDate?:     Date;
    /** dividend rate */
    dividendRate?:      number;
    /** dividend rate */
    dividendYield?:     number; 
    /** date of dividend */
    exDividendDate?:    Date;
}

export interface EquityItem {
    /** equity symbol, e.g. 'GOOG' */
    symbol: string; 
    /** equity name, e.g. 'Alphabet' */
    name:   string;
    /** investment category, e.g. 'Stocks' */
    cat:    string;

    /** set of traders that do not know this symbol */
    invalid?: {};

    /** number of shares owned */
    shares?: number;
    /** transaction history */
    trades?:Transaction[];

    company?: {
        /** industry sector */
        sector?:    string;
        /** primary trading exchange */
        primaryExchange?: string;
    };

    stats?: ItemStats;
    quotes?: DataSet;
    otherStats?:  any;
    splits?: TraderSplit[];
    changed?: boolean;
}

function isCurrentDate(date:string|Date):boolean {    
    if (date) { 
        if (typeof date === 'string') { date = new Date(date); }
        let today = new Date();        
        if (date && !isNaN(date.getTime())) {
            const d = today.getTime() - date.getTime() - ms.days((date.getDay() === 5)? 4 : 2);
            return d < 0; 
        }
    }
    return false;
}

function saveQuotes(item:EquityItem):Promise<EquityItem> {
    return save(item.quotes, `${SAVE_PATH}/stock/quotes${item.symbol}.json`);
}

/** saves equity inof to symXXX.json file, skipping the quotes */
function saveMeta(item:EquityItem):EquityItem {
    if (item.changed) {
        item.changed = undefined;
        console.log(`saving stock/sym${item.symbol}.json`);
        const quotes = item.quotes;
        item.quotes = undefined;
        save(item, `${SAVE_PATH}/stock/sym${item.symbol}.json`);
        item.quotes = quotes;
    }
    return item;
}

function getDataFromTrader(item:EquityItem) {
    console.log(`${item.symbol} id out of date`);
    item.changed = true;
    return EquityList.getTrader().getMeta(item);
};

function outOfDate(data:EquityItem):boolean {
    if (data && data.stats) {
        if (data.stats.latestDate === null) { 
            data.stats.latestDate = new Date();
            return false;
        }
        return isCurrentDate(data.stats.latestDate);
    }
    return true;
}

function setEquitySectorToCategory(item:EquityItem):EquityItem {
    if (item.company && item.company.sector) { 
        if (item.cat !== item.company.sector) {
            item.cat = item.company.sector;
            item.changed = true;
        }
    }
    return item;
}


function loadMeta(item:EquityItem):Promise<EquityItem> {
    const copyPropertiesToItem = (data:EquityItem):EquityItem => {
        Object.keys(data).forEach((k:string) => item[k] = data[k]); 
        return item;             // continue working with original item
    };

    return load(`${LOAD_PATH}/stock/sym${item.symbol}.json`)
        // if nothing on local server: revert to trader
        .catch(() => getDataFromTrader(item))
        .then(copyPropertiesToItem)
        .then(setEquitySectorToCategory)
        .then((data:EquityItem) => outOfDate(data)? getDataFromTrader(data) : data)
        .then(loadQuotes)
        .then(applySplitsToTrades)  // new splits are only loaded upon specific request
        .then(saveMeta);
}

/** converts and imputates trader quotes to a DataSet */
function traderQuote2Dataset(dataIn:TraderQuote[]):DataSet  {
    const names = ['Date', 'Open', 'Close', 'High', 'Low', 'Volume'];
    const rows  = dataIn
    .map((e: TraderQuote) => {
        if (!e.open) { e.open = e.close; }
        if (!e.high) { e.high = e.close; }
        if (!e.low)  { e.low = e.close; }
        return e;
    })
    .map((e: TraderQuote) => [e.date.split('T')[0], e.open, e.close, e.high, e.low, e.volume]);

    return { names:names, rows:rows};
};


    /** read quotes from trader */
function get5yrQuotesFromTrader(item:EquityItem) {
    /** save quotes DataSet to local server */
    const saveQuotesDataSet = (data:DataSet):EquityItem => {
        item.quotes = data;
        saveQuotes(item);
        return item;
    };
    return EquityList.getTrader().getQuotes(item, '5y')
    .then(traderQuote2Dataset)
    .then(saveQuotesDataSet);
}


/** impute trades with share price */
function imputeTradesWithSharePrice(item:EquityItem):EquityItem {
    if (item.trades) {
        item.trades.forEach((trade:Transaction) => { 
            if (!(trade.date instanceof Date)) { trade.date = new Date(trade.date); }        
            if (trade.price) {
                if (typeof trade.price === 'string') {
                    trade.price = parseFloat(<string>trade.price);
                    item.changed = true;
                }
            } else {
                item.changed = true;
                const row:any = item.quotes.rows.find((t:any) => {
                    if (!(t[0] instanceof Date)) { t[0] = new Date(t[0]); }
                    return t[0]>trade.date;
                });
                trade.price = row? row[2] : 20;
            }
        });
    }    
    return item;            
};

function loadQuotes(item:EquityItem):Promise<EquityItem> {
    /** adds a quotes DataSet to an item  */
    const addQuotesToItem = (quotes:DataSet):EquityItem=> { 
        item.quotes = quotes;
        return item;
    };

    return (item.quotes && item.quotes.rows.length>0)? 
        Promise.resolve(item) :
        load(`${LOAD_PATH}/stock/quotes${item.symbol}.json`)
            .then(addQuotesToItem)
            .catch(() => get5yrQuotesFromTrader(item))
            .then(imputeTradesWithSharePrice);
}

function applySplitsToTrades(item:EquityItem):EquityItem {    
    if (item.splits  && item.trades) {
        item.splits.forEach((split:TraderSplit) => {
            if (typeof split.date === 'string') { split.date = new Date(split.date); }
            item.trades.forEach((trade:Transaction) => {
                if (trade.date < split.date) {
                    trade.price *= split.ratio;
                }
            });
        });
    }
    return item;
}

function loadSplits(item:EquityItem):Promise<EquityItem> {
    const addSplitsToItem = (splits:TraderSplit[]):EquityItem => { item.splits = splits; return item; };
    if (item.splits && item.splits.length===0) { item.splits = undefined; }
    return (item.splits)? Promise.resolve(item) :
        EquityList.getTrader().getSplits(item)
        .then(addSplitsToItem);
}

function EquityList2JSON(list:EquityList):any {
    const data:any = {};
    list.getCategories().forEach((c:Category) => {
        data[c.cat] = {};
        c.equities.forEach((e:EquityItem) => {
            data[c.cat][e.symbol] = e.name;
        });
    });
    return data;
} 



export class EquityList {
    //------  Static  parts -----
    private static trader = new Trader();

    //------  private  parts -----
    private bySymbol   = <{string: EquityItem}>{};

    private unkownEquity() { 
        return {cat:'unknown Cat', symbol:'????', name:'unknown'}; 
    }

    private JSON2EquityList(data:any):EquityList {
        if (!data) { console.log('no data in JSON2EquityList'); }
        else {
            Object.keys(data).forEach((k:string) => {
                Object.keys(data[k]).forEach((e:string) => {
                    this.add({ symbol: e, name: data[k][e], cat: k, stats:{}, company:{}});
                });
            });   
        }
        return this;
    }

    private add(item:EquityItem):EquityItem {
        item.invalid = item.invalid || {};
        const sym = item.symbol.toUpperCase();
        if (!this.bySymbol[sym]) {
            this.bySymbol[sym] = item;
            loadMeta(item);
        }
        return this.bySymbol[sym];
    };

    private remove(itemOrSymbol:EquityItem|string) {
        const item = (typeof itemOrSymbol === 'string')? 
            this.bySymbol[itemOrSymbol.toUpperCase()] : this.bySymbol[(<EquityItem>itemOrSymbol).symbol];
        delete this.bySymbol[item.symbol.toUpperCase()];
    }

    private  saveEquityList():Promise<any> {
        return save(EquityList2JSON(this), `${SAVE_PATH}/${EQUITY_LIST}`);
    }

    //------  public parts -----

    public static getTrader() { return EquityList.trader; }

    public readSplits() {
        Object.keys(this.bySymbol).forEach((sym:string) => {
            loadSplits(this.getItem(sym))
            .then(saveMeta)
            .then(applySplitsToTrades)  // new splits are only loaded upon specific request
            ;
        });
    }

    public getItem(symbol:string):EquityItem { 
        if (this.bySymbol[symbol]) { 
            return this.bySymbol[symbol]; 
        }
        return this.unkownEquity();
    }

    public addItem(item:EquityItem):EquityItem {
        item = this.add(item);
        this.saveEquityList();
        return item;
    }

    public removeItem(itemOrSymbol:EquityItem|string) {
        this.remove(itemOrSymbol);
        this.saveEquityList();
    }

    public getCategories():Category[] { 
        const categories:Category[] = [];
        Object.keys(this.bySymbol).forEach((sym:string) => {
            const item = this.bySymbol[sym];
            let cat:Category = categories[item.cat];
            if (!cat) {
                cat = categories[item.cat] = {
                    cat: item.cat,
                    equities: []
                };
                categories.push(cat);
            };
            cat.equities.push(item);
        });
        categories.forEach((c:Category) => {
            c.equities.sort((a:EquityItem, b:EquityItem) => {
                if (a.shares > 0 || b.shares > 0) {
                    const diff = (b.shares || 0) - (a.shares || 0);
                    if (diff !== 0) { return diff; }
                }
                return (a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0);
            });
        });
        return categories; 
    }

    public getFirstByCat(cat:string):EquityItem {
        const c = this.getCategories()[cat];
        if (c && c.equities.length>0) { return c.equities[0]; }
        else { return this.unkownEquity(); }
    }

    public loadEquityList():Promise<any> {
        return load(`${LOAD_PATH}/${EQUITY_LIST}`)
        .catch(() => load(`${LOAD_PATH}/${DEF_EQUITY_LIST}`))
        .then((data:any) => this.JSON2EquityList.call(this, data));
    }
}

export const gEquityList = new EquityList();
gEquityList.loadEquityList();
