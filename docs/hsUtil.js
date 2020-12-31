this.hsUtil =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bin/esm/Array.js":
/*!**************************!*\
  !*** ./bin/esm/Array.js ***!
  \**************************/
/*! namespace exports */
/*! export uniquefy [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniquefy": () => /* binding */ uniquefy
/* harmony export */ });
function uniquefy(array, key) {
    const unique = {};
    return key ? array.filter(t => unique[t['' + key]] ? false : (unique[t['' + key]] = true))
        : array.filter(t => unique['' + t] ? false : (unique['' + t] = true));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBLE1BQU0sVUFBVSxRQUFRLENBQUksS0FBUyxFQUFFLEdBQWtCO0lBQ3JELE1BQU0sTUFBTSxHQUE0QixFQUFFLENBQUM7SUFDM0MsT0FBTyxHQUFHLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQyJ9

/***/ }),

/***/ "./bin/esm/Auth.js":
/*!*************************!*\
  !*** ./bin/esm/Auth.js ***!
  \*************************/
/*! namespace exports */
/*! export Auth [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Auth": () => /* binding */ Auth
/* harmony export */ });
class Auth {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sT0FBZ0IsSUFBSTtJQUl0QixZQUFZLFFBQWUsRUFBRSxRQUFlO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FHSiJ9

/***/ }),

/***/ "./bin/esm/AuthBasic.js":
/*!******************************!*\
  !*** ./bin/esm/AuthBasic.js ***!
  \******************************/
/*! namespace exports */
/*! export AuthBasic [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthBasic": () => /* binding */ AuthBasic
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "./bin/esm/Auth.js");
;
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('RequestBasic');

class AuthBasic extends _Auth__WEBPACK_IMPORTED_MODULE_1__.Auth {
    testAuth(options) {
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}
function _btoa(str) {
    const buffer = str instanceof Buffer ? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEJhc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0F1dGhCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQW1CLE9BQU8sQ0FBQztBQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBR2hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBa0IsUUFBUSxDQUFDO0FBRzFDLE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSTtJQUMvQixRQUFRLENBQUMsT0FBZTtRQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFpQjtJQUM1QixNQUFNLE1BQU0sR0FBRyxHQUFHLFlBQVksTUFBTSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxDQUFDIn0=

/***/ }),

/***/ "./bin/esm/AuthDigest.js":
/*!*******************************!*\
  !*** ./bin/esm/AuthDigest.js ***!
  \*******************************/
/*! namespace exports */
/*! export AuthDigest [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthDigest": () => /* binding */ AuthDigest
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth */ "./bin/esm/Auth.js");
;
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('AuthDigest');


class AuthDigest extends _Auth__WEBPACK_IMPORTED_MODULE_2__.Auth {
    constructor() {
        super(...arguments);
        this.nc = 0;
    }
    updateNC() {
        let max = 99999999;
        let padding = new Array(8).join('0') + '';
        this.nc = (this.nc > max ? 1 : this.nc + 1);
        let nc = this.nc + '';
        return padding.substr(0, 8 - nc.length) + nc;
    }
    generateCNONCE(qop, cnonce) {
        if (!qop || qop === 'auth') {
            let cnonceHash = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonce ?? cnonceHash.digest('hex').substr(0, 16);
        }
        return { cnonce: cnonce, nc: this.updateNC() };
    }
    testAuth(options, response, CNonce) {
        const challenge = parseDigestResponse(response.headers['www-authenticate']);
        const ha1 = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
        const ha2 = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
        const hash = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
        ha1.update(`${this.username}:${challenge.realm}:${this.password}`);
        ha2.update(`${options.method}:${options.path}`);
        const { nc, cnonce } = this.generateCNONCE(challenge.qop, CNonce);
        hash.update(`${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`);
        let authParams = {
            realm: challenge.realm,
            username: this.username,
            uri: options.path,
            qop: challenge.qop,
            nonce: challenge.nonce,
            algorithm: "MD5",
            response: hash.digest('hex')
        };
        authParams = omitNull(authParams);
        if (cnonce) {
            authParams.nc = nc;
            authParams.cnonce = cnonce;
            log.info(`digest nc=${nc}`);
        }
        options.headers.Authorization = compileParams(authParams);
        options.headers.Accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8';
        options.headers['Accept-Encoding'] = 'gzip, deflate';
        return options;
    }
}
function omitNull(data) {
    let newObject = {};
    Object.keys(data).forEach((k) => data[k] ? newObject[k] = data[k] : '');
    return newObject;
}
function compileParams(params) {
    const putDoubleQuotes = (entry) => ['qop', 'nc'].indexOf(entry) < 0;
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}
function parseDigestResponse(digestHeader) {
    digestHeader = digestHeader.split('Digest ')[1];
    const params = {};
    digestHeader.replace(/([^,]*)/g, (...rest) => {
        const part = rest[1];
        if (part) {
            const kv = part.split('=').map((v) => v.trim());
            params[kv[0]] = kv[1].replace(/\"/g, '');
        }
        return '';
    });
    return params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aERpZ2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoRGlnZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBbUIsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFZLFFBQVEsQ0FBQztBQUcxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQWtCLFFBQVEsQ0FBQztBQU0xQyxNQUFNLE9BQU8sVUFBVyxTQUFRLElBQUk7SUFBcEM7O1FBQ0ksT0FBRSxHQUFHLENBQUMsQ0FBQztJQWtFWCxDQUFDO0lBN0RHLFFBQVE7UUFDSixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFNRCxjQUFjLENBQUMsR0FBVSxFQUFFLE1BQWM7UUFDckMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO1lBQ3hCLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxVQUFVLENBQUMs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

/***/ }),

/***/ "./bin/esm/Checksum.js":
/*!*****************************!*\
  !*** ./bin/esm/Checksum.js ***!
  \*****************************/
/*! namespace exports */
/*! export shortCheckSum [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shortCheckSum": () => /* binding */ shortCheckSum
/* harmony export */ });
function shortCheckSum(s) {
    let chk = 0x12345678;
    for (let i = 0; i < s.length; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxDQUFRO0lBQ25DLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQztJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDIn0=

/***/ }),

/***/ "./bin/esm/Date.js":
/*!*************************!*\
  !*** ./bin/esm/Date.js ***!
  \*************************/
/*! namespace exports */
/*! export date [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ms [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "date": () => /* binding */ date,
/* harmony export */   "ms": () => /* binding */ ms
/* harmony export */ });
const monthStr = [
    ['Jan', 'January'], ['Feb', 'February'], ['Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'],
    ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']
];
const dayStr = [
    ['Sun', 'Sunday'], ['Mon', 'Monday'], ['Tue', 'Tuesday'], ['Wed', 'Wednesday'], ['Thu', 'Thursday'], ['Fri', 'Friday'], ['Sat', 'Saturday']
];
function formatNumber(number, digits) {
    let r = '' + number;
    while (r.length < digits) {
        r = "0" + r;
    }
    return r;
}
function date(formatString, date = new Date()) {
    return (typeof formatString !== 'string' || isNaN(date.getTime())) ?
        'invalid' :
        formatString
            .replace(/%YYYY/g, '' + date.getFullYear())
            .replace(/%YY/g, '' + (date.getFullYear() % 100))
            .replace(/%MMMM/g, monthStr[date.getMonth()][1])
            .replace(/%MMM/g, monthStr[date.getMonth()][0])
            .replace(/%MM/g, formatNumber(date.getMonth() + 1, 2))
            .replace(/%M/g, '' + (date.getMonth() + 1))
            .replace(/%DDDD/g, dayStr[date.getDay()][1])
            .replace(/%DDD/g, dayStr[date.getDay()][0])
            .replace(/%DD/g, formatNumber(date.getDate(), 2))
            .replace(/%D/g, '' + date.getDate())
            .replace(/%hh/g, formatNumber(date.getHours(), 2))
            .replace(/%h/g, '' + date.getHours())
            .replace(/%mm/g, formatNumber(date.getMinutes(), 2))
            .replace(/%m/g, '' + date.getMinutes())
            .replace(/%ss/g, formatNumber(date.getSeconds(), 2))
            .replace(/%jjj/g, formatNumber(date.getMilliseconds(), 3))
            .replace(/%jj/g, formatNumber(date.getMilliseconds() / 10, 2))
            .replace(/%j/g, formatNumber(date.getMilliseconds() / 100, 1));
}
const ms = {
    fromMinutes: (min) => 1000 * 60 * min,
    fromHours: (h) => 1000 * 60 * 60 * h,
    fromDays: (d) => 1000 * 60 * 60 * 24 * d,
    fromWeeks: (w) => 1000 * 60 * 60 * 24 * 7 * w,
    toMinutes: (ms) => ms / (1000 * 60),
    toHours: (ms) => ms / (1000 * 60 * 60),
    toDays: (ms) => ms / (1000 * 60 * 60 * 24),
    toWeeks: (ms) => ms / (1000 * 60 * 60 * 24 * 7)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBLE1BQU0sUUFBUSxHQUFHO0lBQ2IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQzVHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztDQUFDLENBQUM7QUFHNUgsTUFBTSxNQUFNLEdBQUc7SUFDWCxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7Q0FBQyxDQUFDO0FBRzNJLFNBQVMsWUFBWSxDQUFDLE1BQWEsRUFBRSxNQUFhO0lBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxNQUFNLENBQUM7SUFDbEIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtRQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQUU7SUFDMUMsT0FB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SUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUM7SUFDL0MsU0FBUyxFQUFPLENBQUMsQ0FBUSxFQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUM7SUFDakQsU0FBUyxFQUFPLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO0lBQzVDLE9BQU8sRUFBUyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDL0MsTUFBTSxFQUFVLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDbEQsT0FBTyxFQUFTLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0NBQ3ZELENBQUMifQ==

/***/ }),

/***/ "./bin/esm/Pacing.js":
/*!***************************!*\
  !*** ./bin/esm/Pacing.js ***!
  \***************************/
/*! namespace exports */
/*! export Pace [provided] [no usage info] [missing usage info prevents renaming] */
/*! export delay [provided] [no usage info] [missing usage info prevents renaming] */
/*! export timeout [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => /* binding */ timeout,
/* harmony export */   "delay": () => /* binding */ delay,
/* harmony export */   "Pace": () => /* binding */ Pace
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");
;
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('Pacing');
function timeout(ms, ...rest) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms, ...rest); });
}
function delay(ms) {
    return (args) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(args); }, ms);
        });
    };
}
class Pace {
    constructor({ pace = 100, maxConcurrent = -1, collectionPeriod = 0 }) {
        this.maxConcurrent = -1;
        this.pace = 0;
        this.waitUntil = 0;
        this.waiting = 0;
        this.started = 0;
        this.queue = {};
        this.collectionPeriod = 0;
        this.pace = pace;
        this.maxConcurrent = maxConcurrent;
        this.collectionPeriod = collectionPeriod;
    }
    isAllowed() { return this.maxConcurrent < 0 || this.started < this.maxConcurrent; }
    setPace(ms) { this.pace = ms; }
    setMaxConcurrent(maxConcurrent) { this.maxConcurrent = maxConcurrent; }
    inQueue() { return this.waiting; }
    inProgress() { return this.started; }
    async add(fn, key) {
        const now = new Date().getTime();
        const callTime = now + Math.max(this.collectionPeriod, this.waitUntil);
        this.waitUntil += this.pace;
        let item;
        if (key && this.queue[key]) {
            item = this.queue[key];
            clearTimeout(item.timer);
            item.fn = fn;
            item.added = now;
        }
        else {
            key = key || `${now}-${Math.floor(Math.random() * 100000)}`;
            item = { fn: fn, added: now, pace: this, key: key };
            this.queue[key] = item;
            this.waiting++;
        }
        return this.resolveItem(item, callTime - now);
    }
    resolveItem(item, waitTime) {
        return new Promise((resolve, reject) => {
            const execute = async (_item) => {
                try {
                    const key = _item.key;
                    delete _item.pace.queue[key];
                    _item.pace.waiting--;
                    await belowConcurrentLimit(_item.pace);
                    _item.pace.started++;
                    const actualDelay = Date.now() - _item.added;
                    const ret = await _item.fn(actualDelay);
                    _item.pace.started--;
                    resolve(ret);
                }
                catch (e) {
                    _item.pace.started--;
                    reject(e);
                }
            };
            item.timer = setTimeout(execute, waitTime, item);
        });
    }
}
function belowConcurrentLimit(pace) {
    return new Promise(release => {
        const waitLoop = () => pace.isAllowed() ? release() : setTimeout(waitLoop, 10);
        waitLoop();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1BhY2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU8sT0FBTyxDQUFDO0FBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFTNUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxFQUFTLEVBQUUsR0FBRyxJQUFVO0lBQzVDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQWdDRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEVBQVM7SUFDM0IsT0FBTyxDQUFJLElBQU8sRUFBYSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUU7WUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUM7QUFtQkQsTUFBTSxPQUFPLElBQUk7SUFpQ2IsWUFBWSxFQUFDLElBQUksR0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixHQUFDLENBQUMsRUFBQztRQS9CcEQsa0JBQWEsR0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyQixTQUFJLEdBQWMsQ0FBQyxDQUFDO1FBRXBCLGNBQVMsR0FBUyxDQUFDLENBQUM7UUFFcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBY2pDLHFC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

/***/ }),

/***/ "./bin/esm/Request.js":
/*!****************************!*\
  !*** ./bin/esm/Request.js ***!
  \****************************/
/*! namespace exports */
/*! export Request [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Request": () => /* binding */ Request
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pacing */ "./bin/esm/Pacing.js");
/* harmony import */ var _AuthDigest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthDigest */ "./bin/esm/AuthDigest.js");
/* harmony import */ var _AuthBasic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthBasic */ "./bin/esm/AuthBasic.js");
;
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('Request');



log.messageLength = 120;
class Authenticators {
    static get(authRequest, credentials, url) {
        if (!authRequest) {
            return undefined;
        }
        else if (!credentials) {
            throw `authentication missing; call 'setCredentials' before calling 'get' for url ${url}`;
        }
        let auth = Authenticators.auths[url];
        if (!auth) {
            if (authRequest.indexOf('Digest') === 0) {
                auth = Authenticators.auths[url] = new _AuthDigest__WEBPACK_IMPORTED_MODULE_2__.AuthDigest(credentials.user, credentials.password);
            }
            else if (authRequest.indexOf('Basic') === 0) {
                auth = Authenticators.auths[url] = new _AuthBasic__WEBPACK_IMPORTED_MODULE_3__.AuthBasic(credentials.user, credentials.password);
            }
            else {
                throw `unimplemented authentication request ${authRequest} for '${url}'`;
            }
        }
        return auth;
    }
}
Authenticators.auths = {};
class Request {
    constructor() {
        this.log = log;
        this.setCredentials = (user, password) => {
            this.credentials = user === undefined ? undefined : { user: user, password: password };
        };
        this.setAuthToken = (token) => this.authToken = token;
        this.setPace = ({ pace = 50, max = 10, collectionPeriod = 100 } = { pace: null }) => {
            this.pace = (!pace || pace < 0) ? undefined : new _Pacing__WEBPACK_IMPORTED_MODULE_1__.Pace({ pace: pace, maxConcurrent: max, collectionPeriod: collectionPeriod });
        };
        this.clearPace = () => this.setPace();
        this.decode = undefined;
    }
    static addContentType(type, isText) {
        const subTypes = type.split('/');
        Request.contentTypes.push({ subTypes: subTypes, isText: isText });
    }
    async get(url, { useCached = true, headers = {} } = {}) {
        const options = this.getOptions(url, 'GET');
        return this.decodedRequest(options, useCached, headers);
    }
    async put(url, postData, { headers = {} } = {}) {
        const options = this.getOptions(url, 'PUT');
        return this.decodedRequest(options, false, headers, postData);
    }
    async post(url, postData, { headers = {} } = {}) {
        const options = this.getOptions(url, 'POST');
        return this.decodedRequest(options, false, headers, postData);
    }
    getURL(url) {
        return (typeof url === 'string') ? new URL(url, document.URL) : url;
    }
    getOptions(url, method) {
        url = this.getURL(url);
        const prefix = '';
        const options = {
            rejectUnauthorized: false,
            method: method,
            protocol: url.protocol,
            host: url.host,
            hostname: url.hostname,
            port: url.port,
            pathname: prefix + url.pathname,
            path: prefix + url.pathname + (url.search || ''),
            headers: {},
            url: `${url.protocol}//${url.host}${prefix + url.pathname + (url.search || '')}`,
        };
        if (this.authToken) {
            options.headers.AuthToken = this.authToken;
        }
        return options;
    }
    async decodedRequest(options, useCached, headers, postData) {
        const result = await this.requestOptions(options, useCached, postData);
        if (this.decode && result.response.txt && options.method === 'GET') {
            result.data = this.decode(result.data, options);
        }
        return result;
    }
    async requestOptions(options, useCached, postData) {
        let request;
        if (this.pace) {
            this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) ${options.method}-ing ${options.url}`);
            request = this.pace.add(() => this.request(options, postData), `${options.method} ${options.url}`);
        }
        else {
            request = this.request(options, postData);
        }
        const response = await request;
        if (this.pace) {
            this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) received ${options.method} ${options.url} `);
        }
        return response;
    }
    async request(options, postData) {
        try {
            const response = await this.issueRequest(options, postData);
            const auth = Authenticators.get(response.response.headers['www-authenticate'], this.credentials, options.url);
            return auth ? this.request(auth.testAuth(options, response.response)) : response;
        }
        catch (e) {
            log.error(`request: ${e}\n${Object.entries(options.headers).join('\n')}`);
            throw `error requesting ${options.url}: ${e}`;
        }
    }
    async issueRequest(options, postData) {
        return new Promise((resolve, reject) => {
            try {
                function confirmRequest(e) {
                    const headersText = xhr.getAllResponseHeaders();
                    const headers = { 'content-type': '' };
                    headersText.split('\r\n').map(h => {
                        const kv = h.split(':').map(p => p.trim());
                        if (kv[0].length) {
                            headers[kv[0]] = kv[1];
                        }
                    });
                    const contentType = this.responseType;
                    const txt = Request.isTextualContent(contentType);
                    const data = this.response;
                    const response = {
                        data: data,
                        response: {
                            txt: txt,
                            headers: headers,
                            method: options.method,
                            status: this.status,
                            statusCode: this.status,
                            statusMessage: `${this.status} ${this.statusText}`,
                            url: this.responseURL,
                        }
                    };
                    resolve(response);
                }
                const xhr = new XMLHttpRequest();
                const txt = Request.isTextualRequest(options.pathname);
                xhr.open(options.method, options.url, true);
                Object.keys(options.headers).forEach(h => xhr.setRequestHeader(h, options.headers[h]));
                xhr.responseType = txt ? 'text' : 'arraybuffer';
                xhr.onload = confirmRequest;
                xhr.send(postData ? JSON.stringify(postData) : undefined);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    static isTextualContent(contentType) {
        if (contentType === undefined) {
            log.warn(`undefined contentType; assuming binary`);
            return false;
        }
        const subTypes = contentType.split('/');
        const match = Request.contentTypes.filter(entry => entry.subTypes.every((st, i) => subTypes[i] === st));
        if (match.length > 0) {
            return match[0].isText;
        }
        else {
            log.warn(`no match found for '${contentType}'; caching as binary`);
            return false;
        }
    }
    static isTextualRequest(pathName) {
        return ['json', 'txt', 'html'].some(ext => pathName.indexOf(ext) >= 0);
    }
}
Request.contentTypes = [];
Request.decoders = {
    str2json: (data) => { try {
        return JSON.parse(data);
    }
    catch (e) {
        return {};
    } },
    html2json: undefined
};
[
    ['text', true],
    ['text/html', true],
    ['image', false],
    ['audio', false],
    ['font', false],
    ['application/json', true],
    ['application/pdf', false],
    ['application/vnd.openxmlformats-officedocument.presentationml.presentation', false],
    ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', false],
    ['application/vnd.ms-powerpoint', false],
    ['application/vnd.ms-excel', false],
    ['application/vnd.ms-excel.sheet.macroenabled.12', false],
    ['application/octet-stream', false],
].forEach(e => Request.addContentType(e[0], e[1]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQVEsY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBUyxhQUFhLENBQUM7QUFHM0MsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7QUF3RHhCLE1BQU0sY0FBYztJQUVULE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBa0IsRUFBRSxXQUF1QixFQUFFLEdBQVU7UUFDckUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNkLE9BQU8sU0FBUyxDQUFBO1NBQ25CO2FBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixNQUFNLDhFQUE4RSxHQUFHLEVBQUUsQ0FBQztTQUM3RjtRQUNELElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzdGO2lCQUFNLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLElBQUksR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVGO2lCQUFNO2dCQUNILE1BQU0sd0NBQXdDLFdBQVcsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUM1RTtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDOztBQWxCTSxvQkFBSyxHQUF1QixFQUFFLENBQUE7QUFzQnpDLE1BQU0sT0FBTyxPQUFPO0lBQXBCO1FBWWMsUUFBRyxHQUFRLEdBQUcsQ0FBQztRQWdCbEIsbUJBQWMsR0FBRyxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUcsU0FBUyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDeEYsQ0FBQyxDQUFBO1FBR00saUJBQVksR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBUW5CLFlBQU8sR0FBRyxDQUFDLEVBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFFLGdCQUFnQixHQUFDLEdBQUcsS0FBRSxFQUFDLElBQUksRUFBTSxJQUFJLEVBQUMsRUFBRSxFQUFFO1lBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO1FBQzNILENBQUMsQ0FBQTtRQUtNLGNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFRakMsV0FBTSxHQUFZLFNBQVMsQ0FBQztJQXVLdkMsQ0FBQztJQTlOVSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQVcsRUFBRSxNQUFjO1FBQ3BELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUE4RE0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFjLEVBQUUsRUFBQyxTQUFTLEdBQUMsSUFBSSxFQUFFLE9BQU8sR0FBQyxFQUFFLEVBQUMsR0FBQyxFQUFFO1FBQzVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFTTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQWMsRUFBRSxRQUFZLEVBQUUsRUFBQyxPQUFPLEdBQUMsRUFBRSxFQUFDLEdBQUMsRUFBRTtRQUMxRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQVNNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBYyxFQUFFLFFBQVksRUFBRSxFQUFDLE9BQU8sR0FBQyxFQUFFLEVBQUMsR0FBQyxFQUFFO1FBQzNELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRVMsTUFBTSxDQUFDLEdBQWM7UUFDM0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDdkUsQ0FBQztJQUVTLFVBQVUsQ0FBQyxHQUFjLEVBQUUsTUFBYTtRQUM5QyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixNQUFNLE1BQU0sR0FBNEMsRUFBRSxDQUFDO1FBQzNELE1BQU0sT0FBTyxHQUFHO1lBQ1osa0JBQWtCLEVBQUUsS0FBSztZQUN6QixNQUFNLEVBQU0sTUFBTTtZQUNsQixRQUFRLEVBQUksR0FBRyxDQUFDLFFBQVE7WUFDeEIsSUFBSSxFQUFRLEdBQUcsQ0FBQyxJQUFJO1lBQ3BCLFFBQVEsRUFBSSxHQUFHLENBQUMsUUFBUTtZQUN4QixJQUFJLEVBQVEsR0FBRyxDQUFDLElBQUk7WUFDcEIsUUFBUSxFQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUTtZQUNqQyxJQUFJLEVBQVEsTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUN0RCxPQUFPLEVBQVUsRUFBRTtZQUVuQixHQUFHLEVBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1NBQzFGLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQUU7UUFDbkUsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQWFTLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBZSxFQUFFLFNBQWlCLEVBQUUsT0FBVyxFQUFFLFFBQWE7UUFDekYsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUcsS0FBSyxFQUFFO1lBQzlELE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBUyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVTLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBZSxFQUFFLFNBQWlCLEVBQUUsUUFBYTtRQUM1RSxJQUFJLE9BQTBCLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssT0FBTyxDQUFDLE1BQU0sUUFBUSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNoSCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3RHO2FBQU07WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDN0M7UUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQUU7UUFFekksT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVTLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBZSxFQUFFLFFBQWE7UUFDbEQsSUFBSTtZQUNBLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDNUQsTUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlHLE9BQU8sSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDbkY7UUFBQyxPQUFNLENBQUMsRUFBRTtZQUNQLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUN6RSxNQUFNLG9CQUFvQixPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQUVTLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBZSxFQUFFLFFBQWE7UUFDdkQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQTRCLEVBQUUsTUFBeUIsRUFBRSxFQUFFO1lBQUcsSUFBSTtnQkFDbEYsU0FBUyxjQUFjLENBQUMsQ0FBSztvQkFDekIsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ2hELE1BQU0sT0FBTyxHQUFHLEVBQUMsY0FBYyxFQUFDLEVBQUUsRUFBQyxDQUFDO29CQUNwQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDOUIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFOzRCQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQUU7b0JBQ2pELENBQUMsQ0FBQyxDQUFBO29CQUNGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ3RDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFHbEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDM0IsTUFBTSxRQUFRLEdBQVk7d0JBQ3RCLElBQUksRUFBZ0IsSUFBSTt3QkFDeEIsUUFBUSxFQUFFOzRCQUNOLEdBQUcsRUFBYSxHQUFHOzRCQUNuQixPQUFPLEVBQVMsT0FBTzs0QkFDdkIsTUFBTSxFQUFVLE9BQU8sQ0FBQyxNQUFNOzRCQUM5QixNQUFNLEVBQVUsSUFBSSxDQUFDLE1BQU07NEJBQzNCLFVBQVUsRUFBTSxJQUFJLENBQUMsTUFBTTs0QkFDM0IsYUFBYSxFQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUNuRCxHQUFHLEVBQWEsSUFBSSxDQUFDLFdBQVc7eUJBQ25DO3FCQUNKLENBQUM7b0JBQ0YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2dCQUNELE1BQU0sR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXZELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RixHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQy9DLEdBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO2dCQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDLENBQUEsU0FBUyxDQUFDLENBQUM7YUFDekQ7WUFBQyxPQUFNLENBQUMsRUFBRTtnQkFDUCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYjtRQUFBLENBQUMsQ0FBQyxDQUFBO0lBQ1AsQ0FBQztJQUVTLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFrQjtRQUNoRCxJQUFJLFdBQVcsS0FBRyxTQUFTLEVBQUU7WUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO1lBQ2xELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDMUI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLFdBQVcsc0JBQXNCLENBQUMsQ0FBQztZQUNuRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFUyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBZTtRQUM3QyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7O0FBOU5jLG9CQUFZLEdBQTBDLEVBQUUsQ0FBQztBQUsxRCxnQkFBUSxHQUFHO0lBQ3JCLFFBQVEsRUFBRyxDQUFDLElBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSTtRQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUFDO0lBQUMsT0FBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLEVBQUUsQ0FBQTtLQUFDLENBQUEsQ0FBQztJQUNsRixTQUFTLEVBQXdCLFNBQVM7Q0FDN0MsQ0FBQztBQXlOTjtJQUNJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUNkLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztJQUNuQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDaEIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2hCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztJQUNmLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO0lBQzFCLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO0lBQzFCLENBQUMsMkVBQTJFLEVBQUUsS0FBSyxDQUFDO0lBQ3BGLENBQUMsbUVBQW1FLEVBQUUsS0FBSyxDQUFDO0lBQzVFLENBQUMsK0JBQStCLEVBQUUsS0FBSyxDQUFDO0lBQ3hDLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxDQUFDO0lBQ25DLENBQUMsZ0RBQWdELEVBQUUsS0FBSyxDQUFDO0lBQ3pELENBQUMsMEJBQTBCLEVBQUUsS0FBSyxDQUFDO0NBQ3RDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9

/***/ }),

/***/ "./bin/esm/index.js":
/*!**************************!*\
  !*** ./bin/esm/index.js ***!
  \**************************/
/*! namespace exports */
/*! export Log [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/log.js .Log */
/*! export Pace [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Pacing.js .Pace */
/*! export Request [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Request.js .Request */
/*! export date [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Date.js .date */
/*! export delay [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Pacing.js .delay */
/*! export ms [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Date.js .ms */
/*! export shortCheckSum [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Checksum.js .shortCheckSum */
/*! export timeout [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Pacing.js .timeout */
/*! export uniquefy [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Array.js .uniquefy */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pace": () => /* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.Pace,
/* harmony export */   "delay": () => /* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.delay,
/* harmony export */   "timeout": () => /* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.timeout,
/* harmony export */   "Request": () => /* reexport safe */ _Request__WEBPACK_IMPORTED_MODULE_1__.Request,
/* harmony export */   "shortCheckSum": () => /* reexport safe */ _Checksum__WEBPACK_IMPORTED_MODULE_2__.shortCheckSum,
/* harmony export */   "date": () => /* reexport safe */ _Date__WEBPACK_IMPORTED_MODULE_3__.date,
/* harmony export */   "ms": () => /* reexport safe */ _Date__WEBPACK_IMPORTED_MODULE_3__.ms,
/* harmony export */   "Log": () => /* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_4__.Log,
/* harmony export */   "uniquefy": () => /* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_5__.uniquefy
/* harmony export */ });
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pacing */ "./bin/esm/Pacing.js");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Request */ "./bin/esm/Request.js");
/* harmony import */ var _Checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checksum */ "./bin/esm/Checksum.js");
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Date */ "./bin/esm/Date.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array */ "./bin/esm/Array.js");






//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBaUIsVUFBVSxDQUFDO0FBQzVCLGNBQWlCLFdBQVcsQ0FBQztBQUM3QixjQUFpQixZQUFZLENBQUM7QUFDOUIsY0FBaUIsUUFBUSxDQUFDO0FBQzFCLGNBQWlCLE9BQU8sQ0FBQztBQUN6QixjQUFpQixTQUFTLENBQUMifQ==

/***/ }),

/***/ "./bin/esm/log.js":
/*!************************!*\
  !*** ./bin/esm/log.js ***!
  \************************/
/*! namespace exports */
/*! export Log [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Log": () => /* binding */ Log
/* harmony export */ });
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ "./bin/esm/Date.js");
;
const COLOR = {
    clear: 'color:#000; background-color:inherit; font-weight:normal;',
    bold: 'font-weight:bold;',
    dim: '',
    underscore: '',
    blink: '',
    reverse: '',
    hidden: '',
    black: 'color:#000;',
    red: 'color:#f00;',
    green: 'color:#0f0;',
    yellow: 'color:#ff0;',
    blue: 'color:#00f;',
    magenta: 'color:#f0f;',
    cyan: 'color:#0ff;',
    white: 'color:#fff;',
    darkred: 'color:#800;',
    darkgreen: 'color:#080;',
    darkyellow: 'color:#880;',
    darkblue: 'color:#008;',
    darkmagenta: 'color:#808;',
    darkcyan: 'color:#088;',
    gray: 'color:#888;',
    bgBlack: 'background-color:#000;',
    bgRed: 'background-color:#f00;',
    bgGreen: 'background-color:#0f0;',
    bgYellow: 'background-color:#ff0;',
    bgBlue: 'background-color:#00f;',
    bgMagenta: 'background-color:#f0f;',
    bgCyan: 'background-color:#0ff;',
    bgWhite: 'background-color:#fff;'
};
class Log {
    constructor(prefix) {
        this.reportLevel = undefined;
        this.reportPrefix = '';
        this.maxLength = -1;
        this.colors = true;
        this.reportPrefix = prefix;
    }
    set messageLength(max) { this.maxLength = max; }
    get messageLength() { return this.maxLength; }
    level(newLevelSym, setGlobalLevel) {
        let newLevel = Log.levels[newLevelSym] || Log.globalLevel;
        let oldLevel = this.reportLevel || Log.globalLevel;
        if (newLevelSym === undefined) {
            newLevel = oldLevel;
        }
        else if (newLevelSym === null) {
            this.reportLevel = undefined;
        }
        else if (Log.levels[newLevelSym]) {
            if (setGlobalLevel) {
                Log.globalLevel = newLevel;
            }
            else {
                this.reportLevel = newLevel;
            }
            const msg = `new ${setGlobalLevel ? 'global' : this.reportPrefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            (newLevel.sym === oldLevel.sym) ? this.debug(msg) : this.info(msg);
        }
        else {
            this.error(`unkown level ${newLevelSym}; log level remains ${oldLevel.sym}`);
        }
        return newLevel.sym;
    }
    debug(msg) { return this.out(Log.DEBUG, msg, { color: ['gray'] }); }
    transient(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'], lf: '\r' }); }
    progress(msg) { return this.out(Log.INFO, msg, { color: ['darkblue'] }); }
    info(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'] }); }
    warn(msg) { return this.out(Log.WARN, msg, { color: ['darkyellow', 'bold'] }); }
    error(msg) {
        const color = ['darkred', 'bold'];
        if (msg.message) {
            this.out(Log.ERROR, msg.message, { color: color });
            this.out(Log.ERROR, msg.stack, { color: color });
            return msg.message;
        }
        else {
            return this.out(Log.ERROR, msg, { color: color });
        }
    }
    out(lvl, msg, options) {
        let desc = Log.levels[lvl];
        const filterLevel = this.reportLevel || Log.globalLevel;
        if (desc.importance >= filterLevel.importance) {
            let line;
            switch (typeof msg) {
                case 'function':
                    line = msg();
                    break;
                case 'string':
                    line = msg;
                    break;
                case 'object':
                default: line = this.inspect(msg);
            }
            const dateStr = (0,_Date__WEBPACK_IMPORTED_MODULE_0__.date)(Log.dateFormat);
            if (msg.stack) {
                line = `${line}\n${msg.stack}`;
            }
            const header = `${dateStr} ${this.reportPrefix} ${desc.desc}`;
            this.output(options.color, header, line);
            return line + (options.lf || '');
        }
        return undefined;
    }
    output(color, header, line) {
        const lines = line.split('\n');
        if (this.maxLength > 0) {
            lines.forEach((l, i) => l.length <= this.maxLength ? '' :
                lines[i] = `${line.slice(0, this.maxLength / 2 - 2)}...${line.slice(-this.maxLength / 2 + 2)}`);
        }
        console.log(`%c${header}%c ${lines.join('\n')}`, color.map(c => COLOR[c]).join(' '), COLOR['clear']);
    }
    format(fmtStr) {
        if (fmtStr === null) {
            Log.dateFormat = Log.defDateFormat;
        }
        else if (fmtStr) {
            Log.dateFormat = fmtStr;
        }
        return Log.dateFormat;
    }
    prefix(prf) {
        if (prf) {
            this.reportPrefix = prf;
        }
        return this.reportPrefix;
    }
    config(cfg) {
        if (cfg.format !== undefined) {
            this.format(cfg.format);
        }
        if (cfg.level !== undefined) {
            this.level(cfg.level);
        }
        if (cfg.colors !== undefined) {
            this.colors = cfg.colors;
        }
    }
    inspect(msg, { depth = -1, indent = '   ', colors = Log.INDENT_COLORS } = { depth: 0, indent: '   ', colors: Log.INDENT_COLORS }) {
        function _inspect(msg, depth, level, currIndent) {
            if (msg === null) {
                return 'null';
            }
            if (msg === undefined) {
                return 'undefined';
            }
            if (typeof msg === 'function') {
                return 'function';
            }
            if (typeof msg === 'string') {
                return `'${msg}'`;
            }
            if (typeof msg === 'object') {
                if (depth < 0) {
                    return (msg.length === undefined) ? '{...}' : '[...]';
                }
                if (msg.map !== undefined) {
                    return `[${msg.map((e) => (e === undefined) ? '' : _inspect(e, depth - 1, level + 1, currIndent)).join(', ')}]`;
                }
                const [prefix, postfix, lf, postIndent] = log.getPrePostfix(indent, level, currIndent, colors);
                return `{${lf}` + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${_inspect(msg[k], depth - 1, level + 1, currIndent + indent)}`).join(`,${lf}`) + `${lf}${postIndent}}`;
            }
            return msg.toString();
        }
        const log = this;
        return _inspect(msg, (depth !== undefined && depth !== null && depth >= 0) ? depth : 999, 0, '');
    }
    getPrePostfix(indent, level, currIndent, colors) {
        let cstart = '', cstop = '', lf = '\n';
        if (colors) {
            indent = indent.replace(/ /g, '&nbsp;');
            currIndent = currIndent.replace(/ /g, '&nbsp;');
            const color = COLOR[colors[level % colors.length]] || colors[level % colors.length];
            cstart = `<b><span style='${color}'>`;
            cstop = `</span></b>`;
            lf = '<br>';
        }
        return [`${currIndent}${indent}${cstart}`, `${cstop}`, colors ? '<br>' : '\n', currIndent];
    }
}
Log.INDENT_COLORS = ['darkblue', 'darkgreen', 'darkred', 'darkcyan', 'darkyellow', 'darkmagenta'];
Log.defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
Log.dateFormat = Log.defDateFormat;
Log.DEBUG = 'DEBUG';
Log.INFO = 'INFO';
Log.WARN = 'WARN';
Log.ERROR = 'ERROR';
Log.levels = {
    [Log.DEBUG]: { importance: 0, sym: Log.DEBUG, desc: 'DEBUG' },
    [Log.INFO]: { importance: 1, sym: Log.INFO, desc: 'INFO' },
    [Log.WARN]: { importance: 2, sym: Log.WARN, desc: 'WARN' },
    [Log.ERROR]: { importance: 3, sym: Log.ERROR, desc: 'ERROR' }
};
Log.log = new Log('');
Log.globalLevel = Log.levels[Log.INFO];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRkEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUk5QixNQUFNLEtBQUssR0FBRztJQUNWLEtBQUssRUFBTywyREFBMkQ7SUFFdkUsSUFBSSxFQUFRLG1CQUFtQjtJQUMvQixHQUFHLEVBQVMsRUFBRTtJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsS0FBSyxFQUFPLEVBQUU7SUFDZCxPQUFPLEVBQUssRUFBRTtJQUNkLE1BQU0sRUFBTSxFQUFFO0lBRWQsS0FBSyxFQUFPLGFBQWE7SUFDekIsR0FBRyxFQUFTLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFDekIsTUFBTSxFQUFNLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFFekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsU0FBUyxFQUFHLGFBQWE7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsV0FBVyxFQUFDLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFFekIsT0FBTyxFQUFLLHdCQUF3QjtJQUNwQyxLQUFLLEVBQU8sd0JBQXdCO0lBQ3BDLE9BQU8sRUFBSyx3QkFBd0I7SUFDcEMsUUFBUSxFQUFJLHdCQUF3QjtJQUNwQyxNQUFNLEVBQU0sd0JBQXdCO0lBQ3BDLFNBQVMsRUFBRyx3QkFBd0I7SUFDcEMsTUFBTSxFQUFNLHdCQUF3QjtJQUNwQyxPQUFPLEVBQUssd0JBQXdCO0NBQ3ZDLENBQUM7QUFlRixNQUFNLE9BQU8sR0FBRztJQXFDWixZQUFZLE1BQWE7UUFMZixnQkFBVyxHQUFnQixTQUFTLENBQUM7UUFDckMsaUJBQVksR0FBSSxFQUFF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

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = (function() { return this["crypto"]; }());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./bin/esm/index.js");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0FycmF5LmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9lc20vQXV0aC5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0F1dGhCYXNpYy5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0F1dGhEaWdlc3QuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9DaGVja3N1bS5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0RhdGUuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9QYWNpbmcuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9SZXF1ZXN0LmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9sb2cuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hzVXRpbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0MsQ0FBNEI7QUFDNUIsZ0JBQWdCLHFDQUFH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QUFDQTtBQUNBLDJDQUEyQyxtalc7Ozs7Ozs7Ozs7Ozs7QUN2TTNDLDhCQUE4Qix1QkFBdUIsRUFBRSxJOzs7Ozs7VUNBdkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImhzVXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB1bmlxdWVmeShhcnJheSwga2V5KSB7XG4gICAgY29uc3QgdW5pcXVlID0ge307XG4gICAgcmV0dXJuIGtleSA/IGFycmF5LmZpbHRlcih0ID0+IHVuaXF1ZVt0WycnICsga2V5XV0gPyBmYWxzZSA6ICh1bmlxdWVbdFsnJyArIGtleV1dID0gdHJ1ZSkpXG4gICAgICAgIDogYXJyYXkuZmlsdGVyKHQgPT4gdW5pcXVlWycnICsgdF0gPyBmYWxzZSA6ICh1bmlxdWVbJycgKyB0XSA9IHRydWUpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYSnlZWGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZRWEp5WVhrdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJaME5CTEUxQlFVMHNWVUZCVlN4UlFVRlJMRU5CUVVrc1MwRkJVeXhGUVVGRkxFZEJRV3RDTzBsQlEzSkVMRTFCUVUwc1RVRkJUU3hIUVVFMFFpeEZRVUZGTEVOQlFVTTdTVUZETTBNc1QwRkJUeXhIUVVGSExFTkJRVUVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROMFVzUTBGQlF5SjkiLCJleHBvcnQgY2xhc3MgQXV0aCB7XG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYVjBhQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OUJkWFJvTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVZEJMRTFCUVUwc1QwRkJaMElzU1VGQlNUdEpRVWwwUWl4WlFVRlpMRkZCUVdVc1JVRkJSU3hSUVVGbE8xRkJRM2hETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRemRDTEVOQlFVTTdRMEZIU2lKOSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ1JlcXVlc3RCYXNpYycpO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4vQXV0aCc7XG5leHBvcnQgY2xhc3MgQXV0aEJhc2ljIGV4dGVuZHMgQXV0aCB7XG4gICAgdGVzdEF1dGgob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgX2J0b2EoYCR7dGhpcy51c2VybmFtZX06JHt0aGlzLnBhc3N3b3JkfWApO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5mdW5jdGlvbiBfYnRvYShzdHIpIHtcbiAgICBjb25zdCBidWZmZXIgPSBzdHIgaW5zdGFuY2VvZiBCdWZmZXIgPyBzdHIgOiBCdWZmZXIuZnJvbShzdHIudG9TdHJpbmcoKSwgJ2JpbmFyeScpO1xuICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWMGFFSmhjMmxqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMEYxZEdoQ1lYTnBZeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVcxQ0xFOUJRVThzUTBGQlF6dEJRVUZITEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzBGQlIyaEdMRTlCUVU4c1JVRkJSU3hKUVVGSkxFVkJRVVVzVFVGQmEwSXNVVUZCVVN4RFFVRkRPMEZCUnpGRExFMUJRVTBzVDBGQlR5eFRRVUZWTEZOQlFWRXNTVUZCU1R0SlFVTXZRaXhSUVVGUkxFTkJRVU1zVDBGQlpUdFJRVU53UWl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUjBGQlJ5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMFJpeFBRVUZQTEU5QlFVOHNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wTkJRMG83UVVGRlJDeFRRVUZUTEV0QlFVc3NRMEZCUXl4SFFVRnBRanRKUVVNMVFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4SFFVRkhMRmxCUVZrc1RVRkJUU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRMnhHTEU5QlFVOHNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU55UXl4RFFVRkRJbjA9IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnQXV0aERpZ2VzdCcpO1xuaW1wb3J0IHsgY3JlYXRlSGFzaCB9IGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi9BdXRoJztcbmV4cG9ydCBjbGFzcyBBdXRoRGlnZXN0IGV4dGVuZHMgQXV0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmMgPSAwO1xuICAgIH1cbiAgICB1cGRhdGVOQygpIHtcbiAgICAgICAgbGV0IG1heCA9IDk5OTk5OTk5O1xuICAgICAgICBsZXQgcGFkZGluZyA9IG5ldyBBcnJheSg4KS5qb2luKCcwJykgKyAnJztcbiAgICAgICAgdGhpcy5uYyA9ICh0aGlzLm5jID4gbWF4ID8gMSA6IHRoaXMubmMgKyAxKTtcbiAgICAgICAgbGV0IG5jID0gdGhpcy5uYyArICcnO1xuICAgICAgICByZXR1cm4gcGFkZGluZy5zdWJzdHIoMCwgOCAtIG5jLmxlbmd0aCkgKyBuYztcbiAgICB9XG4gICAgZ2VuZXJhdGVDTk9OQ0UocW9wLCBjbm9uY2UpIHtcbiAgICAgICAgaWYgKCFxb3AgfHwgcW9wID09PSAnYXV0aCcpIHtcbiAgICAgICAgICAgIGxldCBjbm9uY2VIYXNoID0gY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgICAgICBjbm9uY2VIYXNoLnVwZGF0ZShNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KSk7XG4gICAgICAgICAgICBjbm9uY2UgPSBjbm9uY2UgPz8gY25vbmNlSGFzaC5kaWdlc3QoJ2hleCcpLnN1YnN0cigwLCAxNik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY25vbmNlOiBjbm9uY2UsIG5jOiB0aGlzLnVwZGF0ZU5DKCkgfTtcbiAgICB9XG4gICAgdGVzdEF1dGgob3B0aW9ucywgcmVzcG9uc2UsIENOb25jZSkge1xuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBwYXJzZURpZ2VzdFJlc3BvbnNlKHJlc3BvbnNlLmhlYWRlcnNbJ3d3dy1hdXRoZW50aWNhdGUnXSk7XG4gICAgICAgIGNvbnN0IGhhMSA9IGNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICBjb25zdCBoYTIgPSBjcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgY29uc3QgaGFzaCA9IGNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICBoYTEudXBkYXRlKGAke3RoaXMudXNlcm5hbWV9OiR7Y2hhbGxlbmdlLnJlYWxtfToke3RoaXMucGFzc3dvcmR9YCk7XG4gICAgICAgIGhhMi51cGRhdGUoYCR7b3B0aW9ucy5tZXRob2R9OiR7b3B0aW9ucy5wYXRofWApO1xuICAgICAgICBjb25zdCB7IG5jLCBjbm9uY2UgfSA9IHRoaXMuZ2VuZXJhdGVDTk9OQ0UoY2hhbGxlbmdlLnFvcCwgQ05vbmNlKTtcbiAgICAgICAgaGFzaC51cGRhdGUoYCR7aGExLmRpZ2VzdCgnaGV4Jyl9OiR7Y2hhbGxlbmdlLm5vbmNlfToke25jfToke2Nub25jZX06JHtjaGFsbGVuZ2UucW9wfToke2hhMi5kaWdlc3QoJ2hleCcpfWApO1xuICAgICAgICBsZXQgYXV0aFBhcmFtcyA9IHtcbiAgICAgICAgICAgIHJlYWxtOiBjaGFsbGVuZ2UucmVhbG0sXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIHVyaTogb3B0aW9ucy5wYXRoLFxuICAgICAgICAgICAgcW9wOiBjaGFsbGVuZ2UucW9wLFxuICAgICAgICAgICAgbm9uY2U6IGNoYWxsZW5nZS5ub25jZSxcbiAgICAgICAgICAgIGFsZ29yaXRobTogXCJNRDVcIixcbiAgICAgICAgICAgIHJlc3BvbnNlOiBoYXNoLmRpZ2VzdCgnaGV4JylcbiAgICAgICAgfTtcbiAgICAgICAgYXV0aFBhcmFtcyA9IG9taXROdWxsKGF1dGhQYXJhbXMpO1xuICAgICAgICBpZiAoY25vbmNlKSB7XG4gICAgICAgICAgICBhdXRoUGFyYW1zLm5jID0gbmM7XG4gICAgICAgICAgICBhdXRoUGFyYW1zLmNub25jZSA9IGNub25jZTtcbiAgICAgICAgICAgIGxvZy5pbmZvKGBkaWdlc3QgbmM9JHtuY31gKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGNvbXBpbGVQYXJhbXMoYXV0aFBhcmFtcyk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycy5BY2NlcHQgPSAndGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWw7cT0wLjksaW1hZ2Uvd2VicCwqLyo7cT0wLjgnO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ0FjY2VwdC1FbmNvZGluZyddID0gJ2d6aXAsIGRlZmxhdGUnO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5mdW5jdGlvbiBvbWl0TnVsbChkYXRhKSB7XG4gICAgbGV0IG5ld09iamVjdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IGRhdGFba10gPyBuZXdPYmplY3Rba10gPSBkYXRhW2tdIDogJycpO1xuICAgIHJldHVybiBuZXdPYmplY3Q7XG59XG5mdW5jdGlvbiBjb21waWxlUGFyYW1zKHBhcmFtcykge1xuICAgIGNvbnN0IHB1dERvdWJsZVF1b3RlcyA9IChlbnRyeSkgPT4gWydxb3AnLCAnbmMnXS5pbmRleE9mKGVudHJ5KSA8IDA7XG4gICAgbGV0IHBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSBpbiBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbaV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IGkgKyAnPScgKyAocHV0RG91YmxlUXVvdGVzKGkpID8gYFwiJHtwYXJhbXNbaV19XCJgIDogcGFyYW1zW2ldKTtcbiAgICAgICAgICAgIHBhcnRzLnB1c2gocGFyYW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnRGlnZXN0ICcgKyBwYXJ0cy5qb2luKCcsJyk7XG59XG5mdW5jdGlvbiBwYXJzZURpZ2VzdFJlc3BvbnNlKGRpZ2VzdEhlYWRlcikge1xuICAgIGRpZ2VzdEhlYWRlciA9IGRpZ2VzdEhlYWRlci5zcGxpdCgnRGlnZXN0ICcpWzFdO1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGRpZ2VzdEhlYWRlci5yZXBsYWNlKC8oW14sXSopL2csICguLi5yZXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSByZXN0WzFdO1xuICAgICAgICBpZiAocGFydCkge1xuICAgICAgICAgICAgY29uc3Qga3YgPSBwYXJ0LnNwbGl0KCc9JykubWFwKCh2KSA9PiB2LnRyaW0oKSk7XG4gICAgICAgICAgICBwYXJhbXNba3ZbMF1dID0ga3ZbMV0ucmVwbGFjZSgvXFxcIi9nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFYwYUVScFoyVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OUJkWFJvUkdsblpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCYlVJc1QwRkJUeXhEUVVGRE8wRkJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03UVVGRE9VVXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGWkxGRkJRVkVzUTBGQlF6dEJRVWN4UXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRV3RDTEZGQlFWRXNRMEZCUXp0QlFVMHhReXhOUVVGTkxFOUJRVThzVlVGQlZ5eFRRVUZSTEVsQlFVazdTVUZCY0VNN08xRkJRMGtzVDBGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFXdEZXQ3hEUVVGRE8wbEJOMFJITEZGQlFWRTdVVUZEU2l4SlFVRkpMRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRGJrSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0xUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTjBRaXhQUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGTlJDeGpRVUZqTEVOQlFVTXNSMEZCVlN4RlFVRkZMRTFCUVdNN1VVRkRja01zU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4SFFVRkhMRXRCUVVzc1RVRkJUU3hGUVVGRk8xbEJRM2hDTEVsQlFVa3NWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU51UXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hKUVVGSkxGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTTNSRHRSUVVORUxFOUJRVThzUlVGQlF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVTXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJVVVFzVVVGQlVTeERRVUZETEU5QlFXVXNSVUZCUlN4UlFVRjNRaXhGUVVGRkxFMUJRV003VVVGRE9VUXNUVUZCVFN4VFFVRlRMRWRCUVU4c2JVSkJRVzFDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRVlzVFVGQlRTeEhRVUZITEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRemxDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU01UWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETDBJc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOdVJTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOb1JDeE5RVUZOTEVWQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU5vUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hUUVVGVExFTkJRVU1zUzBGQlN5eEpRVUZKTEVWQlFVVXNTVUZCU1N4TlFVRk5MRWxCUVVrc1UwRkJVeXhEUVVGRExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVWMzUnl4SlFVRkpMRlZCUVZVc1IwRkJUenRaUVVOcVFpeExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRXRCUVVzN1dVRkRkRUlzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJPMWxCUTNaQ0xFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1R0WlFVTnFRaXhIUVVGSExFVkJRVVVzVTBGQlV5eERRVUZETEVkQlFVYzdXVUZEYkVJc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eExRVUZMTzFsQlEzUkNMRk5CUVZNc1JVRkJSU3hMUVVGTE8xbEJRMmhDTEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dFRRVU12UWl4RFFVRkRPMUZCUlVZc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVVnNReXhKUVVGSkxFMUJRVTBzUlVGQlJUdFpRVU5TTEZWQlFWVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMjVDTEZWQlFWVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJRek5DTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZCTzFOQlF6bENPMUZCUlVRc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRekZFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExEUkZRVUUwUlN4RFFVRkJPMUZCUTNKSExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUjBGQlJ5eGxRVUZsTEVOQlFVTTdVVUZEY2tRc1QwRkJUeXhQUVVGUExFTkJRVU03U1VGRGJrSXNRMEZCUXp0RFFVTktPMEZCUlVRc1UwRkJVeXhSUVVGUkxFTkJRVU1zU1VGQlVUdEpRVU4wUWl4SlFVRkpMRk5CUVZNc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGJrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZET1VVc1QwRkJUeXhUUVVGVExFTkJRVU03UVVGRGNrSXNRMEZCUXp0QlFVMUVMRk5CUVZNc1lVRkJZU3hEUVVGRExFMUJRVlU3U1VGRE4wSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1EwRkJReXhMUVVGWkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla1VzU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJZc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVWQlFVVTdVVUZEYkVJc1NVRkJTU3hQUVVGUExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VlFVRlZMRVZCUVVVN1dVRkRha01zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTnlRanRMUVVOS08wbEJRMFFzVDBGQlR5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4RFFVRkRPMEZCUjBRc1UwRkJVeXh0UWtGQmJVSXNRMEZCUXl4WlFVRnRRanRKUVVNMVF5eFpRVUZaTEVkQlFVY3NXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEYkVJc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVdFc1JVRkJSU3hGUVVGRk8xRkJRMnhFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UWl4SlFVRkpMRWxCUVVrc1JVRkJSVHRaUVVOT0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJSQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRE5VTTdVVUZEUkN4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVOa0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4TlFVRk5MRU5CUVVNN1FVRkRiRUlzUTBGQlF5SjkiLCJleHBvcnQgZnVuY3Rpb24gc2hvcnRDaGVja1N1bShzKSB7XG4gICAgbGV0IGNoayA9IDB4MTIzNDU2Nzg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoayArPSAocy5jaGFyQ29kZUF0KGkpICogKGkgKyAxKSk7XG4gICAgfVxuICAgIHJldHVybiAoY2hrICYgMHhmZmZmZmZmZikudG9TdHJpbmcoMTYpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJobFkydHpkVzB1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZRMmhsWTJ0emRXMHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCVVVNc1RVRkJUU3hWUVVGVkxHRkJRV0VzUTBGQlF5eERRVUZSTzBsQlEyNURMRWxCUVVrc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF6dEpRVU55UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU16UWl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEZEVNN1NVRkRSQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU14UXl4RFFVRkRJbjA9IiwiY29uc3QgbW9udGhTdHIgPSBbXG4gICAgWydKYW4nLCAnSmFudWFyeSddLCBbJ0ZlYicsICdGZWJydWFyeSddLCBbJ01hcicsICdNYXJjaCddLCBbJ0FwcicsICdBcHJpbCddLCBbJ01heScsICdNYXknXSwgWydKdW4nLCAnSnVuZSddLFxuICAgIFsnSnVsJywgJ0p1bHknXSwgWydBdWcnLCAnQXVndXN0J10sIFsnU2VwJywgJ1NlcHRlbWJlciddLCBbJ09jdCcsICdPY3RvYmVyJ10sIFsnTm92JywgJ05vdmVtYmVyJ10sIFsnRGVjJywgJ0RlY2VtYmVyJ11cbl07XG5jb25zdCBkYXlTdHIgPSBbXG4gICAgWydTdW4nLCAnU3VuZGF5J10sIFsnTW9uJywgJ01vbmRheSddLCBbJ1R1ZScsICdUdWVzZGF5J10sIFsnV2VkJywgJ1dlZG5lc2RheSddLCBbJ1RodScsICdUaHVyc2RheSddLCBbJ0ZyaScsICdGcmlkYXknXSwgWydTYXQnLCAnU2F0dXJkYXknXVxuXTtcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXIsIGRpZ2l0cykge1xuICAgIGxldCByID0gJycgKyBudW1iZXI7XG4gICAgd2hpbGUgKHIubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgICAgIHIgPSBcIjBcIiArIHI7XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGUoZm9ybWF0U3RyaW5nLCBkYXRlID0gbmV3IERhdGUoKSkge1xuICAgIHJldHVybiAodHlwZW9mIGZvcm1hdFN0cmluZyAhPT0gJ3N0cmluZycgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSA/XG4gICAgICAgICdpbnZhbGlkJyA6XG4gICAgICAgIGZvcm1hdFN0cmluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWVlZL2csICcnICsgZGF0ZS5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWS9nLCAnJyArIChkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDApKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNb250aCgpICsgMSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU0vZywgJycgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVERC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXREYXRlKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEL2csICcnICsgZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWhoL2csIGZvcm1hdE51bWJlcihkYXRlLmdldEhvdXJzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoL2csICcnICsgZGF0ZS5nZXRIb3VycygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtbS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtL2csICcnICsgZGF0ZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJXNzL2csIGZvcm1hdE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMykpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwLCAxKSk7XG59XG5leHBvcnQgY29uc3QgbXMgPSB7XG4gICAgZnJvbU1pbnV0ZXM6IChtaW4pID0+IDEwMDAgKiA2MCAqIG1pbixcbiAgICBmcm9tSG91cnM6IChoKSA9PiAxMDAwICogNjAgKiA2MCAqIGgsXG4gICAgZnJvbURheXM6IChkKSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogZCxcbiAgICBmcm9tV2Vla3M6ICh3KSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogNyAqIHcsXG4gICAgdG9NaW51dGVzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCksXG4gICAgdG9Ib3VyczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCksXG4gICAgdG9EYXlzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpLFxuICAgIHRvV2Vla3M6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5RVlYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVdWQkxFMUJRVTBzVVVGQlVTeEhRVUZITzBsQlEySXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETzBsQlF6VkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXp0RFFVRkRMRU5CUVVNN1FVRkhOVWdzVFVGQlRTeE5RVUZOTEVkQlFVYzdTVUZEV0N4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hYUVVGWExFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU03UTBGQlF5eERRVUZETzBGQlJ6TkpMRk5CUVZNc1dVRkJXU3hEUVVGRExFMUJRV0VzUlVGQlJTeE5RVUZoTzBsQlF6bERMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSVUZCUlR0UlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzB0QlFVVTdTVUZETVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRFlpeERRVUZETzBGQlkwUXNUVUZCVFN4VlFVRlZMRWxCUVVrc1EwRkJReXhaUVVGdFFpeEZRVUZGTEVsQlFVa3NSMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSVHRKUVVOeVJDeFBRVUZQTEVOQlFVTXNUMEZCVHl4WlFVRlpMRXRCUVVzc1VVRkJVU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFVXNVMEZCVXl4RFFVRkJMRU5CUVVNN1VVRkRWaXhaUVVGWk8yRkJRMUFzVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRWRCUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzJGQlEzaERMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlF6bERMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaEVMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaEVMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJReXhEUVVGRExFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEY0VRc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlNTeEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZUVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETlVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETlVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEycEVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWtzUlVGQlJTeEhRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRoUVVOdVF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRiRVFzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUnl4RlFVRkZMRWRCUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzJGQlEyNURMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53UkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGSkxFVkJRVVVzUjBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1lVRkRkRU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNCRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTXhSQ3hQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFZEJRVU1zUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpWRUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVY3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUjBGQlF5eEhRVUZITEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVONlJTeERRVUZETzBGQlIwUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSE8wbEJRMlFzVjBGQlZ5eEZRVUZMTEVOQlFVTXNSMEZCVlN4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVkQlFVYzdTVUZETTBNc1UwRkJVeXhGUVVGUExFTkJRVU1zUTBGQlVTeEZRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eERRVUZETzBsQlF6VkRMRkZCUVZFc1JVRkJVU3hEUVVGRExFTkJRVkVzUlVGQlNTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTTdTVUZETDBNc1UwRkJVeXhGUVVGUExFTkJRVU1zUTBGQlVTeEZRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SFFVRkRMRU5CUVVNN1NVRkRha1FzVTBGQlV5eEZRVUZQTEVOQlFVTXNSVUZCVXl4RlFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4RFFVRkRPMGxCUXpWRExFOUJRVThzUlVGQlV5eERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRMME1zVFVGQlRTeEZRVUZWTEVOQlFVTXNSVUZCVXl4RlFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFTkJRVU03U1VGRGJFUXNUMEZCVHl4RlFVRlRMRU5CUVVNc1JVRkJVeXhGUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4RFFVRkRPME5CUTNaRUxFTkJRVU1pZlE9PSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ1BhY2luZycpO1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXQobXMsIC4uLnJlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyBzZXRUaW1lb3V0KHJlamVjdCwgbXMsIC4uLnJlc3QpOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKGFyZ3MpOyB9LCBtcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQgY2xhc3MgUGFjZSB7XG4gICAgY29uc3RydWN0b3IoeyBwYWNlID0gMTAwLCBtYXhDb25jdXJyZW50ID0gLTEsIGNvbGxlY3Rpb25QZXJpb2QgPSAwIH0pIHtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gLTE7XG4gICAgICAgIHRoaXMucGFjZSA9IDA7XG4gICAgICAgIHRoaXMud2FpdFVudGlsID0gMDtcbiAgICAgICAgdGhpcy53YWl0aW5nID0gMDtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gMDtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IHt9O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25QZXJpb2QgPSAwO1xuICAgICAgICB0aGlzLnBhY2UgPSBwYWNlO1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSBtYXhDb25jdXJyZW50O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25QZXJpb2QgPSBjb2xsZWN0aW9uUGVyaW9kO1xuICAgIH1cbiAgICBpc0FsbG93ZWQoKSB7IHJldHVybiB0aGlzLm1heENvbmN1cnJlbnQgPCAwIHx8IHRoaXMuc3RhcnRlZCA8IHRoaXMubWF4Q29uY3VycmVudDsgfVxuICAgIHNldFBhY2UobXMpIHsgdGhpcy5wYWNlID0gbXM7IH1cbiAgICBzZXRNYXhDb25jdXJyZW50KG1heENvbmN1cnJlbnQpIHsgdGhpcy5tYXhDb25jdXJyZW50ID0gbWF4Q29uY3VycmVudDsgfVxuICAgIGluUXVldWUoKSB7IHJldHVybiB0aGlzLndhaXRpbmc7IH1cbiAgICBpblByb2dyZXNzKCkgeyByZXR1cm4gdGhpcy5zdGFydGVkOyB9XG4gICAgYXN5bmMgYWRkKGZuLCBrZXkpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGNhbGxUaW1lID0gbm93ICsgTWF0aC5tYXgodGhpcy5jb2xsZWN0aW9uUGVyaW9kLCB0aGlzLndhaXRVbnRpbCk7XG4gICAgICAgIHRoaXMud2FpdFVudGlsICs9IHRoaXMucGFjZTtcbiAgICAgICAgbGV0IGl0ZW07XG4gICAgICAgIGlmIChrZXkgJiYgdGhpcy5xdWV1ZVtrZXldKSB7XG4gICAgICAgICAgICBpdGVtID0gdGhpcy5xdWV1ZVtrZXldO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGl0ZW0udGltZXIpO1xuICAgICAgICAgICAgaXRlbS5mbiA9IGZuO1xuICAgICAgICAgICAgaXRlbS5hZGRlZCA9IG5vdztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IGtleSB8fCBgJHtub3d9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKX1gO1xuICAgICAgICAgICAgaXRlbSA9IHsgZm46IGZuLCBhZGRlZDogbm93LCBwYWNlOiB0aGlzLCBrZXk6IGtleSB9O1xuICAgICAgICAgICAgdGhpcy5xdWV1ZVtrZXldID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMud2FpdGluZysrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVJdGVtKGl0ZW0sIGNhbGxUaW1lIC0gbm93KTtcbiAgICB9XG4gICAgcmVzb2x2ZUl0ZW0oaXRlbSwgd2FpdFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGUgPSBhc3luYyAoX2l0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBfaXRlbS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfaXRlbS5wYWNlLnF1ZXVlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uud2FpdGluZy0tO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBiZWxvd0NvbmN1cnJlbnRMaW1pdChfaXRlbS5wYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS5zdGFydGVkKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdHVhbERlbGF5ID0gRGF0ZS5ub3coKSAtIF9pdGVtLmFkZGVkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBfaXRlbS5mbihhY3R1YWxEZWxheSk7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uuc3RhcnRlZC0tO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uuc3RhcnRlZC0tO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGl0ZW0udGltZXIgPSBzZXRUaW1lb3V0KGV4ZWN1dGUsIHdhaXRUaW1lLCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYmVsb3dDb25jdXJyZW50TGltaXQocGFjZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZWxlYXNlID0+IHtcbiAgICAgICAgY29uc3Qgd2FpdExvb3AgPSAoKSA9PiBwYWNlLmlzQWxsb3dlZCgpID8gcmVsZWFzZSgpIDogc2V0VGltZW91dCh3YWl0TG9vcCwgMTApO1xuICAgICAgICB3YWl0TG9vcCgpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUdGamFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwxQmhZMmx1Wnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkpRU3hQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVOHNUMEZCVHl4RFFVRkRPMEZCUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRlROVVFzVFVGQlRTeFZRVUZWTEU5QlFVOHNRMEZCUXl4RlFVRlRMRVZCUVVVc1IwRkJSeXhKUVVGVk8wbEJRelZETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGJFWXNRMEZCUXp0QlFXZERSQ3hOUVVGTkxGVkJRVlVzUzBGQlN5eERRVUZETEVWQlFWTTdTVUZETTBJc1QwRkJUeXhEUVVGSkxFbEJRVThzUlVGQllTeEZRVUZGTzFGQlF6ZENMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZ6UWl4RlFVRkZMRVZCUVVVN1dVRkRNVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1F5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGdFFrUXNUVUZCVFN4UFFVRlBMRWxCUVVrN1NVRnBRMklzV1VGQldTeEZRVUZETEVsQlFVa3NSMEZCUXl4SFFVRkhMRVZCUVVVc1lVRkJZU3hIUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEdkQ1FVRm5RaXhIUVVGRExFTkJRVU1zUlVGQlF6dFJRUzlDY0VRc2EwSkJRV0VzUjBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVnlRaXhUUVVGSkxFZEJRV01zUTBGQlF5eERRVUZETzFGQlJYQkNMR05CUVZNc1IwRkJVeXhEUVVGRExFTkJRVU03VVVGRmNFSXNXVUZCVHl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVVWd1FpeFpRVUZQTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlhCQ0xGVkJRVXNzUjBGQmQwSXNSVUZCUlN4RFFVRkRPMUZCWTJwRExIRkNRVUZuUWl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVZGNFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOcVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJRenRSUVVOdVF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1NVRkROME1zUTBGQlF6dEpRVzVDVFN4VFFVRlRMRXRCUVdFc1QwRkJUeXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCYzBJelJpeFBRVUZQTEVOQlFVTXNSVUZCVXl4SlFVRlRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVXpReXhuUWtGQlowSXNRMEZCUXl4aFFVRnZRaXhKUVVGVExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVWdVJpeFBRVUZQTEV0QlFXVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVUxUXl4VlFVRlZMRXRCUVZrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFWRnVSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFXZENMRVZCUVVVc1IwRkJWenRSUVVOdVF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEycERMRTFCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGRrVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETzFGQlJUVkNMRWxCUVVrc1NVRkJVeXhEUVVGRE8xRkJRMlFzU1VGQlNTeEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU40UWl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVMEZEY0VJN1lVRkJUVHRaUVVOSUxFZEJRVWNzUjBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU14UkN4SlFVRkpMRWRCUVVjc1JVRkJReXhGUVVGRkxFVkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVTXNSMEZCUnl4RlFVRkRMRU5CUVVNN1dVRkRPVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGRrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xTkJRMnhDTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVFN1NVRkRha1FzUTBGQlF6dEpRVVZQTEZkQlFWY3NRMEZCUXl4SlFVRlRMRVZCUVVVc1VVRkJaVHRSUVVNeFF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlEyNURMRTFCUVUwc1QwRkJUeXhIUVVGSExFdEJRVXNzUlVGQlJTeExRVUZWTEVWQlFVVXNSVUZCUlR0blFrRkJSeXhKUVVGSk8yOUNRVU40UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETzI5Q1FVTjBRaXhQUVVGUExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzI5Q1FVTnlRaXhOUVVGTkxHOUNRVUZ2UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZEZGtNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0dlFrRkRja0lzVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTTdiMEpCUXpORExFMUJRVTBzUjBGQlJ5eEhRVUZITEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dHZRa0ZEZUVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0dlFrRkRja0lzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOb1FqdG5Ra0ZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHR2UWtGRFVDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU55UWl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEySTdXVUZCUVN4RFFVRkRMRU5CUVVFN1dVRkhSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzSkVMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dERRVU5LTzBGQlIwUXNVMEZCVXl4dlFrRkJiMElzUTBGQlF5eEpRVUZUTzBsQlEyNURMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdVVUZEZWtJc1RVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTVSU3hSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU5tTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTFBc1EwRkJReUo5IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUmVxdWVzdCcpO1xuaW1wb3J0IHsgUGFjZSB9IGZyb20gJy4vUGFjaW5nJztcbmltcG9ydCB7IEF1dGhEaWdlc3QgfSBmcm9tICcuL0F1dGhEaWdlc3QnO1xuaW1wb3J0IHsgQXV0aEJhc2ljIH0gZnJvbSAnLi9BdXRoQmFzaWMnO1xubG9nLm1lc3NhZ2VMZW5ndGggPSAxMjA7XG5jbGFzcyBBdXRoZW50aWNhdG9ycyB7XG4gICAgc3RhdGljIGdldChhdXRoUmVxdWVzdCwgY3JlZGVudGlhbHMsIHVybCkge1xuICAgICAgICBpZiAoIWF1dGhSZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjcmVkZW50aWFscykge1xuICAgICAgICAgICAgdGhyb3cgYGF1dGhlbnRpY2F0aW9uIG1pc3Npbmc7IGNhbGwgJ3NldENyZWRlbnRpYWxzJyBiZWZvcmUgY2FsbGluZyAnZ2V0JyBmb3IgdXJsICR7dXJsfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGF1dGggPSBBdXRoZW50aWNhdG9ycy5hdXRoc1t1cmxdO1xuICAgICAgICBpZiAoIWF1dGgpIHtcbiAgICAgICAgICAgIGlmIChhdXRoUmVxdWVzdC5pbmRleE9mKCdEaWdlc3QnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGF1dGggPSBBdXRoZW50aWNhdG9ycy5hdXRoc1t1cmxdID0gbmV3IEF1dGhEaWdlc3QoY3JlZGVudGlhbHMudXNlciwgY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXV0aFJlcXVlc3QuaW5kZXhPZignQmFzaWMnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGF1dGggPSBBdXRoZW50aWNhdG9ycy5hdXRoc1t1cmxdID0gbmV3IEF1dGhCYXNpYyhjcmVkZW50aWFscy51c2VyLCBjcmVkZW50aWFscy5wYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBgdW5pbXBsZW1lbnRlZCBhdXRoZW50aWNhdGlvbiByZXF1ZXN0ICR7YXV0aFJlcXVlc3R9IGZvciAnJHt1cmx9J2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF1dGg7XG4gICAgfVxufVxuQXV0aGVudGljYXRvcnMuYXV0aHMgPSB7fTtcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgICAgIHRoaXMuc2V0Q3JlZGVudGlhbHMgPSAodXNlciwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB1c2VyID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB7IHVzZXI6IHVzZXIsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEF1dGhUb2tlbiA9ICh0b2tlbikgPT4gdGhpcy5hdXRoVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy5zZXRQYWNlID0gKHsgcGFjZSA9IDUwLCBtYXggPSAxMCwgY29sbGVjdGlvblBlcmlvZCA9IDEwMCB9ID0geyBwYWNlOiBudWxsIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFjZSA9ICghcGFjZSB8fCBwYWNlIDwgMCkgPyB1bmRlZmluZWQgOiBuZXcgUGFjZSh7IHBhY2U6IHBhY2UsIG1heENvbmN1cnJlbnQ6IG1heCwgY29sbGVjdGlvblBlcmlvZDogY29sbGVjdGlvblBlcmlvZCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGVhclBhY2UgPSAoKSA9PiB0aGlzLnNldFBhY2UoKTtcbiAgICAgICAgdGhpcy5kZWNvZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBhZGRDb250ZW50VHlwZSh0eXBlLCBpc1RleHQpIHtcbiAgICAgICAgY29uc3Qgc3ViVHlwZXMgPSB0eXBlLnNwbGl0KCcvJyk7XG4gICAgICAgIFJlcXVlc3QuY29udGVudFR5cGVzLnB1c2goeyBzdWJUeXBlczogc3ViVHlwZXMsIGlzVGV4dDogaXNUZXh0IH0pO1xuICAgIH1cbiAgICBhc3luYyBnZXQodXJsLCB7IHVzZUNhY2hlZCA9IHRydWUsIGhlYWRlcnMgPSB7fSB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyh1cmwsICdHRVQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgdXNlQ2FjaGVkLCBoZWFkZXJzKTtcbiAgICB9XG4gICAgYXN5bmMgcHV0KHVybCwgcG9zdERhdGEsIHsgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ1BVVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCBmYWxzZSwgaGVhZGVycywgcG9zdERhdGEpO1xuICAgIH1cbiAgICBhc3luYyBwb3N0KHVybCwgcG9zdERhdGEsIHsgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ1BPU1QnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgZmFsc2UsIGhlYWRlcnMsIHBvc3REYXRhKTtcbiAgICB9XG4gICAgZ2V0VVJMKHVybCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSA/IG5ldyBVUkwodXJsLCBkb2N1bWVudC5VUkwpIDogdXJsO1xuICAgIH1cbiAgICBnZXRPcHRpb25zKHVybCwgbWV0aG9kKSB7XG4gICAgICAgIHVybCA9IHRoaXMuZ2V0VVJMKHVybCk7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9ICcnO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgcHJvdG9jb2w6IHVybC5wcm90b2NvbCxcbiAgICAgICAgICAgIGhvc3Q6IHVybC5ob3N0LFxuICAgICAgICAgICAgaG9zdG5hbWU6IHVybC5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBvcnQ6IHVybC5wb3J0LFxuICAgICAgICAgICAgcGF0aG5hbWU6IHByZWZpeCArIHVybC5wYXRobmFtZSxcbiAgICAgICAgICAgIHBhdGg6IHByZWZpeCArIHVybC5wYXRobmFtZSArICh1cmwuc2VhcmNoIHx8ICcnKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgdXJsOiBgJHt1cmwucHJvdG9jb2x9Ly8ke3VybC5ob3N0fSR7cHJlZml4ICsgdXJsLnBhdGhuYW1lICsgKHVybC5zZWFyY2ggfHwgJycpfWAsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmF1dGhUb2tlbikge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhUb2tlbiA9IHRoaXMuYXV0aFRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICBhc3luYyBkZWNvZGVkUmVxdWVzdChvcHRpb25zLCB1c2VDYWNoZWQsIGhlYWRlcnMsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlQ2FjaGVkLCBwb3N0RGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmRlY29kZSAmJiByZXN1bHQucmVzcG9uc2UudHh0ICYmIG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSB0aGlzLmRlY29kZShyZXN1bHQuZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlQ2FjaGVkLCBwb3N0RGF0YSkge1xuICAgICAgICBsZXQgcmVxdWVzdDtcbiAgICAgICAgaWYgKHRoaXMucGFjZSkge1xuICAgICAgICAgICAgdGhpcy5sb2cudHJhbnNpZW50KGAoJHt0aGlzLnBhY2UuaW5RdWV1ZSgpfSB8ICR7dGhpcy5wYWNlLmluUHJvZ3Jlc3MoKX0pICR7b3B0aW9ucy5tZXRob2R9LWluZyAke29wdGlvbnMudXJsfWApO1xuICAgICAgICAgICAgcmVxdWVzdCA9IHRoaXMucGFjZS5hZGQoKCkgPT4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSwgYCR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0ID0gdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Q7XG4gICAgICAgIGlmICh0aGlzLnBhY2UpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLnRyYW5zaWVudChgKCR7dGhpcy5wYWNlLmluUXVldWUoKX0gfCAke3RoaXMucGFjZS5pblByb2dyZXNzKCl9KSByZWNlaXZlZCAke29wdGlvbnMubWV0aG9kfSAke29wdGlvbnMudXJsfSBgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5pc3N1ZVJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpO1xuICAgICAgICAgICAgY29uc3QgYXV0aCA9IEF1dGhlbnRpY2F0b3JzLmdldChyZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzWyd3d3ctYXV0aGVudGljYXRlJ10sIHRoaXMuY3JlZGVudGlhbHMsIG9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIHJldHVybiBhdXRoID8gdGhpcy5yZXF1ZXN0KGF1dGgudGVzdEF1dGgob3B0aW9ucywgcmVzcG9uc2UucmVzcG9uc2UpKSA6IHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoYHJlcXVlc3Q6ICR7ZX1cXG4ke09iamVjdC5lbnRyaWVzKG9wdGlvbnMuaGVhZGVycykuam9pbignXFxuJyl9YCk7XG4gICAgICAgICAgICB0aHJvdyBgZXJyb3IgcmVxdWVzdGluZyAke29wdGlvbnMudXJsfTogJHtlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaXNzdWVSZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbmZpcm1SZXF1ZXN0KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyc1RleHQgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdjb250ZW50LXR5cGUnOiAnJyB9O1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzVGV4dC5zcGxpdCgnXFxyXFxuJykubWFwKGggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga3YgPSBoLnNwbGl0KCc6JykubWFwKHAgPT4gcC50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGt2WzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNba3ZbMF1dID0ga3ZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHQgPSBSZXF1ZXN0LmlzVGV4dHVhbENvbnRlbnQoY29udGVudFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6IHR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlOiBgJHt0aGlzLnN0YXR1c30gJHt0aGlzLnN0YXR1c1RleHR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMucmVzcG9uc2VVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0eHQgPSBSZXF1ZXN0LmlzVGV4dHVhbFJlcXVlc3Qob3B0aW9ucy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goaCA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihoLCBvcHRpb25zLmhlYWRlcnNbaF0pKTtcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gdHh0ID8gJ3RleHQnIDogJ2FycmF5YnVmZmVyJztcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gY29uZmlybVJlcXVlc3Q7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQocG9zdERhdGEgPyBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgaXNUZXh0dWFsQ29udGVudChjb250ZW50VHlwZSkge1xuICAgICAgICBpZiAoY29udGVudFR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbG9nLndhcm4oYHVuZGVmaW5lZCBjb250ZW50VHlwZTsgYXNzdW1pbmcgYmluYXJ5YCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ViVHlwZXMgPSBjb250ZW50VHlwZS5zcGxpdCgnLycpO1xuICAgICAgICBjb25zdCBtYXRjaCA9IFJlcXVlc3QuY29udGVudFR5cGVzLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5zdWJUeXBlcy5ldmVyeSgoc3QsIGkpID0+IHN1YlR5cGVzW2ldID09PSBzdCkpO1xuICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzBdLmlzVGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvZy53YXJuKGBubyBtYXRjaCBmb3VuZCBmb3IgJyR7Y29udGVudFR5cGV9JzsgY2FjaGluZyBhcyBiaW5hcnlgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaXNUZXh0dWFsUmVxdWVzdChwYXRoTmFtZSkge1xuICAgICAgICByZXR1cm4gWydqc29uJywgJ3R4dCcsICdodG1sJ10uc29tZShleHQgPT4gcGF0aE5hbWUuaW5kZXhPZihleHQpID49IDApO1xuICAgIH1cbn1cblJlcXVlc3QuY29udGVudFR5cGVzID0gW107XG5SZXF1ZXN0LmRlY29kZXJzID0ge1xuICAgIHN0cjJqc29uOiAoZGF0YSkgPT4geyB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gfSxcbiAgICBodG1sMmpzb246IHVuZGVmaW5lZFxufTtcbltcbiAgICBbJ3RleHQnLCB0cnVlXSxcbiAgICBbJ3RleHQvaHRtbCcsIHRydWVdLFxuICAgIFsnaW1hZ2UnLCBmYWxzZV0sXG4gICAgWydhdWRpbycsIGZhbHNlXSxcbiAgICBbJ2ZvbnQnLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi9qc29uJywgdHJ1ZV0sXG4gICAgWydhcHBsaWNhdGlvbi9wZGYnLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJywgZmFsc2VdLFxuICAgIFsnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsIGZhbHNlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsIGZhbHNlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC5zaGVldC5tYWNyb2VuYWJsZWQuMTInLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLCBmYWxzZV0sXG5dLmZvckVhY2goZSA9PiBSZXF1ZXN0LmFkZENvbnRlbnRUeXBlKGVbMF0sIGVbMV0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVnhkV1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlTWlhGMVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhkRFFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVdVc1QwRkJUeXhEUVVGRE8wRkJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UVVGRGRrVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGakxGVkJRVlVzUTBGQlF6dEJRVU40UXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVkVzWTBGQll5eERRVUZETzBGQlF6VkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlV5eGhRVUZoTEVOQlFVTTdRVUZITTBNc1IwRkJSeXhEUVVGRExHRkJRV0VzUjBGQlJ5eEhRVUZITEVOQlFVTTdRVUYzUkhoQ0xFMUJRVTBzWTBGQll6dEpRVVZVTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJhMElzUlVGQlJTeFhRVUYxUWl4RlFVRkZMRWRCUVZVN1VVRkRja1VzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTmtMRTlCUVU4c1UwRkJVeXhEUVVGQk8xTkJRMjVDTzJGQlFVMHNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOeVFpeE5RVUZOTERoRlFVRTRSU3hIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU0zUmp0UlFVTkVMRWxCUVVrc1NVRkJTU3hIUVVGSExHTkJRV01zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRja01zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTlFMRWxCUVVrc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRM0pETEVsQlFVa3NSMEZCUnl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMkZCUXpkR08ybENRVUZOTEVsQlFVa3NWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUXpORExFbEJRVWtzUjBGQlJ5eGpRVUZqTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJGQlF6VkdPMmxDUVVGTk8yZENRVU5JTEUxQlFVMHNkME5CUVhkRExGZEJRVmNzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXp0aFFVTTFSVHRUUVVOS08xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVRTdTVUZEWml4RFFVRkRPenRCUVd4Q1RTeHZRa0ZCU3l4SFFVRjFRaXhGUVVGRkxFTkJRVUU3UVVGelFucERMRTFCUVUwc1QwRkJUeXhQUVVGUE8wbEJRWEJDTzFGQldXTXNVVUZCUnl4SFFVRlJMRWRCUVVjc1EwRkJRenRSUVdkQ2JFSXNiVUpCUVdNc1IwRkJSeXhEUVVGRExFbEJRVmtzUlVGQlJTeFJRVUZuUWl4RlFVRkZMRVZCUVVVN1dVRkRka1FzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRXRCUVVjc1UwRkJVeXhEUVVGQkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRlRVlzUTBGQlF5eERRVUZCTzFGQlIwMHNhVUpCUVZrc1IwRkJSeXhEUVVGRExFdEJRV0VzUlVGQlJTeEZRVUZGTEVOQlEzQkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZCTzFGQlVXNUNMRmxCUVU4c1IwRkJSeXhEUVVGRExFVkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRWRCUVVNc1JVRkJSU3hGUVVGRkxHZENRVUZuUWl4SFFVRkRMRWRCUVVjc1MwRkJSU3hGUVVGRExFbEJRVWtzUlVGQlRTeEpRVUZKTEVWQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNSVUZCUXl4SlFVRkpMRVZCUVVNc1NVRkJTU3hGUVVGRkxHRkJRV0VzUlVGQlF5eEhRVUZITEVWQlFVVXNaMEpCUVdkQ0xFVkJRVU1zWjBKQlFXZENMRVZCUVVNc1EwRkJReXhEUVVGRE8xRkJRek5JTEVOQlFVTXNRMEZCUVR0UlFVdE5MR05CUVZNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRlJha01zVjBGQlRTeEhRVUZaTEZOQlFWTXNRMEZCUXp0SlFYVkxka01zUTBGQlF6dEpRVGxPVlN4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVmNzUlVGQlJTeE5RVUZqTzFGQlEzQkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRha01zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJReXhSUVVGUkxFVkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUXl4TlFVRk5MRVZCUVVNc1EwRkJReXhEUVVGRE8wbEJRMnhGTEVOQlFVTTdTVUU0UkUwc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZqTEVWQlFVVXNSVUZCUXl4VFFVRlRMRWRCUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUjBGQlF5eEZRVUZGTEVWQlFVTXNSMEZCUXl4RlFVRkZPMUZCUXpWRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6VkRMRTlCUVU4c1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRelZFTEVOQlFVTTdTVUZUVFN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRV01zUlVGQlJTeFJRVUZaTEVWQlFVVXNSVUZCUXl4UFFVRlBMRWRCUVVNc1JVRkJSU3hGUVVGRExFZEJRVU1zUlVGQlJUdFJRVU14UkN4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNMVF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVk5OTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJZeXhGUVVGRkxGRkJRVmtzUlVGQlJTeEZRVUZETEU5QlFVOHNSMEZCUXl4RlFVRkZMRVZCUVVNc1IwRkJReXhGUVVGRk8xRkJRek5FTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpkRExFOUJRVThzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhGUVVGRkxFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTnNSU3hEUVVGRE8wbEJSVk1zVFVGQlRTeERRVUZETEVkQlFXTTdVVUZETTBJc1QwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdTVUZEZGtVc1EwRkJRenRKUVVWVExGVkJRVlVzUTBGQlF5eEhRVUZqTEVWQlFVVXNUVUZCWVR0UlFVTTVReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMlFpeE5RVUZOTEUxQlFVMHNSMEZCTkVNc1JVRkJSU3hEUVVGRE8xRkJRek5FTEUxQlFVMHNUMEZCVHl4SFFVRkhPMWxCUTFvc2EwSkJRV3RDTEVWQlFVVXNTMEZCU3p0WlFVTjZRaXhOUVVGTkxFVkJRVTBzVFVGQlRUdFpRVU5zUWl4UlFVRlJMRVZCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkU3V1VGRGVFSXNTVUZCU1N4RlFVRlJMRWRCUVVjc1EwRkJReXhKUVVGSk8xbEJRM0JDTEZGQlFWRXNSVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVVHRaUVVONFFpeEpRVUZKTEVWQlFWRXNSMEZCUnl4RFFVRkRMRWxCUVVrN1dVRkRjRUlzVVVGQlVTeEZRVUZKTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVVHRaUVVOcVF5eEpRVUZKTEVWQlFWRXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVOMFJDeFBRVUZQTEVWQlFWVXNSVUZCUlR0WlFVVnVRaXhIUVVGSExFVkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4TFFVRkxMRWRCUVVjc1EwRkJReXhKUVVGSkxFZEJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZPMU5CUXpGR0xFTkJRVU03VVVGRFJpeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkJSU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRE8xTkJRVVU3VVVGRGJrVXNUMEZCVHl4UFFVRlBMRU5CUVVNN1NVRkRia0lzUTBGQlF6dEpRV0ZUTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJaU3hGUVVGRkxGTkJRV2xDTEVWQlFVVXNUMEZCVnl4RlFVRkZMRkZCUVdFN1VVRkRla1lzVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRka1VzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRXRCUVVjc1MwRkJTeXhGUVVGRk8xbEJRemxFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlV5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRek5FTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVVZUTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJaU3hGUVVGRkxGTkJRV2xDTEVWQlFVVXNVVUZCWVR0UlFVTTFSU3hKUVVGSkxFOUJRVEJDTEVOQlFVTTdVVUZETDBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTzFsQlExZ3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRXRCUVVzc1QwRkJUeXhEUVVGRExFMUJRVTBzVVVGQlVTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOb1NDeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNSSE8yRkJRVTA3V1VGRFNDeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVMEZETjBNN1VVRkZSQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEU5QlFVOHNRMEZCUXp0UlFVTXZRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1kwRkJZeXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRVVU3VVVGRmVra3NUMEZCVHl4UlFVRlJMRU5CUVVNN1NVRkRjRUlzUTBGQlF6dEpRVVZUTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJaU3hGUVVGRkxGRkJRV0U3VVVGRGJFUXNTVUZCU1R0WlFVTkJMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRE5VUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpsSExFOUJRVThzU1VGQlNTeERRVUZCTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1UwRkRia1k3VVVGQlF5eFBRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTlFMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlFUdFpRVU42UlN4TlFVRk5MRzlDUVVGdlFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRE8xTkJRMnBFTzBsQlEwd3NRMEZCUXp0SlFVVlRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlpTeEZRVUZGTEZGQlFXRTdVVUZEZGtRc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFUUkNMRVZCUVVVc1RVRkJlVUlzUlVGQlJTeEZRVUZGTzFsQlFVY3NTVUZCU1R0blFrRkRiRVlzVTBGQlV5eGpRVUZqTEVOQlFVTXNRMEZCU3p0dlFrRkRla0lzVFVGQlRTeFhRVUZYTEVkQlFVY3NSMEZCUnl4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdiMEpCUTJoRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVWQlFVTXNZMEZCWXl4RlFVRkRMRVZCUVVVc1JVRkJReXhEUVVGRE8yOUNRVU53UXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHQzUWtGRE9VSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenQzUWtGRE0wTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGT3pSQ1FVRkZMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlFVVTdiMEpCUTJwRUxFTkJRVU1zUTBGQlF5eERRVUZCTzI5Q1FVTkdMRTFCUVUwc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTTdiMEpCUTNSRExFMUJRVTBzUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0dlFrRkhiRVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenR2UWtGRE0wSXNUVUZCVFN4UlFVRlJMRWRCUVZrN2QwSkJRM1JDTEVsQlFVa3NSVUZCWjBJc1NVRkJTVHQzUWtGRGVFSXNVVUZCVVN4RlFVRkZPelJDUVVOT0xFZEJRVWNzUlVGQllTeEhRVUZIT3pSQ1FVTnVRaXhQUVVGUExFVkJRVk1zVDBGQlR6czBRa0ZEZGtJc1RVRkJUU3hGUVVGVkxFOUJRVThzUTBGQlF5eE5RVUZOT3pSQ1FVTTVRaXhOUVVGTkxFVkJRVlVzU1VGQlNTeERRVUZETEUxQlFVMDdORUpCUXpOQ0xGVkJRVlVzUlVGQlRTeEpRVUZKTEVOQlFVTXNUVUZCVFRzMFFrRkRNMElzWVVGQllTeEZRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGT3pSQ1FVTnVSQ3hIUVVGSExFVkJRV0VzU1VGQlNTeERRVUZETEZkQlFWYzdlVUpCUTI1RE8zRkNRVU5LTEVOQlFVTTdiMEpCUTBZc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTjBRaXhEUVVGRE8yZENRVU5FTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1kwRkJZeXhGUVVGRkxFTkJRVU03WjBKQlEycERMRTFCUVUwc1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUlhaRUxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVNMVF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4yUml4SFFVRkhMRU5CUVVNc1dVRkJXU3hIUVVGSExFZEJRVWNzUTBGQlFTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU03WjBKQlF5OURMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzWTBGQll5eERRVUZETzJkQ1FVTTFRaXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUVN4RFFVRkRMRU5CUVVFc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1UwRkJVeXhEUVVGRExFTkJRVU03WVVGRGVrUTdXVUZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHRuUWtGRFVDeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRZanRSUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZCTzBsQlExQXNRMEZCUXp0SlFVVlRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4WFFVRnJRanRSUVVOb1JDeEpRVUZKTEZkQlFWY3NTMEZCUnl4VFFVRlRMRVZCUVVVN1dVRkRla0lzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4M1EwRkJkME1zUTBGQlF5eERRVUZCTzFsQlEyeEVMRTlCUVU4c1MwRkJTeXhEUVVGRE8xTkJRMmhDTzFGQlEwUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjRReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRWNzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkRMRU5CUVVNc1JVRkJSVHRaUVVOb1FpeFBRVUZQTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU03VTBGRE1VSTdZVUZCVFR0WlFVTklMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zZFVKQlFYVkNMRmRCUVZjc2MwSkJRWE5DTEVOQlFVTXNRMEZCUXp0WlFVTnVSU3hQUVVGUExFdEJRVXNzUTBGQlF6dFRRVU5vUWp0SlFVTk1MRU5CUVVNN1NVRkZVeXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJaVHRSUVVNM1F5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRek5GTEVOQlFVTTdPMEZCT1U1akxHOUNRVUZaTEVkQlFUQkRMRVZCUVVVc1EwRkJRenRCUVVzeFJDeG5Ra0ZCVVN4SFFVRkhPMGxCUTNKQ0xGRkJRVkVzUlVGQlJ5eERRVUZETEVsQlFWY3NSVUZCUlN4RlFVRkZMRWRCUVVjc1NVRkJTVHRSUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRVHRMUVVGRE8wbEJRVU1zVDBGQlRTeERRVUZETEVWQlFVVTdVVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJRVHRMUVVGRExFTkJRVUVzUTBGQlF6dEpRVU5zUml4VFFVRlRMRVZCUVhkQ0xGTkJRVk03UTBGRE4wTXNRMEZCUXp0QlFYbE9UanRKUVVOSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXp0SlFVTmtMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF6dEpRVU51UWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU03U1VGRGFFSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRE8wbEJRMmhDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJRenRKUVVObUxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1NVRkJTU3hEUVVGRE8wbEJRekZDTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUzBGQlN5eERRVUZETzBsQlF6RkNMRU5CUVVNc01rVkJRVEpGTEVWQlFVVXNTMEZCU3l4RFFVRkRPMGxCUTNCR0xFTkJRVU1zYlVWQlFXMUZMRVZCUVVVc1MwRkJTeXhEUVVGRE8wbEJRelZGTEVOQlFVTXNLMEpCUVN0Q0xFVkJRVVVzUzBGQlN5eERRVUZETzBsQlEzaERMRU5CUVVNc01FSkJRVEJDTEVWQlFVVXNTMEZCU3l4RFFVRkRPMGxCUTI1RExFTkJRVU1zWjBSQlFXZEVMRVZCUVVVc1MwRkJTeXhEUVVGRE8wbEJRM3BFTEVOQlFVTXNNRUpCUVRCQ0xFVkJRVVVzUzBGQlN5eERRVUZETzBOQlEzUkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiLCJleHBvcnQgKiBmcm9tICcuL1BhY2luZyc7XG5leHBvcnQgKiBmcm9tICcuL1JlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9DaGVja3N1bSc7XG5leHBvcnQgKiBmcm9tICcuL0RhdGUnO1xuZXhwb3J0ICogZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9BcnJheVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNZMEZCYVVJc1ZVRkJWU3hEUVVGRE8wRkJRelZDTEdOQlFXbENMRmRCUVZjc1EwRkJRenRCUVVNM1FpeGpRVUZwUWl4WlFVRlpMRU5CUVVNN1FVRkRPVUlzWTBGQmFVSXNVVUZCVVN4RFFVRkRPMEZCUXpGQ0xHTkJRV2xDTEU5QlFVOHNRMEZCUXp0QlFVTjZRaXhqUVVGcFFpeFRRVUZUTEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgZGF0ZSB9IGZyb20gJy4vRGF0ZSc7XG5jb25zdCBDT0xPUiA9IHtcbiAgICBjbGVhcjogJ2NvbG9yOiMwMDA7IGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDsgZm9udC13ZWlnaHQ6bm9ybWFsOycsXG4gICAgYm9sZDogJ2ZvbnQtd2VpZ2h0OmJvbGQ7JyxcbiAgICBkaW06ICcnLFxuICAgIHVuZGVyc2NvcmU6ICcnLFxuICAgIGJsaW5rOiAnJyxcbiAgICByZXZlcnNlOiAnJyxcbiAgICBoaWRkZW46ICcnLFxuICAgIGJsYWNrOiAnY29sb3I6IzAwMDsnLFxuICAgIHJlZDogJ2NvbG9yOiNmMDA7JyxcbiAgICBncmVlbjogJ2NvbG9yOiMwZjA7JyxcbiAgICB5ZWxsb3c6ICdjb2xvcjojZmYwOycsXG4gICAgYmx1ZTogJ2NvbG9yOiMwMGY7JyxcbiAgICBtYWdlbnRhOiAnY29sb3I6I2YwZjsnLFxuICAgIGN5YW46ICdjb2xvcjojMGZmOycsXG4gICAgd2hpdGU6ICdjb2xvcjojZmZmOycsXG4gICAgZGFya3JlZDogJ2NvbG9yOiM4MDA7JyxcbiAgICBkYXJrZ3JlZW46ICdjb2xvcjojMDgwOycsXG4gICAgZGFya3llbGxvdzogJ2NvbG9yOiM4ODA7JyxcbiAgICBkYXJrYmx1ZTogJ2NvbG9yOiMwMDg7JyxcbiAgICBkYXJrbWFnZW50YTogJ2NvbG9yOiM4MDg7JyxcbiAgICBkYXJrY3lhbjogJ2NvbG9yOiMwODg7JyxcbiAgICBncmF5OiAnY29sb3I6Izg4ODsnLFxuICAgIGJnQmxhY2s6ICdiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7JyxcbiAgICBiZ1JlZDogJ2JhY2tncm91bmQtY29sb3I6I2YwMDsnLFxuICAgIGJnR3JlZW46ICdiYWNrZ3JvdW5kLWNvbG9yOiMwZjA7JyxcbiAgICBiZ1llbGxvdzogJ2JhY2tncm91bmQtY29sb3I6I2ZmMDsnLFxuICAgIGJnQmx1ZTogJ2JhY2tncm91bmQtY29sb3I6IzAwZjsnLFxuICAgIGJnTWFnZW50YTogJ2JhY2tncm91bmQtY29sb3I6I2YwZjsnLFxuICAgIGJnQ3lhbjogJ2JhY2tncm91bmQtY29sb3I6IzBmZjsnLFxuICAgIGJnV2hpdGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7J1xufTtcbmV4cG9ydCBjbGFzcyBMb2cge1xuICAgIGNvbnN0cnVjdG9yKHByZWZpeCkge1xuICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlcG9ydFByZWZpeCA9ICcnO1xuICAgICAgICB0aGlzLm1heExlbmd0aCA9IC0xO1xuICAgICAgICB0aGlzLmNvbG9ycyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gcHJlZml4O1xuICAgIH1cbiAgICBzZXQgbWVzc2FnZUxlbmd0aChtYXgpIHsgdGhpcy5tYXhMZW5ndGggPSBtYXg7IH1cbiAgICBnZXQgbWVzc2FnZUxlbmd0aCgpIHsgcmV0dXJuIHRoaXMubWF4TGVuZ3RoOyB9XG4gICAgbGV2ZWwobmV3TGV2ZWxTeW0sIHNldEdsb2JhbExldmVsKSB7XG4gICAgICAgIGxldCBuZXdMZXZlbCA9IExvZy5sZXZlbHNbbmV3TGV2ZWxTeW1dIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgbGV0IG9sZExldmVsID0gdGhpcy5yZXBvcnRMZXZlbCB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGlmIChuZXdMZXZlbFN5bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdMZXZlbCA9IG9sZExldmVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld0xldmVsU3ltID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKExvZy5sZXZlbHNbbmV3TGV2ZWxTeW1dKSB7XG4gICAgICAgICAgICBpZiAoc2V0R2xvYmFsTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBMb2cuZ2xvYmFsTGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBuZXcgJHtzZXRHbG9iYWxMZXZlbCA/ICdnbG9iYWwnIDogdGhpcy5yZXBvcnRQcmVmaXh9IGxvZyBsZXZlbCAke25ld0xldmVsLmRlc2MudG9VcHBlckNhc2UoKX0gKHdhcyAke29sZExldmVsLmRlc2MudG9VcHBlckNhc2UoKX0pYDtcbiAgICAgICAgICAgIChuZXdMZXZlbC5zeW0gPT09IG9sZExldmVsLnN5bSkgPyB0aGlzLmRlYnVnKG1zZykgOiB0aGlzLmluZm8obXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYHVua293biBsZXZlbCAke25ld0xldmVsU3ltfTsgbG9nIGxldmVsIHJlbWFpbnMgJHtvbGRMZXZlbC5zeW19YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xldmVsLnN5bTtcbiAgICB9XG4gICAgZGVidWcobXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuREVCVUcsIG1zZywgeyBjb2xvcjogWydncmF5J10gfSk7IH1cbiAgICB0cmFuc2llbnQobXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuSU5GTywgbXNnLCB7IGNvbG9yOiBbJ2RhcmtncmVlbiddLCBsZjogJ1xccicgfSk7IH1cbiAgICBwcm9ncmVzcyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2JsdWUnXSB9KTsgfVxuICAgIGluZm8obXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuSU5GTywgbXNnLCB7IGNvbG9yOiBbJ2RhcmtncmVlbiddIH0pOyB9XG4gICAgd2Fybihtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5XQVJOLCBtc2csIHsgY29sb3I6IFsnZGFya3llbGxvdycsICdib2xkJ10gfSk7IH1cbiAgICBlcnJvcihtc2cpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBbJ2RhcmtyZWQnLCAnYm9sZCddO1xuICAgICAgICBpZiAobXNnLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLm1lc3NhZ2UsIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICAgICAgdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2cuc3RhY2ssIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1zZy5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvdXQobHZsLCBtc2csIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGRlc2MgPSBMb2cubGV2ZWxzW2x2bF07XG4gICAgICAgIGNvbnN0IGZpbHRlckxldmVsID0gdGhpcy5yZXBvcnRMZXZlbCB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGlmIChkZXNjLmltcG9ydGFuY2UgPj0gZmlsdGVyTGV2ZWwuaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgbGV0IGxpbmU7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBtc2cpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBtc2coKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBsaW5lID0gdGhpcy5pbnNwZWN0KG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyID0gZGF0ZShMb2cuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICBpZiAobXNnLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IGAke2xpbmV9XFxuJHttc2cuc3RhY2t9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGAke2RhdGVTdHJ9ICR7dGhpcy5yZXBvcnRQcmVmaXh9ICR7ZGVzYy5kZXNjfWA7XG4gICAgICAgICAgICB0aGlzLm91dHB1dChvcHRpb25zLmNvbG9yLCBoZWFkZXIsIGxpbmUpO1xuICAgICAgICAgICAgcmV0dXJuIGxpbmUgKyAob3B0aW9ucy5sZiB8fCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb3V0cHV0KGNvbG9yLCBoZWFkZXIsIGxpbmUpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBsaW5lLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGluZXMuZm9yRWFjaCgobCwgaSkgPT4gbC5sZW5ndGggPD0gdGhpcy5tYXhMZW5ndGggPyAnJyA6XG4gICAgICAgICAgICAgICAgbGluZXNbaV0gPSBgJHtsaW5lLnNsaWNlKDAsIHRoaXMubWF4TGVuZ3RoIC8gMiAtIDIpfS4uLiR7bGluZS5zbGljZSgtdGhpcy5tYXhMZW5ndGggLyAyICsgMil9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYCVjJHtoZWFkZXJ9JWMgJHtsaW5lcy5qb2luKCdcXG4nKX1gLCBjb2xvci5tYXAoYyA9PiBDT0xPUltjXSkuam9pbignICcpLCBDT0xPUlsnY2xlYXInXSk7XG4gICAgfVxuICAgIGZvcm1hdChmbXRTdHIpIHtcbiAgICAgICAgaWYgKGZtdFN0ciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgTG9nLmRhdGVGb3JtYXQgPSBMb2cuZGVmRGF0ZUZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbXRTdHIpIHtcbiAgICAgICAgICAgIExvZy5kYXRlRm9ybWF0ID0gZm10U3RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBMb2cuZGF0ZUZvcm1hdDtcbiAgICB9XG4gICAgcHJlZml4KHByZikge1xuICAgICAgICBpZiAocHJmKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydFByZWZpeCA9IHByZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvcnRQcmVmaXg7XG4gICAgfVxuICAgIGNvbmZpZyhjZmcpIHtcbiAgICAgICAgaWYgKGNmZy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXQoY2ZnLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5sZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsKGNmZy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5jb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xvcnMgPSBjZmcuY29sb3JzO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc3BlY3QobXNnLCB7IGRlcHRoID0gLTEsIGluZGVudCA9ICcgICAnLCBjb2xvcnMgPSBMb2cuSU5ERU5UX0NPTE9SUyB9ID0geyBkZXB0aDogMCwgaW5kZW50OiAnICAgJywgY29sb3JzOiBMb2cuSU5ERU5UX0NPTE9SUyB9KSB7XG4gICAgICAgIGZ1bmN0aW9uIF9pbnNwZWN0KG1zZywgZGVwdGgsIGxldmVsLCBjdXJySW5kZW50KSB7XG4gICAgICAgICAgICBpZiAobXNnID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdmdW5jdGlvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCcke21zZ30nYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChtc2cubGVuZ3RoID09PSB1bmRlZmluZWQpID8gJ3suLi59JyA6ICdbLi4uXSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBbJHttc2cubWFwKChlKSA9PiAoZSA9PT0gdW5kZWZpbmVkKSA/ICcnIDogX2luc3BlY3QoZSwgZGVwdGggLSAxLCBsZXZlbCArIDEsIGN1cnJJbmRlbnQpKS5qb2luKCcsICcpfV1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBbcHJlZml4LCBwb3N0Zml4LCBsZiwgcG9zdEluZGVudF0gPSBsb2cuZ2V0UHJlUG9zdGZpeChpbmRlbnQsIGxldmVsLCBjdXJySW5kZW50LCBjb2xvcnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgeyR7bGZ9YCArIE9iamVjdC5rZXlzKG1zZykubWFwKGsgPT4gYCR7cHJlZml4fSR7a30ke3Bvc3RmaXh9OiAke19pbnNwZWN0KG1zZ1trXSwgZGVwdGggLSAxLCBsZXZlbCArIDEsIGN1cnJJbmRlbnQgKyBpbmRlbnQpfWApLmpvaW4oYCwke2xmfWApICsgYCR7bGZ9JHtwb3N0SW5kZW50fX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1zZy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvZyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfaW5zcGVjdChtc2csIChkZXB0aCAhPT0gdW5kZWZpbmVkICYmIGRlcHRoICE9PSBudWxsICYmIGRlcHRoID49IDApID8gZGVwdGggOiA5OTksIDAsICcnKTtcbiAgICB9XG4gICAgZ2V0UHJlUG9zdGZpeChpbmRlbnQsIGxldmVsLCBjdXJySW5kZW50LCBjb2xvcnMpIHtcbiAgICAgICAgbGV0IGNzdGFydCA9ICcnLCBjc3RvcCA9ICcnLCBsZiA9ICdcXG4nO1xuICAgICAgICBpZiAoY29sb3JzKSB7XG4gICAgICAgICAgICBpbmRlbnQgPSBpbmRlbnQucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG4gICAgICAgICAgICBjdXJySW5kZW50ID0gY3VyckluZGVudC5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1JbY29sb3JzW2xldmVsICUgY29sb3JzLmxlbmd0aF1dIHx8IGNvbG9yc1tsZXZlbCAlIGNvbG9ycy5sZW5ndGhdO1xuICAgICAgICAgICAgY3N0YXJ0ID0gYDxiPjxzcGFuIHN0eWxlPScke2NvbG9yfSc+YDtcbiAgICAgICAgICAgIGNzdG9wID0gYDwvc3Bhbj48L2I+YDtcbiAgICAgICAgICAgIGxmID0gJzxicj4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbYCR7Y3VyckluZGVudH0ke2luZGVudH0ke2NzdGFydH1gLCBgJHtjc3RvcH1gLCBjb2xvcnMgPyAnPGJyPicgOiAnXFxuJywgY3VyckluZGVudF07XG4gICAgfVxufVxuTG9nLklOREVOVF9DT0xPUlMgPSBbJ2RhcmtibHVlJywgJ2RhcmtncmVlbicsICdkYXJrcmVkJywgJ2RhcmtjeWFuJywgJ2Rhcmt5ZWxsb3cnLCAnZGFya21hZ2VudGEnXTtcbkxvZy5kZWZEYXRlRm9ybWF0ID0gJyVZWVlZJU1NJUREICVoaDolbW06JXNzLiVqamonO1xuTG9nLmRhdGVGb3JtYXQgPSBMb2cuZGVmRGF0ZUZvcm1hdDtcbkxvZy5ERUJVRyA9ICdERUJVRyc7XG5Mb2cuSU5GTyA9ICdJTkZPJztcbkxvZy5XQVJOID0gJ1dBUk4nO1xuTG9nLkVSUk9SID0gJ0VSUk9SJztcbkxvZy5sZXZlbHMgPSB7XG4gICAgW0xvZy5ERUJVR106IHsgaW1wb3J0YW5jZTogMCwgc3ltOiBMb2cuREVCVUcsIGRlc2M6ICdERUJVRycgfSxcbiAgICBbTG9nLklORk9dOiB7IGltcG9ydGFuY2U6IDEsIHN5bTogTG9nLklORk8sIGRlc2M6ICdJTkZPJyB9LFxuICAgIFtMb2cuV0FSTl06IHsgaW1wb3J0YW5jZTogMiwgc3ltOiBMb2cuV0FSTiwgZGVzYzogJ1dBUk4nIH0sXG4gICAgW0xvZy5FUlJPUl06IHsgaW1wb3J0YW5jZTogMywgc3ltOiBMb2cuRVJST1IsIGRlc2M6ICdFUlJPUicgfVxufTtcbkxvZy5sb2cgPSBuZXcgTG9nKCcnKTtcbkxvZy5nbG9iYWxMZXZlbCA9IExvZy5sZXZlbHNbTG9nLklORk9dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYkc5bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJ4dlp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZ2UmtFc1QwRkJUeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEZGQlFWRXNRMEZCUXp0QlFVazVRaXhOUVVGTkxFdEJRVXNzUjBGQlJ6dEpRVU5XTEV0QlFVc3NSVUZCVHl3eVJFRkJNa1E3U1VGRmRrVXNTVUZCU1N4RlFVRlJMRzFDUVVGdFFqdEpRVU12UWl4SFFVRkhMRVZCUVZNc1JVRkJSVHRKUVVOa0xGVkJRVlVzUlVGQlJTeEZRVUZGTzBsQlEyUXNTMEZCU3l4RlFVRlBMRVZCUVVVN1NVRkRaQ3hQUVVGUExFVkJRVXNzUlVGQlJUdEpRVU5rTEUxQlFVMHNSVUZCVFN4RlFVRkZPMGxCUldRc1MwRkJTeXhGUVVGUExHRkJRV0U3U1VGRGVrSXNSMEZCUnl4RlFVRlRMR0ZCUVdFN1NVRkRla0lzUzBGQlN5eEZRVUZQTEdGQlFXRTdTVUZEZWtJc1RVRkJUU3hGUVVGTkxHRkJRV0U3U1VGRGVrSXNTVUZCU1N4RlFVRlJMR0ZCUVdFN1NVRkRla0lzVDBGQlR5eEZRVUZMTEdGQlFXRTdTVUZEZWtJc1NVRkJTU3hGUVVGUkxHRkJRV0U3U1VGRGVrSXNTMEZCU3l4RlFVRlBMR0ZCUVdFN1NVRkZla0lzVDBGQlR5eEZRVUZMTEdGQlFXRTdTVUZEZWtJc1UwRkJVeXhGUVVGSExHRkJRV0U3U1VGRGVrSXNWVUZCVlN4RlFVRkZMR0ZCUVdFN1NVRkRla0lzVVVGQlVTeEZRVUZKTEdGQlFXRTdTVUZEZWtJc1YwRkJWeXhGUVVGRExHRkJRV0U3U1VGRGVrSXNVVUZCVVN4RlFVRkpMR0ZCUVdFN1NVRkRla0lzU1VGQlNTeEZRVUZSTEdGQlFXRTdTVUZGZWtJc1QwRkJUeXhGUVVGTExIZENRVUYzUWp0SlFVTndReXhMUVVGTExFVkJRVThzZDBKQlFYZENPMGxCUTNCRExFOUJRVThzUlVGQlN5eDNRa0ZCZDBJN1NVRkRjRU1zVVVGQlVTeEZRVUZKTEhkQ1FVRjNRanRKUVVOd1F5eE5RVUZOTEVWQlFVMHNkMEpCUVhkQ08wbEJRM0JETEZOQlFWTXNSVUZCUnl4M1FrRkJkMEk3U1VGRGNFTXNUVUZCVFN4RlFVRk5MSGRDUVVGM1FqdEpRVU53UXl4UFFVRlBMRVZCUVVzc2QwSkJRWGRDTzBOQlEzWkRMRU5CUVVNN1FVRmxSaXhOUVVGTkxFOUJRVThzUjBGQlJ6dEpRWEZEV2l4WlFVRlpMRTFCUVdFN1VVRk1aaXhuUWtGQlZ5eEhRVUZuUWl4VFFVRlRMRU5CUVVNN1VVRkRja01zYVVKQlFWa3NSMEZCU1N4RlFVRkZMRU5CUVVNN1VVRkRia0lzWTBGQlV5eEhRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1Q0xGZEJRVTBzUjBGQlZTeEpRVUZKTEVOQlFVTTdVVUZGUml4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFMUJRVTBzUTBGQlF6dEpRVUZETEVOQlFVTTdTVUZSTVVRc1NVRkJWeXhoUVVGaExFTkJRVU1zUjBGQlZTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVWM1UkN4SlFVRlhMR0ZCUVdFc1MwRkJTeXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCYlVJNVF5eExRVUZMTEVOQlFVTXNWMEZCYlVJc1JVRkJSU3hqUVVGMVFqdFJRVU55UkN4SlFVRkpMRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE1VUXNTVUZCU1N4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzVjBGQlZ5eExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTXpRaXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFOQlEzWkNPMkZCUVUwc1NVRkJTU3hYUVVGWExFdEJRVXNzU1VGQlNTeEZRVUZGTzFsQlF6ZENMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVTBGQlV5eERRVUZETzFOQlEyaERPMkZCUVUwc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMWxCUTJoRExFbEJRVWtzWTBGQll5eEZRVUZGTzJkQ1FVRkZMRWRCUVVjc1EwRkJReXhYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETzJGQlFVVTdhVUpCUXk5Q08yZENRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJRVVU3V1VGRGNFUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhqUVVGakxFTkJRVUVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzWTBGQll5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hUUVVGVExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1EwRkJRenRaUVVOb1NpeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRXRCUVVzc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEzSkZPMkZCUVUwN1dVRkRTQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhYUVVGWExIVkNRVUYxUWl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU5vUmp0UlFVTkVMRTlCUVU4c1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCVTAwc1MwRkJTeXhEUVVGRExFZEJRVThzU1VGQlZ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCVXk5RkxGTkJRVk1zUTBGQlF5eEhRVUZQTEVsQlFWY3NUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlUyaEhMRkZCUVZFc1EwRkJReXhIUVVGUExFbEJRVmNzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFXRnlSaXhKUVVGSkxFTkJRVU1zUjBGQlR5eEpRVUZYTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRlRiRVlzU1VGQlNTeERRVUZETEVkQlFVOHNTVUZCVnl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVlV6Uml4TFFVRkxMRU5CUVVNc1IwRkJUenRSUVVOb1FpeE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU5zUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRFlpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyNUVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRha1FzVDBGQlR5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRPMU5CUTNSQ08yRkJRVTA3V1VGRFNDeFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU55UkR0SlFVTk1MRU5CUVVNN1NVRmhVeXhIUVVGSExFTkJRVU1zUjBGQlZTeEZRVUZGTEVkQlFVOHNSVUZCUlN4UFFVRlhPMUZCUXpGRExFbEJRVWtzU1VGQlNTeEhRVUZoTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGNrTXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTNoRUxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNTVUZCU1N4WFFVRlhMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRek5ETEVsQlFVa3NTVUZCU1N4RFFVRkRPMWxCUTFRc1VVRkJUeXhQUVVGUExFZEJRVWNzUlVGQlJUdG5Ra0ZEWml4TFFVRkxMRlZCUVZVN2IwSkJRVVVzU1VGQlNTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMjlDUVVGRExFMUJRVTA3WjBKQlEzSkRMRXRCUVVzc1VVRkJVVHR2UWtGQlNTeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMjlDUVVGRExFMUJRVTA3WjBKQlEyNURMRXRCUVVzc1VVRkJVU3hEUVVGRE8yZENRVU5rTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNKRE8xbEJRMFFzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3WjBKQlFVVXNTVUZCU1N4SFFVRkhMRWRCUVVjc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0aFFVRkZPMWxCUTJ4RUxFMUJRVTBzVFVGQlRTeEhRVUZITEVkQlFVY3NUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUXpsRUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEZWtNc1QwRkJUeXhKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4SlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRMnhETzFGQlEwUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVWxUTEUxQlFVMHNRMEZCUXl4TFFVRmpMRVZCUVVVc1RVRkJZU3hGUVVGRkxFbEJRVmM3VVVGRGRrUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVR0UlFVTTVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTJ4Q0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVUVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOdVJDeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGRExFTkJRVU1zUjBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZCTzFOQlF6bEdPMUZCUTBRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEUxQlFVMHNUVUZCVFN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZCTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40Unl4RFFVRkRPMGxCV1Uwc1RVRkJUU3hEUVVGRExFMUJRV003VVVGRGVFSXNTVUZCU1N4TlFVRk5MRXRCUVVzc1NVRkJTU3hGUVVGRk8xbEJRVVVzUjBGQlJ5eERRVUZETEZWQlFWVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRE8xTkJRVVU3WVVGRGRrUXNTVUZCU1N4TlFVRk5MRVZCUVUwN1dVRkJSU3hIUVVGSExFTkJRVU1zVlVGQlZTeEhRVUZITEUxQlFVMHNRMEZCUXp0VFFVRkZPMUZCUTJwRUxFOUJRVThzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJUMDBzVFVGQlRTeERRVUZETEVkQlFWYzdVVUZEY2tJc1NVRkJTU3hIUVVGSExFVkJRVVU3V1VGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWRCUVVjc1EwRkJRenRUUVVGRk8xRkJRM0pETEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlZVMHNUVUZCVFN4RFFVRkRMRWRCUVhGRU8xRkJReTlFTEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1MwRkJSeXhUUVVGVExFVkJRVVU3V1VGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVUZGTzFGQlEzaEVMRWxCUVVrc1IwRkJSeXhEUVVGRExFdEJRVXNzUzBGQlJ5eFRRVUZUTEVWQlFVYzdXVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVRkZPMUZCUTNSRUxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRVZCUVVVN1dVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1UwRkJSVHRKUVVNM1JDeERRVUZETzBsQmFVSk5MRTlCUVU4c1EwRkJReXhIUVVGUExFVkJRVVVzUlVGQlF5eExRVUZMTEVkQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hIUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVkQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1JVRkJReXhIUVVGRExFVkJRVU1zUzBGQlN5eEZRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRVZCUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkRPMUZCUTNoSUxGTkJRVk1zVVVGQlVTeERRVUZETEVkQlFVOHNSVUZCUlN4TFFVRlpMRVZCUVVVc1MwRkJXU3hGUVVGRkxGVkJRV2xDTzFsQlEzQkZMRWxCUVVrc1IwRkJSeXhMUVVGTExFbEJRVWtzUlVGQlowSTdaMEpCUVVVc1QwRkJUeXhOUVVGTkxFTkJRVU03WVVGQlJUdFpRVU5zUkN4SlFVRkpMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVmM3WjBKQlFVVXNUMEZCVHl4WFFVRlhMRU5CUVVNN1lVRkJSVHRaUVVOMlJDeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRlZCUVZVc1JVRkJSenRuUWtGQlJTeFBRVUZQTEZWQlFWVXNRMEZCUXp0aFFVRkZPMWxCUTNSRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RlFVRkxPMmRDUVVGRkxFOUJRVThzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXp0aFFVRkZPMWxCUTNSRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RlFVRkxPMmRDUVVNMVFpeEpRVUZKTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRMVFzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRXRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE8ybENRVU4wUkR0blFrRkRSQ3hKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVOMlFpeFBRVUZQTEVsQlFVa3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVXNzUlVGQlF5eEZRVUZGTEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZCTEVWQlFVVXNRMEZCUVN4RFFVRkRMRU5CUVVFc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVkQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dHBRa0ZETTBjN1owSkJRMFFzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4UFFVRlBMRVZCUVVVc1JVRkJSU3hGUVVGRkxGVkJRVlVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJReTlHTEU5QlFVOHNTVUZCU1N4RlFVRkZMRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4SFFVRkhMRU5CUVVNc1IwRkJSeXhQUVVGUExFdEJReTlFTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRWRCUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUjBGQlF5eE5RVUZOTEVOQlEzaEVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFZEJRVWNzVlVGQlZTeEhRVUZITEVOQlFVTTdZVUZET1VNN1dVRkRSQ3hQUVVGUExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhEUVVGRE8xRkJRMFFzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUldwQ0xFOUJRVThzVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRXRCUVVzc1MwRkJSeXhUUVVGVExFbEJRVWtzUzBGQlN5eExRVUZITEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTXZSaXhEUVVGRE8wbEJSVk1zWVVGQllTeERRVUZETEUxQlFXRXNSVUZCUlN4TFFVRlpMRVZCUVVVc1ZVRkJhVUlzUlVGQlJTeE5RVUZsTzFGQlEyNUdMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUlVGQlJTeExRVUZMTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGRrTXNTVUZCU1N4TlFVRk5MRVZCUVVVN1dVRkRVaXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRGVFTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUldoRUxFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTNCR0xFMUJRVTBzUjBGQlNTeHRRa0ZCYlVJc1MwRkJTeXhKUVVGSkxFTkJRVU03V1VGRGRrTXNTMEZCU3l4SFFVRkxMR0ZCUVdFc1EwRkJRenRaUVVONFFpeEZRVUZGTEVkQlFWRXNUVUZCVFN4RFFVRkRPMU5CUTNCQ08xRkJRMFFzVDBGQlR5eERRVUZETEVkQlFVY3NWVUZCVlN4SFFVRkhMRTFCUVUwc1IwRkJSeXhOUVVGTkxFVkJRVVVzUlVGQlJTeEhRVUZITEV0QlFVc3NSVUZCUlN4RlFVRkZMRTFCUVUwc1EwRkJRU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03U1VGRE9VWXNRMEZCUXpzN1FVRTVVbWRDTEdsQ1FVRmhMRWRCUVVjc1EwRkJReXhWUVVGVkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEZOQlFWTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1dVRkJXU3hGUVVGRkxHRkJRV0VzUTBGQlF5eERRVUZETzBGQlJUbEdMR2xDUVVGaExFZEJRVWNzT0VKQlFUaENMRU5CUVVNN1FVRkRMME1zWTBGQlZTeEhRVUZOTEVkQlFVY3NRMEZCUXl4aFFVRmhMRU5CUVVNN1FVRkhja01zVTBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVZG9RaXhSUVVGSkxFZEJRVXNzVFVGQlRTeERRVUZETzBGQlIyaENMRkZCUVVrc1IwRkJTeXhOUVVGTkxFTkJRVU03UVVGSGFFSXNVMEZCU3l4SFFVRkpMRTlCUVU4c1EwRkJRenRCUVVka0xGVkJRVTBzUjBGQlJ6dEpRVU4wUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlN5eEZRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJRenRKUVVNNVJDeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJUU3hGUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVWNzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUXp0SlFVTTNSQ3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCVFN4RlFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVjc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlF6dEpRVU0zUkN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlN5eEZRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJRenREUVVOcVJTeERRVUZETzBGQlIxa3NUMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBGQlIyWXNaVUZCVnl4SFFVRmhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRJbjA9IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW1wiY3J5cHRvXCJdOyB9KCkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYmluL2VzbS9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=