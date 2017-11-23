import { m, Vnode}      from 'hslayout';


export class Modal {
    private static modal:Vnode; 
    public static show()    { Modal.modal = m(Modal); }
    public static dismiss() { Modal.modal = undefined; }
    view(node:Vnode) {
        return m('.hs-modal-frame', !Modal.modal? '': [
            m('.hs-modal-background', { onclick: () => { Modal.modal=undefined; }}, ''),
            m('.hs-modal-foreground', node.attrs.content || 'modal pane')
        ]);
    }
}
