import { m } from '../../mithril';

/**
 * Modules.ts. Loads the doc.json files to process and display as documentation.
 * Processing occurs in these steps:
 * 1. Load the index.json file that contains a list of doc.json files to load, one for each library to show
 * 2. Load each doc.json file, which describes a library
 * 3. Call Modules.add to add the library name to the registry and create an index of entries for the library
 */

/*
interface Module {
    id:         number;
    name:       string;
    content:    any;
}
*/

/**
 * the directory to look for .json files, relative to the web page.
 */
const dir = './data/';

function loadDocSet(modules:typeof Modules, file:string) {
console.log('requesting ' + dir+file);
    return m.request({ method: "GET", url: dir+file })
        .then((r:any) => {
            console.log('received ' + dir+file);
            modules.add(r.id, r.name, r);
        })
        .catch(console.log);
}

function loadIndexSet(modules:typeof Modules) {
    return m.request({ method: "GET", url: dir+"index.json" })
        .then((result:any) =>  {
            console.log('received index');
            return Promise.all(result.docs.map((file:string) => loadDocSet(modules, file)));            
        })
        .catch(console.log);
}

function recursiveIndex(content:any, index:any, lib:string) {
    content.lib = lib;
    if (typeof content === 'object' && content.name) {
        content.name = content.name.replace(/["'](.+)["']|(.+)/g, "$1$2");  // remove quotes 
        index[content.id+''] = content;
    }
    if (content.children) {
        content.children.map((c:any) => recursiveIndex(c, index, lib));
    }
}

export const Modules = { 
    list: <any>{set:[], index:{}},


    add(id:number, name:string, content:any) {
        this.list.set.push(name);
        this.list.set.sort();
        this.list.index[name] = {};
        recursiveIndex(content, this.list.index[name], name);
    },

    loadList() {
        return loadIndexSet(this); 
    },

    get(lib?:string, id=0) { 
        if (lib) {
            if (this.list.index[lib]) { 
if(id+''==='1') { console.log(this.list.index[lib][id+'']); }
                return this.list.index[lib][id+'']; 
            } else {
                console.log(`list ${lib} not loaded yet`);
                return this.list.set; 
            }
        } else {
            console.log('redirected to /');
            return this.list.set; 
        }
    }
};