import { Transaction }  from './Assets';
import { EquityItem }   from './Equities';



export class EquityList {
    //------  Static  parts -----
   
    /** impute trades with share price */
    public static imputeTradesWithSharePrice(item:EquityItem):EquityItem {
        if (item.trades) {
            item.trades.forEach((trade:Transaction) => { 
                if (!(trade.Date instanceof Date)) { trade.Date = new Date(trade.Date); }        
                if (trade.price) {
                    if (typeof trade.price === 'string') {
                        trade.price = parseFloat(<string>trade.price);
                        item.changed = true;
                    }
                } else if (item.quotes && item.quotes.rows) {
                    item.changed = true;
                    const row:any = item.quotes.rows.find((t:any) => {
                        if (!(t[0] instanceof Date)) { t[0] = new Date(t[0]); }
                        return t[0]>trade.Date;
                    });
                    trade.price = row? row[2] : 20;
                }
            });
        }    
        return item;            
    };

    //------  private  parts -----
    private bySymbol   = <{string: EquityItem}>{};

    //------  public parts -----

    public clearInvalids() {
        Object.keys(this.bySymbol).forEach((sym:string) => {
            const item = this.getItem(sym);
            delete item.invalid;
            item.changed = true;
        });
    }

    public unkownEquity() { 
        return {cat:'unknown Cat', symbol:'????', name:'unknown'}; 
    }

    public newItem(sym:string):EquityItem { 
        const item = {
            symbol:sym, 
            cat:'unknown Cat', 
            name:'unknown',
            changed: true
        }; 
        return this.addItem(item);
    }


    public getAllSymbols():string[] {
        return Object.keys(this.bySymbol);
    }

    public getItem(symbol:string):EquityItem { 
        if (!this || !this.bySymbol) {
            console.log('missing this');
        }
        return this.bySymbol[symbol] || this.unkownEquity();
    }

    public addItem(item:EquityItem):EquityItem {
        const sym = item.symbol.toUpperCase();
        delete item.invalid;        // no longer used
        return this.bySymbol[sym] || (this.bySymbol[sym] = item);
    }

    public removeItem(itemOrSymbol:EquityItem|string) {
        const item = (typeof itemOrSymbol === 'string')? 
            this.bySymbol[itemOrSymbol.toUpperCase()] : this.bySymbol[(<EquityItem>itemOrSymbol).symbol];
        delete this.bySymbol[item.symbol.toUpperCase()];
    }

    public checkProperties(item:EquityItem):EquityItem {
        if (item.company && item.company.sector) { 
            if (item.cat !== item.company.sector) {
                item.cat = item.company.sector;
                item.changed = true;
            }
        }
        item.stats.closePrice = item.stats.closePrice || (item.otherStats? item.otherStats.close : -1);
        if (!item.stats.closeDate) {
            if (item.otherStats) {
                item.stats.closeDate = new Date(item.otherStats.closeTime);
            } else {
                console.log(`not item.otherStats for ${item.symbol}`);
            }
        }
        if (item.stats['latestVolume']) { delete item.stats['latestVolume']; }
        return item;
    }
}

