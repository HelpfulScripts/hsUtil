/**
 * # PacingQueue
 * ensures that a functions in a sequence are not executed faster than a preset minimum delay
 */

 /** */
export class PacingQueue {
    delayMS:number;
    queue = <any[]>[];
    baseMS = Date.now();
    /**
     * @param delay the minimum number of milliseconds between executions of 
     * two registered functions; defaults to 100;
     */
    constructor(delayMS=100) {
        this.delayMS = delayMS; 
        this.next(this.queue); 
    }

    private nextTimeout() {
        setTimeout(() => this.next(this.queue), this.delayMS);
    }

    add(fn: (msSinceAdding:number) => any):Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.queue.length === 0) { this.nextTimeout(); }
            this.queue.push({fn:fn, resolve:resolve, reject:reject, time:Date.now()});
		});
    }

    next(q:any[]) {
        if (q.length > 0) {
            const entry = q.shift();
            entry.resolve(
                entry.fn(Date.now() - entry.time)   // call the registered function with the actual delay 
                .catch((err:any) => {
                    console.log(`error calling paced function: ${err}`);
                    console.log(err.stack);
                    throw err;
                })
            );
            this.nextTimeout();
        }
    }
}
