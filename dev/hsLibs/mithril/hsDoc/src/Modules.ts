const m = require("mithril");

export interface Module {
    id:         number;
    name:       string;
    content:    any;
}

const useDefault = false;


function loadDefaultList(modules:typeof Modules) {
    return Promise.resolve().then(() => {
        modules.add(0, 'm1', 'm1 main');
        modules.add(1, 'm2', 'm2 main');
        modules.add(2, 'm3', 'm3 main');
    });
}

function loadExampleList(modules:typeof Modules) {
    return m.request({
            method: "GET",
            url: "./data/docs.json"
        })
        .then(function(result:any) {
            console.log('received docs.json');
            modules.add(result.id, result.name, result);
        })
        .catch(console.log);
}

function recursiveIndex(content:any, index:any) {
    if (typeof content === 'object' && content.name) {
        content.name = content.name.replace(/["'](.+)["']|(.+)/g, "$1$2");  // remove quotes 
        index[content.name] = content;
    }
    if (content.children) {
        content.children.map((c:any) => recursiveIndex(c, index));
    }
}

export const Modules = { 
    list: <any>{set:[], index:{}},


    add(id:number, name:string, content:any) {
        this.list.set.push({id:id, name:name, content:content});
        recursiveIndex(content, this.list.index);
    },

    loadList() { 
        return (useDefault? loadDefaultList(this) : loadExampleList(this)); 
    },

    get(mdl?:string) { 
        const result = mdl? this.list.index[mdl] : this.list.set; 
        return result;
    }
};