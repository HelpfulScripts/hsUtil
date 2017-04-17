/// <reference path="../node_modules/typings/index.d.ts" />

import * as util from './fsUtil';


describe("hsFSutil", function() {
	let called:any;
    let dir = __dirname; // + '/testTmp/';

    function getCalled(done:()=>void) {
        let result:string, error:string;
        let called = { 
            resolved: (v:string) => { result=v; done(); },
            rejected: (v:string) => { error =v; done(); },
            getResult: () => result,
            getError:  () => error
        };
        spyOn(called, 'resolved').and.callThrough(); 
        spyOn(called, 'rejected').and.callThrough(); 
        return called;
    }

	describe('pathExists' , () => {
		describe(process.cwd() , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.pathExists(process.cwd()).then(called.resolved).catch(called.rejected);
			});
			
			it('should exist', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(process.cwd());
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
		describe('./' , () => { 
			beforeEach(done => {
				called = getCalled(done);
				util.pathExists('./').then(called.resolved).catch(called.rejected);
			});
			
			it('should exist', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(process.cwd());
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
		describe('/does-not-exists/', () => {
			beforeEach(done => {
				called = getCalled(done);
				util.pathExists('/does-not-exists/').then(called.resolved).catch(called.rejected);
			});
			
			it('should not exist', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(false);
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
	});
	
	describe('isFile' , () => {
		describe(dir, () => {
			beforeEach(done => {
				called = getCalled(done);
				util.isFile(dir).then(called.resolved).catch(called.rejected);
			});
		
			it('should not be a file', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(false);
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
		describe('Gruntfile.js' , () => {
            let rp:string;
			beforeEach(done => {
                util.realPath(dir+'/../../Gruntfile.js')
                .then((path:string) => {
    				called = getCalled(done);
                    rp = path;
    				util.isFile(rp).then(called.resolved).catch(called.rejected);
                });
			});
		
			it('should be a file', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(rp);
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
		describe('./Gruntfile.js' , () => { 
			beforeEach(done => {
				called = getCalled(done);
				util.isFile('./Gruntfile.js').then(called.resolved).catch(called.rejected);
			});
			
			it('should be a file', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(process.cwd()+'/Gruntfile.js');
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
		describe('./Gruntfile.js2', () => {
			beforeEach(done => {
				called = getCalled(done);
				util.isFile('./Gruntfile.js2').then(called.resolved).catch(called.rejected);
			});
			 
			it('should not be a file an not be rejected', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(false);
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
	});

	describe('isDirectory' , () => {
		describe(process.cwd(), () => {
			beforeEach(done => {
				called = getCalled(done);
				util.isDirectory(process.cwd()).then(called.resolved).catch(called.rejected);
			});
		
			it('should be a directory', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(process.cwd());
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
	
		describe('./' , () => { 
			beforeEach(done => {
				called = getCalled(done);
				util.isDirectory('./').then(called.resolved).catch(called.rejected);
			});
			
			it('should be a directory', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(process.cwd());
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
		describe('./Gruntfile.js', () => {
			beforeEach(done => {
				called = getCalled(done);
				util.isDirectory('./Gruntfile.js').then(called.resolved).catch(called.rejected);
			});
			 
			it('valid file should not be a directory an not be rejected', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(false);
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
		describe('./Gruntfile.js2', () => {
			beforeEach(done => {
				called = getCalled(done);
				util.isDirectory('./Gruntfile.js2').then(called.resolved).catch(called.rejected);
			});
			 
			it('invalid file should not be a directory an not be rejected', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(false);
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
	});
	
	describe('isLink' , () => {
		describe(__dirname , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.isLink(__dirname).then(called.resolved).catch(called.rejected);
			});
			
			it('should not be a link', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(false);
				expect(called.rejected).not.toHaveBeenCalled(); 
				done();
			});
		});
		
		describe(dir+'/../../node_Modules' , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.isLink(dir+'/../../node_Modules').then(called.resolved).catch(called.rejected);
			});
			
			it('should be a link', function(done) {
				expect(called.resolved).toHaveBeenCalled();
				expect(called.resolved).not.toHaveBeenCalledWith(false); // instead: real path
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
		describe(__dirname+'/abc' , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.isLink(__dirname+'/abc').then(called.resolved).catch(called.rejected);
			});
			
			it('should reject for invalid names', function(done) {
				expect(called.resolved).toHaveBeenCalledWith(false);
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
	});
	
	describe('readDir' , () => {
		describe(__dirname , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.readDir(__dirname).then(called.resolved).catch(called.rejected);
			});
			
			it('should return list of spec files', function(done) {
				expect(called.resolved).toHaveBeenCalled();
				expect(called.rejected).not.toHaveBeenCalled();
				expect(called.getResult()).toBeDefined();
				expect(called.getResult().length).toBeGreaterThan(6);
				done();
			});
		});
		
		describe(__dirname+'/abcde' , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.readDir(__dirname+'/abcde').then(called.resolved).catch(called.rejected);
			});
			
			it('should reject', function(done) {
				expect(called.resolved).not.toHaveBeenCalled();
				expect(called.rejected).toHaveBeenCalled();
				done();
			});
		});		
	});
	
	describe('readFile' , () => {
        const file1 = dir+'/../../spec/test.xlsx';
        const file2 = dir+'/../../spec/test.xlsx2';
		describe(file1 , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.readFile(file1, false).then(called.resolved).catch(called.rejected);
			});
			
			it('should read binary file', function(done) {
				expect(called.resolved).toHaveBeenCalled();
				expect(typeof called.getResult()).toBe('object');
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});
		
		describe(file2 , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.readFile(file2, false).then(called.resolved).catch(called.rejected);
			});
			
			it('should reject', function(done) {
				expect(called.resolved).not.toHaveBeenCalled();
				expect(called.rejected).toHaveBeenCalled();
				expect((called.getError()+'').startsWith('Error: ENOENT: no such file or directory')).toBe(true);
				done();
			});
		});
		
	});
	
	describe('readTextFile' , () => {
		describe(__dirname+'/fsUtil.spec.js' , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.readTextFile(__dirname+'/fsUtil.spec.js').then(called.resolved).catch(called.rejected);
			});
			
			it('should read text file', function(done) {
				expect(called.resolved).toHaveBeenCalled();
				expect(typeof called.getResult()).toBe('string');
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
		});		
	});
	
	describe('readJsonFile' , () => {
        const file = __dirname+'/../../package.json';
		describe(file , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.readJsonFile(file).then(called.resolved).catch(called.rejected);
			});
			
			it('should read text file', function(done) {
				expect(called.resolved).toHaveBeenCalled();
				expect(called.rejected).not.toHaveBeenCalled();
				expect(typeof called.getResult()).toBe('object');
				expect(called.getResult().name).toBe('hsNode');
				done();
			});
		});
	});
	
	describe('writeFile' , () => {
		describe(dir+'binFile' , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.writeFile(dir+'binFile', 'test2', false).then(called.resolved).catch(called.rejected);
			});
			
			it('should resolve', function(done) {
				expect(called.resolved).toHaveBeenCalled();
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
			
			describe('check for bin file', function() {
				beforeEach(done => {
					called = getCalled(done);
					util.readFile(dir+'binFile', false).then(called.resolved).catch(called.rejected);
				});
				
				it('should exist', function(done) {
					expect(called.resolved).toHaveBeenCalled();
					expect(called.rejected).not.toHaveBeenCalled();
					done();
				});
				
				it('should contain payload', function(done) {
					expect(typeof called.getResult()).toBe('object');
					expect(Buffer.from('test2').equals(called.getResult())).toBe(true);
					done();
				});
			});
		});
		
		describe(dir+'binFile2' , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.readFile(dir+'binFile2', false).then(called.resolved).catch(called.rejected);
			});
			
			it('should reject', function(done) {
				expect(called.resolved).not.toHaveBeenCalled();
				expect(called.rejected).toHaveBeenCalled();
				done();
			});
		});
	});
	
	describe('writeTextFile' , () => {
		describe(dir+'txtFile' , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.writeTextFile(dir+'txtFile', 'test2').then(called.resolved).catch(called.rejected);
			});
			
			it('should resolve', function(done) {
				expect(called.resolved).toHaveBeenCalled();
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
			
			describe('check for text file', function() {
				beforeEach(done => {
					called = getCalled(done);
					util.readTextFile(dir+'txtFile').then(called.resolved).catch(called.rejected);
				});
				
				it('should exist', function(done) {
					expect(called.resolved).toHaveBeenCalled();
					expect(called.rejected).not.toHaveBeenCalled();
					done();
				});
				
				it('should contain payload', function(done) {
					expect(typeof called.getResult()).toBe('string');
					expect(called.getResult()).toBe('test2');
					done();
				});
			});
		});
	});
	
	describe('writeJsonFile' , () => {
		describe(dir+'jsnFile' , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.writeJsonFile(dir+'jsnFile', {"name":"test2"}).then(called.resolved).catch(called.rejected);
			});
			
			it('should resolve', function(done) {
				expect(called.resolved).toHaveBeenCalled();
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
			
			describe('check for json file', function() {
				beforeEach(done => {
					called = getCalled(done);
					util.readJsonFile(dir+'jsnFile').then(called.resolved).catch(called.rejected);
				});
				
				it('should exist', function(done) {
					expect(called.resolved).toHaveBeenCalled();
					expect(called.rejected).not.toHaveBeenCalled();
					done();
				});
				
				it('should contain payload', function(done) {
					expect(typeof called.getResult()).toBe('object');
					expect(called.getResult().name).toBe('test2');
					done();
				});
			});
		});

		describe(dir+'jsn2File' , () => {
			beforeEach(done => {
				called = getCalled(done);
				util.writeJsonFile(dir+'jsn2File', 'test2').then(called.resolved).catch(called.rejected);
			});
			
			it('should resolve', function(done) {
				expect(called.resolved).toHaveBeenCalled();
				expect(called.rejected).not.toHaveBeenCalled();
				done();
			});
			
			describe('check for json file', function() {
				beforeEach(done => {
					called = getCalled(done);
					util.readJsonFile(dir+'jsn2File').then(called.resolved).catch(called.rejected);
				});
				
				it('should exist', function(done) {
					expect(called.resolved).toHaveBeenCalled();
					expect(called.rejected).not.toHaveBeenCalled();
					done();
				});
				
				it('should contain payload', function(done) {
					expect(typeof called.getResult()).toBe('string');
					expect(called.getResult()).toBe('test2');
					done();
				});
			});
		});
	});
});
