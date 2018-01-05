import { TraderQuote,
         TraderIntraday,
         TraderSymbol}      from './Trader';
import { VenueIDs,
         VenueSummary,
         Venue }   from './Venue';
import { EquityItem }       from './Equities';
import { EquitySplit }      from './Equities';
import { round }            from 'hsutil';


/**
 * # IEX Trading Venue.
 * https://iextrading.com/developer/docs/
 * 
 * Behaves passively, i.e. does not initiate any server calls without explicit requests.
 * All methods initating requests are named `request***`
 */
export class IexVenue extends Venue {
    private static base        = 'https://api.iextrading.com/1.0';
    private static symbolsUrl  =                 `${IexVenue.base}/ref-data/symbols`;
    private static marketUpdateUrl = ()       => `${IexVenue.base}/market`;
    private static quoteUrl    = (sym:string) => `${IexVenue.base}/stock/${encodeURIComponent(sym)}/chart`;
    private static splitsUrl   = (sym:string) => `${IexVenue.base}/stock/${encodeURIComponent(sym)}/splits/5y`;
    private static statsUrl    = (sym:string) => `${IexVenue.base}/stock/${encodeURIComponent(sym)}/stats`;
    private static metaUrl     = (sym:string) => `${IexVenue.base}/stock/${encodeURIComponent(sym)}/quote`;
//    private financialsUrl   = (sym:string) => `${IexVenue.base}/stock/${encodeURIComponent(sym)}/financials`;
//    private earningsUrl     = (sym:string) => `${IexVenue.base}/stock/${encodeURIComponent(sym)}/earnings`;
//    private dividendsUrl    = (sym:string) => `${IexVenue.base}/stock/${encodeURIComponent(sym)}/dividends/5y`;
//    private logoUrl         = (sym:string) => `${IexVenue.base}/stock/${encodeURIComponent(sym)}/logo`;

    private static newSummary():VenueSummary {
       return {
            venueID:    VenueIDs.IEX, 
            venueName: 'IEXTrading',
            symbols:    [],
            names:      [],
            equities:   <{string:TraderSymbol}>{}
        };
    }

    private static normalizeMeta (data:any, item:EquityItem):EquityItem {
        if (data) {
            item.name                    = data.companyName;
            item.symbol                  = data.symbol;
            item.cat                     = item.cat || 'Stocks';
            item.stats.latestDate        = data.latestTime? new Date(data.latestUpdate) : new Date();
            item.stats.latestPrice       = data.latestPrice;
            item.stats.closeDate         = new Date(data.closeTime);
            item.stats.closePrice        = data.close;
            item.stats.change            = data.change;
            item.company                 = item.company || {};
            item.company.sector          = data.sector;
            item.company.primaryExchange = data.primaryExchange;
            item.stats = item.stats || {};
            item.otherStats = item.otherStats || {};
            delete data.otherStats;
            Object.keys(data).forEach((k:string) => ((item.stats[k]===undefined)? item.otherStats[k] = data[k] : ''));
        }
        return item;
    }

    private static normalizeStats = (data:any, item:EquityItem):EquityItem => {
        item.name                 = data.companyName || 'unkown company';
        item.symbol               = data.symbol;
        item.cat                  = item.cat || 'Stocks';
        item.company              = item.company || {};
        item.stats                = item.stats || {};
        item.stats.week52high     = data.week52high;
        item.stats.week52low      = data.week52low;
        item.stats.latestEPS      = data.latestEPS;
        item.stats.latestEPSDate  = new Date(data.latestEPSDate);
        item.stats.marketCap      = data.marketcap;
        item.stats.cash           = data.cash;
        item.stats.revenue        = data.revenue;
        item.stats.EBITDA         = data.EBITDA;
        item.stats.exDividendDate = new Date(data.exDividendDate);
        item.stats.dividendRate   = data.dividendRate;
        item.stats.dividendYield  = data.dividendYield;
        item.otherStats = item.otherStats || {};
        delete data.otherStats;
        Object.keys(data).forEach((k:string) => ((item.stats[k]===undefined)? item.otherStats[k] = data[k] : ''));
        return item;
    }

    private static normalizeQuotes(data:any[]):TraderQuote[] {
        return data
            .filter((d:any) => d.date)   // remove nulls
            .map((d:any) => {
                return {
                    Date:   new Date(d.date),
                    high:   parseFloat(d.high),
                    low:    parseFloat(d.low),
                    open:   parseFloat(d.open),  
                    close:  parseFloat(d.close),
                    volume: parseFloat(d.volume)
                };
            }); // sorting willbe done in Trader
    }

    private static normalizeIntraday(data:any[]):TraderIntraday[] {
        return !data? [] : 
            data.filter((d:any) => d.date && d.minute)   // remove nulls
                .filter((d:any) => d.marketVolume>0)
                .map((d:any) => {
                    return {
                        Date: new Date(d.date.slice(0,4), d.date.slice(4,6)-1, d.date.slice(-2), d.minute.slice(0,2), d.minute.slice(-2)),
                        high: parseFloat(d.marketHigh),
                        low:  parseFloat(d.marketLow)
                    };
                }); // sorting willbe done in Trader
    }

    private static normalizeSplits(data:IEXSplit[]): EquitySplit[] {
        if (data && data.length>0) {
            data.map((t:IEXSplit) => t.date = new Date(t.exDate));
            return data;
        }
        return undefined;
    }

    private static processMarketsForLatestUpdate(markets:any[]):Date {
        let maxDate:Date;
        let maxMarket = '??';
        markets.forEach((venue:any) => {
            const lastDate = new Date(venue.lastUpdated);
console.log(`venue '${venue.venueName}', ${round(venue.marketPercent*100, 2)}% of market, last traded at ${lastDate.toTimeString()}`);
            if (!maxDate || maxDate < lastDate) { 
                maxDate =  lastDate; 
                maxMarket = venue.venueName;
            }
        });
console.log('latest update: ${maxDate} on ${maxMarket}');
        return maxDate;
    }

    private normalizeSymbols = (data:string[]):VenueSummary => {
console.log(`found ${data.length} symbols for ${this.summary.venueName}`);        
        data.forEach((entry:any) => { 
            this.summary.equities[`sym${entry.symbol}`] = entry; 
            this.summary.symbols.push(entry.symbol);
            this.summary.names.push(entry.name);
        });
        return this.summary;
    }


    constructor() {
        super();
        this.summary = IexVenue.newSummary();
    }

    /** retrieves the date and time of the most recent transaction on 
     * any of the markets supported by the venue */
    requestMarketUpdate(): Promise<Date> {
        return Venue.addPacedGet(IexVenue.marketUpdateUrl())
        .then(IexVenue.processMarketsForLatestUpdate);
    }

    requestMetaVenue(item:EquityItem):Promise<EquityItem> {
        function request(url:string, type:string, normalize:(data:any, item:EquityItem)=>EquityItem): Promise<EquityItem> {
            return Venue.addPacedGet(url)
                .then((data:any) => {
                    if(!data) { throw `no data for request ${url}`; }
                    return normalize(data, item);
                });
        }

        const stats = IexVenue.statsUrl(item.symbol);
        const meta  = IexVenue.metaUrl(item.symbol);
        return Promise.resolve()
        .then(() => request(stats, 'stats', IexVenue.normalizeStats))
        .catch((err:any) => {
            console.log(`*** error in request stats for ${stats}: ${err}`);
        })
        .then(() => request(meta, 'meta', IexVenue.normalizeMeta));
    }

    requestQuotesVenue(item:EquityItem, missingDays:number):Promise<TraderQuote[]> {
        let timeCode;
//        if (!item.quotes || item.quotes.rows.length === 0) {
//            timeCode = '5yr';
//        } else {
            if (missingDays > 1)    { timeCode = '1m'; }
            if (missingDays > 28)   { timeCode = '3m'; }
            if (missingDays > 80)   { timeCode = '6m'; }
//            if (missingDays > 170)  { timeCode = '1yr'; }
//            if (missingDays > 360)  { timeCode = '2yr'; }
//            if (missingDays > 720)  { timeCode = '5yr'; }
//        }
    
        const url = IexVenue.quoteUrl(item.symbol)+'/'+ timeCode;
        return (!timeCode)? 
            Promise.resolve(<TraderQuote[]>[]) :
            Venue.addPacedGet(url).then(IexVenue.normalizeQuotes);
    }

    requestIntradayVenue(item:EquityItem):Promise<TraderIntraday[]> {
        const url = IexVenue.quoteUrl(item.symbol)+'/1d';
        return Venue.addPacedGet(url)
            .then(IexVenue.normalizeIntraday);
    }

    requestSplitsVenue(item:EquityItem):Promise<EquitySplit[]> {
        const url = IexVenue.splitsUrl(item.symbol);
        return Venue.addPacedGet(url)
            .then(IexVenue.normalizeSplits);
    }

    requestSymbolsForVenue():Promise<VenueSummary> {
        const url = IexVenue.symbolsUrl;
console.log(`getting Trader symbols ${url}`);        
        return Venue.addPacedGet(url)
            .then(this.normalizeSymbols);
    }
};


interface IEXSymbols extends TraderSymbol {
    date:       string;
    isEnabled:  boolean;
    type:       string;     // refers to the common issue type of the stock. 
                            //  ad – American Depository Receipt (ADR’s) 
                            //  re – Real Estate Investment Trust (REIT’s) 
                            //  ce – Closed end fund (Stock and Bond Fund) 
                            //  si – Secondary Issue 
                            //  lp – Limited Partnerships 
                            //  cs – Common Stock 
                            //  et – Exchange Traded Fund (ETF) 
                            //  (blank) = Not Available, i.e., Warrant, Note, or (non-filing) Closed Ended Funds
    iexId:      string;
}

interface IEXMeta extends EquityItem {
    beta:               number; // 
    week52change:       number; // 
    shortInterest:      number; // 
    shortDate:          string; // 
    dividendRate:       number; // 
    dividendYield:      number; // 
    exDividendDate:     string; // 
    latestEPS:          number; // (Most recent quarter)
    latestEPSDate:      string; // 
    sharesOutstanding:  number; // 
    float:              number; // 
    returnOnEquity:     number; // (Trailing twelve months)
    consensusEPS:       number; // (Most recent quarter)
    numberOfEstimates:  number; // (Most recent quarter)
    EBITDA:             number; // (Trailing twelve months)
    revenue:            number; // (Trailing twelve months)
    grossProfit:        number; // (Trailing twelve months)
    cash:               number; // reers to total cash. (Trailing twelve months)
    debt:               number; // refers to total debt. (Trailing twelve months)
    ttmEPS:             number; // (Trailing twelve months)
    revenuePerShare:    number; // (Trailing twelve months)
    revenuePerEmployee: number; // (Trailing twelve months)
    peRatioHigh:        number; // 
    peRatioLow:         number; // 
    EPSSurpriseDollar:  number; // refers to the difference between actual EPS and consensus EPS in dollars.
    EPSSurprisePercent: number; // refers to the percent difference between actual EPS and consensus EPS.
    returnOnAssets:     number; // (Trailing twelve months)
    returnOnCapital:    number; // (Trailing twelve months)
    profitMargin:       number; // 
    priceToSales:       number; // 
    priceToBook:        number; // 
    day200MovingAvg:    number; // 
    day50MovingAvg:     number; // 
    institutionPercent: number; // represents top 15 institutions
    insiderPercent:     number; // 
    shortRatio:         number; // 
    year5ChangePercent: number; // 
    year2ChangePercent: number; // 
    year1ChangePercent: number; // 
    ytdChangePercent:   number; // 
    month6ChangePercent: number; // 
    month3ChangePercent: number; // 
    month1ChangePercent: number; // 
    day5ChangePercent:  number; // 
}


interface IEXQuote extends TraderQuote {
    change:         number;
    changeOverTime: number;
    changePercent:  number;
    label:          string; // "Oct 16"
    unadjustedVolume: number;
    vwap:           number;
}

interface IEXStat {
    companyName:            string;	
    marketcap:              number;	// is not calculated in real time.
    beta:                   number;	
    week52high:             number;	
    week52low:              number;	
    week52change:           number;	
    shortInterest:          number;	
    shortDate:              string;
    dividendRate:           number;	
    dividendYield:          number;	
    exDividendDate:	        string;
    latestEPS:              number;	// (Most recent quarter)
    latestEPSDate:          string;	
    sharesOutstanding:      number;	
    float:                  number;	
    returnOnEquity:         number;	// (Trailing twelve months)
    consensusEPS:           number;	// (Most recent quarter)
    numberOfEstimates:      number;	// (Most recent quarter)
    symbol:                 string;
    EBITDA:                 number;	// (Trailing twelve months)
    revenue:                number;	// (Trailing twelve months)
    grossProfit:            number;	// (Trailing twelve months)
    cash:                   number;	// refers to total cash. (Trailing twelve months)
    debt:                   number;	// refers to total debt. (Trailing twelve months)
    ttmEPS:                 number;	// (Trailing twelve months)
    revenuePerShare:        number;	// (Trailing twelve months)
    revenuePerEmployee:     number;	// (Trailing twelve months)
    peRatioHigh:            number;	
    peRatioLow:             number;	
    EPSSurpriseDollar:      number;	// refers to the difference between actual EPS and consensus EPS in dollars.
    EPSSurprisePercent:     number;	// refers to the percent difference between actual EPS and consensus EPS.
    returnOnAssets:         number;	// (Trailing twelve months)
    returnOnCapital:        number;	// (Trailing twelve months)
    profitMargin:           number;	
    priceToSales:           number;	
    priceToBook:            number;	
    day200MovingAvg:        number;	
    day50MovingAvg:         number;	
    institutionPercent:     number;	// represents top 15 institutions
    insiderPercent:         number;	
    shortRatio:             number;	
    year5ChangePercent:     number;	
    year2ChangePercent:     number;	
    year1ChangePercent:     number;	
    ytdChangePercent:       number;	
    month6ChangePercent:    number;	
    month3ChangePercent:    number;	
    month1ChangePercent:    number;	
    day5ChangePercent:      number;    
}

interface IEXFinancials {
    reportDate:             string;
    grossProfit:            number;
    costOfRevenue:          number;
    operatingRevenue:       number;
    totalRevenue:           number;
    operatingIncome:        number;
    netIncome:              number;
    researchAndDevelopment: number;
    operatingExpense:       number;
    currentAssets:          number;
    totalAssets:            number;
    totalLiabilities:       number;
    currentCash:            number;
    currentDebt:            number;
    totalCash:              number;
    totalDebt:              number;
    shareholderEquity:      number;
    cashChange:             number;
    cashFlow:               number;
    operatingGainsLosses:   string;
}

interface IEXEarnings {
    actualEPS:          number;
    consensusEPS:       number;
    estimatedEPS:       number;
    announceTime:       string;
    numberOfEstimates:  number;
    EPSSurpriseDollar:  number;
    EPSReportDate:      string;
    fiscalPeriod:       string;
    fiscalEndDate:      string;
}

interface IEXDividends {
    exDate:         string;	// refers to the dividend ex-date
    paymentDate:    string;	// refers to the payment date
    recordDate:     string;	// refers to the dividend record date
    declaredDate:   string;	// refers to the dividend declaration date
    amount:         number;	// refers to the payment amount
    type:           string;	// refers to the dividend payment type (Dividend income, Interest income, Stock dividend, Short term capital gain, Medium term capital gain, Long term capital gain, Unspecified term capital gain)
    qualified:      string;	// refers to the dividend income type 
                            // P = Partially qualified income 
                            // Q = Qualified income 
                            // N = Unqualified income 
                            // null = N/A or unknown
}

export interface IEXSplit extends EquitySplit {
    exDate:         string;	// refers to the split ex-date
    declaredDate:   string;	// refers to the split declaration date
    recordDate:     string;	// refers to the split record date
    paymentDate:    string;	// refers to the split payment date
    toFactor:       string;	// To factor of the split. Used to calculate the split ratio forfactor/tofactor = ratio (eg ½ = 0.5)
    forFactor:      string;	// For factor of the split. Used to calculate the split ratio forfactor/tofactor = ratio (eg ½ = 0.5)
}