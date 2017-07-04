import { m, Vnode} from '../../../mithril';
import { Layout } from '../../../hsLayout/src/';
import { Modules } from '../Modules'; 
import { libLink } from './Parts'; 


export class LeftNav extends Layout { 
    view(node: Vnode): Vnode {
        const lib = node.attrs.lib;
        const field = node.attrs.field;
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        const mdl = Modules.get(lib, 0) || {name:'unknown', id:0};
        return this.layout('.hs-left', node, {}, [
            m('.hs-left-nav', m(ModuleNavList, {mdl:mdl, field:field})),  
        ]);
    } 
}

class ModuleNavList {
    view(node: Vnode): Vnode {
        const mdl = node.attrs.mdl;
        const field = node.attrs.field;
        node.attrs.mdl = undefined;
        node.attrs.field = undefined;

        const selected = (field==='0')? '.hs-left-nav-selected' : '';
        if (mdl.kind === 0) { // External Modules
            return m('', [
                libLink(`.hs-library-name ${selected}`, mdl.lib, mdl.id, mdl.name),
                m('', (mdl.children? mdl.children.map((c:any) => m(ExternalModule, {mdl:c, field:field})) : 'no children'))
            ]);
        } else {
            console.log('error: not a head node');
        }
    }
}

class ExternalModule {
    view(node: Vnode): Vnode {
        const mdl = node.attrs.mdl;
        const field = node.attrs.field;
        node.attrs.mdl = undefined;
        node.attrs.field = undefined;
        const selected = (field===''+mdl.id)? '.hs-left-nav-selected' : '';
        return m(`.hs-left-nav-module`, [
            libLink(`.hs-left-nav-module-name ${selected}`, mdl.lib, mdl.id, mdl.name),
            mdl.groups? m('', mdl.groups.map((g:any) => m(ModuleEntries, {group:g, mdl:mdl, field:field}))) : undefined
        ]);
    }
}

class ModuleEntries {
    view(node: Vnode): Vnode {
        let grp = [];
        const group = node.attrs.group;
        const mdl = node.attrs.mdl;
        const field = node.attrs.field;
        node.attrs.mdl = undefined;
        node.attrs.group = undefined;
        node.attrs.field = undefined;
        if (group && group.children) {
            grp = group.children
                .map((c:any) => Modules.get(mdl.lib, c))    // replace id reference by module
                .sort(exportAscending)                      // sort: exported first, then alphabetically
                .map((mod:any) => {                         // replace module by vnode structure
                    const selected = (field===''+mod.id)? '.hs-left-nav-selected' : '';
                    const exported = (mod.flags && mod.flags.isExported);
                    const statik   = (mod.flags && mod.flags.isStatic);
                    const css = `.hs-left-nav-entry ${selected} ${exported?'.hs-left-nav-exported' : ''}`;
                    return (!exported && group.title==='Variables')? '' :   // ignore local module variables
                        m('', [
                            statik? 'static': '',
                            libLink(css, mod.lib, mod.id, mod.name)
                        ]);
                });
            grp.unshift(m('.hs-left-nav-header', group.title));
        }
        return m(`.hs-left-nav-entries`, (grp.length > 1)? grp : '');
    }
}

function exportAscending(a:any, b:any) {
    if (a.flags && b.flags) {
        if (a.flags.isExported && b.flags.isExported) { return a.name > b.name; }
        else if (a.flags.isExported) { return -1; }
        else if (b.flags.isExported) { return 1; }
        else { return a.name > b.name; }
    } else { return a.name > b.name; }
}

