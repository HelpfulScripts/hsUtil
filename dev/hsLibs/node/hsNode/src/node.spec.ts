import { hsNode } from './';

describe("node", () => {
    describe("inspect", () => {
        it('should decompose {a:"yes", b:[1,2,3]}', () => {
            expect(hsNode.inspect({a:"yes", b:[1,2,3]}, null, false)).toEqual("{ a: 'yes', b: [ 1, 2, 3 ] }");
        });
        it('should report in color', () => {
            expect(hsNode.inspect({a:"yes", b:[1,2,3]})).not.toEqual(jasmine.stringMatching("{ a: 'yes', b: [ 1, 2, 3 ] }"));
            expect(hsNode.inspect({a:"yes", b:[1,2,3]})).toEqual(jasmine.stringMatching("'yes'"));
            expect(hsNode.inspect({a:"yes", b:[1,2,3]})).toEqual(jasmine.stringMatching("[ 1, 2, 3 ]"));
        });
        it('should report first level only', () => {
            expect(hsNode.inspect({a:"yes", b:[1,2,3]}, null, false)).toEqual("{ a: 'yes', b: [ 1, 2, 3 ] }");
            expect(hsNode.inspect({a:"yes", b:[1,2,3]}, 0, false)).toEqual("{ a: 'yes', b: [Array] }");
            expect(hsNode.inspect({a:"yes", b:[1,2,3]}, 1, false)).toEqual("{ a: 'yes', b: [ 1, 2, 3 ] }");
        });
    });

    describe("timeout", () => {
        let reject: () => void; 
        let resolve:() => void;
        beforeEach(done => { 
            resolve = jasmine.createSpy("resolve");
            reject = jasmine.createSpy("reject");
            hsNode.timeout(100)
                .then(resolve)
                .catch(reject);
            setTimeout(done, 101);
        });
        
        it('should fail after 100ms', done => {
            expect(resolve).not.toHaveBeenCalled();
            expect(reject).toHaveBeenCalled();
            done();
        });
    });

    describe("delay", () => {
        let reject: () => void; 
        let resolve:() => void;
        beforeEach(done => { 
            resolve = jasmine.createSpy("resolve");
            reject = jasmine.createSpy("reject");
            hsNode.delay(100)
                .then(resolve)
                .catch(reject);
            setTimeout(done, 101);
        });
        
        it('should resolve after 100ms', done => {
            expect(resolve).toHaveBeenCalled();
            expect(reject).not.toHaveBeenCalled();
            done();
        });
    });
});
