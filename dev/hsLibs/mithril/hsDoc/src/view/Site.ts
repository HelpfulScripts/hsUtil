/**
 * Site documentation
 */

/** */
import { m, Vnode}                  from '../../../mithril';
import { Container, px, FILL }      from '../../../hsLayout/src/';
import { HeaderBar }                from './Header';
import { LeftNavWidth }             from './Header';
import { LeftNav }                  from './LeftNav';
import { MainDetail }               from './MainDetail';
import { FooterBar }                from './Footer';


const TitleHeight   = px(30);   // 
const FooterHeight  = px(10);   // 

/**
 *  Creates the main sitye layout
 */
export class HsSite extends Container {
    view(node:Vnode):Vnode {
        try {
            const lib   = node.attrs.lib || undefined;
            const field = node.attrs.field || 0;
//console.log(`HsSite ${lib}: ${field}`);        
            return this.layout('.hs-site', { rows:[TitleHeight, FILL, FooterHeight] }, [
                m(HeaderBar, {lib:lib}), 
                m(MainArea, {lib:lib, field:field}),
                m(FooterBar)
            ]);
        }
        catch(e) { console.log(e); }
    }
}


//----------- Main Site parts --------------------------------------------------------

class MainArea extends Container {   
    view(node:Vnode):Vnode {
        const lib = node.attrs.lib;
        const field = node.attrs.field;
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        return this.layout('.hs-site-main', { columns: [LeftNavWidth, FILL]}, [
            m(LeftNav, {lib:lib, field:field}), 
            m(MainDetail, {lib:lib, field:field})
        ]);
    }
};

