/**
 * 
 */


import { Scales }       from './Scale';
import { SeriesDef, SeriesConfig }    from './Series';

/** defines a [min-max] range */
export type NumRange = [number, number];

/** defines a numeric domain that includes all values of a column */
export type NumDomain = [number, number];

/** defines a Date domain that includes all values of a column */
export type DateDomain = [Date, Date];

/** defines a categorical domain that includes all values of a column */
export type NameDomain = string[];

/** defines a generic domain that can be any of the typed domains. */
export type Domain = NumDomain | DateDomain | NameDomain;

/** defines a Column Specifier, either as column name or index in the {@link Data.DataRow `DataRow`} array */
export type ColSpecifier = number|string;

/** a generic data value type, used in the {@link Data.DataRow `DataRow`} array */
export type DataVal = number|string|Date;

/** a single row of column values */
export type DataRow = DataVal[];

/** a row-of-column array of data. Values are accessed as `data[row][column]` */
export type DataRows = DataRow[];

/** 
 * Description of a data set:
 * ```
 * {
 *    names: string[],  // array of names for columns in `rows` 
 *    rows:  DataRows   // row array of columns, accessed as `` 
 * }
 * ```
 */
export type DataSet = {
    names: string[];
    rows:  DataRows;
};

interface TypeStruct { type: string; count: number;};

interface MetaStruct {
    name:       string;         // column name
    column:     number;         // column index
    accessed:   boolean;        // has column data been accessed?
    cast:       boolean;        // has column data been cast 
    types:      TypeStruct[];   // data types, sorted by likelihood
}

export class Data {
    public static type = {
        number:     'number data',
        name:       'name data',
        date:       'date data',
        currency:   'currency data',
        percent:    'percent data',
        nominal:    'nominal data'
    };
    private data: DataRows;
    private meta: MetaStruct[] = [];

    private getMeta(col:ColSpecifier):MetaStruct { 
        if (!this.meta) { this.meta = []; }
        if (!this.meta[col]) { return undefined; }
       	this.meta[col].accessed = true;
        return this.meta[col]; 
    }

    private addColumn(newCol:string):number {
        var m = this.getMeta(newCol);
        if (m === undefined) { 
            m = this.meta[newCol] = <MetaStruct>{};
            m.name   = newCol; 
            m.column = this.meta.length;
            this.meta.push(m);      // access name by both column name and index
        }
        m.cast 	   = false;         // has not been cast yet
        m.accessed = false;         // has not been accessed yet
        return this.meta.length-1;
    }

     
    /**
     * returns the column index of the specified column. 
     * `col` can be either an index or a name.
     * @param column the data column, name or index, for which to return the index. 
     * @return the column number or `undefined`.
     */
    public colNumber(col:ColSpecifier) {
        var m = this.getMeta(col);
        if (!m) { return undefined; }
        else {
            m.accessed = true; 
            return m.column; 
        }
    }
    
    /**
     * returns the column name for the specified column. 
     * `col` can be either an index or a name.
     * @param column the data column, name or index. 
     * @return the column name or `undefined`.
     */
    public colName(col:ColSpecifier) {
        var m = this.getMeta(col);
        if (!m) { return undefined; }
        m.accessed = true; 
        return m.name; 
    }

    /**
     * returns the column type for the specified column. 
     * `col` can be either an index or a name.
     * @param column the data column, name or index. 
     * @return the column type.
     */
    public colType(col:ColSpecifier) { 
        return this.getMeta(col).types[0].type;
    }


    /**
     * Determines the type of data in `col`. An array of counts is created for all
     * encountered types, sorted by descending frequency. THe most likely type in position 0
     * of the array is returned.
     * @param col the index of the column to be typed. 
     * @return the most likely type of data in `col`.
     */
    private findTypes(col:ColSpecifier):string {
        const m = this.getMeta(col);
        const types:TypeStruct[] = [];
        Object.keys(Data.type).forEach((t:string) => {
            const ts = { type: Data.type[t], count: 0 }; 
            types.push(ts);
            types[Data.type[t]] = ts;
        });
        for (let v of this.allRows(col)) {
            const t = this.findType(v);
            if (t !== null) { types[t].count++; }
        }
        types.sort(function(a:TypeStruct, b:TypeStruct) { 
            if (a.type==='currency'&&a.count>0) { return -1; }
            if (b.type==='currency'&&b.count>0) { return 1; }
            return b.count - a.count;
        });
        m.types = types;
        return types[0].type;
    }

    /**
     * @description determines the data type. Supported types are 
     * ```
     * 'date':    sample represents a Date, either as a Date object or a String 
     * 'number':  sample represents a number
     * 'percent': sample represents a percentage (special case of a real number)
     * 'nominal': sample represents a nominal (ordinal or categorical) value
     * ```
     * @param val the value to bve typed.
     * @returns the type ('number', 'date', 'percent', 'nominal', 'currency') corresponding to the sample
     */
    private findType(val:DataVal) {
        if (val && val!=='') {
            if (val instanceof Date) { return Data.type.date; }         // if val is already a date
            if (typeof val === 'number') { return Data.type.number; }   // if val is already a number

            // else: val is a string:
            const strVal = ''+val;
            if (strVal.startsWith('$') && !isNaN(parseFloat(strVal.slice(1)))) { return Data.type.currency; }
            if (!isNaN(this.toDate(val).getTime()))	                           { return Data.type.date; }
            if (val.endsWith('%') && !isNaN(parseFloat(val)))                  { return Data.type.percent; }

            // european large number currency representation: '$dd,ddd[,ddd]'
            if ((/^\$\d{0,2}((,\d\d\d)*)/g).test(val)) { 
                if (!isNaN(parseFloat(val.trim().replace(/[^eE\+\-\.\d]/g, '').replace(/,/g, '')))) { 
                    return Data.type.currency; 
                }
            }
            switch (strVal.toLowerCase()) {
                case "null": break;
                case "#ref!": break;
                default: if (val.length>0) { return Data.type.nominal; }
            }
        }
        return null;
    }    

    /**
     * modifies `domain` to include all values in column `col`.
     * @param col the column name or index 
     * @param domain the 
     */
    private findDomain(col:ColSpecifier, domain:Domain) {
        if (col === undefined) { // use array index as domain
            domain[0] = 0;
            domain[1] = this.data.length-1;
        } else {
            const c = this.colNumber(col);
            const type = this.colType(col);
            this.data.forEach((r:DataRow) => {
                switch(type) {
                    case Data.type.nominal: 
                        const nomDom = <string[]>domain;
                        if (nomDom.indexOf(''+r[c]) < 0) { nomDom.push(''+r[c]); }
                        break;
                    default: 
                        let v:number = <number>r[c];
                        domain[0] = (v<domain[0])? v : domain[0];
                        domain[1] = (v>domain[1])? v : domain[1];
                }
            });
        }
    }

    /** 
     * determines the max ranges each coordinate of each series and auto-sets the domains on the respective scales. 
     */
    public adjustDomains(cfg:SeriesConfig, scales:Scales) {
        let domainDims = 0;
        cfg.series.forEach((s:SeriesDef) => 
            domainDims = Math.max(domainDims,s.cols.length)
        );

        const domains:Domain[] = Array(domainDims).fill(1).map(() => <NumDomain>[1e20, -1e20]);
    
        cfg.series.map((s:SeriesDef) => { // for each series:
            s.cols.forEach((colIdx:ColSpecifier, i:number) => {
                this.findDomain(colIdx, domains[i]);
            });
        });
        scales.primary.x.setAutoDomain(<NumDomain>domains[0]);
        scales.primary.y.setAutoDomain(<NumDomain>domains[1]);
    }

    /**
     * sets `data` to the existing data set. If data has previously been set, 
     * `data` will be added to the end of the list if all `names`  match those of the 
     * existing set. 
     * @param data the data to add
     * @param names an array of names that match the columns
     * @param autoType unless set to false, the method will attempt to determine the 
     * type of data and automatically cast data points to their correct value
     */
    public setData(data:DataRows, names:ColSpecifier[], autoType=true):void {
        this.meta = undefined;
        this.data = data;
        names.forEach((col:string) => this.addColumn(col));
        names.forEach((col:string) => this.findTypes(col));
        this.castData();
    }

    public * allRows(column:ColSpecifier):Iterable<DataVal> {
        const c = this.colNumber(column);
        for (let r=0; r<this.data.length; r++) {
            yield this.data[r][c];
        }
    }

    public getData():DataRows {
        return this.data;
    }

    public castData() {
        this.meta.forEach((c:MetaStruct) => {
            const col = c.column;
            if (!c.cast) {
                this.data.forEach((row:DataRow) => row[col] = this.castVal(c.types[0].type, row[col]));
            }
            c.cast = true;
        });
    }

    /**
     * @param str the string to convert to a data
     * @param limitYear the year below which the century is corrected. Defaults to 1970.
     * @returns a new Date object parsed from `str`.
     * @description returns a new Date object parsed from `str` and corrects for a difference in 
     * interpreting centuries between webkit and mozilla in converting strings to Dates:
     * The string "15/7/03" will convert to Jul 15 1903 in Mozilla and July 15 2003 in Webkit.
     * If `limitYear` is not specified this method uses 1970 as the decision date: 
     * years 00-69 will be interpreted as 2000-2069, years 70-99 as 1970-1999.
     */
    private toDate(val:DataVal, limitYear=1970):Date {
        let d:Date;
        if (val instanceof Date) { d = <Date>val; }
                            else { d = new Date(val); }   
        let yr=d.getFullYear();
        if (yr < 100) { 
            yr += 1900; 
            d.setFullYear( (yr < limitYear)? yr+100 : yr);
        }
        return d;
    }

    /**
     * @param type ['date' | 'percent' | 'real' | _any_] The type to cast into. In case of _any_ - i.e. `type` 
     * does not match any of the previous keywords, no casting occurs.
     * @param sample The value to cast.
     * @returns The result of the cast. 
     * @description Casts the sample to the specified data type.
     */
    private castVal(type:string, val:DataVal):DataVal {
        switch (type) {
            case Data.type.date:    if (val instanceof Date) { return val; }
                            val = this.toDate(val);
                            if (isNaN(val.getTime())) { val = null; }
                            break;
            case Data.type.percent: if (typeof val === 'string') {
                                const num = parseFloat(val);
                                val = (<string>val).endsWith('%')? num/100 : num;
                            } 
                            if (isNaN(<number>val)) { val = null; }
                            break;
            case Data.type.currency:// replace all except 'e/E', '.', '+/-' and digits
            				if (typeof val === 'string') { val = val.replace(/[^eE\+\-\.\d]/g, ''); }            				
            				/* falls through */
            case Data.type.number:  if (typeof val === 'string') { val = parseFloat(val); }
                            if (isNaN(<number>val)) { val = null; }
                            break;
            default:        val = ''+val;
        }
        return val;
     }     
}