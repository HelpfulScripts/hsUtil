import { Log }              from './log';   const log = new Log('RequestBasic');
import { Options }          from './Request';
import { IncomingMessage }  from './Request';
import { Auth }             from './Auth';


export class AuthBasic extends Auth {
    testAuth(options:Options, data:string, response:IncomingMessage): Options {
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}

function _btoa(str:string|Buffer):string {
    const buffer = str instanceof Buffer? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}
