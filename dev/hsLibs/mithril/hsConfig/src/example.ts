import * as config from './';
import { Vnode}  from '../../mithril';
import * as layout from '../../hsLayout/src/';
import * as widgets from '../../hsWidgets/src/';

const myConfig = {
    Container: {
        rows:  ["30px", "fill", "10px"],
        styleClass: '.my-example',
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
            "&copy; Helpful Scripts"
        ]
    } 
};

const example = {
    LeftHead: class extends layout.Container{ 
        view(node:Vnode) { return this.leaf('The Left Head'); } 
    },
    MainHead: class extends layout.Container{ 
        view(node:Vnode) { return this.leaf('The Main Head'); } 
    },
    LeftNav: class extends layout.Container{ 
        view(node:Vnode) { return this.leaf('The Left Nav'); } 
    },
    MainNav: class extends layout.Container{ 
        view(node:Vnode) { return this.leaf('The Main Nav'); } 
    }
};


//new HsConfig('data/config.json');
new config.HsConfig([layout, widgets, config, example]).run(myConfig);
