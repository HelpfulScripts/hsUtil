export declare function nextExcelColIndex(startCol?: string): IterableIterator<string>;
export declare function readFile(name: string): {
    getSheetNames: () => string[];
    getTableColumns: (sheetName: string, startCol?: string, row?: number) => {
        names: string[];
        sheetName: string;
        headerRow: number;
        colIndex: number[];
    };
    getRowsForColumns: (columns: any, maxRows?: number) => any[][];
    getTable: (sheetName: string, startCol?: string, startRow?: number) => {
        columns: {
            names: string[];
            sheetName: string;
            headerRow: number;
            colIndex: number[];
        };
        table: any[][];
    };
    nextExcelColIndex: (startCol?: string) => IterableIterator<string>;
    getCellValue: (sheet: any, col: string, row: number) => any;
};
