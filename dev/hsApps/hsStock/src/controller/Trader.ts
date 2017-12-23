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
    base: string;
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
    private queue = new PacingQueue(200);
    constructor(trader='iexTrading') { 
        switch (trader) {
            case 'iexTrading':
            default: this.trader = new IexTrading(); 
        }
    }

    getQuotes(item:EquityItem, date:string):Promise<TraderQuote[]> {
        const url = this.trader.quoteUrl(item.symbol)+'/'+ date;
console.log(`getting ${url}`);        
        return m.request({ method: 'GET', url: url })
        .then(this.trader.normalizeQuotes)
        .catch((err:any) => {
            console.log(`error requesting ${url}`);
            console.log(err);
            console.log(err.stack);
        });
    }

    getMeta(item:EquityItem):Promise<EquityItem> {
        const stats = this.trader.statsUrl(item.symbol);
        const meta  = this.trader.metaUrl(item.symbol);
console.log(`getting ${stats} and ${meta}`);        
        return Promise.all([
            this.queue.add((msDelay:number) => m.request({ method: 'GET', url: stats}))
                .then((data:any) => this.trader.normalizeStats(data, item))
                .catch((err:any) => {
                    console.log(`error requesting ${this.trader.metaUrl(item.symbol)}`);
                    console.log(err);
                    console.log(err.stack);
                }),
            this.queue.add((msDelay:number) => m.request({ method: 'GET', url: meta}))
                .then((data:any) => this.trader.normalizeMeta(data, item))
                .catch((err:any) => {
                    console.log(`error requesting ${this.trader.metaUrl(item.symbol)}`);
                    console.log(err);
                    console.log(err.stack);
                })
        ])
        .then(() => item);
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
