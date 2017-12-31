import { m }                from 'hslayout';
import { TraderReferences } from './Trader';
import { IexTrading }       from './TraderIEX';
import { EquityItem }       from './Equity';
import { PacingQueue }       from 'hsutil';


export interface TraderQuote {
    Date:           string;
    close:          number;
    high:           number;
    low:            number;
    open:           number;
    volume:         number;
}

export interface TraderProfile {
    id:     string;
    base:   string;
    symbolsUrl:                 () => string;
    statsUrl:         (sym:string) => string;
    metaUrl:          (sym:string) => string;
    quoteUrl:         (sym:string) => string;
    splitsUrl:        (sym:string) => string;
    normalizeStats:     (data:any, item:EquityItem) => EquityItem;
    normalizeMeta:      (data:any, item:EquityItem) => EquityItem;
    normalizeQuotes:  (data:any[]) => TraderQuote[];
    normalizeSymbols: (data:any[]) => TraderReferences;
    normalizeSplits:  (data:TraderSplit[]) => TraderSplit[];
}

export interface TraderSymbol {
    symbol: string;
    name:   string;
    
}

export interface TraderReferences {
    symbols:    string[];
    names:      string[];
    equities:   {string:TraderSymbol};
}

export interface TraderSplit {
    date:           Date;
    ratio:          number;	// refers to the split ratio. The split ratio is an inverse of the number of shares that a holder of the stock would have after the split divided by the number of shares that the holder had before. 
                            // For example: Split ratio of .5 = 2 for 1 split.
}



export class Trader {
    private trader: TraderProfile;
    private queue = new PacingQueue(50);
    constructor(trader='iexTrading') { 
        switch (trader) {
            case 'iexTrading':
            default: this.trader = new IexTrading(); 
        }
    }

    getQuotes(item:EquityItem, date:string):Promise<TraderQuote[]> {
        const url = this.trader.quoteUrl(item.symbol)+'/'+ date;
        if (item.invalid[this.trader.id]) { return Promise.resolve([]); }
        else {
console.log(`getting Trader quotes ${url}`);        
            return m.request({ method: 'GET', url: url })
                .then(this.trader.normalizeQuotes)
                .catch((err:any):TraderQuote[] => {
                    console.log(`error requesting ${url}`);
                    console.log(err);
                    console.log(err.stack);
                    return [];
                });
        }
    }

    getSplits(item:EquityItem):Promise<TraderSplit[]> {
        const trader = this.trader;
        const url = this.trader.splitsUrl(item.symbol);
        if (item.invalid[this.trader.id]) { return Promise.resolve(undefined); }
        else {
console.log(`getting Trader splits ${url}`);        
            return m.request({ method: 'GET', url: url })
                .then(trader.normalizeSplits)
                .catch((err:any):TraderQuote[] => {
                    item.invalid[trader.id] = 'unknown';
                    console.log(`error requesting ${url}`);
                    console.log(err);
                    console.log(err.stack);
                    return undefined;
                });
        }
    }

    getMeta(item:EquityItem):Promise<EquityItem> {
        function metaError(type:string, url:string, err:any, id:string) {
            item.invalid[id] = 'unknown';
            console.log(`getMeta error in ${type} requesting ${url}`);
            console.log(err);
//            console.log(err.stack);
            return item;
        }

        function getFromTrader(url:string, type:string, normalize:(data:any, item:EquityItem)=>EquityItem) {
console.log(`getting ${type} from ${url}`);        
            return queue.add((msDelay:number) => m.request({ method: 'GET', url: url}))
            .catch((err:any) => metaError(type, stats, err, trader.id))
            .then((data:any) => data? 
                normalize(data, item) :
                metaError(`${type}.then`, url, null, trader.id)
            );
        }

        const trader = this.trader;
        const queue = this.queue;
        const stats = this.trader.statsUrl(item.symbol);
        const meta  = this.trader.metaUrl(item.symbol);
        return (item.invalid[trader.id])? Promise.resolve(item) :
            Promise.all([
                getFromTrader(stats, 'stats', trader.normalizeStats), 
                getFromTrader(meta, 'meta', trader.normalizeMeta)
            ])
            .then(() => item);  // after all promises resolved, return item.
    }

    getSymbols():Promise<TraderReferences> {
        const url = this.trader.symbolsUrl();
console.log(`getting Trader symbols ${url}`);        
        return m.request({ method: 'GET', url: url })
        .then(this.trader.normalizeSymbols)
        .catch((err:any) => {
            console.log(`error requesting ${url}`);
            console.log(err);
            console.log(err.stack);
        });
    }
}
