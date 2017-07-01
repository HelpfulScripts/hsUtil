const m = require("mithril");

import { Modules }   from '../Modules'; 
import { comment }   from './MainComment'; 

const SourceBase = 'src/';

export function members(mdl:any) {
    return !mdl.groups? '': mdl.groups.map((g:any) => member(g, mdl.lib));
}

function member(g:any, lib:string) {
    let content = [];
    switch(g.title) {
        case 'Constructors':content = g.children.map((c:number) => constructor(Modules.get(lib, c))); break;
//        case 'Properties':  content = g.children.map((c:number) => property(Modules.get(lib, c))); break;
//        case 'Methods':     content = g.children.map((c:number) => method(Modules.get(lib, c))); break;          
//        default:            content = g.children.map((c:number) => otherMember(Modules.get(lib, c)));
    }
    content.unshift(m('.hs-item-member-title', g.title));
    return m('.hs-item-member', content);
}

function constructor(mdl:any) {
console.log('constructor');
console.log(mdl);
    return m('.hs-item-constructor', !mdl.signatures? [] : mdl.signatures.map((s:any, i:number) => m('', [
            m('.hs-item-member-name', sourceLink(`${s.name}()`, mdl.lib, mdl.sources[i])),
            m('.hs-item-comment', comment(s))
        ])
    )); 
}

/*
function property(mdl:any) {
console.log('property');
console.log(mdl);
    const content = [m('.hs-item-member-name', [
        sourceLink(mdl.name, mdl.lib, mdl.sources[0]),
        mdl.type? m('.hs-item-member-type', ': '+mdl.type.name) : undefined
    ])]; 
    content.push(m('.hs-item-comment', comment(mdl)));
    return m('.hs-item-property', content);
}

function method(mdl:any) {
console.log('method');
console.log(mdl);
    let signs; 
    if (mdl.signatures) { signs = mdl.signatures.map((s:any) => [
        mdl.sources? sourceLink(s.name, mdl.lib, mdl.sources[0]) : '',
        '(', 
        s.parameters? m('', s.parameters((p:any, i:number) => `${i>0?',':''}${p.name}:${p.type.name}`)) : undefined, 
        `):${s.type? s.type.name : ''}`, 
        m('.hs-item-comment', comment(mdl))
    ]); }
    return m('.hs-item-method', signs);
}

function otherMember(mdl:any) {
console.log('otherMember');
console.log(mdl);
    const content = [m('.hs-item-member-name .hs-item-other-member', sourceLink(mdl.name, mdl.lib, mdl.sources[0]))]; 
    content.push(m('.hs-item-comment', comment(mdl)));
    return content;
}
*/

function sourceLink(text:string, lib:string, source:any) {
    return m(`a[href=${SourceBase}${lib}/${source.fileName}#${source.line}]`, text);
}
