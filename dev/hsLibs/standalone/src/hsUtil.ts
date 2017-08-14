/**
 * Helpful Script Utility Module
 * ===============
 * Provides convenience functions that don't depend on specific frameworks or libraries 
 */


/**
 * @ngdoc function
 * @name timeout
 * @methodOf hsNode.hsLibs
 * @description timeout promise for use in Promise.race().
 * @param {number} ms the milliseconds to wait before rejecting
 * @return {Promise} a Promise that rejects after `ms` 
 */
export function timeout(ms:number) { 
    return new Promise((resolve, reject) => { setTimeout(reject, ms); }); 
}

/**
 * @ngdoc function
 * @name delay
 * @methodOf hsNode.hsLibs
 * @description delay promise for use in delay(ms).then(doSomething).
 * @param number ms the milliseconds to wait before resolving
 * @return a Promise that resolves after `ms` 
 */
export function delay(ms:number)   { 
    return new Promise(resolve => { setTimeout(resolve, ms); }); 
}
