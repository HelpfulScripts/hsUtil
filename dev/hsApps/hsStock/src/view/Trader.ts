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
    metaUrl:          (sym:string) => string;
    quoteUrl:         (sym:string) => string;
    normalizeMeta:      (data:any) => TraderMeta;
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

export interface TraderMeta {
    name:       string;
    symbol:     string;
    pe:         number;
    week52High: number;
    week52Low:  number;
    open:       number;
    close:      number;
    marketCap:  number;
    sector:     string;
    primaryExchange: string;
    change:     number;
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

    getMeta(sym:string):Promise<TraderMeta> {
        const url = this.trader.metaUrl(sym);
        return m.request({ method: 'GET', url: url })
        .then(this.trader.normalizeMeta)
        .catch((err:any) => {
            console.log(`error requesting ${url}`);
            console.log(err);
            console.log(err.stack);
        });
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
