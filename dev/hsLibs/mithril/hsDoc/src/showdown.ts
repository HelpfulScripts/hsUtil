const showdown  = require('showdown');

/**
 * process a comment string and returns the equivalent markdown syntax.
 * @param text the comment to markdown
 * @param short if true, only the first paragraph is returned
 * @return the marked down comment
 */
export function markDown(text:string, short:boolean=false):string {
    const converter = new showdown.Converter();
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
 * The format of a link statement is "{@link *module*:*path* linked text}", where
 * - *module* is the name of the docset
 * - *path* is the structural path of a component with steps on the path separated by a period. 
 * - linked text is displayed with a link to path within module
 * For example, the link to <br> 
 * '{@link hsDoc:MainComment.substituteLinks the substituteLinks function}' is 
 * {@link hsDoc:MainComment.substituteLinks the substituteLinks function}
 * @param comment the comment in which to replace the links
 * @return the comment with substituted links 
 */
function substituteLinks(comment:string):string {
    comment = comment.replace(/[^"`']{@link ([\S]*):([\S]+)\s(.+)}/g, ' <a href="#!/api/$1/$1.$2">$3</a>');
    return comment;
}
