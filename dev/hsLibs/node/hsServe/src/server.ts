const http    	= require("http");
const url     	= require("url");
const os      	= require("os");

import { log, fsUtil }  from "hsnode";
import { router }       from "./router";

const STD_HDLR	= "requestHandler.js";

log.prefix('server');

function parseQuery(queryStr:string) {
    let result = {};
    if (queryStr) {
        queryStr.split('&').forEach((param:string) => {
        	let q = param.split('=');
            result[q[0]] = q[1];
        }); 
    }
    return result;
}

function logResult(io:any) {
    const method = io.request.method;
	let msg = io.result.msg;
	if (msg === undefined) {
		switch (io.result.code) {
			case 200: msg = "completed serving " + io.request.pathname + ' ' + io.result.mimeType; break;
			case 404: msg = 'file not found: ' + io.request.pathname; break;
			case 206: msg = 'served range ' + io.request.range[0] + '-' + io.request.range[1] + 
							' of ' + io.request.pathname + ' ' + io.request.mimeType; break;
			default:  msg = 'code ' + io.result.code;
		}
	}	
	let clientAddress = io.request.headers['x-forwarded-for'] || io.request.remoteAddress;
    msg = `${method} ${clientAddress} ${io.result.code} ${io.result.data.length} ${io.result.mimeType} ${msg}`;
//	msg =  + " " + io.result.code + " " + io.result.data.length + " " + io.result.mimeType + " " + msg;
    log.info(msg);
}

/**
 * @description assembles and sends a response to the client using the 
 * following elements in `request.response`:
 * @param request
 * @returns
 */
function responseToClient(responseCB:any) {
	return (io:any) => {
		log.debug('responding...');
		io.result.code = io.result.code || 200;
		let mimeType = io.result.mimeType || "text/plain";
		let header = { 
		    "Content-Type": mimeType,
		    Location: 		'http://' + io.request.headers.host + 
		    				io.request.pathname.slice(1, io.request.pathname.length)
		};
		let range = io.request.range;
		if (range) {
			header["Content-Range"] = "bytes " + range[0] + "-" + range[1] + "/" + io.result.data.length;
			header["Accept-Ranges"] = "bytes";
			header["Content-Length"]= range[1]-range[0]+1;
			io.result.code = 206;
			io.result.data = io.result.data.slice(range[0], range[1]+1);
			io.result.msg = "range " + io.request.range[0] + '-' + io.request.range[1] + ' ' + (io.result.msg?io.result.msg:'');			
		} 

		responseCB.writeHead(io.result.code, header);
	    responseCB.write(io.result.data, ()=>{ });
	    responseCB.end();
	    logResult(io);
	};
}

function registerHandlers(router:any) {
	function addHandlers(apps:string[]) {
		apps = apps.filter(val => val.charAt(0)!=='.');
	    log.debug("apps: " + JSON.stringify(apps));
	    apps.forEach(app => {
        	// we're in srv/bin/http/ so we have to move up 2 levels to reach srv/apps...
            let handler = __dirname+"/../../apps/" + app + "/server/" + STD_HDLR;
	        if (app !== ".DS_Store") { router.addHandler(handler); }
	    });
	    router.addHandler("./" + STD_HDLR);
	}

	log.debug('adding handlers for path ' + __dirname + "/../../apps");
	fsUtil.readDir(__dirname + "/../../apps")
    .then((apps:any) => addHandlers(apps))
    .catch(log.error);
}

function getIOStruc(request:any) {
	let _url = url.parse(request.url);
	let pathname = _url.pathname;
	pathname = process.cwd() + ((pathname.charAt(0)==='/')? '' : '/.') + _url.pathname;
    let io = {
    	request: {
    		headers:		request.headers,
    		range: 			request.headers["range"],
    		method:			request.method,
    		url:			_url,
    		host:			request.headers.host,
	    	pathname:		pathname,
	    	query:	 		parseQuery(_url.query),
	    	postData: 		'',
	    	remoteAddress:	request.connection.remoteAddress
    	},
    	result: {
	    	data: 			'',
	    	address:		'',				// relay address
	    	mimeType: 		'text/html',
	    	msg:            <string>undefined,
	    	code: 			0,
    	}
    };
    var rangeRequest = request.headers["range"];
    if (io.request.range) { 
    	io.request.range = rangeRequest.replace(/bytes=/, "").split("-");
    	if (io.request.range.length !== 2) { io.request.range = undefined; }
    	else { 
    		io.request.range[0] = parseInt(io.request.range[0]); 
    		io.request.range[1] = parseInt(io.request.range[1]); 
    	}
    }
    
    log.debug(io.request.method + " request for " + io.request.pathname + ', query=' + _url.query);
    return io;
}

function stop(server:any) {
	if (server) { server.close(); }
	log.info('server stopped');
}

function start(port:number) {
    function onRequest(request:any, response:any) {    	
    	let io = getIOStruc(request);

        request.addListener("data", function(postDataChunk:string) {
            io.request.postData += postDataChunk;
            log.debug("Received POST data chunk length " + postDataChunk.length);
        });

        request.addListener("end", function() {
            Promise.resolve(io)
            .then(router.route)					// takes and provides a request structure
            .then(responseToClient(response)) 	// takes a request structure and provides nothing
            .catch(log.error);
        });
    }
    
    log.info('starting server');
    registerHandlers(router);
    let server = http.createServer(onRequest);
    server.listen(port);
    log.info("Nodejs " + process.version + " server started on http://" + os.hostname() + ":" + port + "/");
    return server; 
}

export const server ={ 
    start: start, 
    stop:  stop 
};