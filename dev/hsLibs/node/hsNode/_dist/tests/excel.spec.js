"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const TEST_FILE = '../example/test.xlsx';
describe("hsExcel", function () {
    it('should have hsExcel defined', function () {
        expect(_1.hsExcel).toBeDefined();
    });
    describe("test file", function () {
        const NAME = TEST_FILE;
        const SHEET = 'Closed';
        let file;
        beforeEach(function () {
            file = _1.hsExcel.readFile(__dirname + '/' + NAME);
        });
        it('should have read ' + NAME, function () {
            expect(file).toBeDefined();
        });
        describe('sheets', function () {
            let sheets;
            beforeEach(function () {
                sheets = file.getSheetNames();
            });
            it('should have 2 sheets', function () {
                expect(sheets.length).toBe(2);
            });
            it(`should have sheet "${SHEET}"`, function () {
                expect(sheets.indexOf(SHEET)).toBe(1);
            });
        });
        describe('getCellValue', function () {
            it(`should have cell value`, function () {
                expect(file.getCellValue(SHEET, 'B', 5)).toBe('Ringo');
            });
        });
        describe('header row', function () {
            it('should have a column name "Topic" on 4th position', function () {
                let columns = file.getTableColumns(SHEET, 'A', 1);
                expect(columns.names[2]).toBe('Topic');
            });
            it('should accept string as row number', function () {
                let columns = file.getTableColumns(SHEET, 'A', "1");
                expect(columns.names[2]).toBe('Topic');
            });
        });
        describe('getRowsForColumns', function () {
            it('should fail for illegal collumns', function () {
                function noSheet() {
                    file.getRowsForColumns({});
                }
                expect(noSheet).toThrowError('illegal columns parameter in getRowsForColumns');
            });
            it('should return maxRows', function () {
                let columns = file.getTableColumns(SHEET, 'A', 1);
                let rows = file.getRowsForColumns(columns, 1);
                expect(rows.length).toBe(1);
            });
            it('should return less than maxRows=10', function () {
                let columns = file.getTableColumns(SHEET, 'A', 1);
                let rows = file.getRowsForColumns(columns, 10);
                expect(rows.length).toBe(4);
            });
        });
        describe('table rows', function () {
            let columns;
            let rows;
            beforeEach(function () {
                columns = file.getTableColumns(SHEET, 'A', 1);
                rows = file.getRowsForColumns(columns);
            });
            it('should have 4 rows', function () {
                expect(rows.length).toBe(4);
            });
            it('should have "Start" value in 4th row', function () {
                let col = columns.names.indexOf('Start');
                expect(col).toBe(3);
                expect(rows[3][col]).toBe('03/01/14');
            });
        });
        describe('entire table', function () {
            it('should have 5 columns', function () {
                let { columns } = file.getTable(SHEET, 'A', 1);
                expect(columns.names.length).toBe(5);
            });
            it('should have 4 rows', function () {
                let { table } = file.getTable(SHEET, 'A', 1);
                expect(table.length).toBe(4);
            });
        });
        describe('nextExcelColIndex', function () {
            function nextIndex(startCol) {
                const gen = _1.hsExcel.nextExcelColIndex(startCol);
                gen.next();
                return gen.next().value;
            }
            it("should produce column 'N' after column 'M'", function () {
                expect(nextIndex('M')).toBe('N');
            });
            it("should produce column 'AA' after column 'Z'", function () {
                expect(nextIndex('Z')).toBe('AA');
            });
            it("should produce column 'BA' after column 'AZ'", function () {
                expect(nextIndex('AZ')).toBe('BA');
            });
            it("should produce column 'BN' after column 'BM'", function () {
                expect(nextIndex('BM')).toBe('BN');
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGNlbC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTZCO0FBRTdCLE1BQU0sU0FBUyxHQUFHLHNCQUFzQixDQUFDO0FBRXpDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDbkIsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxVQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxXQUFXLEVBQUU7UUFDckIsTUFBTSxJQUFJLEdBQUksU0FBUyxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLElBQVEsQ0FBQztRQUViLFVBQVUsQ0FBQztZQUNWLElBQUksR0FBRyxVQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsbUJBQW1CLEdBQUMsSUFBSSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxNQUFVLENBQUM7WUFFZixVQUFVLENBQUM7Z0JBQ1YsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsc0JBQXNCLEtBQUssR0FBRyxFQUFFO2dCQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFD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