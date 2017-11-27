import { m }            from 'hslayout';
import { EquityList,
         EquityItem }   from '../controller/Equity';
import { Trader,
         TraderReferences
        }               from '../controller/Trader';
import { Button }       from 'hswidget';


let Symbols:string[] = []; 

const trader = new Trader();

export function tabImport(list:EquityList, symbol:string) {
    return m('.hs-left-nav', buttons(list));
}

function buttons(list:EquityList) {
    function stockImport() {
        list.load('symbols.json')
        .then((sList:string[]) => {
            function next(i:number) {
                trader.getMeta(sList[i])
                .then((data:EquityItem) => {
                    list.save(data, `stocks/sym${sList[i]}.json`);
                    return i;
                })
                .then((i:number) => {
                    if (i<sList.length) { next(i+1); }
                })
                .catch((err:any) => console.log(`i=${i}, sym=${sList[i]}, err=${err}`));
            }
            next(0);
        });   
    } 

    function loadSymbols() {
        trader.getSymbols()
        .then((data:TraderReferences) => {
            list.save(data.equities, 'equityCollection.json')
            .then(() => list.save(data.symbols, 'symbols.json'))
            .then(() => list.save(data.names, 'names.json'));
            Symbols = data.symbols;
            return data;
        });
    }

    return [
        m(Button, {name:'get IEX Symbols', onclick:loadSymbols}),
        m(Button, {name:'Stock Import', onclick:stockImport}),
        m('', `${Symbols.length} records loaded`)
    ];
}

