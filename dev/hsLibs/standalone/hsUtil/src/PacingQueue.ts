/**
 * # PacingQueue
 * ensures that a functions in a sequence are not executed faster than a preset minimum delay
 */

 /** */
export class PacingQueue {
    delay:number;
    queue = <any[]>[];
    baseMS = Date.now();
    /**
     * @param delay the minimum number of milliseconds between executions of 
     * two registered functions; defaults to 100;
     */
    constructor(delay=100) {
        this.delay = delay; 
        this.next(this.queue); 
    }
    add(fn: (ms:number)=>any):Promise<any> {
        const promise = new Promise((resolve, reject) => {
            this.queue.push({fn:fn, resolve:resolve, reject:reject, time:Date.now()});
		});
        return promise;
    }

    next(q:any[]) {
        if (q.length > 0) {
            const entry = q.shift();
            entry.resolve(
                entry.fn(Date.now() - entry.time)
                .catch((err:any) => {
                    console.log(`error calling paced function`);
                    console.log(err);
                    console.log(err.stack);
                    entry.reject(err);
                })
            );
        }
        setTimeout(() => this.next(this.queue), this.delay);
    }
}
