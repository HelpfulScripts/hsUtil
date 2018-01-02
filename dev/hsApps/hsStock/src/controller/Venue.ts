import { m }            from 'hslayout';
import { PacingQueue }  from 'hsutil';
import { Trader,
         TraderQuote,
         TraderIntraday,
         TraderSymbol } from './Trader';
import { EquityItem }   from './Equities';
import { EquitySplit }  from './Equities';



export enum Venues {
    IEX = 'IEX'
}

/** provides details on available equities for a venue */
export interface VenueSummary {
    venue:      {id: string; name:string; };
    symbols:    string[];
    names:      string[];
    equities:   {string:TraderSymbol};  // sym -> TraderSymbol
}

export abstract class VenueSignature {
    protected static queue = new PacingQueue(50);
    protected static addPacedGet = (url:string): Promise<any> =>
        VenueSignature.queue.add((ms:number) => m.request({url:url}));

    protected static metaError(item:EquityItem, type:string, url:string, err:any, id:Venues) {
        Trader.invalidateTrader(item, id);
        item.changed = true;
        console.log(`getMeta error in ${type} requesting ${url}: ${err}`);
        return item;
    }

    summary:        VenueSummary;

    abstract requestMarketUpdate(): Promise<Date>;
    abstract requestVenueSymbols(): Promise<void>;
    abstract requestMeta(item:EquityItem):Promise<EquityItem>;
    abstract requestQuotes(item:EquityItem, missingDays:number):Promise<TraderQuote[]>;
    abstract requestIntraday(item:EquityItem):Promise<TraderIntraday[]>;
    abstract requestSplits(item:EquityItem):Promise<EquitySplit[]>;
    abstract requestSymbols():Promise<VenueSummary>;
}