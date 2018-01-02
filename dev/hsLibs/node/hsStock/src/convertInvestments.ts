import { hsExcel, fsUtil }  from 'hsnode';

//const srcDir = 'data/';
const srcDir = '/Volumes/DataHD/private/Privat/privat/stuff/Konten/';
const destDir = '../../../../staging/apps/hsStock/private/';    // password protected area
const wb = hsExcel.readFile(srcDir+'Investments.xlsb');
//const shares = wb.getTable(wb.getSheetNames()[0], 'F', 9);
const shares = wb.getTable('WF US Amount', 'F', 9);
const price = wb.getTable('WF US Quotes', 'E', 10);

const updateSymbols = {
    ERTS: 'EA',
    BGEN: 'BIIB'
    CASH: '_cash'
};

console.log(price.columns.names);

function findSymCol(sym:string) {
    return price.columns.names.indexOf(sym); 
}

function findPriceRow(date:Date, symCol:number) {
    const row = price.table.findIndex(row => (new Date(row[0]) >= date)); 
    if (row>=0) {
        let result = price.table[row][symCol];
        if (result === '') { result = price.table[row-1][symCol]; }
        return result;
    }
    return undefined;
}

const symbols = shares.columns.names.slice();
symbols.shift();    // to remove the first 'Date' column


const transactions = {};
let numTrans = 0;

symbols.forEach((sym, c) => {
    const newSym = updateSymbols[sym] || sym;
    transactions[newSym] = [];
    let previous = 0;
    const symCol = findSymCol(sym);
    shares.table.forEach((row, r) => {
        const date = row[0];
        let num = parseFloat(<string>row[c+1]);
        if (isNaN(num)) { num = 0; }
        if (num !== previous) {
            const prc = symCol>0? findPriceRow(new Date(date), symCol) : undefined;
console.log(`${sym} ${date} ${symCol} ${prc}`);          
            transactions[newSym].push({date: date, change: num-previous, total:num, price:prc});
            previous = num;
            numTrans++;
        }
    });
    if (previous < 0) {
        console.log(`invalid final shares for ${sym}: ${previous}`);
    }
});
fsUtil.writeJsonFile(destDir+'transactions.json', transactions).catch(console.log);
console.log(`wrote transactions.json, ${numTrans} transactions`);
