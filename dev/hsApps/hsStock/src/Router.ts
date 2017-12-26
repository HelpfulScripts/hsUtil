
import { m }    from 'hslayout';
import { Home } from './Home';

//const SAVE_URL      = '/cgi/save.js';
//const REGISTER_URL      = '/cgi/register.js';

m.route.prefix("?");

let authMode   = 'View';
let authSymbol = 'GOOG';

const Auth = {
    username: "",
    password: "",
    
    setUsername: (value:string) => Auth.username = value,
    setPassword: (value:string) => Auth.password = value,
    login: function() {
        return m.request({
            url: `/stocks/private/test.json`,  
            user: Auth.username,
            password: Auth.password
        }).then(() => {
            console.log(`logged in as ${Auth.username}`);
            localStorage.setItem("auth-token", Auth.username);
            m.route.set(`/site/${authMode}/${authSymbol}`);
        }).catch((err:any) => {
            if (err.status === 401) {
                console.log('Authorization Error (401)');
            } else {
                console.log(err);
            }
        });
    }
};

const Login = {
    view: function() {
        return m("form", [
            m("input[type=text]",     {oninput: m.withAttr("value", Auth.setUsername), value: Auth.username}),
            m("input[type=password]", {oninput: m.withAttr("value", Auth.setPassword), value: Auth.password}),
            m("button[type=button]",  {onclick: Auth.login}, "Login"),
        ]);
    }
};


m.route(document.body, "/site/View", {
    "/site/:mode":           Home,
    "/site/:mode/:symbol":   Home,
    "/login": Login
});

export function authenticated():boolean {
    if (!localStorage.getItem("auth-token")) { 
        authMode   = m.route.param('mode');
        authSymbol = m.route.param('symbol');
        m.route.set("/login"); 
        return false;
    } else {
        return true;
    }
}