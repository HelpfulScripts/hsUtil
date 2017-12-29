
/**
* 
* The HsData object will feature its own column meta information, as well as 
* a copy of the rows array which allows for `filter` and `sort` operations. 
* However, the column arrays will be shared with the original HsData object in order to be memory efficient.
* This means that `map` and `newColumn` operations on the new object will affect the original object or any 
* object derived via `query`.  
* @description executes a query on the data. Each row in the data is checked and those for which
* `conditions` is true are returned as a new HsData object. 
*  
* ## General conditions
* <pre>conditions = 
*    indexCond  -> conditions on the row index
* || setCond    -> (set of) conditions on column values
* </pre>
* 
* ## Index conditions
* <pre>indexCond =
*    rowIdx         -> true if row index matches
* || [rowIdx, ...]  -> true if any of the row indices match
* 
* rowIdx = the index of the targeted row
* </pre>
* 
* ## Recursive combinations
* <pre>recurCond =
*    {SetCond, ...}              -> AND: true if all conditions are true
* || [recurCond, ...]            -> OR:  true if any conditions are true
* 
* SetCond =
*    'or': recurCond             -> true if any condition is true
* || 'and': recurCond            -> true if all conditions are true
* || 'not': recurCond            -> true if the condition is false
* || termCond                    -> a terminal condition
* </pre>
* 
* ## Terminal conditions
* <pre>termCond =
*    colDesc:colValue            -> true if colValue matches 
* || colDesc:[colValue, ...]     -> true if any of the colValues match
* || colDesc:function(value, 
*                     row) -> true if function returns true 
* 
* colDesc = either column name or index
* </pre>
* 
* ## Practical Tips
* <pre>
*    {'or': [recurCond, ...]}    -> OR, same as [recurCond, ...]
* || {'or': {SetCond, ...}}      -> OR, same as [SetCond, ...]
* || {'and': [recurCond, ...]}   -> AND, true if all recurCond are true
* || {'and': {SetCond, ...}}     -> AND, same as {SetCond, ...}
* || {'not': {SetCond, ...}}     -> NAND: true if the SetCond are true
* || {'not': [recurCond, ...]}   -> NOR: true if any of the recurCond are true
* </pre>
*      
* # Example
* <example module="hsData">
*     <file name="index.html">
*         <div ng-controller="myCtrl">
*         <h1>Data</h1>
*         <table>
*             <th>Row</th><th ng-repeat="h in header">{{h}}</th>
*             <tr ng-repeat="row in data">
*                 <td>{{$index}}</td><td ng-repeat="field in row">{{field}}</td>
*             </tr>
*         </table>
*         <h1>Queries:</h1>
*         <table>
*         <th>Description</th><th>Query</th><th>db.query(Query)<br>('Name')</th><th>db.query(Query)<br>().length</th>
*         <tr ng-repeat='q in queries'><td>{{q.desc}}:</td><td>{{q.query}}</td><td>{{q.result}}</td><td>{{q.length}}</td></tr>
*         </table>
*         </div>
*     </file>
*    <file name="script.js">
*         angular.module('hsData').controller('myCtrl', function myCtrl($scope){
*         $scope.header = ['Name', 'Value', 'Entry Date', 'Exit Date'];
*         $scope.data = [
*             ['Harry', '100', '3/1/14', '11/20/14'], 
*             ['Mary', '1500', '7/1/14', '9/30/14'],
*             ['Peter', '400', '5/20/14', '4/30/15'],  
*             ['Jane', '700', '11/13/14', '8/15/15']
*             ];
*         $scope.db = (new hs('HsData'))('local data');
*         $scope.db.data($scope.data, $scope.header);
*         $scope.db.cast(); // ensure the right types
*         $scope.queries = [
*             {desc:'undefined query', query:'undefined'},
*             {desc:'empty OR query',  query:'[]'},
*             {desc:'empty AND query', query:'{}'},
*             {desc:'2nd row', 		 query:'1'},
*             {desc:'2nd+4th row', 	 query:'[1,3]'},
*             {desc:'Simple', 		 query:'{Name:"Jane"}'},
*             {desc:'Simple', 		 query:'{"1":1500}'},
*             {desc:'OR:terminal',	 query:'{Name:["Peter", "Jane"]}'},
*             {desc:'OR:implicit',	query:'[{Name:"Peter"}, {Value:1500}]'},
*             {desc:'OR: { }', 		query:'{or:{Name:"Peter", Value:1500}}'},
*             {desc:'OR: [ ]', 		query:'{or:[{Name:"Peter"}, {Value:1500}]}'},
*             {desc:'AND:implicit', 	query:'{Name:"Peter", Value:400}'},
*             {desc:'AND: { }', 		query:'{and:{Name:"Peter", Value:400}}'},
*             {desc:'AND: { }', 		query:'{and:{Name:"Peter", Value:1500}}'},
*             {desc:'AND: [ ]', 		query:'{and:[{Name:"Peter"}, {Value:400}]}'},
*             {desc:'AND: [ ]', 		query:'{and:[{Name:"Peter"}, {Value:1500}]}'},
*             {desc:'NOT: NAND', 		query:'{not:{Name:"Peter", Value:400}}'},
*             {desc:'NOT: NAND', 		query:'{not:{Name:"Peter", Value:1500}}'},
*             {desc:'NOT: NOR', 		query:'{not:[{Name:"Peter"}, {Value:1500}]}'}
*         ];
*         
*         for (var q=0; q<$scope.queries.length; q++) {
*             var query = $scope.queries[q].query;
*             // Since this demo passes the query as a string,
*             // we use JSON.parse to convert it into an object.
*             // Hence we need to make a valid JSON format:
*             query = query.replace('Name', '"Name"').replace('Value', '"Value"')
*                             .replace('or', '"or"').replace('and', '"and"').replace('not', '"not"');
*             switch (query) {
*                 case 'undefined': query = undefined; break;
*                 case '':          break;
*                 default:          query = JSON.parse(query);
*             }
*             var result = $scope.db.query(query);
*             $scope.queries[q].result = result('Name');
*             $scope.queries[q].length = result().length;
*         }
*         });
*     </file>
*     <file name="style.css">
*     table { width: 100%; }
*     th, td { padding-left:20px; }
*     tr:nth-child(even) {background: #fff}
*     </file>
* </example>     
*/

/** */
import { Data,
         DataVal,
         DataRow
} from './Data'; 

export type Condition = IndexCondition | RecursiveCondition;

/** true if row index matches the number(s) */
export type IndexCondition = number | number[];

export type TermConmditionFunction = (value:DataVal, row:DataRow) => boolean;
export interface TermCondition { 
    [colDesc:string]: 
        DataVal 
      | DataVal[]
      | TermConmditionFunction
    ;
};

export type SingleCondition = SetCondition | TermCondition;
export type RecursiveCondition = SingleCondition | SingleCondition[];

export interface SetCondition {
    or?: RecursiveCondition;
    and?:RecursiveCondition;
    not?:RecursiveCondition;
};

export const example1:TermCondition =  {Name:"Jane"};

/**
 * The following examples illustrate the use of complex conditions.
 * The comments behind each indicate the result if applied to the following data set:
 *  names = ['Name', 'Value', 'Entry Date', 'Exit Date'];
 *  rows = [
 *      ['Harry', '100', '3/1/14', '11/20/14'], 
 *      ['Mary', '1500', '7/1/14', '9/30/14'],
 *      ['Peter', '400', '5/20/14', '4/30/15'],  
 *      ['Jane', '700', '11/13/14', '8/15/15']
 *  ];
 */
export const example2:Condition[] =  [
    undefined,                              // [0123]: undefined query, pass all rows
    [],                                     // [    ]:empty OR query, pass nothing
    {},                                     // [0123]: empty AND query, pass all rows
    1,                                      // [ 1  ]: pass 2nd row only
    [1,3],                                  // [ 1 3]: pass 2nd+4th row
    {Name:"Jane"},                          // [   3]: pass if column 'Name' === 'Jane'
    {"1":1500},                             // [ 1  ]: pass if column index '1' === 1500
    {Name:["Peter", "Jane"]},               // [  23]: OR: pass if column 'Name' === 'Jane' or 'Peter'
    [{Name:"Peter"}, {Value:1500}],         // [ 12 ]: OR: pass if column 'Name' === 'Peter' or column 'Value' === 1500 
    {or:{Name:"Peter", Value:1500}},        // [ 12 ]: OR: same as above 
    {or:[{Name:"Peter"}, {Value:1500}]},    // [ 12 ]: OR: same as above
    {Name:"Peter", Value:400},              // [  2 ]: AND: pass if column 'Name' === 'Peter' and 'Value' === 400
    {and:{Name:"Peter", Value:400}},        // [  2 ]: AND: same as above
    {and:{Name:"Peter", Value:1500}},       // [    ]: AND: pass if column 'Name' === 'Peter' and 'Value' === 1500
    {and:[{Name:"Peter"}, {Value:400}]},    // [  2 ]: AND: pass if column 'Name' === 'Peter' and 'Value' === 400
    {and:[{Name:"Peter"}, {Value:1500}]},   // [    ]: AND: pass if column 'Name' === 'Peter' and 'Value' === 1500
    {not:{Name:"Peter", Value:400}},        // [01 3]: NAND: pass if !('Name' === 'Peter' and 'Value' === 400)
    {not:{Name:"Peter", Value:1500}},       // [0123]: NAND: pass if !('Name' === 'Peter' and 'Value' === 1500)
    {not:[{Name:"Peter"}, {Value:1500}]}    // [1  3]: NOR: pass if !('Name' === 'Peter' or 'Value' === 1500)
];


/**
 * applies `condition` to a row of data and returns `true` if the row passes.
 * @param condition the complex condition to test against
 * @param r the row index in the data set
 * @param row the row values 
 * @param and 
 */
function satisfies(condition:Condition, r:number, row:DataRow, colNumber:(name:string)=>number, and=true) { 
    let orResult = false;
    let andResult= true;          
    if (condition===undefined) { return true; }
    
    // condition on row index
    else if (typeof condition === 'number') { return (condition === r); }

    // further disambiguation...
    else if (typeof condition === 'object') {
        // array -> or condition on a list of row indices or compound conditions
        const mc = <SingleCondition[]>condition;
        if (mc.length !== undefined) {					// condition === [...]
            mc.forEach((cd:SingleCondition) => {
                if (typeof cd === 'number') { 		    // does any row number match?
                    if (cd === r) { orResult  = true; } 
                             else { andResult = false; }
                } else if (typeof cd === 'object') { 	// does any complex condition match?
                    if (satisfies(cd, r, row, colNumber)) { orResult  = true; } 
                                                     else { andResult = false; }
                }
            }); 
        } 
        
        // object -> terminal or recursive condition
        else { 											// condition === { }
            let conditionMet = and;
            for (const name in condition) {
                const setCond = <SetCondition>condition;
                if      (name==='or')  { conditionMet = satisfies(setCond.or, r, row, colNumber, false); }
                else if (name==='and') { conditionMet = satisfies(setCond.and, r, row, colNumber, true); }
                else if (name==='not') { conditionMet = !satisfies(setCond.not, r, row, colNumber, true); }
                else {
                    const col = colNumber(name);
                    const val = condition[name];
                    const valIsFunction = (typeof val === 'function');
                    const valIsArray = ((typeof val === 'object') && (val.length!==undefined));
                    if (isNaN(col)) { 
                        console.log(`column name ${name} cannot be resolves in query ${JSON.stringify(condition)}`);
                        conditionMet = false;
                    } else if (valIsFunction) { 
                        // query true if function evaluates to true
                        conditionMet = val(row[col], row);
                    } else if (valIsArray) {
                        // query true if empty array, or at least one c true
                        conditionMet = (val.length === 0) || val.some((v:any) => row[col] === v); 
                    } else { // object: all conditions have to be met, unless specified as or
                        conditionMet = (row[col] === val); 
                    }
                }
                if (conditionMet) { orResult  = true;  if(!and) { break; }} // exit for name loop
                             else { andResult = false; if(and)  { break; }}
            }
        }    
    }
    return and? andResult : orResult;
}

export function filter(data:Data, cond:Condition):Data {
    const colNumber = (name:string):number => data.colNumber(name);
    try {
        return new Data({
            names: data.colNames(), 
            rows:data.getData().filter((row:DataRow, i:number) => satisfies(cond, i, row, colNumber))
        });
    } catch(err) {
        console.log(err);
        console.log(err.stack);
    }
}
