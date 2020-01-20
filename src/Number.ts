/**
 * # Number Formatting Support.
 * 
 * 
 */

/**
 * rounds a number `n` to the specified `d` decimals and returns a string
 * @param n the number to round
 * @param d the number of decimal digits to round to; defaults to 0
 */
 export function round(n:number, d=0):string {
    //  if (isNaN(n)) { return ''; }
    //  if (n === 0) { return '0'; }
    //  const exp = Math.round(Math.log10(Math.abs(n)));
    //  if (exp > d) { return ''+n; }
    //  const base = Math.pow(10, d-exp);
    //  return ''+Math.round(n*base)/base;
    const f = Math.pow(10,d);
    const r = Math.round(n*f)/f;
    return ''+r;
 }