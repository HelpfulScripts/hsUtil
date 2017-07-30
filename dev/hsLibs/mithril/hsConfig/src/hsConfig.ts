/**
 * ##HsConfing 
 */

/** */
import { m, Vnode } from '../../mithril'; 
import { px, pc, FILL, Container} from '../../hsLayout/src/';


function recurse(config:any) {
    if (typeof config === 'string') { return m('.h8', config); }
    const keys = Object.keys(config);
    const nodes =  keys.map((k:string) => {
        if (k==='HsContainer') { 
            const cl = eval(k);
            if (cl) { 
                const content = config[k].content.map((e:any) => recurse(e));
                const params = HsContainer.configFilter(config[k]);
                console.log('calling ' + k);
                return m(cl, {layout: params, content: content}); 
            }
            else { return m('.h7', 'unknown class ' + k); }
        } else {
            return m('.h6', k);
        }
    });
    return nodes.length===1? nodes[0] : nodes;
}


export class HsConfig {
    content: any = [];

    constructor() {
    }
    view(node:Vnode) { 
        console.log('HsConfig view');
        const file = node.attrs.file;
        if (this.content.length ===0)  { this.load(file); }
        console.log(this.content);
        return m('.hs-config', this.content.map((x:any) => x)); 
    } 

    load(file:string) {
        console.log('requesting ' + file);
        return m.request({ method: "GET", url: file })
            .then((r:any) => {
                console.log('received ' + file);
                this.content.push(recurse(r));
                console.log(this.content);
                m.redraw();
            })
            .catch((e:any) => {
                console.log('error:');
                console.log(e);
            });
    }
}

m.mount(document.body, {view: () => m(HsConfig, {file:'data/config.json'})});

class HsContainer extends Container {
    private static translate(params:any) {
//        console.log('translate ' + params);
        return params.map((param:string) => {
            if (param.endsWith('px')) { return px(parseInt(param)); }
            if (param.endsWith('%')) { return pc(parseInt(param)); }
            if (param.toLowerCase()==='fill') { return FILL;}
        });
    }
    public static configFilter(config:any) {
        let result = {};
//        console.log('configFilter');
        Object.keys(config).map((k:string) => {
            switch(k) {
                case 'rows': 
                case 'columns':
                    result[k] = HsContainer.translate(config[k]);
                    break;
            }
        });
        return result;
    }
    view(node:Vnode) { 
        console.log('HsContainer view');
        const layout = node.attrs.layout;
        const content= node.attrs.content.map((c:Vnode) => m(Plain, { content:c } ));
        console.log(layout);
        console.log(content);

//        return this.layout('.h1', {rows:[]}, content);
        return this.layout('.h1', layout, content);
    }
}

class Plain extends Container {
    view(node:Vnode) { 
        const content= node.attrs.content;
        return this.layout('.h1', {}, content);
    }
}