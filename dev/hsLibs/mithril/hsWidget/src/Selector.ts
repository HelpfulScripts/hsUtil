/**
 * # Abstract Selector
 * Creates a Selector with several Selectables.
 * The `updateSelected` property determines how selecting an item affects 
 * the `isSelected` status of all other items. Preconfigured options are
 * -&nbsp; {@link Selector.oneOfItems oneOfItems}
 * -&nbsp; {@link Selector.anyItems   anyItems}
 * 
 * 
 * ### Invocation
 * implementation dependant
 * 
 * ### Attributes (node.attrs):
 * - desc: {@link Selector.SelectorDesc SelectorDesc}
 *     - items: string[];                // the items on the selector
 *     - selectedItem?: number|string;   // the currently selected item, by index or name
 *     - changed: (item:string) => void; // called when selection changed
 *     - itemCss?:string[];              // css to apply to items;
 */

 /** */
import { m, Vnode } from 'hslayout';

/** passed into Menu from the calling application */
export interface SelectorDesc {
    /** the items on the menu */
    items: string[];
    /** the currently selected item */
    selectedItem?: string|number;
    /** the function to call when the selection changes */
    changed: (item:string) => void;
    /** optional array of css styles; each will be applied to the respective item  */
    itemCss?: string[];
}

/** interface of the parameter passed to a `Selectable` */
export interface SelectableDesc {
    /** the item's title */
    title: string;
    /** the item's select status */
    isSelected: boolean;
    /** optional css class to use */
    css?: string;
    /** optional style string to apply */
    style?: string;
    /** the function to call if this item is clicked */
    clicked?: (item:string) => void;
    /** the function to call if this item receives a mouseDown event */
    mouseDown?: (item:string) => void;
    /** the function to call if this item receives a mouseUp event */
    mouseUp?: (item:string) => void;
}

/** 
 * called to update selection after the item with title `title` was selected.
 * `oneOfItems` ensures that `title` will be selected and all others deselected
 */
export function oneOfItems(title:string) {
    Object.keys(this.selector.items).forEach((key:string) => { 
        this.selector.items[key].isSelected = (key===title); 
    });
}

/** 
 * called to update selection after the item with title `title` was selected.
 * `anyItems` ensures that `title` will be selected independant of all others
 */
export function anyItems(title:string) {
    this.selector.items[title].isSelected = !this.selector.items[title].isSelected; 
}


/**
 * Creates a simple menu with several items, as configured by the desc:SelectorDesc object passed as a parameter. 
 */
export abstract class Selector {
    /** 
     * determines which function to use to updatye selections after events.
     * Three pre-configured function include:
     * - oneOfItems: default; only one item of the set can be selected at a time
     * - anyItem: each item can individually be selected. Pressing an item again will deselect it.
     */
    updateSelected = [oneOfItems, anyItems][0];

    /** instance variable, keeping a list of menu items and a `select` function for tracking which item is selected. */
    selector = { 
        items:<{string:SelectableDesc}> {},
        select: this.updateSelected.bind(this)
    };

    checkSelectedItem(desc:SelectorDesc):string {
        if (typeof desc.selectedItem === 'number') { 
            desc.selectedItem = desc.items[desc.selectedItem % desc.items.length];
        } else if (desc.selectedItem === undefined) {
            desc.selectedItem = desc.items[0];
        }
        return desc.selectedItem.toLowerCase();
    }

    renderItem(desc:SelectorDesc, i:number) {
        const l:string = desc.items[i];
        const itemCss = desc.itemCss || [];
        const selectedItem = this.checkSelectedItem(desc);

        return m(Selectable, { 
            // pass existing item or create and pass a new one
            desc: this.selector.items[l] = this.selector.items[l] || { 
                title: l, 
                css: itemCss[i],        // possibly undefined
                isSelected: l.toLowerCase() === selectedItem, 
                clicked:(item:string) => {
                    desc.selectedItem = item;
                    this.selector.select(item); // local housekeeping: make sure the item's style shows correct selection
                    if (typeof desc.changed === 'function') { 
                        desc.changed(item);  // trigger any actions form the selection
                    }     
                }
            } 
        });      
    }
};

/**
 * Creates a `Selectable` as part of the `Selector`, 
 * as configured by the desc:SelectableDesc object passed as a parameter.
 * Selectables can be in one of two states, selected or not selected. 
 * 
 */
export const Selectable = {
    view(node: Vnode): Vnode {
        const desc:SelectableDesc = node.attrs.desc;
        node.attrs.desc = undefined;
        const css           = desc.css || '';
        const cssSelected   = `${desc.isSelected?'hs-selected': ''}`;
        const onclick       = desc.clicked? ()   => { desc.clicked(desc.title); }   : undefined;
        const onmousedown   = desc.mouseDown? () => { desc.mouseDown(desc.title); } : undefined;
        const onmouseup     = desc.mouseUp? ()   => { desc.mouseUp(desc.title); }   : undefined;
        return m(`.hs-selectable ${css} ${cssSelected}`, 
            { style: desc.style, onclick:onclick, onmousedown:onmousedown, onmouseup:onmouseup },
            desc.title
        );
    }
};
