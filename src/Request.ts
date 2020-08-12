/**
 * Utility functions for HTTP and HTTPS GET, PUT, and POST. The module wraps a standard `XMLHttpRequest` and provides support for
 * - simple authentication methods, 
 * - decoding of received content.
 * - request pacing
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

import { Log }          from './log';   const log = new Log('Request');
import { Pace }         from './Pacing';
import { AuthDigest }   from './AuthDigest';
import { AuthBasic }    from './AuthBasic';
import { Auth }         from './Auth';

log.messageLength = 120;

export type Method = 'GET'|'POST'|'PUT';

// log.level(log.DEBUG);

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


export class Request {
    public static decoders = {
        str2json:  (data:string) => { try {return JSON.parse(data)} catch(e) { return {}}},
        html2json: <(data:string) => any>undefined
    };

    /** the `log` facility to use */
    protected log: Log = log;

    /** the pacing queue used to manage request flow */
    protected pace:Pace;

    /** the credentials to use for authentication, or `undefined` */
    private credentials: {user:string; password:string};
    
    /** the `AuthToken` to set in the header */
    private authToken: string;

    /** 
     * the location to use for caching. Set this property to the caching directory, e.g.:
     * `request.cache = './bin'`, ommitting a trailing `/`. 
     * To disable caching, set it to `undefined`.
     */
    public cache:string;

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
     * sets a `Pace` for the requests: 
     * @param pace number of ms between requests.
     * @param max upper limit of concurrent outstanding requests.
     * @param collectionPeriod time in ms to wait before executing call.
     */
    public setPace = ({pace=50, max=10, collectionPeriod=100}={pace:<any>undefined}) => {
        this.pace = pace===undefined? undefined : new Pace({pace:pace, maxConcurrent:max, collectionPeriod:collectionPeriod});
    }
    
    /** 
     * sets an optional decode function for retrieved content. The function will be 
     * applied to content retrieved either from the cache or from the server response.
     * Convenience function are available via the static list `Request.decoders`.
     * For example, `request.decode = Request.decoders.str2json
     */
    public decode = <Decoder>undefined;

    /**
     * constructs the cache name to use. The function call can be overwritten with 
     * a custom function to modify cache locations. 
     * This default implementation uses the `path` element in `Options` to create 
     * required subdirectories underneath the `cache` location.
     * @param options the request options
     */
    public cacheName = (options:Options):string =>
        this.cache===undefined? undefined :  //   'q=.../' --> 'q=...-'    remove ?
            `${this.cache}/${options.path.replace(/q=(.*?)\//g,'q=$1-').replace(/\?/g,'')}`

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
    public async put(url:string|URL, postData:any, {useCached=false, headers={}}={}):Promise<Response> {
        const options = this.getOptions(url, 'PUT');
        return this.decodedRequest(options, useCached, headers, postData);
    }

    /**
     * posts the content in `postData` to the server at the address specified by `url`.
     * @param url the address to post to
     * @param postData the data to post
     * @return a promise that resolves to a `Response` if the reuqest is successful
     * and that rejects with an error message if not.
     */
    public async post(url:string|URL, postData:any, {useCached=false, headers={}}={}):Promise<Response> {
        const options = this.getOptions(url, 'POST');
        return this.decodedRequest(options, useCached, headers, postData);
    }

    protected getURL(url:string|URL):URL { 
        return (typeof url === 'string')? new URL(url, document.URL) : url; 
    }

    protected getOptions(url:string|URL, method:Method):Options {
        url = this.getURL(url);
        const prefix = /*(method==='POST')? `/cgi/save.js/` :*/ '';
        const options = {
            rejectUnauthorized: false,
            method:     method,
            protocol:   url.protocol,
            host:       url.host,
            hostname:   url.hostname,
            port:       url.port,
            pathname:   prefix + url.pathname,
            path:       prefix + url.pathname + (url.search || ''),
            headers:    <any>{},
            // url:        `${url.protocol}//${url.host}${url.port?':'+url.port : ''}${prefix + url.pathname + (url.search || '')}`,
            url:        `${url.protocol}//${url.host}${prefix + url.pathname + (url.search || '')}`,
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
        if (this.decode && result.response.txt && options.method==='GET') {
            result.data = this.decode(<string>result.data, options);
        }
        return result;
    }

    /**
     * attempts to read a cached file and returns `undefined` if none is found.
     * The attempt consists of two steps:
     * - return a file named `<fname>.txt` as a text file, if available
     * - return a file names `<fname>.bin` as a binary file, if available
     * @param fname the path and name of the file, without extension
     * 
     */
    protected async readCached(fname:string):Promise<Response> {
        return undefined;   // no cache found
    }

    protected async writeCached(fname:string, response:Response) {
    }

    protected async requestOptions(options:Options, useCached:boolean, postData?:any):Promise<Response> {
        const fname = this.cache? this.cacheName(options) : undefined;
        if (fname && useCached && options.method === 'GET') { 
            const result = await this.readCached(fname); 
            if (result !== undefined) { return result; }
        }

        let request: Promise<Response>;
        if (this.pace) {
            this.log.info(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) ${options.method}-ing ${options.url}`); 
            request = this.pace.add(() => this.request(options, postData), `${options.method} ${options.url}`);
        } else {
            request = this.request(options, postData);
        }
        this.log.debug(()=>`${options.method}-ing ${options.url}`); 
        const response = await request;
        if (this.pace) { this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) received ${options.method} ${options.url} `); }
        this.log.debug(()=>`received ${options.method} ${response.response.statusMessage} ${options.method} ${options.url}`); 

        const code = response.response.statusCode||response.response.status;
        if(code >= 200 && code < 300) {
            if (fname && options.method === 'GET') {
                await this.writeCached(fname, response);
            }
        }
        return response;
    }

    protected async request(options:Options, postData?:any):Promise<Response> {
        try {
            const response = await this.issueRequest(options, postData);        
            let authenticate = response.response.headers['www-authenticate'];
            if (!authenticate) { 
                return response;
            } else if (this.credentials) { 
                    authenticate = authenticate.trim();
                    let auth: Auth;
                    if (authenticate.indexOf('Digest') === 0) {
                        auth = new AuthDigest(this.credentials.user, this.credentials.password);
                    } else if (authenticate.indexOf('Basic') === 0) {
                        auth = new AuthBasic(this.credentials.user, this.credentials.password);
                    } else {
                        throw `unimplemented authentication request ${authenticate} for '${options.url}'`;
                    }
                    auth.testAuth(options, response.data, response.response);
                    return this.request(options);
            } else {
                throw `authentication missing; call 'setCredentials' before calling 'get'`;
            }
        } catch(e) {
            throw `error requesting ${options.url}: ${e}`;
        }
    }

    protected async issueRequest(options:Options, postData?:any):Promise<Response> {
        const request = this;
        return new Promise((resolve:(out:Response)=>void, reject:(e:Response)=>void) => { try {
            function confirmRequest(e:any) {
                const headersText = xhr.getAllResponseHeaders();
                const headers = {'content-type':''};
                headersText.split('\r\n').map(h => {
                    const kv = h.split(':').map(p => p.trim());
                    if (kv[0].length) { headers[kv[0]] = kv[1]; }
                })
                const contentType = this.responseType;
                const txt = request.isTextualContent(contentType);

                // const data = this.responseType==='arraybuffer'? (txt? await this.response.text() : await this.response.arrayBuffer()) : this.response;
                const data = this.response;
                const response:Response = {
                    data:               data,
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
            const txt = request.isTextualRequest(options.pathname);
            this.log.debug(()=>`requesting ${options.method} ${this.log.inspect(options, {depth:4})}`);
            xhr.open(options.method, options.url, true);
            Object.keys(options.headers).forEach(h => xhr.setRequestHeader(h, options.headers[h]));
            xhr.responseType = txt? 'text' : 'arraybuffer';
            xhr.onload = confirmRequest;
            xhr.send(postData?JSON.stringify(postData):undefined);
        } catch(e) {
            reject(e);
        }})
    }

    protected isTextualContent(contentType:string):boolean {
        let txt = false;
        if (contentType===undefined) { contentType = 'text/html'; }
        else { contentType = contentType.split(';')[0]; }
        const subTypes = contentType.split('/');
        switch (subTypes[0]) {
            case '':       
            case 'text':        txt = true; break;
            case 'image':       
            case 'audio':
            case 'font':        break;
            case 'application': switch(subTypes[1]) {
                case 'json':    txt = true; break;
                case 'pdf':     break;
                case 'vnd.openxmlformats-officedocument.presentationml.presentation': break;
                case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet': break;
                case 'vnd.ms-powerpoint': break;
                case 'vnd.ms-excel': break;
                case 'octet-stream': break;
                case 'vnd.ms-excel.sheet.macroenabled.12': break;
                default: this.log.info(`caching ${contentType} as binary`);
            }
            break;
            default: this.log.warn(`caching '${contentType}' as binary`);    
        }
        return txt;
    }

    protected isTextualRequest(pathName:string):boolean {
        return ['json', 'txt', 'html'].some(ext => pathName.indexOf(ext) >= 0);
    }
}

