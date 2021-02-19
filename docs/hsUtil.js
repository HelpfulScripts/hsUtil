this.hsUtil =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./bin/esm/Array.js":
/*!**************************!*\
  !*** ./bin/esm/Array.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniquefy": () => (/* binding */ uniquefy)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Auth": () => (/* binding */ Auth)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthBasic": () => (/* binding */ AuthBasic)
/* harmony export */ });
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ "./bin/esm/Request.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "./bin/esm/Auth.js");


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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shortCheckSum": () => (/* binding */ shortCheckSum)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "date": () => (/* binding */ date),
/* harmony export */   "ms": () => (/* binding */ ms)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout),
/* harmony export */   "delay": () => (/* binding */ delay),
/* harmony export */   "Pace": () => (/* binding */ Pace)
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");

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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authenticators": () => (/* binding */ Authenticators),
/* harmony export */   "Request": () => (/* binding */ Request)
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pacing */ "./bin/esm/Pacing.js");


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
            if (!Authenticators.authProviders.some(entry => {
                if (authRequest.indexOf(entry.name) === 0)
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
    constructor(_Log = _log__WEBPACK_IMPORTED_MODULE_0__.Log) {
        this.setCredentials = (user, password) => {
            this.credentials = user === undefined ? undefined : { user: user, password: password };
        };
        this.setAuthToken = (token) => this.authToken = token;
        this.setPace = ({ pace = 50, max = 10, collectionPeriod = 100 } = { pace: null }) => {
            this.pace = (!pace || pace < 0) ? undefined : new _Pacing__WEBPACK_IMPORTED_MODULE_1__.Pace({ pace: pace, maxConcurrent: max, collectionPeriod: collectionPeriod });
        };
        this.clearPace = () => this.setPace();
        this.decode = undefined;
        this.log = new _Log('Request');
        this.log.messageLength = 120;
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
        const options = {
            rejectUnauthorized: false,
            method: method,
            protocol: url.protocol,
            host: url.host,
            hostname: url.hostname,
            port: url.port,
            pathname: url.pathname,
            path: url.pathname + (url.search || ''),
            headers: {},
            url: `${url.protocol}//${url.host}${url.pathname + (url.search || '')}`,
        };
        if (this.authToken) {
            options.headers.AuthToken = this.authToken;
        }
        return options;
    }
    async decodedRequest(options, useCached, headers, postData) {
        const result = await this.requestOptions(options, useCached, postData);
        if (this.decode && result.response.txt && options.method === 'GET') {
            try {
                result.data = this.decode(result.data, options);
            }
            catch (e) {
                this.log.error(`decoding ${result.cached ? 'cached ' : ''}${options.url}:`);
                this.log.error(`${e}`);
            }
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
        const httpCode = response.response.statusCode || response.response.status;
        const queueInfo = this.pace ? `(${this.pace.inQueue()} | ${this.pace.inProgress()}) ` : '';
        this.log.transient(`${queueInfo}received ${options.method} ${httpCode} ${options.url} `);
        return response;
    }
    async request(options, postData) {
        let response;
        try {
            response = await this.issueRequest(options, postData);
            const auth = Authenticators.get(response.response.headers['www-authenticate'], this.credentials, options.url);
            response = auth ? await this.request(auth.testAuth(options, response.response)) : response;
        }
        catch (e) {
            this.log.error(`request: ${e}\n${Object.entries(options.headers).join('\n')}`);
            throw `error requesting ${options.url}: ${e}`;
        }
        const len = typeof response.data === 'string' ? response.data.length : response.data.byteLength;
        this.log.info(`received ${options.method} ${response.response.statusCode || response.response.status} ${('' + len).padStart(5, ' ')} bytes ${options.url} `);
        return response;
    }
    async issueRequest(options, postData) {
        const isTextualContent = this.isTextualContent.bind(this);
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
                    const txt = isTextualContent(headers['content-type'], headers['content-length'], options.url);
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
    isTextualContent(contentType, contentLength, url) {
        if (contentType === undefined) {
            this.log.warn(`undefined contentType; assuming binary for len=${contentLength} for '${url}'`);
            return false;
        }
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
    static isTextualRequest(pathName) {
        return ['json', 'txt', 'html'].some(ext => pathName.indexOf(ext) >= 0);
    }
}
Request.contentTypes = [];
Request.decoders = {
    str2json: (data) => JSON.parse(data.replace(/\p{Control}/gu, "")),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsT0FBTyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBYyxVQUFVLENBQUM7QUEyRHhDLE1BQU0sT0FBTyxjQUFjO0lBR2hCLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBVyxFQUFFLFFBQXdDO1FBQy9FLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtJQUNyRSxDQUFDO0lBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFrQixFQUFFLFdBQXVCLEVBQUUsR0FBVTtRQUNyRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsT0FBTyxTQUFTLENBQUE7U0FDbkI7YUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE1BQU0sMkVBQTJFLEdBQUcsRUFBRSxDQUFDO1NBQzFGO1FBQ0QsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFHLENBQUM7b0JBQUUsT0FBTyxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN0RixDQUFDLENBQUM7Z0JBQUUsTUFBTSx1Q0FBdUMsV0FBVyxTQUFTLEdBQUcsdURBQXVELENBQUM7U0FDbkk7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7O0FBbEJjLG9CQUFLLEdBQXVCLEVBQUUsQ0FBQTtBQUM5Qiw0QkFBYSxHQUE2RCxFQUFFLENBQUE7QUFxQi9GLE1BQU0sT0FBTyxPQUFPO0lBMEJoQixZQUFtQixJQUFJLEdBQUMsR0FBRztRQVVwQixtQkFBYyxHQUFHLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBRyxTQUFTLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUN4RixDQUFDLENBQUE7UUFHTSxpQkFBWSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFRbkIsWUFBTyxHQUFHLENBQUMsRUFBQyxJQUFJLEdBQUMsRUFBRSxFQUFFLEdBQUcsR0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEdBQUMsR0FBRyxLQUFFLEVBQUMsSUFBSSxFQUFNLElBQUksRUFBQyxFQUFFLEVBQUU7WUFDMUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7UUFDM0gsQ0FBQyxDQUFBO1FBS00sY0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQVFqQyxXQUFNLEdBQVksU0FBUyxDQUFDO1FBdEMvQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0lBM0JNLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBVyxFQUFFLE1BQWM7UUFDcEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQXNFTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQWMsRUFBRSxFQUFDLFNBQVMsR0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFDLEVBQUUsRUFBQyxHQUFDLEVBQUU7UUFDNUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVNNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBYyxFQUFFLFFBQVksRUFBRSxFQUFDLE9BQU8sR0FBQyxFQUFFLEVBQUMsR0FBQyxFQUFFO1FBQzFELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBU00sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFjLEVBQUUsUUFBWSxFQUFFLEVBQUMsT0FBTyxHQUFDLEVBQUUsRUFBQyxHQUFDLEVBQUU7UUFDM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFUyxNQUFNLENBQUMsR0FBYztRQUMz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

/***/ }),

/***/ "./bin/esm/index.js":
/*!**************************!*\
  !*** ./bin/esm/index.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pace": () => (/* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.Pace),
/* harmony export */   "delay": () => (/* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.delay),
/* harmony export */   "timeout": () => (/* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.timeout),
/* harmony export */   "Authenticators": () => (/* reexport safe */ _Request__WEBPACK_IMPORTED_MODULE_1__.Authenticators),
/* harmony export */   "Request": () => (/* reexport safe */ _Request__WEBPACK_IMPORTED_MODULE_1__.Request),
/* harmony export */   "shortCheckSum": () => (/* reexport safe */ _Checksum__WEBPACK_IMPORTED_MODULE_2__.shortCheckSum),
/* harmony export */   "date": () => (/* reexport safe */ _Date__WEBPACK_IMPORTED_MODULE_3__.date),
/* harmony export */   "ms": () => (/* reexport safe */ _Date__WEBPACK_IMPORTED_MODULE_3__.ms),
/* harmony export */   "Log": () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_4__.Log),
/* harmony export */   "uniquefy": () => (/* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_5__.uniquefy),
/* harmony export */   "Auth": () => (/* reexport safe */ _Auth__WEBPACK_IMPORTED_MODULE_6__.Auth)
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Log": () => (/* binding */ Log)
/* harmony export */ });
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ "./bin/esm/Date.js");

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
        this.local = true;
        this.reportPrefix = prefix;
    }
    static globalLog(L) {
        Log.log = new L('');
        Log.log.local = false;
        return Log.log;
    }
    set messageLength(max) { Log.maxLength = max; }
    get messageLength() { return Log.maxLength; }
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
    transient(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'], lf: '\r', maxLen: Log.maxLength || Log.transientLength }); }
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
        let lvlDesc = Log.levels[lvl];
        const filterLevel = this.reportLevel || Log.globalLevel;
        if (lvlDesc.importance >= filterLevel.importance) {
            let line;
            switch (typeof msg) {
                case 'function':
                    line = msg();
                    break;
                case 'string':
                    line = msg;
                    break;
                case 'object': if (!msg.stack) {
                    console.dir(msg);
                    return undefined;
                }
                default: line = this.inspect(msg);
            }
            const dateStr = (0,_Date__WEBPACK_IMPORTED_MODULE_0__.date)(Log.dateFormat);
            if (msg.stack) {
                line = `${line}\n${msg.stack}`;
            }
            const headerParts = [dateStr, this.reportPrefix, lvlDesc.desc];
            this.output(options, headerParts, line);
            return `${headerParts.join(' ')} ${line}${(options.lf || '')}`;
        }
        return undefined;
    }
    output(options, headerParts, line) {
        const color = options.color;
        const lines = this.limitLength(line, options.maxLen);
        console.log(`%c${headerParts.join(' ')}%c ${lines.join('\n')}`, color.map(c => COLOR[c]).join(' '), COLOR['clear']);
    }
    limitLength(line, maxLen) {
        const lines = line.split('\n');
        maxLen = maxLen || Log.maxLength || Log.transientLength;
        if (maxLen > 0) {
            lines.forEach((l, i) => lines[i] = l.length <= maxLen ?
                lines[i].padEnd(maxLen, ' ') :
                `${line.slice(0, maxLen / 2 - 2)}...${line.slice(-maxLen / 2 + 2)}`);
        }
        return lines;
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
            Log.log.format(cfg.format);
        }
        if (cfg.level !== undefined) {
            this.level(cfg.level);
        }
        if (cfg.colors !== undefined) {
            Log.colors = cfg.colors;
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
                const [prefix, postfix, lf, postIndent] = aLog.getPrePostfix(indent, level, currIndent, colors);
                return `{${lf}` + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${_inspect(msg[k], depth - 1, level + 1, currIndent + indent)}`).join(`,${lf}`) + `${lf}${postIndent}}`;
            }
            return msg.toString();
        }
        const aLog = this;
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
Log.defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
Log.DEBUG = 'DEBUG';
Log.INFO = 'INFO';
Log.WARN = 'WARN';
Log.ERROR = 'ERROR';
Log.transientLength = 120;
Log.INDENT_COLORS = ['darkblue', 'darkgreen', 'darkred', 'darkcyan', 'darkyellow', 'darkmagenta'];
Log.dateFormat = Log.defDateFormat;
Log.levels = {
    [Log.DEBUG]: { importance: 0, sym: Log.DEBUG, desc: 'DEBUG' },
    [Log.INFO]: { importance: 1, sym: Log.INFO, desc: 'INFO' },
    [Log.WARN]: { importance: 2, sym: Log.WARN, desc: 'WARN' },
    [Log.ERROR]: { importance: 3, sym: Log.ERROR, desc: 'ERROR' }
};
Log.colors = true;
Log.maxLength = 0;
Log.log = Log.globalLog(Log);
Log.globalLevel = Log.levels[Log.INFO];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRkEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUk5QixNQUFNLEtBQUssR0FBRztJQUNWLEtBQUssRUFBTywyREFBMkQ7SUFFdkUsSUFBSSxFQUFRLG1CQUFtQjtJQUMvQixHQUFHLEVBQVMsRUFBRTtJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsS0FBSyxFQUFPLEVBQUU7SUFDZCxPQUFPLEVBQUssRUFBRTtJQUNkLE1BQU0sRUFBTSxFQUFFO0lBRWQsS0FBSyxFQUFPLGFBQWE7SUFDekIsR0FBRyxFQUFTLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFDekIsTUFBTSxFQUFNLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFFekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsU0FBUyxFQUFHLGFBQWE7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsV0FBVyxFQUFDLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFFekIsT0FBTyxFQUFLLHdCQUF3QjtJQUNwQyxLQUFLLEVBQU8sd0JBQXdCO0lBQ3BDLE9BQU8sRUFBSyx3QkFBd0I7SUFDcEMsUUFBUSxFQUFJLHdCQUF3QjtJQUNwQyxNQUFNLEVBQU0sd0JBQXdCO0lBQ3BDLFNBQVMsRUFBRyx3QkFBd0I7SUFDcEMsTUFBTSxFQUFNLHdCQUF3QjtJQUNwQyxPQUFPLEVBQUssd0JBQXdCO0NBQ3ZDLENBQUM7QUFnQkYsTUFBTSxPQUFPLEdBQUc7SUFpRFosWUFBbUIsTUFBYTtRQUx0QixnQkFBVyxHQUFnQixTQUFTLENBQUM7UUFDckMsaUJBQVksR0FBSSxF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

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0FycmF5LmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9lc20vQXV0aC5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0F1dGhCYXNpYy5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL0NoZWNrc3VtLmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9lc20vRGF0ZS5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL1BhY2luZy5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvLi9iaW4vZXNtL2xvZy5qcyIsIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHNVdGlsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMnhCOzs7Ozs7Ozs7Ozs7OztBQ0xwQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNiO0FBQ3ZCLHdCQUF3Qix1Q0FBSTtBQUNuQztBQUNBLDREQUE0RCxjQUFjLEdBQUcsY0FBYztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUE4QjtBQUM5QiwyQ0FBMkMsMjlC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d0MsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLE1BQU0sTUFBTTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUErQztBQUNqRSxpQkFBaUIsNkNBQTZDO0FBQzlELGlCQUFpQiw2Q0FBNkM7QUFDOUQsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMitYOzs7Ozs7VUN4TjNDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJoc1V0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdW5pcXVlZnkoYXJyYXksIGtleSkge1xuICAgIGNvbnN0IHVuaXF1ZSA9IHt9O1xuICAgIHJldHVybiBrZXkgPyBhcnJheS5maWx0ZXIodCA9PiB1bmlxdWVbdFsnJyArIGtleV1dID8gZmFsc2UgOiAodW5pcXVlW3RbJycgKyBrZXldXSA9IHRydWUpKVxuICAgICAgICA6IGFycmF5LmZpbHRlcih0ID0+IHVuaXF1ZVsnJyArIHRdID8gZmFsc2UgOiAodW5pcXVlWycnICsgdF0gPSB0cnVlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWEp5WVhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12UVhKeVlYa3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCWjBOQkxFMUJRVTBzVlVGQlZTeFJRVUZSTEVOQlFVa3NTMEZCVXl4RlFVRkZMRWRCUVd0Q08wbEJRM0pFTEUxQlFVMHNUVUZCVFN4SFFVRTBRaXhGUVVGRkxFTkJRVU03U1VGRE0wTXNUMEZCVHl4SFFVRkhMRU5CUVVFc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU40UlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETjBVc1EwRkJReUo5IiwiZXhwb3J0IGNsYXNzIEF1dGgge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFYwYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlCZFhSb0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVWRCTEUxQlFVMHNUMEZCWjBJc1NVRkJTVHRKUVVsMFFpeFpRVUZ0UWl4UlFVRmxMRVZCUVVVc1VVRkJaVHRSUVVNdlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVONlFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRKUVVNM1FpeERRVUZETzBOQlIwb2lmUT09IiwiaW1wb3J0IHsgQXV0aGVudGljYXRvcnMgfSBmcm9tICcuL1JlcXVlc3QnO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4vQXV0aCc7XG5leHBvcnQgY2xhc3MgQXV0aEJhc2ljIGV4dGVuZHMgQXV0aCB7XG4gICAgdGVzdEF1dGgob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgX2J0b2EoYCR7dGhpcy51c2VybmFtZX06JHt0aGlzLnBhc3N3b3JkfWApO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5mdW5jdGlvbiBfYnRvYShzdHIpIHtcbiAgICBjb25zdCBidWZmZXIgPSBzdHIgaW5zdGFuY2VvZiBCdWZmZXIgPyBzdHIgOiBCdWZmZXIuZnJvbShzdHIudG9TdHJpbmcoKSwgJ2JpbmFyeScpO1xuICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpO1xufVxuQXV0aGVudGljYXRvcnMuYWRkQXV0aFByb3ZpZGVyKCdCYXNpYycsIChjcmVkZW50aWFscykgPT4gbmV3IEF1dGhCYXNpYyhjcmVkZW50aWFscy51c2VyLCBjcmVkZW50aWFscy5wYXNzd29yZCkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWMGFFSmhjMmxqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMEYxZEdoQ1lYTnBZeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFWY3NZMEZCWXl4RlFVRmxMRTFCUTNSQ0xGZEJRVmNzUTBGQlF6dEJRVU55UXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRVlVzVVVGQlVTeERRVUZETzBGQlIyeERMRTFCUVUwc1QwRkJUeXhUUVVGVkxGTkJRVkVzU1VGQlNUdEpRVU12UWl4UlFVRlJMRU5CUVVNc1QwRkJaVHRSUVVOd1FpeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1IwRkJSeXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjBSaXhQUVVGUExFOUJRVThzUTBGQlF6dEpRVU51UWl4RFFVRkRPME5CUTBvN1FVRkZSQ3hUUVVGVExFdEJRVXNzUTBGQlF5eEhRVUZwUWp0SlFVTTFRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEhRVUZITEZsQlFWa3NUVUZCVFN4RFFVRkJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUTJ4R0xFOUJRVThzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVOeVF5eERRVUZETzBGQlJVUXNZMEZCWXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eFhRVUYxUWl4RlFVRlBMRVZCUVVVc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZCSW4wPSIsImV4cG9ydCBmdW5jdGlvbiBzaG9ydENoZWNrU3VtKHMpIHtcbiAgICBsZXQgY2hrID0gMHgxMjM0NTY3ODtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hrICs9IChzLmNoYXJDb2RlQXQoaSkgKiAoaSArIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIChjaGsgJiAweGZmZmZmZmZmKS50b1N0cmluZygxNik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmhsWTJ0emRXMHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlEyaGxZMnR6ZFcwdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJVVU1zVFVGQlRTeFZRVUZWTEdGQlFXRXNRMEZCUXl4RFFVRlJPMGxCUTI1RExFbEJRVWtzUjBGQlJ5eEhRVUZITEZWQlFWVXNRMEZCUXp0SlFVTnlRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTXpRaXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRkRU03U1VGRFJDeFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTXhReXhEUVVGREluMD0iLCJjb25zdCBtb250aFN0ciA9IFtcbiAgICBbJ0phbicsICdKYW51YXJ5J10sIFsnRmViJywgJ0ZlYnJ1YXJ5J10sIFsnTWFyJywgJ01hcmNoJ10sIFsnQXByJywgJ0FwcmlsJ10sIFsnTWF5JywgJ01heSddLCBbJ0p1bicsICdKdW5lJ10sXG4gICAgWydKdWwnLCAnSnVseSddLCBbJ0F1ZycsICdBdWd1c3QnXSwgWydTZXAnLCAnU2VwdGVtYmVyJ10sIFsnT2N0JywgJ09jdG9iZXInXSwgWydOb3YnLCAnTm92ZW1iZXInXSwgWydEZWMnLCAnRGVjZW1iZXInXVxuXTtcbmNvbnN0IGRheVN0ciA9IFtcbiAgICBbJ1N1bicsICdTdW5kYXknXSwgWydNb24nLCAnTW9uZGF5J10sIFsnVHVlJywgJ1R1ZXNkYXknXSwgWydXZWQnLCAnV2VkbmVzZGF5J10sIFsnVGh1JywgJ1RodXJzZGF5J10sIFsnRnJpJywgJ0ZyaWRheSddLCBbJ1NhdCcsICdTYXR1cmRheSddXG5dO1xuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlciwgZGlnaXRzKSB7XG4gICAgbGV0IHIgPSAnJyArIG51bWJlcjtcbiAgICB3aGlsZSAoci5sZW5ndGggPCBkaWdpdHMpIHtcbiAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG5leHBvcnQgZnVuY3Rpb24gZGF0ZShmb3JtYXRTdHJpbmcsIGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZm9ybWF0U3RyaW5nICE9PSAnc3RyaW5nJyB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpID9cbiAgICAgICAgJ2ludmFsaWQnIDpcbiAgICAgICAgZm9ybWF0U3RyaW5nXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZWVkvZywgJycgKyBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZL2csICcnICsgKGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTS9nLCAnJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRERERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJURERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREL2csIGZvcm1hdE51bWJlcihkYXRlLmdldERhdGUoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUQvZywgJycgKyBkYXRlLmdldERhdGUoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laGgvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWgvZywgJycgKyBkYXRlLmdldEhvdXJzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW1tL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW0vZywgJycgKyBkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lc3MvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lampqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAsIDEpKTtcbn1cbmV4cG9ydCBjb25zdCBtcyA9IHtcbiAgICBmcm9tTWludXRlczogKG1pbikgPT4gMTAwMCAqIDYwICogbWluLFxuICAgIGZyb21Ib3VyczogKGgpID0+IDEwMDAgKiA2MCAqIDYwICogaCxcbiAgICBmcm9tRGF5czogKGQpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiBkLFxuICAgIGZyb21XZWVrczogKHcpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiA3ICogdyxcbiAgICB0b01pbnV0ZXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwKSxcbiAgICB0b0hvdXJzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwKSxcbiAgICB0b0RheXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCksXG4gICAgdG9XZWVrczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogNylcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlFWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRV1ZCTEUxQlFVMHNVVUZCVVN4SFFVRkhPMGxCUTJJc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRPMGxCUXpWSExFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJRenREUVVGRExFTkJRVU03UVVGSE5VZ3NUVUZCVFN4TlFVRk5MRWRCUVVjN1NVRkRXQ3hEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFhRVUZYTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTTdRMEZCUXl4RFFVRkRPMEZCUnpOSkxGTkJRVk1zV1VGQldTeERRVUZETEUxQlFXRXNSVUZCUlN4TlFVRmhPMGxCUXpsRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1JVRkJSVHRSUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUVVVN1NVRkRNVU1zVDBGQlR5eERRVUZETEVOQlFVTTdRVUZEWWl4RFFVRkRPMEZCWTBRc1RVRkJUU3hWUVVGVkxFbEJRVWtzUTBGQlF5eFpRVUZ0UWl4RlFVRkZMRWxCUVVrc1IwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJUdEpRVU55UkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhaUVVGWkxFdEJRVXNzVVVGQlVTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVVc1UwRkJVeXhEUVVGQkxFTkJRVU03VVVGRFZpeFpRVUZaTzJGQlExQXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMkZCUTNoRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUXpsRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRUxFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlF5eERRVUZETEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRjRVFzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCU1N4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRlRU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJwRUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVa3NSVUZCUlN4SFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU51UXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGJFUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSeXhGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMkZCUTI1RExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTndSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZKTEVWQlFVVXNSMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03WVVGRGRFTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM0JFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNeFJDeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVkQlFVTXNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVjc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNSMEZCUXl4SFFVRkhMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU42UlN4RFFVRkRPMEZCUjBRc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITzBsQlEyUXNWMEZCVnl4RlFVRkxMRU5CUVVNc1IwRkJWU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRWRCUVVjN1NVRkRNME1zVTBGQlV5eEZRVUZQTEVOQlFVTXNRMEZCVVN4RlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RFFVRkRPMGxCUXpWRExGRkJRVkVzUlVGQlVTeERRVUZETEVOQlFWRXNSVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNN1NVRkRMME1zVTBGQlV5eEZRVUZQTEVOQlFVTXNRMEZCVVN4RlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhIUVVGRExFTkJRVU03U1VGRGFrUXNVMEZCVXl4RlFVRlBMRU5CUVVNc1JVRkJVeXhGUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hEUVVGRE8wbEJRelZETEU5QlFVOHNSVUZCVXl4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFTkJRVU03U1VGREwwTXNUVUZCVFN4RlFVRlZMRU5CUVVNc1JVRkJVeXhGUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVOQlFVTTdTVUZEYkVRc1QwRkJUeXhGUVVGVExFTkJRVU1zUlVGQlV5eEZRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhEUVVGRE8wTkJRM1pFTEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUGFjaW5nJyk7XG5leHBvcnQgZnVuY3Rpb24gdGltZW91dChtcywgLi4ucmVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHNldFRpbWVvdXQocmVqZWN0LCBtcywgLi4ucmVzdCk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHJlc29sdmUoYXJncyk7IH0sIG1zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydCBjbGFzcyBQYWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHBhY2UgPSAxMDAsIG1heENvbmN1cnJlbnQgPSAtMSwgY29sbGVjdGlvblBlcmlvZCA9IDAgfSkge1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSAtMTtcbiAgICAgICAgdGhpcy5wYWNlID0gMDtcbiAgICAgICAgdGhpcy53YWl0VW50aWwgPSAwO1xuICAgICAgICB0aGlzLndhaXRpbmcgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAwO1xuICAgICAgICB0aGlzLnF1ZXVlID0ge307XG4gICAgICAgIHRoaXMuY29sbGVjdGlvblBlcmlvZCA9IDA7XG4gICAgICAgIHRoaXMucGFjZSA9IHBhY2U7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvblBlcmlvZCA9IGNvbGxlY3Rpb25QZXJpb2Q7XG4gICAgfVxuICAgIGlzQWxsb3dlZCgpIHsgcmV0dXJuIHRoaXMubWF4Q29uY3VycmVudCA8IDAgfHwgdGhpcy5zdGFydGVkIDwgdGhpcy5tYXhDb25jdXJyZW50OyB9XG4gICAgc2V0UGFjZShtcykgeyB0aGlzLnBhY2UgPSBtczsgfVxuICAgIHNldE1heENvbmN1cnJlbnQobWF4Q29uY3VycmVudCkgeyB0aGlzLm1heENvbmN1cnJlbnQgPSBtYXhDb25jdXJyZW50OyB9XG4gICAgaW5RdWV1ZSgpIHsgcmV0dXJuIHRoaXMud2FpdGluZzsgfVxuICAgIGluUHJvZ3Jlc3MoKSB7IHJldHVybiB0aGlzLnN0YXJ0ZWQ7IH1cbiAgICBhc3luYyBhZGQoZm4sIGtleSkge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgY2FsbFRpbWUgPSBub3cgKyBNYXRoLm1heCh0aGlzLmNvbGxlY3Rpb25QZXJpb2QsIHRoaXMud2FpdFVudGlsKTtcbiAgICAgICAgdGhpcy53YWl0VW50aWwgKz0gdGhpcy5wYWNlO1xuICAgICAgICBsZXQgaXRlbTtcbiAgICAgICAgaWYgKGtleSAmJiB0aGlzLnF1ZXVlW2tleV0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnF1ZXVlW2tleV07XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaXRlbS50aW1lcik7XG4gICAgICAgICAgICBpdGVtLmZuID0gZm47XG4gICAgICAgICAgICBpdGVtLmFkZGVkID0gbm93O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5ID0ga2V5IHx8IGAke25vd30tJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApfWA7XG4gICAgICAgICAgICBpdGVtID0geyBmbjogZm4sIGFkZGVkOiBub3csIHBhY2U6IHRoaXMsIGtleToga2V5IH07XG4gICAgICAgICAgICB0aGlzLnF1ZXVlW2tleV0gPSBpdGVtO1xuICAgICAgICAgICAgdGhpcy53YWl0aW5nKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZUl0ZW0oaXRlbSwgY2FsbFRpbWUgLSBub3cpO1xuICAgIH1cbiAgICByZXNvbHZlSXRlbShpdGVtLCB3YWl0VGltZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhlY3V0ZSA9IGFzeW5jIChfaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IF9pdGVtLmtleTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF9pdGVtLnBhY2UucXVldWVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS53YWl0aW5nLS07XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGJlbG93Q29uY3VycmVudExpbWl0KF9pdGVtLnBhY2UpO1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLnN0YXJ0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0dWFsRGVsYXkgPSBEYXRlLm5vdygpIC0gX2l0ZW0uYWRkZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IF9pdGVtLmZuKGFjdHVhbERlbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS5zdGFydGVkLS07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS5zdGFydGVkLS07XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaXRlbS50aW1lciA9IHNldFRpbWVvdXQoZXhlY3V0ZSwgd2FpdFRpbWUsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBiZWxvd0NvbmN1cnJlbnRMaW1pdChwYWNlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlbGVhc2UgPT4ge1xuICAgICAgICBjb25zdCB3YWl0TG9vcCA9ICgpID0+IHBhY2UuaXNBbGxvd2VkKCkgPyByZWxlYXNlKCkgOiBzZXRUaW1lb3V0KHdhaXRMb29wLCAxMCk7XG4gICAgICAgIHdhaXRMb29wKCk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVR0ZqYVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDFCaFkybHVaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGSlFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVU4c1QwRkJUeXhEUVVGRE8wRkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGVE5VUXNUVUZCVFN4VlFVRlZMRTlCUVU4c1EwRkJReXhGUVVGVExFVkJRVVVzUjBGQlJ5eEpRVUZWTzBsQlF6VkRMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYkVZc1EwRkJRenRCUVdkRFJDeE5RVUZOTEZWQlFWVXNTMEZCU3l4RFFVRkRMRVZCUVZNN1NVRkRNMElzVDBGQlR5eERRVUZKTEVsQlFVOHNSVUZCWVN4RlFVRkZPMUZCUXpkQ0xFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRnpRaXhGUVVGRkxFVkJRVVU3V1VGRE1VTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUZ0UWtRc1RVRkJUU3hQUVVGUExFbEJRVWs3U1VGcFEySXNXVUZCV1N4RlFVRkRMRWxCUVVrc1IwRkJReXhIUVVGSExFVkJRVVVzWVVGQllTeEhRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMR2RDUVVGblFpeEhRVUZETEVOQlFVTXNSVUZCUXp0UlFTOUNjRVFzYTBKQlFXRXNSMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWeVFpeFRRVUZKTEVkQlFXTXNRMEZCUXl4RFFVRkRPMUZCUlhCQ0xHTkJRVk1zUjBGQlV5eERRVUZETEVOQlFVTTdVVUZGY0VJc1dVRkJUeXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVVZ3UWl4WlFVRlBMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJSWEJDTEZWQlFVc3NSMEZCZDBJc1JVRkJSU3hEUVVGRE8xRkJZMnBETEhGQ1FVRm5RaXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVkY0UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5xUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF6dFJRVU51UXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03U1VGRE4wTXNRMEZCUXp0SlFXNUNUU3hUUVVGVExFdEJRV0VzVDBGQlR5eEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJjMEl6Uml4UFFVRlBMRU5CUVVNc1JVRkJVeXhKUVVGVExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVVelF5eG5Ra0ZCWjBJc1EwRkJReXhoUVVGdlFpeEpRVUZUTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVZ1Uml4UFFVRlBMRXRCUVdVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVTFReXhWUVVGVkxFdEJRVmtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZGdVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVdkQ0xFVkJRVVVzUjBGQlZ6dFJRVU51UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJwRExFMUJRVTBzVVVGQlVTeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEZGtVc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUlRWQ0xFbEJRVWtzU1VGQlV5eERRVUZETzFGQlEyUXNTVUZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjRRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOMlFpeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMklzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNN1UwRkRjRUk3WVVGQlRUdFpRVU5JTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTXhSQ3hKUVVGSkxFZEJRVWNzUlVGQlF5eEZRVUZGTEVWQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVNc1IwRkJSeXhGUVVGRExFTkJRVU03V1VGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEZGtJc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFOQlEyeENPMUZCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3U1VGRGFrUXNRMEZCUXp0SlFVVlBMRmRCUVZjc1EwRkJReXhKUVVGVExFVkJRVVVzVVVGQlpUdFJRVU14UXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUTI1RExFMUJRVTBzVDBGQlR5eEhRVUZITEV0QlFVc3NSVUZCUlN4TFFVRlZMRVZCUVVVc1JVRkJSVHRuUWtGQlJ5eEpRVUZKTzI5Q1FVTjRReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRPMjlDUVVOMFFpeFBRVUZQTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTTNRaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMjlDUVVOeVFpeE5RVUZOTEc5Q1FVRnZRaXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRka01zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenR2UWtGRGNrSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNN2IwSkJRek5ETEUxQlFVMHNSMEZCUnl4SFFVRkhMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0dlFrRkRlRU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenR2UWtGRGNrSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU5vUWp0blFrRkJReXhQUVVGTkxFTkJRVU1zUlVGQlJUdHZRa0ZEVUN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzI5Q1FVTnlRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTJJN1dVRkJRU3hEUVVGRExFTkJRVUU3V1VGSFJpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNKRUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0RFFVTktPMEZCUjBRc1UwRkJVeXh2UWtGQmIwSXNRMEZCUXl4SlFVRlRPMGxCUTI1RExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1VVRkRla0lzVFVGQlRTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZCTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNNVJTeFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTm1MRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMUFzUTBGQlF5SjkiLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5pbXBvcnQgeyBQYWNlIH0gZnJvbSAnLi9QYWNpbmcnO1xuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0b3JzIHtcbiAgICBzdGF0aWMgYWRkQXV0aFByb3ZpZGVyKG5hbWUsIHByb3ZpZGVyKSB7XG4gICAgICAgIEF1dGhlbnRpY2F0b3JzLmF1dGhQcm92aWRlcnMucHVzaCh7IG5hbWU6IG5hbWUsIHByb3ZpZGVyOiBwcm92aWRlciB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldChhdXRoUmVxdWVzdCwgY3JlZGVudGlhbHMsIHVybCkge1xuICAgICAgICBpZiAoIWF1dGhSZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjcmVkZW50aWFscykge1xuICAgICAgICAgICAgdGhyb3cgYGNyZWRlbnRpYWxzIG1pc3Npbmc7IGNhbGwgJ3NldENyZWRlbnRpYWxzJyBiZWZvcmUgY2FsbGluZyAnZ2V0JyBmb3IgdXJsICR7dXJsfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGF1dGggPSBBdXRoZW50aWNhdG9ycy5hdXRoc1t1cmxdO1xuICAgICAgICBpZiAoIWF1dGgpIHtcbiAgICAgICAgICAgIGlmICghQXV0aGVudGljYXRvcnMuYXV0aFByb3ZpZGVycy5zb21lKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXV0aFJlcXVlc3QuaW5kZXhPZihlbnRyeS5uYW1lKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dGggPSBlbnRyeS5wcm92aWRlcihjcmVkZW50aWFscyk7XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBgdW5pbXBsZW1lbnRlZCBhdXRoZW50aWNhdGlvbiBtZXRob2QgJHthdXRoUmVxdWVzdH0gZm9yICcke3VybH0nOyBlbnN1cmUgdGhlIHByb3BlciBhdXRoZW50aWNhdGlvbiBtb2RlbCBpcyBpbXBvcnRlZGA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF1dGg7XG4gICAgfVxufVxuQXV0aGVudGljYXRvcnMuYXV0aHMgPSB7fTtcbkF1dGhlbnRpY2F0b3JzLmF1dGhQcm92aWRlcnMgPSBbXTtcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihfTG9nID0gTG9nKSB7XG4gICAgICAgIHRoaXMuc2V0Q3JlZGVudGlhbHMgPSAodXNlciwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB1c2VyID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB7IHVzZXI6IHVzZXIsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEF1dGhUb2tlbiA9ICh0b2tlbikgPT4gdGhpcy5hdXRoVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy5zZXRQYWNlID0gKHsgcGFjZSA9IDUwLCBtYXggPSAxMCwgY29sbGVjdGlvblBlcmlvZCA9IDEwMCB9ID0geyBwYWNlOiBudWxsIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFjZSA9ICghcGFjZSB8fCBwYWNlIDwgMCkgPyB1bmRlZmluZWQgOiBuZXcgUGFjZSh7IHBhY2U6IHBhY2UsIG1heENvbmN1cnJlbnQ6IG1heCwgY29sbGVjdGlvblBlcmlvZDogY29sbGVjdGlvblBlcmlvZCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGVhclBhY2UgPSAoKSA9PiB0aGlzLnNldFBhY2UoKTtcbiAgICAgICAgdGhpcy5kZWNvZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubG9nID0gbmV3IF9Mb2coJ1JlcXVlc3QnKTtcbiAgICAgICAgdGhpcy5sb2cubWVzc2FnZUxlbmd0aCA9IDEyMDtcbiAgICB9XG4gICAgc3RhdGljIGFkZENvbnRlbnRUeXBlKHR5cGUsIGlzVGV4dCkge1xuICAgICAgICBjb25zdCBzdWJUeXBlcyA9IHR5cGUuc3BsaXQoJy8nKTtcbiAgICAgICAgUmVxdWVzdC5jb250ZW50VHlwZXMucHVzaCh7IHN1YlR5cGVzOiBzdWJUeXBlcywgaXNUZXh0OiBpc1RleHQgfSk7XG4gICAgfVxuICAgIGFzeW5jIGdldCh1cmwsIHsgdXNlQ2FjaGVkID0gdHJ1ZSwgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ0dFVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCB1c2VDYWNoZWQsIGhlYWRlcnMpO1xuICAgIH1cbiAgICBhc3luYyBwdXQodXJsLCBwb3N0RGF0YSwgeyBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnUFVUJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIGZhbHNlLCBoZWFkZXJzLCBwb3N0RGF0YSk7XG4gICAgfVxuICAgIGFzeW5jIHBvc3QodXJsLCBwb3N0RGF0YSwgeyBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnUE9TVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCBmYWxzZSwgaGVhZGVycywgcG9zdERhdGEpO1xuICAgIH1cbiAgICBnZXRVUkwodXJsKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gbmV3IFVSTCh1cmwsIGRvY3VtZW50LlVSTCkgOiB1cmw7XG4gICAgfVxuICAgIGdldE9wdGlvbnModXJsLCBtZXRob2QpIHtcbiAgICAgICAgdXJsID0gdGhpcy5nZXRVUkwodXJsKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIHByb3RvY29sOiB1cmwucHJvdG9jb2wsXG4gICAgICAgICAgICBob3N0OiB1cmwuaG9zdCxcbiAgICAgICAgICAgIGhvc3RuYW1lOiB1cmwuaG9zdG5hbWUsXG4gICAgICAgICAgICBwb3J0OiB1cmwucG9ydCxcbiAgICAgICAgICAgIHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsXG4gICAgICAgICAgICBwYXRoOiB1cmwucGF0aG5hbWUgKyAodXJsLnNlYXJjaCB8fCAnJyksXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgIHVybDogYCR7dXJsLnByb3RvY29sfS8vJHt1cmwuaG9zdH0ke3VybC5wYXRobmFtZSArICh1cmwuc2VhcmNoIHx8ICcnKX1gLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5hdXRoVG9rZW4pIHtcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycy5BdXRoVG9rZW4gPSB0aGlzLmF1dGhUb2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gICAgYXN5bmMgZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgdXNlQ2FjaGVkLCBoZWFkZXJzLCBwb3N0RGF0YSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RPcHRpb25zKG9wdGlvbnMsIHVzZUNhY2hlZCwgcG9zdERhdGEpO1xuICAgICAgICBpZiAodGhpcy5kZWNvZGUgJiYgcmVzdWx0LnJlc3BvbnNlLnR4dCAmJiBvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSB0aGlzLmRlY29kZShyZXN1bHQuZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nLmVycm9yKGBkZWNvZGluZyAke3Jlc3VsdC5jYWNoZWQgPyAnY2FjaGVkICcgOiAnJ30ke29wdGlvbnMudXJsfTpgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5lcnJvcihgJHtlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3RPcHRpb25zKG9wdGlvbnMsIHVzZUNhY2hlZCwgcG9zdERhdGEpIHtcbiAgICAgICAgbGV0IHJlcXVlc3Q7XG4gICAgICAgIGlmICh0aGlzLnBhY2UpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLnRyYW5zaWVudChgKCR7dGhpcy5wYWNlLmluUXVldWUoKX0gfCAke3RoaXMucGFjZS5pblByb2dyZXNzKCl9KSAke29wdGlvbnMubWV0aG9kfS1pbmcgJHtvcHRpb25zLnVybH1gKTtcbiAgICAgICAgICAgIHJlcXVlc3QgPSB0aGlzLnBhY2UuYWRkKCgpID0+IHRoaXMucmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSksIGAke29wdGlvbnMubWV0aG9kfSAke29wdGlvbnMudXJsfWApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdCA9IHRoaXMucmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0O1xuICAgICAgICBjb25zdCBodHRwQ29kZSA9IHJlc3BvbnNlLnJlc3BvbnNlLnN0YXR1c0NvZGUgfHwgcmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBjb25zdCBxdWV1ZUluZm8gPSB0aGlzLnBhY2UgPyBgKCR7dGhpcy5wYWNlLmluUXVldWUoKX0gfCAke3RoaXMucGFjZS5pblByb2dyZXNzKCl9KSBgIDogJyc7XG4gICAgICAgIHRoaXMubG9nLnRyYW5zaWVudChgJHtxdWV1ZUluZm99cmVjZWl2ZWQgJHtvcHRpb25zLm1ldGhvZH0gJHtodHRwQ29kZX0gJHtvcHRpb25zLnVybH0gYCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSkge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuaXNzdWVSZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IGF1dGggPSBBdXRoZW50aWNhdG9ycy5nZXQocmVzcG9uc2UucmVzcG9uc2UuaGVhZGVyc1snd3d3LWF1dGhlbnRpY2F0ZSddLCB0aGlzLmNyZWRlbnRpYWxzLCBvcHRpb25zLnVybCk7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF1dGggPyBhd2FpdCB0aGlzLnJlcXVlc3QoYXV0aC50ZXN0QXV0aChvcHRpb25zLCByZXNwb25zZS5yZXNwb25zZSkpIDogcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmVycm9yKGByZXF1ZXN0OiAke2V9XFxuJHtPYmplY3QuZW50cmllcyhvcHRpb25zLmhlYWRlcnMpLmpvaW4oJ1xcbicpfWApO1xuICAgICAgICAgICAgdGhyb3cgYGVycm9yIHJlcXVlc3RpbmcgJHtvcHRpb25zLnVybH06ICR7ZX1gO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbiA9IHR5cGVvZiByZXNwb25zZS5kYXRhID09PSAnc3RyaW5nJyA/IHJlc3BvbnNlLmRhdGEubGVuZ3RoIDogcmVzcG9uc2UuZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICB0aGlzLmxvZy5pbmZvKGByZWNlaXZlZCAke29wdGlvbnMubWV0aG9kfSAke3Jlc3BvbnNlLnJlc3BvbnNlLnN0YXR1c0NvZGUgfHwgcmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzfSAkeygnJyArIGxlbikucGFkU3RhcnQoNSwgJyAnKX0gYnl0ZXMgJHtvcHRpb25zLnVybH0gYCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgaXNzdWVSZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IGlzVGV4dHVhbENvbnRlbnQgPSB0aGlzLmlzVGV4dHVhbENvbnRlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY29uZmlybVJlcXVlc3QoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzVGV4dCA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ2NvbnRlbnQtdHlwZSc6ICcnIH07XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNUZXh0LnNwbGl0KCdcXHJcXG4nKS5tYXAoaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrdiA9IGguc3BsaXQoJzonKS5tYXAocCA9PiBwLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa3ZbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1trdlswXV0gPSBrdlsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4dCA9IGlzVGV4dHVhbENvbnRlbnQoaGVhZGVyc1snY29udGVudC10eXBlJ10sIGhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ10sIG9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0OiB0eHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogYCR7dGhpcy5zdGF0dXN9ICR7dGhpcy5zdGF0dXNUZXh0fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnJlc3BvbnNlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gUmVxdWVzdC5pc1RleHR1YWxSZXF1ZXN0KG9wdGlvbnMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKGggPT4geGhyLnNldFJlcXVlc3RIZWFkZXIoaCwgb3B0aW9ucy5oZWFkZXJzW2hdKSk7XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHR4dCA/ICd0ZXh0JyA6ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGNvbmZpcm1SZXF1ZXN0O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKHBvc3REYXRhID8gSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNUZXh0dWFsQ29udGVudChjb250ZW50VHlwZSwgY29udGVudExlbmd0aCwgdXJsKSB7XG4gICAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy53YXJuKGB1bmRlZmluZWQgY29udGVudFR5cGU7IGFzc3VtaW5nIGJpbmFyeSBmb3IgbGVuPSR7Y29udGVudExlbmd0aH0gZm9yICcke3VybH0nYCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ViVHlwZXMgPSBjb250ZW50VHlwZS5zcGxpdCgnLycpO1xuICAgICAgICBjb25zdCBtYXRjaCA9IFJlcXVlc3QuY29udGVudFR5cGVzLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5zdWJUeXBlcy5ldmVyeSgoc3QsIGkpID0+IHN1YlR5cGVzW2ldID09PSBzdCkpO1xuICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzBdLmlzVGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9nLndhcm4oYG5vIG1hdGNoIGZvdW5kIGZvciAnJHtjb250ZW50VHlwZX0nOyBjYWNoaW5nIGFzIGJpbmFyeWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBpc1RleHR1YWxSZXF1ZXN0KHBhdGhOYW1lKSB7XG4gICAgICAgIHJldHVybiBbJ2pzb24nLCAndHh0JywgJ2h0bWwnXS5zb21lKGV4dCA9PiBwYXRoTmFtZS5pbmRleE9mKGV4dCkgPj0gMCk7XG4gICAgfVxufVxuUmVxdWVzdC5jb250ZW50VHlwZXMgPSBbXTtcblJlcXVlc3QuZGVjb2RlcnMgPSB7XG4gICAgc3RyMmpzb246IChkYXRhKSA9PiBKU09OLnBhcnNlKGRhdGEucmVwbGFjZSgvXFxwe0NvbnRyb2x9L2d1LCBcIlwiKSksXG4gICAgaHRtbDJqc29uOiB1bmRlZmluZWRcbn07XG5bXG4gICAgWyd0ZXh0JywgdHJ1ZV0sXG4gICAgWyd0ZXh0L2h0bWwnLCB0cnVlXSxcbiAgICBbJ2ltYWdlJywgZmFsc2VdLFxuICAgIFsnYXVkaW8nLCBmYWxzZV0sXG4gICAgWydmb250JywgZmFsc2VdLFxuICAgIFsnYXBwbGljYXRpb24vanNvbicsIHRydWVdLFxuICAgIFsnYXBwbGljYXRpb24vcGRmJywgZmFsc2VdLFxuICAgIFsnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbicsIGZhbHNlXSxcbiAgICBbJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JywgZmFsc2VdLFxuICAgIFsnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLCBmYWxzZV0sXG4gICAgWydhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuc2hlZXQubWFjcm9lbmFibGVkLjEyJywgZmFsc2VdLFxuICAgIFsnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJywgZmFsc2VdLFxuXS5mb3JFYWNoKGUgPT4gUmVxdWVzdC5hZGRDb250ZW50VHlwZShlWzBdLCBlWzFdKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVbVZ4ZFdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5U1pYRjFaWE4wTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFYZERRU3hQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFXVXNUMEZCVHl4RFFVRkRPMEZCUTNKRExFOUJRVThzUlVGQlJTeEpRVUZKTEVWQlFVVXNUVUZCWXl4VlFVRlZMRU5CUVVNN1FVRXlSSGhETEUxQlFVMHNUMEZCVHl4alFVRmpPMGxCUjJoQ0xFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCVnl4RlFVRkZMRkZCUVhkRE8xRkJReTlGTEdOQlFXTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVU1zU1VGQlNTeEZRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVNc1VVRkJVU3hGUVVGRExFTkJRVU1zUTBGQlFUdEpRVU55UlN4RFFVRkRPMGxCUTAwc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZyUWl4RlFVRkZMRmRCUVhWQ0xFVkJRVVVzUjBGQlZUdFJRVU55UlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8xbEJRMlFzVDBGQlR5eFRRVUZUTEVOQlFVRTdVMEZEYmtJN1lVRkJUU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzFsQlEzSkNMRTFCUVUwc01rVkJRVEpGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMU5CUXpGR08xRkJRMFFzU1VGQlNTeEpRVUZKTEVkQlFVY3NZMEZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU55UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRk8xbEJRMUFzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTXpReXhKUVVGSkxGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGSExFTkJRVU03YjBKQlFVVXNUMEZCVHl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUVR0WlFVTjBSaXhEUVVGRExFTkJRVU03WjBKQlFVVXNUVUZCVFN4MVEwRkJkVU1zVjBGQlZ5eFRRVUZUTEVkQlFVY3NkVVJCUVhWRUxFTkJRVU03VTBGRGJrazdVVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJRVHRKUVVObUxFTkJRVU03TzBGQmJFSmpMRzlDUVVGTExFZEJRWFZDTEVWQlFVVXNRMEZCUVR0QlFVTTVRaXcwUWtGQllTeEhRVUUyUkN4RlFVRkZMRU5CUVVFN1FVRnhRaTlHTEUxQlFVMHNUMEZCVHl4UFFVRlBPMGxCTUVKb1FpeFpRVUZ0UWl4SlFVRkpMRWRCUVVNc1IwRkJSenRSUVZWd1FpeHRRa0ZCWXl4SFFVRkhMRU5CUVVNc1NVRkJXU3hGUVVGRkxGRkJRV2RDTEVWQlFVVXNSVUZCUlR0WlFVTjJSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NTMEZCUnl4VFFVRlRMRU5CUVVFc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTjRSaXhEUVVGRExFTkJRVUU3VVVGSFRTeHBRa0ZCV1N4SFFVRkhMRU5CUVVNc1MwRkJZU3hGUVVGRkxFVkJRVVVzUTBGRGNFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVUU3VVVGUmJrSXNXVUZCVHl4SFFVRkhMRU5CUVVNc1JVRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSMEZCUXl4RlFVRkZMRVZCUVVVc1owSkJRV2RDTEVkQlFVTXNSMEZCUnl4TFFVRkZMRVZCUVVNc1NVRkJTU3hGUVVGTkxFbEJRVWtzUlVGQlF5eEZRVUZGTEVWQlFVVTdXVUZETVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1IwRkJReXhEUVVGRExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZETEVsQlFVa3NSVUZCUXl4SlFVRkpMRVZCUVVVc1lVRkJZU3hGUVVGRExFZEJRVWNzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJReXhuUWtGQlowSXNSVUZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNMGdzUTBGQlF5eERRVUZCTzFGQlMwMHNZMEZCVXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFWRnFReXhYUVVGTkxFZEJRVmtzVTBGQlV5eERRVUZETzFGQmRFTXZRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGQk8xRkJRemxDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hIUVVGSExFZEJRVWNzUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCTTBKTkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCVnl4RlFVRkZMRTFCUVdNN1VVRkRjRVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZETEZGQlFWRXNSVUZCUXl4UlFVRlJMRVZCUVVVc1RVRkJUU3hGUVVGRExFMUJRVTBzUlVGQlF5eERRVUZETEVOQlFVTTdTVUZEYkVVc1EwRkJRenRKUVhORlRTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVdNc1JVRkJSU3hGUVVGRExGTkJRVk1zUjBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4SFFVRkRMRVZCUVVVc1JVRkJReXhIUVVGRExFVkJRVVU3VVVGRE5VUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkROVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVZOTkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCWXl4RlFVRkZMRkZCUVZrc1JVRkJSU3hGUVVGRExFOUJRVThzUjBGQlF5eEZRVUZGTEVWQlFVTXNSMEZCUXl4RlFVRkZPMUZCUXpGRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6VkRMRTlCUVU4c1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU5zUlN4RFFVRkRPMGxCVTAwc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZqTEVWQlFVVXNVVUZCV1N4RlFVRkZMRVZCUVVNc1QwRkJUeXhIUVVGRExFVkJRVVVzUlVGQlF5eEhRVUZETEVWQlFVVTdVVUZETTBRc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE4wTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRMnhGTEVOQlFVTTdTVUZGVXl4TlFVRk5MRU5CUVVNc1IwRkJZenRSUVVNelFpeFBRVUZQTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVOMlJTeERRVUZETzBsQlJWTXNWVUZCVlN4RFFVRkRMRWRCUVdNc1JVRkJSU3hOUVVGaE8xRkJRemxETEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzWkNMRTFCUVUwc1QwRkJUeXhIUVVGSE8xbEJRMW9zYTBKQlFXdENMRVZCUVVVc1MwRkJTenRaUVVONlFpeE5RVUZOTEVWQlFVMHNUVUZCVFR0WlFVTnNRaXhSUVVGUkxFVkJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRTdXVUZEZUVJc1NVRkJTU3hGUVVGUkxFZEJRVWNzUTBGQlF5eEpRVUZKTzFsQlEzQkNMRkZCUVZFc1JVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVUdFpRVU40UWl4SlFVRkpMRVZCUVZFc1IwRkJSeXhEUVVGRExFbEJRVWs3V1VGRGNFSXNVVUZCVVN4RlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUk8xbEJRM2hDTEVsQlFVa3NSVUZCVVN4SFFVRkhMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkROME1zVDBGQlR5eEZRVUZWTEVWQlFVVTdXVUZEYmtJc1IwRkJSeXhGUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNTMEZCU3l4SFFVRkhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTzFOQlEycEdMRU5CUVVNN1VVRkRSaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVTdXVUZCUlN4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMU5CUVVVN1VVRkRia1VzVDBGQlR5eFBRVUZQTEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVdGVExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCWlN4RlFVRkZMRk5CUVdsQ0xFVkJRVVVzVDBGQlZ5eEZRVUZGTEZGQlFXRTdVVUZEZWtZc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEZGtVc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEV0QlFVY3NTMEZCU3l4RlFVRkZPMWxCUVVVc1NVRkJTVHRuUWtGRGNFVXNUVUZCVFN4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZUTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03WVVGRE0wUTdXVUZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHRuUWtGRFVDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVRXNRMEZCUXl4RFFVRkJMRk5CUVZNc1EwRkJRU3hEUVVGRExFTkJRVUVzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGQk8yZENRVU4yUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVFN1lVRkRla0k3VTBGQlF6dFJRVU5HTEU5QlFVOHNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGRlV5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTlCUVdVc1JVRkJSU3hUUVVGcFFpeEZRVUZGTEZGQlFXRTdVVUZETlVVc1NVRkJTU3hQUVVFd1FpeERRVUZETzFGQlF5OUNMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJUdFpRVU5ZTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4TFFVRkxMRTlCUVU4c1EwRkJReXhOUVVGTkxGRkJRVkVzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRhRWdzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1NVRkJTU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjBSenRoUVVGTk8xbEJRMGdzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFOQlF6ZERPMUZCUlVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzVFVGQlRTeFBRVUZQTEVOQlFVTTdVVUZETDBJc1RVRkJUU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRWxCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZEZUVVc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGQk8xRkJRM3BHTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzVTBGQlV5eFpRVUZaTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1VVRkJVU3hKUVVGSkxFOUJRVThzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNwR0xFOUJRVThzVVVGQlVTeERRVUZETzBsQlEzQkNMRU5CUVVNN1NVRkZVeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFXVXNSVUZCUlN4UlFVRmhPMUZCUTJ4RUxFbEJRVWtzVVVGQmFVSXNRMEZCUXp0UlFVTjBRaXhKUVVGSk8xbEJRMEVzVVVGQlVTeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZEVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRemxITEZGQlFWRXNSMEZCU1N4SlFVRkpMRU5CUVVFc1EwRkJReXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETzFOQlF6bEdPMUZCUVVNc1QwRkJUU3hEUVVGRExFVkJRVVU3V1VGRFVDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGQk8xbEJRemxGTEUxQlFVMHNiMEpCUVc5Q0xFOUJRVThzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNN1UwRkRha1E3VVVGRFJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4UFFVRlBMRkZCUVZFc1EwRkJReXhKUVVGSkxFdEJRVXNzVVVGQlVTeERRVUZCTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVUU3VVVGRE9VWXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeEpRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGVFb3NUMEZCVHl4UlFVRlJMRU5CUVVFN1NVRkRia0lzUTBGQlF6dEpRVVZUTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJaU3hGUVVGRkxGRkJRV0U3VVVGRGRrUXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkJPMUZCUTNwRUxFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRTBRaXhGUVVGRkxFMUJRWGxDTEVWQlFVVXNSVUZCUlR0WlFVRkhMRWxCUVVrN1owSkJRMnhHTEZOQlFWTXNZMEZCWXl4RFFVRkRMRU5CUVVzN2IwSkJRM3BDTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWRCUVVjc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4RFFVRkRPMjlDUVVOb1JDeE5RVUZOTEU5QlFVOHNSMEZCUnl4RlFVRkRMR05CUVdNc1JVRkJReXhGUVVGRkxFVkJRVU1zUTBGQlF6dHZRa0ZEY0VNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3ZDBKQlF6bENMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03ZDBKQlF6TkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlRzMFFrRkJSU3hQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVRkZPMjlDUVVOcVJDeERRVUZETEVOQlFVTXNRMEZCUVR0dlFrRkhSaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVWM1Uml4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzI5Q1FVTXpRaXhOUVVGTkxGRkJRVkVzUjBGQldUdDNRa0ZEZEVJc1NVRkJTU3hGUVVGblFpeEpRVUZKTzNkQ1FVTjRRaXhSUVVGUkxFVkJRVVU3TkVKQlEwNHNSMEZCUnl4RlFVRmhMRWRCUVVjN05FSkJRMjVDTEU5QlFVOHNSVUZCVXl4UFFVRlBPelJDUVVOMlFpeE5RVUZOTEVWQlFWVXNUMEZCVHl4RFFVRkRMRTFCUVUwN05FSkJRemxDTEUxQlFVMHNSVUZCVlN4SlFVRkpMRU5CUVVNc1RVRkJUVHMwUWtGRE0wSXNWVUZCVlN4RlFVRk5MRWxCUVVrc1EwRkJReXhOUVVGTk96UkNRVU16UWl4aFFVRmhMRVZCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVN05FSkJRMjVFTEVkQlFVY3NSVUZCWVN4SlFVRkpMRU5CUVVNc1YwRkJWenQ1UWtGRGJrTTdjVUpCUTBvc1EwRkJRenR2UWtGRFJpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRM1JDTEVOQlFVTTdaMEpCUTBRc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeGpRVUZqTEVWQlFVVXNRMEZCUXp0blFrRkRha01zVFVGQlRTeEhRVUZITEVkQlFVY3NUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRmRrUXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlF6VkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNaR0xFZEJRVWNzUTBGQlF5eFpRVUZaTEVkQlFVY3NSMEZCUnl4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEdGQlFXRXNRMEZCUXp0blFrRkRMME1zUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4alFVRmpMRU5CUVVNN1owSkJRelZDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGQkxFTkJRVU1zUTBGQlFTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlFTeFRRVUZUTEVOQlFVTXNRMEZCUXp0aFFVTjZSRHRaUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTlFMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5pTzFGQlFVRXNRMEZCUXl4RFFVRkRMRU5CUVVFN1NVRkRVQ3hEUVVGRE8wbEJSVk1zWjBKQlFXZENMRU5CUVVNc1YwRkJhMElzUlVGQlJTeGhRVUZ2UWl4RlFVRkZMRWRCUVZVN1VVRkRNMFVzU1VGQlNTeFhRVUZYTEV0QlFVY3NVMEZCVXl4RlFVRkZPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR3RFUVVGclJDeGhRVUZoTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRaUVVNM1JpeFBRVUZQTEV0QlFVc3NRMEZCUXp0VFFVTm9RanRSUVVORUxFMUJRVTBzVVVGQlVTeEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGVFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzaEhMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVWQlFVVTdXVUZEYUVJc1QwRkJUeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRPMU5CUXpGQ08yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXgxUWtGQmRVSXNWMEZCVnl4elFrRkJjMElzUTBGQlF5eERRVUZETzFsQlEzaEZMRTlCUVU4c1MwRkJTeXhEUVVGRE8xTkJRMmhDTzBsQlEwd3NRMEZCUXp0SlFVVlRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UlFVRmxPMUZCUXpkRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNMFVzUTBGQlF6czdRVUU1VDJNc2IwSkJRVmtzUjBGQk1FTXNSVUZCUlN4RFFVRkRPMEZCU3pGRUxHZENRVUZSTEVkQlFVYzdTVUZEY2tJc1VVRkJVU3hGUVVGSExFTkJRVU1zU1VGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RlFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM2hGTEZOQlFWTXNSVUZCZDBJc1UwRkJVenREUVVNM1F5eERRVUZETzBGQmVVOU9PMGxCUTBrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETzBsQlEyUXNRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRE8wbEJRMjVDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJRenRKUVVOb1FpeERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRU5CUVVNN1NVRkRhRUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRPMGxCUTJZc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4SlFVRkpMRU5CUVVNN1NVRkRNVUlzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hMUVVGTExFTkJRVU03U1VGRE1VSXNRMEZCUXl3eVJVRkJNa1VzUlVGQlJTeExRVUZMTEVOQlFVTTdTVUZEY0VZc1EwRkJReXh0UlVGQmJVVXNSVUZCUlN4TFFVRkxMRU5CUVVNN1NVRkROVVVzUTBGQlF5d3JRa0ZCSzBJc1JVRkJSU3hMUVVGTExFTkJRVU03U1VGRGVFTXNRMEZCUXl3d1FrRkJNRUlzUlVGQlJTeExRVUZMTEVOQlFVTTdTVUZEYmtNc1EwRkJReXhuUkVGQlowUXNSVUZCUlN4TFFVRkxMRU5CUVVNN1NVRkRla1FzUTBGQlF5d3dRa0ZCTUVJc1JVRkJSU3hMUVVGTExFTkJRVU03UTBGRGRFTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iLCJleHBvcnQgKiBmcm9tICcuL1BhY2luZyc7XG5leHBvcnQgKiBmcm9tICcuL1JlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9DaGVja3N1bSc7XG5leHBvcnQgKiBmcm9tICcuL0RhdGUnO1xuZXhwb3J0ICogZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9BcnJheVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vQXV0aFwiO1xuaW1wb3J0ICcuL0F1dGhCYXNpYyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1kwRkJhVUlzVlVGQlZTeERRVUZETzBGQlF6VkNMR05CUVdsQ0xGZEJRVmNzUTBGQlF6dEJRVU0zUWl4alFVRnBRaXhaUVVGWkxFTkJRVU03UVVGRE9VSXNZMEZCYVVJc1VVRkJVU3hEUVVGRE8wRkJRekZDTEdOQlFXbENMRTlCUVU4c1EwRkJRenRCUVVONlFpeGpRVUZwUWl4VFFVRlRMRU5CUVVNN1FVRkRNMElzWTBGQmFVSXNVVUZCVVN4RFFVRkRPMEZCUnpGQ0xFOUJRVThzWVVGQllTeERRVUZESW4wPSIsImltcG9ydCB7IGRhdGUgfSBmcm9tICcuL0RhdGUnO1xuY29uc3QgQ09MT1IgPSB7XG4gICAgY2xlYXI6ICdjb2xvcjojMDAwOyBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7IGZvbnQtd2VpZ2h0Om5vcm1hbDsnLFxuICAgIGJvbGQ6ICdmb250LXdlaWdodDpib2xkOycsXG4gICAgZGltOiAnJyxcbiAgICB1bmRlcnNjb3JlOiAnJyxcbiAgICBibGluazogJycsXG4gICAgcmV2ZXJzZTogJycsXG4gICAgaGlkZGVuOiAnJyxcbiAgICBibGFjazogJ2NvbG9yOiMwMDA7JyxcbiAgICByZWQ6ICdjb2xvcjojZjAwOycsXG4gICAgZ3JlZW46ICdjb2xvcjojMGYwOycsXG4gICAgeWVsbG93OiAnY29sb3I6I2ZmMDsnLFxuICAgIGJsdWU6ICdjb2xvcjojMDBmOycsXG4gICAgbWFnZW50YTogJ2NvbG9yOiNmMGY7JyxcbiAgICBjeWFuOiAnY29sb3I6IzBmZjsnLFxuICAgIHdoaXRlOiAnY29sb3I6I2ZmZjsnLFxuICAgIGRhcmtyZWQ6ICdjb2xvcjojODAwOycsXG4gICAgZGFya2dyZWVuOiAnY29sb3I6IzA4MDsnLFxuICAgIGRhcmt5ZWxsb3c6ICdjb2xvcjojODgwOycsXG4gICAgZGFya2JsdWU6ICdjb2xvcjojMDA4OycsXG4gICAgZGFya21hZ2VudGE6ICdjb2xvcjojODA4OycsXG4gICAgZGFya2N5YW46ICdjb2xvcjojMDg4OycsXG4gICAgZ3JheTogJ2NvbG9yOiM4ODg7JyxcbiAgICBiZ0JsYWNrOiAnYmFja2dyb3VuZC1jb2xvcjojMDAwOycsXG4gICAgYmdSZWQ6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmMDA7JyxcbiAgICBiZ0dyZWVuOiAnYmFja2dyb3VuZC1jb2xvcjojMGYwOycsXG4gICAgYmdZZWxsb3c6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjA7JyxcbiAgICBiZ0JsdWU6ICdiYWNrZ3JvdW5kLWNvbG9yOiMwMGY7JyxcbiAgICBiZ01hZ2VudGE6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmMGY7JyxcbiAgICBiZ0N5YW46ICdiYWNrZ3JvdW5kLWNvbG9yOiMwZmY7JyxcbiAgICBiZ1doaXRlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZmOydcbn07XG5leHBvcnQgY2xhc3MgTG9nIHtcbiAgICBjb25zdHJ1Y3RvcihwcmVmaXgpIHtcbiAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSAnJztcbiAgICAgICAgdGhpcy5sb2NhbCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gcHJlZml4O1xuICAgIH1cbiAgICBzdGF0aWMgZ2xvYmFsTG9nKEwpIHtcbiAgICAgICAgTG9nLmxvZyA9IG5ldyBMKCcnKTtcbiAgICAgICAgTG9nLmxvZy5sb2NhbCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gTG9nLmxvZztcbiAgICB9XG4gICAgc2V0IG1lc3NhZ2VMZW5ndGgobWF4KSB7IExvZy5tYXhMZW5ndGggPSBtYXg7IH1cbiAgICBnZXQgbWVzc2FnZUxlbmd0aCgpIHsgcmV0dXJuIExvZy5tYXhMZW5ndGg7IH1cbiAgICBsZXZlbChuZXdMZXZlbFN5bSwgc2V0R2xvYmFsTGV2ZWwpIHtcbiAgICAgICAgbGV0IG5ld0xldmVsID0gTG9nLmxldmVsc1tuZXdMZXZlbFN5bV0gfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBsZXQgb2xkTGV2ZWwgPSB0aGlzLnJlcG9ydExldmVsIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgaWYgKG5ld0xldmVsU3ltID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0xldmVsID0gb2xkTGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3TGV2ZWxTeW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTG9nLmxldmVsc1tuZXdMZXZlbFN5bV0pIHtcbiAgICAgICAgICAgIGlmIChzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICAgICAgICAgIExvZy5nbG9iYWxMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbXNnID0gYG5ldyAke3NldEdsb2JhbExldmVsID8gJ2dsb2JhbCcgOiB0aGlzLnJlcG9ydFByZWZpeH0gbG9nIGxldmVsICR7bmV3TGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSAod2FzICR7b2xkTGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSlgO1xuICAgICAgICAgICAgKG5ld0xldmVsLnN5bSA9PT0gb2xkTGV2ZWwuc3ltKSA/IHRoaXMuZGVidWcobXNnKSA6IHRoaXMuaW5mbyhtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgdW5rb3duIGxldmVsICR7bmV3TGV2ZWxTeW19OyBsb2cgbGV2ZWwgcmVtYWlucyAke29sZExldmVsLnN5bX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TGV2ZWwuc3ltO1xuICAgIH1cbiAgICBkZWJ1Zyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5ERUJVRywgbXNnLCB7IGNvbG9yOiBbJ2dyYXknXSB9KTsgfVxuICAgIHRyYW5zaWVudChtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2dyZWVuJ10sIGxmOiAnXFxyJywgbWF4TGVuOiBMb2cubWF4TGVuZ3RoIHx8IExvZy50cmFuc2llbnRMZW5ndGggfSk7IH1cbiAgICBwcm9ncmVzcyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2JsdWUnXSB9KTsgfVxuICAgIGluZm8obXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuSU5GTywgbXNnLCB7IGNvbG9yOiBbJ2RhcmtncmVlbiddIH0pOyB9XG4gICAgd2Fybihtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5XQVJOLCBtc2csIHsgY29sb3I6IFsnZGFya3llbGxvdycsICdib2xkJ10gfSk7IH1cbiAgICBlcnJvcihtc2cpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBbJ2RhcmtyZWQnLCAnYm9sZCddO1xuICAgICAgICBpZiAobXNnLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLm1lc3NhZ2UsIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICAgICAgdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2cuc3RhY2ssIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1zZy5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvdXQobHZsLCBtc2csIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGx2bERlc2MgPSBMb2cubGV2ZWxzW2x2bF07XG4gICAgICAgIGNvbnN0IGZpbHRlckxldmVsID0gdGhpcy5yZXBvcnRMZXZlbCB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGlmIChsdmxEZXNjLmltcG9ydGFuY2UgPj0gZmlsdGVyTGV2ZWwuaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgbGV0IGxpbmU7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBtc2cpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBtc2coKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzogaWYgKCFtc2cuc3RhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbGluZSA9IHRoaXMuaW5zcGVjdChtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUoTG9nLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgaWYgKG1zZy5zdGFjaykge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBgJHtsaW5lfVxcbiR7bXNnLnN0YWNrfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJQYXJ0cyA9IFtkYXRlU3RyLCB0aGlzLnJlcG9ydFByZWZpeCwgbHZsRGVzYy5kZXNjXTtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KG9wdGlvbnMsIGhlYWRlclBhcnRzLCBsaW5lKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtoZWFkZXJQYXJ0cy5qb2luKCcgJyl9ICR7bGluZX0keyhvcHRpb25zLmxmIHx8ICcnKX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG91dHB1dChvcHRpb25zLCBoZWFkZXJQYXJ0cywgbGluZSkge1xuICAgICAgICBjb25zdCBjb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW1pdExlbmd0aChsaW5lLCBvcHRpb25zLm1heExlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7aGVhZGVyUGFydHMuam9pbignICcpfSVjICR7bGluZXMuam9pbignXFxuJyl9YCwgY29sb3IubWFwKGMgPT4gQ09MT1JbY10pLmpvaW4oJyAnKSwgQ09MT1JbJ2NsZWFyJ10pO1xuICAgIH1cbiAgICBsaW1pdExlbmd0aChsaW5lLCBtYXhMZW4pIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBsaW5lLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbWF4TGVuID0gbWF4TGVuIHx8IExvZy5tYXhMZW5ndGggfHwgTG9nLnRyYW5zaWVudExlbmd0aDtcbiAgICAgICAgaWYgKG1heExlbiA+IDApIHtcbiAgICAgICAgICAgIGxpbmVzLmZvckVhY2goKGwsIGkpID0+IGxpbmVzW2ldID0gbC5sZW5ndGggPD0gbWF4TGVuID9cbiAgICAgICAgICAgICAgICBsaW5lc1tpXS5wYWRFbmQobWF4TGVuLCAnICcpIDpcbiAgICAgICAgICAgICAgICBgJHtsaW5lLnNsaWNlKDAsIG1heExlbiAvIDIgLSAyKX0uLi4ke2xpbmUuc2xpY2UoLW1heExlbiAvIDIgKyAyKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIGZvcm1hdChmbXRTdHIpIHtcbiAgICAgICAgaWYgKGZtdFN0ciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgTG9nLmRhdGVGb3JtYXQgPSBMb2cuZGVmRGF0ZUZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbXRTdHIpIHtcbiAgICAgICAgICAgIExvZy5kYXRlRm9ybWF0ID0gZm10U3RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBMb2cuZGF0ZUZvcm1hdDtcbiAgICB9XG4gICAgcHJlZml4KHByZikge1xuICAgICAgICBpZiAocHJmKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydFByZWZpeCA9IHByZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvcnRQcmVmaXg7XG4gICAgfVxuICAgIGNvbmZpZyhjZmcpIHtcbiAgICAgICAgaWYgKGNmZy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTG9nLmxvZy5mb3JtYXQoY2ZnLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5sZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsKGNmZy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5jb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTG9nLmNvbG9ycyA9IGNmZy5jb2xvcnM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5zcGVjdChtc2csIHsgZGVwdGggPSAtMSwgaW5kZW50ID0gJyAgICcsIGNvbG9ycyA9IExvZy5JTkRFTlRfQ09MT1JTIH0gPSB7IGRlcHRoOiAwLCBpbmRlbnQ6ICcgICAnLCBjb2xvcnM6IExvZy5JTkRFTlRfQ09MT1JTIH0pIHtcbiAgICAgICAgZnVuY3Rpb24gX2luc3BlY3QobXNnLCBkZXB0aCwgbGV2ZWwsIGN1cnJJbmRlbnQpIHtcbiAgICAgICAgICAgIGlmIChtc2cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJyR7bXNnfSdgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1zZy5sZW5ndGggPT09IHVuZGVmaW5lZCkgPyAney4uLn0nIDogJ1suLi5dJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFske21zZy5tYXAoKGUpID0+IChlID09PSB1bmRlZmluZWQpID8gJycgOiBfaW5zcGVjdChlLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCkpLmpvaW4oJywgJyl9XWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IFtwcmVmaXgsIHBvc3RmaXgsIGxmLCBwb3N0SW5kZW50XSA9IGFMb2cuZ2V0UHJlUG9zdGZpeChpbmRlbnQsIGxldmVsLCBjdXJySW5kZW50LCBjb2xvcnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgeyR7bGZ9YCArIE9iamVjdC5rZXlzKG1zZykubWFwKGsgPT4gYCR7cHJlZml4fSR7a30ke3Bvc3RmaXh9OiAke19pbnNwZWN0KG1zZ1trXSwgZGVwdGggLSAxLCBsZXZlbCArIDEsIGN1cnJJbmRlbnQgKyBpbmRlbnQpfWApLmpvaW4oYCwke2xmfWApICsgYCR7bGZ9JHtwb3N0SW5kZW50fX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1zZy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFMb2cgPSB0aGlzO1xuICAgICAgICByZXR1cm4gX2luc3BlY3QobXNnLCAoZGVwdGggIT09IHVuZGVmaW5lZCAmJiBkZXB0aCAhPT0gbnVsbCAmJiBkZXB0aCA+PSAwKSA/IGRlcHRoIDogOTk5LCAwLCAnJyk7XG4gICAgfVxuICAgIGdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCwgY29sb3JzKSB7XG4gICAgICAgIGxldCBjc3RhcnQgPSAnJywgY3N0b3AgPSAnJywgbGYgPSAnXFxuJztcbiAgICAgICAgaWYgKGNvbG9ycykge1xuICAgICAgICAgICAgaW5kZW50ID0gaW5kZW50LnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xuICAgICAgICAgICAgY3VyckluZGVudCA9IGN1cnJJbmRlbnQucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SW2NvbG9yc1tsZXZlbCAlIGNvbG9ycy5sZW5ndGhdXSB8fCBjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXTtcbiAgICAgICAgICAgIGNzdGFydCA9IGA8Yj48c3BhbiBzdHlsZT0nJHtjb2xvcn0nPmA7XG4gICAgICAgICAgICBjc3RvcCA9IGA8L3NwYW4+PC9iPmA7XG4gICAgICAgICAgICBsZiA9ICc8YnI+JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Ake2N1cnJJbmRlbnR9JHtpbmRlbnR9JHtjc3RhcnR9YCwgYCR7Y3N0b3B9YCwgY29sb3JzID8gJzxicj4nIDogJ1xcbicsIGN1cnJJbmRlbnRdO1xuICAgIH1cbn1cbkxvZy5kZWZEYXRlRm9ybWF0ID0gJyVZWVlZJU1NJUREICVoaDolbW06JXNzLiVqamonO1xuTG9nLkRFQlVHID0gJ0RFQlVHJztcbkxvZy5JTkZPID0gJ0lORk8nO1xuTG9nLldBUk4gPSAnV0FSTic7XG5Mb2cuRVJST1IgPSAnRVJST1InO1xuTG9nLnRyYW5zaWVudExlbmd0aCA9IDEyMDtcbkxvZy5JTkRFTlRfQ09MT1JTID0gWydkYXJrYmx1ZScsICdkYXJrZ3JlZW4nLCAnZGFya3JlZCcsICdkYXJrY3lhbicsICdkYXJreWVsbG93JywgJ2RhcmttYWdlbnRhJ107XG5Mb2cuZGF0ZUZvcm1hdCA9IExvZy5kZWZEYXRlRm9ybWF0O1xuTG9nLmxldmVscyA9IHtcbiAgICBbTG9nLkRFQlVHXTogeyBpbXBvcnRhbmNlOiAwLCBzeW06IExvZy5ERUJVRywgZGVzYzogJ0RFQlVHJyB9LFxuICAgIFtMb2cuSU5GT106IHsgaW1wb3J0YW5jZTogMSwgc3ltOiBMb2cuSU5GTywgZGVzYzogJ0lORk8nIH0sXG4gICAgW0xvZy5XQVJOXTogeyBpbXBvcnRhbmNlOiAyLCBzeW06IExvZy5XQVJOLCBkZXNjOiAnV0FSTicgfSxcbiAgICBbTG9nLkVSUk9SXTogeyBpbXBvcnRhbmNlOiAzLCBzeW06IExvZy5FUlJPUiwgZGVzYzogJ0VSUk9SJyB9XG59O1xuTG9nLmNvbG9ycyA9IHRydWU7XG5Mb2cubWF4TGVuZ3RoID0gMDtcbkxvZy5sb2cgPSBMb2cuZ2xvYmFsTG9nKExvZyk7XG5Mb2cuZ2xvYmFsTGV2ZWwgPSBMb2cubGV2ZWxzW0xvZy5JTkZPXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGdlJrRXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxGRkJRVkVzUTBGQlF6dEJRVWs1UWl4TlFVRk5MRXRCUVVzc1IwRkJSenRKUVVOV0xFdEJRVXNzUlVGQlR5d3lSRUZCTWtRN1NVRkZka1VzU1VGQlNTeEZRVUZSTEcxQ1FVRnRRanRKUVVNdlFpeEhRVUZITEVWQlFWTXNSVUZCUlR0SlFVTmtMRlZCUVZVc1JVRkJSU3hGUVVGRk8wbEJRMlFzUzBGQlN5eEZRVUZQTEVWQlFVVTdTVUZEWkN4UFFVRlBMRVZCUVVzc1JVRkJSVHRKUVVOa0xFMUJRVTBzUlVGQlRTeEZRVUZGTzBsQlJXUXNTMEZCU3l4RlFVRlBMR0ZCUVdFN1NVRkRla0lzUjBGQlJ5eEZRVUZUTEdGQlFXRTdTVUZEZWtJc1MwRkJTeXhGUVVGUExHRkJRV0U3U1VGRGVrSXNUVUZCVFN4RlFVRk5MR0ZCUVdFN1NVRkRla0lzU1VGQlNTeEZRVUZSTEdGQlFXRTdTVUZEZWtJc1QwRkJUeXhGUVVGTExHRkJRV0U3U1VGRGVrSXNTVUZCU1N4RlFVRlJMR0ZCUVdFN1NVRkRla0lzUzBGQlN5eEZRVUZQTEdGQlFXRTdTVUZGZWtJc1QwRkJUeXhGUVVGTExHRkJRV0U3U1VGRGVrSXNVMEZCVXl4RlFVRkhMR0ZCUVdFN1NVRkRla0lzVlVGQlZTeEZRVUZGTEdGQlFXRTdTVUZEZWtJc1VVRkJVU3hGUVVGSkxHRkJRV0U3U1VGRGVrSXNWMEZCVnl4RlFVRkRMR0ZCUVdFN1NVRkRla0lzVVVGQlVTeEZRVUZKTEdGQlFXRTdTVUZEZWtJc1NVRkJTU3hGUVVGUkxHRkJRV0U3U1VGRmVrSXNUMEZCVHl4RlFVRkxMSGRDUVVGM1FqdEpRVU53UXl4TFFVRkxMRVZCUVU4c2QwSkJRWGRDTzBsQlEzQkRMRTlCUVU4c1JVRkJTeXgzUWtGQmQwSTdTVUZEY0VNc1VVRkJVU3hGUVVGSkxIZENRVUYzUWp0SlFVTndReXhOUVVGTkxFVkJRVTBzZDBKQlFYZENPMGxCUTNCRExGTkJRVk1zUlVGQlJ5eDNRa0ZCZDBJN1NVRkRjRU1zVFVGQlRTeEZRVUZOTEhkQ1FVRjNRanRKUVVOd1F5eFBRVUZQTEVWQlFVc3NkMEpCUVhkQ08wTkJRM1pETEVOQlFVTTdRVUZuUWtZc1RVRkJUU3hQUVVGUExFZEJRVWM3U1VGcFJGb3NXVUZCYlVJc1RVRkJZVHRSUVV4MFFpeG5Ra0ZCVnl4SFFVRm5RaXhUUVVGVExFTkJRVU03VVVGRGNrTXNhVUpCUVZrc1IwRkJTU3hGUVVGRkxFTkJRVU03VVVGRmJrSXNWVUZCU3l4SFFVRlhMRWxCUVVrc1EwRkJRenRSUVVWTExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUVVNc1EwRkJRenRKUVdSMlJDeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVZrN1VVRkRia01zUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU53UWl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEZEVJc1QwRkJUeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZCTzBsQlEyeENMRU5CUVVNN1NVRnJRa1FzU1VGQlZ5eGhRVUZoTEVOQlFVTXNSMEZCVlN4SlFVRkpMRWRCUVVjc1EwRkJReXhUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVYzNSQ3hKUVVGWExHRkJRV0VzUzBGQlN5eFBRVUZQTEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJiVUkzUXl4TFFVRkxMRU5CUVVNc1YwRkJiVUlzUlVGQlJTeGpRVUYxUWp0UlFVTnlSQ3hKUVVGSkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZETVVRc1NVRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NWMEZCVnl4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVNelFpeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMU5CUTNaQ08yRkJRVTBzU1VGQlNTeFhRVUZYTEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUXpkQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NVMEZCVXl4RFFVRkRPMU5CUTJoRE8yRkJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xbEJRMmhETEVsQlFVa3NZMEZCWXl4RlFVRkZPMmRDUVVGRkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUVVVN2FVSkJReTlDTzJkQ1FVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETzJGQlFVVTdXVUZEY0VRc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eGpRVUZqTEVOQlFVRXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NZMEZCWXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeFRRVUZUTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUTBGQlF6dFpRVU5vU2l4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTNKRk8yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR2RDUVVGblFpeFhRVUZYTEhWQ1FVRjFRaXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTm9SanRSUVVORUxFOUJRVThzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJVMDBzUzBGQlN5eERRVUZETEVkQlFVOHNTVUZCVnl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJVeTlGTEZOQlFWTXNRMEZCUXl4SFFVRlBMRWxCUVZjc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1NVRkJTU3hIUVVGSExFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRlROMGtzVVVGQlVTeERRVUZETEVkQlFVOHNTVUZCVnl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJZWEpHTEVsQlFVa3NRMEZCUXl4SFFVRlBMRWxCUVZjc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVk5zUml4SlFVRkpMRU5CUVVNc1IwRkJUeXhKUVVGWExFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCVlROR0xFdEJRVXNzUTBGQlF5eEhRVUZQTzFGQlEyaENMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTJ4RExFbEJRVWtzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTmlMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRia1FzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5xUkN4UFFVRlBMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU03VTBGRGRFSTdZVUZCVFR0WlFVTklMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKRU8wbEJRMHdzUTBGQlF6dEpRV0ZUTEVkQlFVY3NRMEZCUXl4SFFVRlZMRVZCUVVVc1IwRkJUeXhGUVVGRkxFOUJRVmM3VVVGRE1VTXNTVUZCU1N4UFFVRlBMRWRCUVdFc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjRReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFUXNTVUZCU1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hKUVVGSkxGZEJRVmNzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZET1VNc1NVRkJTU3hKUVVGSkxFTkJRVU03V1VGRFZDeFJRVUZQTEU5QlFVOHNSMEZCUnl4RlFVRkZPMmRDUVVObUxFdEJRVXNzVlVGQlZUdHZRa0ZCUlN4SlFVRkpMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlFVTXNUVUZCVFR0blFrRkRja01zUzBGQlN5eFJRVUZSTzI5Q1FVRkpMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU03YjBKQlFVTXNUVUZCVFR0blFrRkRia01zUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJUdHZRa0ZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVRkRMRTlCUVU4c1UwRkJVeXhEUVVGRE8ybENRVUZGTzJkQ1FVTjRSU3hQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU55UXp0WlFVTkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkRja01zU1VGQlNTeEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZPMmRDUVVGRkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03WVVGQlJUdFpRVU5zUkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlFUdFpRVU01UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRlRU1zVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1NVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETzFOQlEyaEZPMUZCUTBRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0SlFVbFRMRTFCUVUwc1EwRkJReXhQUVVGWExFVkJRVVVzVjBGQmIwSXNSVUZCUlN4SlFVRlhPMUZCUXpORUxFMUJRVTBzUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVFN1VVRkRNMElzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkJPMUZCUTNCRUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVUVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM1pJTEVOQlFVTTdTVUZGVXl4WFFVRlhMRU5CUVVNc1NVRkJWeXhGUVVGRkxFMUJRV0U3VVVGRE5VTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVR0UlFVTTVRaXhOUVVGTkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4VFFVRlRMRWxCUVVrc1IwRkJSeXhEUVVGRExHVkJRV1VzUTBGQlF6dFJRVU40UkN4SlFVRkpMRTFCUVUwc1IwRkJReXhEUVVGRExFVkJRVVU3V1VGRFZpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkJMRU5CUVVNN1owSkJRMnBFTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRemxDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeEhRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkRMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVRTdVMEZEYmtVN1VVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlFUdEpRVU5vUWl4RFFVRkRPMGxCV1Uwc1RVRkJUU3hEUVVGRExFMUJRV003VVVGRGVFSXNTVUZCU1N4TlFVRk5MRXRCUVVzc1NVRkJTU3hGUVVGRk8xbEJRVVVzUjBGQlJ5eERRVUZETEZWQlFWVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRE8xTkJRVVU3WVVGRGRrUXNTVUZCU1N4TlFVRk5MRVZCUVUwN1dVRkJSU3hIUVVGSExFTkJRVU1zVlVGQlZTeEhRVUZITEUxQlFVMHNRMEZCUXp0VFFVRkZPMUZCUTJwRUxFOUJRVThzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJUMDBzVFVGQlRTeERRVUZETEVkQlFWYzdVVUZEY2tJc1NVRkJTU3hIUVVGSExFVkJRVVU3V1VGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWRCUVVjc1EwRkJRenRUUVVGRk8xRkJRM0pETEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlUwMHNUVUZCVFN4RFFVRkRMRWRCUVhGRU8xRkJReTlFTEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1MwRkJSeXhUUVVGVExFVkJRVVU3V1VGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVMEZCUlR0UlFVTXpSQ3hKUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEV0QlFVY3NVMEZCVXl4RlFVRkhPMWxCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkJSVHRSUVVOMFJDeEpRVUZKTEVkQlFVY3NRMEZCUXl4TlFVRk5MRXRCUVVjc1UwRkJVeXhGUVVGRk8xbEJRVVVzUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRE8xTkJRVVU3U1VGRE5VUXNRMEZCUXp0SlFXbENUU3hQUVVGUExFTkJRVU1zUjBGQlR5eEZRVUZGTEVWQlFVTXNTMEZCU3l4SFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUjBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4SFFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExFVkJRVU1zUjBGQlF5eEZRVUZETEV0QlFVc3NSVUZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hGUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1JVRkJRenRSUVVONFNDeFRRVUZUTEZGQlFWRXNRMEZCUXl4SFFVRlBMRVZCUVVVc1MwRkJXU3hGUVVGRkxFdEJRVmtzUlVGQlJTeFZRVUZwUWp0WlFVTndSU3hKUVVGSkxFZEJRVWNzUzBGQlN5eEpRVUZKTEVWQlFXZENPMmRDUVVGRkxFOUJRVThzVFVGQlRTeERRVUZETzJGQlFVVTdXVUZEYkVRc1NVRkJTU3hIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZYTzJkQ1FVRkZMRTlCUVU4c1YwRkJWeXhEUVVGRE8yRkJRVVU3V1VGRGRrUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhWUVVGVkxFVkJRVWM3WjBKQlFVVXNUMEZCVHl4VlFVRlZMRU5CUVVNN1lVRkJSVHRaUVVOMFJDeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJTenRuUWtGQlJTeFBRVUZQTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkJSVHRaUVVOMFJDeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJTenRuUWtGRE5VSXNTVUZCU1N4TFFVRkxMRWRCUVVNc1EwRkJReXhGUVVGRk8yOUNRVU5VTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGSExGTkJRVk1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6dHBRa0ZEZEVRN1owSkJRMFFzU1VGQlNTeEhRVUZITEVOQlFVTXNSMEZCUnl4TFFVRkxMRk5CUVZNc1JVRkJSVHR2UWtGRGRrSXNUMEZCVHl4SlFVRkpMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZMTEVWQlFVTXNSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJReXhMUVVGSExGTkJRVk1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RlFVRkZMRU5CUVVFc1EwRkJReXhEUVVGQkxGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdhVUpCUXpOSE8yZENRVU5FTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1QwRkJUeXhGUVVGRkxFVkJRVVVzUlVGQlJTeFZRVUZWTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU5vUnl4UFFVRlBMRWxCUVVrc1JVRkJSU3hGUVVGRkxFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzVDBGQlR5eExRVU12UkN4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVkQlFVTXNUVUZCVFN4RFFVTjRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeEhRVUZITEZWQlFWVXNSMEZCUnl4RFFVRkRPMkZCUXpsRE8xbEJRMFFzVDBGQlR5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRNVUlzUTBGQlF6dFJRVU5FTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVWc1FpeFBRVUZQTEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhMUVVGTExFdEJRVWNzVTBGQlV5eEpRVUZKTEV0QlFVc3NTMEZCUnl4SlFVRkpMRWxCUVVrc1MwRkJTeXhKUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRMMFlzUTBGQlF6dEpRVVZUTEdGQlFXRXNRMEZCUXl4TlFVRmhMRVZCUVVVc1MwRkJXU3hGUVVGRkxGVkJRV2xDTEVWQlFVVXNUVUZCWlR0UlFVTnVSaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVWQlFVVXNTMEZCU3l4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzWkRMRWxCUVVrc1RVRkJUU3hGUVVGRk8xbEJRMUlzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFsQlEzaERMRlZCUVZVc1IwRkJSeXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVWb1JDeE5RVUZOTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVOd1JpeE5RVUZOTEVkQlFVa3NiVUpCUVcxQ0xFdEJRVXNzU1VGQlNTeERRVUZETzFsQlEzWkRMRXRCUVVzc1IwRkJTeXhoUVVGaExFTkJRVU03V1VGRGVFSXNSVUZCUlN4SFFVRlJMRTFCUVUwc1EwRkJRenRUUVVOd1FqdFJRVU5FTEU5QlFVOHNRMEZCUXl4SFFVRkhMRlZCUVZVc1IwRkJSeXhOUVVGTkxFZEJRVWNzVFVGQlRTeEZRVUZGTEVWQlFVVXNSMEZCUnl4TFFVRkxMRVZCUVVVc1JVRkJSU3hOUVVGTkxFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzBsQlF6bEdMRU5CUVVNN08wRkJhbFI1UWl4cFFrRkJZU3hIUVVGSExEaENRVUU0UWl4RFFVRkRPMEZCUld4RUxGTkJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTTdRVUZIYUVJc1VVRkJTU3hIUVVGTExFMUJRVTBzUTBGQlF6dEJRVWRvUWl4UlFVRkpMRWRCUVVzc1RVRkJUU3hEUVVGRE8wRkJSMmhDTEZOQlFVc3NSMEZCU1N4UFFVRlBMRU5CUVVNN1FVRkhha0lzYlVKQlFXVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1FVRkZOVUlzYVVKQlFXRXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hYUVVGWExFVkJRVVVzVTBGQlV5eEZRVUZGTEZWQlFWVXNSVUZCUlN4WlFVRlpMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03UVVGSE9VWXNZMEZCVlN4SFFVRk5MRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU03UVVGSGJFTXNWVUZCVFN4SFFVRkhPMGxCUTNSQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkxMRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZETzBsQlF6bEVMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZOTEVWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUnl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRE8wbEJRemRFTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGTkxFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJ5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkRPMGxCUXpkRUxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkxMRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZETzBOQlEycEZMRU5CUVVNN1FVRkRaU3hWUVVGTkxFZEJRVThzU1VGQlNTeERRVUZETzBGQlEyeENMR0ZCUVZNc1IwRkJTU3hEUVVGRExFTkJRVU03UVVGSmJFSXNUMEZCUnl4SFFVRlBMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZSTVVJc1pVRkJWeXhIUVVGaExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGREluMD0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYmluL2VzbS9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=