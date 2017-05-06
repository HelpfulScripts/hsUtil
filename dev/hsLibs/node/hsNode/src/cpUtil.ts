const cp    = require('child_process');
import { log } from './';

/**
 * @ngdoc object
 * @name hsNode.cpUtil
 * @description Convenience functions for child process access, wrapped in Promises.
 * - {@link hsNode.cpUtil#methods_exec exec}
 */

//===============================================================================
//  Low level Promise wrappers
 
/**
 * @ngdoc object
 * @name exec
 * @methodOf hsNode.cpUtil
 * @description executes `command` in a child process and promises to return the stdout and stderr streams.
 <pre>
        let utils = require('./cpUtils');
        utils.exec(cmd)
            .then((stdout, stderr) => {...})
            .catch(err => {...});
</pre>
 * @param {string} command the shell command to execute
 * @param {object} options the options to pass along to the shell
 * @return {Promise} promise to provide the stdout and stderr streams form the child process.
 */
function exec(command:string, options?:any) {
    return new Promise((resolve:(result:{out:string, err:string})=>void, reject:(e:string)=>void) => {
        cp.exec(command, options, (error:string, stdout:string, stderr:string) => {
            if (error) {
			    log.error('exec for ' + command + ': ' + error);
                reject(error);
            } else {
                resolve({out:stdout, err:stderr});
            }
        });
    });
}

export { exec };