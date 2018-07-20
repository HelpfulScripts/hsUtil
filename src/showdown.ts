const showdown  = require('showdown');

const converter = new showdown.Converter();

/**
 * converts `text` to its [showdwon](https://www.npmjs.com/package/showdown) equivalent
 * @param text the text to convert
 */
export function markDown(text:string) { 
    return converter.makeHtml(text);
}