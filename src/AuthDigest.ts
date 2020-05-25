import { Log }              from './log';   const log = new Log('RequestDigest');
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
    generateCNONCE(qop:string) {
        let cnonce:any;
        let nc:string;

        if (typeof qop === 'string') {
            let cnonceHash = createHash('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonceHash.digest('hex').substr(0, 16);
            nc = this.updateNC();
        }
        return {cnonce: cnonce, nc: nc};
    }

    /**
     * 
     * @param options 
     * @param data 
     * @param response 
     */
    testAuth(options:Options, data:string, response:IncomingMessage): Options {
        log.debug(()=>`received www-authenticate request for ${options.host}`);

        let challenge:any = parseDigestResponse(response.headers['www-authenticate']);
        let ha1 = createHash('md5');
        let _str = `${this.username}:${challenge.realm}:${this.password}`;
        ha1.update(_str);
        let ha2 = createHash('md5');
        _str = `${options.method}:${options.path}`;
        ha2.update(_str);
    
        let {nc, cnonce} = this.generateCNONCE(challenge.qop);
        let hash = createHash('md5');
        _str = `${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`;
        hash.update(_str);
    
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
        }
    
        options.headers.Authorization = compileParams(authParams);
        return options;
    }
}

function omitNull(data:any) {
    let newObject = {};
    Object.keys(data).forEach((k:string) => {
        if (data[k] !== null && data[k] !== undefined) { newObject[k] = data[k]; }
    });
    return newObject;
}

/**
 * Compose authorization header
 * @param params 
 */
function compileParams(params:any) {
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}

/**
 * return `true` if double quotes are needed for `entry`
 * @param entry
 */
function putDoubleQuotes(entry:string) {
    return ['qop', 'nc'].indexOf(entry)<0;
}

function parseDigestResponse(digestHeader:string) {
    digestHeader = digestHeader.split('Digest ')[1];
    const params = {};
    digestHeader.replace(/(([^"]|"[^"]*")*?)(,)/g, (...rest:string[]) => {
        const part = rest[1];
        const kv = part.split('=').map((v:string) => v.trim());
        params[kv[0]] = kv[1].replace(/\"/g, '');
        return '';
    });
    return params;
}
