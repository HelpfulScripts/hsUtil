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
        case 'Properties':  content = g.children.map((c:number) => property(Modules.get(lib, c))); break;
        case 'Methods':     content = g.children.map((c:number) => method(Modules.get(lib, c))); break;          
//        default:            content = g.children.map((c:number) => otherMember(Modules.get(lib, c)));
    }
    content.unshift(m('.hs-item-member-title', m('span', g.title)));
    return m('.hs-item-member', content);
}

function constructor(mdl:any) {
console.log(mdl);
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
console.log(mdl);
    return m('.hs-item-property', [
        m('.hs-item-desc', [ 
            m('span.hs-item-name', mdl.name),
            mdl.type? m('span', [': ', type(mdl.type)]) : '',
            mdl.sources? sourceLink(mdl.lib, mdl.sources[0]) : ''
        ]),
        m('.hs-item-comment', comment(mdl))
    ]); 
}

function method(mdl:any) {
console.log(mdl);
    return m('.hs-item-method', !mdl.signatures? '' : mdl.signatures.map((s:any) => 
        m('', [
            m('.hs-item-desc', [
                m('span.hs-item-name', [s.name, '(']),
                signature(s),
                m('span.hs-item-name', ')'),
                s.type? m('span', [': ', type(s.type)]) : '',
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

function sourceLink(lib:string, source:any) {
    return m('span.hs-item-member-source', !source? '' : 
        m(`a[href=${SourceBase}${lib}/${source.fileName}#${source.line}]`, '[source]')
    );
}

function type(t:any) {
    function _type(t:any) {
        switch (t.type) { 
            case 'instrinct':   return t.name; 
            case 'union':       return t.types.map(_type).join(' | ');
            case 'reference':   return 'Array<'+ t.typeArguments.map(_type).join(', ') + '>';
            default: console.log('unknown type '+ t.type);
                        console.log(t);
                        return '';
        }
    }
    return m('span.hs-item-sig-type', _type(t));
}

function signature(s:any): typeof m.Vnode {
    function parameter(p:any, i:number) {
        return m('span', [
            `${i>0?', ':''}`,
            m('span.hs-item-sig-param', [
                m('span', p.name),
                ': ', 
                type(p.type)
            ])
        ]);
    }

    return m('span.hs-item-signature', s.parameters? s.parameters.map(parameter) : '');
}
