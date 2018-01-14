import { DataSet, DataRow } from 'hsdata';
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
    if (item.invalid) {
        delete item.invalid;
        item.changed = true;
    }
    if (item.changed) {
        item.changed = undefined;
        const copy = copyProperties(item, <EquityItem>{});
//        delete copy.intraday;
        delete copy.quotes;
//        delete copy.trades;
        console.log(`${new Date().getTime() %10000}: saveSym ${item.symbol} to local`);
        save(copy, `${SAVE_PATH}/stock/sym${item.symbol}.json`);
    }
    return item;
}



function updateStats(item: EquityItem):EquityItem {
    if (item && item.quotes && item.quotes.rows && item.quotes.rows.length > 0) {
        const date = item.stats.closeDate;
        const dCol = item.quotes.colNames.indexOf('Date');
        const vCol = item.quotes.colNames.indexOf('Volume');
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


let trader:Trader;

export class EquityLoader {
    //------  Static  parts -----
    private static lastUpdate:Date;
    public static getTrader() { return trader; }
    
    public static shouldUpdate(since:Date): Promise<boolean> {
        const closingHour = 16;     // venue closes at 4pm PT;
        return trader.lastMarketUpdate()
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

    public static applySplitsToTrades(item:EquityItem):EquityItem {   
        if (item.splits && item.trades) {
            item.splits.forEach((split:EquitySplit) => {
                if (typeof split.date === 'string') { split.date = new Date(split.date); }
                item.trades.forEach((trade:Transaction) => {
                    if (!trade.appliedSplits) { trade.appliedSplits = {}; }
                    if (!trade.appliedSplits[split.date.getTime()] && trade.Date < split.date) {
                        trade.price *= split.ratio;
                        trade.change /= split.ratio;
                        trade.total /= split.ratio;
                        trade.appliedSplits[split.date.getTime()] = split.ratio;
                        item.changed = true;
                    }
                });
            });
        }
        return item;
    }
    public static saveQuotes(item:EquityItem):Promise<EquityItem> {
        console.log(`${new Date().getTime() %10000}: save ${item.quotes.rows.length} Quotes ${item.symbol} to local`);
        return save(item.quotes, `${SAVE_PATH}/stock/quotes${item.symbol}.json`)
        .catch((err:any) => {
            console.log(`error for in saveQuotes: ${err}`);
            console.log(item);
            return item;
        })
        .then(() => item);
    }

    private static requestIntradayQuotes(item:EquityItem):Promise<EquityItem> {
        return trader.requestQuotes(item, 1)
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

//        if (item.splits && item.splits.length===0) { item.splits = undefined; }
        
        return (item.splits)? Promise.resolve(item) :
            trader.requestSplits(item)
            .then(addSplitsToItem)
            .then(EquityLoader.applySplitsToTrades)  // new splits are only loaded upon specific request
            .catch((err) => {
                console.log(`error in readSymSplit: ${err}`);
                return item;
            });
    }

    public static saveEquityList(symbols:string[]):Promise<any> {
        console.log(`${new Date().getTime() %10000}: saveEquityList to local`);
        return save(symbols, `${SAVE_PATH}/${EQUITY_LIST}`);
    }

    //------  private  parts -----
    private list:EquityList;

    private loadAllItemsLocal(items: EquityItem[]):Promise<void> {
        return Promise.all(items
//            .filter(item => item.symbol==='AAPL')
            .map(item =>
                this.loadLocal(item)
                .then((item:EquityItem) => this.list.addItem(item))
                .catch(console.log)
            ))
        .then(()=>{});
    }


    //------  public parts -----

    constructor(list:EquityList) {
        this.list = list;
        if (!trader) { 
            trader = new Trader(); 
            Trader.loadLocalVenues(LOAD_PATH, SAVE_PATH, '/venues.json');
        }
    }

    /**
     * load the equity list, then load all equities 
     */
    public loadEquityList():Promise<any> {
        console.log(`${new Date().getTime() %10000}: loadEquityList from local`);
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
            this.list.getAllSymbols()
//            .filter((s:string) => s==='AAPL')
            .map((sym:string) => this.loadRemote(this.list.getItem(sym))
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
        function addQuotesToItem(quotes:DataSet):EquityItem { 
            item.quotes = quotes;
            const dateCol  = item.quotes.colNames.indexOf('Date');
            const closeCol = item.quotes.colNames.indexOf('Close');
            item.quotes.rows = <DataRow[]>item.quotes.rows
                .filter((row:any[]) => 
                    row[dateCol] !==undefined && row[dateCol] !==null &&
                    row[closeCol]!==undefined && row[closeCol]!==null
                )
                .map((row:any[]) => {
                    row[0] = new Date(row[0]);
                    return row;
                });
            if (item.quotes['names']) {
                item.quotes.colNames = item.quotes['names'];
                delete item.quotes['names'];
            }
            Trader.getVenue(item); // to initialize the venues in item
            return item;
        }
        function copyParts(data:EquityItem) {
            if (item.trades) { data.trades = item.trades; }
            copyProperties(data, item); 
            if (item.intraday && item.intraday['names']) {
                item.intraday.colNames = item.intraday['names'];
                delete item.intraday['names'];
            }
            EquityLoader.applySplitsToTrades(item);
            return item;         
        }
        if (item.symbol === '????') {
            return Promise.resolve(item);
        } else {
            return load(`${LOAD_PATH}/stock/sym${item.symbol}.json`)
                .then(copyParts)
                .then(() => load(`${LOAD_PATH}/stock/quotes${item.symbol}.json`))
                .then(addQuotesToItem)        
                .catch(() => item); // if nothing on local server: ignore
        }
    }

    public loadRemote(item:EquityItem):Promise<EquityItem> {
        const list = this.list;
        const copyPropertiesToItem = (data:EquityItem):EquityItem => {
            Object.keys(data).forEach((k:string) => item[k] = data[k]); 
            return item;             // continue working with original item
        };

        return Promise.resolve(item)
            .then(trader.requestMeta)
            .then(copyPropertiesToItem)
            .then(list.checkProperties)
            .then(EquityLoader.getTrader().requestQuotes)
            .then(EquityLoader.saveQuotes)
            .then(EquityLoader.requestIntradayQuotes)
            .then(updateStats)
            .then(EquityList.imputeTradesWithSharePrice)
            .then(EquityLoader.requestSymSplitIfMissing)
            .then(saveMeta)
            .catch((err:any) => {
                console.error(`error in loadRemote: ${err}`);
                return item;
            });
    }

}
