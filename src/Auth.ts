import { Options }          from './Request';
import { IncomingMessage }  from './Request';

export abstract class Auth {
    username:string;
    password:string;

    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }

    public abstract testAuth(options:Options, data:string|ArrayBuffer, response:IncomingMessage): Options;
}
