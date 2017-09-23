/**
# hsLayout 
hsLayout provides means to layout the browser window in various ways.

## Concepts

### Containers and Components
To define a layout, define a class that extends the abstract {@link Container.Container `Container`} class.
Being a `Component` itself, the class should implement the `view` method, which should return the result of a call 
to `this.layout()`.

### Layouts
To create new layout styles, define a class that extends the abstract {@link Layout.Layout `Layout`} class.
This class should implement the `getStyles` method which calculates the styles attributes required for each `Component`
to be layed out in a `Container`.

### Example
* <example>
* <file name='script.js'>
* m.mount(root, {view: () => m(hslayout.Container, {
*     css: 'myColumn',
*     columns: ["150px", "fill"], 
*     content:['Left Column: 150px', 
*              'Right Column: remainder']
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
