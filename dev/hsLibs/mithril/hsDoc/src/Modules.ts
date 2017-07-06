/**
 * Modules.ts. Loads the doc.json files to process and display as documentation.
 * Processing occurs in these steps:
 * 1. Load the index.json file that contains a list of doc.json files to load, one for each library to show
 * 2. Load each doc.json file, which describes a library
 * 3. Call Modules.add to add the library name to the registry and create an index of entries for the library
 */

/** */
import { m } from '../../mithril';

/**
 * the directory to look for .json files, relative to the web page.
 */
const DIR:string = './data/';



/**
 * Modules object. Keeps a list of registered docsets and 
 * provides access to elements of each docset.
 */
export class Modules { 
    /** Contains references to the docsets and all elements per docset, accessible per ID. */
    private static list = <{set:string[], index:{}}>{set:[], index:{}};

    /** Adds the docset in `content` to the `list` */
    public static add(content:any) {
        const lib = content.name;
        Modules.list.set.push(lib);
        Modules.list.set.sort();
        Modules.list.index[lib] = {};
        recursiveIndex(content, Modules.list.index[lib], lib);
console.log(Modules.list);        
    }

    /**
     * loads an index set and the docsets it contains from driectory `dir`.
     * @param dir the optional directory to read from. If unspecified, 
     * read from the directory specified by `DIR`.
     */
    public static loadList(dir?:string):Promise<void> {
        dir = dir || DIR;   
        return loadIndexSet(DIR, 'index.json'); 
    }

    public static get(lib?:string, id=0) { 
        if (lib) {
            if (Modules.list.index[lib]) { 
                return Modules.list.index[lib][id+'']; 
            } else {
                console.log(`list ${lib} not loaded yet ${id}`);
                return Modules.list.set; 
            }
        } else {
//            console.log('redirected to /');
            return Modules.list.set; 
        }
    }
};

/**
 * Loads ìndex.json` from the directory specified in `dir`.
 * Each entry in the index is interpreted as a docset and loaded.
 * @param dir the directory to read from
 * @param file the index file to read
 */
function loadIndexSet(dir:string, file:string):Promise<void> { 
    return m.request({ method: "GET", url: dir+file })
        .then((result:any) =>  {
            console.log('received index');
            return Promise.all(result.docs.map((f:string) => loadDocSet(dir, f)));            
        })
        .catch(console.log);
}

/**
 * Loads a docset specified by file from the directory `dir`. 
 * Once received, the docset is registered in `modules` via the `add` method.
 * @param dir the directory to read from
 * @param file the `json` file to load as docset
 */
function loadDocSet(dir:string, file:string):Promise<void> {
    return m.request({ method: "GET", url: dir+file })
        .then((r:any) => {
            console.log('received ' + dir+file);
            Modules.add(r);
        })
        .catch(console.log);
}

/**
 * recurses through the docset and registers all `children` entries of an entry by id,
 * starting with the root entry.
 * @param content the docset object literal to traverse
 * @param index the index in which to register the entries
 * @param lib the docset name, used for name validation
 */
function recursiveIndex(content:any, index:any, lib:string, path='') {
    content.lib = lib;
    if (typeof content === 'object' && content.name) {
        content.name = content.name.replace(/["'](.+)["']|(.+)/g, "$1$2");  // remove quotes 
        const elName  = content.name.match(/([^\/]+)$/)[1];             // name = part after last /
        const libName = content.name.match(/^([^\/]+)/)[1];             // name = part before first /
        let newPath = (path==='')? elName : `${path}.${elName}`;
        content.fullPath = newPath;
        content.name = elName;
        index[content.id+''] = content;
        if (newPath.length>0) { index[newPath] = content; }
        if (content.children) {
            content.children.map((c:any) => recursiveIndex(c, index, lib, newPath));
        }
    }
}
/**
 * Validates the `name` of `External module`s. If the `name` starts with the `lib` name
 * then truncate the name by removing '`lib`/src/' from the left side of the name.
 * @param content the docset to evaluate
 * @param lib the library name
 */
/*
function validExternalModuleName(content:any, lib:string):boolean {
    let result = false;
    if (content.kindString !== 'External module') { return true; }
    else if (content.name.indexOf('/')>0 && content.name.indexOf(lib+'/src/')===0) {
        let j = (lib+'/src/').length;
        content.name = content.name.substring(j);
        result = true;
    }
    return result;
}
*/

