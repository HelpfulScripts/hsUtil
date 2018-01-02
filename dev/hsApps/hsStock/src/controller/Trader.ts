import { IexVenue }         from './VenueIEX';
import { EquityItem }       from './Equities';
import { EquitySplit }      from './Equities';
import { Venues,
         VenueSignature,
         VenueSummary }     from './Venue';
import { ms }               from 'hsutil';
import { DataSet }          from 'hsdata';
import { load, save }       from '../fileIO';

export interface TraderQuote {
    Date:           Date;
    close:          number;
    high:           number;
    low:            number;
    open:           number;
    volume:         number;
}

export interface TraderIntraday {
    Date:           Date;
    high:           number;
    low:            number;
}

export interface TraderSymbol {
    symbol: string;
    name:   string;  
}


/** converts and imputates trader quotes to a DataSet */
export function traderQuote2Dataset(dataIn:any[]):DataSet  {
    const names = ['Date', 'Open', 'Close', 'High', 'Low', 'Volume'];
    if (dataIn.length === 0) {
        console.log(`received no quotes ${(<any>dataIn).url}`);
        return { names:names, rows:[]};
    } else {
        const rows  = dataIn
        .filter((e:any) => e.date)
        .map((e: any) => {
            if (e.minute) {
                const date = e.date? new Date(e.date + ' ' + e.minute) : undefined;
                return [
                    date, 
                    e.marketHigh,
                    e.marketLow
                ];
            } else {
                return [
                    e.date? new Date(e.date) : undefined,
                    e.close,
                    e.high || e.close,
                    e.low  || e.close,
                    e.open || e.close,
                    e.volume
                ];
            }
        });
        return { names:names, rows:rows};
    }
};


export class Trader { 
    //------  static  parts -----
    /** accessible by index, or by Venues.***  */
    private static venues:VenueSignature[] = Trader.createVenues();
    
    private static createVenues():VenueSignature[] {
        const vns:VenueSignature[] = [];
        vns.push(vns[Venues.IEX] = new IexVenue());
        return vns;
    }

    /**
     * load local venbue desciptor and update venue fields
     * data: { venueName:[TraderSymbol] }
     */
    private static updateLocalVenues(data:{string:TraderSymbol[]}) {
        Object.keys(data).map((ven:string) => {
            if (Trader.venues[ven]) {
                const v:VenueSummary = Trader.venues[ven].summary;
                data[ven].map((e:TraderSymbol) => {
                    v.symbols.push(e.symbol);
                    v.names.push(e.name);
                    v.equities[e.symbol] = e;
                });
            } else {
                console.log(`unknown venue ${ven}`);
            }
        });
    }

    private static saveLocalVenues(savePath:string) {
        const venues = {};
        Trader.venues.map((v:VenueSignature) => {
            Trader.venues[v.summary.venue.id] = Object.keys(v.summary.equities).map((sym:string) => v.summary.equities[sym]);
        });
        return save(venues, savePath)
        .catch(console.log);
    }
    
/*
    private static isInvalidTrader(item:EquityItem) {
        return item.invalid && item.invalid[Trader.venues[0].summary.venue.id];
    }

*/

    /**
     * adds quotes to item.intraday; overwriting item.intraday. 
     * @param quotes 
     * @param item 
     */
    private static addIntraday(quotes:TraderIntraday[], item:EquityItem):EquityItem {
        const names = ['Date', 'High', 'Low'];
        const rows  = quotes.map((t:TraderIntraday) => [t.Date, t.high, t.low]);
        item.intraday = {names:names, rows:rows};
        return item;
    }

    /**
     * adds quotes to item.quotes; creating item.quotes if undefined. 
     * @param quotes 
     * @param item 
     */
    private static addQuotes(quotes:TraderQuote[], item:EquityItem):EquityItem {
        let lastItemDate = new Date('1/1/1980');
        if (!item.quotes) {
            item.quotes = {
                names: ['Date','Open','Close','High','Low','Volume'],
                rows: []
            };
        }
        const dCol = item.quotes.names.indexOf('Date');
        if (item.quotes.rows.length > 0) {
            const latestRow = item.quotes.rows[item.quotes.rows.length-1];
            lastItemDate = (typeof latestRow[dCol] === 'string')? new Date(latestRow[dCol]) : lastItemDate;
        }
        quotes
            .sort((a:TraderQuote, b:TraderQuote) => a.Date.getTime() - b.Date.getTime())
            .map((q:TraderQuote) => {               // copy rows to item.quotes
                if (q.Date > lastItemDate) { 
                    item.quotes.rows.push([q.Date, q.open, q.close, q.high, q.low, q.volume]);
                }
            });
        if (item.quotes.rows.length > 0) {  // update item.stats
            const vCol = item.quotes.names.indexOf('Volume');
            const latestRow = item.quotes.rows[item.quotes.rows.length-1];
            item.stats.closeVolume = <number>latestRow[vCol];
            item.stats.closeDate   = <Date>latestRow[dCol];
        }
        return item;
    }
 
    //------  private  parts -----


    //------  public  parts -----

    static invalidateTrader(item:EquityItem, venue:Venues) {
        if (item.venues[venue]) { 
            delete item.venues[venue]; 
            item.changed = true;
        }
    }
    constructor(loadPath:string, savePath:string, file:string) {
        load(loadPath+file)
        .then(Trader.updateLocalVenues)
        .catch(() => {
            Promise.all(Trader.venues.map((v:VenueSignature) => v.requestVenueSymbols()))
            .catch(console.log)
            .then(()=> savePath+file)
            .then(Trader.saveLocalVenues);
        });      
    }

    lastMarketUpdate(): Promise<Date> {
        return Trader.venues[0].requestMarketUpdate();
    }

    /** 
     * initiates remote requests to the venues and updates `item` accordingly.
     * If `missingDays` is 1, intraday quotes will be requested.
     * Otherwise, appropriate daily quotes are requested to fill `item.quotes` as needed,
     * with a maximum of `missingDays`, if specified,
     * and intraday quoates will not be requested.
     * 
     * @return fully updated `item` as requested.
     */
    getQuotes(item:EquityItem, missingDays?:number):Promise<EquityItem> {
        function adjustMissingDays(item:EquityItem):number {
            if (item.quotes.rows.length === 0) {
                return 10000;
            } else {
                const dCol      = item.quotes.names.indexOf('Date');
                const latestRow = item.quotes.rows[item.quotes.rows.length-1];
                return ms.toDays(new Date().getTime() - new Date(latestRow[dCol]).getTime());
            }
        }
        if (!item.venues) { item.venues = [Venues.IEX]; };

        if (missingDays <= 1) { 
            return Trader.venues[item.venues[0]].requestIntraday(item)
                .then((q:TraderIntraday[]) => Trader.addIntraday(q, item));
        } else {
            missingDays = adjustMissingDays(item);
            return Trader.venues[item.venues[0]].requestQuotes(item, missingDays)
                .then((q:TraderQuote[]) => Trader.addQuotes(q, item));
        }

    }

    getSplits(item:EquityItem):Promise<EquitySplit[]> {
        return Trader.venues[item.venues[0]].requestSplits(item);
    }

    getMeta(item:EquityItem):Promise<EquityItem> {
        return Trader.venues[item.venues[0]].requestMeta(item);
    }

    getSymbols():Promise<VenueSummary> {
        return Trader.venues[0].requestSymbols();
    }

    /*



*/
}
