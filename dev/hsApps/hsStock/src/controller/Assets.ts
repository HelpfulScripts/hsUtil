import { m } from 'hslayout';

const assetFile = 'private/transactions.json';

export interface Transaction {
    /** the date of trade */
    Date: Date;
    /** the equity symbol being traded */
    symbol: string;
    /** the numbermof shares being bought (positive) or sold (negative) */
    shares: number;
    price?: number;
}

export interface TransactionList {
    [sym:string]: {
        /** most recent trade date */
        latestDate: Date;
        /** total shares after most recent trade */
        latestShares: number;
        trades: Transaction[];
    };
}

function fileToList(data:any):TransactionList {
    const list: TransactionList = {};
    Object.keys(data).forEach((sym:string) => {
        data[sym]
        .map((entry:any) => { 
            entry.Date = new Date(entry.date); 
            delete entry.date;
            return entry; 
        })
        .sort((a:any, b:any)=> a.Date < b.Date);
        const latestTrade = data[sym][data[sym].length-1];
        list[sym] = {
            latestDate:latestTrade.DAte,
            latestShares: latestTrade.total,
            trades:<Transaction[]>[]
        };
        data[sym].forEach((trade:any) => list[sym].trades.push(trade));
    });
    return list;
}

export function readAssets(): Promise<TransactionList> {
    return m.request({url: assetFile})
    .then(fileToList)
    .catch(console.log);
}