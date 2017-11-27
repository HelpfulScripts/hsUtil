
import { m, Vnode}      from 'hslayout';
import { Collapsible,
         AddButton, 
         Modal,
         Button,
         RemoveButton }  from 'hswidget';
import { EquityList,
         Category,
         EquityItem }   from '../controller/Equity';

export function tabView(list:EquityList, symbol:string) {
    return m('.hs-left-nav', [
        list? navList(list, symbol) : 'left',
        m(Modal, { content: m(Form, {list:list}) })
    ]);
}

/** creates the list if modules (`*.ts` files) */
function navList(list:EquityList, symbol:string):Vnode[] {    
    /** process a category, e.g. `Stocks`. */

    const cats = list.getCategories().map((c:Category) => categoryEntry(c,list,symbol));
    return m('.hs-left-nav-content', cats);
}

/** returns a Vnoide structure representing an investment category. */
function categoryEntry(c:Category, list:EquityList, symbol:string) {

    /** returns a Vnode for an ivestment item, e.g. "Google" */
    function equityEntry(item:EquityItem) {
        function removeItem() { 
            list.removeItem(item); }

        const selected = (item.symbol === symbol)? '.hs-left-nav-selected' : '';
        if (selected) {
            list.loadQuotes(item);
        }
        return m(`.hs-left-nav-entry ${selected}`, [
            m('a', { href:`/api/View/${item.symbol}`, oncreate:m.route.link, onupdate:m.route.link }, item.name),
            m(RemoveButton, { onclick:removeItem })
        ]);
    }

    const selected = (c.cat === list.getItem(symbol).cat)? '.hs-left-nav-selected' : '';
    return m(Collapsible, {css:`.hs-left-nav-module`, isExpanded:selected, components: [
        m('.hs-left-nav-module-name ${selected}', [
            m('a', { href:`/api/View/${list.getFirstByCat(c.cat).symbol}`, oncreate:m.route.link, onupdate:m.route.link }, c.cat),
            m(AddButton, { onclick:Modal.show })
        ]),
        c.equities.map(equityEntry)
    ]});
}

class Form {
    list:EquityList;
    symbol = '';

    submit() {
        this.list.addItem({
            symbol: this.symbol,
            cat: 'Stocks',
            name: this.symbol
        });           
        Modal.dismiss();
    };
        
    view(node:Vnode) {
        const form = this;
        this.list = node.attrs.list;
        return m('.hs-form',  m('form', { onsubmit: () => form.submit.apply(this) }, [
            m('input[type="text"][placeholder="Symbol"][name="symbol"]', {
                value: form.symbol,
                onchange: function(e:any) {
                    form.symbol = e.currentTarget.value;
                }
            }),
            m(Button, {name:'add', onclick:() => form.submit.apply(this)})
//            m('button[type="submit"]', { class:'hs-button'}, 'add'),
        ]));
    }
}