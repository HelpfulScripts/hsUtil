import { m, Vnode}      from 'hslayout';
import { Collapsible,
         AddButton, 
         Modal,
         Button,
         RemoveButton }  from 'hswidget';
import { gEquityList,
         EquityList,
         Category,
         EquityItem }   from '../controller/Equity';
import { authenticated } from '../Router';
import { readAssets,TransactionList }   from '../controller/Assets';

let gAssets:TransactionList;

export const ViewLeft = {
    view: (node: Vnode):Vnode => {
        const symbol  = m.route.param('symbol');
        return m('.hs-left-nav', [
            gEquityList? navList(gEquityList, symbol) : 'left',
            m(Modal, { content: m(AddItemForm, {list:gEquityList}) })
        ]);
    }
};

/** creates the list if modules (`*.ts` files) */
function navList(list:EquityList, symbol:string):Vnode[] {    
    /** process a category, e.g. `Stocks`. */

    if (authenticated()) { getAssets(); }
    
    const cats = list.getCategories().map((c:Category) => categoryEntry(c,list,symbol));
    return m('.hs-left-nav-content', cats);
}

/** returns a Vnoide structure representing an investment category. */
function categoryEntry(c:Category, list:EquityList, symbol:string) {
    /** returns a Vnode for the category header */
    function catHeader():Vnode {
        return m('.hs-left-nav-module-name ${selected}', [
            m('a', { href:`/site/View/${symbol}`, oncreate:m.route.link, onupdate:m.route.link }, [
                c.equities.length + ' ',
                c.cat
            ]),
            m(AddButton, { onclick:Modal.show })
        ]);
    }

    /** returns a Vnode for an ivestment item, e.g. "Google" */
    function equityEntry(item:EquityItem):Vnode {
        function removeItem() { 
            list.removeItem(item); }

        const selected = (item.symbol === symbol)? '.hs-left-nav-selected' : '';
        const unknown = item.company.primaryExchange? '' : '.hs-unkown-equity';
        return m(`.hs-left-nav-entry ${selected} ${unknown} ${item.shares>0?'.hs-owns-shares':''}`, [
            m('a', { href:`/site/View/${item.symbol}`, oncreate:m.route.link, onupdate:m.route.link }, [
                item.shares?item.shares+' ':'', item.name
            ]),
            m(RemoveButton, { onclick:removeItem })
        ]);
    }

    // open the collapsible if it contains `symbol`. Otherwise leave it unchanged (undefined)
    const selected = (c.cat === list.getItem(symbol).cat)? '.hs-left-nav-selected' : undefined;
    return m(Collapsible, {css:`.hs-left-nav-module`, isExpanded:selected, components: [
        catHeader(),
        c.equities.map(equityEntry)
    ]});
}

function getAssets() {
    if (!gAssets) {
        readAssets('private/transactions.json')
        .then((list:TransactionList) => {
            gAssets = list;
            Object.keys(list).forEach((sym:string) => gEquityList.addItem({
                symbol: sym,
                cat: 'new',
                name: sym,
                shares: list[sym].latestShares,
                trades: list[sym].trades
            }));
        });
    }
}

class AddItemForm {
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
        ]));
    }
}