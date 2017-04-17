/// <reference path="../node_modules/typings/index.d.ts" />

import log from './log';

describe("log", function() {
	let gLog: any;
	let gMsg: string;
	
	function myLog(msg:string) {
		gMsg = msg;
//		gLog('received: '+ msg + '<<');
	}
	
	// avoid logging of level change
	function setLevel(level:symbol) {
		log.level(level);
		gMsg = undefined;
	}

	beforeEach(function() {
		gLog = console.log;
		console.log = myLog;
		log.level(log.INFO);
		gMsg = undefined;
	});
	
	afterEach(function() {
		console.log = gLog;
	});
	
	describe('reporting functions', function() {
		it('should print info', function() {
			log.info("yes");
			expect(log.level()).toBe(log.INFO);
			expect(gMsg).toMatch(/INFO.*yes/);  
		});
		
		it('should print warning', function() {
			log.warn("alert");
			expect(log.level()).toBe(log.INFO);
			expect(gMsg).toMatch(/WARN.*alert/);  
		});
		
		it('should not print debug at INFO level', function() {
			setLevel(log.INFO);
			log.debug('yes');
			expect(gMsg).toBeUndefined();
		});
		
		it('should set DEBUG level', function() {
			expect(log.level()).toBe(log.INFO);
			log.level(log.DEBUG);
			expect(log.level()).toBe(log.DEBUG);
			expect(gMsg).toMatch(/new log level 'DEBUG' \(was INFO\)/);
		});
		
		it('should print info at DEBUG level', function() {
			setLevel(log.DEBUG);
			log.info('yes');
			expect(log.level()).toBe(log.DEBUG);
			expect(gMsg).toMatch(/INFO.*yes/);  
		});
		
		it('should print debug at DEBUG level', function() {
			log.level(log.DEBUG);
			expect(log.level()).toBe(log.DEBUG);
			expect(gMsg).toMatch(/new log level 'DEBUG' \(was INFO\)/);
			log.debug('yes');
			expect(gMsg).toMatch(/DEBUG.*yes/);  
		});
		
		it('should print error for invalid level', function() {
			log.level(Symbol('BOGUS'));
            expect(gMsg).toMatch(/ unkown level Symbol\(BOGUS\); log level remains Symbol\(INFO\)/);
			expect(log.level()).toBe(log.INFO);
		});
		
		it('should print error', function() {
			log.error('yes');
			expect(gMsg).toMatch(/ERROR.*yes/);
		});
	});
	
	describe('formatting', function() {
		it('should print prefix "test"', function() {
			log.prefix('test');
			log.info('yes');
			expect(gMsg).toMatch(/test INFO.*yes/);
		});
		
		it('should print date', function() {
			let date = new Date();
			log.config({dateFormat:'%M/%DD/%YY'});
			log.info('yes');
			expect(gMsg).toMatch((date.getFullYear()%100) + ' test INFO' );
			expect(gMsg).toMatch(/test INFO.*yes/);
		});
		
		it('should return dateFormat string', function() {
			expect(log.dateFormat()).toBe('%M/%DD/%YY');
		});
	});
				
	describe('log file', function() {
		it('should be created next to Gruntfile for default path', function() {
			log.config({logFile:null});
			expect(gMsg).toMatch(/test INFO.*now logging to file/);
		});
		
		it('should be stopped for empty path', function() {
			log.logFile('');
			expect(gMsg).toMatch(/test INFO.*logfile disabled/);
		});
		
		it('should fail for missing paths', function() {
			function fail() {
				log.logFile('/missing/log.txt');
			}
			expect(fail).toThrow();
		});
	});
});
