const m = require("mithril");

import { Modules }   from '../Modules'; 
import { comment }   from './MainComment'; 
import { flags, sourceLink, signature, type } from './Parts'; 


export function members(mdl:any) {
    return !mdl.groups? '': mdl.groups.map((g:any) => member(g, mdl.lib));
}



function member(g:any, lib:string) {
    let content = [];
    switch(g.title) {
        case 'Constructors':content = g.children.map((c:number) => constructor(Modules.get(lib, c))); break;
        case 'Properties':  content = g.children.map((c:number) => property(Modules.get(lib, c))); break;
        case 'Methods':     content = g.children.map((c:number) => method(Modules.get(lib, c))); break;          
//        default:            content = g.children.map((c:number) => otherMember(Modules.get(lib, c)));
    }
    content.unshift(m('.hs-item-member-title', m('span', g.title)));
    return m('.hs-item-member', content);
}

function constructor(mdl:any) {
//console.log(mdl);
    return m('.hs-item-constructor', !mdl.signatures? '' : mdl.signatures.map((s:any) => 
        m('', [
            m('.hs-item-desc', [
                m('span.hs-item-name', [s.name, '(']),
                signature(s),
                m('span.hs-item-name', ')'),
                mdl.sources? sourceLink(mdl.lib, mdl.sources[0]) : ''
            ]),
            m('.hs-item-comment', comment(s))
        ])
    )); 
} 

function property(mdl:any) {
//console.log(mdl);
    return m('.hs-item-property', [
        m('.hs-item-desc', [ 
            flags(mdl.flags),
            m('span.hs-item-name', mdl.name),
            type(mdl.type),
            mdl.sources? sourceLink(mdl.lib, mdl.sources[0]) : ''
        ]),
        m('.hs-item-comment', comment(mdl))
    ]); 
}

function method(mdl:any) {
//console.log(mdl);
    return m('.hs-item-method', !mdl.signatures? '' : mdl.signatures.map((s:any) => 
        m('', [
            m('.hs-item-desc', [
                flags(mdl.flags),
                m('span.hs-item-name', [s.name, '(']),
                signature(s),
                m('span.hs-item-name', ')'),
                type(s.type),
                mdl.sources? sourceLink(mdl.lib, mdl.sources[0]) : ''
            ]),
            m('.hs-item-comment', comment(s))
        ])
    ));
}


/*
function otherMember(mdl:any) {
console.log('otherMember');
console.log(mdl);
    const content = [m('.hs-item-member-name .hs-item-other-member', sourceLink(mdl.name, mdl.lib, mdl.sources[0]))]; 
    content.push(m('', comment(mdl)));
    return content;
}
*/

