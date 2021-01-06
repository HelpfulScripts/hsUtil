import { Auth }         from "./Auth";
import { IncomingMessage, Options, Request } 
                        from "./Request";
import { AuthBasic }    from "./AuthBasic";


const options:Options = {
    rejectUnauthorized: false,
    method:     'GET',
    protocol:   'http',
    host:       '192.168.0.101:88',
    hostname:   '192.168.0.101',
    port:       '88',
    pathname:   '/dir/index.html',
    path:       '/dir/index.html',
    headers:    <any>{},
    url:        'http://192.168.0.101:88/dir/index.html',
};  

const response = <IncomingMessage><unknown>{
    headers: {
        'www-authenticate': 'Basic realm="testrealm@host.com"'
    }
}


const XHR = require('./__mocks__/XMLHttpRequest.js');

interface Payload {
    code:       number;
    content:    string;
    authenticate?: 'Basic'
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
        default: throw  `unrecognized paylod path ${path}`
    }
}

XHR.__setPayLoads(payloads);

const request = new Request();


window.XMLHttpRequest = <any>XHR;
XHR.load = jest.fn(xhr => xhr.onload());

describe('AuthBasic', () => {
    let auth:Auth;
    beforeAll(() => {
        auth = new AuthBasic('Mufasa', 'Circle Of Life');
        auth.testAuth(options, response, "0a4f113b");
    })
    beforeEach(() => {
        // log.level(Log.DEBUG, true);
        request.decode = undefined;
        request.clearPace();
        request.setCredentials();
        request.setAuthToken();
    });

    it('should create authentication', () => {
        const fields = options.headers.Authorization
        expect(fields).toContain('Basic')
    })

    it('should ask for Basic authentication', ()=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myAuthBasic.txt';  
        return expect(request.get(url)).rejects.toBe(`error requesting ${url}: credentials missing; call 'setCredentials' before calling 'get' for url http://my.space.com/myAuthBasic.txt`);
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
})

