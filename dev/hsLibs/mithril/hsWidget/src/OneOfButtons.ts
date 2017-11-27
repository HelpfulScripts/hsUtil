/**
 * # OneOfButtons Widget
 * A set of adjoint buttons, one of which can be active at a time
 * 
 * ### Invocation
 * invoked as `m(OneOfButtons, {names:<string>[], initial:<string>, onclick:<function>})`
 * 
 * ### Attributes (node.attrs):
 * - onclick: function to execute when button is clicked
 * - name: name to show as button text
 */

/** */
import { m, Vnode }     from 'hslayout';


export class Button {
    view(node: Vnode) {
        return m('.hs-button-group', {onclick:node.attrs.onclick},  node.attrs.name || 'button');
    }
}
