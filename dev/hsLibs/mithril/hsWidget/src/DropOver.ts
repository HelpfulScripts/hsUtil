/**
 * # DropOver Widget
 * returns a Vnode that can be toggled to expand on top of existing content.
 * 
 * ### Invocation
 * invoked as 
 * ```
 * m(DropOver, { css:<string>, dir:DropOver.right, components:[
 *     m('div', 'the title'),
 *     ['body item1', 'body item2', 'body item3']
 * ]})
 * ```
 * 
 * ### Attributes (node.attrs):
 * - `css`: the css class to assign to the entire Collapsible div
 * - `dir`: the direction in which the `DropOver` expands; defaults to DropOver.down
 * - `components`: array of two components: 
 *     - `component[0]` is the title of the DropOver. This will remain visible and can be clicked 
 *       on to expand the remaining components
 *     - `component[1]` an *array of Vnodes* that will be expanded.
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * const clicked = e => console.log(e);
 * m.mount(root, {view: () => m(hslayout.Layout, {
 *     rows:["100%"],
 *     content:[
 *         m(hswidget.DropOver, { css:'.myExample', components: [
 *              m('.myTitle', 'click me to open'),
 *              [
 *                  m('.myItem', {onclick: clicked}, 'body item1'), 
 *                  m('.myItem', {onclick: clicked}, 'body item2'), 
 *                  m('.myItem', {onclick: clicked}, 'body item3')
 *              ]
 *         ]}),
 *     ]
 * })});
 * </file>
 * </example>
 */

 /** */
import { m, Vnode } from 'hslayout';

export class DropOver {
    static left  = 'left';
    static right = 'right';
    static up    = 'up';
    static down  = 'down';

    expanded = false;
    toggle() {
        this.expanded = !this.expanded;
    }
    view(node:Vnode) {
        const css        = node.attrs.css;
        const components = node.attrs.components;
        if (node.attrs.isExpanded!==undefined) {
            this.expanded = node.attrs.isExpanded;
        }
        return m(`.hs-dropover ${css}`, { onclick:()=>this.expanded = !this.expanded}, [
            components[0],
            components[1]? m('.hs-dropover-content', 
                { class: this.expanded?'hs-dropover-expanded':'' }, 
                components[1].map((c:any) =>c)) : undefined
        ]);
    }
}
