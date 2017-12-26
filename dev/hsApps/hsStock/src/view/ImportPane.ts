import { m, Vnode }         from 'hslayout';
import { Layout }           from 'hslayout';
import { gEquityList,
         EquityList }       from '../controller/Equity';
import { Button }           from 'hswidget';
import { TraderReferences } from '../controller/Trader';
import { save }             from '../saveToFile';


let Symbols:string[] = []; 

export const ImportPane = {
    view: (node: Vnode): Vnode => {
        return m(Layout, {
            rows: ['50px'],
            css: '.hs-import-pane',
            content: buttons(gEquityList)
        });
    }    
};


function buttons(list:EquityList) {
    return [
        m(Button, {name:'get IEX Symbols', onclick:readSymbols}),
        m(Button, {name:'Stock Import'}),
        m('', `${Symbols.length} records loaded`)
    ];
}

function readSymbols() {
    gEquityList.getTrader().getSymbols()
    .then((ref:TraderReferences) => {
        save(ref.equities, `hsStock/data/traderSymbols.json`);
    });
}