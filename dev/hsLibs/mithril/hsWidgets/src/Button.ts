/**
 * # Button Widget
 * invoked as `m(Button, {name:<string>, onclick:<function>})`
 */

/** */
import { m, Vnode }     from 'hslayout';


export class Button {
    view(node: Vnode) {
        return m('.hs-button', {onclick:node.attrs.onclick},  node.attrs.name || 'button');
    }
}
