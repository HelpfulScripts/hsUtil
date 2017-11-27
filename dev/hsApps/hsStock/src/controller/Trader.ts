import { m }                from 'hslayout';
import { TraderReferences }    from './Trader';
import { IexTrading }       from './TraderIEX';
import { EquityItem }       from './Equity';



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
    constructor(trader='iexTrading') { 
        switch (trader) {
            case 'iexTrading':
            default: this.trader = new IexTrading(); 
        }
    }

    getQuotes(item:EquityItem, date:string):Promise<TraderQuote[]> {
        const url = this.trader.quoteUrl(item.symbol)+'/'+ date;
        return m.request({ method: 'GET', url: url })
        .then(this.trader.normalizeQuotes)
        .catch((err:any) => {
            console.log(`error requesting ${url}`);
            console.log(err);
            console.log(err.stack);
        });
    }

    getMeta(sym:string):Promise<EquityItem> {
        let item:EquityItem = <EquityItem>{};
        return m.request({ method: 'GET', url: this.trader.statsUrl(sym) })
        .then((data:any) => this.trader.normalizeStats(data, item))
        .then((meta:EquityItem) => item = meta)
        .catch((err:any) => {
            console.log(`error requesting ${this.trader.metaUrl(sym)}`);
            console.log(err);
            console.log(err.stack);
        })
        .then(() => m.request({ method: 'GET', url: this.trader.metaUrl(sym) }))
        .then((data:any) => this.trader.normalizeMeta(data, item))
        .then((meta:EquityItem) => item.company = meta.company)
        .catch((err:any) => {
            console.log(`error requesting ${this.trader.metaUrl(sym)}`);
            console.log(err);
            console.log(err.stack);
        })
        .then(() => item);
    }

    getSymbols():Promise<TraderReferences> {
        const url = this.trader.symbolsUrl();
        return m.request({ method: 'GET', url: url })
        .then(this.trader.normalizeSymbols)
        .catch((err:any) => {
            console.log(`error requesting ${url}`);
            console.log(err);
            console.log(err.stack);
        });
    }
}
