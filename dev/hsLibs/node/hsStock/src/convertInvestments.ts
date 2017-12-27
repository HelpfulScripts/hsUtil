import { hsExcel, fsUtil }  from 'hsnode';

//const srcDir = 'data/';
const srcDir = '/Volumes/DataHD/private/Privat/privat/stuff/Konten/';
const destDir = '../../../../staging/apps/hsStock/private/';    // password protected area
const wb = hsExcel.readFile(srcDir+'Investments.xlsb');
//const table = wb.getTable(wb.getSheetNames()[0], 'F', 9);
const table = wb.getTable('WF US Amount', 'F', 9);

const updateSymbols = {
    ERTS: 'EA',
    BGEN: 'BIIB'
};

const symbols = table.columns.names.map((sym:string) => updateSymbols[sym] || sym);
symbols.shift();    // to remove the first 'Date' column


const transactions = {};
let numTrans = 0;

for (let c=0; c<symbols.length; c++) {
    let sym = symbols[c];
    transactions[sym] = [];
    let previous = 0;
    for (let r=0; r<table.table.length; r++) {
        const date = table.table[r][0];
        let num = parseFloat(<string>table.table[r][c+1]);
        if (isNaN(num)) { num = 0; }
        if (num !== previous) {
            transactions[sym].push({date: date, change: num-previous, total:num});
            previous = num;
            numTrans++;
        }
    }
    if (previous < 0) {
        console.log(`invalid final shares for ${sym}: ${previous}`);
    }
}
fsUtil.writeJsonFile(destDir+'transactions.json', transactions).catch(console.log);
console.log(`wrote transactions.json, ${numTrans} transactions`);
