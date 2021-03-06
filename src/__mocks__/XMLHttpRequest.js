const contentTypes = {
    'jpg':  'image/jpeg',
    'png':  'image/png',
    'html': 'text/html',
    'txt':  'text/plain',
    '':     'text/html',
    'json': 'application/json'
}

let payLoad = undefined;



class XHR {
    static __setPayLoads(payloadFn) {
        payLoad = payloadFn;
    };
    static __posts = {};
    static load(xhr) { xhr.onload(); }
    responseType = '';
    reqHeaders = {};
    resHeaders = {};
    open(method, url, async) {
        const _url = new URL(url);
        this.method = method;
        this.url = url;
        this.async = async;
        this.pathname = _url.pathname;
        this.path = _url.pathname+_url.search;
    }
    // onload = async () => undefined;
    setRequestHeader(key, value) { this.reqHeaders[key] = value; }
    getAllResponseHeaders() { 
        return Object.keys(this.resHeaders).map(k => `${k}:${this.resHeaders[k]}`).join('\r\n');
    }
    send(postData) {
        XHR.__posts[this.url] = postData;
        const buffer = new ArrayBuffer(8);
        const file = this.path;
        const extIndex = file.lastIndexOf('.');
        const fileExt = (extIndex>0)? file.substr(extIndex+1) : '';
        const cType = contentTypes[fileExt];
        if (!cType) { console.log(`http mock encountered unknown filetype '${fileExt}' for path '${this.path}'`); }
        const pl = payLoad(this.path, this.reqHeaders);
        if (!pl) { console.log(`no payload entry found for '${this.path}'`); }
    
        const authenticated = this.reqHeaders['Authorization'];
        const authenticate = 
            pl.authenticate==='Basic'? 'Basic realm="User Visible Realm"' : undefined; 

        this.status = pl? pl.code : undefined;
        if (pl.authenticate && authenticated) { this.status = 200; }
        this.statusText = this.status=== 200? 'OK' : 'ERROR';
        this.responseURL = this.url;
        const headers = this.resHeaders = Object.assign({
            'content-type': cType || 'text/html',
        }, this.reqHeaders);
        if (authenticate && !authenticated) { headers['www-authenticate'] = authenticate; }
        this.response = this.responseType==='arraybuffer'? buffer : pl.content;
        XHR.load(this);
    }
}


module.exports = XHR;