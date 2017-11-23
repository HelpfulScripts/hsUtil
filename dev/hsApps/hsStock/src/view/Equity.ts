import { m }            from 'hslayout';
import { Data,
         DataSet }      from 'hsgraph';
import { Trader,
         TraderQuote,
         TraderMeta }   from './Trader';

const DEF_EQUITY_LIST   = 'defEquityList.json';
const EQUITY_LIST       = 'equityList.json';
const SAVE_URL          = '../../cgi-bin/save.js';

export interface Category {
    cat:      string;         // the category name
    equities: EquityItem[];   // array of equities in this category
}

export interface EquityItem {
    /** equity symbol, e.g. 'GOOG' */
    symbol: string; 
    /** investment category, e.g. 'Stocks' */
    cat:    string;
    /** equity name, e.g. 'Alphabet' */
    name:   string;
    /** price-to-earnings ratio */
    pe?: number;
    /** 52 week high */
    week52High?: number;
    /** 52 week low */
    week52Low?: number;
    /** opening price */
    open?:      number;
    /** closing price */
    close?:     number;
    /** market capitalziation */
    marketCap?: number;
    /** industry sector */
    sector?:    string;
    /** primary trading exchange */
    primaryExchange?: string;
    /** change since last close */
    change?:    number;
    quotes?: Data;
}

export class EquityList {
    //------  private  parts -----
    private bySymbol   = <{string: EquityItem}>{};
    private categories = <Category[]>[];
    private trader: Trader;

    private addCategory(cat:string) {
        if (!this.categories[cat]) {
            const category:Category = { cat: cat, equities: [] };
            this.categories.push(category);
            this.categories[cat] = category;
        }
    }

    private unkownEquity() { return {cat:'unknown Cat', symbol:'????', name:'unknown'}; }

    private JSON2EquityList(data:any):EquityList {
        if (!data) { console.log('no data in JSON2EquityList'); }
        else {
            Object.keys(data).forEach((k:string) => {
                this.addCategory(k);
                Object.keys(data[k]).forEach((e:string) => {
                    this.add({ symbol: e, name: data[k][e], cat: k});
                });
            });   
        }
        return this;
    }

    private EquityList2JSON():any {
        const data:any = {};
        this.categories.forEach((c:Category) => {
            data[c.cat] = {};
            c.equities.forEach((e:EquityItem) => {
                data[c.cat][e.symbol] = e.name;
            });
        });
        return data;
    }

    private add(item:EquityItem) {
        if (!this.bySymbol[item.symbol]) {
            this.bySymbol[item.symbol] = item;
            if (!this.categories[item.cat]) { this.addCategory(item.cat); }
            this.categories[item.cat].equities.push(item);
        }
    };

    private remove(itemOrSymbol:EquityItem|string) {
        const item = (typeof itemOrSymbol === 'string')? 
            this.bySymbol[itemOrSymbol] : this.bySymbol[(<EquityItem>itemOrSymbol).symbol];
        this.bySymbol[item.symbol] = undefined;
        const i = this.categories[item.cat].equities.indexOf(item);
        if (i>=0) { this.categories[item.cat].equities.splice(i,1); }
    }

    //------  public parts -----

    constructor() {
        this.trader = new Trader();
    }

    getItem(symbol:string):EquityItem { 
        if (this.bySymbol[symbol]) { 
            return this.bySymbol[symbol]; 
        }
        if (this.categories.length > 0) { 
            if (this.categories[0].equities.length > 0) { 
                return this.categories[0].equities[0]; 
            }
        }
        return this.unkownEquity();
    }
    getCategories():Category[] { return this.categories; }
    getFirstByCat(cat:string):EquityItem {
        const c = this.categories[cat];
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
    load(fname:string):Promise<any> {
        return m.request({
            method: 'GET',
            url: 'data/'+fname                  // relative to 'apps/<APP>/
        });
    }
    save(data:any, fname:string):Promise<any> {
        return m.request({
            method: 'POST',
            url: `${SAVE_URL}?name=${fname}`,   // relative to 'apps/<APP>/data/
            data: data
        })
        .then(() => data)                       // send `data` into next `then`
        .catch((err:any) => {
            console.log(`error saving to ${fname}`);
            console.log(err);
            console.log(err.stack);
            return data;
        });
    }
    loadEquityList():Promise<any> {
        return this.load(EQUITY_LIST)
        .catch(() => this.load(DEF_EQUITY_LIST))
        .then((data:any) => this.JSON2EquityList.call(this, data));
    }
    saveEquityList():Promise<any> {
        return this.save(this.EquityList2JSON.call(this), EQUITY_LIST);
    }
    loadMeta(item:EquityItem):Promise<any> {
        return this.load(`stock/sym${item.symbol}.json`)
        .catch(() => 
            this.trader.getMeta(item.symbol)
            .then((data:TraderMeta) => { 
                this.saveMeta(data, item.symbol);
                return data;
            }))
        .then((data:EquityItem) => {
            Object.keys(data).forEach((k:string) => item[k] = data[k]);
            return item;
        });
    }
    saveMeta(data:any, sym:string):Promise<any> {
        return this.save(data, `stock/sym${sym}.json`);
    }
    loadQuotes(item:EquityItem):Promise<EquityItem> {
        const traderQuote2Dataset = (dataIn:TraderQuote[]) => {
            const dataOut:Data = new Data();
            dataOut.setData(
                dataIn.map((e: TraderQuote) => [e.date, e.open, e.close, e.high, e.low, e.volume]), 
                ['Date', 'Open', 'Close', 'High', 'Low', 'Volume']);
            return dataOut;
        };
        if (item.quotes && item.quotes.getData().length>0) {
            return Promise.resolve(item);
        } else {
            return this.load(`stock/quotes${item.symbol}.json`)
            .then((data:DataSet) => { 
                item.quotes = new Data(data);
                return item;
            })
            .catch(() => 
                this.trader.getQuotes(item, '5y')
                .then(traderQuote2Dataset)
                .then((data:Data) => {
                    item.quotes = data;
                    this.saveQuotes(item);
                    return item;
                })
            );
        }
    }
    saveQuotes(item:EquityItem):Promise<any> {
        return this.save(item.quotes.export(), `stock/quotes${item.symbol}.json`);
    }
}

