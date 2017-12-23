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

/** a JSON format data set */
export interface DataSet {
    rows:DataRow[];
    names:ColSpecifier[];   
}

