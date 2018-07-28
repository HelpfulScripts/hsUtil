import { timeout, delay } from './TimedPromise';

describe('node', () => {
    // beforeEach(() => { jest.useFakeTimers(); });

    describe('timeout', () => {
        it('should fail after 100ms', () => {
            // expect.assertions(1);
            jest.useFakeTimers();

            // rejects after 100ms
            const d = timeout(100);
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);

            jest.runOnlyPendingTimers();
            expect(d).rejects.toBe(undefined);
        });
    });

    describe('delay', () => {
        it('should resolve after 100ms', () => {
            // expect.assertions(1);
            jest.useFakeTimers();

            // resolves after 100 ms
            const d = Promise.resolve('abc').then(delay(100));
            
            jest.runOnlyPendingTimers();
            expect(d).resolves.toBe('abc');
        });
    });
});
