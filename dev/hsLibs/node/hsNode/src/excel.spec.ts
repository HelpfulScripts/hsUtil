import { hsExcel } from './';

const TEST_FILE = '../example/test.xlsx';

describe("hsExcel", function() {
	it('should have hsExcel defined', function() {
		expect(hsExcel).toBeDefined();
	});
  
	describe("test file", function() {
		const NAME  = TEST_FILE;
		const SHEET = 'Closed';
		let file:any;
		
		beforeEach(function() {
			file = hsExcel.readFile(__dirname+'/'+NAME);
		});
		
		it('should have read '+NAME, function() {
			expect(file).toBeDefined();
		});	
		
		describe('sheets', function() {
			let sheets:any;
			
			beforeEach(function() { 
				sheets = file.getSheetNames(); 
			});
			
			it('should have 2 sheets', function() {
				expect(sheets.length).toBe(2);
			});
			
			it(`should have sheet "${SHEET}"`, function() {
				expect(sheets.indexOf(SHEET)).toBe(1);
			});			
		});
		
		describe('getCellValue', function() {
			it(`should have cell value`, function() {
				expect(file.getCellValue(SHEET, 'B', 5)).toBe('Ringo');
			});			
		});
		
		describe('header row', function() {
			it('should have a column name "Topic" on 4th position', function() {
				let columns = file.getTableColumns(SHEET, 'A', 1);
				expect(columns.names[2]).toBe('Topic');
			});
			
			it('should accept string as row number', function() {
				let columns = file.getTableColumns(SHEET, 'A', "1");
				expect(columns.names[2]).toBe('Topic'); 
			});
		}); 
		
		describe('getRowsForTable', function() {
			it('should fail for illegal collumns', function() {
				function noSheet() {
					file.getRowsForTable({});
				}
				expect(noSheet).toThrowError('illegal table parameter in getRowsForTable');
			});
			
			it('should return maxRows', function() {
				let columns = file.getTableColumns(SHEET, 'A', 1);
				let rows = file.getRowsForTable(columns, 1);
				expect(rows.length).toBe(1);
			});
			
			it('should return less than maxRows=10', function() {
				let columns = file.getTableColumns(SHEET, 'A', 1);
				let rows = file.getRowsForTable(columns, 10);
				expect(rows.length).toBe(4);
			});
		});
		
		describe('table rows', function() {
			let columns:any;
			let rows:any;
			
			beforeEach(function() { 
				columns = file.getTableColumns(SHEET, 'A', 1);
				rows = file.getRowsForTable(columns);
			});
			
			it('should have 4 rows', function() {
				expect(rows.length).toBe(4);
			});
			
			it('should have "Start" value in 4th row', function() {
				let col = columns.names.indexOf('Start');
				expect(col).toBe(3);
				expect(rows[3][col]).toBe('03/01/14');
			});
		});
		
		describe('entire table', function() {			
			it('should have 5 columns', function() {
				let {columns} = file.getTable(SHEET, 'A', 1);
				expect(columns.names.length).toBe(5);
			});
			
			it('should have 4 rows', function() {
				let {table} = file.getTable(SHEET, 'A', 1);
				expect(table.length).toBe(4);
			});
		});
		
		describe('nextExcelColIndex', function() {
			function nextIndex(startCol:string) { 
				const gen = file.nextExcelColIndex(startCol);
				gen.next(); // reproduces startCol;
				return gen.next().value;
			}
			
			it("should produce column 'N' after column 'M'", function() {
				expect(nextIndex('M')).toBe('N');
			});

			it("should produce column 'AA' after column 'Z'", function() {
				expect(nextIndex('Z')).toBe('AA');
			});

			it("should produce column 'BA' after column 'AZ'", function() {
				expect(nextIndex('AZ')).toBe('BA');
			});

			it("should produce column 'BN' after column 'BM'", function() {
				expect(nextIndex('BM')).toBe('BN');
			});
		});
	});	
});
