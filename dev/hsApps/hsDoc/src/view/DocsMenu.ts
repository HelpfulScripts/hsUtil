import { m, Vnode, Container }  from 'hslayout';
import { DocSets }              from '../DocSets'; 
import { Menu, MenuDesc }       from 'hsGraph';

/**
 * Creates the title menu for selecting between the different docsets.
 * Instantiate the DocsMenu via a standard `mithril` call:```
 *    m(DocsMenu, { docSet:<pathToIndexFile>})
 * ```
 * DocsMenu performs the following actions:
 * - for the first call of the view lifecycle hook, the available docSets are loaded.
 *   DocsMenu searches for an index `json` file at the location specified in the 
 *   `docSet` field of the `node.attrs` parameter. If none is specified, the 
 *   default is used as specified in the {@link hsdoc:DocSets.FILE DocSets FILE} setting.
 * - DocsMenu retrieves all available docSets via {@link hsdoc:DocSets.DocSets.get DocSets.get}.
 * - DocsMenu creates a `MenuDesc` structure with a {@link hsGraph:hsMenu.MenuDesc.select `select`} callback that initiates a route change 
 *   to the selected docSet
 */
export class DocsMenu extends Container {
    docSet = '';

    private getDesc(attrs:any):MenuDesc { 
        if (this.docSet !== attrs.docSet) {
            this.docSet = attrs.docSet;
            DocSets.loadList(attrs.docSet);
        }
        const items = DocSets.get(); 
        return {
            items: items.map((c:any) => c),
            selectedItem: (attrs.route && attrs.route.lib)? attrs.route.lib : items[0],
            select: (item:string) => m.route.set('/api/:lib/0', {lib:item})
        };
    }

    getComponents(node:Vnode):Vnode {
        const desc:MenuDesc = this.getDesc(node.attrs);
        return m(Menu, {desc: desc});
    }
}