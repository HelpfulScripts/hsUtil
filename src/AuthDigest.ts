import { Log }              from './log';   const log = new Log('AuthDigest');
import { createHash }       from 'crypto';
import { Options }          from './Request';
import { IncomingMessage }  from './Request';
import { Auth }             from './Auth';


/**
 * Implements a Digest authentication, used in {@link request `request`} call.
 */
export class AuthDigest extends Auth {
    nc = 0;

    /**
     * Update and zero pad nc
     */
    updateNC():string {
        let max = 99999999;
        let padding = new Array(8).join('0') + '';
        this.nc = (this.nc > max ? 1 : this.nc + 1);
        let nc = this.nc + '';
        return padding.substr(0, 8 - nc.length) + nc;
    }

    /**
     * Parse challenge digest
     * @param qop 
     */
    generateCNONCE(qop:string, cnonce?:string) {
        if (!qop || qop === 'auth') {
            let cnonceHash = createHash('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonce ?? cnonceHash.digest('hex').substr(0, 16);
        }
        return {cnonce: cnonce, nc: this.updateNC()};
    }

    /**
     * 
     * @param options 
     * @param data 
     * @param response 
     */
    testAuth(options:Options, response:IncomingMessage, CNonce?:string): Options {
        const challenge:any = parseDigestResponse(response.headers['www-authenticate']);
        const ha1 = createHash('md5');
        const ha2 = createHash('md5');
        const hash = createHash('md5');
        ha1.update(`${this.username}:${challenge.realm}:${this.password}`);
        ha2.update(`${options.method}:${options.path}`);
        const {nc, cnonce} = this.generateCNONCE(challenge.qop, CNonce);
        hash.update(`${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`);
    
        // Setup response parameters
        let authParams:any = {
            realm: challenge.realm,
            username: this.username,
            uri: options.path,
            qop: challenge.qop,
            nonce: challenge.nonce,
            algorithm: "MD5",
            response: hash.digest('hex')
        };
    
        authParams = omitNull(authParams);
    
        if (cnonce) {
            authParams.nc = nc;
            authParams.cnonce = cnonce;
            log.info(`digest nc=${nc}`)
        }
    
        options.headers.Authorization = compileParams(authParams);
        options.headers.Accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
        options.headers['Accept-Encoding'] = 'gzip, deflate';
        return options;
    }
}

function omitNull(data:any) {
    let newObject = {};
    Object.keys(data).forEach((k:string) => data[k]? newObject[k] = data[k] : '');
    return newObject;
}

/**
 * Compose authorization header
 * @param params 
 */
function compileParams(params:any) {
    const putDoubleQuotes = (entry:string) => ['qop', 'nc'].indexOf(entry)<0;
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}


function parseDigestResponse(digestHeader:string) {
    digestHeader = digestHeader.split('Digest ')[1];
    const params = {};
    digestHeader.replace(/([^,]*)/g, (...rest:string[]) => {
        const part = rest[1];
        if (part) {
            const kv = part.split('=').map((v:string) => v.trim());
            params[kv[0]] = kv[1].replace(/\"/g, '');
        }
        return '';
    });
    return params;
}
