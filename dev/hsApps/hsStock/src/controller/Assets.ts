import { m } from 'hslayout';

export interface Transaction {
    /** the equity symbol being traded */
    symbol: string;
    /** the date of trade */
    date: Date;
    /** the numbermof shares being bought (positive) or sold (negative) */
    shares: number;
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
        .map((entry:any) => { entry.date = new Date(entry.date); return entry; })
        .sort((a:any, b:any)=> a.date < b.date);
        const latestTrade = data[sym][data[sym].length-1];
        list[sym] = {
            latestDate:latestTrade.date,
            latestShares: latestTrade.total,
            trades:<Transaction[]>[]
        };
        data[sym].forEach((trade:any) => list[sym].trades.push(trade));
    });
    return list;
}

export function readAssets(file: string):Promise<TransactionList> {
    return m.request({url: file})
    .then(fileToList)
    .catch(console.log);
}