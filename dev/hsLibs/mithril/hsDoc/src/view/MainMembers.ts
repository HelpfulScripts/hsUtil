const m = require("mithril");

import { Modules }   from '../Modules'; 
import { comment }   from './MainComment'; 
import { flags, sourceLink, signature, type } from './Parts'; 


export function members(mdl:any) {
    return m('.hs-item-members', !mdl.groups? '': mdl.groups.map((g:any) => member(g, mdl.lib)));
}



function member(g:any, lib:string) {
    let content = [];
    switch(g.title) {
        case 'Constructors':    content = g.children.map((c:number) => constructor(Modules.get(lib, c))); break;
        case 'Object Literals': content = g.children.map((c:number) => property(Modules.get(lib, c))); break;
        case 'Properties':      content = g.children.map((c:number) => property(Modules.get(lib, c))); break;
        case 'Variables':       content = g.children.map((c:number) => variables(Modules.get(lib, c))); break;
        case 'Functions':       content = g.children.map((c:number) => method(Modules.get(lib, c))); break;          
        case 'Methods':         content = g.children.map((c:number) => method(Modules.get(lib, c))); break;          
        default:                content = g.children.map((c:number) => otherMember(Modules.get(lib, c)));
    }
    content.unshift(m('.hs-item-member-title', m('span', g.title)));
    return m('.hs-item-member', content);
}

function itemDescriptor(mdl:any, sub?:any) {
    return m('.hs-item-desc', [ 
            flags(mdl.flags),
            m('span.hs-item-name', sub? [sub.name, '('] : mdl.name),
            signature(sub, mdl.lib),
            sub? m('span.hs-item-name', ')') : '',
            type(sub? sub.type : mdl.type, mdl.lib),
            mdl.sources? sourceLink(mdl.lib, mdl.sources[0]) : ''
        ]);
}

function itemChild(mdl:any, sub?:any) {
    return [
        itemDescriptor(mdl, sub),
        comment(sub? sub : mdl)
    ];
}

function constructor(mdl:any) {
    return m('.hs-item-constructor', !mdl.signatures? '' : mdl.signatures.map((s:any) =>  m('', itemChild(mdl, s)))); 
} 

function property(mdl:any) {
    return m('.hs-item-property', itemChild(mdl)); 
}

function variables(mdl:any) {
    return (mdl.flags && mdl.flags.isExported)? m('.hs-item-property', itemChild(mdl)) : ''; 
}

function method(mdl:any) {
    return m('.hs-item-method', !mdl.signatures? '' : mdl.signatures.map((s:any) => m('', itemChild(mdl, s))));
}


function otherMember(mdl:any) {
console.log('otherMember');
console.log(mdl);
    return m('.hs-item-other-member', itemChild(mdl)); 
}

