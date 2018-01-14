import { EquityItem,
         EquitySplit }      from './Equities';
import { EquityLoader } from './EquityLoader';
import { VenueIDs,
         Venue,
         VenueSummary }     from './Venue';
import { IexVenue }         from './VenueIex';
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

function createVenues():Venue[] {
    const vns:Venue[] = [];
    vns.push(vns[VenueIDs.IEX] = new IexVenue());
    return vns;
}

    /** accessible by index, or by Venues.***  */
const venues:Venue[] = createVenues();
    
export const getVenue = (name: VenueIDs|number):Venue => venues[name];

export const allVenueIDs = ():VenueIDs[] => venues.map(
    (venue:Venue) => <VenueIDs>venue.summary.venueID
);


/** converts and imputates trader quotes to a DataSet */
export function traderQuote2Dataset(dataIn:any[]):DataSet  {
    const names = ['Date', 'Open', 'Close', 'High', 'Low', 'Volume'];
    if (dataIn.length === 0) {
        console.log(`received no quotes ${(<any>dataIn).url}`);
        return { colNames:names, rows:[]};
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
        return { colNames:names, rows:rows};
    }
};


export class Trader { 
    //------  static  parts -----

    /**
     * load local venue desciptor and update venue fields
     * data: { venueName:[TraderSymbol] }
     */
    private static updateLocalVenues(data:{[venueName:string]:TraderSymbol[]}) {
        Object.keys(data).map((ven:VenueIDs) => {
            if (getVenue(ven)) {
                const v:VenueSummary = getVenue(ven).summary;
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

    public static loadLocalVenues(loadPath:string, savePath:string, file:string) {
        load(loadPath+file)
        .then(Trader.updateLocalVenues)
        .catch(() => {
            Promise.all(allVenueIDs().map((n:VenueIDs) => getVenue(n).requestSymbolsForVenue()))
            .catch(console.log)
            .then(()=> savePath+file)
            .then(Trader.saveLocalVenues);
        });                      
    }

    private static saveLocalVenues(savePath:string) {
        const venues = {};
        allVenueIDs().map((n:VenueIDs) => {
            const summary:VenueSummary = getVenue(n).summary;
            venues[n] = Object.keys(summary.equities);
        });
        return save(venues, savePath)
        .catch(console.log);
    }
    

    /**
     * adds quotes to item.intraday; overwriting item.intraday. 
     * @param quotes 
     * @param item 
     */
    private static addIntraday(quotes:TraderIntraday[], item:EquityItem):EquityItem {
        const names = ['Date', 'High', 'Low'];
        const rows  = quotes.map((t:TraderIntraday) => [t.Date, t.high, t.low]);
        item.intraday = {colNames:names, rows:rows};
        EquityLoader.filterQuotes(item.intraday, 'Date', 'Low');
        return item;
    }

    /**
     * adds quotes to item.quotes; creating item.quotes if undefined. 
     * @param quotes 
     * @param item 
     */
    private static addQuotes(quotes:TraderQuote[], item:EquityItem):EquityItem {
        const  sortDate = ((r0:Date[], r1:Date[]) => r0[0].getTime() - r1[0].getTime());
        let lastItemDate = new Date('1/1/1980');
        if (!item.quotes) {
            item.quotes = {
                colNames: ['Date','Open','Close','High','Low','Volume'],
                rows: []
            };
        }
        const dCol = item.quotes.colNames.indexOf('Date');
        if (item.quotes.rows.length > 0) {
            item.quotes.rows.sort(sortDate);
//item.quotes.rows.map((r:any[]) => console.log(r[0]));            
            const latestRow = item.quotes.rows[item.quotes.rows.length-1];
            lastItemDate = (typeof latestRow[dCol] === 'string')? new Date(latestRow[dCol]) : <Date>latestRow[dCol];
//console.log(`${item.name}: ${latestRow[0]} ${dCol} ${lastItemDate}`);            
        }
        quotes
            .sort((a:TraderQuote, b:TraderQuote) => a.Date.getTime() - b.Date.getTime())
            .map((q:TraderQuote) => {               // copy rows to item.quotes
                if (q.Date > lastItemDate) { 
                    item.quotes.rows.push([q.Date, q.open, q.close, q.high, q.low, q.volume]);
                }
            });
        if (item.quotes.rows.length > 0) {  // update item.stats
            const vCol = item.quotes.colNames.indexOf('Volume');
            const latestRow = item.quotes.rows[item.quotes.rows.length-1];
            item.stats.closeVolume = <number>latestRow[vCol];
            item.stats.closeDate   = <Date>latestRow[dCol];
        }
        return item;
    }

    private static adjustMissingDays(item:EquityItem):number {
        if (!item.quotes || item.quotes.rows.length === 0) {
            return 10000;
        } else {
            const dCol      = item.quotes.colNames.indexOf('Date');
            const latestRow = item.quotes.rows[item.quotes.rows.length-1];
            return ms.toDays(new Date().getTime() - new Date(latestRow[dCol]).getTime());
        }
    }


    //------  private  parts -----


    //------  public  parts -----

    private static getVenueID(item:EquityItem):VenueIDs {
        if (!item.venues || item.venues.length===0) { 
            item.venues = [VenueIDs.IEX]; 
            item.changed = true;
        }
        return item.venues[0];
    }

    public static getVenue(item:EquityItem):Venue {
        const venueID = Trader.getVenueID(item);
        return venueID? venues[venueID] : undefined;
    }

    public static invalidateVenueID(item:EquityItem, venue:VenueIDs) {
        if (item.venues[venue]) { 
            console.log(`invalidating ${venue} for ${item.symbol}`);
            delete item.venues[venue]; 
            item.changed = true;
        }
    }

    /**
     * constructs a Trader and loads the local 
     * @param loadPath 
     * @param savePath 
     * @param file 
     */
    constructor() {        
    }



    public lastMarketUpdate(): Promise<Date> {
        return getVenue(0).requestMarketUpdate()
        .catch((err:any) => {
            console.log(err);
            return new Date();
        });
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
    public requestQuotes(item:EquityItem, missingDays?:number):Promise<EquityItem> {

        const venue = Trader.getVenue(item);
        if (venue) {
            if (missingDays <= 1) { 
                return Promise.resolve(item)
                    .then(venue.requestIntradayVenue)
                    .then((q:TraderIntraday[]) => Trader.addIntraday(q, item))
                    .catch((err:any) => {
                        Trader.invalidateVenueID(item, venue.summary.venueID);
                        console.log(`error in requestIntraday ${item.symbol} for venue ${venue}: ${err}`);
                        return item;
                    });
            } else {
                missingDays = Trader.adjustMissingDays(item);
                return Promise.resolve()
                    .then(() => venue.requestQuotesVenue(item, missingDays))
                    .then((q:TraderQuote[]) => Trader.addQuotes(q, item))
                    .catch((err:any) => {
                        Trader.invalidateVenueID(item, venue.summary.venueID);
                        console.log(`error in requestQuotes ${item.symbol} for venue ${venue}: ${err}`);
                        return item;
                    });
            }
        } else {
            return Promise.resolve(item);
        }
    }

    public requestSplits(item:EquityItem):Promise<EquitySplit[]> {
        const venue = Trader.getVenue(item);
        if (venue) { return venue.requestSplitsVenue(item)
            .catch((err:any) => {
                Trader.invalidateVenueID(item, venue.summary.venueID);
                console.log(`error in requestSplits ${item.symbol} for venue ${venue}: ${err}`);
                return <EquitySplit[]>[];
            });
        }
    }

    public requestMeta(item:EquityItem):Promise<EquityItem> {
        const venue = Trader.getVenue(item);
        if (venue) { return venue.requestMetaVenue(item)
            .catch((err:any) => {
                Trader.invalidateVenueID(item, venue.summary.venueID);
                console.log(`error in requestMeta ${item.symbol} for venue ${venue}: ${err}`);
                throw `error getting meta info for ${item.symbol}`;    
            });
        } else {
            throw `no venue defined for ${item.symbol}`;
        }
    }

    public requestSymbols():Promise<VenueSummary> {
        return getVenue(0).requestSymbolsForVenue()
            .catch((err:any) => {
                console.log(`error in requestSymbols for venue ${getVenue(0)}: ${err}`);
                return getVenue(0).summary;
            });
    }

    /*



*/
}
