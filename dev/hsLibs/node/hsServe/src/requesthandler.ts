const path	= require("path");
import { log, fsUtil }  from "hsnode";

log.prefix('reqHdlr');
const TYPES	= {
	"html":		"text/html",
	"js":		"text/javascript",
	"json":		"application/json",
	"css":		"text/css",
	"woff":     "application/x-font-woff",
	"csv":      "application/octet-stream",
	"manifest": "text/cache-manifest",
	"png":		"image/png",
	"jpg":  	"image/jpg",
	"mp4":  	"video/mp4",
	"gif":  	"image/gif"
};

// return the pathname if save is allowed, else throws an error
function ifSaveAllowed(allowedPaths:string[], blockedPaths:string[]) {
	return (pathname:string) => {
		log.debug('check if saving is allowed to ' + pathname);
		for (let path of blockedPaths) {		// avoid save on paths that include any elements of blocked
			log.debug('-' + path);
			if (pathname.indexOf(path) === 0) {
				throw new Error('saving to ' + path + ' is blocked');
			}
		}	
		for (let path of allowedPaths) {		// only allow save on paths that include all elements of allowedPaths
			log.debug('+' + path);
			if (pathname.indexOf(path) === 0) { 
				return pathname; 
			}
		}
		throw new Error('saving to ' + pathname + ' is not allowed');
	};
}


function loadFile(io:any) {	
	let pathname =  io.request.pathname; 
	log.debug("try serving file " + io.request.pathname);
	let ext = pathname.split('.');
    ext = ext[ext.length-1];
    let type = (ext && TYPES[ext])? TYPES[ext] : "text/html";
    let isText = type.split('/')[0] === "text";
    io.result.msg = "serving " + pathname + (isText? ' as text':' ');
    io.result.mimeType = type;
    io.result.code = 200;
	let promise:any = fsUtil.readFile(pathname, isText)
		.then((data)=>{
		    io.result.data = data;
			return io;
		});
	promise.hdl = 'loadFile:'+ io.request.pathname;
	return promise;
}

/**
 * @description saves `postData` in a file at `pathname`, if allowed.
 * pathname may not match any entry in blockedPaths (checked first) 
 * and must match at least one entry in allowedPaths (checked second).  
 * @param {string} pathname file name to save to	
 * @param {any} postData content to save
 * @param {[string]} allowedPaths a list of allowed paths.
 * @param {[string]} blockedPaths a list of protected paths. 
 * @returns
 */
function saveFile(io:any, allowedPaths:string[]=[], blockedPaths:string[]=[]) {
	let pathname =  io.request.pathname;
	log.debug('request to save file ' + pathname);
	
	let dir  = path.dirname(pathname);
	let file = path.basename(pathname);
	let promise:any =  fsUtil.realPath(dir)
		.then(ifSaveAllowed(allowedPaths, blockedPaths))					// takes pathname, provides pathname
		.then((path:string) => {
			log.debug('save allowed, saving file ' + path+'/'+file);
			return fsUtil.writeTextFile(path+'/'+file, io.request.postData);
				// takes pathname, provides nothing
		})
		.then(() => {														// takes nothing, provides updated io
			io.request.pathname = pathname;
			log.info('saved file ' + pathname);
		    io.result.msg = "saved " + pathname + " (" + io.request.postData.length + ' bytes)';
		    return io;
		});
	promise.hdl = 'saveFile:'+ io.request.pathname;
	return promise;
}

export const rh = {
    save: saveFile, 
    load: loadFile
};