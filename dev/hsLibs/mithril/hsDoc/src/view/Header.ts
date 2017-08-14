import { m, Vnode}    from '../../../mithril';
import { Container }  from '../../../hsLayout/src/';
import { DocSets }    from '../DocSets'; 
import { Menu }       from '../../../hsWidgets/src/';

export class MenuTitle extends Container {
    docSet = '';

    private getDesc(attrs:any) { 
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

    oninit(node:Vnode) { 
        this.report('MenuTitle:init', node); 
    }

    getComponents(node:Vnode):Vnode {
        this.report('Container:view', node); 
        const desc = this.getDesc(node.attrs);
        return m(Menu, {desc: desc});
    }
}