const m = require("mithril");
const showdown  = require('showdown');

/**
 * 
 * @param mdl the module to scan for comments
 * @return a vnode representing the comment entries
 */
export function comment(mdl:any) { 
    let content:any[] = [];
    content.push(mainComment(mdl.comment));
    if (mdl.comment) {
        if (mdl.comment.tags) {
            content = [];
            mdl.comment.tags.map((tag:any) => {
                if (!tag.tag || !tag.text) { console.log('tag or text not available'); }
                switch(tag.tag) {
                    case 'description': 
                        content.unshift(m('.hs-item-comment-desc',  [m.trust(markDown(tag.text))]));
                        break;
                    default: 
                        content.push(m('.hs-item-comment-special', [
                            m('span.hs-item-comment-tag', tag.tag), 
                            m('span.hs-item-comment-text', tag.text)
                        ]));
                }
            });
        }
    }
    content.push(mainCommentRemainder(comment));
    return m('.hs-item-comment', content);
}

function mainComment(comment:any) {
    return m('.hs-item-comment-desc', comment? [m.trust(markDown(comment.shortText))] : '');
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

function markDown(x:string) {
    const html = false;
    const converter = new showdown.Converter();
    return (!x)? '' :
        (html? x.replace(/\n/g, '<br>') : converter.makeHtml(x));
}


