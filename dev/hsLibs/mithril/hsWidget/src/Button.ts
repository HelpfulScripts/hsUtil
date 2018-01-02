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
 * - style: style string to apply to button tag
 */

/** */
import { m, Vnode }     from 'hslayout';
import { Layout }       from 'hslayout';
import { Selector }     from './Selector';
import { oneOfItems }   from './Selector';

export class Button {
    view(node: Vnode) {
        const css = node.attrs.css || '';
        const style = node.attrs.style || '';
        const content = node.attrs.name || 'button';
        return m(`.hs-button ${css}`, {style:style, onclick:node.attrs.onclick}, m('span', content));
    }
}

export class RadioButtons extends Selector {
    view(node: Vnode): Vnode {
        this.updateSelected = oneOfItems;
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        const css = node.attrs.css || '';
        const style = node.attrs.style || '';

        desc.items = desc.items || [];
        desc.changed = desc.changed || ((item:string) => console.log(`missing changed() function for Button item ${item}`));

        return m(`.hs-radio-buttons ${css}`, {style:style}, m(Layout, {
            columns: [],
            content: desc.items.map((l:string, i:number) => this.renderItem(desc, i))
        }));
    }
}

let toggleIndex = -1;

export class ToggleButton extends Selector {
    view(node: Vnode): Vnode {
        this.updateSelected = oneOfItems;
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        const css = node.attrs.css || '';
        const style = node.attrs.style || '';

        desc.items = desc.items || [];
        desc.changed = desc.changed || ((item:string) => console.log(`missing changed() function for Button item ${item}`));

        if (toggleIndex<0) { toggleIndex = desc.items.indexOf(desc.selectedItem); }
        const parentChanged = desc.changed;
        desc.changed = ((item:string) => {
            toggleIndex = (toggleIndex+1) % desc.items.length;
            parentChanged(item);
        });
        return m(`.hs-toggle-button ${css}`, {style:style, desc:desc}, m('span', this.renderItem(desc, toggleIndex)));
    }
}