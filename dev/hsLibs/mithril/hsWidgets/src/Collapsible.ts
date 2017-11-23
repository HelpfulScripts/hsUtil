/**
 * # Collapsible
 * 
 */

 /** */
import { m, Vnode } from 'hslayout';

const expanded: {string?:boolean} = {};

const getKey = () => 'hs'+Math.floor(Math.random()*2000000);

/**
 * returns a Vnode that can be toggled to expand and contract by clicking on the first `component`.
 * @param css the css class to assign to the entire collapsible div
 * @param attrs optional attributes list:
 * - isExpanded: boolean indicates if the collapsible is initially expanded
 * @param components array of two components: 
 * - `component[0]` is the title of the collapsible. This will remain visible and cabn be clicked 
 *   on to expand or contract the remaining components
 * - `component[1]` a Vnode or an array of Vnodes that will be collapsed or expanded.
 */
export function collapsible(css:string, attrs:any, components:Vnode[]) {
    function toggle() {
        expanded[key] = !expanded[key];
//        m.redraw();
    }
    if (!components) { components = attrs; attrs = undefined; }
    const key = getKey();
    if (attrs.isExpanded) { expanded[key] = true; }
    return m(`.hs-collapsible ${css}`, { onclick:toggle}, [
            components[0],
            !components[1]? undefined : m('.hs-collapsible-content', { 
                class: expanded[key]?'':'hs-collapsed'
            }, components[1].map((c:any) =>c))
        ]);
}