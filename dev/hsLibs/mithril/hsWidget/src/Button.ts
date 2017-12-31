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
 * - css: css class to assign to button tag
 */

/** */
import { m, Vnode }     from 'hslayout';
import { Layout }       from 'hslayout';
import { Selector }     from './Selector';
import { anyItems }     from './Selector';

export class Button {
    view(node: Vnode) {
        const content = node.attrs.name || 'button';
        return m(`.hs-button ${node.attrs.css}`, {onclick:node.attrs.onclick}, content);
    }
}

export class ToggleButton extends Selector {
    view(node: Vnode): Vnode {
        this.updateSelected = anyItems;
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        const css = node.attrs.css || '';

        desc.items = desc.items || [];
        desc.changed = desc.changed || ((item:string) => console.log(`missing changed() function for Button item ${item}`));

        return m(`.hs-button-group ${css}`, m(Layout, {
            columns: [],
            content: desc.items.map((l:string, i:number) => this.renderItem(desc, i))
        }));

//        return m('.hs-button-group', desc.items.map((l:string, i:number) => this.renderItem(desc, i)));        
    }
}

