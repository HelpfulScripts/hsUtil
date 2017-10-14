/**
 * 
 */


export type ColIndex = number|string;

export type DataVal = number|string|Date;

export type DataRow = DataVal[];

/** */
export type DataSet = DataRow[];

interface TypeStruct { type: string; count: number;};

interface MetaStruct {
    name:       string;
    accessed:   boolean;
    column:     number;
    cast:       boolean;
    types:      TypeStruct[];
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
    private data: DataSet;
    private meta: MetaStruct[];

    private getMeta(col:ColIndex):MetaStruct { 
        if (!this.meta[col]) { return undefined; }
       	this.meta[col].accessed = true;
        return this.meta[col]; 
    }

    /**
     * @description returns the column index of the specified column. 
     * `col` can be either an index or a name.
     * @param column the data column, name or index, for which to return the index. 
     * @return the column number or `undefined`.
     */
    public colNumber(col:ColIndex) {
        var m = this.getMeta(col);
        if (!m) { return undefined; }
        m.accessed = true; 
        return m.column; 
    }
    
    private addColumn(newCol:string) {
        if (!this.meta) { this.meta = []; }
        let m = this.meta[newCol];
        if (m === undefined) { 
            m = this.meta[newCol] = <MetaStruct>{};
            m.name   = newCol; 
            m.column = this.meta.length-1;
            this.meta.push(m);           // access name by both column name and index
        }
        m.cast 	   = false;         // has not been cast yet
        m.accessed = false;         // has not been accessed yet
        return this.meta.length-1;
    }
    
    /**
     * @param {number|string} col an object of series-names:series-values-array pairs. 
     * @return {Array} an array sorted by frequency of encountered types in column `name` of `data`
     */
    private findTypes(col:ColIndex):TypeStruct[] {
        const m = this.getMeta(col);
        const types:TypeStruct[] = Object.keys(Data.type).map((t:string) => 
            { return { type: t, count: 0 }; });
        types.forEach((s:TypeStruct) => types[s.type] = s);
        for (let v of this.allRows(col)) {
            const t = this.findType(v);
            if (t !== null) { types[t].count++; }
        }
        types.sort(function(a:TypeStruct, b:TypeStruct) { 
            if (a.type==='currency'&&a.count>0) { return -1; }
            if (b.type==='currency'&&b.count>0) { return 1; }
            return b.count - a.count;
        });
        return m.types = types;
    }

    /**
     * @param sample .
     * @returns the type ('real', 'date', 'percent', 'nominal') corresponding to the sample
     * @description determines the data type. Supported types are <pre>
     * 'date':    sample represents a Date, either as a Date object or a String 
     * 'number':  sample represents a number
     * 'percent': sample represents a percentage (special case of a real number)
     * 'nominal': sample represents a nominal (ordinal or categorical) value
     * </pre>
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

    public getType(col:ColIndex) { 
        return this.getMeta(col).types[0].type;
    }

    /**
     * Adds `data` to the existing data set. If data has previously been set, 
     * `data` will be added to the end of the list if all `names`  match thos of the 
     * existing set.
     * @param data the data to add
     * @param names an array of names that match the columns
     */
    public add(data:DataSet, names:string[]) {
        function allNamesSet() {
            return this.meta.every((m:MetaStruct) => names.indexOf(m.name)>0);
        }

        if (names.length !== data[0].length) {
            console.log(`Data.add: number of names ${names.length} does not equal numer of columns ${data[0].length}`);
            return;
        }
        if (allNamesSet()) { // then add data to existing set
            data.forEach((d:DataRow) => this.data.push(d));
        } else {             // else replace all data
            this.meta = undefined;
            this.data = data;
            names.forEach((col:string) => this.addColumn(col));
        }
        names.forEach((col:string) => {
            const type = this.findTypes(col)[0].type;
            const c = this.colNumber(col);
            this.data.forEach((r:DataRow) => r[c] = this.castData(type, r[c]));
        });
    }

    public * allRows(column:ColIndex):Iterable<DataVal> {
        const c = this.colNumber(column);
        for (let r=0; r<this.data.length; r++) {
            yield this.data[r][c];
        }
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
    private castData(type:string, val:DataVal):DataVal {
        switch (type) {
            case 'date':    if (val instanceof Date) { return val; }
                            val = this.toDate(val);
                            if (isNaN(val.getTime())) { val = null; }
                            break;
            case 'percent': if (typeof val === 'string') {
                                const num = parseFloat(val);
                                val = (<string>val).endsWith('%')? num/100 : num;
                            } 
                            if (isNaN(<number>val)) { val = null; }
                            break;
            case 'currency':// replace all except 'e/E', '.', '+/-' and digits
            				if (typeof val === 'string') { val = val.replace(/[^eE\+\-\.\d]/g, ''); }            				
            				/* falls through */
            case 'number':  if (typeof val === 'string') { val = parseFloat(val); }
                            if (isNaN(<number>val)) { val = null; }
                            break;
            default:        val = ''+val;
        }
        return val;
     }     
}