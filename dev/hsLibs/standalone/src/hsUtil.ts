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
 * @description delay promise for use in Promise.all(param).then(delay(ms)).then(doSomething).
 * `delay` passes the paremeter received from the calling promise down to the following promise.
 * @param number ms the milliseconds to wait before resolving
 * @return a Promise that resolves after `ms` 
 */
export function delay(ms:number)   { 
    return (args:any) => {
        return new Promise((resolve:any) => { 
            setTimeout(() => { resolve(args); }, ms); 
        }); 
    }
}
