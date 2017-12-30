const fs 	= require('fs');
const path	= require('path');

import { log } from './';

/**
 * Convenience functions for file system access, wrapped in Promises.
 * - {@link hsNode.fsUtil#methods_realPath realPath}
 * - {@link hsNode.fsUtil#methods_pathExists pathExists}
 * - {@link hsNode.fsUtil#methods_isfile isFile}
 * - {@link hsNode.fsUtil#methods_isdirectory isDirectory}
 * - {@link hsNode.fsUtil#methods_readDir readDir}
 * - {@link hsNode.fsUtil#methods_readFile readFile}
 * - {@link hsNode.fsUtil#methods_readTextFile readTextFile}
 * - {@link hsNode.fsUtil#methods_readJsonFile readJsonFile}
 * - {@link hsNode.fsUtil#methods_writeFile writeFile}
 * - {@link hsNode.fsUtil#methods_writeTextFile writeTextFile}
 * - {@link hsNode.fsUtil#methods_writeJsonFile writeJsonFile}
 * - {@link hsNode.fsUtil#methods_appendFile appendFile}
 * - {@link hsNode.fsUtil#methods_remove remove}
 */

 export interface Stats {
    path:       string;     // path to the file
    device:     any;        // ID of device containing file
    iNode:      number;     // Inode number 
    type:       number;     // File type and mode 
    numLinks:   number;     // Number of hard links 
    userID:     string;     // User ID of owner 
    groupID:    string;     // Group ID of owner 
    deviceID:   string;     // Device ID (if special file) 
    totalSize:  number;     // Total size, in bytes 
    blockSize:  number;     // Block size for filesystem I/O 
    numBlocks:  number;     // Number of 512B blocks allocated 
    accessTime:       any;  // Time of last access
    modifyTime:       any;  // Time of last modification
    statusChangeTime: any;  // Time of last status change     
 }

//===============================================================================
//  Low level Promise wrappers

function stat(thePath:string):Promise<Stats> {
	return Promise.resolve(thePath)
		.then(realPath)
		.then(thePath => new Promise((resolve:(value:Stats)=>void, reject) => {
			fs.stat(thePath, (err:any, stats:Stats) => {
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

function error(err:any):any {
    const msg = `*** error in fsUtil: ${err}`;
    console.log(msg);
    console.log(err.trace);
    throw new Error(msg);
}

//===============================================================================
//   Exported functions

/**
 * determines the canonical path for `thePath`, resolving all symbolic links and '../'in the path.
 * @param thePath the path to check
 * @return promise to provide the real canonical system path.
 */
function realPath(thePath:string):Promise<string> {
	return new Promise((resolve:(path:string)=>void, reject:(err:any)=>void) => {
		fs.realpath(thePath, (err:any, resolvedPath:string) => err? reject(err) : resolve(resolvedPath) );
    })
    .catch(error);
}

/**
 * determines if `thePath` exists and promises to provide `true` or `false`.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide `true` or `false`
 */
function pathExists(thePath:string):Promise<boolean> {
	return stat(thePath).then((stats:any) => stats.path).catch(() => false)
    .catch(error);
};

/**
 * determines if `thePath` is a file and promises to provide `true` or `false`.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide `true` or `false`
 */
function isFile(thePath:string):Promise<boolean> {
	return stat(thePath).then((stats:any) => stats.isFile()? stats.path : false).catch(() => false)
    .catch(error);
};

/**
 * determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide `true` or `false`
 */
function isDirectory(thePath:string):Promise<boolean> {
	return stat(thePath).then((stats:any) => stats.isDirectory()? stats.path : false).catch(() => false)
    .catch(error);
};

/**
 * determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide `true` or `false`
 */
function isLink(thePath:string):Promise<boolean> {
	return lstat(thePath).then((stats:any) => stats.isSymbolicLink()? stats.path : false).catch(() => false)
    .catch(error);
};

/**
 * lists all files in a directory and promises to provide the list.
 * @param {string} thePath the path to check
 * @return {Promise} promise to provide a list of directory entries.
 */
function readDir(thePath:string):Promise<string[]> {
	return Promise.resolve(thePath)
		.then(realPath)
		.then(thePath => new Promise((resolve:(files:any)=>void, reject:(err:any)=>void) => {
			fs.readdir(thePath, (err:any, files:any) =>  {
				if(err) { reject(err); }
				else { 
					files.path = thePath;
					resolve(files); 
				}
			});
		}))
    .catch(error);
}


/**
 * reads a file either as binary or text and promises to provide the content.
 * @param {string} thePath the path to read
 * @param {boolean=} [isText=true] `true`|`false` if file should be read as `utf8`|binary 
 * @return {Promise} promise to provide file content.
 */
function readFile(thePath:string, isText=true):Promise<any> {
	return new Promise((resolve:(data:any)=>void, reject:(err:any)=>void) => {
		let encoding = isText? 'utf8' : undefined;
		fs.readFile(thePath, encoding, (err:any, data:any) => {
			if (err) { reject(err); }
			resolve(data);
		});
	})
    .catch(error);
};

/**
 * reads a text file and promises to provide the content.
 * @param {string} thePath the path to read
 * @return {Promise} promise to provide file content.
 */
function readTextFile(thePath:string):Promise<string> { 
	return readFile(thePath, true)
    .catch(error);
};

/**
 * reads a text file and promises to provide the content.
 * @param {string} thePath the path to read
 * @return {Promise} promise to provide file content.
 */
function readJsonFile(thePath:string):Promise<any> {
    return readFile(thePath, true)
	.then((data:any) => (typeof data === 'string')? JSON.parse(data) : data)
    .catch(error);
}

/**
 * writes a file either as binary or text and promises no return.
 * @param {string} thePath the path to write to
 * @param {object} content the content to write
 * @param {boolean} isText `true`|`false` if file should be read as `utf8`|binary 
 * @return {Promise} promise to provide nothing.
 */
function writeFile(thePath:string, content:string, isText:boolean=true):Promise<void> {
	return new Promise((resolve, reject) => {
		var encoding = isText? 'utf8' : undefined;
	    fs.writeFile(thePath, content, encoding, (err:any) => err? reject(err) : resolve());
	})
    .catch(error);
};

/**
 * writes content to a file either as a stream and promises no return.
 * @param {string} thePath the path to write to
 * @param {object} content the content to write
 * @return {Promise} promise to provide nothing.
 */
function writeStream(thePath:string, content:string):Promise<void> {
	return new Promise((resolve, reject) => {
        let s = fs.createWriteStream(thePath, {flags:'w', mode:0o666});
        s.on('error', (src:any) => reject(src));
        s.write(content, 'binary', () => resolve());
        s.end();
	})
    .catch(error);
}

/**
 * writes a text file and promises no return.
 * @param {string} thePath the path to write
 * @return {Promise} promise to provide nothing.
 */
function writeTextFile(thePath:string, content:string):Promise<void> { 
	return writeFile(thePath, content, true)
    .catch(error);
};

/**
 * writes a text file and promises no return.
 * @param {string} thePath the path to write
 * @param {object} obj the object to write
 * @return {Promise} promise to provide nothing.
 */
function writeJsonFile(thePath:string, obj:any):Promise<void> {
    return Promise.resolve(obj)
	.then(JSON.stringify)
	.then(data => writeTextFile(thePath, data))
    .catch(error);
}

/**
 * appends to a file either as binary or text and promises no return.
 * @param {string} thePath the path to write to
 * @param {object} content the content to write
 * @param {boolean} isText `true`|`false` if file should be read as `utf8`|binary 
 * @return {Promise} promise to provide nothing.
 */
function appendFile(thePath:string, content:string, isText:boolean=true):Promise<void> {
	return new Promise((resolve, reject) => {
		var encoding = isText? 'utf8' : undefined;
	    fs.appendFile(thePath, content, encoding, (err:any) => err? reject(err) : resolve());
	})
    .catch(error);
};

/**
 * promises to delete a file or folder.
 * @param {string} thePath the path to write
 * @return {Promise} promise to provide nothing.
 */
function remove(thePath:string):Promise<void> {
	return new Promise((resolve:()=>void, reject:(err:any)=>void) => {
        fs.unlink(thePath, (e:any) => (e? reject(e) : resolve()));
	})
    .catch(error);
}

export const fsUtil = { 
    realPath:       realPath, 
    pathExists:     pathExists, 
    isFile:         isFile, 
    isDirectory:    isDirectory, 
    isLink:         isLink, 
    readDir:        readDir, 
    readFile:       readFile, 
    readTextFile:   readTextFile, 
    readJsonFile:   readJsonFile, 
    writeFile:      writeFile, 
    writeStream:    writeStream, 
    writeTextFile:  writeTextFile, 
    writeJsonFile:  writeJsonFile,
    appendFile:     appendFile, 
    remove:         remove 
};