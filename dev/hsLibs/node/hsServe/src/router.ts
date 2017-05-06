const http     = require("http");

import { log, fsUtil }  from "../hsNode";
import { rh }           from "./requesthandler.js";

const handlers:{list:any[]} = {list: []};
log.prefix('router');

function getAppSpace(path:string) {
    let j=path.indexOf("apps/");
    let jj = path.indexOf("/", j+6);
    return (jj>0)? path.substring(j-1, jj) : "default";
}

function addHandler(path:string) {	
    let appDesc:{handler:any; handlerPath:string; appName:string} = {
        handler: undefined,
        handlerPath: path,
        appName: getAppSpace(path)
    };
 
    fsUtil.realPath(path)
    .then((path:any) => {
        let h:any;
        log.debug('trying to load handler \'' + path + '\' ');
        try{ 
        	h = require(path);
        } catch(e) { log.error(e);}
		if (h) { 
			appDesc.handler = h.handle; 
		    handlers[appDesc.appName] = appDesc.handler;
		    log.info("added handler " + appDesc.appName);
		} 
    })
    .catch(() => { 
    	appDesc.handler = undefined;
        handlers[appDesc.appName] = appDesc.handler;
        log.info("added default handler for " + appDesc.appName);
    });
	handlers.list.push(appDesc);
}

function getPaths(io:any) {
    let appspace	= getAppSpace(io.request.pathname);
/*
 * let appspace = nodePath.dirname(reqUrl.pathname); appspace =
 * appspace.slice(0, appspace.lastIndexOf('/')); // will include /client
 * appspace = appspace.slice(0, appspace.lastIndexOf('/')); // without /client
 * if (appspace.length === 0) { appspace =
 * nodePath.dirname(io.request.pathname); }
 */
    return {
		appspace:		appspace,
		allowedSaves:	[process.cwd() + appspace + '/data', process.cwd()+'/tmp'],
        blockedSaves:   <string[]>[],
		appPath:		'/apps/' + appspace + io.request.pathname
	};
}

function routeGetApplist(io:any) {
	const css = '<link rel="stylesheet" href="/libraries/bootstrap/3.3.1/css/bootstrap.min.css" type="text/css">';
	io.result.data = css;
	io.result.data += "<div class='container-fluid'>";
    for (let i=0; i<handlers.list.length-1; i++) {	// exclude default from the list
        let appName = handlers.list[i].appName;
        io.result.data += "<h3><a href=" + appName + "/client/index.html>" + appName + "</a></h3>";
    }
    io.result.data += "</div>";
    io.result.mimeType = 'text/html';
    io.result.msg = 'serving app list';
    let promise:any = Promise.resolve(io);
	promise.hdl = 'routeGetApplist';
	return promise;
}

/**
 * @description relays a client request and reports the result of the relay request back to the client.
 * The relay address is provided via the `relay=http://...` query.
 */
function getRelayRequest(io:any) {
    let addr = decodeURI(io.request.query.relay);
    log.debug("relaying to '" + addr + "'");
    io.result.address = addr;
try {    	
    let promise:any = new Promise((resolve, reject) => {
    	io.result.data = '';
        http.get(addr, function(result:any){
            result.on('data', function(chunk:string) { 
            	io.result.data += chunk;
                log.debug((new Date()).getTime()/1000.0 + ": received chunk for " + addr);
            });
            result.on('end', function() {
                if (result.statusCode === 200) {
                	io.result.code=200;
                	io.result.msg = "serving relayed request to " + addr;
                    log.debug((new Date()).getTime()/1000.0 + ": received all data for " + addr);
                    resolve(io);
                } else {
                    log.debug("error " + result.statusCode + " relaying " + addr);
                    reject(new Error("error " + result.statusCode + " relaying " + addr));	// don't respond directly to lient
                }
            });
        }).on('error', function(e:string) {
            log.error("received " + e + " for relay " + addr);
            reject(new Error("received " + e + " for relay " + addr)); 	// don't respond directly to lient
        });
    });
	promise.hdl = 'relayRequest:' + addr;
	return promise;
} catch(e) { log.error(e); }        
}


function angularJSrequest(path:string) {
	let slash = path.lastIndexOf('/');
    if ((path.indexOf("/%7B%7B") === slash) && (path.lastIndexOf("%7D%7D") === path.length-6)) {
        log.debug("ignoring angularJS request " + path);
        return true;
    }
    return false;
}

function saveFile(io:any) {
	let paths = getPaths(io);
	// allow writing files only within data dir in appspace
    return rh.save(io, paths.allowedSaves, paths.blockedSaves);
}


/**
 * @description generates promises on plausible request handlers, each of which will provide a request.
 * @param io
 * @returns
 */
function* resolutions(io:any) {
// log.debug('resolutions for ' + io.request.pathname);
	
    // check for relay request
    if (io.request.query.relay) { 
		yield getRelayRequest(io);
    } 
    // generate root response page: list of all apps
    else if (io.request.pathname === process.cwd()+"/") {                                                  
		yield routeGetApplist(io);
    } 
	// ignore {{…}} type requests; these are handled client side
	else if (angularJSrequest(io.request.pathname)) {
		let promise:any = Promise.resolve(io);
		promise.hdl = 'angularJSrequest';
		yield promise;
	} 
	// save the data in a file if not a direct request handler command
	else if ((io.request.method === 'PUT' || io.request.method === 'POST') && (!io.request.query.action)) { 
		yield saveFile(io);
    } 
	// special request to handler
    // no file extension (. after last /): try serving default index.html
    else {
    	let pathname = io.request.pathname;
		let appspace = getPaths(io).appspace;

    	if (pathname.lastIndexOf(".") <= pathname.lastIndexOf("/")) {	
	    	let defFile = pathname;
	    	if (defFile.charAt(defFile.length-1) !== '/') { defFile += "/"; }
	    	defFile += "index.html";
	    	io.request.pathname = defFile;
	        yield rh.load(io);
    	}
		yield rh.load(io);

       	if (handlers[appspace] && Object.keys(io.request.query).length>0) { 
            log.info("deferring to app handler: " + appspace + " request for " + pathname + ", query=" + JSON.stringify(io.request.query));
            let promise = handlers[appspace](io);
            promise.hdl = 'app handler ' + appspace;
            yield promise;
         }
    } 
}


/**
 * @description processes a client request;
 * expects the following request properties:
 * {
 * request: {
 * 		method:			request.method,
 * 		url:			_url,
 * 		host:			request.headers.host,
 * 		pathname:		_url.pathname,
 * 		query:	 		parseQuery(_url.query),
	    	postData: 		'',
	    	remoteAddress:	request.connection.remoteAddress
    	},
    	result: {
	    	data: 			'',
	    	mimeType: 	'text/html',
	    	code: 			0,
    	}
    } * and adds the following request properties:
 * {
 * 	[mimeType]	// defaults to "text/plain";
 * 	location		// string
 * 	headers.host
 * 	code			// defaults to 200
 * 	data			// the requested content
 * 	msg				// message to accompany the response (e.g. error message)
 * } 
 */
function route(io:any) {
	/**
	 * resolves for the first promise that resolves.
	 * rejects after all promises rejected.
	 */
	function anyOf(promises:any) {
		log.debug("resolutions: [" + promises.map((p:any,i:number) => (i>0?' | ':'') + p.hdl) + "]"); 
		return new Promise((resolve, reject) => {
			let settled = 0;
			promises.forEach((promise:any) => {
				promise
					.then((result:any) => { 
						log.debug('++ promise successful: ' + promise.hdl);				
						settled++; 
						resolve(result); 
					})
					.catch((error:any) => {
						log.debug('-- promise failed: ' + promise.hdl);				
						settled++; 
						if (settled >= promises.length) { 
							log.debug('all ' + promises.length + ' promises failed'); 
							reject(error+''); 
						}
					});
			});
		});
	}
	return anyOf([...resolutions(io)]);
}

export const router = { 
    route: route, 
    addHandler: addHandler 
};