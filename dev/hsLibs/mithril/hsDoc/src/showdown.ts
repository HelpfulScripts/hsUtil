const showdown  = require('showdown');

/**
 * process a comment string and returns the equivalent markdown syntax.
 * @param text the comment to markdown
 * @param short if true, only the first paragraph is returned
 * @return the marked down comment
 */
export function markDown(text:string, short:boolean=false):string {
    const converter = new showdown.Converter({
        tables:                 true,
        smartIndentationFix:    true
    });
    let result = (!text)? '' : converter.makeHtml(text);
    if (short) {
        const i = result.indexOf('</p>');
        if (i>0) { result = result.substring(0, i); }
    }
    result = substituteLinks(result);
    return result;
}

/**
 * replaces link statements in the comment with hyperlink references.
 * The format of a link statement is "{@link *docset*:*path* linked text}", where
 * - *docset* is the name of the docset
 * - *path* is the structural path of a component with steps on the path separated by a period,
 *    following the pattern *module*.*entity*.*member* with
 *     - *module* = the name of the module file
 *     - *entity* = [*class* | *function* | *variable*]
 *     - *member* = [*method* | *variable*]
 * - if *path* is omittied, or is `overview`, the library overview will be shown.
 *   
 * Examples: 
 * - '{@link hsDoc: Doc Overview}' -> {@link hsDoc: Doc Overview}
 * - '{@link hsDoc:DocSets.DocSets.add the `adds` function}' --> {@link hsDoc:DocSets.DocSets.add the `adds` function}
 * 
 * @param comment the comment in which to replace the links
 * @return the comment with substituted links 
 */
function substituteLinks(comment:string):string {
    comment = comment.replace(/[^"`']{@link ([\S]*):([\S]*)\s*(.+)}/gi, (match, ...args) => {
        const lib = args[0];
        const module = args[1];
        const text = args[2];
        console.log(args);
        return (module === '' || module === 'overview')?
                ` <a href="#!/api/${lib}/0">${text}</a>` :
                ` <a href="#!/api/${lib}/${lib}.${module}">${text}</a>`;
    });
    return comment;
}
