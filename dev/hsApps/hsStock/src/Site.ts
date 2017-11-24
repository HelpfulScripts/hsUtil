/**
 * Site documentation
 */

/** */
import * as hslayout  from 'hslayout';
import * as hsstocks  from './';
import { EquityList } from './view/Equity';

const TitleHeight   = '30px'; 
const FooterHeight  = '10px';  
const LeftNavWidth  = '200px'; 

export const gEquityList = new EquityList();

const myConfig = {
    Layout: { // whole page
        rows:  [TitleHeight, "fill", FooterHeight],
        css: '.hs-site',        
        content: [
            { Header: {css: '.hs-site-header'} },
            { Layout: {
                columns: [LeftNavWidth, 'fill'],
                content: [
                    { LeftNav: {css: '.hs-left'}}, 
                    { Main: {css: '.hs-main'}}
                ]
            }},
            { Layout: { // footer
                css: '.hs-site-footer',
                content: '(c) Helpful Scripts'
            }}
        ] 
    },
    route: {
        default: '/api/',
        paths: [
            '/api',                 // defines `http://localhost/#!/api/
            '/api/:mode/:symbol'    // defines `http://localhost/#!/api/node/symbol
        ]
    }
}; 


export function init() {
    gEquityList.loadEquityList().then(() => {
        new hslayout.HsConfig([hslayout, hsstocks]).attachNodeTree(myConfig, document.body);
    });
}



