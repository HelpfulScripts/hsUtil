import { m, Vnode } from '../../../mithril'; 

import { px, FILL } from '../';
import { Container } from '../';
 
/*
class RowsTest extends Layout {
    view(node:Vnode):Vnode {
        let l = node.attrs.layout;
        return this.layout('.hs-site', node, l, [
            'a', 'b', 'c'
        ]);
    }
}
*/

class Test extends Container {
    view(node: Vnode): Vnode {
        return this.layout('#test', node, { columns: <any[]>[px(200), FILL] }, [m('', 'left'), m('', 'middle'), m('', 'right')]);
    }
}

class Test2 extends Container {
    view(node: Vnode): Vnode {
        return m('#test', [m('', 'left'), m('', 'middle'), m('', 'right')]);
    }
}


describe('RowsLayout', () => { 
    let node;
    beforeAll((done) => {
        m.mount(document.body, Test); 
        setTimeout(() => {
            node = document.getElementById('test');
            done();
        }, 1000);
    });

    it ('should have defined document.body', (done) => {
        expect(document.body).toBeDefined();
        done();
    });

    it ('should have defined node', (done) => {
        expect(node).toBeDefined();
        expect(node).toBe(null);
        done();
    });

    it ('should have defined node2', (done) => {
        expect(node.children).toBeDefined();
        done();
    });
});