const m = require("mithril");

export function tooltip(text:string, tip:string, position:string):typeof m.Vnode { 
    // position: top, left, botton, right
    return m('.tooltip[href=#]', [text, m(`span.tooltip-${position}`, tip)]);
}

