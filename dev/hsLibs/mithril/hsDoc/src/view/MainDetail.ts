import { m, Vnode}      from '../../../mithril';
import { Container }    from '../../../hsLayout/src/';
import { DocSets }      from '../DocSets'; 
import { comment, commentLong }  from './MainComment';
import { flags, sourceLink, signature, type, extensionOf, kindString, itemName, makeID } 
                        from './Parts'; 


/**
 * Creates Documentation on the main panel 
 */
export class MainDetail extends Container { 
    view(node:Vnode): Vnode {
        const lib = node.attrs.lib || '';
        let mdl = node.attrs.field;
        node.attrs.lib = undefined;
        node.attrs.field = undefined;

        let result = getOverview(lib, mdl) || itemDoc(DocSets.get(lib, mdl) || ''); 
        return this.layout('.hs-main-detail', node, {}, [result]); 
    }
}

/**
 * Checks if the project overview is being requested and returns the overview, 
 * or `undefined` if not available
 * @param mdl the module name to check
 * @return Vnode containing the overview file, or `undefined`
 */
function getOverview(lib:string, mdl:string):Vnode {
    if (mdl === '0' || mdl === '') {  //show module overview
        mdl = DocSets.get(lib, `${lib}.overview`);
        if (mdl) { // if project has an overview:
            return overviewDoc(mdl); 
        }
    }
    return undefined;
}

/**
 * Creates documentation for standard items in the main panel
 * @param mdl the module to document on the main panel
 */
function itemDoc(mdl:any) {
    const sig = mdl.signatures? mdl.signatures[0] : mdl;
    return m('.hs-item-doc', [
        title(mdl, sig),
        commentLong(sig),
        members(sig, sig)
    ]);
}

/**
 * Creates documentation for the project overview in the main panel
 * @param mdl the module to document on the main panel
 */
function overviewDoc(mdl:any) {
    const sig = mdl.signatures? mdl.signatures[0] : mdl;
    return m('.hs-item-doc', [
        commentLong(sig),
    ]);
}

/**
 * renders the title of the main panel
 * @param mdl the module to document 
 * @param sig a signature of the module, or the the module itself
 */
function title(mdl:any, sig:any): Vnode { 
    return m('.hs-item-title', {id: makeID('title', mdl)}, itemDescriptor(mdl, sig)); 
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
    let content = g.map((c:any) => m('.hs-item-parameter', {id:makeID('parameter', c)}, itemChild(c)));
    content.unshift(m('.hs-item-member-title', {id:'parameters'}, m('span', 'Parameters')));
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
    let content = group.children.map((c:number) => {
            let mdl = DocSets.get(lib, c);
            return m(fn, {id:makeID(group.title, mdl)}, itemChild(mdl));
        }
    );

    content.unshift(m('.hs-item-member-title', {id:group.title.toLowerCase()}, m('span', group.title)));
    return m('.hs-item-member', content);
}

function itemDescriptor(mdl:any, sig:any):Vnode {
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


