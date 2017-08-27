/**
 * Creates a checksum on a string.
 * Adapted from https://stackoverflow.com/questions/811195/fast-open-source-checksum-for-small-strings
 */

 /** 
  * fast implementation for short strings (20-500 chars)
  */
 export function shortCheckSum(s:string):string {
    var chk = 0x12345678;
    var len = s.length;
    for (var i = 0; i < len; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
 }