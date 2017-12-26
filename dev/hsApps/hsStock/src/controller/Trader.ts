import { m }                from 'hslayout';
import { TraderReferences } from './Trader';
import { IexTrading }       from './TraderIEX';
import { EquityItem }       from './Equity';
import { PacingQueue }       from 'hsutil';


export interface TraderQuote {
    close:          number;
    date:           string;
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
    normalizeStats:     (data:any, item:EquityItem) => EquityItem;
    normalizeMeta:      (data:any, item:EquityItem) => EquityItem;
    normalizeQuotes:  (data:any[]) => TraderQuote[];
    normalizeSymbols: (data:any[]) => TraderReferences;
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
console.log(`getting ${url}`);        
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

    getMeta(item:EquityItem):Promise<EquityItem> {
        function metaError(type:string, url:string, err:any, id:string) {
            item.invalid[id] = 'unknown';
            console.log(`getMeta error in ${type} requesting ${url}`);
            console.log(err);
//            console.log(err.stack);
            return item;
        }
        const stats = this.trader.statsUrl(item.symbol);
        const meta  = this.trader.metaUrl(item.symbol);
        if (item.invalid[this.trader.id]) { return Promise.resolve(item); }
        else {
console.log(`getting ${stats}\n   and ${meta}`);        
            return Promise.all([
                this.queue.add((msDelay:number) => m.request({ method: 'GET', url: stats}))
                    .catch((err:any) => metaError('stats', stats, err, this.trader.id))
                    .then((data:any) => data? 
                        this.trader.normalizeStats(data, item) :
                        metaError('stats.then', stats, null, this.trader.id)
                    )
                ,
                this.queue.add((msDelay:number) => m.request({ method: 'GET', url: meta}))
                    .catch((err:any) => metaError('meta', meta, err, this.trader.id))
                    .then((data:any) => data?
                        this.trader.normalizeMeta(data, item) :
                        metaError('meta.then', stats, null, this.trader.id)
                    )
            ])
            .then((data:any) => { 
                console.log(data); 
                return item;
            });
        }
    }

    getSymbols():Promise<TraderReferences> {
        const url = this.trader.symbolsUrl();
console.log(`getting ${url}`);        
        return m.request({ method: 'GET', url: url })
        .then(this.trader.normalizeSymbols)
        .catch((err:any) => {
            console.log(`error requesting ${url}`);
            console.log(err);
            console.log(err.stack);
        });
    }
}
