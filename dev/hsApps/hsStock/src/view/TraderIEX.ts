import { TraderQuote,
         TraderMeta,
         TraderReferences,
         TraderSymbol,
         TraderProfile } from './Trader';

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


interface IEXQuote extends TraderQuote {
    change:         number;
    changeOverTime: number;
    changePercent:  number;
    label:          string; // "Oct 16"
    unadjustedVolume: number;
    vwap:           number;
}


/**
 * https://iextrading.com/developer/docs/
 */
export class IexTrading implements TraderProfile {
    base = 'https://api.iextrading.com/1.0';
    symbolsUrl    = ()           => `${this.base}/ref-data/symbols`;
    metaUrl       = (sym:string) => `${this.base}/stock/${encodeURIComponent(sym)}/stats`;
    quoteUrl      = (sym:string) => `${this.base}/stock/${encodeURIComponent(sym)}/chart`;
    financialsUrl = (sym:string) => `${this.base}/stock/${encodeURIComponent(sym)}/financials`;
    earningsUrl   = (sym:string) => `${this.base}/stock/${encodeURIComponent(sym)}/earnings`;
    dividendsUrl  = (sym:string) => `${this.base}/stock/${encodeURIComponent(sym)}/dividends/5y`;
    splitsUrl     = (sym:string) => `${this.base}/stock/${encodeURIComponent(sym)}/splits/5y`;
    logoUrl       = (sym:string) => `${this.base}/stock/${encodeURIComponent(sym)}/logo`;
    
    normalizeMeta:(data:any) => TraderMeta = (data:any) => {
console.log(`receiving stock '${data.symbol}' meta`);   
        const meta:TraderMeta = {
            name:       data.companyName,
            symbol:     data.symbol,
            pe:         data.peRatio,
            week52High: data.week52High,
            week52Low:  data.week52Low,
            open:       data.open,
            close:      data.close,
            marketCap:  data.marketCap,
            sector:     data.sector,
            primaryExchange:  data.primaryExchange,
            change:     data.change
        };
        return meta;
    }

    normalizeQuotes:(data:any[]) => TraderQuote[] = (data:any[]) => {
        data.sort((a:TraderQuote, b:TraderQuote) => Date.parse(a.date) - Date.parse(b.date));
console.log(`receiving stock quote for`);   
        return <IEXQuote[]>data;
    }

    normalizeSymbols:(data:any[]) => TraderReferences = (data:any[]) => {
        const result:TraderReferences = {symbols:<string[]>[], names:<string[]>[], equities:<{string:TraderSymbol}>{}};
        data.forEach((entry:any) => { 
            result.equities[`sym${entry.symbol}`] = entry; 
            result.symbols.push(entry.symbol);
            result.names.push(entry.name);
        });
        return result;
    }
};


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

interface IEXSplits {
    exDate:         string;	// refers to the split ex-date
    declaredDate:   string;	// refers to the split declaration date
    recordDate:     string;	// refers to the split record date
    paymentDate:    string;	// refers to the split payment date
    ratio:          number;	// refers to the split ratio. The split ratio is an inverse of the number of shares that a holder of the stock would have after the split divided by the number of shares that the holder had before. 
                            // For example: Split ratio of .5 = 2 for 1 split.
    toFactor:       string;	// To factor of the split. Used to calculate the split ratio forfactor/tofactor = ratio (eg ½ = 0.5)
    forFactor:      string;	// For factor of the split. Used to calculate the split ratio forfactor/tofactor = ratio (eg ½ = 0.5)
}