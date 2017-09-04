/**
 * Site documentation
 */

/** */
import * as mithril from '../../../mithril';
import * as layout  from '../../../hsLayout/src/';
import * as header  from './Header';
import * as left    from './LeftNav';
import * as main    from './MainDetail';


const TitleHeight   = '30px'; 
const FooterHeight  = '10px';  
const LeftNavWidth  = '200px';
const SiteName      = 'HSDocs'; 
 
const myConfig = {
    Container: { // whole page
        rows:  [TitleHeight, "fill", FooterHeight],
        css: '.hs-site',
        content: [{
            Container:{ // top row
                columns: [LeftNavWidth, "fill"],
                css: '.hs-site-header',
                content: [
                    { Container:    { 
                        css: '.hs-site-title',
                        content: SiteName, 
                        href:'/api/' 
                    }},
                    { MenuTitle:    { css:'.hs-menu-title', docSet:"./data/index.json"}}
                ]                
            }},{
            Container:{ // main part
                columns: [LeftNavWidth, "fill"], 
                content: [
                    { LeftNav:    {}},
                    { MainDetail: {}}
                ]                
            }},
            { Container: { // footer
                css: '.hs-site-footer',
                content: '(c) Helpful Scripts'
            }}
        ] 
    },
    route: {
        default: '/api',
        paths: [
            '/api',             // defines `http://localhost/#!/api/
            '/api/:lib',        // defines `http://localhost/#!/api/:hsLib
            '/api/:lib/:field'  // defines `http://localhost/#!/api/:hsLib/:id        
        ]
    }
};


export function init() {
    new layout.HsConfig([mithril, layout, header, left, main]).attachNodeTree(myConfig, document.body);
}
