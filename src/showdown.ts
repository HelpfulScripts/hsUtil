const showdown  = require('showdown');

const converter = new showdown.Converter();

export function markDown(text:string) { 
    return converter.makeHtml(text);
}