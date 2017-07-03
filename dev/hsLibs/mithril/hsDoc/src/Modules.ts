const m = require("mithril");

export interface Module {
    id:         number;
    name:       string;
    content:    any;
}

const dir = './data/';

function loadDocSet(modules:typeof Modules, file:string) {
console.log('requesting ' + dir+file);
    return m.request({ method: "GET", url: dir+file })
        .then((r:any) => {
console.log('received ' + dir+file);
if (file==='hsLayout.json') { console.log(r); }
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
        this.list.index[name] = {};
        recursiveIndex(content, this.list.index[name], name);
    },

    loadList() { 
        return loadIndexSet(this); 
    },

    get(lib?:string, id=0) { 
        if (lib) {
            if (this.list.index[lib]) { 
//if (id===137) { 
console.log(id); console.log(this.list.index[lib][id+'']); 
//} 
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