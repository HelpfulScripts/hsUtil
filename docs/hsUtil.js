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
    function inspect(msg, depth = 1, indent = '', colors) {
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
                if (msg.length !== undefined) {
                    return `[${msg.map((e) => (e === undefined) ? '' : _inspect(e, depth - 1, level + 1, currIndent)).join(', ')}]`;
                }
                const c = colors ? `<b><span style='color:${colors[level % colors.length]};'>` : '';
                const prefix = `${c}${currIndent}${indent}`;
                const postfix = colors ? '</span></b>' : '';
                return '{\n' + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${_inspect(msg[k], depth - 1, level + 1, currIndent + indent)}`).join(',\n') + `\n${currIndent}}`;
            }
            return msg.toString();
        }
        if (colors) {
            indent = indent.replace(/ /g, '&nbsp;');
        }
        return _inspect(msg, depth === null ? 999 : depth, 0, '');
    }
    const newLog = (prefix, logToFile = context.logToFile, pathExists = context.pathExists) => create(prefix, logToFile, pathExists);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBK0VBLGlDQUFrQztBQUdsQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHOUIsTUFBTSxJQUFJLEdBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzlCLE1BQU0sSUFBSSxHQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUc5QixNQUFNLEtBQUssR0FBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHL0IsSUFBSSxRQUFnQixDQUFDO0FBU3JCLE1BQU0sT0FBTyxHQUFHO0lBQ1osQ0FBQyxLQUFLLENBQUMsRUFBSyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO0lBQ3RELENBQUMsSUFBSSxDQUFDLEVBQU0sRUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUNyRCxDQUFDLElBQUksQ0FBQyxFQUFNLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDckQsQ0FBQyxLQUFLLENBQUMsRUFBSyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO0NBQ3pELENBQUM7QUFHRixJQUFJLFlBQVksR0FBYSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHM0MsTUFBTSxhQUFhLEdBQUcsOEJBQThCLENBQUM7QUFDckQsSUFBSSxXQUFXLEdBQU8sYUFBYSxDQUFDO0FBR3BDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztBQUdwQixNQUFNLEtBQUssR0FBRztJQUNWLEdBQUcsRUFBSyxVQUFV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QUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV2SixNQUFNLENBQUMsS0FBSyxHQUFNLEtBQUssQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxHQUFPLElBQUksQ0FBQztJQUN2QixNQUFNLENBQUMsSUFBSSxHQUFPLElBQUksQ0FBQztJQUN2QixNQUFNLENBQUMsS0FBSyxHQUFNLEtBQUssQ0FBQztJQUN4QixNQUFNLENBQUMsS0FBSyxHQUFNLEtBQUssQ0FBQztJQUN4QixNQUFNLENBQUMsS0FBSyxHQUFNLEtBQUssQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxHQUFPLElBQUksQ0FBQztJQUN2QixNQUFNLENBQUMsSUFBSSxHQUFPLElBQUksQ0FBQztJQUN2QixNQUFNLENBQUMsS0FBSyxHQUFNLEtBQUssQ0FBQztJQUN4QixNQUFNLENBQUMsTUFBTSxHQUFLLE1BQU0sQ0FBQztJQUN6QixNQUFNLENBQUMsTUFBTSxHQUFLLE1BQU0sQ0FBQztJQUN6QixNQUFNLENBQUMsR0FBRyxHQUFRLEdBQUcsQ0FBQztJQUN0QixNQUFNLENBQUMsT0FBTyxHQUFJLE9BQU8sQ0FBQztJQUMxQixNQUFNLENBQUMsTUFBTSxHQUFLLE1BQU0sQ0FBQztJQUN6QixNQUFNLENBQUMsT0FBTyxHQUFJLE9BQU8sQ0FBQztJQUMxQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIn0=

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc1V0aWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL0NoZWNrc3VtLmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9EYXRlLmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL1RpbWVkUHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vaHNVdGlsLy4vYmluL2luZGV4LmpzIiwid2VicGFjazovL2hzVXRpbC8uL2Jpbi9sb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCttQjs7Ozs7Ozs7Ozs7O0FD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REFBMEQsSUFBSTtBQUM5RDtBQUNBO0FBQ0EsK0JBQStCLGtHQUFrRztBQUNqSTtBQUNBLDREQUE0RCwrQkFBK0I7QUFDM0Ysa0NBQWtDLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTztBQUMxRDtBQUNBLHlCQUF5QixtQ0FBbUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLElBQUksNERBQTRELHNCQUFzQixZQUFZO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1dVUiLCJmaWxlIjoiaHNVdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iaW4vaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHNob3J0Q2hlY2tTdW0ocykge1xuICAgIHZhciBjaGsgPSAweDEyMzQ1Njc4O1xuICAgIHZhciBsZW4gPSBzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNoayArPSAocy5jaGFyQ29kZUF0KGkpICogKGkgKyAxKSk7XG4gICAgfVxuICAgIHJldHVybiAoY2hrICYgMHhmZmZmZmZmZikudG9TdHJpbmcoMTYpO1xufVxuZXhwb3J0cy5zaG9ydENoZWNrU3VtID0gc2hvcnRDaGVja1N1bTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaGxZMnR6ZFcwdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZRMmhsWTJ0emRXMHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUlF5eFRRVUZuUWl4aFFVRmhMRU5CUVVNc1EwRkJVVHRKUVVOdVF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkRja0lzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOdVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMUZCUXpGQ0xFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOMFF6dEpRVU5FTEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUXpGRExFTkJRVU03UVVGUVJDeHpRMEZQUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbW9udGhTdHIgPSBbXG4gICAgWydKYW4nLCAnSmFudWFyeSddLCBbJ0ZlYicsICdGZWJydWFyeSddLCBbJ01hcicsICdNYXJjaCddLCBbJ0FwcicsICdBcHJpbCddLCBbJ01heScsICdNYXknXSwgWydKdW4nLCAnSnVuZSddLFxuICAgIFsnSnVsJywgJ0p1bHknXSwgWydBdWcnLCAnQXVndXN0J10sIFsnU2VwJywgJ1NlcHRlbWJlciddLCBbJ09jdCcsICdPY3RvYmVyJ10sIFsnTm92JywgJ05vdmVtYmVyJ10sIFsnRGVjJywgJ0RlY2VtYmVyJ11cbl07XG5jb25zdCBkYXlTdHIgPSBbXG4gICAgWydTdW4nLCAnU3VuZGF5J10sIFsnTW9uJywgJ01vbmRheSddLCBbJ1R1ZScsICdUdWVzZGF5J10sIFsnV2VkJywgJ1dlZG5lc2RheSddLCBbJ1RodScsICdUaHVyc2RheSddLCBbJ0ZyaScsICdGcmlkYXknXSwgWydTYXQnLCAnU2F0dXJkYXknXVxuXTtcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXIsIGRpZ2l0cykge1xuICAgIHZhciByID0gJycgKyBudW1iZXI7XG4gICAgd2hpbGUgKHIubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgICAgIHIgPSBcIjBcIiArIHI7XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuZnVuY3Rpb24gZGF0ZShmb3JtYXRTdHJpbmcsIGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZm9ybWF0U3RyaW5nICE9PSAnc3RyaW5nJyB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpID9cbiAgICAgICAgJ2ludmFsaWQnIDpcbiAgICAgICAgZm9ybWF0U3RyaW5nXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZWVkvZywgJycgKyBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZL2csICcnICsgKGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTS9nLCAnJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRERERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJURERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREL2csIGZvcm1hdE51bWJlcihkYXRlLmdldERhdGUoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUQvZywgJycgKyBkYXRlLmdldERhdGUoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laGgvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWgvZywgJycgKyBkYXRlLmdldEhvdXJzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW1tL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW0vZywgJycgKyBkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lc3MvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lampqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAsIDEpKTtcbn1cbmV4cG9ydHMuZGF0ZSA9IGRhdGU7XG5leHBvcnRzLm1zID0ge1xuICAgIGZyb21NaW51dGVzOiAobWluKSA9PiAxMDAwICogNjAgKiBtaW4sXG4gICAgZnJvbUhvdXJzOiAoaCkgPT4gMTAwMCAqIDYwICogNjAgKiBoLFxuICAgIGZyb21EYXlzOiAoZCkgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIGQsXG4gICAgZnJvbVdlZWtzOiAodykgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcgKiB3LFxuICAgIHRvTWludXRlczogKG1zKSA9PiBtcyAvICgxMDAwICogNjApLFxuICAgIHRvSG91cnM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjApLFxuICAgIHRvRGF5czogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KSxcbiAgICB0b1dlZWtzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5RVlYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlpVRXNUVUZCVFN4UlFVRlJMRWRCUVVjN1NVRkRZaXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNN1NVRkROVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hEUVVGRE8wTkJRVU1zUTBGQlF6dEJRVWMxU0N4TlFVRk5MRTFCUVUwc1IwRkJSenRKUVVOWUxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXp0RFFVRkRMRU5CUVVNN1FVRkhNMGtzVTBGQlV5eFpRVUZaTEVOQlFVTXNUVUZCWVN4RlFVRkZMRTFCUVdFN1NVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOc1FpeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hGUVVGRk8xRkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkJSVHRKUVVNeFF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0QlFVTmlMRU5CUVVNN1FVRmpSQ3hUUVVGblFpeEpRVUZKTEVOQlFVTXNXVUZCYlVJc1JVRkJSU3hKUVVGSkxFZEJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdTVUZEY2tRc1QwRkJUeXhEUVVGRExFOUJRVThzV1VGQldTeExRVUZMTEZGQlFWRXNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxGTkJRVk1zUTBGQlFTeERRVUZETzFGQlExWXNXVUZCV1R0aFFVTlFMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeEhRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRoUVVONFF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRVZCUVVVc1IwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVNNVF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOb1JDeFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkpMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOb1JDeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM0JFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVrc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM2hETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOcVJDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkpMRVZCUVVVc1IwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdZVUZEYmtNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyeEVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWNzUlVGQlJTeEhRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRoUVVOdVF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRjRVFzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCU1N4RlFVRkZMRWRCUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzJGQlEzUkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53UkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE1VUXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4SFFVRkRMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU0xUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGSExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWRCUVVNc1IwRkJSeXhGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZWtVc1EwRkJRenRCUVhSQ1JDeHZRa0Z6UWtNN1FVRkhXU3hSUVVGQkxFVkJRVVVzUjBGQlJ6dEpRVU5rTEZkQlFWY3NSVUZCU3l4RFFVRkRMRWRCUVZVc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4SFFVRkhPMGxCUXpORExGTkJRVk1zUlVGQlR5eERRVUZETEVOQlFWRXNSVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXp0SlFVTTFReXhSUVVGUkxFVkJRVkVzUTBGQlF5eERRVUZSTEVWQlFVa3NSVUZCUlN4RFFVRkRMRWxCUVVrc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RFFVRkRPMGxCUXk5RExGTkJRVk1zUlVGQlR5eERRVUZETEVOQlFWRXNSVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1IwRkJReXhEUVVGRE8wbEJRMnBFTEZOQlFWTXNSVUZCVHl4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNMVF5eFBRVUZQTEVWQlFWTXNRMEZCUXl4RlFVRlRMRVZCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlF5eERRVUZETEVsQlFVa3NSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hEUVVGRE8wbEJReTlETEUxQlFVMHNSVUZCVlN4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeERRVUZETzBsQlEyeEVMRTlCUVU4c1JVRkJVeXhEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJRenREUVVOMlJDeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gcm91bmQobiwgZCA9IDApIHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMTAsIGQpO1xuICAgIGNvbnN0IHIgPSBNYXRoLnJvdW5kKG4gKiBmKSAvIGY7XG4gICAgcmV0dXJuICcnICsgcjtcbn1cbmV4cG9ydHMucm91bmQgPSByb3VuZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRuVnRZbVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwwNTFiV0psY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVmRETEZOQlFXZENMRXRCUVVzc1EwRkJReXhEUVVGUkxFVkJRVVVzUTBGQlF5eEhRVUZETEVOQlFVTTdTVUZQYUVNc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRE8wbEJRelZDTEU5QlFVOHNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJRenRCUVVObUxFTkJRVU03UVVGV1JDeHpRa0ZWUXlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiB0aW1lb3V0KG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgc2V0VGltZW91dChyZWplY3QsIG1zKTsgfSk7XG59XG5leHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0O1xuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcmVzb2x2ZShhcmdzKTsgfSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZXhwb3J0cy5kZWxheSA9IGRlbGF5O1xuY2xhc3MgUGFjZSB7XG4gICAgY29uc3RydWN0b3IocGFjZSA9IDEwMCwgbWF4Q29uY3VycmVudCA9IC0xKSB7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IC0xO1xuICAgICAgICB0aGlzLndhaXRVbnRpbCA9IDA7XG4gICAgICAgIHRoaXMud2FpdENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5iZWluZ0NhbGxlZCA9IDA7XG4gICAgICAgIHRoaXMucGFjZSA9IHBhY2UgKyA1O1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSBtYXhDb25jdXJyZW50O1xuICAgIH1cbiAgICBnZXRXYWl0Q291bnQoKSB7IHJldHVybiB0aGlzLndhaXRDb3VudDsgfVxuICAgIGdldENhbGxpbmdDb3VudCgpIHsgcmV0dXJuIHRoaXMuYmVpbmdDYWxsZWQ7IH1cbiAgICBhZGQoZm4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMud2FpdFVudGlsIDwgYWRkVGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FpdFVudGlsID0gYWRkVGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLndhaXRVbnRpbCAtIGFkZFRpbWU7XG4gICAgICAgICAgICB0aGlzLndhaXRVbnRpbCArPSB0aGlzLnBhY2UgKyA1O1xuICAgICAgICAgICAgdGhpcy53YWl0Q291bnQrKztcbiAgICAgICAgICAgIHlpZWxkIGRlbGF5KGRpZmYpKCk7XG4gICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0TG9vcCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4Q29uY3VycmVudCA8IDAgfHwgdGhpcy5iZWluZ0NhbGxlZCA8IHRoaXMubWF4Q29uY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh3YWl0TG9vcCwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB3YWl0TG9vcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLndhaXRDb3VudC0tO1xuICAgICAgICAgICAgdGhpcy5iZWluZ0NhbGxlZCsrO1xuICAgICAgICAgICAgY29uc3QgcmV0ID0geWllbGQgZm4oRGF0ZS5ub3coKSAtIGFkZFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5iZWluZ0NhbGxlZC0tO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5QYWNlID0gUGFjZTtcbmZ1bmN0aW9uIHByb21pc2VDaGFpbih0YXNrcywgaW5pdGlhbFJlc3VsdCA9IFtdKSB7XG4gICAgcmV0dXJuIHRhc2tzLnJlZHVjZSgoY2hhaW4sIHRhc2spID0+IGNoYWluLnRoZW4oKF9yZXN1bHRzKSA9PiBQcm9taXNlLnJlc29sdmUodGFzayhfcmVzdWx0cykpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgX3Jlc3VsdHMucHVzaChyKTtcbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH0pKSwgUHJvbWlzZS5yZXNvbHZlKGluaXRpYWxSZXN1bHQpKTtcbn1cbmV4cG9ydHMucHJvbWlzZUNoYWluID0gcHJvbWlzZUNoYWluO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdsdFpXUlFjbTl0YVhObGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlVYVcxbFpGQnliMjFwYzJWekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdRVUZYUVN4VFFVRm5RaXhQUVVGUExFTkJRVU1zUlVGQlV6dEpRVU0zUWl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM3BGTEVOQlFVTTdRVUZHUkN3d1FrRkZRenRCUVhWQ1JDeFRRVUZuUWl4TFFVRkxMRU5CUVVNc1JVRkJVenRKUVVNelFpeFBRVUZQTEVOQlFVa3NTVUZCVHl4RlFVRmhMRVZCUVVVN1VVRkROMElzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVhOQ0xFVkJRVVVzUlVGQlJUdFpRVU14UXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZERMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF5eERRVUZETzBGQlEwNHNRMEZCUXp0QlFVNUVMSE5DUVUxRE8wRkJZVVFzVFVGQllTeEpRVUZKTzBsQldXSXNXVUZCV1N4SlFVRkpMRWRCUVVNc1IwRkJSeXhGUVVGRkxHRkJRV0VzUjBGQlF5eERRVUZETEVOQlFVTTdVVUZZT1VJc2EwSkJRV0VzUjBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVnlRaXhqUVVGVExFZEJRVk1zUTBGQlF5eERRVUZETzFGQlEzQkNMR05CUVZNc1IwRkJVeXhEUVVGRExFTkJRVU03VVVGRGNFSXNaMEpCUVZjc1IwRkJUeXhEUVVGRExFTkJRVU03VVVGUmVFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFZEJRVU1zUTBGQlF5eERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzWVVGQllTeERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRkZSQ3haUVVGWkxFdEJRVkVzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNMVF5eGxRVUZsTEV0QlFVc3NUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVkY0UXl4SFFVRkhMRU5CUVVNc1JVRkJhVU03TzFsQlEzWkRMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTXpRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NUMEZCVHl4RlFVRkZPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NUMEZCVHl4RFFVRkRPMkZCUVVVN1dVRkRNMFFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhQUVVGUExFTkJRVU03V1VGRGRFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdXVUZEYWtJc1RVRkJUU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTndRaXhOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPMmRDUVVONFFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4SFFVRkhMRVZCUVVVN2IwSkJRMnhDTEVsQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8zZENRVU5xUlN4UFFVRlBMRVZCUVVVc1EwRkJRenR4UWtGRFlqdDVRa0ZCVFR0M1FrRkRTQ3hWUVVGVkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPM0ZDUVVNMVFqdG5Ra0ZEVEN4RFFVRkRMRU5CUVVNN1owSkJRMFlzVVVGQlVTeEZRVUZGTEVOQlFVTTdXVUZEWml4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOSUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0WlFVTnFRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdXVUZEYmtJc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlEzcERMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFpRVU51UWl4UFFVRlBMRWRCUVVjc1EwRkJRenRSUVVObUxFTkJRVU03UzBGQlFUdERRVU5LTzBGQmFrUkVMRzlDUVdsRVF6dEJRVmRFTEZOQlFXZENMRmxCUVZrc1EwRkJTU3hMUVVGeFF5eEZRVUZGTEdkQ1FVRnJRaXhGUVVGRk8wbEJRM1pHTEU5QlFVOHNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFdEJRV3RDTEVWQlFVVXNTVUZCSzBJc1JVRkJaMElzUlVGQlJTeERRVVYwUml4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVWNzUlVGQlJTeEZRVUZGTzFGQlJYUkZMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1QwRkJUeXhSUVVGUkxFTkJRVU03U1VGRGNFSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkRTQ3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVTnFReXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRVlpFTEc5RFFWVkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVGltZWRQcm9taXNlc18xID0gcmVxdWlyZShcIi4vVGltZWRQcm9taXNlc1wiKTtcbmV4cG9ydHMudGltZW91dCA9IFRpbWVkUHJvbWlzZXNfMS50aW1lb3V0O1xuZXhwb3J0cy5kZWxheSA9IFRpbWVkUHJvbWlzZXNfMS5kZWxheTtcbnZhciBUaW1lZFByb21pc2VzXzIgPSByZXF1aXJlKFwiLi9UaW1lZFByb21pc2VzXCIpO1xuZXhwb3J0cy5QYWNlID0gVGltZWRQcm9taXNlc18yLlBhY2U7XG52YXIgVGltZWRQcm9taXNlc18zID0gcmVxdWlyZShcIi4vVGltZWRQcm9taXNlc1wiKTtcbmV4cG9ydHMucHJvbWlzZUNoYWluID0gVGltZWRQcm9taXNlc18zLnByb21pc2VDaGFpbjtcbnZhciBDaGVja3N1bV8xID0gcmVxdWlyZShcIi4vQ2hlY2tzdW1cIik7XG5leHBvcnRzLnNob3J0Q2hlY2tTdW0gPSBDaGVja3N1bV8xLnNob3J0Q2hlY2tTdW07XG52YXIgRGF0ZV8xID0gcmVxdWlyZShcIi4vRGF0ZVwiKTtcbmV4cG9ydHMuZGF0ZSA9IERhdGVfMS5kYXRlO1xuZXhwb3J0cy5tcyA9IERhdGVfMS5tcztcbnZhciBOdW1iZXJfMSA9IHJlcXVpcmUoXCIuL051bWJlclwiKTtcbmV4cG9ydHMucm91bmQgPSBOdW1iZXJfMS5yb3VuZDtcbnZhciBsb2dfMSA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcbmV4cG9ydHMubG9nID0gbG9nXzEubG9nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHBSRUZCZFVRN1FVRkJPVU1zYTBOQlFVRXNUMEZCVHl4RFFVRkJPMEZCUVVVc1owTkJRVUVzUzBGQlN5eERRVUZCTzBGQlEzWkNMR2xFUVVGMVJEdEJRVUU1UXl3clFrRkJRU3hKUVVGSkxFTkJRVUU3UVVGRFlpeHBSRUZCZFVRN1FVRkJPVU1zZFVOQlFVRXNXVUZCV1N4RFFVRkJPMEZCUTNKQ0xIVkRRVUZyUkR0QlFVRjZReXh0UTBGQlFTeGhRVUZoTEVOQlFVRTdRVUZEZEVJc0swSkJRVGhETzBGQlFYSkRMSE5DUVVGQkxFbEJRVWtzUTBGQlFUdEJRVUZGTEc5Q1FVRkJMRVZCUVVVc1EwRkJRVHRCUVVOcVFpeHRRMEZCWjBRN1FVRkJka01zZVVKQlFVRXNTMEZCU3l4RFFVRkJPMEZCUTJRc05rSkJRVFpETzBGQlFYQkRMRzlDUVVGQkxFZEJRVWNzUTBGQlFTSjkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRGF0ZV8xID0gcmVxdWlyZShcIi4vRGF0ZVwiKTtcbmNvbnN0IERFQlVHID0gU3ltYm9sKCdERUJVRycpO1xuY29uc3QgSU5GTyA9IFN5bWJvbCgnSU5GTycpO1xuY29uc3QgV0FSTiA9IFN5bWJvbCgnV0FSTicpO1xuY29uc3QgRVJST1IgPSBTeW1ib2woJ0VSUk9SJyk7XG5sZXQgZ0xvZ0ZpbGU7XG5jb25zdCBnTGV2ZWxzID0ge1xuICAgIFtERUJVR106IHsgaW1wb3J0YW5jZTogMCwgc3ltOiBERUJVRywgZGVzYzogJ0RFQlVHJyB9LFxuICAgIFtJTkZPXTogeyBpbXBvcnRhbmNlOiAxLCBzeW06IElORk8sIGRlc2M6ICdJTkZPJyB9LFxuICAgIFtXQVJOXTogeyBpbXBvcnRhbmNlOiAyLCBzeW06IFdBUk4sIGRlc2M6ICdXQVJOJyB9LFxuICAgIFtFUlJPUl06IHsgaW1wb3J0YW5jZTogMywgc3ltOiBFUlJPUiwgZGVzYzogJ0VSUk9SJyB9XG59O1xubGV0IGdHbG9iYWxMZXZlbCA9IGdMZXZlbHNbSU5GT107XG5jb25zdCBkZWZEYXRlRm9ybWF0ID0gJyVZWVlZJU1NJUREICVoaDolbW06JXNzLiVqamonO1xubGV0IGdEYXRlRm9ybWF0ID0gZGVmRGF0ZUZvcm1hdDtcbmxldCBnQ29sb3JzID0gZmFsc2U7XG5jb25zdCBjb2xvciA9IHtcbiAgICByZWQ6ICdcXHgxYlszMW0nLFxuICAgIHllbGxvdzogJ1xceDFiWzMzbScsXG4gICAgYmx1ZTogJ1xceDFiWzM2bScsXG4gICAgZ3JlZW46ICdcXHgxYlszMm0nLFxuICAgIGJvbGQ6ICdcXHgxYlsxbScsXG4gICAgY2xlYXI6ICdcXHgxYlswbSdcbn07XG5leHBvcnRzLmxvZyA9IGNyZWF0ZSgnJywgKGZpbGVuYW1lLCBtc2cpID0+IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpLCAocGF0aCkgPT4gUHJvbWlzZS5yZXNvbHZlKHBhdGguaW5kZXhPZignLycpID49IDAgPyBmYWxzZSA6IHRydWUpKTtcbmZ1bmN0aW9uIGNyZWF0ZShfcHJlZml4LCBsb2dUb0ZpbGUsIHBhdGhFeGlzdHMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICBsZXZlbDogdW5kZWZpbmVkLFxuICAgICAgICBwcmVmaXg6IF9wcmVmaXgsXG4gICAgICAgIGxvZ1RvRmlsZTogbG9nVG9GaWxlLFxuICAgICAgICBwYXRoRXhpc3RzOiBwYXRoRXhpc3RzXG4gICAgfTtcbiAgICBmdW5jdGlvbiBsZXZlbChuZXdMZXZlbFN5bSwgc2V0R2xvYmFsTGV2ZWwgPSBmYWxzZSkge1xuICAgICAgICBsZXQgbmV3TGV2ZWwgPSBnTGV2ZWxzW25ld0xldmVsU3ltXSB8fCBnR2xvYmFsTGV2ZWw7XG4gICAgICAgIGxldCBvbGRMZXZlbCA9IGNvbnRleHQubGV2ZWwgfHwgZ0dsb2JhbExldmVsO1xuICAgICAgICBpZiAobmV3TGV2ZWxTeW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3TGV2ZWwgPSBvbGRMZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdMZXZlbFN5bSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGV4dC5sZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnTGV2ZWxzW25ld0xldmVsU3ltXSkge1xuICAgICAgICAgICAgaWYgKHNldEdsb2JhbExldmVsKSB7XG4gICAgICAgICAgICAgICAgZ0dsb2JhbExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgbmV3ICR7c2V0R2xvYmFsTGV2ZWwgPyAnZ2xvYmFsJyA6IGNvbnRleHQucHJlZml4fSBsb2cgbGV2ZWwgJHtuZXdMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9ICh3YXMgJHtvbGRMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9KWA7XG4gICAgICAgICAgICBvdXQoKG5ld0xldmVsLnN5bSA9PT0gb2xkTGV2ZWwuc3ltKSA/IERFQlVHIDogSU5GTywgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG91dChFUlJPUiwgYHVua293biBsZXZlbCAke25ld0xldmVsU3ltLnRvU3RyaW5nKCl9OyBsb2cgbGV2ZWwgcmVtYWlucyAke29sZExldmVsLnN5bS50b1N0cmluZygpfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMZXZlbC5zeW07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlYnVnKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCBvdXQoREVCVUcsIG1zZywgbG9nMkZpbGUpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5mbyhtc2csIGxvZzJGaWxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgb3V0KElORk8sIG1zZywgbG9nMkZpbGUpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2Fybihtc2csIGxvZzJGaWxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgb3V0KFdBUk4sIG1zZywgbG9nMkZpbGUpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXJyb3IobXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIG91dChFUlJPUiwgbXNnLCBsb2cyRmlsZSk7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3JtYXQoZm10U3RyKSB7XG4gICAgICAgIGlmIChmbXRTdHIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGdEYXRlRm9ybWF0ID0gZGVmRGF0ZUZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbXRTdHIpIHtcbiAgICAgICAgICAgIGdEYXRlRm9ybWF0ID0gZm10U3RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnRGF0ZUZvcm1hdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJlZml4KHByZikge1xuICAgICAgICBpZiAocHJmKSB7XG4gICAgICAgICAgICBjb250ZXh0LnByZWZpeCA9IHByZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVmaXg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG91dChsdmwsIG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSB7IFtFUlJPUl06IGNvbG9yLnJlZCArIGNvbG9yLmJvbGQsIFtXQVJOXTogY29sb3IueWVsbG93ICsgY29sb3IuYm9sZCwgW0RFQlVHXTogY29sb3IuYmx1ZSwgW0lORk9dOiBjb2xvci5ncmVlbiB9O1xuICAgICAgICAgICAgbGV0IGRlc2MgPSBnTGV2ZWxzW2x2bF07XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJMZXZlbCA9IGNvbnRleHQubGV2ZWwgfHwgZ0dsb2JhbExldmVsO1xuICAgICAgICAgICAgaWYgKGRlc2MuaW1wb3J0YW5jZSA+PSBmaWx0ZXJMZXZlbC5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IERhdGVfMS5kYXRlKGdEYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9ICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykgPyBtc2cgOiBpbnNwZWN0KG1zZywgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9nTGluZSA9IGAke2RhdGVTdHJ9ICR7Y29udGV4dC5wcmVmaXh9ICR7ZGVzYy5kZXNjfSAke2xpbmV9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvckxpbmUgPSBgJHtjb2xvcnNbbHZsXSB8fCAnJ30gJHtkYXRlU3RyfSAke2NvbnRleHQucHJlZml4fSAke2Rlc2MuZGVzY30gJHtjb2xvci5jbGVhcn0gJHtsaW5lfWA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ0NvbG9ycyA/IGNvbG9yTGluZSA6IGxvZ0xpbmUpO1xuICAgICAgICAgICAgICAgIGlmIChtc2cgJiYgbXNnLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZy5zdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnTG9nRmlsZSAmJiBsb2cyRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY29udGV4dC5sb2dUb0ZpbGUoRGF0ZV8xLmRhdGUoZ0xvZ0ZpbGUpLCBsb2dMaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9nRmlsZShmaWxlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGdMb2dGaWxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBpbmZvKFwiZGlzYWJsaW5nIGxvZ2ZpbGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZV8xLmRhdGUoZ0xvZ0ZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZS5pbmRleE9mKCcvJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjb250ZXh0LnBhdGhFeGlzdHMoZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGV4aXN0cykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ0xvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgd2FybihgcGF0aCAnJHtmaWxlfScgZG9lc24ndCBleGlzdHM7IGxvZ2ZpbGUgZGlzYWJsZWRgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnTG9nRmlsZSA9IGZpbGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBpbmZvKFwibm93IGxvZ2dpbmcgdG8gZmlsZSBcIiArIERhdGVfMS5kYXRlKGZpbGUpKTtcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ0xvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBlcnJvcihgY2hlY2tpbmcgcGF0aCAke2ZpbGV9OyBsb2dmaWxlIGRpc2FibGVkYCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBmaWxlID0gJ2xvZy0lWVlZWS0lTU0tJURELnR4dCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdMb2dGaWxlID0gZmlsZTtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBpbmZvKGdMb2dGaWxlID8gYG5vdyBsb2dnaW5nIHRvIGZpbGUgJHtEYXRlXzEuZGF0ZShnTG9nRmlsZSl9YCA6ICdsb2dmaWxlIGRpc2JhbGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb25maWcoY2ZnKSB7XG4gICAgICAgIGlmIChjZmcuY29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdDb2xvcnMgPSBjZmcuY29sb3JzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvcm1hdChjZmcuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmxldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldmVsKGNmZy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaW5zcGVjdChtc2csIGRlcHRoID0gMSwgaW5kZW50ID0gJycsIGNvbG9ycykge1xuICAgICAgICBmdW5jdGlvbiBfaW5zcGVjdChtc2csIGRlcHRoLCBsZXZlbCwgY3VyckluZGVudCkge1xuICAgICAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAnJHttc2d9J2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobXNnLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSA/ICd7Li4ufScgOiAnWy4uLl0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgWyR7bXNnLm1hcCgoZSkgPT4gKGUgPT09IHVuZGVmaW5lZCkgPyAnJyA6IF9pbnNwZWN0KGUsIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50KSkuam9pbignLCAnKX1dYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGNvbG9ycyA/IGA8Yj48c3BhbiBzdHlsZT0nY29sb3I6JHtjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXX07Jz5gIDogJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gYCR7Y30ke2N1cnJJbmRlbnR9JHtpbmRlbnR9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0Zml4ID0gY29sb3JzID8gJzwvc3Bhbj48L2I+JyA6ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiAne1xcbicgKyBPYmplY3Qua2V5cyhtc2cpLm1hcChrID0+IGAke3ByZWZpeH0ke2t9JHtwb3N0Zml4fTogJHtfaW5zcGVjdChtc2dba10sIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50ICsgaW5kZW50KX1gKS5qb2luKCcsXFxuJykgKyBgXFxuJHtjdXJySW5kZW50fX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1zZy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xvcnMpIHtcbiAgICAgICAgICAgIGluZGVudCA9IGluZGVudC5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2luc3BlY3QobXNnLCBkZXB0aCA9PT0gbnVsbCA/IDk5OSA6IGRlcHRoLCAwLCAnJyk7XG4gICAgfVxuICAgIGNvbnN0IG5ld0xvZyA9IChwcmVmaXgsIGxvZ1RvRmlsZSA9IGNvbnRleHQubG9nVG9GaWxlLCBwYXRoRXhpc3RzID0gY29udGV4dC5wYXRoRXhpc3RzKSA9PiBjcmVhdGUocHJlZml4LCBsb2dUb0ZpbGUsIHBhdGhFeGlzdHMpO1xuICAgIG5ld0xvZy5ERUJVRyA9IERFQlVHO1xuICAgIG5ld0xvZy5JTkZPID0gSU5GTztcbiAgICBuZXdMb2cuV0FSTiA9IFdBUk47XG4gICAgbmV3TG9nLkVSUk9SID0gRVJST1I7XG4gICAgbmV3TG9nLmxldmVsID0gbGV2ZWw7XG4gICAgbmV3TG9nLmRlYnVnID0gZGVidWc7XG4gICAgbmV3TG9nLmluZm8gPSBpbmZvO1xuICAgIG5ld0xvZy53YXJuID0gd2FybjtcbiAgICBuZXdMb2cuZXJyb3IgPSBlcnJvcjtcbiAgICBuZXdMb2cuZm9ybWF0ID0gZm9ybWF0O1xuICAgIG5ld0xvZy5wcmVmaXggPSBwcmVmaXg7XG4gICAgbmV3TG9nLm91dCA9IG91dDtcbiAgICBuZXdMb2cubG9nRmlsZSA9IGxvZ0ZpbGU7XG4gICAgbmV3TG9nLmNvbmZpZyA9IGNvbmZpZztcbiAgICBuZXdMb2cuaW5zcGVjdCA9IGluc3BlY3Q7XG4gICAgcmV0dXJuIG5ld0xvZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJ4dlp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMEZCSzBWQkxHbERRVUZyUXp0QlFVZHNReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1FVRkhPVUlzVFVGQlRTeEpRVUZKTEVkQlFVc3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJSemxDTEUxQlFVMHNTVUZCU1N4SFFVRkxMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVWM1UWl4TlFVRk5MRXRCUVVzc1IwRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdRVUZITDBJc1NVRkJTU3hSUVVGblFpeERRVUZETzBGQlUzSkNMRTFCUVUwc1QwRkJUeXhIUVVGSE8wbEJRMW9zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCU3l4RlFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRE8wbEJRM1JFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVUwc1JVRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVjc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlF6dEpRVU55UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGTkxFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGSExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVTTdTVUZEY2tRc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlN5eEZRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkRPME5CUTNwRUxFTkJRVU03UVVGSFJpeEpRVUZKTEZsQlFWa3NSMEZCWVN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGSE0wTXNUVUZCVFN4aFFVRmhMRWRCUVVjc09FSkJRVGhDTEVOQlFVTTdRVUZEY2tRc1NVRkJTU3hYUVVGWExFZEJRVThzWVVGQllTeERRVUZETzBGQlIzQkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dEJRVWR3UWl4TlFVRk5MRXRCUVVzc1IwRkJSenRKUVVOV0xFZEJRVWNzUlVGQlN5eFZRVUZWTzBsQlEyeENMRTFCUVUwc1JVRkJSU3hWUVVGVk8wbEJRMnhDTEVsQlFVa3NSVUZCU1N4VlFVRlZPMGxCUTJ4Q0xFdEJRVXNzUlVGQlJ5eFZRVUZWTzBsQlEyeENMRWxCUVVrc1JVRkJTU3hUUVVGVE8wbEJRMnBDTEV0QlFVc3NSVUZCUnl4VFFVRlRPME5CUTNCQ0xFTkJRVU03UVVFMlNWY3NVVUZCUVN4SFFVRkhMRWRCUVZjc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGRGFFTXNRMEZCUXl4UlFVRmxMRVZCUVVVc1IwRkJWU3hGUVVGclFpeEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUlVGRk0wVXNRMEZCUXl4SlFVRlhMRVZCUVcxQ0xFVkJRVVVzUTBGQlFTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVVXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVTjJSaXhEUVVGRE8wRkJSVVlzVTBGQlV5eE5RVUZOTEVOQlFVTXNUMEZCWXl4RlFVRkZMRk5CUVdsQ0xFVkJRVVVzVlVGQmFVSTdTVUZEYUVVc1RVRkJUU3hQUVVGUExFZEJRVWM3VVVGRFdpeExRVUZMTEVWQlFXdENMRk5CUVZNN1VVRkRhRU1zVFVGQlRTeEZRVUZOTEU5QlFVODdVVUZEYmtJc1UwRkJVeXhGUVVGWkxGTkJRVk03VVVGRE9VSXNWVUZCVlN4RlFVRlZMRlZCUVZVN1MwRkRha01zUTBGQlF6dEpRVVZHTEZOQlFWTXNTMEZCU3l4RFFVRkRMRmRCUVcxQ0xFVkJRVVVzWTBGQll5eEhRVUZETEV0QlFVczdVVUZEY0VRc1NVRkJTU3hSUVVGUkxFZEJRVWNzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRmxCUVZrc1EwRkJRenRSUVVOd1JDeEpRVUZKTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNc1MwRkJTeXhKUVVGSkxGbEJRVmtzUTBGQlF6dFJRVU0zUXl4SlFVRkpMRmRCUVZjc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRE0wSXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRUUVVOMlFqdGhRVUZOTEVsQlFVa3NWMEZCVnl4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVNM1FpeFBRVUZQTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVNM1FqdGhRVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xbEJRemRDTEVsQlFVa3NZMEZCWXl4RlFVRkZPMmRDUVVGRkxGbEJRVmtzUjBGQlJ5eFJRVUZSTEVOQlFVTTdZVUZCUlR0cFFrRkROVUk3WjBKQlFVVXNUMEZCVHl4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU03WVVGQlJUdFpRVU5xUkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhQUVVGUExHTkJRV01zUTBGQlFTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeGpRVUZqTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxGTkJRVk1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhEUVVGRE8xbEJRemRKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJRU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVNeFJEdGhRVUZOTzFsQlEwZ3NSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3huUWtGQlowSXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3gxUWtGQmRVSXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVjN1VVRkRSQ3hQUVVGUExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTTdTVUZEZUVJc1EwRkJRenRKUVVWRUxGTkJRV1VzUzBGQlN5eERRVUZETEVkQlFVOHNSVUZCUlN4UlFVRlJMRWRCUVVNc1NVRkJTVHM0UkVGQmIwSXNUMEZCVHl4TlFVRk5MRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVGQk8wbEJRM2hITEZOQlFXVXNTVUZCU1N4RFFVRkRMRWRCUVU4c1JVRkJSU3hSUVVGUkxFZEJRVU1zU1VGQlNUczRSRUZCYjBJc1QwRkJUeXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVUZCTzBsQlEzUkhMRk5CUVdVc1NVRkJTU3hEUVVGRExFZEJRVThzUlVGQlJTeFJRVUZSTEVkQlFVTXNTVUZCU1RzNFJFRkJiMElzVDBGQlR5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVRkJPMGxCUTNSSExGTkJRV1VzUzBGQlN5eERRVUZETEVkQlFVOHNSVUZCUlN4UlFVRlJMRWRCUVVNc1NVRkJTVHM0UkVGQmIwSXNUMEZCVHl4TlFVRk5MRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVGQk8wbEJSWGhITEZOQlFWTXNUVUZCVFN4RFFVRkRMRTFCUVdNN1VVRkRNVUlzU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUVVVc1YwRkJWeXhIUVVGSExHRkJRV0VzUTBGQlF6dFRRVUZGTzJGQlEyaEVMRWxCUVVrc1RVRkJUU3hGUVVGTk8xbEJRVVVzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0VFFVRkZPMUZCUXpsRExFOUJRVThzVjBGQlZ5eERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkZSQ3hUUVVGVExFMUJRVTBzUTBGQlF5eEhRVUZYTzFGQlEzWkNMRWxCUVVrc1IwRkJSeXhGUVVGRk8xbEJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNN1UwRkJSVHRSUVVOc1F5eFBRVUZQTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFTEZOQlFXVXNSMEZCUnl4RFFVRkRMRWRCUVZVc1JVRkJSU3hIUVVGUExFVkJRVVVzVVVGQlVTeEhRVUZETEVsQlFVazdPMWxCUTJwRUxFMUJRVTBzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eEhRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJRelZJTEVsQlFVa3NTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU40UWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eEpRVUZKTEZsQlFWa3NRMEZCUXp0WlFVTnNSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVsQlFVa3NWMEZCVnl4RFFVRkRMRlZCUVZVc1JVRkJSVHRuUWtGRE0wTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1YwRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzJkQ1FVTnNReXhKUVVGSkxFbEJRVWtzUjBGQlJ5eERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpWRUxFMUJRVTBzVDBGQlR5eEhRVUYzUWl4SFFVRkhMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEzcEdMRTFCUVUwc1UwRkJVeXhIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkZMRVZCUVVVc1NVRkJTU3hQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJRM2hITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGQkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8yZENRVU14UXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTzI5Q1FVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmxDUVVGRk8yZENRVU5xUkN4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFVkJRVVU3YjBKQlEzUkNMRTlCUVU4c1RVRkJUU3hQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEZkQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dHBRa0ZETTBRN1lVRkRTanRaUVVORUxFOUJRVThzVTBGQlV5eERRVUZETzFGQlEzSkNMRU5CUVVNN1MwRkJRVHRKUVVWRUxGTkJRV1VzVDBGQlR5eERRVUZETEVsQlFWazdPMWxCUXk5Q0xFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NSVUZCUlR0blFrRkRaaXhSUVVGUkxFZEJRVWNzVTBGQlV5eERRVUZETzJkQ1FVTnlRaXhQUVVGUExFMUJRVTBzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03WVVGRE1VTTdhVUpCUVUwc1NVRkJTU3hKUVVGSkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTXpRaXhQUVVGUExGZEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTjZRanRwUWtGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVVVzUTBGQlF5eEZRVUZGTzJkQ1FVTTNRaXhQUVVGUExFMUJRVTBzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNN2NVSkJRMmhETEVsQlFVa3NRMEZCUXl4RFFVRlBMRTFCUVdNc1JVRkJSU3hGUVVGRk8yOUNRVU16UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8zZENRVU5VTEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNN2QwSkJRM0pDTEU5QlFVOHNUVUZCVFN4SlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGSkxHOURRVUZ2UXl4RFFVRkRMRU5CUVVNN2NVSkJRM2hGTzI5Q1FVTkVMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03YjBKQlEyaENMRTlCUVU4c1RVRkJUU3hKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1YwRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpORUxFTkJRVU1zUTBGQlFTeERRVUZETzNGQ1FVTkVMRXRCUVVzc1EwRkJReXhIUVVGVExFVkJRVVU3YjBKQlEyUXNVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJRenR2UWtGRGNrSXNUMEZCVHl4TlFVRk5MRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNTVUZCU1N4dlFrRkJiMElzUTBGQlF5eERRVUZETzJkQ1FVTnNSU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETzJGQlExWTdhVUpCUVUwc1NVRkJTU3hKUVVGSkxFdEJRVXNzUlVGQlJTeEZRVUZGTzJkQ1FVTndRaXhKUVVGSkxFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN1lVRkRiRU03YVVKQlFVMDdZVUZEVGp0WlFVTkVMRkZCUVZFc1IwRkJReXhKUVVGSkxFTkJRVU03V1VGRFpDeFBRVUZQTEUxQlFVMHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRU3hEUVVGRExFTkJRVU1zZFVKQlFYVkNMRmRCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzFGQlF6bEdMRU5CUVVNN1MwRkJRVHRKUVVWRUxGTkJRVk1zVFVGQlRTeERRVUZETEVkQlFYRkVPMUZCUTJwRkxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRVZCUVVVN1dVRkJSU3hQUVVGUExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0VFFVRkZPMUZCUTNKRUxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRVZCUVVVN1dVRkJSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUVVVN1VVRkRia1FzU1VGQlNTeEhRVUZITEVOQlFVTXNTMEZCU3l4TFFVRkhMRk5CUVZNc1JVRkJSenRaUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkJSVHRKUVVOeVJDeERRVUZETzBsQlJVUXNVMEZCVXl4UFFVRlBMRU5CUVVNc1IwRkJUeXhGUVVGRkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4SFFVRkRMRVZCUVVVc1JVRkJSU3hOUVVGblFqdFJRVU14UkN4VFFVRlRMRkZCUVZFc1EwRkJReXhIUVVGUExFVkJRVVVzUzBGQldTeEZRVUZGTEV0QlFWa3NSVUZCUlN4VlFVRnBRanRaUVVOd1JTeEpRVUZKTEVkQlFVY3NTMEZCU3l4SlFVRkpMRVZCUVdkQ08yZENRVUZGTEU5QlFVOHNUVUZCVFN4RFFVRkRPMkZCUVVVN1dVRkRiRVFzU1VGQlNTeEhRVUZITEV0QlFVc3NVMEZCVXl4RlFVRlhPMmRDUVVGRkxFOUJRVThzVjBGQlZ5eERRVUZETzJGQlFVVTdXVUZEZGtRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFZRVUZWTEVWQlFVYzdaMEpCUVVVc1QwRkJUeXhWUVVGVkxFTkJRVU03WVVGQlJUdFpRVU4wUkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlN6dG5Ra0ZCUlN4UFFVRlBMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU03WVVGQlJUdFpRVU4wUkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlN6dG5Ra0ZETlVJc1NVRkJTU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeExRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXp0cFFrRkJSVHRuUWtGRGNFVXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZETVVJc1QwRkJUeXhKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkxMRVZCUVVNc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlF5eExRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJRU3hGUVVGRkxFTkJRVUVzUTBGQlF5eERRVUZCTEZGQlFWRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVkQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN2FVSkJRekZITzJkQ1FVTkdMRTFCUVUwc1EwRkJReXhIUVVGSkxFMUJRVTBzUTBGQlFTeERRVUZETEVOQlFVTXNlVUpCUVhsQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRjRVlzVFVGQlRTeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETzJkQ1FVTTFReXhOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVRXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzJkQ1FVTXpReXhQUVVGUExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEV0QlEzaEVMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNSMEZCUXl4TlFVRk5MRU5CUTNoRUxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhMUVVGTExGVkJRVlVzUjBGQlJ5eERRVUZETzJGQlF6VkRPMWxCUTBRc1QwRkJUeXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZETVVJc1EwRkJRenRSUVVORUxFbEJRVWtzVFVGQlRTeEZRVUZGTzFsQlFVVXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMU5CUVVVN1VVRkRlRVFzVDBGQlR5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1MwRkJSeXhKUVVGSkxFTkJRVUVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTXpSQ3hEUVVGRE8wbEJSVVFzVFVGQlRTeE5RVUZOTEVkQlFVOHNRMEZCUXl4TlFVRmhMRVZCUVVVc1dVRkJhMElzVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4aFFVRnJRaXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxGTkJRVk1zUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0SlFVVjJTaXhOUVVGTkxFTkJRVU1zUzBGQlN5eEhRVUZOTEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTjJRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTjJRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eEhRVUZOTEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eEhRVUZOTEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eEhRVUZOTEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTjJRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTjJRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eEhRVUZOTEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZMTEUxQlFVMHNRMEZCUXp0SlFVTjZRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZMTEUxQlFVMHNRMEZCUXp0SlFVTjZRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZSTEVkQlFVY3NRMEZCUXp0SlFVTjBRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZKTEU5QlFVOHNRMEZCUXp0SlFVTXhRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZMTEUxQlFVMHNRMEZCUXp0SlFVTjZRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZKTEU5QlFVOHNRMEZCUXp0SlFVTXhRaXhQUVVGUExFMUJRVTBzUTBGQlF6dEJRVU5zUWl4RFFVRkRJbjA9Il0sInNvdXJjZVJvb3QiOiIifQ==