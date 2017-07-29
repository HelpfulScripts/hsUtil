/**
 * ##HsConfing
 */

/** */
import { m, Vnode } from '../../mithril'; 
import { px, pc, FILL, Container} from '../../hsLayout/src/';

function recurse(config:any) {
    console.log('recurse');
    console.log(config);
    if (typeof config === 'string') { return m('', config);}
    return Object.keys(config).map((k:string) => {
        if (k==='HsContainer') { 
            const cl = eval(k);
            if (cl) { 
                const content = config[k].content.map((e:any) => recurse(e));
                const params = cl.configFilter(config[k]);
                console.log('calling ' + k);
                return m(cl, {layout: params, content: content}); }
            else { return m('', 'unknown class ' + k); }
        } else {
            return m('', [k]);
        }
    });

}

export class HsConfig {
    content: any = ['test'];

    view(node:Vnode) { 
        const file = node.attrs.file;
        if (this.content.length <= 1)  { this.load(file); }
        return m('.hs-config', this.content); 
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

m.mount(document.body, {view: () => m(HsConfig, {file:'data/config.json'})});

class HsContainer extends Container{
    private static translate(params:any) {
        console.log('translate ' + params);
        return params.map((param:string) => {
            if (param.endsWith('px')) { return px(parseInt(param)); }
            if (param.endsWith('%')) { return pc(parseInt(param)); }
            if (param.toLowerCase()==='fill') { return FILL;}
        });
    }
    public static configFilter(config:any) {
        let result = {};
        console.log('configFilter');
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
        console.log(node.attrs);
        const layout = node.attrs.layout;
        const content= node.attrs.content;

        return this.layout('', node, layout, content);
    }
}

class Text extends Container {
    view(node:Vnode) { 
        return this.layout('', node, {}, [m('', node.attrs.content)]);
    }
}