/**
 * ## Helpful Script Timing Support
 * Provides convenience functions that don't depend on specific frameworks or libraries 
 */


/**
 * @description timeout promise for use in `Promise.race()`.
 * @param {number} ms the milliseconds to wait before rejecting
 * @return {Promise} a Promise that rejects after `ms` 
 */
export function timeout(ms:number):Promise<void> { 
    return new Promise((resolve, reject) => { setTimeout(reject, ms); }); 
}

/**
 * @description delays a promise, passing the parameter 
 * received from the calling promise down to the resolving promise.
 * 
 * **Usage 1:** a delay within the `then` chain:
 * ```
 * <PromiseLike>
 *    .then(...)
 *    .then(delay(10))
 *    .then(...)
 *    .catch(...)
 * ```
 * **Usage 2:** an initial delay
 * ```
 * delay(10)()
 *    .then(...)
 *    .catch(...)
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
 * @description ensures that function calls in a sequence are not executed faster than a preset minimum delay.
 * 
 * **Usage:** 
 * ```
 * const q = new PacingQueue(100); // 100ms between calls
 * ...
 * q.add((ms) => `I have been called after ${ms}ms`;})
 *    .then((result) => console.log(result));     // prints: I have been called after ***ms`
 * ```
 */
export class Pace {
    private pace:number;      // the pace of calls in ms
    private waitUntil   = 0;  // the earliest time for the next call
    private waitCount   = 0;  // number of calls currently in queue waiting
    private beingCalled = 0;  // registered functiuons that have been called , but have not resolved yet.

    /**
     * @param delay the minimum number of milliseconds between executions of 
     * two registered functions; defaults to 100;
     */
    constructor(pace=100) {
        this.pace = pace+5; // add 5ms margin. delay() may trigger a millisecond or two early
    }

    getWaitCount()    { return this.waitCount; }
    getCallingCount() { return this.beingCalled; }

    /**
     * adds the function to the queue. After an appropriate time has passed, 
     * the function will be called with the delay in ms as parameter.
     * @param fn 
     * @return a promise that resolved to the result of the function
     */
    add(fn: (msSinceAdding:number) => any):Promise<any> {
        const addTime = Date.now();
        if (this.waitUntil < addTime) { this.waitUntil = addTime; }
        const diff = this.waitUntil - addTime;
        this.waitUntil += this.pace + 5;
        this.waitCount++;
        return delay(diff)().then(() => {
            this.waitCount--;
            this.beingCalled++;
            return fn(Date.now()-addTime);
        })
        .then((ret:any) => {
            this.beingCalled--;
            return ret;
        });
    }
}


/**
 * Sequentially calls the provided `tasks` in a `.then()` chain of promises, 
 * guaranteeing the order of execution per index order in the array. 
 * Each task can return a result, or a promise for a result.
 * @param tasks an array of task calls to execute in sequence. Each call will pass the array of results for tasks so far executed.
 * @param initialResult optional initial array to collect the task results.
 */
export function promiseChain<T>(tasks:((results:T[])=>T|Promise<T>)[], initialResult:T[]=[]): Promise<T[]> {
    return tasks.reduce((chain:Promise<T[]>, task:(result:T[])=>T|Promise<T>): Promise<T[]> =>
        // execute a task by chaining it to the previous ones via `.then()`
        chain.then((_results:T[]) => Promise.resolve(task(_results)).then((r:T) => {
            // add the task's result to the `results` array
            _results.push(r);
            return _results;
        })), 
        Promise.resolve(initialResult)
    );
}

