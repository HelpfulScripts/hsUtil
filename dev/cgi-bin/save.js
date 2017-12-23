#!/usr/local/bin/node

const fs = require('fs');
const report  = require('./report').reporter('save_log');

let result = '0';

/** HTTP_REFERER: "http://localhost/~sth1pal/staging/apps/hsStock/" */
function getApp(path) {
    let i = path.indexOf('/apps/');
    if (i>0) { path = path.slice(i+6); }
    i = path.indexOf('/');
    if (i>0) { path = path.slice(0,i); }
    return path;
}

/** QUERY_STRING: "name=equityList.json" */
function getFile(path) {
    const i = path.indexOf('name=');
    return (i>=0)? path.slice(i+5) : undefined;
}

//report(Object.keys(process.env).map(k => `${k}: ${process.env[k]}`).join('\n'));

try {
    if (process.env.REQUEST_METHOD === 'PUT' || process.env.REQUEST_METHOD === 'POST') {
        const app = getApp(process.env.HTTP_REFERER);
        const file = getFile(process.env.QUERY_STRING);
        const fname = `${__dirname}/../apps/${file}`;
        const out = fs.createWriteStream(fname);
        let len = 0;
        let chunks = 0;
        process.stdin.on('data', (chunk) => {
            len += chunk.length;
            chunks++;
            out.write(chunk);
            report(`POST: ${chunks}-${len} ${file}`);
        });
    }
} catch(e) { report('error: '+ e.toString())}
console.log(`Content-type: text/html\n\n${result}\n`);
