import { m } from '../../../mithril';
const showdown  = require('showdown');

/**
 * 
 * @param mdl the module to scan for comments
 * @return a vnode representing the comment entries
 */
export function comment(mdl:any, short=false) { 
    let content:any[] = [];
    if (mdl.comment) {
        content.push(mainComment(mdl.comment, short));
        content.push(mainCommentDescription(mdl.comment, short));
        if (!short) {
            content.push(mainCommentRemainder(mdl.comment));
            content.push(mainCommentTags(mdl.comment));
            if (mdl.parameters) {
                content = content.concat(mainCommentParams(mdl.parameters));
            }
            content.push(mainCommentRemainder(mdl.comment));
            content.push(mainCommentTags(mdl.comment));
        }
    }
    return m('.hs-item-comment', content);
}

function mainComment(comment:any, short:boolean) {
    const text = comment.shortText || comment.text;
    return m('.hs-item-comment-desc', [m.trust(markDown(text, short))]);
}

function mainCommentDescription(comment:any, short:boolean) {
    return m('', (!comment || !comment.tags)? '' : 
        comment.tags.map((tag:any) => {
            switch(tag.tag) {
                case 'description': return m('.hs-item-comment-desc', [
                    m.trust(markDown(tag.text, short))
                ]);
                default: return '';
            }
    }));
}

function mainCommentTags(comment:any) {
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

function mainCommentParams(params:any) {
    return m('',  params.map((par:any) =>
        m('.hs-item-comment-desc', [
            m('span.hs-item-comment-tag', par.name), 
            m('span.hs-item-comment-text', par.comment? par.comment.text : '')
        ])
    ));
}

function mainCommentRemainder(comment:any) {
    return !comment? '' : Object.keys(comment).map((e:any) => {
            switch (e) {
                case 'shortText': // already handled
                case 'tags':      // already handled
                    return '';
                default: 
                    return m('', [
                        m('span.hs-item-comment-tag', e), 
                        m('span.hs-item-comment-text', comment[e])
                    ]);
            }
        });

}

function markDown(x:string, short:boolean) {
    const converter = new showdown.Converter();
    let result = (!x)? '' : converter.makeHtml(x);
    if (short) {
        const i = result.indexOf('</p>');
        if (i>0) { result = result.substring(0, i); }
    }
    return result;
}


