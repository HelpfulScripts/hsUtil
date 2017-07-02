const m = require("mithril");
const showdown  = require('showdown');


function markDown(x:string) {
    const html = false;
    const converter = new showdown.Converter();
    return (!x)? '' :
        (html? x.replace(/\n/g, '<br>') : converter.makeHtml(x));
}


export function comment(mdl:any) { 
    let content:any[] = [];
    if (mdl.comment) {
        content.push(m('.hs-item-comment-desc', [m.trust(markDown(mdl.comment.shortText))]));
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
        Object.keys(mdl.comment).map((e:any) => {
            switch (e) {
                case 'shortText': break;    // already handled
                case 'tags':      break;    // already handled
                default: content.push(m('', [
                            m('span.hs-item-comment-tag', e), 
                            m('span.hs-item-comment-text', mdl.comment[e])
                        ]));
            }
        });
    }
    return content;
}

