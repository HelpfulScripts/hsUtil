#!/usr/local/bin/node

const fs = require('fs');
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

function reportError(error) {
    let envContent = process.argv.map((c,i) => `${i}: ${decodeURI(c)}`).join('\n') + '\n\n';
    date = new Date()
    const logName = `${__dirname}/../apps/hsStock/data/log/test${date.getTime()%100000000}.txt`;
    fs.appendFileSync(logName, `${date.toString()}: error: ${error}`);
}

try {
    if (process.env.REQUEST_METHOD === 'PUT' || process.env.REQUEST_METHOD === 'POST') {
        const app = getApp(process.env.HTTP_REFERER);
        const file = getFile(process.env.QUERY_STRING);
        const fname = `${__dirname}/../apps/${app}/data/${file}`;
        const out = fs.createWriteStream(fname);
        process.stdin.on('data', (chunk) => out.write(chunk));
    }
} catch(e) { reportError(e.toString())
console.log(`Content-type: text/html\n\n${result}\n`);