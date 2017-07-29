import { m, Vnode }            from '../../../mithril';
import { Container }    from '../';


class Columns extends Container {
    view(node: Vnode): Vnode {
        return this.layout(`.hs-column-example`, {rows:[]}, [
            m(Columns1),
            m(Columns2),
            m(Columns3),
            m(Columns4)
        ]);
    }
};

class Columns1 extends Container {
    view(node: Vnode): Vnode {
        return this.layout(`.hs-column-example`, {column:[]}, [
            'one', 'two', 'three'
        ]);
    }
};

class Columns2 extends Container {
    view(node: Vnode): Vnode {
        return this.layout(`.hs-column-example`, {column:[]}, [
            'one', 'two', 'three'
        ]);
    }
};

class Columns3 extends Container {
    view(node: Vnode): Vnode {
        return this.layout(`.hs-column-example`, {column:[]}, [
            'one', 'two', 'three'
        ]);
    }
};

class Columns4 extends Container {
    view(node: Vnode): Vnode {
        return this.layout(`.hs-column-example`, {column:[]}, [
            'one', 'two', 'three'
        ]);
    }
};

m.mount(document.body, Columns);
