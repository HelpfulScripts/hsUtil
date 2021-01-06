this.hsUtil =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sT0FBZ0IsSUFBSTtJQUl0QixZQUFtQixRQUFlLEVBQUUsUUFBZTtRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBR0oifQ==

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthBasic": () => /* binding */ AuthBasic
/* harmony export */ });
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ "./bin/esm/Request.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "./bin/esm/Auth.js");
;

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
_Request__WEBPACK_IMPORTED_MODULE_0__.Authenticators.addAuthProvider('Basic', (credentials) => new AuthBasic(credentials.user, credentials.password));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEJhc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0F1dGhCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVcsY0FBYyxFQUFlLE1BQ3RCLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQVUsUUFBUSxDQUFDO0FBR2xDLE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSTtJQUMvQixRQUFRLENBQUMsT0FBZTtRQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFpQjtJQUM1QixNQUFNLE1BQU0sR0FBRyxHQUFHLFlBQVksTUFBTSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsY0FBYyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUF1QixFQUFPLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBIn0=

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
/*! export Authenticators [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Request [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authenticators": () => /* binding */ Authenticators,
/* harmony export */   "Request": () => /* binding */ Request
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pacing */ "./bin/esm/Pacing.js");
;
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('Request');

log.messageLength = 120;
class Authenticators {
    static addAuthProvider(name, provider) {
        Authenticators.authProviders.push({ name: name, provider: provider });
    }
    static get(authRequest, credentials, url) {
        if (!authRequest) {
            return undefined;
        }
        else if (!credentials) {
            throw `credentials missing; call 'setCredentials' before calling 'get' for url ${url}`;
        }
        let auth = Authenticators.auths[url];
        if (!auth) {
            const method = authRequest.split(' ')?.[0];
            if (!Authenticators.authProviders.some(entry => {
                if (method === entry.name)
                    return auth = entry.provider(credentials);
            }))
                throw `unimplemented authentication method ${authRequest} for '${url}'; ensure the proper authentication model is imported`;
        }
        return auth;
    }
}
Authenticators.auths = {};
Authenticators.authProviders = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFVBQVUsQ0FBQztBQUd4QyxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztBQXlEeEIsTUFBTSxPQUFPLGNBQWM7SUFHaEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFXLEVBQUUsUUFBd0M7UUFDL0UsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQWtCLEVBQUUsV0FBdUIsRUFBRSxHQUFVO1FBQ3JFLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDZCxPQUFPLFNBQVMsQ0FBQTtTQUNuQjthQUFNLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsTUFBTSwyRUFBMkUsR0FBRyxFQUFFLENBQUM7U0FDMUY7UUFDRCxJQUFJLElBQUksR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLE1BQU0sS0FBSyxLQUFLLENBQUMsSUFBSTtvQkFBRSxPQUFPLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3hFLENBQUMsQ0FBQztnQkFBRSxNQUFNLHVDQUF1QyxXQUFXLFNBQVMsR0FBRyx1REFBdUQsQ0FBQztTQUNuSTtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQzs7QUFuQmMsb0JBQUssR0FBdUIsRUFBRSxDQUFBO0FBQzlCLDRCQUFhLEdBQTZELEVBQUUsQ0FBQTtBQXNCL0YsTUFBTSxPQUFPLE9BQU87SUFBcEI7UUFZYyxRQUFHLEdBQVEsR0FBRyxDQUFDO1FBZ0JsQixtQkFBYyxHQUFHLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBRyxTQUFTLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUN4RixDQUFDLENBQUE7UUFHTSxpQkFBWSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFRbkIsWUFBTyxHQUFHLENBQUMsRUFBQyxJQUFJLEdBQUMsRUFBRSxFQUFFLEdBQUcsR0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEdBQUMsR0FBRyxLQUFFLEVBQUMsSUFBSSxFQUFNLElBQUksRUFBQyxFQUFFLEVBQUU7WUFDMUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7UUFDM0gsQ0FBQyxDQUFBO1FBS00sY0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQVFqQyxXQUFNLEdBQVksU0FBUyxDQUFDO0lBdUt2QyxDQUFDO0lBOU5VLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBVyxFQUFFLE1BQWM7UUFDcEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQThETSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQWMsRUFBRSxFQUFDLFNBQVMsR0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFDLEVBQUUsRUFBQyxHQUFDLEVBQUU7UUFDNUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVNNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBYyxFQUFFLFFBQVksRUFBRSxFQUFDLE9BQU8sR0FBQyxFQUFFLEVBQUMsR0FBQyxFQUFFO1FBQzFELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBU00sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFjLEVBQUUsUUFBWSxFQUFFLEVBQUMsT0FBTyxHQUFDLEVBQUUsRUFBQyxHQUFDLEVBQUU7UUFDM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFUyxNQUFNLENBQUMsR0FBYztRQUMzQixPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN2RSxDQUFDO0lBRVMsVUFBVSxDQUFDLEdBQWMsRUFBRSxNQUFhO1FBQzlDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sTUFBTSxHQUE0QyxFQUFFLENBQUM7UUFDM0QsTUFBTSxPQUFPLEdBQUc7WUFDWixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLE1BQU0sRUFBTSxNQUFNO1lBQ2xCLFFBQVEsRUFBSSxHQUFHLENBQUMsUUFBUTtZQUN4QixJQUFJLEVBQVEsR0FBRyxDQUFDLElBQUk7WUFDcEIsUUFBUSxFQUFJLEdBQUcsQ0FBQyxRQUFRO1lBQ3hCLElBQUksRUFBUSxHQUFHLENBQUMsSUFBSTtZQUNwQixRQUFRLEVBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRO1lBQ2pDLElBQUksRUFBUSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1lBQ3RELE9BQU8sRUFBVSxFQUFFO1lBRW5CLEdBQUcsRUFBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUU7U0FDMUYsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FBRTtRQUNuRSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBYVMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFlLEVBQUUsU0FBaUIsRUFBRSxPQUFXLEVBQUUsUUFBYTtRQUN6RixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2RSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBRyxLQUFLLEVBQUU7WUFDOUQsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFTLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRVMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFlLEVBQUUsU0FBaUIsRUFBRSxRQUFhO1FBQzVFLElBQUksT0FBMEIsQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxPQUFPLENBQUMsTUFBTSxRQUFRLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2hILE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdEc7YUFBTTtZQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM3QztRQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FBRTtRQUV6SSxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRVMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFlLEVBQUUsUUFBYTtRQUNsRCxJQUFJO1lBQ0EsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1RCxNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUcsT0FBTyxJQUFJLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUNuRjtRQUFDLE9BQU0sQ0FBQyxFQUFFO1lBQ1AsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3pFLE1BQU0sb0JBQW9CLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBRVMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFlLEVBQUUsUUFBYTtRQUN2RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBNEIsRUFBRSxNQUF5QixFQUFFLEVBQUU7WUFBRyxJQUFJO2dCQUNsRixTQUFTLGNBQWMsQ0FBQyxDQUFLO29CQUN6QixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDaEQsTUFBTSxPQUFPLEdBQUcsRUFBQyxjQUFjLEVBQUMsRUFBRSxFQUFDLENBQUM7b0JBQ3BDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM5QixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7NEJBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFBRTtvQkFDakQsQ0FBQyxDQUFDLENBQUE7b0JBQ0YsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDdEMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUdsRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUMzQixNQUFNLFFBQVEsR0FBWTt3QkFDdEIsSUFBSSxFQUFnQixJQUFJO3dCQUN4QixRQUFRLEVBQUU7NEJBQ04sR0FBRyxFQUFhLEdBQUc7NEJBQ25CLE9BQU8sRUFBUyxPQUFPOzRCQUN2QixNQUFNLEVBQVUsT0FBTyxDQUFDLE1BQU07NEJBQzlCLE1BQU0sRUFBVSxJQUFJLENBQUMsTUFBTTs0QkFDM0IsVUFBVSxFQUFNLElBQUksQ0FBQyxNQUFNOzRCQUMzQixhQUFhLEVBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ25ELEdBQUcsRUFBYSxJQUFJLENBQUMsV0FBVzt5QkFDbkM7cUJBQ0osQ0FBQztvQkFDRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDakMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZGLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDL0MsR0FBRyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUMsQ0FBQSxTQUFTLENBQUMsQ0FBQzthQUN6RDtZQUFDLE9BQU0sQ0FBQyxFQUFFO2dCQUNQLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiO1FBQUEsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBRVMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQWtCO1FBQ2hELElBQUksV0FBVyxLQUFHLFNBQVMsRUFBRTtZQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUE7WUFDbEQsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUMxQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsV0FBVyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ25FLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVTLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFlO1FBQzdDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7QUE5TmMsb0JBQVksR0FBMEMsRUFBRSxDQUFDO0FBSzFELGdCQUFRLEdBQUc7SUFDckIsUUFBUSxFQUFHLENBQUMsSUFBVyxFQUFFLEVBQUUsR0FBRyxJQUFJO1FBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQUM7SUFBQyxPQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sRUFBRSxDQUFBO0tBQUMsQ0FBQSxDQUFDO0lBQ2xGLFNBQVMsRUFBd0IsU0FBUztDQUM3QyxDQUFDO0FBeU5OO0lBQ0ksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO0lBQ2QsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO0lBQ25CLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUNoQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDaEIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO0lBQ2YsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUM7SUFDMUIsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUM7SUFDMUIsQ0FBQywyRUFBMkUsRUFBRSxLQUFLLENBQUM7SUFDcEYsQ0FBQyxtRUFBbUUsRUFBRSxLQUFLLENBQUM7SUFDNUUsQ0FBQywrQkFBK0IsRUFBRSxLQUFLLENBQUM7SUFDeEMsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUM7SUFDbkMsQ0FBQyxnREFBZ0QsRUFBRSxLQUFLLENBQUM7SUFDekQsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUM7Q0FDdEMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIn0=

/***/ }),

/***/ "./bin/esm/index.js":
/*!**************************!*\
  !*** ./bin/esm/index.js ***!
  \**************************/
/*! namespace exports */
/*! export Auth [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Auth.js .Auth */
/*! export Authenticators [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Request.js .Authenticators */
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pace": () => /* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.Pace,
/* harmony export */   "delay": () => /* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.delay,
/* harmony export */   "timeout": () => /* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.timeout,
/* harmony export */   "Authenticators": () => /* reexport safe */ _Request__WEBPACK_IMPORTED_MODULE_1__.Authenticators,
/* harmony export */   "Request": () => /* reexport safe */ _Request__WEBPACK_IMPORTED_MODULE_1__.Request,
/* harmony export */   "shortCheckSum": () => /* reexport safe */ _Checksum__WEBPACK_IMPORTED_MODULE_2__.shortCheckSum,
/* harmony export */   "date": () => /* reexport safe */ _Date__WEBPACK_IMPORTED_MODULE_3__.date,
/* harmony export */   "ms": () => /* reexport safe */ _Date__WEBPACK_IMPORTED_MODULE_3__.ms,
/* harmony export */   "Log": () => /* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_4__.Log,
/* harmony export */   "uniquefy": () => /* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_5__.uniquefy,
/* harmony export */   "Auth": () => /* reexport safe */ _Auth__WEBPACK_IMPORTED_MODULE_6__.Auth
/* harmony export */ });
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pacing */ "./bin/esm/Pacing.js");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Request */ "./bin/esm/Request.js");
/* harmony import */ var _Checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checksum */ "./bin/esm/Checksum.js");
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Date */ "./bin/esm/Date.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array */ "./bin/esm/Array.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Auth */ "./bin/esm/Auth.js");
/* harmony import */ var _AuthBasic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthBasic */ "./bin/esm/AuthBasic.js");








//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBaUIsVUFBVSxDQUFDO0FBQzVCLGNBQWlCLFdBQVcsQ0FBQztBQUM3QixjQUFpQixZQUFZLENBQUM7QUFDOUIsY0FBaUIsUUFBUSxDQUFDO0FBQzFCLGNBQWlCLE9BQU8sQ0FBQztBQUN6QixjQUFpQixTQUFTLENBQUM7QUFDM0IsY0FBaUIsUUFBUSxDQUFDO0FBRzFCLE9BQU8sYUFBYSxDQUFDIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0FycmF5LmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9lc20vQXV0aC5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0F1dGhCYXNpYy5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0NoZWNrc3VtLmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9lc20vRGF0ZS5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL1BhY2luZy5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL2xvZy5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHBDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0MsQ0FBMkM7QUFDYjtBQUN2Qix3QkFBd0IsdUNBQUk7QUFDbkM7QUFDQSw0REFBNEQsY0FBYyxHQUFHLGNBQWM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFB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a0IsK0NBQStDO0FBQ2pFLGlCQUFpQiw2Q0FBNkM7QUFDOUQsaUJBQWlCLDZDQUE2QztBQUM5RCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1qVzs7Ozs7O1VDdk0zQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaHNVdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZWZ5KGFycmF5LCBrZXkpIHtcbiAgICBjb25zdCB1bmlxdWUgPSB7fTtcbiAgICByZXR1cm4ga2V5ID8gYXJyYXkuZmlsdGVyKHQgPT4gdW5pcXVlW3RbJycgKyBrZXldXSA/IGZhbHNlIDogKHVuaXF1ZVt0WycnICsga2V5XV0gPSB0cnVlKSlcbiAgICAgICAgOiBhcnJheS5maWx0ZXIodCA9PiB1bmlxdWVbJycgKyB0XSA/IGZhbHNlIDogKHVuaXF1ZVsnJyArIHRdID0gdHJ1ZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhKeVlYa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlFYSnlZWGt1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlowTkJMRTFCUVUwc1ZVRkJWU3hSUVVGUkxFTkJRVWtzUzBGQlV5eEZRVUZGTEVkQlFXdENPMGxCUTNKRUxFMUJRVTBzVFVGQlRTeEhRVUUwUWl4RlFVRkZMRU5CUVVNN1NVRkRNME1zVDBGQlR5eEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVONFJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE4wVXNRMEZCUXlKOSIsImV4cG9ydCBjbGFzcyBBdXRoIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWMGFDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5QmRYUm9MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVkQkxFMUJRVTBzVDBGQlowSXNTVUZCU1R0SlFVbDBRaXhaUVVGdFFpeFJRVUZsTEVWQlFVVXNVVUZCWlR0UlFVTXZReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wTkJSMG9pZlE9PSIsImltcG9ydCB7IEF1dGhlbnRpY2F0b3JzIH0gZnJvbSAnLi9SZXF1ZXN0JztcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuL0F1dGgnO1xuZXhwb3J0IGNsYXNzIEF1dGhCYXNpYyBleHRlbmRzIEF1dGgge1xuICAgIHRlc3RBdXRoKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIF9idG9hKGAke3RoaXMudXNlcm5hbWV9OiR7dGhpcy5wYXNzd29yZH1gKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxufVxuZnVuY3Rpb24gX2J0b2Eoc3RyKSB7XG4gICAgY29uc3QgYnVmZmVyID0gc3RyIGluc3RhbmNlb2YgQnVmZmVyID8gc3RyIDogQnVmZmVyLmZyb20oc3RyLnRvU3RyaW5nKCksICdiaW5hcnknKTtcbiAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKTtcbn1cbkF1dGhlbnRpY2F0b3JzLmFkZEF1dGhQcm92aWRlcignQmFzaWMnLCAoY3JlZGVudGlhbHMpID0+IG5ldyBBdXRoQmFzaWMoY3JlZGVudGlhbHMudXNlciwgY3JlZGVudGlhbHMucGFzc3dvcmQpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYVjBhRUpoYzJsakxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDBGMWRHaENZWE5wWXk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRVmNzWTBGQll5eEZRVUZsTEUxQlEzUkNMRmRCUVZjc1EwRkJRenRCUVVOeVF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVZVc1VVRkJVU3hEUVVGRE8wRkJSMnhETEUxQlFVMHNUMEZCVHl4VFFVRlZMRk5CUVZFc1NVRkJTVHRKUVVNdlFpeFJRVUZSTEVOQlFVTXNUMEZCWlR0UlFVTndRaXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNSMEZCUnl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU4wUml4UFFVRlBMRTlCUVU4c1EwRkJRenRKUVVOdVFpeERRVUZETzBOQlEwbzdRVUZGUkN4VFFVRlRMRXRCUVVzc1EwRkJReXhIUVVGcFFqdEpRVU0xUWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhIUVVGSExGbEJRVmtzVFVGQlRTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEyeEdMRTlCUVU4c1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTnlReXhEUVVGRE8wRkJSVVFzWTBGQll5eERRVUZETEdWQlFXVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhYUVVGMVFpeEZRVUZQTEVWQlFVVXNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGQkluMD0iLCJleHBvcnQgZnVuY3Rpb24gc2hvcnRDaGVja1N1bShzKSB7XG4gICAgbGV0IGNoayA9IDB4MTIzNDU2Nzg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoayArPSAocy5jaGFyQ29kZUF0KGkpICogKGkgKyAxKSk7XG4gICAgfVxuICAgIHJldHVybiAoY2hrICYgMHhmZmZmZmZmZikudG9TdHJpbmcoMTYpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJobFkydHpkVzB1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZRMmhsWTJ0emRXMHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCVVVNc1RVRkJUU3hWUVVGVkxHRkJRV0VzUTBGQlF5eERRVUZSTzBsQlEyNURMRWxCUVVrc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF6dEpRVU55UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU16UWl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEZEVNN1NVRkRSQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU14UXl4RFFVRkRJbjA9IiwiY29uc3QgbW9udGhTdHIgPSBbXG4gICAgWydKYW4nLCAnSmFudWFyeSddLCBbJ0ZlYicsICdGZWJydWFyeSddLCBbJ01hcicsICdNYXJjaCddLCBbJ0FwcicsICdBcHJpbCddLCBbJ01heScsICdNYXknXSwgWydKdW4nLCAnSnVuZSddLFxuICAgIFsnSnVsJywgJ0p1bHknXSwgWydBdWcnLCAnQXVndXN0J10sIFsnU2VwJywgJ1NlcHRlbWJlciddLCBbJ09jdCcsICdPY3RvYmVyJ10sIFsnTm92JywgJ05vdmVtYmVyJ10sIFsnRGVjJywgJ0RlY2VtYmVyJ11cbl07XG5jb25zdCBkYXlTdHIgPSBbXG4gICAgWydTdW4nLCAnU3VuZGF5J10sIFsnTW9uJywgJ01vbmRheSddLCBbJ1R1ZScsICdUdWVzZGF5J10sIFsnV2VkJywgJ1dlZG5lc2RheSddLCBbJ1RodScsICdUaHVyc2RheSddLCBbJ0ZyaScsICdGcmlkYXknXSwgWydTYXQnLCAnU2F0dXJkYXknXVxuXTtcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXIsIGRpZ2l0cykge1xuICAgIGxldCByID0gJycgKyBudW1iZXI7XG4gICAgd2hpbGUgKHIubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgICAgIHIgPSBcIjBcIiArIHI7XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGUoZm9ybWF0U3RyaW5nLCBkYXRlID0gbmV3IERhdGUoKSkge1xuICAgIHJldHVybiAodHlwZW9mIGZvcm1hdFN0cmluZyAhPT0gJ3N0cmluZycgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSA/XG4gICAgICAgICdpbnZhbGlkJyA6XG4gICAgICAgIGZvcm1hdFN0cmluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWVlZL2csICcnICsgZGF0ZS5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWS9nLCAnJyArIChkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDApKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNb250aCgpICsgMSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU0vZywgJycgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVERC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXREYXRlKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEL2csICcnICsgZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWhoL2csIGZvcm1hdE51bWJlcihkYXRlLmdldEhvdXJzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoL2csICcnICsgZGF0ZS5nZXRIb3VycygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtbS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtL2csICcnICsgZGF0ZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJXNzL2csIGZvcm1hdE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMykpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwLCAxKSk7XG59XG5leHBvcnQgY29uc3QgbXMgPSB7XG4gICAgZnJvbU1pbnV0ZXM6IChtaW4pID0+IDEwMDAgKiA2MCAqIG1pbixcbiAgICBmcm9tSG91cnM6IChoKSA9PiAxMDAwICogNjAgKiA2MCAqIGgsXG4gICAgZnJvbURheXM6IChkKSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogZCxcbiAgICBmcm9tV2Vla3M6ICh3KSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogNyAqIHcsXG4gICAgdG9NaW51dGVzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCksXG4gICAgdG9Ib3VyczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCksXG4gICAgdG9EYXlzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpLFxuICAgIHRvV2Vla3M6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5RVlYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVdWQkxFMUJRVTBzVVVGQlVTeEhRVUZITzBsQlEySXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETzBsQlF6VkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXp0RFFVRkRMRU5CUVVNN1FVRkhOVWdzVFVGQlRTeE5RVUZOTEVkQlFVYzdTVUZEV0N4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hYUVVGWExFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU03UTBGQlF5eERRVUZETzBGQlJ6TkpMRk5CUVZNc1dVRkJXU3hEUVVGRExFMUJRV0VzUlVGQlJTeE5RVUZoTzBsQlF6bERMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSVUZCUlR0UlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzB0QlFVVTdTVUZETVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRFlpeERRVUZETzBGQlkwUXNUVUZCVFN4VlFVRlZMRWxCUVVrc1EwRkJReXhaUVVGdFFpeEZRVUZGTEVsQlFVa3NSMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSVHRKUVVOeVJDeFBRVUZQTEVOQlFVTXNUMEZCVHl4WlFVRlpMRXRCUVVzc1VVRkJVU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFVXNVMEZCVXl4RFFVRkJMRU5CUVVNN1VVRkRWaXhaUVVGWk8yRkJRMUFzVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRWRCUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzJGQlEzaERMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlF6bERMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaEVMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaEVMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJReXhEUVVGRExFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEY0VRc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlNTeEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZUVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETlVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETlVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEycEVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWtzUlVGQlJTeEhRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRoUVVOdVF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRiRVFzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUnl4RlFVRkZMRWRCUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzJGQlEyNURMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53UkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGSkxFVkJRVVVzUjBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1lVRkRkRU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNCRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTXhSQ3hQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFZEJRVU1zUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpWRUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVY3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUjBGQlF5eEhRVUZITEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVONlJTeERRVUZETzBGQlIwUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSE8wbEJRMlFzVjBGQlZ5eEZRVUZMTEVOQlFVTXNSMEZCVlN4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVkQlFVYzdTVUZETTBNc1UwRkJVeXhGUVVGUExFTkJRVU1zUTBGQlVTeEZRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eERRVUZETzBsQlF6VkRMRkZCUVZFc1JVRkJVU3hEUVVGRExFTkJRVkVzUlVGQlNTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTTdTVUZETDBNc1UwRkJVeXhGUVVGUExFTkJRVU1zUTBGQlVTeEZRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SFFVRkRMRU5CUVVNN1NVRkRha1FzVTBGQlV5eEZRVUZQTEVOQlFVTXNSVUZCVXl4RlFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4RFFVRkRPMGxCUXpWRExFOUJRVThzUlVGQlV5eERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRMME1zVFVGQlRTeEZRVUZWTEVOQlFVTXNSVUZCVXl4RlFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFTkJRVU03U1VGRGJFUXNUMEZCVHl4RlFVRlRMRU5CUVVNc1JVRkJVeXhGUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4RFFVRkRPME5CUTNaRUxFTkJRVU1pZlE9PSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ1BhY2luZycpO1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXQobXMsIC4uLnJlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyBzZXRUaW1lb3V0KHJlamVjdCwgbXMsIC4uLnJlc3QpOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKGFyZ3MpOyB9LCBtcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQgY2xhc3MgUGFjZSB7XG4gICAgY29uc3RydWN0b3IoeyBwYWNlID0gMTAwLCBtYXhDb25jdXJyZW50ID0gLTEsIGNvbGxlY3Rpb25QZXJpb2QgPSAwIH0pIHtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gLTE7XG4gICAgICAgIHRoaXMucGFjZSA9IDA7XG4gICAgICAgIHRoaXMud2FpdFVudGlsID0gMDtcbiAgICAgICAgdGhpcy53YWl0aW5nID0gMDtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gMDtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IHt9O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25QZXJpb2QgPSAwO1xuICAgICAgICB0aGlzLnBhY2UgPSBwYWNlO1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSBtYXhDb25jdXJyZW50O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25QZXJpb2QgPSBjb2xsZWN0aW9uUGVyaW9kO1xuICAgIH1cbiAgICBpc0FsbG93ZWQoKSB7IHJldHVybiB0aGlzLm1heENvbmN1cnJlbnQgPCAwIHx8IHRoaXMuc3RhcnRlZCA8IHRoaXMubWF4Q29uY3VycmVudDsgfVxuICAgIHNldFBhY2UobXMpIHsgdGhpcy5wYWNlID0gbXM7IH1cbiAgICBzZXRNYXhDb25jdXJyZW50KG1heENvbmN1cnJlbnQpIHsgdGhpcy5tYXhDb25jdXJyZW50ID0gbWF4Q29uY3VycmVudDsgfVxuICAgIGluUXVldWUoKSB7IHJldHVybiB0aGlzLndhaXRpbmc7IH1cbiAgICBpblByb2dyZXNzKCkgeyByZXR1cm4gdGhpcy5zdGFydGVkOyB9XG4gICAgYXN5bmMgYWRkKGZuLCBrZXkpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGNhbGxUaW1lID0gbm93ICsgTWF0aC5tYXgodGhpcy5jb2xsZWN0aW9uUGVyaW9kLCB0aGlzLndhaXRVbnRpbCk7XG4gICAgICAgIHRoaXMud2FpdFVudGlsICs9IHRoaXMucGFjZTtcbiAgICAgICAgbGV0IGl0ZW07XG4gICAgICAgIGlmIChrZXkgJiYgdGhpcy5xdWV1ZVtrZXldKSB7XG4gICAgICAgICAgICBpdGVtID0gdGhpcy5xdWV1ZVtrZXldO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGl0ZW0udGltZXIpO1xuICAgICAgICAgICAgaXRlbS5mbiA9IGZuO1xuICAgICAgICAgICAgaXRlbS5hZGRlZCA9IG5vdztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IGtleSB8fCBgJHtub3d9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKX1gO1xuICAgICAgICAgICAgaXRlbSA9IHsgZm46IGZuLCBhZGRlZDogbm93LCBwYWNlOiB0aGlzLCBrZXk6IGtleSB9O1xuICAgICAgICAgICAgdGhpcy5xdWV1ZVtrZXldID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMud2FpdGluZysrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVJdGVtKGl0ZW0sIGNhbGxUaW1lIC0gbm93KTtcbiAgICB9XG4gICAgcmVzb2x2ZUl0ZW0oaXRlbSwgd2FpdFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGUgPSBhc3luYyAoX2l0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBfaXRlbS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfaXRlbS5wYWNlLnF1ZXVlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uud2FpdGluZy0tO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBiZWxvd0NvbmN1cnJlbnRMaW1pdChfaXRlbS5wYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS5zdGFydGVkKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdHVhbERlbGF5ID0gRGF0ZS5ub3coKSAtIF9pdGVtLmFkZGVkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBfaXRlbS5mbihhY3R1YWxEZWxheSk7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uuc3RhcnRlZC0tO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uuc3RhcnRlZC0tO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGl0ZW0udGltZXIgPSBzZXRUaW1lb3V0KGV4ZWN1dGUsIHdhaXRUaW1lLCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYmVsb3dDb25jdXJyZW50TGltaXQocGFjZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZWxlYXNlID0+IHtcbiAgICAgICAgY29uc3Qgd2FpdExvb3AgPSAoKSA9PiBwYWNlLmlzQWxsb3dlZCgpID8gcmVsZWFzZSgpIDogc2V0VGltZW91dCh3YWl0TG9vcCwgMTApO1xuICAgICAgICB3YWl0TG9vcCgpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUdGamFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwxQmhZMmx1Wnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkpRU3hQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVOHNUMEZCVHl4RFFVRkRPMEZCUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRlROVVFzVFVGQlRTeFZRVUZWTEU5QlFVOHNRMEZCUXl4RlFVRlRMRVZCUVVVc1IwRkJSeXhKUVVGVk8wbEJRelZETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGJFWXNRMEZCUXp0QlFXZERSQ3hOUVVGTkxGVkJRVlVzUzBGQlN5eERRVUZETEVWQlFWTTdTVUZETTBJc1QwRkJUeXhEUVVGSkxFbEJRVThzUlVGQllTeEZRVUZGTzFGQlF6ZENMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZ6UWl4RlFVRkZMRVZCUVVVN1dVRkRNVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1F5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGdFFrUXNUVUZCVFN4UFFVRlBMRWxCUVVrN1NVRnBRMklzV1VGQldTeEZRVUZETEVsQlFVa3NSMEZCUXl4SFFVRkhMRVZCUVVVc1lVRkJZU3hIUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEdkQ1FVRm5RaXhIUVVGRExFTkJRVU1zUlVGQlF6dFJRUzlDY0VRc2EwSkJRV0VzUjBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVnlRaXhUUVVGSkxFZEJRV01zUTBGQlF5eERRVUZETzFGQlJYQkNMR05CUVZNc1IwRkJVeXhEUVVGRExFTkJRVU03VVVGRmNFSXNXVUZCVHl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVVWd1FpeFpRVUZQTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlhCQ0xGVkJRVXNzUjBGQmQwSXNSVUZCUlN4RFFVRkRPMUZCWTJwRExIRkNRVUZuUWl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVZGNFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOcVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJRenRSUVVOdVF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1NVRkROME1zUTBGQlF6dEpRVzVDVFN4VFFVRlRMRXRCUVdFc1QwRkJUeXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCYzBJelJpeFBRVUZQTEVOQlFVTXNSVUZCVXl4SlFVRlRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVXpReXhuUWtGQlowSXNRMEZCUXl4aFFVRnZRaXhKUVVGVExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVWdVJpeFBRVUZQTEV0QlFXVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVUxUXl4VlFVRlZMRXRCUVZrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFWRnVSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFXZENMRVZCUVVVc1IwRkJWenRSUVVOdVF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEycERMRTFCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGRrVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETzFGQlJUVkNMRWxCUVVrc1NVRkJVeXhEUVVGRE8xRkJRMlFzU1VGQlNTeEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU40UWl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVMEZEY0VJN1lVRkJUVHRaUVVOSUxFZEJRVWNzUjBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU14UkN4SlFVRkpMRWRCUVVjc1JVRkJReXhGUVVGRkxFVkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVTXNSMEZCUnl4RlFVRkRMRU5CUVVNN1dVRkRPVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGRrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xTkJRMnhDTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVFN1NVRkRha1FzUTBGQlF6dEpRVVZQTEZkQlFWY3NRMEZCUXl4SlFVRlRMRVZCUVVVc1VVRkJaVHRSUVVNeFF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlEyNURMRTFCUVUwc1QwRkJUeXhIUVVGSExFdEJRVXNzUlVGQlJTeExRVUZWTEVWQlFVVXNSVUZCUlR0blFrRkJSeXhKUVVGSk8yOUNRVU40UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETzI5Q1FVTjBRaXhQUVVGUExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzI5Q1FVTnlRaXhOUVVGTkxHOUNRVUZ2UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZEZGtNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0dlFrRkRja0lzVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTTdiMEpCUXpORExFMUJRVTBzUjBGQlJ5eEhRVUZITEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dHZRa0ZEZUVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0dlFrRkRja0lzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOb1FqdG5Ra0ZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHR2UWtGRFVDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU55UWl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEySTdXVUZCUVN4RFFVRkRMRU5CUVVFN1dVRkhSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzSkVMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dERRVU5LTzBGQlIwUXNVMEZCVXl4dlFrRkJiMElzUTBGQlF5eEpRVUZUTzBsQlEyNURMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdVVUZEZWtJc1RVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTVSU3hSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU5tTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTFBc1EwRkJReUo5IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUmVxdWVzdCcpO1xuaW1wb3J0IHsgUGFjZSB9IGZyb20gJy4vUGFjaW5nJztcbmxvZy5tZXNzYWdlTGVuZ3RoID0gMTIwO1xuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0b3JzIHtcbiAgICBzdGF0aWMgYWRkQXV0aFByb3ZpZGVyKG5hbWUsIHByb3ZpZGVyKSB7XG4gICAgICAgIEF1dGhlbnRpY2F0b3JzLmF1dGhQcm92aWRlcnMucHVzaCh7IG5hbWU6IG5hbWUsIHByb3ZpZGVyOiBwcm92aWRlciB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldChhdXRoUmVxdWVzdCwgY3JlZGVudGlhbHMsIHVybCkge1xuICAgICAgICBpZiAoIWF1dGhSZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjcmVkZW50aWFscykge1xuICAgICAgICAgICAgdGhyb3cgYGNyZWRlbnRpYWxzIG1pc3Npbmc7IGNhbGwgJ3NldENyZWRlbnRpYWxzJyBiZWZvcmUgY2FsbGluZyAnZ2V0JyBmb3IgdXJsICR7dXJsfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGF1dGggPSBBdXRoZW50aWNhdG9ycy5hdXRoc1t1cmxdO1xuICAgICAgICBpZiAoIWF1dGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGF1dGhSZXF1ZXN0LnNwbGl0KCcgJyk/LlswXTtcbiAgICAgICAgICAgIGlmICghQXV0aGVudGljYXRvcnMuYXV0aFByb3ZpZGVycy5zb21lKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSBlbnRyeS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0aCA9IGVudHJ5LnByb3ZpZGVyKGNyZWRlbnRpYWxzKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIHRocm93IGB1bmltcGxlbWVudGVkIGF1dGhlbnRpY2F0aW9uIG1ldGhvZCAke2F1dGhSZXF1ZXN0fSBmb3IgJyR7dXJsfSc7IGVuc3VyZSB0aGUgcHJvcGVyIGF1dGhlbnRpY2F0aW9uIG1vZGVsIGlzIGltcG9ydGVkYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXV0aDtcbiAgICB9XG59XG5BdXRoZW50aWNhdG9ycy5hdXRocyA9IHt9O1xuQXV0aGVudGljYXRvcnMuYXV0aFByb3ZpZGVycyA9IFtdO1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxvZyA9IGxvZztcbiAgICAgICAgdGhpcy5zZXRDcmVkZW50aWFscyA9ICh1c2VyLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHVzZXIgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHsgdXNlcjogdXNlciwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0QXV0aFRva2VuID0gKHRva2VuKSA9PiB0aGlzLmF1dGhUb2tlbiA9IHRva2VuO1xuICAgICAgICB0aGlzLnNldFBhY2UgPSAoeyBwYWNlID0gNTAsIG1heCA9IDEwLCBjb2xsZWN0aW9uUGVyaW9kID0gMTAwIH0gPSB7IHBhY2U6IG51bGwgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWNlID0gKCFwYWNlIHx8IHBhY2UgPCAwKSA/IHVuZGVmaW5lZCA6IG5ldyBQYWNlKHsgcGFjZTogcGFjZSwgbWF4Q29uY3VycmVudDogbWF4LCBjb2xsZWN0aW9uUGVyaW9kOiBjb2xsZWN0aW9uUGVyaW9kIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsZWFyUGFjZSA9ICgpID0+IHRoaXMuc2V0UGFjZSgpO1xuICAgICAgICB0aGlzLmRlY29kZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc3RhdGljIGFkZENvbnRlbnRUeXBlKHR5cGUsIGlzVGV4dCkge1xuICAgICAgICBjb25zdCBzdWJUeXBlcyA9IHR5cGUuc3BsaXQoJy8nKTtcbiAgICAgICAgUmVxdWVzdC5jb250ZW50VHlwZXMucHVzaCh7IHN1YlR5cGVzOiBzdWJUeXBlcywgaXNUZXh0OiBpc1RleHQgfSk7XG4gICAgfVxuICAgIGFzeW5jIGdldCh1cmwsIHsgdXNlQ2FjaGVkID0gdHJ1ZSwgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ0dFVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCB1c2VDYWNoZWQsIGhlYWRlcnMpO1xuICAgIH1cbiAgICBhc3luYyBwdXQodXJsLCBwb3N0RGF0YSwgeyBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnUFVUJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIGZhbHNlLCBoZWFkZXJzLCBwb3N0RGF0YSk7XG4gICAgfVxuICAgIGFzeW5jIHBvc3QodXJsLCBwb3N0RGF0YSwgeyBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnUE9TVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCBmYWxzZSwgaGVhZGVycywgcG9zdERhdGEpO1xuICAgIH1cbiAgICBnZXRVUkwodXJsKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gbmV3IFVSTCh1cmwsIGRvY3VtZW50LlVSTCkgOiB1cmw7XG4gICAgfVxuICAgIGdldE9wdGlvbnModXJsLCBtZXRob2QpIHtcbiAgICAgICAgdXJsID0gdGhpcy5nZXRVUkwodXJsKTtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gJyc7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBwcm90b2NvbDogdXJsLnByb3RvY29sLFxuICAgICAgICAgICAgaG9zdDogdXJsLmhvc3QsXG4gICAgICAgICAgICBob3N0bmFtZTogdXJsLmhvc3RuYW1lLFxuICAgICAgICAgICAgcG9ydDogdXJsLnBvcnQsXG4gICAgICAgICAgICBwYXRobmFtZTogcHJlZml4ICsgdXJsLnBhdGhuYW1lLFxuICAgICAgICAgICAgcGF0aDogcHJlZml4ICsgdXJsLnBhdGhuYW1lICsgKHVybC5zZWFyY2ggfHwgJycpLFxuICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICB1cmw6IGAke3VybC5wcm90b2NvbH0vLyR7dXJsLmhvc3R9JHtwcmVmaXggKyB1cmwucGF0aG5hbWUgKyAodXJsLnNlYXJjaCB8fCAnJyl9YCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFRva2VuKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aFRva2VuID0gdGhpcy5hdXRoVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGFzeW5jIGRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycywgcG9zdERhdGEpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0T3B0aW9ucyhvcHRpb25zLCB1c2VDYWNoZWQsIHBvc3REYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlICYmIHJlc3VsdC5yZXNwb25zZS50eHQgJiYgb3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICByZXN1bHQuZGF0YSA9IHRoaXMuZGVjb2RlKHJlc3VsdC5kYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBhc3luYyByZXF1ZXN0T3B0aW9ucyhvcHRpb25zLCB1c2VDYWNoZWQsIHBvc3REYXRhKSB7XG4gICAgICAgIGxldCByZXF1ZXN0O1xuICAgICAgICBpZiAodGhpcy5wYWNlKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy50cmFuc2llbnQoYCgke3RoaXMucGFjZS5pblF1ZXVlKCl9IHwgJHt0aGlzLnBhY2UuaW5Qcm9ncmVzcygpfSkgJHtvcHRpb25zLm1ldGhvZH0taW5nICR7b3B0aW9ucy51cmx9YCk7XG4gICAgICAgICAgICByZXF1ZXN0ID0gdGhpcy5wYWNlLmFkZCgoKSA9PiB0aGlzLnJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpLCBgJHtvcHRpb25zLm1ldGhvZH0gJHtvcHRpb25zLnVybH1gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3QgPSB0aGlzLnJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdDtcbiAgICAgICAgaWYgKHRoaXMucGFjZSkge1xuICAgICAgICAgICAgdGhpcy5sb2cudHJhbnNpZW50KGAoJHt0aGlzLnBhY2UuaW5RdWV1ZSgpfSB8ICR7dGhpcy5wYWNlLmluUHJvZ3Jlc3MoKX0pIHJlY2VpdmVkICR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9IGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmlzc3VlUmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSk7XG4gICAgICAgICAgICBjb25zdCBhdXRoID0gQXV0aGVudGljYXRvcnMuZ2V0KHJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnNbJ3d3dy1hdXRoZW50aWNhdGUnXSwgdGhpcy5jcmVkZW50aWFscywgb3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgcmV0dXJuIGF1dGggPyB0aGlzLnJlcXVlc3QoYXV0aC50ZXN0QXV0aChvcHRpb25zLCByZXNwb25zZS5yZXNwb25zZSkpIDogcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZy5lcnJvcihgcmVxdWVzdDogJHtlfVxcbiR7T2JqZWN0LmVudHJpZXMob3B0aW9ucy5oZWFkZXJzKS5qb2luKCdcXG4nKX1gKTtcbiAgICAgICAgICAgIHRocm93IGBlcnJvciByZXF1ZXN0aW5nICR7b3B0aW9ucy51cmx9OiAke2V9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBpc3N1ZVJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY29uZmlybVJlcXVlc3QoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzVGV4dCA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ2NvbnRlbnQtdHlwZSc6ICcnIH07XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNUZXh0LnNwbGl0KCdcXHJcXG4nKS5tYXAoaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrdiA9IGguc3BsaXQoJzonKS5tYXAocCA9PiBwLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa3ZbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1trdlswXV0gPSBrdlsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gdGhpcy5yZXNwb25zZVR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4dCA9IFJlcXVlc3QuaXNUZXh0dWFsQ29udGVudChjb250ZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dDogdHh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IGAke3RoaXMuc3RhdHVzfSAke3RoaXMuc3RhdHVzVGV4dH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy5yZXNwb25zZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR4dCA9IFJlcXVlc3QuaXNUZXh0dWFsUmVxdWVzdChvcHRpb25zLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycykuZm9yRWFjaChoID0+IHhoci5zZXRSZXF1ZXN0SGVhZGVyKGgsIG9wdGlvbnMuaGVhZGVyc1toXSkpO1xuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSB0eHQgPyAndGV4dCcgOiAnYXJyYXlidWZmZXInO1xuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBjb25maXJtUmVxdWVzdDtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChwb3N0RGF0YSA/IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc1RleHR1YWxDb250ZW50KGNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2cud2FybihgdW5kZWZpbmVkIGNvbnRlbnRUeXBlOyBhc3N1bWluZyBiaW5hcnlgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdWJUeXBlcyA9IGNvbnRlbnRUeXBlLnNwbGl0KCcvJyk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gUmVxdWVzdC5jb250ZW50VHlwZXMuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LnN1YlR5cGVzLmV2ZXJ5KChzdCwgaSkgPT4gc3ViVHlwZXNbaV0gPT09IHN0KSk7XG4gICAgICAgIGlmIChtYXRjaC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMF0uaXNUZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG9nLndhcm4oYG5vIG1hdGNoIGZvdW5kIGZvciAnJHtjb250ZW50VHlwZX0nOyBjYWNoaW5nIGFzIGJpbmFyeWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBpc1RleHR1YWxSZXF1ZXN0KHBhdGhOYW1lKSB7XG4gICAgICAgIHJldHVybiBbJ2pzb24nLCAndHh0JywgJ2h0bWwnXS5zb21lKGV4dCA9PiBwYXRoTmFtZS5pbmRleE9mKGV4dCkgPj0gMCk7XG4gICAgfVxufVxuUmVxdWVzdC5jb250ZW50VHlwZXMgPSBbXTtcblJlcXVlc3QuZGVjb2RlcnMgPSB7XG4gICAgc3RyMmpzb246IChkYXRhKSA9PiB7IHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSB9LFxuICAgIGh0bWwyanNvbjogdW5kZWZpbmVkXG59O1xuW1xuICAgIFsndGV4dCcsIHRydWVdLFxuICAgIFsndGV4dC9odG1sJywgdHJ1ZV0sXG4gICAgWydpbWFnZScsIGZhbHNlXSxcbiAgICBbJ2F1ZGlvJywgZmFsc2VdLFxuICAgIFsnZm9udCcsIGZhbHNlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL2pzb24nLCB0cnVlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL3BkZicsIGZhbHNlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsIGZhbHNlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JywgZmFsc2VdLFxuICAgIFsnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJywgZmFsc2VdLFxuICAgIFsnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnNoZWV0Lm1hY3JvZW5hYmxlZC4xMicsIGZhbHNlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsIGZhbHNlXSxcbl0uZm9yRWFjaChlID0+IFJlcXVlc3QuYWRkQ29udGVudFR5cGUoZVswXSwgZVsxXSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVW1WeGRXVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OVNaWEYxWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRWGREUVN4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRV1VzVDBGQlR5eERRVUZETzBGQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdRVUZEZGtVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZqTEZWQlFWVXNRMEZCUXp0QlFVZDRReXhIUVVGSExFTkJRVU1zWVVGQllTeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFYbEVlRUlzVFVGQlRTeFBRVUZQTEdOQlFXTTdTVUZIYUVJc1RVRkJUU3hEUVVGRExHVkJRV1VzUTBGQlF5eEpRVUZYTEVWQlFVVXNVVUZCZDBNN1VVRkRMMFVzWTBGQll5eERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNSVUZCUXl4UlFVRlJMRVZCUVVNc1EwRkJReXhEUVVGQk8wbEJRM0pGTEVOQlFVTTdTVUZEVFN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRV3RDTEVWQlFVVXNWMEZCZFVJc1JVRkJSU3hIUVVGVk8xRkJRM0pGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1dVRkRaQ3hQUVVGUExGTkJRVk1zUTBGQlFUdFRRVU51UWp0aFFVRk5MRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3V1VGRGNrSXNUVUZCVFN3eVJVRkJNa1VzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVMEZETVVZN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUjBGQlJ5eGpRVUZqTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0pETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkRVQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU16UXl4SlFVRkpMRTFCUVUwc1MwRkJTeXhMUVVGTExFTkJRVU1zU1VGQlNUdHZRa0ZCUlN4UFFVRlBMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkJPMWxCUTNoRkxFTkJRVU1zUTBGQlF6dG5Ra0ZCUlN4TlFVRk5MSFZEUVVGMVF5eFhRVUZYTEZOQlFWTXNSMEZCUnl4MVJFRkJkVVFzUTBGQlF6dFRRVU51U1R0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGQk8wbEJRMllzUTBGQlF6czdRVUZ1UW1Nc2IwSkJRVXNzUjBGQmRVSXNSVUZCUlN4RFFVRkJPMEZCUXpsQ0xEUkNRVUZoTEVkQlFUWkVMRVZCUVVVc1EwRkJRVHRCUVhOQ0wwWXNUVUZCVFN4UFFVRlBMRTlCUVU4N1NVRkJjRUk3VVVGWll5eFJRVUZITEVkQlFWRXNSMEZCUnl4RFFVRkRPMUZCWjBKc1FpeHRRa0ZCWXl4SFFVRkhMRU5CUVVNc1NVRkJXU3hGUVVGRkxGRkJRV2RDTEVWQlFVVXNSVUZCUlR0WlFVTjJSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NTMEZCUnl4VFFVRlRMRU5CUVVFc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTjRSaXhEUVVGRExFTkJRVUU3VVVGSFRTeHBRa0ZCV1N4SFFVRkhMRU5CUVVNc1MwRkJZU3hGUVVGRkxFVkJRVVVzUTBGRGNFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVUU3VVVGUmJrSXNXVUZCVHl4SFFVRkhMRU5CUVVNc1JVRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSMEZCUXl4RlFVRkZMRVZCUVVVc1owSkJRV2RDTEVkQlFVTXNSMEZCUnl4TFFVRkZMRVZCUVVNc1NVRkJTU3hGUVVGTkxFbEJRVWtzUlVGQlF5eEZRVUZGTEVWQlFVVTdXVUZETVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1IwRkJReXhEUVVGRExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZETEVsQlFVa3NSVUZCUXl4SlFVRkpMRVZCUVVVc1lVRkJZU3hGUVVGRExFZEJRVWNzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJReXhuUWtGQlowSXNSVUZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNMGdzUTBGQlF5eERRVUZCTzFGQlMwMHNZMEZCVXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFWRnFReXhYUVVGTkxFZEJRVmtzVTBGQlV5eERRVUZETzBsQmRVdDJReXhEUVVGRE8wbEJPVTVWTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJWeXhGUVVGRkxFMUJRV003VVVGRGNFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnFReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkRMRkZCUVZFc1JVRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZETEUxQlFVMHNSVUZCUXl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVGhFVFN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRV01zUlVGQlJTeEZRVUZETEZOQlFWTXNSMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhIUVVGRExFVkJRVVVzUlVGQlF5eEhRVUZETEVWQlFVVTdVVUZETlVRc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE5VTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkROVVFzUTBGQlF6dEpRVk5OTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJZeXhGUVVGRkxGRkJRVmtzUlVGQlJTeEZRVUZETEU5QlFVOHNSMEZCUXl4RlFVRkZMRVZCUVVNc1IwRkJReXhGUVVGRk8xRkJRekZFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWRExFOUJRVThzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhGUVVGRkxFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTnNSU3hEUVVGRE8wbEJVMDBzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRmpMRVZCUVVVc1VVRkJXU3hGUVVGRkxFVkJRVU1zVDBGQlR5eEhRVUZETEVWQlFVVXNSVUZCUXl4SFFVRkRMRVZCUVVVN1VVRkRNMFFzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETjBNc1QwRkJUeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEyeEZMRU5CUVVNN1NVRkZVeXhOUVVGTkxFTkJRVU1zUjBGQll6dFJRVU16UWl4UFFVRlBMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF6dEpRVU4yUlN4RFFVRkRPMGxCUlZNc1ZVRkJWU3hEUVVGRExFZEJRV01zUlVGQlJTeE5RVUZoTzFGQlF6bERMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNaQ0xFMUJRVTBzVFVGQlRTeEhRVUUwUXl4RlFVRkZMRU5CUVVNN1VVRkRNMFFzVFVGQlRTeFBRVUZQTEVkQlFVYzdXVUZEV2l4clFrRkJhMElzUlVGQlJTeExRVUZMTzFsQlEzcENMRTFCUVUwc1JVRkJUU3hOUVVGTk8xbEJRMnhDTEZGQlFWRXNSVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVVHRaUVVONFFpeEpRVUZKTEVWQlFWRXNSMEZCUnl4RFFVRkRMRWxCUVVrN1dVRkRjRUlzVVVGQlVTeEZRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJPMWxCUTNoQ0xFbEJRVWtzUlVGQlVTeEhRVUZITEVOQlFVTXNTVUZCU1R0WlFVTndRaXhSUVVGUkxFVkJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJPMWxCUTJwRExFbEJRVWtzUlVGQlVTeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUTNSRUxFOUJRVThzUlVGQlZTeEZRVUZGTzFsQlJXNUNMRWRCUVVjc1JVRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEV0QlFVc3NSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVTdVMEZETVVZc1EwRkJRenRSUVVOR0xFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1UwRkJSVHRSUVVOdVJTeFBRVUZQTEU5QlFVOHNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJZVk1zUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRmxMRVZCUVVVc1UwRkJhVUlzUlVGQlJTeFBRVUZYTEVWQlFVVXNVVUZCWVR0UlFVTjZSaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGTkJRVk1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTjJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNTMEZCUnl4TFFVRkxMRVZCUVVVN1dVRkRPVVFzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGVExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRNMFE3VVVGRFJDeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVk1zUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRmxMRVZCUVVVc1UwRkJhVUlzUlVGQlJTeFJRVUZoTzFGQlF6VkZMRWxCUVVrc1QwRkJNRUlzUTBGQlF6dFJRVU12UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRFdDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNTMEZCU3l4UFFVRlBMRU5CUVVNc1RVRkJUU3hSUVVGUkxFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJoSUxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVjN1lVRkJUVHRaUVVOSUxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFRRVU0zUXp0UlFVVkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzVDBGQlR5eERRVUZETzFGQlF5OUNMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJUdFpRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4alFVRmpMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkJSVHRSUVVWNlNTeFBRVUZQTEZGQlFWRXNRMEZCUXp0SlFVTndRaXhEUVVGRE8wbEJSVk1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRmxMRVZCUVVVc1VVRkJZVHRSUVVOc1JDeEpRVUZKTzFsQlEwRXNUVUZCVFN4UlFVRlJMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVNMVJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMR3RDUVVGclFpeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZET1Vjc1QwRkJUeXhKUVVGSkxFTkJRVUVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXp0VFFVTnVSanRSUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzFsQlExQXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGQk8xbEJRM3BGTEUxQlFVMHNiMEpCUVc5Q0xFOUJRVThzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNN1UwRkRha1E3U1VGRFRDeERRVUZETzBsQlJWTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGbExFVkJRVVVzVVVGQllUdFJRVU4yUkN4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQk5FSXNSVUZCUlN4TlFVRjVRaXhGUVVGRkxFVkJRVVU3V1VGQlJ5eEpRVUZKTzJkQ1FVTnNSaXhUUVVGVExHTkJRV01zUTBGQlF5eERRVUZMTzI5Q1FVTjZRaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEhRVUZITEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dHZRa0ZEYUVRc1RVRkJUU3hQUVVGUExFZEJRVWNzUlVGQlF5eGpRVUZqTEVWQlFVTXNSVUZCUlN4RlFVRkRMRU5CUVVNN2IwSkJRM0JETEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPM2RDUVVNNVFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPM2RDUVVNelF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3TkVKQlFVVXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenQ1UWtGQlJUdHZRa0ZEYWtRc1EwRkJReXhEUVVGRExFTkJRVUU3YjBKQlEwWXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dHZRa0ZEZEVNc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzI5Q1FVZHNSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMjlDUVVNelFpeE5RVUZOTEZGQlFWRXNSMEZCV1R0M1FrRkRkRUlzU1VGQlNTeEZRVUZuUWl4SlFVRkpPM2RDUVVONFFpeFJRVUZSTEVWQlFVVTdORUpCUTA0c1IwRkJSeXhGUVVGaExFZEJRVWM3TkVKQlEyNUNMRTlCUVU4c1JVRkJVeXhQUVVGUE96UkNRVU4yUWl4TlFVRk5MRVZCUVZVc1QwRkJUeXhEUVVGRExFMUJRVTA3TkVKQlF6bENMRTFCUVUwc1JVRkJWU3hKUVVGSkxFTkJRVU1zVFVGQlRUczBRa0ZETTBJc1ZVRkJWU3hGUVVGTkxFbEJRVWtzUTBGQlF5eE5RVUZOT3pSQ1FVTXpRaXhoUVVGaExFVkJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVU3TkVKQlEyNUVMRWRCUVVjc1JVRkJZU3hKUVVGSkxFTkJRVU1zVjBGQlZ6dDVRa0ZEYmtNN2NVSkJRMG9zUTBGQlF6dHZRa0ZEUml4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEzUkNMRU5CUVVNN1owSkJRMFFzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4alFVRmpMRVZCUVVVc1EwRkJRenRuUWtGRGFrTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZGZGtRc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUXpWRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pHTEVkQlFVY3NRMEZCUXl4WlFVRlpMRWRCUVVjc1IwRkJSeXhEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJRenRuUWtGREwwTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhqUVVGakxFTkJRVU03WjBKQlF6VkNMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZCTEVOQlFVTXNRMEZCUVN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4VFFVRlRMRU5CUVVNc1EwRkJRenRoUVVONlJEdFpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMmRDUVVOUUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTmlPMUZCUVVFc1EwRkJReXhEUVVGRExFTkJRVUU3U1VGRFVDeERRVUZETzBsQlJWTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEZkQlFXdENPMUZCUTJoRUxFbEJRVWtzVjBGQlZ5eExRVUZITEZOQlFWTXNSVUZCUlR0WlFVTjZRaXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVUU3V1VGRGJFUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1UwRkRhRUk3VVVGRFJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzaERMRTFCUVUwc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTJoQ0xFOUJRVThzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJRenRUUVVNeFFqdGhRVUZOTzFsQlEwZ3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXgxUWtGQmRVSXNWMEZCVnl4elFrRkJjMElzUTBGQlF5eERRVUZETzFsQlEyNUZMRTlCUVU4c1MwRkJTeXhEUVVGRE8xTkJRMmhDTzBsQlEwd3NRMEZCUXp0SlFVVlRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UlFVRmxPMUZCUXpkRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNMFVzUTBGQlF6czdRVUU1VG1Nc2IwSkJRVmtzUjBGQk1FTXNSVUZCUlN4RFFVRkRPMEZCU3pGRUxHZENRVUZSTEVkQlFVYzdTVUZEY2tJc1VVRkJVU3hGUVVGSExFTkJRVU1zU1VGQlZ5eEZRVUZGTEVWQlFVVXNSMEZCUnl4SlFVRkpPMUZCUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkJPMHRCUVVNN1NVRkJReXhQUVVGTkxFTkJRVU1zUlVGQlJUdFJRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkJPMHRCUVVNc1EwRkJRU3hEUVVGRE8wbEJRMnhHTEZOQlFWTXNSVUZCZDBJc1UwRkJVenREUVVNM1F5eERRVUZETzBGQmVVNU9PMGxCUTBrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETzBsQlEyUXNRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRE8wbEJRMjVDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJRenRKUVVOb1FpeERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRU5CUVVNN1NVRkRhRUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRPMGxCUTJZc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4SlFVRkpMRU5CUVVNN1NVRkRNVUlzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hMUVVGTExFTkJRVU03U1VGRE1VSXNRMEZCUXl3eVJVRkJNa1VzUlVGQlJTeExRVUZMTEVOQlFVTTdTVUZEY0VZc1EwRkJReXh0UlVGQmJVVXNSVUZCUlN4TFFVRkxMRU5CUVVNN1NVRkROVVVzUTBGQlF5d3JRa0ZCSzBJc1JVRkJSU3hMUVVGTExFTkJRVU03U1VGRGVFTXNRMEZCUXl3d1FrRkJNRUlzUlVGQlJTeExRVUZMTEVOQlFVTTdTVUZEYmtNc1EwRkJReXhuUkVGQlowUXNSVUZCUlN4TFFVRkxMRU5CUVVNN1NVRkRla1FzUTBGQlF5d3dRa0ZCTUVJc1JVRkJSU3hMUVVGTExFTkJRVU03UTBGRGRFTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iLCJleHBvcnQgKiBmcm9tICcuL1BhY2luZyc7XG5leHBvcnQgKiBmcm9tICcuL1JlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9DaGVja3N1bSc7XG5leHBvcnQgKiBmcm9tICcuL0RhdGUnO1xuZXhwb3J0ICogZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9BcnJheVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vQXV0aFwiO1xuaW1wb3J0ICcuL0F1dGhCYXNpYyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1kwRkJhVUlzVlVGQlZTeERRVUZETzBGQlF6VkNMR05CUVdsQ0xGZEJRVmNzUTBGQlF6dEJRVU0zUWl4alFVRnBRaXhaUVVGWkxFTkJRVU03UVVGRE9VSXNZMEZCYVVJc1VVRkJVU3hEUVVGRE8wRkJRekZDTEdOQlFXbENMRTlCUVU4c1EwRkJRenRCUVVONlFpeGpRVUZwUWl4VFFVRlRMRU5CUVVNN1FVRkRNMElzWTBGQmFVSXNVVUZCVVN4RFFVRkRPMEZCUnpGQ0xFOUJRVThzWVVGQllTeERRVUZESW4wPSIsImltcG9ydCB7IGRhdGUgfSBmcm9tICcuL0RhdGUnO1xuY29uc3QgQ09MT1IgPSB7XG4gICAgY2xlYXI6ICdjb2xvcjojMDAwOyBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7IGZvbnQtd2VpZ2h0Om5vcm1hbDsnLFxuICAgIGJvbGQ6ICdmb250LXdlaWdodDpib2xkOycsXG4gICAgZGltOiAnJyxcbiAgICB1bmRlcnNjb3JlOiAnJyxcbiAgICBibGluazogJycsXG4gICAgcmV2ZXJzZTogJycsXG4gICAgaGlkZGVuOiAnJyxcbiAgICBibGFjazogJ2NvbG9yOiMwMDA7JyxcbiAgICByZWQ6ICdjb2xvcjojZjAwOycsXG4gICAgZ3JlZW46ICdjb2xvcjojMGYwOycsXG4gICAgeWVsbG93OiAnY29sb3I6I2ZmMDsnLFxuICAgIGJsdWU6ICdjb2xvcjojMDBmOycsXG4gICAgbWFnZW50YTogJ2NvbG9yOiNmMGY7JyxcbiAgICBjeWFuOiAnY29sb3I6IzBmZjsnLFxuICAgIHdoaXRlOiAnY29sb3I6I2ZmZjsnLFxuICAgIGRhcmtyZWQ6ICdjb2xvcjojODAwOycsXG4gICAgZGFya2dyZWVuOiAnY29sb3I6IzA4MDsnLFxuICAgIGRhcmt5ZWxsb3c6ICdjb2xvcjojODgwOycsXG4gICAgZGFya2JsdWU6ICdjb2xvcjojMDA4OycsXG4gICAgZGFya21hZ2VudGE6ICdjb2xvcjojODA4OycsXG4gICAgZGFya2N5YW46ICdjb2xvcjojMDg4OycsXG4gICAgZ3JheTogJ2NvbG9yOiM4ODg7JyxcbiAgICBiZ0JsYWNrOiAnYmFja2dyb3VuZC1jb2xvcjojMDAwOycsXG4gICAgYmdSZWQ6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmMDA7JyxcbiAgICBiZ0dyZWVuOiAnYmFja2dyb3VuZC1jb2xvcjojMGYwOycsXG4gICAgYmdZZWxsb3c6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjA7JyxcbiAgICBiZ0JsdWU6ICdiYWNrZ3JvdW5kLWNvbG9yOiMwMGY7JyxcbiAgICBiZ01hZ2VudGE6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmMGY7JyxcbiAgICBiZ0N5YW46ICdiYWNrZ3JvdW5kLWNvbG9yOiMwZmY7JyxcbiAgICBiZ1doaXRlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZmOydcbn07XG5leHBvcnQgY2xhc3MgTG9nIHtcbiAgICBjb25zdHJ1Y3RvcihwcmVmaXgpIHtcbiAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSAnJztcbiAgICAgICAgdGhpcy5tYXhMZW5ndGggPSAtMTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlcG9ydFByZWZpeCA9IHByZWZpeDtcbiAgICB9XG4gICAgc2V0IG1lc3NhZ2VMZW5ndGgobWF4KSB7IHRoaXMubWF4TGVuZ3RoID0gbWF4OyB9XG4gICAgZ2V0IG1lc3NhZ2VMZW5ndGgoKSB7IHJldHVybiB0aGlzLm1heExlbmd0aDsgfVxuICAgIGxldmVsKG5ld0xldmVsU3ltLCBzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICBsZXQgbmV3TGV2ZWwgPSBMb2cubGV2ZWxzW25ld0xldmVsU3ltXSB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGxldCBvbGRMZXZlbCA9IHRoaXMucmVwb3J0TGV2ZWwgfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBpZiAobmV3TGV2ZWxTeW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3TGV2ZWwgPSBvbGRMZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdMZXZlbFN5bSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChMb2cubGV2ZWxzW25ld0xldmVsU3ltXSkge1xuICAgICAgICAgICAgaWYgKHNldEdsb2JhbExldmVsKSB7XG4gICAgICAgICAgICAgICAgTG9nLmdsb2JhbExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgbmV3ICR7c2V0R2xvYmFsTGV2ZWwgPyAnZ2xvYmFsJyA6IHRoaXMucmVwb3J0UHJlZml4fSBsb2cgbGV2ZWwgJHtuZXdMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9ICh3YXMgJHtvbGRMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9KWA7XG4gICAgICAgICAgICAobmV3TGV2ZWwuc3ltID09PSBvbGRMZXZlbC5zeW0pID8gdGhpcy5kZWJ1Zyhtc2cpIDogdGhpcy5pbmZvKG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGB1bmtvd24gbGV2ZWwgJHtuZXdMZXZlbFN5bX07IGxvZyBsZXZlbCByZW1haW5zICR7b2xkTGV2ZWwuc3ltfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMZXZlbC5zeW07XG4gICAgfVxuICAgIGRlYnVnKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLkRFQlVHLCBtc2csIHsgY29sb3I6IFsnZ3JheSddIH0pOyB9XG4gICAgdHJhbnNpZW50KG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLklORk8sIG1zZywgeyBjb2xvcjogWydkYXJrZ3JlZW4nXSwgbGY6ICdcXHInIH0pOyB9XG4gICAgcHJvZ3Jlc3MobXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuSU5GTywgbXNnLCB7IGNvbG9yOiBbJ2RhcmtibHVlJ10gfSk7IH1cbiAgICBpbmZvKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLklORk8sIG1zZywgeyBjb2xvcjogWydkYXJrZ3JlZW4nXSB9KTsgfVxuICAgIHdhcm4obXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuV0FSTiwgbXNnLCB7IGNvbG9yOiBbJ2Rhcmt5ZWxsb3cnLCAnYm9sZCddIH0pOyB9XG4gICAgZXJyb3IobXNnKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gWydkYXJrcmVkJywgJ2JvbGQnXTtcbiAgICAgICAgaWYgKG1zZy5tZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm91dChMb2cuRVJST1IsIG1zZy5tZXNzYWdlLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgICAgIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLnN0YWNrLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgICAgIHJldHVybiBtc2cubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dChMb2cuRVJST1IsIG1zZywgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb3V0KGx2bCwgbXNnLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBkZXNjID0gTG9nLmxldmVsc1tsdmxdO1xuICAgICAgICBjb25zdCBmaWx0ZXJMZXZlbCA9IHRoaXMucmVwb3J0TGV2ZWwgfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBpZiAoZGVzYy5pbXBvcnRhbmNlID49IGZpbHRlckxldmVsLmltcG9ydGFuY2UpIHtcbiAgICAgICAgICAgIGxldCBsaW5lO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgbXNnKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICBsaW5lID0gbXNnKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbGluZSA9IHRoaXMuaW5zcGVjdChtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUoTG9nLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgaWYgKG1zZy5zdGFjaykge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBgJHtsaW5lfVxcbiR7bXNnLnN0YWNrfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBgJHtkYXRlU3RyfSAke3RoaXMucmVwb3J0UHJlZml4fSAke2Rlc2MuZGVzY31gO1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQob3B0aW9ucy5jb2xvciwgaGVhZGVyLCBsaW5lKTtcbiAgICAgICAgICAgIHJldHVybiBsaW5lICsgKG9wdGlvbnMubGYgfHwgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG91dHB1dChjb2xvciwgaGVhZGVyLCBsaW5lKSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gbGluZS5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGlmICh0aGlzLm1heExlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxpbmVzLmZvckVhY2goKGwsIGkpID0+IGwubGVuZ3RoIDw9IHRoaXMubWF4TGVuZ3RoID8gJycgOlxuICAgICAgICAgICAgICAgIGxpbmVzW2ldID0gYCR7bGluZS5zbGljZSgwLCB0aGlzLm1heExlbmd0aCAvIDIgLSAyKX0uLi4ke2xpbmUuc2xpY2UoLXRoaXMubWF4TGVuZ3RoIC8gMiArIDIpfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7aGVhZGVyfSVjICR7bGluZXMuam9pbignXFxuJyl9YCwgY29sb3IubWFwKGMgPT4gQ09MT1JbY10pLmpvaW4oJyAnKSwgQ09MT1JbJ2NsZWFyJ10pO1xuICAgIH1cbiAgICBmb3JtYXQoZm10U3RyKSB7XG4gICAgICAgIGlmIChmbXRTdHIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIExvZy5kYXRlRm9ybWF0ID0gTG9nLmRlZkRhdGVGb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm10U3RyKSB7XG4gICAgICAgICAgICBMb2cuZGF0ZUZvcm1hdCA9IGZtdFN0cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTG9nLmRhdGVGb3JtYXQ7XG4gICAgfVxuICAgIHByZWZpeChwcmYpIHtcbiAgICAgICAgaWYgKHByZikge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSBwcmY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3J0UHJlZml4O1xuICAgIH1cbiAgICBjb25maWcoY2ZnKSB7XG4gICAgICAgIGlmIChjZmcuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0KGNmZy5mb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcubGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbChjZmcubGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcuY29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JzID0gY2ZnLmNvbG9ycztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnNwZWN0KG1zZywgeyBkZXB0aCA9IC0xLCBpbmRlbnQgPSAnICAgJywgY29sb3JzID0gTG9nLklOREVOVF9DT0xPUlMgfSA9IHsgZGVwdGg6IDAsIGluZGVudDogJyAgICcsIGNvbG9yczogTG9nLklOREVOVF9DT0xPUlMgfSkge1xuICAgICAgICBmdW5jdGlvbiBfaW5zcGVjdChtc2csIGRlcHRoLCBsZXZlbCwgY3VyckluZGVudCkge1xuICAgICAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAnJHttc2d9J2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobXNnLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSA/ICd7Li4ufScgOiAnWy4uLl0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgWyR7bXNnLm1hcCgoZSkgPT4gKGUgPT09IHVuZGVmaW5lZCkgPyAnJyA6IF9pbnNwZWN0KGUsIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50KSkuam9pbignLCAnKX1dYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgW3ByZWZpeCwgcG9zdGZpeCwgbGYsIHBvc3RJbmRlbnRdID0gbG9nLmdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCwgY29sb3JzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHske2xmfWAgKyBPYmplY3Qua2V5cyhtc2cpLm1hcChrID0+IGAke3ByZWZpeH0ke2t9JHtwb3N0Zml4fTogJHtfaW5zcGVjdChtc2dba10sIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50ICsgaW5kZW50KX1gKS5qb2luKGAsJHtsZn1gKSArIGAke2xmfSR7cG9zdEluZGVudH19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtc2cudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2cgPSB0aGlzO1xuICAgICAgICByZXR1cm4gX2luc3BlY3QobXNnLCAoZGVwdGggIT09IHVuZGVmaW5lZCAmJiBkZXB0aCAhPT0gbnVsbCAmJiBkZXB0aCA+PSAwKSA/IGRlcHRoIDogOTk5LCAwLCAnJyk7XG4gICAgfVxuICAgIGdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCwgY29sb3JzKSB7XG4gICAgICAgIGxldCBjc3RhcnQgPSAnJywgY3N0b3AgPSAnJywgbGYgPSAnXFxuJztcbiAgICAgICAgaWYgKGNvbG9ycykge1xuICAgICAgICAgICAgaW5kZW50ID0gaW5kZW50LnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xuICAgICAgICAgICAgY3VyckluZGVudCA9IGN1cnJJbmRlbnQucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SW2NvbG9yc1tsZXZlbCAlIGNvbG9ycy5sZW5ndGhdXSB8fCBjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXTtcbiAgICAgICAgICAgIGNzdGFydCA9IGA8Yj48c3BhbiBzdHlsZT0nJHtjb2xvcn0nPmA7XG4gICAgICAgICAgICBjc3RvcCA9IGA8L3NwYW4+PC9iPmA7XG4gICAgICAgICAgICBsZiA9ICc8YnI+JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Ake2N1cnJJbmRlbnR9JHtpbmRlbnR9JHtjc3RhcnR9YCwgYCR7Y3N0b3B9YCwgY29sb3JzID8gJzxicj4nIDogJ1xcbicsIGN1cnJJbmRlbnRdO1xuICAgIH1cbn1cbkxvZy5JTkRFTlRfQ09MT1JTID0gWydkYXJrYmx1ZScsICdkYXJrZ3JlZW4nLCAnZGFya3JlZCcsICdkYXJrY3lhbicsICdkYXJreWVsbG93JywgJ2RhcmttYWdlbnRhJ107XG5Mb2cuZGVmRGF0ZUZvcm1hdCA9ICclWVlZWSVNTSVERCAlaGg6JW1tOiVzcy4lampqJztcbkxvZy5kYXRlRm9ybWF0ID0gTG9nLmRlZkRhdGVGb3JtYXQ7XG5Mb2cuREVCVUcgPSAnREVCVUcnO1xuTG9nLklORk8gPSAnSU5GTyc7XG5Mb2cuV0FSTiA9ICdXQVJOJztcbkxvZy5FUlJPUiA9ICdFUlJPUic7XG5Mb2cubGV2ZWxzID0ge1xuICAgIFtMb2cuREVCVUddOiB7IGltcG9ydGFuY2U6IDAsIHN5bTogTG9nLkRFQlVHLCBkZXNjOiAnREVCVUcnIH0sXG4gICAgW0xvZy5JTkZPXTogeyBpbXBvcnRhbmNlOiAxLCBzeW06IExvZy5JTkZPLCBkZXNjOiAnSU5GTycgfSxcbiAgICBbTG9nLldBUk5dOiB7IGltcG9ydGFuY2U6IDIsIHN5bTogTG9nLldBUk4sIGRlc2M6ICdXQVJOJyB9LFxuICAgIFtMb2cuRVJST1JdOiB7IGltcG9ydGFuY2U6IDMsIHN5bTogTG9nLkVSUk9SLCBkZXNjOiAnRVJST1InIH1cbn07XG5Mb2cubG9nID0gbmV3IExvZygnJyk7XG5Mb2cuZ2xvYmFsTGV2ZWwgPSBMb2cubGV2ZWxzW0xvZy5JTkZPXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGdlJrRXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxGRkJRVkVzUTBGQlF6dEJRVWs1UWl4TlFVRk5MRXRCUVVzc1IwRkJSenRKUVVOV0xFdEJRVXNzUlVGQlR5d3lSRUZCTWtRN1NVRkZka1VzU1VGQlNTeEZRVUZSTEcxQ1FVRnRRanRKUVVNdlFpeEhRVUZITEVWQlFWTXNSVUZCUlR0SlFVTmtMRlZCUVZVc1JVRkJSU3hGUVVGRk8wbEJRMlFzUzBGQlN5eEZRVUZQTEVWQlFVVTdTVUZEWkN4UFFVRlBMRVZCUVVzc1JVRkJSVHRKUVVOa0xFMUJRVTBzUlVGQlRTeEZRVUZGTzBsQlJXUXNTMEZCU3l4RlFVRlBMR0ZCUVdFN1NVRkRla0lzUjBGQlJ5eEZRVUZUTEdGQlFXRTdTVUZEZWtJc1MwRkJTeXhGUVVGUExHRkJRV0U3U1VGRGVrSXNUVUZCVFN4RlFVRk5MR0ZCUVdFN1NVRkRla0lzU1VGQlNTeEZRVUZSTEdGQlFXRTdTVUZEZWtJc1QwRkJUeXhGUVVGTExHRkJRV0U3U1VGRGVrSXNTVUZCU1N4RlFVRlJMR0ZCUVdFN1NVRkRla0lzUzBGQlN5eEZRVUZQTEdGQlFXRTdTVUZGZWtJc1QwRkJUeXhGUVVGTExHRkJRV0U3U1VGRGVrSXNVMEZCVXl4RlFVRkhMR0ZCUVdFN1NVRkRla0lzVlVGQlZTeEZRVUZGTEdGQlFXRTdTVUZEZWtJc1VVRkJVU3hGUVVGSkxHRkJRV0U3U1VGRGVrSXNWMEZCVnl4RlFVRkRMR0ZCUVdFN1NVRkRla0lzVVVGQlVTeEZRVUZKTEdGQlFXRTdTVUZEZWtJc1NVRkJTU3hGUVVGUkxHRkJRV0U3U1VGRmVrSXNUMEZCVHl4RlFVRkxMSGRDUVVGM1FqdEpRVU53UXl4TFFVRkxMRVZCUVU4c2QwSkJRWGRDTzBsQlEzQkRMRTlCUVU4c1JVRkJTeXgzUWtGQmQwSTdTVUZEY0VNc1VVRkJVU3hGUVVGSkxIZENRVUYzUWp0SlFVTndReXhOUVVGTkxFVkJRVTBzZDBKQlFYZENPMGxCUTNCRExGTkJRVk1zUlVGQlJ5eDNRa0ZCZDBJN1NVRkRjRU1zVFVGQlRTeEZRVUZOTEhkQ1FVRjNRanRKUVVOd1F5eFBRVUZQTEVWQlFVc3NkMEpCUVhkQ08wTkJRM1pETEVOQlFVTTdRVUZsUml4TlFVRk5MRTlCUVU4c1IwRkJSenRKUVhGRFdpeFpRVUZaTEUxQlFXRTdVVUZNWml4blFrRkJWeXhIUVVGblFpeFRRVUZUTEVOQlFVTTdVVUZEY2tNc2FVSkJRVmtzUjBGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYmtJc1kwRkJVeXhIUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNUNMRmRCUVUwc1IwRkJWU3hKUVVGSkxFTkJRVU03VVVGRlJpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVGRExFTkJRVU03U1VGUk1VUXNTVUZCVnl4aFFVRmhMRU5CUVVNc1IwRkJWU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVjNVJDeEpRVUZYTEdGQlFXRXNTMEZCU3l4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzBsQmJVSTVReXhMUVVGTExFTkJRVU1zVjBGQmJVSXNSVUZCUlN4alFVRjFRanRSUVVOeVJDeEpRVUZKTEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRNVVFzU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEyNUVMRWxCUVVrc1YwRkJWeXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU16UWl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xTkJRM1pDTzJGQlFVMHNTVUZCU1N4WFFVRlhMRXRCUVVzc1NVRkJTU3hGUVVGRk8xbEJRemRDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJRMmhETzJGQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTzFsQlEyaERMRWxCUVVrc1kwRkJZeXhGUVVGRk8yZENRVUZGTEVkQlFVY3NRMEZCUXl4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJRVVU3YVVKQlF5OUNPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUVVVN1dVRkRjRVFzVFVGQlRTeEhRVUZITEVkQlFVY3NUMEZCVHl4alFVRmpMRU5CUVVFc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1kwRkJZeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4VFFVRlRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0WlFVTm9TaXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEV0QlFVc3NVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM0pGTzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4WFFVRlhMSFZDUVVGMVFpeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOb1JqdFJRVU5FTEU5QlFVOHNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlUwMHNTMEZCU3l4RFFVRkRMRWRCUVU4c1NVRkJWeXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlV5OUZMRk5CUVZNc1EwRkJReXhIUVVGUExFbEJRVmNzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJVMmhITEZGQlFWRXNRMEZCUXl4SFFVRlBMRWxCUVZjc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRV0Z5Uml4SlFVRkpMRU5CUVVNc1IwRkJUeXhKUVVGWExFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZUYkVZc1NVRkJTU3hEUVVGRExFZEJRVThzU1VGQlZ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZVelJpeExRVUZMTEVOQlFVTXNSMEZCVHp0UlFVTm9RaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOc1F5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRZaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMjVFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYWtRc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETzFOQlEzUkNPMkZCUVUwN1dVRkRTQ3hQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOeVJEdEpRVU5NTEVOQlFVTTdTVUZoVXl4SFFVRkhMRU5CUVVNc1IwRkJWU3hGUVVGRkxFZEJRVThzUlVGQlJTeFBRVUZYTzFGQlF6RkRMRWxCUVVrc1NVRkJTU3hIUVVGaExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRja01zVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEzaEVMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzU1VGQlNTeFhRVUZYTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUXpORExFbEJRVWtzU1VGQlNTeERRVUZETzFsQlExUXNVVUZCVHl4UFFVRlBMRWRCUVVjc1JVRkJSVHRuUWtGRFppeExRVUZMTEZWQlFWVTdiMEpCUVVVc1NVRkJTU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzI5Q1FVRkRMRTFCUVUwN1owSkJRM0pETEV0QlFVc3NVVUZCVVR0dlFrRkJTU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzI5Q1FVRkRMRTFCUVUwN1owSkJRMjVETEV0QlFVc3NVVUZCVVN4RFFVRkRPMmRDUVVOa0xFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzSkRPMWxCUTBRc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRVVVzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dGhRVUZGTzFsQlEyeEVMRTFCUVUwc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlF6bEVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGVrTXNUMEZCVHl4SlFVRkpMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEpRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTJ4RE8xRkJRMFFzVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVsVExFMUJRVTBzUTBGQlF5eExRVUZqTEVWQlFVVXNUVUZCWVN4RlFVRkZMRWxCUVZjN1VVRkRka1FzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlFUdFJRVU01UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVU1zUTBGQlF5eEZRVUZGTzFsQlEyeENMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVFc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTnVSQ3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkRMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGQk8xTkJRemxHTzFGQlEwUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFMUJRVTBzVFVGQlRTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGQkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFJ5eERRVUZETzBsQldVMHNUVUZCVFN4RFFVRkRMRTFCUVdNN1VVRkRlRUlzU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUVVVc1IwRkJSeXhEUVVGRExGVkJRVlVzUjBGQlJ5eEhRVUZITEVOQlFVTXNZVUZCWVN4RFFVRkRPMU5CUVVVN1lVRkRka1FzU1VGQlNTeE5RVUZOTEVWQlFVMDdXVUZCUlN4SFFVRkhMRU5CUVVNc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF6dFRRVUZGTzFGQlEycEVMRTlCUVU4c1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCVDAwc1RVRkJUU3hEUVVGRExFZEJRVmM3VVVGRGNrSXNTVUZCU1N4SFFVRkhMRVZCUVVVN1dVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVkQlFVY3NRMEZCUXp0VFFVRkZPMUZCUTNKRExFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJWVTBzVFVGQlRTeERRVUZETEVkQlFYRkVPMUZCUXk5RUxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRVZCUVVVN1dVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRUUVVGRk8xRkJRM2hFTEVsQlFVa3NSMEZCUnl4RFFVRkRMRXRCUVVzc1MwRkJSeXhUUVVGVExFVkJRVWM3V1VGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVUZGTzFGQlEzUkVMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUzBGQlJ5eFRRVUZUTEVWQlFVVTdXVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTTdVMEZCUlR0SlFVTTNSQ3hEUVVGRE8wbEJhVUpOTEU5QlFVOHNRMEZCUXl4SFFVRlBMRVZCUVVVc1JVRkJReXhMUVVGTExFZEJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4SFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFZEJRVU1zUjBGQlJ5eERRVUZETEdGQlFXRXNSVUZCUXl4SFFVRkRMRVZCUVVNc1MwRkJTeXhGUVVGRExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeEZRVUZETzFGQlEzaElMRk5CUVZNc1VVRkJVU3hEUVVGRExFZEJRVThzUlVGQlJTeExRVUZaTEVWQlFVVXNTMEZCV1N4RlFVRkZMRlZCUVdsQ08xbEJRM0JGTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1JVRkJaMEk3WjBKQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1lVRkJSVHRaUVVOc1JDeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVZjN1owSkJRVVVzVDBGQlR5eFhRVUZYTEVOQlFVTTdZVUZCUlR0WlFVTjJSQ3hKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZWQlFWVXNSVUZCUnp0blFrRkJSU3hQUVVGUExGVkJRVlVzUTBGQlF6dGhRVUZGTzFsQlEzUkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZMTzJkQ1FVRkZMRTlCUVU4c1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF6dGhRVUZGTzFsQlEzUkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZMTzJkQ1FVTTFRaXhKUVVGSkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTFRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMmxDUVVOMFJEdG5Ra0ZEUkN4SlFVRkpMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTjJRaXhQUVVGUExFbEJRVWtzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVzc1JVRkJReXhGUVVGRkxFTkJRVUVzUTBGQlF5eERRVUZETEV0QlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFVkJRVVVzUTBGQlFTeERRVUZETEVOQlFVRXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRwUWtGRE0wYzdaMEpCUTBRc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeFBRVUZQTEVWQlFVVXNSVUZCUlN4RlFVRkZMRlZCUVZVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdaMEpCUXk5R0xFOUJRVThzU1VGQlNTeEZRVUZGTEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeEhRVUZITEVOQlFVTXNSMEZCUnl4UFFVRlBMRXRCUXk5RUxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVkQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1IwRkJReXhOUVVGTkxFTkJRM2hFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRWRCUVVjc1ZVRkJWU3hIUVVGSExFTkJRVU03WVVGRE9VTTdXVUZEUkN4UFFVRlBMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU14UWl4RFFVRkRPMUZCUTBRc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlJXcENMRTlCUVU4c1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEV0QlFVc3NTMEZCUnl4VFFVRlRMRWxCUVVrc1MwRkJTeXhMUVVGSExFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU12Uml4RFFVRkRPMGxCUlZNc1lVRkJZU3hEUVVGRExFMUJRV0VzUlVGQlJTeExRVUZaTEVWQlFVVXNWVUZCYVVJc1JVRkJSU3hOUVVGbE8xRkJRMjVHTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRka01zU1VGQlNTeE5RVUZOTEVWQlFVVTdXVUZEVWl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkRlRU1zVlVGQlZTeEhRVUZITEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFsQlJXaEVMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEzQkdMRTFCUVUwc1IwRkJTU3h0UWtGQmJVSXNTMEZCU3l4SlFVRkpMRU5CUVVNN1dVRkRka01zUzBGQlN5eEhRVUZMTEdGQlFXRXNRMEZCUXp0WlFVTjRRaXhGUVVGRkxFZEJRVkVzVFVGQlRTeERRVUZETzFOQlEzQkNPMUZCUTBRc1QwRkJUeXhEUVVGRExFZEJRVWNzVlVGQlZTeEhRVUZITEUxQlFVMHNSMEZCUnl4TlFVRk5MRVZCUVVVc1JVRkJSU3hIUVVGSExFdEJRVXNzUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUVN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkRPVVlzUTBGQlF6czdRVUU1VW1kQ0xHbENRVUZoTEVkQlFVY3NRMEZCUXl4VlFVRlZMRVZCUVVVc1YwRkJWeXhGUVVGRkxGTkJRVk1zUlVGQlJTeFZRVUZWTEVWQlFVVXNXVUZCV1N4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8wRkJSVGxHTEdsQ1FVRmhMRWRCUVVjc09FSkJRVGhDTEVOQlFVTTdRVUZETDBNc1kwRkJWU3hIUVVGTkxFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTTdRVUZIY2tNc1UwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF6dEJRVWRvUWl4UlFVRkpMRWRCUVVzc1RVRkJUU3hEUVVGRE8wRkJSMmhDTEZGQlFVa3NSMEZCU3l4TlFVRk5MRU5CUVVNN1FVRkhhRUlzVTBGQlN5eEhRVUZKTEU5QlFVOHNRMEZCUXp0QlFVZGtMRlZCUVUwc1IwRkJSenRKUVVOMFFpeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJTeXhGUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUXp0SlFVTTVSQ3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCVFN4RlFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVjc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlF6dEpRVU0zUkN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlRTeEZRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVY3NTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJRenRKUVVNM1JDeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJTeXhGUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUXp0RFFVTnFSU3hEUVVGRE8wRkJSMWtzVDBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJSMllzWlVGQlZ5eEhRVUZoTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZESW4wPSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYmluL2VzbS9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=