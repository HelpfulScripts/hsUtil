
const fs = require('fs');

exports.reporter = (reportFile) => {
    return (message) => {
        date = new Date();
        const d = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
        const logName = `${__dirname}/log/${reportFile}${d}.txt`;
        fs.appendFileSync(logName, `${date.toString()}: ${message}\n`);
    }
}

