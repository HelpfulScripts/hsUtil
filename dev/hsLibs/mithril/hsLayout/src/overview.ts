/**
# hsLayout 
hsLayout provides means to layout the browser window in various ways.

## Concepts

### Containers and Components
To define a layout, define a class that extends the abstract {@link hsLayout:Container.Container `Container`} class.
Being a component iteself, the class should iomplement the `view` method, which should return the result of a call 
to `this.layout()`.

### Layouts
To create new layout styles, define a class that extends the abstract {@link hsLayout:Layout.Layout `Layout`} class.
This class should implement the `getStyles` method which calculates the styles attributes required for each `Component`
to be layed out in a `Container`.
 */

/** */