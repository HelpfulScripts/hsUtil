/**
 * Site documentation
 */

/** */
import * as hslayout  from 'hslayout';

const TitleHeight   = '30px'; 
const FooterHeight  = '10px';  

const myConfig = {
    Container: { // whole page
        rows:  [TitleHeight, "fill", FooterHeight],
        css: '.hs-site',
/*        
        content: [{
            Container: {
                columns: ['50%'],
                css: '.hs-site',
                content: 'Header2'
        }},{
            Container: {
                columns: ['50%'],
                css: '.hs-site',
                content: 'Main'
        }},{
            Container: {
                columns: ['50%'],
                css: '.hs-site',
                content: 'Footer'
        }}
        ] 
*/            
        content: ['Header', 'Main Part', 'Footer']
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
    new hslayout.HsConfig([hslayout]).attachNodeTree(myConfig, document.body);
}



