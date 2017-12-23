
import { m, Vnode}      from 'hslayout';
import { Layout }       from 'hslayout';
import { MainDetails }  from './MainDetails';
import { MainGraph }    from './MainGraph';
import { ViewLeft }     from './ViewLeft';

const LeftNavWidth       = '200px'; 
const StocksDetailHeight = '110px'; 

export const ViewPane = {
    view: (node: Vnode): Vnode => {
        return m(Layout, {
            columns: [LeftNavWidth, 'fill'],
            css: '.hs-view-pane',
            content: [
                m(ViewLeft), 
                m(Layout, {
                    css: '.hs-main', 
                    rows:[StocksDetailHeight,'fill'], 
                    content:[m(MainDetails), m(MainGraph)]
                })
            ]
        });
    }    
};

