//declare const global: any;
//global.window = require("mithril/test-utils/browserMock.js")();
//global.document = window.document;

import { m, Vnode } from '../../mithril'; 
import { HsConfig } from "./"; 

describe('hsConfig', () => { 
    let vnode: Vnode;
 
    beforeEach(() => {
        vnode = m(HsConfig, { file: 'testCfg.json'});
    });

    it('should have a class .hs-config', () => {
        expect(vnode.attrs.className).toEqual("hs-config");
        expect(vnode.attrs.className).not.toEqual("hsconfig");
    });
});

