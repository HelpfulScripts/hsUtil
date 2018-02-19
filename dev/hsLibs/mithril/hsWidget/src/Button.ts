/**
 * # Button Widget
 * A simple button widget
 * 
 * ### Profile
 * invoked as `m(Button, {name:<string>, onclick:<function>});`
 * 
 * ### Attributes (node.attrs):
 * - `onclick:() => void` function to execute when button is clicked
 * - `name: string` name to show as button text
 * - `css: string` css class to assign to button tag
 * - `style: string` style string to apply to button tag
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * let clicked = 0;
 * let radio = '';
 * let toggle = '';
 * 
 * m.mount(root, {view: () => m('.hs-white', [
 *      m('', [
 *          m('h4', 'Please click:'),
 *          m(hswidget.Button, { 
 *              name: clicked%2? 'I am clicked!' : `click me${clicked>0?' again':''}!`,
 *              onclick: () => clicked++
 *          })
 *      ]),
 *      m('', [
 *          m('h4', `Select Radio Station: ${radio}`),
 *          m(hswidget.RadioButtons, { desc: {
 *              items: ['1st', '2nd','3rd'],
 *              changed: (item) => radio = item
 *          }})
 *      ]),
 *      m('', [
 *          m('h4', `Please Toggle: (currently ${toggle})`),
 *          m(hswidget.ToggleButton, { desc: {
 *              items: ['1st', '2nd','3rd'],
 *              changed: (item) => toggle = item
 *          }})
 *      ]),
 *   ])
 * });
 * </file>
 * </example>
 * 
 */

/** */
import { m, Vnode }     from 'hslayout';
import { Layout }       from 'hslayout';
import { Selector }     from './Selector';
import { oneOfItems }   from './Selector';

/**
 * # Button Widget
 * A simple button widget
 * 
 * ### Profile
 * invoked as `m(Button, {name:<string>, onclick:<function>});`
 * 
 * ### Attributes (node.attrs):
 * - `onclick:() => void` function to execute when button is clicked
 * - `name: string` name to show as button text
 * - `css: string` css class to assign to button tag
 * - `style: string` style string to apply to button tag
 */
export class Button {
    view(node: Vnode) {
        const css = node.attrs.css || '';
        const style = node.attrs.style || '';
        const content = node.attrs.name || 'button';
        return m(`.hs-button ${css}`, {style:style, onclick:node.attrs.onclick}, m('span', content));
    }
}

/**
 * # Radio Button Widget
 * A group of buttons with one or none selected
 * 
 * ### Profile
 * invoked as `m(RadioButtons, {desc: { items:[<string>], changed:<function>}});`
 * 
 * ### Attributes (node.attrs):
 * - `desc:` see {@link Selector.SelectorDesc SelectorDesc}
 *     - `changed:(item:string) => void` function to execute when button is selected
 *     - `selectedItem?: number|string` the currently selected item, by index or name
 *     - `items: string[]` names to individual buttons to show
 *     - `itemCss?:string[]` css to apply to each item;
 * - `css?: string` css class to assign to button group
 * - `style?: string` style string to apply to button tag
 */
export class RadioButtons extends Selector {
    view(node: Vnode): Vnode {
        this.updateSelected = oneOfItems;
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        const css = node.attrs.css || '';
        const style = node.attrs.style || '';

        desc.items = desc.items || [];
        desc.selectedItem = desc.selectedItem || 0;
        this.checkSelectedItem(desc);
        desc.changed = desc.changed || ((item:string) => console.log(`missing changed() function for Button item ${item}`));

        return m(`.hs-radio-buttons ${css}`, {style:style}, m(Layout, {
            columns: [],
            content: desc.items.map((l:string, i:number) => this.renderItem(desc, i))
        }));
    }
}

/**
 * # ToggleButton Widget
 * A button widget that toggle through a set of items, or states and 
 * shows the current state as button title
 * 
 * ### Profile
 * invoked as `m(ToggleButton, {desc: { items:[<string>], changed:<function>}});`
 * 
 * ### Attributes (node.attrs):
 * - `desc:` see {@link Selector.SelectorDesc SelectorDesc}
 *     - `changed:(item:string) => void` function to execute when button is selected
 *     - `selectedItem?: number|string` the currently selected item, by index or name
 *     - `items: string[]` names of individual states to toggle through
 *     - `itemCss?:string[]` css to apply to each item;
 * - `css?: string` css class to assign to button group
 * - `style?: string` style string to apply to button tag
 */
export class ToggleButton extends Selector {
    private toggleIndex = -1;
    view(node: Vnode): Vnode {
        this.updateSelected = oneOfItems;
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        const css = node.attrs.css || '';
        const style = node.attrs.style || '';

        desc.items = desc.items || [];

        // insert click update into passed click function
        const parentChanged = desc.changed;
        desc.changed = ((item:string) => {
            this.toggleIndex = (this.toggleIndex+1) % desc.items.length;
            item = desc.items[this.toggleIndex];
            this.internalStateUpdate(desc, item);
            if (parentChanged) { parentChanged(item); }
        });

        if (this.toggleIndex<0) { 
            this.toggleIndex = desc.selectedItem || 0;
            if (typeof this.toggleIndex === 'string') {
                this.toggleIndex = desc.items.indexOf(this.toggleIndex);
            }
        this.checkSelectedItem(desc);
        }

        return m(`.hs-toggle-button ${css}`, {style:style}, m('span', 
            this.renderItem(desc, this.toggleIndex)
        ));
    }
}