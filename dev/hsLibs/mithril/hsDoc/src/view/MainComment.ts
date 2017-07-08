/**
 * Processing of comments.
 */

/** */
import { m, Vnode } from '../../../mithril';
const showdown  = require('showdown');

/**
 * Main comment processing 
 * @param mdl the module to scan for comments
 * @return a vnode representing the comment entries
 */
export function commentLong(mdl:any):Vnode { 
    let content:any[] = [];
    if (mdl.comment) {
        content.push(textShortText(mdl.comment, false));
        content.push(description(mdl.comment, false));
        content.push(returns(mdl.comment, false));
        content.push(commentRemainder(mdl.comment));
//        if (mdl.parameters) {
//            content = content.concat(mainCommentParams(mdl.parameters));
//        }
    }
    return m('.hs-item-comment', content);
}

/**
 * Shortended comment processing 
 * @param mdl the module to scan for comments
 * @return a vnode representing the comment entries
 */
export function comment(mdl:any, short=false):Vnode {
    let content:any[] = [];
    if (mdl.comment) {
        content.push(textShortText(mdl.comment, short));
        content.push(description(mdl.comment, false));
        if (!short) {
//            content.push(mainCommentRemainder(mdl.comment));
            content.push(otherCommentTags(mdl.comment));
            if (mdl.parameters) {
                content = content.concat(mainCommentParams(mdl.parameters));
            }
        }
        content.push(returns(mdl.comment, false));
        content.push(commentRemainder(mdl.comment));
    }
    return m('.hs-item-comment', content);
} 

function textShortText(comment:any, short:boolean):Vnode {
    return m('.hs-item-comment-desc', [m.trust(markDown(comment.shortText || comment.text, short))]);
}

function description(comment:any, short:boolean):Vnode {
    let text = '';
    if (comment && comment.tags) {
        comment.tags.map((tag:any) => tag.tag==='description'? (text = tag.text) : '');
    }
console.log(text);    
console.log(comment);    
    return m('.hs-item-comment-desc', [m.trust(markDown(text, short))]);
}

function returns(comment:any, short:boolean):Vnode {
    let text = comment.returns;
    return m('.hs-item-comment-desc', !text? '': [            
        m('span.hs-item-comment-tag', 'returns:'), 
        m('span.hs-item-comment-text', text)
    ]);
}

function commentRemainder(comment:any):string|Vnode {
    return m('', Object.keys(comment).map((tag:any) => {
            switch(tag) {
                case 'tags': break;         // already handled
                case 'shortText': break;    // already handled
                case 'text': break;         // already handled
                case 'description': break;  // already handled
                case 'returns': break;      // already handled
                default: return m('.hs-item-comment-special', [
                    m('span.hs-item-comment-tag', tag), 
                    m('span.hs-item-comment-text', comment[tag])
                ]);;
            }
    }));
}

function otherCommentTags(comment:any):string|Vnode {
    return m('', !comment.tags? [] : comment.tags.map((tag:any) => {
        switch(tag.tag) {
            case 'description': return ''; // skip since already handled
            default: return m('.hs-item-comment-special', [
                m('span.hs-item-comment-tag', tag.tag), 
                m('span.hs-item-comment-text', tag.text)
            ]);
        }
    }));
}



/*
function mainCommentRemainder(comment:any):string|Array<string|Vnode> {
    return !comment? '' : Object.keys(comment).map((e:any) => {
            switch (e) {
                case 'shortText':   // already handled
                case 'text':        // already handled
                case 'tags':        // already handled
                    return '';
                default: 
                    return m('', [
                        m('span.hs-item-comment-tag', e), 
                        m('span.hs-item-comment-text', comment[e])
                    ]);
            }
        });
}
*/

function mainCommentParams(params:any):Vnode {
    return m('',  params.map((par:any) =>
        m('.hs-item-comment-desc', [
            m('span.hs-item-comment-tag', par.name+':'), 
            m('span.hs-item-comment-text', par.comment? par.comment.text : '')
        ])
    ));
}

/**
 * process a comment string and returns the equivalent markdown syntax.
 * @param text the comment to markdown
 * @param short if true, only the first paragraph is returned
 * @return the marked down comment
 */
function markDown(text:string, short:boolean):string {
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
