/**
 * # Menu Widget
 * Creates a simple menu with several items.
 * 
 * ### Invocation
 * invoked as `m(Menu, { desc:<MenuDesc> })`
 * 
 * ### Attributes (node.attrs):
 * - desc: {@link Menu.MenuDesc MenuDesc}
 *     - items: string[];                 // the items on the menu
 *     - changed: (item:string) => void;  // called when item clicked
 *     - selectedItem?: number|string;    // the currently selected item, by index or name
 *     - itemCSS?: string[];              // css to apply to items;
 * - size?: string | string[];            // sizes to layout menu items; 
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
 *             changed: item => 
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
 * .hs-selectable { 
 *     background-color: #f4f4e8; 
 * }
 * .hs-selected { 
 *     background-color: #eed; 
 *     border-width:0px;
 * }
 * </file>
 * </example>
 */

 /** */
import { Layout, m, Vnode } from 'hslayout';
import { Selector }         from './Selector';


/**
 * Creates a simple menu with several items, as configured by the desc:SelectorDesc object passed as a parameter. 
 */
export class Menu extends Selector{
    view(node: Vnode): Vnode {
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        const size = node.attrs.size || []; // possibly undefined

        desc.items = desc.items;
        desc.changed = desc.changed || ((item:string) => console.log(`missing changed() function for menu item ${item}`));
        
        return m(Layout, {
            css: '.hs-menu',
            columns: size.length===undefined? [size] : size,
            content: desc.items.map((l:string, i:number) => this.renderItem(desc, i))
        });
    }
};
