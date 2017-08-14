/**
 * @ngdoc overview
 * @name hsNode
 * @description 
 * Utility Modules for use with Node.js
 * ======================================
 * Provides
 * - {@link hsNode.log log}: logging support 
 * - {@link hsNode.date date}: sprintf-style date formatting 
 * - {@link hsNode.excel excel}: reading tables from Excel files 
 * - {@link hsNode.hsLibs hsLibs}: NodeJS module wrapper for hs and hsData libraries 
 * 
 * # Test Status: NodeJS
 * <iframe src='../../libraries/hsNode/tests/index.html' 
 * 		style="border:none; "
 * 		width="130%" height="500px">
 * </iframe> 
 */

const util  = require('util');

/**
 * @ngdoc function
 * @name inspect
 * @methodOf hsNode.hsLibs
 * @description inspects the provided obj using the node utilities inspect function.
 * @param {obejct} obj the object to inspect
 * @param {number} depth the depth-level to report on, or inifinite depth if omitted
 * @param {boolean} color the depth-level to report on, or inifinite depth if omitted
 * @return {string} a color-formatted string representing `obj`
 */
export function inspect(obj:any, depth:number=null, colors=true) {
    return util.inspect(obj, {colors:colors, depth:depth});
}

/**
 * @ngdoc function
 * @name timeout
 * @methodOf hsNode.hsLibs
 * @description timeout promise for use in Promise.race().
 * @param {number} ms the milliseconds to wait before rejecting
 * @return {Promise} a Promise that rejects after `ms` 
 */
export function timeout(ms:number) { return new Promise((resolve, reject) => { setTimeout(reject, ms); }); }

/**
 * @ngdoc function
 * @name delay
 * @methodOf hsNode.hsLibs
 * @description delay promise for use in delay(ms).then(doSomething).
 * @param number ms the milliseconds to wait before resolving
 * @return a Promise that resolves after `ms` 
 */
export function delay(ms:number)   { return new Promise(resolve => { setTimeout(resolve, ms); }); }
