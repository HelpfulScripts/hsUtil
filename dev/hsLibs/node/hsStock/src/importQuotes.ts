import { hsExcel, fsUtil }  from 'hsnode';
import { DataRow }          from 'hsdata';

const destDir = '../../../../staging/apps/hsStock/data/stock/';    // password protected area
const srcDir  = '../../../../staging/apps/hsStock/import/';    // password protected area

function importYahooFile(files:string[]) {
    files
    .filter((file:string) => file.match(/.xls/g))
    .forEach((file:string) => {
        console.log(`reading '${srcDir+file}'`);
        const wb = hsExcel.readFile(srcDir+file);
        const src = wb.getTable('AAPL'); // get first sheet in file
        const sym = src.columns.sheetName+'.json';
        const destFile = destDir+'quotes'+sym;
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
console.log(`minDate: ${minDate}`);   
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
