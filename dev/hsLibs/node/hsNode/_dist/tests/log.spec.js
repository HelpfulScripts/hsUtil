"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
describe("log", () => {
    describe("message", () => {
        let gLog;
        let gMsg;
        function myLog(msg) {
            gMsg = msg;
        }
        function setLevel(level) {
            _1.log.level(level);
            gMsg = undefined;
        }
        beforeEach(function () {
            gLog = console.log;
            console.log = myLog;
            _1.log.level(_1.log.INFO);
            gMsg = undefined;
        });
        afterEach(function () {
            console.log = gLog;
        });
        describe('reporting functions', function () {
            it('should print info', function () {
                _1.log.info("yes");
                expect(_1.log.level()).toBe(_1.log.INFO);
                expect(gMsg).toMatch(/INFO.*yes/);
            });
            it('should print warning', function () {
                _1.log.warn("alert");
                expect(_1.log.level()).toBe(_1.log.INFO);
                expect(gMsg).toMatch(/WARN.*alert/);
            });
            it('should not print debug at INFO level', function () {
                setLevel(_1.log.INFO);
                _1.log.debug('yes');
                expect(gMsg).toBeUndefined();
            });
            it('should set DEBUG level', function () {
                expect(_1.log.level()).toBe(_1.log.INFO);
                _1.log.level(_1.log.DEBUG);
                expect(_1.log.level()).toBe(_1.log.DEBUG);
                expect(gMsg).toMatch(/new log level 'DEBUG' \(was INFO\)/);
            });
            it('should print info at DEBUG level', function () {
                setLevel(_1.log.DEBUG);
                _1.log.info('yes');
                expect(_1.log.level()).toBe(_1.log.DEBUG);
                expect(gMsg).toMatch(/INFO.*yes/);
            });
            it('should print debug at DEBUG level', function () {
                _1.log.level(_1.log.DEBUG);
                expect(_1.log.level()).toBe(_1.log.DEBUG);
                expect(gMsg).toMatch(/new log level 'DEBUG' \(was INFO\)/);
                _1.log.debug('yes');
                expect(gMsg).toMatch(/DEBUG.*yes/);
            });
            it('should print error for invalid level', function () {
                _1.log.level(Symbol('BOGUS'));
                expect(gMsg).toMatch(/ unkown level Symbol\(BOGUS\); log level remains Symbol\(INFO\)/);
                expect(_1.log.level()).toBe(_1.log.INFO);
            });
            it('should print error', function () {
                _1.log.error('yes');
                expect(gMsg).toMatch(/ERROR.*yes/);
            });
        });
        describe('formatting', function () {
            it('should print prefix "test"', function () {
                _1.log.prefix('test');
                _1.log.info('yes');
                expect(gMsg).toMatch(/test INFO.*yes/);
            });
            it('should print date', function () {
                let date = new Date();
                _1.log.config({ dateFormat: '%M/%DD/%YY' });
                _1.log.info('yes');
                expect(gMsg).toMatch((date.getFullYear() % 100) + ' test INFO');
                expect(gMsg).toMatch(/test INFO.*yes/);
            });
            it('should return dateFormat string', function () {
                expect(_1.log.dateFormat()).toBe('%M/%DD/%YY');
            });
        });
        describe('log file', function () {
            it('should be created next to Gruntfile for default path', done => {
                _1.log.logFile().then(file => {
                    expect(file).toMatch(/log-%YYYY-%MM-%DD.txt/);
                    expect(gMsg).toMatch(/test INFO.*now logging to file/);
                    if (file) {
                        _1.fsUtil.remove(_1.hsDate(file)).catch(console.log);
                    }
                    done();
                });
            });
            it('should be stopped for empty path', done => {
                _1.log.logFile('').then(file => {
                    expect(file).not.toBeDefined();
                    expect(gMsg).toMatch(/test INFO.*disabling logfile/);
                    done();
                });
            });
            it('should be stopped for missing paths', done => {
                _1.log.logFile('/missing/log.txt').then(file => {
                    expect(file).not.toBeDefined();
                    expect(gMsg).toMatch(/test WARN.*path .missing doesn't exists; logfile disabled/);
                    done();
                })
                    .catch(() => { });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbG9nLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBMkM7QUFFM0MsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNaLFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFDaEIsSUFBSSxJQUFTLENBQUM7UUFDZCxJQUFJLElBQVksQ0FBQztRQUVqQixlQUFlLEdBQVU7WUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVmLENBQUM7UUFHRCxrQkFBa0IsS0FBWTtZQUMxQixNQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUVELFVBQVUsQ0FBQztZQUNQLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE1BQUcsQ0FBQyxLQUFLLENBQUMsTUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLElBQUksR0FBRyxTQUFTLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtZQUM1QixFQUFFLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3BCLE1BQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxNQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHNCQUFzQixFQUFF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