import { exec } from './';


describe("cpUtil", () => {
    let cpOut:string, cpErr:string, cpE:string;
    const helper = {
        out: (out:string, err:string) => { cpOut = out; cpErr = err; },
        err: (e:string) => { cpE = e; }
    };

    function call(cmd:string, done:any) {
        exec(cmd)
            .then((result:{out:string, err:string}) => { helper.out(result.out, result.err); done(); })
            .catch((e:string) => { helper.err(e); done(); });
    }

    beforeEach(() => {
        cpE = cpErr = cpOut = undefined;
        spyOn(helper, 'out').and.callThrough();
        spyOn(helper, 'err').and.callThrough();
    });

    describe('valid command', () => {
        beforeEach(done => { call("pwd", done);
//            cp.exec("pwd")
//                .then((result:{out:string, err:string}) => { helper.out(result.out, result.err); done(); })
//                .catch((e:string) => { helper.err(e); done(); });
        });

        it('should execute "pwd" in a shell without error', done => {
            expect(helper.out).toHaveBeenCalled();
            expect(helper.err).not.toHaveBeenCalled();
            done();
        });

        it('should result in path', () => {
            expect(cpOut.trim().endsWith('/hsNode')).toEqual(true);
            expect(cpE).not.toBeDefined();
            expect(cpErr).toBe('');
        });  
    });

    describe('invalid command', () => {
        beforeEach(done => { call("abcd", done);
//            cp.exec("abcd")
//                .then((result:{out:string, err:string}) => { helper.out(result.out, result.err); done(); })
//                .catch((e:string) => { helper.err(e); done(); });
        });

        it('should fail executing "abcd" in a shell', done => {
            expect(helper.out).not.toHaveBeenCalled();
            expect(helper.err).toHaveBeenCalled();
            done();
        });

        it('should result in error', () => {
            expect(cpOut).not.toBeDefined();
            expect(cpErr).not.toBeDefined();
            expect(cpE).toMatch('abcd: command not found');
        });  
    });
});
