/**
 * # hsLayout 
 * hsLayout provides means to layout the browser window in various ways.
 * See [Layout Examples](example/layout.html)
 * 
 * ## Concepts
 * 
 * ### Layouts
 * Layouts can be either defined generically:
 * ```
 * m(Layout, {
 *     css: '.myLayoutClass',  // optional
 *     columns: []
 *     content: ['left', 'right']
 * })
 * ```
 * Or, for more complex cases, by defining a class that extends {@link Layout.Layout `Layout`}:
 * ```
 * class Columns extends Layout {
 *     getComponents(node:Vnode) {
 *         return [m(LeftColumn), m(CenterColumn), m(RightColumn)]
 *     }
 * }
 * m(Columns);
 * ```
 * 
 * ### Layouters
 * To create new layout styles, define a class that extends the abstract {@link Layouter.Layouter `Layouter`} class.
 * This class should implement the `getStyles` method which calculates the styles attributes required for each `Component`
 * to be layed out in a `Layout`.
 * 
 * Currently defined Layouters:
 * - &nbsp; {@link PillaredLayouter.Columns `Columns`}
 * - &nbsp; {@link PillaredLayouter.Rows    `Rows`}
 * - &nbsp; {@link TileLayouter.Tiles       `Tiles`}
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * const theContent = ['Top row: 50px', 'Bottom row: remainder']
 * m.mount(root, {view: () => m(hslayout.Layout, {
 *     css: 'myColumn',
 *     rows: ["50px", "fill"], 
 *     content:theContent
 *     })
 * });
 * </file>
 * <file name='style.css'>
 * .myColumn .hs-layout {
 *     border: 1px solid white;
 * }
 * </file>
 * </example>
 * 
 * ### Nested Example
 * <example>
 * <file name='script.js'>
 * m.mount(root, {view: () => 
 *     m(hslayout.Layout, {
 *         css: 'myColumn',
 *         rows: ["150px", "fill"], 
 *         content:[
 *             m(hslayout.Layout, {columns:['20%'], content:['top left', 'top 2nd']}), 
 *             m(hslayout.Layout, {columns:['20%'], content:['bottom left', 'bottom 2nd']})
 *         ]
 *     })
 * });
 * </file>
 * <file name='style.css'>
 * .myColumn .hs-layout {
 *     border: 1px solid white;
 * }
 * </file>
 * </example>
 */

/** */
