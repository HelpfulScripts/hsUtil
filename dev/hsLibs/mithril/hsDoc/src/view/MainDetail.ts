const m = require("mithril");


import { Layout }    from '../../../hsLayout/src/';
import { Modules }   from '../Modules'; 
import { tooltip }   from './Tooltip';
import { comment }   from './MainComment';
import { members }   from './MainMembers';

export class MainDetail extends Layout { 
    view(node:typeof m.Vnode): typeof m.Vnode {
        const lib = node.attrs.lib || '';
        const mdl = Modules.get(lib, node.attrs.field) || '';
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        return this.layout('.hs-main-detail', node, {}, [
            m(ItemDoc, {mdl: mdl}),
            m(DebugItemDetail, {mdl: mdl})
        ]); 
    }
}
class ItemDoc {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;
        let doc;
        switch(mdl.kindString) {
            case 'Class': doc = classDoc(mdl); break;
            default: doc = m('.hs-item-unknown-kind', `${mdl.name} (${mdl.kind}, ${mdl.kindString})`); 
        }
        return m('.hs-item-doc', doc);
    }
}

function classDoc(mdl:any) {
    return [
        m('.hs-item-title', title(mdl)),
        m('.hs-item-comment', comment(mdl)),
        m('.hs-item-members', members(mdl))
    ];
}

function title(mdl:any) {
    return [
        m('span.hs-item-exported', (mdl.flags && mdl.flags.isExported)? 'export' : ''),
        m('span.hs-item-kind', mdl.kindString),
        m('span.hs-item-name', tooltip(mdl.name, 'class name and then some', 'bottom')),
        !mdl.extendedTypes? undefined : m('span.hs-item-extends', 'extends'),
        !mdl.extendedTypes? undefined : m('span.hs-item-extensions', mdl.extendedTypes.map((t:any, i:number) =>
                m('span.hs-item-extension', [
                    m(`a[href=/api/${mdl.lib}/${t.id}]`, {oncreate: m.route.link}, t.name), 
                    mdl.extendedTypes.map.length>(i+1)? ', ': ''
                ])
            ))
    ];
}



//------------ Debug -----------------------------
class DebugItemDetail  { 
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;
        return m('.hs-item-detail', m(DebugItemTable, {mdl:mdl}));
    }
}

class DebugItemTable  {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;
        return m('table', {}, [Object.keys(mdl).map((k:string) => {
            let content;
            if (typeof mdl[k] === 'object') {
                content = (k==='children')? 
                    `[${mdl.children.length}]` : 
                    m(DebugItemTable, {mdl: mdl[k]}); 
            } else {
                content = `${mdl[k]}`;
            }
            return m('.hs-tr-border', [m('td', m('b', `${k}:`)), m('td', content)]);
        })]);
    }
}
