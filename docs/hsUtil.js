this["hsUtil"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/Checksum.js":
/*!*************************!*\
  !*** ./bin/Checksum.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function shortCheckSum(s) {
    var chk = 0x12345678;
    var len = s.length;
    for (var i = 0; i < len; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
exports.shortCheckSum = shortCheckSum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQyxTQUFnQixhQUFhLENBQUMsQ0FBUTtJQUNuQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFQRCxzQ0FPQyJ9

/***/ }),

/***/ "./bin/Date.js":
/*!*********************!*\
  !*** ./bin/Date.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const monthStr = [
    ['Jan', 'January'], ['Feb', 'February'], ['Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'],
    ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']
];
const dayStr = [
    ['Sun', 'Sunday'], ['Mon', 'Monday'], ['Tue', 'Tuesday'], ['Wed', 'Wednesday'], ['Thu', 'Thursday'], ['Fri', 'Friday'], ['Sat', 'Saturday']
];
function formatNumber(number, digits) {
    var r = '' + number;
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
exports.date = date;
exports.ms = {
    fromMinutes: (min) => 1000 * 60 * min,
    fromHours: (h) => 1000 * 60 * 60 * h,
    fromDays: (d) => 1000 * 60 * 60 * 24 * d,
    fromWeeks: (w) => 1000 * 60 * 60 * 24 * 7 * w,
    toMinutes: (ms) => ms / (1000 * 60),
    toHours: (ms) => ms / (1000 * 60 * 60),
    toDays: (ms) => ms / (1000 * 60 * 60 * 24),
    toWeeks: (ms) => ms / (1000 * 60 * 60 * 24 * 7)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZUEsTUFBTSxRQUFRLEdBQUc7SUFDYixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDNUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDO0NBQUMsQ0FBQztBQUc1SCxNQUFNLE1BQU0sR0FBRztJQUNYLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztDQUFDLENBQUM7QUFHM0ksU0FBUyxZQUFZLENBQUMsTUFBYSxFQUFFLE1BQWE7SUFDOUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLE1BQU0sQ0FBQztJQUNsQixPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1FBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FBRTtJQUMxQyxPQUFP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QUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxDQUFDO0lBQy9DLFNBQVMsRUFBTyxDQUFDLENBQVEsRUFBSSxFQUFFLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDO0lBQ2pELFNBQVMsRUFBTyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztJQUM1QyxPQUFPLEVBQVMsQ0FBQyxFQUFTLEVBQUcsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQy9DLE1BQU0sRUFBVSxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQ2xELE9BQU8sRUFBUyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQztDQUN2RCxDQUFDIn0=

/***/ }),

/***/ "./bin/Number.js":
/*!***********************!*\
  !*** ./bin/Number.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function round(n, d = 0) {
    const f = Math.pow(10, d);
    const r = Math.round(n * f) / f;
    return '' + r;
}
exports.round = round;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL051bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdDLFNBQWdCLEtBQUssQ0FBQyxDQUFRLEVBQUUsQ0FBQyxHQUFDLENBQUM7SUFPaEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sRUFBRSxHQUFDLENBQUMsQ0FBQztBQUNmLENBQUM7QUFWRCxzQkFVQyJ9

/***/ }),

/***/ "./bin/TimedPromises.js":
/*!******************************!*\
  !*** ./bin/TimedPromises.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function timeout(ms) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms); });
}
exports.timeout = timeout;
function delay(ms) {
    return (args) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(args); }, ms);
        });
    };
}
exports.delay = delay;
class Pace {
    constructor(pace = 100, maxConcurrent = -1) {
        this.maxConcurrent = -1;
        this.waitUntil = 0;
        this.waitCount = 0;
        this.beingCalled = 0;
        this.pace = pace + 5;
        this.maxConcurrent = maxConcurrent;
    }
    getWaitCount() { return this.waitCount; }
    getCallingCount() { return this.beingCalled; }
    add(fn) {
        return __awaiter(this, void 0, void 0, function* () {
            const addTime = Date.now();
            if (this.waitUntil < addTime) {
                this.waitUntil = addTime;
            }
            const diff = this.waitUntil - addTime;
            this.waitUntil += this.pace + 5;
            this.waitCount++;
            yield delay(diff)();
            yield new Promise(resolve => {
                const waitLoop = () => {
                    if (this.maxConcurrent < 0 || this.beingCalled < this.maxConcurrent) {
                        resolve();
                    }
                    else {
                        setTimeout(waitLoop, 10);
                    }
                };
                waitLoop();
            });
            this.waitCount--;
            this.beingCalled++;
            const ret = yield fn(Date.now() - addTime);
            this.beingCalled--;
            return ret;
        });
    }
}
exports.Pace = Pace;
function promiseChain(tasks, initialResult = []) {
    return tasks.reduce((chain, task) => chain.then((_results) => Promise.resolve(task(_results)).then((r) => {
        _results.push(r);
        return _results;
    })), Promise.resolve(initialResult));
}
exports.promiseChain = promiseChain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZWRQcm9taXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9UaW1lZFByb21pc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFXQSxTQUFnQixPQUFPLENBQUMsRUFBUztJQUM3QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFGRCwwQkFFQztBQXVCRCxTQUFnQixLQUFLLENBQUMsRUFBUztJQUMzQixPQUFPLENBQUksSUFBTyxFQUFhLEVBQUU7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQXNCLEVBQUUsRUFBRTtZQUMxQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQU5ELHNCQU1DO0FBYUQsTUFBYSxJQUFJO0lBWWIsWUFBWSxJQUFJLEdBQUMsR0FBRyxFQUFFLGFBQWEsR0FBQyxDQUFDLENBQUM7UUFYOUIsa0JBQWEsR0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyQixjQUFTLEdBQVMsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBUyxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBTyxDQUFDLENBQUM7UUFReEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxZQUFZLEtBQVEsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM1QyxlQUFlLEtBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQVF4QyxHQUFHLENBQUMsRUFBaUM7O1lBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxFQUFFO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2FBQUU7WUFDM0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNwQixNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN4QixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNqRSxPQUFPLEVBQUUsQ0FBQztxQkFDYjt5QkFBTTt3QkFDSCxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUM1QjtnQkFDTCxDQUFDLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7S0FBQTtDQUNKO0FBakRELG9CQWlEQztBQVdELFNBQWdCLFlBQVksQ0FBSSxLQUFxQyxFQUFFLGdCQUFrQixFQUFFO0lBQ3ZGLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQWtCLEVBQUUsSUFBK0IsRUFBZ0IsRUFBRSxDQUV0RixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBWSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUcsRUFBRSxFQUFFO1FBRXRFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUMsRUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUNqQyxDQUFDO0FBQ04sQ0FBQztBQVZELG9DQVVDIn0=

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimedPromises_1 = __webpack_require__(/*! ./TimedPromises */ "./bin/TimedPromises.js");
exports.timeout = TimedPromises_1.timeout;
exports.delay = TimedPromises_1.delay;
var TimedPromises_2 = __webpack_require__(/*! ./TimedPromises */ "./bin/TimedPromises.js");
exports.Pace = TimedPromises_2.Pace;
var TimedPromises_3 = __webpack_require__(/*! ./TimedPromises */ "./bin/TimedPromises.js");
exports.promiseChain = TimedPromises_3.promiseChain;
var Checksum_1 = __webpack_require__(/*! ./Checksum */ "./bin/Checksum.js");
exports.shortCheckSum = Checksum_1.shortCheckSum;
var Date_1 = __webpack_require__(/*! ./Date */ "./bin/Date.js");
exports.date = Date_1.date;
exports.ms = Date_1.ms;
var Number_1 = __webpack_require__(/*! ./Number */ "./bin/Number.js");
exports.round = Number_1.round;
var log_1 = __webpack_require__(/*! ./log */ "./bin/log.js");
exports.log = log_1.log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBdUQ7QUFBOUMsa0NBQUEsT0FBTyxDQUFBO0FBQUUsZ0NBQUEsS0FBSyxDQUFBO0FBQ3ZCLGlEQUF1RDtBQUE5QywrQkFBQSxJQUFJLENBQUE7QUFDYixpREFBdUQ7QUFBOUMsdUNBQUEsWUFBWSxDQUFBO0FBQ3JCLHVDQUFrRDtBQUF6QyxtQ0FBQSxhQUFhLENBQUE7QUFDdEIsK0JBQThDO0FBQXJDLHNCQUFBLElBQUksQ0FBQTtBQUFFLG9CQUFBLEVBQUUsQ0FBQTtBQUNqQixtQ0FBZ0Q7QUFBdkMseUJBQUEsS0FBSyxDQUFBO0FBQ2QsNkJBQTZDO0FBQXBDLG9CQUFBLEdBQUcsQ0FBQSJ9

/***/ }),

/***/ "./bin/log.js":
/*!********************!*\
  !*** ./bin/log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Date_1 = __webpack_require__(/*! ./Date */ "./bin/Date.js");
const DEBUG = Symbol('DEBUG');
const INFO = Symbol('INFO');
const WARN = Symbol('WARN');
const ERROR = Symbol('ERROR');
let gLogFile;
const gLevels = {
    [DEBUG]: { importance: 0, sym: DEBUG, desc: 'DEBUG' },
    [INFO]: { importance: 1, sym: INFO, desc: 'INFO' },
    [WARN]: { importance: 2, sym: WARN, desc: 'WARN' },
    [ERROR]: { importance: 3, sym: ERROR, desc: 'ERROR' }
};
let gGlobalLevel = gLevels[INFO];
const defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
let gDateFormat = defDateFormat;
let gColors = false;
const color = {
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[36m',
    green: '\x1b[32m',
    bold: '\x1b[1m',
    clear: '\x1b[0m'
};
exports.log = create('', (filename, msg) => Promise.resolve(undefined), (path) => Promise.resolve(path.indexOf('/') >= 0 ? false : true));
function create(_prefix, logToFile, pathExists) {
    const context = {
        level: undefined,
        prefix: _prefix,
        logToFile: logToFile,
        pathExists: pathExists
    };
    function level(newLevelSym, setGlobalLevel = false) {
        let newLevel = gLevels[newLevelSym] || gGlobalLevel;
        let oldLevel = context.level || gGlobalLevel;
        if (newLevelSym === undefined) {
            newLevel = oldLevel;
        }
        else if (newLevelSym === null) {
            context.level = undefined;
        }
        else if (gLevels[newLevelSym]) {
            if (setGlobalLevel) {
                gGlobalLevel = newLevel;
            }
            else {
                context.level = newLevel;
            }
            const msg = `new ${setGlobalLevel ? 'global' : context.prefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            out((newLevel.sym === oldLevel.sym) ? DEBUG : INFO, msg);
        }
        else {
            out(ERROR, `unkown level ${newLevelSym.toString()}; log level remains ${oldLevel.sym.toString()}`);
        }
        return newLevel.sym;
    }
    function debug(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(DEBUG, msg, log2File); });
    }
    function info(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(INFO, msg, log2File); });
    }
    function warn(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(WARN, msg, log2File); });
    }
    function error(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(ERROR, msg, log2File); });
    }
    function format(fmtStr) {
        if (fmtStr === null) {
            gDateFormat = defDateFormat;
        }
        else if (fmtStr) {
            gDateFormat = fmtStr;
        }
        return gDateFormat;
    }
    function prefix(prf) {
        if (prf) {
            context.prefix = prf;
        }
        return context.prefix;
    }
    function out(lvl, msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const colors = { [ERROR]: color.red + color.bold, [WARN]: color.yellow + color.bold, [DEBUG]: color.blue, [INFO]: color.green };
            let desc = gLevels[lvl];
            const filterLevel = context.level || gGlobalLevel;
            if (desc.importance >= filterLevel.importance) {
                const dateStr = Date_1.date(gDateFormat);
                let line = (typeof msg === 'string') ? msg : inspect(msg, 0);
                const logLine = `${dateStr} ${context.prefix} ${desc.desc} ${line}`;
                const colorLine = `${colors[lvl] || ''} ${dateStr} ${context.prefix} ${desc.desc} ${color.clear} ${line}`;
                console.log(gColors ? colorLine : logLine);
                if (msg && msg.stack) {
                    console.log(msg.stack);
                }
                if (gLogFile && log2File) {
                    return yield context.logToFile(Date_1.date(gLogFile), logLine);
                }
            }
            return undefined;
        });
    }
    function logFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (file === null) {
                gLogFile = undefined;
                return yield info("disabling logfile");
            }
            else if (file === undefined) {
                return Date_1.date(gLogFile);
            }
            else if (file.indexOf('/') >= 0) {
                return yield context.pathExists(file)
                    .then((exists) => __awaiter(this, void 0, void 0, function* () {
                    if (!exists) {
                        gLogFile = undefined;
                        return yield warn(`path '${file}' doesn't exists; logfile disabled`);
                    }
                    gLogFile = file;
                    return yield info("now logging to file " + Date_1.date(file));
                }))
                    .catch(() => __awaiter(this, void 0, void 0, function* () {
                    gLogFile = undefined;
                    return yield error(`checking path ${file}; logfile disabled`);
                }));
            }
            else if (file === '') {
                file = 'log-%YYYY-%MM-%DD.txt';
            }
            else {
            }
            gLogFile = file;
            return yield info(gLogFile ? `now logging to file ${Date_1.date(gLogFile)}` : 'logfile disbaled');
        });
    }
    function config(cfg) {
        if (cfg.colors !== undefined) {
            gColors = cfg.colors;
        }
        if (cfg.format !== undefined) {
            format(cfg.format);
        }
        if (cfg.level !== undefined) {
            level(cfg.level);
        }
    }
    function inspect(msg, depth = 1, indent = '') {
        if (depth === null) {
            depth = 999;
        }
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
            if (msg.length !== undefined) {
                return `[${msg.map((e) => (e === undefined) ? '' : inspect(e, depth - 1, indent)).join(', ')}]`;
            }
            return '{\n' + Object.keys(msg).map(k => `   ${indent}${k}: ${inspect(msg[k], depth - 1, indent + '   ')}`).join(',\n') + `\n${indent}}`;
        }
        return msg.toString();
    }
    const newLog = function (prefix, logToFile = context.logToFile, pathExists = context.pathExists) {
        return create(prefix, logToFile, pathExists);
    };
    newLog.DEBUG = DEBUG;
    newLog.INFO = INFO;
    newLog.WARN = WARN;
    newLog.ERROR = ERROR;
    newLog.level = level;
    newLog.debug = debug;
    newLog.info = info;
    newLog.warn = warn;
    newLog.error = error;
    newLog.format = format;
    newLog.prefix = prefix;
    newLog.out = out;
    newLog.logFile = logFile;
    newLog.config = config;
    newLog.inspect = inspect;
    return newLog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBK0VBLGlDQUFrQztBQUdsQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHOUIsTUFBTSxJQUFJLEdBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzlCLE1BQU0sSUFBSSxHQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUc5QixNQUFNLEtBQUssR0FBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHL0IsSUFBSSxRQUFnQixDQUFDO0FBU3JCLE1BQU0sT0FBTyxHQUFHO0lBQ1osQ0FBQyxLQUFLLENBQUMsRUFBSyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO0lBQ3RELENBQUMsSUFBSSxDQUFDLEVBQU0sRUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUNyRCxDQUFDLElBQUksQ0FBQyxFQUFNLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDckQsQ0FBQyxLQUFLLENBQUMsRUFBSyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO0NBQ3pELENBQUM7QUFHRixJQUFJLFlBQVksR0FBYSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHM0MsTUFBTSxhQUFhLEdBQUcsOEJBQThCLENBQUM7QUFDckQsSUFBSSxXQUFXLEdBQU8sYUFBYSxDQUFDO0FBR3BDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztBQUdwQixNQUFNLEtBQUssR0FBRztJQUNWLEdBQUcsRUFBSyxVQUFV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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL0NoZWNrc3VtLmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9EYXRlLmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL1RpbWVkUHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2luZGV4LmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9sb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCttQjs7Ozs7Ozs7Ozs7O0FD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QUNBO0FBQ0Esc0RBQXNELElBQUk7QUFDMUQ7QUFDQTtBQUNBLDJCQUEyQixrRkFBa0Y7QUFDN0c7QUFDQSxxQkFBcUIsc0NBQXNDLE9BQU8sRUFBRSxFQUFFLElBQUksMkNBQTJDLHNCQUFzQixRQUFRO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbWpUIiwiZmlsZSI6ImhzVXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmluL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBzaG9ydENoZWNrU3VtKHMpIHtcbiAgICB2YXIgY2hrID0gMHgxMjM0NTY3ODtcbiAgICB2YXIgbGVuID0gcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjaGsgKz0gKHMuY2hhckNvZGVBdChpKSAqIChpICsgMSkpO1xuICAgIH1cbiAgICByZXR1cm4gKGNoayAmIDB4ZmZmZmZmZmYpLnRvU3RyaW5nKDE2KTtcbn1cbmV4cG9ydHMuc2hvcnRDaGVja1N1bSA9IHNob3J0Q2hlY2tTdW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmhsWTJ0emRXMHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UTJobFkydHpkVzB1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRlJReXhUUVVGblFpeGhRVUZoTEVOQlFVTXNRMEZCVVR0SlFVTnVReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTVUZEY2tJc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTnVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlF6RkNMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTjBRenRKUVVORUxFOUJRVThzUTBGQlF5eEhRVUZITEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBGQlF6RkRMRU5CUVVNN1FVRlFSQ3h6UTBGUFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1vbnRoU3RyID0gW1xuICAgIFsnSmFuJywgJ0phbnVhcnknXSwgWydGZWInLCAnRmVicnVhcnknXSwgWydNYXInLCAnTWFyY2gnXSwgWydBcHInLCAnQXByaWwnXSwgWydNYXknLCAnTWF5J10sIFsnSnVuJywgJ0p1bmUnXSxcbiAgICBbJ0p1bCcsICdKdWx5J10sIFsnQXVnJywgJ0F1Z3VzdCddLCBbJ1NlcCcsICdTZXB0ZW1iZXInXSwgWydPY3QnLCAnT2N0b2JlciddLCBbJ05vdicsICdOb3ZlbWJlciddLCBbJ0RlYycsICdEZWNlbWJlciddXG5dO1xuY29uc3QgZGF5U3RyID0gW1xuICAgIFsnU3VuJywgJ1N1bmRheSddLCBbJ01vbicsICdNb25kYXknXSwgWydUdWUnLCAnVHVlc2RheSddLCBbJ1dlZCcsICdXZWRuZXNkYXknXSwgWydUaHUnLCAnVGh1cnNkYXknXSwgWydGcmknLCAnRnJpZGF5J10sIFsnU2F0JywgJ1NhdHVyZGF5J11cbl07XG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtYmVyLCBkaWdpdHMpIHtcbiAgICB2YXIgciA9ICcnICsgbnVtYmVyO1xuICAgIHdoaWxlIChyLmxlbmd0aCA8IGRpZ2l0cykge1xuICAgICAgICByID0gXCIwXCIgKyByO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIGRhdGUoZm9ybWF0U3RyaW5nLCBkYXRlID0gbmV3IERhdGUoKSkge1xuICAgIHJldHVybiAodHlwZW9mIGZvcm1hdFN0cmluZyAhPT0gJ3N0cmluZycgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSA/XG4gICAgICAgICdpbnZhbGlkJyA6XG4gICAgICAgIGZvcm1hdFN0cmluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWVlZL2csICcnICsgZGF0ZS5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWS9nLCAnJyArIChkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDApKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNb250aCgpICsgMSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU0vZywgJycgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVERC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXREYXRlKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEL2csICcnICsgZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWhoL2csIGZvcm1hdE51bWJlcihkYXRlLmdldEhvdXJzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoL2csICcnICsgZGF0ZS5nZXRIb3VycygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtbS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtL2csICcnICsgZGF0ZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJXNzL2csIGZvcm1hdE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMykpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwLCAxKSk7XG59XG5leHBvcnRzLmRhdGUgPSBkYXRlO1xuZXhwb3J0cy5tcyA9IHtcbiAgICBmcm9tTWludXRlczogKG1pbikgPT4gMTAwMCAqIDYwICogbWluLFxuICAgIGZyb21Ib3VyczogKGgpID0+IDEwMDAgKiA2MCAqIDYwICogaCxcbiAgICBmcm9tRGF5czogKGQpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiBkLFxuICAgIGZyb21XZWVrczogKHcpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiA3ICogdyxcbiAgICB0b01pbnV0ZXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwKSxcbiAgICB0b0hvdXJzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwKSxcbiAgICB0b0RheXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCksXG4gICAgdG9XZWVrczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogNylcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OUVZWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJaVUVzVFVGQlRTeFJRVUZSTEVkQlFVYzdTVUZEWWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTTdTVUZETlVjc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRPME5CUVVNc1EwRkJRenRCUVVjMVNDeE5RVUZOTEUxQlFVMHNSMEZCUnp0SlFVTllMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF6dERRVUZETEVOQlFVTTdRVUZITTBrc1UwRkJVeXhaUVVGWkxFTkJRVU1zVFVGQllTeEZRVUZGTEUxQlFXRTdTVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZETEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RlFVRkZPMUZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZCUlR0SlFVTXhReXhQUVVGUExFTkJRVU1zUTBGQlF6dEJRVU5pTEVOQlFVTTdRVUZqUkN4VFFVRm5RaXhKUVVGSkxFTkJRVU1zV1VGQmJVSXNSVUZCUlN4SlFVRkpMRWRCUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3U1VGRGNrUXNUMEZCVHl4RFFVRkRMRTlCUVU4c1dVRkJXU3hMUVVGTExGRkJRVkVzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEZMRk5CUVZNc1EwRkJRU3hEUVVGRE8xRkJRMVlzV1VGQldUdGhRVU5RTEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hIUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0aFFVTjRReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEVWQlFVVXNSMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUjBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTTVReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTm9SQ3hQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTm9SQ3hQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVU1zUTBGQlF5eEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNCRUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVa3NSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNoRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpWRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpWRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTnFSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZKTEVWQlFVVXNSMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WVVGRGJrTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnhFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVjc1JVRkJSU3hIUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0aFFVTnVReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEY0VRc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlNTeEZRVUZGTEVkQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8yRkJRM1JETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1JDeFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRNVVFzVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGQlJTeEhRVUZETEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNMVJDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkhMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVkQlFVTXNSMEZCUnl4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGVrVXNRMEZCUXp0QlFYUkNSQ3h2UWtGelFrTTdRVUZIV1N4UlFVRkJMRVZCUVVVc1IwRkJSenRKUVVOa0xGZEJRVmNzUlVGQlN5eERRVUZETEVkQlFWVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEhRVUZITzBsQlF6TkRMRk5CUVZNc1JVRkJUeXhEUVVGRExFTkJRVkVzUlVGQlNTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF6dEpRVU0xUXl4UlFVRlJMRVZCUVZFc1EwRkJReXhEUVVGUkxFVkJRVWtzUlVGQlJTeERRVUZETEVsQlFVa3NSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eERRVUZETzBsQlF5OURMRk5CUVZNc1JVRkJUeXhEUVVGRExFTkJRVkVzUlVGQlNTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRPMGxCUTJwRUxGTkJRVk1zUlVGQlR5eERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNRMEZCUXp0SlFVTTFReXhQUVVGUExFVkJRVk1zUTBGQlF5eEZRVUZUTEVWQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRExFbEJRVWtzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4RFFVRkRPMGxCUXk5RExFMUJRVTBzUlVGQlZTeERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hEUVVGRE8wbEJRMnhFTEU5QlFVOHNSVUZCVXl4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXp0RFFVTjJSQ3hEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHJvdW5kKG4sIGQgPSAwKSB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEwLCBkKTtcbiAgICBjb25zdCByID0gTWF0aC5yb3VuZChuICogZikgLyBmO1xuICAgIHJldHVybiAnJyArIHI7XG59XG5leHBvcnRzLnJvdW5kID0gcm91bmQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUblZ0WW1WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMDUxYldKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVZkRExGTkJRV2RDTEV0QlFVc3NRMEZCUXl4RFFVRlJMRVZCUVVVc1EwRkJReXhIUVVGRExFTkJRVU03U1VGUGFFTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFOUJRVThzUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXp0QlFVTm1MRU5CUVVNN1FVRldSQ3h6UWtGVlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gdGltZW91dChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHNldFRpbWVvdXQocmVqZWN0LCBtcyk7IH0pO1xufVxuZXhwb3J0cy50aW1lb3V0ID0gdGltZW91dDtcbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHJlc29sdmUoYXJncyk7IH0sIG1zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuZGVsYXkgPSBkZWxheTtcbmNsYXNzIFBhY2Uge1xuICAgIGNvbnN0cnVjdG9yKHBhY2UgPSAxMDAsIG1heENvbmN1cnJlbnQgPSAtMSkge1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSAtMTtcbiAgICAgICAgdGhpcy53YWl0VW50aWwgPSAwO1xuICAgICAgICB0aGlzLndhaXRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYmVpbmdDYWxsZWQgPSAwO1xuICAgICAgICB0aGlzLnBhY2UgPSBwYWNlICsgNTtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gbWF4Q29uY3VycmVudDtcbiAgICB9XG4gICAgZ2V0V2FpdENvdW50KCkgeyByZXR1cm4gdGhpcy53YWl0Q291bnQ7IH1cbiAgICBnZXRDYWxsaW5nQ291bnQoKSB7IHJldHVybiB0aGlzLmJlaW5nQ2FsbGVkOyB9XG4gICAgYWRkKGZuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBhZGRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmICh0aGlzLndhaXRVbnRpbCA8IGFkZFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRVbnRpbCA9IGFkZFRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdGhpcy53YWl0VW50aWwgLSBhZGRUaW1lO1xuICAgICAgICAgICAgdGhpcy53YWl0VW50aWwgKz0gdGhpcy5wYWNlICsgNTtcbiAgICAgICAgICAgIHRoaXMud2FpdENvdW50Kys7XG4gICAgICAgICAgICB5aWVsZCBkZWxheShkaWZmKSgpO1xuICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdExvb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heENvbmN1cnJlbnQgPCAwIHx8IHRoaXMuYmVpbmdDYWxsZWQgPCB0aGlzLm1heENvbmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdExvb3AsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd2FpdExvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy53YWl0Q291bnQtLTtcbiAgICAgICAgICAgIHRoaXMuYmVpbmdDYWxsZWQrKztcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IHlpZWxkIGZuKERhdGUubm93KCkgLSBhZGRUaW1lKTtcbiAgICAgICAgICAgIHRoaXMuYmVpbmdDYWxsZWQtLTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuUGFjZSA9IFBhY2U7XG5mdW5jdGlvbiBwcm9taXNlQ2hhaW4odGFza3MsIGluaXRpYWxSZXN1bHQgPSBbXSkge1xuICAgIHJldHVybiB0YXNrcy5yZWR1Y2UoKGNoYWluLCB0YXNrKSA9PiBjaGFpbi50aGVuKChfcmVzdWx0cykgPT4gUHJvbWlzZS5yZXNvbHZlKHRhc2soX3Jlc3VsdHMpKS50aGVuKChyKSA9PiB7XG4gICAgICAgIF9yZXN1bHRzLnB1c2gocik7XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9KSksIFByb21pc2UucmVzb2x2ZShpbml0aWFsUmVzdWx0KSk7XG59XG5leHBvcnRzLnByb21pc2VDaGFpbiA9IHByb21pc2VDaGFpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHbHRaV1JRY205dGFYTmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5VWFXMWxaRkJ5YjIxcGMyVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3UVVGWFFTeFRRVUZuUWl4UFFVRlBMRU5CUVVNc1JVRkJVenRKUVVNM1FpeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNwRkxFTkJRVU03UVVGR1JDd3dRa0ZGUXp0QlFYVkNSQ3hUUVVGblFpeExRVUZMTEVOQlFVTXNSVUZCVXp0SlFVTXpRaXhQUVVGUExFTkJRVWtzU1VGQlR5eEZRVUZoTEVWQlFVVTdVVUZETjBJc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFYTkNMRVZCUVVVc1JVRkJSVHRaUVVNeFF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemRETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRVTVFTEhOQ1FVMURPMEZCWVVRc1RVRkJZU3hKUVVGSk8wbEJXV0lzV1VGQldTeEpRVUZKTEVkQlFVTXNSMEZCUnl4RlFVRkZMR0ZCUVdFc1IwRkJReXhEUVVGRExFTkJRVU03VVVGWU9VSXNhMEpCUVdFc1IwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVZ5UWl4alFVRlRMRWRCUVZNc1EwRkJReXhEUVVGRE8xRkJRM0JDTEdOQlFWTXNSMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRjRUlzWjBKQlFWY3NSMEZCVHl4RFFVRkRMRU5CUVVNN1VVRlJlRUlzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRWRCUVVNc1EwRkJReXhEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1lVRkJZU3hEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZGUkN4WlFVRlpMRXRCUVZFc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTFReXhsUVVGbExFdEJRVXNzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZGNFF5eEhRVUZITEVOQlFVTXNSVUZCYVVNN08xbEJRM1pETEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU16UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVDBGQlR5eEZRVUZGTzJkQ1FVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVDBGQlR5eERRVUZETzJGQlFVVTdXVUZETTBRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1dVRkRkRU1zU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRGFrSXNUVUZCVFN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU53UWl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzJkQ1FVTjRRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVWQlFVVTdiMEpCUTJ4Q0xFbEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZPM2RDUVVOcVJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0eFFrRkRZanQ1UWtGQlRUdDNRa0ZEU0N4VlFVRlZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzNGQ1FVTTFRanRuUWtGRFRDeERRVUZETEVOQlFVTTdaMEpCUTBZc1VVRkJVU3hGUVVGRkxFTkJRVU03V1VGRFppeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFpRVU5xUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03V1VGRGJrSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRM3BETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRaUVVOdVFpeFBRVUZQTEVkQlFVY3NRMEZCUXp0UlFVTm1MRU5CUVVNN1MwRkJRVHREUVVOS08wRkJha1JFTEc5Q1FXbEVRenRCUVZkRUxGTkJRV2RDTEZsQlFWa3NRMEZCU1N4TFFVRnhReXhGUVVGRkxHZENRVUZyUWl4RlFVRkZPMGxCUTNaR0xFOUJRVThzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRXRCUVd0Q0xFVkJRVVVzU1VGQkswSXNSVUZCWjBJc1JVRkJSU3hEUVVWMFJpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1VVRkJXU3hGUVVGRkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVjc1JVRkJSU3hGUVVGRk8xRkJSWFJGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrSXNUMEZCVHl4UlFVRlJMRU5CUVVNN1NVRkRjRUlzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZEU0N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVU5xUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVZaRUxHOURRVlZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFRpbWVkUHJvbWlzZXNfMSA9IHJlcXVpcmUoXCIuL1RpbWVkUHJvbWlzZXNcIik7XG5leHBvcnRzLnRpbWVvdXQgPSBUaW1lZFByb21pc2VzXzEudGltZW91dDtcbmV4cG9ydHMuZGVsYXkgPSBUaW1lZFByb21pc2VzXzEuZGVsYXk7XG52YXIgVGltZWRQcm9taXNlc18yID0gcmVxdWlyZShcIi4vVGltZWRQcm9taXNlc1wiKTtcbmV4cG9ydHMuUGFjZSA9IFRpbWVkUHJvbWlzZXNfMi5QYWNlO1xudmFyIFRpbWVkUHJvbWlzZXNfMyA9IHJlcXVpcmUoXCIuL1RpbWVkUHJvbWlzZXNcIik7XG5leHBvcnRzLnByb21pc2VDaGFpbiA9IFRpbWVkUHJvbWlzZXNfMy5wcm9taXNlQ2hhaW47XG52YXIgQ2hlY2tzdW1fMSA9IHJlcXVpcmUoXCIuL0NoZWNrc3VtXCIpO1xuZXhwb3J0cy5zaG9ydENoZWNrU3VtID0gQ2hlY2tzdW1fMS5zaG9ydENoZWNrU3VtO1xudmFyIERhdGVfMSA9IHJlcXVpcmUoXCIuL0RhdGVcIik7XG5leHBvcnRzLmRhdGUgPSBEYXRlXzEuZGF0ZTtcbmV4cG9ydHMubXMgPSBEYXRlXzEubXM7XG52YXIgTnVtYmVyXzEgPSByZXF1aXJlKFwiLi9OdW1iZXJcIik7XG5leHBvcnRzLnJvdW5kID0gTnVtYmVyXzEucm91bmQ7XG52YXIgbG9nXzEgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5leHBvcnRzLmxvZyA9IGxvZ18xLmxvZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hwUkVGQmRVUTdRVUZCT1VNc2EwTkJRVUVzVDBGQlR5eERRVUZCTzBGQlFVVXNaME5CUVVFc1MwRkJTeXhEUVVGQk8wRkJRM1pDTEdsRVFVRjFSRHRCUVVFNVF5d3JRa0ZCUVN4SlFVRkpMRU5CUVVFN1FVRkRZaXhwUkVGQmRVUTdRVUZCT1VNc2RVTkJRVUVzV1VGQldTeERRVUZCTzBGQlEzSkNMSFZEUVVGclJEdEJRVUY2UXl4dFEwRkJRU3hoUVVGaExFTkJRVUU3UVVGRGRFSXNLMEpCUVRoRE8wRkJRWEpETEhOQ1FVRkJMRWxCUVVrc1EwRkJRVHRCUVVGRkxHOUNRVUZCTEVWQlFVVXNRMEZCUVR0QlFVTnFRaXh0UTBGQlowUTdRVUZCZGtNc2VVSkJRVUVzUzBGQlN5eERRVUZCTzBGQlEyUXNOa0pCUVRaRE8wRkJRWEJETEc5Q1FVRkJMRWRCUVVjc1EwRkJRU0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERhdGVfMSA9IHJlcXVpcmUoXCIuL0RhdGVcIik7XG5jb25zdCBERUJVRyA9IFN5bWJvbCgnREVCVUcnKTtcbmNvbnN0IElORk8gPSBTeW1ib2woJ0lORk8nKTtcbmNvbnN0IFdBUk4gPSBTeW1ib2woJ1dBUk4nKTtcbmNvbnN0IEVSUk9SID0gU3ltYm9sKCdFUlJPUicpO1xubGV0IGdMb2dGaWxlO1xuY29uc3QgZ0xldmVscyA9IHtcbiAgICBbREVCVUddOiB7IGltcG9ydGFuY2U6IDAsIHN5bTogREVCVUcsIGRlc2M6ICdERUJVRycgfSxcbiAgICBbSU5GT106IHsgaW1wb3J0YW5jZTogMSwgc3ltOiBJTkZPLCBkZXNjOiAnSU5GTycgfSxcbiAgICBbV0FSTl06IHsgaW1wb3J0YW5jZTogMiwgc3ltOiBXQVJOLCBkZXNjOiAnV0FSTicgfSxcbiAgICBbRVJST1JdOiB7IGltcG9ydGFuY2U6IDMsIHN5bTogRVJST1IsIGRlc2M6ICdFUlJPUicgfVxufTtcbmxldCBnR2xvYmFsTGV2ZWwgPSBnTGV2ZWxzW0lORk9dO1xuY29uc3QgZGVmRGF0ZUZvcm1hdCA9ICclWVlZWSVNTSVERCAlaGg6JW1tOiVzcy4lampqJztcbmxldCBnRGF0ZUZvcm1hdCA9IGRlZkRhdGVGb3JtYXQ7XG5sZXQgZ0NvbG9ycyA9IGZhbHNlO1xuY29uc3QgY29sb3IgPSB7XG4gICAgcmVkOiAnXFx4MWJbMzFtJyxcbiAgICB5ZWxsb3c6ICdcXHgxYlszM20nLFxuICAgIGJsdWU6ICdcXHgxYlszNm0nLFxuICAgIGdyZWVuOiAnXFx4MWJbMzJtJyxcbiAgICBib2xkOiAnXFx4MWJbMW0nLFxuICAgIGNsZWFyOiAnXFx4MWJbMG0nXG59O1xuZXhwb3J0cy5sb2cgPSBjcmVhdGUoJycsIChmaWxlbmFtZSwgbXNnKSA9PiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKSwgKHBhdGgpID0+IFByb21pc2UucmVzb2x2ZShwYXRoLmluZGV4T2YoJy8nKSA+PSAwID8gZmFsc2UgOiB0cnVlKSk7XG5mdW5jdGlvbiBjcmVhdGUoX3ByZWZpeCwgbG9nVG9GaWxlLCBwYXRoRXhpc3RzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgICAgbGV2ZWw6IHVuZGVmaW5lZCxcbiAgICAgICAgcHJlZml4OiBfcHJlZml4LFxuICAgICAgICBsb2dUb0ZpbGU6IGxvZ1RvRmlsZSxcbiAgICAgICAgcGF0aEV4aXN0czogcGF0aEV4aXN0c1xuICAgIH07XG4gICAgZnVuY3Rpb24gbGV2ZWwobmV3TGV2ZWxTeW0sIHNldEdsb2JhbExldmVsID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IG5ld0xldmVsID0gZ0xldmVsc1tuZXdMZXZlbFN5bV0gfHwgZ0dsb2JhbExldmVsO1xuICAgICAgICBsZXQgb2xkTGV2ZWwgPSBjb250ZXh0LmxldmVsIHx8IGdHbG9iYWxMZXZlbDtcbiAgICAgICAgaWYgKG5ld0xldmVsU3ltID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0xldmVsID0gb2xkTGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3TGV2ZWxTeW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRleHQubGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ0xldmVsc1tuZXdMZXZlbFN5bV0pIHtcbiAgICAgICAgICAgIGlmIChzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICAgICAgICAgIGdHbG9iYWxMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbXNnID0gYG5ldyAke3NldEdsb2JhbExldmVsID8gJ2dsb2JhbCcgOiBjb250ZXh0LnByZWZpeH0gbG9nIGxldmVsICR7bmV3TGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSAod2FzICR7b2xkTGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSlgO1xuICAgICAgICAgICAgb3V0KChuZXdMZXZlbC5zeW0gPT09IG9sZExldmVsLnN5bSkgPyBERUJVRyA6IElORk8sIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvdXQoRVJST1IsIGB1bmtvd24gbGV2ZWwgJHtuZXdMZXZlbFN5bS50b1N0cmluZygpfTsgbG9nIGxldmVsIHJlbWFpbnMgJHtvbGRMZXZlbC5zeW0udG9TdHJpbmcoKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TGV2ZWwuc3ltO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWJ1Zyhtc2csIGxvZzJGaWxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgb3V0KERFQlVHLCBtc2csIGxvZzJGaWxlKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluZm8obXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIG91dChJTkZPLCBtc2csIGxvZzJGaWxlKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdhcm4obXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIG91dChXQVJOLCBtc2csIGxvZzJGaWxlKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVycm9yKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCBvdXQoRVJST1IsIG1zZywgbG9nMkZpbGUpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9ybWF0KGZtdFN0cikge1xuICAgICAgICBpZiAoZm10U3RyID09PSBudWxsKSB7XG4gICAgICAgICAgICBnRGF0ZUZvcm1hdCA9IGRlZkRhdGVGb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm10U3RyKSB7XG4gICAgICAgICAgICBnRGF0ZUZvcm1hdCA9IGZtdFN0cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ0RhdGVGb3JtYXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByZWZpeChwcmYpIHtcbiAgICAgICAgaWYgKHByZikge1xuICAgICAgICAgICAgY29udGV4dC5wcmVmaXggPSBwcmY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlZml4O1xuICAgIH1cbiAgICBmdW5jdGlvbiBvdXQobHZsLCBtc2csIGxvZzJGaWxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY29sb3JzID0geyBbRVJST1JdOiBjb2xvci5yZWQgKyBjb2xvci5ib2xkLCBbV0FSTl06IGNvbG9yLnllbGxvdyArIGNvbG9yLmJvbGQsIFtERUJVR106IGNvbG9yLmJsdWUsIFtJTkZPXTogY29sb3IuZ3JlZW4gfTtcbiAgICAgICAgICAgIGxldCBkZXNjID0gZ0xldmVsc1tsdmxdO1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyTGV2ZWwgPSBjb250ZXh0LmxldmVsIHx8IGdHbG9iYWxMZXZlbDtcbiAgICAgICAgICAgIGlmIChkZXNjLmltcG9ydGFuY2UgPj0gZmlsdGVyTGV2ZWwuaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHIgPSBEYXRlXzEuZGF0ZShnRGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmUgPSAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpID8gbXNnIDogaW5zcGVjdChtc2csIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvZ0xpbmUgPSBgJHtkYXRlU3RyfSAke2NvbnRleHQucHJlZml4fSAke2Rlc2MuZGVzY30gJHtsaW5lfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JMaW5lID0gYCR7Y29sb3JzW2x2bF0gfHwgJyd9ICR7ZGF0ZVN0cn0gJHtjb250ZXh0LnByZWZpeH0gJHtkZXNjLmRlc2N9ICR7Y29sb3IuY2xlYXJ9ICR7bGluZX1gO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdDb2xvcnMgPyBjb2xvckxpbmUgOiBsb2dMaW5lKTtcbiAgICAgICAgICAgICAgICBpZiAobXNnICYmIG1zZy5zdGFjaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cuc3RhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ0xvZ0ZpbGUgJiYgbG9nMkZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNvbnRleHQubG9nVG9GaWxlKERhdGVfMS5kYXRlKGdMb2dGaWxlKSwgbG9nTGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvZ0ZpbGUoZmlsZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKGZpbGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBnTG9nRmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgaW5mbyhcImRpc2FibGluZyBsb2dmaWxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVfMS5kYXRlKGdMb2dGaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbGUuaW5kZXhPZignLycpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY29udGV4dC5wYXRoRXhpc3RzKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChleGlzdHMpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdMb2dGaWxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHdhcm4oYHBhdGggJyR7ZmlsZX0nIGRvZXNuJ3QgZXhpc3RzOyBsb2dmaWxlIGRpc2FibGVkYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ0xvZ0ZpbGUgPSBmaWxlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgaW5mbyhcIm5vdyBsb2dnaW5nIHRvIGZpbGUgXCIgKyBEYXRlXzEuZGF0ZShmaWxlKSk7XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdMb2dGaWxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgZXJyb3IoYGNoZWNraW5nIHBhdGggJHtmaWxlfTsgbG9nZmlsZSBkaXNhYmxlZGApO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbGUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZmlsZSA9ICdsb2ctJVlZWVktJU1NLSVERC50eHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnTG9nRmlsZSA9IGZpbGU7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgaW5mbyhnTG9nRmlsZSA/IGBub3cgbG9nZ2luZyB0byBmaWxlICR7RGF0ZV8xLmRhdGUoZ0xvZ0ZpbGUpfWAgOiAnbG9nZmlsZSBkaXNiYWxlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29uZmlnKGNmZykge1xuICAgICAgICBpZiAoY2ZnLmNvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnQ29sb3JzID0gY2ZnLmNvbG9ycztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3JtYXQoY2ZnLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5sZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXZlbChjZmcubGV2ZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluc3BlY3QobXNnLCBkZXB0aCA9IDEsIGluZGVudCA9ICcnKSB7XG4gICAgICAgIGlmIChkZXB0aCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGVwdGggPSA5OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuICdmdW5jdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCcke21zZ30nYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKG1zZy5sZW5ndGggPT09IHVuZGVmaW5lZCkgPyAney4uLn0nIDogJ1suLi5dJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFske21zZy5tYXAoKGUpID0+IChlID09PSB1bmRlZmluZWQpID8gJycgOiBpbnNwZWN0KGUsIGRlcHRoIC0gMSwgaW5kZW50KSkuam9pbignLCAnKX1dYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAne1xcbicgKyBPYmplY3Qua2V5cyhtc2cpLm1hcChrID0+IGAgICAke2luZGVudH0ke2t9OiAke2luc3BlY3QobXNnW2tdLCBkZXB0aCAtIDEsIGluZGVudCArICcgICAnKX1gKS5qb2luKCcsXFxuJykgKyBgXFxuJHtpbmRlbnR9fWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1zZy50b1N0cmluZygpO1xuICAgIH1cbiAgICBjb25zdCBuZXdMb2cgPSBmdW5jdGlvbiAocHJlZml4LCBsb2dUb0ZpbGUgPSBjb250ZXh0LmxvZ1RvRmlsZSwgcGF0aEV4aXN0cyA9IGNvbnRleHQucGF0aEV4aXN0cykge1xuICAgICAgICByZXR1cm4gY3JlYXRlKHByZWZpeCwgbG9nVG9GaWxlLCBwYXRoRXhpc3RzKTtcbiAgICB9O1xuICAgIG5ld0xvZy5ERUJVRyA9IERFQlVHO1xuICAgIG5ld0xvZy5JTkZPID0gSU5GTztcbiAgICBuZXdMb2cuV0FSTiA9IFdBUk47XG4gICAgbmV3TG9nLkVSUk9SID0gRVJST1I7XG4gICAgbmV3TG9nLmxldmVsID0gbGV2ZWw7XG4gICAgbmV3TG9nLmRlYnVnID0gZGVidWc7XG4gICAgbmV3TG9nLmluZm8gPSBpbmZvO1xuICAgIG5ld0xvZy53YXJuID0gd2FybjtcbiAgICBuZXdMb2cuZXJyb3IgPSBlcnJvcjtcbiAgICBuZXdMb2cuZm9ybWF0ID0gZm9ybWF0O1xuICAgIG5ld0xvZy5wcmVmaXggPSBwcmVmaXg7XG4gICAgbmV3TG9nLm91dCA9IG91dDtcbiAgICBuZXdMb2cubG9nRmlsZSA9IGxvZ0ZpbGU7XG4gICAgbmV3TG9nLmNvbmZpZyA9IGNvbmZpZztcbiAgICBuZXdMb2cuaW5zcGVjdCA9IGluc3BlY3Q7XG4gICAgcmV0dXJuIG5ld0xvZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJ4dlp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMEZCSzBWQkxHbERRVUZyUXp0QlFVZHNReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1FVRkhPVUlzVFVGQlRTeEpRVUZKTEVkQlFVc3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJSemxDTEUxQlFVMHNTVUZCU1N4SFFVRkxMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVWM1UWl4TlFVRk5MRXRCUVVzc1IwRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdRVUZITDBJc1NVRkJTU3hSUVVGblFpeERRVUZETzBGQlUzSkNMRTFCUVUwc1QwRkJUeXhIUVVGSE8wbEJRMW9zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCU3l4RlFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRE8wbEJRM1JFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVUwc1JVRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVjc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlF6dEpRVU55UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGTkxFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGSExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVTTdTVUZEY2tRc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlN5eEZRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkRPME5CUTNwRUxFTkJRVU03UVVGSFJpeEpRVUZKTEZsQlFWa3NSMEZCWVN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGSE0wTXNUVUZCVFN4aFFVRmhMRWRCUVVjc09FSkJRVGhDTEVOQlFVTTdRVUZEY2tRc1NVRkJTU3hYUVVGWExFZEJRVThzWVVGQllTeERRVUZETzBGQlIzQkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dEJRVWR3UWl4TlFVRk5MRXRCUVVzc1IwRkJSenRKUVVOV0xFZEJRVWNzUlVGQlN5eFZRVUZWTzBsQlEyeENMRTFCUVUwc1JVRkJSU3hWUVVGVk8wbEJRMnhDTEVsQlFVa3NSVUZCU1N4VlFVRlZPMGxCUTJ4Q0xFdEJRVXNzUlVGQlJ5eFZRVUZWTzBsQlEyeENMRWxCUVVrc1JVRkJTU3hUUVVGVE8wbEJRMnBDTEV0QlFVc3NSVUZCUnl4VFFVRlRPME5CUTNCQ0xFTkJRVU03UVVGeFNWY3NVVUZCUVN4SFFVRkhMRWRCUVZjc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGRGFFTXNRMEZCUXl4UlFVRmxMRVZCUVVVc1IwRkJWU3hGUVVGclFpeEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUlVGRk0wVXNRMEZCUXl4SlFVRlhMRVZCUVcxQ0xFVkJRVVVzUTBGQlFTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVVXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVTjJSaXhEUVVGRE8wRkJSVVlzVTBGQlV5eE5RVUZOTEVOQlFVTXNUMEZCWXl4RlFVRkZMRk5CUVdsQ0xFVkJRVVVzVlVGQmFVSTdTVUZEYUVVc1RVRkJUU3hQUVVGUExFZEJRVWM3VVVGRFdpeExRVUZMTEVWQlFXdENMRk5CUVZNN1VVRkRhRU1zVFVGQlRTeEZRVUZOTEU5QlFVODdVVUZEYmtJc1UwRkJVeXhGUVVGWkxGTkJRVk03VVVGRE9VSXNWVUZCVlN4RlFVRlZMRlZCUVZVN1MwRkRha01zUTBGQlF6dEpRVVZHTEZOQlFWTXNTMEZCU3l4RFFVRkRMRmRCUVcxQ0xFVkJRVVVzWTBGQll5eEhRVUZETEV0QlFVczdVVUZEY0VRc1NVRkJTU3hSUVVGUkxFZEJRVWNzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRmxCUVZrc1EwRkJRenRSUVVOd1JDeEpRVUZKTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNc1MwRkJTeXhKUVVGSkxGbEJRVmtzUTBGQlF6dFJRVU0zUXl4SlFVRkpMRmRCUVZjc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRE0wSXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRUUVVOMlFqdGhRVUZOTEVsQlFVa3NWMEZCVnl4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVNM1FpeFBRVUZQTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVNM1FqdGhRVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xbEJRemRDTEVsQlFVa3NZMEZCWXl4RlFVRkZPMmRDUVVGRkxGbEJRVmtzUjBGQlJ5eFJRVUZSTEVOQlFVTTdZVUZCUlR0cFFrRkROVUk3WjBKQlFVVXNUMEZCVHl4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU03WVVGQlJUdFpRVU5xUkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhQUVVGUExHTkJRV01zUTBGQlFTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeGpRVUZqTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxGTkJRVk1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhEUVVGRE8xbEJRemRKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJRU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVNeFJEdGhRVUZOTzFsQlEwZ3NSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3huUWtGQlowSXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3gxUWtGQmRVSXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVjN1VVRkRSQ3hQUVVGUExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTTdTVUZEZUVJc1EwRkJRenRKUVVWRUxGTkJRV1VzUzBGQlN5eERRVUZETEVkQlFVOHNSVUZCUlN4UlFVRlJMRWRCUVVNc1NVRkJTVHM0UkVGQmIwSXNUMEZCVHl4TlFVRk5MRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVGQk8wbEJRM2hITEZOQlFXVXNTVUZCU1N4RFFVRkRMRWRCUVU4c1JVRkJSU3hSUVVGUkxFZEJRVU1zU1VGQlNUczRSRUZCYjBJc1QwRkJUeXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVUZCTzBsQlEzUkhMRk5CUVdVc1NVRkJTU3hEUVVGRExFZEJRVThzUlVGQlJTeFJRVUZSTEVkQlFVTXNTVUZCU1RzNFJFRkJiMElzVDBGQlR5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVRkJPMGxCUTNSSExGTkJRV1VzUzBGQlN5eERRVUZETEVkQlFVOHNSVUZCUlN4UlFVRlJMRWRCUVVNc1NVRkJTVHM0UkVGQmIwSXNUMEZCVHl4TlFVRk5MRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVGQk8wbEJSWGhITEZOQlFWTXNUVUZCVFN4RFFVRkRMRTFCUVdNN1VVRkRNVUlzU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUVVVc1YwRkJWeXhIUVVGSExHRkJRV0VzUTBGQlF6dFRRVUZGTzJGQlEyaEVMRWxCUVVrc1RVRkJUU3hGUVVGTk8xbEJRVVVzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0VFFVRkZPMUZCUXpsRExFOUJRVThzVjBGQlZ5eERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkZSQ3hUUVVGVExFMUJRVTBzUTBGQlF5eEhRVUZYTzFGQlEzWkNMRWxCUVVrc1IwRkJSeXhGUVVGRk8xbEJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNN1UwRkJSVHRSUVVOc1F5eFBRVUZQTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFTEZOQlFXVXNSMEZCUnl4RFFVRkRMRWRCUVZVc1JVRkJSU3hIUVVGUExFVkJRVVVzVVVGQlVTeEhRVUZETEVsQlFVazdPMWxCUTJwRUxFMUJRVTBzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eEhRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJRelZJTEVsQlFVa3NTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU40UWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eEpRVUZKTEZsQlFWa3NRMEZCUXp0WlFVTnNSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVsQlFVa3NWMEZCVnl4RFFVRkRMRlZCUVZVc1JVRkJSVHRuUWtGRE0wTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1YwRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzJkQ1FVTnNReXhKUVVGSkxFbEJRVWtzUjBGQlJ5eERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpWRUxFMUJRVTBzVDBGQlR5eEhRVUYzUWl4SFFVRkhMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEzcEdMRTFCUVUwc1UwRkJVeXhIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkZMRVZCUVVVc1NVRkJTU3hQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJRM2hITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGQkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8yZENRVU14UXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTzI5Q1FVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmxDUVVGRk8yZENRVU5xUkN4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFVkJRVVU3YjBKQlEzUkNMRTlCUVU4c1RVRkJUU3hQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEZkQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dHBRa0ZETTBRN1lVRkRTanRaUVVORUxFOUJRVThzVTBGQlV5eERRVUZETzFGQlEzSkNMRU5CUVVNN1MwRkJRVHRKUVVWRUxGTkJRV1VzVDBGQlR5eERRVUZETEVsQlFWazdPMWxCUXk5Q0xFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NSVUZCUlR0blFrRkRaaXhSUVVGUkxFZEJRVWNzVTBGQlV5eERRVUZETzJkQ1FVTnlRaXhQUVVGUExFMUJRVTBzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03WVVGRE1VTTdhVUpCUVUwc1NVRkJTU3hKUVVGSkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTXpRaXhQUVVGUExGZEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTjZRanRwUWtGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVVVzUTBGQlF5eEZRVUZGTzJkQ1FVTTNRaXhQUVVGUExFMUJRVTBzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNN2NVSkJRMmhETEVsQlFVa3NRMEZCUXl4RFFVRlBMRTFCUVdNc1JVRkJSU3hGUVVGRk8yOUNRVU16UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8zZENRVU5VTEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNN2QwSkJRM0pDTEU5QlFVOHNUVUZCVFN4SlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGSkxHOURRVUZ2UXl4RFFVRkRMRU5CUVVNN2NVSkJRM2hGTzI5Q1FVTkVMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03YjBKQlEyaENMRTlCUVU4c1RVRkJUU3hKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1YwRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpORUxFTkJRVU1zUTBGQlFTeERRVUZETzNGQ1FVTkVMRXRCUVVzc1EwRkJReXhIUVVGVExFVkJRVVU3YjBKQlEyUXNVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJRenR2UWtGRGNrSXNUMEZCVHl4TlFVRk5MRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNTVUZCU1N4dlFrRkJiMElzUTBGQlF5eERRVUZETzJkQ1FVTnNSU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETzJGQlExWTdhVUpCUVUwc1NVRkJTU3hKUVVGSkxFdEJRVXNzUlVGQlJTeEZRVUZGTzJkQ1FVTndRaXhKUVVGSkxFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN1lVRkRiRU03YVVKQlFVMDdZVUZEVGp0WlFVTkVMRkZCUVZFc1IwRkJReXhKUVVGSkxFTkJRVU03V1VGRFpDeFBRVUZQTEUxQlFVMHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRU3hEUVVGRExFTkJRVU1zZFVKQlFYVkNMRmRCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzFGQlF6bEdMRU5CUVVNN1MwRkJRVHRKUVVWRUxGTkJRVk1zVFVGQlRTeERRVUZETEVkQlFYRkVPMUZCUTJwRkxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRVZCUVVVN1dVRkJSU3hQUVVGUExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0VFFVRkZPMUZCUTNKRUxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRVZCUVVVN1dVRkJSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUVVVN1VVRkRia1FzU1VGQlNTeEhRVUZITEVOQlFVTXNTMEZCU3l4TFFVRkhMRk5CUVZNc1JVRkJSenRaUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkJSVHRKUVVOeVJDeERRVUZETzBsQlJVUXNVMEZCVXl4UFFVRlBMRU5CUVVNc1IwRkJUeXhGUVVGRkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4SFFVRkRMRVZCUVVVN1VVRkRlRU1zU1VGQlNTeExRVUZMTEV0QlFVY3NTVUZCU1N4RlFVRm5RanRaUVVGRkxFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVMEZCUlR0UlFVTm9SQ3hKUVVGSkxFZEJRVWNzUzBGQlN5eEpRVUZKTEVWQlFXZENPMWxCUVVVc1QwRkJUeXhOUVVGTkxFTkJRVU03VTBGQlJUdFJRVU5zUkN4SlFVRkpMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVmM3V1VGQlJTeFBRVUZQTEZkQlFWY3NRMEZCUXp0VFFVRkZPMUZCUTNaRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NWVUZCVlN4RlFVRkhPMWxCUVVVc1QwRkJUeXhWUVVGVkxFTkJRVU03VTBGQlJUdFJRVU4wUkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlN6dFpRVUZGTEU5QlFVOHNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJRenRUUVVGRk8xRkJRM1JFTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hGUVVGTE8xbEJRelZDTEVsQlFVa3NTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGQlJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1MwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03WVVGQlJUdFpRVU53UlN4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVRkZMRTlCUVU4c1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCU3l4RlFVRkRMRVZCUVVVc1EwRkJRU3hEUVVGRExFTkJRVU1zUzBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlFTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dGhRVUZGTzFsQlF6VklMRTlCUVU4c1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1EwRkJReXhMUVVOeVJDeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4SFFVRkRMRXRCUVVzc1EwRkRla01zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFdEJRVXNzVFVGQlRTeEhRVUZITEVOQlFVTTdVMEZEY0VNN1VVRkRSQ3hQUVVGUExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJSVVFzVFVGQlRTeE5RVUZOTEVkQlFVOHNWVUZCVXl4TlFVRmhMRVZCUVVVc1dVRkJhMElzVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4aFFVRnJRaXhQUVVGUExFTkJRVU1zVlVGQlZUdFJRVU5vU0N4UFFVRlBMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMGxCUTJwRUxFTkJRVU1zUTBGQlF6dEpRVU5HTEUxQlFVMHNRMEZCUXl4TFFVRkxMRWRCUVUwc1MwRkJTeXhEUVVGRE8wbEJRM2hDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVU4c1NVRkJTU3hEUVVGRE8wbEJRM1pDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVU4c1NVRkJTU3hEUVVGRE8wbEJRM1pDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRWRCUVUwc1MwRkJTeXhEUVVGRE8wbEJRM2hDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRWRCUVUwc1MwRkJTeXhEUVVGRE8wbEJRM2hDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRWRCUVUwc1MwRkJTeXhEUVVGRE8wbEJRM2hDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVU4c1NVRkJTU3hEUVVGRE8wbEJRM1pDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVU4c1NVRkJTU3hEUVVGRE8wbEJRM1pDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRWRCUVUwc1MwRkJTeXhEUVVGRE8wbEJRM2hDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRWRCUVVzc1RVRkJUU3hEUVVGRE8wbEJRM3BDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRWRCUVVzc1RVRkJUU3hEUVVGRE8wbEJRM3BDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVZFc1IwRkJSeXhEUVVGRE8wbEJRM1JDTEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVrc1QwRkJUeXhEUVVGRE8wbEJRekZDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRWRCUVVzc1RVRkJUU3hEUVVGRE8wbEJRM3BDTEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVrc1QwRkJUeXhEUVVGRE8wbEJRekZDTEU5QlFVOHNUVUZCVFN4RFFVRkRPMEZCUTJ4Q0xFTkJRVU1pZlE9PSJdLCJzb3VyY2VSb290IjoiIn0=