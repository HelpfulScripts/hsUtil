hsUtil 
========
[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hsutil) 
[![npm version](https://badge.fury.io/js/hsutil.svg)](https://badge.fury.io/js/hsutil)
[![docs](https://img.shields.io/badge/hsDocs-hsUtil-blue.svg)](https://helpfulscripts.github.io/hsUtil/#!/api/hsUtil/0)
[![Build Status](https://travis-ci.org/HelpfulScripts/hsUtil.svg?branch=master)](https://travis-ci.org/HelpfulScripts/hsUtil)
[![Dependencies Status](https://david-dm.org/helpfulscripts/hsutil.svg)](https://david-dm.org/helpfulscripts/hsutil)
[![codecov](https://codecov.io/gh/HelpfulScripts/hsUtil/branch/master/graph/badge.svg)](https://codecov.io/gh/HelpfulScripts/hsUtil)
[![Known Vulnerabilities](https://snyk.io/test/github/HelpfulScripts/hsUtil/badge.svg?targetFile=package.json)](https://snyk.io/test/github/HelpfulScripts/hsUtil?targetFile=package.json)
[![GitHub](https://img.shields.io/badge/GitHub-hsUtil-blue.svg)](https://github.com/helpfulscripts/hsutil)

Helpful Scripts utility functions for use in both browser and `node` environments

## Installation
`npm i hsutil`

## Provided Functions - no external dependencies:
- `Pacing` functions that 
    - paces a series of function calls to not occur faster than a preset rate not issue more unresolved calls then a preset limit.
    - provide delays and timeouts for promises.
- `CheckSum` a quick checksum implementation for small strings
- `Date` printf-style date formatting function
- `log` console.log - style logging utility supporting 
    - module-level logging and configurstion of module IDs and time stamp format
      `log.inform('passed');    // -> 20200516 11:21:54 myModule INFO passed
    - global and module-level filtering of the severity of log outputs: 
      <span style="color:#888;">debug</span>, 
      <span style="color:#080;">inform</span>, 
      <span style="color:#880;">warm</span>, 
      <span style="color:#800;">error</span>
    - optional functional call type to avoid compiling messages that will be filtered
    - colored log messages, by severity
    - colored inspect output, by indentation level

See [docs](https://helpfulscripts.github.io/hsUtil#!/api/hsUtil/0) for details
