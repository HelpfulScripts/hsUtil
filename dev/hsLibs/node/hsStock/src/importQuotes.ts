/**
 * import quates from Yahoo historical downloads into quotes*.json:
 * https://finance.yahoo.com/quote/AAPL/history?period1=345456000&period2=151
 */
import { hsExcel, fsUtil }  from 'hsnode';
import { DataRow }          from 'hsdata';

const destDir = '../../../../staging/apps/hsStock/data/stock/';    
const srcDir  = '../../../../staging/apps/hsStock/import/';    

function importYahooFile(files:string[]) {
    files
    .filter((file:string) => file.match(/.csv/g))
    .forEach((file:string) => {
        console.log(`reading '${srcDir+file}'`);
        const wb = hsExcel.readFile(srcDir+file);
        const src = wb.getTable('Sheet1'); // get first sheet in file
//        const sym = src.columns.sheetName;
        const sym = file.split('.')[0];
console.log(sym);        
        const destFile = destDir+'quotes'+sym+'.json';
        console.log(`augmenting '${destFile}'`);
        fsUtil.readJsonFile(destFile)
        .then((dest:any) => {
            const minDate = new Date(dest.rows[0][0]); 
            src.table.forEach((row:DataRow, i:number) => {
                const d = new Date(<string>row[0]);
                if (d<minDate) {
                    // Date Open High Low Close AdjClose Volume --> Date Open Close High Low Volume
                    dest.rows.push([
                        `${d.getFullYear()}-${('0'+(d.getMonth()+1)).slice(-2)}-${('0'+d.getDate()).slice(-2)}`, 
                        parseFloat(<string>row[1]), 
                        parseFloat(<string>row[4]), 
                        parseFloat(<string>row[2]), 
                        parseFloat(<string>row[3]), 
                        parseFloat(<string>row[6])
                    ]);
                }
            });
            dest.rows.sort((a:string[], b:string[]) => a[0] < b[0]?-1 : (a[0] > b[0]? 1 : 0));
console.log(`minDate: ${minDate}, writing ${destFile}`);   

            return fsUtil.writeJsonFile(destFile, dest);             
        });
/*            
        fsUtil.writeJsonFile(srcDir+sym, {
            names: table.columns.names,
            rows: table.table
        });
*/        
    });
}

fsUtil.readDir(srcDir)
.then(importYahooFile)
.catch(console.log);
