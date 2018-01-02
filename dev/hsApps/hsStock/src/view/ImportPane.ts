import { m, Vnode }         from 'hslayout';
import { Layout }           from 'hslayout';
import { gEquities,
         Equities }         from '../controller/Equities';
import { Button }           from 'hswidget';
import { VenueSummary }     from '../controller/Venue';
import { save }             from '../fileIO';


let Symbols:string[] = []; 

export const ImportPane = {
    view: (node: Vnode): Vnode => {
        return m(Layout, {
            rows: ['50px'],
            css: '.hs-import-pane',
            content: buttons(gEquities)
        });
    }    
};


function buttons(list:Equities) {
    return [
        m(Button, {name:'get IEX Symbols', onclick:readSymbols}),
        m(Button, {name:'get Stock Splits', onclick:readSplits}),
//        m(Button, {name:'clear invalid venues', onclick:gEquities.clearInvalids.bind(gEquities)}),
        m(Button, {name:'Stock Import'}),
        m('', `${Symbols.length} records loaded`)
    ];
}

function readSplits() {
    gEquities.readSplits(); 
}

function readSymbols() {
    gEquities.getVenueSymbols()
    .then((ref:VenueSummary) => {
        save(ref.equities, `hsStock/data/traderSymbols.json`);
    });
}
