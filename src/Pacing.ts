/**
 * ## Helpful Script Timing Support
 * Provides convenience functions that don't depend on specific frameworks or libraries 
 */


/**
 * timeout promise for use in `Promise.race()`.
 * @param {number} ms the milliseconds to wait before rejecting
 * @return {Promise} a Promise that rejects after `ms` 
 */
export function timeout(ms:number):Promise<void> { 
    return new Promise((resolve, reject) => { setTimeout(reject, ms); }); 
}

/**
 * promise-based delay function. Delays execution in a promise chain, passing the parameter 
 * received from the calling promise down to the resolving promise.
 * ```
 * delay(10)(param)
 *    .then(param => {...})
 *    .catch(...)
 * ```
 * or: insert delay within the `then` chain:
 * ```
 * <PromiseLike>
 *    .then(a => { ... return b; })
 *    .then(delay(10))
 *    .then(b => { ... })
 *    .catch(...)
 * ```
 * or as an async/await pattern:
 * ```
 * try {
 *    await <PromiseLike>
 *    ...
 *    await delay(10)
 *    ...
 * } catch(e) {
 *    ...
 * }
 * ```
 * @param number ms the milliseconds to wait before resolving
 * @return a `Promise` that resolves after `ms` 
 */
export function delay(ms:number)   { 
    return <T>(args?:T):Promise<T> => {
        return new Promise((resolve:(args:T)=>void) => { 
            setTimeout(() => { resolve(args); }, ms); 
        }); 
    };
}

/**
 * paces a series of similar function calls to
 * - not occur faster than a preset rate
 * - not issue more unresolved calls then a preset limit
 * 
 * **Usage:** 
 * ```
 * const q = new PacingQueue(100, 10); // 100ms between calls, at most 10 unresolved
 * ...
 * const result = await q.add((ms) => `I have been called after ${ms}ms`;})
 * console.log(result));     // prints: I have been called after 105ms`
 * ```
 */
export class Pace {
    /** max number of concurrent requests being called */
    private maxConcurrent   = -1;
    /** the pace of calls in ms */
    private pace            = 0;      
    /** the earliest time for the next call */
    private waitUntil       = 0;  
    /** number of calls currently waiting in queue */
    private waiting         = 0;  
    /** functions that have been called, but have not resolved yet. */
    private started         = 0;  

    /**
     * @param pace the minimum number of milliseconds between executions of 
     * two registered functions; defaults to 100;
     * @param maxConcurrent the maximum number of concurrent execution calls; defaults to -1 (no limit)
     */
    constructor(pace=100, maxConcurrent=-1) {
        this.pace = pace+5; // add 5ms margin. delay() may trigger a millisecond or two early
        this.maxConcurrent = maxConcurrent;
    }

    /** the pace of calls in ms */
    setPace(ms:number):void { this.pace = ms; }
    /** max number of concurrent requests being called */
    setMaxConcurrent(maxConcurrent:number):void { this.maxConcurrent = maxConcurrent; }
    /** number of functions currently waiting in queue */
    inQueue():number    { return this.waiting; }
    /** functions that have been called, but have not resolved yet. */
    inProgress():number { return this.started; }

    /**
     * adds the function to the queue. After an appropriate time has passed, 
     * the function will be called with the delay in ms as parameter.
     * @param fn 
     * @return a promise that resolved to the result of the function
     */
    async add(fn: (msSinceAdding:number) => any):Promise<any> {
        const addTime = Date.now();
        if (this.waitUntil < addTime) { this.waitUntil = addTime; }
        const diff = Math.max(0, this.waitUntil - addTime);
        this.waitUntil += this.pace + 5;
        this.waiting++;
        await delay(diff)();
        await new Promise(resolve => {
            const waitLoop = () => (this.maxConcurrent < 0 || this.started < this.maxConcurrent)?
                    resolve() : setTimeout(waitLoop, 10);
            waitLoop();
        });
        this.waiting--;
        this.started++;
        const ret = await fn(Date.now()-addTime);
        this.started--;
        return ret;
    }
}

