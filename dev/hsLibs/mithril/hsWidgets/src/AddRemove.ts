/**
 * # AddRemove Buttons
 * Adds '+' and '-' buttons to add or remove items from a list.
 */

 /** */
import { m, Vnode}      from 'hslayout';

export class AddButton {
    view(node:Vnode):Vnode {
        return m('.hs-add-button', { onclick:node.attrs.add }, '');
    }
}

export class RemoveButton {
    view(node:Vnode):Vnode {
        return m('.hs-remove-button', { onclick:node.attrs.remove }, '');
    }
}