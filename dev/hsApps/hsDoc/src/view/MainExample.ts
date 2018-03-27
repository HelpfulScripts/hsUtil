/**
 * Comment sections may contain code examples that are placed within &lt;example&gt; tags.
 * 
 * `hsDoc` will interpret and execute Javascript instructions within a &lt;`file name='script.js'`&gt; tag.
 * and stylesheet instructions with a &lt;`file name='style.css'`&gt; tag, as in following example:
 * <code>
 *     &lt;example&gt; 
 *     <file name='script.js'>
 *     m.mount(root, { 
 *         view:() => m(hslayout.Layout, { columns:[], 
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
 * - **widget**: the {@link hsGraph: `hsGraph`} namespace, providing various UI widget functions.
 * - additionally, the parameter **root** is provided as the DOM element to mount to.
 * 
 * [Function]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
 * 
 * ### Styles
 * Styles will be automatically sandboxed so they are valid only within the enclosing example tags. 
 * This is achieved by prefixing css tags with a unique exmple ID and allows multiple examples to co-exist on the same page.
 * In the DOM, the example ID is assgned top the &lt;example&gt; tag.
 * Use `$exampleID` as css tag in the `css` section of the example to refer to the &lt;example&gt; element, 
 * as shown below.
 * 
 * ### Example
 * <example>
 * <file name='script.js'>
 * m.mount(root, { 
 *     view:() => m(hslayout.Layout, {
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
 * $exampleID { height: 200px;}
 * .hs-layout { 
 *     margin:0; 
 * }
 * .myExample { 
 *     color: red; 
 *     font-weight:bold; 
 * }
 * </file>
 * </example>
 */

/** */
import { m }                from 'hslayout';
import { Menu, SelectorDesc }   from 'hswidget';
import { Layout }        from 'hslayout';
import { shortCheckSum }    from 'hsutil'; 
import { delay }            from 'hsutil'; 
import * as hslayout        from 'hslayout';
import * as hswidget        from 'hswidget';
import * as hsgraph         from 'hsgraph';
import * as hsdata          from 'hsdata';
import * as hsutil          from 'hsutil';


/**
 * describes an executable comment example
 */
interface CommentDescriptor { 
    exampleID: string;                  // example tag ID
    menuID:    string;                  // menu tag ID
    desc:   SelectorDesc;               // menu items
    pages:  {string?:string};           // page content for each menu item
    executeScript?: (root:any) => void; // the example code to execute
    executeSource?: '';                 // the source code to execute
}

/**
 * Map containing various exampkle configurations 
 */
const gInitialized:{string?:CommentDescriptor} = {};

/**
 * 
 */
let gActiveScriptPage = 'js';

/**
 * creates the example configuration, generates the DOM hook, and sets up the example execution.
 * `example` takes a context map of the form `{ name:module, ...}` and return a function 
 * that can be used in calls to `string.replace`as in the following example:
 * <code><pre>
 * import * as layout from "layout";
 * text = text.replace(/<example>([\S\s]*?)<\/example>/gi, example({layout:layout}));
 * </pre></code>
 * The modules `m`, `hsLayout`, and `hsGraph` will be added by default as 
 * ` { m: m, layout: layout, widget: widget } `
 * @param example the example string extracted from the comment, including the `<example>` tags.
 * @param context the context in which the example script should be run, expressed as `name`:`namespace` pairs.
 */
export function example(context:any) { 
    context.m        = m;
    context.hslayout = hslayout;
//    import ('hswidget').then(_ => context.hswidget = _);
    context.hswidget = hswidget;
    context.hsgraph  = hsgraph;
    context.hsdata   = hsdata;
    context.hsutil   = hsutil;
    const libNames = Object.keys(context);
    const modules = libNames.map(n => context[n]);
    return (exmpl:string) => { 
        const instance = shortCheckSum(exmpl);
        let IDs = gInitialized[instance]; 
        if (!IDs) {
            IDs = gInitialized[instance] = initDesc(() => addExample(IDs)   // called when source menu changes
                .then(executeScript) 
                .catch(executeError)
            );
            IDs.executeSource = exmpl;
            try {
                const scriptFn = new Function('root', ...libNames, getCommentDescriptor(IDs, exmpl));    
                IDs.executeScript = (root:any) => scriptFn(root, ...modules);
            }
            catch(e) { console.log('creating script:' + e); }
        }
        if (document.getElementById(IDs.menuID)) { 
        } else {
            addExample(IDs).then(executeScript).catch(executeError);
        }
        const styles = IDs.pages['css']; 

        // prefix css selectors with ID of main execution area to sandbox the scope
        // (^|}): start of string or end of previous style def
        // \s*?: any white spaces
        // (\S*?): capturing group: css name
        // \s*?{: whitespaces, followed by start of style def
        const style = (styles===undefined)? '': styles.replace(/(^|})\s*?(\S*?)\s*?{/gi, (x:string, ...args:any[]) => x
            .replace(args[1], args[1]==='$exampleID'? `#${IDs.exampleID}`: `#${IDs.menuID} ${args[1]}`)
        );
        return `<style>${style}</style><example id=${IDs.exampleID} class="hs-layout-frame"></example>`;
    };
}

/**
 * creates the example configuration 
 */
function initDesc(fn:any):CommentDescriptor {
    return {
        exampleID:  getNewID(),    // example tag ID
        menuID:     getNewID(),    // main execution area tag ID
        desc:<SelectorDesc>{ 
            items:<string[]>[],
            selectedItem: 'js',
            changed: fn,
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
function addExample(IDs:CommentDescriptor):Promise<CommentDescriptor> {
    return Promise.resolve(IDs).then(addExampleStructure).then(delay(1)); 
}

/**
 * returns a parameterless function that can be called via setTimeout to 
 * mount the menu and execute the script function provided in `IDs`. 
 * @param IDs the `CommentDescriptor` to execute on. 
 */
function addExampleStructure(IDs:CommentDescriptor):CommentDescriptor { 
    const item = gActiveScriptPage; // IDs.desc.selectedItem; // get the selected script page: js or css
    const source = m.trust(`<code><pre>${IDs.pages[item]}</pre></code>`);
    const root = document.getElementById(IDs.exampleID);

    m.mount(root, {view: () => m(Layout, { 
        columns: ["50%"],
        content: [
            m(Layout, {
                content: m('.hs-layout .hs-execution', {id:IDs.menuID}, 'placeholder')
            }),
            m(Layout, {
                rows:["30px", "fill"],
                css: '.hs-source',
                content:[
                    m(Menu, {desc: IDs.desc, size:['50px'], changed: (newItem:string) => gActiveScriptPage = newItem}),
                    m(Layout, { content: m('.hs-layout .hs-source-main', source)})
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
    const root = document.getElementById(IDs.menuID);
    try { IDs.executeScript(root); }
    catch(e) { 
        console.log("error executing script: " + e); 
        console.log(IDs.executeSource);
        console.log(e.stack);
    }
    m.redraw();
    return IDs;
}

function executeError(e:any) {
    console.log('rejection executing script:');
    console.log(e);
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
        const content = args[2].trim(); // the part between <file> and </file>
        IDs.desc.items.push(args[1]);   // record available extensions, i.e. 'js', 'html', etc 
        IDs.pages[args[1]] = content;   // associate the content with the extension
        return result;
    });
    return IDs.pages['js'];
}

