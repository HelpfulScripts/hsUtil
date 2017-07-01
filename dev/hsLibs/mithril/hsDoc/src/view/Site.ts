/**
 * Site documentation
 */


const m = require("mithril");

import { Layout, px, FILL }         from '../../../hsLayout/src/';
import { HeaderBar }                from './Header';
import { LeftNavWidth }             from './Header';
import { LeftNav }                  from './LeftNav';
import { MainDetail }               from './MainDetail';
import { FooterBar }                from './Footer';


const TitleHeight   = px(30);   // 
const FooterHeight  = px(10);   // 

/**
 * hahaha 
 */
export class HsSite extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        try {
            const lib   = node.attrs.lib || 'projectOverview';
            const field = node.attrs.field || 0;
//console.log(`HsSite ${lib}: ${field}`);        
            return this.layout('.hs-site', node, { rows:[TitleHeight, FILL, FooterHeight] }, [
                m(HeaderBar), 
                m(MainArea, {lib:lib, field:field}),
                m(FooterBar)
            ]);
        }
        catch(e) { console.log(e); }
    }
} 


//----------- Main Site parts --------------------------------------------------------

class MainArea extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        const lib = node.attrs.lib;
        const field = node.attrs.field;
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        return this.layout('.hs-site-main', node, { columns: [LeftNavWidth, FILL]}, [
            m(LeftNav, {lib:lib, field:field}), 
            m(MainDetail, {lib:lib, field:field})
        ]);
    }
};

