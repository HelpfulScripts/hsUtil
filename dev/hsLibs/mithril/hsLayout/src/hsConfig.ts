/**
 * ##HsConfig 
 * Tool to configure a layout via a configuration object that is either defined
 * as an object literal or as a JSON file.
 * 
 * The structure of the configuration object follows the convention
 <code>
 {
     <Class>: <Configuration>
     [,route: {
        default: '/api',
        paths: [
            '/api',             
            '/api/:lib',       
            '/api/:lib/:field' 
        ]
    }]
 }
 </code>
`<Class>` is either {@link hsLayout:Layout.Layout Layout} or a subclass thereof.
`<Configuration>` is an object literal `{ <Attr>:<Value>[, ...] }`

Arrays and Object Literals in `<Configuration>` define a layout tree that will be traversed,
After which the tree will be instantiated by calling `m(<Class>, <Configuration>)`.
Mithril will then recursively create the Classes in the tree and call their `view` methods,
where `Configuration`settings will be available via the `node.attrs` parameter.

The default `Layout` implementation recognizes the following special `<Attr>` keys:

* - `content`: the subcomponents to render in `Layout`, allowing for following `<Value>` types:
*     - `[{<Class>: <Configuration>}, ...]`
*     - `['string literal', ...]`
*     - `'string literal'`
* - `css`: the CSS class to set on `Layout`
* - `href`: a href attribute to set on `Layout`. This makes `Layout` clickable and sends the 
     respective attribute value to the Mithril router.
* - `onclick`: a function to call when `Layout` is clicked.
*/

/** */
import { m, Vnode } from './mithril'; 
import * as layout from './';

/**
 * creates a deep copy of the struct passed in.
 * @param struct the object to copy
 */
function copy(struct:any): any {
    let result:any;
    if (Array.isArray(struct)) { result = []; }
    else if (typeof struct === 'object') { result = {}; }
    else { return struct; }
    Object.keys(struct).map((k:string) => result[k] = copy(struct[k]));
    return result;
}


/**
 * resolves the symbol `sym` against the provided `context`.
 * If successful, returns the class definition for `sym`. 
 * @param sym the symbol to resolve
 * @param context the context to resolve against; `mithril` and `hsLayout` 
 * are implicitely part of the context and need not be specified.
 * @return the resolved Class, or `undefined`.
 */
function resolve(sym:string, context:any[]) {
    let cl:any;
    context.concat(layout).some((c:any) =>  cl = c[sym]);
    return cl;
}

/**
 * recurses a configuration, trying to fetch the class definition for each element (key) in `config`. 
 * If successful, it creates an object literal containing the component class and its attributes.
 * If unsuccessful, the element's value is returned unaltered so that it can be consumed 
 * by an instance further up in the recursion tree.
 * @param config an object literal containing a configuration subtree
 * @param context an array of objects against which to instantiate elements of `config`.
 * @return an object literal representing the configuration, with Class names resolved 
 * against the provided `context`.
 */
function recurse(config:any, context:any[]) {
    if (['string', 'number', 'boolean', 'function'].indexOf(typeof config)>=0) { return config; }
    const keys = Object.keys(config);
    let result = config.length? [] : {};
    keys.map((k:string):Vnode => {
        const content = recurse(config[k], context); 
        const cl:any = resolve(k, context);
        if (cl) { 
            const r = {
                compClass:cl,   // Component class
                attrs:content   // attributes passed to the Component class
            };
            (!Array.isArray(config) && keys.length === 1)? 
                result = r : 
                result[k] = r;   
        }
        else { result[k] = content; }
    }); 
    return result; 
}


/**
 * Interprets a configuration and either mounts it or routs it in `mithril`. 
 * Example: 
<code>
import * as mylib from './mylib';

const myConfig = { 
    Layout: {
        rows:  ['50px', 'fill'],
        css: '.hs-site',
        content: [{MyClass: {}}, 'bottom row']
    },
    route: {
        default: '/api',
        paths: [
            '/api',             // defines `http://localhost/#!/api/
            '/api/:lib',        // defines `http://localhost/#!/api/foo
            '/api/:lib/:field'  // defines `http://localhost/#!/api/foo/bar        
        ]
    }
}

const myExample = {
    MyClass: class extends Layout {
        view(node:Vnode) { return m('', 'myExample'); }
    }
}

new HsConfig([mylib, myExample]).attachNodeTree(myConfig, document.body)
</code>
 */
export class HsConfig {
    /**
     * Constructs an HsConfig object on a `context`. Any class names encountered
     * in the configuration tree when calling `attachNodeTree` will be resolved
     * against this context. The `mithril`and `hsLayout` namespaces are automatically 
     * added to the context.
     * @param context Array of namespaces againt which classes will be resolved.  
     */
    constructor(protected context:any[]) {}

    /**
     * Interprets a configuration object and attaches it to a DOM element
     * @param config an object literal, or name of a JSON file, containing a configration tree
     * @param root a DOM element to which to attach the tree
     */
    attachNodeTree(config:any, root:any) {
        /**
         * decodes the parts of a `route` declaration in the `config` tree
         * that will be passed to the `mithril` `m.route()` command.
         * 
         * `route` defines a `default` path, as well as an array `paths` of 
         * path templates containing variables of the form `:varName`.
         * 
         * All `paths`resolve to the same root element defined in the config tree.
         * @param route an object literal structured as 
         * <pre><code>
         * {
         *     default: '...'   // the default path
         *     paths: [
         *         '<path>/:var1[/:var2...]'  // path template, 
         *         ...
         *     ]
         * }
         * </code></pre>
         */
        function decodeRoute(route:any) {
            const rp:string[] = route.params = [];
            route.paths.map((p0:string) => {
                const params = p0.match(/:(.+?)\b/g);
                if (params) { 
                    params.map((p1:string) => p1.substr(1))
                            .map((p2:any) => rp.indexOf(p2)<0? rp.push(p2):''); 
                }
            });
            return route;
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
            if (config.compClass && !result.root) {   // only capture the first one
                result.root = config; 
            } else {
                Object.keys(config).map((k:any) => {
                    if (config[k].compClass && !result.root) {   // only capture the first one
                        result.root = config[k]; 
                    } else if (k==='route') { 
                        result.route = decodeRoute(config.route);
                    } else {
                        result[k] = config[k];
                    }
                });
            }
            return result;
        }

        function prepareRoutes(content:any) {
            const cr = content.root;
            class Router {
                view(node:Vnode) { 
                    cr.attrs.route = {};
                    content.route.params.map((k:any) =>
                        cr.attrs.route[k] = node.attrs[k]
                    );
                    return m(cr.compClass, copy(cr.attrs));  
                }
            }
            content.route.routes = {};
            content.route.paths.map((path:string) => content.route.routes[path] = Router);
        }

        function mountOrRoute(c:any) {
            const content = decode(c);
            const cr = content.root;
            if (!cr) { 
                console.log('*** no top level component defined in config:'); 
                console.log(config); 
            }
            if (content.route) {
                prepareRoutes(content);
                m.route(root, content.route.default, content.route.routes);
                console.log('starting router');
            } else {
                m.mount(root, {view: (node:Vnode)=> m(cr.compClass, copy(cr.attrs))});
                console.log('mounting component');
            }
        }

        const context = this.context;
        this.getContent(config)           
            .then((r:any) => recurse(r, context))
            .then(mountOrRoute);
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
