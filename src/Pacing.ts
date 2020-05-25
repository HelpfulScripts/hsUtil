/**
 * ## Helpful Script Timing Support
 * Provides convenience functions that don't depend on specific frameworks or libraries 
 */
import { Log }  from './log'; const log = new Log('Pacing');


/**
 * timeout promise for use in `Promise.race()`.
 * @param {number} ms the milliseconds to wait before rejecting
 * @param `rest` array of remaining parameters that will be passed into the promise rejection
 * @return {Promise} a Promise that rejects after `ms` 
 */
export function timeout(ms:number, ...rest:any[]):Promise<void> { 
    return new Promise((resolve, reject) => { setTimeout(reject, ms, ...rest); }); 
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
 * - wait for a `collectionPeriod` before executing the call. During this period a new call with the 
 * same key will kick the call back to the end of the queue. This mechanism resolves
 * a series of repeated calls to the same resource into only the last call.
 * 
 * <p>
 * **Usage:** 
 * ```
 * const q = new PacingQueue({pace:100, maxConcurrent:10}); // 100ms between calls, at most 10 unresolved
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
    /** the number of items waiting in queue */
    private waiting         = 0;
    /** functions that have been called, but have not resolved yet. */
    private started         = 0;  
    /** the queue holding callback `Items` */
    private queue = <{[key:string]:Item}>{};

    /** 
     * tests if a new call can be issued.
     * @return `true` if `maxConcurrent` is disabled, or fewer than the allowed calls have been issued 
     */
    public isAllowed():boolean { return this.maxConcurrent < 0 || this.started < this.maxConcurrent; }

    /** 
     * time in ms to wait with issuing the `CallFunction`. During this time, 
     * a new `CallFunction` call for the same `key` will replace the previous one. This mechanism resolves
     * a series of repeated calls to the same resource into only the last call. 
     * Specify <= 0 to disable.
     */
    public collectionPeriod = 0;

    /**
     * @param pace the minimum number of milliseconds between successive execution calls; defaults to 100.
     * @param maxConcurrent the maximum number of concurrent execution calls; defaults to -1 (no limit).
     * @param collectionPeriod time in ms to wait with issuing each execution call; defaults to 0.
     */
    constructor({pace=100, maxConcurrent=-1, collectionPeriod=0}) {
        this.pace = pace; 
        this.maxConcurrent = maxConcurrent;
        this.collectionPeriod = collectionPeriod;
    }

    /** the pace of calls in ms */
    public setPace(ms:number):void { this.pace = ms; }
    /** max number of concurrent requests being called */
    public setMaxConcurrent(maxConcurrent:number):void { this.maxConcurrent = maxConcurrent; }
    /** number of functions currently waiting in queue */
    public inQueue():number    { return this.waiting; }
    /** functions that have been called, but have not resolved yet. */
    public inProgress():number { return this.started; }

    /**
     * adds the function to the queue. After an appropriate time has passed, 
     * the function will be called with the delay in ms as parameter.
     * @param fn 
     * @return a promise that resolved to the result of the function
     */
    async add(fn: CallFunction, key?:string):Promise<any> {
        const now = new Date().getTime();
        const callTime = now + Math.max(this.collectionPeriod, this.waitUntil);
        this.waitUntil += this.pace;
        
        let item:Item;
        if (key && this.queue[key]) {   // if key exists: push timer to end of queue
            item = this.queue[key];
            clearTimeout(item.timer);
            item.fn = fn;
            item.added = now;
        } else {
            key = key || `${now}-${Math.floor(Math.random()*100000)}`;
            item = {fn:fn, added:now, pace:this, key:key};
            this.queue[key] = item;
            this.waiting++;
        }
    
        return this.resolveItem(item, callTime - now)
    }

    private resolveItem(item:Item, waitTime:number) {
        return new Promise((resolve, reject) => {
            const execute = async (_item:Item) => { try {
                const key = _item.key;
                delete _item.pace.queue[key];                   // remove item from queue
                _item.pace.waiting--;
                await belowConcurrentLimit(_item.pace);         // wait for current calls to be fewer than maxConcurrent
                _item.pace.started++;
                const actualDelay = Date.now()-_item.added;
                const ret = await _item.fn(actualDelay);        // issue CallFunction
                _item.pace.started--;
                resolve(ret);                                   // return result of call
            } catch(e) {
                _item.pace.started--;
                reject(e);                                      // report error during call
            }}
    
            // set timer to end of queue
            item.timer = setTimeout(execute, waitTime, item);
        });
    }
}


function belowConcurrentLimit(pace:Pace):Promise<void> {
    return new Promise(release => {
        const waitLoop = () => pace.isAllowed()? release() : setTimeout(waitLoop, 10);
        waitLoop();
    });
}



interface CallFunction { (msSinceAdding:number):any; }

interface Item {
    fn:     CallFunction; 
    added:  number; 
    timer?: NodeJS.Timeout;
    pace:   Pace;
    key:    string;
}
