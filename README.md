hsUtil 
========
[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hsutil) 
[![npm version](https://badge.fury.io/js/hsutil.svg)](https://badge.fury.io/js/hsutil)
[![docs](https://img.shields.io/badge/hsDocs-hsUtil-blue.svg)](https://helpfulscripts.github.io/hsUtil/#!/api/hsUtil/0)
[![Build Status](https://github.com/HelpfulScripts/hsUtil/workflows/CI/badge.svg)](https://github.com/HelpfulScripts/hsUtil/)
[![codecov](https://codecov.io/gh/HelpfulScripts/hsUtil/branch/master/graph/badge.svg)](https://codecov.io/gh/HelpfulScripts/hsUtil)
[![Known Vulnerabilities](https://snyk.io/test/github/HelpfulScripts/hsUtil/badge.svg?targetFile=package.json)](https://snyk.io/test/github/HelpfulScripts/hsUtil?targetFile=package.json)
[![Dependencies Status](https://david-dm.org/helpfulscripts/hsutil.svg)](https://david-dm.org/helpfulscripts/hsutil)

Helpful Scripts utility functions for use in both browser and `node` environments

## Installation
`npm i hsutil`

## Provided Functions - no external dependencies:
- `Pacing` functions that 
    - paces a series of function calls to not occur faster than a preset rate not issue more unresolved calls then a preset limit.
    - provide delays and timeouts for promises.
- `CheckSum` a quick checksum implementation for small strings
- `Date` printf-style date formatting function
- `uniquefy` removes duplicates from arrays, as defined by a selectable key
- `log` console.log - style logging utility supporting 
    - module-level logging and configuration of module IDs and time stamp format<br>
      `log.inform('passed');    // -> 20200516 11:21:54 myModule INFO passed`
    - global and module-level filtering of the severity of log outputs: debug, inform, warn, error
    - optional functional call type to avoid compiling messages that will be filtered <br>
      `log,inform(()=>`passed`);`
    - colored log messages, by severity
    - colored inspect output, by indentation level
    - configurable message-middle truncating to limit maximum message length

See [docs](https://helpfulscripts.github.io/hsUtil#!/api/hsUtil/0) for details
