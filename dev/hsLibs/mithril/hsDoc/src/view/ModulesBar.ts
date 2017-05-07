const m = require("mithril");

import { Module, Modules } from '../Modules';

export class ModulesBar {
    constructor(vnode:any) { 
        if (Modules.list.length === 0) { Modules.loadList(); } 
    };
    view() {
        console.log(Modules.list.length);
        return m(".modules-bar", Modules.list.map((module:Module) => 
            m(".modules-bar-item", module.name)));
    };
};