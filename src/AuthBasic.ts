import { Options, Authenticators, Credentials }          
                    from './Request';
import { Auth }     from './Auth';


export class AuthBasic extends Auth {
    testAuth(options:Options): Options {
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}

function _btoa(str:string|Buffer):string {
    const buffer = str instanceof Buffer? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}

Authenticators.addAuthProvider('Basic', (credentials:Credentials):Auth => new AuthBasic(credentials.user, credentials.password))