import { m, Vnode}   from '../../../mithril';
import { Modules }   from '../Modules'; 
import { Comment }   from './MainComment'; 
import { flags, sourceLink, libLink, signature, type } from './Parts'; 


export class Members {
    view(node: Vnode): Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;         
        return m('.hs-item-members', !mdl.groups? '': mdl.groups.map((g:any) => member(g, mdl.lib)));
    }
}


function member(g:any, lib:string) {
    let content = [];
    switch(g.title) {
        case 'Constructors':    content = g.children.map((c:number) => constructor(Modules.get(lib, c))); break;
        case 'Object literals': content = g.children.map((c:number) => objectLiteral(Modules.get(lib, c))); break;
        case 'Properties':      content = g.children.map((c:number) => property(Modules.get(lib, c))); break;
        case 'Variables':       content = g.children.map((c:number) => variables(Modules.get(lib, c))); break;
        case 'Functions':       content = g.children.map((c:number) => method(Modules.get(lib, c))); break;          
        case 'Methods':         content = g.children.map((c:number) => method(Modules.get(lib, c))); break;          
        case 'Classes':         content = g.children.map((c:number) => classes(Modules.get(lib, c))); break;          
        case 'Interfaces':      content = g.children.map((c:number) => classes(Modules.get(lib, c))); break;          
        case 'Type aliases':    content = g.children.map((c:number) => classes(Modules.get(lib, c))); break;          
        default:                content = g.children.map((c:number) => otherMember(Modules.get(lib, c)));
    }
    content.unshift(m('.hs-item-member-title', m('span', g.title)));
    return m('.hs-item-member', content);
}

function itemDescriptor(mdl:any, sub?:any) {
    return m('.hs-item-desc', [ 
            flags(mdl.flags),
            m('span.hs-item-kind', mdl.kindString),
            m('span.hs-item-name', sub? [libLink('a', mdl.lib, sub.id, sub.name), '('] : 
                                         libLink('a', mdl.lib, mdl.id, mdl.name)),
            signature(sub, mdl.lib),
            sub? m('span.hs-item-name', ')') : '',
            type(sub? sub.type : mdl.type, mdl.lib),
            mdl.sources? sourceLink(mdl.lib, mdl.sources[0]) : ''
        ]);
}

function itemChild(mdl:any, sub?:any) {
    return [
        itemDescriptor(mdl, sub),
        m(Comment, {mdl: sub? sub : mdl, short:true})
    ];
}

function classes(mdl:any) {
    return m('.hs-item-class', itemChild(mdl)); 
} 

function constructor(mdl:any) {
    return m('.hs-item-constructor', !mdl.signatures? '' : mdl.signatures.map((s:any) =>  m('', itemChild(mdl, s)))); 
} 

function objectLiteral(mdl:any) {
    return m('.hs-item-object-literal', itemChild(mdl)); 
}

function property(mdl:any) {
    return m('.hs-item-property', itemChild(mdl)); 
}

function variables(mdl:any) {
//console.log(mdl);    
//    return (mdl.flags && mdl.flags.isExported)? m('.hs-item-property', itemChild(mdl)) : ''; 
    return m('.hs-item-variable', itemChild(mdl)); 
}

function method(mdl:any) {
    return m('.hs-item-method', !mdl.signatures? '' : mdl.signatures.map((s:any) => m('', itemChild(mdl, s))));
}


function otherMember(mdl:any) {
console.log('otherMember ' + mdl.name);
//console.log(mdl);
    return m('.hs-item-other-member', itemChild(mdl)); 
}

