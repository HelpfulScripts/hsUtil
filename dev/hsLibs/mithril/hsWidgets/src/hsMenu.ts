/**
 * 
 */

 /** */
import { m, Vnode} from '../../mithril';
import { Container, px, FILL } from '../../hsLayout/src/';

/** passed into Menu from the calling application */
export interface MenuDesc {
    /** the items on the menu */
    items: string[],
    /** the currently selected item */
    selectedItem: string,
    /** the function to call when the selection changes */
    select: (item:string) => void
}

interface MenuItemDesc {
    title: string,
    selected: boolean
    select: (item:string) => void
}
export class Menu extends Container {
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
        return this.layout('.hs-module-title', node, { columns: <any[]>[] }, desc.items.map((l:string) => {
            if (!this.menu.items[l]) { this.menu.items[l] = {title: l, selected: false, select:(item:string) => {
                this.menu.select(item); // local housekeeping: make sure the item's style shows correct selection
                desc.select(item);      // trigger any actions formt he selection
            }}; }
            return m(MenuItem, { desc:this.menu.items[l] });
        }));
    }
};

class MenuItem extends Container {
    view(node: Vnode): Vnode {
        function selected() { desc.select(desc.title); }
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        return this.layout(`.hs-header-tab`, node, {
                class: desc.selected?'hs-header-tab-selected': '',
                onclick:() => { desc.select(desc.title); }, 
            }, [m('', desc.title)]
        );
    }
};

