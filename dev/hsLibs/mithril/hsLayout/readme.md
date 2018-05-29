# Helpful Scripts Layout Utilities

*hslayout* provides means to layout the browser window in various ways.<br>
It uses the [mithril](https://www.npmjs.com/package/mithril) framework to create the layout.

## Usage

The following snippet creates a layout that fills the provided *root* element with three rows. The first and third rows have a fixed size, while the middle row fills the remaining space. 
```

import { m, Layout } from 'hslayout';

m.mount(root, {view: () => m(Layout, {
    rows: ["50px", "fill", "20px"],
    content:['Top row: 50px', 'Middle row: fill', 'Fixed footer']
    })
});
```