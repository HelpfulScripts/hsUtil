const m = require("mithril");

const SourceBase = 'src/';


export function flags(flags:any) {
    return m('span.hs-item-flags', !flags? '' : [
        (flags.isExported)? m('span.hs-item-exported', 'export') : '',
        (flags.isPublic)?   m('span.hs-item-public', 'public') : ''
    ]);
}

export function sourceLink(lib:string, source:any) {
    return m('span.hs-item-member-source', !source? '' : 
        m(`a[href=${SourceBase}${lib}/${source.fileName}#${source.line}]`, '[source]')
    );
}

export function type(t:any) {
    function _type(t:any) {
        switch (t.type) { 
            case 'instrinct':   return t.name; 
            case 'union':       return t.types.map(_type).join(' | ');
            case 'reference':   return t.typeArguments? 'Array<'+ t.typeArguments.map(_type).join(', ') + '>' : t.name;
            default: console.log('unknown type '+ t.type);
                        console.log(t);
                        return '';
        }
    }

    try {
       return t? m('span.hs-item-sig-type', _type(t)) : m('','');
    } catch(e) { console.log(e); console.log(e.trace); }
}

export function signature(s:any): typeof m.Vnode {
    function comma(i:number)      { return (i>0)? ', ': ''; }
    function optional(flags: any) {
        return (flags && flags.isOptional)? '.hs-item-optional' : '';
    }

    function parameter(p:any, i:number) {
        return m('span', [
            comma(i),
            m('span.hs-item-sig-param', [
                m(`span${optional(p.flags)}`, p.name),
                type(p.type)
            ])
        ]);
    }

    return m('span.hs-item-signature', s.parameters? s.parameters.map(parameter) : '');
}
