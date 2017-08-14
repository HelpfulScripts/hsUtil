import * as config from './';
import { m, Vnode}  from '../../mithril';
import * as layout from '../../hsLayout/src/';
//import * as widgets from '../../hsWidgets/src/';

const myConfig = {
    Container: {
        rows:  ["30px", "fill", "10px"],
        css: '.my-example',
        content: [{
            Container:{
                columns: ["200px", "fill"],
                content: [
                    { LeftHead:    { lib:"route.lib", field:"route.field"}},
                    { MainHead:    { lib:"route.lib", field:"route.field"}}
                ]
            }},{
            Container:{
                columns: ["200px", "fill"], 
                content: [
                    { LeftNav:    { lib:"route.lib", field:"route.field"}},
                    { MainNav:    { lib:"route.lib", field:"route.field"}}
                ]
            }},
            { Container: {
                css: '.hs-site-footer',
                content: ['(c) Helpful ; Scripts']
            }}
        ] 
    },
    route: {
        default: '/api',
        paths: [
            '/api',             // defines `http://localhost/#!/api/
            '/api/:lib',        // defines `http://localhost/#!/api/:hsLib
            '/api/:lib/:field'  // defines `http://localhost/#!/api/:hsLib/:id        
        ]
    }
}; 

/*
const path = { lib:'', field:'' }; 
function hsSite(content:any) {
    return { view: () => {
        path.lib    = node.attrs.lib;
        path.field  = node.attrs.field;
        return m('.hs-config', content);
    }};
}
*/ 
const example = {
    LeftHead: class extends layout.Container{ 
        getComponents(node:Vnode) { 
            return 'The Left Head'; 
        } 
    },
    MainHead: class extends layout.Container{ 
        getComponents(node:Vnode) { return m('', 'The Main Head'); } 
    },
    LeftNav: class extends layout.Container{ 
        getComponents(node:Vnode) { return m('', 'The Left Nav'); } 
    },
    MainNav: class extends layout.Container{ 
        getComponents(node:Vnode) { return m('', 'The Main Nav'); } 
    },
    Footer: class extends layout.Container{ 
        getComponents(node:Vnode) { return m('.hs-site-footer', '(c) Helpful ; Scripts'); } 
    }
};



new config.HsConfig([layout, config, example])
    .attachNodeTree(myConfig, document.getElementById('exampleBase'));

