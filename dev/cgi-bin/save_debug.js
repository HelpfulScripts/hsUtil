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
//    return path.match(/\/apps\/(\S+?)(\/|$)/g)[1];
}

/** QUERY_STRING: "name=equityList.json" */
function getFile(path) {
    const i = path.indexOf('name=');
    return (i>=0)? path.slice(i+5) : undefined;
}

let envContent = process.argv.map((c,i) => `${i}: ${decodeURI(c)}`).join('\n') + '\n\n';
date = new Date()
const logName = `${__dirname}/../apps/hsStock/data/log/test${date.getTime()%100000000}.txt`;
fs.writeFileSync(logName, date.toString());

try {
    envContent += Object.keys(process.env).map(k => `${k}: ${decodeURI(process.env[k])}`).join('\n') + '\n\n'
            + `connected: ${process.connected}\n`
            + `bytesRead: ${process.stdin.bytesRead}\n`
            + `title: ${process.title}\n\n`
            ;

    if (process.env.REQUEST_METHOD === 'PUT') {
        const app = getApp(process.env.HTTP_REFERER);
        const file = getFile(process.env.QUERY_STRING);
        const fname = `${__dirname}/../apps/${app}/data/${file}`;
        envContent += `app: ${app}\n`+
                      `file:${fname}\n`;
        const out = fs.createWriteStream(fname);
        process.stdin.on('data', (chunk) => { 
            envContent += 'chunk...';
            out.write(chunk);
            envContent += 'ok\n';

            fs.appendFileSync(logName, envContent);
        });
    }
    fs.appendFileSync(logName, envContent);

} catch(e) {
    result = e.toString();
    envContent += `error: ${result}`;
    fs.appendFileSync(logName, envContent);
}
console.log(`Content-type: text/html\n\n${result}\n`);