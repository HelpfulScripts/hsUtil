import { m, Vnode}  from '../../../mithril';
import { Layout }   from '../../../hsLayout/src/';
import { Modules }  from '../Modules'; 
import { comment, commentLong }  from './MainComment';
import { flags, sourceLink, signature, type, extensionOf, kindString, itemName } 
                    from './Parts'; 


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
        const sig = mdl.signatures? mdl.signatures[0] : mdl;
        return m('.hs-item-doc', [
            title(mdl, sig),
            commentLong(sig),
            members(sig, sig)
        ]);
    }
}

function title(mdl:any, sig:any): Vnode { 
console.log(mdl);    
    return m('.hs-item-title', itemDescriptor(mdl, sig)); 
}

function members(mdl:any, sig:any): Vnode {
    if (mdl.groups) {
        return m('.hs-item-members', mdl.groups.map((g:any) => member(g, mdl.lib)));
    } else if (mdl.parameters) {
        return m('.hs-item-members', parameter(mdl.parameters, mdl.lib));
    } else {
        return m('.hs-item-members');
    }
}

function parameter(g:any[], lib:string): Vnode {
    let content = g.map((c:any) => m('.hs-item-parameter', itemChild(c)));
    content.unshift(m('.hs-item-member-title', m('span', 'Parameters')));
    return m('.hs-item-member', content);
}

function member(group:any, lib:string): Vnode {
    const groupMap = {
        'External modules': '.hs-item-external-module',
        'Constructors':     '.hs-item-constructor',
        'Classes':          '.hs-item-class',          
        'Interfaces':       '.hs-item-interface',          
        'Functions':        '.hs-item-function',          
        'Methods':          '.hs-item-method',          
        'Variables':        '.hs-item-variable',
        'Object literals':  '.hs-item-object-literal',
        'Properties':       '.hs-item-property',
        'Type aliases':     '.hs-item-alias',          
    };
    const fn = groupMap[group.title] || '.hs-item-unknown-member';
    let content = group.children.map((c:number) => 
            m(fn, itemChild(Modules.get(lib, c)))
    );

    content.unshift(m('.hs-item-member-title', m('span', group.title)));
    return m('.hs-item-member', content);
}

export function itemDescriptor(mdl:any, sig:any):Vnode {
    try { return m('.hs-item-desc', [ 
            flags(mdl.flags, ['export']),
            kindString(mdl),
            itemName(mdl, mdl),
            signature(sig, mdl.lib),
            type(sig.type,  mdl.lib),
            extensionOf(mdl),
            sourceLink(mdl)
        ]);
    }
    catch(e) { console.log(e); console.log(mdl); }
}

function itemChild(mdl:any, sig=mdl): Vnode[] {
    return mdl.signatures? mdl.signatures.map((s:any) =>
            m('',[itemDescriptor(mdl, s), comment(s)])
        ) : 
        [itemDescriptor(mdl, sig), comment(sig)];
}


