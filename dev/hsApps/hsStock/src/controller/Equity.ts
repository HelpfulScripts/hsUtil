import { m }            from 'hslayout';
import { Data,
         DataSet }      from 'hsdata';
import { Trader,
         TraderQuote }  from './Trader';
import { ms }           from 'hsutil'; 
import { save }         from '../saveToFile';
import { Transaction }  from './Assets';

const DEF_EQUITY_LIST   = 'defEquityList.json';
const EQUITY_LIST       = 'equityList.json';
const SAVE_PATH         = 'hsStock/data';   // relative to 'apps/', defines in save.js cgi
const LOAD_PATH         = 'data';           // relative to 'hsStock/', root of webapp location

export interface Category {
    cat:      string;         // the category name
    equities: EquityItem[];   // array of equities in this category
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

    stats?: {
        /** date of stats */
        latestDate?:        string;
        latestPrice? :      number;
        /** number of shares traded */
        latestVolume?:      number
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
        latestEPSDate?:     string;
        /** dividend rate */
        dividendRate?:      number;
        /** dividend rate */
        dividendYield?:     number; 
        /** date of dividend */
        exDividendDate?:    string;
    };
    quotes?: Data;
    otherStats?:  any;
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

export class EquityList {
    //------  private  parts -----
    private bySymbol   = <{string: EquityItem}>{};
    private trader: Trader;

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

    private EquityList2JSON():any {
        const data:any = {};
        this.getCategories().forEach((c:Category) => {
            data[c.cat] = {};
            c.equities.forEach((e:EquityItem) => {
                data[c.cat][e.symbol] = e.name;
            });
        });
        return data;
    } 

    private add(item:EquityItem) {
        item.invalid = item.invalid || {};
        const sym = item.symbol.toUpperCase();
        if (!this.bySymbol[sym]) {
            this.bySymbol[sym] = item;
            this.getCategories()[item.cat].equities.push(item);
            this.loadMeta(item);
        }
    };

    private remove(itemOrSymbol:EquityItem|string) {
        const item = (typeof itemOrSymbol === 'string')? 
            this.bySymbol[itemOrSymbol.toUpperCase()] : this.bySymbol[(<EquityItem>itemOrSymbol).symbol];
        delete this.bySymbol[item.symbol.toUpperCase()];
    }

    private load(fname:string):Promise<any> {
        return m.request({
            method: 'GET',
            url: fname                          // relative to 'apps/<APP>/
        });
    }

    private loadQuotes(item:EquityItem):Promise<EquityItem> {
        const traderQuote2Dataset = (dataIn:TraderQuote[]) => {
            const dataOut:Data = new Data();
            dataOut.setData(
                dataIn.map((e: TraderQuote) => [e.date.split('T')[0], e.open, e.close, e.high, e.low, e.volume]), 
                ['Date', 'Open', 'Close', 'High', 'Low', 'Volume']);
            return dataOut;
        };
        if (item.quotes && item.quotes.getData && item.quotes.getData().length>0) {
            return Promise.resolve(item);
        } 
        item.quotes = new Data();
        return this.load(`${LOAD_PATH}/stock/quotes${item.symbol}.json`)
            .then((data:DataSet) => {
                item.quotes.import(data);
                if (!isCurrentDate(<Date>data.rows[data.rows.length-1][0])) {

                }
                return item;
            })
            .catch(() => this.trader.getQuotes(item, '5y')
                        .then(traderQuote2Dataset)
                        .then((data:Data) => {
                            item.quotes = data;
                            this.saveQuotes(item);
                            return item;
                        })
            );
    }

    private saveQuotes(item:EquityItem):Promise<EquityItem> {
        return save(item.quotes.export(), `${SAVE_PATH}/stock/quotes${item.symbol}.json`);
    }

    private loadMeta(item:EquityItem):Promise<EquityItem> {
        const outOfDate = (data:EquityItem) => (!data || !data.stats || !isCurrentDate(data.stats.latestDate));
        const getDataFromTrader = (item:EquityItem) => {
            console.log(`${item.symbol} id out of date`);
            return this.trader.getMeta(item);
        };
        return this.load(`${LOAD_PATH}/stock/sym${item.symbol}.json`)
            // if nothing on local server: revert to trader
            .catch(() => getDataFromTrader(item))
            .then((data:EquityItem) => { // copy properties of loaded object into `item`
                Object.keys(data).forEach((k:string) => item[k] = data[k]); 
                return item;             // continue working with original item
            })
            .then((data:EquityItem) => outOfDate(data)? getDataFromTrader(data) : data)
            .then((data:EquityItem) => this.loadQuotes(data))
            .then((data:EquityItem) => {
                if (data.company && data.company.sector) { 
                    data.cat = data.company.sector;
                }
                const quotes = data.quotes;
                data.quotes = undefined;
                this.saveMeta(data, item.symbol);
                data.quotes = quotes;
                return data;
            });
    }

    private  saveEquityList():Promise<any> {
        return save(this.EquityList2JSON.call(this), `${SAVE_PATH}/${EQUITY_LIST}`);
    }

    private saveMeta(data:EquityItem, sym:string):EquityItem {
        console.log(`saving stock/sym${sym}.json`);
        save(data, `${SAVE_PATH}/stock/sym${sym}.json`);
        return data;
    }

    //------  public parts -----

    constructor() {
        this.trader = new Trader();
    }

    getTrader() { return this.trader; }

    getItem(symbol:string):EquityItem { 
        if (this.bySymbol[symbol]) { 
            return this.bySymbol[symbol]; 
        }
        return this.unkownEquity();
    }
    getCategories():Category[] { 
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
        return categories; 
    }

    getFirstByCat(cat:string):EquityItem {
        const c = this.getCategories()[cat];
        if (c && c.equities.length>0) { return c.equities[0]; }
        else { return this.unkownEquity(); }
    }

    addItem(item:EquityItem) {
        this.add(item);
        this.saveEquityList();
    }
    removeItem(itemOrSymbol:EquityItem|string) {
        this.remove(itemOrSymbol);
        this.saveEquityList();
    }
    loadEquityList():Promise<any> {
        return this.load(`${LOAD_PATH}/${EQUITY_LIST}`)
        .catch(() => this.load(`${LOAD_PATH}/${DEF_EQUITY_LIST}`))
        .then((data:any) => this.JSON2EquityList.call(this, data));
    }
}

export const gEquityList = new EquityList();
gEquityList.loadEquityList();
