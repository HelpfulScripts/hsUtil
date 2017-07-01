const m = require("mithril");
const showdown  = require('showdown');


function markDown(x:string) {
    const html = false;
    const converter = new showdown.Converter();
    return (!x)? '' :
        (html? x.replace(/\n/g, '<br>') : converter.makeHtml(x));
}


export function comment(mdl:any) { 
    let content:any = '';
    if (mdl.comment) {
        content = m('.hs-item-comment-desc', [m.trust(markDown(mdl.comment.shortText))]);
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
                            m('.hs-item-comment-tag', tag.tag), 
                            m('.hs-item-comment-text', tag.text)
                        ]));
                }
            });
        }
    }
    return content;
}

