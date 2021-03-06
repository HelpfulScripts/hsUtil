import { Options }          from './Request';
import { IncomingMessage }  from './Request';

export abstract class Auth {
    username:string;
    password:string;

    public constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }

    public abstract testAuth(options:Options, response:IncomingMessage, CNonce?:string): Options;
}
