import { m, Vnode}  from '../mithril';
import * as hslayout from '../';
//import * as widgets from '../../hsWidgets/src/';

const myConfig = {
    Layout: {
        rows:  ["30px", "fill", "10px"],
        css: '.my-example',
        content: [{
            Layout:{
                columns: ["200px", "fill"],
                content: [
                    { LeftHead:    { lib:"route.lib", field:"route.field"}},
                    { MainHead:    { lib:"route.lib", field:"route.field"}}
                ]
            }},{
            Layout:{
                columns: ["200px", "fill"], 
                content: [
                    { LeftNav:    { lib:"route.lib", field:"route.field"}},
                    { MainNav:    { lib:"route.lib", field:"route.field"}}
                ]
            }},
            { Layout: {
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

const example = {
    LeftHead: class extends hslayout.Layout{ 
        getComponents(node:Vnode) { 
            return 'The Left Head'; 
        } 
    },
    MainHead: class extends hslayout.Layout{ 
        getComponents(node:Vnode) { return m('', 'The Main Head'); } 
    },
    LeftNav: class extends hslayout.Layout{ 
        getComponents(node:Vnode) { return m('', 'The Left Nav'); } 
    },
    MainNav: class extends hslayout.Layout{ 
        getComponents(node:Vnode) { return m('', 'The Main Nav'); } 
    },
    Footer: class extends hslayout.Layout{ 
        getComponents(node:Vnode) { return m('.hs-site-footer', '(c) Helpful ; Scripts'); } 
    }
};



new hslayout.HsConfig([hslayout, example])
    .attachNodeTree(myConfig, document.getElementById('exampleBase'));

