const m = require("mithril");

//import { px, FILL } from './PillaredLayout';
//import { Layout } from './Layout';
 
/*
class RowsTest extends Layout {
    view(node:typeof m.Vnode):typeof m.Vnode {
        let l = node.attrs.layout;
        return this.layout('.hs-site', node, l, [
            'a', 'b', 'c'
        ]);
    }
}
*/

describe('RowsLayout', () => {
    let node:any;
    beforeEach(() => {
//        m.mount(document.body, m(RowsTest, {layout: { rows:[px(40), FILL, px(20)]}})); 
        m.mount(document.body, "hhh"); 
    });

    it ('should have 3 rows', () => {
        console.log(node);
        expect(node.children.length).toBe(3);
    });
});