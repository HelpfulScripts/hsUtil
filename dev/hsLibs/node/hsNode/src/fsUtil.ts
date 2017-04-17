const fs 	= require('fs');
const path	= require('path');
//const log	= require('./log');

import log from './log';

/**
 * @ngdoc object
 * @name hsNode.fsUtil
 * @description Convenience functions for file system access, wrapped in Promises.
 * - {@link hsNode.fsUtil#methods_realPath realPath}
 * - {@link hsNode.fsUtil#methods_pathExists pathExists}
 * - {@link hsNode.fsUtil#methods_isfile isFile}
 * - {@link hsNode.fsUtil#methods_isdirectory isDirectory}
 * - {@link hsNode.fsUtil#methods_readDir readDir}
 * - {@link hsNode.fsUtil#methods_readFile readFile}
 * - {@link hsNode.fsUtil#methods_readTextFile readTextFile}
 * - {@link hsNode.fsUtil#methods_readTextFile readTextFile}
 * - {@link hsNode.fsUtil#methods_readJsonFile readJsonFile}
 * - {@link hsNode.fsUtil#methods_writeFile writeFile}
 * - {@link hsNode.fsUtil#methods_writeTextFile writeTextFile}
 * - {@link hsNode.fsUtil#methods_writeJsonFile writeJsonFile}
 */

//===============================================================================
//  Low level Promise wrappers

function stat(thePath:string) {
	return Promise.resolve(thePath)
		.then(realPath)
		.then(thePath => new Promise((resolve, reject) => {
			fs.stat(thePath, (err:any, stats:any) => {
				if(err) { reject(err); } // reject is hard to test: realpath throws an error before stat can.
				else    { 
					stats.path = thePath;
					resolve(stats); 
				}
			});
		}));
}

function lstat(thePath:string) {
	return Promise.resolve(thePath)
		.then(path.normalize)
		.then(thePath => new Promise((resolve, reject) => {
			log.debug('lstat for ' + thePath);
			fs.lstat(thePath, (err:any, stats:any) => {
				if(err) { reject(err); }
				else    { 
					stats.path = thePath;
					resolve(stats); 
				}
			});
		}));
}

//===============================================================================
//   Exported functions

/**
 * @ngdoc object
 * @name realPath
 * @methodOf hsNode.fsUtil
 * @description determines the canonical path for `thePath`, resolving all symbolic links and '../'in the path.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide the real canonical system path.
 */
export function realPath(thePath:string) {
	return new Promise((resolve:(path:string)=>void, reject:(err:any)=>void) => {
		fs.realpath(thePath, (err:any, resolvedPath:string) => err? reject(err) : resolve(resolvedPath) );
	});
}



/**
 * @ngdoc object
 * @name pathExists
 * @methodOf hsNode.fsUtil
 * @description determines if `thePath` exists and promises to provide `true` or `false`.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide `true` or `false`
 */
export function pathExists(thePath:string) {
	return stat(thePath).then((stats:any) => stats.path).catch(() => false);
};

/**
 * @ngdoc object
 * @name isFile
 * @methodOf hsNode.fsUtil
 * @description determines if `thePath` is a file and promises to provide `true` or `false`.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide `true` or `false`
 */
export function isFile(thePath:string) {
	return stat(thePath).then((stats:any) => stats.isFile()? stats.path : false).catch(() => false);
};

/**
 * @ngdoc object
 * @name isDirectory
 * @methodOf hsNode.fsUtil
 * @description determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide `true` or `false`
 */
export function isDirectory(thePath:string) {
	return stat(thePath).then((stats:any) => stats.isDirectory()? stats.path : false).catch(() => false);
};

/**
 * @ngdoc object
 * @name isDirectory
 * @methodOf hsNode.fsUtil
 * @description determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide `true` or `false`
 */
export function isLink(thePath:string) {
	return lstat(thePath).then((stats:any) => stats.isSymbolicLink()? stats.path : false).catch(() => false);
};

/**
 * @ngdoc object
 * @name readDir
 * @methodOf hsNode.fsUtil
 * @description lists all files in a directory and promises to provide the list.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide a list of directory entries.
 */
export function readDir(thePath:string) {
	return Promise.resolve(thePath)
		.then(realPath)
		.then(thePath => new Promise((resolve:(files:any)=>void, reject:(err:any)=>void) => {
			fs.readdir(thePath, (err:any, files:any) =>  {
				if(err) { reject(err); }
				else    { 
					files.path = thePath;
					resolve(files); 
				}
			});
		}));
}


/**
 * @ngdoc object
 * @name readFile
 * @methodOf hsNode.fsUtil
 * @description reads a file either as binary or text and promises to provide the content.
 * @param {string} thePath the path to read
 * @param {boolean=} [isText=true] `true`|`false` if file should be read as `utf8`|binary 
 * @return {Promise} promise to provide file content.
 */
export function readFile(thePath:string, isText=true) {
	return new Promise((resolve, reject) => {
		let encoding = isText? 'utf8' : undefined;
		fs.readFile(thePath, encoding, (err:any, data:any) => {
			if (err) { reject(err); }
			resolve(data);
		});
	});
};

/**
 * @ngdoc object
 * @name readTextFile
 * @methodOf hsNode.fsUtil
 * @description reads a text file and promises to provide the content.
 * @param {string} thePath the path to read
 * @return {Promise} promise to provide file content.
 */
export function readTextFile(thePath:string) { 
	return readFile(thePath, true); 
};

/**
 * @ngdoc object
 * @name readJsonFile
 * @methodOf hsNode.fsUtil
 * @description reads a text file and promises to provide the content.
 * @param {string} thePath the path to read
 * @return {Promise} promise to provide file content.
 */
export function readJsonFile(thePath:string) {
    return Promise.resolve(thePath)
	.then(readTextFile)
	.then(JSON.parse);
}

/**
 * @ngdoc object
 * @name writeFile
 * @methodOf hsNode.fsUtil
 * @description writes a file either as binary or text and promises no return.
 * @param {string} thePath the path to write to
 * @param {object} content the content to write
 * @param {boolean} isText `true`|`false` if file should be read as `utf8`|binary 
 * @return {Promise} promise to provide nothing.
 */
export function writeFile(thePath:string, content:string, isText:boolean) {
	return new Promise((resolve, reject) => {
		var encoding = isText? 'utf8' : undefined;
	    fs.writeFile(thePath, content, encoding, (err:any) => err? reject(err) : resolve());
	});
};

/**
 * @ngdoc object
 * @name writeStream
 * @methodOf hsNode.fsUtil
 * @description writes content to a file either as a stream and promises no return.
 * @param {string} thePath the path to write to
 * @param {object} content the content to write
 * @return {Promise} promise to provide nothing.
 */
export function writeStream(thePath:string, content:string) {
	return new Promise((resolve, reject) => {
        let s = fs.createWriteStream(thePath, {flags:'w', mode:0o666});
        s.on('error', (src:any) => reject(src));
        s.write(content, 'binary', () => resolve());
        s.end();
	});
}

/**
 * @ngdoc object
 * @name writeTextFile
 * @methodOf hsNode.fsUtil
 * @description writes a text file and promises no return.
 * @param {string} thePath the path to write
 * @return {Promise} promise to provide nothing.
 */
export function writeTextFile(thePath:string, content:string) { 
	return writeFile(thePath, content, true);
};

/**
 * @ngdoc object
 * @name writeJsonFile
 * @methodOf hsNode.fsUtil
 * @description writes a text file and promises no return.
 * @param {string} thePath the path to write
 * @param {object} obj the object to write
 * @return {Promise} promise to provide nothing.
 */
export function writeJsonFile(thePath:string, obj:any) {
    return Promise.resolve(obj)
	.then(JSON.stringify)
	.then(data => writeTextFile(thePath, data)); 
}
