/**
 * LeftNav: Responsible for constructing the left-hand navigation pane. 
 */

/** */
import { m, Vnode} from '../../../mithril';
import { Layout } from '../../../hsLayout/src/';
import { Modules } from '../Modules'; 
import { libLink } from './Parts'; 


/**
 * Constructs the left-hand navigation pane
 */
export class LeftNav extends Layout { 
    view(node: Vnode): Vnode {
        const lib = node.attrs.lib;
        const field = node.attrs.field;
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        const mdl = Modules.get(lib, 0) || {name:'unknown', id:0};
        return this.layout('.hs-left', node, {}, [
            m('.hs-left-nav', navList(mdl, field))
        ]);
    } 
}

function navList(mdl:any, field:string) {
    const selected = (field==='0')? '.hs-left-nav-selected' : '';
    if (mdl.kind === 0) { // External Modules
        return m('', [
            libLink(`.hs-library-name ${selected}`, mdl.lib, mdl.id, mdl.name),
            m('', (mdl.children? mdl.children.map((c:any) => externalModule(c, field)) : 'no children'))
        ]);
    } else {
        console.log('error: not a head node');
    }
}

/**
 * processes a module, i.e. a `.ts` file.
 */
function externalModule(mdl:any, field:string) {
    const selected = (field===''+mdl.id)? '.hs-left-nav-selected' : '';
    return m(`.hs-left-nav-module`, [
        libLink(`.hs-left-nav-module-name ${selected}`, mdl.lib, mdl.id, mdl.name),
        mdl.groups? m('', mdl.groups.map((g:any) => entries(g, mdl, field))) : undefined
    ]);
}

/**
 * processes a group of entries, e.g. Variables, Functions, or Classes.
 * @param group the group structure within the docset
 * @param mdl the entire module docset
 * @param field the field ID to be displayed on the main panel
 */
function entries(group:any, mdl:any, field:string) {
    function moduleGet(c:any) {
        return Modules.get(mdl.lib, c);
    }
    /**
     * processes one entry within a group, e.g. one variable, function, or class.
     */
    function entry(mod:any) { 
        const selected = (field===''+mod.id)? '.hs-left-nav-selected' : '';
        const exported = (mod.flags && mod.flags.isExported);
        const statik   = (mod.flags && mod.flags.isStatic);
        const css = `.hs-left-nav-entry ${selected} ${exported?'.hs-left-nav-exported' : ''}`;
        return (!exported && group.title==='Variables')? '' :   // ignore local module variables
            m('', [
                statik? 'static': '',
                libLink(css, mod.lib, mod.id, mod.name)
            ]);
    }

    let grp = [];
    if (group && group.children) {
        grp = group.children
            .map((moduleGet)        // replace id reference by module
            .sort(exportAscending)  // sort: exported first, then alphabetically
            .map(entry);            // replace module by vnode structure
        if (grp.length > 0) { // add an entries header if there are elements
            grp.unshift(m('.hs-left-nav-header', group.title));
        }
    }
    return m(`.hs-left-nav-entries`, (grp.length > 1)? grp : '');
}

/**
 * processes one entry within a group, e.g. one variable, function, or class.
 */
function entry(mod:any, field:string, title:string) { 
    const selected = (field===''+mod.id)? '.hs-left-nav-selected' : '';
    const exported = (mod.flags && mod.flags.isExported);
    const statik   = (mod.flags && mod.flags.isStatic);
    const css = `.hs-left-nav-entry ${selected} ${exported?'.hs-left-nav-exported' : ''}`;
    return (!exported && title==='Variables')? '' :   // ignore local module variables
        m('', [
            statik? 'static': '',
            libLink(css, mod.lib, mod.id, mod.name)
        ]);
}

/**
 * sorting function: sort first by exported status, then alphabetically.
 */
function exportAscending(a:any, b:any) {
    if (a.flags && b.flags) {
        if (a.flags.isExported && b.flags.isExported) { return a.name > b.name; }
        else if (a.flags.isExported) { return -1; }
        else if (b.flags.isExported) { return 1; }
        else { return a.name > b.name; }
    } else { return a.name > b.name; }
}

