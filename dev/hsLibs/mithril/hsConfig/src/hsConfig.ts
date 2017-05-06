const m = require("mithril");

export class HsConfig {
    cfgJson: string;
    constructor(cfgJson:string) { this.cfgJson = cfgJson; };
    view() {
        return m(".hs-config", this.cfgJson);
    };
};