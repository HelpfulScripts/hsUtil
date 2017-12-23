import { m }            from 'hslayout';
import { Layout }       from 'hslayout';
import { Menu }         from 'hswidget';
import { Vnode}         from 'hslayout';
import { ViewPane }      from './view/ViewPane';
import { TradePane }     from './view/TradePane';
import { ImportPane }    from './view/ImportPane';

const TitleHeight        = '30px'; 
const FooterHeight       = '10px';  

export const Home = {
    view: function() {
        let siteContent;
        switch(m.route.param('mode')) {
            case 'Import':  siteContent = ImportPane; break;
            case 'Trade':   siteContent = TradePane; break;
            case 'View':
            default:        siteContent = ViewPane; break;
        }
        return m(Layout, {rows: [TitleHeight, "fill", FooterHeight], css: '.hs-site', content: [
            m(SiteMenu, {css: 'hs-site-menu'}),
            m(siteContent),
            m(SiteFooter)
        ]});
    }
};

const SiteMenu = { 
    view: (node: Vnode):Vnode => m(Menu, {desc: { 
        items: ['View', 'Trade', 'Import'].map((c:any) => c),
        selectedItem: (node.attrs.route && node.attrs.route.mode)? node.attrs.route.mode : 0,
        select: (item:string) => m.route.set('/site/:mode/:symbol', {mode:item, symbol:0}) 
    }})
};

class SiteFooter extends Layout { 
    getComponents(node: Vnode): Vnode {
        return m('.hs-site-footer', '(c) Helpful Scripts');
    }
}
