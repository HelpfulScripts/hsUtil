/**
 * ##HsConfing 
 */

/** */
import { m, Vnode } from '../../mithril'; 
import { ConfigContainer as cfg } from '../../hsLayout/src/';

const ConfigContainer = cfg;
if (ConfigContainer) {}


function recurse(config:any) {
    if (typeof config === 'string') { return m('.h8', config); }
    const keys = Object.keys(config);
    const nodes =  keys.map((k:string) => {
        let cl;
        try { cl = eval(k); }
        catch(e) {}
        if (cl) {
            const content = config[k].content.map((e:any) => recurse(e));
            const params = cl.configFilter(config[k]);
            return m(cl, {layout: params, content: content}); 
        } else { 
            return m('.h7', k); 
        }
    });
    return nodes.length===1? nodes[0] : nodes;
}


export class HsConfig {
    content: any = [];

    constructor(config:any, mountPoint=document.body) {
        const file = (typeof config === 'string')? config : undefined;
        m.mount(mountPoint, {view: () => m(HsConfigLoader, { file:file, config:config })});
    }
}

class HsConfigLoader {
    content: any = [];

    view(node:Vnode) { 
        if (this.content.length ===0)  { 
            const file = node.attrs.file;
            const config = node.attrs.config;
            if (file) { this.load(file); }
            else { this.content.push(recurse(config)); }
        }
        return m('.hs-config', this.content.map((x:any) => x)); 
    } 

    load(file:string) {
        console.log('requesting ' + file);
        return m.request({ method: "GET", url: file })
            .then((r:any) => {
                console.log('received ' + file);
                this.content.push(recurse(r));
            })
            .catch((e:any) => {
                console.log('error:');
                console.log(e);
            });
    }
}


export function runConfig(config:any) {
}
