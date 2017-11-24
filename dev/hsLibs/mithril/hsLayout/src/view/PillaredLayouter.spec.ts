
const hslayout = require('../src/');
const m = hslayout.m;
const o = hslayout.o;


const columns = ["150px", "fill"];
const titles  = ['Left Column: 150px', 'Right Column: remainder'];


o.spec('rows', () => {
    let rows:any;
    o.before(() => {
        m.mount(o.root, {view: () => m(hslayout.Layout, {
            css: 'myRow',
            rows: columns,
            content: titles
            })
        }); 
        rows = o.root.childNodes[0];
    }); 
    o('first level', () => {
        o(rows===undefined).equals(false)('should be defined');
        o(rows.className.includes('myRow')).equals(true)(`class myRow in '${rows.className}'`);
        o(rows.className.includes('hs-row-layout')).equals(true)(`class hs-row-layout in '${rows.className}'`);
        o(rows.childNodes.length).equals(2)(`has ${rows.childNodes.length} children`);
    });

    o('second level', () => {
        rows.childNodes.forEach((c:any, i:number) => {
            o(c.className.includes('hs-layout')).equals(true)(`class hs-layout in '${c.className}'`);
            o(c.style.left).equals('0%')(`style left`);
            o(c.style.right).equals('0%')(`style right`);
            o(c.style.top).equals((i===0)?'0px':columns[0])(`style top`);
            o(c.style.bottom).equals((i===0)?'auto':'0px')(`style bottom`);
            o(c.style.height).equals((i===0)?columns[0]:'auto')(`style height`);
            o(c.childNodes.length).equals(1)(`has ${c.childNodes.length} children`);
        });
    });
    o('third level', () => {
        rows.childNodes.forEach((c:any, i:number) => {
            o(c.childNodes[0].className.includes('hs-leaf')).equals(true)(`class hs-leaf in '${c.childNodes[0].className}'`);
            o(c.childNodes[0].childNodes[0].nodeValue).equals(titles[i])(`item ${i+1} child leaf text`);
        });
    });
});

o.spec('columns', () => {
    let rows:any;
    o.before(() => {
        m.mount(o.root, {view: () => m(hslayout.Layout, {
            css: 'myColumn',
            columns: columns,
            content: titles
            })
        }); 
        rows = o.root.childNodes[0];
    }); 
    o('first level', () => {
        o(rows===undefined).equals(false)('should be defined');
        o(rows.className.includes('myColumn')).equals(true)(`class myColumn in '${rows.className}'`);
        o(rows.className.includes('hs-column-layout')).equals(true)(`class hs-column-layout in '${rows.className}'`);
        o(rows.childNodes.length).equals(2)(`has ${rows.childNodes.length} children`);
    });

    o('second level', () => {
        rows.childNodes.forEach((c:any, i:number) => {
            o(c.className.includes('hs-layout')).equals(true)(`class hs-layout in '${c.className}'`);
            o(c.style.top).equals('0%')(`style top`);
            o(c.style.bottom).equals('0%')(`style bottom`);
            o(c.style.left).equals((i===0)?'0px':columns[0])(`style left`);
            o(c.style.right).equals((i===0)?'auto':'0px')(`style right`);
            o(c.style.width).equals((i===0)?columns[0]:'auto')(`style width`);
            o(c.childNodes.length).equals(1)(`has ${c.childNodes.length} children`);
        });
    });
    o('third level', () => {
        rows.childNodes.forEach((c:any, i:number) => {
            o(c.childNodes[0].className.includes('hs-leaf')).equals(true)(`class hs-leaf in '${c.childNodes[0].className}'`);
            o(c.childNodes[0].childNodes[0].nodeValue).equals(titles[i])(`item ${i+1} child leaf text`);
        });
    });
});
