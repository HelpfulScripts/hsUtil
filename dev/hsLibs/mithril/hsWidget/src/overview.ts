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

## Menus
 * <example>
 * <file name='script.js'>
 * const items = ['One', 'Two', 'Three'];
 * const content   = ['1st', '2nd', '3rd'];
 * let  theContent = content[1];
 * 
 * m.mount(root, {view: () => m('.hs-white', [
 *    m('h4', 'Please select:'),
 *    m(hswidget.Menu, {desc: {
 *       items: items,
 *       selectedDefault: 'Two',
 *       changed: (item) => theContent = content[items.indexOf(item)]
 *    }}),
 *    m('myMain', theContent)
 * ])});
 *
 * </file>
 * <file name='style.css'>
 * .myMain { 
 *    border:1px solid #ddd;
 *    border-top: 0px solid #ddd;
 * } 
 * .hs-selectable { 
 *     background-color: #eef; 
 * }
 * .hs-selected { 
 *     background-color: #ddf; 
 *     border-width:0px;
 * }
 * </file>
 * </example>

## Buttons
 * <example>
 * <file name='script.js'>
 * let clicked = 0;
 * let radio = '';
 * let toggle = '';
 * 
 * m.mount(root, {view: () => m('.hs-white', [
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
 *    }})
 * ])});
 * </file>
 * </example>


*/

/** */
