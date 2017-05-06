declare const global: any;
global.window = require("mithril/test-utils/browserMock.js")();
global.document = window.document;

import { HsConfig } from "./"; 

describe('hsConfig', () => { 
    let vnode: any;
 
    beforeEach(() => {
        const cfg = new HsConfig('testCfg.json');
        vnode = cfg.view();
    });

    it('should have a class .hs-config', () => {
        expect(vnode.attrs.className).toEqual("hs-config");
        expect(vnode.attrs.className).not.toEqual("hsconfig");
    });
});

