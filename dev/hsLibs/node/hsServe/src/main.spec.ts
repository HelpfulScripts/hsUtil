import { log }  from "../hsNode";
// import * as main        from './main';

/*globals Player:false, Song: false*/
log.prefix('httpMainTest');

describe('http Main', function() {
	const PORT = '8884';
	let gMsg = '';
//	let gCWD:string;
	let gLog:any;
	let timeout:any;
	let main:any;
	
	function myLog(done:any) {
		gLog = console.log;
		console.log = function(msg:string) {
			if (timeout) { clearTimeout(timeout); }
			timeout = setTimeout(done, 100);
			gMsg += msg;
//			gLog('received >>'+ msg + '<<'); 
		};
		gMsg = '';
	}
	
/*    
	function setCWD(newCWD:string) {
		gCWD = process.cwd();
		log.info(`current cwd: ${gCWD}`);
		fsUtil.realPath(newCWD)
		.then((path:string) => {
			log.info(`new cwd: ${path}`);
			process.chdir(path); 
		})
		.catch(console.log);
	}
	
	function resetCWD() {
		log.info(`restored cwd: ${gCWD}`);
		process.chdir(gCWD); 
	}
*/	
	beforeEach(done => {
		myLog(done);
//		setCWD(__dirname+'/../../../../srv/');
		process.argv[3] =  PORT;
//		main = require(__dirname+'/../../../src/main');  
		main = require('./main');  
		main.start();
	});
	
	afterEach(function(done) {
		main.stop();
//		resetCWD();
		console.log = gLog;
		done();
	});
	
	describe('call with port and debug level', () => {
		beforeEach(() => {
			process.argv[2] = 'debug';
		});
		
		it('should start server', function(done) {
			expect(gMsg).toEqual(jasmine.stringMatching('server started on http://'));
			done();
		});
		
		it('should start in DEBUG mode', function(done) {
			expect(gMsg).toEqual(jasmine.stringMatching("new log level 'DEBUG'"));
			done();
		});
	});
	
	describe('call with port', () => {
		beforeEach(() => {
			process.argv[2] = ''; // don't use undefined! all programs assume argv elements are strings
		});
		
		it('should start server', function(done) {
			expect(gMsg).toEqual(jasmine.stringMatching('server started on http://'));
			done();
		});
		
		it('should start in INFO mode', function(done) {
			expect(gMsg).toEqual(jasmine.stringMatching("new log level 'INFO'"));
			done();
		});
		
		it('should allow calling stop twice', function(done) {
			gMsg = '';
			main.stop();
			setTimeout(() => {
				expect(gMsg).toEqual(jasmine.stringMatching("server stopped"));
				gMsg = '';
				main.stop();
				setTimeout(() => {
					expect(gMsg).toEqual(jasmine.stringMatching("server stopped"));
					done();
				}, 0);
			}, 0);
		});
	});
});