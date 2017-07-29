/**
 * LeftNav: Responsible for constructing the left-hand navigation pane. 
 */

/** */
import { m, Vnode} from '../../../mithril';
import { Container } from '../../../hsLayout/src/';
import { DocSets } from '../DocSets'; 
import { libLongLink } from './Parts'; 


/**
 * Constructs the left-hand navigation pane
 */
export class LeftNav extends Container { 
    view(node: Vnode): Vnode {
        const lib = node.attrs.lib;
        const field = node.attrs.field;
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        const mdl = DocSets.get(lib, 0) || {name:'unknown', id:0};
//        const selected = (field==='0' || field===lib)? '.hs-left-nav-selected' : '';
        return this.layout('.hs-left', {}, [
//            libLongLink(`a.hs-library-name ${selected}`, mdl.lib, mdl.fullPath, mdl.name),
            m('.hs-left-nav', navList(mdl, field))
        ]);
    } 
}

/** creates the list if modules (`*.ts` files) */
function navList(mdl:any, field:string):Vnode[] {
    if (mdl.kind === 0) { // External DocSets
        const modules = mdl.children? mdl.children.map((c:any) => externalModule(c, field)) : ['no children'];
        modules.unshift(m('.hs-left-nav-header', 'Modules'));
        return [
            m('.hs-left-nav-content', modules)
        ];
    } else {
        console.log('error: not a head node');
    }
}

/**
 * modules to ignore in the list
 */
const ignoreModules = {
    overview:   true,   // the project overview.ts file
    index:      true    // the index.ts file
};

const expanded: {string?:boolean} = {};

/**
 * processes a module, i.e. a `.ts` file.
 */
function externalModule(mdl:any, field:string) {
    const selected = (field===''+mdl.id || field===mdl.fullPath)? '.hs-left-nav-selected' : '';
    // don't show modules from other projects (isExported flag) or modules on the ignore list
    const skip = (mdl.flags && mdl.flags.isExternal) || ignoreModules[mdl.name];
    return skip? m('') : m(`.hs-left-nav-module`, [
        libLongLink(`a.hs-left-nav-module-name ${selected}`, mdl.lib, mdl.fullPath, mdl.name, () => {
            expanded[mdl.fullPath] = !expanded[mdl.fullPath];
            m.redraw();            
        }),
        mdl.groups? m('.hs-left-nav-module-content', { class: expanded[mdl.fullPath]?'':'hs-collapsed'}, mdl.groups.map((g:any) => entries(g, mdl, field))) : undefined
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
        return DocSets.get(mdl.lib, c);
    }
    /**
     * processes one entry within a group, e.g. one variable, function, or class.
     */
    function entry(mod:any) { 
        const selected = (field===''+mod.id || field===mod.fullPath)? '.hs-left-nav-selected' : '';
        const exported = (mod.flags && mod.flags.isExported);
        const statik   = (mod.flags && mod.flags.isStatic);
        const css = `a.hs-left-nav-entry ${selected} ${exported?'.hs-left-nav-exported' : ''}`;
        return (!exported && group.title==='Variables')? '' :   // ignore local module variables
            m('', [
                statik? 'static': '',
                libLongLink(css, mod.lib, mod.fullPath, mod.name)
            ]);
    }

    function empty(mod:any) { return mod !== ''; }

    let grp = [];
    if (group && group.children) {
        grp = group.children
            .map(moduleGet)         // replace id reference by module
            .sort(exportAscending)  // sort: exported first, then alphabetically
            .map(entry)             // replace module by vnode structure
            .filter(empty);         // filter empty elements
        if (grp.length > 0) { // add an entries header if there are elements
            grp.unshift(m('.hs-left-nav-header', group.title));
        }
    }
    return (grp.length > 1)? m(`.hs-left-nav-entries`, grp) : '';
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

