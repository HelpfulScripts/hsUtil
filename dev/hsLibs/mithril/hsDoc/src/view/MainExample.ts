/**
 * Comment sections may contain code examples that are placed within &lt;example&gt; tags.
 * 
 * `hsDoc` will interpret and execute Javascript instructions within a &lt;`file name='script.js'`&gt; tag.
 * and stylesheet instructions with a &lt;`file name='style.css'`&gt; tag, as in following example:
 * <code>
 *     &lt;example&gt; 
 *     <file name='script.js'>
 *     m.mount(root, { 
 *         view:() => m(layout.Container, { columns:[], 
 *             content:['first line','second line')]
 *         })
 *     });
 *     </file>
 * 
 *     <file name='style.css'>
 *     .hsLeaf { 
 *         color: blue; 
 *     }
 *     </file>
 *     &lt;/example&gt;
 * </code> 
 * 
 * ### Scripts 
 * Scripts are expected to mount a `mithril Vnode` on a root DOM element using `m.mount` or `m.render`. 
 * Do not use `m.route` as only a single call is allowed per web app and that is used to manage the 
 * main hsDoc site menu and navigation.
 * 
 * hsDoc internally uses the [global `Function` object][Function] to parse and execute the script. 
 * Thus the script has access only to global objects and to objects provided
 * as parameters in the `Function` constructor. hsDoc currently provides the following namespaces as parameters
 * for use in the scripts:
 * - **m**: the `Mithril` m function    
 * - **layout**: the {@link hsLayout: `hsLayout`} namespace, providing functions to layout the browser window.
 * - **widget**: the {@link hsWidget: `hsWidget`} namespace, providing various UI widget functions.
 * - additionally, the parameter **root** is provided as the DOM element to mount to.
 * 
 * [Function]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
 * 
 * ### Styles
 * Styles will be automatically sandboxed so they are valid only within the enclosing example tags. 
 * This allows multiple examples to co-exist on the same page.
 * 
 * <example>
 * <file name='script.js'>
 * m.mount(root, { 
 *     view:() => m(layout.Container, {
 *         css:'.myExample', 
 *         columns:[], 
 *         content:[
 *             'third line',
 *             'fourth line'
 *         ]
 *     })
 * });
 * </file>
 * <file name='style.css'>
 * .hs-layout { 
 *     margin:0; 
 * }
 * .myExample>.hs-layout {
 *     border: 2px solid white;
 * }
 * .myExample { 
 *     color: red; 
 *     font-weight:bold; 
 * }
 * </file>
 * </example>
 */

/** */
import { m }                    from '../../../mithril';
import { Menu, MenuDesc }       from '../../../hsWidgets/src/';
import { Container }            from '../../../hsLayout/src/';
import { shortCheckSum, delay } from '../../../../standalone/src/';
import * as layout              from '../../../hsLayout/src/';
import * as widget              from '../../../hsWidgets/src/';


interface CommentDescriptor {
    eid:    string;             // example tag ID
    mid:    string;             // menu tag ID
    desc:   MenuDesc;           // menu items
    pages:  {string?:string};   // page content for each menu item
    executeScript?: (root:any) => void;
}

/**
 * Map containing various exampkle configurations 
 */
const gInitialized:{string?:CommentDescriptor} = {};

/**
 * creates the example configuration, generates the DOM hook, and sets up the example execution.
 * `example` takes a context map of the form `{ name:module, ...}` and return a function 
 * that can be used in calls to `string.replace`as in the following example:
 * <code><pre>
 * import * as layout from "layout";
 * text = text.replace(/<example>([\S\s]*?)<\/example>/gi, example({layout:layout}));
 * </pre></code>
 * The modules `m`, `hsLayout`, and `hsWidget` will be added by default as 
 * ` { m: m, layout: layout, widget: widget } `
 * @param example the example string extracted from the comment, including the `<example>` tags.
 * @param context the context in which the example script should be run, expressed as `name`:`namespace` pairs.
 */
export function example(context:any) { 
    context.m      = m;
    context.layout = layout;
    context.widget = widget;
    const names = Object.keys(context);
    const modules = names.map(n => context[n]);
    return (example:string) => { 
        const instance = shortCheckSum(example);
        let IDs = gInitialized[instance];
        if (!IDs) {
            IDs = gInitialized[instance] = initDesc(() => addExample(IDs));
            try {
                const script = new Function('root', ...names, getCommentDescriptor(IDs, example));    
                IDs.executeScript = (root:any) => script(root, ...modules);
            }
            catch(e) { console.log('creating script:' + e); }
        }
        if (!document.getElementById(IDs.mid)) { addExample(IDs); }
        const styles = IDs.pages['css']; 

        // prefix css selectors with ID of main execution area to sandbox the scope
        const style = (styles===undefined)? '': styles.replace(/(^|})\s*?(\S*?)\s*?{/gi, (x:string, ...args:any[]) =>
            x.replace(args[1], `#${IDs.mid} ${args[1]}`)
        );
        return `<style>${style}</style><example id=${IDs.eid} class="hs-layout-frame"></example>`;
    };
}

/**
 * creates the example configuration 
 */
function initDesc(fn:any):CommentDescriptor {
    return {
        eid:     getNewID(),    // example tag ID
        mid:     getNewID(),    // main execution area tag ID
        desc:{ 
            items:<string[]>[],
            selectedItem: 'js',
            select: fn,
            size: ["50px"]
        },
        pages:{}
    };
}

/** creates a new random example ID for each call. */
function getNewID():string { 
    return 'hs'+Math.floor(1000000*Math.random());
}

/** asynchronously adds the example structure on the page and then executed the script. */
function addExample(IDs:CommentDescriptor) {
    return Promise.resolve(IDs)
        .then(addExampleStructure)
        .then(executeScript);
}

/**
 * returns a parameterless function that can be called via setTimeout to 
 * mount the menu and execute the script function provided in `IDs`. 
 * @param IDs the `CommentDescriptor` to execute on. 
 */
function addExampleStructure(IDs:CommentDescriptor) { 
    const item = IDs.desc.selectedItem;
    const source = m.trust(`<code><pre>${IDs.pages[item]}</pre></code>`);
    const root = document.getElementById(IDs.eid);

    m.mount(root, {view: () => m(Container, { 
        columns: ["50%"],
        content: [
            m(Container, {content: m('.hs-layout .hs-execution', {id:IDs.mid})}),
            m(Container, {
                rows:["30px", "fill"],
                content:[
                    m(Menu, {desc: IDs.desc}),
                    m(Container, { content: m('.hs-layout .hs-source', source)})
                ]
            })
        ]})
    });
    return IDs;
}

/**
 * execute the provided script 
 * @param IDs provides the context in which the script is exceuted/
 */
function executeScript(IDs:CommentDescriptor) {
    delay(20).then(() => {
        const root = document.getElementById(IDs.mid);
        try { IDs.executeScript(root); }
        catch(e) { console.log("executing script: " + e); }
        return IDs;
    });
}
 
/**
 * Fills in all fields of the CommentDescriptor provided as `IDs`.
 * @param IDs the CommentDescriptor to complete
 * @param example the example string, including <example> tag
 * @return the script to execute, as a string
 */
function getCommentDescriptor(IDs:CommentDescriptor, example:string):string {
    let result = '';
    example.replace(/<file[\s]*name=[\S]*?\.([\s\S]*?)['|"]>([\S\s]*?)<\/file>/gi, function(text:string) {
        const args = [...arguments];
        const content = args[2].trim();
        IDs.desc.items.push(args[1]);
        IDs.pages[args[1]] = content;
        return result;
    });
    return IDs.pages['js'];
}

