import { m }            from 'hslayout';
import { PacingQueue }  from 'hsutil';
import { TraderQuote,
         TraderIntraday,
         TraderSymbol } from './Trader';
import { EquityItem }   from './Equities';
import { EquitySplit }  from './Equities';


export enum VenueIDs {
    IEX = 'IEX'
}

/** provides details on available equities for a venue */
export interface VenueSummary {
    venueID:    VenueIDs; 
    venueName:  string;
    symbols:    string[];
    names:      string[];
    equities:   {string:TraderSymbol};  // sym -> TraderSymbol
}


export abstract class Venue {
    protected static queue = new PacingQueue(10);
    protected static addPacedGet(url:string): Promise<any> {
//console.log(`${new Date().getTime()%10000}: addPacedGet requesting ${url}`);
        return Venue.queue.add((ms:number) => {
//            console.log(`${new Date().getTime()%10000}: pacedGet(after ${ms} ms) requesting ${url}`);
            return m.request({url:url})
                .then((data:any) => {
                    console.log(`     ${new Date().getTime()%10000}: pacedGet received data from ${url}`);
                    return data;
                })
                .catch((err:any) => {
                    console.log(`*** ${new Date().getTime()%10000}: pacedGet error ${err} from ${url}`);
                });
        });
    }

    constructor() {}

    summary:        VenueSummary;

    abstract requestMarketUpdate(): Promise<Date>;
    abstract requestMetaVenue(item:EquityItem):Promise<EquityItem>;
    abstract requestQuotesVenue(item:EquityItem, missingDays:number):Promise<TraderQuote[]>;
    abstract requestIntradayVenue(item:EquityItem):Promise<TraderIntraday[]>;
    abstract requestSplitsVenue(item:EquityItem):Promise<EquitySplit[]>;
    abstract requestSymbolsForVenue():Promise<VenueSummary>;
}