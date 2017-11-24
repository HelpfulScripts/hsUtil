/**
 * # Button Widget
 * A simple button widget
 * 
 * ### Invocation
 * invoked as `m(Button, {name:<string>, onclick:<function>})`
 * 
 * ### Attributes (node.attrs):
 * - onclick: function to execute when button is clicked
 * - name: name to show as button text
 */

/** */
import { m, Vnode }     from 'hslayout';


export class Button {
    view(node: Vnode) {
        return m('.hs-button', {onclick:node.attrs.onclick},  node.attrs.name || 'button');
    }
}
