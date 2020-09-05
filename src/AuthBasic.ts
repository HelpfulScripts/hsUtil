import { Log }              from './log';   const log = new Log('RequestBasic');
import { Options }          from './Request';
import { IncomingMessage }  from './Request';
import { Auth }             from './Auth';


export class AuthBasic extends Auth {
    testAuth(options:Options, data:string, response:IncomingMessage): Options {
        log.debug(()=>`received www-authenticate request for ${options.host}`);
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}

function _btoa(str:string|Buffer):string {
    const buffer = str instanceof Buffer? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}

// function _atob(str:string):string {
//     return Buffer.from(str, 'base64').toString('binary');
// }
  
  

