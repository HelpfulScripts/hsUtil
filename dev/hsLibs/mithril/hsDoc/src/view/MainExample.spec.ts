// Polyfill DOM env for mithril
global['window'] = require("mithril/test-utils/browserMock.js")();
global['document'] = window.document;

const m = require("mithril");
const o = require("mithril/ospec/ospec");
const root = window.document.createElement("div");  

type Vnode = typeof m.Vnode;


o.spec('example', () => {
    let docsMenu:any;
    o.before(() => {
        m.mount(root, {view: () => m('', '')});
        docsMenu = root.childNodes[0];
    }); 
    o('DocsMenu exists', () => {
        o(docsMenu===undefined).equals(false)('should be defined');
    });
});
