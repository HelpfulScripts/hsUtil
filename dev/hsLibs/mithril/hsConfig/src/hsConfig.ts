/**
 * ##HsConfing 
 */

/** */
import { m, Vnode } from '../../mithril'; 

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
    if (typeof config === 'string') { return config; }
    const keys = Object.keys(config);
    keys.map((k:string):Vnode => {
        let cl:any;
        context.some((c:any) => {
            try { cl = eval('c.'+k);  return cl; }
            catch(e) { return false; }
        });
        const content = recurse(config[k], context); 
        if (cl) { config = m(cl, content); }
        else { config[k] = content; }
    }); 
    return config; 
}


export class HsConfig {
    content: Vnode[] = []; 
    file:string;
    context:any[];
    mountPoint:any;

    constructor(context:any[], mountPoint=document.body) {
        this.context = context;
        this.mountPoint = mountPoint;
    }

    run(config:any) {
        if (this.content.length ===0)  { 
            if (typeof config === 'string') { this.load(config)           
                .then((r:any) => this.content.push(recurse(r, this.context)));
            }
            else { this.content.push(recurse(config, this.context)); }
        }
        m.mount(this.mountPoint, {view: () => m('.hs-config', this.content.map((x:Vnode) => x))});
    }

    load(file:string) {
        console.log('requesting ' + file);
        return m.request({ method: "GET", url: file })
            .catch((e:any) => {
                console.log('error:');
                console.log(e);
            });
    }
}
