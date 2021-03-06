/**
 * Utility functions for HTTP and HTTPS GET, PUT, and POST. The module wraps a standard `XMLHttpRequest` and provides support for
 * - simple authentication methods, 
 * - decoding of received content.
 * - request pacing,
 * 
 * ### Authentication
 * Authentication is enabled by setting {@link Request.Request.setCredentials `request.setCredentials`} before any call to 
 * {@link Request.Request.get `request.get`} or {@link Request.Request.post `request.post`}.
 * The following authentication schemes are currently supported:
 * - Basic
 * - Digest
 * 
 * ### Decoding
 * Content received from a server or a cache can be decoded before returning the result. 
 * Decoding is disabled by default and can be enabled by setting a `Decoder` function:
 * `request.decode = Request.decoders.str2json`
 * 
 * For convenience, the following predefined decoder functions are provided as static members of `Request.decoders`:
 * - str2json applies JSON.parse to the content to return an object literal
 * - html2json applies (html2json)[https://github.com/jxck/html2json#readme] to the content
 * 
 * ### Pacing
 * Enable request pacing via `request.setPace(ms, max)`. When enabled, requests will be issued with a minimal 
 * amount of `ms` milliseconds between them, and there will never be more than `max` number of calls pending.
 * All additional calls will be placed in a queue until the `ms` abd `max` conditions allow calling them.
 * 
 * ### Usage:
 * ```
 * import { Request } from 'hsutil';
 * const request = new Request.Request();
 * request.cache = __dirname + '/../_data/cache';
 * request.decode = (options:http.Options) => options.path.indexOf('binData?id=') < 0;
 * request.setAuthToken(apptokens.token);
 * const content = await request.get('http://...');
 * ```
 */

/** */

import { Log }          from './log';  
import { Pace }         from './Pacing';
import { Auth }         from './Auth';


export type Method = 'GET'|'POST'|'PUT';


export interface Options {
    url:        string;
    method:     Method;
    protocol:   string;
    host:       string;
    hostname:   string;
    port:       string;
    pathname:   string;
    path:       string;
    headers:    any;
    rejectUnauthorized: boolean;
}

/**
 * general HTTP response structure
 */
export interface Response {
    response:   IncomingMessage;
    data:       string|ArrayBuffer;
    cached?:    boolean;
}

/**
 * Describes an incoming message; used in `Digest.testDigestAuth`
 */
export interface IncomingMessage { 
    txt:            boolean; 
    headers:        {'content-type': string; };
    method:         string;
    status:         number;
    statusCode:     number;
    statusMessage:  string;
    url:            string;
}

export interface Credentials {user:string; password:string}

/** 
 * decoder function interface. For the given `Options` and data a function implementation  
 * shoul;d return a decoded version of `data`.
 */
export interface Decoder {
    /**
     * decoder function, returns a decoded version of `data`
     * @param options the `Options` structure used to place the request
     * @param data the data to decode
     * @return a decoded version of `data`
     */
    (data:string, options:Options):any;
}


export class Authenticators {
    private static auths:{[url:string]:Auth} = {}
    private static authProviders:{name:string, provider:(credentials:Credentials)=>Auth}[] = []
    public static addAuthProvider(name:string, provider:(credentials:Credentials)=>Auth) {
        Authenticators.authProviders.push({name:name, provider:provider})
    }
    public static get(authRequest:string, credentials:Credentials, url:string):Auth {
        if (!authRequest) { // no request for authorization: return undefined
            return undefined
        } else if (!credentials) { 
            throw `credentials missing; call 'setCredentials' before calling 'get' for url ${url}`;
        }
        let auth = Authenticators.auths[url];
        if (!auth) {
            if (!Authenticators.authProviders.some(entry => {
                if (authRequest.indexOf(entry.name)===0) return auth = entry.provider(credentials)
            })) throw `unimplemented authentication method ${authRequest} for '${url}'; ensure the proper authentication model is imported`;
        }
        return auth
    }
}


export class Request {
    private static contentTypes = <{subTypes:string[], isText:boolean}[]>[];
    public static addContentType(type:string, isText:boolean) {
        const subTypes = type.split('/');
        Request.contentTypes.push({subTypes:subTypes, isText:isText});
    }
    public static decoders = {
        str2json:  (data:string) => JSON.parse(data.replace(/\p{Control}/gu,"")),
        html2json: <(data:string) => any>undefined
    };

    /** 
     * the `log` facility to use. This allows derivative classes to overwrite the 
     * browser-compatible log a more suitable `log` version, e.g. in `Node` environments.
     */
    protected readonly log: Log;

    /** the pacing queue used to manage request flow */
    protected pace:Pace;

    /** the credentials to use for authentication, or `undefined` */
    private credentials: Credentials;
    
    /** the `AuthToken` to set in the header */
    private authToken: string;

    public constructor(_Log=Log, prefix='Request') {
        this.log = new _Log(prefix)
        this.log.messageLength = 120;
    }

    /**
     * sets the credentials for `Basic` and `Digest` authentications.
     * @param user the username to use; if `undefined`, then authentication will be disabled.
     * @param password the password to use
     */
    public setCredentials = (user?:string, password?:string) => {
        this.credentials = user===undefined? undefined : { user: user, password: password };
    }
    
    /** sets an authentication token that is passed on to the server via a header field `AuthToken` */
    public setAuthToken = (token?:string) =>
        this.authToken = token
    
    /**
     * sets a `Pace` for the requests. Call `request.setPace()` to remove pacing.
     * @param pace number of ms between requests.
     * @param max upper limit of concurrent outstanding requests.
     * @param collectionPeriod time in ms to wait before executing call.
     */
    public setPace = ({pace=50, max=10, collectionPeriod=100}={pace:<any>null}) => {
        this.pace = (!pace || pace<0)? undefined : new Pace({pace:pace, maxConcurrent:max, collectionPeriod:collectionPeriod});
    }
    
    /**
     * clears a `Pace`.
     */
    public clearPace = () => this.setPace();
    
    /** 
     * sets an optional decode function for retrieved content. The function will be 
     * applied to content retrieved either from the cache or from the server response.
     * Convenience function are available via the static list `Request.decoders`.
     * For example, `request.decode = Request.decoders.str2json`
     */
    public decode = <Decoder>undefined;

    /**
     * gets the content for the addressed `url`. `HTTP` and `HTTPS` are supported.
     * @param url the address to fetch from
     * @param useCached optional, defaults to `true`. Set to `false` to avoid using 
     * the cache for this call in case caching is enabled.
     * @return a promise that resolves to a `Response` if the reuqest is successful
     * and that rejects with an error message if not.
     */
    public async get(url:string|URL, {useCached=true, headers={}}={}):Promise<Response> {
        const options = this.getOptions(url, 'GET');
        return this.decodedRequest(options, useCached, headers);
    }

    /**
     * posts the content in `postData` to the server at the address specified by `url`.
     * @param url the address to post to
     * @param postData the data to post
     * @return a promise that resolves to a `Response` if the reuqest is successful
     * and that rejects with an error message if not.
     */
    public async put(url:string|URL, postData:any, {headers={}}={}):Promise<Response> {
        const options = this.getOptions(url, 'PUT');
        return this.decodedRequest(options, false, headers, postData);
    }

    /**
     * posts the content in `postData` to the server at the address specified by `url`.
     * @param url the address to post to
     * @param postData the data to post
     * @return a promise that resolves to a `Response` if the reuqest is successful
     * and that rejects with an error message if not.
     */
    public async post(url:string|URL, postData:any, {headers={}}={}):Promise<Response> {
        const options = this.getOptions(url, 'POST');
        return this.decodedRequest(options, false, headers, postData);
    }

    protected getURL(url:string|URL):URL { 
        return (typeof url === 'string')? new URL(url, document.URL) : url; 
    }

    protected getOptions(url:string|URL, method:Method):Options {
        url = this.getURL(url);
        const options = {
            rejectUnauthorized: false,
            method:     method,
            protocol:   url.protocol,
            host:       url.host,
            hostname:   url.hostname,
            port:       url.port,
            pathname:   url.pathname,
            path:       url.pathname + (url.search || ''),
            headers:    <any>{},
            url:        `${url.protocol}//${url.host}${url.pathname + (url.search || '')}`,
        };  
        if (this.authToken) { options.headers.AuthToken = this.authToken; }
        return options;  
    }

    /**
     * issues a `GET` or `POST` call and returns the `url` response. 
     * If `usedCache` is `true`, the cached version will be returned if available. 
     * Otherwise an `http` or `https` request is initiated, the result cached and returned.
     * If `decode` is defined it is called with the retrieved data before returning the result. 
     * @param url the url to retrieve
     * @param method 'GET' or 'POST'
     * @param useCached if `true`, attempt to return a cahced version. If `false`, or no cached version
     * exists, a remote call will be attempted.
     * @param postData data to submit for a `POST` call
     */
    protected async decodedRequest(options:Options, useCached:boolean, headers:any, postData?:any):Promise<Response> {
        const result = await this.requestOptions(options, useCached, postData); 
        if (this.decode && result.response.txt && options.method==='GET') { try {
            result.data = this.decode(<string>result.data, options);
        } catch(e) {
            this.log.error(`decoding ${result.cached?'cached ':''}${options.url}:`)
            this.log.error(`${e}`)
        }}
        return result;
    }

    /**
     * Queue, or pass through, the request 
     * @param options 
     * @param useCached 
     * @param postData 
     * @returns 
     */
    protected async requestOptions(options:Options, useCached:boolean, postData?:any):Promise<Response> {
        let request: Promise<Response>;
        if (this.pace) {
            this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) ${options.method}-ing ${options.url}`); 
            request = this.pace.add(() => this.request(options, postData), `${options.method} ${options.url}`);
        } else {
            request = this.request(options, postData);
        }
        // this.log.debug(()=>`${options.method}-ing ${options.url}`); 
        const response = await request;
        const httpCode = response.response.statusCode||response.response.status;
        const queueInfo = this.pace? `(${this.pace.inQueue()} | ${this.pace.inProgress()}) ` : ''
        this.log.transient(`${queueInfo}received ${options.method} ${httpCode} ${options.url} `);
        return response;
    }

    /**
     * Issue actual server request and resolve any authentication responses
     * @param options 
     * @param postData 
     * @returns 
     */
    protected async request(options:Options, postData?:any):Promise<Response> {
        let response:Response;
        try {
            response = await this.issueRequest(options, postData);        
            const auth = Authenticators.get(response.response.headers['www-authenticate'], this.credentials, options.url);
            response =  auth? await this.request(auth.testAuth(options, response.response)) : response;
        } catch(e) {
            this.log.error(`request: ${e}\n${Object.entries(options.headers).join('\n')}`)
            throw `error requesting ${options.url}: ${e}`;
        }
        const len = typeof response.data === 'string'? response.data.length : response.data.byteLength
        this.log.info(`received ${options.method} ${response.response.statusCode||response.response.status} ${(''+len).padStart(5,' ')} bytes ${options.url} `);
        return response
    }

    protected async issueRequest(options:Options, postData?:any):Promise<Response> {
        const isTextualContent = this.isTextualContent.bind(this)
        return new Promise((resolve:(out:Response)=>void, reject:(e:Response)=>void) => { try {
            function confirmRequest(e:any) {
                const headersText = xhr.getAllResponseHeaders();
                const headers = {'content-type':''};
                headersText.split('\r\n').map(h => {
                    const kv = h.split(':').map(p => p.trim());
                    if (kv[0].length) { headers[kv[0]] = kv[1]; }
                })
                // const contentType = this.responseType;
                // const txt = isTextualContent(contentType);
                const txt = isTextualContent(headers['content-type'], headers['content-length'], options.url);

                // const data = this.responseType==='arraybuffer'? (txt? await this.response.text() : await this.response.arrayBuffer()) : this.response;
                const data = this.response;
                const response:Response = {
                    data:               data,
                    cached:             false,
                    response: {
                        txt:            txt,
                        headers:        headers,
                        method:         options.method,
                        status:         this.status, 
                        statusCode:     this.status, 
                        statusMessage:  `${this.status} ${this.statusText}`,
                        url:            this.responseURL,
                    }
                };
                resolve(response);
            }
            const xhr = new XMLHttpRequest();
            const txt = Request.isTextualRequest(options.pathname);
            // this.log.debug(()=>`requesting ${options.method} ${this.log.inspect(options, {depth:4})}`);
            xhr.open(options.method, options.url, true);
            Object.keys(options.headers).forEach(h => xhr.setRequestHeader(h, options.headers[h]));
            xhr.responseType = txt? 'text' : 'arraybuffer';
            xhr.onload = confirmRequest;
            xhr.send(postData?JSON.stringify(postData):undefined);
        } catch(e) {
            reject(e);
        }})
    }

    protected isTextualContent(contentType:string, contentLength:number, url:string):boolean {
        if (contentType===undefined) {
            this.log.warn(`undefined contentType; assuming binary for len=${contentLength} for '${url}'`)
            return false;
        }
        const subTypes = contentType.split('/');
        const match = Request.contentTypes.filter(entry => entry.subTypes.every((st, i) => subTypes[i] === st));
        if (match.length>0) {
            return match[0].isText;
        } else {
            this.log.warn(`no match found for '${contentType}'; caching as binary`);  
            return false;
        }
    }

    protected static isTextualRequest(pathName:string):boolean {
        return ['json', 'txt', 'html'].some(ext => pathName.indexOf(ext) >= 0);
    }
}

[
    ['text', true],
    ['text/html', true],
    ['image', false],
    ['audio', false],
    ['font', false],
    ['application/json', true],
    ['application/pdf', false],
    ['application/vnd.openxmlformats-officedocument.presentationml.presentation', false],
    ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', false],
    ['application/vnd.ms-powerpoint', false],
    ['application/vnd.ms-excel', false],
    ['application/vnd.ms-excel.sheet.macroenabled.12', false],
    ['application/octet-stream', false],
].forEach(e => Request.addContentType(<string>e[0], <boolean>e[1]));

