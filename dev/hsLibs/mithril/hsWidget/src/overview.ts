/**
# hsWidgets 
Provides various UI widgets:

| Widget | Description |
|========|=============|
| &nbsp; {@link Menu.Menu Menu} | A group of horizontal menu items that can trigger actions |
| &nbsp; {@link Button.Button Button} | A simple button widget |
| &nbsp; {@link Collapsible Collapsible} | A panel that will expand znd collapse when the title is clicked |
| &nbsp; {@link Modal Modal} | A modal panel that will cover the entire window until released. |
| &nbsp; {@link AddRemove AddButton} | An inline `+` button that will open a form for adding new elements. |
| &nbsp; {@link AddRemove RemoveButton} | An inline `-` button that will remove an item. |
| &nbsp; {@link TypeAhead TypeAhead} | A TypeAhead search input form. |

 * <example height=1200px>
 * <file name='script.js'>
 * const items = ['One', 'Two', 'Three'];
 * const content   = ['1st', '2nd', '3rd'];
 * let  theContent = content[1];
 * let clicked = 0;
 * let radio = '';
 * let toggle = '';
 * 
 * m.mount(root, {view: () => m('.hs-white', [
 * 
 *    m('h2.myGapButtons', 'Buttons'),
 *    m('h4', `Please click: (${clicked}-times clicked)`),
 *    m(hswidget.Button, { desc: {
 *        name: 'click me',
 *        clicked: () => clicked++
 *    }}),
 *    m('h4', `Select Radio Station: ${radio}`),
 *    m(hswidget.RadioButton, { desc: {
 *        items: ['1st', '2nd','3rd'],
 *        changed: (item) => radio = item
 *    }}),
 *    m('h4', `Please Toggle between 1st, 2nd, and 3rd`),
 *    m(hswidget.ToggleButton, { desc: {
 *        items: ['1st', '2nd','3rd'],
 *        changed: (item) => toggle = item
 *    }}),
 * 
 *    m('h2.myGapMenus', 'Menus'),
 *    m('h4', 'Please select:'),
 *    m(hswidget.Menu, {desc: {
 *       items: items,
 *       defaultItem: 'Two',
 *       changed: (item) => theContent = content[items.indexOf(item)]
 *    }}),
 *    m('myMenuMain', theContent),
 * 
 *    m('h2.myGapCollapsibless', 'Collapsibles'),
 *    m(hswidget.Collapsible, { css:'.myCollapsible', components: [
 *       m('.myTitle', 'click me to toggle'), [
 *          m('', 'body item1'), 
 *          m('', 'body item2'), 
 *          m('', 'body item3')
 *       ]
 *    ]}),
 *    m('', 'This is a background text that will be pushed down by the Collapsible')
 * ])});
 * </file>
 *
 * <file name='style.css'>
 * .myMenuMain { 
 *    border:1px solid #ddd;
 *    border-top: 0px solid #ddd;
 * } 
 * .hs-menu .hs-selectable { 
 *     background-color: #eef; 
 * }
 * .hs-menu .hs-selected { 
 *     background-color: #ddf; 
 *     border-width:0px;
 * }
 * .myCollapsible {
 *     margin-bottom: 5px;
 * }
 * .myCollapsible .myTitle {
 *     font-weight:bold;
 *     padding-top: 3px;
 * }
 * .myCollapsible .hs-collapsible-expanded {
 *     margin-left: 10px;
 * }
 * 
 * .myGapButtons        { margin-top: 220px; }
 * .myGapMenus          { margin-top: 80px; }
 * .myGapCollapsibless  { margin-top: 50px; }
 * </file>
 * </example>
*/

/** */
