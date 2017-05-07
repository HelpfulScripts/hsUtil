const m = require("mithril");

import { ModulesBar } from './ModulesBar';

export class HsSiteOverview {
    constructor(vnode:any) {  };
    view() { return m(".hs-config", [m(ModulesBar)]); };
};