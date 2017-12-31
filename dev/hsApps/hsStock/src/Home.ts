import { m }            from 'hslayout';
import { Layout }       from 'hslayout';
import { Menu }         from 'hswidget';
import { SelectorDesc } from 'hswidget';
import { Vnode}         from 'hslayout';
import { ViewPane }      from './view/ViewPane';
import { TradePane }     from './view/TradePane';
import { ImportPane }    from './view/ImportPane';

const TitleHeight        = '30px'; 

const modes = [
    {name: 'View',   css: '.hs-selectable-view'},
    {name: 'Trade',  css: '.hs-selectable-trade'},
    {name: 'Import', css: '.hs-selectable-import'}
];

export const Home = {
    view: () =>  m('', [Site(), SiteFooter()])
};

const Site = () => {
    let siteContent;
    switch(m.route.param('mode')) {
        case modes[2].name:  siteContent = ImportPane; break;
        case modes[1].name:   siteContent = TradePane; break;
        case modes[0].name:
        default:        siteContent = ViewPane; break;
    }
    return m(Layout, {rows: [TitleHeight, "fill"], css: '.hs-site', content: [
        m(SiteMenu, {css: 'hs-site-menu'}),
        m(siteContent),
    ]});
};

const SiteMenu = { 
    view: (node: Vnode):Vnode => {
        return m(Menu, {desc: <SelectorDesc>{ 
            items: modes.map((c:any) => c.name),
            itemCss: modes.map((c:any) => c.css),
            selectedItem: modes.find((md:any) => md.name === m.route.param('mode')).name,
            changed: (item:string) => m.route.set('/site/:mode/:symbol', {mode:item, symbol:0}) 
        }});
    }
};

const SiteFooter = () => m('.hs-site-footer', '(c) Helpful Scripts');
