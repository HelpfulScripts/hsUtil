/**
 * # Modal Widget
 * returns a Vnode that covers the entire window. 
 * 
 * ### Invocation
 * invoked as 
 * ```
 * m(Collapsible, { css:<string>, isExpanded:true, components:[
 *     m('', 'the title'),
 *     m('', ['body item1', 'body item2', 'body item3')
 * ]})
 * ```
 * 
 * ### Attributes (node.attrs):
 * - border: the `px` or `%` of the window size to use as border on each side.
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * m.mount(root, {view: () => m(hslayout.Layout, {
 *     rows:["100%"],
 *     content:[
 *          m('', {onclick:hswidget.Modal.show}, [
 *              'click me',
 *              m(hswidget.Modal, { border:'5px', content: m('', 'click border to release') })
 *          ])
 *     ]
 * })});
 * </file>
 * </example>
 */

 /** */
import { m, Vnode}      from 'hslayout';

export class Modal {
    private static modal:boolean; 
    public static show()    { Modal.modal = true; }
    public static dismiss() { Modal.modal = false; }
    view(node:Vnode) {
        const b = node.attrs.border || '20%';
        const attrs = { style: `left:${b}, right:${b}, top:${b}, bottom:${b}`};
        return m('.hs-modal-frame', !Modal.modal? '': [
            m('.hs-modal-background', { onclick: Modal.dismiss}, ''),
            m('.hs-modal-foreground', attrs, node.attrs.content || 'modal pane')
        ]);
    }
}
