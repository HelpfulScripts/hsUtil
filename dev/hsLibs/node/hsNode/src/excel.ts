const XLSX	= require('xlsx');

import log from './log';
log.prefix('XL');

/**
 * @ngdoc object
 * @name hsNode.excel
 * @description Convenience functions to access tables in Excel files.
 * Uses the {@link https://github.com/SheetJS/js-xlsx Sheet JS xlsx parser and writer}.
 * 
 * # Excel related functions
 * - {@link hsNode.excel#methods_nextexcelcolindex nextExcelColIndex}
 * - {@link hsNode.excel#methods_readfile readFile}
 */

/**
 * @ngdoc object
 * @name hsNode.excelFile
 * @description a file object providing convenience functions for accessing tables
 * 
 * # Published file content related function
 * - {@link hsNode.excelFile#methods_getsheetnames getSheetNames}
 * - {@link hsNode.excelFile#methods_gettablecolumns getTableColumns}
 * - {@link hsNode.excelFile#methods_getrowsforcolumns getRowsForColumns}
 * - {@link hsNode.excelFile#methods_gettable getTable}
 * - {@link hsNode.excelFile#methods_getcellvalue getCellValue}	
 *
 * # Private functions
 * - {@link hsNode.excelFile#methods_getcellvalues getCellValues}	
 * - {@link hsNode.excelFile#methods_getconsecutivecolumnnames getConsecutiveColumnNames}	
 * - {@link hsNode.excelFile#methods_getrow getRow}	
 */


/**
 * @ngdoc object
 * @name nextExcelColIndex
 * @methodOf hsNode.excel
 * @description **generator** for Excel column indices starting at startCol. 
 * Following 'Z' the next column generated is 'AA' and so on. The generator 
 * starts with producing startCol as first index.
 * # Usage
 * <pre>
 * for (col of file.nextExcelColIndex(startCol='Y') { 
 *    printf("%s, ", col);      // -> Y, Z, AA, AB
 *    if (col === 'AB')  { break; }
 * }
 * </pre>
 * @param {string=} startCol the first column index ('A', ....) to yield; defaults to 'A'
 */
export function* nextExcelColIndex(startCol='A') {
	function nextChar(c:string) { return String.fromCharCode(c.charCodeAt(0) + 1); }
	
	let c = startCol;
	while (true) {
		yield c;
		if (c.length === 1) {
			c = (c < 'Z')? nextChar(c[0]) : 'AA';
		} else {
			var ch = nextChar(c[1]);
			c = (ch > 'Z')? nextChar(c[0])+'A' : c[0] + ch;
		}
	}
}

/**
 * @ngdoc object
 * @name readFile
 * @methodOf hsNode.excel
 * @description reads and returns an {@link #/hsLog/hsNode.excelFile excel file}.
 * # Usage
 * <pre>
 * const excel = require('./hsNode.excel');
 * const excelFile = excel.excelFile('./aFile.xlsx');
 * </pre>
 * @param {string} name the name of the Excel file to read
 * @returns {Promise} a promise to read the file. Upon resolutions an object of accessor functions is provided:
 * {
 * 	  	{@link hsNode.excelFile#getSheetNames getSheetNames},
 * 		{@link hsNode.excelFile#getTableColumns getTableColumns},
 * 		{@link hsNode.excelFile#getRowsForColumns getRowsForColumns},
 * 		{@link hsNode.excelFile#getTable getTable},
 * 		{@link hsNode.excelFile#nextExcelColIndex nextExcelColIndex},
 * 		{@link hsNode.excelFile#getCellValue getCellValue}
 * }
 */
export function readFile(name:string) { 
	let workbook:any;
	/**
	 * @ngdoc function
	 * @name getSheetNames
	 * @methodOf hsNode.excelFile
	 * @description retrieves sheet names from a file
	 * @returns {[string]} an array of sheet names
	 */
	function getSheetNames() {
		let names = [];
		for (let s in workbook.Sheets) { 
			names.push(s);
		}
		return names;
	}
	
	/**
	 * @ngdoc function
	 * @name getCellValue
     * @methodOf hsNode.excelFile
	 * @description returns the value of a cell, or undefined
	 * @param {object|string} sheet the sheet object or sheet name to retrieve cells from;
	 * @param {string} col the column index ('A',...)
	 * @param {number|string} row index (1,...)
	 * @returns {any} the value of a cell, or undefined
	 */
	function getCellValue(sheet:any, col:string, row:number) {
		if (typeof sheet === 'string') { sheet = workbook.Sheets[sheet]; } 
	    let c:any = '';
		if (sheet[col+row] && sheet[col+row].v!=='') { 
			c = sheet[col+row];
			switch(c.t) {
				case 's': c = c.w.replace(/,/g,';').replace(/[\n\r]+/g,' ').trim(); break;
				case 'n': /* falls through */ 
				default: c = c.w.replace(/,/g,'');
			}
		}
		return c; 
	}
	
	/**
	 * @ngdoc function
	 * @name getCellValues
     * @methodOf hsNode.excelFile
	 * @description *private*
	 * 
	 * **Generator**, yields consecutive cell values over a row
	 * @param {object|string} sheet the sheet object or sheet name to retrieve cells from;
	 * @param {number|char} row the row to iterate over
	 * @param {number | iterable} maxCol the max number of columns to generate;
	 * or an iterable that generates column indices.
	 */
	function* getCellValues(sheet:any, row:number, colIterator:any) {
		for (let col of colIterator) {
			yield getCellValue(sheet, col, row); 
		}
	}
	
	/**
	 * @ngdoc function
	 * @name getConsecutiveColumnNames
     * @methodOf hsNode.excelFile
	 * @description *private*
	 * 
	 * **Generator**, yields consecutive column names as an 
	 * {col, name} object. 
	 * The generator exits when the first empty column name is encountered.
	 * @param {object} sheet the sheet to scan
	 * @param {number} row the row to scan
	 * @param {char =} startCol defaults to 'A'
	 */
	function* getConsecutiveColumnNames(sheet:any, row:number, startCol='A') {
		for (let col of nextExcelColIndex(startCol)) {
			if (!getCellValue(sheet, col, row)) { break; }
			yield {col:col, name:getCellValue(sheet, col, row)}; 
		}
	}

	/**
	 * @ngdoc function
	 * @name getRow
     * @methodOf hsNode.excelFile
	 * @description  *private*
	 * 
	 * returns an array[c] of values from columns that match indices provided `columns`.
	 * @param {object|string} sheet the sheet object or sheet name to retrieve cells from;
	 * @param {number} row the row to iterate over
	 * @param {object} columns a) an array of column names. b) an {from:'A', to:'Z'} object 
	 * @return {[any]} array of column values in the row
	 */
	function getRow(sheet:any, row:number, columns:any) {
		let result = [...getCellValues(sheet, row, columns)];
		return result;
	}

	/**
	 * @function constructCol returns the value of a cell, or undefined
	 * @param {object|string} sheet the sheet object or sheet name to retrieve cells from;
	 * @param {number|char} row index (1,...)
	 * @returns the value of a cell, or undefined
	 */
	function constructCol(sheetName:string, row:number, it:any) {
		let result:{names:string[], sheetName:string, headerRow:number, colIndex:number[]} = {
			names:[],
			sheetName: sheetName,
			headerRow: row,
			colIndex:  []
		};
		for (let col of it) {
			result.names.push(col.name);
			result.colIndex.push(col.col);
		}
		return result;
	}

	/**
	 * @ngdoc function
	 * @name getTableColumns
     * @methodOf hsNode.excelFile
	 * @description getTableColumns retrieves an array of consecutive valid column names.
	 * @param {string} sheetName the sheet object to retrieve cells from
	 * @param {string=} startCol the first column of the table; defaults to 'A'.
	 * @param {number=} row the row to iterate over; defaults to 1.
	 * @returns {array} an array of {col, name} pairs
	 */
	function getTableColumns(sheetName:string, startCol='A', row=1) {
		let sheet = workbook.Sheets[sheetName];
		return constructCol(sheetName, row, getConsecutiveColumnNames(sheet, row, startCol));
	}
	
	/**
	 * @ngdoc function
	 * @name getRowsForColumns
     * @methodOf hsNode.excelFile
	 * @description getRowsForColumns returns a 2D array[r][c] of row values, where the columns match the provided 
	 * columns names. 
	 * @param {object} columns an array of column descriptors. The format is identical to the that 
	 * returned by getTableColumns or getColumnNames.
	 * @param {number=} maxRows if specified, determines the maximum number of rows to scan for. 
	 * If omitted, iteration stops when the first row of empty values is encountered.
	 */
	function getRowsForColumns(columns:any, maxRows=0) {
		if (!columns.sheetName) { throw new Error('illegal columns parameter in getRowsForColumns'); }
		let sheet = workbook.Sheets[columns.sheetName];
		let result = [];
		let row=0; 
		while (true) {
			let newRow = getRow(sheet, row+columns.headerRow+1, columns.colIndex);
			let count = 0;
			for (let c in newRow) { if (newRow[c]) { count++; }}
			row++;
			if (count > 0) { 
				result.push(newRow);	// only return non-empty rows
			} else if (maxRows<=0) { 
				break;  				// if no maxRows specified: break upon first empty row
			}
			if (maxRows>0 && row>=maxRows) { 
				break; 					// if rows exceed maxRows: break;
			}
		}
		return result;
	}
	
	/**
	 * @ngdoc function
	 * @name getTable
     * @methodOf hsNode.excelFile
	 * @description gets a table of values, starting at the startCol and startRow.
	 * The table includes all consecutive columns with valid names, and all consecutive
	 * rows with at least one valid cell value.
	 * @param {string} sheetName the sheet name from which to get the table
	 * @param {string=} startCol determines the left edge of the table; defaults to 'A'
	 * @param {number} startRow determines the top edge of the table; defaults to 1
	 * @returns {object} a tuple of {columns, table} 
	 */
	function getTable(sheetName:string, startCol='A', startRow=1) {
		var columns = getTableColumns(sheetName, startCol, startRow);
		var table   = getRowsForColumns(columns);
		return {columns, table};
	}

	log.debug('reading file ' + name);
	workbook = XLSX.readFile(name);
	return {
		getSheetNames:		getSheetNames,
		getTableColumns:	getTableColumns,
		getRowsForColumns:	getRowsForColumns,
		getTable:			getTable,
		nextExcelColIndex:	nextExcelColIndex,
		getCellValue:		getCellValue		
	};
}

