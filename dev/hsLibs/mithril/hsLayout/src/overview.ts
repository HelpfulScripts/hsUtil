/**
# hsLayout 
hsLayout provides means to layout the browser window in various ways.
See [Layout Examples](example/layout.html)

## Concepts

### Containers
To define a layout, define a class that extends the abstract {@link Layout.Layout `Layout`} class.
The class should implement the `view` method, which should return the result of a call 
to `this.layout()`.

### Layouters
To create new layout styles, define a class that extends the abstract {@link Layouter.Layouter `Layouter`} class.
This class should implement the `getStyles` method which calculates the styles attributes required for each `Component`
to be layed out in a `Layout`.

### Example
* <example>
* <file name='script.js'>
* m.mount(root, {view: () => m(hslayout.Layout, {
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
