/**
 * translates mithril libraries to an ES6 module and provides some Typescript type shortcuts.
 */

if (!global['window']) {
    global['window'] = require("mithril/test-utils/browserMock.js")();
    global['document'] = window.document;

}

/**
 * import and re-export the mithril m objkect
 */
export const m = require("mithril");

/**
 * provide and export a Typescript Vnode type
 */
export type Vnode = typeof m.Vnode;

export const o = require("mithril/ospec/ospec");
o.root = window.document.createElement("div");

