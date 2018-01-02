import { DataSet }      from 'hsdata';
import { Trader }       from './Trader';
import { Transaction }  from './Assets';
import { EquityList }   from './EquityList';
import { EquitySplit }  from './Equities';
import { EquityItem }   from './Equities';
import { ms }           from 'hsutil'; 
import { load, save }   from '../fileIO';

const DEF_EQUITY_LIST   = 'defEquityList.json';
const EQUITY_LIST       = 'equityList.json';
const SAVE_PATH         = 'hsStock/data';   // relative to 'apps/', defines in save.js cgi
const LOAD_PATH         = 'data';           // relative to 'hsStock/', root of webapp location



function copyProperties(from:EquityItem, to:EquityItem):EquityItem {
    Object.keys(from).forEach((k:string) => to[k] = from[k]); 
    return to;             // continue working with original item
};

/** saves equity inof to symXXX.json file, skipping the quotes */
function saveMeta(item:EquityItem):EquityItem {
    if (item.changed) {
        item.changed = undefined;
        console.log(`saving stock/sym${item.symbol}.json`);
        const copy = copyProperties(item, <EquityItem>{});
//        delete copy.intraday;
        delete copy.quotes;
//        delete copy.trades;
        save(copy, `${SAVE_PATH}/stock/sym${item.symbol}.json`);
    }
    return item;
}





function updateStats(item: EquityItem):EquityItem {
    if (item.quotes.rows.length > 0) {
        const date = item.stats.closeDate;
        const dCol = item.quotes.names.indexOf('Date');
        const vCol = item.quotes.names.indexOf('Volume');
        const latestRow = item.quotes.rows[item.quotes.rows.length-1];
        if (new Date(latestRow[dCol]) === date) {
            item.stats.closeVolume = <number>latestRow[vCol];
        }
    }
    return item;
}


function JsonToSymArray(data:any):string[] {
    if (!data) { 
        console.log('no data in JsonToSymArray'); 
    } else if(data.length > 0) {    // new format
        return data;
    } else {                        // old format
        const syms:string[] = [];
        Object.keys(data).forEach((k:string) => 
            Object.keys(data[k]).forEach((e:string) => syms.push(e))
        );   
        return syms;
    }
}

function applySplitsToTrades(item:EquityItem):EquityItem {    
    if (item.splits && item.trades) {
        item.splits.forEach((split:EquitySplit) => {
            if (typeof split.date === 'string') { split.date = new Date(split.date); }
            item.trades.forEach((trade:Transaction) => {
                if (trade.Date < split.date) {
                    trade.price *= split.ratio;
                }
            });
        });
    }
    return item;
}


export class EquityLoader {
    //------  Static  parts -----
    private static trader = new Trader(LOAD_PATH, SAVE_PATH, '/venues.json');
    private static lastUpdate:Date;
    public static getTrader() { return EquityLoader.trader; }
    
    public static shouldUpdate(since:Date): Promise<boolean> {
        const closingHour = 16;     // venue closes at 4pm PT;
        return EquityLoader.trader.lastMarketUpdate()
        .then((lastUpdated:Date) => {
            const today = new Date();
            EquityLoader.lastUpdate = today;
            if (!since) { return true; }                // no recent update
            if (lastUpdated < since) { return false; }   // no updates since
            if ((today.getDay()+6)%7 < 5)  {            // Mo-Fri: during trading days
                if (today.getTime() - lastUpdated.getTime() > ms.fromHours(24))
                    { return true; }                    //    --> more than a day old
                if (lastUpdated.getHours() < closingHour-1) {       // during trading hours
                    if (today.getTime() - lastUpdated.getTime() > ms.fromHours(1))
                        { return true; }                //    --> more than 1h
                }
            } else {                                    // during Weekend:
                return true;                            //    --> update once
            }
            return false;
        })
        .catch((err) => {
            console.log(`no response from trader: ${err}`);
            return false;
        });
    }

    public static saveQuotes(item:EquityItem):Promise<EquityItem> {
        return save(item.quotes, `${SAVE_PATH}/stock/quotes${item.symbol}.json`)
        .then(() => item);
    }

    private static getIntradayQuotes(item:EquityItem):Promise<EquityItem> {
        return EquityLoader.trader.getQuotes(item, 1)
        .catch((err:any) => {
            console.error(`error in getIntradayQuotes: ${err}`);
            return item;
        });
    }


    private static requestSymSplitIfMissing(item:EquityItem):Promise<EquityItem> {
        function addSplitsToItem(splits:EquitySplit[]):EquityItem { 
            item.splits = splits; 
            return item; 
        };

        if (item.splits && item.splits.length===0) { item.splits = undefined; }
        
        return (item.splits)? Promise.resolve(item) :
            EquityLoader.trader.getSplits(item)
            .then(addSplitsToItem)
            .then(applySplitsToTrades)  // new splits are only loaded upon specific request
            .catch((err) => {
                console.log(`error in readSymSplit: ${err}`);
                return item;
            });
    }

    public static saveEquityList(symbols:string[]):Promise<any> {
        return save(symbols, `${SAVE_PATH}/${EQUITY_LIST}`);
    }

    //------  private  parts -----
    private list:EquityList;

    private loadAllItemsLocal(items: EquityItem[]):Promise<void> {
        return Promise.all(items.map(item =>
            this.loadLocal(item)
            .then((item:EquityItem) => this.list.addItem(item))
            .catch(console.log)
        ))
        .then(()=>{});
    }


    //------  public parts -----

    constructor(list:EquityList) {
        this.list = list;
    }

    /**
     * load the equity list, then load all equities 
     */
    public loadEquityList():Promise<any> {
        return load(`${LOAD_PATH}/${EQUITY_LIST}`)
        .catch(() => load(`${LOAD_PATH}/${DEF_EQUITY_LIST}`))
        .then(JsonToSymArray)
        .then((syms:string[]) => syms.map((sym) => this.list.newItem(sym)))
        .then(this.loadAllItemsLocal.bind(this));
    }

    public requestSplitsIfMissing():Promise<void> {
        return Promise.all(
            this.list.getAllSymbols().map((sym:string) => 
                EquityLoader.requestSymSplitIfMissing(this.list.getItem(sym))
                .then(saveMeta)
            )
        )
        .catch(console.log)
        .then(()=>{});
    }

    public marketUpdate():Promise<boolean> {
        return Promise.all(
            this.list.getAllSymbols().map((sym:string) => 
                this.loadRemote(this.list.getItem(sym))
            )
        )
        .then(()=>true)
        .catch((err:any) => {
            console.log(`error in marketUpdate: ${err}`);
            return false;
        });
    }

    public loadLocal(item:EquityItem):Promise<EquityItem> {
        /** adds a quotes DataSet to an item  */
        const addQuotesToItem = (quotes:DataSet):EquityItem => { 
            item.quotes = quotes;
            return item;
        };
        if (item.symbol === '????') {
            return Promise.resolve(item);
        } else {
            return load(`${LOAD_PATH}/stock/sym${item.symbol}.json`)
                .then((data:any) => copyProperties(data, item))
                .then(() => load(`${LOAD_PATH}/stock/quotes${item.symbol}.json`))
                .then(addQuotesToItem)        
                .catch(() => item); // if nothing on local server: ignore
        }
    }

    public loadRemote(item:EquityItem):Promise<EquityItem> {
        const copyPropertiesToItem = (data:EquityItem):EquityItem => {
            Object.keys(data).forEach((k:string) => item[k] = data[k]); 
            return item;             // continue working with original item
        };

        return EquityLoader.trader.getMeta(item)
            .then(copyPropertiesToItem)
            .then(this.list.checkProperties)
            .then(EquityLoader.trader.getQuotes)
            .then(EquityLoader.saveQuotes)
            .then(EquityLoader.getIntradayQuotes)
            .then(updateStats)
            .then(EquityList.imputeTradesWithSharePrice)
            .then(EquityLoader.requestSymSplitIfMissing)
            .then(applySplitsToTrades)  // new splits are only loaded upon specific request
            .then(saveMeta)
            .catch((err:any) => {
                console.error(`error in loadRemote: ${err}`);
                return item;
            });
    }

}
