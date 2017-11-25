/**
 * # Menu Widget
 * Creates a simple menu with several items.
 * 
 * ### Invocation
 * invoked as `m(Menu, { desc:<MenuDesc> })`
 * 
 * ### Attributes (node.attrs):
 * - desc: {@link Menu.MenuDesc MenuDesc}
 *     - items: string[];                // the items on the menu
 *     - select: (item:string) => void;  // called when item clicked
 *     - selectedItem?: string;          // the currently selected item
 *     - size?:string[];                 // size to layout menu items
 * 
 * ## Example
 * <example>
 * <file name='script.js'>
 * const items = ['One', 'Two', 'Three'];
 * const content   = ['1st', '2nd', '3rd'];
 * let  theContent = content[1];
 * 
 * m.mount(root, {view: () => m(hslayout.Layout, {
 *     rows:["30px", "fill"],
 *     content:[
 *         m(hswidget.Menu, {desc: {
 *             items: items,
 *             selectedItem: 'Two',
 *             select: item => 
 *                theContent = content[items.indexOf(item)]
 *         }}),
 *         m(hslayout.Layout, { css:'myMain', content: theContent })
 *     ]
 * })});
 *
 * </file>
 * <file name='style.css'>
 * .myMain { 
 *    border:1px solid #ddd;
 *    border-top: 0px solid #ddd;
 * } 
 * .hs-menu-item-selected { 
 *     background-color: #eed; 
 *     border-width:0px;
 * }
 * </file>
 * </example>
 */

 /** */
import { Layout, m, Vnode } from 'hslayout';

/** passed into Menu from the calling application */
export interface MenuDesc {
    /** the items on the menu */
    items: string[];
    /** the currently selected item */
    selectedItem?: string;
    /** the function to call when the selection changes */
    select: (item:string) => void;
    /** optional array of size strings used to layout the menu items; defaults to `[ ]` */
    size?:string[];
}

/** interface of the parameter passed to a `MenuItem` */
export interface MenuItemDesc {
    /** the item's title */
    title: string;
    /** the item's select status */
    isSelected: boolean;
    /** the function to call if this item is selected */
    clicked: (item:string) => void;
}

/**
 * Creates a simple menu with several items, as configured by the desc:MenuDesc object passed as a parameter. 
 */
export class Menu extends Layout {
    /** instance variable, keeping a list of menu items and a `select` function for tracking which item is selected. */
    menu = { 
        items:<{string:MenuItemDesc}> {},
        select: (title:string) => {
            Object.keys(this.menu.items).forEach((key:string) => { 
                this.menu.items[key].isSelected = (key===title); 
            });
        }
    };

    getComponents(node: Vnode): Vnode {
        const _menu = this.menu;
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;

        desc.selectedItem = desc.selectedItem || desc.items[0];
        node.attrs.columns = desc.size || [];
        node.attrs.css = '.hs-menu';
        return desc.items.map((l:string) => {
            _menu.items[l] = _menu.items[l] || { 
                title: l, 
                isSelected: l.toLowerCase() === desc.selectedItem.toLowerCase(), 
                clicked:(item:string) => {
                    desc.selectedItem = item;
                    _menu.select(item); // local housekeeping: make sure the item's style shows correct selection
                    if (typeof desc.select === 'function') { 
                        desc.select(item);  // trigger any actions form the selection
                    }     
                }
            }; 
            return m(MenuItem, { desc:_menu.items[l] });
        });
    }
};

/**
 * Creates a menu item as part of the menu, as configured by the desc:MenuItemDesc object passed as a parameter.
 */
class MenuItem extends Layout {
    getComponents(node: Vnode): Vnode {
        const desc:MenuItemDesc = node.attrs.desc;
        node.attrs.desc = undefined;
        node.attrs.css = `.hs-menu-item ${desc.isSelected?'hs-menu-item-selected': ''}`;
        node.attrs.onclick = () => { desc.clicked(desc.title); };
        return desc.title;
    }
};
