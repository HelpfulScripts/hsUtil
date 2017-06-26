const m = require("mithril");

export interface Module {
    id:         number;
    name:       string;
    content:    any;
}

const useDefault = false;
const dir = './data/';


function loadDefaultList(modules:typeof Modules) {
    return Promise.resolve().then(() => {
        modules.add(0, 'm1', 'm1 main');
        modules.add(1, 'm2', 'm2 main');
        modules.add(2, 'm3', 'm3 main');
    });
}

function loadDocSet(modules:typeof Modules, file:string) {
    return m.request({ method: "GET", url: dir+file })
        .then((r:any) => {
console.log('received ' + file);
            modules.add(r.id, r.name, r);
        });
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
console.log('add');        
        this.list.set.push(name);
        this.list.index[name] = {};
        recursiveIndex(content, this.list.index[name], name);
console.log(this.list);        
    },

    loadList() { 
        return (useDefault? loadDefaultList(this) : loadIndexSet(this)); 
    },

    get(lib?:string, id=0) { 
        const result = lib? this.list.index[lib][id+''] : this.list.set; 
        return result;
    }
};