import { timeout, delay }   from './TimedPromise';
import { Pace }             from './TimedPromise';

describe('TimedPromise', () => {

    describe('timeout', () => {
        const wait = 150;
        it(`should fail after ${wait}ms`, () => {
            expect.assertions(2);
            const now = Date.now();

            // rejects after <wait> ms
            return timeout(wait)
            .then(() => { throw `unexpected 'then' call`; })
            .catch(() => Promise.all([
                expect(Math.abs(Date.now()-now)).toBeGreaterThanOrEqual(wait),
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
                return Promise.resolve('abc').then(delay(wait))
                .then(res => Promise.all([
                    expect(Math.abs(Date.now()-now)).toBeGreaterThanOrEqual(wait),
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
                return delay(wait)('abc')
                .then(res => Promise.all([
                    expect(Math.abs(Date.now()-now)).toBeGreaterThanOrEqual(wait),
                    expect(Math.abs(Date.now()-now)).toBeLessThan(wait+50),
                    expect(res).toEqual('abc')
                ]))
                .catch(err => { throw `unexpected 'reject' call: ${err}`; });
            });
        });
    });

    describe('Pace', () => {
        class Test {
            start:number;
            end: number;
            id: number;
            constructor(id:number) { 
                this.start = Date.now(); 
                this.id = id;
            }
            exec(reportedMS:number):any { 
                this.end   = Date.now(); 
                return {id: this.id, internalWait: this.end-this.start, reportedWait: reportedMS};
            }
        }
        
        const wait = 100;   // 100ms between calls
        const calls = [0, 1, 2, 3, 4];
    
        const queue = new Pace(); // default is 100
        let results;
    
        // add a call for each element in calls, then wait for all to have beed called.
        beforeAll(() => results = Promise.all(calls.map(i => {
            const test = new Test(i);
            return queue.add(test.exec.bind(test));
            }))
        );
    
        test(`check results`, () => {
            expect.assertions(3*calls.length);
            return results.then(res => res.map(r => {
                expect(Math.abs(r.reportedWait-r.internalWait)).toBeLessThan(2);
                expect(r.internalWait).toBeGreaterThanOrEqual(r.id*wait);
                expect(r.internalWait).toBeLessThanOrEqual(r.id*wait+50);
            }));
        });
    });
});


