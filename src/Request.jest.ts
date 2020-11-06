import { Log }          from './index';  
import { Request }      from "./Request";

const log = new Log('Request.jest');

const XHR = require('./__mocks__/XMLHttpRequest.js');

// const Digest = `Digest realm="testrealm@host.com", qop="auth,auth-int", nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093", opaque="5ccc069c403ebaf9f0171e9517f40e41"`

const payloads = [
    { path: '/myPath?query=value', code:200, content: '<html><body id="theBody"><h1 id=main>The Content</h1>the Body<p></body></html>' },
    { path: '/myPath.json', code:200, content: '{"first":"one", "second":"two"}' },
    { path: '/myPath_put.json', code:200, content: '' },
    { path: '/myPath_post.json', code:200, content: '' },
    { path: '/myCached.txt', code:200, content: '<html><body id="theBody"><h1 id=main>The Content</h1>the Body<p></body></html>' },
    { path: '/myCached.jpg', code:200, content: 'garykxxrgQWV ZHDOGILFTEFVXCFGADcstjukjcr' },
    { path: '/myAuth.txt', code:403, authenticate: 'Basic', content: '<html><body><h1>403 - Forbidden</h1></body></html>' },
    { path: '/myDigest.txt', code:401, authenticate: 'Digest', content: '<html><body><h1>Show me the goods</h1></body></html>' },
];

XHR.__setPayLoads(payloads);

const request = new Request();


window.XMLHttpRequest = <any>XHR;
XHR.load = jest.fn(xhr => xhr.onload());

describe('Request', ()=>{
    beforeEach(() => {
        // log.level(Log.DEBUG, true);
        request.decode = undefined;
        request.clearPace();
        request.setCredentials();
        request.setAuthToken();
    });

    afterEach(() => {
        // log.level(Log.INFO, true);
    });

    test(`myPath.json should get property 'first' = 'one'`, async () => {
        expect.assertions(3);
        const url = 'http://my.space.com/myPath.json';
        request.decode = Request.decoders.str2json;
        const json = await request.get(url);
        expect(json.data).toHaveProperty('first');
        expect((<any>json.data).first).toBe('one');
        expect(XHR.load.mock.calls.length).toBe(1);
    });

    test(`myPath.json should post 'my content'`, async () => {
        expect.assertions(1);
        const url = 'http://my.space.com/myPath_post.json';
        request.decode = Request.decoders.str2json;
        const json = await request.post(url, 'my content');
        expect(XHR.__posts[url]).toBe('\"my content\"');
    });

    test(`myPath.json should put 'my content2'`, async () => {
        expect.assertions(1);
        const url = 'http://my.space.com/myPath_put.json';
        request.decode = Request.decoders.str2json;
        const json = await request.put(url, 'my content2');
        expect(XHR.__posts[url]).toBe('\"my content2\"');
    });

    it('should pass auth token', ()=>{
        expect.assertions(1);
        request.setAuthToken('12345');
        const url = 'http://my.space.com/myAuth.txt';  
        return expect(request.get(url)).rejects.toBe(`error requesting ${url}: authentication missing; call 'setCredentials' before calling 'get'`);
    });

    it('should ask for Basic authentication', ()=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myAuth.txt';  
        return expect(request.get(url)).rejects.toBe(`error requesting ${url}: authentication missing; call 'setCredentials' before calling 'get'`);
    });

    it('should return with Basic authentication', async (done)=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myAuth.txt';  
        request.setCredentials('me', 'mysecret');
        const r = await request.get(url);
        const data = <string>r.data;
        try {
            expect(data).toBe('<html><body><h1>403 - Forbidden</h1></body></html>');
            done();
        } catch(e) { done(e)}
    });

    it('should ask for Digest authentication', ()=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myDigest.txt';
        return expect(request.get(url)).rejects.toBe(`error requesting ${url}: authentication missing; call 'setCredentials' before calling 'get'`);
    });

    it('should return with Digest authentication', async (done)=>{
        const url = 'http://my.space.com/myDigest.txt';
        request.setCredentials('admin', 'littleSecret');
        const r = await request.get(url);
        const data = <string>r.data;
        expect(data).toBe('<html><body><h1>Show me the goods</h1></body></html>');
        done();
    });

    describe('pacing', () => {
        beforeEach(() => {
            request.setPace({pace:50, max:10});
            request.setCredentials();
        });
        it('should request online', async (done) => {
            expect.assertions(2);
            const calls = XHR.load.mock.calls.length;
            const pageText = await request.get('http://my.space.com/myCached.txt');
            expect((<string>pageText.data).length).toBe(78);
            expect(XHR.load.mock.calls.length).toBe(calls+1);
            done();
        });
    });
});