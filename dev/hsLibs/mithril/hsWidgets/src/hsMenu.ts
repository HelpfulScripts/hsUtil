/**
 * # hsMenu
 * Creates a simple menu with several items.
 * The `Menu` object is passed into `Mithril`'s m function with a `MenuDesc` object that specifes the items,
 * the currently selected item, and a `select` function that is called when the menu selection changes. 
 * 
 * ## Example
 * <code>
    const desc:MenuDesc = {
        items: ['One', 'Two', 'Three'],         // the menu items to display 
        selectedItem: 'One',                    // the selected menu item
        select: (item:string) => <do something> // the function to call when selection changed
        size?:LayoutToken[] = []                //
    };
    m(Menu, {desc: desc}); 
 * </code>
 */

 /** */
import { m, Vnode} from '../../mithril';
import { Container, LayoutToken } from '../../hsLayout/src/';

/** passed into Menu from the calling application */
export interface MenuDesc {
    /** the items on the menu */
    items: string[];
    /** the currently selected item */
    selectedItem: string;
    /** the function to call when the selection changes */
    select: (item:string) => void;
    /** optional array of `LayoutToken`s used to layout the menu items; defaults to `[ ]` */
    size?:LayoutToken[];
}

/** interface of the parameter passed to a `MenuItem` */
interface MenuItemDesc {
    /** the item's title */
    title: string;
    /** the item's select status */
    selected: boolean;
    /** the function to call if this item is selected */
    select: (item:string) => void;
}

/**
 * Creates a simple menu with several items, as configured by the desc:MenuDesc object passed as a parameter. 
 */
export class Menu extends Container {
    /** instance variable, keeping a list of menu items and a `select` function for tracking which item is selected. */
    menu = { 
        items: {},
        select: (title:string) => {
            Object.keys(this.menu.items).forEach((key:string) => { 
                this.menu.items[key].selected = (key===title); 
            });
        }
    };
    getComponents(node: Vnode): Vnode {
        const desc:MenuDesc = node.attrs.desc;
        node.attrs.desc = undefined;

        this.menu.select(desc.selectedItem);
        node.attrs.columns = desc.size || [];
        node.attrs.css = '.hs-menu';
        return desc.items.map((l:string) => {
            if (!this.menu.items[l]) { this.menu.items[l] = {title: l, selected: false, select:(item:string) => {
                desc.selectedItem = item;
                this.menu.select(item); // local housekeeping: make sure the item's style shows correct selection
                desc.select(item);      // trigger any actions form the selection
            }}; }
            return m(MenuItem, { desc:this.menu.items[l] });
        });
    }
};

/**
 * Creates a menu item as part of the menu, as configured by the desc:MenuItemDesc object passed as a parameter.
 */
class MenuItem extends Container {
    getComponents(node: Vnode): Vnode {
        const desc:MenuItemDesc = node.attrs.desc;
        node.attrs.desc = undefined;
        node.attrs.css = `.hs-menu-item ${desc.selected?'hs-menu-item-selected': ''}`;
        node.attrs.onclick = () => { desc.select(desc.title); };
        return desc.title;
    }
};

