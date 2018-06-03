/**
 * # Number Formatting Support.
 * 
 * 
 */

/**
 * rounds a number `n` to the specified `d` decimals and returns a string
 */
 export function round(n:number, d:number):string {
     if (isNaN(n)) { return ''; }
     if (n === 0) { return '0'; }
     const exp = Math.round(Math.log10(Math.abs(n)));
     if (exp > d) { return ''+n; }
     const base = Math.pow(10, d-exp);
     return ''+Math.round(n*base)/base;
 }