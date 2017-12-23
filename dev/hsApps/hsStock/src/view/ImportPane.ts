import { m, Vnode }     from 'hslayout';
import { Layout }       from 'hslayout';
import { gEquityList,
         EquityList }   from '../controller/Equity';
import { Button }       from 'hswidget';


let Symbols:string[] = []; 

export class ImportPane extends Layout {
    getComponents(node: Vnode): Vnode {
        return buttons(gEquityList);
    }
}

function buttons(list:EquityList) {

    return [
        m(Button, {name:'get IEX Symbols'}),
        m(Button, {name:'Stock Import'}),
        m('', `${Symbols.length} records loaded`)
    ];
}

