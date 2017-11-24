import { m, Vnode}          from 'hslayout';
import { Layout }        from 'hslayout';
import { Menu, MenuDesc }   from 'hswidget';

export class Header extends Layout {
    private getDesc(attrs:any):MenuDesc { 
        const items = ['View', 'Trade', 'Import']; 
        return {
            items: items.map((c:any) => c),
            selectedItem: (attrs.route && attrs.route.mode)? attrs.route.mode : items[0],
            select: (item:string) => m.route.set('/api/:mode/0', {mode:item}) 
        };
    }

    getComponents(node: Vnode): Vnode {
        const desc:MenuDesc = this.getDesc(node.attrs);
        return m(Menu, {desc: desc});
    }     
}