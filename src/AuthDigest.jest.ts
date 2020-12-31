import { Auth } from "./Auth";
import { AuthDigest } from "./AuthDigest";
import { IncomingMessage, Options } from "./Request";

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
        'www-authenticate': 'Digest realm="testrealm@host.com", nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093", qop="auth"'
    }
}

describe('AuthDigest', () => {
    let auth:Auth;
    beforeAll(() => {
        auth = new AuthDigest('Mufasa', 'Circle Of Life');
        auth.testAuth(options, response, "0a4f113b");
    })
    it('should create authentication', () => {
        const fields = options.headers.Authorization
        expect(fields.match(/Digest realm=(.*?)(,|$)/)[1]).toBe('"testrealm@host.com"')
        expect(fields.match(/username=(.*?)(,|$)/)[1]).toBe('"Mufasa"')
        expect(fields.match(/qop=(.*?)(,|$)/)[1]).toBe('auth')
        expect(fields.match(/nonce=(.*?)(,|$)/)[1]).toBe('"dcd98b7102dd2f0e8b11d0f600bfb0c093"')
        expect(fields.match(/algorithm=(.*?)(,|$)/)[1]).toBe('"MD5"')
        expect(fields.match(/nc=(.*?)(,|$)/)[1]).toBe('00000001')
        expect(fields.match(/cnonce=(.*?)(,|$)/)[1]).toBe('"0a4f113b"')
        expect(fields.match(/response=(.*?)(,|$)/)[1]).toBe('"6629fae49393a05397450978507c4ef1"')
    })
})