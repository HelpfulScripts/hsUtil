/**
 * Site documentation
 */

/** */
import * as hslayout  from 'hslayout';
import * as hsstocks  from './';
import { EquityList } from './controller/Equity';

const TitleHeight        = '30px'; 
const FooterHeight       = '10px';  
const LeftNavWidth       = '200px'; 
const StocksDetailHeight = '110px'; 

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
                    { Layout: {
                        css: '.hs-main', 
                        rows:[StocksDetailHeight,'fill'], 
                        content:[{MainDetails:{}}, {MainGraph:{}}]
                    }}
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



