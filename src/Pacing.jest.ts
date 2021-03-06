import * as tp   from './Pacing';


const callBusy  = 200;  // duration of call in ms

class Test {
    start:number;
    end: number;
    id: number;
    constructor(id:number) { 
        this.start = Date.now(); 
        this.id = id;
    }
    async exec(reportedMS:number):Promise<any> { 
        this.end   = Date.now(); 
        // console.log(`exec #${this.id}: internal: ${this.end-this.start}ms, reported: ${reportedMS}ms`);  
        const result = {
            id: this.id, 
            internalWait: this.end-this.start, 
            completedWait: 0,
            reportedWait: reportedMS
        };
        await tp.delay(callBusy)();
        // .then(() => {
            result.completedWait = Date.now()-this.start;
            // console.log(`done #${this.id}: internal: ${result.internalWait}ms, reported: ${reportedMS}ms, completed: ${result.completedWait}ms`);                    
            return result;
        // });
    }
}

describe('Promise', () => {

    describe('timeout', () => {
        const wait = 150;
        it(`should fail after ${wait}ms`, () => {
            expect.assertions(2);
            const now = Date.now();

            // rejects after <wait> ms
            return tp.timeout(wait)
            .then(() => { throw `unexpected 'then' call`; })
            .catch(() => Promise.all([
                expect(Math.abs(Date.now()-now)).toBeGreaterThanOrEqual(wait-10),
                expect(Math.abs(Date.now()-now)).toBeLessThan(wait+50),
            ]));
        });
    });

    describe('delay', () => {
        const wait = 150;
        describe('within then call', () => {
            it(`should resolve after ${wait}ms`, () => {
                expect.assertions(3);
                const now = Date.now();

                // resolves after <wait> ms
                return Promise.resolve('abc').then(tp.delay(wait))
                .then(res => Promise.all([
                    expect(Math.abs(Date.now()-now)).toBeGreaterThanOrEqual(wait-2),
                    expect(Math.abs(Date.now()-now)).toBeLessThan(wait+50),
                    expect(res).toEqual('abc')
                ]))
                .catch(err => { throw `unexpected 'reject' call: ${err}`; });
            });
        });
        describe('As initial promise', () => {
            it(`should resolve after ${wait}ms`, () => {
                expect.assertions(3);
                const now = Date.now();

                // resolves after <wait> ms
                return tp.delay(wait)('abc')
                .then(res => Promise.all([
                    expect(Math.abs(Date.now()-now)).toBeGreaterThanOrEqual(wait-2),
                    expect(Math.abs(Date.now()-now)).toBeLessThan(wait+50),
                    expect(res).toEqual('abc')
                ]))
                .catch(err => { throw `unexpected 'reject' call: ${err}`; });
            });
        });
    });

    describe('Pace', () => {
        describe('keyless', () => {
            const wait      = 25;   // ms min delay between calls
            const calls = [0, 1, 2, 3, 4];

            /* 
                0: burst #0 #1 #2 #3 #4 #5
                0: execute #0, 1 active for 200ms, 
                25: delayed #1, 2 active for 200ms
                50: delayed #2, 3 active for 200ms
                75: delayed #3 -> capped
            100: delayed #4 -> capped
            200: #0 done, 2 active
            200-210: execute #3, 3 active
            225: #1 done, 2 active
            225-235: execute #4, 3 active
            250: #2 done, 2 active
            275: #3 done, 1 active
            425-435: #4 done, 0 active

            #0: internal 40ms, completed 244ms
            #1: internal 27ms, completed 235ms
            #2: internal 56ms, completed 263ms
            #3: internal 222ms, completed 428ms
            #4: internal 225ms, completed 432ms
            */
        
            const queue = new tp.Pace({pace:wait, maxConcurrent:3});
            queue.setPace(wait);
            queue.setMaxConcurrent(3);
            let results:any[];
        
            // add a call for each element in calls, then wait for all to have beed called.
            beforeAll(() => results = calls.map(i => {
                const test = new Test(i);
                return queue.add(test.exec.bind(test));
                })
            );
        
            test(`in progress`, () => {
                expect(queue.inProgress()).toBe(0);
            });
            test(`waiting`, () => {
                expect(queue.inQueue()).toBe(calls.length);
            });
            test(`check results`, () => {
                expect.assertions(4*calls.length);
                return Promise.all(
                    results.map(async (result:any) => {
                        const r = await result;
                        expect(Math.abs(r.reportedWait-r.internalWait)).toBeLessThan(3);
                        if (r.id===0) {
                            expect(r.internalWait).toBeGreaterThanOrEqual(0);
                            expect(r.internalWait).toBeLessThanOrEqual(45);
                            expect(r.completedWait).toBeLessThanOrEqual(callBusy+50);
                        } else if (r.id<3) {
                            expect(r.internalWait).toBeGreaterThanOrEqual((r.id-1)*wait);
                            expect(r.internalWait).toBeLessThanOrEqual((r.id+1)*wait+10);
                            expect(r.completedWait).toBeLessThanOrEqual(callBusy+(r.id+1)*wait+20);
                        } else {
                            expect(r.internalWait).toBeGreaterThanOrEqual(callBusy);
                            expect(r.internalWait).toBeLessThanOrEqual(callBusy+100);
                            expect(r.completedWait).toBeLessThanOrEqual(2*callBusy+100);
                        }
                        return r;
                    }) 
                );
            });
        });
        describe('keyed', () => {
            const wait      = 25;   // ms min delay between calls
            const callBusy  = 200;  // duration of call in ms
            const calls = [0, 1, 2, 3, 4];
            const len = Math.floor(calls.length / 2);

            const queue = new tp.Pace({pace:wait, maxConcurrent:3});
            let results:any[];
        
            // add a call for each element in calls, then wait for all to have beed called.
            beforeAll(() => results = calls.map(i => {
                const test = new Test(i);
                return queue.add(test.exec.bind(test), ['keya', 'keyb'][i%2]);
                })
            );
        
            test(`in progress`, () => {
                expect(queue.inProgress()).toBe(0);
            });
            test(`waiting`, () => {
                expect(queue.inQueue()).toBe(len);
            });
            test(`check results`, () => {
                expect.assertions(4*len);
                return Promise.all(
                    results.map(async (result:any, i:number) => {
                        if (i===3 || i===4) {
                            const r = await result;
                            expect(Math.abs(r.reportedWait-r.internalWait)).toBeLessThan(3);
                            if (r.id===0) {
                                expect(r.internalWait).toBeGreaterThanOrEqual(0);
                                expect(r.internalWait).toBeLessThanOrEqual(45);
                                expect(r.completedWait).toBeLessThanOrEqual(callBusy+50);
                            } else if (r.id<3) {
                                expect(r.internalWait).toBeGreaterThanOrEqual((r.id-1)*wait);
                                expect(r.internalWait).toBeLessThanOrEqual((r.id+1)*wait+10);
                                expect(r.completedWait).toBeLessThanOrEqual(callBusy+(r.id+1)*wait+20);
                            } else {
                                expect(r.internalWait).toBeGreaterThanOrEqual(50);
                                expect(r.internalWait).toBeLessThanOrEqual(callBusy+100);
                                expect(r.completedWait).toBeLessThanOrEqual(2*callBusy+100);
                            }
                            return r;
                        } else {
                            return Promise.resolve();
                        }
                    }) 
                );
            });
        });
    });
});

