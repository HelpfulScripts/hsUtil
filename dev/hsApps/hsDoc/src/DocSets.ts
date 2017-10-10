/**
 * DocSets.ts. Loads the doc.json files to process and display as documentation.
 * Processing occurs in these steps:
 * 1. Load the index.json file that contains a list of doc.json files to load, one for each library to show
 * 2. Load each doc.json file, which describes a library
 * 3. Call DocSets.add to add the library name to the registry and create an index of entries for the library
 */

/** */
import { m }    from 'hslayout';

/**
 * the default location for the index .json files, relative to the web page:
 * `'./data/index.json'`
 */
const FILE:string = './data/index.json';


/**
 * DocSets object. Keeps a list of registered docsets and 
 * provides access to elements of each docset.
 */
export class DocSets { 
    /** Contains references to the docsets and all elements per docset, accessible per ID. */
    private static gList = <{set:string[], index:{}}>{set:[], index:{}};
    private static gTitle: string;

    /** Adds the docset in `content` to the `gList` */
    public static add(content:any) {
        const lib = content.name;
        DocSets.gList.set.push(lib);
        DocSets.gList.set.sort();
        DocSets.gList.index[lib] = {};
        recursiveIndex(content, DocSets.gList.index[lib], lib);
    }

    /**
     * loads an index set and the docsets it contains from driectory `dir`.
     * @param file the optional directory to read from. If unspecified, 
     * read from the index file specified by {@link DocSets.FILE `FILE`}.
     */
    public static loadList(file?:string):Promise<void> {
        file = file || FILE;   
        console.log('requesting docSet ' + file);
        return DocSets.loadIndexSet(file); 
    }

    /**
     * returns the specified documentation element.
     * When called without parameters, a string[] of available docSets is returned.
     * When called with only `lib` specified, the corresponding docSet overview is returned.
     * @param lib specifies the docset to scan. 
     * @param id specifies the element within the docSet, either by its id number, or by its path
     */
    public static get(lib?:string, id:number|string=0) { 
        if (lib) {
            if (DocSets.gList.index[lib]) { 
                return DocSets.gList.index[lib][id+'']; 
            } else {
                return DocSets.gList.set; 
            }
        } else {
            return DocSets.gList.set; 
        }
    }

    /**
     * Loads `index.json` from the directory specified in `dir`.
     * Each entry in the index is interpreted as a docset and loaded.
     * @param dir the directory to read from
     * @param file the index file to read
     */
    private static loadIndexSet(file:string):Promise<void> { 
        return m.request({ method: "GET", url: file })
            .then((result:any) =>  {
                console.log('received index');
                DocSets.gTitle = result.title;
                let i = file.lastIndexOf('/');
                const dir = file.substring(0,i+1);
                return Promise.all(result.docs.map((f:string) => loadDocSet(dir, f)));            
            })
            .catch(console.log);
    }


    public static title() { return DocSets.gTitle; }
};

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
            DocSets.add(r);
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
        const elName  = content.name.match(/([^\/]+)$/)[1];                 // name = part after last /
        let newPath = (path==='')? elName : `${path}.${elName}`;
        content.fullPath = newPath;
        content.name = elName;
        index[content.id+''] = content;
        if (newPath.length>0) { index[newPath] = content; }
        if (content.children) {
            content.children.map((c:any) => recursiveIndex(c, index, lib, newPath));
        }
        if (content.signatures) {
            content.signatures.map((c:any) => recursiveIndex(c, index, lib, newPath));
        }
        if (content.parameters) {
            content.parameters.map((c:any) => recursiveIndex(c, index, lib, newPath));
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

