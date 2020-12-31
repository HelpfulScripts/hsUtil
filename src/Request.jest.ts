import { Log }          from './index';  
import { Request }      from "./Request";

const log = new Log('Request.jest');

const XHR = require('./__mocks__/XMLHttpRequest.js');

interface Payload {
    code:       number;
    content:    string;
    authenticate?: 'Digest'|'Basic'
}

const validBody  = '<html><body id="theBody"><h1 id=main>The Content</h1>the Body<p></body></html>'
const errorBody  = '<html><body><h1>403 - Forbidden</h1></body></html>' 
const binaryBody = 'garykxxrgQWV ZHDOGILFTEFVXCFGADcstjukjcr'
const jsonBody   = '{"first":"one", "second":"two"}'
const emptyBody  = ''

const payloads = (path:string, headers:{[header:string]:string}):Payload => {
    switch(path) {
        case '/myPath?query=value': 
            return { code:200, content: validBody};
        case '/myPath.json': 
            return { code:200, content: jsonBody };
        case '/myPath_put.json': 
            return { code:200, content: emptyBody };
        case '/myPath_post.json': 
            return { code:200, content: emptyBody };
        case '/myCached.txt': 
            return { code:200, content: validBody };
        case '/myCached.jpg': 
            return { code:200, content: binaryBody };
        case '/myAuthToken.txt': 
            return (headers.AuthToken === '12345')?
                { code:200, content: validBody } :
                { code:403, content: errorBody};
        case '/myAuthBasic.txt': 
            return { code:403, authenticate: 'Basic', content: errorBody };
        case '/myAuthDigest.txt': 
            return { code:401, authenticate: 'Digest', content: validBody };
        default: throw  `unrecognized paylod path ${path}`
    }
}

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

    it('should not pass without auth token', ()=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myAuthToken.txt';  
        return expect(request.get(url)).resolves.toStrictEqual({
            "data": errorBody, 
            "response": {
                "headers": {"content-type": "text/plain"}, 
                "method": "GET", 
                "status": 403, "statusCode": 403, "statusMessage": "403 ERROR", 
                "txt": true, 
                "url": "http://my.space.com/myAuthToken.txt"
            }});
    });

    it('should pass with auth token', ()=>{
        expect.assertions(1);
        request.setAuthToken('12345');
        const url = 'http://my.space.com/myAuthToken.txt';  
        return expect(request.get(url)).resolves.toStrictEqual({
            "data": validBody, // "<html><body id=\"theBody\"><h1 id=main>The Content</h1>the Body<p></body></html>", 
            "response": {
                "headers": {"AuthToken": "12345", "content-type": "text/plain"}, 
                "method": "GET", 
                "status": 200, "statusCode": 200, "statusMessage": "200 OK", 
                "txt": true, 
                "url": "http://my.space.com/myAuthToken.txt"
            }});
    });

    it('should ask for Basic authentication', ()=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myAuthBasic.txt';  
        return expect(request.get(url)).rejects.toBe(`error requesting ${url}: authentication missing; call 'setCredentials' before calling 'get' for url http://my.space.com/myAuthBasic.txt`);
    });

    it('should return with Basic authentication', async (done)=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myAuthBasic.txt';  
        request.setCredentials('me', 'mysecret');
        const r = await request.get(url);
        const data = <string>r.data;
        try {
            expect(data).toBe(errorBody);
            done();
        } catch(e) { done(e)}
    });

    it('should ask for Digest authentication', ()=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myAuthDigest.txt';
        return expect(request.get(url)).rejects.toBe(`error requesting ${url}: authentication missing; call 'setCredentials' before calling 'get' for url http://my.space.com/myAuthDigest.txt`);
    });

    it('should return with Digest authentication', async (done)=>{
        const url = 'http://my.space.com/myAuthDigest.txt';
        request.setCredentials('admin', 'littleSecret');
        const r = await request.get(url);
        const data = <string>r.data;
        expect(data).toBe(validBody);
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