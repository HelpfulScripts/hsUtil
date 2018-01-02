import { EquityList }       from './EquityList'; 
import { EquityLoader }     from './EquityLoader'; 
import { Transaction }      from './Assets';
import { DataSet }          from 'hsdata';
import { Venues }           from './Venue';
import { VenueSummary }     from './Venue';

export interface Category {
    cat:      string;         // the category name
    equities: EquityItem[];   // array of equities in this category
}

export interface ItemStats {
    /** most recent trade date */
    latestDate?:        Date;
    /** most recent trade price */
    latestPrice? :      number;

    /* last close price */
    closePrice?:        number;
    /** last close date */
    closeDate?:         Date;
    /** last close volume */
    closeVolume?:       number;

    /** since previous close */
    change?:            number;
    /** price-to-earnings ratio */
    peRatio?:           number;
    /** 52 week high */
    week52high?:        number;
    /** 52 week low */
    week52low?:         number;
    /** market capitalziation */
    marketCap?:         number;
    /** total cash (Trailing twelve months) */
    cash?:              number;
    /** total revenue (Trailing twelve months) */
    revenue?:           number;
    /** total earnings (Trailing twelve months) */
    EBITDA?:            number;
    /** latest Earnings per Share */
    latestEPS?:         number;
    /** date of latest Earnings per Share */
    latestEPSDate?:     Date;
    /** dividend rate */
    dividendRate?:      number;
    /** dividend rate */
    dividendYield?:     number; 
    /** date of dividend */
    exDividendDate?:    Date;
}

export interface EquitySplit {
    date:           Date;
    ratio:          number;	// refers to the split ratio. The split ratio is an inverse of the number of shares that a holder of the stock would have after the split divided by the number of shares that the holder had before. 
                            // For example: Split ratio of .5 = 2 for 1 split.
}

export interface EquityItem {
    /** equity symbol, e.g. 'GOOG' */
    symbol: string; 
    /** equity name, e.g. 'Alphabet' */
    name:   string;
    /** investment category, e.g. 'Stocks' */
    cat:    string;

    /** set of traders that do not know this symbol */
    invalid?: {};
    venues?:  Venues[];

    /** number of shares owned */
    shares?: number;
    /** transaction history */
    trades?:Transaction[];

    company?: {
        /** industry sector */
        sector?:    string;
        /** primary trading exchange */
        primaryExchange?: string;
    };

    stats?: ItemStats;
    quotes?: DataSet;
    intraday?: DataSet;
    otherStats?:  any;
    splits?: EquitySplit[];
    changed?: boolean;
}


export class Equities {
    private static assembleCategories(items:EquityItem[]):Category[] {
        const categories:Category[] = [];
        items.forEach((item:EquityItem) => {
            let cat:Category = categories[item.cat];
            if (!cat) {
                cat = categories[item.cat] = {
                    cat: item.cat,
                    equities: []
                };
                categories.push(cat);
            };
            cat.equities.push(item);
        });
        categories.forEach((c:Category) => {
            c.equities.sort((a:EquityItem, b:EquityItem) => {
                if (a.shares > 0 || b.shares > 0) {
                    const diff = (b.shares || 0) - (a.shares || 0);
                    if (diff !== 0) { return diff; }
                }
                return (a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0);
            });
        });
        return categories; 
    }

    //------  private parts -----
    private equityList = new EquityList();
    private equityLoader = new EquityLoader(this.equityList);



    //------  public parts -----
    constructor() { 
        this.equityLoader.loadEquityList();
    }

    public addItem(item:EquityItem):EquityItem {
        item = this.equityList.addItem(item);
        this.equityLoader.loadLocal(item);
        EquityLoader.saveEquityList(this.equityList.getAllSymbols());
        return item;
    }

    public removeItem(itemOrSymbol:EquityItem|string) {
        this.equityList.removeItem(itemOrSymbol);
        EquityLoader.saveEquityList(this.equityList.getAllSymbols());
    }

    public getItem(sym:string) { return this.equityList.getItem(sym); }

    public getCategories():Category[] { 
        return Equities.assembleCategories(
            this.equityList.getAllSymbols().map(this.equityList.getItem.bind(this.equityList))
        );
    }

    public getFirstByCat(cat:string):EquityItem {
        const c = this.getCategories()[cat];
        if (c && c.equities.length>0) { return c.equities[0]; }
        else { return this.equityList.unkownEquity(); }
    }

    public getMarketUpdate():Promise<boolean> { 
        return this.equityLoader.marketUpdate()
        .catch((err:any) => {
            console.log(err);
            return false;
        })
        .then(() => true); 
    }
    public getVenueSymbols():Promise<VenueSummary> { 
        return EquityLoader.getTrader().getSymbols(); 
    }
    public readSplits()      { return this.equityLoader.requestSplitsIfMissing(); }
}

export const gEquities = new Equities();
