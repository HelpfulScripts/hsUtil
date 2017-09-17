"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
describe("hsFSutil", function () {
    let called;
    const dir = __dirname;
    const TEST_DIR = dir + '/../example/';
    function getCalled(done) {
        let result, error;
        let called = {
            resolved: (v) => { result = v; done(); },
            rejected: (v) => { error = v; done(); },
            getResult: () => result,
            getError: () => error
        };
        spyOn(called, 'resolved').and.callThrough();
        spyOn(called, 'rejected').and.callThrough();
        return called;
    }
    describe('pathExists', () => {
        describe(process.cwd(), () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.pathExists(process.cwd()).then(called.resolved).catch(called.rejected);
            });
            it('should exist', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(process.cwd());
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe('./', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.pathExists('./').then(called.resolved).catch(called.rejected);
            });
            it('should exist', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(process.cwd());
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe('/does-not-exists/', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.pathExists('/does-not-exists/').then(called.resolved).catch(called.rejected);
            });
            it('should not exist', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(false);
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
    });
    describe('isFile', () => {
        describe(dir, () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isFile(dir).then(called.resolved).catch(called.rejected);
            });
            it('should not be a file', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(false);
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe('Gruntfile.js', () => {
            let rp;
            beforeEach(done => {
                _1.fsUtil.realPath(dir + '/../../Gruntfile.js')
                    .then((path) => {
                    called = getCalled(done);
                    rp = path;
                    _1.fsUtil.isFile(rp).then(called.resolved).catch(called.rejected);
                });
            });
            it('should be a file', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(rp);
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe('./Gruntfile.js', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isFile('./Gruntfile.js').then(called.resolved).catch(called.rejected);
            });
            it('should be a file', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(process.cwd() + '/Gruntfile.js');
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe('./Gruntfile.js2', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isFile('./Gruntfile.js2').then(called.resolved).catch(called.rejected);
            });
            it('should not be a file an not be rejected', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(false);
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
    });
    describe('isDirectory', () => {
        describe(process.cwd(), () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isDirectory(process.cwd()).then(called.resolved).catch(called.rejected);
            });
            it('should be a directory', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(process.cwd());
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe('./', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isDirectory('./').then(called.resolved).catch(called.rejected);
            });
            it('should be a directory', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(process.cwd());
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe('./Gruntfile.js', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isDirectory('./Gruntfile.js').then(called.resolved).catch(called.rejected);
            });
            it('valid file should not be a directory an not be rejected', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(false);
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe('./Gruntfile.js2', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isDirectory('./Gruntfile.js2').then(called.resolved).catch(called.rejected);
            });
            it('invalid file should not be a directory an not be rejected', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(false);
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
    });
    describe('isLink', () => {
        describe(__dirname, () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isLink(__dirname).then(called.resolved).catch(called.rejected);
            });
            it('should not be a link', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(false);
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe(dir + '/../../node_Modules', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isLink(dir + '/../../node_Modules').then(called.resolved).catch(called.rejected);
            });
            it('should be a link', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(called.resolved).not.toHaveBeenCalledWith(false);
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe(__dirname + '/abc', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.isLink(__dirname + '/abc').then(called.resolved).catch(called.rejected);
            });
            it('should reject for invalid names', function (done) {
                expect(called.resolved).toHaveBeenCalledWith(false);
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
    });
    describe('readDir', () => {
        describe(__dirname, () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.readDir(__dirname).then(called.resolved).catch(called.rejected);
            });
            it('should return list of spec files', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(called.rejected).not.toHaveBeenCalled();
                expect(called.getResult()).toBeDefined();
                expect(called.getResult().length).toBeGreaterThan(6);
                done();
            });
        });
        describe(__dirname + '/abcde', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.readDir(__dirname + '/abcde').then(called.resolved).catch(called.rejected);
            });
            it('should reject', function (done) {
                expect(called.resolved).not.toHaveBeenCalled();
                expect(called.rejected).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('readFile', () => {
        const file1 = TEST_DIR + 'test.xlsx';
        const file2 = TEST_DIR + 'test.xlsx2';
        describe(file1, () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.readFile(file1, false).then(called.resolved).catch(called.rejected);
            });
            it('should read binary file', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(typeof called.getResult()).toBe('object');
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
        describe(file2, () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.readFile(file2, false).then(called.resolved).catch(called.rejected);
            });
            it('should reject', function (done) {
                expect(called.resolved).not.toHaveBeenCalled();
                expect(called.rejected).toHaveBeenCalled();
                expect((called.getError() + '').startsWith('Error: ENOENT: no such file or directory')).toBe(true);
                done();
            });
        });
    });
    describe('readTextFile', () => {
        describe(__dirname + '/fsUtil.spec.js', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.readTextFile(__dirname + '/fsUtil.spec.js').then(called.resolved).catch(called.rejected);
            });
            it('should read text file', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(typeof called.getResult()).toBe('string');
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
        });
    });
    describe('readJsonFile', () => {
        const file = __dirname + '/../../package.json';
        describe(file, () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.readJsonFile(file).then(called.resolved).catch(called.rejected);
            });
            it('should read text file', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(called.rejected).not.toHaveBeenCalled();
                expect(typeof called.getResult()).toBe('object');
                expect(called.getResult().name).toBe('hsnode');
                done();
            });
        });
    });
    describe('writeFile', () => {
        describe(dir + 'binFile', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.writeFile(dir + 'binFile', 'test2', false).then(called.resolved).catch(called.rejected);
            });
            it('should resolve', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
            describe('check for bin file', function () {
                beforeEach(done => {
                    called = getCalled(done);
                    _1.fsUtil.readFile(dir + 'binFile', false).then(called.resolved).catch(called.rejected);
                });
                it('should exist', function (done) {
                    expect(called.resolved).toHaveBeenCalled();
                    expect(called.rejected).not.toHaveBeenCalled();
                    done();
                });
                it('should contain payload', function (done) {
                    expect(typeof called.getResult()).toBe('object');
                    expect(Buffer.from('test2').equals(called.getResult())).toBe(true);
                    done();
                });
            });
        });
        describe(dir + 'binFile2', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.readFile(dir + 'binFile2', false).then(called.resolved).catch(called.rejected);
            });
            it('should reject', function (done) {
                expect(called.resolved).not.toHaveBeenCalled();
                expect(called.rejected).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('appendFile', () => {
        describe(dir + 'binFile', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.appendFile(dir + 'binFile', 'test2', false).then(called.resolved).catch(called.rejected);
            });
            afterAll(done => {
                _1.fsUtil.remove(dir + 'binFile');
                done();
            });
            it('should resolve', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
            describe('check for bin file', function () {
                beforeEach(done => {
                    called = getCalled(done);
                    _1.fsUtil.readFile(dir + 'binFile', false).then(called.resolved).catch(called.rejected);
                });
                it('should exist', function (done) {
                    expect(called.resolved).toHaveBeenCalled();
                    expect(called.rejected).not.toHaveBeenCalled();
                    done();
                });
                it('should contain payload', function (done) {
                    expect(typeof called.getResult()).toBe('object');
                    expect(called.getResult().toString()).toMatch('test2test2test2test2');
                    done();
                });
            });
        });
        describe(dir + 'binFile2', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.readFile(dir + 'binFile2', false).then(called.resolved).catch(called.rejected);
            });
            it('should reject', function (done) {
                expect(called.resolved).not.toHaveBeenCalled();
                expect(called.rejected).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('writeTextFile', () => {
        describe(dir + 'txtFile', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.writeTextFile(dir + 'txtFile', 'test2').then(called.resolved).catch(called.rejected);
            });
            it('should resolve', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
            describe('check for text file', function () {
                beforeEach(done => {
                    called = getCalled(done);
                    _1.fsUtil.readTextFile(dir + 'txtFile').then(called.resolved).catch(called.rejected);
                });
                it('should exist', function (done) {
                    expect(called.resolved).toHaveBeenCalled();
                    expect(called.rejected).not.toHaveBeenCalled();
                    done();
                });
                it('should contain payload', function (done) {
                    expect(typeof called.getResult()).toBe('string');
                    expect(called.getResult()).toBe('test2');
                    done();
                });
            });
        });
    });
    describe('writeJsonFile', () => {
        describe(dir + 'jsnFile', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.writeJsonFile(dir + 'jsnFile', { "name": "test2" }).then(called.resolved).catch(called.rejected);
            });
            it('should resolve', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
            describe('check for json file', function () {
                beforeEach(done => {
                    called = getCalled(done);
                    _1.fsUtil.readJsonFile(dir + 'jsnFile').then(called.resolved).catch(called.rejected);
                });
                it('should exist', function (done) {
                    expect(called.resolved).toHaveBeenCalled();
                    expect(called.rejected).not.toHaveBeenCalled();
                    done();
                });
                it('should contain payload', function (done) {
                    expect(typeof called.getResult()).toBe('object');
                    expect(called.getResult().name).toBe('test2');
                    done();
                });
            });
        });
        describe(dir + 'jsn2File', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.writeJsonFile(dir + 'jsn2File', 'test2').then(called.resolved).catch(called.rejected);
            });
            it('should resolve', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
            describe('check for json file', function () {
                beforeEach(done => {
                    called = getCalled(done);
                    _1.fsUtil.readJsonFile(dir + 'jsn2File').then(called.resolved).catch(called.rejected);
                });
                it('should exist', function (done) {
                    expect(called.resolved).toHaveBeenCalled();
                    expect(called.rejected).not.toHaveBeenCalled();
                    done();
                });
                it('should contain payload', function (done) {
                    expect(typeof called.getResult()).toBe('string');
                    expect(called.getResult()).toBe('test2');
                    done();
                });
            });
        });
    });
    describe('delete', () => {
        describe(dir + 'jsnFile', () => {
            beforeEach(done => {
                called = getCalled(done);
                _1.fsUtil.writeJsonFile(dir + 'jsnFile', { "name": "test2" }).then(called.resolved).catch(called.rejected);
            });
            it('should have created jsnFile', function (done) {
                expect(called.resolved).toHaveBeenCalled();
                expect(called.rejected).not.toHaveBeenCalled();
                done();
            });
            describe('check for deletion', function () {
                beforeEach(done => {
                    called = getCalled(done);
                    _1.fsUtil.remove(dir + 'jsnFile')
                        .then(called.resolved)
                        .catch(called.rejected);
                });
                it('should have deleted file', function (done) {
                    expect(called.resolved).toHaveBeenCalled();
                    expect(called.rejected).not.toHaveBeenCalled();
                    _1.fsUtil.isFile(dir + 'jsnFile')
                        .then(exists => {
                        expect(exists).toBe(false);
                        done();
                    }).catch(() => {
                        fail('error deleting file');
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnNVdGlsLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnNVdGlsLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBNEI7QUFJNUIsUUFBUSxDQUFDLFVBQVUsRUFBRTtJQUNwQixJQUFJLE1BQVUsQ0FBQztJQUNaLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUN0QixNQUFNLFFBQVEsR0FBRyxHQUFHLEdBQUMsY0FBYyxDQUFDO0lBRXBDLG1CQUFtQixJQUFhO1FBQzVCLElBQUksTUFBYSxFQUFFLEtBQVksQ0FBQztRQUNoQyxJQUFJLE1BQU0sR0FBRztZQUNULFFBQVEsRUFBRSxDQUFDLENBQVEsT0FBTyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLFFBQVEsRUFBRSxDQUFDLENBQVEsT0FBTyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLFNBQVMsRUFBRSxNQUFNLE1BQU07WUFDdkIsUUFBUSxFQUFHLE1BQU0sS0FBSztTQUN6QixDQUFDO1FBQ0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUosUUFBUSxDQUFDLFlBQVksRUFBRztRQUN2QixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFHO1lBQ3hCLFVBQVUsQ0FBQyxJQUFJO2dCQUNkLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFNBQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9FLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFTLElBQUk7Z0JBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzVELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9DLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxJQUFJLEVBQUc7WUFDZixVQUFVLENBQUMsSUFBSTtnQkFDZCxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixTQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RSxDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBUyxJQUFJO2dCQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxVQUFTLElBQUk7Z0JBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9DLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRztRQUNuQixRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ2IsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBUyxJQUFJO2dCQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsY0FBYyxFQUFHO1lBQ2hCLElBQUksRUFBUyxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxJQUFJO2dCQUNGLFNBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFDLHFCQUFxQixDQUFDO3FCQUN6QyxJQUFJLENBQUMsQ0FBQyxJQUFXO29CQUMxQixNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNiLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLFNBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxVQUFTLElBQUk7Z0JBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9DLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRztZQUMzQixVQUFVLENBQUMsSUFBSTtnQkFDZCxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixTQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFVBQVMsSUFBSTtnQkFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzVFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9DLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixVQUFVLENBQUMsSUFBSTtnQkFDZCxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixTQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9FLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLFVBQVMsSUFBSTtnQkFDMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsYUFBYSxFQUFHO1FBQ3hCLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdkIsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEYsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUUsVUFBUyxJQUFJO2dCQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsSUFBSSxFQUFHO1lBQ2YsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUUsVUFBUyxJQUFJO2dCQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyx5REFBeUQsRUFBRSxVQUFTLElBQUk7Z0JBQzFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9DLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixVQUFVLENBQUMsSUFBSTtnQkFDZCxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixTQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BGLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLDJEQUEyRCxFQUFFLFVBQVMsSUFBSTtnQkFDNUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsUUFBUSxFQUFHO1FBQ25CLFFBQVEsQ0FBQyxTQUFTLEVBQUc7WUFDcEIsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBUyxJQUFJO2dCQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsR0FBRyxHQUFDLHFCQUFxQixFQUFHO1lBQ3BDLFVBQVUsQ0FBQyxJQUFJO2dCQUNkLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFNBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZGLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFVBQVMsSUFBSTtnQkFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLFNBQVMsR0FBQyxNQUFNLEVBQUc7WUFDM0IsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLFVBQVMsSUFBSTtnQkFDbEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsU0FBUyxFQUFHO1FBQ3BCLFFBQVEsQ0FBQyxTQUFTLEVBQUc7WUFDcEIsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUUsVUFBUyxJQUFJO2dCQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxTQUFTLEdBQUMsUUFBUSxFQUFHO1lBQzdCLFVBQVUsQ0FBQyxJQUFJO2dCQUNkLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFNBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBUyxJQUFJO2dCQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzNDLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFVBQVUsRUFBRztRQUNmLE1BQU0sS0FBSyxHQUFHLFFBQVEsR0FBQyxXQUFXLENBQUM7UUFDbkMsTUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFDLFlBQVksQ0FBQztRQUMxQyxRQUFRLENBQUMsS0FBSyxFQUFHO1lBQ2hCLFVBQVUsQ0FBQyxJQUFJO2dCQUNkLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFNBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RSxDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFTLElBQUk7Z0JBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsS0FBSyxFQUFHO1lBQ2hCLFVBQVUsQ0FBQyxJQUFJO2dCQUNkLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFNBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RSxDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBUyxJQUFJO2dCQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakcsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsY0FBYyxFQUFHO1FBQ3pCLFFBQVEsQ0FBQyxTQUFTLEdBQUMsaUJBQWlCLEVBQUc7WUFDdEMsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0YsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUUsVUFBUyxJQUFJO2dCQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsY0FBYyxFQUFHO1FBQ25CLE1BQU0sSUFBSSxHQUFHLFNBQVMsR0FBQyxxQkFBcUIsQ0FBQztRQUNuRCxRQUFRLENBQUMsSUFBSSxFQUFHO1lBQ2YsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUUsVUFBUyxJQUFJO2dCQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFdBQVcsRUFBRztRQUN0QixRQUFRLENBQUMsR0FBRyxHQUFDLFNBQVMsRUFBRztZQUN4QixVQUFVLENBQUMsSUFBSTtnQkFDZCxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixTQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5RixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLElBQUk7Z0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDOUIsVUFBVSxDQUFDLElBQUk7b0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsU0FBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEYsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFTLElBQUk7b0JBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDL0MsSUFBSSxFQUFFLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQVMsSUFBSTtvQkFDekMsTUFBTSxDQUFDLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25FLElBQUksRUFBRSxDQUFDO2dCQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxHQUFHLEdBQUMsVUFBVSxFQUFHO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJO2dCQUNkLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFNBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckYsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFLFVBQVMsSUFBSTtnQkFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUdILFFBQVEsQ0FBQyxZQUFZLEVBQUc7UUFDdkIsUUFBUSxDQUFDLEdBQUcsR0FBQyxTQUFTLEVBQUc7WUFDeEIsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0YsQ0FBQyxDQUFDLENBQUM7WUFFTSxRQUFRLENBQUMsSUFBSTtnQkFDVCxTQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxFQUFFLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztZQUVaLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLElBQUk7Z0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDOUIsVUFBVSxDQUFDLElBQUk7b0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsU0FBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEYsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFTLElBQUk7b0JBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDL0MsSUFBSSxFQUFFLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQVMsSUFBSTtvQkFDekMsTUFBTSxDQUFDLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQ3RFLElBQUksRUFBRSxDQUFDO2dCQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxHQUFHLEdBQUMsVUFBVSxFQUFHO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJO2dCQUNkLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFNBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckYsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFLFVBQVMsSUFBSTtnQkFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUc7UUFDMUIsUUFBUSxDQUFDLEdBQUcsR0FBQyxTQUFTLEVBQUc7WUFDeEIsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLElBQUk7Z0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDL0IsVUFBVSxDQUFDLElBQUk7b0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsU0FBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRixDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVMsSUFBSTtvQkFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUMvQyxJQUFJLEVBQUUsQ0FBQztnQkFDUixDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsVUFBUyxJQUFJO29CQUN6QyxNQUFNLENBQUMsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pDLElBQUksRUFBRSxDQUFDO2dCQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGVBQWUsRUFBRztRQUMxQixRQUFRLENBQUMsR0FBRyxHQUFDLFNBQVMsRUFBRztZQUN4QixVQUFVLENBQUMsSUFBSTtnQkFDZCxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixTQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEcsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBUyxJQUFJO2dCQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9DLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7WUFFSCxRQUFRLENBQUMscUJBQXFCLEVBQUU7Z0JBQy9CLFVBQVUsQ0FBQyxJQUFJO29CQUNkLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLFNBQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFTLElBQUk7b0JBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDL0MsSUFBSSxFQUFFLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQVMsSUFBSTtvQkFDekMsTUFBTSxDQUFDLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLEdBQUcsR0FBQyxVQUFVLEVBQUc7WUFDekIsVUFBVSxDQUFDLElBQUk7Z0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsU0FBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLElBQUk7Z0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDL0IsVUFBVSxDQUFDLElBQUk7b0JBQ2QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsU0FBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsRixDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVMsSUFBSTtvQkFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUMvQyxJQUFJLEVBQUUsQ0FBQztnQkFDUixDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsVUFBUyxJQUFJO29CQUN6QyxNQUFNLENBQUMsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pDLElBQUksRUFBRSxDQUFDO2dCQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUEsUUFBUSxDQUFDLFFBQVEsRUFBRztRQUN0QixRQUFRLENBQUMsR0FBRyxHQUFDLFNBQVMsRUFBRztZQUN4QixVQUFVLENBQUMsSUFBSTtnQkFDZCxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixTQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEcsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsVUFBUyxJQUFJO2dCQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9DLElBQUksRUFBRSxDQUFDO1lBQ1IsQ0FBQyxDQUFDLENBQUM7WUFFTSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzNCLFVBQVUsQ0FBQyxJQUFJO29CQUNYLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLFNBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLFNBQVMsQ0FBQzt5QkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7eUJBQ3JCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxVQUFTLElBQUk7b0JBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDL0MsU0FBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsU0FBUyxDQUFDO3lCQUMzQixJQUFJLENBQUMsTUFBTTt3QkFDUixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQixJQUFJLEVBQUUsQ0FBQztvQkFDWCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ0wsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIn0=