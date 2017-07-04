import { m, Vnode}          from '../../../mithril';
import { Layout }           from '../../../hsLayout/src/';
import { Modules }          from '../Modules'; 
import { tooltip }          from './Tooltip';
import { Comment }          from './MainComment';
import { Members }          from './MainMembers';
import { flags, libLink, sourceLink }   from './Parts';

export class MainDetail extends Layout { 
    view(node:Vnode): Vnode {
        const lib = node.attrs.lib || '';
        const mdl = Modules.get(lib, node.attrs.field) || '';
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        return this.layout('.hs-main-detail', node, {}, [m(ItemDoc, {mdl: mdl})]); 
    }
}
class ItemDoc {
    view(node: Vnode): Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;
        return m('.hs-item-doc', [
            m(Title,   {mdl:mdl}),
            m(Comment, {mdl:mdl}),
            m(Members, {mdl:mdl})
        ]);
    }
}

class Title {
    view(node: Vnode): Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;
        return m('.hs-item-title', [
            flags(mdl.flags),
            m('span.hs-item-kind', mdl.kindString),
            m('span.hs-item-name', tooltip(mdl.name, 'class name and then some', 'bottom')),
            !mdl.extendedTypes? undefined : m('span.hs-item-extends', 'extends'),
            !mdl.extendedTypes? undefined : m('span.hs-item-extensions', mdl.extendedTypes.map((t:any, i:number) =>
                    m('span.hs-item-extension', [
                        libLink('a', mdl.lib, t.id, t.name),
                        mdl.extendedTypes.map.length>(i+1)? ', ': ''
                    ])
                )),
            sourceLink(mdl.lib, mdl.sources? mdl.sources[0] : undefined)
        ]);
    }
}



/*
//------------ Debug -----------------------------
class DebugItemDetail  { 
    view(node: Vnode): Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;
        return m('.hs-item-detail', m(DebugItemTable, {mdl:mdl}));
    }
}

class DebugItemTable  {
    view(node: Vnode): Vnode {
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
*/