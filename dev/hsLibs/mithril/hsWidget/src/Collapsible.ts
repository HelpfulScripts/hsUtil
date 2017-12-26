/**
 * # Collapsible Widget
 * returns a Vnode that can be toggled to expand and contract by clicking on the first `component`.
 * 
 * ### Invocation
 * invoked as 
 * ```
 * m(Collapsible, { css:<string>, isExpanded:true, components:[
 *     m('div', 'the title'),
 *     ['body item1', 'body item2', 'body item3']
 * ]})
 * ```
 * 
 * ### Attributes (node.attrs):
 * - `css`: optional; the css class to assign to the entire Collapsible div
 * - `isExpanded`: optional; boolean indicating if the Collapsible is initially expanded
 * - `components`: array of two components: 
 *     - `component[0]` is the title of the Collapsible. This will remain visible and can be clicked 
 *       on to expand or contract the remaining components
 *     - `component[1]` an array of Vnodes that will be collapsed or expanded.
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * m.mount(root, {view: () => m(hslayout.Layout, {
 *     rows:["100%"],
 *     content:[
 *         m(hswidget.Collapsible, { css:'.myExample', components: [
 *              m('.myTitle', 'click me to toggle'),
 *              [
 *                  m('.myItem', 'body item1'), 
 *                  m('.myItem', 'body item2'), 
 *                  m('.myItem', 'body item3')
 *              ]
 *         ]}),
 *     ]
 * })});
 * </file>
 * </example>
 */

 /** */
import { m, Vnode } from 'hslayout';

export class Collapsible {
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
        return m(`.hs-Collapsible ${css}`, { onclick:()=>this.expanded = !this.expanded}, [
            components[0],
            components[1]? m('.hs-Collapsible-content', 
                { class: this.expanded?'':'hs-collapsed' }, 
                components[1].map((c:any) =>c)) : undefined
        ]);
    }
}
