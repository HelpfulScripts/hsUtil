
import { m }    from 'hslayout';
import { Home } from './Home';

//const SAVE_URL      = '/cgi/save.js';
//const REGISTER_URL      = '/cgi/register.js';

m.route.prefix("?");

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
            m.route.set("/site/view");
        }).catch((err:any) => {
            if (err.status === 401) {
                console.log('Authorization Error (401)');
            } else {
                console.log(err);
            }
        })
        ;
/*    },
    register: function() {
        return m.request({
            method: 'PUT',
            url: `${REGISTER_URL}`,  
            data: {username: Auth.username, password: Auth.password}
        })
        .then(() => Auth.login())
        .catch((err:any) => {
            console.log(`error registering`);
            console.log(err);
        }); 
*/    }
};

const Login = {
    view: function() {
        return m("form", [
            m("input[type=text]",     {oninput: m.withAttr("value", Auth.setUsername), value: Auth.username}),
            m("input[type=password]", {oninput: m.withAttr("value", Auth.setPassword), value: Auth.password}),
            m("button[type=button]",  {onclick: Auth.login}, "Login"),
//            m('span', ' - or - '),
//            m("button[type=button]",  {onclick: Auth.register}, "Register")
        ]);
    }
};

const match = () => {
    if (!localStorage.getItem("auth-token")) { m.route.set("/login"); }
    else { return Home; }
};

m.route(document.body, "/site/view", {
    "/site/:mode":           { onmatch: match },
    "/site/:mode/:symbol":   { onmatch: match },
    "/login": Login
});