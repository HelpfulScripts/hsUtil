import { m, Vnode} from 'hslayout';
import { tooltip } from './Tooltip';
import { DocSets } from '../DocSets'; 

const SourceBase = 'src/'; 


// TODO: sort flags in array to garantee sequence of printing
export function flags(flags:any, ignore:string[]=[]) {
    const knownFlags = {
        isExported:             'export',
        isExternal:             '',
        isPublic:               'public',
        isPrivate:              'private',
        isProtected:            'protected',
        isConstructorProperty:  'constructorProperty',
        isStatic:               'static',
        isOptional:             'optional'
    };
    return m('span', !flags? [] : 
        Object.keys(flags).map((f:string) => {
            let ign = false;
            let flag = knownFlags[f];
            if (flag !== undefined) { ign = (ignore.indexOf(flag) >= 0); }
            else { flag = f; }
            return m(`span.hs-item-${ign?'ignore':(flag===f?'unknown':flag)}-flag`, ign? undefined : flag);
        })
    );
}

export function kindString(mdl:any) {
    return m('span.hs-item-kind', mdl.kindString);
}

export function itemName(mdl:any, sub:any) {
    return m('span.hs-item-name', libLink('a', mdl.lib, sub.fullPath, sub.name));
}

export function itemLongName(mdl:any, sub:any) {
    return m('span.hs-item-name', libLink('a', mdl.lib, mdl.fullPath, sub.name));
}


export function itemTooltip(mdl:any) {
    return m('span.hs-item-name', tooltip(mdl.name, 'class name and then some', 'bottom'));
}

export function extensionOf(mdl:any) {
    return m('span.hs-item-extensions', !mdl.extendedTypes? undefined : [
        m('span.hs-item-extends', 'extends'),
        m('span', mdl.extendedTypes.map((t:any, i:number) =>
            m('span.hs-item-extension', [
                libLink('a', mdl.lib, DocSets.get(mdl.lib, t.id).fullPath, t.name),
                mdl.extendedTypes.map.length>(i+1)? ', ': ''
            ])
        )),
    ]);
}

export function sourceLink(mdl:any) {
    const source = mdl.sources? mdl.sources[0] : undefined;
    if (source) {
        let file = (source && source.fileName)? source.fileName.replace('.ts', '.html') : '';
        const index = file.indexOf(mdl.lib);
        file = file.substr(index); // only consider links within the docSet (everything after the lib name)
        return m('span.hs-item-member-source',  
            m('a', { href:`${SourceBase}${file}#${Math.max(0,source.line-5)}`, target:"_blank"}, '[source]')
        );
    } else {
        return m('span.hs-item-member-source', '');
    }
}

/**
 * creates a library link on the specified `name`. 
 * The link points to `/api/<lib>/<id>`
 * @param css the css tag selector to use
 * @param cls the css class selector to use
 * @param lib the lib string to point to
 * @param id the id number to point to
 * @param name the name on which to formt he link
 */
export function libLink(css:string, lib:string, id:string, name:string) {
    return m(css, { href:`/api/${lib}/${id}`, oncreate: m.route.link, onupdate: m.route.link }, name);
};

export function type(t:any, lib:string) {
    function _type(t:any) {
        switch (t.type) { 
            case 'instrinct':       return t.id? libLink('span', lib, t.fullPath, t.name) : t.name; 
            case 'stringLiteral':   return t.type; 
            case 'union':           return t.types.map(_type).join(' | ');
            case 'reference':       return t.typeArguments? t.name+'<'+ t.typeArguments.map(_type).join(', ') + '>' : 
                                           t.id? libLink('span', lib, t.fullPath, t.name) : t.name;
            case 'reflection':      return t.declaration? t.declaration.kindString : 'UNKNOWN';
            default: console.log('unknown type '+ t.type);
                     console.log(t);
                     return t.type;
        }
    }

    try {
       return m('span', t?[
           m('span.hs-item-name',':'), 
           m('span.hs-item-sig-type', _type(t))
        ] : undefined);
    } catch(e) { console.log(e); console.log(e.trace); }
}

/**
 * creates a function or method signature
 */
export function signature(s:any, lib:string): Vnode {
    function comma(i:number)      { return (i>0)? ', ': ''; }
    function optional(flags: any) {
        return (flags && flags.isOptional)? '.hs-item-optional' : '';
    }

    let sig;
    if (s && s.parameters) {
        sig = s.parameters.map((p:any, i:number) => m('span', [
            comma(i),
            m('span.hs-item-sig-param', [
                m(`span.hs-item-name${optional(p.flags)}`, p.name),
                type(p.type, lib)
            ])
        ]));
        sig.unshift(m('span.hs-item-name', '('));
        sig.push(m('span.hs-item-name', ')'));
    }
    return m('span.hs-item-signature', sig);
}

export function makeID(section:string, mdl:any) {
    let result = section? section+'_' : '';
    result = (result + (mdl.name || '')).toLowerCase();
    return (result!=='')? result : undefined;
}