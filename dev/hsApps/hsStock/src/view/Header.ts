import { m, Vnode}  from 'hslayout';
import { Layout }   from 'hslayout';
import { Menu }     from 'hswidget';

export class Header extends Layout {
    getComponents(node: Vnode): Vnode {
        const r = node.attrs.route;
        return m(Menu, {desc: { 
            items: ['View', 'Trade', 'Import'].map((c:any) => c),
            selectedItem: (r && r.mode)? r.mode : 0,
            select: (item:string) => m.route.set('/api/:mode/0', {mode:item}) 
        }});
    }     
}