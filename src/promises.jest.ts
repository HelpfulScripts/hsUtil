import { timeout, delay }   from './promises';
import { Pace }             from './promises';
import { promiseChain }     from './promises';

describe('Promise', () => {

    describe('timeout', () => {
        const wait = 150;
        it(`should fail after ${wait}ms`, () => {
            expect.assertions(2);
            const now = Date.now();

            // rejects after <wait> ms
            return timeout(wait)
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
                return Promise.resolve('abc').then(delay(wait))
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
                return delay(wait)('abc')
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
                console.log(`exec: internal: ${this.end-this.start}, reported: ${reportedMS}`);                    
                return {id: this.id, internalWait: this.end-this.start, reportedWait: reportedMS};
            }
        }
        
        const wait = 100;   // 100ms between calls
        const calls = [0, 1, 2, 3, 4];
    
        const queue = new Pace(); // default is 100
        let results:any[];
    
        // add a call for each element in calls, then wait for all to have beed called.
        beforeAll(() => results = calls.map(i => {
            const test = new Test(i);
            return queue.add(test.exec.bind(test));
            })
        );
    
        test(`calling count`, () => {
            expect(queue.getCallingCount()).toBe(0);
        });
        test(`wait count`, () => {
            expect(queue.getWaitCount()).toBe(5);
        });
        test(`check results`, () => {
            expect.assertions(3*calls.length);
            return Promise.all(
                results.map(async (result:any) => {
                    const r = await result;
                    expect(Math.abs(r.reportedWait-r.internalWait)).toBeLessThan(2);
                    expect(r.internalWait).toBeGreaterThanOrEqual(r.id*wait);
                    expect(r.internalWait).toBeLessThanOrEqual(r.id*wait+50);
                }) 
            );
        });
    });

    describe('promiseChain', () => {
        type callResult = {
            ms: number,
            at: number
        };
        
        function doDelay(ms:number) {
            return (result:callResult[]): Promise<callResult> => 
                delay(ms)().then(() => { return {ms:ms, at:Date.now() }; });
        }
        
        const delays = [1000, 10, 1];
        
        it('should not resolve in sequence of array: 1000, 10, 1', () => {
            expect.assertions(6);
            return Promise.all(delays.map(d => doDelay(d)([])))
                .then((res:callResult[]) => Promise.all([
                    expect(res[0].ms).toEqual(1000),
                    expect(res[0].at).toBeGreaterThan(res[1].at),
                    expect(res[0].at).toBeGreaterThan(res[2].at),
                    expect(res[1].ms).toEqual(10),
                    expect(res[1].at).toBeGreaterThan(res[2].at),
                    expect(res[2].ms).toEqual(1),
                ]));
        });
        it('should resolve in sequence of array: 1000, 10, 1', () => {
            expect.assertions(6);
            return promiseChain(delays.map(d => doDelay(d)))  // start from []
                .then((res:callResult[]) => Promise.all([
                    expect(res[0].ms).toEqual(1000),
                    expect(res[0].at).toBeLessThanOrEqual(res[1].at),
                    expect(res[0].at).toBeLessThanOrEqual(res[2].at),
                    expect(res[1].ms).toEqual(10),
                    expect(res[1].at).toBeLessThanOrEqual(res[2].at),
                    expect(res[2].ms).toEqual(1),
                ]));
        });
    });
});

