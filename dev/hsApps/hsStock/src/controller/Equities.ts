import { EquityList }       from './EquityList'; 
import { EquityLoader }     from './EquityLoader'; 
import { Transaction }      from './Assets';
import { DataSet }          from 'hsdata';
import { VenueIDs, 
         VenueSummary }     from './Venue';

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
    venues?:  VenueIDs[];

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
    private static equityList: EquityList;
    private static equityLoader: EquityLoader;


    //------  public parts -----
    constructor() { 
        if (!Equities.equityList)    { Equities.equityList     = new EquityList(); }
        if (!Equities.equityLoader)  { 
            Equities.equityLoader  = new EquityLoader(Equities.equityList); 
            Equities.equityLoader.loadEquityList();
        }
    }

    public addItem(item:EquityItem):EquityItem {
        item = Equities.equityList.addItem(item);
        Equities.equityLoader.loadLocal(item);
        EquityLoader.saveEquityList(Equities.equityList.getAllSymbols());
        return item;
    }

    public removeItem(itemOrSymbol:EquityItem|string) {
        Equities.equityList.removeItem(itemOrSymbol);
        EquityLoader.saveEquityList(Equities.equityList.getAllSymbols());
    }

    public getItem(sym:string) { return Equities.equityList.getItem(sym); }

    public getCategories():Category[] { 
        return Equities.assembleCategories(
            Equities.equityList.getAllSymbols().map(Equities.equityList.getItem.bind(Equities.equityList))
        );
    }

    public getFirstByCat(cat:string):EquityItem {
        const c = this.getCategories()[cat];
        if (c && c.equities.length>0) { return c.equities[0]; }
        else { return Equities.equityList.unkownEquity(); }
    }

    public getMarketUpdate():Promise<boolean> { 
        return Equities.equityLoader.marketUpdate()
        .catch((err:any) => {
            console.log(err);
            return false;
        })
        .then(() => true); 
    }
    public getVenueSymbols():Promise<VenueSummary> { 
        return EquityLoader.getTrader().requestSymbols(); 
    }
    public readSplits()      { return Equities.equityLoader.requestSplitsIfMissing(); }

    public applySplitsToTrades(item:EquityItem) {
        return EquityLoader.applySplitsToTrades(item);
    }
}

export const gEquities = new Equities();
