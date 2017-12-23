#!/usr/local/bin/node

const fs        = require('fs');
const { exec }  = require('child_process');
const report    = require('./report').reporter('reg_log');


let result = '0';

try {
    process.stdin.on('data', (chunk) => {
        const u = JSON.parse(chunk);
        const user = u.username;
        const password = u.password;
        report(`registering user ${user}`);
        // using passwords2 to disable online registration for now;
        // since we use only 1 account, anyone could re-register under  
        // a known user name to gain access.
        exec(`htpasswd -b passwords2 ${user} ${password}`, 
             {cwd: '/Users/sth1pal/Sites/staging/accounts/'}, 
             (error, stdout, stderr) => {
                if (error) { report(`   error: ${error}`); }
                else { report(stderr); }
                console.log(`Content-type: text/html\n\n0\n`);
             }
        )
    }); 

} catch (err) {
    report(`   exception: ${err}`);
    console.log(`Content-type: text/html\n\nexception: ${err}\n`);
}

