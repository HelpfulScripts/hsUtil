import { m, Vnode }             from '../mithril';
import { Container, HsConfig }  from '../';


const myConfig = {
    Rows: {
        columns:  [''],
        maxCount: 5,
        leafCSS: 'leaf',
        content: [
            { Rows: {
                rows: [''],
                content: [
                    { aLeaf: { css:'leaf', columns: ['']}},
                    { aLeaf: { css:'leaf', columns: ['100px'] }},
                    { aLeaf: { css:'leaf', columns: ['100px', '200px'] }},
                    { aLeaf: { css:'leaf', columns: ['20%'] }},
                    { aLeaf: { css:'leaf', columns: ['20%', 'fill'] }}
                ]
            }},
            { Rows: {
                columns: [''],
                content: [
                    { aLeaf: { css:'leaf', rows: ['']}},
                    { aLeaf: { css:'leaf', rows: ['100px'] }},
                    { aLeaf: { css:'leaf', rows: ['100px', '200px'] }},
                    { aLeaf: { css:'leaf', rows: ['20%'] }},
                    { aLeaf: { css:'leaf', rows: ['20%', 'fill'] }}
                ]
            }}
        ]
    }
};

function next(fn:any) {
    return setTimeout(() => {
        fn();
        next(fn);
    }, 2000);
}

const example = { 
    Rows: class extends Container {
        getComponents(node: Vnode): Vnode {
            node.attrs.content.forEach((c:any) => c.attrs.maxCount = node.attrs.maxCount);
            return super.getComponents(node);
        }
    },
    aLeaf: class extends Container {
        count = 1;
        maxCount = 0;

        constructor() {
            super();
            next(() => {
                this.count = (this.count >= this.maxCount)? 0 : this.count+1;
                m.redraw();
            });
        }

        getComponents(node: Vnode): Vnode {
            this.maxCount = this.maxCount = node.attrs.maxCount || 3;
            const dims = node.attrs.columns || node.attrs.rows;
            const content = [...Array(this.count).keys()].map((c:number) => `${node.attrs.columns?'Columns':'Rows'}<br>${c+1}<br>[${dims.join()}]`);
            return content;
        }
    }
};

export const cfg = new HsConfig([example]).attachNodeTree(myConfig, document.body);
