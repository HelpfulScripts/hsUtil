/**
 * ##HsConfing 
 */

/** */
import { m, Vnode } from '../../mithril'; 

function resolve(sym:string, context:any[]) {
    let cl:any;
    context.some((c:any) => {
        try { cl = eval('c.'+sym);  return cl; }
        catch(e) { return false; }
    });
    return cl;
}

/**
 * recurses a configuration, trying to instantiate each element (key) in `config`. 
 * If successful, it calls the instance's `config` method with the result of 
 * recursing on the element's value.
 * If unsuccessful, the element's value is returned unaltered so that it can be consumed 
 * by an instance further up in the recursion tree.
 * Hence, instantiable objects used in a config tree must implement a static method
 * with the signature `public static config(params:any):Vnode`
 * @param config an object literal containing a configuration subtree
 * @param context an array of objects against which to instantiate elements of `config`.
 */
function recurse(config:any, context:any[]) {
    if (['string', 'number', 'boolean', 'function'].indexOf(typeof config)>=0) { return config; }
    const keys = Object.keys(config);
    let result = config.length? [] : {};
    keys.map((k:string):Vnode => {
        const content = recurse(config[k], context); 
        const cl:any = resolve(k, context);
        if (cl) { 
            Object.keys(config).length === 1? 
                result = {container:cl, children:content} :     // m(cl, content) : 
                result[k] = {container:cl, children:content};   // m(cl, content); 
        }
        else { result[k] = content; }
    }); 
    return result; 
}


export class HsConfig {
    constructor(protected context:any[]) {}

    attachNodeTree(config:any, root:any) {
        const context = this.context;

        function decodeRoute(config:any) {
            const rp:string[] = config.params = [];
            config.paths.map((p0:string) => {
                const params = p0.match(/:(.+?)\b/g);
                if (params) { 
                    params.map((p1:string) => p1.substr(1))
                            .map((p2:any) => rp.indexOf(p2)<0? rp.push(p2):''); 
                }
            });
            return config;
        }
        /**
         * Handles top-level interpretations of a config tree and returns 
         * a normalized object with the following rules:
         * - a `route` entry, if present, will have a resolved class constructors for each string class designator
         * - a `root` entry is the first encountered top-level Vnode in `config`
         * - all other top-level entries in `config` wikll be copied to returned object
         */
        function decode(config:any) {
            let result:any = { };
            Object.keys(config).map((k:any) => {
                if (k==='route') { 
                    result.route = decodeRoute(config[k]);
                } else if (config[k].container) {  //(config[k].tag) { 
                    result.root = result.root? result.root : config[k];   // only capture the first one
                } else {
                    result[k] = config[k];
                }
            });
            return result;
        }

        this.getContent(config)           
            .then((r:any) => recurse(r, context))
            .then((c:any) => {
                const content = decode(c);
                if (!content.root) { 
                    console.log('*** no top level component defined in config:'); 
                    console.log(config); 
                }
                if (content.route) {
                    class Router {
                        view(node:Vnode) { 
                            content.root.children.route = {};
                            content.route.params.map((k:any) =>
                                content.root.children.route[k] = node.attrs[k]
                            );
                            return m(content.root.container, content.root.children); // content.root; 
                        }
                    }
                    content.route.routes = {};
                    content.route.paths.map((path:string) => content.route.routes[path] = Router);
                    m.route(root, content.route.default, content.route.routes);
                    console.log('starting router');
                } else {
                    m.mount(root, m(content.root.container, content.root.children));
                    console.log('mounting component');
                }
            });
    }

    private getContent(config:any) {
        return (typeof config === 'string')? this.load(config) : Promise.resolve(config);
    }

    private load(file:string) {
        console.log('requesting ' + file);
        return m.request({ method: "GET", url: file })
            .catch((e:any) => {
                console.log('error:');
                console.log(e);
            });
    }
}
