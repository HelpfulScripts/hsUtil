/**
 * # hsMenu
 * Creates a simple menu with several items.
 * The `Menu` object is passed into `Mithril`'s m function with a `MenuDesc` object that specifes the items,
 * the currently selected item, and a `select` function that is called when the menu selection changes. 
 * 
 * ## Example
 * <code>
    const desc:MenuDesc = {
        items: ['One', 'Two', 'Three'],
        selectedItem: 'One',
        select: (item:string) => <do something>  
    };
    m(Menu, {desc: desc}); 
 * </code>
 */

 /** */
import { m, Vnode} from '../../mithril';
import { Container } from '../../hsLayout/src/';

/** passed into Menu from the calling application */
export interface MenuDesc {
    /** the items on the menu */
    items: string[];
    /** the currently selected item */
    selectedItem: string;
    /** the function to call when the selection changes */
    select: (item:string) => void;
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
    view(node: Vnode): Vnode {
        const desc:MenuDesc = node.attrs.desc;
        node.attrs.desc = undefined;

        this.menu.select(desc.selectedItem);
        return this.layout('.hs-menu', node, { columns: <any[]>[] }, desc.items.map((l:string) => {
            if (!this.menu.items[l]) { this.menu.items[l] = {title: l, selected: false, select:(item:string) => {
                this.menu.select(item); // local housekeeping: make sure the item's style shows correct selection
                desc.select(item);      // trigger any actions formt he selection
            }}; }
            return m(MenuItem, { desc:this.menu.items[l] });
        }));
    }
};

/**
 * Creates a menu item as part of the menu, as configured by the desc:MenuItemDesc object passed as a parameter.
 */
class MenuItem extends Container {
    view(node: Vnode): Vnode {
        const desc:MenuItemDesc = node.attrs.desc;
        node.attrs.desc = undefined;
        return this.layout(`.hs-menu-item`, node, {
                class: desc.selected?'hs-menu-item-selected': '',
                onclick:() => { desc.select(desc.title); }, 
            }, [m('', desc.title)]
        );
    }
};

