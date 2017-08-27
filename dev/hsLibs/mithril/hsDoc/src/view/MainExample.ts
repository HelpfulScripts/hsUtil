/**
 * Comment sections may contain code examples that are placed within &lt;example&gt; tags.
 * 
 * `hsDoc` will interpret and execute Javascript instructions within a &lt;`file name='script.js'`&gt; tag.
 * and stylesheet instructions with a &lt;`file name='style.css'`&gt; tag, as in following example:
 * <code>
 * &lt;example&gt;
 * <file name='script.js'>
 *     m.mount(root, { 
 *         view:() => m(layout.Container, { columns:[], 
 *             content:['first line','second line')]
 *         })
 *     });
 * </file>
 * 
 * <file name='style.css'>
 *     .hsLeaf { 
 *         color: blue; 
 *     }
 * </file>
 * &lt;/example&gt;
 * </code>
 * 
 * ### Scripts 
 * Scripts a expected to mount a `mithril Vnode` on a root DOM element using `m.mount` or `m.render`. 
 * Do not use `m.route` as only a single call is allowed per web app and that is used to manage the 
 * main hsDoc site menu and navigation.
 * 
 * hsDoc internally uses the [global `Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
 * object to parse and execute the script. Thus the script has access only to global objects and to objects provided
 * as parameters in the `Function` constructor. hsDoc currently provides the following namespaces as parameters
 * for use in the scripts:
 * | m      | the `Mithril` m function |     
 * | layout | the {@link hsLayout: `hsLayout`} namespace, providing functions to layout the browser window. |
 * | widget | the {@link hsWidget: `hsWidget`} namespace, providing various UI widget functions. |
 * 
 * <example>
 * <file name='script.js'>
 * m.mount(root, { 
 *     view:() => m(layout.Container, {css:'.ex2', columns:[], content:[
 *         'third line',
 *         'fourth line'
 *     ]})
 * });
 * </file>
 * <file name='style.css'>
 * .ex2 { 
 *     color: red; 
 *     font-weight:bold; 
 * }
 *    .ex3 { color: red;
 * }
 * </file>
 * </example>
 */

/** */
import { m }                from '../../../mithril';
import { Menu, MenuDesc }   from '../../../hsWidgets/src/';
import { Container }        from '../../../hsLayout/src/';
import { shortCheckSum }    from '../../../../standalone/src/hsChecksum';
import * as layout          from '../../../hsLayout/src/';
import * as widget          from '../../../hsWidgets/src/';

interface CommentDescriptor {
    eid:    string;             // example tag ID
    mid:    string;             // menu tag ID
    desc:   MenuDesc;           // menu items
    pages:  {string:string};    // page content for each menu item
    mountScript: Function;
}

const gInitialized:{string?:CommentDescriptor} = {};

export function example(example:string) {
    const instance = shortCheckSum(example);
    let IDs = gInitialized[instance];
    if (!IDs) {
        IDs = gInitialized[instance] = initDesc(() => addExample(IDs));
        getCommentDescriptor(IDs, example);
        addExample(IDs);    
    }
    const style = IDs.pages['css'].replace(/(^|})\s*?(\S*?)\s*?{/gi, (x:string, ...args:any[]) =>
        x.replace(args[1], `#${IDs.eid} ${args[1]}`)
    );
    return `<style>${style}</style><example id=${IDs.eid} class="hs-layout-frame"></example>`;
}

function initDesc(fn:any) {
    return {
        eid: getNewID(),    // example tag ID
        mid: getNewID(),    // menu tag ID
        desc:{ 
            items:<string[]>[],
            selectedItem: 'js',
            select: fn,
            size: ["50px"]
        },
        pages:{}
    };
}

function getNewID():string { 
    return 'hs'+Math.floor(1000000*Math.random());
}

function addExample(IDs:CommentDescriptor) {
    console.log('addExample ' + IDs.desc.selectedItem);
    Promise.resolve(IDs)
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

const scriptFunction = {
    create: (IDs:CommentDescriptor, text:string) => IDs.mountScript = new Function('root', 'm', 'layout', 'widget', text),
    apply: (IDs:CommentDescriptor, root:any) => IDs.mountScript(root, m, layout, widget)
};

/**
 * execute the provided script 
 * @param IDs provides the context in which the script is exceuted/
 */
function executeScript(IDs:CommentDescriptor) {
    const root = document.getElementById(IDs.mid);
    try { scriptFunction.apply(IDs, root); }
    catch(e) { console.log("executing script: " + e); }
    return IDs;
}
 
/**
 * Fills in all fields of the CommentDescriptor provided as `IDs`.
 * @param IDs the CommentDescriptor to complete
 * @param example the example string, including <example> tag
 */
function getCommentDescriptor(IDs:CommentDescriptor, example:string) {
    function pageSrc(text:string) {
        return text;
    }

    /**
     * prefixes all definitions in the style `text` with with the example ID, e.g. `#545673`,
     * and returns the result.
     * @param text the style definition to process.
     */
    function styleSrc(text:string) { 
        return text;
    }

    /** 
     * Creates the function that executed the script. 
     * That function is expected to call `m.mount` on `root` as the DOM mount point.
     * */
    function scriptSrc(IDs:CommentDescriptor, text:string):string {
        scriptFunction.create(IDs, text); 
        return text;
    }

    let result = '';
    example.replace(/<file[\s]*name=[\S]*?\.([\s\S]*?)['|"]>([\S\s]*?)<\/file>/gi, function(text:string) {
        const args = [...arguments];
        const content = args[2].trim();
        switch (args[1]) {
            case 'html': IDs.desc.items.push('html'); IDs.pages['html'] = pageSrc(content); break;
            case 'js': IDs.desc.items.push('js'); IDs.pages['js'] = scriptSrc(IDs, content); break;
            case 'css': IDs.desc.items.push('css'); IDs.pages['css'] = styleSrc(content); break;
        }
        return result;
    });
}

