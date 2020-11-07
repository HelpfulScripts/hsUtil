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
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}
function _btoa(str) {
    const buffer = str instanceof Buffer ? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEJhc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0F1dGhCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQW1CLE9BQU8sQ0FBQztBQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBR2hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBa0IsUUFBUSxDQUFDO0FBRzFDLE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSTtJQUMvQixRQUFRLENBQUMsT0FBZSxFQUFFLElBQVcsRUFBRSxRQUF3QjtRQUMzRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLHlDQUF5QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFpQjtJQUM1QixNQUFNLE1BQU0sR0FBRyxHQUFHLFlBQVksTUFBTSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxDQUFDIn0=

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
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('RequestDigest');


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
    generateCNONCE(qop) {
        let cnonce;
        let nc;
        if (typeof qop === 'string') {
            let cnonceHash = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonceHash.digest('hex').substr(0, 16);
            nc = this.updateNC();
        }
        return { cnonce: cnonce, nc: nc };
    }
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        let challenge = parseDigestResponse(response.headers['www-authenticate']);
        let ha1 = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
        let _str = `${this.username}:${challenge.realm}:${this.password}`;
        ha1.update(_str);
        let ha2 = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
        _str = `${options.method}:${options.path}`;
        ha2.update(_str);
        let { nc, cnonce } = this.generateCNONCE(challenge.qop);
        let hash = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
        _str = `${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`;
        hash.update(_str);
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
        }
        options.headers.Authorization = compileParams(authParams);
        return options;
    }
}
function omitNull(data) {
    let newObject = {};
    Object.keys(data).forEach((k) => {
        if (data[k] !== null && data[k] !== undefined) {
            newObject[k] = data[k];
        }
    });
    return newObject;
}
function compileParams(params) {
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}
function putDoubleQuotes(entry) {
    return ['qop', 'nc'].indexOf(entry) < 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aERpZ2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoRGlnZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBbUIsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFZLFFBQVEsQ0FBQztBQUcxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQWtCLFFBQVEsQ0FBQztBQU0xQyxNQUFNLE9BQU8sVUFBVyxTQUFRLElBQUk7SUFBcEM7O1FBQ0ksT0FBRSxHQUFHLENBQUMsQ0FBQztJQXlFWCxDQUFDO0lBcEVHLFFBQVE7UUFDSixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFNRCxjQUFjLENBQUMsR0FBVTtRQUNyQixJQUFJLE1BQVUsQ0FBQztRQUNmLElBQUksRUFBUyxDQUFDO1FBRWQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxD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

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
            let authenticate = response.response.headers['www-authenticate'];
            if (!authenticate) {
                return response;
            }
            else if (this.credentials) {
                authenticate = authenticate.trim();
                let auth;
                if (authenticate.indexOf('Digest') === 0) {
                    auth = new _AuthDigest__WEBPACK_IMPORTED_MODULE_2__.AuthDigest(this.credentials.user, this.credentials.password);
                }
                else if (authenticate.indexOf('Basic') === 0) {
                    auth = new _AuthBasic__WEBPACK_IMPORTED_MODULE_3__.AuthBasic(this.credentials.user, this.credentials.password);
                }
                else {
                    throw `unimplemented authentication request ${authenticate} for '${options.url}'`;
                }
                auth.testAuth(options, response.data, response.response);
                return this.request(options);
            }
            else {
                throw `authentication missing; call 'setCredentials' before calling 'get'`;
            }
        }
        catch (e) {
            throw `error requesting ${options.url}: ${e}`;
        }
    }
    async issueRequest(options, postData) {
        const request = this;
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
                    const txt = request.isTextualContent(contentType);
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
                const txt = request.isTextualRequest(options.pathname);
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
    isTextualContent(contentType) {
        const subTypes = contentType.split('/');
        const match = Request.contentTypes.filter(entry => entry.subTypes.every((st, i) => subTypes[i] === st));
        if (match.length > 0) {
            return match[0].isText;
        }
        else {
            this.log.warn(`no match found for '${contentType}'; caching as binary`);
            return false;
        }
    }
    isTextualRequest(pathName) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQVEsY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBUyxhQUFhLENBQUM7QUFHM0MsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7QUF3RHhCLE1BQU0sT0FBTyxPQUFPO0lBQXBCO1FBWWMsUUFBRyxHQUFRLEdBQUcsQ0FBQztRQWdCbEIsbUJBQWMsR0FBRyxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUcsU0FBUyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDeEYsQ0FBQyxDQUFBO1FBR00saUJBQVksR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBUW5CLFlBQU8sR0FBRyxDQUFDLEVBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFFLGdCQUFnQixHQUFDLEdBQUcsS0FBRSxFQUFDLElBQUksRUFBTSxJQUFJLEVBQUMsRUFBRSxFQUFFO1lBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFB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

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
            if (line.length > this.maxLength && this.maxLength > 0) {
                line = `${line.slice(0, this.maxLength / 2 - 2)}...${line.slice(-this.maxLength / 2 + 2)}`;
            }
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
        console.log(`%c${header}%c ${line}`, color.map(c => COLOR[c]).join(' '), COLOR['clear']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0FycmF5LmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9lc20vQXV0aC5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0F1dGhCYXNpYy5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0F1dGhEaWdlc3QuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9DaGVja3N1bS5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0RhdGUuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9QYWNpbmcuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9SZXF1ZXN0LmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9sb2cuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hzVXRpbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0MsQ0FBNEI7QUFDNUIsZ0JBQWdCLHFDQUFHO0FBQ1c7QUFDdkIsd0JBQXdCLHVDQUFJO0FBQ25DO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUUsNERBQTRELGNBQWMsR0FBRyxjQUFjO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDIvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QzQyxDQUE0QjtBQUM1QixnQkFBZ0IscUNBQUc7QUFDaUI7QUFDTjtBQUN2Qix5QkFBeUIsdUNBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxpRUFBaUUsYUFBYTtBQUM5RTtBQUNBLGtCQUFrQixrREFBVTtBQUM1QixzQkFBc0IsY0FBYyxHQUFHLGdCQUFnQixHQUFHLGNBQWM7QUFDeEU7QUFDQSxrQkFBa0Isa0RBQVU7QUFDNUIsa0JBQWtCLGVBQWUsR0FBRyxhQUFhO0FBQ2pEO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLG1CQUFtQixrREFBVTtBQUM3QixrQkFBa0Isa0JBQWtCLEdBQUcsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxjQUFjLEdBQUcsa0JBQWtCO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxVQUFVO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkNBQTJDLDJvSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGcEM7QUFDUDtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMnNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzNDLENBQTRCO0FBQzVCLGdCQUFnQixxQ0FBRztBQUNaO0FBQ1AsNkNBQTZDLGlDQUFpQyxFQUFFO0FBQ2hGO0FBQ087QUFDUDtBQUNBO0FBQ0EsOEJBQThCLGVBQWUsRUFBRTtBQUMvQyxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1AsaUJBQWlCLHVEQUF1RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9FQUFvRTtBQUNyRixpQkFBaUIsZ0JBQWdCO0FBQ2pDLHFDQUFxQyxvQ0FBb0M7QUFDekUsZUFBZSxxQkFBcUI7QUFDcEMsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSSxHQUFHLG1DQUFtQztBQUN0RSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkNBQTJDLCt6STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RTNDLENBQTRCO0FBQzVCLGdCQUFnQixxQ0FBRztBQUNhO0FBQ1U7QUFDRjtBQUN4QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQSx5QkFBeUIsOENBQThDLElBQUksYUFBYTtBQUN4Riw4REFBOEQseUNBQUksRUFBRSxxRUFBcUU7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFDQUFxQztBQUN4RTtBQUNBLG9CQUFvQiwrQkFBK0IsRUFBRSxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhLEVBQUUsS0FBSztBQUNsRDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYSxFQUFFLEtBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLG9CQUFvQixhQUFhLElBQUksU0FBUyxFQUFFLDJDQUEyQztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQkFBb0IsS0FBSyx1QkFBdUIsSUFBSSxlQUFlLE9BQU8sWUFBWTtBQUN6SCw4RUFBOEUsZUFBZSxHQUFHLFlBQVk7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9CQUFvQixLQUFLLHVCQUF1QixhQUFhLGVBQWUsR0FBRyxZQUFZO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQVU7QUFDekM7QUFDQTtBQUNBLCtCQUErQixpREFBUztBQUN4QztBQUNBO0FBQ0Esa0VBQWtFLGFBQWEsUUFBUSxZQUFZO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVksSUFBSSxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFlBQVksR0FBRyxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxZQUFZLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtbFY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDak1sQjtBQUNDO0FBQ0M7QUFDSjtBQUNEO0FBQ0U7QUFDeEIsMkNBQTJDLG1VOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04zQyxDQUE4QjtBQUM5QjtBQUNBLHVCQUF1QiwwQkFBMEIsb0JBQW9CO0FBQ3JFLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2Qix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLDRCQUE0QjtBQUM1QiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQixzQkFBc0I7QUFDdEIsb0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFDcEMscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyxzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xELHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOENBQThDLGFBQWEsNEJBQTRCLFFBQVEsNEJBQTRCO0FBQzFKO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxhQUFhLHFCQUFxQixhQUFhO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQ0FBa0Msa0JBQWtCLEVBQUU7QUFDdEUsb0JBQW9CLGlDQUFpQyxpQ0FBaUMsRUFBRTtBQUN4RixtQkFBbUIsaUNBQWlDLHNCQUFzQixFQUFFO0FBQzVFLGVBQWUsaUNBQWlDLHVCQUF1QixFQUFFO0FBQ3pFLGVBQWUsaUNBQWlDLGdDQUFnQyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxlQUFlO0FBQzdELDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxlQUFlO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQUk7QUFDaEM7QUFDQSwwQkFBMEIsc0NBQXNDLEtBQUssb0NBQW9DO0FBQ3pHO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSyxJQUFJLFVBQVU7QUFDN0M7QUFDQSw4QkFBOEIsUUFBUSxHQUFHLGtCQUFrQixHQUFHLFVBQVU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU8sS0FBSyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5REFBeUQsSUFBSSxxREFBcUQ7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxJQUFJO0FBQzlEO0FBQ0E7QUFDQSwrQkFBK0Isa0dBQWtHO0FBQ2pJO0FBQ0E7QUFDQSx5QkFBeUIsRUFBRSxHQUFHLGlDQUFpQyxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsSUFBSSw0REFBNEQsWUFBWSxHQUFHLFFBQVEsR0FBRyxFQUFFLFlBQVk7QUFDNUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pELHlEQUF5RDtBQUN6RDtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sTUFBTSxNQUFNO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUErQztBQUNqRSxpQkFBaUIsNkNBQTZDO0FBQzlELGlCQUFpQiw2Q0FBNkM7QUFDOUQsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyelY7Ozs7Ozs7Ozs7Ozs7QUNyTTNDLDhCQUE4Qix1QkFBdUIsRUFBRSxJOzs7Ozs7VUNBdkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImhzVXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB1bmlxdWVmeShhcnJheSwga2V5KSB7XG4gICAgY29uc3QgdW5pcXVlID0ge307XG4gICAgcmV0dXJuIGtleSA/IGFycmF5LmZpbHRlcih0ID0+IHVuaXF1ZVt0WycnICsga2V5XV0gPyBmYWxzZSA6ICh1bmlxdWVbdFsnJyArIGtleV1dID0gdHJ1ZSkpXG4gICAgICAgIDogYXJyYXkuZmlsdGVyKHQgPT4gdW5pcXVlWycnICsgdF0gPyBmYWxzZSA6ICh1bmlxdWVbJycgKyB0XSA9IHRydWUpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYSnlZWGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZRWEp5WVhrdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJaME5CTEUxQlFVMHNWVUZCVlN4UlFVRlJMRU5CUVVrc1MwRkJVeXhGUVVGRkxFZEJRV3RDTzBsQlEzSkVMRTFCUVUwc1RVRkJUU3hIUVVFMFFpeEZRVUZGTEVOQlFVTTdTVUZETTBNc1QwRkJUeXhIUVVGSExFTkJRVUVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROMFVzUTBGQlF5SjkiLCJleHBvcnQgY2xhc3MgQXV0aCB7XG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYVjBhQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OUJkWFJvTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVZEJMRTFCUVUwc1QwRkJaMElzU1VGQlNUdEpRVWwwUWl4WlFVRlpMRkZCUVdVc1JVRkJSU3hSUVVGbE8xRkJRM2hETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRemRDTEVOQlFVTTdRMEZIU2lKOSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ1JlcXVlc3RCYXNpYycpO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4vQXV0aCc7XG5leHBvcnQgY2xhc3MgQXV0aEJhc2ljIGV4dGVuZHMgQXV0aCB7XG4gICAgdGVzdEF1dGgob3B0aW9ucywgZGF0YSwgcmVzcG9uc2UpIHtcbiAgICAgICAgbG9nLmRlYnVnKCgpID0+IGByZWNlaXZlZCB3d3ctYXV0aGVudGljYXRlIHJlcXVlc3QgZm9yICR7b3B0aW9ucy5ob3N0fWApO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgX2J0b2EoYCR7dGhpcy51c2VybmFtZX06JHt0aGlzLnBhc3N3b3JkfWApO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5mdW5jdGlvbiBfYnRvYShzdHIpIHtcbiAgICBjb25zdCBidWZmZXIgPSBzdHIgaW5zdGFuY2VvZiBCdWZmZXIgPyBzdHIgOiBCdWZmZXIuZnJvbShzdHIudG9TdHJpbmcoKSwgJ2JpbmFyeScpO1xuICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWMGFFSmhjMmxqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMEYxZEdoQ1lYTnBZeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVcxQ0xFOUJRVThzUTBGQlF6dEJRVUZITEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzBGQlIyaEdMRTlCUVU4c1JVRkJSU3hKUVVGSkxFVkJRVVVzVFVGQmEwSXNVVUZCVVN4RFFVRkRPMEZCUnpGRExFMUJRVTBzVDBGQlR5eFRRVUZWTEZOQlFWRXNTVUZCU1R0SlFVTXZRaXhSUVVGUkxFTkJRVU1zVDBGQlpTeEZRVUZGTEVsQlFWY3NSVUZCUlN4UlFVRjNRanRSUVVNelJDeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVVc1JVRkJSU3hEUVVGQkxIbERRVUY1UXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU4yUlN4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUjBGQlJ5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMFJpeFBRVUZQTEU5QlFVOHNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wTkJRMG83UVVGRlJDeFRRVUZUTEV0QlFVc3NRMEZCUXl4SFFVRnBRanRKUVVNMVFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4SFFVRkhMRmxCUVZrc1RVRkJUU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRMnhHTEU5QlFVOHNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU55UXl4RFFVRkRJbjA9IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUmVxdWVzdERpZ2VzdCcpO1xuaW1wb3J0IHsgY3JlYXRlSGFzaCB9IGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi9BdXRoJztcbmV4cG9ydCBjbGFzcyBBdXRoRGlnZXN0IGV4dGVuZHMgQXV0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmMgPSAwO1xuICAgIH1cbiAgICB1cGRhdGVOQygpIHtcbiAgICAgICAgbGV0IG1heCA9IDk5OTk5OTk5O1xuICAgICAgICBsZXQgcGFkZGluZyA9IG5ldyBBcnJheSg4KS5qb2luKCcwJykgKyAnJztcbiAgICAgICAgdGhpcy5uYyA9ICh0aGlzLm5jID4gbWF4ID8gMSA6IHRoaXMubmMgKyAxKTtcbiAgICAgICAgbGV0IG5jID0gdGhpcy5uYyArICcnO1xuICAgICAgICByZXR1cm4gcGFkZGluZy5zdWJzdHIoMCwgOCAtIG5jLmxlbmd0aCkgKyBuYztcbiAgICB9XG4gICAgZ2VuZXJhdGVDTk9OQ0UocW9wKSB7XG4gICAgICAgIGxldCBjbm9uY2U7XG4gICAgICAgIGxldCBuYztcbiAgICAgICAgaWYgKHR5cGVvZiBxb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsZXQgY25vbmNlSGFzaCA9IGNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICAgICAgY25vbmNlSGFzaC51cGRhdGUoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikpO1xuICAgICAgICAgICAgY25vbmNlID0gY25vbmNlSGFzaC5kaWdlc3QoJ2hleCcpLnN1YnN0cigwLCAxNik7XG4gICAgICAgICAgICBuYyA9IHRoaXMudXBkYXRlTkMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjbm9uY2U6IGNub25jZSwgbmM6IG5jIH07XG4gICAgfVxuICAgIHRlc3RBdXRoKG9wdGlvbnMsIGRhdGEsIHJlc3BvbnNlKSB7XG4gICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBgcmVjZWl2ZWQgd3d3LWF1dGhlbnRpY2F0ZSByZXF1ZXN0IGZvciAke29wdGlvbnMuaG9zdH1gKTtcbiAgICAgICAgbGV0IGNoYWxsZW5nZSA9IHBhcnNlRGlnZXN0UmVzcG9uc2UocmVzcG9uc2UuaGVhZGVyc1snd3d3LWF1dGhlbnRpY2F0ZSddKTtcbiAgICAgICAgbGV0IGhhMSA9IGNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICBsZXQgX3N0ciA9IGAke3RoaXMudXNlcm5hbWV9OiR7Y2hhbGxlbmdlLnJlYWxtfToke3RoaXMucGFzc3dvcmR9YDtcbiAgICAgICAgaGExLnVwZGF0ZShfc3RyKTtcbiAgICAgICAgbGV0IGhhMiA9IGNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICBfc3RyID0gYCR7b3B0aW9ucy5tZXRob2R9OiR7b3B0aW9ucy5wYXRofWA7XG4gICAgICAgIGhhMi51cGRhdGUoX3N0cik7XG4gICAgICAgIGxldCB7IG5jLCBjbm9uY2UgfSA9IHRoaXMuZ2VuZXJhdGVDTk9OQ0UoY2hhbGxlbmdlLnFvcCk7XG4gICAgICAgIGxldCBoYXNoID0gY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgIF9zdHIgPSBgJHtoYTEuZGlnZXN0KCdoZXgnKX06JHtjaGFsbGVuZ2Uubm9uY2V9OiR7bmN9OiR7Y25vbmNlfToke2NoYWxsZW5nZS5xb3B9OiR7aGEyLmRpZ2VzdCgnaGV4Jyl9YDtcbiAgICAgICAgaGFzaC51cGRhdGUoX3N0cik7XG4gICAgICAgIGxldCBhdXRoUGFyYW1zID0ge1xuICAgICAgICAgICAgcmVhbG06IGNoYWxsZW5nZS5yZWFsbSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgdXJpOiBvcHRpb25zLnBhdGgsXG4gICAgICAgICAgICBxb3A6IGNoYWxsZW5nZS5xb3AsXG4gICAgICAgICAgICBub25jZTogY2hhbGxlbmdlLm5vbmNlLFxuICAgICAgICAgICAgYWxnb3JpdGhtOiBcIk1ENVwiLFxuICAgICAgICAgICAgcmVzcG9uc2U6IGhhc2guZGlnZXN0KCdoZXgnKVxuICAgICAgICB9O1xuICAgICAgICBhdXRoUGFyYW1zID0gb21pdE51bGwoYXV0aFBhcmFtcyk7XG4gICAgICAgIGlmIChjbm9uY2UpIHtcbiAgICAgICAgICAgIGF1dGhQYXJhbXMubmMgPSBuYztcbiAgICAgICAgICAgIGF1dGhQYXJhbXMuY25vbmNlID0gY25vbmNlO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gY29tcGlsZVBhcmFtcyhhdXRoUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxufVxuZnVuY3Rpb24gb21pdE51bGwoZGF0YSkge1xuICAgIGxldCBuZXdPYmplY3QgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIGlmIChkYXRhW2tdICE9PSBudWxsICYmIGRhdGFba10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3T2JqZWN0W2tdID0gZGF0YVtrXTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdPYmplY3Q7XG59XG5mdW5jdGlvbiBjb21waWxlUGFyYW1zKHBhcmFtcykge1xuICAgIGxldCBwYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gcGFyYW1zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW2ldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW0gPSBpICsgJz0nICsgKHB1dERvdWJsZVF1b3RlcyhpKSA/IGBcIiR7cGFyYW1zW2ldfVwiYCA6IHBhcmFtc1tpXSk7XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHBhcmFtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ0RpZ2VzdCAnICsgcGFydHMuam9pbignLCcpO1xufVxuZnVuY3Rpb24gcHV0RG91YmxlUXVvdGVzKGVudHJ5KSB7XG4gICAgcmV0dXJuIFsncW9wJywgJ25jJ10uaW5kZXhPZihlbnRyeSkgPCAwO1xufVxuZnVuY3Rpb24gcGFyc2VEaWdlc3RSZXNwb25zZShkaWdlc3RIZWFkZXIpIHtcbiAgICBkaWdlc3RIZWFkZXIgPSBkaWdlc3RIZWFkZXIuc3BsaXQoJ0RpZ2VzdCAnKVsxXTtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBkaWdlc3RIZWFkZXIucmVwbGFjZSgvKFteLF0qKS9nLCAoLi4ucmVzdCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcmVzdFsxXTtcbiAgICAgICAgaWYgKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGt2ID0gcGFydC5zcGxpdCgnPScpLm1hcCgodikgPT4gdi50cmltKCkpO1xuICAgICAgICAgICAgcGFyYW1zW2t2WzBdXSA9IGt2WzFdLnJlcGxhY2UoL1xcXCIvZywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWMGFFUnBaMlZ6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlCZFhSb1JHbG5aWE4wTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVVzVFVGQmJVSXNUMEZCVHl4RFFVRkRPMEZCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1FVRkRha1lzVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRlpMRkZCUVZFc1EwRkJRenRCUVVjeFF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVd0Q0xGRkJRVkVzUTBGQlF6dEJRVTB4UXl4TlFVRk5MRTlCUVU4c1ZVRkJWeXhUUVVGUkxFbEJRVWs3U1VGQmNFTTdPMUZCUTBrc1QwRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRWGxGV0N4RFFVRkRPMGxCY0VWSExGRkJRVkU3VVVGRFNpeEpRVUZKTEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkRia0lzU1VGQlNTeFBRVUZQTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU4wUWl4UFFVRlBMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEycEVMRU5CUVVNN1NVRk5SQ3hqUVVGakxFTkJRVU1zUjBGQlZUdFJRVU55UWl4SlFVRkpMRTFCUVZVc1EwRkJRenRSUVVObUxFbEJRVWtzUlVGQlV5eERRVUZETzFGQlJXUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFVkJRVVU3V1VGRGVrSXNTVUZCU1N4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEyNURMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRTFCUVUwc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYUVRc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0VFFVTjRRanRSUVVORUxFOUJRVThzUlVGQlF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVU1zUTBGQlF6dEpRVU53UXl4RFFVRkRPMGxCVVVRc1VVRkJVU3hEUVVGRExFOUJRV1VzUlVGQlJTeEpRVUZYTEVWQlFVVXNVVUZCZDBJN1VVRkRNMFFzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkZMRVZCUVVVc1EwRkJRU3g1UTBGQmVVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRmRrVXNTVUZCU1N4VFFVRlRMRWRCUVU4c2JVSkJRVzFDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVVzU1VGQlNTeEhRVUZITEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRelZDTEVsQlFVa3NTVUZCU1N4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeFRRVUZUTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU5zUlN4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEycENMRWxCUVVrc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU16UXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlJXcENMRWxCUVVrc1JVRkJReXhGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVRc1NVRkJTU3hKUVVGSkxFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEV0QlFVc3NTVUZCU1N4RlFVRkZMRWxCUVVrc1RVRkJUU3hKUVVGSkxGTkJRVk1zUTBGQlF5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzWkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZIYkVJc1NVRkJTU3hWUVVGVkxFZEJRVTg3V1VGRGFrSXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhMUVVGTE8xbEJRM1JDTEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVVHRaUVVOMlFpeEhRVUZITEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrN1dVRkRha0lzUjBGQlJ5eEZRVUZGTEZOQlFWTXNRMEZCUXl4SFFVRkhPMWxCUTJ4Q0xFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTMEZCU3p0WlFVTjBRaXhUUVVGVExFVkJRVVVzUzBGQlN6dFpRVU5vUWl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZETDBJc1EwRkJRenRSUVVWR0xGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkZiRU1zU1VGQlNTeE5RVUZOTEVWQlFVVTdXVUZEVWl4VlFVRlZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU51UWl4VlFVRlZMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFRRVU01UWp0UlFVVkVMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeEhRVUZITEdGQlFXRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVNeFJDeFBRVUZQTEU5QlFVOHNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wTkJRMG83UVVGRlJDeFRRVUZUTEZGQlFWRXNRMEZCUXl4SlFVRlJPMGxCUTNSQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTnVRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVkVzUlVGQlJTeEZRVUZGTzFGQlEyNURMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVRkZPMGxCUXpsRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1FVRkRja0lzUTBGQlF6dEJRVTFFTEZOQlFWTXNZVUZCWVN4RFFVRkRMRTFCUVZVN1NVRkROMElzU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJZc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVWQlFVVTdVVUZEYkVJc1NVRkJTU3hQUVVGUExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VlFVRlZMRVZCUVVVN1dVRkRha01zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTnlRanRMUVVOS08wbEJRMFFzVDBGQlR5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4RFFVRkRPMEZCVFVRc1UwRkJVeXhsUVVGbExFTkJRVU1zUzBGQldUdEpRVU5xUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU03UVVGRE1VTXNRMEZCUXp0QlFVVkVMRk5CUVZNc2JVSkJRVzFDTEVOQlFVTXNXVUZCYlVJN1NVRkROVU1zV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlJXeENMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRmhMRVZCUVVVc1JVRkJSVHRSUVVOc1JDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrSXNTVUZCU1N4SlFVRkpMRVZCUVVVN1dVRkRWaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtRc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRelZETzFGQlEwUXNUMEZCVHl4RlFVRkZMRU5CUVVNN1NVRkRaQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5JTEU5QlFVOHNUVUZCVFN4RFFVRkRPMEZCUTJ4Q0xFTkJRVU1pZlE9PSIsImV4cG9ydCBmdW5jdGlvbiBzaG9ydENoZWNrU3VtKHMpIHtcbiAgICBsZXQgY2hrID0gMHgxMjM0NTY3ODtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hrICs9IChzLmNoYXJDb2RlQXQoaSkgKiAoaSArIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIChjaGsgJiAweGZmZmZmZmZmKS50b1N0cmluZygxNik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmhsWTJ0emRXMHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlEyaGxZMnR6ZFcwdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJVVU1zVFVGQlRTeFZRVUZWTEdGQlFXRXNRMEZCUXl4RFFVRlJPMGxCUTI1RExFbEJRVWtzUjBGQlJ5eEhRVUZITEZWQlFWVXNRMEZCUXp0SlFVTnlRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTXpRaXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRkRU03U1VGRFJDeFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTXhReXhEUVVGREluMD0iLCJjb25zdCBtb250aFN0ciA9IFtcbiAgICBbJ0phbicsICdKYW51YXJ5J10sIFsnRmViJywgJ0ZlYnJ1YXJ5J10sIFsnTWFyJywgJ01hcmNoJ10sIFsnQXByJywgJ0FwcmlsJ10sIFsnTWF5JywgJ01heSddLCBbJ0p1bicsICdKdW5lJ10sXG4gICAgWydKdWwnLCAnSnVseSddLCBbJ0F1ZycsICdBdWd1c3QnXSwgWydTZXAnLCAnU2VwdGVtYmVyJ10sIFsnT2N0JywgJ09jdG9iZXInXSwgWydOb3YnLCAnTm92ZW1iZXInXSwgWydEZWMnLCAnRGVjZW1iZXInXVxuXTtcbmNvbnN0IGRheVN0ciA9IFtcbiAgICBbJ1N1bicsICdTdW5kYXknXSwgWydNb24nLCAnTW9uZGF5J10sIFsnVHVlJywgJ1R1ZXNkYXknXSwgWydXZWQnLCAnV2VkbmVzZGF5J10sIFsnVGh1JywgJ1RodXJzZGF5J10sIFsnRnJpJywgJ0ZyaWRheSddLCBbJ1NhdCcsICdTYXR1cmRheSddXG5dO1xuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlciwgZGlnaXRzKSB7XG4gICAgbGV0IHIgPSAnJyArIG51bWJlcjtcbiAgICB3aGlsZSAoci5sZW5ndGggPCBkaWdpdHMpIHtcbiAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG5leHBvcnQgZnVuY3Rpb24gZGF0ZShmb3JtYXRTdHJpbmcsIGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZm9ybWF0U3RyaW5nICE9PSAnc3RyaW5nJyB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpID9cbiAgICAgICAgJ2ludmFsaWQnIDpcbiAgICAgICAgZm9ybWF0U3RyaW5nXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZWVkvZywgJycgKyBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZL2csICcnICsgKGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTS9nLCAnJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRERERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJURERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREL2csIGZvcm1hdE51bWJlcihkYXRlLmdldERhdGUoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUQvZywgJycgKyBkYXRlLmdldERhdGUoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laGgvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWgvZywgJycgKyBkYXRlLmdldEhvdXJzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW1tL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW0vZywgJycgKyBkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lc3MvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lampqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAsIDEpKTtcbn1cbmV4cG9ydCBjb25zdCBtcyA9IHtcbiAgICBmcm9tTWludXRlczogKG1pbikgPT4gMTAwMCAqIDYwICogbWluLFxuICAgIGZyb21Ib3VyczogKGgpID0+IDEwMDAgKiA2MCAqIDYwICogaCxcbiAgICBmcm9tRGF5czogKGQpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiBkLFxuICAgIGZyb21XZWVrczogKHcpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiA3ICogdyxcbiAgICB0b01pbnV0ZXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwKSxcbiAgICB0b0hvdXJzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwKSxcbiAgICB0b0RheXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCksXG4gICAgdG9XZWVrczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogNylcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlFWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRV1ZCTEUxQlFVMHNVVUZCVVN4SFFVRkhPMGxCUTJJc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRPMGxCUXpWSExFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJRenREUVVGRExFTkJRVU03UVVGSE5VZ3NUVUZCVFN4TlFVRk5MRWRCUVVjN1NVRkRXQ3hEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFhRVUZYTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTTdRMEZCUXl4RFFVRkRPMEZCUnpOSkxGTkJRVk1zV1VGQldTeERRVUZETEUxQlFXRXNSVUZCUlN4TlFVRmhPMGxCUXpsRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1JVRkJSVHRSUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUVVVN1NVRkRNVU1zVDBGQlR5eERRVUZETEVOQlFVTTdRVUZEWWl4RFFVRkRPMEZCWTBRc1RVRkJUU3hWUVVGVkxFbEJRVWtzUTBGQlF5eFpRVUZ0UWl4RlFVRkZMRWxCUVVrc1IwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJUdEpRVU55UkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhaUVVGWkxFdEJRVXNzVVVGQlVTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVVc1UwRkJVeXhEUVVGQkxFTkJRVU03VVVGRFZpeFpRVUZaTzJGQlExQXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMkZCUTNoRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUXpsRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRUxFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlF5eERRVUZETEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRjRVFzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCU1N4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRlRU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJwRUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVa3NSVUZCUlN4SFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU51UXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGJFUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSeXhGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMkZCUTI1RExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTndSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZKTEVWQlFVVXNSMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03WVVGRGRFTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM0JFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNeFJDeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVkQlFVTXNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVjc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNSMEZCUXl4SFFVRkhMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU42UlN4RFFVRkRPMEZCUjBRc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITzBsQlEyUXNWMEZCVnl4RlFVRkxMRU5CUVVNc1IwRkJWU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRWRCUVVjN1NVRkRNME1zVTBGQlV5eEZRVUZQTEVOQlFVTXNRMEZCVVN4RlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RFFVRkRPMGxCUXpWRExGRkJRVkVzUlVGQlVTeERRVUZETEVOQlFWRXNSVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNN1NVRkRMME1zVTBGQlV5eEZRVUZQTEVOQlFVTXNRMEZCVVN4RlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhIUVVGRExFTkJRVU03U1VGRGFrUXNVMEZCVXl4RlFVRlBMRU5CUVVNc1JVRkJVeXhGUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hEUVVGRE8wbEJRelZETEU5QlFVOHNSVUZCVXl4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFTkJRVU03U1VGREwwTXNUVUZCVFN4RlFVRlZMRU5CUVVNc1JVRkJVeXhGUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVOQlFVTTdTVUZEYkVRc1QwRkJUeXhGUVVGVExFTkJRVU1zUlVGQlV5eEZRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhEUVVGRE8wTkJRM1pFTEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUGFjaW5nJyk7XG5leHBvcnQgZnVuY3Rpb24gdGltZW91dChtcywgLi4ucmVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHNldFRpbWVvdXQocmVqZWN0LCBtcywgLi4ucmVzdCk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHJlc29sdmUoYXJncyk7IH0sIG1zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydCBjbGFzcyBQYWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHBhY2UgPSAxMDAsIG1heENvbmN1cnJlbnQgPSAtMSwgY29sbGVjdGlvblBlcmlvZCA9IDAgfSkge1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSAtMTtcbiAgICAgICAgdGhpcy5wYWNlID0gMDtcbiAgICAgICAgdGhpcy53YWl0VW50aWwgPSAwO1xuICAgICAgICB0aGlzLndhaXRpbmcgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAwO1xuICAgICAgICB0aGlzLnF1ZXVlID0ge307XG4gICAgICAgIHRoaXMuY29sbGVjdGlvblBlcmlvZCA9IDA7XG4gICAgICAgIHRoaXMucGFjZSA9IHBhY2U7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvblBlcmlvZCA9IGNvbGxlY3Rpb25QZXJpb2Q7XG4gICAgfVxuICAgIGlzQWxsb3dlZCgpIHsgcmV0dXJuIHRoaXMubWF4Q29uY3VycmVudCA8IDAgfHwgdGhpcy5zdGFydGVkIDwgdGhpcy5tYXhDb25jdXJyZW50OyB9XG4gICAgc2V0UGFjZShtcykgeyB0aGlzLnBhY2UgPSBtczsgfVxuICAgIHNldE1heENvbmN1cnJlbnQobWF4Q29uY3VycmVudCkgeyB0aGlzLm1heENvbmN1cnJlbnQgPSBtYXhDb25jdXJyZW50OyB9XG4gICAgaW5RdWV1ZSgpIHsgcmV0dXJuIHRoaXMud2FpdGluZzsgfVxuICAgIGluUHJvZ3Jlc3MoKSB7IHJldHVybiB0aGlzLnN0YXJ0ZWQ7IH1cbiAgICBhc3luYyBhZGQoZm4sIGtleSkge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgY2FsbFRpbWUgPSBub3cgKyBNYXRoLm1heCh0aGlzLmNvbGxlY3Rpb25QZXJpb2QsIHRoaXMud2FpdFVudGlsKTtcbiAgICAgICAgdGhpcy53YWl0VW50aWwgKz0gdGhpcy5wYWNlO1xuICAgICAgICBsZXQgaXRlbTtcbiAgICAgICAgaWYgKGtleSAmJiB0aGlzLnF1ZXVlW2tleV0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnF1ZXVlW2tleV07XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaXRlbS50aW1lcik7XG4gICAgICAgICAgICBpdGVtLmZuID0gZm47XG4gICAgICAgICAgICBpdGVtLmFkZGVkID0gbm93O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5ID0ga2V5IHx8IGAke25vd30tJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApfWA7XG4gICAgICAgICAgICBpdGVtID0geyBmbjogZm4sIGFkZGVkOiBub3csIHBhY2U6IHRoaXMsIGtleToga2V5IH07XG4gICAgICAgICAgICB0aGlzLnF1ZXVlW2tleV0gPSBpdGVtO1xuICAgICAgICAgICAgdGhpcy53YWl0aW5nKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZUl0ZW0oaXRlbSwgY2FsbFRpbWUgLSBub3cpO1xuICAgIH1cbiAgICByZXNvbHZlSXRlbShpdGVtLCB3YWl0VGltZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhlY3V0ZSA9IGFzeW5jIChfaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IF9pdGVtLmtleTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF9pdGVtLnBhY2UucXVldWVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS53YWl0aW5nLS07XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGJlbG93Q29uY3VycmVudExpbWl0KF9pdGVtLnBhY2UpO1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLnN0YXJ0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0dWFsRGVsYXkgPSBEYXRlLm5vdygpIC0gX2l0ZW0uYWRkZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IF9pdGVtLmZuKGFjdHVhbERlbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS5zdGFydGVkLS07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS5zdGFydGVkLS07XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaXRlbS50aW1lciA9IHNldFRpbWVvdXQoZXhlY3V0ZSwgd2FpdFRpbWUsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBiZWxvd0NvbmN1cnJlbnRMaW1pdChwYWNlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlbGVhc2UgPT4ge1xuICAgICAgICBjb25zdCB3YWl0TG9vcCA9ICgpID0+IHBhY2UuaXNBbGxvd2VkKCkgPyByZWxlYXNlKCkgOiBzZXRUaW1lb3V0KHdhaXRMb29wLCAxMCk7XG4gICAgICAgIHdhaXRMb29wKCk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVR0ZqYVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDFCaFkybHVaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGSlFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVU4c1QwRkJUeXhEUVVGRE8wRkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGVE5VUXNUVUZCVFN4VlFVRlZMRTlCUVU4c1EwRkJReXhGUVVGVExFVkJRVVVzUjBGQlJ5eEpRVUZWTzBsQlF6VkRMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYkVZc1EwRkJRenRCUVdkRFJDeE5RVUZOTEZWQlFWVXNTMEZCU3l4RFFVRkRMRVZCUVZNN1NVRkRNMElzVDBGQlR5eERRVUZKTEVsQlFVOHNSVUZCWVN4RlFVRkZPMUZCUXpkQ0xFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRnpRaXhGUVVGRkxFVkJRVVU3V1VGRE1VTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUZ0UWtRc1RVRkJUU3hQUVVGUExFbEJRVWs3U1VGcFEySXNXVUZCV1N4RlFVRkRMRWxCUVVrc1IwRkJReXhIUVVGSExFVkJRVVVzWVVGQllTeEhRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMR2RDUVVGblFpeEhRVUZETEVOQlFVTXNSVUZCUXp0UlFTOUNjRVFzYTBKQlFXRXNSMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWeVFpeFRRVUZKTEVkQlFXTXNRMEZCUXl4RFFVRkRPMUZCUlhCQ0xHTkJRVk1zUjBGQlV5eERRVUZETEVOQlFVTTdVVUZGY0VJc1dVRkJUeXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVVZ3UWl4WlFVRlBMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJSWEJDTEZWQlFVc3NSMEZCZDBJc1JVRkJSU3hEUVVGRE8xRkJZMnBETEhGQ1FVRm5RaXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVkY0UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5xUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF6dFJRVU51UXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03U1VGRE4wTXNRMEZCUXp0SlFXNUNUU3hUUVVGVExFdEJRV0VzVDBGQlR5eEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJjMEl6Uml4UFFVRlBMRU5CUVVNc1JVRkJVeXhKUVVGVExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVVelF5eG5Ra0ZCWjBJc1EwRkJReXhoUVVGdlFpeEpRVUZUTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVZ1Uml4UFFVRlBMRXRCUVdVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVTFReXhWUVVGVkxFdEJRVmtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZGdVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVdkQ0xFVkJRVVVzUjBGQlZ6dFJRVU51UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJwRExFMUJRVTBzVVVGQlVTeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEZGtVc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUlRWQ0xFbEJRVWtzU1VGQlV5eERRVUZETzFGQlEyUXNTVUZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjRRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOMlFpeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMklzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNN1UwRkRjRUk3WVVGQlRUdFpRVU5JTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTXhSQ3hKUVVGSkxFZEJRVWNzUlVGQlF5eEZRVUZGTEVWQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVNc1IwRkJSeXhGUVVGRExFTkJRVU03V1VGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEZGtJc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFOQlEyeENPMUZCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3U1VGRGFrUXNRMEZCUXp0SlFVVlBMRmRCUVZjc1EwRkJReXhKUVVGVExFVkJRVVVzVVVGQlpUdFJRVU14UXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUTI1RExFMUJRVTBzVDBGQlR5eEhRVUZITEV0QlFVc3NSVUZCUlN4TFFVRlZMRVZCUVVVc1JVRkJSVHRuUWtGQlJ5eEpRVUZKTzI5Q1FVTjRReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRPMjlDUVVOMFFpeFBRVUZQTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTTNRaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMjlDUVVOeVFpeE5RVUZOTEc5Q1FVRnZRaXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRka01zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenR2UWtGRGNrSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNN2IwSkJRek5ETEUxQlFVMHNSMEZCUnl4SFFVRkhMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0dlFrRkRlRU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenR2UWtGRGNrSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU5vUWp0blFrRkJReXhQUVVGTkxFTkJRVU1zUlVGQlJUdHZRa0ZEVUN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzI5Q1FVTnlRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTJJN1dVRkJRU3hEUVVGRExFTkJRVUU3V1VGSFJpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNKRUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0RFFVTktPMEZCUjBRc1UwRkJVeXh2UWtGQmIwSXNRMEZCUXl4SlFVRlRPMGxCUTI1RExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1VVRkRla0lzVFVGQlRTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZCTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNNVJTeFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTm1MRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMUFzUTBGQlF5SjkiLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdSZXF1ZXN0Jyk7XG5pbXBvcnQgeyBQYWNlIH0gZnJvbSAnLi9QYWNpbmcnO1xuaW1wb3J0IHsgQXV0aERpZ2VzdCB9IGZyb20gJy4vQXV0aERpZ2VzdCc7XG5pbXBvcnQgeyBBdXRoQmFzaWMgfSBmcm9tICcuL0F1dGhCYXNpYyc7XG5sb2cubWVzc2FnZUxlbmd0aCA9IDEyMDtcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgICAgIHRoaXMuc2V0Q3JlZGVudGlhbHMgPSAodXNlciwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB1c2VyID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB7IHVzZXI6IHVzZXIsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEF1dGhUb2tlbiA9ICh0b2tlbikgPT4gdGhpcy5hdXRoVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy5zZXRQYWNlID0gKHsgcGFjZSA9IDUwLCBtYXggPSAxMCwgY29sbGVjdGlvblBlcmlvZCA9IDEwMCB9ID0geyBwYWNlOiBudWxsIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFjZSA9ICghcGFjZSB8fCBwYWNlIDwgMCkgPyB1bmRlZmluZWQgOiBuZXcgUGFjZSh7IHBhY2U6IHBhY2UsIG1heENvbmN1cnJlbnQ6IG1heCwgY29sbGVjdGlvblBlcmlvZDogY29sbGVjdGlvblBlcmlvZCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGVhclBhY2UgPSAoKSA9PiB0aGlzLnNldFBhY2UoKTtcbiAgICAgICAgdGhpcy5kZWNvZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBhZGRDb250ZW50VHlwZSh0eXBlLCBpc1RleHQpIHtcbiAgICAgICAgY29uc3Qgc3ViVHlwZXMgPSB0eXBlLnNwbGl0KCcvJyk7XG4gICAgICAgIFJlcXVlc3QuY29udGVudFR5cGVzLnB1c2goeyBzdWJUeXBlczogc3ViVHlwZXMsIGlzVGV4dDogaXNUZXh0IH0pO1xuICAgIH1cbiAgICBhc3luYyBnZXQodXJsLCB7IHVzZUNhY2hlZCA9IHRydWUsIGhlYWRlcnMgPSB7fSB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyh1cmwsICdHRVQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgdXNlQ2FjaGVkLCBoZWFkZXJzKTtcbiAgICB9XG4gICAgYXN5bmMgcHV0KHVybCwgcG9zdERhdGEsIHsgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ1BVVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCBmYWxzZSwgaGVhZGVycywgcG9zdERhdGEpO1xuICAgIH1cbiAgICBhc3luYyBwb3N0KHVybCwgcG9zdERhdGEsIHsgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ1BPU1QnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgZmFsc2UsIGhlYWRlcnMsIHBvc3REYXRhKTtcbiAgICB9XG4gICAgZ2V0VVJMKHVybCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSA/IG5ldyBVUkwodXJsLCBkb2N1bWVudC5VUkwpIDogdXJsO1xuICAgIH1cbiAgICBnZXRPcHRpb25zKHVybCwgbWV0aG9kKSB7XG4gICAgICAgIHVybCA9IHRoaXMuZ2V0VVJMKHVybCk7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9ICcnO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgcHJvdG9jb2w6IHVybC5wcm90b2NvbCxcbiAgICAgICAgICAgIGhvc3Q6IHVybC5ob3N0LFxuICAgICAgICAgICAgaG9zdG5hbWU6IHVybC5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBvcnQ6IHVybC5wb3J0LFxuICAgICAgICAgICAgcGF0aG5hbWU6IHByZWZpeCArIHVybC5wYXRobmFtZSxcbiAgICAgICAgICAgIHBhdGg6IHByZWZpeCArIHVybC5wYXRobmFtZSArICh1cmwuc2VhcmNoIHx8ICcnKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgdXJsOiBgJHt1cmwucHJvdG9jb2x9Ly8ke3VybC5ob3N0fSR7cHJlZml4ICsgdXJsLnBhdGhuYW1lICsgKHVybC5zZWFyY2ggfHwgJycpfWAsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmF1dGhUb2tlbikge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhUb2tlbiA9IHRoaXMuYXV0aFRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICBhc3luYyBkZWNvZGVkUmVxdWVzdChvcHRpb25zLCB1c2VDYWNoZWQsIGhlYWRlcnMsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlQ2FjaGVkLCBwb3N0RGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmRlY29kZSAmJiByZXN1bHQucmVzcG9uc2UudHh0ICYmIG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSB0aGlzLmRlY29kZShyZXN1bHQuZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlQ2FjaGVkLCBwb3N0RGF0YSkge1xuICAgICAgICBsZXQgcmVxdWVzdDtcbiAgICAgICAgaWYgKHRoaXMucGFjZSkge1xuICAgICAgICAgICAgdGhpcy5sb2cudHJhbnNpZW50KGAoJHt0aGlzLnBhY2UuaW5RdWV1ZSgpfSB8ICR7dGhpcy5wYWNlLmluUHJvZ3Jlc3MoKX0pICR7b3B0aW9ucy5tZXRob2R9LWluZyAke29wdGlvbnMudXJsfWApO1xuICAgICAgICAgICAgcmVxdWVzdCA9IHRoaXMucGFjZS5hZGQoKCkgPT4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSwgYCR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0ID0gdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Q7XG4gICAgICAgIGlmICh0aGlzLnBhY2UpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLnRyYW5zaWVudChgKCR7dGhpcy5wYWNlLmluUXVldWUoKX0gfCAke3RoaXMucGFjZS5pblByb2dyZXNzKCl9KSByZWNlaXZlZCAke29wdGlvbnMubWV0aG9kfSAke29wdGlvbnMudXJsfSBgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5pc3N1ZVJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpO1xuICAgICAgICAgICAgbGV0IGF1dGhlbnRpY2F0ZSA9IHJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnNbJ3d3dy1hdXRoZW50aWNhdGUnXTtcbiAgICAgICAgICAgIGlmICghYXV0aGVudGljYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSA9IGF1dGhlbnRpY2F0ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgbGV0IGF1dGg7XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZS5pbmRleE9mKCdEaWdlc3QnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhdXRoID0gbmV3IEF1dGhEaWdlc3QodGhpcy5jcmVkZW50aWFscy51c2VyLCB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXV0aGVudGljYXRlLmluZGV4T2YoJ0Jhc2ljJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aCA9IG5ldyBBdXRoQmFzaWModGhpcy5jcmVkZW50aWFscy51c2VyLCB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGB1bmltcGxlbWVudGVkIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgJHthdXRoZW50aWNhdGV9IGZvciAnJHtvcHRpb25zLnVybH0nYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXV0aC50ZXN0QXV0aChvcHRpb25zLCByZXNwb25zZS5kYXRhLCByZXNwb25zZS5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGBhdXRoZW50aWNhdGlvbiBtaXNzaW5nOyBjYWxsICdzZXRDcmVkZW50aWFscycgYmVmb3JlIGNhbGxpbmcgJ2dldCdgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBgZXJyb3IgcmVxdWVzdGluZyAke29wdGlvbnMudXJsfTogJHtlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaXNzdWVSZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb25maXJtUmVxdWVzdChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnNUZXh0ID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnY29udGVudC10eXBlJzogJycgfTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1RleHQuc3BsaXQoJ1xcclxcbicpLm1hcChoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGt2ID0gaC5zcGxpdCgnOicpLm1hcChwID0+IHAudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrdlswXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2t2WzBdXSA9IGt2WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gcmVxdWVzdC5pc1RleHR1YWxDb250ZW50KGNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0OiB0eHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogYCR7dGhpcy5zdGF0dXN9ICR7dGhpcy5zdGF0dXNUZXh0fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnJlc3BvbnNlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gcmVxdWVzdC5pc1RleHR1YWxSZXF1ZXN0KG9wdGlvbnMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKGggPT4geGhyLnNldFJlcXVlc3RIZWFkZXIoaCwgb3B0aW9ucy5oZWFkZXJzW2hdKSk7XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHR4dCA/ICd0ZXh0JyA6ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGNvbmZpcm1SZXF1ZXN0O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKHBvc3REYXRhID8gSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNUZXh0dWFsQ29udGVudChjb250ZW50VHlwZSkge1xuICAgICAgICBjb25zdCBzdWJUeXBlcyA9IGNvbnRlbnRUeXBlLnNwbGl0KCcvJyk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gUmVxdWVzdC5jb250ZW50VHlwZXMuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LnN1YlR5cGVzLmV2ZXJ5KChzdCwgaSkgPT4gc3ViVHlwZXNbaV0gPT09IHN0KSk7XG4gICAgICAgIGlmIChtYXRjaC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMF0uaXNUZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2cud2Fybihgbm8gbWF0Y2ggZm91bmQgZm9yICcke2NvbnRlbnRUeXBlfSc7IGNhY2hpbmcgYXMgYmluYXJ5YCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNUZXh0dWFsUmVxdWVzdChwYXRoTmFtZSkge1xuICAgICAgICByZXR1cm4gWydqc29uJywgJ3R4dCcsICdodG1sJ10uc29tZShleHQgPT4gcGF0aE5hbWUuaW5kZXhPZihleHQpID49IDApO1xuICAgIH1cbn1cblJlcXVlc3QuY29udGVudFR5cGVzID0gW107XG5SZXF1ZXN0LmRlY29kZXJzID0ge1xuICAgIHN0cjJqc29uOiAoZGF0YSkgPT4geyB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gfSxcbiAgICBodG1sMmpzb246IHVuZGVmaW5lZFxufTtcbltcbiAgICBbJ3RleHQnLCB0cnVlXSxcbiAgICBbJ3RleHQvaHRtbCcsIHRydWVdLFxuICAgIFsnaW1hZ2UnLCBmYWxzZV0sXG4gICAgWydhdWRpbycsIGZhbHNlXSxcbiAgICBbJ2ZvbnQnLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi9qc29uJywgdHJ1ZV0sXG4gICAgWydhcHBsaWNhdGlvbi9wZGYnLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJywgZmFsc2VdLFxuICAgIFsnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsIGZhbHNlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsIGZhbHNlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC5zaGVldC5tYWNyb2VuYWJsZWQuMTInLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLCBmYWxzZV0sXG5dLmZvckVhY2goZSA9PiBSZXF1ZXN0LmFkZENvbnRlbnRUeXBlKGVbMF0sIGVbMV0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVnhkV1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlTWlhGMVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhkRFFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVdVc1QwRkJUeXhEUVVGRE8wRkJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UVVGRGRrVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGakxGVkJRVlVzUTBGQlF6dEJRVU40UXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVkVzWTBGQll5eERRVUZETzBGQlF6VkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlV5eGhRVUZoTEVOQlFVTTdRVUZITTBNc1IwRkJSeXhEUVVGRExHRkJRV0VzUjBGQlJ5eEhRVUZITEVOQlFVTTdRVUYzUkhoQ0xFMUJRVTBzVDBGQlR5eFBRVUZQTzBsQlFYQkNPMUZCV1dNc1VVRkJSeXhIUVVGUkxFZEJRVWNzUTBGQlF6dFJRV2RDYkVJc2JVSkJRV01zUjBGQlJ5eERRVUZETEVsQlFWa3NSVUZCUlN4UlFVRm5RaXhGUVVGRkxFVkJRVVU3V1VGRGRrUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFdEJRVWNzVTBGQlV5eERRVUZCTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGVFWXNRMEZCUXl4RFFVRkJPMUZCUjAwc2FVSkJRVmtzUjBGQlJ5eERRVUZETEV0QlFXRXNSVUZCUlN4RlFVRkZMRU5CUTNCRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkJPMUZCVVc1Q0xGbEJRVThzUjBGQlJ5eERRVUZETEVWQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFZEJRVU1zUlVGQlJTeEZRVUZGTEdkQ1FVRm5RaXhIUVVGRExFZEJRVWNzUzBGQlJTeEZRVUZETEVsQlFVa3NSVUZCVFN4SlFVRkpMRVZCUVVNc1JVRkJSU3hGUVVGRk8xbEJRekZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1JVRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeEZRVUZGTEdGQlFXRXNSVUZCUXl4SFFVRkhMRVZCUVVVc1owSkJRV2RDTEVWQlFVTXNaMEpCUVdkQ0xFVkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TklMRU5CUVVNc1EwRkJRVHRSUVV0TkxHTkJRVk1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGUmFrTXNWMEZCVFN4SFFVRlpMRk5CUVZNc1EwRkJRenRKUVcxTWRrTXNRMEZCUXp0SlFURlBWU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFWY3NSVUZCUlN4TlFVRmpPMUZCUTNCRUxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFrTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlF5eFJRVUZSTEVWQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJReXhOUVVGTkxFVkJRVU1zUTBGQlF5eERRVUZETzBsQlEyeEZMRU5CUVVNN1NVRTRSRTBzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRmpMRVZCUVVVc1JVRkJReXhUUVVGVExFZEJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNSMEZCUXl4RlFVRkZMRVZCUVVNc1IwRkJReXhGUVVGRk8xRkJRelZFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWRExFOUJRVThzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1UwRkJVeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBsQlF6VkVMRU5CUVVNN1NVRlRUU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFXTXNSVUZCUlN4UlFVRlpMRVZCUVVVc1JVRkJReXhQUVVGUExFZEJRVU1zUlVGQlJTeEZRVUZETEVkQlFVTXNSVUZCUlR0UlFVTXhSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0xUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eEZRVUZGTEV0QlFVc3NSVUZCUlN4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGJFVXNRMEZCUXp0SlFWTk5MRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQll5eEZRVUZGTEZGQlFWa3NSVUZCUlN4RlFVRkRMRTlCUVU4c1IwRkJReXhGUVVGRkxFVkJRVU1zUjBGQlF5eEZRVUZGTzFGQlF6TkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRemRETEU5QlFVOHNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOc1JTeERRVUZETzBsQlJWTXNUVUZCVFN4RFFVRkRMRWRCUVdNN1VVRkRNMElzVDBGQlR5eERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRka1VzUTBGQlF6dEpRVVZUTEZWQlFWVXNRMEZCUXl4SFFVRmpMRVZCUVVVc1RVRkJZVHRSUVVNNVF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU4yUWl4TlFVRk5MRTFCUVUwc1IwRkJORU1zUlVGQlJTeERRVUZETzFGQlF6TkVMRTFCUVUwc1QwRkJUeXhIUVVGSE8xbEJRMW9zYTBKQlFXdENMRVZCUVVVc1MwRkJTenRaUVVONlFpeE5RVUZOTEVWQlFVMHNUVUZCVFR0WlFVTnNRaXhSUVVGUkxFVkJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRTdXVUZEZUVJc1NVRkJTU3hGUVVGUkxFZEJRVWNzUTBGQlF5eEpRVUZKTzFsQlEzQkNMRkZCUVZFc1JVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVUdFpRVU40UWl4SlFVRkpMRVZCUVZFc1IwRkJSeXhEUVVGRExFbEJRVWs3V1VGRGNFSXNVVUZCVVN4RlFVRkpMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVUdFpRVU5xUXl4SlFVRkpMRVZCUVZFc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFpRVU4wUkN4UFFVRlBMRVZCUVZVc1JVRkJSVHRaUVVWdVFpeEhRVUZITEVWQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hMUVVGTExFZEJRVWNzUTBGQlF5eEpRVUZKTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRk8xTkJRekZHTEVOQlFVTTdVVUZEUml4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVU3V1VGQlJTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFOQlFVVTdVVUZEYmtVc1QwRkJUeXhQUVVGUExFTkJRVU03U1VGRGJrSXNRMEZCUXp0SlFXRlRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlpTeEZRVUZGTEZOQlFXbENMRVZCUVVVc1QwRkJWeXhGUVVGRkxGRkJRV0U3VVVGRGVrWXNUVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRGRrVXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFdEJRVWNzUzBGQlN5eEZRVUZGTzFsQlF6bEVMRTFCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCVXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6TkVPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVlRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlpTeEZRVUZGTEZOQlFXbENMRVZCUVVVc1VVRkJZVHRSUVVNMVJTeEpRVUZKTEU5QlFUQkNMRU5CUVVNN1VVRkRMMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTFnc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzVDBGQlR5eERRVUZETEUxQlFVMHNVVUZCVVN4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5vU0N4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM1JITzJGQlFVMDdXVUZEU0N4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1UwRkROME03VVVGRlJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4TlFVRk5MRTlCUVU4c1EwRkJRenRSUVVNdlFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzWTBGQll5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlFVVTdVVUZGZWtrc1QwRkJUeXhSUVVGUkxFTkJRVU03U1VGRGNFSXNRMEZCUXp0SlFVVlRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlpTeEZRVUZGTEZGQlFXRTdVVUZEYkVRc1NVRkJTVHRaUVVOQkxFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZETlVRc1NVRkJTU3haUVVGWkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0WlFVTnFSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTzJkQ1FVTm1MRTlCUVU4c1VVRkJVU3hEUVVGRE8yRkJRMjVDTzJsQ1FVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdG5Ra0ZEY2tJc1dVRkJXU3hIUVVGSExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0blFrRkRia01zU1VGQlNTeEpRVUZWTEVOQlFVTTdaMEpCUTJZc1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHR2UWtGRGRFTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdhVUpCUXpORk8zRkNRVUZOTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdiMEpCUXpWRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8ybENRVU14UlR0eFFrRkJUVHR2UWtGRFNDeE5RVUZOTEhkRFFVRjNReXhaUVVGWkxGTkJRVk1zVDBGQlR5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMmxDUVVOeVJqdG5Ra0ZEUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMkZCUTNCRE8ybENRVUZOTzJkQ1FVTklMRTFCUVUwc2IwVkJRVzlGTEVOQlFVTTdZVUZET1VVN1UwRkRTanRSUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzFsQlExQXNUVUZCVFN4dlFrRkJiMElzVDBGQlR5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRenRUUVVOcVJEdEpRVU5NTEVOQlFVTTdTVUZGVXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRV1VzUlVGQlJTeFJRVUZoTzFGQlEzWkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU55UWl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQk5FSXNSVUZCUlN4TlFVRjVRaXhGUVVGRkxFVkJRVVU3V1VGQlJ5eEpRVUZKTzJkQ1FVTnNSaXhUUVVGVExHTkJRV01zUTBGQlF5eERRVUZMTzI5Q1FVTjZRaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dHZRa0ZEYUVRc1RVRkJUU3hQUVVGUExFZEJRVWNzUlVGQlF5eGpRVUZqTEVWQlFVTXNSVUZCUlN4RlFVRkRMRU5CUVVNN2IwSkJRM0JETEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPM2RDUVVNNVFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPM2RDUVVNelF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3TkVKQlFVVXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenQ1UWtGQlJUdHZRa0ZEYWtRc1EwRkJReXhEUVVGRExFTkJRVUU3YjBKQlEwWXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dHZRa0ZEZEVNc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzI5Q1FVZHNSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMjlDUVVNelFpeE5RVUZOTEZGQlFWRXNSMEZCV1R0M1FrRkRkRUlzU1VGQlNTeEZRVUZuUWl4SlFVRkpPM2RDUVVONFFpeFJRVUZSTEVWQlFVVTdORUpCUTA0c1IwRkJSeXhGUVVGaExFZEJRVWM3TkVKQlEyNUNMRTlCUVU4c1JVRkJVeXhQUVVGUE96UkNRVU4yUWl4TlFVRk5MRVZCUVZVc1QwRkJUeXhEUVVGRExFMUJRVTA3TkVKQlF6bENMRTFCUVUwc1JVRkJWU3hKUVVGSkxFTkJRVU1zVFVGQlRUczBRa0ZETTBJc1ZVRkJWU3hGUVVGTkxFbEJRVWtzUTBGQlF5eE5RVUZOT3pSQ1FVTXpRaXhoUVVGaExFVkJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVU3TkVKQlEyNUVMRWRCUVVjc1JVRkJZU3hKUVVGSkxFTkJRVU1zVjBGQlZ6dDVRa0ZEYmtNN2NVSkJRMG9zUTBGQlF6dHZRa0ZEUml4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEzUkNMRU5CUVVNN1owSkJRMFFzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4alFVRmpMRVZCUVVVc1EwRkJRenRuUWtGRGFrTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZGZGtRc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUXpWRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pHTEVkQlFVY3NRMEZCUXl4WlFVRlpMRWRCUVVjc1IwRkJSeXhEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJRenRuUWtGREwwTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhqUVVGakxFTkJRVU03WjBKQlF6VkNMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZCTEVOQlFVTXNRMEZCUVN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4VFFVRlRMRU5CUVVNc1EwRkJRenRoUVVONlJEdFpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMmRDUVVOUUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTmlPMUZCUVVFc1EwRkJReXhEUVVGRExFTkJRVUU3U1VGRFVDeERRVUZETzBsQlJWTXNaMEpCUVdkQ0xFTkJRVU1zVjBGQmEwSTdVVUZEZWtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVONFF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGRExFTkJRVU1zUlVGQlJUdFpRVU5vUWl4UFFVRlBMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTTdVMEZETVVJN1lVRkJUVHRaUVVOSUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMSFZDUVVGMVFpeFhRVUZYTEhOQ1FVRnpRaXhEUVVGRExFTkJRVU03V1VGRGVFVXNUMEZCVHl4TFFVRkxMRU5CUVVNN1UwRkRhRUk3U1VGRFRDeERRVUZETzBsQlJWTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlpUdFJRVU4wUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6TkZMRU5CUVVNN08wRkJNVTlqTEc5Q1FVRlpMRWRCUVRCRExFVkJRVVVzUTBGQlF6dEJRVXN4UkN4blFrRkJVU3hIUVVGSE8wbEJRM0pDTEZGQlFWRXNSVUZCUnl4RFFVRkRMRWxCUVZjc1JVRkJSU3hGUVVGRkxFZEJRVWNzU1VGQlNUdFJRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlFUdExRVUZETzBsQlFVTXNUMEZCVFN4RFFVRkRMRVZCUVVVN1VVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlFUdExRVUZETEVOQlFVRXNRMEZCUXp0SlFVTnNSaXhUUVVGVExFVkJRWGRDTEZOQlFWTTdRMEZETjBNc1EwRkJRenRCUVhGUFRqdEpRVU5KTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJRenRKUVVOa0xFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXp0SlFVTnVRaXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVOQlFVTTdTVUZEYUVJc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETzBsQlEyaENMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF6dEpRVU5tTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzU1VGQlNTeERRVUZETzBsQlF6RkNMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNTMEZCU3l4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zTWtWQlFUSkZMRVZCUVVVc1MwRkJTeXhEUVVGRE8wbEJRM0JHTEVOQlFVTXNiVVZCUVcxRkxFVkJRVVVzUzBGQlN5eERRVUZETzBsQlF6VkZMRU5CUVVNc0swSkJRU3RDTEVWQlFVVXNTMEZCU3l4RFFVRkRPMGxCUTNoRExFTkJRVU1zTUVKQlFUQkNMRVZCUVVVc1MwRkJTeXhEUVVGRE8wbEJRMjVETEVOQlFVTXNaMFJCUVdkRUxFVkJRVVVzUzBGQlN5eERRVUZETzBsQlEzcEVMRU5CUVVNc01FSkJRVEJDTEVWQlFVVXNTMEZCU3l4RFFVRkRPME5CUTNSRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXlKOSIsImV4cG9ydCAqIGZyb20gJy4vUGFjaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vUmVxdWVzdCc7XG5leHBvcnQgKiBmcm9tICcuL0NoZWNrc3VtJztcbmV4cG9ydCAqIGZyb20gJy4vRGF0ZSc7XG5leHBvcnQgKiBmcm9tIFwiLi9sb2dcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0FycmF5XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1kwRkJhVUlzVlVGQlZTeERRVUZETzBGQlF6VkNMR05CUVdsQ0xGZEJRVmNzUTBGQlF6dEJRVU0zUWl4alFVRnBRaXhaUVVGWkxFTkJRVU03UVVGRE9VSXNZMEZCYVVJc1VVRkJVU3hEUVVGRE8wRkJRekZDTEdOQlFXbENMRTlCUVU4c1EwRkJRenRCUVVONlFpeGpRVUZwUWl4VFFVRlRMRU5CUVVNaWZRPT0iLCJpbXBvcnQgeyBkYXRlIH0gZnJvbSAnLi9EYXRlJztcbmNvbnN0IENPTE9SID0ge1xuICAgIGNsZWFyOiAnY29sb3I6IzAwMDsgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0OyBmb250LXdlaWdodDpub3JtYWw7JyxcbiAgICBib2xkOiAnZm9udC13ZWlnaHQ6Ym9sZDsnLFxuICAgIGRpbTogJycsXG4gICAgdW5kZXJzY29yZTogJycsXG4gICAgYmxpbms6ICcnLFxuICAgIHJldmVyc2U6ICcnLFxuICAgIGhpZGRlbjogJycsXG4gICAgYmxhY2s6ICdjb2xvcjojMDAwOycsXG4gICAgcmVkOiAnY29sb3I6I2YwMDsnLFxuICAgIGdyZWVuOiAnY29sb3I6IzBmMDsnLFxuICAgIHllbGxvdzogJ2NvbG9yOiNmZjA7JyxcbiAgICBibHVlOiAnY29sb3I6IzAwZjsnLFxuICAgIG1hZ2VudGE6ICdjb2xvcjojZjBmOycsXG4gICAgY3lhbjogJ2NvbG9yOiMwZmY7JyxcbiAgICB3aGl0ZTogJ2NvbG9yOiNmZmY7JyxcbiAgICBkYXJrcmVkOiAnY29sb3I6IzgwMDsnLFxuICAgIGRhcmtncmVlbjogJ2NvbG9yOiMwODA7JyxcbiAgICBkYXJreWVsbG93OiAnY29sb3I6Izg4MDsnLFxuICAgIGRhcmtibHVlOiAnY29sb3I6IzAwODsnLFxuICAgIGRhcmttYWdlbnRhOiAnY29sb3I6IzgwODsnLFxuICAgIGRhcmtjeWFuOiAnY29sb3I6IzA4ODsnLFxuICAgIGdyYXk6ICdjb2xvcjojODg4OycsXG4gICAgYmdCbGFjazogJ2JhY2tncm91bmQtY29sb3I6IzAwMDsnLFxuICAgIGJnUmVkOiAnYmFja2dyb3VuZC1jb2xvcjojZjAwOycsXG4gICAgYmdHcmVlbjogJ2JhY2tncm91bmQtY29sb3I6IzBmMDsnLFxuICAgIGJnWWVsbG93OiAnYmFja2dyb3VuZC1jb2xvcjojZmYwOycsXG4gICAgYmdCbHVlOiAnYmFja2dyb3VuZC1jb2xvcjojMDBmOycsXG4gICAgYmdNYWdlbnRhOiAnYmFja2dyb3VuZC1jb2xvcjojZjBmOycsXG4gICAgYmdDeWFuOiAnYmFja2dyb3VuZC1jb2xvcjojMGZmOycsXG4gICAgYmdXaGl0ZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZjsnXG59O1xuZXhwb3J0IGNsYXNzIExvZyB7XG4gICAgY29uc3RydWN0b3IocHJlZml4KSB7XG4gICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gJyc7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoID0gLTE7XG4gICAgICAgIHRoaXMuY29sb3JzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSBwcmVmaXg7XG4gICAgfVxuICAgIHNldCBtZXNzYWdlTGVuZ3RoKG1heCkgeyB0aGlzLm1heExlbmd0aCA9IG1heDsgfVxuICAgIGdldCBtZXNzYWdlTGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5tYXhMZW5ndGg7IH1cbiAgICBsZXZlbChuZXdMZXZlbFN5bSwgc2V0R2xvYmFsTGV2ZWwpIHtcbiAgICAgICAgbGV0IG5ld0xldmVsID0gTG9nLmxldmVsc1tuZXdMZXZlbFN5bV0gfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBsZXQgb2xkTGV2ZWwgPSB0aGlzLnJlcG9ydExldmVsIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgaWYgKG5ld0xldmVsU3ltID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0xldmVsID0gb2xkTGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3TGV2ZWxTeW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTG9nLmxldmVsc1tuZXdMZXZlbFN5bV0pIHtcbiAgICAgICAgICAgIGlmIChzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICAgICAgICAgIExvZy5nbG9iYWxMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbXNnID0gYG5ldyAke3NldEdsb2JhbExldmVsID8gJ2dsb2JhbCcgOiB0aGlzLnJlcG9ydFByZWZpeH0gbG9nIGxldmVsICR7bmV3TGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSAod2FzICR7b2xkTGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSlgO1xuICAgICAgICAgICAgKG5ld0xldmVsLnN5bSA9PT0gb2xkTGV2ZWwuc3ltKSA/IHRoaXMuZGVidWcobXNnKSA6IHRoaXMuaW5mbyhtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgdW5rb3duIGxldmVsICR7bmV3TGV2ZWxTeW19OyBsb2cgbGV2ZWwgcmVtYWlucyAke29sZExldmVsLnN5bX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TGV2ZWwuc3ltO1xuICAgIH1cbiAgICBkZWJ1Zyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5ERUJVRywgbXNnLCB7IGNvbG9yOiBbJ2dyYXknXSB9KTsgfVxuICAgIHRyYW5zaWVudChtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2dyZWVuJ10sIGxmOiAnXFxyJyB9KTsgfVxuICAgIHByb2dyZXNzKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLklORk8sIG1zZywgeyBjb2xvcjogWydkYXJrYmx1ZSddIH0pOyB9XG4gICAgaW5mbyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2dyZWVuJ10gfSk7IH1cbiAgICB3YXJuKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLldBUk4sIG1zZywgeyBjb2xvcjogWydkYXJreWVsbG93JywgJ2JvbGQnXSB9KTsgfVxuICAgIGVycm9yKG1zZykge1xuICAgICAgICBjb25zdCBjb2xvciA9IFsnZGFya3JlZCcsICdib2xkJ107XG4gICAgICAgIGlmIChtc2cubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2cubWVzc2FnZSwgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgICAgICB0aGlzLm91dChMb2cuRVJST1IsIG1zZy5zdGFjaywgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgICAgICByZXR1cm4gbXNnLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2csIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG91dChsdmwsIG1zZywgb3B0aW9ucykge1xuICAgICAgICBsZXQgZGVzYyA9IExvZy5sZXZlbHNbbHZsXTtcbiAgICAgICAgY29uc3QgZmlsdGVyTGV2ZWwgPSB0aGlzLnJlcG9ydExldmVsIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgaWYgKGRlc2MuaW1wb3J0YW5jZSA+PSBmaWx0ZXJMZXZlbC5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICBsZXQgbGluZTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIG1zZykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IG1zZygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICBsaW5lID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGxpbmUgPSB0aGlzLmluc3BlY3QobXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHIgPSBkYXRlKExvZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoICYmIHRoaXMubWF4TGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBgJHtsaW5lLnNsaWNlKDAsIHRoaXMubWF4TGVuZ3RoIC8gMiAtIDIpfS4uLiR7bGluZS5zbGljZSgtdGhpcy5tYXhMZW5ndGggLyAyICsgMil9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cuc3RhY2spIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gYCR7bGluZX1cXG4ke21zZy5zdGFja31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gYCR7ZGF0ZVN0cn0gJHt0aGlzLnJlcG9ydFByZWZpeH0gJHtkZXNjLmRlc2N9YDtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KG9wdGlvbnMuY29sb3IsIGhlYWRlciwgbGluZSk7XG4gICAgICAgICAgICByZXR1cm4gbGluZSArIChvcHRpb25zLmxmIHx8ICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvdXRwdXQoY29sb3IsIGhlYWRlciwgbGluZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJWMke2hlYWRlcn0lYyAke2xpbmV9YCwgY29sb3IubWFwKGMgPT4gQ09MT1JbY10pLmpvaW4oJyAnKSwgQ09MT1JbJ2NsZWFyJ10pO1xuICAgIH1cbiAgICBmb3JtYXQoZm10U3RyKSB7XG4gICAgICAgIGlmIChmbXRTdHIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIExvZy5kYXRlRm9ybWF0ID0gTG9nLmRlZkRhdGVGb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm10U3RyKSB7XG4gICAgICAgICAgICBMb2cuZGF0ZUZvcm1hdCA9IGZtdFN0cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTG9nLmRhdGVGb3JtYXQ7XG4gICAgfVxuICAgIHByZWZpeChwcmYpIHtcbiAgICAgICAgaWYgKHByZikge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSBwcmY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3J0UHJlZml4O1xuICAgIH1cbiAgICBjb25maWcoY2ZnKSB7XG4gICAgICAgIGlmIChjZmcuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0KGNmZy5mb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcubGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbChjZmcubGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcuY29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JzID0gY2ZnLmNvbG9ycztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnNwZWN0KG1zZywgeyBkZXB0aCA9IC0xLCBpbmRlbnQgPSAnICAgJywgY29sb3JzID0gTG9nLklOREVOVF9DT0xPUlMgfSA9IHsgZGVwdGg6IDAsIGluZGVudDogJyAgICcsIGNvbG9yczogTG9nLklOREVOVF9DT0xPUlMgfSkge1xuICAgICAgICBmdW5jdGlvbiBfaW5zcGVjdChtc2csIGRlcHRoLCBsZXZlbCwgY3VyckluZGVudCkge1xuICAgICAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAnJHttc2d9J2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobXNnLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSA/ICd7Li4ufScgOiAnWy4uLl0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgWyR7bXNnLm1hcCgoZSkgPT4gKGUgPT09IHVuZGVmaW5lZCkgPyAnJyA6IF9pbnNwZWN0KGUsIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50KSkuam9pbignLCAnKX1dYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgW3ByZWZpeCwgcG9zdGZpeCwgbGYsIHBvc3RJbmRlbnRdID0gbG9nLmdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCwgY29sb3JzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHske2xmfWAgKyBPYmplY3Qua2V5cyhtc2cpLm1hcChrID0+IGAke3ByZWZpeH0ke2t9JHtwb3N0Zml4fTogJHtfaW5zcGVjdChtc2dba10sIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50ICsgaW5kZW50KX1gKS5qb2luKGAsJHtsZn1gKSArIGAke2xmfSR7cG9zdEluZGVudH19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtc2cudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2cgPSB0aGlzO1xuICAgICAgICByZXR1cm4gX2luc3BlY3QobXNnLCAoZGVwdGggIT09IHVuZGVmaW5lZCAmJiBkZXB0aCAhPT0gbnVsbCAmJiBkZXB0aCA+PSAwKSA/IGRlcHRoIDogOTk5LCAwLCAnJyk7XG4gICAgfVxuICAgIGdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCwgY29sb3JzKSB7XG4gICAgICAgIGxldCBjc3RhcnQgPSAnJywgY3N0b3AgPSAnJywgbGYgPSAnXFxuJztcbiAgICAgICAgaWYgKGNvbG9ycykge1xuICAgICAgICAgICAgaW5kZW50ID0gaW5kZW50LnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xuICAgICAgICAgICAgY3VyckluZGVudCA9IGN1cnJJbmRlbnQucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SW2NvbG9yc1tsZXZlbCAlIGNvbG9ycy5sZW5ndGhdXSB8fCBjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXTtcbiAgICAgICAgICAgIGNzdGFydCA9IGA8Yj48c3BhbiBzdHlsZT0nJHtjb2xvcn0nPmA7XG4gICAgICAgICAgICBjc3RvcCA9IGA8L3NwYW4+PC9iPmA7XG4gICAgICAgICAgICBsZiA9ICc8YnI+JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Ake2N1cnJJbmRlbnR9JHtpbmRlbnR9JHtjc3RhcnR9YCwgYCR7Y3N0b3B9YCwgY29sb3JzID8gJzxicj4nIDogJ1xcbicsIGN1cnJJbmRlbnRdO1xuICAgIH1cbn1cbkxvZy5JTkRFTlRfQ09MT1JTID0gWydkYXJrYmx1ZScsICdkYXJrZ3JlZW4nLCAnZGFya3JlZCcsICdkYXJrY3lhbicsICdkYXJreWVsbG93JywgJ2RhcmttYWdlbnRhJ107XG5Mb2cuZGVmRGF0ZUZvcm1hdCA9ICclWVlZWSVNTSVERCAlaGg6JW1tOiVzcy4lampqJztcbkxvZy5kYXRlRm9ybWF0ID0gTG9nLmRlZkRhdGVGb3JtYXQ7XG5Mb2cuREVCVUcgPSAnREVCVUcnO1xuTG9nLklORk8gPSAnSU5GTyc7XG5Mb2cuV0FSTiA9ICdXQVJOJztcbkxvZy5FUlJPUiA9ICdFUlJPUic7XG5Mb2cubGV2ZWxzID0ge1xuICAgIFtMb2cuREVCVUddOiB7IGltcG9ydGFuY2U6IDAsIHN5bTogTG9nLkRFQlVHLCBkZXNjOiAnREVCVUcnIH0sXG4gICAgW0xvZy5JTkZPXTogeyBpbXBvcnRhbmNlOiAxLCBzeW06IExvZy5JTkZPLCBkZXNjOiAnSU5GTycgfSxcbiAgICBbTG9nLldBUk5dOiB7IGltcG9ydGFuY2U6IDIsIHN5bTogTG9nLldBUk4sIGRlc2M6ICdXQVJOJyB9LFxuICAgIFtMb2cuRVJST1JdOiB7IGltcG9ydGFuY2U6IDMsIHN5bTogTG9nLkVSUk9SLCBkZXNjOiAnRVJST1InIH1cbn07XG5Mb2cubG9nID0gbmV3IExvZygnJyk7XG5Mb2cuZ2xvYmFsTGV2ZWwgPSBMb2cubGV2ZWxzW0xvZy5JTkZPXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGdlJrRXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxGRkJRVkVzUTBGQlF6dEJRVWs1UWl4TlFVRk5MRXRCUVVzc1IwRkJSenRKUVVOV0xFdEJRVXNzUlVGQlR5d3lSRUZCTWtRN1NVRkZka1VzU1VGQlNTeEZRVUZSTEcxQ1FVRnRRanRKUVVNdlFpeEhRVUZITEVWQlFWTXNSVUZCUlR0SlFVTmtMRlZCUVZVc1JVRkJSU3hGUVVGRk8wbEJRMlFzUzBGQlN5eEZRVUZQTEVWQlFVVTdTVUZEWkN4UFFVRlBMRVZCUVVzc1JVRkJSVHRKUVVOa0xFMUJRVTBzUlVGQlRTeEZRVUZGTzBsQlJXUXNTMEZCU3l4RlFVRlBMR0ZCUVdFN1NVRkRla0lzUjBGQlJ5eEZRVUZUTEdGQlFXRTdTVUZEZWtJc1MwRkJTeXhGUVVGUExHRkJRV0U3U1VGRGVrSXNUVUZCVFN4RlFVRk5MR0ZCUVdFN1NVRkRla0lzU1VGQlNTeEZRVUZSTEdGQlFXRTdTVUZEZWtJc1QwRkJUeXhGUVVGTExHRkJRV0U3U1VGRGVrSXNTVUZCU1N4RlFVRlJMR0ZCUVdFN1NVRkRla0lzUzBGQlN5eEZRVUZQTEdGQlFXRTdTVUZGZWtJc1QwRkJUeXhGUVVGTExHRkJRV0U3U1VGRGVrSXNVMEZCVXl4RlFVRkhMR0ZCUVdFN1NVRkRla0lzVlVGQlZTeEZRVUZGTEdGQlFXRTdTVUZEZWtJc1VVRkJVU3hGUVVGSkxHRkJRV0U3U1VGRGVrSXNWMEZCVnl4RlFVRkRMR0ZCUVdFN1NVRkRla0lzVVVGQlVTeEZRVUZKTEdGQlFXRTdTVUZEZWtJc1NVRkJTU3hGUVVGUkxHRkJRV0U3U1VGRmVrSXNUMEZCVHl4RlFVRkxMSGRDUVVGM1FqdEpRVU53UXl4TFFVRkxMRVZCUVU4c2QwSkJRWGRDTzBsQlEzQkRMRTlCUVU4c1JVRkJTeXgzUWtGQmQwSTdTVUZEY0VNc1VVRkJVU3hGUVVGSkxIZENRVUYzUWp0SlFVTndReXhOUVVGTkxFVkJRVTBzZDBKQlFYZENPMGxCUTNCRExGTkJRVk1zUlVGQlJ5eDNRa0ZCZDBJN1NVRkRjRU1zVFVGQlRTeEZRVUZOTEhkQ1FVRjNRanRKUVVOd1F5eFBRVUZQTEVWQlFVc3NkMEpCUVhkQ08wTkJRM1pETEVOQlFVTTdRVUZsUml4TlFVRk5MRTlCUVU4c1IwRkJSenRKUVhGRFdpeFpRVUZaTEUxQlFXRTdVVUZNWml4blFrRkJWeXhIUVVGblFpeFRRVUZUTEVOQlFVTTdVVUZEY2tNc2FVSkJRVmtzUjBGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYmtJc1kwRkJVeXhIUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNUNMRmRCUVUwc1IwRkJWU3hKUVVGSkxFTkJRVU03VVVGRlJpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVGRExFTkJRVU03U1VGUk1VUXNTVUZCVnl4aFFVRmhMRU5CUVVNc1IwRkJWU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVjNVJDeEpRVUZYTEdGQlFXRXNTMEZCU3l4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzBsQmJVSTVReXhMUVVGTExFTkJRVU1zVjBGQmJVSXNSVUZCUlN4alFVRjFRanRSUVVOeVJDeEpRVUZKTEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRNVVFzU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEyNUVMRWxCUVVrc1YwRkJWeXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU16UWl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xTkJRM1pDTzJGQlFVMHNTVUZCU1N4WFFVRlhMRXRCUVVzc1NVRkJTU3hGUVVGRk8xbEJRemRDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJRMmhETzJGQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTzFsQlEyaERMRWxCUVVrc1kwRkJZeXhGUVVGRk8yZENRVUZGTEVkQlFVY3NRMEZCUXl4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJRVVU3YVVKQlF5OUNPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUVVVN1dVRkRjRVFzVFVGQlRTeEhRVUZITEVkQlFVY3NUMEZCVHl4alFVRmpMRU5CUVVFc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1kwRkJZeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4VFFVRlRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0WlFVTm9TaXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEV0QlFVc3NVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM0pGTzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4WFFVRlhMSFZDUVVGMVFpeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOb1JqdFJRVU5FTEU5QlFVOHNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlUwMHNTMEZCU3l4RFFVRkRMRWRCUVU4c1NVRkJWeXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlV5OUZMRk5CUVZNc1EwRkJReXhIUVVGUExFbEJRVmNzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJVMmhITEZGQlFWRXNRMEZCUXl4SFFVRlBMRWxCUVZjc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRV0Z5Uml4SlFVRkpMRU5CUVVNc1IwRkJUeXhKUVVGWExFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZUYkVZc1NVRkJTU3hEUVVGRExFZEJRVThzU1VGQlZ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZVelJpeExRVUZMTEVOQlFVTXNSMEZCVHp0UlFVTm9RaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOc1F5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRZaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMjVFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYWtRc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETzFOQlEzUkNPMkZCUVUwN1dVRkRTQ3hQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOeVJEdEpRVU5NTEVOQlFVTTdTVUZoVXl4SFFVRkhMRU5CUVVNc1IwRkJWU3hGUVVGRkxFZEJRVThzUlVGQlJTeFBRVUZYTzFGQlF6RkRMRWxCUVVrc1NVRkJTU3hIUVVGaExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRja01zVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEzaEVMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzU1VGQlNTeFhRVUZYTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUXpORExFbEJRVWtzU1VGQlNTeERRVUZETzFsQlExUXNVVUZCVHl4UFFVRlBMRWRCUVVjc1JVRkJSVHRuUWtGRFppeExRVUZMTEZWQlFWVTdiMEpCUVVVc1NVRkJTU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzI5Q1FVRkRMRTFCUVUwN1owSkJRM0pETEV0QlFVc3NVVUZCVVR0dlFrRkJTU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzI5Q1FVRkRMRTFCUVUwN1owSkJRMjVETEV0QlFVc3NVVUZCVVN4RFFVRkRPMmRDUVVOa0xFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzSkRPMWxCUTBRc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGRGJFUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVTXNRMEZCUXl4SFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVUU3WVVGRGNrWTdXVUZEUkN4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3WjBKQlFVVXNTVUZCU1N4SFFVRkhMRWRCUVVjc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0aFFVRkZPMWxCUTJ4RUxFMUJRVTBzVFVGQlRTeEhRVUZITEVkQlFVY3NUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUXpsRUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEZWtNc1QwRkJUeXhKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4SlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRMnhETzFGQlEwUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVWxUTEUxQlFVMHNRMEZCUXl4TFFVRmpMRVZCUVVVc1RVRkJZU3hGUVVGRkxFbEJRVmM3VVVGRGRrUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFMUJRVTBzVFVGQlRTeEpRVUZKTEVWQlFVVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVRXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6VkdMRU5CUVVNN1NVRlpUU3hOUVVGTkxFTkJRVU1zVFVGQll6dFJRVU40UWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGQlJTeEhRVUZITEVOQlFVTXNWVUZCVlN4SFFVRkhMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU03VTBGQlJUdGhRVU4yUkN4SlFVRkpMRTFCUVUwc1JVRkJUVHRaUVVGRkxFZEJRVWNzUTBGQlF5eFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRPMU5CUVVVN1VVRkRha1FzVDBGQlR5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGUFRTeE5RVUZOTEVOQlFVTXNSMEZCVnp0UlFVTnlRaXhKUVVGSkxFZEJRVWNzUlVGQlJUdFpRVUZGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1IwRkJSeXhEUVVGRE8xTkJRVVU3VVVGRGNrTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZWVFN4TlFVRk5MRU5CUVVNc1IwRkJjVVE3VVVGREwwUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGSExGTkJRVk1zUlVGQlJUdFpRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlFVVTdVVUZEZUVRc1NVRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eExRVUZITEZOQlFWTXNSVUZCUnp0WlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUVVVN1VVRkRkRVFzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4TFFVRkhMRk5CUVZNc1JVRkJSVHRaUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRenRUUVVGRk8wbEJRemRFTEVOQlFVTTdTVUZwUWswc1QwRkJUeXhEUVVGRExFZEJRVThzUlVGQlJTeEZRVUZETEV0QlFVc3NSMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hOUVVGTkxFZEJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNSMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hGUVVGRExFZEJRVU1zUlVGQlF5eExRVUZMTEVWQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeEZRVUZETEVkQlFVY3NRMEZCUXl4aFFVRmhMRVZCUVVNN1VVRkRlRWdzVTBGQlV5eFJRVUZSTEVOQlFVTXNSMEZCVHl4RlFVRkZMRXRCUVZrc1JVRkJSU3hMUVVGWkxFVkJRVVVzVlVGQmFVSTdXVUZEY0VVc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeEZRVUZuUWp0blFrRkJSU3hQUVVGUExFMUJRVTBzUTBGQlF6dGhRVUZGTzFsQlEyeEVMRWxCUVVrc1IwRkJSeXhMUVVGTExGTkJRVk1zUlVGQlZ6dG5Ra0ZCUlN4UFFVRlBMRmRCUVZjc1EwRkJRenRoUVVGRk8xbEJRM1pFTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1ZVRkJWU3hGUVVGSE8yZENRVUZGTEU5QlFVOHNWVUZCVlN4RFFVRkRPMkZCUVVVN1dVRkRkRVFzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRVZCUVVzN1owSkJRVVVzVDBGQlR5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMkZCUVVVN1dVRkRkRVFzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRVZCUVVzN1owSkJRelZDTEVsQlFVa3NTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRFZDeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1MwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03YVVKQlEzUkVPMmRDUVVORUxFbEJRVWtzUjBGQlJ5eERRVUZETEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN2IwSkJRM1pDTEU5QlFVOHNTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlN5eEZRVUZETEVWQlFVVXNRMEZCUVN4RFFVRkRMRU5CUVVNc1MwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVRXNSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJRU3hSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETzJsQ1FVTXpSenRuUWtGRFJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRkxFVkJRVVVzVlVGQlZTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRuUWtGREwwWXNUMEZCVHl4SlFVRkpMRVZCUVVVc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhIUVVGSExFOUJRVThzUzBGREwwUXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVkQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeEhRVUZETEUxQlFVMHNRMEZEZUVRc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUjBGQlJ5eFZRVUZWTEVkQlFVY3NRMEZCUXp0aFFVTTVRenRaUVVORUxFOUJRVThzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUXpGQ0xFTkJRVU03VVVGRFJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkZha0lzVDBGQlR5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1MwRkJTeXhMUVVGSExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVY3NTVUZCU1N4SlFVRkpMRXRCUVVzc1NVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXk5R0xFTkJRVU03U1VGRlV5eGhRVUZoTEVOQlFVTXNUVUZCWVN4RlFVRkZMRXRCUVZrc1JVRkJSU3hWUVVGcFFpeEZRVUZGTEUxQlFXVTdVVUZEYmtZc1NVRkJTU3hOUVVGTkxFZEJRVWNzUlVGQlJTeEZRVUZGTEV0QlFVc3NSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU4yUXl4SlFVRkpMRTFCUVUwc1JVRkJSVHRaUVVOU0xFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU40UXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkZhRVFzVFVGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRjRVlzVFVGQlRTeEhRVUZKTEcxQ1FVRnRRaXhMUVVGTExFbEJRVWtzUTBGQlF6dFpRVU4yUXl4TFFVRkxMRWRCUVVzc1lVRkJZU3hEUVVGRE8xbEJRM2hDTEVWQlFVVXNSMEZCVVN4TlFVRk5MRU5CUVVNN1UwRkRjRUk3VVVGRFJDeFBRVUZQTEVOQlFVTXNSMEZCUnl4VlFVRlZMRWRCUVVjc1RVRkJUU3hIUVVGSExFMUJRVTBzUlVGQlJTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RlFVRkZMRVZCUVVVc1RVRkJUU3hEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dEpRVU01Uml4RFFVRkRPenRCUVRWU1owSXNhVUpCUVdFc1IwRkJSeXhEUVVGRExGVkJRVlVzUlVGQlJTeFhRVUZYTEVWQlFVVXNVMEZCVXl4RlFVRkZMRlZCUVZVc1JVRkJSU3haUVVGWkxFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTTdRVUZGT1VZc2FVSkJRV0VzUjBGQlJ5dzRRa0ZCT0VJc1EwRkJRenRCUVVNdlF5eGpRVUZWTEVkQlFVMHNSMEZCUnl4RFFVRkRMR0ZCUVdFc1EwRkJRenRCUVVkeVF5eFRRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRPMEZCUjJoQ0xGRkJRVWtzUjBGQlN5eE5RVUZOTEVOQlFVTTdRVUZIYUVJc1VVRkJTU3hIUVVGTExFMUJRVTBzUTBGQlF6dEJRVWRvUWl4VFFVRkxMRWRCUVVrc1QwRkJUeXhEUVVGRE8wRkJSMlFzVlVGQlRTeEhRVUZITzBsQlEzUkNMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZMTEVWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRE8wbEJRemxFTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGTkxFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJ5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkRPMGxCUXpkRUxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRk5MRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSeXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZETzBsQlF6ZEVMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZMTEVWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRE8wTkJRMnBGTEVOQlFVTTdRVUZIV1N4UFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZIWml4bFFVRlhMRWRCUVdFc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbXCJjcnlwdG9cIl07IH0oKSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9iaW4vZXNtL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==