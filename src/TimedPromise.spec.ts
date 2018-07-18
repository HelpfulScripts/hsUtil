import { timeout, delay } from './TimedPromise';
import { o }              from './mithril';

o.spec("node", () => {
    let reject: any; 
    let resolve: any;

    o.spec("timeout", () => {
        o.beforeEach((done:any) => { 
            reject = o.spy();
            resolve = o.spy();
            timeout(100)
                .then(resolve)
                .catch(reject);
            setTimeout(done, 101);
        });
        
        o('should fail after 100ms', (done:any) => {
            o(resolve.callCount).equals(0);
            o(reject.callCount).notEquals(0);
            done();
        });
    });

    o.spec("delay", () => {
        o.beforeEach((done:any) => { 
            reject = o.spy();
            resolve = o.spy();
            Promise.resolve()
                .then(delay(100))
                .then(resolve)
                .catch(reject);
            setTimeout(done, 101);
        });
        
        o('should resolve after 100ms', (done:any) => {
            o(resolve.callCount).notEquals(0);
            o(reject.callCount).equals(0);
            done();
        });
    });
});
