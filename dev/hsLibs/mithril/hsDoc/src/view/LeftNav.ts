const m = require("mithril");

import { Layout } from '../../../hsLayout/src/';
import { Modules } from '../Modules'; 


export class LeftNav extends Layout { 
    view(node: typeof m.Vnode): typeof m.Vnode {
        const lib = node.attrs.lib;
        const field = node.attrs.field;
        node.attrs.lib = undefined;
        node.attrs.field = undefined;
        const mdl = Modules.get(lib, 0) || {name:'unknown', id:0};
        return this.layout('.hs-left', node, {}, [m('.hs-left-nav', [
            m(ModuleNavList, {mdl:mdl, field:field}),  
//            m(ModuleNavIndentList, {mdl:mdl, field:field})
        ])]);
    } 
}

class ModuleNavList {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        const field = node.attrs.field;
        node.attrs.mdl = undefined;
        node.attrs.field = undefined;

        const selected = (field==='0')? '.hs-left-nav-selected' : '';
        if (mdl.kind === 0) { // External Modules
            return m('', [
                m(`.hs-library-name ${selected}`, {href:`/api/${mdl.lib}/${mdl.id}`, oncreate: m.route.link, onupdate: m.route.link}, mdl.name),
                m('', (mdl.children? mdl.children.map((c:any) => m(ExternalModule, {mdl:c, field:field})) : 'no children'))
            ]);
        } else {
            console.log('error: not a head node');
        }
    }
}

class ExternalModule {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        const field = node.attrs.field;
        node.attrs.mdl = undefined;
        node.attrs.field = undefined;
        const selected = (field===''+mdl.id)? '.hs-left-nav-selected' : '';
        return m(`.hs-left-nav-module`, [
            m(`.hs-left-nav-module-name ${selected}`, {href:`/api/${mdl.lib}/${mdl.id}`, oncreate: m.route.link, onupdate: m.route.link}, m('', mdl.name)),
            mdl.groups? m('', mdl.groups.map((g:any) => m(ModuleEntries, {group:g, mdl:mdl, field:field}))) : undefined
        ]);
    }
}

class ModuleEntries {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const group = node.attrs.group;
        const mdl = node.attrs.mdl;
        const field = node.attrs.field;
        node.attrs.mdl = undefined;
        node.attrs.group = undefined;
        node.attrs.field = undefined;
        if (group && group.children) {
            let grp = group.children.map((c:any) => Modules.get(mdl.lib, c))
                        .sort(exportAscending)
                        .map((mod:any) => {
                            const selected = (field===''+mod.id)? '.hs-left-nav-selected' : '';
                            const exported = (mod.flags && mod.flags.isExported);
                            return m(`.hs-left-nav-entry ${selected} ${exported?'.hs-left-nav-exported' : ''}`, 
                                {href:`/api/${mod.lib}/${mod.id}`, oncreate: m.route.link, onupdate: m.route.link}, 
                                mod.name);
                        });
            grp.unshift(m('.hs-left-nav-header', group.title));
            return m(`.hs-left-nav-entries`, grp);
        } else {
            return m('', '');
        }
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


//-----------------
class ModuleNavIndentList {
    view(node: typeof m.Vnode): typeof m.Vnode {
        const mdl = node.attrs.mdl;
        node.attrs.mdl = undefined;

        const mNode = m(`.hs-member`, {href:`/api/${mdl.lib}/${mdl.id}`, oncreate: m.route.link, onupdate: m.route.link}, mdl.name);
        return m(`.hs-module-list`, {}, [mNode, mdl.children?
            m('.hs-indent', mdl.children.map((c:any) => 
                m(ModuleNavIndentList, {mdl:c, lib:mdl.lib}))) 
            : undefined
        ]);
    }
}

