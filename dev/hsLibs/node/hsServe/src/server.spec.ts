
const http	= require('http');
import { log }      from "../hsNode";
import { server }           from "./server";

log.prefix('httpServerTest');

describe('httpServer', function() {
	let gLog:any;
	let gMsg = ''; 
	let timeout:any;
	let gServer:any;
//	let gCWD:string;
	let port = 8880;
	
/*    
	function setCWD(newCWD:string) {
		gCWD = process.cwd();
		console.log(`current cwd: ${gCWD}`);
		gCWD = process.cwd();
		fsUtil.realPath(newCWD).then((path:string) => {
			console.log(`new cwd: ${path}`);
			process.chdir(path); 
		})
		.catch(console.log);
	}
	
	function resetCWD() {
		console.log(`restored cwd: ${gCWD}`);
		process.chdir(gCWD); 
	}
*/	
	beforeAll(() => {
		log.level(log.INFO); 
	});
	
	
	beforeEach(function(done) { 
		gLog = console.log;
		console.log = (msg:string) => {
			if (timeout) { clearTimeout(timeout); }
			timeout = setTimeout(done, 100);
			gMsg += msg;
//			gLog('received: '+ msg + '<<'); 
		};

//		setCWD(__dirname+'/../../../src/serverlogs/');

		gServer = server.start(port);
		gMsg = '';
	});
	
	afterEach(function(done) {
		server.stop(gServer);
//		resetCWD();
		console.log = gLog; 
		done();
	});
	
	it('should start server', function(done) {
		expect(gMsg).toEqual(jasmine.stringMatching('server started on http://'));
		done();
	});	
	
	it('should fetch http://127.0.0.1:' + port + '/package.json', function(done) {
		http.get('http://127.0.0.1:' + port + '/package.json');
		setTimeout(() => {
			expect(gMsg).toEqual(jasmine.stringMatching('GET ::ffff:127.0.0.1 200 127'));
			expect(gMsg).toEqual(jasmine.stringMatching('/package.json'));
			done();
		},100);
	});	
	
	it('should fetch default index.html at http://127.0.0.1:' + port + '/bin/http/docs/', function(done) {
		http.get('http://127.0.0.1:' + port + '/bin/http/docs/');
		setTimeout(() => {
			expect(gMsg).toEqual(jasmine.stringMatching('serving'));
			expect(gMsg).toEqual(jasmine.stringMatching('srv/bin/http/docs/index.html'));
			done();
		},100);
	});	
	
	it('should not fetch http://127.0.0.1:' + port + '/tests/index2.html', function(done) {
		http.get('http://127.0.0.1:' + port + '/tests/index2.html');
		setTimeout(() => {
			expect(gMsg).toEqual(jasmine.stringMatching('no such file or directory'));
			expect(gMsg).toEqual(jasmine.stringMatching('tests/index2.html'));
			done();
		},100);
	});	
	
	it('should fetch app list', function(done) {
		http.get('http://127.0.0.1:' + port + '/');
		setTimeout(() => {
			expect(gMsg).toEqual(jasmine.stringMatching('text/html serving app list'));
			done();
		},100);
	});	
	
	it('should fetch app handler', function(done) {
		http.get('http://127.0.0.1:' + port + '/apps/pjdmTimeTracking/data/effort?hash=1856274279');
		setTimeout(() => {
			expect(gMsg).toEqual(jasmine.stringMatching('deferring to app handler: /apps/pjdmTimeTracking'));
			expect(gMsg).toEqual(jasmine.stringMatching('serving apps/pjdmTimeTracking/data/effortMgr.json'));
			done();
		},100);
	});	
	
	it('should fetch relayed request', function(done) {
		let result = '';
		let relay = 'http://127.0.0.1:' + port + '/apps/metrics/client/admin.html';
		http.get('http://127.0.0.1:' + port + '/?relay=' + relay, (res:any) => {
			res.setEncoding('utf8');
			res.on('data', (chunk:string) => { result += chunk; });
			res.on('end', () => {
				expect(gMsg).toEqual(jasmine.stringMatching('serving relayed request to ' + relay));
				expect(result).toEqual(jasmine.stringMatching(/title='Capacity Share'/));
				done();			
			});
		})
		.on('error', (e:string) => {
			expect(e).toBe('error');
			done();
		});
	});	
	
	it('should not be confused by angular pattern', function(done) {
//		let level = log.level();
//		log.level(log.DEBUG);		
		http.get('http://127.0.0.1:' + port + '/{{var}}');
		setTimeout(() => {
//			expect(gMsg).toEqual(jasmine.stringMatching('ignoring angularJS request'));
			expect(gMsg).toEqual(jasmine.stringMatching('srv/%7B%7Bvar%7D%7D text/html'));
			done();
//			log.level(level);
		},1000);
	});	
	
	it('should save file http://127.0.0.1:' + port + '/../tmp/http.json', function(done) {
		let postdata = "This is a more elaborate save test";
		try {
		let req = http.request({
			hostname: '127.0.0.1',
			port: port,
			path: '/tmp/http.json',
			method: 'POST', 
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': Buffer.byteLength(postdata)
			}
		}, (res:any) => {
			log.debug(`STATUS: ${res.statusCode}`);
			log.debug(`HEADERS: ${JSON.stringify(res.headers)}`);
		});
		req.on('error', (e:any) => {
			log.error(`problem with request: ${e.message}`);
		});
		req.write(postdata);
		req.end();
		} catch(e) { console.log(e); }

		
		setTimeout(() => {
			expect(gMsg).toEqual(jasmine.stringMatching('text/html saved'));
			expect(gMsg).toEqual(jasmine.stringMatching('/tmp/http.json'));
			done();
		},100);
	});	
});

