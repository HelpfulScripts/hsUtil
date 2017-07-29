import { m, Vnode}              from '../../../mithril';
import { Container, px, FILL }  from '../../../hsLayout/src/';
import { DocSets }              from '../DocSets'; 
import { Menu, MenuDesc }       from '../../../hsWidgets/src/';

export const LeftNavWidth  = px(200);
let SiteName      = 'HSDocs';

export class HeaderBar extends Container {
    view(node:Vnode):Vnode {
        const lib = node.attrs.lib;
        node.attrs.lib = undefined;
        SiteName = DocSets.title() || SiteName;
        const desc:MenuDesc = {
            items: DocSets.get(),
            selectedItem: lib,
            select: (item:string) => m.route.set('/api/:lib/0', {lib:item})  
        };
        if (!desc.selectedItem)  { desc.selectedItem = desc.items[0]; }
        return this.layout('.hs-site-header', { columns: [LeftNavWidth, FILL]}, [
            m(SiteTitle),
            m(Menu, {desc: desc})           
        ]);
    }
};

class SiteTitle extends Container {
    view(node:Vnode):Vnode {
        return this.layout('.hs-site-title', { href:`/api/`, oncreate: m.route.link, onupdate: m.route.link }, SiteName);
    }
};

