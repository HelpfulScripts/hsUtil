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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pillars = __webpack_require__(26);
if (pillars) { }
const tiles = __webpack_require__(27);
if (tiles) { }
var Container_1 = __webpack_require__(25);
exports.Container = Container_1.Container;
exports.Component = Container_1.Component;
var Tokens_1 = __webpack_require__(3);
exports.FILL = Tokens_1.FILL;
exports.px = Tokens_1.px;
exports.pc = Tokens_1.pc;
exports.LayoutToken = Tokens_1.LayoutToken;
var Layout_1 = __webpack_require__(2);
exports.Layout = Layout_1.Layout;
var hsConfig_1 = __webpack_require__(24);
exports.HsConfig = hsConfig_1.HsConfig;
var mithril_1 = __webpack_require__(5);
exports.m = mithril_1.m;
exports.o = mithril_1.o;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxpREFBa0U7QUFBTSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztBQUN0RiwyQ0FBOEQ7QUFBVSxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztBQUVwRiw4Q0FBNkQ7QUFBcEQsZ0NBQUEsU0FBUyxDQUFBO0FBQUUsZ0NBQUEsU0FBUyxDQUFBO0FBQzdCLHdDQUEwRDtBQUFqRCx3QkFBQSxJQUFJLENBQUE7QUFBRSxzQkFBQSxFQUFFLENBQUE7QUFBRSxzQkFBQSxFQUFFLENBQUE7QUFBRSwrQkFBQSxXQUFXLENBQUE7QUFDbEMsd0NBQTBEO0FBQWpELDBCQUFBLE1BQU0sQ0FBQTtBQUNmLHVDQUF1RDtBQUE5Qyw4QkFBQSxRQUFRLENBQUE7QUFDakIscUNBQXFEO0FBQTVDLHNCQUFBLENBQUMsQ0FBQTtBQUFTLHNCQUFBLENBQUMsQ0FBQSJ9

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DocSets.ts. Loads the doc.json files to process and display as documentation.
 * Processing occurs in these steps:
 * 1. Load the index.json file that contains a list of doc.json files to load, one for each library to show
 * 2. Load each doc.json file, which describes a library
 * 3. Call DocSets.add to add the library name to the registry and create an index of entries for the library
 */

Object.defineProperty(exports, "__esModule", { value: true });
/** */
const hslayout_1 = __webpack_require__(0);
/**
 * the default location for the index .json files, relative to the web page:
 * `'./data/index.json'`
 */
const FILE = './data/index.json';
/**
 * DocSets object. Keeps a list of registered docsets and
 * provides access to elements of each docset.
 */
class DocSets {
    /** Adds the docset in `content` to the `gList` */
    static add(content) {
        const lib = content.name;
        DocSets.gList.set.push(lib);
        DocSets.gList.set.sort();
        DocSets.gList.index[lib] = {};
        recursiveIndex(content, DocSets.gList.index[lib], lib);
    }
    /**
     * loads an index set and the docsets it contains from driectory `dir`.
     * @param file the optional directory to read from. If unspecified,
     * read from the index file specified by {@link DocSets.FILE `FILE`}.
     */
    static loadList(file) {
        file = file || FILE;
        console.log('requesting docSet ' + file);
        return DocSets.loadIndexSet(file);
    }
    /**
     * returns the specified documentation element.
     * When called without parameters, a string[] of available docSets is returned.
     * When called with only `lib` specified, the corresponding docSet overview is returned.
     * @param lib specifies the docset to scan.
     * @param id specifies the element within the docSet, either by its id number, or by its path
     */
    static get(lib, id = 0) {
        if (lib) {
            if (DocSets.gList.index[lib]) {
                return DocSets.gList.index[lib][id + ''];
            }
            else {
                return DocSets.gList.set;
            }
        }
        else {
            return DocSets.gList.set;
        }
    }
    /**
     * Loads `index.json` from the directory specified in `dir`.
     * Each entry in the index is interpreted as a docset and loaded.
     * @param dir the directory to read from
     * @param file the index file to read
     */
    static loadIndexSet(file) {
        return hslayout_1.m.request({ method: "GET", url: file })
            .then((result) => {
            console.log('received index');
            DocSets.gTitle = result.title;
            let i = file.lastIndexOf('/');
            const dir = file.substring(0, i + 1);
            return Promise.all(result.docs.map((f) => loadDocSet(dir, f)));
        })
            .catch(console.log);
    }
    static title() { return DocSets.gTitle; }
}
/** Contains references to the docsets and all elements per docset, accessible per ID. */
DocSets.gList = { set: [], index: {} };
exports.DocSets = DocSets;
;
/**
 * Loads a docset specified by file from the directory `dir`.
 * Once received, the docset is registered in `modules` via the `add` method.
 * @param dir the directory to read from
 * @param file the `json` file to load as docset
 */
function loadDocSet(dir, file) {
    return hslayout_1.m.request({ method: "GET", url: dir + file })
        .then((r) => {
        console.log('received ' + dir + file);
        DocSets.add(r);
    })
        .catch(console.log);
}
/**
 * recurses through the docset and registers all `children` entries of an entry by id,
 * starting with the root entry.
 * @param content the docset object literal to traverse
 * @param index the index in which to register the entries
 * @param lib the docset name, used for name validation
 */
function recursiveIndex(content, index, lib, path = '') {
    content.lib = lib;
    if (typeof content === 'object' && content.name) {
        content.name = content.name.replace(/["'](.+)["']|(.+)/g, "$1$2"); // remove quotes 
        const elName = content.name.match(/([^\/]+)$/)[1]; // name = part after last /
        let newPath = (path === '') ? elName : `${path}.${elName}`;
        content.fullPath = newPath;
        content.name = elName;
        index[content.id + ''] = content;
        if (newPath.length > 0) {
            index[newPath] = content;
        }
        if (content.children) {
            content.children.map((c) => recursiveIndex(c, index, lib, newPath));
        }
    }
}
/**
 * Validates the `name` of `External module`s. If the `name` starts with the `lib` name
 * then truncate the name by removing '`lib`/src/' from the left side of the name.
 * @param content the docset to evaluate
 * @param lib the library name
 */
/*
function validExternalModuleName(content:any, lib:string):boolean {
    let result = false;
    if (content.kindString !== 'External module') { return true; }
    else if (content.name.indexOf('/')>0 && content.name.indexOf(lib+'/src/')===0) {
        let j = (lib+'/src/').length;
        content.name = content.name.substring(j);
        result = true;
    }
    return result;
}
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jU2V0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2NTZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7O0FBRUgsTUFBTTtBQUNOLHVDQUFnQztBQUVoQzs7O0dBR0c7QUFDSCxNQUFNLElBQUksR0FBVSxtQkFBbUIsQ0FBQztBQUd4Qzs7O0dBR0c7QUFDSDtJQUtJLGtEQUFrRDtJQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQVc7UUFDekIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQVk7UUFDL0IsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBaUIsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxL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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Tokens_1 = __webpack_require__(3);
class Layout {
    constructor(areaDesc) {
        this.areaDesc = areaDesc;
        this.spacing = 0;
    }
    static translate(params) {
        if (params.length === 0) {
            params.push('');
        }
        return params.map((param) => {
            if (typeof param === 'string') {
                if (param.endsWith('px')) {
                    return Tokens_1.px(parseInt(param));
                }
                if (param.endsWith('%')) {
                    return Tokens_1.pc(parseInt(param));
                }
                if (param.toLowerCase() === 'fill') {
                    return Tokens_1.FILL;
                }
            }
            else {
                return param;
            }
        });
    }
    static register(keyword, style) {
        Layout.layoutStyles[keyword] = style;
    }
    static createLayout(attrs, components) {
        let css = '';
        Object.keys(Layout.layoutStyles).some(key => {
            if (attrs[key]) {
                css = new Layout.layoutStyles[key](Layout.translate(attrs[key])).getStyles(components);
                attrs[key] = undefined;
                return true;
            }
            return false;
        });
        return css;
    }
    ;
}
Layout.layoutStyles = {};
exports.Layout = Layout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXcvTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZ0JBLHFDQUF3QztBQXlCeEM7SUFzRUksWUFBbUIsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQVJ6QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBUWdDLENBQUM7SUF0RHJDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBd0I7UUFDN0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFnQjtZQUMvQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsV0FBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUFDLENBQUM7Z0JBQ3pELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxXQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQUMsQ0FBQztnQkFDeEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQUMsTUFBTSxDQUFDLGFBQUksQ0FBQztnQkFBQSxDQUFDO1lBQ3JELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFPTSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWMsRUFBRSxLQUFtQjtRQUV0RCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBVU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFTLEVBQUUsVUFBdUI7UUFDekQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFYixHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZGLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQVc0QyxDQUFDOztBQWpFdkMsbUJBQVksR0FBcUIsRUFBRSxDQUFDO0FBTC9DLHdCQXVGQyJ9

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LayoutToken {
    constructor(size) {
        this.size = size;
    }
    getSize() { return this.size; }
}
exports.LayoutToken = LayoutToken;
class DefinedToken extends LayoutToken {
    constructor(size) { super(size); }
}
exports.DefinedToken = DefinedToken;
class FillToken extends LayoutToken {
    constructor() { super(-1); }
}
exports.FillToken = FillToken;
class PixelToken extends DefinedToken {
    constructor(size) { super(size); }
}
exports.PixelToken = PixelToken;
class PercentToken extends DefinedToken {
    constructor(size) { super(size); }
}
exports.PercentToken = PercentToken;
function px(px) { return new PixelToken(px); }
exports.px = px;
function pc(pc) { return new PercentToken(pc); }
exports.pc = pc;
exports.FILL = new FillToken();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXcvVG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUE7SUFDSSxZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFDN0IsT0FBTyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztDQUN6QztBQUhELGtDQUdDO0FBS0Qsa0JBQW1DLFNBQVEsV0FBVztJQUNsRCxZQUFZLElBQVksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzdDO0FBRkQsb0NBRUM7QUFLRCxlQUF1QixTQUFRLFdBQVc7SUFDdEMsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMvQjtBQUZELDhCQUVDO0FBS0QsZ0JBQXdCLFNBQVEsWUFBWTtJQUN4QyxZQUFZLElBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDO0FBRkQsZ0NBRUM7QUFLRCxrQkFBMEIsU0FBUSxZQUFZO0lBQzFDLFlBQVksSUFBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUM7QUFGRCxvQ0FFQztBQU1ELFlBQW1CLEVBQVMsSUFBTSxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQTlELGdCQUE4RDtBQU05RCxZQUFtQixFQUFTLElBQU0sTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFoRSxnQkFBZ0U7QUFLbkQsUUFBQSxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyJ9

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
if (!global['window']) {
    console.log('creating non-browser polyfill');
    global['window'] = __webpack_require__(38)();
    global['document'] = window.document;
}
exports.m = __webpack_require__(35);
const o = __webpack_require__(36);
exports.o = o;
o.root = window.document.createElement("div");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl0aHJpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXRocmlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUU3QyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLEVBQUUsQ0FBQztJQUNsRSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUV6QyxDQUFDO0FBS1ksUUFBQSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBT3BDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBR2hDLGNBQUM7QUFGVixDQUFDLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hsMenu_1 = __webpack_require__(32);
exports.Menu = hsMenu_1.Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxtQ0FBMkM7QUFBbEMsd0JBQUEsSUFBSSxDQUFBIn0=

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hslayout_1 = __webpack_require__(0);
const Tooltip_1 = __webpack_require__(21);
const DocSets_1 = __webpack_require__(1);
const SourceBase = 'src/';
// TODO: sort flags in array to garantee sequence of printing
function flags(flags, ignore = []) {
    const knownFlags = {
        isExported: 'export',
        isExternal: '',
        isPublic: 'public',
        isPrivate: 'private',
        isProtected: 'protected',
        isConstructorProperty: 'constructorProperty',
        isStatic: 'static',
        isOptional: 'optional'
    };
    return hslayout_1.m('span', !flags ? [] :
        Object.keys(flags).map((f) => {
            let ign = false;
            let flag = knownFlags[f];
            if (flag !== undefined) {
                ign = (ignore.indexOf(flag) >= 0);
            }
            else {
                flag = f;
            }
            return hslayout_1.m(`span.hs-item-${ign ? 'ignore' : (flag === f ? 'unknown' : flag)}-flag`, ign ? undefined : flag);
        }));
}
exports.flags = flags;
function kindString(mdl) {
    return hslayout_1.m('span.hs-item-kind', mdl.kindString);
}
exports.kindString = kindString;
function itemName(mdl, sub) {
    return hslayout_1.m('span.hs-item-name', libLink('a', mdl.lib, sub.fullPath, sub.name));
}
exports.itemName = itemName;
function itemLongName(mdl, sub) {
    return hslayout_1.m('span.hs-item-name', libLink('a', mdl.lib, mdl.fullPath, sub.name));
}
exports.itemLongName = itemLongName;
function itemTooltip(mdl) {
    return hslayout_1.m('span.hs-item-name', Tooltip_1.tooltip(mdl.name, 'class name and then some', 'bottom'));
}
exports.itemTooltip = itemTooltip;
function extensionOf(mdl) {
    return hslayout_1.m('span.hs-item-extensions', !mdl.extendedTypes ? undefined : [
        hslayout_1.m('span.hs-item-extends', 'extends'),
        hslayout_1.m('span', mdl.extendedTypes.map((t, i) => hslayout_1.m('span.hs-item-extension', [
            libLink('a', mdl.lib, DocSets_1.DocSets.get(mdl.lib, t.id).fullPath, t.name),
            mdl.extendedTypes.map.length > (i + 1) ? ', ' : ''
        ]))),
    ]);
}
exports.extensionOf = extensionOf;
function sourceLink(mdl) {
    const source = mdl.sources ? mdl.sources[0] : undefined;
    if (source) {
        let file = (source && source.fileName) ? source.fileName.replace('.ts', '.html') : '';
        const index = file.indexOf(mdl.lib);
        file = file.substr(index); // only consider links within the docSet (everything after the lib name)
        return hslayout_1.m('span.hs-item-member-source', hslayout_1.m('a', { href: `${SourceBase}${file}#${Math.max(0, source.line - 5)}`, target: "_blank" }, '[source]'));
    }
    else {
        return hslayout_1.m('span.hs-item-member-source', '');
    }
}
exports.sourceLink = sourceLink;
/**
 * creates a library link on the specified `name`.
 * The link points to `/api/<lib>/<id>`
 * @param css the css tag selector to use
 * @param cls the css class selector to use
 * @param lib the lib string to point to
 * @param id the id number to point to
 * @param name the name on which to formt he link
 */
function libLink(css, lib, id, name) {
    return hslayout_1.m(css, { href: `/api/${lib}/${id}`, oncreate: hslayout_1.m.route.link, onupdate: hslayout_1.m.route.link }, name);
}
exports.libLink = libLink;
;
function type(t, lib) {
    function _type(t) {
        switch (t.type) {
            case 'instrinct': return t.id ? libLink('span', lib, t.fullPath, t.name) : t.name;
            case 'stringLiteral': return t.type;
            case 'union': return t.types.map(_type).join(' | ');
            case 'reference': return t.typeArguments ? t.name + '<' + t.typeArguments.map(_type).join(', ') + '>' :
                t.id ? libLink('span', lib, t.fullPath, t.name) : t.name;
            case 'reflection': return t.declaration ? t.declaration.kindString : 'UNKNOWN';
            default:
                console.log('unknown type ' + t.type);
                console.log(t);
                return t.type;
        }
    }
    try {
        return hslayout_1.m('span', t ? [
            hslayout_1.m('span.hs-item-name', ':'),
            hslayout_1.m('span.hs-item-sig-type', _type(t))
        ] : undefined);
    }
    catch (e) {
        console.log(e);
        console.log(e.trace);
    }
}
exports.type = type;
/**
 * creates a function or method signature
 */
function signature(s, lib) {
    function comma(i) { return (i > 0) ? ', ' : ''; }
    function optional(flags) {
        return (flags && flags.isOptional) ? '.hs-item-optional' : '';
    }
    let sig;
    if (s && s.parameters) {
        sig = s.parameters.map((p, i) => hslayout_1.m('span', [
            comma(i),
            hslayout_1.m('span.hs-item-sig-param', [
                hslayout_1.m(`span.hs-item-name${optional(p.flags)}`, p.name),
                type(p.type, lib)
            ])
        ]));
        sig.unshift(hslayout_1.m('span.hs-item-name', '('));
        sig.push(hslayout_1.m('span.hs-item-name', ')'));
    }
    return hslayout_1.m('span.hs-item-signature', sig);
}
exports.signature = signature;
function makeID(section, mdl) {
    let result = section ? section + '_' : '';
    result = (result + (mdl.name || '')).toLowerCase();
    return (result !== '') ? result : undefined;
}
exports.makeID = makeID;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9QYXJ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFtQztBQUNuQyx1Q0FBb0M7QUFDcEMsd0NBQXFDO0FBRXJDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUcxQiw2REFBNkQ7QUFDN0QsZUFBc0IsS0FBUyxFQUFFLFNBQWdCLEVBQUU7SUFDL0MsTUFBTSxVQUFVLEdBQUc7UUFDZixVQUFVLEVBQWMsUUFBUTtRQUNoQyxVQUFVLEVBQWMsRUFBRTtRQUMxQixRQUFRLEVBQWdCLFFBQVE7UUFDaEMsU0FBUyxFQUFlLFNBQVM7UUFDakMsV0FBVyxFQUFhLFdBQVc7UUFDbkMscUJBQXFCLEVBQUcscUJBQXFCO1FBQzdDLFFBQVEsRUFBZ0IsUUFBUTtRQUNoQyxVQUFVLEVBQWMsVUFBVTtLQUNyQyxDQUFDO0lBQ0YsTUFBTSxDQUFDLFlBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEdBQUUsRUFBRTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVE7WUFDNUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsQ0FBQztnQkFBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsWUFBQyxDQUFDLGdCQUFnQixHQUFHLEdBQUMsUUFBUSxHQUFDLENBQUMsSUFBSSxLQUFHLENBQUMsR0FBQyxTQUFTLEdB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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

module.exports = typeof setImmediate === "function" ? setImmediate : setTimeout

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).setImmediate))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parseURL(url, root) {
	var data = {}
	var protocolIndex = url.indexOf("://")
	var pathnameIndex = protocolIndex > -1 ? url.indexOf("/", protocolIndex + 3) : url.indexOf("/")
	var searchIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	if ((pathnameIndex > searchIndex && searchIndex > -1) || (pathnameIndex > hashIndex && hashIndex > -1)) pathnameIndex = -1
	if (searchIndex > hashIndex && hashIndex > -1) searchIndex = -1
	var pathnameEnd = searchIndex > -1 ? searchIndex : hashIndex > -1 ? hashIndex : url.length
	if (protocolIndex > -1) {
		//it's a full URL
		if (pathnameIndex < 0) pathnameIndex = url.length
		var portIndex = url.indexOf(":", protocolIndex + 1)
		if (portIndex < 0) portIndex = pathnameIndex
		data.protocol = url.slice(0, protocolIndex + 1)
		data.hostname = url.slice(protocolIndex + 3, portIndex)
		data.port = url.slice(portIndex + 1, pathnameIndex)
		data.pathname = url.slice(pathnameIndex, pathnameEnd) || "/"
	}
	else {
		data.protocol = root.protocol
		data.hostname = root.hostname
		data.port = root.port
		if (pathnameIndex === 0) {
			//it's an absolute path
			data.pathname = url.slice(pathnameIndex, pathnameEnd) || "/"
		}
		else if (searchIndex !== 0 && hashIndex !== 0) {
			//it's a relative path
			var slashIndex = root.pathname.lastIndexOf("/")
			var path = slashIndex > -1 ? root.pathname.slice(0, slashIndex + 1) : "./"
			var normalized = url.slice(0, pathnameEnd).replace(/^\.$/, root.pathname.slice(slashIndex + 1)).replace(/^\.\//, "")
			var dotdot = /\/[^\/]+?\/\.{2}/g
			var pathname = path + normalized
			pathname = path + normalized
			while (dotdot.test(pathname)) pathname = pathname.replace(dotdot, "")
			pathname = pathname.replace(/\/\.\//g, "/").replace(/^(\/\.{2})+/, "") || "/"
			data.pathname = pathname
		}
	}
	var searchEnd = hashIndex > -1 ? hashIndex : url.length
	data.search = searchIndex > -1 ? url.slice(searchIndex, searchEnd) : ""
	data.hash = hashIndex > -1 ? url.slice(hashIndex) : ""
	return data
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;/*! showdown 02-06-2017 */
(function(){
/**
 * Created by Tivie on 13-07-2015.
 */

function getDefaultOpts (simple) {
  'use strict';

  var defaultOptions = {
    omitExtraWLInCodeBlocks: {
      defaultValue: false,
      describe: 'Omit the default extra whiteline added to code blocks',
      type: 'boolean'
    },
    noHeaderId: {
      defaultValue: false,
      describe: 'Turn on/off generated header id',
      type: 'boolean'
    },
    prefixHeaderId: {
      defaultValue: false,
      describe: 'Specify a prefix to generated header ids',
      type: 'string'
    },
    ghCompatibleHeaderId: {
      defaultValue: false,
      describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
      type: 'boolean'
    },
    headerLevelStart: {
      defaultValue: false,
      describe: 'The header blocks level start',
      type: 'integer'
    },
    parseImgDimensions: {
      defaultValue: false,
      describe: 'Turn on/off image dimension parsing',
      type: 'boolean'
    },
    simplifiedAutoLink: {
      defaultValue: false,
      describe: 'Turn on/off GFM autolink style',
      type: 'boolean'
    },
    excludeTrailingPunctuationFromURLs: {
      defaultValue: false,
      describe: 'Excludes trailing punctuation from links generated with autoLinking',
      type: 'boolean'
    },
    literalMidWordUnderscores: {
      defaultValue: false,
      describe: 'Parse midword underscores as literal underscores',
      type: 'boolean'
    },
    literalMidWordAsterisks: {
      defaultValue: false,
      describe: 'Parse midword asterisks as literal asterisks',
      type: 'boolean'
    },
    strikethrough: {
      defaultValue: false,
      describe: 'Turn on/off strikethrough support',
      type: 'boolean'
    },
    tables: {
      defaultValue: false,
      describe: 'Turn on/off tables support',
      type: 'boolean'
    },
    tablesHeaderId: {
      defaultValue: false,
      describe: 'Add an id to table headers',
      type: 'boolean'
    },
    ghCodeBlocks: {
      defaultValue: true,
      describe: 'Turn on/off GFM fenced code blocks support',
      type: 'boolean'
    },
    tasklists: {
      defaultValue: false,
      describe: 'Turn on/off GFM tasklist support',
      type: 'boolean'
    },
    smoothLivePreview: {
      defaultValue: false,
      describe: 'Prevents weird effects in live previews due to incomplete input',
      type: 'boolean'
    },
    smartIndentationFix: {
      defaultValue: false,
      description: 'Tries to smartly fix indentation in es6 strings',
      type: 'boolean'
    },
    disableForced4SpacesIndentedSublists: {
      defaultValue: false,
      description: 'Disables the requirement of indenting nested sublists by 4 spaces',
      type: 'boolean'
    },
    simpleLineBreaks: {
      defaultValue: false,
      description: 'Parses simple line breaks as <br> (GFM Style)',
      type: 'boolean'
    },
    requireSpaceBeforeHeadingText: {
      defaultValue: false,
      description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
      type: 'boolean'
    },
    ghMentions: {
      defaultValue: false,
      description: 'Enables github @mentions',
      type: 'boolean'
    },
    ghMentionsLink: {
      defaultValue: 'https://github.com/{u}',
      description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
      type: 'string'
    },
    encodeEmails: {
      defaultValue: true,
      description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
      type: 'boolean'
    },
    openLinksInNewWindow: {
      defaultValue: false,
      description: 'Open all links in new windows',
      type: 'boolean'
    }
  };
  if (simple === false) {
    return JSON.parse(JSON.stringify(defaultOptions));
  }
  var ret = {};
  for (var opt in defaultOptions) {
    if (defaultOptions.hasOwnProperty(opt)) {
      ret[opt] = defaultOptions[opt].defaultValue;
    }
  }
  return ret;
}

function allOptionsOn () {
  'use strict';
  var options = getDefaultOpts(true),
      ret = {};
  for (var opt in options) {
    if (options.hasOwnProperty(opt)) {
      ret[opt] = true;
    }
  }
  return ret;
}

/**
 * Created by Tivie on 06-01-2015.
 */

// Private properties
var showdown = {},
    parsers = {},
    extensions = {},
    globalOptions = getDefaultOpts(true),
    setFlavor = 'vanilla',
    flavor = {
      github: {
        omitExtraWLInCodeBlocks:              true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghCompatibleHeaderId:                 true,
        ghMentions:                           true
      },
      original: {
        noHeaderId:                           true,
        ghCodeBlocks:                         false
      },
      ghost: {
        omitExtraWLInCodeBlocks:              true,
        parseImgDimensions:                   true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        smoothLivePreview:                    true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghMentions:                           false,
        encodeEmails:                         true
      },
      vanilla: getDefaultOpts(true),
      allOn: allOptionsOn()
    };

/**
 * helper namespace
 * @type {{}}
 */
showdown.helper = {};

/**
 * TODO LEGACY SUPPORT CODE
 * @type {{}}
 */
showdown.extensions = {};

/**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {showdown}
 */
showdown.setOption = function (key, value) {
  'use strict';
  globalOptions[key] = value;
  return this;
};

/**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */
showdown.getOption = function (key) {
  'use strict';
  return globalOptions[key];
};

/**
 * Get the global options
 * @static
 * @returns {{}}
 */
showdown.getOptions = function () {
  'use strict';
  return globalOptions;
};

/**
 * Reset global options to the default values
 * @static
 */
showdown.resetOptions = function () {
  'use strict';
  globalOptions = getDefaultOpts(true);
};

/**
 * Set the flavor showdown should use as default
 * @param {string} name
 */
showdown.setFlavor = function (name) {
  'use strict';
  if (!flavor.hasOwnProperty(name)) {
    throw Error(name + ' flavor was not found');
  }
  showdown.resetOptions();
  var preset = flavor[name];
  setFlavor = name;
  for (var option in preset) {
    if (preset.hasOwnProperty(option)) {
      globalOptions[option] = preset[option];
    }
  }
};

/**
 * Get the currently set flavor
 * @returns {string}
 */
showdown.getFlavor = function () {
  'use strict';
  return setFlavor;
};

/**
 * Get the options of a specified flavor. Returns undefined if the flavor was not found
 * @param {string} name Name of the flavor
 * @returns {{}|undefined}
 */
showdown.getFlavorOptions = function (name) {
  'use strict';
  if (flavor.hasOwnProperty(name)) {
    return flavor[name];
  }
};

/**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */
showdown.getDefaultOptions = function (simple) {
  'use strict';
  return getDefaultOpts(simple);
};

/**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */
showdown.subParser = function (name, func) {
  'use strict';
  if (showdown.helper.isString(name)) {
    if (typeof func !== 'undefined') {
      parsers[name] = func;
    } else {
      if (parsers.hasOwnProperty(name)) {
        return parsers[name];
      } else {
        throw Error('SubParser named ' + name + ' not registered!');
      }
    }
  }
};

/**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|function=} ext
 * @returns {*}
 */
showdown.extension = function (name, ext) {
  'use strict';

  if (!showdown.helper.isString(name)) {
    throw Error('Extension \'name\' must be a string');
  }

  name = showdown.helper.stdExtName(name);

  // Getter
  if (showdown.helper.isUndefined(ext)) {
    if (!extensions.hasOwnProperty(name)) {
      throw Error('Extension named ' + name + ' is not registered!');
    }
    return extensions[name];

    // Setter
  } else {
    // Expand extension if it's wrapped in a function
    if (typeof ext === 'function') {
      ext = ext();
    }

    // Ensure extension is an array
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExtension = validate(ext, name);

    if (validExtension.valid) {
      extensions[name] = ext;
    } else {
      throw Error(validExtension.error);
    }
  }
};

/**
 * Gets all extensions registered
 * @returns {{}}
 */
showdown.getAllExtensions = function () {
  'use strict';
  return extensions;
};

/**
 * Remove an extension
 * @param {string} name
 */
showdown.removeExtension = function (name) {
  'use strict';
  delete extensions[name];
};

/**
 * Removes all extensions
 */
showdown.resetExtensions = function () {
  'use strict';
  extensions = {};
};

/**
 * Validate extension
 * @param {array} extension
 * @param {string} name
 * @returns {{valid: boolean, error: string}}
 */
function validate (extension, name) {
  'use strict';

  var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
      ret = {
        valid: true,
        error: ''
      };

  if (!showdown.helper.isArray(extension)) {
    extension = [extension];
  }

  for (var i = 0; i < extension.length; ++i) {
    var baseMsg = errMsg + ' sub-extension ' + i + ': ',
        ext = extension[i];
    if (typeof ext !== 'object') {
      ret.valid = false;
      ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
      return ret;
    }

    if (!showdown.helper.isString(ext.type)) {
      ret.valid = false;
      ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
      return ret;
    }

    var type = ext.type = ext.type.toLowerCase();

    // normalize extension type
    if (type === 'language') {
      type = ext.type = 'lang';
    }

    if (type === 'html') {
      type = ext.type = 'output';
    }

    if (type !== 'lang' && type !== 'output' && type !== 'listener') {
      ret.valid = false;
      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
      return ret;
    }

    if (type === 'listener') {
      if (showdown.helper.isUndefined(ext.listeners)) {
        ret.valid = false;
        ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
        return ret;
      }
    } else {
      if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
        ret.valid = false;
        ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
        return ret;
      }
    }

    if (ext.listeners) {
      if (typeof ext.listeners !== 'object') {
        ret.valid = false;
        ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
        return ret;
      }
      for (var ln in ext.listeners) {
        if (ext.listeners.hasOwnProperty(ln)) {
          if (typeof ext.listeners[ln] !== 'function') {
            ret.valid = false;
            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
              ' must be a function but ' + typeof ext.listeners[ln] + ' given';
            return ret;
          }
        }
      }
    }

    if (ext.filter) {
      if (typeof ext.filter !== 'function') {
        ret.valid = false;
        ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
        return ret;
      }
    } else if (ext.regex) {
      if (showdown.helper.isString(ext.regex)) {
        ext.regex = new RegExp(ext.regex, 'g');
      }
      if (!(ext.regex instanceof RegExp)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
        return ret;
      }
      if (showdown.helper.isUndefined(ext.replace)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
        return ret;
      }
    }
  }
  return ret;
}

/**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */
showdown.validateExtension = function (ext) {
  'use strict';

  var validateExtension = validate(ext, null);
  if (!validateExtension.valid) {
    console.warn(validateExtension.error);
    return false;
  }
  return true;
};

/**
 * showdownjs helper functions
 */

if (!showdown.hasOwnProperty('helper')) {
  showdown.helper = {};
}

/**
 * Check if var is string
 * @static
 * @param {string} a
 * @returns {boolean}
 */
showdown.helper.isString = function (a) {
  'use strict';
  return (typeof a === 'string' || a instanceof String);
};

/**
 * Check if var is a function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isFunction = function (a) {
  'use strict';
  var getType = {};
  return a && getType.toString.call(a) === '[object Function]';
};

/**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isArray = function (a) {
  'use strict';
  return a.constructor === Array;
};

/**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */
showdown.helper.isUndefined = function (value) {
  'use strict';
  return typeof value === 'undefined';
};

/**
 * ForEach helper function
 * Iterates over Arrays and Objects (own properties only)
 * @static
 * @param {*} obj
 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
 */
showdown.helper.forEach = function (obj, callback) {
  'use strict';
  // check if obj is defined
  if (showdown.helper.isUndefined(obj)) {
    throw new Error('obj param is required');
  }

  if (showdown.helper.isUndefined(callback)) {
    throw new Error('callback param is required');
  }

  if (!showdown.helper.isFunction(callback)) {
    throw new Error('callback param must be a function/closure');
  }

  if (typeof obj.forEach === 'function') {
    obj.forEach(callback);
  } else if (showdown.helper.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  } else if (typeof (obj) === 'object') {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        callback(obj[prop], prop, obj);
      }
    }
  } else {
    throw new Error('obj does not seem to be an array or an iterable object');
  }
};

/**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */
showdown.helper.stdExtName = function (s) {
  'use strict';
  return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
};

function escapeCharactersCallback (wholeMatch, m1) {
  'use strict';
  var charCodeToEscape = m1.charCodeAt(0);
  return '¨E' + charCodeToEscape + 'E';
}

/**
 * Callback used to escape characters when passing through String.replace
 * @static
 * @param {string} wholeMatch
 * @param {string} m1
 * @returns {string}
 */
showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

/**
 * Escape characters in a string
 * @static
 * @param {string} text
 * @param {string} charsToEscape
 * @param {boolean} afterBackslash
 * @returns {XML|string|void|*}
 */
showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
  'use strict';
  // First we have to escape the escape characters so that
  // we can build a character class out of them
  var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

  if (afterBackslash) {
    regexString = '\\\\' + regexString;
  }

  var regex = new RegExp(regexString, 'g');
  text = text.replace(regex, escapeCharactersCallback);

  return text;
};

var rgxFindMatchPos = function (str, left, right, flags) {
  'use strict';
  var f = flags || '',
      g = f.indexOf('g') > -1,
      x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
      l = new RegExp(left, f.replace(/g/g, '')),
      pos = [],
      t, s, m, start, end;

  do {
    t = 0;
    while ((m = x.exec(str))) {
      if (l.test(m[0])) {
        if (!(t++)) {
          s = x.lastIndex;
          start = s - m[0].length;
        }
      } else if (t) {
        if (!--t) {
          end = m.index + m[0].length;
          var obj = {
            left: {start: start, end: s},
            match: {start: s, end: m.index},
            right: {start: m.index, end: end},
            wholeMatch: {start: start, end: end}
          };
          pos.push(obj);
          if (!g) {
            return pos;
          }
        }
      }
    }
  } while (t && (x.lastIndex = s));

  return pos;
};

/**
 * matchRecursiveRegExp
 *
 * (c) 2007 Steven Levithan <stevenlevithan.com>
 * MIT License
 *
 * Accepts a string to search, a left and right format delimiter
 * as regex patterns, and optional regex flags. Returns an array
 * of matches, allowing nested instances of left/right delimiters.
 * Use the "g" flag to return all matches, otherwise only the
 * first is returned. Be careful to ensure that the left and
 * right format delimiters produce mutually exclusive matches.
 * Backreferences are not supported within the right delimiter
 * due to how it is internally combined with the left delimiter.
 * When matching strings whose format delimiters are unbalanced
 * to the left or right, the output is intentionally as a
 * conventional regex library with recursion support would
 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
 * "<" and ">" as the delimiters (both strings contain a single,
 * balanced instance of "<x>").
 *
 * examples:
 * matchRecursiveRegExp("test", "\\(", "\\)")
 * returns: []
 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
 * returns: ["t<<e>><s>", ""]
 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
 * returns: ["test"]
 */
showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
  'use strict';

  var matchPos = rgxFindMatchPos (str, left, right, flags),
      results = [];

  for (var i = 0; i < matchPos.length; ++i) {
    results.push([
      str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
      str.slice(matchPos[i].match.start, matchPos[i].match.end),
      str.slice(matchPos[i].left.start, matchPos[i].left.end),
      str.slice(matchPos[i].right.start, matchPos[i].right.end)
    ]);
  }
  return results;
};

/**
 *
 * @param {string} str
 * @param {string|function} replacement
 * @param {string} left
 * @param {string} right
 * @param {string} flags
 * @returns {string}
 */
showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
  'use strict';

  if (!showdown.helper.isFunction(replacement)) {
    var repStr = replacement;
    replacement = function () {
      return repStr;
    };
  }

  var matchPos = rgxFindMatchPos(str, left, right, flags),
      finalStr = str,
      lng = matchPos.length;

  if (lng > 0) {
    var bits = [];
    if (matchPos[0].wholeMatch.start !== 0) {
      bits.push(str.slice(0, matchPos[0].wholeMatch.start));
    }
    for (var i = 0; i < lng; ++i) {
      bits.push(
        replacement(
          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
          str.slice(matchPos[i].match.start, matchPos[i].match.end),
          str.slice(matchPos[i].left.start, matchPos[i].left.end),
          str.slice(matchPos[i].right.start, matchPos[i].right.end)
        )
      );
      if (i < lng - 1) {
        bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
      }
    }
    if (matchPos[lng - 1].wholeMatch.end < str.length) {
      bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
    }
    finalStr = bits.join('');
  }
  return finalStr;
};

/**
 * Returns the index within the passed String object of the first occurrence of the specified regex,
 * starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param {string} str string to search
 * @param {RegExp} regex Regular expression to search
 * @param {int} [fromIndex = 0] Index to start the search
 * @returns {Number}
 * @throws InvalidArgumentError
 */
showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
  'use strict';
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  if (regex instanceof RegExp === false) {
    throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
  }
  var indexOf = str.substring(fromIndex || 0).search(regex);
  return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
};

/**
 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
 * @param {string} str string to split
 * @param {int} index index to split string at
 * @returns {[string,string]}
 * @throws InvalidArgumentError
 */
showdown.helper.splitAtIndex = function (str, index) {
  'use strict';
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  return [str.substring(0, index), str.substring(index)];
};

/**
 * Obfuscate an e-mail address through the use of Character Entities,
 * transforming ASCII characters into their equivalent decimal or hex entities.
 *
 * Since it has a random component, subsequent calls to this function produce different results
 *
 * @param {string} mail
 * @returns {string}
 */
showdown.helper.encodeEmailAddress = function (mail) {
  'use strict';
  var encode = [
    function (ch) {
      return '&#' + ch.charCodeAt(0) + ';';
    },
    function (ch) {
      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
    },
    function (ch) {
      return ch;
    }
  ];

  mail = mail.replace(/./g, function (ch) {
    if (ch === '@') {
      // this *must* be encoded. I insist.
      ch = encode[Math.floor(Math.random() * 2)](ch);
    } else {
      var r = Math.random();
      // roughly 10% raw, 45% hex, 45% dec
      ch = (
        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
      );
    }
    return ch;
  });

  return mail;
};

/**
 * POLYFILLS
 */
// use this instead of builtin is undefined for IE8 compatibility
if (typeof(console) === 'undefined') {
  console = {
    warn: function (msg) {
      'use strict';
      alert(msg);
    },
    log: function (msg) {
      'use strict';
      alert(msg);
    },
    error: function (msg) {
      'use strict';
      throw msg;
    }
  };
}

/**
 * Common regexes.
 * We declare some common regexes to improve performance
 */
showdown.helper.regexes = {
  asteriskAndDash: /([*_])/g
};

/**
 * Created by Estevao on 31-05-2015.
 */

/**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {Converter}
 */
showdown.Converter = function (converterOptions) {
  'use strict';

  var
      /**
       * Options used by this converter
       * @private
       * @type {{}}
       */
      options = {},

      /**
       * Language extensions used by this converter
       * @private
       * @type {Array}
       */
      langExtensions = [],

      /**
       * Output modifiers extensions used by this converter
       * @private
       * @type {Array}
       */
      outputModifiers = [],

      /**
       * Event listeners
       * @private
       * @type {{}}
       */
      listeners = {},

      /**
       * The flavor set in this converter
       */
      setConvFlavor = setFlavor;

  _constructor();

  /**
   * Converter constructor
   * @private
   */
  function _constructor () {
    converterOptions = converterOptions || {};

    for (var gOpt in globalOptions) {
      if (globalOptions.hasOwnProperty(gOpt)) {
        options[gOpt] = globalOptions[gOpt];
      }
    }

    // Merge options
    if (typeof converterOptions === 'object') {
      for (var opt in converterOptions) {
        if (converterOptions.hasOwnProperty(opt)) {
          options[opt] = converterOptions[opt];
        }
      }
    } else {
      throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
      ' was passed instead.');
    }

    if (options.extensions) {
      showdown.helper.forEach(options.extensions, _parseExtension);
    }
  }

  /**
   * Parse extension
   * @param {*} ext
   * @param {string} [name='']
   * @private
   */
  function _parseExtension (ext, name) {

    name = name || null;
    // If it's a string, the extension was previously loaded
    if (showdown.helper.isString(ext)) {
      ext = showdown.helper.stdExtName(ext);
      name = ext;

      // LEGACY_SUPPORT CODE
      if (showdown.extensions[ext]) {
        console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
          'Please inform the developer that the extension should be updated!');
        legacyExtensionLoading(showdown.extensions[ext], ext);
        return;
      // END LEGACY SUPPORT CODE

      } else if (!showdown.helper.isUndefined(extensions[ext])) {
        ext = extensions[ext];

      } else {
        throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
      }
    }

    if (typeof ext === 'function') {
      ext = ext();
    }

    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExt = validate(ext, name);
    if (!validExt.valid) {
      throw Error(validExt.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {

        case 'lang':
          langExtensions.push(ext[i]);
          break;

        case 'output':
          outputModifiers.push(ext[i]);
          break;
      }
      if (ext[i].hasOwnProperty('listeners')) {
        for (var ln in ext[i].listeners) {
          if (ext[i].listeners.hasOwnProperty(ln)) {
            listen(ln, ext[i].listeners[ln]);
          }
        }
      }
    }

  }

  /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */
  function legacyExtensionLoading (ext, name) {
    if (typeof ext === 'function') {
      ext = ext(new showdown.Converter());
    }
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }
    var valid = validate(ext, name);

    if (!valid.valid) {
      throw Error(valid.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {
        case 'lang':
          langExtensions.push(ext[i]);
          break;
        case 'output':
          outputModifiers.push(ext[i]);
          break;
        default:// should never reach here
          throw Error('Extension loader error: Type unrecognized!!!');
      }
    }
  }

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   */
  function listen (name, callback) {
    if (!showdown.helper.isString(name)) {
      throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
    }

    if (typeof callback !== 'function') {
      throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
    }

    if (!listeners.hasOwnProperty(name)) {
      listeners[name] = [];
    }
    listeners[name].push(callback);
  }

  function rTrimInputText (text) {
    var rsp = text.match(/^\s*/)[0].length,
        rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
    return text.replace(rgx, '');
  }

  /**
   * Dispatch an event
   * @private
   * @param {string} evtName Event name
   * @param {string} text Text
   * @param {{}} options Converter Options
   * @param {{}} globals
   * @returns {string}
   */
  this._dispatch = function dispatch (evtName, text, options, globals) {
    if (listeners.hasOwnProperty(evtName)) {
      for (var ei = 0; ei < listeners[evtName].length; ++ei) {
        var nText = listeners[evtName][ei](evtName, text, this, options, globals);
        if (nText && typeof nText !== 'undefined') {
          text = nText;
        }
      }
    }
    return text;
  };

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   * @returns {showdown.Converter}
   */
  this.listen = function (name, callback) {
    listen(name, callback);
    return this;
  };

  /**
   * Converts a markdown string into HTML
   * @param {string} text
   * @returns {*}
   */
  this.makeHtml = function (text) {
    //check if text is not falsy
    if (!text) {
      return text;
    }

    var globals = {
      gHtmlBlocks:     [],
      gHtmlMdBlocks:   [],
      gHtmlSpans:      [],
      gUrls:           {},
      gTitles:         {},
      gDimensions:     {},
      gListLevel:      0,
      hashLinkCounts:  {},
      langExtensions:  langExtensions,
      outputModifiers: outputModifiers,
      converter:       this,
      ghCodeBlocks:    []
    };

    // This lets us use ¨ trema as an escape char to avoid md5 hashes
    // The choice of character is arbitrary; anything that isn't
    // magic in Markdown will work.
    text = text.replace(/¨/g, '¨T');

    // Replace $ with ¨D
    // RegExp interprets $ as a special character
    // when it's in a replacement string
    text = text.replace(/\$/g, '¨D');

    // Standardize line endings
    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
    text = text.replace(/\r/g, '\n'); // Mac to Unix

    // Stardardize line spaces (nbsp causes trouble in older browsers and some regex flavors)
    text = text.replace(/\u00A0/g, ' ');

    if (options.smartIndentationFix) {
      text = rTrimInputText(text);
    }

    // Make sure text begins and ends with a couple of newlines:
    text = '\n\n' + text + '\n\n';

    // detab
    text = showdown.subParser('detab')(text, options, globals);

    /**
     * Strip any lines consisting only of spaces and tabs.
     * This makes subsequent regexs easier to write, because we can
     * match consecutive blank lines with /\n+/ instead of something
     * contorted like /[ \t]*\n+/
     */
    text = text.replace(/^[ \t]+$/mg, '');

    //run languageExtensions
    showdown.helper.forEach(langExtensions, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // run the sub parsers
    text = showdown.subParser('hashPreCodeTags')(text, options, globals);
    text = showdown.subParser('githubCodeBlocks')(text, options, globals);
    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
    text = showdown.subParser('hashCodeTags')(text, options, globals);
    text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
    text = showdown.subParser('blockGamut')(text, options, globals);
    text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
    text = showdown.subParser('unescapeSpecialChars')(text, options, globals);

    // attacklab: Restore dollar signs
    text = text.replace(/¨D/g, '$$');

    // attacklab: Restore tremas
    text = text.replace(/¨T/g, '¨');

    // Run output modifiers
    showdown.helper.forEach(outputModifiers, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    return text;
  };

  /**
   * Set an option of this Converter instance
   * @param {string} key
   * @param {*} value
   */
  this.setOption = function (key, value) {
    options[key] = value;
  };

  /**
   * Get the option of this Converter instance
   * @param {string} key
   * @returns {*}
   */
  this.getOption = function (key) {
    return options[key];
  };

  /**
   * Get the options of this Converter instance
   * @returns {{}}
   */
  this.getOptions = function () {
    return options;
  };

  /**
   * Add extension to THIS converter
   * @param {{}} extension
   * @param {string} [name=null]
   */
  this.addExtension = function (extension, name) {
    name = name || null;
    _parseExtension(extension, name);
  };

  /**
   * Use a global registered extension with THIS converter
   * @param {string} extensionName Name of the previously registered extension
   */
  this.useExtension = function (extensionName) {
    _parseExtension(extensionName);
  };

  /**
   * Set the flavor THIS converter should use
   * @param {string} name
   */
  this.setFlavor = function (name) {
    if (!flavor.hasOwnProperty(name)) {
      throw Error(name + ' flavor was not found');
    }
    var preset = flavor[name];
    setConvFlavor = name;
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        options[option] = preset[option];
      }
    }
  };

  /**
   * Get the currently set flavor of this converter
   * @returns {string}
   */
  this.getFlavor = function () {
    return setConvFlavor;
  };

  /**
   * Remove an extension from THIS converter.
   * Note: This is a costly operation. It's better to initialize a new converter
   * and specify the extensions you wish to use
   * @param {Array} extension
   */
  this.removeExtension = function (extension) {
    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }
    for (var a = 0; a < extension.length; ++a) {
      var ext = extension[a];
      for (var i = 0; i < langExtensions.length; ++i) {
        if (langExtensions[i] === ext) {
          langExtensions[i].splice(i, 1);
        }
      }
      for (var ii = 0; ii < outputModifiers.length; ++i) {
        if (outputModifiers[ii] === ext) {
          outputModifiers[ii].splice(i, 1);
        }
      }
    }
  };

  /**
   * Get all extension of THIS converter
   * @returns {{language: Array, output: Array}}
   */
  this.getAllExtensions = function () {
    return {
      language: langExtensions,
      output: outputModifiers
    };
  };
};

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('anchors', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('anchors.before', text, options, globals);

  var writeAnchorTag = function (wholeMatch, linkText, linkId, url, m5, m6, title) {
    if (showdown.helper.isUndefined(title)) {
      title = '';
    }
    linkId = linkId.toLowerCase();

    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';
    } else if (!url) {
      if (!linkId) {
        // lower-case and turn embedded newlines into spaces
        linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
        url = globals.gUrls[linkId];
        if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
          title = globals.gTitles[linkId];
        }
      } else {
        return wholeMatch;
      }
    }

    //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
    url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);

    var result = '<a href="' + url + '"';

    if (title !== '' && title !== null) {
      title = title.replace(/"/g, '&quot;');
      //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
      title = title.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    if (options.openLinksInNewWindow) {
      // escaped _
      result += ' target="¨E95Eblank"';
    }

    result += '>' + linkText + '</a>';

    return result;
  };

  // First, handle reference-style links: [link text] [id]
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);

  // Next, inline-style links: [link text](url "optional title")
  // cases with crazy urls like ./image/cat1).png
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
    writeAnchorTag);

  // normal cases
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
                      writeAnchorTag);

  // handle reference-style shortcuts: [link text]
  // These must come last in case you've also got [link test][1]
  // or [link test](/foo)
  text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);

  // Lastly handle GithubMentions if option is enabled
  if (options.ghMentions) {
    text = text.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gmi, function (wm, st, escape, mentions, username) {
      if (escape === '\\') {
        return st + mentions;
      }

      //check if options.ghMentionsLink is a string
      if (!showdown.helper.isString(options.ghMentionsLink)) {
        throw new Error('ghMentionsLink option must be a string');
      }
      var lnk = options.ghMentionsLink.replace(/\{u}/g, username);
      return st + '<a href="' + lnk + '">' + mentions + '</a>';
    });
  }

  text = globals.converter._dispatch('anchors.after', text, options, globals);
  return text;
});

// url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

var simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,
    simpleURLRegex2 = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]]?)(?=\s|$)(?!["<>])/gi,
    //simpleURLRegex3 = /\b(((https?|ftp):\/\/|www\.)[a-z\d.-]+\.[a-z\d_.~:/?#\[\]@!$&'()*+,;=-]+?)([.!?()]?)(?=\s|$)(?!["<>])/gi,
    delimUrlRegex   = /<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>/gi,
    simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
    delimMailRegex  = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,

    replaceLink = function (options) {
      'use strict';

      return function (wm, link, m2, m3, trailingPunctuation) {
        var lnkTxt = link,
            append = '',
            target = '';
        if (/^www\./i.test(link)) {
          link = link.replace(/^www\./i, 'http://www.');
        }
        if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
          append = trailingPunctuation;
        }
        if (options.openLinksInNewWindow) {
          target = ' target="¨E95Eblank"';
        }
        return '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append;
      };
    },

    replaceMail = function (options, globals) {
      'use strict';
      return function (wholeMatch, b, mail) {
        var href = 'mailto:';
        b = b || '';
        mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
        if (options.encodeEmails) {
          href = showdown.helper.encodeEmailAddress(href + mail);
          mail = showdown.helper.encodeEmailAddress(mail);
        } else {
          href = href + mail;
        }
        return b + '<a href="' + href + '">' + mail + '</a>';
      };
    };

showdown.subParser('autoLinks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('autoLinks.before', text, options, globals);

  text = text.replace(delimUrlRegex, replaceLink(options));
  text = text.replace(delimMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('autoLinks.after', text, options, globals);

  return text;
});

showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
  'use strict';

  if (!options.simplifiedAutoLink) {
    return text;
  }

  text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);

  if (options.excludeTrailingPunctuationFromURLs) {
    text = text.replace(simpleURLRegex2, replaceLink(options));
  } else {
    text = text.replace(simpleURLRegex, replaceLink(options));
  }
  text = text.replace(simpleMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);

  return text;
});

/**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('blockGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockGamut.before', text, options, globals);

  // we parse blockquotes first so that we can have headings and hrs
  // inside blockquotes
  text = showdown.subParser('blockQuotes')(text, options, globals);
  text = showdown.subParser('headers')(text, options, globals);

  // Do Horizontal Rules:
  text = showdown.subParser('horizontalRule')(text, options, globals);

  text = showdown.subParser('lists')(text, options, globals);
  text = showdown.subParser('codeBlocks')(text, options, globals);
  text = showdown.subParser('tables')(text, options, globals);

  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
  // was to escape raw HTML in the original Markdown source. This time,
  // we're escaping the markup we've just created, so that we don't wrap
  // <p> tags around block-level tags.
  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
  text = showdown.subParser('paragraphs')(text, options, globals);

  text = globals.converter._dispatch('blockGamut.after', text, options, globals);

  return text;
});

showdown.subParser('blockQuotes', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockQuotes.before', text, options, globals);

  text = text.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (wholeMatch, m1) {
    var bq = m1;

    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"
    bq = bq.replace(/^[ \t]*>[ \t]?/gm, '¨0'); // trim one level of quoting

    // attacklab: clean up hack
    bq = bq.replace(/¨0/g, '');

    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
    bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

    bq = bq.replace(/(^|\n)/g, '$1  ');
    // These leading spaces screw with <pre> content, so we need to fix that:
    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
      var pre = m1;
      // attacklab: hack around Konqueror 3.5.4 bug:
      pre = pre.replace(/^  /mg, '¨0');
      pre = pre.replace(/¨0/g, '');
      return pre;
    });

    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
  });

  text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
  return text;
});

/**
 * Process Markdown `<pre><code>` blocks.
 */
showdown.subParser('codeBlocks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeBlocks.before', text, options, globals);

  // sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
  text = text.replace(pattern, function (wholeMatch, m1, m2) {
    var codeblock = m1,
        nextChar = m2,
        end = '\n';

    codeblock = showdown.subParser('outdent')(codeblock, options, globals);
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

    if (options.omitExtraWLInCodeBlocks) {
      end = '';
    }

    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
  });

  // strip sentinel
  text = text.replace(/¨0/, '');

  text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
  return text;
});

/**
 *
 *   *  Backtick quotes are used for <code></code> spans.
 *
 *   *  You can use multiple backticks as the delimiters if you want to
 *     include literal backticks in the code span. So, this input:
 *
 *         Just type ``foo `bar` baz`` at the prompt.
 *
 *       Will translate to:
 *
 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
 *
 *    There's no arbitrary limit to the number of backticks you
 *    can use as delimters. If you need three consecutive backticks
 *    in your code, use four for delimiters, etc.
 *
 *  *  You can use spaces to get literal backticks at the edges:
 *
 *         ... type `` `bar` `` ...
 *
 *       Turns to:
 *
 *         ... type <code>`bar`</code> ...
 */
showdown.subParser('codeSpans', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeSpans.before', text, options, globals);

  if (typeof(text) === 'undefined') {
    text = '';
  }
  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
    function (wholeMatch, m1, m2, m3) {
      var c = m3;
      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
      c = showdown.subParser('encodeCode')(c, options, globals);
      return m1 + '<code>' + c + '</code>';
    }
  );

  text = globals.converter._dispatch('codeSpans.after', text, options, globals);
  return text;
});

/**
 * Convert all tabs to spaces
 */
showdown.subParser('detab', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('detab.before', text, options, globals);

  // expand first n-1 tabs
  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

  // replace the nth with two sentinels
  text = text.replace(/\t/g, '¨A¨B');

  // use the sentinel to anchor our regex so it doesn't explode
  text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
    var leadingText = m1,
        numSpaces = 4 - leadingText.length % 4;  // g_tab_width

    // there *must* be a better way to do this:
    for (var i = 0; i < numSpaces; i++) {
      leadingText += ' ';
    }

    return leadingText;
  });

  // clean up sentinels
  text = text.replace(/¨A/g, '    ');  // g_tab_width
  text = text.replace(/¨B/g, '');

  text = globals.converter._dispatch('detab.after', text, options, globals);
  return text;
});

/**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */
showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);

  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
  // http://bumppo.net/projects/amputator/
  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

  // Encode naked <'s
  text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');

  // Encode <
  text = text.replace(/</g, '&lt;');

  // Encode >
  text = text.replace(/>/g, '&gt;');

  text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
  return text;
});

/**
 * Returns the string, with after processing the following backslash escape sequences.
 *
 * attacklab: The polite way to do this is with the new escapeCharacters() function:
 *
 *    text = escapeCharacters(text,"\\",true);
 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
 *
 * ...but we're sidestepping its use of the (slow) RegExp constructor
 * as an optimization for Firefox.  This function gets called a LOT.
 */
showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);

  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
  text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
  return text;
});

/**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */
showdown.subParser('encodeCode', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('encodeCode.before', text, options, globals);

  // Encode all ampersands; HTML entities are not
  // entities within a Markdown code span.
  text = text
    .replace(/&/g, '&amp;')
  // Do the angle bracket song and dance:
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  // Now, escape characters that are magic in Markdown:
    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeCode.after', text, options, globals);
  return text;
});

/**
 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */
showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);

  // Build a regex to find HTML tags and comments.  See Friedl's
  // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
  var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

  text = text.replace(regex, function (wholeMatch) {
    return wholeMatch
      .replace(/(.)<\/?code>(?=.)/g, '$1`')
      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
  });

  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
  return text;
});

/**
 * Handle github codeblocks prior to running HashHTML so that
 * HTML contained within the codeblock gets escaped properly
 * Example:
 * ```ruby
 *     def hello_world(x)
 *       puts "Hello, #{x}"
 *     end
 * ```
 */
showdown.subParser('githubCodeBlocks', function (text, options, globals) {
  'use strict';

  // early exit if option is not enabled
  if (!options.ghCodeBlocks) {
    return text;
  }

  text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);

  text += '¨0';

  text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function (wholeMatch, language, codeblock) {
    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';

    // First parse the github code block
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

    codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);

    // Since GHCodeblocks can be false positives, we need to
    // store the primitive text and the parsed text in a global var,
    // and then return a token
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  });

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
});

showdown.subParser('hashBlock', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashBlock.before', text, options, globals);
  text = text.replace(/(^\n+|\n+$)/g, '');
  text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
  text = globals.converter._dispatch('hashBlock.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <code> elements that should not be parsed as markdown
 */
showdown.subParser('hashCodeTags', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
  };

  // Hash naked <code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');

  text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('hashElement', function (text, options, globals) {
  'use strict';

  return function (wholeMatch, m1) {
    var blockText = m1;

    // Undo double lines
    blockText = blockText.replace(/\n\n/g, '\n');
    blockText = blockText.replace(/^\n/, '');

    // strip trailing blank lines
    blockText = blockText.replace(/\n+$/g, '');

    // Replace the element text with a marker ("¨KxK" where x is its key)
    blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

    return blockText;
  };
});

showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

  var blockTags = [
        'pre',
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'table',
        'dl',
        'ol',
        'ul',
        'script',
        'noscript',
        'form',
        'fieldset',
        'iframe',
        'math',
        'style',
        'section',
        'header',
        'footer',
        'nav',
        'article',
        'aside',
        'address',
        'audio',
        'canvas',
        'figure',
        'hgroup',
        'output',
        'video',
        'p'
      ],
      repFunc = function (wholeMatch, match, left, right) {
        var txt = wholeMatch;
        // check if this html element is marked as markdown
        // if so, it's contents should be parsed as markdown
        if (left.search(/\bmarkdown\b/) !== -1) {
          txt = left + globals.converter.makeHtml(match) + right;
        }
        return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
      };

  for (var i = 0; i < blockTags.length; ++i) {

    var opTagPos,
        rgx1     = new RegExp('^ {0,3}<' + blockTags[i] + '\\b[^>]*>', 'im'),
        patLeft  = '<' + blockTags[i] + '\\b[^>]*>',
        patRight = '</' + blockTags[i] + '>';
    // 1. Look for the first position of the first opening HTML tag in the text
    while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
      //2. Split the text in that position
      var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
      //3. Match recursively
          newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');

      // prevent an infinite loop
      if (newSubText1 === subTexts[1]) {
        break;
      }
      text = subTexts[0].concat(newSubText1);
    }
  }
  // HR SPECIAL CASE
  text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  // Special case for standalone HTML comments
  text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
    return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
  }, '^ {0,3}<!--', '-->', 'gm');

  // PHP and ASP-style processor instructions (<?...?> and <%...%>)
  text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
  return text;
});

/**
 * Hash span elements that should not be parsed as markdown
 */
showdown.subParser('hashHTMLSpans', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

  function hashHTMLSpan (html) {
    return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
  }

  // Hash Self Closing tags
  text = text.replace(/<[^>]+?\/>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags without properties
  text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags with properties
  text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash self closing tags without />
  text = text.replace(/<[^>]+?>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

  text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Unhash HTML spans
 */
showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

  for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
    var repText = globals.gHtmlSpans[i],
        // limiter to prevent infinite loop (assume 10 as limit for recurse)
        limit = 0;

    while (/¨C(\d+)C/.test(repText)) {
      var num = RegExp.$1;
      repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
      if (limit === 10) {
        break;
      }
      ++limit;
    }
    text = text.replace('¨C' + i + 'C', repText);
  }

  text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <pre><code> elements that should not be parsed as markdown
 */
showdown.subParser('hashPreCodeTags', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    // encode html entities
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  };

  // Hash <pre><code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');

  text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('headers', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('headers.before', text, options, globals);

  var headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),
      ghHeaderId = options.ghCompatibleHeaderId,

  // Set text-style headers:
  //	Header 1
  //	========
  //
  //	Header 2
  //	--------
  //
      setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
      setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

  text = text.replace(setextRegexH1, function (wholeMatch, m1) {

    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  text = text.replace(setextRegexH2, function (matchFound, m1) {
    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart + 1,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  // atx-style headers:
  //  # Header 1
  //  ## Header 2
  //  ## Header 2 with closing hashes ##
  //  ...
  //  ###### Header 6
  //
  var atxStyle = (options.requireSpaceBeforeHeadingText) ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

  text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
    var hText = m2;
    if (options.customizedHeaderId) {
      hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
    }

    var span = showdown.subParser('spanGamut')(hText, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
        hLevel = headerLevelStart - 1 + m1.length,
        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

    return showdown.subParser('hashBlock')(header, options, globals);
  });

  function headerId (m) {
    var title;

    // It is separate from other options to allow combining prefix and customized
    if (options.customizedHeaderId) {
      var match = m.match(/\{([^{]+?)}\s*$/);
      if (match && match[1]) {
        m = match[1];
      }
    }

    // Prefix id to prevent causing inadvertent pre-existing style matches.
    if (showdown.helper.isString(options.prefixHeaderId)) {
      title = options.prefixHeaderId + m;
    } else if (options.prefixHeaderId === true) {
      title = 'section ' + m;
    } else {
      title = m;
    }

    if (ghHeaderId) {
      title = title
        .replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '')
        .replace(/¨T/g, '')
        .replace(/¨D/g, '')
        // replace rest of the chars (&~$ are repeated as they might have been escaped)
        // borrowed from github's redcarpet (some they should produce similar results)
        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
        .toLowerCase();
    } else {
      title = title
        .replace(/[^\w]/g, '')
        .toLowerCase();
    }

    if (globals.hashLinkCounts[title]) {
      title = title + '-' + (globals.hashLinkCounts[title]++);
    } else {
      globals.hashLinkCounts[title] = 1;
    }
    return title;
  }

  text = globals.converter._dispatch('headers.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('horizontalRule', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('horizontalRule.before', text, options, globals);

  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
  text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);

  text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown image shortcuts into <img> tags.
 */
showdown.subParser('images', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('images.before', text, options, globals);

  var inlineRegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
      crazyRegExp       = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
      referenceRegExp   = /!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,
      refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {

    var gUrls   = globals.gUrls,
        gTitles = globals.gTitles,
        gDims   = globals.gDimensions;

    linkId = linkId.toLowerCase();

    if (!title) {
      title = '';
    }
    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';

    } else if (url === '' || url === null) {
      if (linkId === '' || linkId === null) {
        // lower-case and turn embedded newlines into spaces
        linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(gUrls[linkId])) {
        url = gUrls[linkId];
        if (!showdown.helper.isUndefined(gTitles[linkId])) {
          title = gTitles[linkId];
        }
        if (!showdown.helper.isUndefined(gDims[linkId])) {
          width = gDims[linkId].width;
          height = gDims[linkId].height;
        }
      } else {
        return wholeMatch;
      }
    }

    altText = altText
      .replace(/"/g, '&quot;')
    //altText = showdown.helper.escapeCharacters(altText, '*_', false);
      .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
    //url = showdown.helper.escapeCharacters(url, '*_', false);
    url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
    var result = '<img src="' + url + '" alt="' + altText + '"';

    if (title) {
      title = title
        .replace(/"/g, '&quot;')
      //title = showdown.helper.escapeCharacters(title, '*_', false);
        .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    if (width && height) {
      width  = (width === '*') ? 'auto' : width;
      height = (height === '*') ? 'auto' : height;

      result += ' width="' + width + '"';
      result += ' height="' + height + '"';
    }

    result += ' />';

    return result;
  }

  // First, handle reference-style labeled images: ![alt text][id]
  text = text.replace(referenceRegExp, writeImageTag);

  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
  // cases with crazy urls like ./image/cat1).png
  text = text.replace(crazyRegExp, writeImageTag);

  // normal cases
  text = text.replace(inlineRegExp, writeImageTag);

  // handle reference-style shortcuts: |[img text]
  text = text.replace(refShortcutRegExp, writeImageTag);

  text = globals.converter._dispatch('images.after', text, options, globals);
  return text;
});

showdown.subParser('italicsAndBold', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);

  // it's faster to have 3 separate regexes for each case than have just one
  // because of backtracing, in some cases, it could lead to an exponential effect
  // called "catastrophic backtrace". Ominous!

  function parseInside (txt, left, right) {
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    return left + txt + right;
  }

  // Parse underscores
  if (options.literalMidWordUnderscores) {
    text = text.replace(/\b___(\S[\s\S]*)___\b/g, function (wm, txt) {
      return parseInside (txt, '<strong><em>', '</em></strong>');
    });
    text = text.replace(/\b__(\S[\s\S]*)__\b/g, function (wm, txt) {
      return parseInside (txt, '<strong>', '</strong>');
    });
    text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
      return parseInside (txt, '<em>', '</em>');
    });
  } else {
    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
      // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }

  // Now parse asterisks
  if (options.literalMidWordAsterisks) {
    text = text.trim().replace(/(?:^| +)\*{3}(\S[\s\S]*?)\*{3}(?: +|$)/g, function (wm, txt) {
      return parseInside (txt, ' <strong><em>', '</em></strong> ');
    });
    text = text.trim().replace(/(?:^| +)\*{2}(\S[\s\S]*?)\*{2}(?: +|$)/g, function (wm, txt) {
      return parseInside (txt, ' <strong>', '</strong> ');
    });
    text = text.trim().replace(/(?:^| +)\*{1}(\S[\s\S]*?)\*{1}(?: +|$)/g, function (wm, txt) {
      return parseInside (txt, ' <em>', '</em>' + (wm.slice(-1) === ' ' ? ' ' : ''));
    });
  } else {
    text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
      // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }


  text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
  return text;
});

/**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */
showdown.subParser('lists', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('lists.before', text, options, globals);

  /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function processListItems (listStr, trimTrailing) {
    // The $g_list_level global keeps track of when we're inside a list.
    // Each time we enter a list, we increment it; when we leave a list,
    // we decrement. If it's zero, we're not in a list anymore.
    //
    // We do this because when we're not inside a list, we want to treat
    // something like this:
    //
    //    I recommend upgrading to version
    //    8. Oops, now this line is treated
    //    as a sub-list.
    //
    // As a single paragraph, despite the fact that the second line starts
    // with a digit-period-space sequence.
    //
    // Whereas when we're inside a list (or sub-list), that line will be
    // treated as the start of a sub-list. What a kludge, huh? This is
    // an aspect of Markdown's syntax that's hard to parse perfectly
    // without resorting to mind-reading. Perhaps the solution is to
    // change the syntax rules such that sub-lists must start with a
    // starting cardinal number; e.g. "1." or "a.".
    globals.gListLevel++;

    // trim trailing blank lines:
    listStr = listStr.replace(/\n{2,}$/, '\n');

    // attacklab: add sentinel to emulate \z
    listStr += '¨0';

    var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
        isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));

    // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
    // which is a syntax breaking change
    // activating this option reverts to old behavior
    if (options.disableForced4SpacesIndentedSublists) {
      rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
    }

    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
      checked = (checked && checked.trim() !== '');

      var item = showdown.subParser('outdent')(m4, options, globals),
          bulletStyle = '';

      // Support for github tasklists
      if (taskbtn && options.tasklists) {
        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
        item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
          if (checked) {
            otp += ' checked';
          }
          otp += '>';
          return otp;
        });
      }

      // ISSUE #312
      // This input: - - - a
      // causes trouble to the parser, since it interprets it as:
      // <ul><li><li><li>a</li></li></li></ul>
      // instead of:
      // <ul><li>- - a</li></ul>
      // So, to prevent it, we will put a marker (¨A)in the beginning of the line
      // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
      item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
        return '¨A' + wm2;
      });

      // m1 - Leading line or
      // Has a double return (multi paragraph) or
      // Has sublist
      if (m1 || (item.search(/\n{2,}/) > -1)) {
        item = showdown.subParser('githubCodeBlocks')(item, options, globals);
        item = showdown.subParser('blockGamut')(item, options, globals);
      } else {
        // Recursion for sub-lists:
        item = showdown.subParser('lists')(item, options, globals);
        item = item.replace(/\n$/, ''); // chomp(item)
        item = showdown.subParser('hashHTMLBlocks')(item, options, globals);
        // Colapse double linebreaks
        item = item.replace(/\n\n+/g, '\n\n');
        // replace double linebreaks with a placeholder
        item = item.replace(/\n\n/g, '¨B');
        if (isParagraphed) {
          item = showdown.subParser('paragraphs')(item, options, globals);
        } else {
          item = showdown.subParser('spanGamut')(item, options, globals);
        }
        item = item.replace(/¨B/g, '\n\n');
      }

      // now we need to remove the marker (¨A)
      item = item.replace('¨A', '');
      // we can finally wrap the line in list item tags
      item =  '<li' + bulletStyle + '>' + item + '</li>\n';

      return item;
    });

    // attacklab: strip sentinel
    listStr = listStr.replace(/¨0/g, '');

    globals.gListLevel--;

    if (trimTrailing) {
      listStr = listStr.replace(/\s+$/, '');
    }

    return listStr;
  }

  /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function parseConsecutiveLists (list, listType, trimTrailing) {
    // check if we caught 2 or more consecutive lists by mistake
    // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
    var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
        ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
        counterRxg = (listType === 'ul') ? olRgx : ulRgx,
        result = '';

    if (list.search(counterRxg) !== -1) {
      (function parseCL (txt) {
        var pos = txt.search(counterRxg);
        if (pos !== -1) {
          // slice
          result += '\n<' + listType + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';

          // invert counterType and listType
          listType = (listType === 'ul') ? 'ol' : 'ul';
          counterRxg = (listType === 'ul') ? olRgx : ulRgx;

          //recurse
          parseCL(txt.slice(pos));
        } else {
          result += '\n<' + listType + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
        }
      })(list);
    } else {
      result = '\n<' + listType + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
    }

    return result;
  }

  // add sentinel to hack around khtml/safari bug:
  // http://bugs.webkit.org/show_bug.cgi?id=11231
  text += '¨0';

  if (globals.gListLevel) {
    text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, list, m2) {
        var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, true);
      }
    );
  } else {
    text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, m1, list, m3) {
        var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, false);
      }
    );
  }

  // strip sentinel
  text = text.replace(/¨0/, '');
  text = globals.converter._dispatch('lists.after', text, options, globals);
  return text;
});

/**
 * Remove one level of line-leading tabs or spaces
 */
showdown.subParser('outdent', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('outdent.before', text, options, globals);

  // attacklab: hack around Konqueror 3.5.4 bug:
  // "----------bug".replace(/^-/g,"") == "bug"
  text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width

  // attacklab: clean up hack
  text = text.replace(/¨0/g, '');

  text = globals.converter._dispatch('outdent.after', text, options, globals);
  return text;
});

/**
 *
 */
showdown.subParser('paragraphs', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('paragraphs.before', text, options, globals);
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');

  var grafs = text.split(/\n{2,}/g),
      grafsOut = [],
      end = grafs.length; // Wrap <p> tags

  for (var i = 0; i < end; i++) {
    var str = grafs[i];
    // if this is an HTML marker, copy it
    if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
      grafsOut.push(str);

    // test for presence of characters to prevent empty lines being parsed
    // as paragraphs (resulting in undesired extra empty paragraphs)
    } else if (str.search(/\S/) >= 0) {
      str = showdown.subParser('spanGamut')(str, options, globals);
      str = str.replace(/^([ \t]*)/g, '<p>');
      str += '</p>';
      grafsOut.push(str);
    }
  }

  /** Unhashify HTML blocks */
  end = grafsOut.length;
  for (i = 0; i < end; i++) {
    var blockText = '',
        grafsOutIt = grafsOut[i],
        codeFlag = false;
    // if this is a marker for an html block...
    // use RegExp.test instead of string.search because of QML bug
    while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
      var delim = RegExp.$1,
          num   = RegExp.$2;

      if (delim === 'K') {
        blockText = globals.gHtmlBlocks[num];
      } else {
        // we need to check if ghBlock is a false positive
        if (codeFlag) {
          // use encoded version of all text
          blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
        } else {
          blockText = globals.ghCodeBlocks[num].codeblock;
        }
      }
      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

      grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
      // Check if grafsOutIt is a pre->code
      if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
        codeFlag = true;
      }
    }
    grafsOut[i] = grafsOutIt;
  }
  text = grafsOut.join('\n');
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');
  return globals.converter._dispatch('paragraphs.after', text, options, globals);
});

/**
 * Run extension
 */
showdown.subParser('runExtension', function (ext, text, options, globals) {
  'use strict';

  if (ext.filter) {
    text = ext.filter(text, globals.converter, options);

  } else if (ext.regex) {
    // TODO remove this when old extension loading mechanism is deprecated
    var re = ext.regex;
    if (!(re instanceof RegExp)) {
      re = new RegExp(re, 'g');
    }
    text = text.replace(re, ext.replace);
  }

  return text;
});

/**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('spanGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('spanGamut.before', text, options, globals);
  text = showdown.subParser('codeSpans')(text, options, globals);
  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

  // Process anchor and image tags. Images must come first,
  // because ![foo][f] looks like an anchor.
  text = showdown.subParser('images')(text, options, globals);
  text = showdown.subParser('anchors')(text, options, globals);

  // Make links out of things like `<http://example.com/>`
  // Must come after anchors, because you can use < and >
  // delimiters in inline links like [this](<url>).
  text = showdown.subParser('autoLinks')(text, options, globals);
  text = showdown.subParser('italicsAndBold')(text, options, globals);
  text = showdown.subParser('strikethrough')(text, options, globals);
  text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);

  // we need to hash HTML tags inside spans
  text = showdown.subParser('hashHTMLSpans')(text, options, globals);

  // now we encode amps and angles
  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);

  // Do hard breaks
  if (options.simpleLineBreaks) {
    // GFM style hard breaks
    text = text.replace(/\n/g, '<br />\n');
  } else {
    // Vanilla hard breaks
    text = text.replace(/  +\n/g, '<br />\n');
  }

  text = globals.converter._dispatch('spanGamut.after', text, options, globals);
  return text;
});

showdown.subParser('strikethrough', function (text, options, globals) {
  'use strict';

  function parseInside (txt) {
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    return '<del>' + txt + '</del>';
  }

  if (options.strikethrough) {
    text = globals.converter._dispatch('strikethrough.before', text, options, globals);
    text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) { return parseInside(txt); });
    text = globals.converter._dispatch('strikethrough.after', text, options, globals);
  }

  return text;
});

/**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 */
showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
  'use strict';

  var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm;

  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  text = text.replace(regex, function (wholeMatch, linkId, url, width, height, blankLines, title) {
    linkId = linkId.toLowerCase();
    globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals);  // Link IDs are case-insensitive

    if (blankLines) {
      // Oops, found blank lines, so it's not a title.
      // Put back the parenthetical statement we stole.
      return blankLines + title;

    } else {
      if (title) {
        globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
      }
      if (options.parseImgDimensions && width && height) {
        globals.gDimensions[linkId] = {
          width:  width,
          height: height
        };
      }
    }
    // Completely remove the definition from the text
    return '';
  });

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return text;
});

showdown.subParser('tables', function (text, options, globals) {
  'use strict';

  if (!options.tables) {
    return text;
  }

  var tableRgx = /^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm;

  function parseStyles (sLine) {
    if (/^:[ \t]*--*$/.test(sLine)) {
      return ' style="text-align:left;"';
    } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
      return ' style="text-align:right;"';
    } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
      return ' style="text-align:center;"';
    } else {
      return '';
    }
  }

  function parseHeaders (header, style) {
    var id = '';
    header = header.trim();
    if (options.tableHeaderId) {
      id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
    }
    header = showdown.subParser('spanGamut')(header, options, globals);

    return '<th' + id + style + '>' + header + '</th>\n';
  }

  function parseCells (cell, style) {
    var subText = showdown.subParser('spanGamut')(cell, options, globals);
    return '<td' + style + '>' + subText + '</td>\n';
  }

  function buildTable (headers, cells) {
    var tb = '<table>\n<thead>\n<tr>\n',
        tblLgn = headers.length;

    for (var i = 0; i < tblLgn; ++i) {
      tb += headers[i];
    }
    tb += '</tr>\n</thead>\n<tbody>\n';

    for (i = 0; i < cells.length; ++i) {
      tb += '<tr>\n';
      for (var ii = 0; ii < tblLgn; ++ii) {
        tb += cells[i][ii];
      }
      tb += '</tr>\n';
    }
    tb += '</tbody>\n</table>\n';
    return tb;
  }

  text = globals.converter._dispatch('tables.before', text, options, globals);

  // find escaped pipe characters
  text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);

  // parse tables
  text = text.replace(tableRgx, function (rawTable) {

    var i, tableLines = rawTable.split('\n');

    // strip wrong first and last column if wrapped tables are used
    for (i = 0; i < tableLines.length; ++i) {
      if (/^ {0,3}\|/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
      }
      if (/\|[ \t]*$/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
      }
    }

    var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
        rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
        rawCells = [],
        headers = [],
        styles = [],
        cells = [];

    tableLines.shift();
    tableLines.shift();

    for (i = 0; i < tableLines.length; ++i) {
      if (tableLines[i].trim() === '') {
        continue;
      }
      rawCells.push(
        tableLines[i]
          .split('|')
          .map(function (s) {
            return s.trim();
          })
      );
    }

    if (rawHeaders.length < rawStyles.length) {
      return rawTable;
    }

    for (i = 0; i < rawStyles.length; ++i) {
      styles.push(parseStyles(rawStyles[i]));
    }

    for (i = 0; i < rawHeaders.length; ++i) {
      if (showdown.helper.isUndefined(styles[i])) {
        styles[i] = '';
      }
      headers.push(parseHeaders(rawHeaders[i], styles[i]));
    }

    for (i = 0; i < rawCells.length; ++i) {
      var row = [];
      for (var ii = 0; ii < headers.length; ++ii) {
        if (showdown.helper.isUndefined(rawCells[i][ii])) {

        }
        row.push(parseCells(rawCells[i][ii], styles[ii]));
      }
      cells.push(row);
    }

    return buildTable(headers, cells);
  });

  text = globals.converter._dispatch('tables.after', text, options, globals);

  return text;
});

/**
 * Swap back in all the special characters we've hidden.
 */
showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);

  text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
    var charCodeToReplace = parseInt(m1);
    return String.fromCharCode(charCodeToReplace);
  });

  text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
  return text;
});

var root = this;

// CommonJS/nodeJS Loader
if (typeof module !== 'undefined' && module.exports) {
  module.exports = showdown;

// AMD Loader
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    'use strict';
    return showdown;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

// Regular Browser loader
} else {
  root.showdown = showdown;
}
}).call(this);

//# sourceMappingURL=showdown.js.map


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(42);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Site documentation
 */

Object.defineProperty(exports, "__esModule", { value: true });
/** */
const layout = __webpack_require__(0);
const header = __webpack_require__(16);
const left = __webpack_require__(17);
const main = __webpack_require__(19);
const TitleHeight = '30px';
const FooterHeight = '10px';
const LeftNavWidth = '200px';
const SiteName = 'HSDocs';
const myConfig = {
    Container: {
        rows: [TitleHeight, "fill", FooterHeight],
        css: '.hs-site',
        content: [{
                Container: {
                    columns: [LeftNavWidth, "fill"],
                    css: '.hs-site-header',
                    content: [
                        { Container: {
                                css: '.hs-site-title',
                                content: SiteName,
                                href: '/api/'
                            } },
                        { DocsMenu: { docSet: "./data/index.json" } }
                    ]
                }
            }, {
                Container: {
                    columns: [LeftNavWidth, "fill"],
                    content: [
                        { LeftNav: {} },
                        { MainDetail: {} }
                    ]
                }
            },
            { Container: {
                    css: '.hs-site-footer',
                    content: '(c) Helpful Scripts'
                } }
        ]
    },
    route: {
        default: '/api',
        paths: [
            '/api',
            '/api/:lib',
            '/api/:lib/:field' // defines `http://localhost/#!/api/:hsLib/:id        
        ]
    }
};
function init() {
    new layout.HsConfig([layout, header, left, main]).attachNodeTree(myConfig, document.body);
}
exports.init = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7QUFFSCxNQUFNO0FBQ04sbUNBQW9DO0FBQ3BDLDBDQUEyQztBQUMzQyx1Q0FBMEM7QUFDMUMsMENBQTZDO0FBRzdDLE1BQU0sV0FBVyxHQUFLLE1BQU0sQ0FBQztBQUM3QixNQUFNLFlBQVksR0FBSSxNQUFNLENBQUM7QUFDN0IsTUFBTSxZQUFZLEdBQUksT0FBTyxDQUFDO0FBQzlCLE1BQU0sUUFBUSxHQUFRLFFBQVEsQ0FBQztBQUUvQixNQUFNLFFBQVEsR0FBRztJQUNiLFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO1FBQzFDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsT0FBTyxFQUFFLENBQUM7Z0JBQ04sU0FBUyxFQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7b0JBQy9CLEdBQUcsRUFBRSxpQkFBaUI7b0JBQ3RCLE9BQU8sRUFBRTt3QkFDTCxFQUFFLFNBQVMsRUFBSztnQ0FDWixHQUFHLEVBQUUsZ0JBQWdCO2dDQUNyQixPQUFPLEVBQUUsUUFBUTtnQ0FDakIsSUFBSSxFQUFDLE9BQU87NkJBQ2YsRUFBQzt3QkFDRixFQUFFLFFBQVEsRUFBSyxFQUFFLE1BQU0sRUFBQyxtQkFBbUIsRUFBQyxFQUFDO3FCQUNoRDtpQkFDSjthQUFDLEVBQUM7Z0JBQ0gsU0FBUyxFQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7b0JBQy9CLE9BQU8sRUFBRTt3QkFDTCxFQUFFLE9BQU8sRUFBSyxFQUFFLEVBQUM7d0JBQ2pCLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBQztxQkFDcEI7aUJBQ0o7YUFBQztZQUNGLEVBQUUsU0FBUyxFQUFFO29CQUNULEdBQUcsRUFBRSxpQkFBaUI7b0JBQ3RCLE9BQU8sRUFBRSxxQkFBcUI7aUJBQ2pDLEVBQUM7U0FDTDtLQUNKO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUU7WUFDSCxNQUFNO1lBQ04sV0FBVztZQUNYLGtCQUFrQixDQUFFLHNEQUFzRDtTQUM3RTtLQUNKO0NBQ0osQ0FBQztBQUdGO0lBQ0ksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5RixDQUFDO0FBRkQsb0JBRUMifQ==

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Progam entry point. Initiates loading the docsets and setting up a router structure
 */

Object.defineProperty(exports, "__esModule", { value: true });
/** */
const Site_1 = __webpack_require__(13);
Site_1.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7OztBQUVILE1BQU07QUFDTixpQ0FBOEI7QUFFOUIsV0FBSSxFQUFFLENBQUMifQ==

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const showdown = __webpack_require__(11);
/**
 * process a markdown comment string and returns the equivalent html syntax.
 * @param text the comment to markdown
 * @param short if true, only the first paragraph is returned
 * @return the marked down comment
 */
function markDown(text, short = false, currentRoute) {
    const converter = new showdown.Converter({
        tables: true,
        ghCompatibleHeaderId: true,
        smartIndentationFix: true,
        takslists: true,
        strikethrough: true // enables ~~text~~
    });
    let result = (!text) ? '' : converter.makeHtml(text);
    if (short) {
        const i = result.indexOf('</p>');
        if (i > 0) {
            result = result.substring(0, i);
        }
    }
    result = substituteLinks(result, currentRoute);
    return result;
}
exports.markDown = markDown;
/**
 * replaces link statements in the comment with hyperlink references.
 * The format of a link statement is "{@link *docset*:*path* linked text}", where
 * - *docset* is the name of the docset
 * - *path* is the structural path of a component with steps on the path separated by a period,
 *    following the pattern *module*.*entity*.*member* with
 *     - *module* = the name of the module file
 *     - *entity* = [*class* | *function* | *variable*]
 *     - *member* = [*method* | *variable*]
 * - if *path* is omittied, or is `overview`, the library overview will be shown.
 *
 * Examples:
 * - '{@link hsDoc: Doc Overview}' -> {@link hsDoc: Doc Overview}
 * - '{@link hsDoc:DocSets.DocSets.add the `adds` function}' --> {@link hsDoc:DocSets.DocSets.add the `adds` function}
 *
 * @param comment the comment in which to replace the links
 * @return the comment with substituted links
 */
function substituteLinks(comment, currentRoute) {
    /*
        comment = comment.replace(/[^"`']{@link ([\S]*):([\S]*)\s*(.+)}/gi, (match, ...args) => {
            const lib = args[0];
            const module = args[1];
            const text = args[2];
            return (module === '' || module === 'overview')?
                    ` <a href="#!/api/${lib}/0">${text}</a>` :
                    ` <a href="#!/api/${lib}/${lib}.${module}">${text}</a>`;
        });
        return comment;
    */
    function deconstructRoute(route) {
        let lib, mod;
        route.replace(/\/([^\/.]*)\/([^\/\s]*$)/gi, (match, ...args) => {
            lib = args[0];
            mod = args[1];
            return '';
        });
        return [lib, mod];
    }
    function getLibMod(path) {
        let lib, mod, frag;
        if (path.indexOf(':') > 0) {
            [lib, mod] = path.split(':');
        }
        else {
            lib = defLib;
            mod = path;
        }
        if (mod.indexOf('#') > 0) {
            [mod, frag] = mod.split('#');
        }
        return [lib, mod, frag];
    }
    let [defLib] = deconstructRoute(currentRoute);
    comment = comment.replace(/[^"`']{@link ([\S]*)\s*(.+)}/gi, (match, ...args) => {
        const path = args[0];
        const text = args[1];
        let [lib, module] = getLibMod(path);
        return (module === '0' || module === 'overview') ?
            ` <a href="#!/api/${lib}/0">${text}</a>` :
            ` <a href="#!/api/${lib}/${lib}.${module}">${text}</a>`;
    });
    return comment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFFBQVEsR0FBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdEM7Ozs7O0dBS0c7QUFDSCxrQkFBeUIsSUFBVyxFQUFFLFFBQWMsS0FBSyxFQUFFLFlBQW1CO0lBQzFFLE1BQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxNQUFNLEVBQWtCLElBQUk7UUFDNUIsb0JBQW9CLEVBQUksSUFBSTtRQUM1QixtQkFBbUIsRUFBSyxJQUFJO1FBQzVCLFNBQVMsRUFBZSxJQUFJO1FBQzVCLGFBQWEsRUFBVyxJQUFJLENBQUksbUJBQW1CO0tBQ3RELENBQUMsQ0FBQztJQUNILElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1IsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQWZELDRCQWVDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0gseUJBQXlCLE9BQWMsRUFBRSxZQUFtQjtJQUM1RDs7Ozs7Ozs7OztNQVVFO0lBQ0UsMEJBQTBCLEtBQVk7UUFDbEMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUk7WUFDdkQsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELG1CQUFtQixJQUFXO1FBQzFCLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBRSxDQUFDO1lBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNiLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUU5QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUk7UUFDdkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sS0FBSyxVQUFVLENBQUM7WUFDeEMsb0JBQW9CLEdBQUcsT0FBTyxJQUFJLE1BQU07WUFDeEMsb0JBQW9CLEdBQUcsSUFBSSxHQUFHLElBQUksTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDO0lBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUVuQixDQUFDIn0=

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hslayout_1 = __webpack_require__(0);
const DocSets_1 = __webpack_require__(1);
const hswidget_1 = __webpack_require__(6);
/**
 * Creates the title menu for selecting between the different docsets.
 * Instantiate the DocsMenu via a standard `mithril` call:```
 *    m(DocsMenu, { docSet:<pathToIndexFile>})
 * ```
 * DocsMenu performs the following actions:
 * - for the first call of the view lifecycle hook, the available docSets are loaded.
 *   DocsMenu searches for an index `json` file at the location specified in the
 *   `docSet` field of the `node.attrs` parameter. If none is specified, the
 *   default is used as specified in the {@link hsDoc:DocSets.FILE DocSets FILE} setting.
 * - DocsMenu retrieves all available docSets via {@link hsDoc:DocSets.DocSets.get DocSets.get}.
 * - DocsMenu creates a `MenuDesc` structure with a {@link hsWidget:hsMenu.MenuDesc.select `select`} callback that initiates a route change
 *   to the selected docSet
 */
class DocsMenu extends hslayout_1.Container {
    constructor() {
        super(...arguments);
        this.docSet = '';
    }
    getDesc(attrs) {
        if (this.docSet !== attrs.docSet) {
            this.docSet = attrs.docSet;
            DocSets_1.DocSets.loadList(attrs.docSet);
        }
        const items = DocSets_1.DocSets.get();
        return {
            items: items.map((c) => c),
            selectedItem: (attrs.route && attrs.route.lib) ? attrs.route.lib : items[0],
            select: (item) => hslayout_1.m.route.set('/api/:lib/0', { lib: item })
        };
    }
    getComponents(node) {
        const desc = this.getDesc(node.attrs);
        return hslayout_1.m(hswidget_1.Menu, { desc: desc });
    }
}
exports.DocsMenu = DocsMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jc01lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9Eb2NzTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFnRDtBQUNoRCx3Q0FBa0Q7QUFDbEQsdUNBQWdEO0FBRWhEOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxjQUFzQixTQUFRLG9CQUFTO0lBQXZDOztRQUNJLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFtQmhCLENBQUM7SUFqQlcsT0FBTyxDQUFDLEtBQVM7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDM0IsaUJBQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxNQUFNLEtBQUssR0FBRyxpQkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLE1BQU0sQ0FBQztZQUNILEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSyxLQUFLLENBQUMsQ0FBQztZQUM5QixZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLEVBQUUsQ0FBQyxJQUFXLEtBQUssWUFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxDQUFDO1NBQ2xFLENBQUM7SUFDTixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVU7UUFDcEIsTUFBTSxJQUFJLEdBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLFlBQUMsQ0FBQyxlQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFwQkQsNEJBb0JDIn0=

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * LeftNav: Responsible for constructing the left-hand navigation pane.
 */

Object.defineProperty(exports, "__esModule", { value: true });
/** */
const hslayout_1 = __webpack_require__(0);
const hslayout_2 = __webpack_require__(0);
const DocSets_1 = __webpack_require__(1);
const Parts_1 = __webpack_require__(7);
/**
 * Constructs the left-hand navigation pane
 */
class LeftNav extends hslayout_2.Container {
    getComponents(node) {
        let lib;
        let field;
        if (node.attrs && node.attrs.route) {
            lib = node.attrs.route.lib;
            field = node.attrs.route.field;
        }
        const mdl = DocSets_1.DocSets.get(lib, 0) || { name: 'unknown', id: 0 };
        return hslayout_1.m('.hs-left', [hslayout_1.m('.hs-left-nav', navList(mdl, field))]);
    }
}
exports.LeftNav = LeftNav;
/** creates the list if modules (`*.ts` files) */
function navList(mdl, field) {
    if (mdl.kind === 0) {
        const modules = mdl.children ? mdl.children.map((c) => externalModule(c, field)) : ['no children'];
        modules.unshift(hslayout_1.m('.hs-left-nav-header', 'Modules'));
        return [hslayout_1.m('.hs-left-nav-content', modules)];
        //    } else {
        //        console.log('error: not a head node');
    }
}
/**
 * modules to ignore in the list
 */
const ignoreModules = {
    overview: true,
    index: true // the index.ts file
};
const expanded = {};
/**
 * processes a module, i.e. a `.ts` file.
 */
function externalModule(mdl, field) {
    const toggleExpanded = () => { expanded[mdl.fullPath] = !expanded[mdl.fullPath]; };
    const selected = (field === '' + mdl.id || field.indexOf(mdl.fullPath) === 0) ?
        '.hs-left-nav-selected' : '';
    // if field.length condition is commented out, the panel will always stay open
    if (selected /*&& field.length > mdl.fullPath.length*/) {
        expanded[mdl.fullPath] = true;
    }
    // don't show modules from other projects (isExported flag) or modules on the ignore list
    const skip = (mdl.flags && mdl.flags.isExternal) || ignoreModules[mdl.name];
    return skip ? hslayout_1.m('') : hslayout_1.m(`.hs-left-nav-module`, { onclick: toggleExpanded }, [
        Parts_1.libLink(`a.hs-left-nav-module-name ${selected}`, mdl.lib, mdl.fullPath, mdl.name),
        !mdl.groups ? undefined : hslayout_1.m('.hs-left-nav-module-content', { class: expanded[mdl.fullPath] ? '' : 'hs-collapsed' }, mdl.groups.map((g) => entries(g, mdl, field)))
    ]);
}
/**
 * processes a group of entries, e.g. Variables, Functions, or Classes.
 * @param group the group structure within the docset
 * @param mdl the entire module docset
 * @param field the field ID to be displayed on the main panel
 */
function entries(group, mdl, field) {
    function moduleGet(c) {
        return DocSets_1.DocSets.get(mdl.lib, c);
    }
    /**
     * processes one entry within a group, e.g. one variable, function, or class.
     */
    function entry(mod) {
        const selected = (field === '' + mod.id || field === mod.fullPath) ? '.hs-left-nav-selected' : '';
        const exported = (mod.flags && mod.flags.isExported);
        const statik = (mod.flags && mod.flags.isStatic);
        const css = `a.hs-left-nav-entry ${selected} ${exported ? '.hs-left-nav-exported' : ''}`;
        return (!exported && group.title === 'Variables') ? '' :
            hslayout_1.m('', [
                statik ? 'static' : '',
                Parts_1.libLink(css, mod.lib, mod.fullPath, mod.name)
            ]);
    }
    function empty(mod) { return mod !== ''; }
    let grp = [];
    if (group && group.children) {
        grp = group.children
            .map(moduleGet) // replace id reference by module
            .sort(exportAscending) // sort: exported first, then alphabetically
            .map(entry) // replace module by vnode structure
            .filter(empty); // filter empty elements
        if (grp.length > 0) {
            grp.unshift(hslayout_1.m('.hs-left-nav-header', group.title));
        }
    }
    return (grp.length > 1) ? hslayout_1.m(`.hs-left-nav-entries`, grp) : '';
}
/**
 * sorting function: sort first by exported status, then alphabetically.
 */
function exportAscending(a, b) {
    if (a.flags && b.flags) {
        if (a.flags.isExported && b.flags.isExported) {
            return a.name > b.name;
        }
        else if (a.flags.isExported) {
            return -1;
        }
        else if (b.flags.isExported) {
            return 1;
        }
        else {
            return a.name > b.name;
        }
    }
    else {
        return a.name > b.name;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVmdE5hdi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L0xlZnROYXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7OztBQUVILE1BQU07QUFDTix1Q0FBb0M7QUFDcEMsdUNBQW9DO0FBQ3BDLHdDQUFxQztBQUNyQyxtQ0FBa0M7QUFHbEM7O0dBRUc7QUFDSCxhQUFxQixTQUFRLG9CQUFTO0lBQ2xDLGFBQWEsQ0FBQyxJQUFXO1FBQ3JCLElBQUksR0FBVSxDQUFDO1FBQ2YsSUFBSSxLQUFZLENBQUM7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDakMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUM7UUFDRCxNQUFNLEdBQUcsR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsWUFBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLFlBQUMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0o7QUFYRCwwQkFXQztBQUVELGlEQUFpRDtBQUNqRCxpQkFBaUIsR0FBTyxFQUFFLEtBQVk7SUFDbEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUUsR0FBRyxDQUFDLFFBQVEs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QUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFFLFlBQUMsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDakUsQ0FBQztBQUVEOztHQUVHO0FBQ0gseUJBQXlCLENBQUssRUFBRSxDQUFLO0lBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUFDLENBQUM7SUFDcEMsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUFDLENBQUM7QUFDdEMsQ0FBQyJ9

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Processing of comments.
 */

Object.defineProperty(exports, "__esModule", { value: true });
/** */
const hslayout_1 = __webpack_require__(0);
const markdown_1 = __webpack_require__(15);
const MainExample_1 = __webpack_require__(20);
/**
 * Main comment processing. The result appears directly below the title in the main panel.
 * Function parameters are not reported in short form here since it is assumed they will be listed
 * individually below the main comment
 * @param mdl the module to scan for comments
 * @return a vnode representing the comment entries
 */
function commentLong(mdl) {
    let content = [];
    if (mdl.comment) {
        content.push(textOrShortTextOrDescription(mdl.comment, false));
        content.push(returns(mdl.comment, false));
        content.push(commentRemainder(mdl.comment));
    }
    return hslayout_1.m('.hs-item-comment', content);
}
exports.commentLong = commentLong;
/**
 * Shortended comment processing. This form is used to report on subitems below the main panel item.
 * If `short` is true, only the first paragraph of the main comment will be returned. Otherwise,
 * this function creates a full comment including an inline list of parameters and the return value
 * @param mdl the module to scan for comments
 * @param short if true, only the first paragraph of the main comment is processed.
 * @return a vnode representing the comment entries
 */
function comment(mdl, short = false) {
    let content = [];
    if (mdl.comment) {
        content.push(textOrShortTextOrDescription(mdl.comment, short));
        if (!short) {
            content.push(otherCommentTags(mdl.comment));
            if (mdl.parameters) {
                content = content.concat(mainCommentParams(mdl.parameters));
            }
        }
        content.push(returns(mdl.comment, false));
        content.push(commentRemainder(mdl.comment));
    }
    return hslayout_1.m('.hs-item-comment', content);
}
exports.comment = comment;
/**
 * Report the item's description. This can come in different forms that are all handled here:
 * - comment.shortText: <description>
 * - comment.text: <description>
 * - comment.tags[{tag:'description}, text:<description>]
 * Any resulting comment will be translated from markdown to html and returned as a `Vnode`.
 * @param comment the comment object to parse
 * @param short boolean; if true, only the first paragraph of the description will be returned
 */
function textOrShortTextOrDescription(comment, short) {
    let text = (comment.shortText || '');
    if (comment.text) {
        text += '\n' + (comment.text || '');
    }
    if (comment.tags) {
        comment.tags.map((tag) => { if (tag.tag === 'description') {
            text = tag.text;
        } });
    }
    text = text.replace(/<example>([\S\s]*?)<\/example>/gi, MainExample_1.example({}));
    return hslayout_1.m('.hs-item-comment-desc', prettifyCode(text, short));
}
function returns(comment, short) {
    let text = comment.returns;
    return hslayout_1.m('.hs-item-comment-return', !text ? '' : [
        hslayout_1.m('span.hs-item-comment-tag', 'returns:'),
        hslayout_1.m('span.hs-item-comment-text', text)
    ]);
}
function commentRemainder(comment) {
    return hslayout_1.m('', Object.keys(comment).map((tag) => {
        switch (tag) {
            case 'tags': // already handled
            case 'shortText': // already handled
            case 'text': // already handled
            case 'description': // already handled
            case 'returns':
                return '';
            default:
                return hslayout_1.m('.hs-item-comment-special', [
                    hslayout_1.m('span.hs-item-comment-tag', tag),
                    hslayout_1.m('span.hs-item-comment-text', comment[tag])
                ]);
                ;
        }
    }));
}
function otherCommentTags(comment) {
    return hslayout_1.m('', !comment.tags ? [] : comment.tags.map((tag) => {
        switch (tag.tag) {
            case 'description': return ''; // skip since already handled
            default: return hslayout_1.m('.hs-item-comment-special', [
                hslayout_1.m('span.hs-item-comment-tag', tag.tag),
                hslayout_1.m('span.hs-item-comment-text', tag.text)
            ]);
        }
    }));
}
function mainCommentParams(params) {
    return hslayout_1.m('.hs-item-comment-params', params.map((par) => hslayout_1.m('.hs-item-comment-param', [
        hslayout_1.m('span.hs-item-comment-tag', par.name + ':'),
        hslayout_1.m('span.hs-item-comment-text', !par.comment ? '' :
            ((par.defaultValue !== undefined) ? `[default: ${par.defaultValue}] ` : '') + par.comment.text)
    ])));
}
/**
 * finds segments of `<code>...</code>` in `comment` and replaces them with a prettified version.
 * Currently the function performs two operations:
 * - add indentation for brackets {...}
 * - wrap the &lt;code&gt;...&lt;/code&gt; part within &lt;pre&gt;...&lt;/pre&gt; brackets
 * @param comment the comment comment
 */
function prettifyCode(comment, short) {
    //    const indentSpaces = 2;
    let result = comment;
    function braceIndenting(text) {
        let indent = 0;
        const result = text
            .substring(6, text.length - 7) // remove <code> and </code>
            .trim()
            .replace(/(<)/g, '&lt;').replace(/(>)/g, '&gt;')
            .split('\n')
            .map((l) => {
            let oldIndent = indent;
            let k = l.trim();
            indent += Math.max(-1, Math.min(1, k.split('{').length - k.split('}').length));
            indent += Math.max(-1, Math.min(1, k.split('[').length - k.split(']').length));
            return '<span class="hs-code-indent"></span>'.repeat(((indent < oldIndent) ? indent : oldIndent)) + k;
        })
            .join('\n')
            .trim();
        return '<pre><code>' + result + '</code></pre>';
    }
    result = result.replace(/<code>([\S\s]*?)<\/code>/gi, braceIndenting);
    return hslayout_1.m.trust(markdown_1.markDown(result, short, hslayout_1.m.route.get()));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkNvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9NYWluQ29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7O0FBRUgsTUFBTTtBQUNOLHVDQUFvQztBQUNwQywwQ0FBdUM7QUFDdkMsK0NBQXlDO0FBRXpDOzs7Ozs7R0FNRztBQUNILHFCQUE0QixHQUFPO0lBQy9CLElBQUksT0FBTyxHQUFTLEVBQUUsQ0FBQztJQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxNQUFNLENBQUMsWUFBQyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFSRCxrQ0FRQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxpQkFBd0IsR0FBTyxFQUFFLEtBQUssR0FBQyxLQUFLO0lBQ3hDLElBQUksT0FBTyxHQUFTLEVBQUUsQ0FBQztJQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMs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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hslayout_1 = __webpack_require__(0);
const hslayout_2 = __webpack_require__(0);
const DocSets_1 = __webpack_require__(1);
const MainComment_1 = __webpack_require__(18);
const Parts_1 = __webpack_require__(7);
/**
 * Creates Documentation on the main panel
 */
class MainDetail extends hslayout_2.Container {
    getComponents(node) {
        let lib, field;
        if (node.attrs.route) {
            lib = node.attrs.route.lib;
            field = node.attrs.route.field;
        }
        node.attrs.route = undefined;
        let result = getOverview(lib, field) || itemDoc(DocSets_1.DocSets.get(lib, field) || '');
        return hslayout_1.m('.hs-main-detail', [result]);
    }
}
exports.MainDetail = MainDetail;
/**
 * Checks if the project overview is being requested and returns the overview,
 * or `undefined` if not available
 * @param mdl the module name to check
 * @return Vnode containing the overview file, or `undefined`
 */
function getOverview(lib, mdl) {
    if (mdl === '0' || mdl === '') {
        mdl = DocSets_1.DocSets.get(lib, `${lib}.overview`);
        if (mdl) {
            return overviewDoc(mdl);
        }
    }
    return undefined;
}
/**
 * Creates documentation for standard items in the main panel
 * @param mdl the module to document on the main panel
 */
function itemDoc(mdl) {
    const sig = mdl.signatures ? mdl.signatures[0] : mdl;
    return hslayout_1.m('.hs-item-doc', [
        title(mdl, sig),
        MainComment_1.commentLong(sig),
        members(sig, sig)
    ]);
}
/**
 * Creates documentation for the project overview in the main panel
 * @param mdl the module to document on the main panel
 */
function overviewDoc(mdl) {
    const sig = mdl.signatures ? mdl.signatures[0] : mdl;
    return hslayout_1.m('.hs-item-doc', [
        MainComment_1.commentLong(sig),
    ]);
}
/**
 * renders the title of the main panel
 * @param mdl the module to document
 * @param sig a signature of the module, or the the module itself
 */
function title(mdl, sig) {
    return hslayout_1.m('.hs-item-title', { id: Parts_1.makeID('title', mdl) }, itemDescriptor(mdl, sig));
}
function members(mdl, sig) {
    if (mdl.groups) {
        return hslayout_1.m('.hs-item-members', mdl.groups.map((g) => member(g, mdl.lib)));
    }
    else if (mdl.parameters) {
        return hslayout_1.m('.hs-item-members', parameter(mdl.parameters, mdl.lib));
    }
    else {
        return hslayout_1.m('.hs-item-members');
    }
}
function parameter(g, lib) {
    let content = g.map((c) => hslayout_1.m('.hs-item-parameter', { id: Parts_1.makeID('parameter', c) }, itemChild(c)));
    content.unshift(hslayout_1.m('.hs-item-member-title', { id: 'parameters' }, hslayout_1.m('span', 'Parameters')));
    return hslayout_1.m('.hs-item-member', content);
}
function member(group, lib) {
    const groupMap = {
        'External modules': '.hs-item-external-module',
        'Constructors': '.hs-item-constructor',
        'Classes': '.hs-item-class',
        'Interfaces': '.hs-item-interface',
        'Functions': '.hs-item-function',
        'Methods': '.hs-item-method',
        'Variables': '.hs-item-variable',
        'Object literals': '.hs-item-object-literal',
        'Properties': '.hs-item-property',
        'Type aliases': '.hs-item-alias',
    };
    const fn = groupMap[group.title] || '.hs-item-unknown-member';
    let content = group.children.map((c) => {
        let mdl = DocSets_1.DocSets.get(lib, c);
        return hslayout_1.m(fn, { id: Parts_1.makeID(group.title, mdl) }, itemChild(mdl));
    });
    content.unshift(hslayout_1.m('.hs-item-member-title', { id: group.title.toLowerCase() }, hslayout_1.m('span', group.title)));
    return hslayout_1.m('.hs-item-member', content);
}
function itemDescriptor(mdl, sig) {
    try {
        return hslayout_1.m('.hs-item-desc', [
            //            flags(mdl.flags, ['export']),
            Parts_1.flags(mdl.flags, []),
            Parts_1.kindString(mdl),
            Parts_1.itemLongName(mdl, mdl),
            Parts_1.signature(sig, mdl.lib),
            Parts_1.type(sig.type, mdl.lib),
            Parts_1.extensionOf(mdl),
            Parts_1.sourceLink(mdl)
        ]);
    }
    catch (e) {
        console.log(e);
        console.log(mdl);
    }
}
function itemChild(mdl, sig = mdl) {
    return mdl.signatures ?
        mdl.signatures.map((s) => hslayout_1.m('', [itemDescriptor(mdl, s), MainComment_1.comment(s)])) :
        [itemDescriptor(mdl, sig), MainComment_1.comment(sig)];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L01haW5EZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBd0M7QUFDeEMsdUNBQXdDO0FBQ3hDLHdDQUEwQztBQUMxQywrQ0FBc0Q7QUFDdEQsbUNBQ3VDO0FBR3ZDOztHQUVHO0FBQ0gsZ0JBQXdCLFNBQVEsb0JBQVM7SUFDckMsYUFBYSxDQUFDLElBQVU7UUFDcEIsSUFBSSxHQUFHLEVBQUUsS0FBSyxDQUFDO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBRTdCLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvRSxNQUFNLENBQUMsWUFBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFaRCxnQ0FZQztBQUVEOzs7OztHQUtHO0FBQ0gscUJBQXFCLEdBQVUsRUFBRSxHQUFVO0lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsR0FBRyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsV0FBVyxDQUFDLENB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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Comment sections may contain code examples that are placed within &lt;example&gt; tags.
 *
 * `hsDoc` will interpret and execute Javascript instructions within a &lt;`file name='script.js'`&gt; tag.
 * and stylesheet instructions with a &lt;`file name='style.css'`&gt; tag, as in following example:
 * <code>
 *     &lt;example&gt;
 *     <file name='script.js'>
 *     m.mount(root, {
 *         view:() => m(layout.Container, { columns:[],
 *             content:['first line','second line')]
 *         })
 *     });
 *     </file>
 *
 *     <file name='style.css'>
 *     .hsLeaf {
 *         color: blue;
 *     }
 *     </file>
 *     &lt;/example&gt;
 * </code>
 *
 * ### Scripts
 * Scripts are expected to mount a `mithril Vnode` on a root DOM element using `m.mount` or `m.render`.
 * Do not use `m.route` as only a single call is allowed per web app and that is used to manage the
 * main hsDoc site menu and navigation.
 *
 * hsDoc internally uses the [global `Function` object][Function] to parse and execute the script.
 * Thus the script has access only to global objects and to objects provided
 * as parameters in the `Function` constructor. hsDoc currently provides the following namespaces as parameters
 * for use in the scripts:
 * - **m**: the `Mithril` m function
 * - **layout**: the {@link hsLayout: `hsLayout`} namespace, providing functions to layout the browser window.
 * - **widget**: the {@link hsWidget: `hsWidget`} namespace, providing various UI widget functions.
 * - additionally, the parameter **root** is provided as the DOM element to mount to.
 *
 * [Function]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
 *
 * ### Styles
 * Styles will be automatically sandboxed so they are valid only within the enclosing example tags.
 * This allows multiple examples to co-exist on the same page.
 *
 * <example>
 * <file name='script.js'>
 * m.mount(root, {
 *     view:() => m(layout.Container, {
 *         css:'.myExample',
 *         columns:[],
 *         content:[
 *             'third line',
 *             'fourth line'
 *         ]
 *     })
 * });
 * </file>
 * <file name='style.css'>
 * .hs-layout {
 *     margin:0;
 * }
 * .myExample>.hs-layout {
 *     border: 2px solid white;
 * }
 * .myExample {
 *     color: red;
 *     font-weight:bold;
 * }
 * </file>
 * </example>
 */

Object.defineProperty(exports, "__esModule", { value: true });
/** */
const hslayout_1 = __webpack_require__(0);
const hswidget_1 = __webpack_require__(6);
const hslayout_2 = __webpack_require__(0);
const hsutil_1 = __webpack_require__(30);
const layout = __webpack_require__(0);
const widget = __webpack_require__(6);
/**
 * Map containing various exampkle configurations
 */
const gInitialized = {};
/**
 * creates the example configuration, generates the DOM hook, and sets up the example execution.
 * `example` takes a context map of the form `{ name:module, ...}` and return a function
 * that can be used in calls to `string.replace`as in the following example:
 * <code><pre>
 * import * as layout from "layout";
 * text = text.replace(/<example>([\S\s]*?)<\/example>/gi, example({layout:layout}));
 * </pre></code>
 * The modules `m`, `hsLayout`, and `hsWidget` will be added by default as
 * ` { m: m, layout: layout, widget: widget } `
 * @param example the example string extracted from the comment, including the `<example>` tags.
 * @param context the context in which the example script should be run, expressed as `name`:`namespace` pairs.
 */
function example(context) {
    context.m = hslayout_1.m;
    context.layout = layout;
    context.widget = widget;
    const names = Object.keys(context);
    const modules = names.map(n => context[n]);
    return (example) => {
        const instance = hsutil_1.shortCheckSum(example);
        let IDs = gInitialized[instance];
        if (!IDs) {
            IDs = gInitialized[instance] = initDesc(() => addExample(IDs).then(executeScript));
            try {
                const script = new Function('root', ...names, getCommentDescriptor(IDs, example));
                IDs.executeScript = (root) => script(root, ...modules);
            }
            catch (e) {
                console.log('creating script:' + e);
            }
        }
        if (!document.getElementById(IDs.mid)) {
            addExample(IDs).then(hsutil_1.delay(1)).then(executeScript);
        }
        const styles = IDs.pages['css'];
        // prefix css selectors with ID of main execution area to sandbox the scope
        const style = (styles === undefined) ? '' : styles.replace(/(^|})\s*?(\S*?)\s*?{/gi, (x, ...args) => x.replace(args[1], `#${IDs.mid} ${args[1]}`));
        return `<style>${style}</style><example id=${IDs.eid} class="hs-layout-frame"></example>`;
    };
}
exports.example = example;
/**
 * creates the example configuration
 */
function initDesc(fn) {
    return {
        eid: getNewID(),
        mid: getNewID(),
        desc: {
            items: [],
            selectedItem: 'js',
            select: fn,
            size: ["50px"]
        },
        pages: {}
    };
}
/** creates a new random example ID for each call. */
function getNewID() {
    return 'hs' + Math.floor(1000000 * Math.random());
}
/** asynchronously adds the example structure on the page and then executed the script. */
function addExample(IDs) {
    return Promise.resolve(IDs).then(addExampleStructure);
}
/**
 * returns a parameterless function that can be called via setTimeout to
 * mount the menu and execute the script function provided in `IDs`.
 * @param IDs the `CommentDescriptor` to execute on.
 */
function addExampleStructure(IDs) {
    const item = IDs.desc.selectedItem;
    const source = hslayout_1.m.trust(`<code><pre>${IDs.pages[item]}</pre></code>`);
    const root = document.getElementById(IDs.eid);
    hslayout_1.m.mount(root, { view: () => hslayout_1.m(hslayout_2.Container, {
            columns: ["50%"],
            content: [
                hslayout_1.m(hslayout_2.Container, { content: hslayout_1.m('.hs-layout .hs-execution', { id: IDs.mid }) }),
                hslayout_1.m(hslayout_2.Container, {
                    rows: ["30px", "fill"],
                    content: [
                        hslayout_1.m(hswidget_1.Menu, { desc: IDs.desc }),
                        hslayout_1.m(hslayout_2.Container, { content: hslayout_1.m('.hs-layout .hs-source', source) })
                    ]
                })
            ]
        })
    });
    return IDs;
}
/**
 * execute the provided script
 * @param IDs provides the context in which the script is exceuted/
 */
function executeScript(IDs) {
    const root = document.getElementById(IDs.mid);
    console.log(root);
    try {
        IDs.executeScript(root);
    }
    catch (e) {
        console.log("executing script: " + e);
    }
    hslayout_1.m.redraw();
    return IDs;
}
/**
 * Fills in all fields of the CommentDescriptor provided as `IDs`.
 * @param IDs the CommentDescriptor to complete
 * @param example the example string, including <example> tag
 * @return the script to execute, as a string
 */
function getCommentDescriptor(IDs, example) {
    let result = '';
    example.replace(/<file[\s]*name=[\S]*?\.([\s\S]*?)['|"]>([\S\s]*?)<\/file>/gi, function (text) {
        const args = [...arguments];
        const content = args[2].trim();
        IDs.desc.items.push(args[1]);
        IDs.pages[args[1]] = content;
        return result;
    });
    return IDs.pages['js'];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9NYWluRXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUVHOzs7QUFFSCxNQUFNO0FBQ04sdUNBQWdEO0FBQ2hELHVDQUFnRDtBQUNoRCx1Q0FBZ0Q7QUFDaEQsbUNBQThDO0FBQzlDLG1DQUFnRDtBQUNoRCxtQ0FBZ0Q7QUFXaEQ7O0dBRUc7QUFDSCxNQUFNLFlBQVksR0FBK0IsRUFBRSxDQUFDO0FBRXBEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILGlCQUF3QixPQUFXO0lBQy9CLE9BQU8sQ0FBQyxDQUFDLEdBQVEsWUFBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsTUFBTSxDQUFDLENBQUMsT0FBYztRQUNsQixNQUFNLFFBQVEsR0FBRyxzQkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNuRixJ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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hslayout_1 = __webpack_require__(0);
function tooltip(text, tip, position) {
    // position: top, left, botton, right
    return hslayout_1.m('.hs-tooltip[href=#]', [text, hslayout_1.m(`span.hs-tooltip-${position}`, tip)]);
}
exports.tooltip = tooltip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L1Rvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBbUM7QUFFbkMsaUJBQXdCLElBQVcsRUFBRSxHQUFVLEVBQUUsUUFBZTtJQUM1RCxxQ0FBcUM7SUFDckMsTUFBTSxDQUFDLFlBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksRUFBRSxZQUFDLENBQUMsbUJBQW1CLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRixDQUFDO0FBSEQsMEJBR0MifQ==

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(22)
var ieee754 = __webpack_require__(33)
var isArray = __webpack_require__(34)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __webpack_require__(5);
const layout = __webpack_require__(0);
function copy(struct) {
    let result;
    if (Array.isArray(struct)) {
        result = [];
    }
    else if (typeof struct === 'object') {
        result = {};
    }
    else {
        return struct;
    }
    Object.keys(struct).map((k) => result[k] = copy(struct[k]));
    return result;
}
function resolve(sym, context) {
    let cl;
    context.concat(layout).some((c) => cl = c[sym]);
    return cl;
}
function recurse(config, context) {
    if (['string', 'number', 'boolean', 'function'].indexOf(typeof config) >= 0) {
        return config;
    }
    const keys = Object.keys(config);
    let result = config.length ? [] : {};
    keys.map((k) => {
        const content = recurse(config[k], context);
        const cl = resolve(k, context);
        if (cl) {
            const r = {
                compClass: cl,
                attrs: content
            };
            (!Array.isArray(config) && keys.length === 1) ?
                result = r :
                result[k] = r;
        }
        else {
            result[k] = content;
        }
    });
    return result;
}
class HsConfig {
    constructor(context) {
        this.context = context;
    }
    attachNodeTree(config, root) {
        function decodeRoute(route) {
            const rp = route.params = [];
            route.paths.map((p0) => {
                const params = p0.match(/:(.+?)\b/g);
                if (params) {
                    params.map((p1) => p1.substr(1))
                        .map((p2) => rp.indexOf(p2) < 0 ? rp.push(p2) : '');
                }
            });
            return route;
        }
        function decode(config) {
            let result = {};
            if (config.compClass && !result.root) {
                result.root = config;
            }
            else {
                Object.keys(config).map((k) => {
                    if (config[k].compClass && !result.root) {
                        result.root = config[k];
                    }
                    else if (k === 'route') {
                        result.route = decodeRoute(config.route);
                    }
                    else {
                        result[k] = config[k];
                    }
                });
            }
            return result;
        }
        function prepareRoutes(content) {
            const cr = content.root;
            class Router {
                view(node) {
                    cr.attrs.route = {};
                    content.route.params.map((k) => cr.attrs.route[k] = node.attrs[k]);
                    return mithril_1.m(cr.compClass, copy(cr.attrs));
                }
            }
            content.route.routes = {};
            content.route.paths.map((path) => content.route.routes[path] = Router);
        }
        function mountOrRoute(c) {
            const content = decode(c);
            const cr = content.root;
            if (!cr) {
                console.log('*** no top level component defined in config:');
                console.log(config);
            }
            if (content.route) {
                prepareRoutes(content);
                mithril_1.m.route(root, content.route.default, content.route.routes);
                console.log('starting router');
            }
            else {
                mithril_1.m.mount(root, { view: (node) => mithril_1.m(cr.compClass, copy(cr.attrs)) });
                console.log('mounting component');
            }
        }
        const context = this.context;
        this.getContent(config)
            .then((r) => recurse(r, context))
            .then(mountOrRoute);
    }
    getContent(config) {
        return (typeof config === 'string') ? this.load(config) : Promise.resolve(config);
    }
    load(file) {
        console.log('requesting ' + file);
        return mithril_1.m.request({ method: "GET", url: file })
            .catch((e) => {
            console.log('error:');
            console.log(e);
        });
    }
}
exports.HsConfig = HsConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaHNDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF3Q0EsdUNBQXFDO0FBQ3JDLDZCQUE2QjtBQU03QixjQUFjLE1BQVU7SUFDcEIsSUFBSSxNQUFVLENBQUM7SUFDZixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUFDLENBQUM7SUFDckQsSUFBSSxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBV0QsaUJBQWlCLEdBQVUsRUFBRSxPQUFhO0lBQ3RDLElBQUksRUFBTSxDQUFDO0lBQ1gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFLLEtBQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBWUQsaUJBQWlCLE1BQVUsRUFBRSxPQUFhO0lBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFD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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __webpack_require__(5);
const Layout_1 = __webpack_require__(2);
class Component {
}
exports.Component = Component;
class Container extends Component {
    getComponents(node) {
        return !Array.isArray(node.attrs.content) ? node.attrs.content :
            node.attrs.content.map((c) => {
                if (c.compClass) {
                    c.attrs.route = node.attrs.route;
                    return mithril_1.m(c.compClass, c.attrs);
                }
                else {
                    return c;
                }
            });
    }
    getCSS(node) {
        return node.attrs.css || '';
    }
    normalizeContent(components) {
        if (typeof components === 'string') {
            return [mithril_1.m('.hs-leaf', mithril_1.m.trust(components))];
        }
        if (components.length > 0) {
            if (components.some((c) => (typeof c !== 'object'))) {
                return components.map((comp) => (comp instanceof Container) ? comp : mithril_1.m(Container, { content: comp }));
            }
            else {
                return components;
            }
        }
        return [components];
    }
    view(node) {
        const content = this.normalizeContent(this.getComponents(node));
        let css = Layout_1.Layout.createLayout(node.attrs, content);
        const attrs = {
            style: node.style,
            route: node.attrs.route,
            onclick: node.attrs.onclick
        };
        node.attrs.route = undefined;
        if (node.attrs.href) {
            attrs.href = node.attrs.href;
            attrs.oncreate = mithril_1.m.route.link;
            attrs.onupdate = mithril_1.m.route.link;
        }
        return mithril_1.m(`.hs-layout ${css} ${this.getCSS(node)}`, attrs, content.map((c) => c));
    }
}
exports.Container = Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXcvQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0Esd0NBQTBDO0FBRTFDLHFDQUF3QztBQVF4QztDQU9DO0FBUEQsOEJBT0M7QUF5QkQsZUFBZ0MsU0FBUSxTQUFTO0lBbUJuQyxhQUFhLENBQUMsSUFBVTtRQUM5QixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUs7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNkLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNqQyxNQUFNLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQVFTLE1BQU0sQ0FBQyxJQUFVO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUdPLGdCQUFnQixDQUFDLFVBQWdEO1FBQ3JFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sVUFBVSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLENBQUMsV0FBQyxDQUFDLFVBQVUsRUFBRSxXQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUE0QixLQUMvQyxDQUFDLElBQUksWUFBWSxTQUFTLENBQUMsR0FBRSxJQUFJLEdBQUcsV0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUNuRSxDQUFDO1lBQ04sQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdEIsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBcUJELElBQUksQ0FBQyxJQUFVO1FBQ1gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkQsTUFBTSxLQUFLLEdBQU87WUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1NBQzlCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUM5QixLQUFLLENBQUMsUUFBUSxHQUFHLFdBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2xDLENBQUM7UUFDRCxNQUFNLENBQUMsV0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Q0FDSjtBQTdGRCw4QkE2RkMifQ==

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Layout_1 = __webpack_require__(2);
const Tokens_1 = __webpack_require__(3);
exports.PillarLayouts = [
    'columns', 'rows'
];
const cParams = {
    columns: {
        cssClass: '.hs-column-layout',
        fields: ['top', 'bottom', 'left', 'right', 'height', 'width']
    },
    rows: {
        cssClass: '.hs-row-layout',
        fields: ['left', 'right', 'top', 'bottom', 'width', 'height']
    }
};
class Pillars extends Layout_1.Layout {
    constructor(params, areaDesc) {
        super(areaDesc);
        this.areaDesc = areaDesc;
        this.fields = params.fields;
        this.cssClass = params.cssClass;
        let n = areaDesc.length - 1;
        let first = 0;
        let last = 0;
        this.unit = areaDesc.some((area) => (area instanceof Tokens_1.PixelToken)) ? this.unitPixel : this.unitPercent;
        areaDesc.some((area, i) => ((areaDesc[i] instanceof Tokens_1.DefinedToken) ? ++first < 0 : true));
        areaDesc.some((area, i) => ((areaDesc[n - i] instanceof Tokens_1.DefinedToken) ? ++last < 0 : true));
        this.firstFixed = first;
        this.lastFixed = Math.min(last, areaDesc.length - first);
    }
    ;
    getSizes(num) {
        const first = this.firstFixed;
        const last = this.lastFixed;
        const desc = this.areaDesc;
        const len = desc.length;
        return [...Array(num).keys()].map((i) => {
            let size = null;
            let t = null;
            if (i > num - 1 - last) {
                size = desc[len - (num - i)].getSize();
                t = 'end';
            }
            else if (i < first) {
                size = desc[i].getSize();
                t = 'start';
            }
            else if (len > 0 && len === first) {
                size = desc[len - 1].getSize();
                t = 'start';
            }
            return { size: size, code: t, fields: {} };
        });
    }
    unitPercent(num) {
        let f = this.fields;
        let max = 100.0;
        let styles = this.getSizes(num);
        styles.forEach(style => { if (style.size) {
            max = max - style.size;
            num--;
        } });
        let defDim = max / num;
        function pass(styles, ix0, ix1, breakCond) {
            let sumDim = 0;
            styles.some(style => {
                let size = style.size || defDim;
                if (breakCond(style.code)) {
                    return true;
                }
                style.fields[ix0] = sumDim + '%';
                sumDim += size;
                style.fields[ix1] = (100 - sumDim) + '%';
                style.fields[f[5]] = 'auto';
                return false;
            });
        }
        pass(styles, f[2], f[3], (e) => e === 'end');
        pass(styles.reverse(), f[3], f[2], (e) => e !== 'end');
        return styles.reverse();
    }
    ;
    unitPixel(num) {
        let styles = this.getSizes(num);
        let f = this.fields;
        let defDim = 100.0 / num;
        let sumDim = 0;
        styles.some((style, i) => {
            if (style.code === 'start') {
                style.fields[f[2]] = sumDim + 'px';
                sumDim += style.size + (this.spacing || 0) + (this.spacing || 0);
                style.fields[f[3]] = 'auto';
                style.fields[f[5]] = style.size + 'px';
            }
            else if (style.code === null) {
                style.fields[f[2]] = (sumDim > 0) ? (sumDim + 'px') : (i * defDim + '%');
                sumDim = -1;
                style.fields[f[3]] = (100 - (i + 1) * defDim) + '%';
                style.fields[f[5]] = 'auto';
            }
            else if (style.code === 'end') {
                return true;
            }
            return false;
        });
        sumDim = 0;
        styles.slice().reverse().some((style, i) => {
            style.fields[f[3]] = sumDim + 'px';
            if (style.code === 'end') {
                sumDim += style.size + (this.spacing || 0) + (this.spacing || 0);
                style.fields[f[2]] = 'auto';
                style.fields[f[5]] = style.size + 'px';
            }
            else {
                if (sumDim > 0 && style.code !== 'start') {
                    style.fields[f[5]] = 'auto';
                }
                return true;
            }
            return false;
        });
        return styles;
    }
    ;
    getStyles(components) {
        let f = this.fields;
        let styles = this.unit(components.length);
        components.map((c, i) => {
            c.style = `${f[0]}:0%; ${f[1]}:0%; `;
            Object.keys(styles[i].fields).forEach((st) => { c.style += `${st}: ${styles[i].fields[st]};`; });
        });
        return this.cssClass;
    }
    ;
}
;
class Columns extends Pillars {
    constructor(areaDesc) {
        super(cParams[exports.PillarLayouts[0]], areaDesc);
        this.areaDesc = areaDesc;
    }
    ;
}
;
class Rows extends Pillars {
    constructor(areaDesc) {
        super(cParams[exports.PillarLayouts[1]], areaDesc);
        this.areaDesc = areaDesc;
    }
    ;
}
;
Layout_1.Layout.register(exports.PillarLayouts[0], Columns);
Layout_1.Layout.register(exports.PillarLayouts[1], Rows);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlsbGFyZWRMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9QaWxsYXJlZExheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQTJDQSxxQ0FBd0M7QUFDeEMscUNBQW9FO0FBZ0J2RCxRQUFBLGFBQWEsR0FBRztJQUN6QixTQUFTLEVBQUUsTUFBTTtDQUNwQixDQUFDO0FBS0YsTUFBTSxPQUFPLEdBQUc7SUFDWixPQUFPLEVBQWdCO1FBQ25CLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7S0FDaEU7SUFDRCxJQUFJLEVBQWdCO1FBQ2hCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7S0FDaEU7Q0FDSixDQUFDO0FBT0YsYUFBdUIsU0FBUSxlQUFNO0lBYWpDLFlBQVksTUFBbUIsRUFBUyxRQUFzQjtRQUMxRCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEb0IsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUUxRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRWhDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxHQUFJLENBQUMsQ0FBQztRQUVkLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQWdCLEtBQUssQ0FBQyxJQUFJLFlBQVksbUJBQVUsQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBR2pILFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFnQixFQUFFLENBQVEsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFjLHFCQUFZLENBQUMsR0FBRSxFQUFFLEtBQUssR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUczRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBZ0IsRUFBRSxDQUFRLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFlBQVkscUJBQVksQ0FBQyxHQUFFLEVBQUUsSUFBSSxHQUFDLENBQUMsR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTNHLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQUEsQ0FBQztJQVNNLFFBQVEsQ0FBQyxHQUFVO1FBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDOUIsTUFBTSxJQUFJLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM3QixNQUFNLElBQUksR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFeEIsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFRO1lBQ3ZDLElBQUksSUFBSSxHQUFVLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO2dCQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBRSxDQUFDO2dCQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLElBQUksR0FBRyxLQUFHLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUFDLENBQUM7WUFDNUUsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBQyxFQUFFLEVBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxXQUFXLENBQUMsR0FBVTtRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNoQixJQUFJLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUFDLEdBQUcsRUFBRSxDQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFdkIsY0FBYyxNQUFtQixFQUFFLEdBQVUsRUFBRSxHQUFVLEVBQUUsU0FBZ0M7WUFDdkYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNiLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO2dCQUNoQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUFDLENBQUM7Z0JBQzNDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFDLEdBQUcsQ0FBQztnQkFDL0IsTUFBTSxJQUFJLElBQUksQ0FBQztnQkFDZixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxHQUFDLEdBQUcsQ0FBQztnQkFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBUSxLQUFLLENBQUMsS0FBRyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFRLEtBQUssQ0FBQyxLQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUFBLENBQUM7SUFFTSxTQUFTLENBQUMsR0FBVTtRQUN4QixJQUFJLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXBCLElBQUksTUFBTSxHQUFHLEtBQUssR0FBQyxHQUFHLENBQUM7UUFHdkIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUUsSUFBSSxDQUFDO2dCQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztnQkFDNUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQztZQUMxQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQU0sR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ25FLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDOUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDaEMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUdILE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7WUFDekMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQUEsQ0FBQztJQVFRLFNBQVMsQ0FBQyxVQUFpQztRQUNqRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BCLElBQUksTUFBTSxHQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBaUIsRUFBRSxDQUFRO1lBQ3ZDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBUyxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUcsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQUEsQ0FBQztDQUNMO0FBQUEsQ0FBQztBQXVERixhQUFjLFNBQVEsT0FBTztJQUN6QixZQUFtQixRQUFzQjtRQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMscUJBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQXJFLGFBQVEsR0FBUixRQUFRLENBQWM7SUFBaUQsQ0FBQztJQUFBLENBQUM7Q0FDL0Y7QUFBQSxDQUFDO0FBdURGLFVBQVcsU0FBUSxPQUFPO0lBQ3RCLFlBQW1CLFFBQXNCO1FBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFBckUsYUFBUSxHQUFSLFFBQVEsQ0FBYztJQUFpRCxDQUFDO0lBQUEsQ0FBQztDQUMvRjtBQUFBLENBQUM7QUFFRixlQUFNLENBQUMsUUFBUSxDQUFDLHFCQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0MsZUFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBYSxDQUFDLENBQUMsQ0FBQyxFQUFLLElBQUksQ0FBQyxDQUFDIn0=

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Layout_1 = __webpack_require__(2);
const Tokens_1 = __webpack_require__(3);
class Tiles extends Layout_1.Layout {
    constructor(areaDesc) {
        super(areaDesc);
        this.areaDesc = areaDesc;
        this.unit = areaDesc.some((area) => (area instanceof Tokens_1.PixelToken)) ?
            this.unitPixel : this.unitPercent;
    }
    ;
    unitPercent(num) {
        const desc = this.areaDesc;
        const fill = this.areaDesc.some(a => (a instanceof Tokens_1.FillToken));
        const root = Math.sqrt(num);
        const rows = Math.round(root);
        let cols = Math.floor(root);
        if (root > cols) {
            cols++;
        }
        let width = (desc[0] instanceof Tokens_1.DefinedToken) ? desc[0].getSize() : undefined;
        let height = (desc[1] instanceof Tokens_1.DefinedToken) ? desc[1].getSize() : width;
        width = width || 100 / cols;
        height = height || 100 / rows;
        let left = 0;
        let top = 0;
        let styles = [...Array(num).keys()].map(i => {
            let r = 'auto';
            let w = width + '%';
            let b = 'auot';
            let h = height + '%';
            if ((left + 2 * width) > 100 && fill) {
                r = '0%';
                w = 'auto';
            }
            if ((top + 2 * height) > 100 && fill) {
                b = '0%';
                h = 'auto';
            }
            const style = `
                top: ${Math.floor(top)}%; bottom:${b};
                left: ${left}%;           right:${r};
                width: ${w};              height: ${h};
            `;
            if (Math.round(left += width) > 100 - Math.floor(width)) {
                left = 0;
                top += height;
            }
            return style;
        });
        return styles;
    }
    ;
    unitPixel(num) {
    }
    ;
    getStyles(components) {
        let styles = this.unit(components.length);
        components.map((c, i) => {
            c.style = styles[i];
        });
        return '.hs-tile-layout';
    }
    ;
}
;
Layout_1.Layout.register('tiles', Tiles);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L1RpbGVMYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUE2REEscUNBQXdDO0FBQ3hDLHFDQUErRTtBQU8vRSxXQUFZLFNBQVEsZUFBTTtJQVN0QixZQUFtQixRQUFzQjtRQUNyQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBSXJDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQWdCLEtBQUssQ0FBQyxJQUFJLFlBQVksbUJBQVUsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0lBQUEsQ0FBQztJQUVNLFdBQVcsQ0FBQyxHQUFVO1FBQzFCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLGtCQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxFQUFFLENBQUM7UUFBQyxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLHFCQUFZLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQzlFLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLHFCQUFZLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBRTFFLEtBQUssR0FBSSxLQUFLLElBQUssR0FBRyxHQUFDLElBQUksQ0FBQztRQUM1QixNQUFNLEdBQUcsTUFBTSxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxHQUFHLEdBQUksQ0FBQyxDQUFDO1FBR2IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBQyxHQUFHLENBQUM7WUFDckMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFDLEdBQUcsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQUMsQ0FBQztZQUM3RCxNQUFNLEtBQUssR0FBRzt1QkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7d0JBQzVCLElBQUksc0JBQXNCLENBQUM7eUJBQzFCLENBQUMsMEJBQTBCLENBQUM7YUFDeEMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLEdBQUcsSUFBSSxNQUFNLENBQUM7WUFBQyxDQUFDO1lBQ25GLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0lBRU0sU0FBUyxDQUFDLEdBQVU7SUFDNUIsQ0FBQztJQUFBLENBQUM7SUFRUSxTQUFTLENBQUMsVUFBaUM7UUFDakQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQWlCLEVBQUUsQ0FBUTtZQUN2QyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBQUEsQ0FBQztDQUNMO0FBQUEsQ0FBQztBQUdGLGVBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDIn0=

/***/ }),
/* 28 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNDaGVja3N1bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oc0NoZWNrc3VtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUMsdUJBQThCLENBQVE7SUFDbkMsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDO0lBQ3JCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMzQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQVBELHNDQU9DIn0=

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWVBLGlCQUF3QixFQUFTO0lBQzdCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLE9BQU8sVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFGRCwwQkFFQztBQVdELGVBQXNCLEVBQVM7SUFDM0IsTUFBTSxDQUFDLENBQUMsSUFBUTtRQUNaLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQVc7WUFDM0IsVUFBVSxDQUFDLFFBQVEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQU5ELHNCQU1DIn0=

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hsUtil_1 = __webpack_require__(29);
exports.timeout = hsUtil_1.timeout;
exports.delay = hsUtil_1.delay;
var showdown_1 = __webpack_require__(31);
exports.markDown = showdown_1.markDown;
var hsChecksum_1 = __webpack_require__(28);
exports.shortCheckSum = hsChecksum_1.shortCheckSum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBMEM7QUFBakMsMkJBQUEsT0FBTyxDQUFBO0FBQUUseUJBQUEsS0FBSyxDQUFBO0FBQ3ZCLHVDQUE0QztBQUFuQyw4QkFBQSxRQUFRLENBQUE7QUFDakIsMkNBQThDO0FBQXJDLHFDQUFBLGFBQWEsQ0FBQSJ9

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const showdown = __webpack_require__(11);
const converter = new showdown.Converter();
function markDown(text) {
    return converter.makeHtml(text);
}
exports.markDown = markDown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hvd2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFFBQVEsR0FBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFM0Msa0JBQXlCLElBQVc7SUFDaEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUZELDRCQUVDIn0=

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hslayout_1 = __webpack_require__(0);
class Menu extends hslayout_1.Container {
    constructor() {
        super(...arguments);
        this.menu = {
            items: {},
            select: (title) => {
                Object.keys(this.menu.items).forEach((key) => {
                    this.menu.items[key].isSelected = (key === title);
                });
            }
        };
    }
    getComponents(node) {
        const _menu = this.menu;
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        desc.selectedItem = desc.selectedItem || desc.items[0];
        node.attrs.columns = desc.size || [];
        node.attrs.css = '.hs-menu';
        return desc.items.map((l) => {
            _menu.items[l] = _menu.items[l] || {
                title: l,
                isSelected: l === desc.selectedItem,
                clicked: (item) => {
                    desc.selectedItem = item;
                    _menu.select(item);
                    if (typeof desc.select === 'function') {
                        desc.select(item);
                    }
                }
            };
            return hslayout_1.m(MenuItem, { desc: _menu.items[l] });
        });
    }
}
exports.Menu = Menu;
;
class MenuItem extends hslayout_1.Container {
    getComponents(node) {
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        node.attrs.css = `.hs-menu-item ${desc.isSelected ? 'hs-menu-item-selected' : ''}`;
        node.attrs.onclick = () => { desc.clicked(desc.title); };
        return desc.title;
    }
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNNZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hzTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdEQSx1Q0FBK0M7QUEyQi9DLFVBQWtCLFNBQVEsb0JBQVM7SUFBbkM7O1FBRUksU0FBSSxHQUFHO1lBQ0gsS0FBSyxFQUF5QixFQUFFO1lBQ2hDLE1BQU0sRUFBRSxDQUFDLEtBQVk7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFVO29CQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEtBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUM7SUF5Qk4sQ0FBQztJQXZCRyxhQUFhLENBQUMsSUFBVztRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUU1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBUTtZQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQy9CLEtBQUssRUFBRSxDQUFDO2dCQUNSLFVBQVUsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVk7Z0JBQ25DLE9BQU8sRUFBQyxDQUFDLElBQVc7b0JBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEIsQ0FBQztnQkFDTCxDQUFDO2FBQ0osQ0FBQztZQUNGLE1BQU0sQ0FBQyxZQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBbENELG9CQWtDQztBQUFBLENBQUM7QUFLRixjQUFlLFNBQVEsb0JBQVM7SUFDNUIsYUFBYSxDQUFDLElBQVc7UUFDckIsTUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsSUFBSSxDQUFDLFVBQVUsR0FBQyx1QkFBdUIsR0FBRSxFQUFFLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQUFBLENBQUMifQ==

/***/ }),
/* 33 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {;(function() {
"use strict"
function Vnode(tag, key, attrs0, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: undefined, _state: undefined, events: undefined, instance: undefined, skip: false}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function normalizeChildren(children) {
	for (var i = 0; i < children.length; i++) {
		children[i] = Vnode.normalize(children[i])
	}
	return children
}
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty
function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}
function execSelector(state, attrs, children) {
	var hasAttrs = false, childList, text
	var className = attrs.className || attrs.class
	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key)) {
			attrs[key] = state.attrs[key]
		}
	}
	if (className !== undefined) {
		if (attrs.class !== undefined) {
			attrs.class = undefined
			attrs.className = className
		}
		if (state.attrs.className != null) {
			attrs.className = state.attrs.className + " " + className
		}
	}
	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			hasAttrs = true
			break
		}
	}
	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		text = children[0].children
	} else {
		childList = children
	}
	return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text)
}
function hyperscript(selector) {
	// Because sloppy mode sucks
	var attrs = arguments[1], start = 2, children
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}
	if (typeof selector === "string") {
		var cached = selectorCache[selector] || compileSelector(selector)
	}
	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = 1
	}
	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}
	var normalized = Vnode.normalizeChildren(children)
	if (typeof selector === "string") {
		return execSelector(cached, attrs, normalized)
	} else {
		return Vnode(selector, attrs.key, attrs, normalized)
	}
}
hyperscript.trust = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}
hyperscript.fragment = function(attrs1, children) {
	return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined)
}
var m = hyperscript
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")
	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}
	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}
if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill
	var PromisePolyfill = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill
	var PromisePolyfill = global.Promise
} else {
}
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key0 in object) {
		destructure(key0, object[key0])
	}
	return args.join("&")
	function destructure(key0, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}
var FILE_PROTOCOL_REGEX = new RegExp("^file://", "i")
var _8 = function($window, Promise) {
	var callbackCount = 0
	var oncompletion
	function setCompletionCallback(callback) {oncompletion = callback}
	function finalizer() {
		var count = 0
		function complete() {if (--count === 0 && typeof oncompletion === "function") oncompletion()}
		return function finalize(promise0) {
			var then0 = promise0.then
			promise0.then = function() {
				count++
				var next = then0.apply(promise0, arguments)
				next.then(complete, function(e) {
					complete()
					if (count === 0) throw e
				})
				return finalize(next)
			}
			return promise0
		}
	}
	function normalize(args, extra) {
		if (typeof args === "string") {
			var url = args
			args = extra || {}
			if (args.url == null) args.url = url
		}
		return args
	}
	function request(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			if (args.method == null) args.method = "GET"
			args.method = args.method.toUpperCase()
			var useBody = (args.method === "GET" || args.method === "TRACE") ? false : (typeof args.useBody === "boolean" ? args.useBody : true)
			if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function(value) {return value} : JSON.stringify
			if (typeof args.deserialize !== "function") args.deserialize = deserialize
			if (typeof args.extract !== "function") args.extract = extract
			args.url = interpolate(args.url, args.data)
			if (useBody) args.data = args.serialize(args.data)
			else args.url = assemble(args.url, args.data)
			var xhr = new $window.XMLHttpRequest(),
				aborted = false,
				_abort = xhr.abort
			xhr.abort = function abort() {
				aborted = true
				_abort.call(xhr)
			}
			xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (args.serialize === JSON.stringify && useBody) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (args.deserialize === deserialize) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			for (var key in args.headers) if ({}.hasOwnProperty.call(args.headers, key)) {
				xhr.setRequestHeader(key, args.headers[key])
			}
			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
			xhr.onreadystatechange = function() {
				// Don't throw errors on xhr.abort().
				if(aborted) return
				if (xhr.readyState === 4) {
					try {
						var response = (args.extract !== extract) ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args))
						if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || FILE_PROTOCOL_REGEX.test(args.url)) {
							resolve(cast(args.type, response))
						}
						else {
							var error = new Error(xhr.responseText)
							for (var key in response) error[key] = response[key]
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (useBody && (args.data != null)) xhr.send(args.data)
			else xhr.send()
		})
		return args.background === true ? promise0 : finalize(promise0)
	}
	function jsonp(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				script.parentNode.removeChild(script)
				resolve(cast(args.type, data))
				delete $window[callbackName]
			}
			script.onerror = function() {
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
				delete $window[callbackName]
			}
			if (args.data == null) args.data = {}
			args.url = interpolate(args.url, args.data)
			args.data[args.callbackKey || "callback"] = callbackName
			script.src = assemble(args.url, args.data)
			$window.document.documentElement.appendChild(script)
		})
		return args.background === true? promise0 : finalize(promise0)
	}
	function interpolate(url, data) {
		if (data == null) return url
		var tokens = url.match(/:[^\/]+/gi) || []
		for (var i = 0; i < tokens.length; i++) {
			var key = tokens[i].slice(1)
			if (data[key] != null) {
				url = url.replace(tokens[i], data[key])
			}
		}
		return url
	}
	function assemble(url, data) {
		var querystring = buildQueryString(data)
		if (querystring !== "") {
			var prefix = url.indexOf("?") < 0 ? "?" : "&"
			url += prefix + querystring
		}
		return url
	}
	function deserialize(data) {
		try {return data !== "" ? JSON.parse(data) : null}
		catch (e) {throw new Error(data)}
	}
	function extract(xhr) {return xhr.responseText}
	function cast(type0, data) {
		if (typeof type0 === "function") {
			if (Array.isArray(data)) {
				for (var i = 0; i < data.length; i++) {
					data[i] = new type0(data[i])
				}
			}
			else return new type0(data)
		}
		return data
	}
	return {request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback}
}
var requestService = _8(window, PromisePolyfill)
var coreRenderer = function($window) {
	var $doc = $window.document
	var $emptyFragment = $doc.createDocumentFragment()
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	var onevent
	function setEventCallback(callback) {return onevent = callback}
	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": return createText(parent, vnode, nextSibling)
				case "<": return createHTML(parent, vnode, nextSibling)
				case "[": return createFragment(parent, vnode, hooks, ns, nextSibling)
				default: return createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else return createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
		return vnode.dom
	}
	function createHTML(parent, vnode, nextSibling) {
		var match1 = vnode.children.match(/^\s*?<(\w+)/im) || []
		var parent1 = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}[match1[1]] || "div"
		var temp = $doc.createElement(parent1)
		temp.innerHTML = vnode.children
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs2 = vnode.attrs
		var is = attrs2 && attrs2.is
		ns = getNameSpace(vnode) || ns
		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element
		if (attrs2 != null) {
			setAttrs(vnode, attrs2, ns)
		}
		insertNode(parent, element, nextSibling)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				setLateAttrs(vnode)
			}
		}
		return element
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		vnode._state = vnode.state
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		initLifecycle(vnode._state, vnode, hooks)
		vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			var element = createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
			insertNode(parent, element, nextSibling)
			return element
		}
		else {
			vnode.domSize = 0
			return $emptyFragment
		}
	}
	//update
	function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null) removeNodes(old, 0, old.length, vnodes)
		else {
			if (old.length === vnodes.length) {
				var isUnkeyed = false
				for (var i = 0; i < vnodes.length; i++) {
					if (vnodes[i] != null && old[i] != null) {
						isUnkeyed = vnodes[i].key == null && old[i].key == null
						break
					}
				}
				if (isUnkeyed) {
					for (var i = 0; i < old.length; i++) {
						if (old[i] === vnodes[i]) continue
						else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling))
						else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes)
						else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), recycling, ns)
					}
					return
				}
			}
			recycling = recycling || isRecyclable(old, vnodes)
			if (recycling) {
				var pool = old.pool
				old = old.concat(old.pool)
			}
			var oldStart = 0, start = 0, oldEnd = old.length - 1, end = vnodes.length - 1, map
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldStart], v = vnodes[start]
				if (o === v && !recycling) oldStart++, start++
				else if (o == null) oldStart++
				else if (v == null) start++
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldStart >= old.length - pool.length) || ((pool == null) && recycling)
					oldStart++, start++
					updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
				}
				else {
					var o = old[oldEnd]
					if (o === v && !recycling) oldEnd--, start++
					else if (o == null) oldEnd--
					else if (v == null) start++
					else if (o.key === v.key) {
						var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
						if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling))
						oldEnd--, start++
					}
					else break
				}
			}
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldEnd], v = vnodes[end]
				if (o === v && !recycling) oldEnd--, end--
				else if (o == null) oldEnd--
				else if (v == null) end--
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
					updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
					if (o.dom != null) nextSibling = o.dom
					oldEnd--, end--
				}
				else {
					if (!map) map = getKeyMap(old, oldEnd)
					if (v != null) {
						var oldIndex = map[v.key]
						if (oldIndex != null) {
							var movable = old[oldIndex]
							var shouldRecycle = (pool != null && oldIndex >= old.length - pool.length) || ((pool == null) && recycling)
							updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns)
							insertNode(parent, toFragment(movable), nextSibling)
							old[oldIndex].skip = true
							if (movable.dom != null) nextSibling = movable.dom
						}
						else {
							var dom = createNode(parent, v, hooks, ns, nextSibling)
							nextSibling = dom
						}
					}
					end--
				}
				if (end < start) break
			}
			createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
			removeNodes(old, oldStart, oldEnd + 1, vnodes)
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode._state = old._state
			vnode.events = old.events
			if (!recycling && shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					if (recycling) {
						vnode.state = {}
						initLifecycle(vnode.attrs, vnode, hooks)
					}
					else updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, nextSibling); break
					case "[": updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, recycling, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns)
		}
		else {
			removeNode(old, null)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, nextSibling) {
		if (old.children !== vnode.children) {
			toFragment(old)
			createHTML(parent, vnode, nextSibling)
		}
		else vnode.dom = old.dom, vnode.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, recycling, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns
		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle0 multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else if (old.text != null && vnode.text != null && vnode.text !== "") {
			if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		if (recycling) {
			initComponent(vnode, hooks)
		} else {
			vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
			if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
			updateLifecycle(vnode._state, vnode, hooks)
		}
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(old.instance, null)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function isRecyclable(old, vnodes) {
		if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
			var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0
			var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0
			var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0
			if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
				return true
			}
		}
		return false
	}
	function getKeyMap(vnodes, end) {
		var map = {}, i = 0
		for (var i = 0; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				var key2 = vnode.key
				if (key2 != null) map[key2] = i
			}
		}
		return map
	}
	function toFragment(vnode) {
		var count0 = vnode.domSize
		if (count0 != null || vnode.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count0 > 0) {
				var dom = vnode.dom
				while (--count0) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode.dom
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function setContentEditable(vnode) {
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}
	//remove
	function removeNodes(vnodes, start, end, context) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				if (vnode.skip) vnode.skip = false
				else removeNode(vnode, context)
			}
		}
	}
	function removeNode(vnode, context) {
		var expected = 1, called = 0
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeremove === "function") {
			var result = vnode._state.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				onremove(vnode)
				if (vnode.dom) {
					var count0 = vnode.domSize || 1
					if (count0 > 1) {
						var dom = vnode.dom
						while (--count0) {
							removeNodeFromDOM(dom.nextSibling)
						}
					}
					removeNodeFromDOM(vnode.dom)
					if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") { //TODO test custom elements
						if (!context.pool) context.pool = [vnode]
						else context.pool.push(vnode)
					}
				}
			}
		}
	}
	function removeNodeFromDOM(node) {
		var parent = node.parentNode
		if (parent != null) parent.removeChild(node)
	}
	function onremove(vnode) {
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") vnode.attrs.onremove.call(vnode.state, vnode)
		if (typeof vnode.tag !== "string" && typeof vnode._state.onremove === "function") vnode._state.onremove.call(vnode.state, vnode)
		if (vnode.instance != null) onremove(vnode.instance)
		else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}
	//attrs2
	function setAttrs(vnode, attrs2, ns) {
		for (var key2 in attrs2) {
			setAttr(vnode, key2, null, attrs2[key2], ns)
		}
	}
	function setAttr(vnode, key2, old, value, ns) {
		var element = vnode.dom
		if (key2 === "key" || key2 === "is" || (old === value && !isFormAttribute(vnode, key2)) && typeof value !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return
		var nsLastIndex = key2.indexOf(":")
		if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
			element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value)
		}
		else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value)
		else if (key2 === "style") updateStyle(element, old, value)
		else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
			if (key2 === "value") {
				var normalized0 = "" + value // eslint-disable-line no-implicit-coercion
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select") {
					if (value === null) {
						if (vnode.dom.selectedIndex === -1 && vnode.dom === $doc.activeElement) return
					} else {
						if (old !== null && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
					}
				}
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old != null && vnode.dom.value === normalized0) return
			}
			// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error0 will occur.
			if (vnode.tag === "input" && key2 === "type") {
				element.setAttribute(key2, value)
				return
			}
			element[key2] = value
		}
		else {
			if (typeof value === "boolean") {
				if (value) element.setAttribute(key2, "")
				else element.removeAttribute(key2)
			}
			else element.setAttribute(key2 === "className" ? "class" : key2, value)
		}
	}
	function setLateAttrs(vnode) {
		var attrs2 = vnode.attrs
		if (vnode.tag === "select" && attrs2 != null) {
			if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined)
			if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined)
		}
	}
	function updateAttrs(vnode, old, attrs2, ns) {
		if (attrs2 != null) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, old && old[key2], attrs2[key2], ns)
			}
		}
		if (old != null) {
			for (var key2 in old) {
				if (attrs2 == null || !(key2 in attrs2)) {
					if (key2 === "className") key2 = "class"
					if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined)
					else if (key2 !== "key") vnode.dom.removeAttribute(key2)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function isAttribute(attr) {
		return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"// || attr === "type"
	}
	function isCustomElement(vnode){
		return vnode.attrs.is || vnode.tag.indexOf("-") > -1
	}
	function hasIntegrationMethods(source) {
		return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove)
	}
	//style
	function updateStyle(element, old, style) {
		if (old === style) element.style.cssText = "", old = null
		if (style == null) element.style.cssText = ""
		else if (typeof style === "string") element.style.cssText = style
		else {
			if (typeof old === "string") element.style.cssText = ""
			for (var key2 in style) {
				element.style[key2] = style[key2]
			}
			if (old != null && typeof old !== "string") {
				for (var key2 in old) {
					if (!(key2 in style)) element.style[key2] = ""
				}
			}
		}
	}
	//event
	function updateEvent(vnode, key2, value) {
		var element = vnode.dom
		var callback = typeof onevent !== "function" ? value : function(e) {
			var result = value.call(element, e)
			onevent.call(element, e)
			return result
		}
		if (key2 in element) element[key2] = typeof value === "function" ? callback : null
		else {
			var eventName = key2.slice(2)
			if (vnode.events === undefined) vnode.events = {}
			if (vnode.events[key2] === callback) return
			if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false)
			if (typeof value === "function") {
				vnode.events[key2] = callback
				element.addEventListener(eventName, vnode.events[key2], false)
			}
		}
	}
	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode)
		if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		var forceVnodeUpdate, forceComponentUpdate
		if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old)
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeupdate === "function") forceComponentUpdate = vnode._state.onbeforeupdate.call(vnode.state, vnode, old)
		if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
			return true
		}
		return false
	}
	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = $doc.activeElement
		var namespace = dom.namespaceURI
		// First time0 rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		if (!Array.isArray(vnodes)) vnodes = [vnodes]
		updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		for (var i = 0; i < hooks.length; i++) hooks[i]()
		if ($doc.activeElement !== active) active.focus()
	}
	return {render: render, setEventCallback: setEventCallback}
}
function throttle(callback) {
	//60fps translates to 16.6ms, round it down since setTimeout requires int
	var time = 16
	var last = 0, pending = null
	var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout
	return function() {
		var now = Date.now()
		if (last === 0 || now - last >= time) {
			last = now
			callback()
		}
		else if (pending === null) {
			pending = timeout(function() {
				pending = null
				callback()
				last = Date.now()
			}, time - (now - last))
		}
	}
}
var _11 = function($window) {
	var renderService = coreRenderer($window)
	renderService.setEventCallback(function(e) {
		if (e.redraw === false) e.redraw = undefined
		else redraw()
	})
	var callbacks = []
	function subscribe(key1, callback) {
		unsubscribe(key1)
		callbacks.push(key1, throttle(callback))
	}
	function unsubscribe(key1) {
		var index = callbacks.indexOf(key1)
		if (index > -1) callbacks.splice(index, 2)
	}
	function redraw() {
		for (var i = 1; i < callbacks.length; i += 2) {
			callbacks[i]()
		}
	}
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}
var redrawService = _11(window)
requestService.setCompletionCallback(redrawService.redraw)
var _16 = function(redrawService0) {
	return function(root, component) {
		if (component === null) {
			redrawService0.render(root, [])
			redrawService0.unsubscribe(root)
			return
		}
		
		if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
		
		var run0 = function() {
			redrawService0.render(root, Vnode(component))
		}
		redrawService0.subscribe(root, run0)
		redrawService0.redraw()
	}
}
m.mount = _16(redrawService)
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), data0 = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key5 = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value === "true") value = true
		else if (value === "false") value = false
		var levels = key5.split(/\]\[?|\[/)
		var cursor = data0
		if (key5.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j === levels.length - 1
			if (level === "") {
				var key5 = levels.slice(0, j).join()
				if (counters[key5] == null) counters[key5] = 0
				level = counters[key5]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data0
}
var coreRouter = function($window) {
	var supportsPushState = typeof $window.history.pushState === "function"
	var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
	function normalize1(fragment0) {
		var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
		if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data
		return data
	}
	var asyncId
	function debounceAsync(callback0) {
		return function() {
			if (asyncId != null) return
			asyncId = callAsync0(function() {
				asyncId = null
				callback0()
			})
		}
	}
	function parsePath(path, queryData, hashData) {
		var queryIndex = path.indexOf("?")
		var hashIndex = path.indexOf("#")
		var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
		if (queryIndex > -1) {
			var queryEnd = hashIndex > -1 ? hashIndex : path.length
			var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
			for (var key4 in queryParams) queryData[key4] = queryParams[key4]
		}
		if (hashIndex > -1) {
			var hashParams = parseQueryString(path.slice(hashIndex + 1))
			for (var key4 in hashParams) hashData[key4] = hashParams[key4]
		}
		return path.slice(0, pathEnd)
	}
	var router = {prefix: "#!"}
	router.getPath = function() {
		var type2 = router.prefix.charAt(0)
		switch (type2) {
			case "#": return normalize1("hash").slice(router.prefix.length)
			case "?": return normalize1("search").slice(router.prefix.length) + normalize1("hash")
			default: return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash")
		}
	}
	router.setPath = function(path, data, options) {
		var queryData = {}, hashData = {}
		path = parsePath(path, queryData, hashData)
		if (data != null) {
			for (var key4 in data) queryData[key4] = data[key4]
			path = path.replace(/:([^\/]+)/g, function(match2, token) {
				delete queryData[token]
				return data[token]
			})
		}
		var query = buildQueryString(queryData)
		if (query) path += "?" + query
		var hash = buildQueryString(hashData)
		if (hash) path += "#" + hash
		if (supportsPushState) {
			var state = options ? options.state : null
			var title = options ? options.title : null
			$window.onpopstate()
			if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
			else $window.history.pushState(state, title, router.prefix + path)
		}
		else $window.location.href = router.prefix + path
	}
	router.defineRoutes = function(routes, resolve, reject) {
		function resolveRoute() {
			var path = router.getPath()
			var params = {}
			var pathname = parsePath(path, params, params)
			var state = $window.history.state
			if (state != null) {
				for (var k in state) params[k] = state[k]
			}
			for (var route0 in routes) {
				var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
				if (matcher.test(pathname)) {
					pathname.replace(matcher, function() {
						var keys = route0.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						for (var i = 0; i < keys.length; i++) {
							params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						}
						resolve(routes[route0], params, path, route0)
					})
					return
				}
			}
			reject(path, params)
		}
		if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
		else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
		resolveRoute()
	}
	return router
}
var _20 = function($window, redrawService0) {
	var routeService = coreRouter($window)
	var identity = function(v) {return v}
	var render1, component, attrs3, currentPath, lastUpdate
	var route = function(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		var run1 = function() {
			if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
		}
		var bail = function(path) {
			if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
			else throw new Error("Could not resolve default route " + defaultRoute)
		}
		routeService.defineRoutes(routes, function(payload, params, path) {
			var update = lastUpdate = function(routeResolver, comp) {
				if (update !== lastUpdate) return
				component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
				attrs3 = params, currentPath = path, lastUpdate = null
				render1 = (routeResolver.render || identity).bind(routeResolver)
				run1()
			}
			if (payload.view || typeof payload === "function") update({}, payload)
			else {
				if (payload.onmatch) {
					Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
						update(payload, resolved)
					}, bail)
				}
				else update(payload, "div")
			}
		}, bail)
		redrawService0.subscribe(root, run1)
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		routeService.setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = function(prefix0) {routeService.prefix = prefix0}
	route.link = function(vnode1) {
		vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href)
		vnode1.dom.onclick = function(e) {
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
			e.preventDefault()
			e.redraw = false
			var href = this.getAttribute("href")
			if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
			route.set(href, undefined, undefined)
		}
	}
	route.param = function(key3) {
		if(typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3]
		return attrs3
	}
	return route
}
m.route = _20(window, redrawService)
m.withAttr = function(attrName, callback1, context) {
	return function(e) {
		callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName))
	}
}
var _28 = coreRenderer(window)
m.render = _28.render
m.redraw = redrawService.redraw
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.version = "1.1.3"
m.vnode = Vnode
if (true) module["exports"] = m
else window.m = m
}());
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).setImmediate, __webpack_require__(4)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {/* eslint-disable no-bitwise, no-process-exit */


module.exports = new function init(name) {
	var spec = {}, subjects = [], results, only = null, ctx = spec, start, stack = 0, nextTickish, hasProcess = typeof process === "object", hasOwn = ({}).hasOwnProperty

	if (name != null) spec[name] = ctx = {}

	function o(subject, predicate) {
		if (predicate === undefined) {
			if (results == null) throw new Error("Assertions should not occur outside test definitions")
			return new Assert(subject)
		}
		else if (results == null) {
			ctx[unique(subject)] = predicate
		} else {
			throw new Error("Test definition shouldn't be nested. To group tests use `o.spec()`")
		}
	}
	o.before = hook("__before")
	o.after = hook("__after")
	o.beforeEach = hook("__beforeEach")
	o.afterEach = hook("__afterEach")
	o.new = init
	o.spec = function(subject, predicate) {
		var parent = ctx
		ctx = ctx[unique(subject)] = {}
		predicate()
		ctx = parent
	}
	o.only = function(subject, predicate, silent) {
		if (!silent) console.log(highlight("/!\\ WARNING /!\\ o.only() mode"))
		o(subject, only = predicate)
	}
	o.spy = function(fn) {
		var spy = function() {
			spy.this = this
			spy.args = [].slice.call(arguments)
			spy.callCount++

			if (fn) return fn.apply(this, arguments)
		}
		if (fn)
			Object.defineProperties(spy, {
				length: {value: fn.length},
				name: {value: fn.name}
			})
		spy.args = []
		spy.callCount = 0
		return spy
	}
	o.run = function() {
		results = []
		start = new Date
		test(spec, [], [], report)

		function test(spec, pre, post, finalize) {
			pre = [].concat(pre, spec["__beforeEach"] || [])
			post = [].concat(spec["__afterEach"] || [], post)
			series([].concat(spec["__before"] || [], Object.keys(spec).map(function(key) {
				return function(done, timeout) {
					timeout(Infinity)

					if (key.slice(0, 2) === "__") return done()
					if (only !== null && spec[key] !== only && typeof only === typeof spec[key]) return done()
					subjects.push(key)
					var type = typeof spec[key]
					if (type === "object") test(spec[key], pre, post, pop)
					if (type === "function") series([].concat(pre, spec[key], post, pop))

					function pop() {
						subjects.pop()
						done()
					}
				}
			}), spec["__after"] || [], finalize))
		}

		function series(fns) {
			var cursor = 0
			next()

			function next() {
				if (cursor === fns.length) return

				var fn = fns[cursor++]
				if (fn.length > 0) {
					var timeout = 0, delay = 200, s = new Date
					var isDone = false
					var body = fn.toString()
					var arg = (body.match(/\(([\w$]+)/) || body.match(/([\w$]+)\s*=>/) || []).pop()
					if (body.indexOf(arg) === body.lastIndexOf(arg)) throw new Error("`" + arg + "()` should be called at least once")
					try {
						fn(function done() {
							if (timeout !== undefined) {
								timeout = clearTimeout(timeout)
								if (delay !== Infinity) record(null)
								if (!isDone) next()
								else throw new Error("`" + arg + "()` should only be called once")
								isDone = true
							}
							else console.log("# elapsed: " + Math.round(new Date - s) + "ms, expected under " + delay + "ms")
						}, function(t) {delay = t})
					}
					catch (e) {
						record(e.message, e)
						subjects.pop()
						next()
					}
					if (timeout === 0) {
						timeout = setTimeout(function() {
							timeout = undefined
							record("async test timed out")
							next()
						}, Math.min(delay, 2147483647))
					}
				}
				else {
					fn()
					nextTickish(next)
				}
			}
		}
	}
	function unique(subject) {
		if (hasOwn.call(ctx, subject)) {
			console.warn("A test or a spec named `" + subject + "` was already defined")
			while (hasOwn.call(ctx, subject)) subject += "*"
		}
		return subject
	}
	function hook(name) {
		return function(predicate) {
			if (ctx[name]) throw new Error("This hook should be defined outside of a loop or inside a nested test group:\n" + predicate)
			ctx[name] = predicate
		}
	}

	define("equals", "should equal", function(a, b) {return a === b})
	define("notEquals", "should not equal", function(a, b) {return a !== b})
	define("deepEquals", "should deep equal", deepEqual)
	define("notDeepEquals", "should not deep equal", function(a, b) {return !deepEqual(a, b)})

	function isArguments(a) {
		if ("callee" in a) {
			for (var i in a) if (i === "callee") return false
			return true
		}
	}
	function deepEqual(a, b) {
		if (a === b) return true
		if (a === null ^ b === null || a === undefined ^ b === undefined) return false
		if (typeof a === "object" && typeof b === "object") {
			var aIsArgs = isArguments(a), bIsArgs = isArguments(b)
			if (a.constructor === Object && b.constructor === Object && !aIsArgs && !bIsArgs) {
				for (var i in a) {
					if ((!(i in b)) || !deepEqual(a[i], b[i])) return false
				}
				for (var i in b) {
					if (!(i in a)) return false
				}
				return true
			}
			if (a.length === b.length && (a instanceof Array && b instanceof Array || aIsArgs && bIsArgs)) {
				var aKeys = Object.getOwnPropertyNames(a), bKeys = Object.getOwnPropertyNames(b)
				if (aKeys.length !== bKeys.length) return false
				for (var i = 0; i < aKeys.length; i++) {
					if (!hasOwn.call(b, aKeys[i]) || !deepEqual(a[aKeys[i]], b[aKeys[i]])) return false
				}
				return true
			}
			if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
			if (typeof Buffer === "function" && a instanceof Buffer && b instanceof Buffer) {
				for (var i = 0; i < a.length; i++) {
					if (a[i] !== b[i]) return false
				}
				return true
			}
			if (a.valueOf() === b.valueOf()) return true
		}
		return false
	}

	function Assert(value) {this.value = value}
	function define(name, verb, compare) {
		Assert.prototype[name] = function assert(value) {
			if (compare(this.value, value)) record(null)
			else record(serialize(this.value) + "\n" + verb + "\n" + serialize(value))
			return function(message) {
				var result = results[results.length - 1]
				result.message = message + "\n\n" + result.message
			}
		}
	}
	function record(message, error) {
		var result = {pass: message === null}
		if (result.pass === false) {
			if (error == null) {
				error = new Error
				if (error.stack === undefined) new function() {try {throw error} catch (e) {error = e}}
			}
			result.context = subjects.join(" > ")
			result.message = message
			result.error = error.stack
		}
		results.push(result)
	}
	function serialize(value) {
		if (value === null || (typeof value === "object" && !(value instanceof Array)) || typeof value === "number") return String(value)
		else if (typeof value === "function") return value.name || "<anonymous function>"
		try {return JSON.stringify(value)} catch (e) {return String(value)}
	}
	function highlight(message) {
		return hasProcess ? "\x1b[31m" + message + "\x1b[0m" : "%c" + message + "%c "
	}

	function report() {
		var status = 0
		for (var i = 0, r; r = results[i]; i++) {
			if (!r.pass) {
				var stackTrace = r.error.match(/^(?:(?!Error|[\/\\]ospec[\/\\]ospec\.js).)*$/m)
				console.error(r.context + ":\n" + highlight(r.message) + (stackTrace ? "\n\n" + stackTrace + "\n\n" : ""), hasProcess ? "" : "color:red", hasProcess ? "" : "color:black")
				status = 1
			}
		}
		console.log(
			(name ? name + ": " : "") +
			results.length + " assertions completed in " + Math.round(new Date - start) + "ms, " +
			"of which " + results.filter(function(result){return result.error}).length + " failed"
		)
		if (hasProcess && status === 1) process.exit(1)
	}

	if(hasProcess) {
		nextTickish = process.nextTick
	} else {
		nextTickish = function fakeFastNextTick(next) {
			if (stack++ < 5000) next()
			else setTimeout(next, stack = 0)
		}
	}

	return o
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(23).Buffer))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), data = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j === levels.length - 1
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) counters[key] = 0
				level = counters[key]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pushStateMock = __webpack_require__(40)
var domMock = __webpack_require__(39)
var xhrMock = __webpack_require__(41)

module.exports = function(env) {
	env = env || {}
	var $window = env.window = {}

	var dom = domMock()
	var xhr = xhrMock()
	for (var key in dom) if (!$window[key]) $window[key] = dom[key]
	for (var key in xhr) if (!$window[key]) $window[key] = xhr[key]
	pushStateMock(env)

	return $window
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
Known limitations:

- `option.selected` can't be set/read when the option doesn't have a `select` parent
- `element.attributes` is just a map of attribute names => Attr objects stubs
- ...

*/

/*
options:
- spy:(f: Function) => Function
*/

module.exports = function(options) {
	options = options || {}
	var spy = options.spy || function(f){return f}
	var spymap = []
	function registerSpies(element, spies) {
		if(options.spy) {
			var i = spymap.indexOf(element)
			if (i === -1) {
				spymap.push(element, spies)
			} else {
				var existing = spymap[i + 1]
				for (var k in spies) existing[k] = spies[k]
			}
		}
	}
	function getSpies(element) {
		if (element == null || typeof element !== "object") throw new Error("Element expected")
		if(options.spy) return spymap[spymap.indexOf(element) + 1]
	}

	function isModernEvent(type) {
		return type === "transitionstart" || type === "transitionend" || type === "animationstart" || type === "animationend"
	}
	function appendChild(child) {
		var ancestor = this
		while (ancestor !== child && ancestor !== null) ancestor = ancestor.parentNode
		if (ancestor === child) throw new Error("Node cannot be inserted at the specified point in the hierarchy")

		if (child.nodeType == null) throw new Error("Argument is not a DOM element")

		var index = this.childNodes.indexOf(child)
		if (index > -1) this.childNodes.splice(index, 1)
		if (child.nodeType === 11) {
			while (child.firstChild != null) this.appendChild(child.firstChild)
			child.childNodes = []
		}
		else {
			this.childNodes.push(child)
			if (child.parentNode != null && child.parentNode !== this) child.parentNode.removeChild(child)
			child.parentNode = this
		}
	}
	function removeChild(child) {
		var index = this.childNodes.indexOf(child)
		if (index > -1) {
			this.childNodes.splice(index, 1)
			child.parentNode = null
		}
		else throw new TypeError("Failed to execute 'removeChild'")
	}
	function insertBefore(child, reference) {
		var ancestor = this
		while (ancestor !== child && ancestor !== null) ancestor = ancestor.parentNode
		if (ancestor === child) throw new Error("Node cannot be inserted at the specified point in the hierarchy")

		if (child.nodeType == null) throw new Error("Argument is not a DOM element")

		var refIndex = this.childNodes.indexOf(reference)
		var index = this.childNodes.indexOf(child)
		if (reference !== null && refIndex < 0) throw new TypeError("Invalid argument")
		if (index > -1) this.childNodes.splice(index, 1)
		if (reference === null) this.appendChild(child)
		else {
			if (child.nodeType === 11) {
				this.childNodes.splice.apply(this.childNodes, [refIndex, 0].concat(child.childNodes))
				while (child.firstChild) {
					var subchild = child.firstChild
					child.removeChild(subchild)
					subchild.parentNode = this
				}
				child.childNodes = []
			}
			else {
				this.childNodes.splice(refIndex, 0, child)
				if (child.parentNode != null && child.parentNode !== this) child.parentNode.removeChild(child)
				child.parentNode = this
			}
		}
	}
	function getAttribute(name) {
		if (this.attributes[name] == null) return null
		return this.attributes[name].value
	}
	function setAttribute(name, value) {
		/*eslint-disable no-implicit-coercion*/
		// this is the correct kind of conversion, passing a Symbol throws in browsers too.
		var nodeValue = "" + value
		/*eslint-enable no-implicit-coercion*/

		this.attributes[name] = {
			namespaceURI: null,
			get value() {return nodeValue},
			set value(value) {
				/*eslint-disable no-implicit-coercion*/
				nodeValue = "" + value
				/*eslint-enable no-implicit-coercion*/
			},
			get nodeValue() {return nodeValue},
			set nodeValue(value) {
				this.value = value
			}
		}
	}
	function setAttributeNS(ns, name, value) {
		this.setAttribute(name, value)
		this.attributes[name].namespaceURI = ns
	}
	function removeAttribute(name) {
		delete this.attributes[name]
	}
	function hasAttribute(name) {
		return name in this.attributes
	}
	var declListTokenizer = /;|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'/g
	/**
	 * This will split a semicolon-separated CSS declaration list into an array of
	 * individual declarations, ignoring semicolons in strings.
	 *
	 * Comments are also stripped.
	 *
	 * @param {string} declList
	 * @return {string[]}
	 */
	function splitDeclList(declList) {
		var indices = [], res = [], match

		// remove comments, preserving comments in strings.
		declList = declList.replace(
			/("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*')|\/\*[\s\S]*?\*\//g,
			function(m, str){
				return str || ""
			}
		)
		/*eslint-disable no-cond-assign*/
		while (match = declListTokenizer.exec(declList)) {
			if (match[0] === ";") indices.push(match.index)
		}
		/*eslint-enable no-cond-assign*/
		for (var i = indices.length; i--;){
			res.unshift(declList.slice(indices[i] + 1))
			declList = declList.slice(0, indices[i])
		}
		res.unshift(declList)
		return res
	}

	var activeElement
	var $window = {
		document: {
			createElement: function(tag) {
				var cssText = ""
				var style = {}
				Object.defineProperty(style, "cssText", {
					get: function() {return cssText},
					set: function (value) {
						var buf = []
						if (typeof value === "string") {
							for (var key in style) style[key] = ""
							var rules = splitDeclList(value)
							for (var i = 0; i < rules.length; i++) {
								var rule = rules[i]
								var colonIndex = rule.indexOf(":")
								if (colonIndex > -1) {
									var rawKey = rule.slice(0, colonIndex).trim()
									var key = rawKey.replace(/-\D/g, function(match) {return match[1].toUpperCase()})
									var value = rule.slice(colonIndex + 1).trim()
									if (key !== "cssText") {
										style[key] = value
										buf.push(rawKey + ": " + value + ";")
									}
								}
							}
							cssText = buf.join(" ")
						}
					}
				})
				var events = {}
				var element = {
					nodeType: 1,
					nodeName: tag.toUpperCase(),
					namespaceURI: "http://www.w3.org/1999/xhtml",
					appendChild: appendChild,
					removeChild: removeChild,
					insertBefore: insertBefore,
					hasAttribute: hasAttribute,
					getAttribute: getAttribute,
					setAttribute: setAttribute,
					setAttributeNS: setAttributeNS,
					removeAttribute: removeAttribute,
					parentNode: null,
					childNodes: [],
					attributes: {},
					get firstChild() {
						return this.childNodes[0] || null
					},
					get nextSibling() {
						if (this.parentNode == null) return null
						var index = this.parentNode.childNodes.indexOf(this)
						if (index < 0) throw new TypeError("Parent's childNodes is out of sync")
						return this.parentNode.childNodes[index + 1] || null
					},
					set textContent(value) {
						this.childNodes = []
						if (value !== "") this.appendChild($window.document.createTextNode(value))
					},
					set innerHTML(value) {
						while (this.firstChild) this.removeChild(this.firstChild)

						var stack = [this], depth = 0, voidElements = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]
						value.replace(/<([a-z0-9\-]+?)((?:\s+?[^=]+?=(?:"[^"]*?"|'[^']*?'|[^\s>]*))*?)(\s*\/)?>|<\/([a-z0-9\-]+?)>|([^<]+)/g, function(match, startTag, attrs, selfClosed, endTag, text) {
							if (startTag) {
								var element = $window.document.createElement(startTag)
								attrs.replace(/\s+?([^=]+?)=(?:"([^"]*?)"|'([^']*?)'|([^\s>]*))/g, function(match, key, doubleQuoted, singleQuoted, unquoted) {
									var keyParts = key.split(":")
									var name = keyParts.pop()
									var ns = keyParts[0]
									var value = doubleQuoted || singleQuoted || unquoted || ""
									if (ns != null) element.setAttributeNS(ns, name, value)
									else element.setAttribute(name, value)
								})
								stack[depth].appendChild(element)
								if (!selfClosed && voidElements.indexOf(startTag.toLowerCase()) < 0) stack[++depth] = element
							}
							else if (endTag) {
								depth--
							}
							else if (text) {
								stack[depth].appendChild($window.document.createTextNode(text)) // FIXME handle html entities
							}
						})
					},
					get style() {
						return style
					},
					set style(_){
						// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#Setting_style
						throw new Error("setting element.style is not portable")
					},
					get className() {
						return this.attributes["class"] ? this.attributes["class"].value : ""
					},
					set className(value) {
						if (this.namespaceURI === "http://www.w3.org/2000/svg") throw new Error("Cannot set property className of SVGElement")
						else this.setAttribute("class", value)
					},
					focus: function() {activeElement = this},
					addEventListener: function(type, callback) {
						if (events[type] == null) events[type] = [callback]
						else events[type].push(callback)
					},
					removeEventListener: function(type, callback) {
						if (events[type] != null) {
							var index = events[type].indexOf(callback)
							if (index > -1) events[type].splice(index, 1)
						}
					},
					dispatchEvent: function(e) {
						if (this.nodeName === "INPUT" && this.attributes["type"] != null && this.attributes["type"].value === "checkbox" && e.type === "click") {
							this.checked = !this.checked
						}

						e.target = this
						if (events[e.type] != null) {
							for (var i = 0; i < events[e.type].length; i++) {
								events[e.type][i].call(this, e)
							}
						}
						e.preventDefault = function() {
							// TODO: should this do something?
						}
						if (typeof this["on" + e.type] === "function" && !isModernEvent(e.type)) this["on" + e.type](e)
					},
					onclick: null,
				}

				if (element.nodeName === "A") {
					Object.defineProperty(element, "href", {
						get: function() {return this.attributes["href"] === undefined ? "" : "[FIXME implement]"},
						set: function(value) {this.setAttribute("href", value)},
						enumerable: true,
					})
				}

				if (element.nodeName === "INPUT") {
					var checked
					Object.defineProperty(element, "checked", {
						get: function() {return checked === undefined ? this.attributes["checked"] !== undefined : checked},
						set: function(value) {checked = Boolean(value)},
						enumerable: true,
					})

					var value = ""
					var valueSetter = spy(function(v) {
						/*eslint-disable no-implicit-coercion*/
						value = v === null ? "" : "" + v
						/*eslint-enable no-implicit-coercion*/
					})
					Object.defineProperty(element, "value", {
						get: function() {
							return value
						},
						set: valueSetter,
						enumerable: true,
					})

					// we currently emulate the non-ie behavior, but emulating ie may be more useful (throw when an invalid type is set)
					var typeSetter = spy(function(v) {
						this.setAttribute("type", v)
					})
					Object.defineProperty(element, "type", {
						get: function() {
							if (!this.hasAttribute("type")) return "text"
							var type = this.getAttribute("type")
							return (/^(?:radio|button|checkbox|color|date|datetime|datetime-local|email|file|hidden|month|number|password|range|research|search|submit|tel|text|url|week|image)$/)
							.test(type)
							? type
							: "text"
						},
						set: typeSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter,
						typeSetter: typeSetter
					})
				}


				if (element.nodeName === "TEXTAREA") {
					var wasNeverSet = true
					var value = ""
					var valueSetter = spy(function(v) {
						wasNeverSet = false
						/*eslint-disable no-implicit-coercion*/
						value = v === null ? "" : "" + v
						/*eslint-enable no-implicit-coercion*/
					})
					Object.defineProperty(element, "value", {
						get: function() {
							return wasNeverSet && this.firstChild ? this.firstChild.nodeValue : value
						},
						set: valueSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter
					})
				}

				/* eslint-disable radix */

				if (element.nodeName === "CANVAS") {
					Object.defineProperty(element, "width", {
						get: function() {return this.attributes["width"] ? Math.floor(parseInt(this.attributes["width"].value) || 0) : 300},
						set: function(value) {this.setAttribute("width", Math.floor(Number(value) || 0).toString())},
					})
					Object.defineProperty(element, "height", {
						get: function() {return this.attributes["height"] ? Math.floor(parseInt(this.attributes["height"].value) || 0) : 300},
						set: function(value) {this.setAttribute("height", Math.floor(Number(value) || 0).toString())},
					})
				}

				/* eslint-enable radix */

				function getOptions(element) {
					var options = []
					for (var i = 0; i < element.childNodes.length; i++) {
						if (element.childNodes[i].nodeName === "OPTION") options.push(element.childNodes[i])
						else if (element.childNodes[i].nodeName === "OPTGROUP") options = options.concat(getOptions(element.childNodes[i]))
					}
					return options
				}
				function getOptionValue(element) {
					return element.attributes["value"] != null ?
						element.attributes["value"].value :
						element.firstChild != null ? element.firstChild.nodeValue : ""
				}
				if (element.nodeName === "SELECT") {
					// var selectedValue
					var selectedIndex = 0
					Object.defineProperty(element, "selectedIndex", {
						get: function() {return getOptions(this).length > 0 ? selectedIndex : -1},
						set: function(value) {
							var options = getOptions(this)
							if (value >= 0 && value < options.length) {
								// selectedValue = getOptionValue(options[selectedIndex])
								selectedIndex = value
							}
							else {
								// selectedValue = ""
								selectedIndex = -1
							}
						},
						enumerable: true,
					})
					var valueSetter = spy(function(value) {
						if (value === null) {
							selectedIndex = -1
						} else {
							var options = getOptions(this)
							/*eslint-disable no-implicit-coercion*/
							var stringValue = "" + value
							/*eslint-enable no-implicit-coercion*/
							for (var i = 0; i < options.length; i++) {
								if (getOptionValue(options[i]) === stringValue) {
									// selectedValue = stringValue
									selectedIndex = i
									return
								}
							}
							// selectedValue = stringValue
							selectedIndex = -1
						}
					})
					Object.defineProperty(element, "value", {
						get: function() {
							if (this.selectedIndex > -1) return getOptionValue(getOptions(this)[this.selectedIndex])
							return ""
						},
						set: valueSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter
					})
				}
				if (element.nodeName === "OPTION") {
					var valueSetter = spy(function(value) {
						/*eslint-disable no-implicit-coercion*/
						this.setAttribute("value", value === null ? "" : "" + value)
						/*eslint-enable no-implicit-coercion*/
					})
					Object.defineProperty(element, "value", {
						get: function() {return getOptionValue(this)},
						set: valueSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter
					})

					Object.defineProperty(element, "selected", {
						// TODO? handle `selected` without a parent (works in browsers)
						get: function() {
							var options = getOptions(this.parentNode)
							var index = options.indexOf(this)
							return index === this.parentNode.selectedIndex
						},
						set: function(value) {
							if (value) {
								var options = getOptions(this.parentNode)
								var index = options.indexOf(this)
								if (index > -1) this.parentNode.selectedIndex = index
							}
							else this.parentNode.selectedIndex = 0
						},
						enumerable: true,
					})
				}
				return element
			},
			createElementNS: function(ns, tag, is) {
				var element = this.createElement(tag, is)
				element.nodeName = tag
				element.namespaceURI = ns
				return element
			},
			createTextNode: function(text) {
				/*eslint-disable no-implicit-coercion*/
				var nodeValue = "" + text
				/*eslint-enable no-implicit-coercion*/
				return {
					nodeType: 3,
					nodeName: "#text",
					parentNode: null,
					get nodeValue() {return nodeValue},
					set nodeValue(value) {
						/*eslint-disable no-implicit-coercion*/
						nodeValue = "" + value
						/*eslint-enable no-implicit-coercion*/
					},
				}
			},
			createDocumentFragment: function() {
				return {
					nodeType: 11,
					nodeName: "#document-fragment",
					appendChild: appendChild,
					insertBefore: insertBefore,
					removeChild: removeChild,
					parentNode: null,
					childNodes: [],
					get firstChild() {
						return this.childNodes[0] || null
					},
				}
			},
			createEvent: function() {
				return {
					initEvent: function(type) {this.type = type},
				}
			},
			get activeElement() {return activeElement},
		},
	}
	$window.document.documentElement = $window.document.createElement("html")
	$window.document.documentElement.appendChild($window.document.createElement("head"))
	$window.document.body = $window.document.createElement("body")
	$window.document.documentElement.appendChild($window.document.body)
	activeElement = $window.document.body

	if (options.spy) $window.__getSpies = getSpies

	return $window
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseURL = __webpack_require__(9)
var callAsync = __webpack_require__(8)

function debouncedAsync(f) {
	var ref
	return function() {
		if (ref != null) return
		ref = callAsync(function(){
			ref = null
			f()
		})
	}
}

module.exports = function(options) {
	if (options == null) options = {}

	var $window = options.window || {}
	var protocol = options.protocol || "http:"
	var hostname = options.hostname || "localhost"
	var port = ""
	var pathname = "/"
	var search = ""
	var hash = ""

	var past = [{url: getURL(), isNew: true, state: null, title: null}], future = []

	function getURL() {
		if (protocol === "file:") return protocol + "//" + pathname + search + hash
		return protocol + "//" + hostname + prefix(":", port) + pathname + search + hash
	}
	function setURL(value) {
		var data = parseURL(value, {protocol: protocol, hostname: hostname, port: port, pathname: pathname})
		var isNew = false
		if (data.protocol != null && data.protocol !== protocol) protocol = data.protocol, isNew = true
		if (data.hostname != null && data.hostname !== hostname) hostname = data.hostname, isNew = true
		if (data.port != null && data.port !== port) port = data.port, isNew = true
		if (data.pathname != null && data.pathname !== pathname) pathname = data.pathname, isNew = true
		if (data.search != null && data.search !== search) search = data.search, isNew = true
		if (data.hash != null && data.hash !== hash) {
			hash = data.hash
			if (!isNew) {
				hashchange()
			}
		}
		return isNew
	}

	function prefix(prefix, value) {
		if (value === "") return ""
		return (value.charAt(0) !== prefix ? prefix : "") + value
	}
	function _hashchange() {
		if (typeof $window.onhashchange === "function") $window.onhashchange({type: "hashchange"})
	}
	var hashchange = debouncedAsync(_hashchange)
	function popstate() {
		if (typeof $window.onpopstate === "function") $window.onpopstate({type: "popstate", state: $window.history.state})
	}
	function unload() {
		if (typeof $window.onunload === "function") $window.onunload({type: "unload"})
	}

	$window.location = {
		get protocol() {
			return protocol
		},
		get hostname() {
			return hostname
		},
		get port() {
			return port
		},
		get pathname() {
			return pathname
		},
		get search() {
			return search
		},
		get hash() {
			return hash
		},
		get origin() {
			if (protocol === "file:") return "null"
			return protocol + "//" + hostname + prefix(":", port)
		},
		get host() {
			if (protocol === "file:") return ""
			return hostname + prefix(":", port)
		},
		get href() {
			return getURL()
		},

		set protocol(value) {
			throw new Error("Protocol is read-only")
		},
		set hostname(value) {
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			hostname = value
		},
		set port(value) {
			if (protocol === "file:") throw new Error("Port is read-only under `file://` protocol")
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			port = value
		},
		set pathname(value) {
			if (protocol === "file:") throw new Error("Pathname is read-only under `file://` protocol")
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			pathname = prefix("/", value)
		},
		set search(value) {
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			search = prefix("?", value)
		},
		set hash(value) {
			var oldHash = hash
			past.push({url: getURL(), isNew: false})
			future = []
			hash = prefix("#", value)
			if (oldHash != hash) hashchange()
		},

		set origin(value) {
			//origin is writable but ignored
		},
		set host(value) {
			//host is writable but ignored in Chrome
		},
		set href(value) {
			var url = getURL()
			var isNew = setURL(value)
			if (isNew) {
				setURL(url)
				unload()
				setURL(value)
			}
			past.push({url: url, isNew: isNew})
			future = []
		},
	}
	$window.history = {
		pushState: function(state, title, url) {
			past.push({url: getURL(), isNew: false, state: state, title: title})
			future = []
			setURL(url)
		},
		replaceState: function(state, title, url) {
			var entry = past[past.length - 1]
			entry.state = state
			entry.title = title
			setURL(url)
		},
		back: function() {
			if (past.length > 1) {
				var entry = past.pop()
				if (entry.isNew) unload()
				future.push({url: getURL(), isNew: false, state: entry.state, title: entry.title})
				setURL(entry.url)
				if (!entry.isNew) popstate()
			}
		},
		forward: function() {
			var entry = future.pop()
			if (entry != null) {
				if (entry.isNew) unload()
				past.push({url: getURL(), isNew: false, state: entry.state, title: entry.title})
				setURL(entry.url)
				if (!entry.isNew) popstate()
			}
		},
		get state() {
			return past.length === 0 ? null : past[past.length - 1].state
		},
	}
	$window.onpopstate = null,
	$window.onhashchange = null,
	$window.onunload = null

	return $window
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callAsync = __webpack_require__(8)
var parseURL = __webpack_require__(9)
var parseQueryString = __webpack_require__(37)

module.exports = function() {
	var routes = {}
	// var callback = "callback"
	var serverErrorHandler = function(url) {
		return {status: 500, responseText: "server error, most likely the URL was not defined " + url}
	}

	var $window = {
		XMLHttpRequest: function XMLHttpRequest() {
			var args = {}
			var headers = {}
			var aborted = false
			this.setRequestHeader = function(header, value) {
				headers[header] = value
			}
			this.getRequestHeader = function(header) {
				return headers[header]
			}
			this.open = function(method, url, async, user, password) {
				var urlData = parseURL(url, {protocol: "http:", hostname: "localhost", port: "", pathname: "/"})
				args.method = method
				args.pathname = urlData.pathname
				args.search = urlData.search
				args.async = async != null ? async : true
				args.user = user
				args.password = password
			}
			this.send = function(body) {
				var self = this
				if(!aborted) {
					var handler = routes[args.method + " " + args.pathname] || serverErrorHandler.bind(null, args.pathname)
					var data = handler({url: args.pathname, query: args.search || {}, body: body || null})
					self.status = data.status
					self.responseText = data.responseText
				} else {
					self.status = 0
				}
				self.readyState = 4
				if (args.async === true) {
					callAsync(function() {
						if (typeof self.onreadystatechange === "function") self.onreadystatechange()
					})
				}
			}
			this.abort = function() {
				aborted = true
			}
		},
		document: {
			createElement: function(tag) {
				return {nodeName: tag.toUpperCase(), parentNode: null}
			},
			documentElement: {
				appendChild: function(element) {
					element.parentNode = this
					if (element.nodeName === "SCRIPT") {
						var urlData = parseURL(element.src, {protocol: "http:", hostname: "localhost", port: "", pathname: "/"})
						var handler = routes["GET " + urlData.pathname] || serverErrorHandler.bind(null, element.src)
						var data = handler({url: urlData.pathname, query: urlData.search, body: null})
						parseQueryString(urlData.search)
						callAsync(function() {
							if (data.status === 200) {
								new Function("$window", "with ($window) return " + data.responseText).call($window, $window)
							}
							else if (typeof element.onerror === "function") {
								element.onerror({type: "error"})
							}
						})
					}
				},
				removeChild: function(element) {
					element.parentNode = null
				},
			},
		},
		$defineRoutes: function(rules) {
			routes = rules
		},
		$defineJSONPCallbackKey: function(/* key */) {
			// callback = key
		},
	}
	return $window
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(10)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzkyMDE1ODYxNWVkMTRhNWQ1NzQiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL0RvY1NldHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvdmlldy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvdmlldy9Ub2tlbnMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc2xheW91dC9taXRocmlsLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzd2lkZ2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL19kaXN0L3NyYy92aWV3L1BhcnRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy9jYWxsQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vbWl0aHJpbC90ZXN0LXV0aWxzL3BhcnNlVVJMLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9zaG93ZG93bi9kaXN0L3Nob3dkb3duLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL1NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL19kaXN0L3NyYy9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9fZGlzdC9zcmMvdmlldy9Eb2NzTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9fZGlzdC9zcmMvdmlldy9MZWZ0TmF2LmpzIiwid2VicGFjazovLy8uL19kaXN0L3NyYy92aWV3L01haW5Db21tZW50LmpzIiwid2VicGFjazovLy8uL19kaXN0L3NyYy92aWV3L01haW5EZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL3ZpZXcvTWFpbkV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL3ZpZXcvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L2hzQ29uZmlnLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L3ZpZXcvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L3ZpZXcvUGlsbGFyZWRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvdmlldy9UaWxlTGF5b3V0LmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzdXRpbC9oc0NoZWNrc3VtLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzdXRpbC9oc1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHN1dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzdXRpbC9zaG93ZG93bi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc3dpZGdldC9oc01lbnUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvbWl0aHJpbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL29zcGVjL29zcGVjLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvcXVlcnlzdHJpbmcvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vbWl0aHJpbC90ZXN0LXV0aWxzL2Jyb3dzZXJNb2NrLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy9kb21Nb2NrLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy9wdXNoU3RhdGVNb2NrLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy94aHJNb2NrLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L3NldGltbWVkaWF0ZS9z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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7OztBQ25MdEMsbUNBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUMsRUFBRTtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FB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O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLElBQUk7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLEVBQUUsb0JBQW9CLElBQUk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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RUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtQkFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEhBQTRIO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzkyMDE1ODYxNWVkMTRhNWQ1NzQiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBpbGxhcnMgPSByZXF1aXJlKFwiLi92aWV3L1BpbGxhcmVkTGF5b3V0XCIpO1xuaWYgKHBpbGxhcnMpIHsgfVxuY29uc3QgdGlsZXMgPSByZXF1aXJlKFwiLi92aWV3L1RpbGVMYXlvdXRcIik7XG5pZiAodGlsZXMpIHsgfVxudmFyIENvbnRhaW5lcl8xID0gcmVxdWlyZShcIi4vdmlldy9Db250YWluZXJcIik7XG5leHBvcnRzLkNvbnRhaW5lciA9IENvbnRhaW5lcl8xLkNvbnRhaW5lcjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29udGFpbmVyXzEuQ29tcG9uZW50O1xudmFyIFRva2Vuc18xID0gcmVxdWlyZShcIi4vdmlldy9Ub2tlbnNcIik7XG5leHBvcnRzLkZJTEwgPSBUb2tlbnNfMS5GSUxMO1xuZXhwb3J0cy5weCA9IFRva2Vuc18xLnB4O1xuZXhwb3J0cy5wYyA9IFRva2Vuc18xLnBjO1xuZXhwb3J0cy5MYXlvdXRUb2tlbiA9IFRva2Vuc18xLkxheW91dFRva2VuO1xudmFyIExheW91dF8xID0gcmVxdWlyZShcIi4vdmlldy9MYXlvdXRcIik7XG5leHBvcnRzLkxheW91dCA9IExheW91dF8xLkxheW91dDtcbnZhciBoc0NvbmZpZ18xID0gcmVxdWlyZShcIi4vaHNDb25maWdcIik7XG5leHBvcnRzLkhzQ29uZmlnID0gaHNDb25maWdfMS5Ic0NvbmZpZztcbnZhciBtaXRocmlsXzEgPSByZXF1aXJlKFwiLi9taXRocmlsXCIpO1xuZXhwb3J0cy5tID0gbWl0aHJpbF8xLm07XG5leHBvcnRzLm8gPSBtaXRocmlsXzEubztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4cFJFRkJhMFU3UVVGQlRTeEZRVUZGTEVOQlFVRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF6dEJRVU4wUml3eVEwRkJPRVE3UVVGQlZTeEZRVUZGTEVOQlFVRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF6dEJRVVZ3Uml3NFEwRkJOa1E3UVVGQmNFUXNaME5CUVVFc1UwRkJVeXhEUVVGQk8wRkJRVVVzWjBOQlFVRXNVMEZCVXl4RFFVRkJPMEZCUXpkQ0xIZERRVUV3UkR0QlFVRnFSQ3gzUWtGQlFTeEpRVUZKTEVOQlFVRTdRVUZCUlN4elFrRkJRU3hGUVVGRkxFTkJRVUU3UVVGQlJTeHpRa0ZCUVN4RlFVRkZMRU5CUVVFN1FVRkJSU3dyUWtGQlFTeFhRVUZYTEVOQlFVRTdRVUZEYkVNc2QwTkJRVEJFTzBGQlFXcEVMREJDUVVGQkxFMUJRVTBzUTBGQlFUdEJRVU5tTEhWRFFVRjFSRHRCUVVFNVF5dzRRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRha0lzY1VOQlFYRkVPMEZCUVRWRExITkNRVUZCTEVOQlFVTXNRMEZCUVR0QlFVRlRMSE5DUVVGQkxFTkJRVU1zUTBGQlFTSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogRG9jU2V0cy50cy4gTG9hZHMgdGhlIGRvYy5qc29uIGZpbGVzIHRvIHByb2Nlc3MgYW5kIGRpc3BsYXkgYXMgZG9jdW1lbnRhdGlvbi5cbiAqIFByb2Nlc3Npbmcgb2NjdXJzIGluIHRoZXNlIHN0ZXBzOlxuICogMS4gTG9hZCB0aGUgaW5kZXguanNvbiBmaWxlIHRoYXQgY29udGFpbnMgYSBsaXN0IG9mIGRvYy5qc29uIGZpbGVzIHRvIGxvYWQsIG9uZSBmb3IgZWFjaCBsaWJyYXJ5IHRvIHNob3dcbiAqIDIuIExvYWQgZWFjaCBkb2MuanNvbiBmaWxlLCB3aGljaCBkZXNjcmliZXMgYSBsaWJyYXJ5XG4gKiAzLiBDYWxsIERvY1NldHMuYWRkIHRvIGFkZCB0aGUgbGlicmFyeSBuYW1lIHRvIHRoZSByZWdpc3RyeSBhbmQgY3JlYXRlIGFuIGluZGV4IG9mIGVudHJpZXMgZm9yIHRoZSBsaWJyYXJ5XG4gKi9cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqICovXG5jb25zdCBoc2xheW91dF8xID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuLyoqXG4gKiB0aGUgZGVmYXVsdCBsb2NhdGlvbiBmb3IgdGhlIGluZGV4IC5qc29uIGZpbGVzLCByZWxhdGl2ZSB0byB0aGUgd2ViIHBhZ2U6XG4gKiBgJy4vZGF0YS9pbmRleC5qc29uJ2BcbiAqL1xuY29uc3QgRklMRSA9ICcuL2RhdGEvaW5kZXguanNvbic7XG4vKipcbiAqIERvY1NldHMgb2JqZWN0LiBLZWVwcyBhIGxpc3Qgb2YgcmVnaXN0ZXJlZCBkb2NzZXRzIGFuZFxuICogcHJvdmlkZXMgYWNjZXNzIHRvIGVsZW1lbnRzIG9mIGVhY2ggZG9jc2V0LlxuICovXG5jbGFzcyBEb2NTZXRzIHtcbiAgICAvKiogQWRkcyB0aGUgZG9jc2V0IGluIGBjb250ZW50YCB0byB0aGUgYGdMaXN0YCAqL1xuICAgIHN0YXRpYyBhZGQoY29udGVudCkge1xuICAgICAgICBjb25zdCBsaWIgPSBjb250ZW50Lm5hbWU7XG4gICAgICAgIERvY1NldHMuZ0xpc3Quc2V0LnB1c2gobGliKTtcbiAgICAgICAgRG9jU2V0cy5nTGlzdC5zZXQuc29ydCgpO1xuICAgICAgICBEb2NTZXRzLmdMaXN0LmluZGV4W2xpYl0gPSB7fTtcbiAgICAgICAgcmVjdXJzaXZlSW5kZXgoY29udGVudCwgRG9jU2V0cy5nTGlzdC5pbmRleFtsaWJdLCBsaWIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBsb2FkcyBhbiBpbmRleCBzZXQgYW5kIHRoZSBkb2NzZXRzIGl0IGNvbnRhaW5zIGZyb20gZHJpZWN0b3J5IGBkaXJgLlxuICAgICAqIEBwYXJhbSBmaWxlIHRoZSBvcHRpb25hbCBkaXJlY3RvcnkgdG8gcmVhZCBmcm9tLiBJZiB1bnNwZWNpZmllZCxcbiAgICAgKiByZWFkIGZyb20gdGhlIGluZGV4IGZpbGUgc3BlY2lmaWVkIGJ5IHtAbGluayBEb2NTZXRzLkZJTEUgYEZJTEVgfS5cbiAgICAgKi9cbiAgICBzdGF0aWMgbG9hZExpc3QoZmlsZSkge1xuICAgICAgICBmaWxlID0gZmlsZSB8fCBGSUxFO1xuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdGluZyBkb2NTZXQgJyArIGZpbGUpO1xuICAgICAgICByZXR1cm4gRG9jU2V0cy5sb2FkSW5kZXhTZXQoZmlsZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIHNwZWNpZmllZCBkb2N1bWVudGF0aW9uIGVsZW1lbnQuXG4gICAgICogV2hlbiBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzLCBhIHN0cmluZ1tdIG9mIGF2YWlsYWJsZSBkb2NTZXRzIGlzIHJldHVybmVkLlxuICAgICAqIFdoZW4gY2FsbGVkIHdpdGggb25seSBgbGliYCBzcGVjaWZpZWQsIHRoZSBjb3JyZXNwb25kaW5nIGRvY1NldCBvdmVydmlldyBpcyByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0gbGliIHNwZWNpZmllcyB0aGUgZG9jc2V0IHRvIHNjYW4uXG4gICAgICogQHBhcmFtIGlkIHNwZWNpZmllcyB0aGUgZWxlbWVudCB3aXRoaW4gdGhlIGRvY1NldCwgZWl0aGVyIGJ5IGl0cyBpZCBudW1iZXIsIG9yIGJ5IGl0cyBwYXRoXG4gICAgICovXG4gICAgc3RhdGljIGdldChsaWIsIGlkID0gMCkge1xuICAgICAgICBpZiAobGliKSB7XG4gICAgICAgICAgICBpZiAoRG9jU2V0cy5nTGlzdC5pbmRleFtsaWJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERvY1NldHMuZ0xpc3QuaW5kZXhbbGliXVtpZCArICcnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBEb2NTZXRzLmdMaXN0LnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBEb2NTZXRzLmdMaXN0LnNldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkcyBgaW5kZXguanNvbmAgZnJvbSB0aGUgZGlyZWN0b3J5IHNwZWNpZmllZCBpbiBgZGlyYC5cbiAgICAgKiBFYWNoIGVudHJ5IGluIHRoZSBpbmRleCBpcyBpbnRlcnByZXRlZCBhcyBhIGRvY3NldCBhbmQgbG9hZGVkLlxuICAgICAqIEBwYXJhbSBkaXIgdGhlIGRpcmVjdG9yeSB0byByZWFkIGZyb21cbiAgICAgKiBAcGFyYW0gZmlsZSB0aGUgaW5kZXggZmlsZSB0byByZWFkXG4gICAgICovXG4gICAgc3RhdGljIGxvYWRJbmRleFNldChmaWxlKSB7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0ucmVxdWVzdCh7IG1ldGhvZDogXCJHRVRcIiwgdXJsOiBmaWxlIH0pXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2ZWQgaW5kZXgnKTtcbiAgICAgICAgICAgIERvY1NldHMuZ1RpdGxlID0gcmVzdWx0LnRpdGxlO1xuICAgICAgICAgICAgbGV0IGkgPSBmaWxlLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICAgICAgICBjb25zdCBkaXIgPSBmaWxlLnN1YnN0cmluZygwLCBpICsgMSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0LmRvY3MubWFwKChmKSA9PiBsb2FkRG9jU2V0KGRpciwgZikpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgfVxuICAgIHN0YXRpYyB0aXRsZSgpIHsgcmV0dXJuIERvY1NldHMuZ1RpdGxlOyB9XG59XG4vKiogQ29udGFpbnMgcmVmZXJlbmNlcyB0byB0aGUgZG9jc2V0cyBhbmQgYWxsIGVsZW1lbnRzIHBlciBkb2NzZXQsIGFjY2Vzc2libGUgcGVyIElELiAqL1xuRG9jU2V0cy5nTGlzdCA9IHsgc2V0OiBbXSwgaW5kZXg6IHt9IH07XG5leHBvcnRzLkRvY1NldHMgPSBEb2NTZXRzO1xuO1xuLyoqXG4gKiBMb2FkcyBhIGRvY3NldCBzcGVjaWZpZWQgYnkgZmlsZSBmcm9tIHRoZSBkaXJlY3RvcnkgYGRpcmAuXG4gKiBPbmNlIHJlY2VpdmVkLCB0aGUgZG9jc2V0IGlzIHJlZ2lzdGVyZWQgaW4gYG1vZHVsZXNgIHZpYSB0aGUgYGFkZGAgbWV0aG9kLlxuICogQHBhcmFtIGRpciB0aGUgZGlyZWN0b3J5IHRvIHJlYWQgZnJvbVxuICogQHBhcmFtIGZpbGUgdGhlIGBqc29uYCBmaWxlIHRvIGxvYWQgYXMgZG9jc2V0XG4gKi9cbmZ1bmN0aW9uIGxvYWREb2NTZXQoZGlyLCBmaWxlKSB7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubS5yZXF1ZXN0KHsgbWV0aG9kOiBcIkdFVFwiLCB1cmw6IGRpciArIGZpbGUgfSlcbiAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmVkICcgKyBkaXIgKyBmaWxlKTtcbiAgICAgICAgRG9jU2V0cy5hZGQocik7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbn1cbi8qKlxuICogcmVjdXJzZXMgdGhyb3VnaCB0aGUgZG9jc2V0IGFuZCByZWdpc3RlcnMgYWxsIGBjaGlsZHJlbmAgZW50cmllcyBvZiBhbiBlbnRyeSBieSBpZCxcbiAqIHN0YXJ0aW5nIHdpdGggdGhlIHJvb3QgZW50cnkuXG4gKiBAcGFyYW0gY29udGVudCB0aGUgZG9jc2V0IG9iamVjdCBsaXRlcmFsIHRvIHRyYXZlcnNlXG4gKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IGluIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBlbnRyaWVzXG4gKiBAcGFyYW0gbGliIHRoZSBkb2NzZXQgbmFtZSwgdXNlZCBmb3IgbmFtZSB2YWxpZGF0aW9uXG4gKi9cbmZ1bmN0aW9uIHJlY3Vyc2l2ZUluZGV4KGNvbnRlbnQsIGluZGV4LCBsaWIsIHBhdGggPSAnJykge1xuICAgIGNvbnRlbnQubGliID0gbGliO1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgY29udGVudC5uYW1lKSB7XG4gICAgICAgIGNvbnRlbnQubmFtZSA9IGNvbnRlbnQubmFtZS5yZXBsYWNlKC9bXCInXSguKylbXCInXXwoLispL2csIFwiJDEkMlwiKTsgLy8gcmVtb3ZlIHF1b3RlcyBcbiAgICAgICAgY29uc3QgZWxOYW1lID0gY29udGVudC5uYW1lLm1hdGNoKC8oW15cXC9dKykkLylbMV07IC8vIG5hbWUgPSBwYXJ0IGFmdGVyIGxhc3QgL1xuICAgICAgICBsZXQgbmV3UGF0aCA9IChwYXRoID09PSAnJykgPyBlbE5hbWUgOiBgJHtwYXRofS4ke2VsTmFtZX1gO1xuICAgICAgICBjb250ZW50LmZ1bGxQYXRoID0gbmV3UGF0aDtcbiAgICAgICAgY29udGVudC5uYW1lID0gZWxOYW1lO1xuICAgICAgICBpbmRleFtjb250ZW50LmlkICsgJyddID0gY29udGVudDtcbiAgICAgICAgaWYgKG5ld1BhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW5kZXhbbmV3UGF0aF0gPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb250ZW50LmNoaWxkcmVuLm1hcCgoYykgPT4gcmVjdXJzaXZlSW5kZXgoYywgaW5kZXgsIGxpYiwgbmV3UGF0aCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhlIGBuYW1lYCBvZiBgRXh0ZXJuYWwgbW9kdWxlYHMuIElmIHRoZSBgbmFtZWAgc3RhcnRzIHdpdGggdGhlIGBsaWJgIG5hbWVcbiAqIHRoZW4gdHJ1bmNhdGUgdGhlIG5hbWUgYnkgcmVtb3ZpbmcgJ2BsaWJgL3NyYy8nIGZyb20gdGhlIGxlZnQgc2lkZSBvZiB0aGUgbmFtZS5cbiAqIEBwYXJhbSBjb250ZW50IHRoZSBkb2NzZXQgdG8gZXZhbHVhdGVcbiAqIEBwYXJhbSBsaWIgdGhlIGxpYnJhcnkgbmFtZVxuICovXG4vKlxuZnVuY3Rpb24gdmFsaWRFeHRlcm5hbE1vZHVsZU5hbWUoY29udGVudDphbnksIGxpYjpzdHJpbmcpOmJvb2xlYW4ge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICBpZiAoY29udGVudC5raW5kU3RyaW5nICE9PSAnRXh0ZXJuYWwgbW9kdWxlJykgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIGVsc2UgaWYgKGNvbnRlbnQubmFtZS5pbmRleE9mKCcvJyk+MCAmJiBjb250ZW50Lm5hbWUuaW5kZXhPZihsaWIrJy9zcmMvJyk9PT0wKSB7XG4gICAgICAgIGxldCBqID0gKGxpYisnL3NyYy8nKS5sZW5ndGg7XG4gICAgICAgIGNvbnRlbnQubmFtZSA9IGNvbnRlbnQubmFtZS5zdWJzdHJpbmcoaik7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkc5alUyVjBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OUViMk5UWlhSekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdSMEZOUnpzN08wRkJSVWdzVFVGQlRUdEJRVU5PTEhWRFFVRm5RenRCUVVWb1F6czdPMGRCUjBjN1FVRkRTQ3hOUVVGTkxFbEJRVWtzUjBGQlZTeHRRa0ZCYlVJc1EwRkJRenRCUVVkNFF6czdPMGRCUjBjN1FVRkRTRHRKUVV0SkxHdEVRVUZyUkR0SlFVTXpReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFWYzdVVUZEZWtJc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTjZRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE5VSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEZWtJc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRemxDTEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRE0wUXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVms3VVVGREwwSXNTVUZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU03VVVGRGNFSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXh2UWtGQmIwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVONlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRlhMRVZCUVVVc1MwRkJhVUlzUTBGQlF6dFJRVU0zUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEwNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU16UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6TkRMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEU2l4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTTdXVUZETjBJc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTTNRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwc3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGWE8xRkJRMjVETEUxQlFVMHNRMEZCUXl4WlFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU03WVVGRGVrTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJWVHRaUVVOaUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dFpRVU01UWl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZET1VJc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNNVFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRlJMRXRCUVVzc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVVVzUTBGQlF5eERRVUZETzJGQlEwUXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUjAwc1RVRkJUU3hEUVVGRExFdEJRVXNzUzBGQlN5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQk9VUm9SQ3g1UmtGQmVVWTdRVUZETVVVc1lVRkJTeXhIUVVFMlFpeEZRVUZETEVkQlFVY3NSVUZCUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETzBGQlJuaEZMREJDUVdkRlF6dEJRVUZCTEVOQlFVTTdRVUZGUmpzN096czdSMEZMUnp0QlFVTklMRzlDUVVGdlFpeEhRVUZWTEVWQlFVVXNTVUZCVnp0SlFVTjJReXhOUVVGTkxFTkJRVU1zV1VGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRUUVVNM1F5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkxPMUZCUTFJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVkQlFVY3NSMEZCUnl4SFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM0JETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGJrSXNRMEZCUXl4RFFVRkRPMU5CUTBRc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTTFRaXhEUVVGRE8wRkJSVVE3T3pzN096dEhRVTFITzBGQlEwZ3NkMEpCUVhkQ0xFOUJRVmNzUlVGQlJTeExRVUZUTEVWQlFVVXNSMEZCVlN4RlFVRkZMRWxCUVVrc1IwRkJReXhGUVVGRk8wbEJReTlFTEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRMnhDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzU1VGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNNVF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEc5Q1FVRnZRaXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVVXNhVUpCUVdsQ08xRkJRM0pHTEUxQlFVMHNUVUZCVFN4SFFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRV2xDTERKQ1FVRXlRanRSUVVNdlJpeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJTeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1RVRkJUU3hGUVVGRkxFTkJRVU03VVVGRGVFUXNUMEZCVHl4RFFVRkRMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRE0wSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGRFSXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUXk5Q0xFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGQlF5eERRVUZETzFGQlEyNUVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJTeXhMUVVGTExHTkJRV01zUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkZMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wRkJRMHdzUTBGQlF6dEJRVU5FT3pzN096dEhRVXRITzBGQlEwZzdPenM3T3pzN096czdPMFZCVjBVaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL19kaXN0L3NyYy9Eb2NTZXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVG9rZW5zXzEgPSByZXF1aXJlKFwiLi9Ub2tlbnNcIik7XG5jbGFzcyBMYXlvdXQge1xuICAgIGNvbnN0cnVjdG9yKGFyZWFEZXNjKSB7XG4gICAgICAgIHRoaXMuYXJlYURlc2MgPSBhcmVhRGVzYztcbiAgICAgICAgdGhpcy5zcGFjaW5nID0gMDtcbiAgICB9XG4gICAgc3RhdGljIHRyYW5zbGF0ZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUb2tlbnNfMS5weChwYXJzZUludChwYXJhbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyYW0uZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVG9rZW5zXzEucGMocGFyc2VJbnQocGFyYW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLnRvTG93ZXJDYXNlKCkgPT09ICdmaWxsJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVG9rZW5zXzEuRklMTDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVnaXN0ZXIoa2V5d29yZCwgc3R5bGUpIHtcbiAgICAgICAgTGF5b3V0LmxheW91dFN0eWxlc1trZXl3b3JkXSA9IHN0eWxlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlTGF5b3V0KGF0dHJzLCBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjc3MgPSAnJztcbiAgICAgICAgT2JqZWN0LmtleXMoTGF5b3V0LmxheW91dFN0eWxlcykuc29tZShrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dHJzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjc3MgPSBuZXcgTGF5b3V0LmxheW91dFN0eWxlc1trZXldKExheW91dC50cmFuc2xhdGUoYXR0cnNba2V5XSkpLmdldFN0eWxlcyhjb21wb25lbnRzKTtcbiAgICAgICAgICAgICAgICBhdHRyc1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG4gICAgO1xufVxuTGF5b3V0LmxheW91dFN0eWxlcyA9IHt9O1xuZXhwb3J0cy5MYXlvdXQgPSBMYXlvdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUR0Y1YjNWMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZMaTR2YzNKakwzWnBaWGN2VEdGNWIzVjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlowSkJMSEZEUVVGM1F6dEJRWGxDZUVNN1NVRnpSVWtzV1VGQmJVSXNVVUZCYzBJN1VVRkJkRUlzWVVGQlVTeEhRVUZTTEZGQlFWRXNRMEZCWXp0UlFWSjZReXhaUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlVXZERMRU5CUVVNN1NVRjBSSEpETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJkMEk3VVVGRE4wTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVRkRMRU5CUVVNN1VVRkROME1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGblFqdFpRVU12UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFdEJRVXNzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNMVFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkJReXhOUVVGTkxFTkJRVU1zVjBGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVUZETEVOQlFVTTdaMEpCUTNwRUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVRkRMRTFCUVUwc1EwRkJReXhYUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRVU1zUTBGQlF6dG5Ra0ZEZUVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4TFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlFVTXNUVUZCVFN4RFFVRkRMR0ZCUVVrc1EwRkJRenRuUWtGQlFTeERRVUZETzFsQlEzSkVMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEU2l4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRMnBDTEVOQlFVTTdVVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU03U1VGUFRTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVdNc1JVRkJSU3hMUVVGdFFqdFJRVVYwUkN4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjZReXhEUVVGRE8wbEJWVTBzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRlRMRVZCUVVVc1ZVRkJkVUk3VVVGRGVrUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMklzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVYzdXVUZEY2tNc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRllpeEhRVUZITEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlEzWkdMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdaMEpCUTNaQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdXVUZEYUVJc1EwRkJRenRaUVVORUxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZEYWtJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenRKUVZjMFF5eERRVUZET3p0QlFXcEZka01zYlVKQlFWa3NSMEZCY1VJc1JVRkJSU3hEUVVGRE8wRkJUQzlETEhkQ1FYVkdReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc2xheW91dC92aWV3L0xheW91dC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIExheW91dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuICAgIGdldFNpemUoKSB7IHJldHVybiB0aGlzLnNpemU7IH1cbn1cbmV4cG9ydHMuTGF5b3V0VG9rZW4gPSBMYXlvdXRUb2tlbjtcbmNsYXNzIERlZmluZWRUb2tlbiBleHRlbmRzIExheW91dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7IHN1cGVyKHNpemUpOyB9XG59XG5leHBvcnRzLkRlZmluZWRUb2tlbiA9IERlZmluZWRUb2tlbjtcbmNsYXNzIEZpbGxUb2tlbiBleHRlbmRzIExheW91dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoLTEpOyB9XG59XG5leHBvcnRzLkZpbGxUb2tlbiA9IEZpbGxUb2tlbjtcbmNsYXNzIFBpeGVsVG9rZW4gZXh0ZW5kcyBEZWZpbmVkVG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgc3VwZXIoc2l6ZSk7IH1cbn1cbmV4cG9ydHMuUGl4ZWxUb2tlbiA9IFBpeGVsVG9rZW47XG5jbGFzcyBQZXJjZW50VG9rZW4gZXh0ZW5kcyBEZWZpbmVkVG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgc3VwZXIoc2l6ZSk7IH1cbn1cbmV4cG9ydHMuUGVyY2VudFRva2VuID0gUGVyY2VudFRva2VuO1xuZnVuY3Rpb24gcHgocHgpIHsgcmV0dXJuIG5ldyBQaXhlbFRva2VuKHB4KTsgfVxuZXhwb3J0cy5weCA9IHB4O1xuZnVuY3Rpb24gcGMocGMpIHsgcmV0dXJuIG5ldyBQZXJjZW50VG9rZW4ocGMpOyB9XG5leHBvcnRzLnBjID0gcGM7XG5leHBvcnRzLkZJTEwgPSBuZXcgRmlsbFRva2VuKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWRzlyWlc1ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZMaTR2YzNKakwzWnBaWGN2Vkc5clpXNXpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRTdTVUZEU1N4WlFVRnZRaXhKUVVGWk8xRkJRVm9zVTBGQlNTeEhRVUZLTEVsQlFVa3NRMEZCVVR0SlFVRkhMRU5CUVVNN1NVRkROMElzVDBGQlR5eExRVUZMTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dERRVU42UXp0QlFVaEVMR3REUVVkRE8wRkJTMFFzYTBKQlFXMURMRk5CUVZFc1YwRkJWenRKUVVOc1JDeFpRVUZaTEVsQlFWa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBOQlF6ZERPMEZCUmtRc2IwTkJSVU03UVVGTFJDeGxRVUYxUWl4VFFVRlJMRmRCUVZjN1NVRkRkRU1zWjBKQlFXZENMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0RFFVTXZRanRCUVVaRUxEaENRVVZETzBGQlMwUXNaMEpCUVhkQ0xGTkJRVkVzV1VGQldUdEpRVU40UXl4WlFVRlpMRWxCUVZjc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUXpWRE8wRkJSa1FzWjBOQlJVTTdRVUZMUkN4clFrRkJNRUlzVTBGQlVTeFpRVUZaTzBsQlF6RkRMRmxCUVZrc1NVRkJWeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1EwRkROVU03UVVGR1JDeHZRMEZGUXp0QlFVMUVMRmxCUVcxQ0xFVkJRVk1zU1VGQlRTeE5RVUZOTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlFUbEVMR2RDUVVFNFJEdEJRVTA1UkN4WlFVRnRRaXhGUVVGVExFbEJRVTBzVFVGQlRTeERRVUZETEVsQlFVa3NXVUZCV1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVUZvUlN4blFrRkJaMFU3UVVGTGJrUXNVVUZCUVN4SlFVRkpMRWRCUVVjc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L3ZpZXcvVG9rZW5zLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmlmICghZ2xvYmFsWyd3aW5kb3cnXSkge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBub24tYnJvd3NlciBwb2x5ZmlsbCcpO1xuICAgIGdsb2JhbFsnd2luZG93J10gPSByZXF1aXJlKFwibWl0aHJpbC90ZXN0LXV0aWxzL2Jyb3dzZXJNb2NrLmpzXCIpKCk7XG4gICAgZ2xvYmFsWydkb2N1bWVudCddID0gd2luZG93LmRvY3VtZW50O1xufVxuZXhwb3J0cy5tID0gcmVxdWlyZShcIm1pdGhyaWxcIik7XG5jb25zdCBvID0gcmVxdWlyZShcIm1pdGhyaWwvb3NwZWMvb3NwZWNcIik7XG5leHBvcnRzLm8gPSBvO1xuby5yb290ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV2wwYUhKcGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5dGFYUm9jbWxzTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzQkNMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zSzBKQlFTdENMRU5CUVVNc1EwRkJRenRKUVVVM1F5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExHMURRVUZ0UXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOc1JTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF6dEJRVVY2UXl4RFFVRkRPMEZCUzFrc1VVRkJRU3hEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMEZCVDNCRExFMUJRVTBzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzBGQlIyaERMR05CUVVNN1FVRkdWaXhEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvbWl0aHJpbC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBoc01lbnVfMSA9IHJlcXVpcmUoXCIuL2hzTWVudVwiKTtcbmV4cG9ydHMuTWVudSA9IGhzTWVudV8xLk1lbnU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUFFTeHRRMEZCTWtNN1FVRkJiRU1zZDBKQlFVRXNTVUZCU1N4RFFVRkJJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc3dpZGdldC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhzbGF5b3V0XzEgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jb25zdCBUb29sdGlwXzEgPSByZXF1aXJlKFwiLi9Ub29sdGlwXCIpO1xuY29uc3QgRG9jU2V0c18xID0gcmVxdWlyZShcIi4uL0RvY1NldHNcIik7XG5jb25zdCBTb3VyY2VCYXNlID0gJ3NyYy8nO1xuLy8gVE9ETzogc29ydCBmbGFncyBpbiBhcnJheSB0byBnYXJhbnRlZSBzZXF1ZW5jZSBvZiBwcmludGluZ1xuZnVuY3Rpb24gZmxhZ3MoZmxhZ3MsIGlnbm9yZSA9IFtdKSB7XG4gICAgY29uc3Qga25vd25GbGFncyA9IHtcbiAgICAgICAgaXNFeHBvcnRlZDogJ2V4cG9ydCcsXG4gICAgICAgIGlzRXh0ZXJuYWw6ICcnLFxuICAgICAgICBpc1B1YmxpYzogJ3B1YmxpYycsXG4gICAgICAgIGlzUHJpdmF0ZTogJ3ByaXZhdGUnLFxuICAgICAgICBpc1Byb3RlY3RlZDogJ3Byb3RlY3RlZCcsXG4gICAgICAgIGlzQ29uc3RydWN0b3JQcm9wZXJ0eTogJ2NvbnN0cnVjdG9yUHJvcGVydHknLFxuICAgICAgICBpc1N0YXRpYzogJ3N0YXRpYycsXG4gICAgICAgIGlzT3B0aW9uYWw6ICdvcHRpb25hbCdcbiAgICB9O1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4nLCAhZmxhZ3MgPyBbXSA6XG4gICAgICAgIE9iamVjdC5rZXlzKGZsYWdzKS5tYXAoKGYpID0+IHtcbiAgICAgICAgICAgIGxldCBpZ24gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBmbGFnID0ga25vd25GbGFnc1tmXTtcbiAgICAgICAgICAgIGlmIChmbGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZ24gPSAoaWdub3JlLmluZGV4T2YoZmxhZykgPj0gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbGFnID0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oYHNwYW4uaHMtaXRlbS0ke2lnbiA/ICdpZ25vcmUnIDogKGZsYWcgPT09IGYgPyAndW5rbm93bicgOiBmbGFnKX0tZmxhZ2AsIGlnbiA/IHVuZGVmaW5lZCA6IGZsYWcpO1xuICAgICAgICB9KSk7XG59XG5leHBvcnRzLmZsYWdzID0gZmxhZ3M7XG5mdW5jdGlvbiBraW5kU3RyaW5nKG1kbCkge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1raW5kJywgbWRsLmtpbmRTdHJpbmcpO1xufVxuZXhwb3J0cy5raW5kU3RyaW5nID0ga2luZFN0cmluZztcbmZ1bmN0aW9uIGl0ZW1OYW1lKG1kbCwgc3ViKSB7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLW5hbWUnLCBsaWJMaW5rKCdhJywgbWRsLmxpYiwgc3ViLmZ1bGxQYXRoLCBzdWIubmFtZSkpO1xufVxuZXhwb3J0cy5pdGVtTmFtZSA9IGl0ZW1OYW1lO1xuZnVuY3Rpb24gaXRlbUxvbmdOYW1lKG1kbCwgc3ViKSB7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLW5hbWUnLCBsaWJMaW5rKCdhJywgbWRsLmxpYiwgbWRsLmZ1bGxQYXRoLCBzdWIubmFtZSkpO1xufVxuZXhwb3J0cy5pdGVtTG9uZ05hbWUgPSBpdGVtTG9uZ05hbWU7XG5mdW5jdGlvbiBpdGVtVG9vbHRpcChtZGwpIHtcbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tbmFtZScsIFRvb2x0aXBfMS50b29sdGlwKG1kbC5uYW1lLCAnY2xhc3MgbmFtZSBhbmQgdGhlbiBzb21lJywgJ2JvdHRvbScpKTtcbn1cbmV4cG9ydHMuaXRlbVRvb2x0aXAgPSBpdGVtVG9vbHRpcDtcbmZ1bmN0aW9uIGV4dGVuc2lvbk9mKG1kbCkge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1leHRlbnNpb25zJywgIW1kbC5leHRlbmRlZFR5cGVzID8gdW5kZWZpbmVkIDogW1xuICAgICAgICBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1leHRlbmRzJywgJ2V4dGVuZHMnKSxcbiAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuJywgbWRsLmV4dGVuZGVkVHlwZXMubWFwKCh0LCBpKSA9PiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1leHRlbnNpb24nLCBbXG4gICAgICAgICAgICBsaWJMaW5rKCdhJywgbWRsLmxpYiwgRG9jU2V0c18xLkRvY1NldHMuZ2V0KG1kbC5saWIsIHQuaWQpLmZ1bGxQYXRoLCB0Lm5hbWUpLFxuICAgICAgICAgICAgbWRsLmV4dGVuZGVkVHlwZXMubWFwLmxlbmd0aCA+IChpICsgMSkgPyAnLCAnIDogJydcbiAgICAgICAgXSkpKSxcbiAgICBdKTtcbn1cbmV4cG9ydHMuZXh0ZW5zaW9uT2YgPSBleHRlbnNpb25PZjtcbmZ1bmN0aW9uIHNvdXJjZUxpbmsobWRsKSB7XG4gICAgY29uc3Qgc291cmNlID0gbWRsLnNvdXJjZXMgPyBtZGwuc291cmNlc1swXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGxldCBmaWxlID0gKHNvdXJjZSAmJiBzb3VyY2UuZmlsZU5hbWUpID8gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoJy50cycsICcuaHRtbCcpIDogJyc7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmlsZS5pbmRleE9mKG1kbC5saWIpO1xuICAgICAgICBmaWxlID0gZmlsZS5zdWJzdHIoaW5kZXgpOyAvLyBvbmx5IGNvbnNpZGVyIGxpbmtzIHdpdGhpbiB0aGUgZG9jU2V0IChldmVyeXRoaW5nIGFmdGVyIHRoZSBsaWIgbmFtZSlcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLW1lbWJlci1zb3VyY2UnLCBoc2xheW91dF8xLm0oJ2EnLCB7IGhyZWY6IGAke1NvdXJjZUJhc2V9JHtmaWxlfSMke01hdGgubWF4KDAsIHNvdXJjZS5saW5lIC0gNSl9YCwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sICdbc291cmNlXScpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1tZW1iZXItc291cmNlJywgJycpO1xuICAgIH1cbn1cbmV4cG9ydHMuc291cmNlTGluayA9IHNvdXJjZUxpbms7XG4vKipcbiAqIGNyZWF0ZXMgYSBsaWJyYXJ5IGxpbmsgb24gdGhlIHNwZWNpZmllZCBgbmFtZWAuXG4gKiBUaGUgbGluayBwb2ludHMgdG8gYC9hcGkvPGxpYj4vPGlkPmBcbiAqIEBwYXJhbSBjc3MgdGhlIGNzcyB0YWcgc2VsZWN0b3IgdG8gdXNlXG4gKiBAcGFyYW0gY2xzIHRoZSBjc3MgY2xhc3Mgc2VsZWN0b3IgdG8gdXNlXG4gKiBAcGFyYW0gbGliIHRoZSBsaWIgc3RyaW5nIHRvIHBvaW50IHRvXG4gKiBAcGFyYW0gaWQgdGhlIGlkIG51bWJlciB0byBwb2ludCB0b1xuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb24gd2hpY2ggdG8gZm9ybXQgaGUgbGlua1xuICovXG5mdW5jdGlvbiBsaWJMaW5rKGNzcywgbGliLCBpZCwgbmFtZSkge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oY3NzLCB7IGhyZWY6IGAvYXBpLyR7bGlifS8ke2lkfWAsIG9uY3JlYXRlOiBoc2xheW91dF8xLm0ucm91dGUubGluaywgb251cGRhdGU6IGhzbGF5b3V0XzEubS5yb3V0ZS5saW5rIH0sIG5hbWUpO1xufVxuZXhwb3J0cy5saWJMaW5rID0gbGliTGluaztcbjtcbmZ1bmN0aW9uIHR5cGUodCwgbGliKSB7XG4gICAgZnVuY3Rpb24gX3R5cGUodCkge1xuICAgICAgICBzd2l0Y2ggKHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW5zdHJpbmN0JzogcmV0dXJuIHQuaWQgPyBsaWJMaW5rKCdzcGFuJywgbGliLCB0LmZ1bGxQYXRoLCB0Lm5hbWUpIDogdC5uYW1lO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nTGl0ZXJhbCc6IHJldHVybiB0LnR5cGU7XG4gICAgICAgICAgICBjYXNlICd1bmlvbic6IHJldHVybiB0LnR5cGVzLm1hcChfdHlwZSkuam9pbignIHwgJyk7XG4gICAgICAgICAgICBjYXNlICdyZWZlcmVuY2UnOiByZXR1cm4gdC50eXBlQXJndW1lbnRzID8gdC5uYW1lICsgJzwnICsgdC50eXBlQXJndW1lbnRzLm1hcChfdHlwZSkuam9pbignLCAnKSArICc+JyA6XG4gICAgICAgICAgICAgICAgdC5pZCA/IGxpYkxpbmsoJ3NwYW4nLCBsaWIsIHQuZnVsbFBhdGgsIHQubmFtZSkgOiB0Lm5hbWU7XG4gICAgICAgICAgICBjYXNlICdyZWZsZWN0aW9uJzogcmV0dXJuIHQuZGVjbGFyYXRpb24gPyB0LmRlY2xhcmF0aW9uLmtpbmRTdHJpbmcgOiAnVU5LTk9XTic7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmtub3duIHR5cGUgJyArIHQudHlwZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQudHlwZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCdzcGFuJywgdCA/IFtcbiAgICAgICAgICAgIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLW5hbWUnLCAnOicpLFxuICAgICAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tc2lnLXR5cGUnLCBfdHlwZSh0KSlcbiAgICAgICAgXSA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRyYWNlKTtcbiAgICB9XG59XG5leHBvcnRzLnR5cGUgPSB0eXBlO1xuLyoqXG4gKiBjcmVhdGVzIGEgZnVuY3Rpb24gb3IgbWV0aG9kIHNpZ25hdHVyZVxuICovXG5mdW5jdGlvbiBzaWduYXR1cmUocywgbGliKSB7XG4gICAgZnVuY3Rpb24gY29tbWEoaSkgeyByZXR1cm4gKGkgPiAwKSA/ICcsICcgOiAnJzsgfVxuICAgIGZ1bmN0aW9uIG9wdGlvbmFsKGZsYWdzKSB7XG4gICAgICAgIHJldHVybiAoZmxhZ3MgJiYgZmxhZ3MuaXNPcHRpb25hbCkgPyAnLmhzLWl0ZW0tb3B0aW9uYWwnIDogJyc7XG4gICAgfVxuICAgIGxldCBzaWc7XG4gICAgaWYgKHMgJiYgcy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHNpZyA9IHMucGFyYW1ldGVycy5tYXAoKHAsIGkpID0+IGhzbGF5b3V0XzEubSgnc3BhbicsIFtcbiAgICAgICAgICAgIGNvbW1hKGkpLFxuICAgICAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tc2lnLXBhcmFtJywgW1xuICAgICAgICAgICAgICAgIGhzbGF5b3V0XzEubShgc3Bhbi5ocy1pdGVtLW5hbWUke29wdGlvbmFsKHAuZmxhZ3MpfWAsIHAubmFtZSksXG4gICAgICAgICAgICAgICAgdHlwZShwLnR5cGUsIGxpYilcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pKTtcbiAgICAgICAgc2lnLnVuc2hpZnQoaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tbmFtZScsICcoJykpO1xuICAgICAgICBzaWcucHVzaChoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1uYW1lJywgJyknKSk7XG4gICAgfVxuICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1zaWduYXR1cmUnLCBzaWcpO1xufVxuZXhwb3J0cy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG5mdW5jdGlvbiBtYWtlSUQoc2VjdGlvbiwgbWRsKSB7XG4gICAgbGV0IHJlc3VsdCA9IHNlY3Rpb24gPyBzZWN0aW9uICsgJ18nIDogJyc7XG4gICAgcmVzdWx0ID0gKHJlc3VsdCArIChtZGwubmFtZSB8fCAnJykpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIChyZXN1bHQgIT09ICcnKSA/IHJlc3VsdCA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMubWFrZUlEID0gbWFrZUlEO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUdGeWRITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5emNtTXZkbWxsZHk5UVlYSjBjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMSFZEUVVGdFF6dEJRVU51UXl4MVEwRkJiME03UVVGRGNFTXNkME5CUVhGRE8wRkJSWEpETEUxQlFVMHNWVUZCVlN4SFFVRkhMRTFCUVUwc1EwRkJRenRCUVVjeFFpdzJSRUZCTmtRN1FVRkROMFFzWlVGQmMwSXNTMEZCVXl4RlFVRkZMRk5CUVdkQ0xFVkJRVVU3U1VGREwwTXNUVUZCVFN4VlFVRlZMRWRCUVVjN1VVRkRaaXhWUVVGVkxFVkJRV01zVVVGQlVUdFJRVU5vUXl4VlFVRlZMRVZCUVdNc1JVRkJSVHRSUVVNeFFpeFJRVUZSTEVWQlFXZENMRkZCUVZFN1VVRkRhRU1zVTBGQlV5eEZRVUZsTEZOQlFWTTdVVUZEYWtNc1YwRkJWeXhGUVVGaExGZEJRVmM3VVVGRGJrTXNjVUpCUVhGQ0xFVkJRVWNzY1VKQlFYRkNPMUZCUXpkRExGRkJRVkVzUlVGQlowSXNVVUZCVVR0UlFVTm9ReXhWUVVGVkxFVkJRV01zVlVGQlZUdExRVU55UXl4RFFVRkRPMGxCUTBZc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4TFFVRkxMRWRCUVVVc1JVRkJSVHRSUVVOMlFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFWRTdXVUZETlVJc1NVRkJTU3hIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETzFsQlEyaENMRWxCUVVrc1NVRkJTU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUVVNc1EwRkJRenRaUVVNNVJDeEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzFsQlFVTXNRMEZCUXp0WlFVTnNRaXhOUVVGTkxFTkJRVU1zV1VGQlF5eERRVUZETEdkQ1FVRm5RaXhIUVVGSExFZEJRVU1zVVVGQlVTeEhRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkhMRU5CUVVNc1IwRkJReXhUUVVGVExFZEJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRWRCUVVVc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEyNUhMRU5CUVVNc1EwRkJReXhEUVVOTUxFTkJRVU03UVVGRFRpeERRVUZETzBGQmNFSkVMSE5DUVc5Q1F6dEJRVVZFTEc5Q1FVRXlRaXhIUVVGUE8wbEJRemxDTEUxQlFVMHNRMEZCUXl4WlFVRkRMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8wRkJRMnhFTEVOQlFVTTdRVUZHUkN4blEwRkZRenRCUVVWRUxHdENRVUY1UWl4SFFVRlBMRVZCUVVVc1IwRkJUenRKUVVOeVF5eE5RVUZOTEVOQlFVTXNXVUZCUXl4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEycEdMRU5CUVVNN1FVRkdSQ3cwUWtGRlF6dEJRVVZFTEhOQ1FVRTJRaXhIUVVGUExFVkJRVVVzUjBGQlR6dEpRVU42UXl4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJwR0xFTkJRVU03UVVGR1JDeHZRMEZGUXp0QlFVZEVMSEZDUVVFMFFpeEhRVUZQTzBsQlF5OUNMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc2FVSkJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMREJDUVVFd1FpeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRNMFlzUTBGQlF6dEJRVVpFTEd0RFFVVkRPMEZCUlVRc2NVSkJRVFJDTEVkQlFVODdTVUZETDBJc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eDVRa0ZCZVVJc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEVkQlFVVXNVMEZCVXl4SFFVRkhPMUZCUTJoRkxGbEJRVU1zUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hUUVVGVExFTkJRVU03VVVGRGNFTXNXVUZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVzc1JVRkJSU3hEUVVGUkxFdEJRelZETEZsQlFVTXNRMEZCUXl4M1FrRkJkMElzUlVGQlJUdFpRVU40UWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNhVUpCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRiRVVzUjBGQlJ5eERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkZMRWxCUVVrc1IwRkJSU3hGUVVGRk8xTkJReTlETEVOQlFVTXNRMEZEVEN4RFFVRkRPMHRCUTB3c1EwRkJReXhEUVVGRE8wRkJRMUFzUTBGQlF6dEJRVlpFTEd0RFFWVkRPMEZCUlVRc2IwSkJRVEpDTEVkQlFVODdTVUZET1VJc1RVRkJUU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEU5QlFVOHNSMEZCUlN4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0SlFVTjJSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFRc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGRkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEY2tZc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGNFTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4M1JVRkJkMFU3VVVGRGJrY3NUVUZCVFN4RFFVRkRMRmxCUVVNc1EwRkJReXcwUWtGQk5FSXNSVUZEYWtNc1dVRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUXl4SFFVRkhMRlZCUVZVc1IwRkJSeXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJReXhSUVVGUkxFVkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZEYmtjc1EwRkJRenRKUVVOT0xFTkJRVU03U1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTktMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zTkVKQlFUUkNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0QlFVTk1MRU5CUVVNN1FVRmFSQ3huUTBGWlF6dEJRVVZFT3pzN096czdPenRIUVZGSE8wRkJRMGdzYVVKQlFYZENMRWRCUVZVc1JVRkJSU3hIUVVGVkxFVkJRVVVzUlVGQlV5eEZRVUZGTEVsQlFWYzdTVUZEYkVVc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMRmxCUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNSVUZCUlN4WlFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNSSExFTkJRVU03UVVGR1JDd3dRa0ZGUXp0QlFVRkJMRU5CUVVNN1FVRkZSaXhqUVVGeFFpeERRVUZMTEVWQlFVVXNSMEZCVlR0SlFVTnNReXhsUVVGbExFTkJRVXM3VVVGRGFFSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWWl4TFFVRkxMRmRCUVZjc1JVRkJVU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTNaR0xFdEJRVXNzWlVGQlpTeEZRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRM1JETEV0QlFVc3NUMEZCVHl4RlFVRlpMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZET1VRc1MwRkJTeXhYUVVGWExFVkJRVkVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4aFFVRmhMRWRCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlF5eEhRVUZITEVkQlFVVXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWM3WjBKQlEzaEZMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU4yUml4TFFVRkxMRmxCUVZrc1JVRkJUeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSMEZCUlN4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExGVkJRVlVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdXVUZEYmtZN1owSkJRVk1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4bFFVRmxMRWRCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTnlReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVObUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUXpOQ0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNTVUZCU1N4RFFVRkRPMUZCUTBZc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkRPMWxCUTJZc1dVRkJReXhEUVVGRExHMUNRVUZ0UWl4RlFVRkRMRWRCUVVjc1EwRkJRenRaUVVNeFFpeFpRVUZETEVOQlFVTXNkVUpCUVhWQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNSRExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVGRExFdEJRVXNzUTBGQlFTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkJReXhEUVVGRE8wRkJRM2hFTEVOQlFVTTdRVUZ5UWtRc2IwSkJjVUpETzBGQlJVUTdPMGRCUlVjN1FVRkRTQ3h0UWtGQk1FSXNRMEZCU3l4RlFVRkZMRWRCUVZVN1NVRkRka01zWlVGQlpTeERRVUZSTEVsQlFWTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZGTEVsQlFVa3NSMEZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BFTEd0Q1FVRnJRaXhMUVVGVk8xRkJRM2hDTEUxQlFVMHNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVVXNiVUpCUVcxQ0xFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEycEZMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFZEJRVWNzUTBGQlF6dEpRVU5TTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGTExFVkJRVVVzUTBGQlVTeExRVUZMTEZsQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRiRVFzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRmxCUVVNc1EwRkJReXgzUWtGQmQwSXNSVUZCUlR0blFrRkRlRUlzV1VGQlF5eERRVUZETEc5Q1FVRnZRaXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dG5Ra0ZEYkVRc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRPMkZCUTNCQ0xFTkJRVU03VTBGRFRDeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTktMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQlF5eERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZWtNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZETEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXhReXhEUVVGRE8wbEJRMFFzVFVGQlRTeERRVUZETEZsQlFVTXNRMEZCUXl4M1FrRkJkMElzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTTFReXhEUVVGRE8wRkJia0pFTERoQ1FXMUNRenRCUVVWRUxHZENRVUYxUWl4UFFVRmpMRVZCUVVVc1IwRkJUenRKUVVNeFF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4UFFVRlBMRWRCUVVVc1QwRkJUeXhIUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEZGtNc1RVRkJUU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMGxCUTI1RUxFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNTMEZCUnl4RlFVRkZMRU5CUVVNc1IwRkJSU3hOUVVGTkxFZEJRVWNzVTBGQlV5eERRVUZETzBGQlF6ZERMRU5CUVVNN1FVRktSQ3gzUWtGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL19kaXN0L3NyYy92aWV3L1BhcnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogc2V0VGltZW91dFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL3Rlc3QtdXRpbHMvY2FsbEFzeW5jLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VVUkwodXJsLCByb290KSB7XG5cdHZhciBkYXRhID0ge31cblx0dmFyIHByb3RvY29sSW5kZXggPSB1cmwuaW5kZXhPZihcIjovL1wiKVxuXHR2YXIgcGF0aG5hbWVJbmRleCA9IHByb3RvY29sSW5kZXggPiAtMSA/IHVybC5pbmRleE9mKFwiL1wiLCBwcm90b2NvbEluZGV4ICsgMykgOiB1cmwuaW5kZXhPZihcIi9cIilcblx0dmFyIHNlYXJjaEluZGV4ID0gdXJsLmluZGV4T2YoXCI/XCIpXG5cdHZhciBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIilcblx0aWYgKChwYXRobmFtZUluZGV4ID4gc2VhcmNoSW5kZXggJiYgc2VhcmNoSW5kZXggPiAtMSkgfHwgKHBhdGhuYW1lSW5kZXggPiBoYXNoSW5kZXggJiYgaGFzaEluZGV4ID4gLTEpKSBwYXRobmFtZUluZGV4ID0gLTFcblx0aWYgKHNlYXJjaEluZGV4ID4gaGFzaEluZGV4ICYmIGhhc2hJbmRleCA+IC0xKSBzZWFyY2hJbmRleCA9IC0xXG5cdHZhciBwYXRobmFtZUVuZCA9IHNlYXJjaEluZGV4ID4gLTEgPyBzZWFyY2hJbmRleCA6IGhhc2hJbmRleCA+IC0xID8gaGFzaEluZGV4IDogdXJsLmxlbmd0aFxuXHRpZiAocHJvdG9jb2xJbmRleCA+IC0xKSB7XG5cdFx0Ly9pdCdzIGEgZnVsbCBVUkxcblx0XHRpZiAocGF0aG5hbWVJbmRleCA8IDApIHBhdGhuYW1lSW5kZXggPSB1cmwubGVuZ3RoXG5cdFx0dmFyIHBvcnRJbmRleCA9IHVybC5pbmRleE9mKFwiOlwiLCBwcm90b2NvbEluZGV4ICsgMSlcblx0XHRpZiAocG9ydEluZGV4IDwgMCkgcG9ydEluZGV4ID0gcGF0aG5hbWVJbmRleFxuXHRcdGRhdGEucHJvdG9jb2wgPSB1cmwuc2xpY2UoMCwgcHJvdG9jb2xJbmRleCArIDEpXG5cdFx0ZGF0YS5ob3N0bmFtZSA9IHVybC5zbGljZShwcm90b2NvbEluZGV4ICsgMywgcG9ydEluZGV4KVxuXHRcdGRhdGEucG9ydCA9IHVybC5zbGljZShwb3J0SW5kZXggKyAxLCBwYXRobmFtZUluZGV4KVxuXHRcdGRhdGEucGF0aG5hbWUgPSB1cmwuc2xpY2UocGF0aG5hbWVJbmRleCwgcGF0aG5hbWVFbmQpIHx8IFwiL1wiXG5cdH1cblx0ZWxzZSB7XG5cdFx0ZGF0YS5wcm90b2NvbCA9IHJvb3QucHJvdG9jb2xcblx0XHRkYXRhLmhvc3RuYW1lID0gcm9vdC5ob3N0bmFtZVxuXHRcdGRhdGEucG9ydCA9IHJvb3QucG9ydFxuXHRcdGlmIChwYXRobmFtZUluZGV4ID09PSAwKSB7XG5cdFx0XHQvL2l0J3MgYW4gYWJzb2x1dGUgcGF0aFxuXHRcdFx0ZGF0YS5wYXRobmFtZSA9IHVybC5zbGljZShwYXRobmFtZUluZGV4LCBwYXRobmFtZUVuZCkgfHwgXCIvXCJcblx0XHR9XG5cdFx0ZWxzZSBpZiAoc2VhcmNoSW5kZXggIT09IDAgJiYgaGFzaEluZGV4ICE9PSAwKSB7XG5cdFx0XHQvL2l0J3MgYSByZWxhdGl2ZSBwYXRoXG5cdFx0XHR2YXIgc2xhc2hJbmRleCA9IHJvb3QucGF0aG5hbWUubGFzdEluZGV4T2YoXCIvXCIpXG5cdFx0XHR2YXIgcGF0aCA9IHNsYXNoSW5kZXggPiAtMSA/IHJvb3QucGF0aG5hbWUuc2xpY2UoMCwgc2xhc2hJbmRleCArIDEpIDogXCIuL1wiXG5cdFx0XHR2YXIgbm9ybWFsaXplZCA9IHVybC5zbGljZSgwLCBwYXRobmFtZUVuZCkucmVwbGFjZSgvXlxcLiQvLCByb290LnBhdGhuYW1lLnNsaWNlKHNsYXNoSW5kZXggKyAxKSkucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpXG5cdFx0XHR2YXIgZG90ZG90ID0gL1xcL1teXFwvXSs/XFwvXFwuezJ9L2dcblx0XHRcdHZhciBwYXRobmFtZSA9IHBhdGggKyBub3JtYWxpemVkXG5cdFx0XHRwYXRobmFtZSA9IHBhdGggKyBub3JtYWxpemVkXG5cdFx0XHR3aGlsZSAoZG90ZG90LnRlc3QocGF0aG5hbWUpKSBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoZG90ZG90LCBcIlwiKVxuXHRcdFx0cGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9cXC9cXC5cXC8vZywgXCIvXCIpLnJlcGxhY2UoL14oXFwvXFwuezJ9KSsvLCBcIlwiKSB8fCBcIi9cIlxuXHRcdFx0ZGF0YS5wYXRobmFtZSA9IHBhdGhuYW1lXG5cdFx0fVxuXHR9XG5cdHZhciBzZWFyY2hFbmQgPSBoYXNoSW5kZXggPiAtMSA/IGhhc2hJbmRleCA6IHVybC5sZW5ndGhcblx0ZGF0YS5zZWFyY2ggPSBzZWFyY2hJbmRleCA+IC0xID8gdXJsLnNsaWNlKHNlYXJjaEluZGV4LCBzZWFyY2hFbmQpIDogXCJcIlxuXHRkYXRhLmhhc2ggPSBoYXNoSW5kZXggPiAtMSA/IHVybC5zbGljZShoYXNoSW5kZXgpIDogXCJcIlxuXHRyZXR1cm4gZGF0YVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL3Rlc3QtdXRpbHMvcGFyc2VVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI7LyohIHNob3dkb3duIDAyLTA2LTIwMTcgKi9cclxuKGZ1bmN0aW9uKCl7XHJcbi8qKlxuICogQ3JlYXRlZCBieSBUaXZpZSBvbiAxMy0wNy0yMDE1LlxuICovXG5cbmZ1bmN0aW9uIGdldERlZmF1bHRPcHRzIChzaW1wbGUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBvbWl0RXh0cmFXTEluQ29kZUJsb2Nrczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnT21pdCB0aGUgZGVmYXVsdCBleHRyYSB3aGl0ZWxpbmUgYWRkZWQgdG8gY29kZSBibG9ja3MnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBub0hlYWRlcklkOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdUdXJuIG9uL29mZiBnZW5lcmF0ZWQgaGVhZGVyIGlkJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgcHJlZml4SGVhZGVySWQ6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ1NwZWNpZnkgYSBwcmVmaXggdG8gZ2VuZXJhdGVkIGhlYWRlciBpZHMnLFxuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIGdoQ29tcGF0aWJsZUhlYWRlcklkOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdHZW5lcmF0ZSBoZWFkZXIgaWRzIGNvbXBhdGlibGUgd2l0aCBnaXRodWIgc3R5bGUgKHNwYWNlcyBhcmUgcmVwbGFjZWQgd2l0aCBkYXNoZXMsIGEgYnVuY2ggb2Ygbm9uIGFscGhhbnVtZXJpYyBjaGFycyBhcmUgcmVtb3ZlZCknLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBoZWFkZXJMZXZlbFN0YXJ0OiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdUaGUgaGVhZGVyIGJsb2NrcyBsZXZlbCBzdGFydCcsXG4gICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICB9LFxuICAgIHBhcnNlSW1nRGltZW5zaW9uczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnVHVybiBvbi9vZmYgaW1hZ2UgZGltZW5zaW9uIHBhcnNpbmcnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBzaW1wbGlmaWVkQXV0b0xpbms6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ1R1cm4gb24vb2ZmIEdGTSBhdXRvbGluayBzdHlsZScsXG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9LFxuICAgIGV4Y2x1ZGVUcmFpbGluZ1B1bmN0dWF0aW9uRnJvbVVSTHM6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ0V4Y2x1ZGVzIHRyYWlsaW5nIHB1bmN0dWF0aW9uIGZyb20gbGlua3MgZ2VuZXJhdGVkIHdpdGggYXV0b0xpbmtpbmcnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBsaXRlcmFsTWlkV29yZFVuZGVyc2NvcmVzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdQYXJzZSBtaWR3b3JkIHVuZGVyc2NvcmVzIGFzIGxpdGVyYWwgdW5kZXJzY29yZXMnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBsaXRlcmFsTWlkV29yZEFzdGVyaXNrczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnUGFyc2UgbWlkd29yZCBhc3Rlcmlza3MgYXMgbGl0ZXJhbCBhc3Rlcmlza3MnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBzdHJpa2V0aHJvdWdoOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdUdXJuIG9uL29mZiBzdHJpa2V0aHJvdWdoIHN1cHBvcnQnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICB0YWJsZXM6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ1R1cm4gb24vb2ZmIHRhYmxlcyBzdXBwb3J0JyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgdGFibGVzSGVhZGVySWQ6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ0FkZCBhbiBpZCB0byB0YWJsZSBoZWFkZXJzJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgZ2hDb2RlQmxvY2tzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IHRydWUsXG4gICAgICBkZXNjcmliZTogJ1R1cm4gb24vb2ZmIEdGTSBmZW5jZWQgY29kZSBibG9ja3Mgc3VwcG9ydCcsXG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9LFxuICAgIHRhc2tsaXN0czoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnVHVybiBvbi9vZmYgR0ZNIHRhc2tsaXN0IHN1cHBvcnQnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBzbW9vdGhMaXZlUHJldmlldzoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnUHJldmVudHMgd2VpcmQgZWZmZWN0cyBpbiBsaXZlIHByZXZpZXdzIGR1ZSB0byBpbmNvbXBsZXRlIGlucHV0JyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgc21hcnRJbmRlbnRhdGlvbkZpeDoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVHJpZXMgdG8gc21hcnRseSBmaXggaW5kZW50YXRpb24gaW4gZXM2IHN0cmluZ3MnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBkaXNhYmxlRm9yY2VkNFNwYWNlc0luZGVudGVkU3VibGlzdHM6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHRoZSByZXF1aXJlbWVudCBvZiBpbmRlbnRpbmcgbmVzdGVkIHN1Ymxpc3RzIGJ5IDQgc3BhY2VzJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgc2ltcGxlTGluZUJyZWFrczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGFyc2VzIHNpbXBsZSBsaW5lIGJyZWFrcyBhcyA8YnI+IChHRk0gU3R5bGUpJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgcmVxdWlyZVNwYWNlQmVmb3JlSGVhZGluZ1RleHQ6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ01ha2VzIGFkZGluZyBhIHNwYWNlIGJldHdlZW4gYCNgIGFuZCB0aGUgaGVhZGVyIHRleHQgbWFuZGF0b3J5IChHRk0gU3R5bGUpJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgZ2hNZW50aW9uczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW5hYmxlcyBnaXRodWIgQG1lbnRpb25zJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgZ2hNZW50aW9uc0xpbms6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS97dX0nLFxuICAgICAgZGVzY3JpcHRpb246ICdDaGFuZ2VzIHRoZSBsaW5rIGdlbmVyYXRlZCBieSBAbWVudGlvbnMuIE9ubHkgYXBwbGllcyBpZiBnaE1lbnRpb25zIG9wdGlvbiBpcyBlbmFibGVkLicsXG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgZW5jb2RlRW1haWxzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IHRydWUsXG4gICAgICBkZXNjcmlwdGlvbjogJ0VuY29kZSBlLW1haWwgYWRkcmVzc2VzIHRocm91Z2ggdGhlIHVzZSBvZiBDaGFyYWN0ZXIgRW50aXRpZXMsIHRyYW5zZm9ybWluZyBBU0NJSSBlLW1haWwgYWRkcmVzc2VzIGludG8gaXRzIGVxdWl2YWxlbnQgZGVjaW1hbCBlbnRpdGllcycsXG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9LFxuICAgIG9wZW5MaW5rc0luTmV3V2luZG93OiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdPcGVuIGFsbCBsaW5rcyBpbiBuZXcgd2luZG93cycsXG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9XG4gIH07XG4gIGlmIChzaW1wbGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGVmYXVsdE9wdGlvbnMpKTtcbiAgfVxuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIG9wdCBpbiBkZWZhdWx0T3B0aW9ucykge1xuICAgIGlmIChkZWZhdWx0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHQpKSB7XG4gICAgICByZXRbb3B0XSA9IGRlZmF1bHRPcHRpb25zW29wdF0uZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhbGxPcHRpb25zT24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBvcHRpb25zID0gZ2V0RGVmYXVsdE9wdHModHJ1ZSksXG4gICAgICByZXQgPSB7fTtcbiAgZm9yICh2YXIgb3B0IGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHQpKSB7XG4gICAgICByZXRbb3B0XSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cclxuLyoqXG4gKiBDcmVhdGVkIGJ5IFRpdmllIG9uIDA2LTAxLTIwMTUuXG4gKi9cblxuLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG52YXIgc2hvd2Rvd24gPSB7fSxcbiAgICBwYXJzZXJzID0ge30sXG4gICAgZXh0ZW5zaW9ucyA9IHt9LFxuICAgIGdsb2JhbE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0cyh0cnVlKSxcbiAgICBzZXRGbGF2b3IgPSAndmFuaWxsYScsXG4gICAgZmxhdm9yID0ge1xuICAgICAgZ2l0aHViOiB7XG4gICAgICAgIG9taXRFeHRyYVdMSW5Db2RlQmxvY2tzOiAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgc2ltcGxpZmllZEF1dG9MaW5rOiAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICBleGNsdWRlVHJhaWxpbmdQdW5jdHVhdGlvbkZyb21VUkxzOiAgIHRydWUsXG4gICAgICAgIGxpdGVyYWxNaWRXb3JkVW5kZXJzY29yZXM6ICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgc3RyaWtldGhyb3VnaDogICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICB0YWJsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIHRhYmxlc0hlYWRlcklkOiAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgZ2hDb2RlQmxvY2tzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICB0YXNrbGlzdHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIGRpc2FibGVGb3JjZWQ0U3BhY2VzSW5kZW50ZWRTdWJsaXN0czogdHJ1ZSxcbiAgICAgICAgc2ltcGxlTGluZUJyZWFrczogICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICByZXF1aXJlU3BhY2VCZWZvcmVIZWFkaW5nVGV4dDogICAgICAgIHRydWUsXG4gICAgICAgIGdoQ29tcGF0aWJsZUhlYWRlcklkOiAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgZ2hNZW50aW9uczogICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICB9LFxuICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgbm9IZWFkZXJJZDogICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICBnaENvZGVCbG9ja3M6ICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICB9LFxuICAgICAgZ2hvc3Q6IHtcbiAgICAgICAgb21pdEV4dHJhV0xJbkNvZGVCbG9ja3M6ICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICBwYXJzZUltZ0RpbWVuc2lvbnM6ICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIHNpbXBsaWZpZWRBdXRvTGluazogICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgZXhjbHVkZVRyYWlsaW5nUHVuY3R1YXRpb25Gcm9tVVJMczogICB0cnVlLFxuICAgICAgICBsaXRlcmFsTWlkV29yZFVuZGVyc2NvcmVzOiAgICAgICAgICAgIHRydWUsXG4gICAgICAgIHN0cmlrZXRocm91Z2g6ICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgdGFibGVzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICB0YWJsZXNIZWFkZXJJZDogICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIGdoQ29kZUJsb2NrczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgdGFza2xpc3RzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICBzbW9vdGhMaXZlUHJldmlldzogICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIHNpbXBsZUxpbmVCcmVha3M6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgcmVxdWlyZVNwYWNlQmVmb3JlSGVhZGluZ1RleHQ6ICAgICAgICB0cnVlLFxuICAgICAgICBnaE1lbnRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICBlbmNvZGVFbWFpbHM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgIH0sXG4gICAgICB2YW5pbGxhOiBnZXREZWZhdWx0T3B0cyh0cnVlKSxcbiAgICAgIGFsbE9uOiBhbGxPcHRpb25zT24oKVxuICAgIH07XG5cbi8qKlxuICogaGVscGVyIG5hbWVzcGFjZVxuICogQHR5cGUge3t9fVxuICovXG5zaG93ZG93bi5oZWxwZXIgPSB7fTtcblxuLyoqXG4gKiBUT0RPIExFR0FDWSBTVVBQT1JUIENPREVcbiAqIEB0eXBlIHt7fX1cbiAqL1xuc2hvd2Rvd24uZXh0ZW5zaW9ucyA9IHt9O1xuXG4vKipcbiAqIFNldCBhIGdsb2JhbCBvcHRpb25cbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtzaG93ZG93bn1cbiAqL1xuc2hvd2Rvd24uc2V0T3B0aW9uID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBnbG9iYWxPcHRpb25zW2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEdldCBhIGdsb2JhbCBvcHRpb25cbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHsqfVxuICovXG5zaG93ZG93bi5nZXRPcHRpb24gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIGdsb2JhbE9wdGlvbnNba2V5XTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBnbG9iYWwgb3B0aW9uc1xuICogQHN0YXRpY1xuICogQHJldHVybnMge3t9fVxuICovXG5zaG93ZG93bi5nZXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHJldHVybiBnbG9iYWxPcHRpb25zO1xufTtcblxuLyoqXG4gKiBSZXNldCBnbG9iYWwgb3B0aW9ucyB0byB0aGUgZGVmYXVsdCB2YWx1ZXNcbiAqIEBzdGF0aWNcbiAqL1xuc2hvd2Rvd24ucmVzZXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIGdsb2JhbE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0cyh0cnVlKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBmbGF2b3Igc2hvd2Rvd24gc2hvdWxkIHVzZSBhcyBkZWZhdWx0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5zaG93ZG93bi5zZXRGbGF2b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmICghZmxhdm9yLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgdGhyb3cgRXJyb3IobmFtZSArICcgZmxhdm9yIHdhcyBub3QgZm91bmQnKTtcbiAgfVxuICBzaG93ZG93bi5yZXNldE9wdGlvbnMoKTtcbiAgdmFyIHByZXNldCA9IGZsYXZvcltuYW1lXTtcbiAgc2V0Rmxhdm9yID0gbmFtZTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIHByZXNldCkge1xuICAgIGlmIChwcmVzZXQuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgZ2xvYmFsT3B0aW9uc1tvcHRpb25dID0gcHJlc2V0W29wdGlvbl07XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudGx5IHNldCBmbGF2b3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnNob3dkb3duLmdldEZsYXZvciA9IGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICByZXR1cm4gc2V0Rmxhdm9yO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG9wdGlvbnMgb2YgYSBzcGVjaWZpZWQgZmxhdm9yLiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGUgZmxhdm9yIHdhcyBub3QgZm91bmRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGZsYXZvclxuICogQHJldHVybnMge3t9fHVuZGVmaW5lZH1cbiAqL1xuc2hvd2Rvd24uZ2V0Rmxhdm9yT3B0aW9ucyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKGZsYXZvci5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHJldHVybiBmbGF2b3JbbmFtZV07XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NpbXBsZT10cnVlXVxuICogQHJldHVybnMge3t9fVxuICovXG5zaG93ZG93bi5nZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIChzaW1wbGUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICByZXR1cm4gZ2V0RGVmYXVsdE9wdHMoc2ltcGxlKTtcbn07XG5cbi8qKlxuICogR2V0IG9yIHNldCBhIHN1YlBhcnNlclxuICpcbiAqIHN1YlBhcnNlcihuYW1lKSAgICAgICAtIEdldCBhIHJlZ2lzdGVyZWQgc3ViUGFyc2VyXG4gKiBzdWJQYXJzZXIobmFtZSwgZnVuYykgLSBSZWdpc3RlciBhIHN1YlBhcnNlclxuICogQHN0YXRpY1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmdW5jXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnNob3dkb3duLnN1YlBhcnNlciA9IGZ1bmN0aW9uIChuYW1lLCBmdW5jKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKHNob3dkb3duLmhlbHBlci5pc1N0cmluZyhuYW1lKSkge1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhcnNlcnNbbmFtZV0gPSBmdW5jO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyc2Vycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICByZXR1cm4gcGFyc2Vyc1tuYW1lXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKCdTdWJQYXJzZXIgbmFtZWQgJyArIG5hbWUgKyAnIG5vdCByZWdpc3RlcmVkIScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBHZXRzIG9yIHJlZ2lzdGVycyBhbiBleHRlbnNpb25cbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbj19IGV4dFxuICogQHJldHVybnMgeyp9XG4gKi9cbnNob3dkb3duLmV4dGVuc2lvbiA9IGZ1bmN0aW9uIChuYW1lLCBleHQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmICghc2hvd2Rvd24uaGVscGVyLmlzU3RyaW5nKG5hbWUpKSB7XG4gICAgdGhyb3cgRXJyb3IoJ0V4dGVuc2lvbiBcXCduYW1lXFwnIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIG5hbWUgPSBzaG93ZG93bi5oZWxwZXIuc3RkRXh0TmFtZShuYW1lKTtcblxuICAvLyBHZXR0ZXJcbiAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChleHQpKSB7XG4gICAgaWYgKCFleHRlbnNpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICB0aHJvdyBFcnJvcignRXh0ZW5zaW9uIG5hbWVkICcgKyBuYW1lICsgJyBpcyBub3QgcmVnaXN0ZXJlZCEnKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVuc2lvbnNbbmFtZV07XG5cbiAgICAvLyBTZXR0ZXJcbiAgfSBlbHNlIHtcbiAgICAvLyBFeHBhbmQgZXh0ZW5zaW9uIGlmIGl0J3Mgd3JhcHBlZCBpbiBhIGZ1bmN0aW9uXG4gICAgaWYgKHR5cGVvZiBleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV4dCA9IGV4dCgpO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSBleHRlbnNpb24gaXMgYW4gYXJyYXlcbiAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc0FycmF5KGV4dCkpIHtcbiAgICAgIGV4dCA9IFtleHRdO1xuICAgIH1cblxuICAgIHZhciB2YWxpZEV4dGVuc2lvbiA9IHZhbGlkYXRlKGV4dCwgbmFtZSk7XG5cbiAgICBpZiAodmFsaWRFeHRlbnNpb24udmFsaWQpIHtcbiAgICAgIGV4dGVuc2lvbnNbbmFtZV0gPSBleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKHZhbGlkRXh0ZW5zaW9uLmVycm9yKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2V0cyBhbGwgZXh0ZW5zaW9ucyByZWdpc3RlcmVkXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbnNob3dkb3duLmdldEFsbEV4dGVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIGV4dGVuc2lvbnM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBleHRlbnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnNob3dkb3duLnJlbW92ZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgZGVsZXRlIGV4dGVuc2lvbnNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGV4dGVuc2lvbnNcbiAqL1xuc2hvd2Rvd24ucmVzZXRFeHRlbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIGV4dGVuc2lvbnMgPSB7fTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgZXh0ZW5zaW9uXG4gKiBAcGFyYW0ge2FycmF5fSBleHRlbnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7e3ZhbGlkOiBib29sZWFuLCBlcnJvcjogc3RyaW5nfX1cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGUgKGV4dGVuc2lvbiwgbmFtZSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGVyck1zZyA9IChuYW1lKSA/ICdFcnJvciBpbiAnICsgbmFtZSArICcgZXh0ZW5zaW9uLT4nIDogJ0Vycm9yIGluIHVubmFtZWQgZXh0ZW5zaW9uJyxcbiAgICAgIHJldCA9IHtcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIGVycm9yOiAnJ1xuICAgICAgfTtcblxuICBpZiAoIXNob3dkb3duLmhlbHBlci5pc0FycmF5KGV4dGVuc2lvbikpIHtcbiAgICBleHRlbnNpb24gPSBbZXh0ZW5zaW9uXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9uLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJhc2VNc2cgPSBlcnJNc2cgKyAnIHN1Yi1leHRlbnNpb24gJyArIGkgKyAnOiAnLFxuICAgICAgICBleHQgPSBleHRlbnNpb25baV07XG4gICAgaWYgKHR5cGVvZiBleHQgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXQudmFsaWQgPSBmYWxzZTtcbiAgICAgIHJldC5lcnJvciA9IGJhc2VNc2cgKyAnbXVzdCBiZSBhbiBvYmplY3QsIGJ1dCAnICsgdHlwZW9mIGV4dCArICcgZ2l2ZW4nO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc1N0cmluZyhleHQudHlwZSkpIHtcbiAgICAgIHJldC52YWxpZCA9IGZhbHNlO1xuICAgICAgcmV0LmVycm9yID0gYmFzZU1zZyArICdwcm9wZXJ0eSBcInR5cGVcIiBtdXN0IGJlIGEgc3RyaW5nLCBidXQgJyArIHR5cGVvZiBleHQudHlwZSArICcgZ2l2ZW4nO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9IGV4dC50eXBlID0gZXh0LnR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIG5vcm1hbGl6ZSBleHRlbnNpb24gdHlwZVxuICAgIGlmICh0eXBlID09PSAnbGFuZ3VhZ2UnKSB7XG4gICAgICB0eXBlID0gZXh0LnR5cGUgPSAnbGFuZyc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdodG1sJykge1xuICAgICAgdHlwZSA9IGV4dC50eXBlID0gJ291dHB1dCc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09ICdsYW5nJyAmJiB0eXBlICE9PSAnb3V0cHV0JyAmJiB0eXBlICE9PSAnbGlzdGVuZXInKSB7XG4gICAgICByZXQudmFsaWQgPSBmYWxzZTtcbiAgICAgIHJldC5lcnJvciA9IGJhc2VNc2cgKyAndHlwZSAnICsgdHlwZSArICcgaXMgbm90IHJlY29nbml6ZWQuIFZhbGlkIHZhbHVlczogXCJsYW5nL2xhbmd1YWdlXCIsIFwib3V0cHV0L2h0bWxcIiBvciBcImxpc3RlbmVyXCInO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2xpc3RlbmVyJykge1xuICAgICAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChleHQubGlzdGVuZXJzKSkge1xuICAgICAgICByZXQudmFsaWQgPSBmYWxzZTtcbiAgICAgICAgcmV0LmVycm9yID0gYmFzZU1zZyArICcuIEV4dGVuc2lvbnMgb2YgdHlwZSBcImxpc3RlbmVyXCIgbXVzdCBoYXZlIGEgcHJvcGVydHkgY2FsbGVkIFwibGlzdGVuZXJzXCInO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2hvd2Rvd24uaGVscGVyLmlzVW5kZWZpbmVkKGV4dC5maWx0ZXIpICYmIHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChleHQucmVnZXgpKSB7XG4gICAgICAgIHJldC52YWxpZCA9IGZhbHNlO1xuICAgICAgICByZXQuZXJyb3IgPSBiYXNlTXNnICsgdHlwZSArICcgZXh0ZW5zaW9ucyBtdXN0IGRlZmluZSBlaXRoZXIgYSBcInJlZ2V4XCIgcHJvcGVydHkgb3IgYSBcImZpbHRlclwiIG1ldGhvZCc7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV4dC5saXN0ZW5lcnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZXh0Lmxpc3RlbmVycyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0LnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldC5lcnJvciA9IGJhc2VNc2cgKyAnXCJsaXN0ZW5lcnNcIiBwcm9wZXJ0eSBtdXN0IGJlIGFuIG9iamVjdCBidXQgJyArIHR5cGVvZiBleHQubGlzdGVuZXJzICsgJyBnaXZlbic7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBsbiBpbiBleHQubGlzdGVuZXJzKSB7XG4gICAgICAgIGlmIChleHQubGlzdGVuZXJzLmhhc093blByb3BlcnR5KGxuKSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZXh0Lmxpc3RlbmVyc1tsbl0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldC52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0LmVycm9yID0gYmFzZU1zZyArICdcImxpc3RlbmVyc1wiIHByb3BlcnR5IG11c3QgYmUgYW4gaGFzaCBvZiBbZXZlbnQgbmFtZV06IFtjYWxsYmFja10uIGxpc3RlbmVycy4nICsgbG4gK1xuICAgICAgICAgICAgICAnIG11c3QgYmUgYSBmdW5jdGlvbiBidXQgJyArIHR5cGVvZiBleHQubGlzdGVuZXJzW2xuXSArICcgZ2l2ZW4nO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXh0LmZpbHRlcikge1xuICAgICAgaWYgKHR5cGVvZiBleHQuZmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldC52YWxpZCA9IGZhbHNlO1xuICAgICAgICByZXQuZXJyb3IgPSBiYXNlTXNnICsgJ1wiZmlsdGVyXCIgbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgJyArIHR5cGVvZiBleHQuZmlsdGVyICsgJyBnaXZlbic7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChleHQucmVnZXgpIHtcbiAgICAgIGlmIChzaG93ZG93bi5oZWxwZXIuaXNTdHJpbmcoZXh0LnJlZ2V4KSkge1xuICAgICAgICBleHQucmVnZXggPSBuZXcgUmVnRXhwKGV4dC5yZWdleCwgJ2cnKTtcbiAgICAgIH1cbiAgICAgIGlmICghKGV4dC5yZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgICAgcmV0LnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldC5lcnJvciA9IGJhc2VNc2cgKyAnXCJyZWdleFwiIHByb3BlcnR5IG11c3QgZWl0aGVyIGJlIGEgc3RyaW5nIG9yIGEgUmVnRXhwIG9iamVjdCwgYnV0ICcgKyB0eXBlb2YgZXh0LnJlZ2V4ICsgJyBnaXZlbic7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd2Rvd24uaGVscGVyLmlzVW5kZWZpbmVkKGV4dC5yZXBsYWNlKSkge1xuICAgICAgICByZXQudmFsaWQgPSBmYWxzZTtcbiAgICAgICAgcmV0LmVycm9yID0gYmFzZU1zZyArICdcInJlZ2V4XCIgZXh0ZW5zaW9ucyBtdXN0IGltcGxlbWVudCBhIHJlcGxhY2Ugc3RyaW5nIG9yIGZ1bmN0aW9uJztcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBleHRlbnNpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBleHRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5zaG93ZG93bi52YWxpZGF0ZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIChleHQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciB2YWxpZGF0ZUV4dGVuc2lvbiA9IHZhbGlkYXRlKGV4dCwgbnVsbCk7XG4gIGlmICghdmFsaWRhdGVFeHRlbnNpb24udmFsaWQpIHtcbiAgICBjb25zb2xlLndhcm4odmFsaWRhdGVFeHRlbnNpb24uZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cclxuLyoqXG4gKiBzaG93ZG93bmpzIGhlbHBlciBmdW5jdGlvbnNcbiAqL1xuXG5pZiAoIXNob3dkb3duLmhhc093blByb3BlcnR5KCdoZWxwZXInKSkge1xuICBzaG93ZG93bi5oZWxwZXIgPSB7fTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YXIgaXMgc3RyaW5nXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge3N0cmluZ30gYVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnNob3dkb3duLmhlbHBlci5pc1N0cmluZyA9IGZ1bmN0aW9uIChhKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuICh0eXBlb2YgYSA9PT0gJ3N0cmluZycgfHwgYSBpbnN0YW5jZW9mIFN0cmluZyk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHZhciBpcyBhIGZ1bmN0aW9uXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5zaG93ZG93bi5oZWxwZXIuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChhKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGdldFR5cGUgPSB7fTtcbiAgcmV0dXJuIGEgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGEpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuLyoqXG4gKiBpc0FycmF5IGhlbHBlciBmdW5jdGlvblxuICogQHN0YXRpY1xuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuc2hvd2Rvd24uaGVscGVyLmlzQXJyYXkgPSBmdW5jdGlvbiAoYSkge1xuICAndXNlIHN0cmljdCc7XG4gIHJldHVybiBhLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKi9cbnNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAndXNlIHN0cmljdCc7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBGb3JFYWNoIGhlbHBlciBmdW5jdGlvblxuICogSXRlcmF0ZXMgb3ZlciBBcnJheXMgYW5kIE9iamVjdHMgKG93biBwcm9wZXJ0aWVzIG9ubHkpXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQWNjZXB0cyAzIHBhcmFtczogMS4gdmFsdWUsIDIuIGtleSwgMy4gdGhlIG9yaWdpbmFsIGFycmF5L29iamVjdFxuICovXG5zaG93ZG93bi5oZWxwZXIuZm9yRWFjaCA9IGZ1bmN0aW9uIChvYmosIGNhbGxiYWNrKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gY2hlY2sgaWYgb2JqIGlzIGRlZmluZWRcbiAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChvYmopKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdvYmogcGFyYW0gaXMgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGlmIChzaG93ZG93bi5oZWxwZXIuaXNVbmRlZmluZWQoY2FsbGJhY2spKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBwYXJhbSBpcyByZXF1aXJlZCcpO1xuICB9XG5cbiAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIHBhcmFtIG11c3QgYmUgYSBmdW5jdGlvbi9jbG9zdXJlJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iai5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2JqLmZvckVhY2goY2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKHNob3dkb3duLmhlbHBlci5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2sob2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgKG9iaikgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgY2FsbGJhY2sob2JqW3Byb3BdLCBwcm9wLCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29iaiBkb2VzIG5vdCBzZWVtIHRvIGJlIGFuIGFycmF5IG9yIGFuIGl0ZXJhYmxlIG9iamVjdCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YW5kYXJkaWRpemUgZXh0ZW5zaW9uIG5hbWVcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzIGV4dGVuc2lvbiBuYW1lXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5zaG93ZG93bi5oZWxwZXIuc3RkRXh0TmFtZSA9IGZ1bmN0aW9uIChzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIHMucmVwbGFjZSgvW18/KitcXC9cXFxcLl4tXS9nLCAnJykucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrICh3aG9sZU1hdGNoLCBtMSkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBjaGFyQ29kZVRvRXNjYXBlID0gbTEuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuICfCqEUnICsgY2hhckNvZGVUb0VzY2FwZSArICdFJztcbn1cblxuLyoqXG4gKiBDYWxsYmFjayB1c2VkIHRvIGVzY2FwZSBjaGFyYWN0ZXJzIHdoZW4gcGFzc2luZyB0aHJvdWdoIFN0cmluZy5yZXBsYWNlXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge3N0cmluZ30gd2hvbGVNYXRjaFxuICogQHBhcmFtIHtzdHJpbmd9IG0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5zaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrID0gZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrO1xuXG4vKipcbiAqIEVzY2FwZSBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJzVG9Fc2NhcGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWZ0ZXJCYWNrc2xhc2hcbiAqIEByZXR1cm5zIHtYTUx8c3RyaW5nfHZvaWR8Kn1cbiAqL1xuc2hvd2Rvd24uaGVscGVyLmVzY2FwZUNoYXJhY3RlcnMgPSBmdW5jdGlvbiAodGV4dCwgY2hhcnNUb0VzY2FwZSwgYWZ0ZXJCYWNrc2xhc2gpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyBGaXJzdCB3ZSBoYXZlIHRvIGVzY2FwZSB0aGUgZXNjYXBlIGNoYXJhY3RlcnMgc28gdGhhdFxuICAvLyB3ZSBjYW4gYnVpbGQgYSBjaGFyYWN0ZXIgY2xhc3Mgb3V0IG9mIHRoZW1cbiAgdmFyIHJlZ2V4U3RyaW5nID0gJyhbJyArIGNoYXJzVG9Fc2NhcGUucmVwbGFjZSgvKFtcXFtcXF1cXFxcXSkvZywgJ1xcXFwkMScpICsgJ10pJztcblxuICBpZiAoYWZ0ZXJCYWNrc2xhc2gpIHtcbiAgICByZWdleFN0cmluZyA9ICdcXFxcXFxcXCcgKyByZWdleFN0cmluZztcbiAgfVxuXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTdHJpbmcsICdnJyk7XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UocmVnZXgsIGVzY2FwZUNoYXJhY3RlcnNDYWxsYmFjayk7XG5cbiAgcmV0dXJuIHRleHQ7XG59O1xuXG52YXIgcmd4RmluZE1hdGNoUG9zID0gZnVuY3Rpb24gKHN0ciwgbGVmdCwgcmlnaHQsIGZsYWdzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGYgPSBmbGFncyB8fCAnJyxcbiAgICAgIGcgPSBmLmluZGV4T2YoJ2cnKSA+IC0xLFxuICAgICAgeCA9IG5ldyBSZWdFeHAobGVmdCArICd8JyArIHJpZ2h0LCAnZycgKyBmLnJlcGxhY2UoL2cvZywgJycpKSxcbiAgICAgIGwgPSBuZXcgUmVnRXhwKGxlZnQsIGYucmVwbGFjZSgvZy9nLCAnJykpLFxuICAgICAgcG9zID0gW10sXG4gICAgICB0LCBzLCBtLCBzdGFydCwgZW5kO1xuXG4gIGRvIHtcbiAgICB0ID0gMDtcbiAgICB3aGlsZSAoKG0gPSB4LmV4ZWMoc3RyKSkpIHtcbiAgICAgIGlmIChsLnRlc3QobVswXSkpIHtcbiAgICAgICAgaWYgKCEodCsrKSkge1xuICAgICAgICAgIHMgPSB4Lmxhc3RJbmRleDtcbiAgICAgICAgICBzdGFydCA9IHMgLSBtWzBdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0KSB7XG4gICAgICAgIGlmICghLS10KSB7XG4gICAgICAgICAgZW5kID0gbS5pbmRleCArIG1bMF0ubGVuZ3RoO1xuICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICBsZWZ0OiB7c3RhcnQ6IHN0YXJ0LCBlbmQ6IHN9LFxuICAgICAgICAgICAgbWF0Y2g6IHtzdGFydDogcywgZW5kOiBtLmluZGV4fSxcbiAgICAgICAgICAgIHJpZ2h0OiB7c3RhcnQ6IG0uaW5kZXgsIGVuZDogZW5kfSxcbiAgICAgICAgICAgIHdob2xlTWF0Y2g6IHtzdGFydDogc3RhcnQsIGVuZDogZW5kfVxuICAgICAgICAgIH07XG4gICAgICAgICAgcG9zLnB1c2gob2JqKTtcbiAgICAgICAgICBpZiAoIWcpIHtcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IHdoaWxlICh0ICYmICh4Lmxhc3RJbmRleCA9IHMpKTtcblxuICByZXR1cm4gcG9zO1xufTtcblxuLyoqXG4gKiBtYXRjaFJlY3Vyc2l2ZVJlZ0V4cFxuICpcbiAqIChjKSAyMDA3IFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBBY2NlcHRzIGEgc3RyaW5nIHRvIHNlYXJjaCwgYSBsZWZ0IGFuZCByaWdodCBmb3JtYXQgZGVsaW1pdGVyXG4gKiBhcyByZWdleCBwYXR0ZXJucywgYW5kIG9wdGlvbmFsIHJlZ2V4IGZsYWdzLiBSZXR1cm5zIGFuIGFycmF5XG4gKiBvZiBtYXRjaGVzLCBhbGxvd2luZyBuZXN0ZWQgaW5zdGFuY2VzIG9mIGxlZnQvcmlnaHQgZGVsaW1pdGVycy5cbiAqIFVzZSB0aGUgXCJnXCIgZmxhZyB0byByZXR1cm4gYWxsIG1hdGNoZXMsIG90aGVyd2lzZSBvbmx5IHRoZVxuICogZmlyc3QgaXMgcmV0dXJuZWQuIEJlIGNhcmVmdWwgdG8gZW5zdXJlIHRoYXQgdGhlIGxlZnQgYW5kXG4gKiByaWdodCBmb3JtYXQgZGVsaW1pdGVycyBwcm9kdWNlIG11dHVhbGx5IGV4Y2x1c2l2ZSBtYXRjaGVzLlxuICogQmFja3JlZmVyZW5jZXMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aGluIHRoZSByaWdodCBkZWxpbWl0ZXJcbiAqIGR1ZSB0byBob3cgaXQgaXMgaW50ZXJuYWxseSBjb21iaW5lZCB3aXRoIHRoZSBsZWZ0IGRlbGltaXRlci5cbiAqIFdoZW4gbWF0Y2hpbmcgc3RyaW5ncyB3aG9zZSBmb3JtYXQgZGVsaW1pdGVycyBhcmUgdW5iYWxhbmNlZFxuICogdG8gdGhlIGxlZnQgb3IgcmlnaHQsIHRoZSBvdXRwdXQgaXMgaW50ZW50aW9uYWxseSBhcyBhXG4gKiBjb252ZW50aW9uYWwgcmVnZXggbGlicmFyeSB3aXRoIHJlY3Vyc2lvbiBzdXBwb3J0IHdvdWxkXG4gKiBwcm9kdWNlLCBlLmcuIFwiPDx4PlwiIGFuZCBcIjx4Pj5cIiBib3RoIHByb2R1Y2UgW1wieFwiXSB3aGVuIHVzaW5nXG4gKiBcIjxcIiBhbmQgXCI+XCIgYXMgdGhlIGRlbGltaXRlcnMgKGJvdGggc3RyaW5ncyBjb250YWluIGEgc2luZ2xlLFxuICogYmFsYW5jZWQgaW5zdGFuY2Ugb2YgXCI8eD5cIikuXG4gKlxuICogZXhhbXBsZXM6XG4gKiBtYXRjaFJlY3Vyc2l2ZVJlZ0V4cChcInRlc3RcIiwgXCJcXFxcKFwiLCBcIlxcXFwpXCIpXG4gKiByZXR1cm5zOiBbXVxuICogbWF0Y2hSZWN1cnNpdmVSZWdFeHAoXCI8dDw8ZT4+PHM+PnQ8PlwiLCBcIjxcIiwgXCI+XCIsIFwiZ1wiKVxuICogcmV0dXJuczogW1widDw8ZT4+PHM+XCIsIFwiXCJdXG4gKiBtYXRjaFJlY3Vyc2l2ZVJlZ0V4cChcIjxkaXYgaWQ9XFxcInhcXFwiPnRlc3Q8L2Rpdj5cIiwgXCI8ZGl2XFxcXGJbXj5dKj5cIiwgXCI8L2Rpdj5cIiwgXCJnaVwiKVxuICogcmV0dXJuczogW1widGVzdFwiXVxuICovXG5zaG93ZG93bi5oZWxwZXIubWF0Y2hSZWN1cnNpdmVSZWdFeHAgPSBmdW5jdGlvbiAoc3RyLCBsZWZ0LCByaWdodCwgZmxhZ3MpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtYXRjaFBvcyA9IHJneEZpbmRNYXRjaFBvcyAoc3RyLCBsZWZ0LCByaWdodCwgZmxhZ3MpLFxuICAgICAgcmVzdWx0cyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hQb3MubGVuZ3RoOyArK2kpIHtcbiAgICByZXN1bHRzLnB1c2goW1xuICAgICAgc3RyLnNsaWNlKG1hdGNoUG9zW2ldLndob2xlTWF0Y2guc3RhcnQsIG1hdGNoUG9zW2ldLndob2xlTWF0Y2guZW5kKSxcbiAgICAgIHN0ci5zbGljZShtYXRjaFBvc1tpXS5tYXRjaC5zdGFydCwgbWF0Y2hQb3NbaV0ubWF0Y2guZW5kKSxcbiAgICAgIHN0ci5zbGljZShtYXRjaFBvc1tpXS5sZWZ0LnN0YXJ0LCBtYXRjaFBvc1tpXS5sZWZ0LmVuZCksXG4gICAgICBzdHIuc2xpY2UobWF0Y2hQb3NbaV0ucmlnaHQuc3RhcnQsIG1hdGNoUG9zW2ldLnJpZ2h0LmVuZClcbiAgICBdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSByZXBsYWNlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGxlZnRcbiAqIEBwYXJhbSB7c3RyaW5nfSByaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IGZsYWdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5zaG93ZG93bi5oZWxwZXIucmVwbGFjZVJlY3Vyc2l2ZVJlZ0V4cCA9IGZ1bmN0aW9uIChzdHIsIHJlcGxhY2VtZW50LCBsZWZ0LCByaWdodCwgZmxhZ3MpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmICghc2hvd2Rvd24uaGVscGVyLmlzRnVuY3Rpb24ocmVwbGFjZW1lbnQpKSB7XG4gICAgdmFyIHJlcFN0ciA9IHJlcGxhY2VtZW50O1xuICAgIHJlcGxhY2VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlcFN0cjtcbiAgICB9O1xuICB9XG5cbiAgdmFyIG1hdGNoUG9zID0gcmd4RmluZE1hdGNoUG9zKHN0ciwgbGVmdCwgcmlnaHQsIGZsYWdzKSxcbiAgICAgIGZpbmFsU3RyID0gc3RyLFxuICAgICAgbG5nID0gbWF0Y2hQb3MubGVuZ3RoO1xuXG4gIGlmIChsbmcgPiAwKSB7XG4gICAgdmFyIGJpdHMgPSBbXTtcbiAgICBpZiAobWF0Y2hQb3NbMF0ud2hvbGVNYXRjaC5zdGFydCAhPT0gMCkge1xuICAgICAgYml0cy5wdXNoKHN0ci5zbGljZSgwLCBtYXRjaFBvc1swXS53aG9sZU1hdGNoLnN0YXJ0KSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG5nOyArK2kpIHtcbiAgICAgIGJpdHMucHVzaChcbiAgICAgICAgcmVwbGFjZW1lbnQoXG4gICAgICAgICAgc3RyLnNsaWNlKG1hdGNoUG9zW2ldLndob2xlTWF0Y2guc3RhcnQsIG1hdGNoUG9zW2ldLndob2xlTWF0Y2guZW5kKSxcbiAgICAgICAgICBzdHIuc2xpY2UobWF0Y2hQb3NbaV0ubWF0Y2guc3RhcnQsIG1hdGNoUG9zW2ldLm1hdGNoLmVuZCksXG4gICAgICAgICAgc3RyLnNsaWNlKG1hdGNoUG9zW2ldLmxlZnQuc3RhcnQsIG1hdGNoUG9zW2ldLmxlZnQuZW5kKSxcbiAgICAgICAgICBzdHIuc2xpY2UobWF0Y2hQb3NbaV0ucmlnaHQuc3RhcnQsIG1hdGNoUG9zW2ldLnJpZ2h0LmVuZClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGlmIChpIDwgbG5nIC0gMSkge1xuICAgICAgICBiaXRzLnB1c2goc3RyLnNsaWNlKG1hdGNoUG9zW2ldLndob2xlTWF0Y2guZW5kLCBtYXRjaFBvc1tpICsgMV0ud2hvbGVNYXRjaC5zdGFydCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWF0Y2hQb3NbbG5nIC0gMV0ud2hvbGVNYXRjaC5lbmQgPCBzdHIubGVuZ3RoKSB7XG4gICAgICBiaXRzLnB1c2goc3RyLnNsaWNlKG1hdGNoUG9zW2xuZyAtIDFdLndob2xlTWF0Y2guZW5kKSk7XG4gICAgfVxuICAgIGZpbmFsU3RyID0gYml0cy5qb2luKCcnKTtcbiAgfVxuICByZXR1cm4gZmluYWxTdHI7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGluZGV4IHdpdGhpbiB0aGUgcGFzc2VkIFN0cmluZyBvYmplY3Qgb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlIHNwZWNpZmllZCByZWdleCxcbiAqIHN0YXJ0aW5nIHRoZSBzZWFyY2ggYXQgZnJvbUluZGV4LiBSZXR1cm5zIC0xIGlmIHRoZSB2YWx1ZSBpcyBub3QgZm91bmQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBzdHJpbmcgdG8gc2VhcmNoXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXggUmVndWxhciBleHByZXNzaW9uIHRvIHNlYXJjaFxuICogQHBhcmFtIHtpbnR9IFtmcm9tSW5kZXggPSAwXSBJbmRleCB0byBzdGFydCB0aGUgc2VhcmNoXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQHRocm93cyBJbnZhbGlkQXJndW1lbnRFcnJvclxuICovXG5zaG93ZG93bi5oZWxwZXIucmVnZXhJbmRleE9mID0gZnVuY3Rpb24gKHN0ciwgcmVnZXgsIGZyb21JbmRleCkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmICghc2hvd2Rvd24uaGVscGVyLmlzU3RyaW5nKHN0cikpIHtcbiAgICB0aHJvdyAnSW52YWxpZEFyZ3VtZW50RXJyb3I6IGZpcnN0IHBhcmFtZXRlciBvZiBzaG93ZG93bi5oZWxwZXIucmVnZXhJbmRleE9mIGZ1bmN0aW9uIG11c3QgYmUgYSBzdHJpbmcnO1xuICB9XG4gIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyAnSW52YWxpZEFyZ3VtZW50RXJyb3I6IHNlY29uZCBwYXJhbWV0ZXIgb2Ygc2hvd2Rvd24uaGVscGVyLnJlZ2V4SW5kZXhPZiBmdW5jdGlvbiBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIFJlZ0V4cCc7XG4gIH1cbiAgdmFyIGluZGV4T2YgPSBzdHIuc3Vic3RyaW5nKGZyb21JbmRleCB8fCAwKS5zZWFyY2gocmVnZXgpO1xuICByZXR1cm4gKGluZGV4T2YgPj0gMCkgPyAoaW5kZXhPZiArIChmcm9tSW5kZXggfHwgMCkpIDogaW5kZXhPZjtcbn07XG5cbi8qKlxuICogU3BsaXRzIHRoZSBwYXNzZWQgc3RyaW5nIG9iamVjdCBhdCB0aGUgZGVmaW5lZCBpbmRleCwgYW5kIHJldHVybnMgYW4gYXJyYXkgY29tcG9zZWQgb2YgdGhlIHR3byBzdWJzdHJpbmdzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIHN0cmluZyB0byBzcGxpdFxuICogQHBhcmFtIHtpbnR9IGluZGV4IGluZGV4IHRvIHNwbGl0IHN0cmluZyBhdFxuICogQHJldHVybnMge1tzdHJpbmcsc3RyaW5nXX1cbiAqIEB0aHJvd3MgSW52YWxpZEFyZ3VtZW50RXJyb3JcbiAqL1xuc2hvd2Rvd24uaGVscGVyLnNwbGl0QXRJbmRleCA9IGZ1bmN0aW9uIChzdHIsIGluZGV4KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNTdHJpbmcoc3RyKSkge1xuICAgIHRocm93ICdJbnZhbGlkQXJndW1lbnRFcnJvcjogZmlyc3QgcGFyYW1ldGVyIG9mIHNob3dkb3duLmhlbHBlci5yZWdleEluZGV4T2YgZnVuY3Rpb24gbXVzdCBiZSBhIHN0cmluZyc7XG4gIH1cbiAgcmV0dXJuIFtzdHIuc3Vic3RyaW5nKDAsIGluZGV4KSwgc3RyLnN1YnN0cmluZyhpbmRleCldO1xufTtcblxuLyoqXG4gKiBPYmZ1c2NhdGUgYW4gZS1tYWlsIGFkZHJlc3MgdGhyb3VnaCB0aGUgdXNlIG9mIENoYXJhY3RlciBFbnRpdGllcyxcbiAqIHRyYW5zZm9ybWluZyBBU0NJSSBjaGFyYWN0ZXJzIGludG8gdGhlaXIgZXF1aXZhbGVudCBkZWNpbWFsIG9yIGhleCBlbnRpdGllcy5cbiAqXG4gKiBTaW5jZSBpdCBoYXMgYSByYW5kb20gY29tcG9uZW50LCBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoaXMgZnVuY3Rpb24gcHJvZHVjZSBkaWZmZXJlbnQgcmVzdWx0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYWlsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5zaG93ZG93bi5oZWxwZXIuZW5jb2RlRW1haWxBZGRyZXNzID0gZnVuY3Rpb24gKG1haWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgZW5jb2RlID0gW1xuICAgIGZ1bmN0aW9uIChjaCkge1xuICAgICAgcmV0dXJuICcmIycgKyBjaC5jaGFyQ29kZUF0KDApICsgJzsnO1xuICAgIH0sXG4gICAgZnVuY3Rpb24gKGNoKSB7XG4gICAgICByZXR1cm4gJyYjeCcgKyBjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSArICc7JztcbiAgICB9LFxuICAgIGZ1bmN0aW9uIChjaCkge1xuICAgICAgcmV0dXJuIGNoO1xuICAgIH1cbiAgXTtcblxuICBtYWlsID0gbWFpbC5yZXBsYWNlKC8uL2csIGZ1bmN0aW9uIChjaCkge1xuICAgIGlmIChjaCA9PT0gJ0AnKSB7XG4gICAgICAvLyB0aGlzICptdXN0KiBiZSBlbmNvZGVkLiBJIGluc2lzdC5cbiAgICAgIGNoID0gZW5jb2RlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXShjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKTtcbiAgICAgIC8vIHJvdWdobHkgMTAlIHJhdywgNDUlIGhleCwgNDUlIGRlY1xuICAgICAgY2ggPSAoXG4gICAgICAgIHIgPiAwLjkgPyBlbmNvZGVbMl0oY2gpIDogciA+IDAuNDUgPyBlbmNvZGVbMV0oY2gpIDogZW5jb2RlWzBdKGNoKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoO1xuICB9KTtcblxuICByZXR1cm4gbWFpbDtcbn07XG5cbi8qKlxuICogUE9MWUZJTExTXG4gKi9cbi8vIHVzZSB0aGlzIGluc3RlYWQgb2YgYnVpbHRpbiBpcyB1bmRlZmluZWQgZm9yIElFOCBjb21wYXRpYmlsaXR5XG5pZiAodHlwZW9mKGNvbnNvbGUpID09PSAndW5kZWZpbmVkJykge1xuICBjb25zb2xlID0ge1xuICAgIHdhcm46IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGFsZXJ0KG1zZyk7XG4gICAgfSxcbiAgICBsb2c6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGFsZXJ0KG1zZyk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKG1zZykge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgdGhyb3cgbXNnO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDb21tb24gcmVnZXhlcy5cbiAqIFdlIGRlY2xhcmUgc29tZSBjb21tb24gcmVnZXhlcyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gKi9cbnNob3dkb3duLmhlbHBlci5yZWdleGVzID0ge1xuICBhc3Rlcmlza0FuZERhc2g6IC8oWypfXSkvZ1xufTtcblxyXG4vKipcbiAqIENyZWF0ZWQgYnkgRXN0ZXZhbyBvbiAzMS0wNS0yMDE1LlxuICovXG5cbi8qKlxuICogU2hvd2Rvd24gQ29udmVydGVyIGNsYXNzXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udmVydGVyT3B0aW9uc11cbiAqIEByZXR1cm5zIHtDb252ZXJ0ZXJ9XG4gKi9cbnNob3dkb3duLkNvbnZlcnRlciA9IGZ1bmN0aW9uIChjb252ZXJ0ZXJPcHRpb25zKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXJcbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyB1c2VkIGJ5IHRoaXMgY29udmVydGVyXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge3t9fVxuICAgICAgICovXG4gICAgICBvcHRpb25zID0ge30sXG5cbiAgICAgIC8qKlxuICAgICAgICogTGFuZ3VhZ2UgZXh0ZW5zaW9ucyB1c2VkIGJ5IHRoaXMgY29udmVydGVyXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICovXG4gICAgICBsYW5nRXh0ZW5zaW9ucyA9IFtdLFxuXG4gICAgICAvKipcbiAgICAgICAqIE91dHB1dCBtb2RpZmllcnMgZXh0ZW5zaW9ucyB1c2VkIGJ5IHRoaXMgY29udmVydGVyXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICovXG4gICAgICBvdXRwdXRNb2RpZmllcnMgPSBbXSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBsaXN0ZW5lcnNcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7e319XG4gICAgICAgKi9cbiAgICAgIGxpc3RlbmVycyA9IHt9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBmbGF2b3Igc2V0IGluIHRoaXMgY29udmVydGVyXG4gICAgICAgKi9cbiAgICAgIHNldENvbnZGbGF2b3IgPSBzZXRGbGF2b3I7XG5cbiAgX2NvbnN0cnVjdG9yKCk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnRlciBjb25zdHJ1Y3RvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2NvbnN0cnVjdG9yICgpIHtcbiAgICBjb252ZXJ0ZXJPcHRpb25zID0gY29udmVydGVyT3B0aW9ucyB8fCB7fTtcblxuICAgIGZvciAodmFyIGdPcHQgaW4gZ2xvYmFsT3B0aW9ucykge1xuICAgICAgaWYgKGdsb2JhbE9wdGlvbnMuaGFzT3duUHJvcGVydHkoZ09wdCkpIHtcbiAgICAgICAgb3B0aW9uc1tnT3B0XSA9IGdsb2JhbE9wdGlvbnNbZ09wdF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2Ugb3B0aW9uc1xuICAgIGlmICh0eXBlb2YgY29udmVydGVyT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAodmFyIG9wdCBpbiBjb252ZXJ0ZXJPcHRpb25zKSB7XG4gICAgICAgIGlmIChjb252ZXJ0ZXJPcHRpb25zLmhhc093blByb3BlcnR5KG9wdCkpIHtcbiAgICAgICAgICBvcHRpb25zW29wdF0gPSBjb252ZXJ0ZXJPcHRpb25zW29wdF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ0NvbnZlcnRlciBleHBlY3RzIHRoZSBwYXNzZWQgcGFyYW1ldGVyIHRvIGJlIGFuIG9iamVjdCwgYnV0ICcgKyB0eXBlb2YgY29udmVydGVyT3B0aW9ucyArXG4gICAgICAnIHdhcyBwYXNzZWQgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5leHRlbnNpb25zKSB7XG4gICAgICBzaG93ZG93bi5oZWxwZXIuZm9yRWFjaChvcHRpb25zLmV4dGVuc2lvbnMsIF9wYXJzZUV4dGVuc2lvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGV4dGVuc2lvblxuICAgKiBAcGFyYW0geyp9IGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9JyddXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfcGFyc2VFeHRlbnNpb24gKGV4dCwgbmFtZSkge1xuXG4gICAgbmFtZSA9IG5hbWUgfHwgbnVsbDtcbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB0aGUgZXh0ZW5zaW9uIHdhcyBwcmV2aW91c2x5IGxvYWRlZFxuICAgIGlmIChzaG93ZG93bi5oZWxwZXIuaXNTdHJpbmcoZXh0KSkge1xuICAgICAgZXh0ID0gc2hvd2Rvd24uaGVscGVyLnN0ZEV4dE5hbWUoZXh0KTtcbiAgICAgIG5hbWUgPSBleHQ7XG5cbiAgICAgIC8vIExFR0FDWV9TVVBQT1JUIENPREVcbiAgICAgIGlmIChzaG93ZG93bi5leHRlbnNpb25zW2V4dF0pIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdERVBSRUNBVElPTiBXQVJOSU5HOiAnICsgZXh0ICsgJyBpcyBhbiBvbGQgZXh0ZW5zaW9uIHRoYXQgdXNlcyBhIGRlcHJlY2F0ZWQgbG9hZGluZyBtZXRob2QuJyArXG4gICAgICAgICAgJ1BsZWFzZSBpbmZvcm0gdGhlIGRldmVsb3BlciB0aGF0IHRoZSBleHRlbnNpb24gc2hvdWxkIGJlIHVwZGF0ZWQhJyk7XG4gICAgICAgIGxlZ2FjeUV4dGVuc2lvbkxvYWRpbmcoc2hvd2Rvd24uZXh0ZW5zaW9uc1tleHRdLCBleHQpO1xuICAgICAgICByZXR1cm47XG4gICAgICAvLyBFTkQgTEVHQUNZIFNVUFBPUlQgQ09ERVxuXG4gICAgICB9IGVsc2UgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNVbmRlZmluZWQoZXh0ZW5zaW9uc1tleHRdKSkge1xuICAgICAgICBleHQgPSBleHRlbnNpb25zW2V4dF07XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKCdFeHRlbnNpb24gXCInICsgZXh0ICsgJ1wiIGNvdWxkIG5vdCBiZSBsb2FkZWQuIEl0IHdhcyBlaXRoZXIgbm90IGZvdW5kIG9yIGlzIG5vdCBhIHZhbGlkIGV4dGVuc2lvbi4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXh0ID0gZXh0KCk7XG4gICAgfVxuXG4gICAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNBcnJheShleHQpKSB7XG4gICAgICBleHQgPSBbZXh0XTtcbiAgICB9XG5cbiAgICB2YXIgdmFsaWRFeHQgPSB2YWxpZGF0ZShleHQsIG5hbWUpO1xuICAgIGlmICghdmFsaWRFeHQudmFsaWQpIHtcbiAgICAgIHRocm93IEVycm9yKHZhbGlkRXh0LmVycm9yKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dC5sZW5ndGg7ICsraSkge1xuICAgICAgc3dpdGNoIChleHRbaV0udHlwZSkge1xuXG4gICAgICAgIGNhc2UgJ2xhbmcnOlxuICAgICAgICAgIGxhbmdFeHRlbnNpb25zLnB1c2goZXh0W2ldKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvdXRwdXQnOlxuICAgICAgICAgIG91dHB1dE1vZGlmaWVycy5wdXNoKGV4dFtpXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoZXh0W2ldLmhhc093blByb3BlcnR5KCdsaXN0ZW5lcnMnKSkge1xuICAgICAgICBmb3IgKHZhciBsbiBpbiBleHRbaV0ubGlzdGVuZXJzKSB7XG4gICAgICAgICAgaWYgKGV4dFtpXS5saXN0ZW5lcnMuaGFzT3duUHJvcGVydHkobG4pKSB7XG4gICAgICAgICAgICBsaXN0ZW4obG4sIGV4dFtpXS5saXN0ZW5lcnNbbG5dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBMRUdBQ1lfU1VQUE9SVFxuICAgKiBAcGFyYW0geyp9IGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gbGVnYWN5RXh0ZW5zaW9uTG9hZGluZyAoZXh0LCBuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV4dCA9IGV4dChuZXcgc2hvd2Rvd24uQ29udmVydGVyKCkpO1xuICAgIH1cbiAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc0FycmF5KGV4dCkpIHtcbiAgICAgIGV4dCA9IFtleHRdO1xuICAgIH1cbiAgICB2YXIgdmFsaWQgPSB2YWxpZGF0ZShleHQsIG5hbWUpO1xuXG4gICAgaWYgKCF2YWxpZC52YWxpZCkge1xuICAgICAgdGhyb3cgRXJyb3IodmFsaWQuZXJyb3IpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBzd2l0Y2ggKGV4dFtpXS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2xhbmcnOlxuICAgICAgICAgIGxhbmdFeHRlbnNpb25zLnB1c2goZXh0W2ldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb3V0cHV0JzpcbiAgICAgICAgICBvdXRwdXRNb2RpZmllcnMucHVzaChleHRbaV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0Oi8vIHNob3VsZCBuZXZlciByZWFjaCBoZXJlXG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ0V4dGVuc2lvbiBsb2FkZXIgZXJyb3I6IFR5cGUgdW5yZWNvZ25pemVkISEhJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbiB0byBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgZnVuY3Rpb24gbGlzdGVuIChuYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghc2hvd2Rvd24uaGVscGVyLmlzU3RyaW5nKG5hbWUpKSB7XG4gICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBpbiBjb252ZXJ0ZXIubGlzdGVuKCkgbWV0aG9kOiBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIGJ1dCAnICsgdHlwZW9mIG5hbWUgKyAnIGdpdmVuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgaW4gY29udmVydGVyLmxpc3RlbigpIG1ldGhvZDogY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgJyArIHR5cGVvZiBjYWxsYmFjayArICcgZ2l2ZW4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWxpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgbGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuICAgIGxpc3RlbmVyc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJUcmltSW5wdXRUZXh0ICh0ZXh0KSB7XG4gICAgdmFyIHJzcCA9IHRleHQubWF0Y2goL15cXHMqLylbMF0ubGVuZ3RoLFxuICAgICAgICByZ3ggPSBuZXcgUmVnRXhwKCdeXFxcXHN7MCwnICsgcnNwICsgJ30nLCAnZ20nKTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJneCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGFuIGV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnROYW1lIEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGV4dFxuICAgKiBAcGFyYW0ge3t9fSBvcHRpb25zIENvbnZlcnRlciBPcHRpb25zXG4gICAqIEBwYXJhbSB7e319IGdsb2JhbHNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHRoaXMuX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2ggKGV2dE5hbWUsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgICBpZiAobGlzdGVuZXJzLmhhc093blByb3BlcnR5KGV2dE5hbWUpKSB7XG4gICAgICBmb3IgKHZhciBlaSA9IDA7IGVpIDwgbGlzdGVuZXJzW2V2dE5hbWVdLmxlbmd0aDsgKytlaSkge1xuICAgICAgICB2YXIgblRleHQgPSBsaXN0ZW5lcnNbZXZ0TmFtZV1bZWldKGV2dE5hbWUsIHRleHQsIHRoaXMsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICBpZiAoblRleHQgJiYgdHlwZW9mIG5UZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRleHQgPSBuVGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICAvKipcbiAgICogTGlzdGVuIHRvIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtzaG93ZG93bi5Db252ZXJ0ZXJ9XG4gICAqL1xuICB0aGlzLmxpc3RlbiA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIGxpc3RlbihuYW1lLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgbWFya2Rvd24gc3RyaW5nIGludG8gSFRNTFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHRoaXMubWFrZUh0bWwgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIC8vY2hlY2sgaWYgdGV4dCBpcyBub3QgZmFsc3lcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIHZhciBnbG9iYWxzID0ge1xuICAgICAgZ0h0bWxCbG9ja3M6ICAgICBbXSxcbiAgICAgIGdIdG1sTWRCbG9ja3M6ICAgW10sXG4gICAgICBnSHRtbFNwYW5zOiAgICAgIFtdLFxuICAgICAgZ1VybHM6ICAgICAgICAgICB7fSxcbiAgICAgIGdUaXRsZXM6ICAgICAgICAge30sXG4gICAgICBnRGltZW5zaW9uczogICAgIHt9LFxuICAgICAgZ0xpc3RMZXZlbDogICAgICAwLFxuICAgICAgaGFzaExpbmtDb3VudHM6ICB7fSxcbiAgICAgIGxhbmdFeHRlbnNpb25zOiAgbGFuZ0V4dGVuc2lvbnMsXG4gICAgICBvdXRwdXRNb2RpZmllcnM6IG91dHB1dE1vZGlmaWVycyxcbiAgICAgIGNvbnZlcnRlcjogICAgICAgdGhpcyxcbiAgICAgIGdoQ29kZUJsb2NrczogICAgW11cbiAgICB9O1xuXG4gICAgLy8gVGhpcyBsZXRzIHVzIHVzZSDCqCB0cmVtYSBhcyBhbiBlc2NhcGUgY2hhciB0byBhdm9pZCBtZDUgaGFzaGVzXG4gICAgLy8gVGhlIGNob2ljZSBvZiBjaGFyYWN0ZXIgaXMgYXJiaXRyYXJ5OyBhbnl0aGluZyB0aGF0IGlzbid0XG4gICAgLy8gbWFnaWMgaW4gTWFya2Rvd24gd2lsbCB3b3JrLlxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoL2csICfCqFQnKTtcblxuICAgIC8vIFJlcGxhY2UgJCB3aXRoIMKoRFxuICAgIC8vIFJlZ0V4cCBpbnRlcnByZXRzICQgYXMgYSBzcGVjaWFsIGNoYXJhY3RlclxuICAgIC8vIHdoZW4gaXQncyBpbiBhIHJlcGxhY2VtZW50IHN0cmluZ1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcJC9nLCAnwqhEJyk7XG5cbiAgICAvLyBTdGFuZGFyZGl6ZSBsaW5lIGVuZGluZ3NcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHJcXG4vZywgJ1xcbicpOyAvLyBET1MgdG8gVW5peFxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcci9nLCAnXFxuJyk7IC8vIE1hYyB0byBVbml4XG5cbiAgICAvLyBTdGFyZGFyZGl6ZSBsaW5lIHNwYWNlcyAobmJzcCBjYXVzZXMgdHJvdWJsZSBpbiBvbGRlciBicm93c2VycyBhbmQgc29tZSByZWdleCBmbGF2b3JzKVxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcdTAwQTAvZywgJyAnKTtcblxuICAgIGlmIChvcHRpb25zLnNtYXJ0SW5kZW50YXRpb25GaXgpIHtcbiAgICAgIHRleHQgPSByVHJpbUlucHV0VGV4dCh0ZXh0KTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgdGV4dCBiZWdpbnMgYW5kIGVuZHMgd2l0aCBhIGNvdXBsZSBvZiBuZXdsaW5lczpcbiAgICB0ZXh0ID0gJ1xcblxcbicgKyB0ZXh0ICsgJ1xcblxcbic7XG5cbiAgICAvLyBkZXRhYlxuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2RldGFiJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgICAvKipcbiAgICAgKiBTdHJpcCBhbnkgbGluZXMgY29uc2lzdGluZyBvbmx5IG9mIHNwYWNlcyBhbmQgdGFicy5cbiAgICAgKiBUaGlzIG1ha2VzIHN1YnNlcXVlbnQgcmVnZXhzIGVhc2llciB0byB3cml0ZSwgYmVjYXVzZSB3ZSBjYW5cbiAgICAgKiBtYXRjaCBjb25zZWN1dGl2ZSBibGFuayBsaW5lcyB3aXRoIC9cXG4rLyBpbnN0ZWFkIG9mIHNvbWV0aGluZ1xuICAgICAqIGNvbnRvcnRlZCBsaWtlIC9bIFxcdF0qXFxuKy9cbiAgICAgKi9cbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eWyBcXHRdKyQvbWcsICcnKTtcblxuICAgIC8vcnVuIGxhbmd1YWdlRXh0ZW5zaW9uc1xuICAgIHNob3dkb3duLmhlbHBlci5mb3JFYWNoKGxhbmdFeHRlbnNpb25zLCBmdW5jdGlvbiAoZXh0KSB7XG4gICAgICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdydW5FeHRlbnNpb24nKShleHQsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIH0pO1xuXG4gICAgLy8gcnVuIHRoZSBzdWIgcGFyc2Vyc1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hQcmVDb2RlVGFncycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2dpdGh1YkNvZGVCbG9ja3MnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoSFRNTEJsb2NrcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hDb2RlVGFncycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3N0cmlwTGlua0RlZmluaXRpb25zJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignYmxvY2tHYW11dCcpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3VuaGFzaEhUTUxTcGFucycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3VuZXNjYXBlU3BlY2lhbENoYXJzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgICAvLyBhdHRhY2tsYWI6IFJlc3RvcmUgZG9sbGFyIHNpZ25zXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqhEL2csICckJCcpO1xuXG4gICAgLy8gYXR0YWNrbGFiOiBSZXN0b3JlIHRyZW1hc1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoVC9nLCAnwqgnKTtcblxuICAgIC8vIFJ1biBvdXRwdXQgbW9kaWZpZXJzXG4gICAgc2hvd2Rvd24uaGVscGVyLmZvckVhY2gob3V0cHV0TW9kaWZpZXJzLCBmdW5jdGlvbiAoZXh0KSB7XG4gICAgICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdydW5FeHRlbnNpb24nKShleHQsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBhbiBvcHRpb24gb2YgdGhpcyBDb252ZXJ0ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqL1xuICB0aGlzLnNldE9wdGlvbiA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgb3B0aW9uc1trZXldID0gdmFsdWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3B0aW9uIG9mIHRoaXMgQ29udmVydGVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICB0aGlzLmdldE9wdGlvbiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gb3B0aW9uc1trZXldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9wdGlvbnMgb2YgdGhpcyBDb252ZXJ0ZXIgaW5zdGFuY2VcbiAgICogQHJldHVybnMge3t9fVxuICAgKi9cbiAgdGhpcy5nZXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgZXh0ZW5zaW9uIHRvIFRISVMgY29udmVydGVyXG4gICAqIEBwYXJhbSB7e319IGV4dGVuc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9bnVsbF1cbiAgICovXG4gIHRoaXMuYWRkRXh0ZW5zaW9uID0gZnVuY3Rpb24gKGV4dGVuc2lvbiwgbmFtZSkge1xuICAgIG5hbWUgPSBuYW1lIHx8IG51bGw7XG4gICAgX3BhcnNlRXh0ZW5zaW9uKGV4dGVuc2lvbiwgbmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVzZSBhIGdsb2JhbCByZWdpc3RlcmVkIGV4dGVuc2lvbiB3aXRoIFRISVMgY29udmVydGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbnNpb25OYW1lIE5hbWUgb2YgdGhlIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCBleHRlbnNpb25cbiAgICovXG4gIHRoaXMudXNlRXh0ZW5zaW9uID0gZnVuY3Rpb24gKGV4dGVuc2lvbk5hbWUpIHtcbiAgICBfcGFyc2VFeHRlbnNpb24oZXh0ZW5zaW9uTmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZmxhdm9yIFRISVMgY29udmVydGVyIHNob3VsZCB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIHRoaXMuc2V0Rmxhdm9yID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoIWZsYXZvci5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgdGhyb3cgRXJyb3IobmFtZSArICcgZmxhdm9yIHdhcyBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgdmFyIHByZXNldCA9IGZsYXZvcltuYW1lXTtcbiAgICBzZXRDb252Rmxhdm9yID0gbmFtZTtcbiAgICBmb3IgKHZhciBvcHRpb24gaW4gcHJlc2V0KSB7XG4gICAgICBpZiAocHJlc2V0Lmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gcHJlc2V0W29wdGlvbl07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnRseSBzZXQgZmxhdm9yIG9mIHRoaXMgY29udmVydGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB0aGlzLmdldEZsYXZvciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2V0Q29udkZsYXZvcjtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV4dGVuc2lvbiBmcm9tIFRISVMgY29udmVydGVyLlxuICAgKiBOb3RlOiBUaGlzIGlzIGEgY29zdGx5IG9wZXJhdGlvbi4gSXQncyBiZXR0ZXIgdG8gaW5pdGlhbGl6ZSBhIG5ldyBjb252ZXJ0ZXJcbiAgICogYW5kIHNwZWNpZnkgdGhlIGV4dGVuc2lvbnMgeW91IHdpc2ggdG8gdXNlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4dGVuc2lvblxuICAgKi9cbiAgdGhpcy5yZW1vdmVFeHRlbnNpb24gPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XG4gICAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNBcnJheShleHRlbnNpb24pKSB7XG4gICAgICBleHRlbnNpb24gPSBbZXh0ZW5zaW9uXTtcbiAgICB9XG4gICAgZm9yICh2YXIgYSA9IDA7IGEgPCBleHRlbnNpb24ubGVuZ3RoOyArK2EpIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb25bYV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhbmdFeHRlbnNpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChsYW5nRXh0ZW5zaW9uc1tpXSA9PT0gZXh0KSB7XG4gICAgICAgICAgbGFuZ0V4dGVuc2lvbnNbaV0uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgb3V0cHV0TW9kaWZpZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChvdXRwdXRNb2RpZmllcnNbaWldID09PSBleHQpIHtcbiAgICAgICAgICBvdXRwdXRNb2RpZmllcnNbaWldLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogR2V0IGFsbCBleHRlbnNpb24gb2YgVEhJUyBjb252ZXJ0ZXJcbiAgICogQHJldHVybnMge3tsYW5ndWFnZTogQXJyYXksIG91dHB1dDogQXJyYXl9fVxuICAgKi9cbiAgdGhpcy5nZXRBbGxFeHRlbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogbGFuZ0V4dGVuc2lvbnMsXG4gICAgICBvdXRwdXQ6IG91dHB1dE1vZGlmaWVyc1xuICAgIH07XG4gIH07XG59O1xuXHJcbi8qKlxuICogVHVybiBNYXJrZG93biBsaW5rIHNob3J0Y3V0cyBpbnRvIFhIVE1MIDxhPiB0YWdzLlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2FuY2hvcnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnYW5jaG9ycy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB2YXIgd3JpdGVBbmNob3JUYWcgPSBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbGlua1RleHQsIGxpbmtJZCwgdXJsLCBtNSwgbTYsIHRpdGxlKSB7XG4gICAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZCh0aXRsZSkpIHtcbiAgICAgIHRpdGxlID0gJyc7XG4gICAgfVxuICAgIGxpbmtJZCA9IGxpbmtJZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciBleHBsaWNpdCBlbXB0eSB1cmxcbiAgICBpZiAod2hvbGVNYXRjaC5zZWFyY2goL1xcKDw/XFxzKj4/ID8oWydcIl0uKlsnXCJdKT9cXCkkL20pID4gLTEpIHtcbiAgICAgIHVybCA9ICcnO1xuICAgIH0gZWxzZSBpZiAoIXVybCkge1xuICAgICAgaWYgKCFsaW5rSWQpIHtcbiAgICAgICAgLy8gbG93ZXItY2FzZSBhbmQgdHVybiBlbWJlZGRlZCBuZXdsaW5lcyBpbnRvIHNwYWNlc1xuICAgICAgICBsaW5rSWQgPSBsaW5rVGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyA/XFxuL2csICcgJyk7XG4gICAgICB9XG4gICAgICB1cmwgPSAnIycgKyBsaW5rSWQ7XG5cbiAgICAgIGlmICghc2hvd2Rvd24uaGVscGVyLmlzVW5kZWZpbmVkKGdsb2JhbHMuZ1VybHNbbGlua0lkXSkpIHtcbiAgICAgICAgdXJsID0gZ2xvYmFscy5nVXJsc1tsaW5rSWRdO1xuICAgICAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChnbG9iYWxzLmdUaXRsZXNbbGlua0lkXSkpIHtcbiAgICAgICAgICB0aXRsZSA9IGdsb2JhbHMuZ1RpdGxlc1tsaW5rSWRdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd2hvbGVNYXRjaDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL3VybCA9IHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzKHVybCwgJypfJywgZmFsc2UpOyAvLyByZXBsYWNlZCBsaW5lIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICB1cmwgPSB1cmwucmVwbGFjZShzaG93ZG93bi5oZWxwZXIucmVnZXhlcy5hc3Rlcmlza0FuZERhc2gsIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuXG4gICAgdmFyIHJlc3VsdCA9ICc8YSBocmVmPVwiJyArIHVybCArICdcIic7XG5cbiAgICBpZiAodGl0bGUgIT09ICcnICYmIHRpdGxlICE9PSBudWxsKSB7XG4gICAgICB0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICAgIC8vdGl0bGUgPSBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVycyh0aXRsZSwgJypfJywgZmFsc2UpOyAvLyByZXBsYWNlZCBsaW5lIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICAgIHRpdGxlID0gdGl0bGUucmVwbGFjZShzaG93ZG93bi5oZWxwZXIucmVnZXhlcy5hc3Rlcmlza0FuZERhc2gsIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuICAgICAgcmVzdWx0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9wZW5MaW5rc0luTmV3V2luZG93KSB7XG4gICAgICAvLyBlc2NhcGVkIF9cbiAgICAgIHJlc3VsdCArPSAnIHRhcmdldD1cIsKoRTk1RWJsYW5rXCInO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSAnPicgKyBsaW5rVGV4dCArICc8L2E+JztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gRmlyc3QsIGhhbmRsZSByZWZlcmVuY2Utc3R5bGUgbGlua3M6IFtsaW5rIHRleHRdIFtpZF1cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxbKCg/OlxcW1teXFxdXSpdfFteXFxbXFxdXSkqKV0gPyg/OlxcbiAqKT9cXFsoLio/KV0oKSgpKCkoKS9nLCB3cml0ZUFuY2hvclRhZyk7XG5cbiAgLy8gTmV4dCwgaW5saW5lLXN0eWxlIGxpbmtzOiBbbGluayB0ZXh0XSh1cmwgXCJvcHRpb25hbCB0aXRsZVwiKVxuICAvLyBjYXNlcyB3aXRoIGNyYXp5IHVybHMgbGlrZSAuL2ltYWdlL2NhdDEpLnBuZ1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXFsoKD86XFxbW15cXF1dKl18W15cXFtcXF1dKSopXSgpWyBcXHRdKlxcKFsgXFx0XT88KFtePl0qKT4oPzpbIFxcdF0qKChbXCInXSkoW15cIl0qPylcXDUpKT9bIFxcdF0/XFwpL2csXG4gICAgd3JpdGVBbmNob3JUYWcpO1xuXG4gIC8vIG5vcm1hbCBjYXNlc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXFsoKD86XFxbW15cXF1dKl18W15cXFtcXF1dKSopXSgpWyBcXHRdKlxcKFsgXFx0XT88PyhbXFxTXSs/KD86XFwoW1xcU10qP1xcKVtcXFNdKj8pPyk+Pyg/OlsgXFx0XSooKFtcIiddKShbXlwiXSo/KVxcNSkpP1sgXFx0XT9cXCkvZyxcbiAgICAgICAgICAgICAgICAgICAgICB3cml0ZUFuY2hvclRhZyk7XG5cbiAgLy8gaGFuZGxlIHJlZmVyZW5jZS1zdHlsZSBzaG9ydGN1dHM6IFtsaW5rIHRleHRdXG4gIC8vIFRoZXNlIG11c3QgY29tZSBsYXN0IGluIGNhc2UgeW91J3ZlIGFsc28gZ290IFtsaW5rIHRlc3RdWzFdXG4gIC8vIG9yIFtsaW5rIHRlc3RdKC9mb28pXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcWyhbXlxcW1xcXV0rKV0oKSgpKCkoKSgpL2csIHdyaXRlQW5jaG9yVGFnKTtcblxuICAvLyBMYXN0bHkgaGFuZGxlIEdpdGh1Yk1lbnRpb25zIGlmIG9wdGlvbiBpcyBlbmFibGVkXG4gIGlmIChvcHRpb25zLmdoTWVudGlvbnMpIHtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXnxcXHMpKFxcXFwpPyhAKFthLXpcXGRcXC1dKykpKD89Wy4hPzssW1xcXSgpXXxcXHN8JCkvZ21pLCBmdW5jdGlvbiAod20sIHN0LCBlc2NhcGUsIG1lbnRpb25zLCB1c2VybmFtZSkge1xuICAgICAgaWYgKGVzY2FwZSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIHJldHVybiBzdCArIG1lbnRpb25zO1xuICAgICAgfVxuXG4gICAgICAvL2NoZWNrIGlmIG9wdGlvbnMuZ2hNZW50aW9uc0xpbmsgaXMgYSBzdHJpbmdcbiAgICAgIGlmICghc2hvd2Rvd24uaGVscGVyLmlzU3RyaW5nKG9wdGlvbnMuZ2hNZW50aW9uc0xpbmspKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2hNZW50aW9uc0xpbmsgb3B0aW9uIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cbiAgICAgIHZhciBsbmsgPSBvcHRpb25zLmdoTWVudGlvbnNMaW5rLnJlcGxhY2UoL1xce3V9L2csIHVzZXJuYW1lKTtcbiAgICAgIHJldHVybiBzdCArICc8YSBocmVmPVwiJyArIGxuayArICdcIj4nICsgbWVudGlvbnMgKyAnPC9hPic7XG4gICAgfSk7XG4gIH1cblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdhbmNob3JzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLy8gdXJsIGFsbG93ZWQgY2hhcnMgW2EtelxcZF8ufjovPyNbXUAhJCYnKCkqKyw7PS1dXG5cbnZhciBzaW1wbGVVUkxSZWdleCAgPSAvXFxiKCgoaHR0cHM/fGZ0cHxkaWN0KTpcXC9cXC98d3d3XFwuKVteJ1wiPlxcc10rXFwuW14nXCI+XFxzXSspKCkoPz1cXHN8JCkoPyFbXCI8Pl0pL2dpLFxuICAgIHNpbXBsZVVSTFJlZ2V4MiA9IC9cXGIoKChodHRwcz98ZnRwfGRpY3QpOlxcL1xcL3x3d3dcXC4pW14nXCI+XFxzXStcXC5bXidcIj5cXHNdKz8pKFsuIT8sKClcXFtcXF1dPykoPz1cXHN8JCkoPyFbXCI8Pl0pL2dpLFxuICAgIC8vc2ltcGxlVVJMUmVnZXgzID0gL1xcYigoKGh0dHBzP3xmdHApOlxcL1xcL3x3d3dcXC4pW2EtelxcZC4tXStcXC5bYS16XFxkXy5+Oi8/I1xcW1xcXUAhJCYnKCkqKyw7PS1dKz8pKFsuIT8oKV0/KSg/PVxcc3wkKSg/IVtcIjw+XSkvZ2ksXG4gICAgZGVsaW1VcmxSZWdleCAgID0gLzwoKChodHRwcz98ZnRwfGRpY3QpOlxcL1xcL3x3d3dcXC4pW14nXCI+XFxzXSspKCk+L2dpLFxuICAgIHNpbXBsZU1haWxSZWdleCA9IC8oXnxcXHMpKD86bWFpbHRvOik/KFtBLVphLXowLTkhIyQlJicqKy0vPT9eX2B7fH1+Ll0rQFstYS16MC05XSsoXFwuWy1hLXowLTldKykqXFwuW2Etel0rKSg/PSR8XFxzKS9nbWksXG4gICAgZGVsaW1NYWlsUmVnZXggID0gLzwoKSg/Om1haWx0bzopPyhbLS5cXHddK0BbLWEtejAtOV0rKFxcLlstYS16MC05XSspKlxcLlthLXpdKyk+L2dpLFxuXG4gICAgcmVwbGFjZUxpbmsgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHdtLCBsaW5rLCBtMiwgbTMsIHRyYWlsaW5nUHVuY3R1YXRpb24pIHtcbiAgICAgICAgdmFyIGxua1R4dCA9IGxpbmssXG4gICAgICAgICAgICBhcHBlbmQgPSAnJyxcbiAgICAgICAgICAgIHRhcmdldCA9ICcnO1xuICAgICAgICBpZiAoL153d3dcXC4vaS50ZXN0KGxpbmspKSB7XG4gICAgICAgICAgbGluayA9IGxpbmsucmVwbGFjZSgvXnd3d1xcLi9pLCAnaHR0cDovL3d3dy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5leGNsdWRlVHJhaWxpbmdQdW5jdHVhdGlvbkZyb21VUkxzICYmIHRyYWlsaW5nUHVuY3R1YXRpb24pIHtcbiAgICAgICAgICBhcHBlbmQgPSB0cmFpbGluZ1B1bmN0dWF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm9wZW5MaW5rc0luTmV3V2luZG93KSB7XG4gICAgICAgICAgdGFyZ2V0ID0gJyB0YXJnZXQ9XCLCqEU5NUVibGFua1wiJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzxhIGhyZWY9XCInICsgbGluayArICdcIicgKyB0YXJnZXQgKyAnPicgKyBsbmtUeHQgKyAnPC9hPicgKyBhcHBlbmQ7XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICByZXBsYWNlTWFpbCA9IGZ1bmN0aW9uIChvcHRpb25zLCBnbG9iYWxzKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHdob2xlTWF0Y2gsIGIsIG1haWwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSAnbWFpbHRvOic7XG4gICAgICAgIGIgPSBiIHx8ICcnO1xuICAgICAgICBtYWlsID0gc2hvd2Rvd24uc3ViUGFyc2VyKCd1bmVzY2FwZVNwZWNpYWxDaGFycycpKG1haWwsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICBpZiAob3B0aW9ucy5lbmNvZGVFbWFpbHMpIHtcbiAgICAgICAgICBocmVmID0gc2hvd2Rvd24uaGVscGVyLmVuY29kZUVtYWlsQWRkcmVzcyhocmVmICsgbWFpbCk7XG4gICAgICAgICAgbWFpbCA9IHNob3dkb3duLmhlbHBlci5lbmNvZGVFbWFpbEFkZHJlc3MobWFpbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHJlZiA9IGhyZWYgKyBtYWlsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiICsgJzxhIGhyZWY9XCInICsgaHJlZiArICdcIj4nICsgbWFpbCArICc8L2E+JztcbiAgICAgIH07XG4gICAgfTtcblxuc2hvd2Rvd24uc3ViUGFyc2VyKCdhdXRvTGlua3MnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnYXV0b0xpbmtzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoZGVsaW1VcmxSZWdleCwgcmVwbGFjZUxpbmsob3B0aW9ucykpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGRlbGltTWFpbFJlZ2V4LCByZXBsYWNlTWFpbChvcHRpb25zLCBnbG9iYWxzKSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnYXV0b0xpbmtzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59KTtcblxuc2hvd2Rvd24uc3ViUGFyc2VyKCdzaW1wbGlmaWVkQXV0b0xpbmtzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmICghb3B0aW9ucy5zaW1wbGlmaWVkQXV0b0xpbmspIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3NpbXBsaWZpZWRBdXRvTGlua3MuYmVmb3JlJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgaWYgKG9wdGlvbnMuZXhjbHVkZVRyYWlsaW5nUHVuY3R1YXRpb25Gcm9tVVJMcykge1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2Uoc2ltcGxlVVJMUmVnZXgyLCByZXBsYWNlTGluayhvcHRpb25zKSk7XG4gIH0gZWxzZSB7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZShzaW1wbGVVUkxSZWdleCwgcmVwbGFjZUxpbmsob3B0aW9ucykpO1xuICB9XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2Uoc2ltcGxlTWFpbFJlZ2V4LCByZXBsYWNlTWFpbChvcHRpb25zLCBnbG9iYWxzKSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnc2ltcGxpZmllZEF1dG9MaW5rcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBUaGVzZSBhcmUgYWxsIHRoZSB0cmFuc2Zvcm1hdGlvbnMgdGhhdCBmb3JtIGJsb2NrLWxldmVsXG4gKiB0YWdzIGxpa2UgcGFyYWdyYXBocywgaGVhZGVycywgYW5kIGxpc3QgaXRlbXMuXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignYmxvY2tHYW11dCcsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdibG9ja0dhbXV0LmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIHdlIHBhcnNlIGJsb2NrcXVvdGVzIGZpcnN0IHNvIHRoYXQgd2UgY2FuIGhhdmUgaGVhZGluZ3MgYW5kIGhyc1xuICAvLyBpbnNpZGUgYmxvY2txdW90ZXNcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignYmxvY2tRdW90ZXMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignaGVhZGVycycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIERvIEhvcml6b250YWwgUnVsZXM6XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hvcml6b250YWxSdWxlJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignbGlzdHMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignY29kZUJsb2NrcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCd0YWJsZXMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBXZSBhbHJlYWR5IHJhbiBfSGFzaEhUTUxCbG9ja3MoKSBiZWZvcmUsIGluIE1hcmtkb3duKCksIGJ1dCB0aGF0XG4gIC8vIHdhcyB0byBlc2NhcGUgcmF3IEhUTUwgaW4gdGhlIG9yaWdpbmFsIE1hcmtkb3duIHNvdXJjZS4gVGhpcyB0aW1lLFxuICAvLyB3ZSdyZSBlc2NhcGluZyB0aGUgbWFya3VwIHdlJ3ZlIGp1c3QgY3JlYXRlZCwgc28gdGhhdCB3ZSBkb24ndCB3cmFwXG4gIC8vIDxwPiB0YWdzIGFyb3VuZCBibG9jay1sZXZlbCB0YWdzLlxuICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoSFRNTEJsb2NrcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdwYXJhZ3JhcGhzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnYmxvY2tHYW11dC5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuc2hvd2Rvd24uc3ViUGFyc2VyKCdibG9ja1F1b3RlcycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdibG9ja1F1b3Rlcy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oKF4gezAsM30+WyBcXHRdPy4rXFxuKC4rXFxuKSpcXG4qKSspL2dtLCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEpIHtcbiAgICB2YXIgYnEgPSBtMTtcblxuICAgIC8vIGF0dGFja2xhYjogaGFjayBhcm91bmQgS29ucXVlcm9yIDMuNS40IGJ1ZzpcbiAgICAvLyBcIi0tLS0tLS0tLS1idWdcIi5yZXBsYWNlKC9eLS9nLFwiXCIpID09IFwiYnVnXCJcbiAgICBicSA9IGJxLnJlcGxhY2UoL15bIFxcdF0qPlsgXFx0XT8vZ20sICfCqDAnKTsgLy8gdHJpbSBvbmUgbGV2ZWwgb2YgcXVvdGluZ1xuXG4gICAgLy8gYXR0YWNrbGFiOiBjbGVhbiB1cCBoYWNrXG4gICAgYnEgPSBicS5yZXBsYWNlKC/CqDAvZywgJycpO1xuXG4gICAgYnEgPSBicS5yZXBsYWNlKC9eWyBcXHRdKyQvZ20sICcnKTsgLy8gdHJpbSB3aGl0ZXNwYWNlLW9ubHkgbGluZXNcbiAgICBicSA9IHNob3dkb3duLnN1YlBhcnNlcignZ2l0aHViQ29kZUJsb2NrcycpKGJxLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICBicSA9IHNob3dkb3duLnN1YlBhcnNlcignYmxvY2tHYW11dCcpKGJxLCBvcHRpb25zLCBnbG9iYWxzKTsgLy8gcmVjdXJzZVxuXG4gICAgYnEgPSBicS5yZXBsYWNlKC8oXnxcXG4pL2csICckMSAgJyk7XG4gICAgLy8gVGhlc2UgbGVhZGluZyBzcGFjZXMgc2NyZXcgd2l0aCA8cHJlPiBjb250ZW50LCBzbyB3ZSBuZWVkIHRvIGZpeCB0aGF0OlxuICAgIGJxID0gYnEucmVwbGFjZSgvKFxccyo8cHJlPlteXFxyXSs/PFxcL3ByZT4pL2dtLCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEpIHtcbiAgICAgIHZhciBwcmUgPSBtMTtcbiAgICAgIC8vIGF0dGFja2xhYjogaGFjayBhcm91bmQgS29ucXVlcm9yIDMuNS40IGJ1ZzpcbiAgICAgIHByZSA9IHByZS5yZXBsYWNlKC9eICAvbWcsICfCqDAnKTtcbiAgICAgIHByZSA9IHByZS5yZXBsYWNlKC/CqDAvZywgJycpO1xuICAgICAgcmV0dXJuIHByZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycpKCc8YmxvY2txdW90ZT5cXG4nICsgYnEgKyAnXFxuPC9ibG9ja3F1b3RlPicsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICB9KTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdibG9ja1F1b3Rlcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICByZXR1cm4gdGV4dDtcbn0pO1xuXHJcbi8qKlxuICogUHJvY2VzcyBNYXJrZG93biBgPHByZT48Y29kZT5gIGJsb2Nrcy5cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdjb2RlQmxvY2tzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2NvZGVCbG9ja3MuYmVmb3JlJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgLy8gc2VudGluZWwgd29ya2Fyb3VuZHMgZm9yIGxhY2sgb2YgXFxBIGFuZCBcXFosIHNhZmFyaVxca2h0bWwgYnVnXG4gIHRleHQgKz0gJ8KoMCc7XG5cbiAgdmFyIHBhdHRlcm4gPSAvKD86XFxuXFxufF4pKCg/Oig/OlsgXXs0fXxcXHQpLipcXG4rKSspKFxcbipbIF17MCwzfVteIFxcdFxcbl18KD89wqgwKSkvZztcbiAgdGV4dCA9IHRleHQucmVwbGFjZShwYXR0ZXJuLCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEsIG0yKSB7XG4gICAgdmFyIGNvZGVibG9jayA9IG0xLFxuICAgICAgICBuZXh0Q2hhciA9IG0yLFxuICAgICAgICBlbmQgPSAnXFxuJztcblxuICAgIGNvZGVibG9jayA9IHNob3dkb3duLnN1YlBhcnNlcignb3V0ZGVudCcpKGNvZGVibG9jaywgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgY29kZWJsb2NrID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVDb2RlJykoY29kZWJsb2NrLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICBjb2RlYmxvY2sgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2RldGFiJykoY29kZWJsb2NrLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICBjb2RlYmxvY2sgPSBjb2RlYmxvY2sucmVwbGFjZSgvXlxcbisvZywgJycpOyAvLyB0cmltIGxlYWRpbmcgbmV3bGluZXNcbiAgICBjb2RlYmxvY2sgPSBjb2RlYmxvY2sucmVwbGFjZSgvXFxuKyQvZywgJycpOyAvLyB0cmltIHRyYWlsaW5nIG5ld2xpbmVzXG5cbiAgICBpZiAob3B0aW9ucy5vbWl0RXh0cmFXTEluQ29kZUJsb2Nrcykge1xuICAgICAgZW5kID0gJyc7XG4gICAgfVxuXG4gICAgY29kZWJsb2NrID0gJzxwcmU+PGNvZGU+JyArIGNvZGVibG9jayArIGVuZCArICc8L2NvZGU+PC9wcmU+JztcblxuICAgIHJldHVybiBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycpKGNvZGVibG9jaywgb3B0aW9ucywgZ2xvYmFscykgKyBuZXh0Q2hhcjtcbiAgfSk7XG5cbiAgLy8gc3RyaXAgc2VudGluZWxcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqgwLywgJycpO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2NvZGVCbG9ja3MuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqXG4gKiAgICogIEJhY2t0aWNrIHF1b3RlcyBhcmUgdXNlZCBmb3IgPGNvZGU+PC9jb2RlPiBzcGFucy5cbiAqXG4gKiAgICogIFlvdSBjYW4gdXNlIG11bHRpcGxlIGJhY2t0aWNrcyBhcyB0aGUgZGVsaW1pdGVycyBpZiB5b3Ugd2FudCB0b1xuICogICAgIGluY2x1ZGUgbGl0ZXJhbCBiYWNrdGlja3MgaW4gdGhlIGNvZGUgc3Bhbi4gU28sIHRoaXMgaW5wdXQ6XG4gKlxuICogICAgICAgICBKdXN0IHR5cGUgYGBmb28gYGJhcmAgYmF6YGAgYXQgdGhlIHByb21wdC5cbiAqXG4gKiAgICAgICBXaWxsIHRyYW5zbGF0ZSB0bzpcbiAqXG4gKiAgICAgICAgIDxwPkp1c3QgdHlwZSA8Y29kZT5mb28gYGJhcmAgYmF6PC9jb2RlPiBhdCB0aGUgcHJvbXB0LjwvcD5cbiAqXG4gKiAgICBUaGVyZSdzIG5vIGFyYml0cmFyeSBsaW1pdCB0byB0aGUgbnVtYmVyIG9mIGJhY2t0aWNrcyB5b3VcbiAqICAgIGNhbiB1c2UgYXMgZGVsaW10ZXJzLiBJZiB5b3UgbmVlZCB0aHJlZSBjb25zZWN1dGl2ZSBiYWNrdGlja3NcbiAqICAgIGluIHlvdXIgY29kZSwgdXNlIGZvdXIgZm9yIGRlbGltaXRlcnMsIGV0Yy5cbiAqXG4gKiAgKiAgWW91IGNhbiB1c2Ugc3BhY2VzIHRvIGdldCBsaXRlcmFsIGJhY2t0aWNrcyBhdCB0aGUgZWRnZXM6XG4gKlxuICogICAgICAgICAuLi4gdHlwZSBgYCBgYmFyYCBgYCAuLi5cbiAqXG4gKiAgICAgICBUdXJucyB0bzpcbiAqXG4gKiAgICAgICAgIC4uLiB0eXBlIDxjb2RlPmBiYXJgPC9jb2RlPiAuLi5cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdjb2RlU3BhbnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnY29kZVNwYW5zLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIGlmICh0eXBlb2YodGV4dCkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGV4dCA9ICcnO1xuICB9XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhefFteXFxcXF0pKGArKShbXlxccl0qP1teYF0pXFwyKD8hYCkvZ20sXG4gICAgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG0xLCBtMiwgbTMpIHtcbiAgICAgIHZhciBjID0gbTM7XG4gICAgICBjID0gYy5yZXBsYWNlKC9eKFsgXFx0XSopL2csICcnKTtcdC8vIGxlYWRpbmcgd2hpdGVzcGFjZVxuICAgICAgYyA9IGMucmVwbGFjZSgvWyBcXHRdKiQvZywgJycpO1x0Ly8gdHJhaWxpbmcgd2hpdGVzcGFjZVxuICAgICAgYyA9IHNob3dkb3duLnN1YlBhcnNlcignZW5jb2RlQ29kZScpKGMsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgcmV0dXJuIG0xICsgJzxjb2RlPicgKyBjICsgJzwvY29kZT4nO1xuICAgIH1cbiAgKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdjb2RlU3BhbnMuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIENvbnZlcnQgYWxsIHRhYnMgdG8gc3BhY2VzXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignZGV0YWInLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2RldGFiLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIGV4cGFuZCBmaXJzdCBuLTEgdGFic1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHQoPz1cXHQpL2csICcgICAgJyk7IC8vIGdfdGFiX3dpZHRoXG5cbiAgLy8gcmVwbGFjZSB0aGUgbnRoIHdpdGggdHdvIHNlbnRpbmVsc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHQvZywgJ8KoQcKoQicpO1xuXG4gIC8vIHVzZSB0aGUgc2VudGluZWwgdG8gYW5jaG9yIG91ciByZWdleCBzbyBpdCBkb2Vzbid0IGV4cGxvZGVcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqhCKC4rPynCqEEvZywgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG0xKSB7XG4gICAgdmFyIGxlYWRpbmdUZXh0ID0gbTEsXG4gICAgICAgIG51bVNwYWNlcyA9IDQgLSBsZWFkaW5nVGV4dC5sZW5ndGggJSA0OyAgLy8gZ190YWJfd2lkdGhcblxuICAgIC8vIHRoZXJlICptdXN0KiBiZSBhIGJldHRlciB3YXkgdG8gZG8gdGhpczpcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVNwYWNlczsgaSsrKSB7XG4gICAgICBsZWFkaW5nVGV4dCArPSAnICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYWRpbmdUZXh0O1xuICB9KTtcblxuICAvLyBjbGVhbiB1cCBzZW50aW5lbHNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqhBL2csICcgICAgJyk7ICAvLyBnX3RhYl93aWR0aFxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/CqEIvZywgJycpO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2RldGFiLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBTbWFydCBwcm9jZXNzaW5nIGZvciBhbXBlcnNhbmRzIGFuZCBhbmdsZSBicmFja2V0cyB0aGF0IG5lZWQgdG8gYmUgZW5jb2RlZC5cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVBbXBzQW5kQW5nbGVzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdlbmNvZGVBbXBzQW5kQW5nbGVzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIEFtcGVyc2FuZC1lbmNvZGluZyBiYXNlZCBlbnRpcmVseSBvbiBOYXQgSXJvbnMncyBBbXB1dGF0b3IgTVQgcGx1Z2luOlxuICAvLyBodHRwOi8vYnVtcHBvLm5ldC9wcm9qZWN0cy9hbXB1dGF0b3IvXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyYoPyEjP1t4WF0/KD86WzAtOWEtZkEtRl0rfFxcdyspOykvZywgJyZhbXA7Jyk7XG5cbiAgLy8gRW5jb2RlIG5ha2VkIDwnc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88KD8hW2EtelxcLz8kIV0pL2dpLCAnJmx0OycpO1xuXG4gIC8vIEVuY29kZSA8XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcblxuICAvLyBFbmNvZGUgPlxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnZW5jb2RlQW1wc0FuZEFuZ2xlcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICByZXR1cm4gdGV4dDtcbn0pO1xuXHJcbi8qKlxuICogUmV0dXJucyB0aGUgc3RyaW5nLCB3aXRoIGFmdGVyIHByb2Nlc3NpbmcgdGhlIGZvbGxvd2luZyBiYWNrc2xhc2ggZXNjYXBlIHNlcXVlbmNlcy5cbiAqXG4gKiBhdHRhY2tsYWI6IFRoZSBwb2xpdGUgd2F5IHRvIGRvIHRoaXMgaXMgd2l0aCB0aGUgbmV3IGVzY2FwZUNoYXJhY3RlcnMoKSBmdW5jdGlvbjpcbiAqXG4gKiAgICB0ZXh0ID0gZXNjYXBlQ2hhcmFjdGVycyh0ZXh0LFwiXFxcXFwiLHRydWUpO1xuICogICAgdGV4dCA9IGVzY2FwZUNoYXJhY3RlcnModGV4dCxcImAqX3t9W10oKT4jKy0uIVwiLHRydWUpO1xuICpcbiAqIC4uLmJ1dCB3ZSdyZSBzaWRlc3RlcHBpbmcgaXRzIHVzZSBvZiB0aGUgKHNsb3cpIFJlZ0V4cCBjb25zdHJ1Y3RvclxuICogYXMgYW4gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiAgVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhIExPVC5cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVCYWNrc2xhc2hFc2NhcGVzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdlbmNvZGVCYWNrc2xhc2hFc2NhcGVzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFwoXFxcXCkvZywgc2hvd2Rvd24uaGVscGVyLmVzY2FwZUNoYXJhY3RlcnNDYWxsYmFjayk7XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFwoW2AqX3t9XFxbXFxdKCk+IysuIX49fC1dKS9nLCBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdlbmNvZGVCYWNrc2xhc2hFc2NhcGVzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBFbmNvZGUvZXNjYXBlIGNlcnRhaW4gY2hhcmFjdGVycyBpbnNpZGUgTWFya2Rvd24gY29kZSBydW5zLlxuICogVGhlIHBvaW50IGlzIHRoYXQgaW4gY29kZSwgdGhlc2UgY2hhcmFjdGVycyBhcmUgbGl0ZXJhbHMsXG4gKiBhbmQgbG9zZSB0aGVpciBzcGVjaWFsIE1hcmtkb3duIG1lYW5pbmdzLlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2VuY29kZUNvZGUnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnZW5jb2RlQ29kZS5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBFbmNvZGUgYWxsIGFtcGVyc2FuZHM7IEhUTUwgZW50aXRpZXMgYXJlIG5vdFxuICAvLyBlbnRpdGllcyB3aXRoaW4gYSBNYXJrZG93biBjb2RlIHNwYW4uXG4gIHRleHQgPSB0ZXh0XG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgLy8gRG8gdGhlIGFuZ2xlIGJyYWNrZXQgc29uZyBhbmQgZGFuY2U6XG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgLy8gTm93LCBlc2NhcGUgY2hhcmFjdGVycyB0aGF0IGFyZSBtYWdpYyBpbiBNYXJrZG93bjpcbiAgICAucmVwbGFjZSgvKFsqX3t9XFxbXFxdXFxcXD1+LV0pL2csIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2VuY29kZUNvZGUuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIFdpdGhpbiB0YWdzIC0tIG1lYW5pbmcgYmV0d2VlbiA8IGFuZCA+IC0tIGVuY29kZSBbXFwgYCAqIF8gfiA9XSBzbyB0aGV5XG4gKiBkb24ndCBjb25mbGljdCB3aXRoIHRoZWlyIHVzZSBpbiBNYXJrZG93biBmb3IgY29kZSwgaXRhbGljcyBhbmQgc3Ryb25nLlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2VzY2FwZVNwZWNpYWxDaGFyc1dpdGhpblRhZ0F0dHJpYnV0ZXMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2VzY2FwZVNwZWNpYWxDaGFyc1dpdGhpblRhZ0F0dHJpYnV0ZXMuYmVmb3JlJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgLy8gQnVpbGQgYSByZWdleCB0byBmaW5kIEhUTUwgdGFncyBhbmQgY29tbWVudHMuICBTZWUgRnJpZWRsJ3NcbiAgLy8gXCJNYXN0ZXJpbmcgUmVndWxhciBFeHByZXNzaW9uc1wiLCAybmQgRWQuLCBwcC4gMjAwLTIwMS5cbiAgdmFyIHJlZ2V4ID0gLyg8W2EtelxcLyEkXShcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPnw8ISgtLS4qPy0tXFxzKikrPikvZ2k7XG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZShyZWdleCwgZnVuY3Rpb24gKHdob2xlTWF0Y2gpIHtcbiAgICByZXR1cm4gd2hvbGVNYXRjaFxuICAgICAgLnJlcGxhY2UoLyguKTxcXC8/Y29kZT4oPz0uKS9nLCAnJDFgJylcbiAgICAgIC5yZXBsYWNlKC8oW1xcXFxgKl9+PXxdKS9nLCBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrKTtcbiAgfSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnZXNjYXBlU3BlY2lhbENoYXJzV2l0aGluVGFnQXR0cmlidXRlcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICByZXR1cm4gdGV4dDtcbn0pO1xuXHJcbi8qKlxuICogSGFuZGxlIGdpdGh1YiBjb2RlYmxvY2tzIHByaW9yIHRvIHJ1bm5pbmcgSGFzaEhUTUwgc28gdGhhdFxuICogSFRNTCBjb250YWluZWQgd2l0aGluIHRoZSBjb2RlYmxvY2sgZ2V0cyBlc2NhcGVkIHByb3Blcmx5XG4gKiBFeGFtcGxlOlxuICogYGBgcnVieVxuICogICAgIGRlZiBoZWxsb193b3JsZCh4KVxuICogICAgICAgcHV0cyBcIkhlbGxvLCAje3h9XCJcbiAqICAgICBlbmRcbiAqIGBgYFxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2dpdGh1YkNvZGVCbG9ja3MnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gZWFybHkgZXhpdCBpZiBvcHRpb24gaXMgbm90IGVuYWJsZWRcbiAgaWYgKCFvcHRpb25zLmdoQ29kZUJsb2Nrcykge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnZ2l0aHViQ29kZUJsb2Nrcy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB0ZXh0ICs9ICfCqDAnO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxuKWBgYCguKilcXG4oW1xcc1xcU10qPylcXG5gYGAvZywgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIGxhbmd1YWdlLCBjb2RlYmxvY2spIHtcbiAgICB2YXIgZW5kID0gKG9wdGlvbnMub21pdEV4dHJhV0xJbkNvZGVCbG9ja3MpID8gJycgOiAnXFxuJztcblxuICAgIC8vIEZpcnN0IHBhcnNlIHRoZSBnaXRodWIgY29kZSBibG9ja1xuICAgIGNvZGVibG9jayA9IHNob3dkb3duLnN1YlBhcnNlcignZW5jb2RlQ29kZScpKGNvZGVibG9jaywgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgY29kZWJsb2NrID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdkZXRhYicpKGNvZGVibG9jaywgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgY29kZWJsb2NrID0gY29kZWJsb2NrLnJlcGxhY2UoL15cXG4rL2csICcnKTsgLy8gdHJpbSBsZWFkaW5nIG5ld2xpbmVzXG4gICAgY29kZWJsb2NrID0gY29kZWJsb2NrLnJlcGxhY2UoL1xcbiskL2csICcnKTsgLy8gdHJpbSB0cmFpbGluZyB3aGl0ZXNwYWNlXG5cbiAgICBjb2RlYmxvY2sgPSAnPHByZT48Y29kZScgKyAobGFuZ3VhZ2UgPyAnIGNsYXNzPVwiJyArIGxhbmd1YWdlICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2UgKyAnXCInIDogJycpICsgJz4nICsgY29kZWJsb2NrICsgZW5kICsgJzwvY29kZT48L3ByZT4nO1xuXG4gICAgY29kZWJsb2NrID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoQmxvY2snKShjb2RlYmxvY2ssIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gICAgLy8gU2luY2UgR0hDb2RlYmxvY2tzIGNhbiBiZSBmYWxzZSBwb3NpdGl2ZXMsIHdlIG5lZWQgdG9cbiAgICAvLyBzdG9yZSB0aGUgcHJpbWl0aXZlIHRleHQgYW5kIHRoZSBwYXJzZWQgdGV4dCBpbiBhIGdsb2JhbCB2YXIsXG4gICAgLy8gYW5kIHRoZW4gcmV0dXJuIGEgdG9rZW5cbiAgICByZXR1cm4gJ1xcblxcbsKoRycgKyAoZ2xvYmFscy5naENvZGVCbG9ja3MucHVzaCh7dGV4dDogd2hvbGVNYXRjaCwgY29kZWJsb2NrOiBjb2RlYmxvY2t9KSAtIDEpICsgJ0dcXG5cXG4nO1xuICB9KTtcblxuICAvLyBhdHRhY2tsYWI6IHN0cmlwIHNlbnRpbmVsXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoMC8sICcnKTtcblxuICByZXR1cm4gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdnaXRodWJDb2RlQmxvY2tzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaGFzaEJsb2NrLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXlxcbit8XFxuKyQpL2csICcnKTtcbiAgdGV4dCA9ICdcXG5cXG7CqEsnICsgKGdsb2JhbHMuZ0h0bWxCbG9ja3MucHVzaCh0ZXh0KSAtIDEpICsgJ0tcXG5cXG4nO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoQmxvY2suYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIEhhc2ggYW5kIGVzY2FwZSA8Y29kZT4gZWxlbWVudHMgdGhhdCBzaG91bGQgbm90IGJlIHBhcnNlZCBhcyBtYXJrZG93blxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hDb2RlVGFncycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaGFzaENvZGVUYWdzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHZhciByZXBGdW5jID0gZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG1hdGNoLCBsZWZ0LCByaWdodCkge1xuICAgIHZhciBjb2RlYmxvY2sgPSBsZWZ0ICsgc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVDb2RlJykobWF0Y2gsIG9wdGlvbnMsIGdsb2JhbHMpICsgcmlnaHQ7XG4gICAgcmV0dXJuICfCqEMnICsgKGdsb2JhbHMuZ0h0bWxTcGFucy5wdXNoKGNvZGVibG9jaykgLSAxKSArICdDJztcbiAgfTtcblxuICAvLyBIYXNoIG5ha2VkIDxjb2RlPlxuICB0ZXh0ID0gc2hvd2Rvd24uaGVscGVyLnJlcGxhY2VSZWN1cnNpdmVSZWdFeHAodGV4dCwgcmVwRnVuYywgJzxjb2RlXFxcXGJbXj5dKj4nLCAnPC9jb2RlPicsICdnaW0nKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoQ29kZVRhZ3MuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hFbGVtZW50JywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHJldHVybiBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEpIHtcbiAgICB2YXIgYmxvY2tUZXh0ID0gbTE7XG5cbiAgICAvLyBVbmRvIGRvdWJsZSBsaW5lc1xuICAgIGJsb2NrVGV4dCA9IGJsb2NrVGV4dC5yZXBsYWNlKC9cXG5cXG4vZywgJ1xcbicpO1xuICAgIGJsb2NrVGV4dCA9IGJsb2NrVGV4dC5yZXBsYWNlKC9eXFxuLywgJycpO1xuXG4gICAgLy8gc3RyaXAgdHJhaWxpbmcgYmxhbmsgbGluZXNcbiAgICBibG9ja1RleHQgPSBibG9ja1RleHQucmVwbGFjZSgvXFxuKyQvZywgJycpO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgZWxlbWVudCB0ZXh0IHdpdGggYSBtYXJrZXIgKFwiwqhLeEtcIiB3aGVyZSB4IGlzIGl0cyBrZXkpXG4gICAgYmxvY2tUZXh0ID0gJ1xcblxcbsKoSycgKyAoZ2xvYmFscy5nSHRtbEJsb2Nrcy5wdXNoKGJsb2NrVGV4dCkgLSAxKSArICdLXFxuXFxuJztcblxuICAgIHJldHVybiBibG9ja1RleHQ7XG4gIH07XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hIVE1MQmxvY2tzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoSFRNTEJsb2Nrcy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB2YXIgYmxvY2tUYWdzID0gW1xuICAgICAgICAncHJlJyxcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICdoMScsXG4gICAgICAgICdoMicsXG4gICAgICAgICdoMycsXG4gICAgICAgICdoNCcsXG4gICAgICAgICdoNScsXG4gICAgICAgICdoNicsXG4gICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgJ3RhYmxlJyxcbiAgICAgICAgJ2RsJyxcbiAgICAgICAgJ29sJyxcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgJ3NjcmlwdCcsXG4gICAgICAgICdub3NjcmlwdCcsXG4gICAgICAgICdmb3JtJyxcbiAgICAgICAgJ2ZpZWxkc2V0JyxcbiAgICAgICAgJ2lmcmFtZScsXG4gICAgICAgICdtYXRoJyxcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2Zvb3RlcicsXG4gICAgICAgICduYXYnLFxuICAgICAgICAnYXJ0aWNsZScsXG4gICAgICAgICdhc2lkZScsXG4gICAgICAgICdhZGRyZXNzJyxcbiAgICAgICAgJ2F1ZGlvJyxcbiAgICAgICAgJ2NhbnZhcycsXG4gICAgICAgICdmaWd1cmUnLFxuICAgICAgICAnaGdyb3VwJyxcbiAgICAgICAgJ291dHB1dCcsXG4gICAgICAgICd2aWRlbycsXG4gICAgICAgICdwJ1xuICAgICAgXSxcbiAgICAgIHJlcEZ1bmMgPSBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbWF0Y2gsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHZhciB0eHQgPSB3aG9sZU1hdGNoO1xuICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGh0bWwgZWxlbWVudCBpcyBtYXJrZWQgYXMgbWFya2Rvd25cbiAgICAgICAgLy8gaWYgc28sIGl0J3MgY29udGVudHMgc2hvdWxkIGJlIHBhcnNlZCBhcyBtYXJrZG93blxuICAgICAgICBpZiAobGVmdC5zZWFyY2goL1xcYm1hcmtkb3duXFxiLykgIT09IC0xKSB7XG4gICAgICAgICAgdHh0ID0gbGVmdCArIGdsb2JhbHMuY29udmVydGVyLm1ha2VIdG1sKG1hdGNoKSArIHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnXFxuXFxuwqhLJyArIChnbG9iYWxzLmdIdG1sQmxvY2tzLnB1c2godHh0KSAtIDEpICsgJ0tcXG5cXG4nO1xuICAgICAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrVGFncy5sZW5ndGg7ICsraSkge1xuXG4gICAgdmFyIG9wVGFnUG9zLFxuICAgICAgICByZ3gxICAgICA9IG5ldyBSZWdFeHAoJ14gezAsM308JyArIGJsb2NrVGFnc1tpXSArICdcXFxcYltePl0qPicsICdpbScpLFxuICAgICAgICBwYXRMZWZ0ICA9ICc8JyArIGJsb2NrVGFnc1tpXSArICdcXFxcYltePl0qPicsXG4gICAgICAgIHBhdFJpZ2h0ID0gJzwvJyArIGJsb2NrVGFnc1tpXSArICc+JztcbiAgICAvLyAxLiBMb29rIGZvciB0aGUgZmlyc3QgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9wZW5pbmcgSFRNTCB0YWcgaW4gdGhlIHRleHRcbiAgICB3aGlsZSAoKG9wVGFnUG9zID0gc2hvd2Rvd24uaGVscGVyLnJlZ2V4SW5kZXhPZih0ZXh0LCByZ3gxKSkgIT09IC0xKSB7XG4gICAgICAvLzIuIFNwbGl0IHRoZSB0ZXh0IGluIHRoYXQgcG9zaXRpb25cbiAgICAgIHZhciBzdWJUZXh0cyA9IHNob3dkb3duLmhlbHBlci5zcGxpdEF0SW5kZXgodGV4dCwgb3BUYWdQb3MpLFxuICAgICAgLy8zLiBNYXRjaCByZWN1cnNpdmVseVxuICAgICAgICAgIG5ld1N1YlRleHQxID0gc2hvd2Rvd24uaGVscGVyLnJlcGxhY2VSZWN1cnNpdmVSZWdFeHAoc3ViVGV4dHNbMV0sIHJlcEZ1bmMsIHBhdExlZnQsIHBhdFJpZ2h0LCAnaW0nKTtcblxuICAgICAgLy8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICBpZiAobmV3U3ViVGV4dDEgPT09IHN1YlRleHRzWzFdKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGV4dCA9IHN1YlRleHRzWzBdLmNvbmNhdChuZXdTdWJUZXh0MSk7XG4gICAgfVxuICB9XG4gIC8vIEhSIFNQRUNJQUwgQ0FTRVxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFxuIHswLDN9KDwoaHIpXFxiKFtePD5dKSo/XFwvPz4pWyBcXHRdKig/PVxcbnsyLH0pKS9nLFxuICAgIHNob3dkb3duLnN1YlBhcnNlcignaGFzaEVsZW1lbnQnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSk7XG5cbiAgLy8gU3BlY2lhbCBjYXNlIGZvciBzdGFuZGFsb25lIEhUTUwgY29tbWVudHNcbiAgdGV4dCA9IHNob3dkb3duLmhlbHBlci5yZXBsYWNlUmVjdXJzaXZlUmVnRXhwKHRleHQsIGZ1bmN0aW9uICh0eHQpIHtcbiAgICByZXR1cm4gJ1xcblxcbsKoSycgKyAoZ2xvYmFscy5nSHRtbEJsb2Nrcy5wdXNoKHR4dCkgLSAxKSArICdLXFxuXFxuJztcbiAgfSwgJ14gezAsM308IS0tJywgJy0tPicsICdnbScpO1xuXG4gIC8vIFBIUCBhbmQgQVNQLXN0eWxlIHByb2Nlc3NvciBpbnN0cnVjdGlvbnMgKDw/Li4uPz4gYW5kIDwlLi4uJT4pXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyg/OlxcblxcbikoIHswLDN9KD86PChbPyVdKVteXFxyXSo/XFwyPilbIFxcdF0qKD89XFxuezIsfSkpL2csXG4gICAgc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoRWxlbWVudCcpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoSFRNTEJsb2Nrcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICByZXR1cm4gdGV4dDtcbn0pO1xuXHJcbi8qKlxuICogSGFzaCBzcGFuIGVsZW1lbnRzIHRoYXQgc2hvdWxkIG5vdCBiZSBwYXJzZWQgYXMgbWFya2Rvd25cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoSFRNTFNwYW5zJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoSFRNTFNwYW5zLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIGZ1bmN0aW9uIGhhc2hIVE1MU3BhbiAoaHRtbCkge1xuICAgIHJldHVybiAnwqhDJyArIChnbG9iYWxzLmdIdG1sU3BhbnMucHVzaChodG1sKSAtIDEpICsgJ0MnO1xuICB9XG5cbiAgLy8gSGFzaCBTZWxmIENsb3NpbmcgdGFnc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88W14+XSs/XFwvPi9naSwgZnVuY3Rpb24gKHdtKSB7XG4gICAgcmV0dXJuIGhhc2hIVE1MU3Bhbih3bSk7XG4gIH0pO1xuXG4gIC8vIEhhc2ggdGFncyB3aXRob3V0IHByb3BlcnRpZXNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvPChbXj5dKz8pPltcXHNcXFNdKj88XFwvXFwxPi9nLCBmdW5jdGlvbiAod20pIHtcbiAgICByZXR1cm4gaGFzaEhUTUxTcGFuKHdtKTtcbiAgfSk7XG5cbiAgLy8gSGFzaCB0YWdzIHdpdGggcHJvcGVydGllc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88KFtePl0rPylcXHNbXj5dKz8+W1xcc1xcU10qPzxcXC9cXDE+L2csIGZ1bmN0aW9uICh3bSkge1xuICAgIHJldHVybiBoYXNoSFRNTFNwYW4od20pO1xuICB9KTtcblxuICAvLyBIYXNoIHNlbGYgY2xvc2luZyB0YWdzIHdpdGhvdXQgLz5cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvPFtePl0rPz4vZ2ksIGZ1bmN0aW9uICh3bSkge1xuICAgIHJldHVybiBoYXNoSFRNTFNwYW4od20pO1xuICB9KTtcblxuICAvKnNob3dkb3duLmhlbHBlci5tYXRjaFJlY3Vyc2l2ZVJlZ0V4cCh0ZXh0LCAnPGNvZGVcXFxcYltePl0qPicsICc8L2NvZGU+JywgJ2dpJyk7Ki9cblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoSFRNTFNwYW5zLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cbi8qKlxuICogVW5oYXNoIEhUTUwgc3BhbnNcbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCd1bmhhc2hIVE1MU3BhbnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3VuaGFzaEhUTUxTcGFucy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGdsb2JhbHMuZ0h0bWxTcGFucy5sZW5ndGg7ICsraSkge1xuICAgIHZhciByZXBUZXh0ID0gZ2xvYmFscy5nSHRtbFNwYW5zW2ldLFxuICAgICAgICAvLyBsaW1pdGVyIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCAoYXNzdW1lIDEwIGFzIGxpbWl0IGZvciByZWN1cnNlKVxuICAgICAgICBsaW1pdCA9IDA7XG5cbiAgICB3aGlsZSAoL8KoQyhcXGQrKUMvLnRlc3QocmVwVGV4dCkpIHtcbiAgICAgIHZhciBudW0gPSBSZWdFeHAuJDE7XG4gICAgICByZXBUZXh0ID0gcmVwVGV4dC5yZXBsYWNlKCfCqEMnICsgbnVtICsgJ0MnLCBnbG9iYWxzLmdIdG1sU3BhbnNbbnVtXSk7XG4gICAgICBpZiAobGltaXQgPT09IDEwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgKytsaW1pdDtcbiAgICB9XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgnwqhDJyArIGkgKyAnQycsIHJlcFRleHQpO1xuICB9XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgndW5oYXNoSFRNTFNwYW5zLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBIYXNoIGFuZCBlc2NhcGUgPHByZT48Y29kZT4gZWxlbWVudHMgdGhhdCBzaG91bGQgbm90IGJlIHBhcnNlZCBhcyBtYXJrZG93blxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hQcmVDb2RlVGFncycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaGFzaFByZUNvZGVUYWdzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHZhciByZXBGdW5jID0gZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG1hdGNoLCBsZWZ0LCByaWdodCkge1xuICAgIC8vIGVuY29kZSBodG1sIGVudGl0aWVzXG4gICAgdmFyIGNvZGVibG9jayA9IGxlZnQgKyBzaG93ZG93bi5zdWJQYXJzZXIoJ2VuY29kZUNvZGUnKShtYXRjaCwgb3B0aW9ucywgZ2xvYmFscykgKyByaWdodDtcbiAgICByZXR1cm4gJ1xcblxcbsKoRycgKyAoZ2xvYmFscy5naENvZGVCbG9ja3MucHVzaCh7dGV4dDogd2hvbGVNYXRjaCwgY29kZWJsb2NrOiBjb2RlYmxvY2t9KSAtIDEpICsgJ0dcXG5cXG4nO1xuICB9O1xuXG4gIC8vIEhhc2ggPHByZT48Y29kZT5cbiAgdGV4dCA9IHNob3dkb3duLmhlbHBlci5yZXBsYWNlUmVjdXJzaXZlUmVnRXhwKHRleHQsIHJlcEZ1bmMsICdeIHswLDN9PHByZVxcXFxiW14+XSo+XFxcXHMqPGNvZGVcXFxcYltePl0qPicsICdeIHswLDN9PC9jb2RlPlxcXFxzKjwvcHJlPicsICdnaW0nKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoUHJlQ29kZVRhZ3MuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hlYWRlcnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaGVhZGVycy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB2YXIgaGVhZGVyTGV2ZWxTdGFydCA9IChpc05hTihwYXJzZUludChvcHRpb25zLmhlYWRlckxldmVsU3RhcnQpKSkgPyAxIDogcGFyc2VJbnQob3B0aW9ucy5oZWFkZXJMZXZlbFN0YXJ0KSxcbiAgICAgIGdoSGVhZGVySWQgPSBvcHRpb25zLmdoQ29tcGF0aWJsZUhlYWRlcklkLFxuXG4gIC8vIFNldCB0ZXh0LXN0eWxlIGhlYWRlcnM6XG4gIC8vXHRIZWFkZXIgMVxuICAvL1x0PT09PT09PT1cbiAgLy9cbiAgLy9cdEhlYWRlciAyXG4gIC8vXHQtLS0tLS0tLVxuICAvL1xuICAgICAgc2V0ZXh0UmVnZXhIMSA9IChvcHRpb25zLnNtb290aExpdmVQcmV2aWV3KSA/IC9eKC4rKVsgXFx0XSpcXG49ezIsfVsgXFx0XSpcXG4rL2dtIDogL14oLispWyBcXHRdKlxcbj0rWyBcXHRdKlxcbisvZ20sXG4gICAgICBzZXRleHRSZWdleEgyID0gKG9wdGlvbnMuc21vb3RoTGl2ZVByZXZpZXcpID8gL14oLispWyBcXHRdKlxcbi17Mix9WyBcXHRdKlxcbisvZ20gOiAvXiguKylbIFxcdF0qXFxuLStbIFxcdF0qXFxuKy9nbTtcblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHNldGV4dFJlZ2V4SDEsIGZ1bmN0aW9uICh3aG9sZU1hdGNoLCBtMSkge1xuXG4gICAgdmFyIHNwYW5HYW11dCA9IHNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JykobTEsIG9wdGlvbnMsIGdsb2JhbHMpLFxuICAgICAgICBoSUQgPSAob3B0aW9ucy5ub0hlYWRlcklkKSA/ICcnIDogJyBpZD1cIicgKyBoZWFkZXJJZChtMSkgKyAnXCInLFxuICAgICAgICBoTGV2ZWwgPSBoZWFkZXJMZXZlbFN0YXJ0LFxuICAgICAgICBoYXNoQmxvY2sgPSAnPGgnICsgaExldmVsICsgaElEICsgJz4nICsgc3BhbkdhbXV0ICsgJzwvaCcgKyBoTGV2ZWwgKyAnPic7XG4gICAgcmV0dXJuIHNob3dkb3duLnN1YlBhcnNlcignaGFzaEJsb2NrJykoaGFzaEJsb2NrLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgfSk7XG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZShzZXRleHRSZWdleEgyLCBmdW5jdGlvbiAobWF0Y2hGb3VuZCwgbTEpIHtcbiAgICB2YXIgc3BhbkdhbXV0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdzcGFuR2FtdXQnKShtMSwgb3B0aW9ucywgZ2xvYmFscyksXG4gICAgICAgIGhJRCA9IChvcHRpb25zLm5vSGVhZGVySWQpID8gJycgOiAnIGlkPVwiJyArIGhlYWRlcklkKG0xKSArICdcIicsXG4gICAgICAgIGhMZXZlbCA9IGhlYWRlckxldmVsU3RhcnQgKyAxLFxuICAgICAgICBoYXNoQmxvY2sgPSAnPGgnICsgaExldmVsICsgaElEICsgJz4nICsgc3BhbkdhbXV0ICsgJzwvaCcgKyBoTGV2ZWwgKyAnPic7XG4gICAgcmV0dXJuIHNob3dkb3duLnN1YlBhcnNlcignaGFzaEJsb2NrJykoaGFzaEJsb2NrLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgfSk7XG5cbiAgLy8gYXR4LXN0eWxlIGhlYWRlcnM6XG4gIC8vICAjIEhlYWRlciAxXG4gIC8vICAjIyBIZWFkZXIgMlxuICAvLyAgIyMgSGVhZGVyIDIgd2l0aCBjbG9zaW5nIGhhc2hlcyAjI1xuICAvLyAgLi4uXG4gIC8vICAjIyMjIyMgSGVhZGVyIDZcbiAgLy9cbiAgdmFyIGF0eFN0eWxlID0gKG9wdGlvbnMucmVxdWlyZVNwYWNlQmVmb3JlSGVhZGluZ1RleHQpID8gL14oI3sxLDZ9KVsgXFx0XSsoLis/KVsgXFx0XSojKlxcbisvZ20gOiAvXigjezEsNn0pWyBcXHRdKiguKz8pWyBcXHRdKiMqXFxuKy9nbTtcblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGF0eFN0eWxlLCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEsIG0yKSB7XG4gICAgdmFyIGhUZXh0ID0gbTI7XG4gICAgaWYgKG9wdGlvbnMuY3VzdG9taXplZEhlYWRlcklkKSB7XG4gICAgICBoVGV4dCA9IG0yLnJlcGxhY2UoL1xccz9cXHsoW157XSs/KX1cXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICB2YXIgc3BhbiA9IHNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JykoaFRleHQsIG9wdGlvbnMsIGdsb2JhbHMpLFxuICAgICAgICBoSUQgPSAob3B0aW9ucy5ub0hlYWRlcklkKSA/ICcnIDogJyBpZD1cIicgKyBoZWFkZXJJZChtMikgKyAnXCInLFxuICAgICAgICBoTGV2ZWwgPSBoZWFkZXJMZXZlbFN0YXJ0IC0gMSArIG0xLmxlbmd0aCxcbiAgICAgICAgaGVhZGVyID0gJzxoJyArIGhMZXZlbCArIGhJRCArICc+JyArIHNwYW4gKyAnPC9oJyArIGhMZXZlbCArICc+JztcblxuICAgIHJldHVybiBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycpKGhlYWRlciwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhlYWRlcklkIChtKSB7XG4gICAgdmFyIHRpdGxlO1xuXG4gICAgLy8gSXQgaXMgc2VwYXJhdGUgZnJvbSBvdGhlciBvcHRpb25zIHRvIGFsbG93IGNvbWJpbmluZyBwcmVmaXggYW5kIGN1c3RvbWl6ZWRcbiAgICBpZiAob3B0aW9ucy5jdXN0b21pemVkSGVhZGVySWQpIHtcbiAgICAgIHZhciBtYXRjaCA9IG0ubWF0Y2goL1xceyhbXntdKz8pfVxccyokLyk7XG4gICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgbSA9IG1hdGNoWzFdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByZWZpeCBpZCB0byBwcmV2ZW50IGNhdXNpbmcgaW5hZHZlcnRlbnQgcHJlLWV4aXN0aW5nIHN0eWxlIG1hdGNoZXMuXG4gICAgaWYgKHNob3dkb3duLmhlbHBlci5pc1N0cmluZyhvcHRpb25zLnByZWZpeEhlYWRlcklkKSkge1xuICAgICAgdGl0bGUgPSBvcHRpb25zLnByZWZpeEhlYWRlcklkICsgbTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucHJlZml4SGVhZGVySWQgPT09IHRydWUpIHtcbiAgICAgIHRpdGxlID0gJ3NlY3Rpb24gJyArIG07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gbTtcbiAgICB9XG5cbiAgICBpZiAoZ2hIZWFkZXJJZCkge1xuICAgICAgdGl0bGUgPSB0aXRsZVxuICAgICAgICAucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgICAgIC8vIHJlcGxhY2UgcHJldmlvdXNseSBlc2NhcGVkIGNoYXJzICgmLCDCqCBhbmQgJClcbiAgICAgICAgLnJlcGxhY2UoLyZhbXA7L2csICcnKVxuICAgICAgICAucmVwbGFjZSgvwqhUL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvwqhEL2csICcnKVxuICAgICAgICAvLyByZXBsYWNlIHJlc3Qgb2YgdGhlIGNoYXJzICgmfiQgYXJlIHJlcGVhdGVkIGFzIHRoZXkgbWlnaHQgaGF2ZSBiZWVuIGVzY2FwZWQpXG4gICAgICAgIC8vIGJvcnJvd2VkIGZyb20gZ2l0aHViJ3MgcmVkY2FycGV0IChzb21lIHRoZXkgc2hvdWxkIHByb2R1Y2Ugc2ltaWxhciByZXN1bHRzKVxuICAgICAgICAucmVwbGFjZSgvWyYrJCxcXC86Oz0/QFwiI3t9fF7CqH5cXFtcXF1gXFxcXCopKCUuISc8Pl0vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZSA9IHRpdGxlXG4gICAgICAgIC5yZXBsYWNlKC9bXlxcd10vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWxzLmhhc2hMaW5rQ291bnRzW3RpdGxlXSkge1xuICAgICAgdGl0bGUgPSB0aXRsZSArICctJyArIChnbG9iYWxzLmhhc2hMaW5rQ291bnRzW3RpdGxlXSsrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFscy5oYXNoTGlua0NvdW50c1t0aXRsZV0gPSAxO1xuICAgIH1cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoZWFkZXJzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBUdXJuIE1hcmtkb3duIGxpbmsgc2hvcnRjdXRzIGludG8gWEhUTUwgPGE+IHRhZ3MuXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignaG9yaXpvbnRhbFJ1bGUnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2hvcml6b250YWxSdWxlLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHZhciBrZXkgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycpKCc8aHIgLz4nLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXiB7MCwyfSggPy0pezMsfVsgXFx0XSokL2dtLCBrZXkpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eIHswLDJ9KCA/XFwqKXszLH1bIFxcdF0qJC9nbSwga2V5KTtcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXiB7MCwyfSggP18pezMsfVsgXFx0XSokL2dtLCBrZXkpO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2hvcml6b250YWxSdWxlLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBUdXJuIE1hcmtkb3duIGltYWdlIHNob3J0Y3V0cyBpbnRvIDxpbWc+IHRhZ3MuXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignaW1hZ2VzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2ltYWdlcy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB2YXIgaW5saW5lUmVnRXhwICAgICAgPSAvIVxcWyhbXlxcXV0qPyldWyBcXHRdKigpXFwoWyBcXHRdPzw/KFtcXFNdKz8oPzpcXChbXFxTXSo/XFwpW1xcU10qPyk/KT4/KD86ID0oWypcXGRdK1tBLVphLXolXXswLDR9KXgoWypcXGRdK1tBLVphLXolXXswLDR9KSk/WyBcXHRdKig/OihbXCInXSkoW15cIl0qPylcXDYpP1sgXFx0XT9cXCkvZyxcbiAgICAgIGNyYXp5UmVnRXhwICAgICAgID0gLyFcXFsoW15cXF1dKj8pXVsgXFx0XSooKVxcKFsgXFx0XT88KFtePl0qKT4oPzogPShbKlxcZF0rW0EtWmEteiVdezAsNH0peChbKlxcZF0rW0EtWmEteiVdezAsNH0pKT9bIFxcdF0qKD86KD86KFtcIiddKShbXlwiXSo/KVxcNikpP1sgXFx0XT9cXCkvZyxcbiAgICAgIHJlZmVyZW5jZVJlZ0V4cCAgID0gLyFcXFsoW15cXF1dKj8pXSA/KD86XFxuICopP1xcWyguKj8pXSgpKCkoKSgpKCkvZyxcbiAgICAgIHJlZlNob3J0Y3V0UmVnRXhwID0gLyFcXFsoW15cXFtcXF1dKyldKCkoKSgpKCkoKS9nO1xuXG4gIGZ1bmN0aW9uIHdyaXRlSW1hZ2VUYWcgKHdob2xlTWF0Y2gsIGFsdFRleHQsIGxpbmtJZCwgdXJsLCB3aWR0aCwgaGVpZ2h0LCBtNSwgdGl0bGUpIHtcblxuICAgIHZhciBnVXJscyAgID0gZ2xvYmFscy5nVXJscyxcbiAgICAgICAgZ1RpdGxlcyA9IGdsb2JhbHMuZ1RpdGxlcyxcbiAgICAgICAgZ0RpbXMgICA9IGdsb2JhbHMuZ0RpbWVuc2lvbnM7XG5cbiAgICBsaW5rSWQgPSBsaW5rSWQudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID0gJyc7XG4gICAgfVxuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgZXhwbGljaXQgZW1wdHkgdXJsXG4gICAgaWYgKHdob2xlTWF0Y2guc2VhcmNoKC9cXCg8P1xccyo+PyA/KFsnXCJdLipbJ1wiXSk/XFwpJC9tKSA+IC0xKSB7XG4gICAgICB1cmwgPSAnJztcblxuICAgIH0gZWxzZSBpZiAodXJsID09PSAnJyB8fCB1cmwgPT09IG51bGwpIHtcbiAgICAgIGlmIChsaW5rSWQgPT09ICcnIHx8IGxpbmtJZCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBsb3dlci1jYXNlIGFuZCB0dXJuIGVtYmVkZGVkIG5ld2xpbmVzIGludG8gc3BhY2VzXG4gICAgICAgIGxpbmtJZCA9IGFsdFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gP1xcbi9nLCAnICcpO1xuICAgICAgfVxuICAgICAgdXJsID0gJyMnICsgbGlua0lkO1xuXG4gICAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChnVXJsc1tsaW5rSWRdKSkge1xuICAgICAgICB1cmwgPSBnVXJsc1tsaW5rSWRdO1xuICAgICAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChnVGl0bGVzW2xpbmtJZF0pKSB7XG4gICAgICAgICAgdGl0bGUgPSBnVGl0bGVzW2xpbmtJZF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNVbmRlZmluZWQoZ0RpbXNbbGlua0lkXSkpIHtcbiAgICAgICAgICB3aWR0aCA9IGdEaW1zW2xpbmtJZF0ud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gZ0RpbXNbbGlua0lkXS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB3aG9sZU1hdGNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFsdFRleHQgPSBhbHRUZXh0XG4gICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLy9hbHRUZXh0ID0gc2hvd2Rvd24uaGVscGVyLmVzY2FwZUNoYXJhY3RlcnMoYWx0VGV4dCwgJypfJywgZmFsc2UpO1xuICAgICAgLnJlcGxhY2Uoc2hvd2Rvd24uaGVscGVyLnJlZ2V4ZXMuYXN0ZXJpc2tBbmREYXNoLCBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrKTtcbiAgICAvL3VybCA9IHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzKHVybCwgJypfJywgZmFsc2UpO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKHNob3dkb3duLmhlbHBlci5yZWdleGVzLmFzdGVyaXNrQW5kRGFzaCwgc2hvd2Rvd24uaGVscGVyLmVzY2FwZUNoYXJhY3RlcnNDYWxsYmFjayk7XG4gICAgdmFyIHJlc3VsdCA9ICc8aW1nIHNyYz1cIicgKyB1cmwgKyAnXCIgYWx0PVwiJyArIGFsdFRleHQgKyAnXCInO1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHRpdGxlXG4gICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAgIC8vdGl0bGUgPSBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVycyh0aXRsZSwgJypfJywgZmFsc2UpO1xuICAgICAgICAucmVwbGFjZShzaG93ZG93bi5oZWxwZXIucmVnZXhlcy5hc3Rlcmlza0FuZERhc2gsIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuICAgICAgcmVzdWx0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICAgIH1cblxuICAgIGlmICh3aWR0aCAmJiBoZWlnaHQpIHtcbiAgICAgIHdpZHRoICA9ICh3aWR0aCA9PT0gJyonKSA/ICdhdXRvJyA6IHdpZHRoO1xuICAgICAgaGVpZ2h0ID0gKGhlaWdodCA9PT0gJyonKSA/ICdhdXRvJyA6IGhlaWdodDtcblxuICAgICAgcmVzdWx0ICs9ICcgd2lkdGg9XCInICsgd2lkdGggKyAnXCInO1xuICAgICAgcmVzdWx0ICs9ICcgaGVpZ2h0PVwiJyArIGhlaWdodCArICdcIic7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9ICcgLz4nO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIEZpcnN0LCBoYW5kbGUgcmVmZXJlbmNlLXN0eWxlIGxhYmVsZWQgaW1hZ2VzOiAhW2FsdCB0ZXh0XVtpZF1cbiAgdGV4dCA9IHRleHQucmVwbGFjZShyZWZlcmVuY2VSZWdFeHAsIHdyaXRlSW1hZ2VUYWcpO1xuXG4gIC8vIE5leHQsIGhhbmRsZSBpbmxpbmUgaW1hZ2VzOiAgIVthbHQgdGV4dF0odXJsID08d2lkdGg+eDxoZWlnaHQ+IFwib3B0aW9uYWwgdGl0bGVcIilcbiAgLy8gY2FzZXMgd2l0aCBjcmF6eSB1cmxzIGxpa2UgLi9pbWFnZS9jYXQxKS5wbmdcbiAgdGV4dCA9IHRleHQucmVwbGFjZShjcmF6eVJlZ0V4cCwgd3JpdGVJbWFnZVRhZyk7XG5cbiAgLy8gbm9ybWFsIGNhc2VzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoaW5saW5lUmVnRXhwLCB3cml0ZUltYWdlVGFnKTtcblxuICAvLyBoYW5kbGUgcmVmZXJlbmNlLXN0eWxlIHNob3J0Y3V0czogfFtpbWcgdGV4dF1cbiAgdGV4dCA9IHRleHQucmVwbGFjZShyZWZTaG9ydGN1dFJlZ0V4cCwgd3JpdGVJbWFnZVRhZyk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaW1hZ2VzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuc2hvd2Rvd24uc3ViUGFyc2VyKCdpdGFsaWNzQW5kQm9sZCcsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdpdGFsaWNzQW5kQm9sZC5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBpdCdzIGZhc3RlciB0byBoYXZlIDMgc2VwYXJhdGUgcmVnZXhlcyBmb3IgZWFjaCBjYXNlIHRoYW4gaGF2ZSBqdXN0IG9uZVxuICAvLyBiZWNhdXNlIG9mIGJhY2t0cmFjaW5nLCBpbiBzb21lIGNhc2VzLCBpdCBjb3VsZCBsZWFkIHRvIGFuIGV4cG9uZW50aWFsIGVmZmVjdFxuICAvLyBjYWxsZWQgXCJjYXRhc3Ryb3BoaWMgYmFja3RyYWNlXCIuIE9taW5vdXMhXG5cbiAgZnVuY3Rpb24gcGFyc2VJbnNpZGUgKHR4dCwgbGVmdCwgcmlnaHQpIHtcbiAgICBpZiAob3B0aW9ucy5zaW1wbGlmaWVkQXV0b0xpbmspIHtcbiAgICAgIHR4dCA9IHNob3dkb3duLnN1YlBhcnNlcignc2ltcGxpZmllZEF1dG9MaW5rcycpKHR4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0ICsgdHh0ICsgcmlnaHQ7XG4gIH1cblxuICAvLyBQYXJzZSB1bmRlcnNjb3Jlc1xuICBpZiAob3B0aW9ucy5saXRlcmFsTWlkV29yZFVuZGVyc2NvcmVzKSB7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxiX19fKFxcU1tcXHNcXFNdKilfX19cXGIvZywgZnVuY3Rpb24gKHdtLCB0eHQpIHtcbiAgICAgIHJldHVybiBwYXJzZUluc2lkZSAodHh0LCAnPHN0cm9uZz48ZW0+JywgJzwvZW0+PC9zdHJvbmc+Jyk7XG4gICAgfSk7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxiX18oXFxTW1xcc1xcU10qKV9fXFxiL2csIGZ1bmN0aW9uICh3bSwgdHh0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnNpZGUgKHR4dCwgJzxzdHJvbmc+JywgJzwvc3Ryb25nPicpO1xuICAgIH0pO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcYl8oXFxTW1xcc1xcU10qPylfXFxiL2csIGZ1bmN0aW9uICh3bSwgdHh0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnNpZGUgKHR4dCwgJzxlbT4nLCAnPC9lbT4nKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9fX18oXFxTW1xcc1xcU10qPylfX18vZywgZnVuY3Rpb24gKHdtLCBtKSB7XG4gICAgICByZXR1cm4gKC9cXFMkLy50ZXN0KG0pKSA/IHBhcnNlSW5zaWRlIChtLCAnPHN0cm9uZz48ZW0+JywgJzwvZW0+PC9zdHJvbmc+JykgOiB3bTtcbiAgICB9KTtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9fXyhcXFNbXFxzXFxTXSo/KV9fL2csIGZ1bmN0aW9uICh3bSwgbSkge1xuICAgICAgcmV0dXJuICgvXFxTJC8udGVzdChtKSkgPyBwYXJzZUluc2lkZSAobSwgJzxzdHJvbmc+JywgJzwvc3Ryb25nPicpIDogd207XG4gICAgfSk7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXyhbXlxcc19dW1xcc1xcU10qPylfL2csIGZ1bmN0aW9uICh3bSwgbSkge1xuICAgICAgLy8gIS9eX1teX10vLnRlc3QobSkgLSB0ZXN0IGlmIGl0IGRvZXNuJ3Qgc3RhcnQgd2l0aCBfXyAoc2luY2UgaXQgc2VlbXMgcmVkdW5kYW50LCB3ZSByZW1vdmVkIGl0KVxuICAgICAgcmV0dXJuICgvXFxTJC8udGVzdChtKSkgPyBwYXJzZUluc2lkZSAobSwgJzxlbT4nLCAnPC9lbT4nKSA6IHdtO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTm93IHBhcnNlIGFzdGVyaXNrc1xuICBpZiAob3B0aW9ucy5saXRlcmFsTWlkV29yZEFzdGVyaXNrcykge1xuICAgIHRleHQgPSB0ZXh0LnRyaW0oKS5yZXBsYWNlKC8oPzpefCArKVxcKnszfShcXFNbXFxzXFxTXSo/KVxcKnszfSg/OiArfCQpL2csIGZ1bmN0aW9uICh3bSwgdHh0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnNpZGUgKHR4dCwgJyA8c3Ryb25nPjxlbT4nLCAnPC9lbT48L3N0cm9uZz4gJyk7XG4gICAgfSk7XG4gICAgdGV4dCA9IHRleHQudHJpbSgpLnJlcGxhY2UoLyg/Ol58ICspXFwqezJ9KFxcU1tcXHNcXFNdKj8pXFwqezJ9KD86ICt8JCkvZywgZnVuY3Rpb24gKHdtLCB0eHQpIHtcbiAgICAgIHJldHVybiBwYXJzZUluc2lkZSAodHh0LCAnIDxzdHJvbmc+JywgJzwvc3Ryb25nPiAnKTtcbiAgICB9KTtcbiAgICB0ZXh0ID0gdGV4dC50cmltKCkucmVwbGFjZSgvKD86XnwgKylcXCp7MX0oXFxTW1xcc1xcU10qPylcXCp7MX0oPzogK3wkKS9nLCBmdW5jdGlvbiAod20sIHR4dCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW5zaWRlICh0eHQsICcgPGVtPicsICc8L2VtPicgKyAod20uc2xpY2UoLTEpID09PSAnICcgPyAnICcgOiAnJykpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcKlxcKlxcKihcXFNbXFxzXFxTXSo/KVxcKlxcKlxcKi9nLCBmdW5jdGlvbiAod20sIG0pIHtcbiAgICAgIHJldHVybiAoL1xcUyQvLnRlc3QobSkpID8gcGFyc2VJbnNpZGUgKG0sICc8c3Ryb25nPjxlbT4nLCAnPC9lbT48L3N0cm9uZz4nKSA6IHdtO1xuICAgIH0pO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcKlxcKihcXFNbXFxzXFxTXSo/KVxcKlxcKi9nLCBmdW5jdGlvbiAod20sIG0pIHtcbiAgICAgIHJldHVybiAoL1xcUyQvLnRlc3QobSkpID8gcGFyc2VJbnNpZGUgKG0sICc8c3Ryb25nPicsICc8L3N0cm9uZz4nKSA6IHdtO1xuICAgIH0pO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcKihbXlxccypdW1xcc1xcU10qPylcXCovZywgZnVuY3Rpb24gKHdtLCBtKSB7XG4gICAgICAvLyAhL15cXCpbXipdLy50ZXN0KG0pIC0gdGVzdCBpZiBpdCBkb2Vzbid0IHN0YXJ0IHdpdGggKiogKHNpbmNlIGl0IHNlZW1zIHJlZHVuZGFudCwgd2UgcmVtb3ZlZCBpdClcbiAgICAgIHJldHVybiAoL1xcUyQvLnRlc3QobSkpID8gcGFyc2VJbnNpZGUgKG0sICc8ZW0+JywgJzwvZW0+JykgOiB3bTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaXRhbGljc0FuZEJvbGQuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIEZvcm0gSFRNTCBvcmRlcmVkIChudW1iZXJlZCkgYW5kIHVub3JkZXJlZCAoYnVsbGV0ZWQpIGxpc3RzLlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2xpc3RzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdsaXN0cy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvKipcbiAgICogUHJvY2VzcyB0aGUgY29udGVudHMgb2YgYSBzaW5nbGUgb3JkZXJlZCBvciB1bm9yZGVyZWQgbGlzdCwgc3BsaXR0aW5nIGl0XG4gICAqIGludG8gaW5kaXZpZHVhbCBsaXN0IGl0ZW1zLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlzdFN0clxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRyaW1UcmFpbGluZ1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gcHJvY2Vzc0xpc3RJdGVtcyAobGlzdFN0ciwgdHJpbVRyYWlsaW5nKSB7XG4gICAgLy8gVGhlICRnX2xpc3RfbGV2ZWwgZ2xvYmFsIGtlZXBzIHRyYWNrIG9mIHdoZW4gd2UncmUgaW5zaWRlIGEgbGlzdC5cbiAgICAvLyBFYWNoIHRpbWUgd2UgZW50ZXIgYSBsaXN0LCB3ZSBpbmNyZW1lbnQgaXQ7IHdoZW4gd2UgbGVhdmUgYSBsaXN0LFxuICAgIC8vIHdlIGRlY3JlbWVudC4gSWYgaXQncyB6ZXJvLCB3ZSdyZSBub3QgaW4gYSBsaXN0IGFueW1vcmUuXG4gICAgLy9cbiAgICAvLyBXZSBkbyB0aGlzIGJlY2F1c2Ugd2hlbiB3ZSdyZSBub3QgaW5zaWRlIGEgbGlzdCwgd2Ugd2FudCB0byB0cmVhdFxuICAgIC8vIHNvbWV0aGluZyBsaWtlIHRoaXM6XG4gICAgLy9cbiAgICAvLyAgICBJIHJlY29tbWVuZCB1cGdyYWRpbmcgdG8gdmVyc2lvblxuICAgIC8vICAgIDguIE9vcHMsIG5vdyB0aGlzIGxpbmUgaXMgdHJlYXRlZFxuICAgIC8vICAgIGFzIGEgc3ViLWxpc3QuXG4gICAgLy9cbiAgICAvLyBBcyBhIHNpbmdsZSBwYXJhZ3JhcGgsIGRlc3BpdGUgdGhlIGZhY3QgdGhhdCB0aGUgc2Vjb25kIGxpbmUgc3RhcnRzXG4gICAgLy8gd2l0aCBhIGRpZ2l0LXBlcmlvZC1zcGFjZSBzZXF1ZW5jZS5cbiAgICAvL1xuICAgIC8vIFdoZXJlYXMgd2hlbiB3ZSdyZSBpbnNpZGUgYSBsaXN0IChvciBzdWItbGlzdCksIHRoYXQgbGluZSB3aWxsIGJlXG4gICAgLy8gdHJlYXRlZCBhcyB0aGUgc3RhcnQgb2YgYSBzdWItbGlzdC4gV2hhdCBhIGtsdWRnZSwgaHVoPyBUaGlzIGlzXG4gICAgLy8gYW4gYXNwZWN0IG9mIE1hcmtkb3duJ3Mgc3ludGF4IHRoYXQncyBoYXJkIHRvIHBhcnNlIHBlcmZlY3RseVxuICAgIC8vIHdpdGhvdXQgcmVzb3J0aW5nIHRvIG1pbmQtcmVhZGluZy4gUGVyaGFwcyB0aGUgc29sdXRpb24gaXMgdG9cbiAgICAvLyBjaGFuZ2UgdGhlIHN5bnRheCBydWxlcyBzdWNoIHRoYXQgc3ViLWxpc3RzIG11c3Qgc3RhcnQgd2l0aCBhXG4gICAgLy8gc3RhcnRpbmcgY2FyZGluYWwgbnVtYmVyOyBlLmcuIFwiMS5cIiBvciBcImEuXCIuXG4gICAgZ2xvYmFscy5nTGlzdExldmVsKys7XG5cbiAgICAvLyB0cmltIHRyYWlsaW5nIGJsYW5rIGxpbmVzOlxuICAgIGxpc3RTdHIgPSBsaXN0U3RyLnJlcGxhY2UoL1xcbnsyLH0kLywgJ1xcbicpO1xuXG4gICAgLy8gYXR0YWNrbGFiOiBhZGQgc2VudGluZWwgdG8gZW11bGF0ZSBcXHpcbiAgICBsaXN0U3RyICs9ICfCqDAnO1xuXG4gICAgdmFyIHJneCA9IC8oXFxuKT8oXiB7MCwzfSkoWyorLV18XFxkK1suXSlbIFxcdF0rKChcXFsoeHxYfCApP10pP1sgXFx0XSpbXlxccl0rPyhcXG57MSwyfSkpKD89XFxuKijCqDB8IHswLDN9KFsqKy1dfFxcZCtbLl0pWyBcXHRdKykpL2dtLFxuICAgICAgICBpc1BhcmFncmFwaGVkID0gKC9cXG5bIFxcdF0qXFxuKD8hwqgwKS8udGVzdChsaXN0U3RyKSk7XG5cbiAgICAvLyBTaW5jZSB2ZXJzaW9uIDEuNSwgbmVzdGluZyBzdWJsaXN0cyByZXF1aXJlcyA0IHNwYWNlcyAob3IgMSB0YWIpIGluZGVudGF0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGEgc3ludGF4IGJyZWFraW5nIGNoYW5nZVxuICAgIC8vIGFjdGl2YXRpbmcgdGhpcyBvcHRpb24gcmV2ZXJ0cyB0byBvbGQgYmVoYXZpb3JcbiAgICBpZiAob3B0aW9ucy5kaXNhYmxlRm9yY2VkNFNwYWNlc0luZGVudGVkU3VibGlzdHMpIHtcbiAgICAgIHJneCA9IC8oXFxuKT8oXiB7MCwzfSkoWyorLV18XFxkK1suXSlbIFxcdF0rKChcXFsoeHxYfCApP10pP1sgXFx0XSpbXlxccl0rPyhcXG57MSwyfSkpKD89XFxuKijCqDB8XFwyKFsqKy1dfFxcZCtbLl0pWyBcXHRdKykpL2dtO1xuICAgIH1cblxuICAgIGxpc3RTdHIgPSBsaXN0U3RyLnJlcGxhY2Uocmd4LCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEsIG0yLCBtMywgbTQsIHRhc2tidG4sIGNoZWNrZWQpIHtcbiAgICAgIGNoZWNrZWQgPSAoY2hlY2tlZCAmJiBjaGVja2VkLnRyaW0oKSAhPT0gJycpO1xuXG4gICAgICB2YXIgaXRlbSA9IHNob3dkb3duLnN1YlBhcnNlcignb3V0ZGVudCcpKG00LCBvcHRpb25zLCBnbG9iYWxzKSxcbiAgICAgICAgICBidWxsZXRTdHlsZSA9ICcnO1xuXG4gICAgICAvLyBTdXBwb3J0IGZvciBnaXRodWIgdGFza2xpc3RzXG4gICAgICBpZiAodGFza2J0biAmJiBvcHRpb25zLnRhc2tsaXN0cykge1xuICAgICAgICBidWxsZXRTdHlsZSA9ICcgY2xhc3M9XCJ0YXNrLWxpc3QtaXRlbVwiIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiJztcbiAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvXlsgXFx0XSpcXFsoeHxYfCApP10vbSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBvdHAgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRpc2FibGVkIHN0eWxlPVwibWFyZ2luOiAwcHggMC4zNWVtIDAuMjVlbSAtMS42ZW07IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCInO1xuICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICBvdHAgKz0gJyBjaGVja2VkJztcbiAgICAgICAgICB9XG4gICAgICAgICAgb3RwICs9ICc+JztcbiAgICAgICAgICByZXR1cm4gb3RwO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSVNTVUUgIzMxMlxuICAgICAgLy8gVGhpcyBpbnB1dDogLSAtIC0gYVxuICAgICAgLy8gY2F1c2VzIHRyb3VibGUgdG8gdGhlIHBhcnNlciwgc2luY2UgaXQgaW50ZXJwcmV0cyBpdCBhczpcbiAgICAgIC8vIDx1bD48bGk+PGxpPjxsaT5hPC9saT48L2xpPjwvbGk+PC91bD5cbiAgICAgIC8vIGluc3RlYWQgb2Y6XG4gICAgICAvLyA8dWw+PGxpPi0gLSBhPC9saT48L3VsPlxuICAgICAgLy8gU28sIHRvIHByZXZlbnQgaXQsIHdlIHdpbGwgcHV0IGEgbWFya2VyICjCqEEpaW4gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGluZVxuICAgICAgLy8gS2luZCBvZiBoYWNraXNoL21vbmtleSBwYXRjaGluZywgYnV0IHNlZW1zIG1vcmUgZWZmZWN0aXZlIHRoYW4gb3ZlcmNvbXBsaWNhdGluZyB0aGUgbGlzdCBwYXJzZXJcbiAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL14oWy0qK118XFxkXFwuKVsgXFx0XStbXFxTXFxuIF0qL2csIGZ1bmN0aW9uICh3bTIpIHtcbiAgICAgICAgcmV0dXJuICfCqEEnICsgd20yO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIG0xIC0gTGVhZGluZyBsaW5lIG9yXG4gICAgICAvLyBIYXMgYSBkb3VibGUgcmV0dXJuIChtdWx0aSBwYXJhZ3JhcGgpIG9yXG4gICAgICAvLyBIYXMgc3VibGlzdFxuICAgICAgaWYgKG0xIHx8IChpdGVtLnNlYXJjaCgvXFxuezIsfS8pID4gLTEpKSB7XG4gICAgICAgIGl0ZW0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2dpdGh1YkNvZGVCbG9ja3MnKShpdGVtLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICAgICAgaXRlbSA9IHNob3dkb3duLnN1YlBhcnNlcignYmxvY2tHYW11dCcpKGl0ZW0sIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVjdXJzaW9uIGZvciBzdWItbGlzdHM6XG4gICAgICAgIGl0ZW0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2xpc3RzJykoaXRlbSwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL1xcbiQvLCAnJyk7IC8vIGNob21wKGl0ZW0pXG4gICAgICAgIGl0ZW0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hIVE1MQmxvY2tzJykoaXRlbSwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgICAgIC8vIENvbGFwc2UgZG91YmxlIGxpbmVicmVha3NcbiAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvXFxuXFxuKy9nLCAnXFxuXFxuJyk7XG4gICAgICAgIC8vIHJlcGxhY2UgZG91YmxlIGxpbmVicmVha3Mgd2l0aCBhIHBsYWNlaG9sZGVyXG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL1xcblxcbi9nLCAnwqhCJyk7XG4gICAgICAgIGlmIChpc1BhcmFncmFwaGVkKSB7XG4gICAgICAgICAgaXRlbSA9IHNob3dkb3duLnN1YlBhcnNlcigncGFyYWdyYXBocycpKGl0ZW0sIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3NwYW5HYW11dCcpKGl0ZW0sIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL8KoQi9nLCAnXFxuXFxuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgbWFya2VyICjCqEEpXG4gICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKCfCqEEnLCAnJyk7XG4gICAgICAvLyB3ZSBjYW4gZmluYWxseSB3cmFwIHRoZSBsaW5lIGluIGxpc3QgaXRlbSB0YWdzXG4gICAgICBpdGVtID0gICc8bGknICsgYnVsbGV0U3R5bGUgKyAnPicgKyBpdGVtICsgJzwvbGk+XFxuJztcblxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICAvLyBhdHRhY2tsYWI6IHN0cmlwIHNlbnRpbmVsXG4gICAgbGlzdFN0ciA9IGxpc3RTdHIucmVwbGFjZSgvwqgwL2csICcnKTtcblxuICAgIGdsb2JhbHMuZ0xpc3RMZXZlbC0tO1xuXG4gICAgaWYgKHRyaW1UcmFpbGluZykge1xuICAgICAgbGlzdFN0ciA9IGxpc3RTdHIucmVwbGFjZSgvXFxzKyQvLCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RTdHI7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYW5kIHBhcnNlIGNvbnNlY3V0aXZlIGxpc3RzIChiZXR0ZXIgZml4IGZvciBpc3N1ZSAjMTQyKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlzdFR5cGVcbiAgICogQHBhcmFtIHtib29sZWFufSB0cmltVHJhaWxpbmdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlQ29uc2VjdXRpdmVMaXN0cyAobGlzdCwgbGlzdFR5cGUsIHRyaW1UcmFpbGluZykge1xuICAgIC8vIGNoZWNrIGlmIHdlIGNhdWdodCAyIG9yIG1vcmUgY29uc2VjdXRpdmUgbGlzdHMgYnkgbWlzdGFrZVxuICAgIC8vIHdlIHVzZSB0aGUgY291bnRlclJneCwgbWVhbmluZyBpZiBsaXN0VHlwZSBpcyBVTCB3ZSBsb29rIGZvciBPTCBhbmQgdmljZSB2ZXJzYVxuICAgIHZhciBvbFJneCA9IChvcHRpb25zLmRpc2FibGVGb3JjZWQ0U3BhY2VzSW5kZW50ZWRTdWJsaXN0cykgPyAvXiA/XFxkK1xcLlsgXFx0XS9nbSA6IC9eIHswLDN9XFxkK1xcLlsgXFx0XS9nbSxcbiAgICAgICAgdWxSZ3ggPSAob3B0aW9ucy5kaXNhYmxlRm9yY2VkNFNwYWNlc0luZGVudGVkU3VibGlzdHMpID8gL14gP1sqKy1dWyBcXHRdL2dtIDogL14gezAsM31bKistXVsgXFx0XS9nbSxcbiAgICAgICAgY291bnRlclJ4ZyA9IChsaXN0VHlwZSA9PT0gJ3VsJykgPyBvbFJneCA6IHVsUmd4LFxuICAgICAgICByZXN1bHQgPSAnJztcblxuICAgIGlmIChsaXN0LnNlYXJjaChjb3VudGVyUnhnKSAhPT0gLTEpIHtcbiAgICAgIChmdW5jdGlvbiBwYXJzZUNMICh0eHQpIHtcbiAgICAgICAgdmFyIHBvcyA9IHR4dC5zZWFyY2goY291bnRlclJ4Zyk7XG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XG4gICAgICAgICAgLy8gc2xpY2VcbiAgICAgICAgICByZXN1bHQgKz0gJ1xcbjwnICsgbGlzdFR5cGUgKyAnPlxcbicgKyBwcm9jZXNzTGlzdEl0ZW1zKHR4dC5zbGljZSgwLCBwb3MpLCAhIXRyaW1UcmFpbGluZykgKyAnPC8nICsgbGlzdFR5cGUgKyAnPlxcbic7XG5cbiAgICAgICAgICAvLyBpbnZlcnQgY291bnRlclR5cGUgYW5kIGxpc3RUeXBlXG4gICAgICAgICAgbGlzdFR5cGUgPSAobGlzdFR5cGUgPT09ICd1bCcpID8gJ29sJyA6ICd1bCc7XG4gICAgICAgICAgY291bnRlclJ4ZyA9IChsaXN0VHlwZSA9PT0gJ3VsJykgPyBvbFJneCA6IHVsUmd4O1xuXG4gICAgICAgICAgLy9yZWN1cnNlXG4gICAgICAgICAgcGFyc2VDTCh0eHQuc2xpY2UocG9zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ICs9ICdcXG48JyArIGxpc3RUeXBlICsgJz5cXG4nICsgcHJvY2Vzc0xpc3RJdGVtcyh0eHQsICEhdHJpbVRyYWlsaW5nKSArICc8LycgKyBsaXN0VHlwZSArICc+XFxuJztcbiAgICAgICAgfVxuICAgICAgfSkobGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9ICdcXG48JyArIGxpc3RUeXBlICsgJz5cXG4nICsgcHJvY2Vzc0xpc3RJdGVtcyhsaXN0LCAhIXRyaW1UcmFpbGluZykgKyAnPC8nICsgbGlzdFR5cGUgKyAnPlxcbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGFkZCBzZW50aW5lbCB0byBoYWNrIGFyb3VuZCBraHRtbC9zYWZhcmkgYnVnOlxuICAvLyBodHRwOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMTIzMVxuICB0ZXh0ICs9ICfCqDAnO1xuXG4gIGlmIChnbG9iYWxzLmdMaXN0TGV2ZWwpIHtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eKCggezAsM30oWyorLV18XFxkK1suXSlbIFxcdF0rKVteXFxyXSs/KMKoMHxcXG57Mix9KD89XFxTKSg/IVsgXFx0XSooPzpbKistXXxcXGQrWy5dKVsgXFx0XSspKSkvZ20sXG4gICAgICBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbGlzdCwgbTIpIHtcbiAgICAgICAgdmFyIGxpc3RUeXBlID0gKG0yLnNlYXJjaCgvWyorLV0vZykgPiAtMSkgPyAndWwnIDogJ29sJztcbiAgICAgICAgcmV0dXJuIHBhcnNlQ29uc2VjdXRpdmVMaXN0cyhsaXN0LCBsaXN0VHlwZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFxuXFxufF5cXG4/KSgoIHswLDN9KFsqKy1dfFxcZCtbLl0pWyBcXHRdKylbXlxccl0rPyjCqDB8XFxuezIsfSg/PVxcUykoPyFbIFxcdF0qKD86WyorLV18XFxkK1suXSlbIFxcdF0rKSkpL2dtLFxuICAgICAgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG0xLCBsaXN0LCBtMykge1xuICAgICAgICB2YXIgbGlzdFR5cGUgPSAobTMuc2VhcmNoKC9bKistXS9nKSA+IC0xKSA/ICd1bCcgOiAnb2wnO1xuICAgICAgICByZXR1cm4gcGFyc2VDb25zZWN1dGl2ZUxpc3RzKGxpc3QsIGxpc3RUeXBlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8vIHN0cmlwIHNlbnRpbmVsXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoMC8sICcnKTtcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnbGlzdHMuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIFJlbW92ZSBvbmUgbGV2ZWwgb2YgbGluZS1sZWFkaW5nIHRhYnMgb3Igc3BhY2VzXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignb3V0ZGVudCcsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnb3V0ZGVudC5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBhdHRhY2tsYWI6IGhhY2sgYXJvdW5kIEtvbnF1ZXJvciAzLjUuNCBidWc6XG4gIC8vIFwiLS0tLS0tLS0tLWJ1Z1wiLnJlcGxhY2UoL14tL2csXCJcIikgPT0gXCJidWdcIlxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eKFxcdHxbIF17MSw0fSkvZ20sICfCqDAnKTsgLy8gYXR0YWNrbGFiOiBnX3RhYl93aWR0aFxuXG4gIC8vIGF0dGFja2xhYjogY2xlYW4gdXAgaGFja1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/CqDAvZywgJycpO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ291dGRlbnQuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcigncGFyYWdyYXBocycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdwYXJhZ3JhcGhzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAvLyBTdHJpcCBsZWFkaW5nIGFuZCB0cmFpbGluZyBsaW5lczpcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXlxcbisvZywgJycpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXG4rJC9nLCAnJyk7XG5cbiAgdmFyIGdyYWZzID0gdGV4dC5zcGxpdCgvXFxuezIsfS9nKSxcbiAgICAgIGdyYWZzT3V0ID0gW10sXG4gICAgICBlbmQgPSBncmFmcy5sZW5ndGg7IC8vIFdyYXAgPHA+IHRhZ3NcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdmFyIHN0ciA9IGdyYWZzW2ldO1xuICAgIC8vIGlmIHRoaXMgaXMgYW4gSFRNTCBtYXJrZXIsIGNvcHkgaXRcbiAgICBpZiAoc3RyLnNlYXJjaCgvwqgoS3xHKShcXGQrKVxcMS9nKSA+PSAwKSB7XG4gICAgICBncmFmc091dC5wdXNoKHN0cik7XG5cbiAgICAvLyB0ZXN0IGZvciBwcmVzZW5jZSBvZiBjaGFyYWN0ZXJzIHRvIHByZXZlbnQgZW1wdHkgbGluZXMgYmVpbmcgcGFyc2VkXG4gICAgLy8gYXMgcGFyYWdyYXBocyAocmVzdWx0aW5nIGluIHVuZGVzaXJlZCBleHRyYSBlbXB0eSBwYXJhZ3JhcGhzKVxuICAgIH0gZWxzZSBpZiAoc3RyLnNlYXJjaCgvXFxTLykgPj0gMCkge1xuICAgICAgc3RyID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdzcGFuR2FtdXQnKShzdHIsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL14oWyBcXHRdKikvZywgJzxwPicpO1xuICAgICAgc3RyICs9ICc8L3A+JztcbiAgICAgIGdyYWZzT3V0LnB1c2goc3RyKTtcbiAgICB9XG4gIH1cblxuICAvKiogVW5oYXNoaWZ5IEhUTUwgYmxvY2tzICovXG4gIGVuZCA9IGdyYWZzT3V0Lmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdmFyIGJsb2NrVGV4dCA9ICcnLFxuICAgICAgICBncmFmc091dEl0ID0gZ3JhZnNPdXRbaV0sXG4gICAgICAgIGNvZGVGbGFnID0gZmFsc2U7XG4gICAgLy8gaWYgdGhpcyBpcyBhIG1hcmtlciBmb3IgYW4gaHRtbCBibG9jay4uLlxuICAgIC8vIHVzZSBSZWdFeHAudGVzdCBpbnN0ZWFkIG9mIHN0cmluZy5zZWFyY2ggYmVjYXVzZSBvZiBRTUwgYnVnXG4gICAgd2hpbGUgKC/CqChLfEcpKFxcZCspXFwxLy50ZXN0KGdyYWZzT3V0SXQpKSB7XG4gICAgICB2YXIgZGVsaW0gPSBSZWdFeHAuJDEsXG4gICAgICAgICAgbnVtICAgPSBSZWdFeHAuJDI7XG5cbiAgICAgIGlmIChkZWxpbSA9PT0gJ0snKSB7XG4gICAgICAgIGJsb2NrVGV4dCA9IGdsb2JhbHMuZ0h0bWxCbG9ja3NbbnVtXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgZ2hCbG9jayBpcyBhIGZhbHNlIHBvc2l0aXZlXG4gICAgICAgIGlmIChjb2RlRmxhZykge1xuICAgICAgICAgIC8vIHVzZSBlbmNvZGVkIHZlcnNpb24gb2YgYWxsIHRleHRcbiAgICAgICAgICBibG9ja1RleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2VuY29kZUNvZGUnKShnbG9iYWxzLmdoQ29kZUJsb2Nrc1tudW1dLnRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJsb2NrVGV4dCA9IGdsb2JhbHMuZ2hDb2RlQmxvY2tzW251bV0uY29kZWJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBibG9ja1RleHQgPSBibG9ja1RleHQucmVwbGFjZSgvXFwkL2csICckJCQkJyk7IC8vIEVzY2FwZSBhbnkgZG9sbGFyIHNpZ25zXG5cbiAgICAgIGdyYWZzT3V0SXQgPSBncmFmc091dEl0LnJlcGxhY2UoLyhcXG5cXG4pP8KoKEt8RylcXGQrXFwyKFxcblxcbik/LywgYmxvY2tUZXh0KTtcbiAgICAgIC8vIENoZWNrIGlmIGdyYWZzT3V0SXQgaXMgYSBwcmUtPmNvZGVcbiAgICAgIGlmICgvXjxwcmVcXGJbXj5dKj5cXHMqPGNvZGVcXGJbXj5dKj4vLnRlc3QoZ3JhZnNPdXRJdCkpIHtcbiAgICAgICAgY29kZUZsYWcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBncmFmc091dFtpXSA9IGdyYWZzT3V0SXQ7XG4gIH1cbiAgdGV4dCA9IGdyYWZzT3V0LmpvaW4oJ1xcbicpO1xuICAvLyBTdHJpcCBsZWFkaW5nIGFuZCB0cmFpbGluZyBsaW5lczpcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXlxcbisvZywgJycpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXG4rJC9nLCAnJyk7XG4gIHJldHVybiBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3BhcmFncmFwaHMuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbn0pO1xuXHJcbi8qKlxuICogUnVuIGV4dGVuc2lvblxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ3J1bkV4dGVuc2lvbicsIGZ1bmN0aW9uIChleHQsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChleHQuZmlsdGVyKSB7XG4gICAgdGV4dCA9IGV4dC5maWx0ZXIodGV4dCwgZ2xvYmFscy5jb252ZXJ0ZXIsIG9wdGlvbnMpO1xuXG4gIH0gZWxzZSBpZiAoZXh0LnJlZ2V4KSB7XG4gICAgLy8gVE9ETyByZW1vdmUgdGhpcyB3aGVuIG9sZCBleHRlbnNpb24gbG9hZGluZyBtZWNoYW5pc20gaXMgZGVwcmVjYXRlZFxuICAgIHZhciByZSA9IGV4dC5yZWdleDtcbiAgICBpZiAoIShyZSBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgIHJlID0gbmV3IFJlZ0V4cChyZSwgJ2cnKTtcbiAgICB9XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZShyZSwgZXh0LnJlcGxhY2UpO1xuICB9XG5cbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIFRoZXNlIGFyZSBhbGwgdGhlIHRyYW5zZm9ybWF0aW9ucyB0aGF0IG9jY3VyICp3aXRoaW4qIGJsb2NrLWxldmVsXG4gKiB0YWdzIGxpa2UgcGFyYWdyYXBocywgaGVhZGVycywgYW5kIGxpc3QgaXRlbXMuXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3NwYW5HYW11dC5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignY29kZVNwYW5zJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2VzY2FwZVNwZWNpYWxDaGFyc1dpdGhpblRhZ0F0dHJpYnV0ZXMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignZW5jb2RlQmFja3NsYXNoRXNjYXBlcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIFByb2Nlc3MgYW5jaG9yIGFuZCBpbWFnZSB0YWdzLiBJbWFnZXMgbXVzdCBjb21lIGZpcnN0LFxuICAvLyBiZWNhdXNlICFbZm9vXVtmXSBsb29rcyBsaWtlIGFuIGFuY2hvci5cbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignaW1hZ2VzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2FuY2hvcnMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBNYWtlIGxpbmtzIG91dCBvZiB0aGluZ3MgbGlrZSBgPGh0dHA6Ly9leGFtcGxlLmNvbS8+YFxuICAvLyBNdXN0IGNvbWUgYWZ0ZXIgYW5jaG9ycywgYmVjYXVzZSB5b3UgY2FuIHVzZSA8IGFuZCA+XG4gIC8vIGRlbGltaXRlcnMgaW4gaW5saW5lIGxpbmtzIGxpa2UgW3RoaXNdKDx1cmw+KS5cbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignYXV0b0xpbmtzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2l0YWxpY3NBbmRCb2xkJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3N0cmlrZXRocm91Z2gnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignc2ltcGxpZmllZEF1dG9MaW5rcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIHdlIG5lZWQgdG8gaGFzaCBIVE1MIHRhZ3MgaW5zaWRlIHNwYW5zXG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hIVE1MU3BhbnMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBub3cgd2UgZW5jb2RlIGFtcHMgYW5kIGFuZ2xlc1xuICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVBbXBzQW5kQW5nbGVzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgLy8gRG8gaGFyZCBicmVha3NcbiAgaWYgKG9wdGlvbnMuc2ltcGxlTGluZUJyZWFrcykge1xuICAgIC8vIEdGTSBzdHlsZSBoYXJkIGJyZWFrc1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+XFxuJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVmFuaWxsYSBoYXJkIGJyZWFrc1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyAgK1xcbi9nLCAnPGJyIC8+XFxuJyk7XG4gIH1cblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdzcGFuR2FtdXQuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ3N0cmlrZXRocm91Z2gnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gcGFyc2VJbnNpZGUgKHR4dCkge1xuICAgIGlmIChvcHRpb25zLnNpbXBsaWZpZWRBdXRvTGluaykge1xuICAgICAgdHh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdzaW1wbGlmaWVkQXV0b0xpbmtzJykodHh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICB9XG4gICAgcmV0dXJuICc8ZGVsPicgKyB0eHQgKyAnPC9kZWw+JztcbiAgfVxuXG4gIGlmIChvcHRpb25zLnN0cmlrZXRocm91Z2gpIHtcbiAgICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdzdHJpa2V0aHJvdWdoLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyg/On4pezJ9KFtcXHNcXFNdKz8pKD86fil7Mn0vZywgZnVuY3Rpb24gKHdtLCB0eHQpIHsgcmV0dXJuIHBhcnNlSW5zaWRlKHR4dCk7IH0pO1xuICAgIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3N0cmlrZXRocm91Z2guYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBTdHJpcHMgbGluayBkZWZpbml0aW9ucyBmcm9tIHRleHQsIHN0b3JlcyB0aGUgVVJMcyBhbmQgdGl0bGVzIGluXG4gKiBoYXNoIHJlZmVyZW5jZXMuXG4gKiBMaW5rIGRlZnMgYXJlIGluIHRoZSBmb3JtOiBeW2lkXTogdXJsIFwib3B0aW9uYWwgdGl0bGVcIlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ3N0cmlwTGlua0RlZmluaXRpb25zJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciByZWdleCA9IC9eIHswLDN9XFxbKC4rKV06WyBcXHRdKlxcbj9bIFxcdF0qPD8oW14+XFxzXSspPj8oPzogPShbKlxcZF0rW0EtWmEteiVdezAsNH0peChbKlxcZF0rW0EtWmEteiVdezAsNH0pKT9bIFxcdF0qXFxuP1sgXFx0XSooPzooXFxuKilbXCJ8JyhdKC4rPylbXCJ8JyldWyBcXHRdKik/KD86XFxuK3woPz3CqDApKS9nbTtcblxuICAvLyBhdHRhY2tsYWI6IHNlbnRpbmVsIHdvcmthcm91bmRzIGZvciBsYWNrIG9mIFxcQSBhbmQgXFxaLCBzYWZhcmlcXGtodG1sIGJ1Z1xuICB0ZXh0ICs9ICfCqDAnO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UocmVnZXgsIGZ1bmN0aW9uICh3aG9sZU1hdGNoLCBsaW5rSWQsIHVybCwgd2lkdGgsIGhlaWdodCwgYmxhbmtMaW5lcywgdGl0bGUpIHtcbiAgICBsaW5rSWQgPSBsaW5rSWQudG9Mb3dlckNhc2UoKTtcbiAgICBnbG9iYWxzLmdVcmxzW2xpbmtJZF0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2VuY29kZUFtcHNBbmRBbmdsZXMnKSh1cmwsIG9wdGlvbnMsIGdsb2JhbHMpOyAgLy8gTGluayBJRHMgYXJlIGNhc2UtaW5zZW5zaXRpdmVcblxuICAgIGlmIChibGFua0xpbmVzKSB7XG4gICAgICAvLyBPb3BzLCBmb3VuZCBibGFuayBsaW5lcywgc28gaXQncyBub3QgYSB0aXRsZS5cbiAgICAgIC8vIFB1dCBiYWNrIHRoZSBwYXJlbnRoZXRpY2FsIHN0YXRlbWVudCB3ZSBzdG9sZS5cbiAgICAgIHJldHVybiBibGFua0xpbmVzICsgdGl0bGU7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGdsb2JhbHMuZ1RpdGxlc1tsaW5rSWRdID0gdGl0bGUucmVwbGFjZSgvXCJ8Jy9nLCAnJnF1b3Q7Jyk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5wYXJzZUltZ0RpbWVuc2lvbnMgJiYgd2lkdGggJiYgaGVpZ2h0KSB7XG4gICAgICAgIGdsb2JhbHMuZ0RpbWVuc2lvbnNbbGlua0lkXSA9IHtcbiAgICAgICAgICB3aWR0aDogIHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENvbXBsZXRlbHkgcmVtb3ZlIHRoZSBkZWZpbml0aW9uIGZyb20gdGhlIHRleHRcbiAgICByZXR1cm4gJyc7XG4gIH0pO1xuXG4gIC8vIGF0dGFja2xhYjogc3RyaXAgc2VudGluZWxcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqgwLywgJycpO1xuXG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuc2hvd2Rvd24uc3ViUGFyc2VyKCd0YWJsZXMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKCFvcHRpb25zLnRhYmxlcykge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdmFyIHRhYmxlUmd4ID0gL14gezAsM31cXHw/LitcXHwuK1xcblsgXFx0XXswLDN9XFx8P1sgXFx0XSo6P1sgXFx0XSooPzotfD0pezIsfVsgXFx0XSo6P1sgXFx0XSpcXHxbIFxcdF0qOj9bIFxcdF0qKD86LXw9KXsyLH1bXFxzXFxTXSs/KD86XFxuXFxufMKoMCkvZ207XG5cbiAgZnVuY3Rpb24gcGFyc2VTdHlsZXMgKHNMaW5lKSB7XG4gICAgaWYgKC9eOlsgXFx0XSotLSokLy50ZXN0KHNMaW5lKSkge1xuICAgICAgcmV0dXJuICcgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7XCInO1xuICAgIH0gZWxzZSBpZiAoL14tLSpbIFxcdF0qOlsgXFx0XSokLy50ZXN0KHNMaW5lKSkge1xuICAgICAgcmV0dXJuICcgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O1wiJztcbiAgICB9IGVsc2UgaWYgKC9eOlsgXFx0XSotLSpbIFxcdF0qOiQvLnRlc3Qoc0xpbmUpKSB7XG4gICAgICByZXR1cm4gJyBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyAoaGVhZGVyLCBzdHlsZSkge1xuICAgIHZhciBpZCA9ICcnO1xuICAgIGhlYWRlciA9IGhlYWRlci50cmltKCk7XG4gICAgaWYgKG9wdGlvbnMudGFibGVIZWFkZXJJZCkge1xuICAgICAgaWQgPSAnIGlkPVwiJyArIGhlYWRlci5yZXBsYWNlKC8gL2csICdfJykudG9Mb3dlckNhc2UoKSArICdcIic7XG4gICAgfVxuICAgIGhlYWRlciA9IHNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JykoaGVhZGVyLCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAgIHJldHVybiAnPHRoJyArIGlkICsgc3R5bGUgKyAnPicgKyBoZWFkZXIgKyAnPC90aD5cXG4nO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDZWxscyAoY2VsbCwgc3R5bGUpIHtcbiAgICB2YXIgc3ViVGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JykoY2VsbCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgcmV0dXJuICc8dGQnICsgc3R5bGUgKyAnPicgKyBzdWJUZXh0ICsgJzwvdGQ+XFxuJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVGFibGUgKGhlYWRlcnMsIGNlbGxzKSB7XG4gICAgdmFyIHRiID0gJzx0YWJsZT5cXG48dGhlYWQ+XFxuPHRyPlxcbicsXG4gICAgICAgIHRibExnbiA9IGhlYWRlcnMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YmxMZ247ICsraSkge1xuICAgICAgdGIgKz0gaGVhZGVyc1tpXTtcbiAgICB9XG4gICAgdGIgKz0gJzwvdHI+XFxuPC90aGVhZD5cXG48dGJvZHk+XFxuJztcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSkge1xuICAgICAgdGIgKz0gJzx0cj5cXG4nO1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHRibExnbjsgKytpaSkge1xuICAgICAgICB0YiArPSBjZWxsc1tpXVtpaV07XG4gICAgICB9XG4gICAgICB0YiArPSAnPC90cj5cXG4nO1xuICAgIH1cbiAgICB0YiArPSAnPC90Ym9keT5cXG48L3RhYmxlPlxcbic7XG4gICAgcmV0dXJuIHRiO1xuICB9XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgndGFibGVzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIGZpbmQgZXNjYXBlZCBwaXBlIGNoYXJhY3RlcnNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxcXChcXHwpL2csIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuXG4gIC8vIHBhcnNlIHRhYmxlc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHRhYmxlUmd4LCBmdW5jdGlvbiAocmF3VGFibGUpIHtcblxuICAgIHZhciBpLCB0YWJsZUxpbmVzID0gcmF3VGFibGUuc3BsaXQoJ1xcbicpO1xuXG4gICAgLy8gc3RyaXAgd3JvbmcgZmlyc3QgYW5kIGxhc3QgY29sdW1uIGlmIHdyYXBwZWQgdGFibGVzIGFyZSB1c2VkXG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmxlTGluZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICgvXiB7MCwzfVxcfC8udGVzdCh0YWJsZUxpbmVzW2ldKSkge1xuICAgICAgICB0YWJsZUxpbmVzW2ldID0gdGFibGVMaW5lc1tpXS5yZXBsYWNlKC9eIHswLDN9XFx8LywgJycpO1xuICAgICAgfVxuICAgICAgaWYgKC9cXHxbIFxcdF0qJC8udGVzdCh0YWJsZUxpbmVzW2ldKSkge1xuICAgICAgICB0YWJsZUxpbmVzW2ldID0gdGFibGVMaW5lc1tpXS5yZXBsYWNlKC9cXHxbIFxcdF0qJC8sICcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmF3SGVhZGVycyA9IHRhYmxlTGluZXNbMF0uc3BsaXQoJ3wnKS5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudHJpbSgpO30pLFxuICAgICAgICByYXdTdHlsZXMgPSB0YWJsZUxpbmVzWzFdLnNwbGl0KCd8JykubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnRyaW0oKTt9KSxcbiAgICAgICAgcmF3Q2VsbHMgPSBbXSxcbiAgICAgICAgaGVhZGVycyA9IFtdLFxuICAgICAgICBzdHlsZXMgPSBbXSxcbiAgICAgICAgY2VsbHMgPSBbXTtcblxuICAgIHRhYmxlTGluZXMuc2hpZnQoKTtcbiAgICB0YWJsZUxpbmVzLnNoaWZ0KCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFibGVMaW5lcy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRhYmxlTGluZXNbaV0udHJpbSgpID09PSAnJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJhd0NlbGxzLnB1c2goXG4gICAgICAgIHRhYmxlTGluZXNbaV1cbiAgICAgICAgICAuc3BsaXQoJ3wnKVxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocmF3SGVhZGVycy5sZW5ndGggPCByYXdTdHlsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmF3VGFibGU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHJhd1N0eWxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgc3R5bGVzLnB1c2gocGFyc2VTdHlsZXMocmF3U3R5bGVzW2ldKSk7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHJhd0hlYWRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChzaG93ZG93bi5oZWxwZXIuaXNVbmRlZmluZWQoc3R5bGVzW2ldKSkge1xuICAgICAgICBzdHlsZXNbaV0gPSAnJztcbiAgICAgIH1cbiAgICAgIGhlYWRlcnMucHVzaChwYXJzZUhlYWRlcnMocmF3SGVhZGVyc1tpXSwgc3R5bGVzW2ldKSk7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHJhd0NlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgcm93ID0gW107XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaGVhZGVycy5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChyYXdDZWxsc1tpXVtpaV0pKSB7XG5cbiAgICAgICAgfVxuICAgICAgICByb3cucHVzaChwYXJzZUNlbGxzKHJhd0NlbGxzW2ldW2lpXSwgc3R5bGVzW2lpXSkpO1xuICAgICAgfVxuICAgICAgY2VsbHMucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiBidWlsZFRhYmxlKGhlYWRlcnMsIGNlbGxzKTtcbiAgfSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgndGFibGVzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIFN3YXAgYmFjayBpbiBhbGwgdGhlIHNwZWNpYWwgY2hhcmFjdGVycyB3ZSd2ZSBoaWRkZW4uXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcigndW5lc2NhcGVTcGVjaWFsQ2hhcnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3VuZXNjYXBlU3BlY2lhbENoYXJzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoRShcXGQrKUUvZywgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG0xKSB7XG4gICAgdmFyIGNoYXJDb2RlVG9SZXBsYWNlID0gcGFyc2VJbnQobTEpO1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlVG9SZXBsYWNlKTtcbiAgfSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgndW5lc2NhcGVTcGVjaWFsQ2hhcnMuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG52YXIgcm9vdCA9IHRoaXM7XG5cbi8vIENvbW1vbkpTL25vZGVKUyBMb2FkZXJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHNob3dkb3duO1xuXG4vLyBBTUQgTG9hZGVyXG59IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByZXR1cm4gc2hvd2Rvd247XG4gIH0pO1xuXG4vLyBSZWd1bGFyIEJyb3dzZXIgbG9hZGVyXG59IGVsc2Uge1xuICByb290LnNob3dkb3duID0gc2hvd2Rvd247XG59XG59KS5jYWxsKHRoaXMpO1xyXG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNob3dkb3duLmpzLm1hcFxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L3Nob3dkb3duL2Rpc3Qvc2hvd2Rvd24uanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFNpdGUgZG9jdW1lbnRhdGlvblxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiAqL1xuY29uc3QgbGF5b3V0ID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuY29uc3QgaGVhZGVyID0gcmVxdWlyZShcIi4vdmlldy9Eb2NzTWVudVwiKTtcbmNvbnN0IGxlZnQgPSByZXF1aXJlKFwiLi92aWV3L0xlZnROYXZcIik7XG5jb25zdCBtYWluID0gcmVxdWlyZShcIi4vdmlldy9NYWluRGV0YWlsXCIpO1xuY29uc3QgVGl0bGVIZWlnaHQgPSAnMzBweCc7XG5jb25zdCBGb290ZXJIZWlnaHQgPSAnMTBweCc7XG5jb25zdCBMZWZ0TmF2V2lkdGggPSAnMjAwcHgnO1xuY29uc3QgU2l0ZU5hbWUgPSAnSFNEb2NzJztcbmNvbnN0IG15Q29uZmlnID0ge1xuICAgIENvbnRhaW5lcjoge1xuICAgICAgICByb3dzOiBbVGl0bGVIZWlnaHQsIFwiZmlsbFwiLCBGb290ZXJIZWlnaHRdLFxuICAgICAgICBjc3M6ICcuaHMtc2l0ZScsXG4gICAgICAgIGNvbnRlbnQ6IFt7XG4gICAgICAgICAgICAgICAgQ29udGFpbmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtMZWZ0TmF2V2lkdGgsIFwiZmlsbFwiXSxcbiAgICAgICAgICAgICAgICAgICAgY3NzOiAnLmhzLXNpdGUtaGVhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiAnLmhzLXNpdGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBTaXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9hcGkvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgRG9jc01lbnU6IHsgZG9jU2V0OiBcIi4vZGF0YS9pbmRleC5qc29uXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgQ29udGFpbmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtMZWZ0TmF2V2lkdGgsIFwiZmlsbFwiXSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBMZWZ0TmF2OiB7fSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBNYWluRGV0YWlsOiB7fSB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgY3NzOiAnLmhzLXNpdGUtZm9vdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyhjKSBIZWxwZnVsIFNjcmlwdHMnXG4gICAgICAgICAgICAgICAgfSB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHJvdXRlOiB7XG4gICAgICAgIGRlZmF1bHQ6ICcvYXBpJyxcbiAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICAgICcvYXBpJyxcbiAgICAgICAgICAgICcvYXBpLzpsaWInLFxuICAgICAgICAgICAgJy9hcGkvOmxpYi86ZmllbGQnIC8vIGRlZmluZXMgYGh0dHA6Ly9sb2NhbGhvc3QvIyEvYXBpLzpoc0xpYi86aWQgICAgICAgIFxuICAgICAgICBdXG4gICAgfVxufTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbmV3IGxheW91dC5Ic0NvbmZpZyhbbGF5b3V0LCBoZWFkZXIsIGxlZnQsIG1haW5dKS5hdHRhY2hOb2RlVHJlZShteUNvbmZpZywgZG9jdW1lbnQuYm9keSk7XG59XG5leHBvcnRzLmluaXQgPSBpbml0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVTJsMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5VGFYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96dEhRVVZIT3pzN1FVRkZTQ3hOUVVGTk8wRkJRMDRzYlVOQlFXOURPMEZCUTNCRExEQkRRVUV5UXp0QlFVTXpReXgxUTBGQk1FTTdRVUZETVVNc01FTkJRVFpETzBGQlJ6ZERMRTFCUVUwc1YwRkJWeXhIUVVGTExFMUJRVTBzUTBGQlF6dEJRVU0zUWl4TlFVRk5MRmxCUVZrc1IwRkJTU3hOUVVGTkxFTkJRVU03UVVGRE4wSXNUVUZCVFN4WlFVRlpMRWRCUVVrc1QwRkJUeXhEUVVGRE8wRkJRemxDTEUxQlFVMHNVVUZCVVN4SFFVRlJMRkZCUVZFc1EwRkJRenRCUVVVdlFpeE5RVUZOTEZGQlFWRXNSMEZCUnp0SlFVTmlMRk5CUVZNc1JVRkJSVHRSUVVOUUxFbEJRVWtzUlVGQlJ5eERRVUZETEZkQlFWY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1dVRkJXU3hEUVVGRE8xRkJRekZETEVkQlFVY3NSVUZCUlN4VlFVRlZPMUZCUTJZc1QwRkJUeXhGUVVGRkxFTkJRVU03WjBKQlEwNHNVMEZCVXl4RlFVRkRPMjlDUVVOT0xFOUJRVThzUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TlFVRk5MRU5CUVVNN2IwSkJReTlDTEVkQlFVY3NSVUZCUlN4cFFrRkJhVUk3YjBKQlEzUkNMRTlCUVU4c1JVRkJSVHQzUWtGRFRDeEZRVUZGTEZOQlFWTXNSVUZCU3p0blEwRkRXaXhIUVVGSExFVkJRVVVzWjBKQlFXZENPMmREUVVOeVFpeFBRVUZQTEVWQlFVVXNVVUZCVVR0blEwRkRha0lzU1VGQlNTeEZRVUZETEU5QlFVODdOa0pCUTJZc1JVRkJRenQzUWtGRFJpeEZRVUZGTEZGQlFWRXNSVUZCU3l4RlFVRkZMRTFCUVUwc1JVRkJReXh0UWtGQmJVSXNSVUZCUXl4RlFVRkRPM0ZDUVVOb1JEdHBRa0ZEU2p0aFFVRkRMRVZCUVVNN1owSkJRMGdzVTBGQlV5eEZRVUZETzI5Q1FVTk9MRTlCUVU4c1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeE5RVUZOTEVOQlFVTTdiMEpCUXk5Q0xFOUJRVThzUlVGQlJUdDNRa0ZEVEN4RlFVRkZMRTlCUVU4c1JVRkJTeXhGUVVGRkxFVkJRVU03ZDBKQlEycENMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFVkJRVVVzUlVGQlF6dHhRa0ZEY0VJN2FVSkJRMG83WVVGQlF6dFpRVU5HTEVWQlFVVXNVMEZCVXl4RlFVRkZPMjlDUVVOVUxFZEJRVWNzUlVGQlJTeHBRa0ZCYVVJN2IwSkJRM1JDTEU5QlFVOHNSVUZCUlN4eFFrRkJjVUk3YVVKQlEycERMRVZCUVVNN1UwRkRURHRMUVVOS08wbEJRMFFzUzBGQlN5eEZRVUZGTzFGQlEwZ3NUMEZCVHl4RlFVRkZMRTFCUVUwN1VVRkRaaXhMUVVGTExFVkJRVVU3V1VGRFNDeE5RVUZOTzFsQlEwNHNWMEZCVnp0WlFVTllMR3RDUVVGclFpeERRVUZGTEhORVFVRnpSRHRUUVVNM1JUdExRVU5LTzBOQlEwb3NRMEZCUXp0QlFVZEdPMGxCUTBrc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTTVSaXhEUVVGRE8wRkJSa1FzYjBKQlJVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9fZGlzdC9zcmMvU2l0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQcm9nYW0gZW50cnkgcG9pbnQuIEluaXRpYXRlcyBsb2FkaW5nIHRoZSBkb2NzZXRzIGFuZCBzZXR0aW5nIHVwIGEgcm91dGVyIHN0cnVjdHVyZVxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiAqL1xuY29uc3QgU2l0ZV8xID0gcmVxdWlyZShcIi4vU2l0ZVwiKTtcblNpdGVfMS5pbml0KCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN08wZEJSVWM3T3p0QlFVVklMRTFCUVUwN1FVRkRUaXhwUTBGQk9FSTdRVUZGT1VJc1YwRkJTU3hGUVVGRkxFTkJRVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vX2Rpc3Qvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHNob3dkb3duID0gcmVxdWlyZSgnc2hvd2Rvd24nKTtcbi8qKlxuICogcHJvY2VzcyBhIG1hcmtkb3duIGNvbW1lbnQgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBlcXVpdmFsZW50IGh0bWwgc3ludGF4LlxuICogQHBhcmFtIHRleHQgdGhlIGNvbW1lbnQgdG8gbWFya2Rvd25cbiAqIEBwYXJhbSBzaG9ydCBpZiB0cnVlLCBvbmx5IHRoZSBmaXJzdCBwYXJhZ3JhcGggaXMgcmV0dXJuZWRcbiAqIEByZXR1cm4gdGhlIG1hcmtlZCBkb3duIGNvbW1lbnRcbiAqL1xuZnVuY3Rpb24gbWFya0Rvd24odGV4dCwgc2hvcnQgPSBmYWxzZSwgY3VycmVudFJvdXRlKSB7XG4gICAgY29uc3QgY29udmVydGVyID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcih7XG4gICAgICAgIHRhYmxlczogdHJ1ZSxcbiAgICAgICAgZ2hDb21wYXRpYmxlSGVhZGVySWQ6IHRydWUsXG4gICAgICAgIHNtYXJ0SW5kZW50YXRpb25GaXg6IHRydWUsXG4gICAgICAgIHRha3NsaXN0czogdHJ1ZSxcbiAgICAgICAgc3RyaWtldGhyb3VnaDogdHJ1ZSAvLyBlbmFibGVzIH5+dGV4dH5+XG4gICAgfSk7XG4gICAgbGV0IHJlc3VsdCA9ICghdGV4dCkgPyAnJyA6IGNvbnZlcnRlci5tYWtlSHRtbCh0ZXh0KTtcbiAgICBpZiAoc2hvcnQpIHtcbiAgICAgICAgY29uc3QgaSA9IHJlc3VsdC5pbmRleE9mKCc8L3A+Jyk7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBzdWJzdGl0dXRlTGlua3MocmVzdWx0LCBjdXJyZW50Um91dGUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLm1hcmtEb3duID0gbWFya0Rvd247XG4vKipcbiAqIHJlcGxhY2VzIGxpbmsgc3RhdGVtZW50cyBpbiB0aGUgY29tbWVudCB3aXRoIGh5cGVybGluayByZWZlcmVuY2VzLlxuICogVGhlIGZvcm1hdCBvZiBhIGxpbmsgc3RhdGVtZW50IGlzIFwie0BsaW5rICpkb2NzZXQqOipwYXRoKiBsaW5rZWQgdGV4dH1cIiwgd2hlcmVcbiAqIC0gKmRvY3NldCogaXMgdGhlIG5hbWUgb2YgdGhlIGRvY3NldFxuICogLSAqcGF0aCogaXMgdGhlIHN0cnVjdHVyYWwgcGF0aCBvZiBhIGNvbXBvbmVudCB3aXRoIHN0ZXBzIG9uIHRoZSBwYXRoIHNlcGFyYXRlZCBieSBhIHBlcmlvZCxcbiAqICAgIGZvbGxvd2luZyB0aGUgcGF0dGVybiAqbW9kdWxlKi4qZW50aXR5Ki4qbWVtYmVyKiB3aXRoXG4gKiAgICAgLSAqbW9kdWxlKiA9IHRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgZmlsZVxuICogICAgIC0gKmVudGl0eSogPSBbKmNsYXNzKiB8ICpmdW5jdGlvbiogfCAqdmFyaWFibGUqXVxuICogICAgIC0gKm1lbWJlciogPSBbKm1ldGhvZCogfCAqdmFyaWFibGUqXVxuICogLSBpZiAqcGF0aCogaXMgb21pdHRpZWQsIG9yIGlzIGBvdmVydmlld2AsIHRoZSBsaWJyYXJ5IG92ZXJ2aWV3IHdpbGwgYmUgc2hvd24uXG4gKlxuICogRXhhbXBsZXM6XG4gKiAtICd7QGxpbmsgaHNEb2M6IERvYyBPdmVydmlld30nIC0+IHtAbGluayBoc0RvYzogRG9jIE92ZXJ2aWV3fVxuICogLSAne0BsaW5rIGhzRG9jOkRvY1NldHMuRG9jU2V0cy5hZGQgdGhlIGBhZGRzYCBmdW5jdGlvbn0nIC0tPiB7QGxpbmsgaHNEb2M6RG9jU2V0cy5Eb2NTZXRzLmFkZCB0aGUgYGFkZHNgIGZ1bmN0aW9ufVxuICpcbiAqIEBwYXJhbSBjb21tZW50IHRoZSBjb21tZW50IGluIHdoaWNoIHRvIHJlcGxhY2UgdGhlIGxpbmtzXG4gKiBAcmV0dXJuIHRoZSBjb21tZW50IHdpdGggc3Vic3RpdHV0ZWQgbGlua3NcbiAqL1xuZnVuY3Rpb24gc3Vic3RpdHV0ZUxpbmtzKGNvbW1lbnQsIGN1cnJlbnRSb3V0ZSkge1xuICAgIC8qXG4gICAgICAgIGNvbW1lbnQgPSBjb21tZW50LnJlcGxhY2UoL1teXCJgJ117QGxpbmsgKFtcXFNdKik6KFtcXFNdKilcXHMqKC4rKX0vZ2ksIChtYXRjaCwgLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGliID0gYXJnc1swXTtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGFyZ3NbMV07XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXJnc1syXTtcbiAgICAgICAgICAgIHJldHVybiAobW9kdWxlID09PSAnJyB8fCBtb2R1bGUgPT09ICdvdmVydmlldycpP1xuICAgICAgICAgICAgICAgICAgICBgIDxhIGhyZWY9XCIjIS9hcGkvJHtsaWJ9LzBcIj4ke3RleHR9PC9hPmAgOlxuICAgICAgICAgICAgICAgICAgICBgIDxhIGhyZWY9XCIjIS9hcGkvJHtsaWJ9LyR7bGlifS4ke21vZHVsZX1cIj4ke3RleHR9PC9hPmA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tbWVudDtcbiAgICAqL1xuICAgIGZ1bmN0aW9uIGRlY29uc3RydWN0Um91dGUocm91dGUpIHtcbiAgICAgICAgbGV0IGxpYiwgbW9kO1xuICAgICAgICByb3V0ZS5yZXBsYWNlKC9cXC8oW15cXC8uXSopXFwvKFteXFwvXFxzXSokKS9naSwgKG1hdGNoLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBsaWIgPSBhcmdzWzBdO1xuICAgICAgICAgICAgbW9kID0gYXJnc1sxXTtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbbGliLCBtb2RdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRMaWJNb2QocGF0aCkge1xuICAgICAgICBsZXQgbGliLCBtb2QsIGZyYWc7XG4gICAgICAgIGlmIChwYXRoLmluZGV4T2YoJzonKSA+IDApIHtcbiAgICAgICAgICAgIFtsaWIsIG1vZF0gPSBwYXRoLnNwbGl0KCc6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsaWIgPSBkZWZMaWI7XG4gICAgICAgICAgICBtb2QgPSBwYXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2QuaW5kZXhPZignIycpID4gMCkge1xuICAgICAgICAgICAgW21vZCwgZnJhZ10gPSBtb2Quc3BsaXQoJyMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2xpYiwgbW9kLCBmcmFnXTtcbiAgICB9XG4gICAgbGV0IFtkZWZMaWJdID0gZGVjb25zdHJ1Y3RSb3V0ZShjdXJyZW50Um91dGUpO1xuICAgIGNvbW1lbnQgPSBjb21tZW50LnJlcGxhY2UoL1teXCJgJ117QGxpbmsgKFtcXFNdKilcXHMqKC4rKX0vZ2ksIChtYXRjaCwgLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBwYXRoID0gYXJnc1swXTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGFyZ3NbMV07XG4gICAgICAgIGxldCBbbGliLCBtb2R1bGVdID0gZ2V0TGliTW9kKHBhdGgpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZSA9PT0gJzAnIHx8IG1vZHVsZSA9PT0gJ292ZXJ2aWV3JykgP1xuICAgICAgICAgICAgYCA8YSBocmVmPVwiIyEvYXBpLyR7bGlifS8wXCI+JHt0ZXh0fTwvYT5gIDpcbiAgICAgICAgICAgIGAgPGEgaHJlZj1cIiMhL2FwaS8ke2xpYn0vJHtsaWJ9LiR7bW9kdWxlfVwiPiR7dGV4dH08L2E+YDtcbiAgICB9KTtcbiAgICByZXR1cm4gY29tbWVudDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnlhMlJ2ZDI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YldGeWEyUnZkMjR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlNTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1FVRkZkRU03T3pzN08wZEJTMGM3UVVGRFNDeHJRa0ZCZVVJc1NVRkJWeXhGUVVGRkxGRkJRV01zUzBGQlN5eEZRVUZGTEZsQlFXMUNPMGxCUXpGRkxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJRenRSUVVOeVF5eE5RVUZOTEVWQlFXdENMRWxCUVVrN1VVRkROVUlzYjBKQlFXOUNMRVZCUVVrc1NVRkJTVHRSUVVNMVFpeHRRa0ZCYlVJc1JVRkJTeXhKUVVGSk8xRkJRelZDTEZOQlFWTXNSVUZCWlN4SlFVRkpPMUZCUXpWQ0xHRkJRV0VzUlVGQlZ5eEpRVUZKTEVOQlFVa3NiVUpCUVcxQ08wdEJRM1JFTEVOQlFVTXNRMEZCUXp0SlFVTklMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUlN4RlFVRkZMRWRCUVVjc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTndSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFJc1RVRkJUU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOcVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVRkRMRU5CUVVNN1NVRkRha1FzUTBGQlF6dEpRVU5FTEUxQlFVMHNSMEZCUnl4bFFVRmxMRU5CUVVNc1RVRkJUU3hGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzBsQlF5OURMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRGJFSXNRMEZCUXp0QlFXWkVMRFJDUVdWRE8wRkJSVVE3T3pzN096czdPenM3T3pzN096czdPMGRCYVVKSE8wRkJRMGdzZVVKQlFYbENMRTlCUVdNc1JVRkJSU3haUVVGdFFqdEpRVU0xUkRzN096czdPenM3T3p0TlFWVkZPMGxCUTBVc01FSkJRVEJDTEV0QlFWazdVVUZEYkVNc1NVRkJTU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzFGQlEySXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXcwUWtGQk5FSXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFbEJRVWs3V1VGRGRrUXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5rTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFpDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTJRc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGRFSXNRMEZCUXp0SlFVVkVMRzFDUVVGdFFpeEpRVUZYTzFGQlF6RkNMRWxCUVVrc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTTdVVUZEYmtJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkNMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFrTXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJSU3hEUVVGRE8xbEJRMHdzUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXp0WlFVTmlMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRFppeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRha01zUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWRUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4blFrRkJaMElzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVVTVReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4blEwRkJaME1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRWxCUVVrN1VVRkRka1VzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1F5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFMUJRVTBzUzBGQlN5eFZRVUZWTEVOQlFVTTdXVUZEZUVNc2IwSkJRVzlDTEVkQlFVY3NUMEZCVHl4SlFVRkpMRTFCUVUwN1dVRkRlRU1zYjBKQlFXOUNMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzVFVGQlRTeExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRPMGxCUTNCRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJRenRCUVVWdVFpeERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vX2Rpc3Qvc3JjL21hcmtkb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhzbGF5b3V0XzEgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jb25zdCBEb2NTZXRzXzEgPSByZXF1aXJlKFwiLi4vRG9jU2V0c1wiKTtcbmNvbnN0IGhzd2lkZ2V0XzEgPSByZXF1aXJlKFwiaHN3aWRnZXRcIik7XG4vKipcbiAqIENyZWF0ZXMgdGhlIHRpdGxlIG1lbnUgZm9yIHNlbGVjdGluZyBiZXR3ZWVuIHRoZSBkaWZmZXJlbnQgZG9jc2V0cy5cbiAqIEluc3RhbnRpYXRlIHRoZSBEb2NzTWVudSB2aWEgYSBzdGFuZGFyZCBgbWl0aHJpbGAgY2FsbDpgYGBcbiAqICAgIG0oRG9jc01lbnUsIHsgZG9jU2V0OjxwYXRoVG9JbmRleEZpbGU+fSlcbiAqIGBgYFxuICogRG9jc01lbnUgcGVyZm9ybXMgdGhlIGZvbGxvd2luZyBhY3Rpb25zOlxuICogLSBmb3IgdGhlIGZpcnN0IGNhbGwgb2YgdGhlIHZpZXcgbGlmZWN5Y2xlIGhvb2ssIHRoZSBhdmFpbGFibGUgZG9jU2V0cyBhcmUgbG9hZGVkLlxuICogICBEb2NzTWVudSBzZWFyY2hlcyBmb3IgYW4gaW5kZXggYGpzb25gIGZpbGUgYXQgdGhlIGxvY2F0aW9uIHNwZWNpZmllZCBpbiB0aGVcbiAqICAgYGRvY1NldGAgZmllbGQgb2YgdGhlIGBub2RlLmF0dHJzYCBwYXJhbWV0ZXIuIElmIG5vbmUgaXMgc3BlY2lmaWVkLCB0aGVcbiAqICAgZGVmYXVsdCBpcyB1c2VkIGFzIHNwZWNpZmllZCBpbiB0aGUge0BsaW5rIGhzRG9jOkRvY1NldHMuRklMRSBEb2NTZXRzIEZJTEV9IHNldHRpbmcuXG4gKiAtIERvY3NNZW51IHJldHJpZXZlcyBhbGwgYXZhaWxhYmxlIGRvY1NldHMgdmlhIHtAbGluayBoc0RvYzpEb2NTZXRzLkRvY1NldHMuZ2V0IERvY1NldHMuZ2V0fS5cbiAqIC0gRG9jc01lbnUgY3JlYXRlcyBhIGBNZW51RGVzY2Agc3RydWN0dXJlIHdpdGggYSB7QGxpbmsgaHNXaWRnZXQ6aHNNZW51Lk1lbnVEZXNjLnNlbGVjdCBgc2VsZWN0YH0gY2FsbGJhY2sgdGhhdCBpbml0aWF0ZXMgYSByb3V0ZSBjaGFuZ2VcbiAqICAgdG8gdGhlIHNlbGVjdGVkIGRvY1NldFxuICovXG5jbGFzcyBEb2NzTWVudSBleHRlbmRzIGhzbGF5b3V0XzEuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kb2NTZXQgPSAnJztcbiAgICB9XG4gICAgZ2V0RGVzYyhhdHRycykge1xuICAgICAgICBpZiAodGhpcy5kb2NTZXQgIT09IGF0dHJzLmRvY1NldCkge1xuICAgICAgICAgICAgdGhpcy5kb2NTZXQgPSBhdHRycy5kb2NTZXQ7XG4gICAgICAgICAgICBEb2NTZXRzXzEuRG9jU2V0cy5sb2FkTGlzdChhdHRycy5kb2NTZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gRG9jU2V0c18xLkRvY1NldHMuZ2V0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtczogaXRlbXMubWFwKChjKSA9PiBjKSxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogKGF0dHJzLnJvdXRlICYmIGF0dHJzLnJvdXRlLmxpYikgPyBhdHRycy5yb3V0ZS5saWIgOiBpdGVtc1swXSxcbiAgICAgICAgICAgIHNlbGVjdDogKGl0ZW0pID0+IGhzbGF5b3V0XzEubS5yb3V0ZS5zZXQoJy9hcGkvOmxpYi8wJywgeyBsaWI6IGl0ZW0gfSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50cyhub2RlKSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLmdldERlc2Mobm9kZS5hdHRycyk7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oaHN3aWRnZXRfMS5NZW51LCB7IGRlc2M6IGRlc2MgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Eb2NzTWVudSA9IERvY3NNZW51O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkc5amMwMWxiblV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk4dUxpOXpjbU12ZG1sbGR5OUViMk56VFdWdWRTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIVkRRVUZuUkR0QlFVTm9SQ3gzUTBGQmEwUTdRVUZEYkVRc2RVTkJRV2RFTzBGQlJXaEVPenM3T3pzN096czdPenM3TzBkQllVYzdRVUZEU0N4alFVRnpRaXhUUVVGUkxHOUNRVUZUTzBsQlFYWkRPenRSUVVOSkxGZEJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZ0UW1oQ0xFTkJRVU03U1VGcVFsY3NUMEZCVHl4RFFVRkRMRXRCUVZNN1VVRkRja0lzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkRNMElzYVVKQlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEyNURMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eHBRa0ZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRelZDTEUxQlFVMHNRMEZCUXp0WlFVTklMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNNVFpeFpRVUZaTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVVc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4SlFVRlhMRXRCUVVzc1dVRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkZMRVZCUVVNc1IwRkJSeXhGUVVGRExFbEJRVWtzUlVGQlF5eERRVUZETzFOQlEyeEZMRU5CUVVNN1NVRkRUaXhEUVVGRE8wbEJSVVFzWVVGQllTeERRVUZETEVsQlFWVTdVVUZEY0VJc1RVRkJUU3hKUVVGSkxFZEJRVmtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGREwwTXNUVUZCVFN4RFFVRkRMRmxCUVVNc1EwRkJReXhsUVVGSkxFVkJRVVVzUlVGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkRMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBOQlEwbzdRVUZ3UWtRc05FSkJiMEpESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vX2Rpc3Qvc3JjL3ZpZXcvRG9jc01lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogTGVmdE5hdjogUmVzcG9uc2libGUgZm9yIGNvbnN0cnVjdGluZyB0aGUgbGVmdC1oYW5kIG5hdmlnYXRpb24gcGFuZS5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogKi9cbmNvbnN0IGhzbGF5b3V0XzEgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jb25zdCBoc2xheW91dF8yID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuY29uc3QgRG9jU2V0c18xID0gcmVxdWlyZShcIi4uL0RvY1NldHNcIik7XG5jb25zdCBQYXJ0c18xID0gcmVxdWlyZShcIi4vUGFydHNcIik7XG4vKipcbiAqIENvbnN0cnVjdHMgdGhlIGxlZnQtaGFuZCBuYXZpZ2F0aW9uIHBhbmVcbiAqL1xuY2xhc3MgTGVmdE5hdiBleHRlbmRzIGhzbGF5b3V0XzIuQ29udGFpbmVyIHtcbiAgICBnZXRDb21wb25lbnRzKG5vZGUpIHtcbiAgICAgICAgbGV0IGxpYjtcbiAgICAgICAgbGV0IGZpZWxkO1xuICAgICAgICBpZiAobm9kZS5hdHRycyAmJiBub2RlLmF0dHJzLnJvdXRlKSB7XG4gICAgICAgICAgICBsaWIgPSBub2RlLmF0dHJzLnJvdXRlLmxpYjtcbiAgICAgICAgICAgIGZpZWxkID0gbm9kZS5hdHRycy5yb3V0ZS5maWVsZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZGwgPSBEb2NTZXRzXzEuRG9jU2V0cy5nZXQobGliLCAwKSB8fCB7IG5hbWU6ICd1bmtub3duJywgaWQ6IDAgfTtcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWxlZnQnLCBbaHNsYXlvdXRfMS5tKCcuaHMtbGVmdC1uYXYnLCBuYXZMaXN0KG1kbCwgZmllbGQpKV0pO1xuICAgIH1cbn1cbmV4cG9ydHMuTGVmdE5hdiA9IExlZnROYXY7XG4vKiogY3JlYXRlcyB0aGUgbGlzdCBpZiBtb2R1bGVzIChgKi50c2AgZmlsZXMpICovXG5mdW5jdGlvbiBuYXZMaXN0KG1kbCwgZmllbGQpIHtcbiAgICBpZiAobWRsLmtpbmQgPT09IDApIHtcbiAgICAgICAgY29uc3QgbW9kdWxlcyA9IG1kbC5jaGlsZHJlbiA/IG1kbC5jaGlsZHJlbi5tYXAoKGMpID0+IGV4dGVybmFsTW9kdWxlKGMsIGZpZWxkKSkgOiBbJ25vIGNoaWxkcmVuJ107XG4gICAgICAgIG1vZHVsZXMudW5zaGlmdChoc2xheW91dF8xLm0oJy5ocy1sZWZ0LW5hdi1oZWFkZXInLCAnTW9kdWxlcycpKTtcbiAgICAgICAgcmV0dXJuIFtoc2xheW91dF8xLm0oJy5ocy1sZWZ0LW5hdi1jb250ZW50JywgbW9kdWxlcyldO1xuICAgICAgICAvLyAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiBub3QgYSBoZWFkIG5vZGUnKTtcbiAgICB9XG59XG4vKipcbiAqIG1vZHVsZXMgdG8gaWdub3JlIGluIHRoZSBsaXN0XG4gKi9cbmNvbnN0IGlnbm9yZU1vZHVsZXMgPSB7XG4gICAgb3ZlcnZpZXc6IHRydWUsXG4gICAgaW5kZXg6IHRydWUgLy8gdGhlIGluZGV4LnRzIGZpbGVcbn07XG5jb25zdCBleHBhbmRlZCA9IHt9O1xuLyoqXG4gKiBwcm9jZXNzZXMgYSBtb2R1bGUsIGkuZS4gYSBgLnRzYCBmaWxlLlxuICovXG5mdW5jdGlvbiBleHRlcm5hbE1vZHVsZShtZGwsIGZpZWxkKSB7XG4gICAgY29uc3QgdG9nZ2xlRXhwYW5kZWQgPSAoKSA9PiB7IGV4cGFuZGVkW21kbC5mdWxsUGF0aF0gPSAhZXhwYW5kZWRbbWRsLmZ1bGxQYXRoXTsgfTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IChmaWVsZCA9PT0gJycgKyBtZGwuaWQgfHwgZmllbGQuaW5kZXhPZihtZGwuZnVsbFBhdGgpID09PSAwKSA/XG4gICAgICAgICcuaHMtbGVmdC1uYXYtc2VsZWN0ZWQnIDogJyc7XG4gICAgLy8gaWYgZmllbGQubGVuZ3RoIGNvbmRpdGlvbiBpcyBjb21tZW50ZWQgb3V0LCB0aGUgcGFuZWwgd2lsbCBhbHdheXMgc3RheSBvcGVuXG4gICAgaWYgKHNlbGVjdGVkIC8qJiYgZmllbGQubGVuZ3RoID4gbWRsLmZ1bGxQYXRoLmxlbmd0aCovKSB7XG4gICAgICAgIGV4cGFuZGVkW21kbC5mdWxsUGF0aF0gPSB0cnVlO1xuICAgIH1cbiAgICAvLyBkb24ndCBzaG93IG1vZHVsZXMgZnJvbSBvdGhlciBwcm9qZWN0cyAoaXNFeHBvcnRlZCBmbGFnKSBvciBtb2R1bGVzIG9uIHRoZSBpZ25vcmUgbGlzdFxuICAgIGNvbnN0IHNraXAgPSAobWRsLmZsYWdzICYmIG1kbC5mbGFncy5pc0V4dGVybmFsKSB8fCBpZ25vcmVNb2R1bGVzW21kbC5uYW1lXTtcbiAgICByZXR1cm4gc2tpcCA/IGhzbGF5b3V0XzEubSgnJykgOiBoc2xheW91dF8xLm0oYC5ocy1sZWZ0LW5hdi1tb2R1bGVgLCB7IG9uY2xpY2s6IHRvZ2dsZUV4cGFuZGVkIH0sIFtcbiAgICAgICAgUGFydHNfMS5saWJMaW5rKGBhLmhzLWxlZnQtbmF2LW1vZHVsZS1uYW1lICR7c2VsZWN0ZWR9YCwgbWRsLmxpYiwgbWRsLmZ1bGxQYXRoLCBtZGwubmFtZSksXG4gICAgICAgICFtZGwuZ3JvdXBzID8gdW5kZWZpbmVkIDogaHNsYXlvdXRfMS5tKCcuaHMtbGVmdC1uYXYtbW9kdWxlLWNvbnRlbnQnLCB7IGNsYXNzOiBleHBhbmRlZFttZGwuZnVsbFBhdGhdID8gJycgOiAnaHMtY29sbGFwc2VkJyB9LCBtZGwuZ3JvdXBzLm1hcCgoZykgPT4gZW50cmllcyhnLCBtZGwsIGZpZWxkKSkpXG4gICAgXSk7XG59XG4vKipcbiAqIHByb2Nlc3NlcyBhIGdyb3VwIG9mIGVudHJpZXMsIGUuZy4gVmFyaWFibGVzLCBGdW5jdGlvbnMsIG9yIENsYXNzZXMuXG4gKiBAcGFyYW0gZ3JvdXAgdGhlIGdyb3VwIHN0cnVjdHVyZSB3aXRoaW4gdGhlIGRvY3NldFxuICogQHBhcmFtIG1kbCB0aGUgZW50aXJlIG1vZHVsZSBkb2NzZXRcbiAqIEBwYXJhbSBmaWVsZCB0aGUgZmllbGQgSUQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYWluIHBhbmVsXG4gKi9cbmZ1bmN0aW9uIGVudHJpZXMoZ3JvdXAsIG1kbCwgZmllbGQpIHtcbiAgICBmdW5jdGlvbiBtb2R1bGVHZXQoYykge1xuICAgICAgICByZXR1cm4gRG9jU2V0c18xLkRvY1NldHMuZ2V0KG1kbC5saWIsIGMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBwcm9jZXNzZXMgb25lIGVudHJ5IHdpdGhpbiBhIGdyb3VwLCBlLmcuIG9uZSB2YXJpYWJsZSwgZnVuY3Rpb24sIG9yIGNsYXNzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVudHJ5KG1vZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IChmaWVsZCA9PT0gJycgKyBtb2QuaWQgfHwgZmllbGQgPT09IG1vZC5mdWxsUGF0aCkgPyAnLmhzLWxlZnQtbmF2LXNlbGVjdGVkJyA6ICcnO1xuICAgICAgICBjb25zdCBleHBvcnRlZCA9IChtb2QuZmxhZ3MgJiYgbW9kLmZsYWdzLmlzRXhwb3J0ZWQpO1xuICAgICAgICBjb25zdCBzdGF0aWsgPSAobW9kLmZsYWdzICYmIG1vZC5mbGFncy5pc1N0YXRpYyk7XG4gICAgICAgIGNvbnN0IGNzcyA9IGBhLmhzLWxlZnQtbmF2LWVudHJ5ICR7c2VsZWN0ZWR9ICR7ZXhwb3J0ZWQgPyAnLmhzLWxlZnQtbmF2LWV4cG9ydGVkJyA6ICcnfWA7XG4gICAgICAgIHJldHVybiAoIWV4cG9ydGVkICYmIGdyb3VwLnRpdGxlID09PSAnVmFyaWFibGVzJykgPyAnJyA6XG4gICAgICAgICAgICBoc2xheW91dF8xLm0oJycsIFtcbiAgICAgICAgICAgICAgICBzdGF0aWsgPyAnc3RhdGljJyA6ICcnLFxuICAgICAgICAgICAgICAgIFBhcnRzXzEubGliTGluayhjc3MsIG1vZC5saWIsIG1vZC5mdWxsUGF0aCwgbW9kLm5hbWUpXG4gICAgICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZW1wdHkobW9kKSB7IHJldHVybiBtb2QgIT09ICcnOyB9XG4gICAgbGV0IGdycCA9IFtdO1xuICAgIGlmIChncm91cCAmJiBncm91cC5jaGlsZHJlbikge1xuICAgICAgICBncnAgPSBncm91cC5jaGlsZHJlblxuICAgICAgICAgICAgLm1hcChtb2R1bGVHZXQpIC8vIHJlcGxhY2UgaWQgcmVmZXJlbmNlIGJ5IG1vZHVsZVxuICAgICAgICAgICAgLnNvcnQoZXhwb3J0QXNjZW5kaW5nKSAvLyBzb3J0OiBleHBvcnRlZCBmaXJzdCwgdGhlbiBhbHBoYWJldGljYWxseVxuICAgICAgICAgICAgLm1hcChlbnRyeSkgLy8gcmVwbGFjZSBtb2R1bGUgYnkgdm5vZGUgc3RydWN0dXJlXG4gICAgICAgICAgICAuZmlsdGVyKGVtcHR5KTsgLy8gZmlsdGVyIGVtcHR5IGVsZW1lbnRzXG4gICAgICAgIGlmIChncnAubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZ3JwLnVuc2hpZnQoaHNsYXlvdXRfMS5tKCcuaHMtbGVmdC1uYXYtaGVhZGVyJywgZ3JvdXAudGl0bGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGdycC5sZW5ndGggPiAxKSA/IGhzbGF5b3V0XzEubShgLmhzLWxlZnQtbmF2LWVudHJpZXNgLCBncnApIDogJyc7XG59XG4vKipcbiAqIHNvcnRpbmcgZnVuY3Rpb246IHNvcnQgZmlyc3QgYnkgZXhwb3J0ZWQgc3RhdHVzLCB0aGVuIGFscGhhYmV0aWNhbGx5LlxuICovXG5mdW5jdGlvbiBleHBvcnRBc2NlbmRpbmcoYSwgYikge1xuICAgIGlmIChhLmZsYWdzICYmIGIuZmxhZ3MpIHtcbiAgICAgICAgaWYgKGEuZmxhZ3MuaXNFeHBvcnRlZCAmJiBiLmZsYWdzLmlzRXhwb3J0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYS5mbGFncy5pc0V4cG9ydGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYi5mbGFncy5pc0V4cG9ydGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEdWbWRFNWhkaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTkyYVdWM0wweGxablJPWVhZdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBkQlJVYzdPenRCUVVWSUxFMUJRVTA3UVVGRFRpeDFRMEZCYjBNN1FVRkRjRU1zZFVOQlFXOURPMEZCUTNCRExIZERRVUZ4UXp0QlFVTnlReXh0UTBGQmEwTTdRVUZIYkVNN08wZEJSVWM3UVVGRFNDeGhRVUZ4UWl4VFFVRlJMRzlDUVVGVE8wbEJRMnhETEdGQlFXRXNRMEZCUXl4SlFVRlhPMUZCUTNKQ0xFbEJRVWtzUjBGQlZTeERRVUZETzFGQlEyWXNTVUZCU1N4TFFVRlpMRU5CUVVNN1VVRkRha0lzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha01zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF6dFpRVU16UWl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTI1RExFTkJRVU03VVVGRFJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4cFFrRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJReXhKUVVGSkxFVkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVXNSVUZCUXl4RFFVRkRMRVZCUVVNc1EwRkJRenRSUVVNeFJDeE5RVUZOTEVOQlFVTXNXVUZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExGbEJRVU1zUTBGQlF5eGpRVUZqTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnVSU3hEUVVGRE8wTkJRMG83UVVGWVJDd3dRa0ZYUXp0QlFVVkVMR2xFUVVGcFJEdEJRVU5xUkN4cFFrRkJhVUlzUjBGQlR5eEZRVUZGTEV0QlFWazdTVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBDTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVVVzUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGTExFdEJRVXNzWTBGQll5eERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZEZEVjc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZETEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlSQ3hOUVVGTkxFTkJRVU1zUTBGQlF5eFpRVUZETEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndSQ3hqUVVGak8xRkJRMlFzWjBSQlFXZEVPMGxCUXpWRExFTkJRVU03UVVGRFRDeERRVUZETzBGQlJVUTdPMGRCUlVjN1FVRkRTQ3hOUVVGTkxHRkJRV0VzUjBGQlJ6dEpRVU5zUWl4UlFVRlJMRVZCUVVrc1NVRkJTVHRKUVVOb1FpeExRVUZMTEVWQlFVOHNTVUZCU1N4RFFVRkpMRzlDUVVGdlFqdERRVU16UXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hSUVVGUkxFZEJRWE5DTEVWQlFVVXNRMEZCUXp0QlFVVjJRenM3UjBGRlJ6dEJRVU5JTEhkQ1FVRjNRaXhIUVVGUExFVkJRVVVzUzBGQldUdEpRVU42UXl4TlFVRk5MR05CUVdNc1IwRkJSeXhSUVVGUkxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMjVHTEUxQlFVMHNVVUZCVVN4SFFVRkhMRU5CUVVNc1MwRkJTeXhMUVVGSExFVkJRVVVzUjBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOeVJTeDFRa0ZCZFVJc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRmFrTXNPRVZCUVRoRk8wbEJRemxGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXg1UTBGQmVVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVGRExFTkJRVU03U1VGRk1VWXNlVVpCUVhsR08wbEJRM3BHTEUxQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzU1VGQlNTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkROVVVzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUlN4WlFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzV1VGQlF5eERRVUZETEhGQ1FVRnhRaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZETEdOQlFXTXNSVUZCUlN4RlFVRkZPMUZCUTNSRkxHVkJRVThzUTBGQlF5dzJRa0ZCTmtJc1VVRkJVU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEYWtZc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZGTEZOQlFWTXNSMEZCUnl4WlFVRkRMRU5CUVVNc05rSkJRVFpDTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUXl4RlFVRkZMRWRCUVVNc1kwRkJZeXhGUVVGRExFVkJRM2hITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlN5eExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEZWtRc1EwRkJReXhEUVVGRE8wRkJRMUFzUTBGQlF6dEJRVVZFT3pzN096dEhRVXRITzBGQlEwZ3NhVUpCUVdsQ0xFdEJRVk1zUlVGQlJTeEhRVUZQTEVWQlFVVXNTMEZCV1R0SlFVTTNReXh0UWtGQmJVSXNRMEZCU3p0UlFVTndRaXhOUVVGTkxFTkJRVU1zYVVKQlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wbEJRMFE3TzA5QlJVYzdTVUZEU0N4bFFVRmxMRWRCUVU4N1VVRkRiRUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXl4TFFVRkxMRXRCUVVjc1JVRkJSU3hIUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NTMEZCU3l4TFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJTeDFRa0ZCZFVJc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRE0wWXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGNrUXNUVUZCVFN4TlFVRk5MRWRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRGJrUXNUVUZCVFN4SFFVRkhMRWRCUVVjc2RVSkJRWFZDTEZGQlFWRXNTVUZCU1N4UlFVRlJMRWRCUVVNc2RVSkJRWFZDTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkRka1lzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRWxCUVVrc1MwRkJTeXhEUVVGRExFdEJRVXNzUzBGQlJ5eFhRVUZYTEVOQlFVTXNSMEZCUlN4RlFVRkZPMWxCUXk5RExGbEJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTBZc1RVRkJUU3hIUVVGRkxGRkJRVkVzUjBGQlJTeEZRVUZGTzJkQ1FVTndRaXhsUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRPMkZCUTJoRUxFTkJRVU1zUTBGQlF6dEpRVU5ZTEVOQlFVTTdTVUZGUkN4bFFVRmxMRWRCUVU4c1NVRkJTU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZPVU1zU1VGQlNTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJJc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZDTEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVVHRoUVVObUxFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCVXl4cFEwRkJhVU03WVVGRGVFUXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRkxEUkRRVUUwUXp0aFFVTnVSU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFXRXNiME5CUVc5RE8yRkJRek5FTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGVExIZENRVUYzUWp0UlFVTndSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrSXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGRExFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtRc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRFJDeE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZGTEZsQlFVTXNRMEZCUXl4elFrRkJjMElzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRha1VzUTBGQlF6dEJRVVZFT3p0SFFVVkhPMEZCUTBnc2VVSkJRWGxDTEVOQlFVc3NSVUZCUlN4RFFVRkxPMGxCUTJwRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY2tJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVGRExFTkJRVU03VVVGRGVrVXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVRkRMRU5CUVVNN1VVRkRNME1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGQlF5eERRVUZETzFGQlF6RkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFJRVUZETEVOQlFVTTdTVUZEY0VNc1EwRkJRenRKUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVRkRMRU5CUVVNN1FVRkRkRU1zUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL19kaXN0L3NyYy92aWV3L0xlZnROYXYuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUHJvY2Vzc2luZyBvZiBjb21tZW50cy5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogKi9cbmNvbnN0IGhzbGF5b3V0XzEgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jb25zdCBtYXJrZG93bl8xID0gcmVxdWlyZShcIi4uL21hcmtkb3duXCIpO1xuY29uc3QgTWFpbkV4YW1wbGVfMSA9IHJlcXVpcmUoXCIuL01haW5FeGFtcGxlXCIpO1xuLyoqXG4gKiBNYWluIGNvbW1lbnQgcHJvY2Vzc2luZy4gVGhlIHJlc3VsdCBhcHBlYXJzIGRpcmVjdGx5IGJlbG93IHRoZSB0aXRsZSBpbiB0aGUgbWFpbiBwYW5lbC5cbiAqIEZ1bmN0aW9uIHBhcmFtZXRlcnMgYXJlIG5vdCByZXBvcnRlZCBpbiBzaG9ydCBmb3JtIGhlcmUgc2luY2UgaXQgaXMgYXNzdW1lZCB0aGV5IHdpbGwgYmUgbGlzdGVkXG4gKiBpbmRpdmlkdWFsbHkgYmVsb3cgdGhlIG1haW4gY29tbWVudFxuICogQHBhcmFtIG1kbCB0aGUgbW9kdWxlIHRvIHNjYW4gZm9yIGNvbW1lbnRzXG4gKiBAcmV0dXJuIGEgdm5vZGUgcmVwcmVzZW50aW5nIHRoZSBjb21tZW50IGVudHJpZXNcbiAqL1xuZnVuY3Rpb24gY29tbWVudExvbmcobWRsKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcbiAgICBpZiAobWRsLmNvbW1lbnQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKHRleHRPclNob3J0VGV4dE9yRGVzY3JpcHRpb24obWRsLmNvbW1lbnQsIGZhbHNlKSk7XG4gICAgICAgIGNvbnRlbnQucHVzaChyZXR1cm5zKG1kbC5jb21tZW50LCBmYWxzZSkpO1xuICAgICAgICBjb250ZW50LnB1c2goY29tbWVudFJlbWFpbmRlcihtZGwuY29tbWVudCkpO1xuICAgIH1cbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1jb21tZW50JywgY29udGVudCk7XG59XG5leHBvcnRzLmNvbW1lbnRMb25nID0gY29tbWVudExvbmc7XG4vKipcbiAqIFNob3J0ZW5kZWQgY29tbWVudCBwcm9jZXNzaW5nLiBUaGlzIGZvcm0gaXMgdXNlZCB0byByZXBvcnQgb24gc3ViaXRlbXMgYmVsb3cgdGhlIG1haW4gcGFuZWwgaXRlbS5cbiAqIElmIGBzaG9ydGAgaXMgdHJ1ZSwgb25seSB0aGUgZmlyc3QgcGFyYWdyYXBoIG9mIHRoZSBtYWluIGNvbW1lbnQgd2lsbCBiZSByZXR1cm5lZC4gT3RoZXJ3aXNlLFxuICogdGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZnVsbCBjb21tZW50IGluY2x1ZGluZyBhbiBpbmxpbmUgbGlzdCBvZiBwYXJhbWV0ZXJzIGFuZCB0aGUgcmV0dXJuIHZhbHVlXG4gKiBAcGFyYW0gbWRsIHRoZSBtb2R1bGUgdG8gc2NhbiBmb3IgY29tbWVudHNcbiAqIEBwYXJhbSBzaG9ydCBpZiB0cnVlLCBvbmx5IHRoZSBmaXJzdCBwYXJhZ3JhcGggb2YgdGhlIG1haW4gY29tbWVudCBpcyBwcm9jZXNzZWQuXG4gKiBAcmV0dXJuIGEgdm5vZGUgcmVwcmVzZW50aW5nIHRoZSBjb21tZW50IGVudHJpZXNcbiAqL1xuZnVuY3Rpb24gY29tbWVudChtZGwsIHNob3J0ID0gZmFsc2UpIHtcbiAgICBsZXQgY29udGVudCA9IFtdO1xuICAgIGlmIChtZGwuY29tbWVudCkge1xuICAgICAgICBjb250ZW50LnB1c2godGV4dE9yU2hvcnRUZXh0T3JEZXNjcmlwdGlvbihtZGwuY29tbWVudCwgc2hvcnQpKTtcbiAgICAgICAgaWYgKCFzaG9ydCkge1xuICAgICAgICAgICAgY29udGVudC5wdXNoKG90aGVyQ29tbWVudFRhZ3MobWRsLmNvbW1lbnQpKTtcbiAgICAgICAgICAgIGlmIChtZGwucGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LmNvbmNhdChtYWluQ29tbWVudFBhcmFtcyhtZGwucGFyYW1ldGVycykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQucHVzaChyZXR1cm5zKG1kbC5jb21tZW50LCBmYWxzZSkpO1xuICAgICAgICBjb250ZW50LnB1c2goY29tbWVudFJlbWFpbmRlcihtZGwuY29tbWVudCkpO1xuICAgIH1cbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1jb21tZW50JywgY29udGVudCk7XG59XG5leHBvcnRzLmNvbW1lbnQgPSBjb21tZW50O1xuLyoqXG4gKiBSZXBvcnQgdGhlIGl0ZW0ncyBkZXNjcmlwdGlvbi4gVGhpcyBjYW4gY29tZSBpbiBkaWZmZXJlbnQgZm9ybXMgdGhhdCBhcmUgYWxsIGhhbmRsZWQgaGVyZTpcbiAqIC0gY29tbWVudC5zaG9ydFRleHQ6IDxkZXNjcmlwdGlvbj5cbiAqIC0gY29tbWVudC50ZXh0OiA8ZGVzY3JpcHRpb24+XG4gKiAtIGNvbW1lbnQudGFnc1t7dGFnOidkZXNjcmlwdGlvbn0sIHRleHQ6PGRlc2NyaXB0aW9uPl1cbiAqIEFueSByZXN1bHRpbmcgY29tbWVudCB3aWxsIGJlIHRyYW5zbGF0ZWQgZnJvbSBtYXJrZG93biB0byBodG1sIGFuZCByZXR1cm5lZCBhcyBhIGBWbm9kZWAuXG4gKiBAcGFyYW0gY29tbWVudCB0aGUgY29tbWVudCBvYmplY3QgdG8gcGFyc2VcbiAqIEBwYXJhbSBzaG9ydCBib29sZWFuOyBpZiB0cnVlLCBvbmx5IHRoZSBmaXJzdCBwYXJhZ3JhcGggb2YgdGhlIGRlc2NyaXB0aW9uIHdpbGwgYmUgcmV0dXJuZWRcbiAqL1xuZnVuY3Rpb24gdGV4dE9yU2hvcnRUZXh0T3JEZXNjcmlwdGlvbihjb21tZW50LCBzaG9ydCkge1xuICAgIGxldCB0ZXh0ID0gKGNvbW1lbnQuc2hvcnRUZXh0IHx8ICcnKTtcbiAgICBpZiAoY29tbWVudC50ZXh0KSB7XG4gICAgICAgIHRleHQgKz0gJ1xcbicgKyAoY29tbWVudC50ZXh0IHx8ICcnKTtcbiAgICB9XG4gICAgaWYgKGNvbW1lbnQudGFncykge1xuICAgICAgICBjb21tZW50LnRhZ3MubWFwKCh0YWcpID0+IHsgaWYgKHRhZy50YWcgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRleHQgPSB0YWcudGV4dDtcbiAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvPGV4YW1wbGU+KFtcXFNcXHNdKj8pPFxcL2V4YW1wbGU+L2dpLCBNYWluRXhhbXBsZV8xLmV4YW1wbGUoe30pKTtcbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1jb21tZW50LWRlc2MnLCBwcmV0dGlmeUNvZGUodGV4dCwgc2hvcnQpKTtcbn1cbmZ1bmN0aW9uIHJldHVybnMoY29tbWVudCwgc2hvcnQpIHtcbiAgICBsZXQgdGV4dCA9IGNvbW1lbnQucmV0dXJucztcbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1jb21tZW50LXJldHVybicsICF0ZXh0ID8gJycgOiBbXG4gICAgICAgIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLWNvbW1lbnQtdGFnJywgJ3JldHVybnM6JyksXG4gICAgICAgIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLWNvbW1lbnQtdGV4dCcsIHRleHQpXG4gICAgXSk7XG59XG5mdW5jdGlvbiBjb21tZW50UmVtYWluZGVyKGNvbW1lbnQpIHtcbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCcnLCBPYmplY3Qua2V5cyhjb21tZW50KS5tYXAoKHRhZykgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgICAgICAgY2FzZSAndGFncyc6IC8vIGFscmVhZHkgaGFuZGxlZFxuICAgICAgICAgICAgY2FzZSAnc2hvcnRUZXh0JzogLy8gYWxyZWFkeSBoYW5kbGVkXG4gICAgICAgICAgICBjYXNlICd0ZXh0JzogLy8gYWxyZWFkeSBoYW5kbGVkXG4gICAgICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6IC8vIGFscmVhZHkgaGFuZGxlZFxuICAgICAgICAgICAgY2FzZSAncmV0dXJucyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1jb21tZW50LXNwZWNpYWwnLCBbXG4gICAgICAgICAgICAgICAgICAgIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLWNvbW1lbnQtdGFnJywgdGFnKSxcbiAgICAgICAgICAgICAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tY29tbWVudC10ZXh0JywgY29tbWVudFt0YWddKVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIG90aGVyQ29tbWVudFRhZ3MoY29tbWVudCkge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJycsICFjb21tZW50LnRhZ3MgPyBbXSA6IGNvbW1lbnQudGFncy5tYXAoKHRhZykgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRhZy50YWcpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzogcmV0dXJuICcnOyAvLyBza2lwIHNpbmNlIGFscmVhZHkgaGFuZGxlZFxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tY29tbWVudC1zcGVjaWFsJywgW1xuICAgICAgICAgICAgICAgIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLWNvbW1lbnQtdGFnJywgdGFnLnRhZyksXG4gICAgICAgICAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tY29tbWVudC10ZXh0JywgdGFnLnRleHQpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIG1haW5Db21tZW50UGFyYW1zKHBhcmFtcykge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWNvbW1lbnQtcGFyYW1zJywgcGFyYW1zLm1hcCgocGFyKSA9PiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWNvbW1lbnQtcGFyYW0nLCBbXG4gICAgICAgIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLWNvbW1lbnQtdGFnJywgcGFyLm5hbWUgKyAnOicpLFxuICAgICAgICBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1jb21tZW50LXRleHQnLCAhcGFyLmNvbW1lbnQgPyAnJyA6XG4gICAgICAgICAgICAoKHBhci5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkgPyBgW2RlZmF1bHQ6ICR7cGFyLmRlZmF1bHRWYWx1ZX1dIGAgOiAnJykgKyBwYXIuY29tbWVudC50ZXh0KVxuICAgIF0pKSk7XG59XG4vKipcbiAqIGZpbmRzIHNlZ21lbnRzIG9mIGA8Y29kZT4uLi48L2NvZGU+YCBpbiBgY29tbWVudGAgYW5kIHJlcGxhY2VzIHRoZW0gd2l0aCBhIHByZXR0aWZpZWQgdmVyc2lvbi5cbiAqIEN1cnJlbnRseSB0aGUgZnVuY3Rpb24gcGVyZm9ybXMgdHdvIG9wZXJhdGlvbnM6XG4gKiAtIGFkZCBpbmRlbnRhdGlvbiBmb3IgYnJhY2tldHMgey4uLn1cbiAqIC0gd3JhcCB0aGUgJmx0O2NvZGUmZ3Q7Li4uJmx0Oy9jb2RlJmd0OyBwYXJ0IHdpdGhpbiAmbHQ7cHJlJmd0Oy4uLiZsdDsvcHJlJmd0OyBicmFja2V0c1xuICogQHBhcmFtIGNvbW1lbnQgdGhlIGNvbW1lbnQgY29tbWVudFxuICovXG5mdW5jdGlvbiBwcmV0dGlmeUNvZGUoY29tbWVudCwgc2hvcnQpIHtcbiAgICAvLyAgICBjb25zdCBpbmRlbnRTcGFjZXMgPSAyO1xuICAgIGxldCByZXN1bHQgPSBjb21tZW50O1xuICAgIGZ1bmN0aW9uIGJyYWNlSW5kZW50aW5nKHRleHQpIHtcbiAgICAgICAgbGV0IGluZGVudCA9IDA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoNiwgdGV4dC5sZW5ndGggLSA3KSAvLyByZW1vdmUgPGNvZGU+IGFuZCA8L2NvZGU+XG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAucmVwbGFjZSgvKDwpL2csICcmbHQ7JykucmVwbGFjZSgvKD4pL2csICcmZ3Q7JylcbiAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgIC5tYXAoKGwpID0+IHtcbiAgICAgICAgICAgIGxldCBvbGRJbmRlbnQgPSBpbmRlbnQ7XG4gICAgICAgICAgICBsZXQgayA9IGwudHJpbSgpO1xuICAgICAgICAgICAgaW5kZW50ICs9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBrLnNwbGl0KCd7JykubGVuZ3RoIC0gay5zcGxpdCgnfScpLmxlbmd0aCkpO1xuICAgICAgICAgICAgaW5kZW50ICs9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBrLnNwbGl0KCdbJykubGVuZ3RoIC0gay5zcGxpdCgnXScpLmxlbmd0aCkpO1xuICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImhzLWNvZGUtaW5kZW50XCI+PC9zcGFuPicucmVwZWF0KCgoaW5kZW50IDwgb2xkSW5kZW50KSA/IGluZGVudCA6IG9sZEluZGVudCkpICsgaztcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKVxuICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgcmV0dXJuICc8cHJlPjxjb2RlPicgKyByZXN1bHQgKyAnPC9jb2RlPjwvcHJlPic7XG4gICAgfVxuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC88Y29kZT4oW1xcU1xcc10qPyk8XFwvY29kZT4vZ2ksIGJyYWNlSW5kZW50aW5nKTtcbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tLnRydXN0KG1hcmtkb3duXzEubWFya0Rvd24ocmVzdWx0LCBzaG9ydCwgaHNsYXlvdXRfMS5tLnJvdXRlLmdldCgpKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUV0ZwYmtOdmJXMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk4dUxpOXpjbU12ZG1sbGR5OU5ZV2x1UTI5dGJXVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdSMEZGUnpzN08wRkJSVWdzVFVGQlRUdEJRVU5PTEhWRFFVRnZRenRCUVVOd1F5d3dRMEZCZFVNN1FVRkRka01zSzBOQlFYbERPMEZCUlhwRE96czdPenM3UjBGTlJ6dEJRVU5JTEhGQ1FVRTBRaXhIUVVGUE8wbEJReTlDTEVsQlFVa3NUMEZCVHl4SFFVRlRMRVZCUVVVc1EwRkJRenRKUVVOMlFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5rTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc05FSkJRVFJDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUVMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkRSQ3hOUVVGTkxFTkJRVU1zV1VGQlF5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlF6RkRMRU5CUVVNN1FVRlNSQ3hyUTBGUlF6dEJRVVZFT3pzN096czdPMGRCVDBjN1FVRkRTQ3hwUWtGQmQwSXNSMEZCVHl4RlFVRkZMRXRCUVVzc1IwRkJReXhMUVVGTE8wbEJRM2hETEVsQlFVa3NUMEZCVHl4SFFVRlRMRVZCUVVVc1EwRkJRenRKUVVOMlFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5rTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc05FSkJRVFJDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlVMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETlVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBDTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEZMRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJRMFFzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVU5FTEUxQlFVMHNRMEZCUXl4WlFVRkRMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1FVRkRNVU1zUTBGQlF6dEJRV1JFTERCQ1FXTkRPMEZCUlVRN096czdPenM3TzBkQlVVYzdRVUZEU0N4elEwRkJjME1zVDBGQlZ5eEZRVUZGTEV0QlFXRTdTVUZETlVRc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM0pETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1IwRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkJReXhEUVVGRE8wbEJRM3BFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyWXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZQTEU5QlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlJ5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZCUVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRkxFTkJRVU03U1VGRGRrWXNRMEZCUXp0SlFVTkVMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEd0RFFVRnJReXhGUVVGRkxIRkNRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOeVJTeE5RVUZOTEVOQlFVTXNXVUZCUXl4RFFVRkRMSFZDUVVGMVFpeEZRVUZGTEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUlN4RFFVRkRPMEZCUlVRc2FVSkJRV2xDTEU5QlFWY3NSVUZCUlN4TFFVRmhPMGxCUTNaRExFbEJRVWtzU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRNMElzVFVGQlRTeERRVUZETEZsQlFVTXNRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeERRVUZETEVsQlFVa3NSMEZCUlN4RlFVRkZMRWRCUVVVN1VVRkRNME1zV1VGQlF5eERRVUZETERCQ1FVRXdRaXhGUVVGRkxGVkJRVlVzUTBGQlF6dFJRVU42UXl4WlFVRkRMRU5CUVVNc01rSkJRVEpDTEVWQlFVVXNTVUZCU1N4RFFVRkRPMHRCUTNaRExFTkJRVU1zUTBGQlF6dEJRVU5RTEVOQlFVTTdRVUZGUkN3d1FrRkJNRUlzVDBGQlZ6dEpRVU5xUXl4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVODdVVUZEZEVNc1RVRkJUU3hEUVVGQkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlVMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVkVzYTBKQlFXdENPMWxCUTNSRExFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVY3NhMEpCUVd0Q08xbEJRM1JETEV0QlFVc3NUVUZCVFN4RFFVRkRMRU5CUVZFc2EwSkJRV3RDTzFsQlEzUkRMRXRCUVVzc1lVRkJZU3hEUVVGRExFTkJRVU1zYTBKQlFXdENPMWxCUTNSRExFdEJRVXNzVTBGQlV6dG5Ra0ZEVGl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8xbEJRMnhDTzJkQ1FVRlRMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zTUVKQlFUQkNMRVZCUVVVN2IwSkJRekZETEZsQlFVTXNRMEZCUXl3d1FrRkJNRUlzUlVGQlJTeEhRVUZITEVOQlFVTTdiMEpCUTJ4RExGbEJRVU1zUTBGQlF5d3lRa0ZCTWtJc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdhVUpCUXk5RExFTkJRVU1zUTBGQlF6dG5Ra0ZCUVN4RFFVRkRPMUZCUTFJc1EwRkJRenRKUVVOVUxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEVWl4RFFVRkRPMEZCUlVRc01FSkJRVEJDTEU5QlFWYzdTVUZEYWtNc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hIUVVGRkxFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVTg3VVVGRGRFUXNUVUZCVFN4RFFVRkJMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWWl4TFFVRkxMR0ZCUVdFc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNOa0pCUVRaQ08xbEJRelZFTEZOQlFWTXNUVUZCVFN4RFFVRkRMRmxCUVVNc1EwRkJReXd3UWtGQk1FSXNSVUZCUlR0blFrRkRNVU1zV1VGQlF5eERRVUZETERCQ1FVRXdRaXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTTdaMEpCUTNSRExGbEJRVU1zUTBGQlF5d3lRa0ZCTWtJc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzJGQlF6TkRMRU5CUVVNc1EwRkJRenRSUVVOUUxFTkJRVU03U1VGRFRDeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTFJc1EwRkJRenRCUVVWRUxESkNRVUV5UWl4TlFVRlZPMGxCUTJwRExFMUJRVTBzUTBGQlF5eFpRVUZETEVOQlFVTXNlVUpCUVhsQ0xFVkJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVU4c1MwRkRjRVFzV1VGQlF5eERRVUZETEhkQ1FVRjNRaXhGUVVGRk8xRkJRM2hDTEZsQlFVTXNRMEZCUXl3d1FrRkJNRUlzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4SFFVRkRMRWRCUVVjc1EwRkJRenRSUVVNelF5eFpRVUZETEVOQlFVTXNNa0pCUVRKQ0xFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4SFFVRkZMRVZCUVVVN1dVRkRNME1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4WlFVRlpMRXRCUVVjc1UwRkJVeXhEUVVGRExFZEJRVVVzWVVGQllTeEhRVUZITEVOQlFVTXNXVUZCV1N4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUXpsR08wdEJRMG9zUTBGQlF5eERRVU5NTEVOQlFVTXNRMEZCUXp0QlFVTlFMRU5CUVVNN1FVRkZSRHM3T3pzN08wZEJUVWM3UVVGRFNDeHpRa0ZCYzBJc1QwRkJZeXhGUVVGRkxFdEJRV0U3U1VGRGJrUXNOa0pCUVRaQ08wbEJRM3BDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJRenRKUVVWeVFpeDNRa0ZCZDBJc1NVRkJWenRSUVVNdlFpeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTzJGQlEyUXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkpMRFJDUVVFMFFqdGhRVU16UkN4SlFVRkpMRVZCUVVVN1lVRkRUaXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETzJGQlF5OURMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU03WVVGRFdDeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRlJPMWxCUTFZc1NVRkJTU3hUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETzFsQlEzWkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0WlFVTnFRaXhOUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMFVzVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlGTEUxQlFVMHNRMEZCUXl4elEwRkJjME1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhUUVVGVExFTkJRVU1zUjBGQlF5eE5RVUZOTEVkQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRFY3NRMEZCUXl4RFFVRkRPMkZCUTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dGhRVU5XTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTFvc1RVRkJUU3hEUVVGRExHRkJRV0VzUjBGQlJ5eE5RVUZOTEVkQlFVY3NaVUZCWlN4RFFVRkRPMGxCUTNCRUxFTkJRVU03U1VGRlJDeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXcwUWtGQk5FSXNSVUZCUlN4alFVRmpMRU5CUVVNc1EwRkJRenRKUVVOMFJTeE5RVUZOTEVOQlFVTXNXVUZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXh0UWtGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1dVRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRNMFFzUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL19kaXN0L3NyYy92aWV3L01haW5Db21tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhzbGF5b3V0XzEgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jb25zdCBoc2xheW91dF8yID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuY29uc3QgRG9jU2V0c18xID0gcmVxdWlyZShcIi4uL0RvY1NldHNcIik7XG5jb25zdCBNYWluQ29tbWVudF8xID0gcmVxdWlyZShcIi4vTWFpbkNvbW1lbnRcIik7XG5jb25zdCBQYXJ0c18xID0gcmVxdWlyZShcIi4vUGFydHNcIik7XG4vKipcbiAqIENyZWF0ZXMgRG9jdW1lbnRhdGlvbiBvbiB0aGUgbWFpbiBwYW5lbFxuICovXG5jbGFzcyBNYWluRGV0YWlsIGV4dGVuZHMgaHNsYXlvdXRfMi5Db250YWluZXIge1xuICAgIGdldENvbXBvbmVudHMobm9kZSkge1xuICAgICAgICBsZXQgbGliLCBmaWVsZDtcbiAgICAgICAgaWYgKG5vZGUuYXR0cnMucm91dGUpIHtcbiAgICAgICAgICAgIGxpYiA9IG5vZGUuYXR0cnMucm91dGUubGliO1xuICAgICAgICAgICAgZmllbGQgPSBub2RlLmF0dHJzLnJvdXRlLmZpZWxkO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYXR0cnMucm91dGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCByZXN1bHQgPSBnZXRPdmVydmlldyhsaWIsIGZpZWxkKSB8fCBpdGVtRG9jKERvY1NldHNfMS5Eb2NTZXRzLmdldChsaWIsIGZpZWxkKSB8fCAnJyk7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1tYWluLWRldGFpbCcsIFtyZXN1bHRdKTtcbiAgICB9XG59XG5leHBvcnRzLk1haW5EZXRhaWwgPSBNYWluRGV0YWlsO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHByb2plY3Qgb3ZlcnZpZXcgaXMgYmVpbmcgcmVxdWVzdGVkIGFuZCByZXR1cm5zIHRoZSBvdmVydmlldyxcbiAqIG9yIGB1bmRlZmluZWRgIGlmIG5vdCBhdmFpbGFibGVcbiAqIEBwYXJhbSBtZGwgdGhlIG1vZHVsZSBuYW1lIHRvIGNoZWNrXG4gKiBAcmV0dXJuIFZub2RlIGNvbnRhaW5pbmcgdGhlIG92ZXJ2aWV3IGZpbGUsIG9yIGB1bmRlZmluZWRgXG4gKi9cbmZ1bmN0aW9uIGdldE92ZXJ2aWV3KGxpYiwgbWRsKSB7XG4gICAgaWYgKG1kbCA9PT0gJzAnIHx8IG1kbCA9PT0gJycpIHtcbiAgICAgICAgbWRsID0gRG9jU2V0c18xLkRvY1NldHMuZ2V0KGxpYiwgYCR7bGlifS5vdmVydmlld2ApO1xuICAgICAgICBpZiAobWRsKSB7XG4gICAgICAgICAgICByZXR1cm4gb3ZlcnZpZXdEb2MobWRsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuLyoqXG4gKiBDcmVhdGVzIGRvY3VtZW50YXRpb24gZm9yIHN0YW5kYXJkIGl0ZW1zIGluIHRoZSBtYWluIHBhbmVsXG4gKiBAcGFyYW0gbWRsIHRoZSBtb2R1bGUgdG8gZG9jdW1lbnQgb24gdGhlIG1haW4gcGFuZWxcbiAqL1xuZnVuY3Rpb24gaXRlbURvYyhtZGwpIHtcbiAgICBjb25zdCBzaWcgPSBtZGwuc2lnbmF0dXJlcyA/IG1kbC5zaWduYXR1cmVzWzBdIDogbWRsO1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWRvYycsIFtcbiAgICAgICAgdGl0bGUobWRsLCBzaWcpLFxuICAgICAgICBNYWluQ29tbWVudF8xLmNvbW1lbnRMb25nKHNpZyksXG4gICAgICAgIG1lbWJlcnMoc2lnLCBzaWcpXG4gICAgXSk7XG59XG4vKipcbiAqIENyZWF0ZXMgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIHByb2plY3Qgb3ZlcnZpZXcgaW4gdGhlIG1haW4gcGFuZWxcbiAqIEBwYXJhbSBtZGwgdGhlIG1vZHVsZSB0byBkb2N1bWVudCBvbiB0aGUgbWFpbiBwYW5lbFxuICovXG5mdW5jdGlvbiBvdmVydmlld0RvYyhtZGwpIHtcbiAgICBjb25zdCBzaWcgPSBtZGwuc2lnbmF0dXJlcyA/IG1kbC5zaWduYXR1cmVzWzBdIDogbWRsO1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWRvYycsIFtcbiAgICAgICAgTWFpbkNvbW1lbnRfMS5jb21tZW50TG9uZyhzaWcpLFxuICAgIF0pO1xufVxuLyoqXG4gKiByZW5kZXJzIHRoZSB0aXRsZSBvZiB0aGUgbWFpbiBwYW5lbFxuICogQHBhcmFtIG1kbCB0aGUgbW9kdWxlIHRvIGRvY3VtZW50XG4gKiBAcGFyYW0gc2lnIGEgc2lnbmF0dXJlIG9mIHRoZSBtb2R1bGUsIG9yIHRoZSB0aGUgbW9kdWxlIGl0c2VsZlxuICovXG5mdW5jdGlvbiB0aXRsZShtZGwsIHNpZykge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLXRpdGxlJywgeyBpZDogUGFydHNfMS5tYWtlSUQoJ3RpdGxlJywgbWRsKSB9LCBpdGVtRGVzY3JpcHRvcihtZGwsIHNpZykpO1xufVxuZnVuY3Rpb24gbWVtYmVycyhtZGwsIHNpZykge1xuICAgIGlmIChtZGwuZ3JvdXBzKSB7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLW1lbWJlcnMnLCBtZGwuZ3JvdXBzLm1hcCgoZykgPT4gbWVtYmVyKGcsIG1kbC5saWIpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1kbC5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLW1lbWJlcnMnLCBwYXJhbWV0ZXIobWRsLnBhcmFtZXRlcnMsIG1kbC5saWIpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLW1lbWJlcnMnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXJhbWV0ZXIoZywgbGliKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBnLm1hcCgoYykgPT4gaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1wYXJhbWV0ZXInLCB7IGlkOiBQYXJ0c18xLm1ha2VJRCgncGFyYW1ldGVyJywgYykgfSwgaXRlbUNoaWxkKGMpKSk7XG4gICAgY29udGVudC51bnNoaWZ0KGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tbWVtYmVyLXRpdGxlJywgeyBpZDogJ3BhcmFtZXRlcnMnIH0sIGhzbGF5b3V0XzEubSgnc3BhbicsICdQYXJhbWV0ZXJzJykpKTtcbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1tZW1iZXInLCBjb250ZW50KTtcbn1cbmZ1bmN0aW9uIG1lbWJlcihncm91cCwgbGliKSB7XG4gICAgY29uc3QgZ3JvdXBNYXAgPSB7XG4gICAgICAgICdFeHRlcm5hbCBtb2R1bGVzJzogJy5ocy1pdGVtLWV4dGVybmFsLW1vZHVsZScsXG4gICAgICAgICdDb25zdHJ1Y3RvcnMnOiAnLmhzLWl0ZW0tY29uc3RydWN0b3InLFxuICAgICAgICAnQ2xhc3Nlcyc6ICcuaHMtaXRlbS1jbGFzcycsXG4gICAgICAgICdJbnRlcmZhY2VzJzogJy5ocy1pdGVtLWludGVyZmFjZScsXG4gICAgICAgICdGdW5jdGlvbnMnOiAnLmhzLWl0ZW0tZnVuY3Rpb24nLFxuICAgICAgICAnTWV0aG9kcyc6ICcuaHMtaXRlbS1tZXRob2QnLFxuICAgICAgICAnVmFyaWFibGVzJzogJy5ocy1pdGVtLXZhcmlhYmxlJyxcbiAgICAgICAgJ09iamVjdCBsaXRlcmFscyc6ICcuaHMtaXRlbS1vYmplY3QtbGl0ZXJhbCcsXG4gICAgICAgICdQcm9wZXJ0aWVzJzogJy5ocy1pdGVtLXByb3BlcnR5JyxcbiAgICAgICAgJ1R5cGUgYWxpYXNlcyc6ICcuaHMtaXRlbS1hbGlhcycsXG4gICAgfTtcbiAgICBjb25zdCBmbiA9IGdyb3VwTWFwW2dyb3VwLnRpdGxlXSB8fCAnLmhzLWl0ZW0tdW5rbm93bi1tZW1iZXInO1xuICAgIGxldCBjb250ZW50ID0gZ3JvdXAuY2hpbGRyZW4ubWFwKChjKSA9PiB7XG4gICAgICAgIGxldCBtZGwgPSBEb2NTZXRzXzEuRG9jU2V0cy5nZXQobGliLCBjKTtcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubShmbiwgeyBpZDogUGFydHNfMS5tYWtlSUQoZ3JvdXAudGl0bGUsIG1kbCkgfSwgaXRlbUNoaWxkKG1kbCkpO1xuICAgIH0pO1xuICAgIGNvbnRlbnQudW5zaGlmdChoc2xheW91dF8xLm0oJy5ocy1pdGVtLW1lbWJlci10aXRsZScsIHsgaWQ6IGdyb3VwLnRpdGxlLnRvTG93ZXJDYXNlKCkgfSwgaHNsYXlvdXRfMS5tKCdzcGFuJywgZ3JvdXAudGl0bGUpKSk7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tbWVtYmVyJywgY29udGVudCk7XG59XG5mdW5jdGlvbiBpdGVtRGVzY3JpcHRvcihtZGwsIHNpZykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWRlc2MnLCBbXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGZsYWdzKG1kbC5mbGFncywgWydleHBvcnQnXSksXG4gICAgICAgICAgICBQYXJ0c18xLmZsYWdzKG1kbC5mbGFncywgW10pLFxuICAgICAgICAgICAgUGFydHNfMS5raW5kU3RyaW5nKG1kbCksXG4gICAgICAgICAgICBQYXJ0c18xLml0ZW1Mb25nTmFtZShtZGwsIG1kbCksXG4gICAgICAgICAgICBQYXJ0c18xLnNpZ25hdHVyZShzaWcsIG1kbC5saWIpLFxuICAgICAgICAgICAgUGFydHNfMS50eXBlKHNpZy50eXBlLCBtZGwubGliKSxcbiAgICAgICAgICAgIFBhcnRzXzEuZXh0ZW5zaW9uT2YobWRsKSxcbiAgICAgICAgICAgIFBhcnRzXzEuc291cmNlTGluayhtZGwpXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgY29uc29sZS5sb2cobWRsKTtcbiAgICB9XG59XG5mdW5jdGlvbiBpdGVtQ2hpbGQobWRsLCBzaWcgPSBtZGwpIHtcbiAgICByZXR1cm4gbWRsLnNpZ25hdHVyZXMgP1xuICAgICAgICBtZGwuc2lnbmF0dXJlcy5tYXAoKHMpID0+IGhzbGF5b3V0XzEubSgnJywgW2l0ZW1EZXNjcmlwdG9yKG1kbCwgcyksIE1haW5Db21tZW50XzEuY29tbWVudChzKV0pKSA6XG4gICAgICAgIFtpdGVtRGVzY3JpcHRvcihtZGwsIHNpZyksIE1haW5Db21tZW50XzEuY29tbWVudChzaWcpXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXRnBia1JsZEdGcGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OTJhV1YzTDAxaGFXNUVaWFJoYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4MVEwRkJkME03UVVGRGVFTXNkVU5CUVhkRE8wRkJRM2hETEhkRFFVRXdRenRCUVVNeFF5d3JRMEZCYzBRN1FVRkRkRVFzYlVOQlEzVkRPMEZCUjNaRE96dEhRVVZITzBGQlEwZ3NaMEpCUVhkQ0xGTkJRVkVzYjBKQlFWTTdTVUZEY2tNc1lVRkJZU3hEUVVGRExFbEJRVlU3VVVGRGNFSXNTVUZCU1N4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRE8xRkJRMllzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUNMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNN1dVRkRNMElzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU51UXl4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUlRkQ0xFbEJRVWtzVFVGQlRTeEhRVUZITEZkQlFWY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEdsQ1FVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNdlJTeE5RVUZOTEVOQlFVTXNXVUZCUXl4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNeFF5eERRVUZETzBOQlEwbzdRVUZhUkN4blEwRlpRenRCUVVWRU96czdPenRIUVV0SE8wRkJRMGdzY1VKQlFYRkNMRWRCUVZVc1JVRkJSU3hIUVVGVk8wbEJRM1pETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFbEJRVWtzUjBGQlJ5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVUlzUjBGQlJ5eEhRVUZITEdsQ1FVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVkQlFVY3NWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRNVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOT0xFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVUlzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZEUkN4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRE8wRkJRM0pDTEVOQlFVTTdRVUZGUkRzN08wZEJSMGM3UVVGRFNDeHBRa0ZCYVVJc1IwRkJUenRKUVVOd1FpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hIUVVGRkxFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRM0JFTEUxQlFVMHNRMEZCUXl4WlFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRk8xRkJRM0pDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8xRkJRMllzZVVKQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRhRUlzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1MwRkRjRUlzUTBGQlF5eERRVUZETzBGQlExQXNRMEZCUXp0QlFVVkVPenM3UjBGSFJ6dEJRVU5JTEhGQ1FVRnhRaXhIUVVGUE8wbEJRM2hDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhWUVVGVkxFZEJRVVVzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRGNFUXNUVUZCVFN4RFFVRkRMRmxCUVVNc1EwRkJReXhqUVVGakxFVkJRVVU3VVVGRGNrSXNlVUpCUVZjc1EwRkJReXhIUVVGSExFTkJRVU03UzBGRGJrSXNRMEZCUXl4RFFVRkRPMEZCUTFBc1EwRkJRenRCUVVWRU96czdPMGRCU1VjN1FVRkRTQ3hsUVVGbExFZEJRVThzUlVGQlJTeEhRVUZQTzBsQlF6TkNMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1JVRkJReXhGUVVGRkxFVkJRVVVzWTBGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJReXhGUVVGRkxHTkJRV01zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOeVJpeERRVUZETzBGQlJVUXNhVUpCUVdsQ0xFZEJRVThzUlVGQlJTeEhRVUZQTzBsQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJJc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVzc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFWXNRMEZCUXp0SlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFFpeE5RVUZOTEVOQlFVTXNXVUZCUXl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNKRkxFTkJRVU03U1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTktMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBGQlEwd3NRMEZCUXp0QlFVVkVMRzFDUVVGdFFpeERRVUZQTEVWQlFVVXNSMEZCVlR0SlFVTnNReXhKUVVGSkxFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJTeXhMUVVGTExGbEJRVU1zUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hGUVVGRExFVkJRVVVzUlVGQlF5eGpRVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOdVJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVVNc1EwRkJReXgxUWtGQmRVSXNSVUZCUlN4RlFVRkRMRVZCUVVVc1JVRkJReXhaUVVGWkxFVkJRVU1zUlVGQlJTeFpRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40Uml4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExHbENRVUZwUWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJRM3BETEVOQlFVTTdRVUZGUkN4blFrRkJaMElzUzBGQlV5eEZRVUZGTEVkQlFWVTdTVUZEYWtNc1RVRkJUU3hSUVVGUkxFZEJRVWM3VVVGRFlpeHJRa0ZCYTBJc1JVRkJSU3d3UWtGQk1FSTdVVUZET1VNc1kwRkJZeXhGUVVGTkxITkNRVUZ6UWp0UlFVTXhReXhUUVVGVExFVkJRVmNzWjBKQlFXZENPMUZCUTNCRExGbEJRVmtzUlVGQlVTeHZRa0ZCYjBJN1VVRkRlRU1zVjBGQlZ5eEZRVUZUTEcxQ1FVRnRRanRSUVVOMlF5eFRRVUZUTEVWQlFWY3NhVUpCUVdsQ08xRkJRM0pETEZkQlFWY3NSVUZCVXl4dFFrRkJiVUk3VVVGRGRrTXNhVUpCUVdsQ0xFVkJRVWNzZVVKQlFYbENPMUZCUXpkRExGbEJRVmtzUlVGQlVTeHRRa0ZCYlVJN1VVRkRka01zWTBGQll5eEZRVUZOTEdkQ1FVRm5RanRMUVVOMlF5eERRVUZETzBsQlEwWXNUVUZCVFN4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4NVFrRkJlVUlzUTBGQlF6dEpRVU01UkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVZFN1VVRkRiRU1zU1VGQlNTeEhRVUZITEVkQlFVY3NhVUpCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpsQ0xFMUJRVTBzUTBGQlF5eFpRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVNc1JVRkJSU3hGUVVGRExHTkJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVVzUTBGQlF5eERRVU5LTEVOQlFVTTdTVUZGUml4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVU1zUTBGQlF5eDFRa0ZCZFVJc1JVRkJSU3hGUVVGRExFVkJRVVVzUlVGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRExFVkJRVVVzV1VGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzQkhMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRGVrTXNRMEZCUXp0QlFVVkVMSGRDUVVGM1FpeEhRVUZQTEVWQlFVVXNSMEZCVHp0SlFVTndReXhKUVVGSkxFTkJRVU03VVVGQlF5eE5RVUZOTEVOQlFVTXNXVUZCUXl4RFFVRkRMR1ZCUVdVc1JVRkJSVHRaUVVOd1F5d3lRMEZCTWtNN1dVRkRMMElzWVVGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRM0JDTEd0Q1FVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRE8xbEJRMllzYjBKQlFWa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8xbEJRM1JDTEdsQ1FVRlRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTTdXVUZEZGtJc1dVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJRenRaUVVONFFpeHRRa0ZCVnl4RFFVRkRMRWRCUVVjc1EwRkJRenRaUVVOb1FpeHJRa0ZCVlN4RFFVRkRMRWRCUVVjc1EwRkJRenRUUVVOc1FpeERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPMGxCUTBRc1MwRkJTeXhEUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlFVTXNRMEZCUXp0QlFVTnNSQ3hEUVVGRE8wRkJSVVFzYlVKQlFXMUNMRWRCUVU4c1JVRkJSU3hIUVVGSExFZEJRVU1zUjBGQlJ6dEpRVU12UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlU3VVVGRGFrSXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZMTEV0QlFVc3NXVUZCUXl4RFFVRkRMRVZCUVVVc1JVRkJReXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc2NVSkJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRla1VzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRkxIRkNRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOcVJDeERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vX2Rpc3Qvc3JjL3ZpZXcvTWFpbkRldGFpbC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb21tZW50IHNlY3Rpb25zIG1heSBjb250YWluIGNvZGUgZXhhbXBsZXMgdGhhdCBhcmUgcGxhY2VkIHdpdGhpbiAmbHQ7ZXhhbXBsZSZndDsgdGFncy5cbiAqXG4gKiBgaHNEb2NgIHdpbGwgaW50ZXJwcmV0IGFuZCBleGVjdXRlIEphdmFzY3JpcHQgaW5zdHJ1Y3Rpb25zIHdpdGhpbiBhICZsdDtgZmlsZSBuYW1lPSdzY3JpcHQuanMnYCZndDsgdGFnLlxuICogYW5kIHN0eWxlc2hlZXQgaW5zdHJ1Y3Rpb25zIHdpdGggYSAmbHQ7YGZpbGUgbmFtZT0nc3R5bGUuY3NzJ2AmZ3Q7IHRhZywgYXMgaW4gZm9sbG93aW5nIGV4YW1wbGU6XG4gKiA8Y29kZT5cbiAqICAgICAmbHQ7ZXhhbXBsZSZndDtcbiAqICAgICA8ZmlsZSBuYW1lPSdzY3JpcHQuanMnPlxuICogICAgIG0ubW91bnQocm9vdCwge1xuICogICAgICAgICB2aWV3OigpID0+IG0obGF5b3V0LkNvbnRhaW5lciwgeyBjb2x1bW5zOltdLFxuICogICAgICAgICAgICAgY29udGVudDpbJ2ZpcnN0IGxpbmUnLCdzZWNvbmQgbGluZScpXVxuICogICAgICAgICB9KVxuICogICAgIH0pO1xuICogICAgIDwvZmlsZT5cbiAqXG4gKiAgICAgPGZpbGUgbmFtZT0nc3R5bGUuY3NzJz5cbiAqICAgICAuaHNMZWFmIHtcbiAqICAgICAgICAgY29sb3I6IGJsdWU7XG4gKiAgICAgfVxuICogICAgIDwvZmlsZT5cbiAqICAgICAmbHQ7L2V4YW1wbGUmZ3Q7XG4gKiA8L2NvZGU+XG4gKlxuICogIyMjIFNjcmlwdHNcbiAqIFNjcmlwdHMgYXJlIGV4cGVjdGVkIHRvIG1vdW50IGEgYG1pdGhyaWwgVm5vZGVgIG9uIGEgcm9vdCBET00gZWxlbWVudCB1c2luZyBgbS5tb3VudGAgb3IgYG0ucmVuZGVyYC5cbiAqIERvIG5vdCB1c2UgYG0ucm91dGVgIGFzIG9ubHkgYSBzaW5nbGUgY2FsbCBpcyBhbGxvd2VkIHBlciB3ZWIgYXBwIGFuZCB0aGF0IGlzIHVzZWQgdG8gbWFuYWdlIHRoZVxuICogbWFpbiBoc0RvYyBzaXRlIG1lbnUgYW5kIG5hdmlnYXRpb24uXG4gKlxuICogaHNEb2MgaW50ZXJuYWxseSB1c2VzIHRoZSBbZ2xvYmFsIGBGdW5jdGlvbmAgb2JqZWN0XVtGdW5jdGlvbl0gdG8gcGFyc2UgYW5kIGV4ZWN1dGUgdGhlIHNjcmlwdC5cbiAqIFRodXMgdGhlIHNjcmlwdCBoYXMgYWNjZXNzIG9ubHkgdG8gZ2xvYmFsIG9iamVjdHMgYW5kIHRvIG9iamVjdHMgcHJvdmlkZWRcbiAqIGFzIHBhcmFtZXRlcnMgaW4gdGhlIGBGdW5jdGlvbmAgY29uc3RydWN0b3IuIGhzRG9jIGN1cnJlbnRseSBwcm92aWRlcyB0aGUgZm9sbG93aW5nIG5hbWVzcGFjZXMgYXMgcGFyYW1ldGVyc1xuICogZm9yIHVzZSBpbiB0aGUgc2NyaXB0czpcbiAqIC0gKiptKio6IHRoZSBgTWl0aHJpbGAgbSBmdW5jdGlvblxuICogLSAqKmxheW91dCoqOiB0aGUge0BsaW5rIGhzTGF5b3V0OiBgaHNMYXlvdXRgfSBuYW1lc3BhY2UsIHByb3ZpZGluZyBmdW5jdGlvbnMgdG8gbGF5b3V0IHRoZSBicm93c2VyIHdpbmRvdy5cbiAqIC0gKip3aWRnZXQqKjogdGhlIHtAbGluayBoc1dpZGdldDogYGhzV2lkZ2V0YH0gbmFtZXNwYWNlLCBwcm92aWRpbmcgdmFyaW91cyBVSSB3aWRnZXQgZnVuY3Rpb25zLlxuICogLSBhZGRpdGlvbmFsbHksIHRoZSBwYXJhbWV0ZXIgKipyb290KiogaXMgcHJvdmlkZWQgYXMgdGhlIERPTSBlbGVtZW50IHRvIG1vdW50IHRvLlxuICpcbiAqIFtGdW5jdGlvbl06aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb25cbiAqXG4gKiAjIyMgU3R5bGVzXG4gKiBTdHlsZXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHNhbmRib3hlZCBzbyB0aGV5IGFyZSB2YWxpZCBvbmx5IHdpdGhpbiB0aGUgZW5jbG9zaW5nIGV4YW1wbGUgdGFncy5cbiAqIFRoaXMgYWxsb3dzIG11bHRpcGxlIGV4YW1wbGVzIHRvIGNvLWV4aXN0IG9uIHRoZSBzYW1lIHBhZ2UuXG4gKlxuICogPGV4YW1wbGU+XG4gKiA8ZmlsZSBuYW1lPSdzY3JpcHQuanMnPlxuICogbS5tb3VudChyb290LCB7XG4gKiAgICAgdmlldzooKSA9PiBtKGxheW91dC5Db250YWluZXIsIHtcbiAqICAgICAgICAgY3NzOicubXlFeGFtcGxlJyxcbiAqICAgICAgICAgY29sdW1uczpbXSxcbiAqICAgICAgICAgY29udGVudDpbXG4gKiAgICAgICAgICAgICAndGhpcmQgbGluZScsXG4gKiAgICAgICAgICAgICAnZm91cnRoIGxpbmUnXG4gKiAgICAgICAgIF1cbiAqICAgICB9KVxuICogfSk7XG4gKiA8L2ZpbGU+XG4gKiA8ZmlsZSBuYW1lPSdzdHlsZS5jc3MnPlxuICogLmhzLWxheW91dCB7XG4gKiAgICAgbWFyZ2luOjA7XG4gKiB9XG4gKiAubXlFeGFtcGxlPi5ocy1sYXlvdXQge1xuICogICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICogfVxuICogLm15RXhhbXBsZSB7XG4gKiAgICAgY29sb3I6IHJlZDtcbiAqICAgICBmb250LXdlaWdodDpib2xkO1xuICogfVxuICogPC9maWxlPlxuICogPC9leGFtcGxlPlxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiAqL1xuY29uc3QgaHNsYXlvdXRfMSA9IHJlcXVpcmUoXCJoc2xheW91dFwiKTtcbmNvbnN0IGhzd2lkZ2V0XzEgPSByZXF1aXJlKFwiaHN3aWRnZXRcIik7XG5jb25zdCBoc2xheW91dF8yID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuY29uc3QgaHN1dGlsXzEgPSByZXF1aXJlKFwiaHN1dGlsXCIpO1xuY29uc3QgbGF5b3V0ID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuY29uc3Qgd2lkZ2V0ID0gcmVxdWlyZShcImhzd2lkZ2V0XCIpO1xuLyoqXG4gKiBNYXAgY29udGFpbmluZyB2YXJpb3VzIGV4YW1wa2xlIGNvbmZpZ3VyYXRpb25zXG4gKi9cbmNvbnN0IGdJbml0aWFsaXplZCA9IHt9O1xuLyoqXG4gKiBjcmVhdGVzIHRoZSBleGFtcGxlIGNvbmZpZ3VyYXRpb24sIGdlbmVyYXRlcyB0aGUgRE9NIGhvb2ssIGFuZCBzZXRzIHVwIHRoZSBleGFtcGxlIGV4ZWN1dGlvbi5cbiAqIGBleGFtcGxlYCB0YWtlcyBhIGNvbnRleHQgbWFwIG9mIHRoZSBmb3JtIGB7IG5hbWU6bW9kdWxlLCAuLi59YCBhbmQgcmV0dXJuIGEgZnVuY3Rpb25cbiAqIHRoYXQgY2FuIGJlIHVzZWQgaW4gY2FsbHMgdG8gYHN0cmluZy5yZXBsYWNlYGFzIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqIDxjb2RlPjxwcmU+XG4gKiBpbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcImxheW91dFwiO1xuICogdGV4dCA9IHRleHQucmVwbGFjZSgvPGV4YW1wbGU+KFtcXFNcXHNdKj8pPFxcL2V4YW1wbGU+L2dpLCBleGFtcGxlKHtsYXlvdXQ6bGF5b3V0fSkpO1xuICogPC9wcmU+PC9jb2RlPlxuICogVGhlIG1vZHVsZXMgYG1gLCBgaHNMYXlvdXRgLCBhbmQgYGhzV2lkZ2V0YCB3aWxsIGJlIGFkZGVkIGJ5IGRlZmF1bHQgYXNcbiAqIGAgeyBtOiBtLCBsYXlvdXQ6IGxheW91dCwgd2lkZ2V0OiB3aWRnZXQgfSBgXG4gKiBAcGFyYW0gZXhhbXBsZSB0aGUgZXhhbXBsZSBzdHJpbmcgZXh0cmFjdGVkIGZyb20gdGhlIGNvbW1lbnQsIGluY2x1ZGluZyB0aGUgYDxleGFtcGxlPmAgdGFncy5cbiAqIEBwYXJhbSBjb250ZXh0IHRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSBleGFtcGxlIHNjcmlwdCBzaG91bGQgYmUgcnVuLCBleHByZXNzZWQgYXMgYG5hbWVgOmBuYW1lc3BhY2VgIHBhaXJzLlxuICovXG5mdW5jdGlvbiBleGFtcGxlKGNvbnRleHQpIHtcbiAgICBjb250ZXh0Lm0gPSBoc2xheW91dF8xLm07XG4gICAgY29udGV4dC5sYXlvdXQgPSBsYXlvdXQ7XG4gICAgY29udGV4dC53aWRnZXQgPSB3aWRnZXQ7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjb250ZXh0KTtcbiAgICBjb25zdCBtb2R1bGVzID0gbmFtZXMubWFwKG4gPT4gY29udGV4dFtuXSk7XG4gICAgcmV0dXJuIChleGFtcGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gaHN1dGlsXzEuc2hvcnRDaGVja1N1bShleGFtcGxlKTtcbiAgICAgICAgbGV0IElEcyA9IGdJbml0aWFsaXplZFtpbnN0YW5jZV07XG4gICAgICAgIGlmICghSURzKSB7XG4gICAgICAgICAgICBJRHMgPSBnSW5pdGlhbGl6ZWRbaW5zdGFuY2VdID0gaW5pdERlc2MoKCkgPT4gYWRkRXhhbXBsZShJRHMpLnRoZW4oZXhlY3V0ZVNjcmlwdCkpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBuZXcgRnVuY3Rpb24oJ3Jvb3QnLCAuLi5uYW1lcywgZ2V0Q29tbWVudERlc2NyaXB0b3IoSURzLCBleGFtcGxlKSk7XG4gICAgICAgICAgICAgICAgSURzLmV4ZWN1dGVTY3JpcHQgPSAocm9vdCkgPT4gc2NyaXB0KHJvb3QsIC4uLm1vZHVsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgc2NyaXB0OicgKyBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElEcy5taWQpKSB7XG4gICAgICAgICAgICBhZGRFeGFtcGxlKElEcykudGhlbihoc3V0aWxfMS5kZWxheSgxKSkudGhlbihleGVjdXRlU2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZXMgPSBJRHMucGFnZXNbJ2NzcyddO1xuICAgICAgICAvLyBwcmVmaXggY3NzIHNlbGVjdG9ycyB3aXRoIElEIG9mIG1haW4gZXhlY3V0aW9uIGFyZWEgdG8gc2FuZGJveCB0aGUgc2NvcGVcbiAgICAgICAgY29uc3Qgc3R5bGUgPSAoc3R5bGVzID09PSB1bmRlZmluZWQpID8gJycgOiBzdHlsZXMucmVwbGFjZSgvKF58fSlcXHMqPyhcXFMqPylcXHMqP3svZ2ksICh4LCAuLi5hcmdzKSA9PiB4LnJlcGxhY2UoYXJnc1sxXSwgYCMke0lEcy5taWR9ICR7YXJnc1sxXX1gKSk7XG4gICAgICAgIHJldHVybiBgPHN0eWxlPiR7c3R5bGV9PC9zdHlsZT48ZXhhbXBsZSBpZD0ke0lEcy5laWR9IGNsYXNzPVwiaHMtbGF5b3V0LWZyYW1lXCI+PC9leGFtcGxlPmA7XG4gICAgfTtcbn1cbmV4cG9ydHMuZXhhbXBsZSA9IGV4YW1wbGU7XG4vKipcbiAqIGNyZWF0ZXMgdGhlIGV4YW1wbGUgY29uZmlndXJhdGlvblxuICovXG5mdW5jdGlvbiBpbml0RGVzYyhmbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVpZDogZ2V0TmV3SUQoKSxcbiAgICAgICAgbWlkOiBnZXROZXdJRCgpLFxuICAgICAgICBkZXNjOiB7XG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06ICdqcycsXG4gICAgICAgICAgICBzZWxlY3Q6IGZuLFxuICAgICAgICAgICAgc2l6ZTogW1wiNTBweFwiXVxuICAgICAgICB9LFxuICAgICAgICBwYWdlczoge31cbiAgICB9O1xufVxuLyoqIGNyZWF0ZXMgYSBuZXcgcmFuZG9tIGV4YW1wbGUgSUQgZm9yIGVhY2ggY2FsbC4gKi9cbmZ1bmN0aW9uIGdldE5ld0lEKCkge1xuICAgIHJldHVybiAnaHMnICsgTWF0aC5mbG9vcigxMDAwMDAwICogTWF0aC5yYW5kb20oKSk7XG59XG4vKiogYXN5bmNocm9ub3VzbHkgYWRkcyB0aGUgZXhhbXBsZSBzdHJ1Y3R1cmUgb24gdGhlIHBhZ2UgYW5kIHRoZW4gZXhlY3V0ZWQgdGhlIHNjcmlwdC4gKi9cbmZ1bmN0aW9uIGFkZEV4YW1wbGUoSURzKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShJRHMpLnRoZW4oYWRkRXhhbXBsZVN0cnVjdHVyZSk7XG59XG4vKipcbiAqIHJldHVybnMgYSBwYXJhbWV0ZXJsZXNzIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZCB2aWEgc2V0VGltZW91dCB0b1xuICogbW91bnQgdGhlIG1lbnUgYW5kIGV4ZWN1dGUgdGhlIHNjcmlwdCBmdW5jdGlvbiBwcm92aWRlZCBpbiBgSURzYC5cbiAqIEBwYXJhbSBJRHMgdGhlIGBDb21tZW50RGVzY3JpcHRvcmAgdG8gZXhlY3V0ZSBvbi5cbiAqL1xuZnVuY3Rpb24gYWRkRXhhbXBsZVN0cnVjdHVyZShJRHMpIHtcbiAgICBjb25zdCBpdGVtID0gSURzLmRlc2Muc2VsZWN0ZWRJdGVtO1xuICAgIGNvbnN0IHNvdXJjZSA9IGhzbGF5b3V0XzEubS50cnVzdChgPGNvZGU+PHByZT4ke0lEcy5wYWdlc1tpdGVtXX08L3ByZT48L2NvZGU+YCk7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElEcy5laWQpO1xuICAgIGhzbGF5b3V0XzEubS5tb3VudChyb290LCB7IHZpZXc6ICgpID0+IGhzbGF5b3V0XzEubShoc2xheW91dF8yLkNvbnRhaW5lciwge1xuICAgICAgICAgICAgY29sdW1uczogW1wiNTAlXCJdLFxuICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgIGhzbGF5b3V0XzEubShoc2xheW91dF8yLkNvbnRhaW5lciwgeyBjb250ZW50OiBoc2xheW91dF8xLm0oJy5ocy1sYXlvdXQgLmhzLWV4ZWN1dGlvbicsIHsgaWQ6IElEcy5taWQgfSkgfSksXG4gICAgICAgICAgICAgICAgaHNsYXlvdXRfMS5tKGhzbGF5b3V0XzIuQ29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFtcIjMwcHhcIiwgXCJmaWxsXCJdLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBoc2xheW91dF8xLm0oaHN3aWRnZXRfMS5NZW51LCB7IGRlc2M6IElEcy5kZXNjIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHNsYXlvdXRfMS5tKGhzbGF5b3V0XzIuQ29udGFpbmVyLCB7IGNvbnRlbnQ6IGhzbGF5b3V0XzEubSgnLmhzLWxheW91dCAuaHMtc291cmNlJywgc291cmNlKSB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gSURzO1xufVxuLyoqXG4gKiBleGVjdXRlIHRoZSBwcm92aWRlZCBzY3JpcHRcbiAqIEBwYXJhbSBJRHMgcHJvdmlkZXMgdGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIHNjcmlwdCBpcyBleGNldXRlZC9cbiAqL1xuZnVuY3Rpb24gZXhlY3V0ZVNjcmlwdChJRHMpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSURzLm1pZCk7XG4gICAgY29uc29sZS5sb2cocm9vdCk7XG4gICAgdHJ5IHtcbiAgICAgICAgSURzLmV4ZWN1dGVTY3JpcHQocm9vdCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhlY3V0aW5nIHNjcmlwdDogXCIgKyBlKTtcbiAgICB9XG4gICAgaHNsYXlvdXRfMS5tLnJlZHJhdygpO1xuICAgIHJldHVybiBJRHM7XG59XG4vKipcbiAqIEZpbGxzIGluIGFsbCBmaWVsZHMgb2YgdGhlIENvbW1lbnREZXNjcmlwdG9yIHByb3ZpZGVkIGFzIGBJRHNgLlxuICogQHBhcmFtIElEcyB0aGUgQ29tbWVudERlc2NyaXB0b3IgdG8gY29tcGxldGVcbiAqIEBwYXJhbSBleGFtcGxlIHRoZSBleGFtcGxlIHN0cmluZywgaW5jbHVkaW5nIDxleGFtcGxlPiB0YWdcbiAqIEByZXR1cm4gdGhlIHNjcmlwdCB0byBleGVjdXRlLCBhcyBhIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXRDb21tZW50RGVzY3JpcHRvcihJRHMsIGV4YW1wbGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgZXhhbXBsZS5yZXBsYWNlKC88ZmlsZVtcXHNdKm5hbWU9W1xcU10qP1xcLihbXFxzXFxTXSo/KVsnfFwiXT4oW1xcU1xcc10qPyk8XFwvZmlsZT4vZ2ksIGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGFyZ3NbMl0udHJpbSgpO1xuICAgICAgICBJRHMuZGVzYy5pdGVtcy5wdXNoKGFyZ3NbMV0pO1xuICAgICAgICBJRHMucGFnZXNbYXJnc1sxXV0gPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICAgIHJldHVybiBJRHMucGFnZXNbJ2pzJ107XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUV0ZwYmtWNFlXMXdiR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk4dUxpOXpjbU12ZG1sbGR5OU5ZV2x1UlhoaGJYQnNaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBkQmNVVkhPenM3UVVGRlNDeE5RVUZOTzBGQlEwNHNkVU5CUVdkRU8wRkJRMmhFTEhWRFFVRm5SRHRCUVVOb1JDeDFRMEZCWjBRN1FVRkRhRVFzYlVOQlFUaERPMEZCUXpsRExHMURRVUZuUkR0QlFVTm9SQ3h0UTBGQlowUTdRVUZYYUVRN08wZEJSVWM3UVVGRFNDeE5RVUZOTEZsQlFWa3NSMEZCSzBJc1JVRkJSU3hEUVVGRE8wRkJSWEJFT3pzN096czdPenM3T3pzN1IwRlpSenRCUVVOSUxHbENRVUYzUWl4UFFVRlhPMGxCUXk5Q0xFOUJRVThzUTBGQlF5eERRVUZETEVkQlFWRXNXVUZCUXl4RFFVRkRPMGxCUTI1Q0xFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUTNoQ0xFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUTNoQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGJrTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE0wTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJZenRSUVVOc1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4elFrRkJZU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1IwRkJSeXhIUVVGSExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVQ3hIUVVGSExFZEJRVWNzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51Uml4SlFVRkpMRU5CUVVNN1owSkJRMFFzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVUZGTEc5Q1FVRnZRaXhEUVVGRExFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOc1JpeEhRVUZITEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1NVRkJVU3hMUVVGTExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVNdlJDeERRVUZETzFsQlEwUXNTMEZCU3l4RFFVRkJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHdENRVUZyUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRVU1zUTBGQlF6dFJRVU55UkN4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4alFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkRka1FzUTBGQlF6dFJRVU5FTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGYUVNc01rVkJRVEpGTzFGQlF6TkZMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zVFVGQlRTeExRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkZMRVZCUVVVc1IwRkJSU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhGUVVGRkxFTkJRVU1zUTBGQlVTeEZRVUZGTEVkQlFVY3NTVUZCVlN4TFFVTnlSeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGREwwTXNRMEZCUXp0UlFVTkdMRTFCUVUwc1EwRkJReXhWUVVGVkxFdEJRVXNzZFVKQlFYVkNMRWRCUVVjc1EwRkJReXhIUVVGSExIRkRRVUZ4UXl4RFFVRkRPMGxCUXpsR0xFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUUxUWtRc01FSkJORUpETzBGQlJVUTdPMGRCUlVjN1FVRkRTQ3hyUWtGQmEwSXNSVUZCVFR0SlFVTndRaXhOUVVGTkxFTkJRVU03VVVGRFNDeEhRVUZITEVWQlFVMHNVVUZCVVN4RlFVRkZPMUZCUTI1Q0xFZEJRVWNzUlVGQlRTeFJRVUZSTEVWQlFVVTdVVUZEYmtJc1NVRkJTU3hGUVVGWE8xbEJRMWdzUzBGQlN5eEZRVUZYTEVWQlFVVTdXVUZEYkVJc1dVRkJXU3hGUVVGRkxFbEJRVWs3V1VGRGJFSXNUVUZCVFN4RlFVRkZMRVZCUVVVN1dVRkRWaXhKUVVGSkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVMEZEYWtJN1VVRkRSQ3hMUVVGTExFVkJRVU1zUlVGQlJUdExRVU5ZTEVOQlFVTTdRVUZEVGl4RFFVRkRPMEZCUlVRc2NVUkJRWEZFTzBGQlEzSkVPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTnNSQ3hEUVVGRE8wRkJSVVFzTUVaQlFUQkdPMEZCUXpGR0xHOUNRVUZ2UWl4SFFVRnhRanRKUVVOeVF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dEJRVU14UkN4RFFVRkRPMEZCUlVRN096czdSMEZKUnp0QlFVTklMRFpDUVVFMlFpeEhRVUZ4UWp0SlFVTTVReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRKUVVOdVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4WlFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExHTkJRV01zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03U1VGRGNrVXNUVUZCVFN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkZPVU1zV1VGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeFpRVUZETEVOQlFVTXNiMEpCUVZNc1JVRkJSVHRaUVVOd1F5eFBRVUZQTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkRhRUlzVDBGQlR5eEZRVUZGTzJkQ1FVTk1MRmxCUVVNc1EwRkJReXh2UWtGQlV5eEZRVUZGTEVWQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVVNc1EwRkJReXd3UWtGQk1FSXNSVUZCUlN4RlFVRkRMRVZCUVVVc1JVRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZETEVOQlFVTXNSVUZCUXl4RFFVRkRPMmRDUVVOd1JTeFpRVUZETEVOQlFVTXNiMEpCUVZNc1JVRkJSVHR2UWtGRFZDeEpRVUZKTEVWQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRE8yOUNRVU55UWl4UFFVRlBMRVZCUVVNN2QwSkJRMG9zV1VGQlF5eERRVUZETEdWQlFVa3NSVUZCUlN4RlFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZETEVOQlFVTTdkMEpCUTNwQ0xGbEJRVU1zUTBGQlF5eHZRa0ZCVXl4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxGbEJRVU1zUTBGQlF5eDFRa0ZCZFVJc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlF5eERRVUZETzNGQ1FVTXZSRHRwUWtGRFNpeERRVUZETzJGQlEwdzdVMEZCUXl4RFFVRkRPMHRCUTA0c1EwRkJReXhEUVVGRE8wbEJRMGdzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXp0QlFVTm1MRU5CUVVNN1FVRkZSRHM3TzBkQlIwYzdRVUZEU0N4MVFrRkJkVUlzUjBGQmNVSTdTVUZEZUVNc1RVRkJUU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGJFUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5rTEVsQlFVa3NRMEZCUXp0UlFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZCUXl4RFFVRkRPMGxCUTJoRExFdEJRVXNzUTBGQlFTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEc5Q1FVRnZRaXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlFVTXNRMEZCUXp0SlFVTnVSQ3haUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdTVUZEV0N4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRE8wRkJRMllzUTBGQlF6dEJRVVZFT3pzN096dEhRVXRITzBGQlEwZ3NPRUpCUVRoQ0xFZEJRWEZDTEVWQlFVVXNUMEZCWXp0SlFVTXZSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEYUVJc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5dzJSRUZCTmtRc1JVRkJSU3hWUVVGVExFbEJRVmM3VVVGREwwWXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlF6VkNMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVNdlFpeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROMElzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdVVUZETjBJc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOSUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRek5DTEVOQlFVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9fZGlzdC9zcmMvdmlldy9NYWluRXhhbXBsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBoc2xheW91dF8xID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuZnVuY3Rpb24gdG9vbHRpcCh0ZXh0LCB0aXAsIHBvc2l0aW9uKSB7XG4gICAgLy8gcG9zaXRpb246IHRvcCwgbGVmdCwgYm90dG9uLCByaWdodFxuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy10b29sdGlwW2hyZWY9I10nLCBbdGV4dCwgaHNsYXlvdXRfMS5tKGBzcGFuLmhzLXRvb2x0aXAtJHtwb3NpdGlvbn1gLCB0aXApXSk7XG59XG5leHBvcnRzLnRvb2x0aXAgPSB0b29sdGlwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkc5dmJIUnBjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTkyYVdWM0wxUnZiMngwYVhBdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4MVEwRkJiVU03UVVGRmJrTXNhVUpCUVhkQ0xFbEJRVmNzUlVGQlJTeEhRVUZWTEVWQlFVVXNVVUZCWlR0SlFVTTFSQ3h4UTBGQmNVTTdTVUZEY2tNc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeFpRVUZETEVOQlFVTXNiVUpCUVcxQ0xGRkJRVkVzUlVGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOdVJpeERRVUZETzBGQlNFUXNNRUpCUjBNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL19kaXN0L3NyYy92aWV3L1Rvb2x0aXAuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIHBsYWNlSG9sZGVyc0NvdW50IChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG4gIC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcbiAgLy8gcmVwcmVzZW50IG9uZSBieXRlXG4gIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuICAvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG4gIHJldHVybiBiNjRbbGVuIC0gMl0gPT09ICc9JyA/IDIgOiBiNjRbbGVuIC0gMV0gPT09ICc9JyA/IDEgOiAwXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICAvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbiAgcmV0dXJuIGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVyc0NvdW50KGI2NClcbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuICBwbGFjZUhvbGRlcnMgPSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG5cbiAgYXJyID0gbmV3IEFycihsZW4gKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gbGVuIC0gNCA6IGxlblxuXG4gIHZhciBMID0gMFxuXG4gIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHwgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICsgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIG91dHB1dCA9ICcnXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAyXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9PSdcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgKHVpbnQ4W2xlbiAtIDFdKVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDEwXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz0nXG4gIH1cblxuICBwYXJ0cy5wdXNoKG91dHB1dClcblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vYmFzZTY0LWpzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2J1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtaXRocmlsXzEgPSByZXF1aXJlKFwiLi9taXRocmlsXCIpO1xuY29uc3QgbGF5b3V0ID0gcmVxdWlyZShcIi4vXCIpO1xuZnVuY3Rpb24gY29weShzdHJ1Y3QpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0cnVjdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gW107XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBzdHJ1Y3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlc3VsdCA9IHt9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0cnVjdDtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc3RydWN0KS5tYXAoKGspID0+IHJlc3VsdFtrXSA9IGNvcHkoc3RydWN0W2tdKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHJlc29sdmUoc3ltLCBjb250ZXh0KSB7XG4gICAgbGV0IGNsO1xuICAgIGNvbnRleHQuY29uY2F0KGxheW91dCkuc29tZSgoYykgPT4gY2wgPSBjW3N5bV0pO1xuICAgIHJldHVybiBjbDtcbn1cbmZ1bmN0aW9uIHJlY3Vyc2UoY29uZmlnLCBjb250ZXh0KSB7XG4gICAgaWYgKFsnc3RyaW5nJywgJ251bWJlcicsICdib29sZWFuJywgJ2Z1bmN0aW9uJ10uaW5kZXhPZih0eXBlb2YgY29uZmlnKSA+PSAwKSB7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICAgIGxldCByZXN1bHQgPSBjb25maWcubGVuZ3RoID8gW10gOiB7fTtcbiAgICBrZXlzLm1hcCgoaykgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gcmVjdXJzZShjb25maWdba10sIGNvbnRleHQpO1xuICAgICAgICBjb25zdCBjbCA9IHJlc29sdmUoaywgY29udGV4dCk7XG4gICAgICAgIGlmIChjbCkge1xuICAgICAgICAgICAgY29uc3QgciA9IHtcbiAgICAgICAgICAgICAgICBjb21wQ2xhc3M6IGNsLFxuICAgICAgICAgICAgICAgIGF0dHJzOiBjb250ZW50XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgKCFBcnJheS5pc0FycmF5KGNvbmZpZykgJiYga2V5cy5sZW5ndGggPT09IDEpID9cbiAgICAgICAgICAgICAgICByZXN1bHQgPSByIDpcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSByO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2tdID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5jbGFzcyBIc0NvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbiAgICBhdHRhY2hOb2RlVHJlZShjb25maWcsIHJvb3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVjb2RlUm91dGUocm91dGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJwID0gcm91dGUucGFyYW1zID0gW107XG4gICAgICAgICAgICByb3V0ZS5wYXRocy5tYXAoKHAwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gcDAubWF0Y2goLzooLis/KVxcYi9nKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5tYXAoKHAxKSA9PiBwMS5zdWJzdHIoMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChwMikgPT4gcnAuaW5kZXhPZihwMikgPCAwID8gcnAucHVzaChwMikgOiAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVjb2RlKGNvbmZpZykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb21wQ2xhc3MgJiYgIXJlc3VsdC5yb290KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJvb3QgPSBjb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcCgoaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnW2tdLmNvbXBDbGFzcyAmJiAhcmVzdWx0LnJvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yb290ID0gY29uZmlnW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGsgPT09ICdyb3V0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yb3V0ZSA9IGRlY29kZVJvdXRlKGNvbmZpZy5yb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRba10gPSBjb25maWdba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJlcGFyZVJvdXRlcyhjb250ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjciA9IGNvbnRlbnQucm9vdDtcbiAgICAgICAgICAgIGNsYXNzIFJvdXRlciB7XG4gICAgICAgICAgICAgICAgdmlldyhub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyLmF0dHJzLnJvdXRlID0ge307XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucm91dGUucGFyYW1zLm1hcCgoaykgPT4gY3IuYXR0cnMucm91dGVba10gPSBub2RlLmF0dHJzW2tdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1pdGhyaWxfMS5tKGNyLmNvbXBDbGFzcywgY29weShjci5hdHRycykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnQucm91dGUucm91dGVzID0ge307XG4gICAgICAgICAgICBjb250ZW50LnJvdXRlLnBhdGhzLm1hcCgocGF0aCkgPT4gY29udGVudC5yb3V0ZS5yb3V0ZXNbcGF0aF0gPSBSb3V0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1vdW50T3JSb3V0ZShjKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZGVjb2RlKGMpO1xuICAgICAgICAgICAgY29uc3QgY3IgPSBjb250ZW50LnJvb3Q7XG4gICAgICAgICAgICBpZiAoIWNyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKiBubyB0b3AgbGV2ZWwgY29tcG9uZW50IGRlZmluZWQgaW4gY29uZmlnOicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29udGVudC5yb3V0ZSkge1xuICAgICAgICAgICAgICAgIHByZXBhcmVSb3V0ZXMoY29udGVudCk7XG4gICAgICAgICAgICAgICAgbWl0aHJpbF8xLm0ucm91dGUocm9vdCwgY29udGVudC5yb3V0ZS5kZWZhdWx0LCBjb250ZW50LnJvdXRlLnJvdXRlcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIHJvdXRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWl0aHJpbF8xLm0ubW91bnQocm9vdCwgeyB2aWV3OiAobm9kZSkgPT4gbWl0aHJpbF8xLm0oY3IuY29tcENsYXNzLCBjb3B5KGNyLmF0dHJzKSkgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdW50aW5nIGNvbXBvbmVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHRoaXMuZ2V0Q29udGVudChjb25maWcpXG4gICAgICAgICAgICAudGhlbigocikgPT4gcmVjdXJzZShyLCBjb250ZXh0KSlcbiAgICAgICAgICAgIC50aGVuKG1vdW50T3JSb3V0ZSk7XG4gICAgfVxuICAgIGdldENvbnRlbnQoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpID8gdGhpcy5sb2FkKGNvbmZpZykgOiBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcbiAgICB9XG4gICAgbG9hZChmaWxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0aW5nICcgKyBmaWxlKTtcbiAgICAgICAgcmV0dXJuIG1pdGhyaWxfMS5tLnJlcXVlc3QoeyBtZXRob2Q6IFwiR0VUXCIsIHVybDogZmlsZSB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Ic0NvbmZpZyA9IEhzQ29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUhORGIyNW1hV2N1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhSE5EYjI1bWFXY3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGM1EwRXNkVU5CUVhGRE8wRkJRM0pETERaQ1FVRTJRanRCUVUwM1FpeGpRVUZqTEUxQlFWVTdTVUZEY0VJc1NVRkJTU3hOUVVGVkxFTkJRVU03U1VGRFppeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVRkRMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGQlF5eERRVUZETzBsQlF6TkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEUxQlFVMHNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRVU1zVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVRkRMRU5CUVVNN1NVRkRja1FzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRVU1zUTBGQlF6dEpRVU4yUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVZFc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYmtVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU5zUWl4RFFVRkRPMEZCVjBRc2FVSkJRV2xDTEVkQlFWVXNSVUZCUlN4UFFVRmhPMGxCUTNSRExFbEJRVWtzUlVGQlRTeERRVUZETzBsQlExZ3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkxMRXRCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNKRUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZEWkN4RFFVRkRPMEZCV1VRc2FVSkJRV2xDTEUxQlFWVXNSVUZCUlN4UFFVRmhPMGxCUTNSRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hUUVVGVExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGQlF5eERRVUZETzBsQlF6ZEdMRTFCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRha01zU1VGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEzQkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZSTzFGQlEyUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNMVF5eE5RVUZOTEVWQlFVVXNSMEZCVHl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlEyNURMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVEN4TlFVRk5MRU5CUVVNc1IwRkJSenRuUWtGRFRpeFRRVUZUTEVWQlFVTXNSVUZCUlR0blFrRkRXaXhMUVVGTExFVkJRVU1zVDBGQlR6dGhRVU5vUWl4RFFVRkRPMWxCUTBZc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTTdaMEpCUTNwRExFMUJRVTBzUjBGQlJ5eERRVUZETzJkQ1FVTldMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVJc1EwRkJRenRSUVVORUxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dFJRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPMEZCUTJ4Q0xFTkJRVU03UVVGclEwUTdTVUZSU1N4WlFVRnpRaXhQUVVGaE8xRkJRV0lzV1VGQlR5eEhRVUZRTEU5QlFVOHNRMEZCVFR0SlFVRkhMRU5CUVVNN1NVRlBka01zWTBGQll5eERRVUZETEUxQlFWVXNSVUZCUlN4SlFVRlJPMUZCYjBJdlFpeHhRa0ZCY1VJc1MwRkJVenRaUVVNeFFpeE5RVUZOTEVWQlFVVXNSMEZCV1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU4wUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFWTTdaMEpCUTNSQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03WjBKQlEzSkRMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTFRc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFWTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTTVRaXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZOTEV0QlFVc3NSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlF5eERRVUZETEVkQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRMMFFzUTBGQlF6dFpRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU5xUWl4RFFVRkRPMUZCVVVRc1owSkJRV2RDTEUxQlFWVTdXVUZEZEVJc1NVRkJTU3hOUVVGTkxFZEJRVThzUlVGQlJ5eERRVUZETzFsQlEzSkNMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtNc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlJ5eE5RVUZOTEVOQlFVTTdXVUZEZWtJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTktMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJTenR2UWtGRE1VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzNkQ1FVTjBReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE5VSXNRMEZCUXp0dlFrRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlEzSkNMRTFCUVUwc1EwRkJReXhMUVVGTExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenR2UWtGRE4wTXNRMEZCUXp0dlFrRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dDNRa0ZEU2l4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNeFFpeERRVUZETzJkQ1FVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUFzUTBGQlF6dFpRVU5FTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRiRUlzUTBGQlF6dFJRVVZFTEhWQ1FVRjFRaXhQUVVGWE8xbEJRemxDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU03V1VGRGVFSTdaMEpCUTBrc1NVRkJTU3hEUVVGRExFbEJRVlU3YjBKQlExZ3NSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzI5Q1FVTndRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGTExFdEJRek5DTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRM0JETEVOQlFVTTdiMEpCUTBZc1RVRkJUU3hEUVVGRExGZEJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRNME1zUTBGQlF6dGhRVU5LTzFsQlEwUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlF6RkNMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVZjc1MwRkJTeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU5zUml4RFFVRkRPMUZCUlVRc2MwSkJRWE5DTEVOQlFVczdXVUZEZGtJc1RVRkJUU3hQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRlRUlzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5PTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc0swTkJRU3RETEVOQlFVTXNRMEZCUXp0blFrRkROMFFzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVONFFpeERRVUZETzFsQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJoQ0xHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRka0lzVjBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZETTBRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFNpeFhRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVsQlFWVXNTMEZCU1N4WFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjBSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU03V1VGRGRFTXNRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkZSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMUZCUXpkQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRPMkZCUTJ4Q0xFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVc3NTMEZCU3l4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzJGQlEzQkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUlU4c1ZVRkJWU3hEUVVGRExFMUJRVlU3VVVGRGVrSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJUeXhOUVVGTkxFdEJRVXNzVVVGQlVTeERRVUZETEVkQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pHTEVOQlFVTTdTVUZGVHl4SlFVRkpMRU5CUVVNc1NVRkJWenRSUVVOd1FpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5zUXl4TlFVRk5MRU5CUVVNc1YwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETzJGQlEzcERMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVXM3V1VGRFZDeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRM1JDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRXQ3hEUVVGRE8wTkJRMG83UVVGNlNFUXNORUpCZVVoREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L2hzQ29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1pdGhyaWxfMSA9IHJlcXVpcmUoXCIuLi9taXRocmlsXCIpO1xuY29uc3QgTGF5b3V0XzEgPSByZXF1aXJlKFwiLi9MYXlvdXRcIik7XG5jbGFzcyBDb21wb25lbnQge1xufVxuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldENvbXBvbmVudHMobm9kZSkge1xuICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkobm9kZS5hdHRycy5jb250ZW50KSA/IG5vZGUuYXR0cnMuY29udGVudCA6XG4gICAgICAgICAgICBub2RlLmF0dHJzLmNvbnRlbnQubWFwKChjKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGMuY29tcENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuYXR0cnMucm91dGUgPSBub2RlLmF0dHJzLnJvdXRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWl0aHJpbF8xLm0oYy5jb21wQ2xhc3MsIGMuYXR0cnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENTUyhub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLmF0dHJzLmNzcyB8fCAnJztcbiAgICB9XG4gICAgbm9ybWFsaXplQ29udGVudChjb21wb25lbnRzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBbbWl0aHJpbF8xLm0oJy5ocy1sZWFmJywgbWl0aHJpbF8xLm0udHJ1c3QoY29tcG9uZW50cykpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cy5zb21lKChjKSA9PiAodHlwZW9mIGMgIT09ICdvYmplY3QnKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cy5tYXAoKGNvbXApID0+IChjb21wIGluc3RhbmNlb2YgQ29udGFpbmVyKSA/IGNvbXAgOiBtaXRocmlsXzEubShDb250YWluZXIsIHsgY29udGVudDogY29tcCB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2NvbXBvbmVudHNdO1xuICAgIH1cbiAgICB2aWV3KG5vZGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMubm9ybWFsaXplQ29udGVudCh0aGlzLmdldENvbXBvbmVudHMobm9kZSkpO1xuICAgICAgICBsZXQgY3NzID0gTGF5b3V0XzEuTGF5b3V0LmNyZWF0ZUxheW91dChub2RlLmF0dHJzLCBjb250ZW50KTtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgICAgICBzdHlsZTogbm9kZS5zdHlsZSxcbiAgICAgICAgICAgIHJvdXRlOiBub2RlLmF0dHJzLnJvdXRlLFxuICAgICAgICAgICAgb25jbGljazogbm9kZS5hdHRycy5vbmNsaWNrXG4gICAgICAgIH07XG4gICAgICAgIG5vZGUuYXR0cnMucm91dGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChub2RlLmF0dHJzLmhyZWYpIHtcbiAgICAgICAgICAgIGF0dHJzLmhyZWYgPSBub2RlLmF0dHJzLmhyZWY7XG4gICAgICAgICAgICBhdHRycy5vbmNyZWF0ZSA9IG1pdGhyaWxfMS5tLnJvdXRlLmxpbms7XG4gICAgICAgICAgICBhdHRycy5vbnVwZGF0ZSA9IG1pdGhyaWxfMS5tLnJvdXRlLmxpbms7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pdGhyaWxfMS5tKGAuaHMtbGF5b3V0ICR7Y3NzfSAke3RoaXMuZ2V0Q1NTKG5vZGUpfWAsIGF0dHJzLCBjb250ZW50Lm1hcCgoYykgPT4gYykpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29udGFpbmVyID0gQ29udGFpbmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dWRHRnBibVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dkxpNHZjM0pqTDNacFpYY3ZRMjl1ZEdGcGJtVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlMwRXNkME5CUVRCRE8wRkJSVEZETEhGRFFVRjNRenRCUVZGNFF6dERRVTlETzBGQlVFUXNPRUpCVDBNN1FVRjVRa1FzWlVGQlowTXNVMEZCVVN4VFFVRlRPMGxCYlVKdVF5eGhRVUZoTEVOQlFVTXNTVUZCVlR0UlFVTTVRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUE8xbEJRM3BFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVczdaMEpCUTNwQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5rTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRPMjlDUVVOcVF5eE5RVUZOTEVOQlFVTXNWMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVOdVF5eERRVUZETzJkQ1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU5LTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMklzUTBGQlF6dFpRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFnc1EwRkJRenRKUVZGVExFMUJRVTBzUTBGQlF5eEpRVUZWTzFGQlEzWkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRhRU1zUTBGQlF6dEpRVWRQTEdkQ1FVRm5RaXhEUVVGRExGVkJRV2RFTzFGQlEzSkZMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzVlVGQlZTeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha01zVFVGQlRTeERRVUZETEVOQlFVTXNWMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hYUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOb1JDeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSQ0xFVkJRVVVzUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGTExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVRc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRTBRaXhMUVVNdlF5eERRVUZETEVsQlFVa3NXVUZCV1N4VFFVRlRMRU5CUVVNc1IwRkJSU3hKUVVGSkxFZEJRVWNzVjBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkRMRTlCUVU4c1JVRkJReXhKUVVGSkxFVkJRVU1zUTBGQlF5eERRVU51UlN4RFFVRkRPMWxCUTA0c1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTktMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU03V1VGRGRFSXNRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJjVUpFTEVsQlFVa3NRMEZCUXl4SlFVRlZPMUZCUTFnc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOb1JTeEpRVUZKTEVkQlFVY3NSMEZCUnl4bFFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRia1FzVFVGQlRTeExRVUZMTEVkQlFVODdXVUZEWkN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXM3V1VGRGFrSXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN6dFpRVU4yUWl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTzFOQlF6bENMRU5CUVVNN1VVRkRSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkROMElzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeENMRXRCUVVzc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkROMElzUzBGQlN5eERRVUZETEZGQlFWRXNSMEZCUnl4WFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU01UWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExGZEJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUTJ4RExFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNWMEZCUXl4RFFVRkRMR05CUVdNc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVzc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcEdMRU5CUVVNN1EwRkRTanRCUVRkR1JDdzRRa0UyUmtNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L3ZpZXcvQ29udGFpbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IExheW91dF8xID0gcmVxdWlyZShcIi4vTGF5b3V0XCIpO1xuY29uc3QgVG9rZW5zXzEgPSByZXF1aXJlKFwiLi9Ub2tlbnNcIik7XG5leHBvcnRzLlBpbGxhckxheW91dHMgPSBbXG4gICAgJ2NvbHVtbnMnLCAncm93cydcbl07XG5jb25zdCBjUGFyYW1zID0ge1xuICAgIGNvbHVtbnM6IHtcbiAgICAgICAgY3NzQ2xhc3M6ICcuaHMtY29sdW1uLWxheW91dCcsXG4gICAgICAgIGZpZWxkczogWyd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAnaGVpZ2h0JywgJ3dpZHRoJ11cbiAgICB9LFxuICAgIHJvd3M6IHtcbiAgICAgICAgY3NzQ2xhc3M6ICcuaHMtcm93LWxheW91dCcsXG4gICAgICAgIGZpZWxkczogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nLCAnd2lkdGgnLCAnaGVpZ2h0J11cbiAgICB9XG59O1xuY2xhc3MgUGlsbGFycyBleHRlbmRzIExheW91dF8xLkxheW91dCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zLCBhcmVhRGVzYykge1xuICAgICAgICBzdXBlcihhcmVhRGVzYyk7XG4gICAgICAgIHRoaXMuYXJlYURlc2MgPSBhcmVhRGVzYztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBwYXJhbXMuZmllbGRzO1xuICAgICAgICB0aGlzLmNzc0NsYXNzID0gcGFyYW1zLmNzc0NsYXNzO1xuICAgICAgICBsZXQgbiA9IGFyZWFEZXNjLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBmaXJzdCA9IDA7XG4gICAgICAgIGxldCBsYXN0ID0gMDtcbiAgICAgICAgdGhpcy51bml0ID0gYXJlYURlc2Muc29tZSgoYXJlYSkgPT4gKGFyZWEgaW5zdGFuY2VvZiBUb2tlbnNfMS5QaXhlbFRva2VuKSkgPyB0aGlzLnVuaXRQaXhlbCA6IHRoaXMudW5pdFBlcmNlbnQ7XG4gICAgICAgIGFyZWFEZXNjLnNvbWUoKGFyZWEsIGkpID0+ICgoYXJlYURlc2NbaV0gaW5zdGFuY2VvZiBUb2tlbnNfMS5EZWZpbmVkVG9rZW4pID8gKytmaXJzdCA8IDAgOiB0cnVlKSk7XG4gICAgICAgIGFyZWFEZXNjLnNvbWUoKGFyZWEsIGkpID0+ICgoYXJlYURlc2NbbiAtIGldIGluc3RhbmNlb2YgVG9rZW5zXzEuRGVmaW5lZFRva2VuKSA/ICsrbGFzdCA8IDAgOiB0cnVlKSk7XG4gICAgICAgIHRoaXMuZmlyc3RGaXhlZCA9IGZpcnN0O1xuICAgICAgICB0aGlzLmxhc3RGaXhlZCA9IE1hdGgubWluKGxhc3QsIGFyZWFEZXNjLmxlbmd0aCAtIGZpcnN0KTtcbiAgICB9XG4gICAgO1xuICAgIGdldFNpemVzKG51bSkge1xuICAgICAgICBjb25zdCBmaXJzdCA9IHRoaXMuZmlyc3RGaXhlZDtcbiAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMubGFzdEZpeGVkO1xuICAgICAgICBjb25zdCBkZXNjID0gdGhpcy5hcmVhRGVzYztcbiAgICAgICAgY29uc3QgbGVuID0gZGVzYy5sZW5ndGg7XG4gICAgICAgIHJldHVybiBbLi4uQXJyYXkobnVtKS5rZXlzKCldLm1hcCgoaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGkgPiBudW0gLSAxIC0gbGFzdCkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBkZXNjW2xlbiAtIChudW0gLSBpKV0uZ2V0U2l6ZSgpO1xuICAgICAgICAgICAgICAgIHQgPSAnZW5kJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCBmaXJzdCkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBkZXNjW2ldLmdldFNpemUoKTtcbiAgICAgICAgICAgICAgICB0ID0gJ3N0YXJ0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxlbiA+IDAgJiYgbGVuID09PSBmaXJzdCkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBkZXNjW2xlbiAtIDFdLmdldFNpemUoKTtcbiAgICAgICAgICAgICAgICB0ID0gJ3N0YXJ0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHNpemU6IHNpemUsIGNvZGU6IHQsIGZpZWxkczoge30gfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVuaXRQZXJjZW50KG51bSkge1xuICAgICAgICBsZXQgZiA9IHRoaXMuZmllbGRzO1xuICAgICAgICBsZXQgbWF4ID0gMTAwLjA7XG4gICAgICAgIGxldCBzdHlsZXMgPSB0aGlzLmdldFNpemVzKG51bSk7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHsgaWYgKHN0eWxlLnNpemUpIHtcbiAgICAgICAgICAgIG1heCA9IG1heCAtIHN0eWxlLnNpemU7XG4gICAgICAgICAgICBudW0tLTtcbiAgICAgICAgfSB9KTtcbiAgICAgICAgbGV0IGRlZkRpbSA9IG1heCAvIG51bTtcbiAgICAgICAgZnVuY3Rpb24gcGFzcyhzdHlsZXMsIGl4MCwgaXgxLCBicmVha0NvbmQpIHtcbiAgICAgICAgICAgIGxldCBzdW1EaW0gPSAwO1xuICAgICAgICAgICAgc3R5bGVzLnNvbWUoc3R5bGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaXplID0gc3R5bGUuc2l6ZSB8fCBkZWZEaW07XG4gICAgICAgICAgICAgICAgaWYgKGJyZWFrQ29uZChzdHlsZS5jb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2l4MF0gPSBzdW1EaW0gKyAnJSc7XG4gICAgICAgICAgICAgICAgc3VtRGltICs9IHNpemU7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2l4MV0gPSAoMTAwIC0gc3VtRGltKSArICclJztcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZls1XV0gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGFzcyhzdHlsZXMsIGZbMl0sIGZbM10sIChlKSA9PiBlID09PSAnZW5kJyk7XG4gICAgICAgIHBhc3Moc3R5bGVzLnJldmVyc2UoKSwgZlszXSwgZlsyXSwgKGUpID0+IGUgIT09ICdlbmQnKTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIDtcbiAgICB1bml0UGl4ZWwobnVtKSB7XG4gICAgICAgIGxldCBzdHlsZXMgPSB0aGlzLmdldFNpemVzKG51bSk7XG4gICAgICAgIGxldCBmID0gdGhpcy5maWVsZHM7XG4gICAgICAgIGxldCBkZWZEaW0gPSAxMDAuMCAvIG51bTtcbiAgICAgICAgbGV0IHN1bURpbSA9IDA7XG4gICAgICAgIHN0eWxlcy5zb21lKChzdHlsZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0eWxlLmNvZGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZlsyXV0gPSBzdW1EaW0gKyAncHgnO1xuICAgICAgICAgICAgICAgIHN1bURpbSArPSBzdHlsZS5zaXplICsgKHRoaXMuc3BhY2luZyB8fCAwKSArICh0aGlzLnNwYWNpbmcgfHwgMCk7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbM11dID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzVdXSA9IHN0eWxlLnNpemUgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGUuY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzJdXSA9IChzdW1EaW0gPiAwKSA/IChzdW1EaW0gKyAncHgnKSA6IChpICogZGVmRGltICsgJyUnKTtcbiAgICAgICAgICAgICAgICBzdW1EaW0gPSAtMTtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZlszXV0gPSAoMTAwIC0gKGkgKyAxKSAqIGRlZkRpbSkgKyAnJSc7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbNV1dID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGUuY29kZSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1bURpbSA9IDA7XG4gICAgICAgIHN0eWxlcy5zbGljZSgpLnJldmVyc2UoKS5zb21lKChzdHlsZSwgaSkgPT4ge1xuICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbM11dID0gc3VtRGltICsgJ3B4JztcbiAgICAgICAgICAgIGlmIChzdHlsZS5jb2RlID09PSAnZW5kJykge1xuICAgICAgICAgICAgICAgIHN1bURpbSArPSBzdHlsZS5zaXplICsgKHRoaXMuc3BhY2luZyB8fCAwKSArICh0aGlzLnNwYWNpbmcgfHwgMCk7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbMl1dID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzVdXSA9IHN0eWxlLnNpemUgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN1bURpbSA+IDAgJiYgc3R5bGUuY29kZSAhPT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZls1XV0gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICB9XG4gICAgO1xuICAgIGdldFN0eWxlcyhjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBmID0gdGhpcy5maWVsZHM7XG4gICAgICAgIGxldCBzdHlsZXMgPSB0aGlzLnVuaXQoY29tcG9uZW50cy5sZW5ndGgpO1xuICAgICAgICBjb21wb25lbnRzLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgYy5zdHlsZSA9IGAke2ZbMF19OjAlOyAke2ZbMV19OjAlOyBgO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzW2ldLmZpZWxkcykuZm9yRWFjaCgoc3QpID0+IHsgYy5zdHlsZSArPSBgJHtzdH06ICR7c3R5bGVzW2ldLmZpZWxkc1tzdF19O2A7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzQ2xhc3M7XG4gICAgfVxuICAgIDtcbn1cbjtcbmNsYXNzIENvbHVtbnMgZXh0ZW5kcyBQaWxsYXJzIHtcbiAgICBjb25zdHJ1Y3RvcihhcmVhRGVzYykge1xuICAgICAgICBzdXBlcihjUGFyYW1zW2V4cG9ydHMuUGlsbGFyTGF5b3V0c1swXV0sIGFyZWFEZXNjKTtcbiAgICAgICAgdGhpcy5hcmVhRGVzYyA9IGFyZWFEZXNjO1xuICAgIH1cbiAgICA7XG59XG47XG5jbGFzcyBSb3dzIGV4dGVuZHMgUGlsbGFycyB7XG4gICAgY29uc3RydWN0b3IoYXJlYURlc2MpIHtcbiAgICAgICAgc3VwZXIoY1BhcmFtc1tleHBvcnRzLlBpbGxhckxheW91dHNbMV1dLCBhcmVhRGVzYyk7XG4gICAgICAgIHRoaXMuYXJlYURlc2MgPSBhcmVhRGVzYztcbiAgICB9XG4gICAgO1xufVxuO1xuTGF5b3V0XzEuTGF5b3V0LnJlZ2lzdGVyKGV4cG9ydHMuUGlsbGFyTGF5b3V0c1swXSwgQ29sdW1ucyk7XG5MYXlvdXRfMS5MYXlvdXQucmVnaXN0ZXIoZXhwb3J0cy5QaWxsYXJMYXlvdXRzWzFdLCBSb3dzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVHbHNiR0Z5WldSTVlYbHZkWFF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk4dUxpOXpjbU12ZG1sbGR5OVFhV3hzWVhKbFpFeGhlVzkxZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVEpEUVN4eFEwRkJkME03UVVGRGVFTXNjVU5CUVc5Rk8wRkJaMEoyUkN4UlFVRkJMR0ZCUVdFc1IwRkJSenRKUVVONlFpeFRRVUZUTEVWQlFVVXNUVUZCVFR0RFFVTndRaXhEUVVGRE8wRkJTMFlzVFVGQlRTeFBRVUZQTEVkQlFVYzdTVUZEV2l4UFFVRlBMRVZCUVdkQ08xRkJRMjVDTEZGQlFWRXNSVUZCUlN4dFFrRkJiVUk3VVVGRE4wSXNUVUZCVFN4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeE5RVUZOTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFTkJRVU03UzBGRGFFVTdTVUZEUkN4SlFVRkpMRVZCUVdkQ08xRkJRMmhDTEZGQlFWRXNSVUZCUlN4blFrRkJaMEk3VVVGRE1VSXNUVUZCVFN4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFOUJRVThzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU03UzBGRGFFVTdRMEZEU2l4RFFVRkRPMEZCVDBZc1lVRkJkVUlzVTBGQlVTeGxRVUZOTzBsQllXcERMRmxCUVZrc1RVRkJiVUlzUlVGQlV5eFJRVUZ6UWp0UlFVTXhSQ3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZFYjBJc1lVRkJVU3hIUVVGU0xGRkJRVkVzUTBGQll6dFJRVVV4UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZETlVJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUldoRExFbEJRVWtzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVVNc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOa0xFbEJRVWtzU1VGQlNTeEhRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVmtMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVdkQ0xFdEJRVXNzUTBGQlF5eEpRVUZKTEZsQlFWa3NiVUpCUVZVc1EwRkJReXhEUVVGRExFZEJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJSMnBJTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGblFpeEZRVUZGTEVOQlFWRXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZqTEhGQ1FVRlpMRU5CUVVNc1IwRkJSU3hGUVVGRkxFdEJRVXNzUjBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVjelJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJaMElzUlVGQlJTeERRVUZSTEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NjVUpCUVZrc1EwRkJReXhIUVVGRkxFVkJRVVVzU1VGQlNTeEhRVUZETEVOQlFVTXNSMEZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVE5ITEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0xUkN4RFFVRkRPMGxCUVVFc1EwRkJRenRKUVZOTkxGRkJRVkVzUTBGQlF5eEhRVUZWTzFGQlEzWkNMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTTdVVUZET1VJc1RVRkJUU3hKUVVGSkxFZEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTTNRaXhOUVVGTkxFbEJRVWtzUjBGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUXpWQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkZlRUlzVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGUk8xbEJRM1pETEVsQlFVa3NTVUZCU1N4SFFVRlZMRWxCUVVrc1EwRkJRenRaUVVOMlFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRZaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkRMRU5CUVVNc1IwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlJTeERRVUZETzJkQ1FVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdaMEpCUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFpRVUZETEVOQlFVTTdXVUZEZWtVc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJSU3hEUVVGRE8yZENRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdaMEpCUVVNc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dFpRVUZETEVOQlFVTTdXVUZETDBRc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhMUVVGSExFdEJRVXNzUTBGQlF5eERRVUZCTEVOQlFVTTdaMEpCUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WjBKQlFVTXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRaUVVGRExFTkJRVU03V1VGRE5VVXNUVUZCVFN4RFFVRkRMRVZCUVVNc1NVRkJTU3hGUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJReXhGUVVGRkxFVkJRVU1zUTBGQlF6dFJRVU14UXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU03U1VGRlR5eFhRVUZYTEVOQlFVTXNSMEZCVlR0UlFVTXhRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTm9RaXhKUVVGSkxFMUJRVTBzUjBGQlowSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVUzUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF6dFpRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEdMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZGZGtJc1kwRkJZeXhOUVVGdFFpeEZRVUZGTEVkQlFWVXNSVUZCUlN4SFFVRlZMRVZCUVVVc1UwRkJaME03V1VGRGRrWXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMllzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxPMmRDUVVOaUxFbEJRVWtzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRWxCUVVrc1RVRkJUU3hEUVVGRE8yZENRVU5vUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVGRExFTkJRVU03WjBKQlF6TkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NUVUZCVFN4SFFVRkRMRWRCUVVjc1EwRkJRenRuUWtGREwwSXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJRenRuUWtGRFppeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkRMRWRCUVVjc1EwRkJRenRuUWtGRGNrTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1owSkJRelZDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkRha0lzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEVUN4RFFVRkRPMUZCUlVRc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCVVN4TFFVRkxMRU5CUVVNc1MwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5zUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRlJMRXRCUVVzc1EwRkJReXhMUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6VkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVGQkxFTkJRVU03U1VGRlRTeFRRVUZUTEVOQlFVTXNSMEZCVlR0UlFVTjRRaXhKUVVGSkxFMUJRVTBzUjBGQlowSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlJYQkNMRWxCUVVrc1RVRkJUU3hIUVVGSExFdEJRVXNzUjBGQlF5eEhRVUZITEVOQlFVTTdVVUZIZGtJc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyWXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFsQlEycENMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVY3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRrSXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVVc1NVRkJTU3hEUVVGRE8yZENRVU5zUXl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5xUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJRenRuUWtGRE5VSXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hIUVVGRkxFbEJRVWtzUTBGQlF6dFpRVU14UXl4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBJc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVOQlFVTXNSMEZCUlN4RFFVRkRMRTFCUVUwc1IwRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEyNUZMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEV2l4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dG5Ra0ZET1VNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU03V1VGRGFFTXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVGRExFTkJRVU03V1VGREwwTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVOcVFpeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVZElMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdDeE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1dVRkRia01zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTI1RExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYWtVc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU03WjBKQlF6VkNMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUjBGQlF5eEpRVUZKTEVOQlFVTTdXVUZEZWtNc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTktMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnlReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF6dG5Ra0ZEYUVNc1EwRkJRenRuUWtGRFJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTJoQ0xFTkJRVU03V1VGRFJDeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTJwQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlFVRXNRMEZCUXp0SlFWRlJMRk5CUVZNc1EwRkJReXhWUVVGcFF6dFJRVU5xUkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzQkNMRWxCUVVrc1RVRkJUU3hIUVVGblFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU4yUkN4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQmFVSXNSVUZCUlN4RFFVRlJPMWxCUTNaRExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN1dVRkRja01zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1JVRkJVeXhQUVVGUExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSMEZCUnl4RlFVRkZMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlFVRXNRMEZCUXp0RFFVTk1PMEZCUVVFc1EwRkJRenRCUVhWRVJpeGhRVUZqTEZOQlFWRXNUMEZCVHp0SlFVTjZRaXhaUVVGdFFpeFJRVUZ6UWp0UlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zY1VKQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlFYSkZMR0ZCUVZFc1IwRkJVaXhSUVVGUkxFTkJRV003U1VGQmFVUXNRMEZCUXp0SlFVRkJMRU5CUVVNN1EwRkRMMFk3UVVGQlFTeERRVUZETzBGQmRVUkdMRlZCUVZjc1UwRkJVU3hQUVVGUE8wbEJRM1JDTEZsQlFXMUNMRkZCUVhOQ08xRkJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4eFFrRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkJja1VzWVVGQlVTeEhRVUZTTEZGQlFWRXNRMEZCWXp0SlFVRnBSQ3hEUVVGRE8wbEJRVUVzUTBGQlF6dERRVU12Ump0QlFVRkJMRU5CUVVNN1FVRkZSaXhsUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEhGQ1FVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdRVUZETTBNc1pVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGTExFbEJRVWtzUTBGQlF5eERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvdmlldy9QaWxsYXJlZExheW91dC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBMYXlvdXRfMSA9IHJlcXVpcmUoXCIuL0xheW91dFwiKTtcbmNvbnN0IFRva2Vuc18xID0gcmVxdWlyZShcIi4vVG9rZW5zXCIpO1xuY2xhc3MgVGlsZXMgZXh0ZW5kcyBMYXlvdXRfMS5MYXlvdXQge1xuICAgIGNvbnN0cnVjdG9yKGFyZWFEZXNjKSB7XG4gICAgICAgIHN1cGVyKGFyZWFEZXNjKTtcbiAgICAgICAgdGhpcy5hcmVhRGVzYyA9IGFyZWFEZXNjO1xuICAgICAgICB0aGlzLnVuaXQgPSBhcmVhRGVzYy5zb21lKChhcmVhKSA9PiAoYXJlYSBpbnN0YW5jZW9mIFRva2Vuc18xLlBpeGVsVG9rZW4pKSA/XG4gICAgICAgICAgICB0aGlzLnVuaXRQaXhlbCA6IHRoaXMudW5pdFBlcmNlbnQ7XG4gICAgfVxuICAgIDtcbiAgICB1bml0UGVyY2VudChudW0pIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHRoaXMuYXJlYURlc2M7XG4gICAgICAgIGNvbnN0IGZpbGwgPSB0aGlzLmFyZWFEZXNjLnNvbWUoYSA9PiAoYSBpbnN0YW5jZW9mIFRva2Vuc18xLkZpbGxUb2tlbikpO1xuICAgICAgICBjb25zdCByb290ID0gTWF0aC5zcXJ0KG51bSk7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBNYXRoLnJvdW5kKHJvb3QpO1xuICAgICAgICBsZXQgY29scyA9IE1hdGguZmxvb3Iocm9vdCk7XG4gICAgICAgIGlmIChyb290ID4gY29scykge1xuICAgICAgICAgICAgY29scysrO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3aWR0aCA9IChkZXNjWzBdIGluc3RhbmNlb2YgVG9rZW5zXzEuRGVmaW5lZFRva2VuKSA/IGRlc2NbMF0uZ2V0U2l6ZSgpIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gKGRlc2NbMV0gaW5zdGFuY2VvZiBUb2tlbnNfMS5EZWZpbmVkVG9rZW4pID8gZGVzY1sxXS5nZXRTaXplKCkgOiB3aWR0aDtcbiAgICAgICAgd2lkdGggPSB3aWR0aCB8fCAxMDAgLyBjb2xzO1xuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgMTAwIC8gcm93cztcbiAgICAgICAgbGV0IGxlZnQgPSAwO1xuICAgICAgICBsZXQgdG9wID0gMDtcbiAgICAgICAgbGV0IHN0eWxlcyA9IFsuLi5BcnJheShudW0pLmtleXMoKV0ubWFwKGkgPT4ge1xuICAgICAgICAgICAgbGV0IHIgPSAnYXV0byc7XG4gICAgICAgICAgICBsZXQgdyA9IHdpZHRoICsgJyUnO1xuICAgICAgICAgICAgbGV0IGIgPSAnYXVvdCc7XG4gICAgICAgICAgICBsZXQgaCA9IGhlaWdodCArICclJztcbiAgICAgICAgICAgIGlmICgobGVmdCArIDIgKiB3aWR0aCkgPiAxMDAgJiYgZmlsbCkge1xuICAgICAgICAgICAgICAgIHIgPSAnMCUnO1xuICAgICAgICAgICAgICAgIHcgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHRvcCArIDIgKiBoZWlnaHQpID4gMTAwICYmIGZpbGwpIHtcbiAgICAgICAgICAgICAgICBiID0gJzAlJztcbiAgICAgICAgICAgICAgICBoID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBgXG4gICAgICAgICAgICAgICAgdG9wOiAke01hdGguZmxvb3IodG9wKX0lOyBib3R0b206JHtifTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAke2xlZnR9JTsgICAgICAgICAgIHJpZ2h0OiR7cn07XG4gICAgICAgICAgICAgICAgd2lkdGg6ICR7d307ICAgICAgICAgICAgICBoZWlnaHQ6ICR7aH07XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQobGVmdCArPSB3aWR0aCkgPiAxMDAgLSBNYXRoLmZsb29yKHdpZHRoKSkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSAwO1xuICAgICAgICAgICAgICAgIHRvcCArPSBoZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgIH1cbiAgICA7XG4gICAgdW5pdFBpeGVsKG51bSkge1xuICAgIH1cbiAgICA7XG4gICAgZ2V0U3R5bGVzKGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IHN0eWxlcyA9IHRoaXMudW5pdChjb21wb25lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbXBvbmVudHMubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICBjLnN0eWxlID0gc3R5bGVzW2ldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICcuaHMtdGlsZS1sYXlvdXQnO1xuICAgIH1cbiAgICA7XG59XG47XG5MYXlvdXRfMS5MYXlvdXQucmVnaXN0ZXIoJ3RpbGVzJywgVGlsZXMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdsc1pVeGhlVzkxZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5MmFXVjNMMVJwYkdWTVlYbHZkWFF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRTJSRUVzY1VOQlFYZERPMEZCUTNoRExIRkRRVUVyUlR0QlFVOHZSU3hYUVVGWkxGTkJRVkVzWlVGQlRUdEpRVk4wUWl4WlFVRnRRaXhSUVVGelFqdFJRVU55UXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRVJDeGhRVUZSTEVkQlFWSXNVVUZCVVN4RFFVRmpPMUZCU1hKRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRV2RDTEV0QlFVc3NRMEZCUXl4SlFVRkpMRmxCUVZrc2JVSkJRVlVzUTBGQlF5eERRVUZETzFsQlEzcEZMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVTXhReXhEUVVGRE8wbEJRVUVzUTBGQlF6dEpRVVZOTEZkQlFWY3NRMEZCUXl4SFFVRlZPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRNMElzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4WlFVRlpMR3RDUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU01UWl4SlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpsQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZCUXl4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxIRkNRVUZaTEVOQlFVTXNSMEZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpsRkxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxIRkNRVUZaTEVOQlFVTXNSMEZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUlRGRkxFdEJRVXNzUjBGQlNTeExRVUZMTEVsQlFVc3NSMEZCUnl4SFFVRkRMRWxCUVVrc1EwRkJRenRSUVVNMVFpeE5RVUZOTEVkQlFVY3NUVUZCVFN4SlFVRkpMRWRCUVVjc1IwRkJReXhKUVVGSkxFTkJRVU03VVVGRE5VSXNTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMklzU1VGQlNTeEhRVUZITEVkQlFVa3NRMEZCUXl4RFFVRkRPMUZCUjJJc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNKRExFbEJRVWtzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXp0WlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUjBGQlF5eEhRVUZITEVOQlFVTTdXVUZEY2tNc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzFsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1RVRkJUU3hIUVVGRExFZEJRVWNzUTBGQlF6dFpRVU4wUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVkQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJRVU1zUTBGQlF6dFpRVU0zUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJRVU1zUTBGQlF6dFpRVU0zUkN4TlFVRk5MRXRCUVVzc1IwRkJSenQxUWtGRFNDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU03ZDBKQlF6VkNMRWxCUVVrc2MwSkJRWE5DTEVOQlFVTTdlVUpCUXpGQ0xFTkJRVU1zTUVKQlFUQkNMRU5CUVVNN1lVRkRlRU1zUTBGQlF6dFpRVU5HTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVGRExFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTTdXVUZCUXl4RFFVRkRPMWxCUTI1R0xFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZEYUVJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGQlFTeERRVUZETzBsQlJVMHNVMEZCVXl4RFFVRkRMRWRCUVZVN1NVRkROVUlzUTBGQlF6dEpRVUZCTEVOQlFVTTdTVUZSVVN4VFFVRlRMRU5CUVVNc1ZVRkJhVU03VVVGRGFrUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRNVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVdsQ0xFVkJRVVVzUTBGQlVUdFpRVU4yUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUVVFc1EwRkJRenREUVVOTU8wRkJRVUVzUTBGQlF6dEJRVWRHTEdWQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvdmlldy9UaWxlTGF5b3V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHNob3J0Q2hlY2tTdW0ocykge1xuICAgIHZhciBjaGsgPSAweDEyMzQ1Njc4O1xuICAgIHZhciBsZW4gPSBzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNoayArPSAocy5jaGFyQ29kZUF0KGkpICogKGkgKyAxKSk7XG4gICAgfVxuICAgIHJldHVybiAoY2hrICYgMHhmZmZmZmZmZikudG9TdHJpbmcoMTYpO1xufVxuZXhwb3J0cy5zaG9ydENoZWNrU3VtID0gc2hvcnRDaGVja1N1bTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFITkRhR1ZqYTNOMWJTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b2MwTm9aV05yYzNWdExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVNc2RVSkJRVGhDTEVOQlFWRTdTVUZEYmtNc1NVRkJTU3hIUVVGSExFZEJRVWNzVlVGQlZTeERRVUZETzBsQlEzSkNMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEYmtJc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFVTXpRaXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVU5FTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRNVU1zUTBGQlF6dEJRVkJFTEhORFFVOURJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc3V0aWwvaHNDaGVja3N1bS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiB0aW1lb3V0KG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgc2V0VGltZW91dChyZWplY3QsIG1zKTsgfSk7XG59XG5leHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0O1xuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcmVzb2x2ZShhcmdzKTsgfSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZXhwb3J0cy5kZWxheSA9IGRlbGF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUhOVmRHbHNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaHpWWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRV1ZCTEdsQ1FVRjNRaXhGUVVGVE8wbEJRemRDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEU5QlFVOHNWVUZCVlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNwRkxFTkJRVU03UVVGR1JDd3dRa0ZGUXp0QlFWZEVMR1ZCUVhOQ0xFVkJRVk03U1VGRE0wSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJVVHRSUVVOYUxFMUJRVTBzUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVZjN1dVRkRNMElzVlVGQlZTeERRVUZETEZGQlFWRXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVU1RUxITkNRVTFESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHN1dGlsL2hzVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaHNVdGlsXzEgPSByZXF1aXJlKFwiLi9oc1V0aWxcIik7XG5leHBvcnRzLnRpbWVvdXQgPSBoc1V0aWxfMS50aW1lb3V0O1xuZXhwb3J0cy5kZWxheSA9IGhzVXRpbF8xLmRlbGF5O1xudmFyIHNob3dkb3duXzEgPSByZXF1aXJlKFwiLi9zaG93ZG93blwiKTtcbmV4cG9ydHMubWFya0Rvd24gPSBzaG93ZG93bl8xLm1hcmtEb3duO1xudmFyIGhzQ2hlY2tzdW1fMSA9IHJlcXVpcmUoXCIuL2hzQ2hlY2tzdW1cIik7XG5leHBvcnRzLnNob3J0Q2hlY2tTdW0gPSBoc0NoZWNrc3VtXzEuc2hvcnRDaGVja1N1bTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4dFEwRkJNRU03UVVGQmFrTXNNa0pCUVVFc1QwRkJUeXhEUVVGQk8wRkJRVVVzZVVKQlFVRXNTMEZCU3l4RFFVRkJPMEZCUTNaQ0xIVkRRVUUwUXp0QlFVRnVReXc0UWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEYWtJc01rTkJRVGhETzBGQlFYSkRMSEZEUVVGQkxHRkJRV0VzUTBGQlFTSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzdXRpbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzaG93ZG93biA9IHJlcXVpcmUoJ3Nob3dkb3duJyk7XG5jb25zdCBjb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKCk7XG5mdW5jdGlvbiBtYXJrRG93bih0ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnZlcnRlci5tYWtlSHRtbCh0ZXh0KTtcbn1cbmV4cG9ydHMubWFya0Rvd24gPSBtYXJrRG93bjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMyaHZkMlJ2ZDI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YzJodmQyUnZkMjR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlNTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1FVRkZkRU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03UVVGRk0wTXNhMEpCUVhsQ0xFbEJRVmM3U1VGRGFFTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEY0VNc1EwRkJRenRCUVVaRUxEUkNRVVZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHN1dGlsL3Nob3dkb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhzbGF5b3V0XzEgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jbGFzcyBNZW51IGV4dGVuZHMgaHNsYXlvdXRfMS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm1lbnUgPSB7XG4gICAgICAgICAgICBpdGVtczoge30sXG4gICAgICAgICAgICBzZWxlY3Q6ICh0aXRsZSkgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVudS5pdGVtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5pdGVtc1trZXldLmlzU2VsZWN0ZWQgPSAoa2V5ID09PSB0aXRsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldENvbXBvbmVudHMobm9kZSkge1xuICAgICAgICBjb25zdCBfbWVudSA9IHRoaXMubWVudTtcbiAgICAgICAgY29uc3QgZGVzYyA9IG5vZGUuYXR0cnMuZGVzYztcbiAgICAgICAgbm9kZS5hdHRycy5kZXNjID0gdW5kZWZpbmVkO1xuICAgICAgICBkZXNjLnNlbGVjdGVkSXRlbSA9IGRlc2Muc2VsZWN0ZWRJdGVtIHx8IGRlc2MuaXRlbXNbMF07XG4gICAgICAgIG5vZGUuYXR0cnMuY29sdW1ucyA9IGRlc2Muc2l6ZSB8fCBbXTtcbiAgICAgICAgbm9kZS5hdHRycy5jc3MgPSAnLmhzLW1lbnUnO1xuICAgICAgICByZXR1cm4gZGVzYy5pdGVtcy5tYXAoKGwpID0+IHtcbiAgICAgICAgICAgIF9tZW51Lml0ZW1zW2xdID0gX21lbnUuaXRlbXNbbF0gfHwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBsLFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGwgPT09IGRlc2Muc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgICAgIGNsaWNrZWQ6IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2Muc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgX21lbnUuc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc2Muc2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjLnNlbGVjdChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaHNsYXlvdXRfMS5tKE1lbnVJdGVtLCB7IGRlc2M6IF9tZW51Lml0ZW1zW2xdIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLk1lbnUgPSBNZW51O1xuO1xuY2xhc3MgTWVudUl0ZW0gZXh0ZW5kcyBoc2xheW91dF8xLkNvbnRhaW5lciB7XG4gICAgZ2V0Q29tcG9uZW50cyhub2RlKSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBub2RlLmF0dHJzLmRlc2M7XG4gICAgICAgIG5vZGUuYXR0cnMuZGVzYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgbm9kZS5hdHRycy5jc3MgPSBgLmhzLW1lbnUtaXRlbSAke2Rlc2MuaXNTZWxlY3RlZCA/ICdocy1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJyd9YDtcbiAgICAgICAgbm9kZS5hdHRycy5vbmNsaWNrID0gKCkgPT4geyBkZXNjLmNsaWNrZWQoZGVzYy50aXRsZSk7IH07XG4gICAgICAgIHJldHVybiBkZXNjLnRpdGxlO1xuICAgIH1cbn1cbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFITk5aVzUxTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmh6VFdWdWRTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVdkRVFTeDFRMEZCSzBNN1FVRXlRaTlETEZWQlFXdENMRk5CUVZFc2IwSkJRVk03U1VGQmJrTTdPMUZCUlVrc1UwRkJTU3hIUVVGSE8xbEJRMGdzUzBGQlN5eEZRVUY1UWl4RlFVRkZPMWxCUTJoRExFMUJRVTBzUlVGQlJTeERRVUZETEV0QlFWazdaMEpCUTJwQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRlZPMjlDUVVNMVF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFZRVUZWTEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU03WjBKQlEzQkVMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUFzUTBGQlF6dFRRVU5LTEVOQlFVTTdTVUY1UWs0c1EwRkJRenRKUVhaQ1J5eGhRVUZoTEVOQlFVTXNTVUZCVnp0UlFVTnlRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUTNoQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRemRDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hIUVVGSExGTkJRVk1zUTBGQlF6dFJRVVUxUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4yUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRE5VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCVVR0WlFVTXpRaXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVazdaMEpCUXk5Q0xFdEJRVXNzUlVGQlJTeERRVUZETzJkQ1FVTlNMRlZCUVZVc1JVRkJSU3hEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEZsQlFWazdaMEpCUTI1RExFOUJRVThzUlVGQlF5eERRVUZETEVsQlFWYzdiMEpCUTJoQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRPMjlDUVVONlFpeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU51UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRGNFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZEZEVJc1EwRkJRenRuUWtGRFRDeERRVUZETzJGQlEwb3NRMEZCUXp0WlFVTkdMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0RFFVTktPMEZCYkVORUxHOUNRV3REUXp0QlFVRkJMRU5CUVVNN1FVRkxSaXhqUVVGbExGTkJRVkVzYjBKQlFWTTdTVUZETlVJc1lVRkJZU3hEUVVGRExFbEJRVmM3VVVGRGNrSXNUVUZCVFN4SlFVRkpMRWRCUVdkQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUXpGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1IwRkJSeXhwUWtGQmFVSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJReXgxUWtGQmRVSXNSMEZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVOb1JpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhSUVVGUkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzcEVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1EwRkRTanRCUVVGQkxFTkJRVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHN3aWRnZXQvaHNNZW51LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaWVlZTc1NC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2lzYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjsoZnVuY3Rpb24oKSB7XG5cInVzZSBzdHJpY3RcIlxuZnVuY3Rpb24gVm5vZGUodGFnLCBrZXksIGF0dHJzMCwgY2hpbGRyZW4sIHRleHQsIGRvbSkge1xuXHRyZXR1cm4ge3RhZzogdGFnLCBrZXk6IGtleSwgYXR0cnM6IGF0dHJzMCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0ZXh0OiB0ZXh0LCBkb206IGRvbSwgZG9tU2l6ZTogdW5kZWZpbmVkLCBzdGF0ZTogdW5kZWZpbmVkLCBfc3RhdGU6IHVuZGVmaW5lZCwgZXZlbnRzOiB1bmRlZmluZWQsIGluc3RhbmNlOiB1bmRlZmluZWQsIHNraXA6IGZhbHNlfVxufVxuVm5vZGUubm9ybWFsaXplID0gZnVuY3Rpb24obm9kZSkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShub2RlKSkgcmV0dXJuIFZub2RlKFwiW1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4obm9kZSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXHRpZiAobm9kZSAhPSBudWxsICYmIHR5cGVvZiBub2RlICE9PSBcIm9iamVjdFwiKSByZXR1cm4gVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBub2RlID09PSBmYWxzZSA/IFwiXCIgOiBub2RlLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcblx0cmV0dXJuIG5vZGVcbn1cblZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuID0gZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkcmVuW2ldID0gVm5vZGUubm9ybWFsaXplKGNoaWxkcmVuW2ldKVxuXHR9XG5cdHJldHVybiBjaGlsZHJlblxufVxudmFyIHNlbGVjdG9yUGFyc2VyID0gLyg/OihefCN8XFwuKShbXiNcXC5cXFtcXF1dKykpfChcXFsoLis/KSg/Olxccyo9XFxzKihcInwnfCkoKD86XFxcXFtcIidcXF1dfC4pKj8pXFw1KT9cXF0pL2dcbnZhciBzZWxlY3RvckNhY2hlID0ge31cbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuZnVuY3Rpb24gY29tcGlsZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG5cdHZhciBtYXRjaCwgdGFnID0gXCJkaXZcIiwgY2xhc3NlcyA9IFtdLCBhdHRycyA9IHt9XG5cdHdoaWxlIChtYXRjaCA9IHNlbGVjdG9yUGFyc2VyLmV4ZWMoc2VsZWN0b3IpKSB7XG5cdFx0dmFyIHR5cGUgPSBtYXRjaFsxXSwgdmFsdWUgPSBtYXRjaFsyXVxuXHRcdGlmICh0eXBlID09PSBcIlwiICYmIHZhbHVlICE9PSBcIlwiKSB0YWcgPSB2YWx1ZVxuXHRcdGVsc2UgaWYgKHR5cGUgPT09IFwiI1wiKSBhdHRycy5pZCA9IHZhbHVlXG5cdFx0ZWxzZSBpZiAodHlwZSA9PT0gXCIuXCIpIGNsYXNzZXMucHVzaCh2YWx1ZSlcblx0XHRlbHNlIGlmIChtYXRjaFszXVswXSA9PT0gXCJbXCIpIHtcblx0XHRcdHZhciBhdHRyVmFsdWUgPSBtYXRjaFs2XVxuXHRcdFx0aWYgKGF0dHJWYWx1ZSkgYXR0clZhbHVlID0gYXR0clZhbHVlLnJlcGxhY2UoL1xcXFwoW1wiJ10pL2csIFwiJDFcIikucmVwbGFjZSgvXFxcXFxcXFwvZywgXCJcXFxcXCIpXG5cdFx0XHRpZiAobWF0Y2hbNF0gPT09IFwiY2xhc3NcIikgY2xhc3Nlcy5wdXNoKGF0dHJWYWx1ZSlcblx0XHRcdGVsc2UgYXR0cnNbbWF0Y2hbNF1dID0gYXR0clZhbHVlID09PSBcIlwiID8gYXR0clZhbHVlIDogYXR0clZhbHVlIHx8IHRydWVcblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzZXMubGVuZ3RoID4gMCkgYXR0cnMuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKVxuXHRyZXR1cm4gc2VsZWN0b3JDYWNoZVtzZWxlY3Rvcl0gPSB7dGFnOiB0YWcsIGF0dHJzOiBhdHRyc31cbn1cbmZ1bmN0aW9uIGV4ZWNTZWxlY3RvcihzdGF0ZSwgYXR0cnMsIGNoaWxkcmVuKSB7XG5cdHZhciBoYXNBdHRycyA9IGZhbHNlLCBjaGlsZExpc3QsIHRleHRcblx0dmFyIGNsYXNzTmFtZSA9IGF0dHJzLmNsYXNzTmFtZSB8fCBhdHRycy5jbGFzc1xuXHRmb3IgKHZhciBrZXkgaW4gc3RhdGUuYXR0cnMpIHtcblx0XHRpZiAoaGFzT3duLmNhbGwoc3RhdGUuYXR0cnMsIGtleSkpIHtcblx0XHRcdGF0dHJzW2tleV0gPSBzdGF0ZS5hdHRyc1trZXldXG5cdFx0fVxuXHR9XG5cdGlmIChjbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChhdHRycy5jbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRhdHRycy5jbGFzcyA9IHVuZGVmaW5lZFxuXHRcdFx0YXR0cnMuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG5cdFx0fVxuXHRcdGlmIChzdGF0ZS5hdHRycy5jbGFzc05hbWUgIT0gbnVsbCkge1xuXHRcdFx0YXR0cnMuY2xhc3NOYW1lID0gc3RhdGUuYXR0cnMuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWVcblx0XHR9XG5cdH1cblx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpICYmIGtleSAhPT0gXCJrZXlcIikge1xuXHRcdFx0aGFzQXR0cnMgPSB0cnVlXG5cdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGNoaWxkcmVuWzBdICE9IG51bGwgJiYgY2hpbGRyZW5bMF0udGFnID09PSBcIiNcIikge1xuXHRcdHRleHQgPSBjaGlsZHJlblswXS5jaGlsZHJlblxuXHR9IGVsc2Uge1xuXHRcdGNoaWxkTGlzdCA9IGNoaWxkcmVuXG5cdH1cblx0cmV0dXJuIFZub2RlKHN0YXRlLnRhZywgYXR0cnMua2V5LCBoYXNBdHRycyA/IGF0dHJzIDogdW5kZWZpbmVkLCBjaGlsZExpc3QsIHRleHQpXG59XG5mdW5jdGlvbiBoeXBlcnNjcmlwdChzZWxlY3Rvcikge1xuXHQvLyBCZWNhdXNlIHNsb3BweSBtb2RlIHN1Y2tzXG5cdHZhciBhdHRycyA9IGFyZ3VtZW50c1sxXSwgc3RhcnQgPSAyLCBjaGlsZHJlblxuXHRpZiAoc2VsZWN0b3IgPT0gbnVsbCB8fCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHNlbGVjdG9yLnZpZXcgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHRocm93IEVycm9yKFwiVGhlIHNlbGVjdG9yIG11c3QgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgY29tcG9uZW50LlwiKTtcblx0fVxuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG5cdFx0dmFyIGNhY2hlZCA9IHNlbGVjdG9yQ2FjaGVbc2VsZWN0b3JdIHx8IGNvbXBpbGVTZWxlY3RvcihzZWxlY3Rvcilcblx0fVxuXHRpZiAoYXR0cnMgPT0gbnVsbCkge1xuXHRcdGF0dHJzID0ge31cblx0fSBlbHNlIGlmICh0eXBlb2YgYXR0cnMgIT09IFwib2JqZWN0XCIgfHwgYXR0cnMudGFnICE9IG51bGwgfHwgQXJyYXkuaXNBcnJheShhdHRycykpIHtcblx0XHRhdHRycyA9IHt9XG5cdFx0c3RhcnQgPSAxXG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IHN0YXJ0ICsgMSkge1xuXHRcdGNoaWxkcmVuID0gYXJndW1lbnRzW3N0YXJ0XVxuXHRcdGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIGNoaWxkcmVuID0gW2NoaWxkcmVuXVxuXHR9IGVsc2Uge1xuXHRcdGNoaWxkcmVuID0gW11cblx0XHR3aGlsZSAoc3RhcnQgPCBhcmd1bWVudHMubGVuZ3RoKSBjaGlsZHJlbi5wdXNoKGFyZ3VtZW50c1tzdGFydCsrXSlcblx0fVxuXHR2YXIgbm9ybWFsaXplZCA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKVxuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIGV4ZWNTZWxlY3RvcihjYWNoZWQsIGF0dHJzLCBub3JtYWxpemVkKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBWbm9kZShzZWxlY3RvciwgYXR0cnMua2V5LCBhdHRycywgbm9ybWFsaXplZClcblx0fVxufVxuaHlwZXJzY3JpcHQudHJ1c3QgPSBmdW5jdGlvbihodG1sKSB7XG5cdGlmIChodG1sID09IG51bGwpIGh0bWwgPSBcIlwiXG5cdHJldHVybiBWbm9kZShcIjxcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGh0bWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxufVxuaHlwZXJzY3JpcHQuZnJhZ21lbnQgPSBmdW5jdGlvbihhdHRyczEsIGNoaWxkcmVuKSB7XG5cdHJldHVybiBWbm9kZShcIltcIiwgYXR0cnMxLmtleSwgYXR0cnMxLCBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbiksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxufVxudmFyIG0gPSBoeXBlcnNjcmlwdFxuLyoqIEBjb25zdHJ1Y3RvciAqL1xudmFyIFByb21pc2VQb2x5ZmlsbCA9IGZ1bmN0aW9uKGV4ZWN1dG9yKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlUG9seWZpbGwpKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlIG11c3QgYmUgY2FsbGVkIHdpdGggYG5ld2BcIilcblx0aWYgKHR5cGVvZiBleGVjdXRvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpXG5cdHZhciBzZWxmID0gdGhpcywgcmVzb2x2ZXJzID0gW10sIHJlamVjdG9ycyA9IFtdLCByZXNvbHZlQ3VycmVudCA9IGhhbmRsZXIocmVzb2x2ZXJzLCB0cnVlKSwgcmVqZWN0Q3VycmVudCA9IGhhbmRsZXIocmVqZWN0b3JzLCBmYWxzZSlcblx0dmFyIGluc3RhbmNlID0gc2VsZi5faW5zdGFuY2UgPSB7cmVzb2x2ZXJzOiByZXNvbHZlcnMsIHJlamVjdG9yczogcmVqZWN0b3JzfVxuXHR2YXIgY2FsbEFzeW5jID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogc2V0VGltZW91dFxuXHRmdW5jdGlvbiBoYW5kbGVyKGxpc3QsIHNob3VsZEFic29yYikge1xuXHRcdHJldHVybiBmdW5jdGlvbiBleGVjdXRlKHZhbHVlKSB7XG5cdFx0XHR2YXIgdGhlblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKHNob3VsZEFic29yYiAmJiB2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiAodGhlbiA9IHZhbHVlLnRoZW4pID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IHNlbGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIHcvIGl0c2VsZlwiKVxuXHRcdFx0XHRcdGV4ZWN1dGVPbmNlKHRoZW4uYmluZCh2YWx1ZSkpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y2FsbEFzeW5jKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKCFzaG91bGRBYnNvcmIgJiYgbGlzdC5sZW5ndGggPT09IDApIGNvbnNvbGUuZXJyb3IoXCJQb3NzaWJsZSB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb246XCIsIHZhbHVlKVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSBsaXN0W2ldKHZhbHVlKVxuXHRcdFx0XHRcdFx0cmVzb2x2ZXJzLmxlbmd0aCA9IDAsIHJlamVjdG9ycy5sZW5ndGggPSAwXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5zdGF0ZSA9IHNob3VsZEFic29yYlxuXHRcdFx0XHRcdFx0aW5zdGFuY2UucmV0cnkgPSBmdW5jdGlvbigpIHtleGVjdXRlKHZhbHVlKX1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRyZWplY3RDdXJyZW50KGUpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGV4ZWN1dGVPbmNlKHRoZW4pIHtcblx0XHR2YXIgcnVucyA9IDBcblx0XHRmdW5jdGlvbiBydW4oZm4pIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRpZiAocnVucysrID4gMCkgcmV0dXJuXG5cdFx0XHRcdGZuKHZhbHVlKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgb25lcnJvciA9IHJ1bihyZWplY3RDdXJyZW50KVxuXHRcdHRyeSB7dGhlbihydW4ocmVzb2x2ZUN1cnJlbnQpLCBvbmVycm9yKX0gY2F0Y2ggKGUpIHtvbmVycm9yKGUpfVxuXHR9XG5cdGV4ZWN1dGVPbmNlKGV4ZWN1dG9yKVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0aW9uKSB7XG5cdHZhciBzZWxmID0gdGhpcywgaW5zdGFuY2UgPSBzZWxmLl9pbnN0YW5jZVxuXHRmdW5jdGlvbiBoYW5kbGUoY2FsbGJhY2ssIGxpc3QsIG5leHQsIHN0YXRlKSB7XG5cdFx0bGlzdC5wdXNoKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIG5leHQodmFsdWUpXG5cdFx0XHRlbHNlIHRyeSB7cmVzb2x2ZU5leHQoY2FsbGJhY2sodmFsdWUpKX0gY2F0Y2ggKGUpIHtpZiAocmVqZWN0TmV4dCkgcmVqZWN0TmV4dChlKX1cblx0XHR9KVxuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2UucmV0cnkgPT09IFwiZnVuY3Rpb25cIiAmJiBzdGF0ZSA9PT0gaW5zdGFuY2Uuc3RhdGUpIGluc3RhbmNlLnJldHJ5KClcblx0fVxuXHR2YXIgcmVzb2x2ZU5leHQsIHJlamVjdE5leHRcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge3Jlc29sdmVOZXh0ID0gcmVzb2x2ZSwgcmVqZWN0TmV4dCA9IHJlamVjdH0pXG5cdGhhbmRsZShvbkZ1bGZpbGxlZCwgaW5zdGFuY2UucmVzb2x2ZXJzLCByZXNvbHZlTmV4dCwgdHJ1ZSksIGhhbmRsZShvblJlamVjdGlvbiwgaW5zdGFuY2UucmVqZWN0b3JzLCByZWplY3ROZXh0LCBmYWxzZSlcblx0cmV0dXJuIHByb21pc2Vcbn1cblByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbihvblJlamVjdGlvbikge1xuXHRyZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKVxufVxuUHJvbWlzZVBvbHlmaWxsLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlUG9seWZpbGwpIHJldHVybiB2YWx1ZVxuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlKSB7cmVzb2x2ZSh2YWx1ZSl9KVxufVxuUHJvbWlzZVBvbHlmaWxsLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge3JlamVjdCh2YWx1ZSl9KVxufVxuUHJvbWlzZVBvbHlmaWxsLmFsbCA9IGZ1bmN0aW9uKGxpc3QpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHRvdGFsID0gbGlzdC5sZW5ndGgsIGNvdW50ID0gMCwgdmFsdWVzID0gW11cblx0XHRpZiAobGlzdC5sZW5ndGggPT09IDApIHJlc29sdmUoW10pXG5cdFx0ZWxzZSBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdChmdW5jdGlvbihpKSB7XG5cdFx0XHRcdGZ1bmN0aW9uIGNvbnN1bWUodmFsdWUpIHtcblx0XHRcdFx0XHRjb3VudCsrXG5cdFx0XHRcdFx0dmFsdWVzW2ldID0gdmFsdWVcblx0XHRcdFx0XHRpZiAoY291bnQgPT09IHRvdGFsKSByZXNvbHZlKHZhbHVlcylcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGlzdFtpXSAhPSBudWxsICYmICh0eXBlb2YgbGlzdFtpXSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgbGlzdFtpXSA9PT0gXCJmdW5jdGlvblwiKSAmJiB0eXBlb2YgbGlzdFtpXS50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRsaXN0W2ldLnRoZW4oY29uc3VtZSwgcmVqZWN0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgY29uc3VtZShsaXN0W2ldKVxuXHRcdFx0fSkoaSlcblx0XHR9XG5cdH0pXG59XG5Qcm9taXNlUG9seWZpbGwucmFjZSA9IGZ1bmN0aW9uKGxpc3QpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0W2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuXHRcdH1cblx0fSlcbn1cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2Ygd2luZG93LlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHdpbmRvdy5Qcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG5cdHZhciBQcm9taXNlUG9seWZpbGwgPSB3aW5kb3cuUHJvbWlzZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIGdsb2JhbC5Qcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG5cdHZhciBQcm9taXNlUG9seWZpbGwgPSBnbG9iYWwuUHJvbWlzZVxufSBlbHNlIHtcbn1cbnZhciBidWlsZFF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIFwiXCJcblx0dmFyIGFyZ3MgPSBbXVxuXHRmb3IgKHZhciBrZXkwIGluIG9iamVjdCkge1xuXHRcdGRlc3RydWN0dXJlKGtleTAsIG9iamVjdFtrZXkwXSlcblx0fVxuXHRyZXR1cm4gYXJncy5qb2luKFwiJlwiKVxuXHRmdW5jdGlvbiBkZXN0cnVjdHVyZShrZXkwLCB2YWx1ZSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkZXN0cnVjdHVyZShrZXkwICsgXCJbXCIgKyBpICsgXCJdXCIsIHZhbHVlW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG5cdFx0XHRmb3IgKHZhciBpIGluIHZhbHVlKSB7XG5cdFx0XHRcdGRlc3RydWN0dXJlKGtleTAgKyBcIltcIiArIGkgKyBcIl1cIiwgdmFsdWVbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgYXJncy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkwKSArICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBcIlwiID8gXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpIDogXCJcIikpXG5cdH1cbn1cbnZhciBGSUxFX1BST1RPQ09MX1JFR0VYID0gbmV3IFJlZ0V4cChcIl5maWxlOi8vXCIsIFwiaVwiKVxudmFyIF84ID0gZnVuY3Rpb24oJHdpbmRvdywgUHJvbWlzZSkge1xuXHR2YXIgY2FsbGJhY2tDb3VudCA9IDBcblx0dmFyIG9uY29tcGxldGlvblxuXHRmdW5jdGlvbiBzZXRDb21wbGV0aW9uQ2FsbGJhY2soY2FsbGJhY2spIHtvbmNvbXBsZXRpb24gPSBjYWxsYmFja31cblx0ZnVuY3Rpb24gZmluYWxpemVyKCkge1xuXHRcdHZhciBjb3VudCA9IDBcblx0XHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtpZiAoLS1jb3VudCA9PT0gMCAmJiB0eXBlb2Ygb25jb21wbGV0aW9uID09PSBcImZ1bmN0aW9uXCIpIG9uY29tcGxldGlvbigpfVxuXHRcdHJldHVybiBmdW5jdGlvbiBmaW5hbGl6ZShwcm9taXNlMCkge1xuXHRcdFx0dmFyIHRoZW4wID0gcHJvbWlzZTAudGhlblxuXHRcdFx0cHJvbWlzZTAudGhlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb3VudCsrXG5cdFx0XHRcdHZhciBuZXh0ID0gdGhlbjAuYXBwbHkocHJvbWlzZTAsIGFyZ3VtZW50cylcblx0XHRcdFx0bmV4dC50aGVuKGNvbXBsZXRlLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0Y29tcGxldGUoKVxuXHRcdFx0XHRcdGlmIChjb3VudCA9PT0gMCkgdGhyb3cgZVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRyZXR1cm4gZmluYWxpemUobmV4dClcblx0XHRcdH1cblx0XHRcdHJldHVybiBwcm9taXNlMFxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBub3JtYWxpemUoYXJncywgZXh0cmEpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHZhciB1cmwgPSBhcmdzXG5cdFx0XHRhcmdzID0gZXh0cmEgfHwge31cblx0XHRcdGlmIChhcmdzLnVybCA9PSBudWxsKSBhcmdzLnVybCA9IHVybFxuXHRcdH1cblx0XHRyZXR1cm4gYXJnc1xuXHR9XG5cdGZ1bmN0aW9uIHJlcXVlc3QoYXJncywgZXh0cmEpIHtcblx0XHR2YXIgZmluYWxpemUgPSBmaW5hbGl6ZXIoKVxuXHRcdGFyZ3MgPSBub3JtYWxpemUoYXJncywgZXh0cmEpXG5cdFx0dmFyIHByb21pc2UwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRpZiAoYXJncy5tZXRob2QgPT0gbnVsbCkgYXJncy5tZXRob2QgPSBcIkdFVFwiXG5cdFx0XHRhcmdzLm1ldGhvZCA9IGFyZ3MubWV0aG9kLnRvVXBwZXJDYXNlKClcblx0XHRcdHZhciB1c2VCb2R5ID0gKGFyZ3MubWV0aG9kID09PSBcIkdFVFwiIHx8IGFyZ3MubWV0aG9kID09PSBcIlRSQUNFXCIpID8gZmFsc2UgOiAodHlwZW9mIGFyZ3MudXNlQm9keSA9PT0gXCJib29sZWFuXCIgPyBhcmdzLnVzZUJvZHkgOiB0cnVlKVxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLnNlcmlhbGl6ZSAhPT0gXCJmdW5jdGlvblwiKSBhcmdzLnNlcmlhbGl6ZSA9IHR5cGVvZiBGb3JtRGF0YSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcmdzLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSA/IGZ1bmN0aW9uKHZhbHVlKSB7cmV0dXJuIHZhbHVlfSA6IEpTT04uc3RyaW5naWZ5XG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuZGVzZXJpYWxpemUgIT09IFwiZnVuY3Rpb25cIikgYXJncy5kZXNlcmlhbGl6ZSA9IGRlc2VyaWFsaXplXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuZXh0cmFjdCAhPT0gXCJmdW5jdGlvblwiKSBhcmdzLmV4dHJhY3QgPSBleHRyYWN0XG5cdFx0XHRhcmdzLnVybCA9IGludGVycG9sYXRlKGFyZ3MudXJsLCBhcmdzLmRhdGEpXG5cdFx0XHRpZiAodXNlQm9keSkgYXJncy5kYXRhID0gYXJncy5zZXJpYWxpemUoYXJncy5kYXRhKVxuXHRcdFx0ZWxzZSBhcmdzLnVybCA9IGFzc2VtYmxlKGFyZ3MudXJsLCBhcmdzLmRhdGEpXG5cdFx0XHR2YXIgeGhyID0gbmV3ICR3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKSxcblx0XHRcdFx0YWJvcnRlZCA9IGZhbHNlLFxuXHRcdFx0XHRfYWJvcnQgPSB4aHIuYWJvcnRcblx0XHRcdHhoci5hYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuXHRcdFx0XHRhYm9ydGVkID0gdHJ1ZVxuXHRcdFx0XHRfYWJvcnQuY2FsbCh4aHIpXG5cdFx0XHR9XG5cdFx0XHR4aHIub3BlbihhcmdzLm1ldGhvZCwgYXJncy51cmwsIHR5cGVvZiBhcmdzLmFzeW5jID09PSBcImJvb2xlYW5cIiA/IGFyZ3MuYXN5bmMgOiB0cnVlLCB0eXBlb2YgYXJncy51c2VyID09PSBcInN0cmluZ1wiID8gYXJncy51c2VyIDogdW5kZWZpbmVkLCB0eXBlb2YgYXJncy5wYXNzd29yZCA9PT0gXCJzdHJpbmdcIiA/IGFyZ3MucGFzc3dvcmQgOiB1bmRlZmluZWQpXG5cdFx0XHRpZiAoYXJncy5zZXJpYWxpemUgPT09IEpTT04uc3RyaW5naWZ5ICYmIHVzZUJvZHkpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy5kZXNlcmlhbGl6ZSA9PT0gZGVzZXJpYWxpemUpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0LypcIilcblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLndpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IGFyZ3Mud2l0aENyZWRlbnRpYWxzXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJncy5oZWFkZXJzKSBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChhcmdzLmhlYWRlcnMsIGtleSkpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBhcmdzLmhlYWRlcnNba2V5XSlcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgYXJncy5jb25maWcgPT09IFwiZnVuY3Rpb25cIikgeGhyID0gYXJncy5jb25maWcoeGhyLCBhcmdzKSB8fCB4aHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gRG9uJ3QgdGhyb3cgZXJyb3JzIG9uIHhoci5hYm9ydCgpLlxuXHRcdFx0XHRpZihhYm9ydGVkKSByZXR1cm5cblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHZhciByZXNwb25zZSA9IChhcmdzLmV4dHJhY3QgIT09IGV4dHJhY3QpID8gYXJncy5leHRyYWN0KHhociwgYXJncykgOiBhcmdzLmRlc2VyaWFsaXplKGFyZ3MuZXh0cmFjdCh4aHIsIGFyZ3MpKVxuXHRcdFx0XHRcdFx0aWYgKCh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB8fCB4aHIuc3RhdHVzID09PSAzMDQgfHwgRklMRV9QUk9UT0NPTF9SRUdFWC50ZXN0KGFyZ3MudXJsKSkge1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKGNhc3QoYXJncy50eXBlLCByZXNwb25zZSkpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKHhoci5yZXNwb25zZVRleHQpXG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiByZXNwb25zZSkgZXJyb3Jba2V5XSA9IHJlc3BvbnNlW2tleV1cblx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmVqZWN0KGUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodXNlQm9keSAmJiAoYXJncy5kYXRhICE9IG51bGwpKSB4aHIuc2VuZChhcmdzLmRhdGEpXG5cdFx0XHRlbHNlIHhoci5zZW5kKClcblx0XHR9KVxuXHRcdHJldHVybiBhcmdzLmJhY2tncm91bmQgPT09IHRydWUgPyBwcm9taXNlMCA6IGZpbmFsaXplKHByb21pc2UwKVxuXHR9XG5cdGZ1bmN0aW9uIGpzb25wKGFyZ3MsIGV4dHJhKSB7XG5cdFx0dmFyIGZpbmFsaXplID0gZmluYWxpemVyKClcblx0XHRhcmdzID0gbm9ybWFsaXplKGFyZ3MsIGV4dHJhKVxuXHRcdHZhciBwcm9taXNlMCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIGNhbGxiYWNrTmFtZSA9IGFyZ3MuY2FsbGJhY2tOYW1lIHx8IFwiX21pdGhyaWxfXCIgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE2KSArIFwiX1wiICsgY2FsbGJhY2tDb3VudCsrXG5cdFx0XHR2YXIgc2NyaXB0ID0gJHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXG5cdFx0XHQkd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdClcblx0XHRcdFx0cmVzb2x2ZShjYXN0KGFyZ3MudHlwZSwgZGF0YSkpXG5cdFx0XHRcdGRlbGV0ZSAkd2luZG93W2NhbGxiYWNrTmFtZV1cblx0XHRcdH1cblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdClcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIkpTT05QIHJlcXVlc3QgZmFpbGVkXCIpKVxuXHRcdFx0XHRkZWxldGUgJHdpbmRvd1tjYWxsYmFja05hbWVdXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy5kYXRhID09IG51bGwpIGFyZ3MuZGF0YSA9IHt9XG5cdFx0XHRhcmdzLnVybCA9IGludGVycG9sYXRlKGFyZ3MudXJsLCBhcmdzLmRhdGEpXG5cdFx0XHRhcmdzLmRhdGFbYXJncy5jYWxsYmFja0tleSB8fCBcImNhbGxiYWNrXCJdID0gY2FsbGJhY2tOYW1lXG5cdFx0XHRzY3JpcHQuc3JjID0gYXNzZW1ibGUoYXJncy51cmwsIGFyZ3MuZGF0YSlcblx0XHRcdCR3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdClcblx0XHR9KVxuXHRcdHJldHVybiBhcmdzLmJhY2tncm91bmQgPT09IHRydWU/IHByb21pc2UwIDogZmluYWxpemUocHJvbWlzZTApXG5cdH1cblx0ZnVuY3Rpb24gaW50ZXJwb2xhdGUodXJsLCBkYXRhKSB7XG5cdFx0aWYgKGRhdGEgPT0gbnVsbCkgcmV0dXJuIHVybFxuXHRcdHZhciB0b2tlbnMgPSB1cmwubWF0Y2goLzpbXlxcL10rL2dpKSB8fCBbXVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIga2V5ID0gdG9rZW5zW2ldLnNsaWNlKDEpXG5cdFx0XHRpZiAoZGF0YVtrZXldICE9IG51bGwpIHtcblx0XHRcdFx0dXJsID0gdXJsLnJlcGxhY2UodG9rZW5zW2ldLCBkYXRhW2tleV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB1cmxcblx0fVxuXHRmdW5jdGlvbiBhc3NlbWJsZSh1cmwsIGRhdGEpIHtcblx0XHR2YXIgcXVlcnlzdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nKGRhdGEpXG5cdFx0aWYgKHF1ZXJ5c3RyaW5nICE9PSBcIlwiKSB7XG5cdFx0XHR2YXIgcHJlZml4ID0gdXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogXCImXCJcblx0XHRcdHVybCArPSBwcmVmaXggKyBxdWVyeXN0cmluZ1xuXHRcdH1cblx0XHRyZXR1cm4gdXJsXG5cdH1cblx0ZnVuY3Rpb24gZGVzZXJpYWxpemUoZGF0YSkge1xuXHRcdHRyeSB7cmV0dXJuIGRhdGEgIT09IFwiXCIgPyBKU09OLnBhcnNlKGRhdGEpIDogbnVsbH1cblx0XHRjYXRjaCAoZSkge3Rocm93IG5ldyBFcnJvcihkYXRhKX1cblx0fVxuXHRmdW5jdGlvbiBleHRyYWN0KHhocikge3JldHVybiB4aHIucmVzcG9uc2VUZXh0fVxuXHRmdW5jdGlvbiBjYXN0KHR5cGUwLCBkYXRhKSB7XG5cdFx0aWYgKHR5cGVvZiB0eXBlMCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRkYXRhW2ldID0gbmV3IHR5cGUwKGRhdGFbaV0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2UgcmV0dXJuIG5ldyB0eXBlMChkYXRhKVxuXHRcdH1cblx0XHRyZXR1cm4gZGF0YVxuXHR9XG5cdHJldHVybiB7cmVxdWVzdDogcmVxdWVzdCwganNvbnA6IGpzb25wLCBzZXRDb21wbGV0aW9uQ2FsbGJhY2s6IHNldENvbXBsZXRpb25DYWxsYmFja31cbn1cbnZhciByZXF1ZXN0U2VydmljZSA9IF84KHdpbmRvdywgUHJvbWlzZVBvbHlmaWxsKVxudmFyIGNvcmVSZW5kZXJlciA9IGZ1bmN0aW9uKCR3aW5kb3cpIHtcblx0dmFyICRkb2MgPSAkd2luZG93LmRvY3VtZW50XG5cdHZhciAkZW1wdHlGcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdHZhciBuYW1lU3BhY2UgPSB7XG5cdFx0c3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG5cdFx0bWF0aDogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCJcblx0fVxuXHR2YXIgb25ldmVudFxuXHRmdW5jdGlvbiBzZXRFdmVudENhbGxiYWNrKGNhbGxiYWNrKSB7cmV0dXJuIG9uZXZlbnQgPSBjYWxsYmFja31cblx0ZnVuY3Rpb24gZ2V0TmFtZVNwYWNlKHZub2RlKSB7XG5cdFx0cmV0dXJuIHZub2RlLmF0dHJzICYmIHZub2RlLmF0dHJzLnhtbG5zIHx8IG5hbWVTcGFjZVt2bm9kZS50YWddXG5cdH1cblx0Ly9jcmVhdGVcblx0ZnVuY3Rpb24gY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHRmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW2ldXG5cdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciB0YWcgPSB2bm9kZS50YWdcblx0XHRpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSB7fVxuXHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIGluaXRMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdHN3aXRjaCAodGFnKSB7XG5cdFx0XHRcdGNhc2UgXCIjXCI6IHJldHVybiBjcmVhdGVUZXh0KHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRjYXNlIFwiPFwiOiByZXR1cm4gY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZylcblx0XHRcdFx0Y2FzZSBcIltcIjogcmV0dXJuIGNyZWF0ZUZyYWdtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdGRlZmF1bHQ6IHJldHVybiBjcmVhdGVFbGVtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuIGNyZWF0ZUNvbXBvbmVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZVRleHQocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHR2bm9kZS5kb20gPSAkZG9jLmNyZWF0ZVRleHROb2RlKHZub2RlLmNoaWxkcmVuKVxuXHRcdGluc2VydE5vZGUocGFyZW50LCB2bm9kZS5kb20sIG5leHRTaWJsaW5nKVxuXHRcdHJldHVybiB2bm9kZS5kb21cblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVIVE1MKHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIG1hdGNoMSA9IHZub2RlLmNoaWxkcmVuLm1hdGNoKC9eXFxzKj88KFxcdyspL2ltKSB8fCBbXVxuXHRcdHZhciBwYXJlbnQxID0ge2NhcHRpb246IFwidGFibGVcIiwgdGhlYWQ6IFwidGFibGVcIiwgdGJvZHk6IFwidGFibGVcIiwgdGZvb3Q6IFwidGFibGVcIiwgdHI6IFwidGJvZHlcIiwgdGg6IFwidHJcIiwgdGQ6IFwidHJcIiwgY29sZ3JvdXA6IFwidGFibGVcIiwgY29sOiBcImNvbGdyb3VwXCJ9W21hdGNoMVsxXV0gfHwgXCJkaXZcIlxuXHRcdHZhciB0ZW1wID0gJGRvYy5jcmVhdGVFbGVtZW50KHBhcmVudDEpXG5cdFx0dGVtcC5pbm5lckhUTUwgPSB2bm9kZS5jaGlsZHJlblxuXHRcdHZub2RlLmRvbSA9IHRlbXAuZmlyc3RDaGlsZFxuXHRcdHZub2RlLmRvbVNpemUgPSB0ZW1wLmNoaWxkTm9kZXMubGVuZ3RoXG5cdFx0dmFyIGZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHR2YXIgY2hpbGRcblx0XHR3aGlsZSAoY2hpbGQgPSB0ZW1wLmZpcnN0Q2hpbGQpIHtcblx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuXHRcdH1cblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZnJhZ21lbnQsIG5leHRTaWJsaW5nKVxuXHRcdHJldHVybiBmcmFnbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgZnJhZ21lbnQgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdGlmICh2bm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0Y3JlYXRlTm9kZXMoZnJhZ21lbnQsIGNoaWxkcmVuLCAwLCBjaGlsZHJlbi5sZW5ndGgsIGhvb2tzLCBudWxsLCBucylcblx0XHR9XG5cdFx0dm5vZGUuZG9tID0gZnJhZ21lbnQuZmlyc3RDaGlsZFxuXHRcdHZub2RlLmRvbVNpemUgPSBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aFxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnbWVudCwgbmV4dFNpYmxpbmcpXG5cdFx0cmV0dXJuIGZyYWdtZW50XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlRWxlbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIHRhZyA9IHZub2RlLnRhZ1xuXHRcdHZhciBhdHRyczIgPSB2bm9kZS5hdHRyc1xuXHRcdHZhciBpcyA9IGF0dHJzMiAmJiBhdHRyczIuaXNcblx0XHRucyA9IGdldE5hbWVTcGFjZSh2bm9kZSkgfHwgbnNcblx0XHR2YXIgZWxlbWVudCA9IG5zID9cblx0XHRcdGlzID8gJGRvYy5jcmVhdGVFbGVtZW50TlMobnMsIHRhZywge2lzOiBpc30pIDogJGRvYy5jcmVhdGVFbGVtZW50TlMobnMsIHRhZykgOlxuXHRcdFx0aXMgPyAkZG9jLmNyZWF0ZUVsZW1lbnQodGFnLCB7aXM6IGlzfSkgOiAkZG9jLmNyZWF0ZUVsZW1lbnQodGFnKVxuXHRcdHZub2RlLmRvbSA9IGVsZW1lbnRcblx0XHRpZiAoYXR0cnMyICE9IG51bGwpIHtcblx0XHRcdHNldEF0dHJzKHZub2RlLCBhdHRyczIsIG5zKVxuXHRcdH1cblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZWxlbWVudCwgbmV4dFNpYmxpbmcpXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwgJiYgdm5vZGUuYXR0cnMuY29udGVudGVkaXRhYmxlICE9IG51bGwpIHtcblx0XHRcdHNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSlcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICh2bm9kZS50ZXh0ICE9PSBcIlwiKSBlbGVtZW50LnRleHRDb250ZW50ID0gdm5vZGUudGV4dFxuXHRcdFx0XHRlbHNlIHZub2RlLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdm5vZGUudGV4dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXVxuXHRcdFx0fVxuXHRcdFx0aWYgKHZub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdFx0Y3JlYXRlTm9kZXMoZWxlbWVudCwgY2hpbGRyZW4sIDAsIGNoaWxkcmVuLmxlbmd0aCwgaG9va3MsIG51bGwsIG5zKVxuXHRcdFx0XHRzZXRMYXRlQXR0cnModm5vZGUpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtZW50XG5cdH1cblx0ZnVuY3Rpb24gaW5pdENvbXBvbmVudCh2bm9kZSwgaG9va3MpIHtcblx0XHR2YXIgc2VudGluZWxcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZy52aWV3ID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0gT2JqZWN0LmNyZWF0ZSh2bm9kZS50YWcpXG5cdFx0XHRzZW50aW5lbCA9IHZub2RlLnN0YXRlLnZpZXdcblx0XHRcdGlmIChzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCAhPSBudWxsKSByZXR1cm4gJGVtcHR5RnJhZ21lbnRcblx0XHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gdHJ1ZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IHZvaWQgMFxuXHRcdFx0c2VudGluZWwgPSB2bm9kZS50YWdcblx0XHRcdGlmIChzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCAhPSBudWxsKSByZXR1cm4gJGVtcHR5RnJhZ21lbnRcblx0XHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gdHJ1ZVxuXHRcdFx0dm5vZGUuc3RhdGUgPSAodm5vZGUudGFnLnByb3RvdHlwZSAhPSBudWxsICYmIHR5cGVvZiB2bm9kZS50YWcucHJvdG90eXBlLnZpZXcgPT09IFwiZnVuY3Rpb25cIikgPyBuZXcgdm5vZGUudGFnKHZub2RlKSA6IHZub2RlLnRhZyh2bm9kZSlcblx0XHR9XG5cdFx0dm5vZGUuX3N0YXRlID0gdm5vZGUuc3RhdGVcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgaW5pdExpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdGluaXRMaWZlY3ljbGUodm5vZGUuX3N0YXRlLCB2bm9kZSwgaG9va3MpXG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBWbm9kZS5ub3JtYWxpemUodm5vZGUuX3N0YXRlLnZpZXcuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUpKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSA9PT0gdm5vZGUpIHRocm93IEVycm9yKFwiQSB2aWV3IGNhbm5vdCByZXR1cm4gdGhlIHZub2RlIGl0IHJlY2VpdmVkIGFzIGFyZ3VtZW50XCIpXG5cdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSBudWxsXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHRpbml0Q29tcG9uZW50KHZub2RlLCBob29rcylcblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0dmFyIGVsZW1lbnQgPSBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5kb20gIT0gbnVsbCA/IHZub2RlLmluc3RhbmNlLmRvbVNpemUgOiAwXG5cdFx0XHRpbnNlcnROb2RlKHBhcmVudCwgZWxlbWVudCwgbmV4dFNpYmxpbmcpXG5cdFx0XHRyZXR1cm4gZWxlbWVudFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbVNpemUgPSAwXG5cdFx0XHRyZXR1cm4gJGVtcHR5RnJhZ21lbnRcblx0XHR9XG5cdH1cblx0Ly91cGRhdGVcblx0ZnVuY3Rpb24gdXBkYXRlTm9kZXMocGFyZW50LCBvbGQsIHZub2RlcywgcmVjeWNsaW5nLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0aWYgKG9sZCA9PT0gdm5vZGVzIHx8IG9sZCA9PSBudWxsICYmIHZub2RlcyA9PSBudWxsKSByZXR1cm5cblx0XHRlbHNlIGlmIChvbGQgPT0gbnVsbCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIDAsIHZub2Rlcy5sZW5ndGgsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0ZWxzZSBpZiAodm5vZGVzID09IG51bGwpIHJlbW92ZU5vZGVzKG9sZCwgMCwgb2xkLmxlbmd0aCwgdm5vZGVzKVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKG9sZC5sZW5ndGggPT09IHZub2Rlcy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlzVW5rZXllZCA9IGZhbHNlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKHZub2Rlc1tpXSAhPSBudWxsICYmIG9sZFtpXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpc1Vua2V5ZWQgPSB2bm9kZXNbaV0ua2V5ID09IG51bGwgJiYgb2xkW2ldLmtleSA9PSBudWxsXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaXNVbmtleWVkKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvbGQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChvbGRbaV0gPT09IHZub2Rlc1tpXSkgY29udGludWVcblx0XHRcdFx0XHRcdGVsc2UgaWYgKG9sZFtpXSA9PSBudWxsICYmIHZub2Rlc1tpXSAhPSBudWxsKSBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGVzW2ldLCBob29rcywgbnMsIGdldE5leHRTaWJsaW5nKG9sZCwgaSArIDEsIG5leHRTaWJsaW5nKSlcblx0XHRcdFx0XHRcdGVsc2UgaWYgKHZub2Rlc1tpXSA9PSBudWxsKSByZW1vdmVOb2RlcyhvbGQsIGksIGkgKyAxLCB2bm9kZXMpXG5cdFx0XHRcdFx0XHRlbHNlIHVwZGF0ZU5vZGUocGFyZW50LCBvbGRbaV0sIHZub2Rlc1tpXSwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgaSArIDEsIG5leHRTaWJsaW5nKSwgcmVjeWNsaW5nLCBucylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlY3ljbGluZyA9IHJlY3ljbGluZyB8fCBpc1JlY3ljbGFibGUob2xkLCB2bm9kZXMpXG5cdFx0XHRpZiAocmVjeWNsaW5nKSB7XG5cdFx0XHRcdHZhciBwb29sID0gb2xkLnBvb2xcblx0XHRcdFx0b2xkID0gb2xkLmNvbmNhdChvbGQucG9vbClcblx0XHRcdH1cblx0XHRcdHZhciBvbGRTdGFydCA9IDAsIHN0YXJ0ID0gMCwgb2xkRW5kID0gb2xkLmxlbmd0aCAtIDEsIGVuZCA9IHZub2Rlcy5sZW5ndGggLSAxLCBtYXBcblx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdHZhciBvID0gb2xkW29sZFN0YXJ0XSwgdiA9IHZub2Rlc1tzdGFydF1cblx0XHRcdFx0aWYgKG8gPT09IHYgJiYgIXJlY3ljbGluZykgb2xkU3RhcnQrKywgc3RhcnQrK1xuXHRcdFx0XHRlbHNlIGlmIChvID09IG51bGwpIG9sZFN0YXJ0Kytcblx0XHRcdFx0ZWxzZSBpZiAodiA9PSBudWxsKSBzdGFydCsrXG5cdFx0XHRcdGVsc2UgaWYgKG8ua2V5ID09PSB2LmtleSkge1xuXHRcdFx0XHRcdHZhciBzaG91bGRSZWN5Y2xlID0gKHBvb2wgIT0gbnVsbCAmJiBvbGRTdGFydCA+PSBvbGQubGVuZ3RoIC0gcG9vbC5sZW5ndGgpIHx8ICgocG9vbCA9PSBudWxsKSAmJiByZWN5Y2xpbmcpXG5cdFx0XHRcdFx0b2xkU3RhcnQrKywgc3RhcnQrK1xuXHRcdFx0XHRcdHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRTdGFydCwgbmV4dFNpYmxpbmcpLCBzaG91bGRSZWN5Y2xlLCBucylcblx0XHRcdFx0XHRpZiAocmVjeWNsaW5nICYmIG8udGFnID09PSB2LnRhZykgaW5zZXJ0Tm9kZShwYXJlbnQsIHRvRnJhZ21lbnQobyksIG5leHRTaWJsaW5nKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHZhciBvID0gb2xkW29sZEVuZF1cblx0XHRcdFx0XHRpZiAobyA9PT0gdiAmJiAhcmVjeWNsaW5nKSBvbGRFbmQtLSwgc3RhcnQrK1xuXHRcdFx0XHRcdGVsc2UgaWYgKG8gPT0gbnVsbCkgb2xkRW5kLS1cblx0XHRcdFx0XHRlbHNlIGlmICh2ID09IG51bGwpIHN0YXJ0Kytcblx0XHRcdFx0XHRlbHNlIGlmIChvLmtleSA9PT0gdi5rZXkpIHtcblx0XHRcdFx0XHRcdHZhciBzaG91bGRSZWN5Y2xlID0gKHBvb2wgIT0gbnVsbCAmJiBvbGRFbmQgPj0gb2xkLmxlbmd0aCAtIHBvb2wubGVuZ3RoKSB8fCAoKHBvb2wgPT0gbnVsbCkgJiYgcmVjeWNsaW5nKVxuXHRcdFx0XHRcdFx0dXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZEVuZCArIDEsIG5leHRTaWJsaW5nKSwgc2hvdWxkUmVjeWNsZSwgbnMpXG5cdFx0XHRcdFx0XHRpZiAocmVjeWNsaW5nIHx8IHN0YXJ0IDwgZW5kKSBpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudChvKSwgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRTdGFydCwgbmV4dFNpYmxpbmcpKVxuXHRcdFx0XHRcdFx0b2xkRW5kLS0sIHN0YXJ0Kytcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBicmVha1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHR2YXIgbyA9IG9sZFtvbGRFbmRdLCB2ID0gdm5vZGVzW2VuZF1cblx0XHRcdFx0aWYgKG8gPT09IHYgJiYgIXJlY3ljbGluZykgb2xkRW5kLS0sIGVuZC0tXG5cdFx0XHRcdGVsc2UgaWYgKG8gPT0gbnVsbCkgb2xkRW5kLS1cblx0XHRcdFx0ZWxzZSBpZiAodiA9PSBudWxsKSBlbmQtLVxuXHRcdFx0XHRlbHNlIGlmIChvLmtleSA9PT0gdi5rZXkpIHtcblx0XHRcdFx0XHR2YXIgc2hvdWxkUmVjeWNsZSA9IChwb29sICE9IG51bGwgJiYgb2xkRW5kID49IG9sZC5sZW5ndGggLSBwb29sLmxlbmd0aCkgfHwgKChwb29sID09IG51bGwpICYmIHJlY3ljbGluZylcblx0XHRcdFx0XHR1cGRhdGVOb2RlKHBhcmVudCwgbywgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkRW5kICsgMSwgbmV4dFNpYmxpbmcpLCBzaG91bGRSZWN5Y2xlLCBucylcblx0XHRcdFx0XHRpZiAocmVjeWNsaW5nICYmIG8udGFnID09PSB2LnRhZykgaW5zZXJ0Tm9kZShwYXJlbnQsIHRvRnJhZ21lbnQobyksIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdGlmIChvLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IG8uZG9tXG5cdFx0XHRcdFx0b2xkRW5kLS0sIGVuZC0tXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYgKCFtYXApIG1hcCA9IGdldEtleU1hcChvbGQsIG9sZEVuZClcblx0XHRcdFx0XHRpZiAodiAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHR2YXIgb2xkSW5kZXggPSBtYXBbdi5rZXldXG5cdFx0XHRcdFx0XHRpZiAob2xkSW5kZXggIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgbW92YWJsZSA9IG9sZFtvbGRJbmRleF1cblx0XHRcdFx0XHRcdFx0dmFyIHNob3VsZFJlY3ljbGUgPSAocG9vbCAhPSBudWxsICYmIG9sZEluZGV4ID49IG9sZC5sZW5ndGggLSBwb29sLmxlbmd0aCkgfHwgKChwb29sID09IG51bGwpICYmIHJlY3ljbGluZylcblx0XHRcdFx0XHRcdFx0dXBkYXRlTm9kZShwYXJlbnQsIG1vdmFibGUsIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZEVuZCArIDEsIG5leHRTaWJsaW5nKSwgcmVjeWNsaW5nLCBucylcblx0XHRcdFx0XHRcdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIHRvRnJhZ21lbnQobW92YWJsZSksIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0XHRvbGRbb2xkSW5kZXhdLnNraXAgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGlmIChtb3ZhYmxlLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IG1vdmFibGUuZG9tXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRvbSA9IGNyZWF0ZU5vZGUocGFyZW50LCB2LCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0XHRuZXh0U2libGluZyA9IGRvbVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbmQtLVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbmQgPCBzdGFydCkgYnJlYWtcblx0XHRcdH1cblx0XHRcdGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kICsgMSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdHJlbW92ZU5vZGVzKG9sZCwgb2xkU3RhcnQsIG9sZEVuZCArIDEsIHZub2Rlcylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTm9kZShwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgcmVjeWNsaW5nLCBucykge1xuXHRcdHZhciBvbGRUYWcgPSBvbGQudGFnLCB0YWcgPSB2bm9kZS50YWdcblx0XHRpZiAob2xkVGFnID09PSB0YWcpIHtcblx0XHRcdHZub2RlLnN0YXRlID0gb2xkLnN0YXRlXG5cdFx0XHR2bm9kZS5fc3RhdGUgPSBvbGQuX3N0YXRlXG5cdFx0XHR2bm9kZS5ldmVudHMgPSBvbGQuZXZlbnRzXG5cdFx0XHRpZiAoIXJlY3ljbGluZyAmJiBzaG91bGROb3RVcGRhdGUodm5vZGUsIG9sZCkpIHJldHVyblxuXHRcdFx0aWYgKHR5cGVvZiBvbGRUYWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAocmVjeWNsaW5nKSB7XG5cdFx0XHRcdFx0XHR2bm9kZS5zdGF0ZSA9IHt9XG5cdFx0XHRcdFx0XHRpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgdXBkYXRlTGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChvbGRUYWcpIHtcblx0XHRcdFx0XHRjYXNlIFwiI1wiOiB1cGRhdGVUZXh0KG9sZCwgdm5vZGUpOyBicmVha1xuXHRcdFx0XHRcdGNhc2UgXCI8XCI6IHVwZGF0ZUhUTUwocGFyZW50LCBvbGQsIHZub2RlLCBuZXh0U2libGluZyk7IGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBcIltcIjogdXBkYXRlRnJhZ21lbnQocGFyZW50LCBvbGQsIHZub2RlLCByZWN5Y2xpbmcsIGhvb2tzLCBuZXh0U2libGluZywgbnMpOyBicmVha1xuXHRcdFx0XHRcdGRlZmF1bHQ6IHVwZGF0ZUVsZW1lbnQob2xkLCB2bm9kZSwgcmVjeWNsaW5nLCBob29rcywgbnMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2UgdXBkYXRlQ29tcG9uZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCByZWN5Y2xpbmcsIG5zKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJlbW92ZU5vZGUob2xkLCBudWxsKVxuXHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVUZXh0KG9sZCwgdm5vZGUpIHtcblx0XHRpZiAob2xkLmNoaWxkcmVuLnRvU3RyaW5nKCkgIT09IHZub2RlLmNoaWxkcmVuLnRvU3RyaW5nKCkpIHtcblx0XHRcdG9sZC5kb20ubm9kZVZhbHVlID0gdm5vZGUuY2hpbGRyZW5cblx0XHR9XG5cdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUhUTUwocGFyZW50LCBvbGQsIHZub2RlLCBuZXh0U2libGluZykge1xuXHRcdGlmIChvbGQuY2hpbGRyZW4gIT09IHZub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHR0b0ZyYWdtZW50KG9sZClcblx0XHRcdGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpXG5cdFx0fVxuXHRcdGVsc2Ugdm5vZGUuZG9tID0gb2xkLmRvbSwgdm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRnJhZ21lbnQocGFyZW50LCBvbGQsIHZub2RlLCByZWN5Y2xpbmcsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHR1cGRhdGVOb2RlcyhwYXJlbnQsIG9sZC5jaGlsZHJlbiwgdm5vZGUuY2hpbGRyZW4sIHJlY3ljbGluZywgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHR2YXIgZG9tU2l6ZSA9IDAsIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHR2bm9kZS5kb20gPSBudWxsXG5cdFx0aWYgKGNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwgJiYgY2hpbGQuZG9tICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAodm5vZGUuZG9tID09IG51bGwpIHZub2RlLmRvbSA9IGNoaWxkLmRvbVxuXHRcdFx0XHRcdGRvbVNpemUgKz0gY2hpbGQuZG9tU2l6ZSB8fCAxXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb21TaXplICE9PSAxKSB2bm9kZS5kb21TaXplID0gZG9tU2l6ZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG9sZCwgdm5vZGUsIHJlY3ljbGluZywgaG9va3MsIG5zKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSB2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0bnMgPSBnZXROYW1lU3BhY2Uodm5vZGUpIHx8IG5zXG5cdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgPT0gbnVsbCkgdm5vZGUuYXR0cnMgPSB7fVxuXHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkge1xuXHRcdFx0XHR2bm9kZS5hdHRycy52YWx1ZSA9IHZub2RlLnRleHQgLy9GSVhNRSBoYW5kbGUwIG11bHRpcGxlIGNoaWxkcmVuXG5cdFx0XHRcdHZub2RlLnRleHQgPSB1bmRlZmluZWRcblx0XHRcdH1cblx0XHR9XG5cdFx0dXBkYXRlQXR0cnModm5vZGUsIG9sZC5hdHRycywgdm5vZGUuYXR0cnMsIG5zKVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsICYmIHZub2RlLmF0dHJzLmNvbnRlbnRlZGl0YWJsZSAhPSBudWxsKSB7XG5cdFx0XHRzZXRDb250ZW50RWRpdGFibGUodm5vZGUpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9sZC50ZXh0ICE9IG51bGwgJiYgdm5vZGUudGV4dCAhPSBudWxsICYmIHZub2RlLnRleHQgIT09IFwiXCIpIHtcblx0XHRcdGlmIChvbGQudGV4dC50b1N0cmluZygpICE9PSB2bm9kZS50ZXh0LnRvU3RyaW5nKCkpIG9sZC5kb20uZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB2bm9kZS50ZXh0XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKG9sZC50ZXh0ICE9IG51bGwpIG9sZC5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG9sZC50ZXh0LCB1bmRlZmluZWQsIG9sZC5kb20uZmlyc3RDaGlsZCldXG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB2bm9kZS5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZub2RlLnRleHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKV1cblx0XHRcdHVwZGF0ZU5vZGVzKGVsZW1lbnQsIG9sZC5jaGlsZHJlbiwgdm5vZGUuY2hpbGRyZW4sIHJlY3ljbGluZywgaG9va3MsIG51bGwsIG5zKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVDb21wb25lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIHJlY3ljbGluZywgbnMpIHtcblx0XHRpZiAocmVjeWNsaW5nKSB7XG5cdFx0XHRpbml0Q29tcG9uZW50KHZub2RlLCBob29rcylcblx0XHR9IGVsc2Uge1xuXHRcdFx0dm5vZGUuaW5zdGFuY2UgPSBWbm9kZS5ub3JtYWxpemUodm5vZGUuX3N0YXRlLnZpZXcuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUpKVxuXHRcdFx0aWYgKHZub2RlLmluc3RhbmNlID09PSB2bm9kZSkgdGhyb3cgRXJyb3IoXCJBIHZpZXcgY2Fubm90IHJldHVybiB0aGUgdm5vZGUgaXQgcmVjZWl2ZWQgYXMgYXJndW1lbnRcIilcblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSB1cGRhdGVMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5fc3RhdGUsIHZub2RlLCBob29rcylcblx0XHR9XG5cdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdGlmIChvbGQuaW5zdGFuY2UgPT0gbnVsbCkgY3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLmluc3RhbmNlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0ZWxzZSB1cGRhdGVOb2RlKHBhcmVudCwgb2xkLmluc3RhbmNlLCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5leHRTaWJsaW5nLCByZWN5Y2xpbmcsIG5zKVxuXHRcdFx0dm5vZGUuZG9tID0gdm5vZGUuaW5zdGFuY2UuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gdm5vZGUuaW5zdGFuY2UuZG9tU2l6ZVxuXHRcdH1cblx0XHRlbHNlIGlmIChvbGQuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0cmVtb3ZlTm9kZShvbGQuaW5zdGFuY2UsIG51bGwpXG5cdFx0XHR2bm9kZS5kb20gPSB1bmRlZmluZWRcblx0XHRcdHZub2RlLmRvbVNpemUgPSAwXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGlzUmVjeWNsYWJsZShvbGQsIHZub2Rlcykge1xuXHRcdGlmIChvbGQucG9vbCAhPSBudWxsICYmIE1hdGguYWJzKG9sZC5wb29sLmxlbmd0aCAtIHZub2Rlcy5sZW5ndGgpIDw9IE1hdGguYWJzKG9sZC5sZW5ndGggLSB2bm9kZXMubGVuZ3RoKSkge1xuXHRcdFx0dmFyIG9sZENoaWxkcmVuTGVuZ3RoID0gb2xkWzBdICYmIG9sZFswXS5jaGlsZHJlbiAmJiBvbGRbMF0uY2hpbGRyZW4ubGVuZ3RoIHx8IDBcblx0XHRcdHZhciBwb29sQ2hpbGRyZW5MZW5ndGggPSBvbGQucG9vbFswXSAmJiBvbGQucG9vbFswXS5jaGlsZHJlbiAmJiBvbGQucG9vbFswXS5jaGlsZHJlbi5sZW5ndGggfHwgMFxuXHRcdFx0dmFyIHZub2Rlc0NoaWxkcmVuTGVuZ3RoID0gdm5vZGVzWzBdICYmIHZub2Rlc1swXS5jaGlsZHJlbiAmJiB2bm9kZXNbMF0uY2hpbGRyZW4ubGVuZ3RoIHx8IDBcblx0XHRcdGlmIChNYXRoLmFicyhwb29sQ2hpbGRyZW5MZW5ndGggLSB2bm9kZXNDaGlsZHJlbkxlbmd0aCkgPD0gTWF0aC5hYnMob2xkQ2hpbGRyZW5MZW5ndGggLSB2bm9kZXNDaGlsZHJlbkxlbmd0aCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblx0ZnVuY3Rpb24gZ2V0S2V5TWFwKHZub2RlcywgZW5kKSB7XG5cdFx0dmFyIG1hcCA9IHt9LCBpID0gMFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIGtleTIgPSB2bm9kZS5rZXlcblx0XHRcdFx0aWYgKGtleTIgIT0gbnVsbCkgbWFwW2tleTJdID0gaVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbWFwXG5cdH1cblx0ZnVuY3Rpb24gdG9GcmFnbWVudCh2bm9kZSkge1xuXHRcdHZhciBjb3VudDAgPSB2bm9kZS5kb21TaXplXG5cdFx0aWYgKGNvdW50MCAhPSBudWxsIHx8IHZub2RlLmRvbSA9PSBudWxsKSB7XG5cdFx0XHR2YXIgZnJhZ21lbnQgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdFx0aWYgKGNvdW50MCA+IDApIHtcblx0XHRcdFx0dmFyIGRvbSA9IHZub2RlLmRvbVxuXHRcdFx0XHR3aGlsZSAoLS1jb3VudDApIGZyYWdtZW50LmFwcGVuZENoaWxkKGRvbS5uZXh0U2libGluZylcblx0XHRcdFx0ZnJhZ21lbnQuaW5zZXJ0QmVmb3JlKGRvbSwgZnJhZ21lbnQuZmlyc3RDaGlsZClcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudFxuXHRcdH1cblx0XHRlbHNlIHJldHVybiB2bm9kZS5kb21cblx0fVxuXHRmdW5jdGlvbiBnZXROZXh0U2libGluZyh2bm9kZXMsIGksIG5leHRTaWJsaW5nKSB7XG5cdFx0Zm9yICg7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh2bm9kZXNbaV0gIT0gbnVsbCAmJiB2bm9kZXNbaV0uZG9tICE9IG51bGwpIHJldHVybiB2bm9kZXNbaV0uZG9tXG5cdFx0fVxuXHRcdHJldHVybiBuZXh0U2libGluZ1xuXHR9XG5cdGZ1bmN0aW9uIGluc2VydE5vZGUocGFyZW50LCBkb20sIG5leHRTaWJsaW5nKSB7XG5cdFx0aWYgKG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLnBhcmVudE5vZGUpIHBhcmVudC5pbnNlcnRCZWZvcmUoZG9tLCBuZXh0U2libGluZylcblx0XHRlbHNlIHBhcmVudC5hcHBlbmRDaGlsZChkb20pXG5cdH1cblx0ZnVuY3Rpb24gc2V0Q29udGVudEVkaXRhYmxlKHZub2RlKSB7XG5cdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgY2hpbGRyZW5bMF0udGFnID09PSBcIjxcIikge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjaGlsZHJlblswXS5jaGlsZHJlblxuXHRcdFx0aWYgKHZub2RlLmRvbS5pbm5lckhUTUwgIT09IGNvbnRlbnQpIHZub2RlLmRvbS5pbm5lckhUTUwgPSBjb250ZW50XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHZub2RlLnRleHQgIT0gbnVsbCB8fCBjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgbm9kZSBvZiBhIGNvbnRlbnRlZGl0YWJsZSBtdXN0IGJlIHRydXN0ZWRcIilcblx0fVxuXHQvL3JlbW92ZVxuXHRmdW5jdGlvbiByZW1vdmVOb2Rlcyh2bm9kZXMsIHN0YXJ0LCBlbmQsIGNvbnRleHQpIHtcblx0XHRmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW2ldXG5cdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodm5vZGUuc2tpcCkgdm5vZGUuc2tpcCA9IGZhbHNlXG5cdFx0XHRcdGVsc2UgcmVtb3ZlTm9kZSh2bm9kZSwgY29udGV4dClcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZSh2bm9kZSwgY29udGV4dCkge1xuXHRcdHZhciBleHBlY3RlZCA9IDEsIGNhbGxlZCA9IDBcblx0XHRpZiAodm5vZGUuYXR0cnMgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9uYmVmb3JlcmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZhciByZXN1bHQgPSB2bm9kZS5hdHRycy5vbmJlZm9yZXJlbW92ZS5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSlcblx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRleHBlY3RlZCsrXG5cdFx0XHRcdHJlc3VsdC50aGVuKGNvbnRpbnVhdGlvbiwgY29udGludWF0aW9uKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygdm5vZGUuX3N0YXRlLm9uYmVmb3JlcmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZhciByZXN1bHQgPSB2bm9kZS5fc3RhdGUub25iZWZvcmVyZW1vdmUuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUpXG5cdFx0XHRpZiAocmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0ZXhwZWN0ZWQrK1xuXHRcdFx0XHRyZXN1bHQudGhlbihjb250aW51YXRpb24sIGNvbnRpbnVhdGlvbilcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29udGludWF0aW9uKClcblx0XHRmdW5jdGlvbiBjb250aW51YXRpb24oKSB7XG5cdFx0XHRpZiAoKytjYWxsZWQgPT09IGV4cGVjdGVkKSB7XG5cdFx0XHRcdG9ucmVtb3ZlKHZub2RlKVxuXHRcdFx0XHRpZiAodm5vZGUuZG9tKSB7XG5cdFx0XHRcdFx0dmFyIGNvdW50MCA9IHZub2RlLmRvbVNpemUgfHwgMVxuXHRcdFx0XHRcdGlmIChjb3VudDAgPiAxKSB7XG5cdFx0XHRcdFx0XHR2YXIgZG9tID0gdm5vZGUuZG9tXG5cdFx0XHRcdFx0XHR3aGlsZSAoLS1jb3VudDApIHtcblx0XHRcdFx0XHRcdFx0cmVtb3ZlTm9kZUZyb21ET00oZG9tLm5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZW1vdmVOb2RlRnJvbURPTSh2bm9kZS5kb20pXG5cdFx0XHRcdFx0aWYgKGNvbnRleHQgIT0gbnVsbCAmJiB2bm9kZS5kb21TaXplID09IG51bGwgJiYgIWhhc0ludGVncmF0aW9uTWV0aG9kcyh2bm9kZS5hdHRycykgJiYgdHlwZW9mIHZub2RlLnRhZyA9PT0gXCJzdHJpbmdcIikgeyAvL1RPRE8gdGVzdCBjdXN0b20gZWxlbWVudHNcblx0XHRcdFx0XHRcdGlmICghY29udGV4dC5wb29sKSBjb250ZXh0LnBvb2wgPSBbdm5vZGVdXG5cdFx0XHRcdFx0XHRlbHNlIGNvbnRleHQucG9vbC5wdXNoKHZub2RlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVOb2RlRnJvbURPTShub2RlKSB7XG5cdFx0dmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZVxuXHRcdGlmIChwYXJlbnQgIT0gbnVsbCkgcGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpXG5cdH1cblx0ZnVuY3Rpb24gb25yZW1vdmUodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuYXR0cnMgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9ucmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHZub2RlLmF0dHJzLm9ucmVtb3ZlLmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKVxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5fc3RhdGUub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgdm5vZGUuX3N0YXRlLm9ucmVtb3ZlLmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSBvbnJlbW92ZSh2bm9kZS5pbnN0YW5jZSlcblx0XHRlbHNlIHtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG5cdFx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwpIG9ucmVtb3ZlKGNoaWxkKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vYXR0cnMyXG5cdGZ1bmN0aW9uIHNldEF0dHJzKHZub2RlLCBhdHRyczIsIG5zKSB7XG5cdFx0Zm9yICh2YXIga2V5MiBpbiBhdHRyczIpIHtcblx0XHRcdHNldEF0dHIodm5vZGUsIGtleTIsIG51bGwsIGF0dHJzMltrZXkyXSwgbnMpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldEF0dHIodm5vZGUsIGtleTIsIG9sZCwgdmFsdWUsIG5zKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSB2bm9kZS5kb21cblx0XHRpZiAoa2V5MiA9PT0gXCJrZXlcIiB8fCBrZXkyID09PSBcImlzXCIgfHwgKG9sZCA9PT0gdmFsdWUgJiYgIWlzRm9ybUF0dHJpYnV0ZSh2bm9kZSwga2V5MikpICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgaXNMaWZlY3ljbGVNZXRob2Qoa2V5MikpIHJldHVyblxuXHRcdHZhciBuc0xhc3RJbmRleCA9IGtleTIuaW5kZXhPZihcIjpcIilcblx0XHRpZiAobnNMYXN0SW5kZXggPiAtMSAmJiBrZXkyLnN1YnN0cigwLCBuc0xhc3RJbmRleCkgPT09IFwieGxpbmtcIikge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwga2V5Mi5zbGljZShuc0xhc3RJbmRleCArIDEpLCB2YWx1ZSlcblx0XHR9XG5cdFx0ZWxzZSBpZiAoa2V5MlswXSA9PT0gXCJvXCIgJiYga2V5MlsxXSA9PT0gXCJuXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXkyLCB2YWx1ZSlcblx0XHRlbHNlIGlmIChrZXkyID09PSBcInN0eWxlXCIpIHVwZGF0ZVN0eWxlKGVsZW1lbnQsIG9sZCwgdmFsdWUpXG5cdFx0ZWxzZSBpZiAoa2V5MiBpbiBlbGVtZW50ICYmICFpc0F0dHJpYnV0ZShrZXkyKSAmJiBucyA9PT0gdW5kZWZpbmVkICYmICFpc0N1c3RvbUVsZW1lbnQodm5vZGUpKSB7XG5cdFx0XHRpZiAoa2V5MiA9PT0gXCJ2YWx1ZVwiKSB7XG5cdFx0XHRcdHZhciBub3JtYWxpemVkMCA9IFwiXCIgKyB2YWx1ZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdFx0XHRcdC8vc2V0dGluZyBpbnB1dFt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSBieSB0eXBpbmcgb24gZm9jdXNlZCBlbGVtZW50IG1vdmVzIGN1cnNvciB0byBlbmQgaW4gQ2hyb21lXG5cdFx0XHRcdGlmICgodm5vZGUudGFnID09PSBcImlucHV0XCIgfHwgdm5vZGUudGFnID09PSBcInRleHRhcmVhXCIpICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gbm9ybWFsaXplZDAgJiYgdm5vZGUuZG9tID09PSAkZG9jLmFjdGl2ZUVsZW1lbnQpIHJldHVyblxuXHRcdFx0XHQvL3NldHRpbmcgc2VsZWN0W3ZhbHVlXSB0byBzYW1lIHZhbHVlIHdoaWxlIGhhdmluZyBzZWxlY3Qgb3BlbiBibGlua3Mgc2VsZWN0IGRyb3Bkb3duIGluIENocm9tZVxuXHRcdFx0XHRpZiAodm5vZGUudGFnID09PSBcInNlbGVjdFwiKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUuZG9tLnNlbGVjdGVkSW5kZXggPT09IC0xICYmIHZub2RlLmRvbSA9PT0gJGRvYy5hY3RpdmVFbGVtZW50KSByZXR1cm5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9sZCAhPT0gbnVsbCAmJiB2bm9kZS5kb20udmFsdWUgPT09IG5vcm1hbGl6ZWQwICYmIHZub2RlLmRvbSA9PT0gJGRvYy5hY3RpdmVFbGVtZW50KSByZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly9zZXR0aW5nIG9wdGlvblt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSB3aGlsZSBoYXZpbmcgc2VsZWN0IG9wZW4gYmxpbmtzIHNlbGVjdCBkcm9wZG93biBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJvcHRpb25cIiAmJiBvbGQgIT0gbnVsbCAmJiB2bm9kZS5kb20udmFsdWUgPT09IG5vcm1hbGl6ZWQwKSByZXR1cm5cblx0XHRcdH1cblx0XHRcdC8vIElmIHlvdSBhc3NpZ24gYW4gaW5wdXQgdHlwZTEgdGhhdCBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFIDExIHdpdGggYW4gYXNzaWdubWVudCBleHByZXNzaW9uLCBhbiBlcnJvcjAgd2lsbCBvY2N1ci5cblx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwiaW5wdXRcIiAmJiBrZXkyID09PSBcInR5cGVcIikge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShrZXkyLCB2YWx1ZSlcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHRlbGVtZW50W2tleTJdID0gdmFsdWVcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuXHRcdFx0XHRpZiAodmFsdWUpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleTIsIFwiXCIpXG5cdFx0XHRcdGVsc2UgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5Milcblx0XHRcdH1cblx0XHRcdGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5MiA9PT0gXCJjbGFzc05hbWVcIiA/IFwiY2xhc3NcIiA6IGtleTIsIHZhbHVlKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBzZXRMYXRlQXR0cnModm5vZGUpIHtcblx0XHR2YXIgYXR0cnMyID0gdm5vZGUuYXR0cnNcblx0XHRpZiAodm5vZGUudGFnID09PSBcInNlbGVjdFwiICYmIGF0dHJzMiAhPSBudWxsKSB7XG5cdFx0XHRpZiAoXCJ2YWx1ZVwiIGluIGF0dHJzMikgc2V0QXR0cih2bm9kZSwgXCJ2YWx1ZVwiLCBudWxsLCBhdHRyczIudmFsdWUsIHVuZGVmaW5lZClcblx0XHRcdGlmIChcInNlbGVjdGVkSW5kZXhcIiBpbiBhdHRyczIpIHNldEF0dHIodm5vZGUsIFwic2VsZWN0ZWRJbmRleFwiLCBudWxsLCBhdHRyczIuc2VsZWN0ZWRJbmRleCwgdW5kZWZpbmVkKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVBdHRycyh2bm9kZSwgb2xkLCBhdHRyczIsIG5zKSB7XG5cdFx0aWYgKGF0dHJzMiAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkyIGluIGF0dHJzMikge1xuXHRcdFx0XHRzZXRBdHRyKHZub2RlLCBrZXkyLCBvbGQgJiYgb2xkW2tleTJdLCBhdHRyczJba2V5Ml0sIG5zKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAob2xkICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGtleTIgaW4gb2xkKSB7XG5cdFx0XHRcdGlmIChhdHRyczIgPT0gbnVsbCB8fCAhKGtleTIgaW4gYXR0cnMyKSkge1xuXHRcdFx0XHRcdGlmIChrZXkyID09PSBcImNsYXNzTmFtZVwiKSBrZXkyID0gXCJjbGFzc1wiXG5cdFx0XHRcdFx0aWYgKGtleTJbMF0gPT09IFwib1wiICYmIGtleTJbMV0gPT09IFwiblwiICYmICFpc0xpZmVjeWNsZU1ldGhvZChrZXkyKSkgdXBkYXRlRXZlbnQodm5vZGUsIGtleTIsIHVuZGVmaW5lZClcblx0XHRcdFx0XHRlbHNlIGlmIChrZXkyICE9PSBcImtleVwiKSB2bm9kZS5kb20ucmVtb3ZlQXR0cmlidXRlKGtleTIpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaXNGb3JtQXR0cmlidXRlKHZub2RlLCBhdHRyKSB7XG5cdFx0cmV0dXJuIGF0dHIgPT09IFwidmFsdWVcIiB8fCBhdHRyID09PSBcImNoZWNrZWRcIiB8fCBhdHRyID09PSBcInNlbGVjdGVkSW5kZXhcIiB8fCBhdHRyID09PSBcInNlbGVjdGVkXCIgJiYgdm5vZGUuZG9tID09PSAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0fVxuXHRmdW5jdGlvbiBpc0xpZmVjeWNsZU1ldGhvZChhdHRyKSB7XG5cdFx0cmV0dXJuIGF0dHIgPT09IFwib25pbml0XCIgfHwgYXR0ciA9PT0gXCJvbmNyZWF0ZVwiIHx8IGF0dHIgPT09IFwib251cGRhdGVcIiB8fCBhdHRyID09PSBcIm9ucmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXJlbW92ZVwiIHx8IGF0dHIgPT09IFwib25iZWZvcmV1cGRhdGVcIlxuXHR9XG5cdGZ1bmN0aW9uIGlzQXR0cmlidXRlKGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJocmVmXCIgfHwgYXR0ciA9PT0gXCJsaXN0XCIgfHwgYXR0ciA9PT0gXCJmb3JtXCIgfHwgYXR0ciA9PT0gXCJ3aWR0aFwiIHx8IGF0dHIgPT09IFwiaGVpZ2h0XCIvLyB8fCBhdHRyID09PSBcInR5cGVcIlxuXHR9XG5cdGZ1bmN0aW9uIGlzQ3VzdG9tRWxlbWVudCh2bm9kZSl7XG5cdFx0cmV0dXJuIHZub2RlLmF0dHJzLmlzIHx8IHZub2RlLnRhZy5pbmRleE9mKFwiLVwiKSA+IC0xXG5cdH1cblx0ZnVuY3Rpb24gaGFzSW50ZWdyYXRpb25NZXRob2RzKHNvdXJjZSkge1xuXHRcdHJldHVybiBzb3VyY2UgIT0gbnVsbCAmJiAoc291cmNlLm9uY3JlYXRlIHx8IHNvdXJjZS5vbnVwZGF0ZSB8fCBzb3VyY2Uub25iZWZvcmVyZW1vdmUgfHwgc291cmNlLm9ucmVtb3ZlKVxuXHR9XG5cdC8vc3R5bGVcblx0ZnVuY3Rpb24gdXBkYXRlU3R5bGUoZWxlbWVudCwgb2xkLCBzdHlsZSkge1xuXHRcdGlmIChvbGQgPT09IHN0eWxlKSBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiLCBvbGQgPSBudWxsXG5cdFx0aWYgKHN0eWxlID09IG51bGwpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCJcblx0XHRlbHNlIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwic3RyaW5nXCIpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIG9sZCA9PT0gXCJzdHJpbmdcIikgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdFx0Zm9yICh2YXIga2V5MiBpbiBzdHlsZSkge1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlW2tleTJdID0gc3R5bGVba2V5Ml1cblx0XHRcdH1cblx0XHRcdGlmIChvbGQgIT0gbnVsbCAmJiB0eXBlb2Ygb2xkICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleTIgaW4gb2xkKSB7XG5cdFx0XHRcdFx0aWYgKCEoa2V5MiBpbiBzdHlsZSkpIGVsZW1lbnQuc3R5bGVba2V5Ml0gPSBcIlwiXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9ldmVudFxuXHRmdW5jdGlvbiB1cGRhdGVFdmVudCh2bm9kZSwga2V5MiwgdmFsdWUpIHtcblx0XHR2YXIgZWxlbWVudCA9IHZub2RlLmRvbVxuXHRcdHZhciBjYWxsYmFjayA9IHR5cGVvZiBvbmV2ZW50ICE9PSBcImZ1bmN0aW9uXCIgPyB2YWx1ZSA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciByZXN1bHQgPSB2YWx1ZS5jYWxsKGVsZW1lbnQsIGUpXG5cdFx0XHRvbmV2ZW50LmNhbGwoZWxlbWVudCwgZSlcblx0XHRcdHJldHVybiByZXN1bHRcblx0XHR9XG5cdFx0aWYgKGtleTIgaW4gZWxlbWVudCkgZWxlbWVudFtrZXkyXSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gY2FsbGJhY2sgOiBudWxsXG5cdFx0ZWxzZSB7XG5cdFx0XHR2YXIgZXZlbnROYW1lID0ga2V5Mi5zbGljZSgyKVxuXHRcdFx0aWYgKHZub2RlLmV2ZW50cyA9PT0gdW5kZWZpbmVkKSB2bm9kZS5ldmVudHMgPSB7fVxuXHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXkyXSA9PT0gY2FsbGJhY2spIHJldHVyblxuXHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXkyXSAhPSBudWxsKSBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB2bm9kZS5ldmVudHNba2V5Ml0sIGZhbHNlKVxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHZub2RlLmV2ZW50c1trZXkyXSA9IGNhbGxiYWNrXG5cdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHZub2RlLmV2ZW50c1trZXkyXSwgZmFsc2UpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vbGlmZWN5Y2xlXG5cdGZ1bmN0aW9uIGluaXRMaWZlY3ljbGUoc291cmNlLCB2bm9kZSwgaG9va3MpIHtcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbmluaXQgPT09IFwiZnVuY3Rpb25cIikgc291cmNlLm9uaW5pdC5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSlcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbmNyZWF0ZSA9PT0gXCJmdW5jdGlvblwiKSBob29rcy5wdXNoKHNvdXJjZS5vbmNyZWF0ZS5iaW5kKHZub2RlLnN0YXRlLCB2bm9kZSkpXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTGlmZWN5Y2xlKHNvdXJjZSwgdm5vZGUsIGhvb2tzKSB7XG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub251cGRhdGUgPT09IFwiZnVuY3Rpb25cIikgaG9va3MucHVzaChzb3VyY2Uub251cGRhdGUuYmluZCh2bm9kZS5zdGF0ZSwgdm5vZGUpKVxuXHR9XG5cdGZ1bmN0aW9uIHNob3VsZE5vdFVwZGF0ZSh2bm9kZSwgb2xkKSB7XG5cdFx0dmFyIGZvcmNlVm5vZGVVcGRhdGUsIGZvcmNlQ29tcG9uZW50VXBkYXRlXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9uYmVmb3JldXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIGZvcmNlVm5vZGVVcGRhdGUgPSB2bm9kZS5hdHRycy5vbmJlZm9yZXVwZGF0ZS5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSwgb2xkKVxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5fc3RhdGUub25iZWZvcmV1cGRhdGUgPT09IFwiZnVuY3Rpb25cIikgZm9yY2VDb21wb25lbnRVcGRhdGUgPSB2bm9kZS5fc3RhdGUub25iZWZvcmV1cGRhdGUuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUsIG9sZClcblx0XHRpZiAoIShmb3JjZVZub2RlVXBkYXRlID09PSB1bmRlZmluZWQgJiYgZm9yY2VDb21wb25lbnRVcGRhdGUgPT09IHVuZGVmaW5lZCkgJiYgIWZvcmNlVm5vZGVVcGRhdGUgJiYgIWZvcmNlQ29tcG9uZW50VXBkYXRlKSB7XG5cdFx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0XHRcdHZub2RlLmluc3RhbmNlID0gb2xkLmluc3RhbmNlXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHRmdW5jdGlvbiByZW5kZXIoZG9tLCB2bm9kZXMpIHtcblx0XHRpZiAoIWRvbSkgdGhyb3cgbmV3IEVycm9yKFwiRW5zdXJlIHRoZSBET00gZWxlbWVudCBiZWluZyBwYXNzZWQgdG8gbS5yb3V0ZS9tLm1vdW50L20ucmVuZGVyIGlzIG5vdCB1bmRlZmluZWQuXCIpXG5cdFx0dmFyIGhvb2tzID0gW11cblx0XHR2YXIgYWN0aXZlID0gJGRvYy5hY3RpdmVFbGVtZW50XG5cdFx0dmFyIG5hbWVzcGFjZSA9IGRvbS5uYW1lc3BhY2VVUklcblx0XHQvLyBGaXJzdCB0aW1lMCByZW5kZXJpbmcgaW50byBhIG5vZGUgY2xlYXJzIGl0IG91dFxuXHRcdGlmIChkb20udm5vZGVzID09IG51bGwpIGRvbS50ZXh0Q29udGVudCA9IFwiXCJcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkodm5vZGVzKSkgdm5vZGVzID0gW3Zub2Rlc11cblx0XHR1cGRhdGVOb2Rlcyhkb20sIGRvbS52bm9kZXMsIFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlcyksIGZhbHNlLCBob29rcywgbnVsbCwgbmFtZXNwYWNlID09PSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiA/IHVuZGVmaW5lZCA6IG5hbWVzcGFjZSlcblx0XHRkb20udm5vZGVzID0gdm5vZGVzXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykgaG9va3NbaV0oKVxuXHRcdGlmICgkZG9jLmFjdGl2ZUVsZW1lbnQgIT09IGFjdGl2ZSkgYWN0aXZlLmZvY3VzKClcblx0fVxuXHRyZXR1cm4ge3JlbmRlcjogcmVuZGVyLCBzZXRFdmVudENhbGxiYWNrOiBzZXRFdmVudENhbGxiYWNrfVxufVxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2spIHtcblx0Ly82MGZwcyB0cmFuc2xhdGVzIHRvIDE2LjZtcywgcm91bmQgaXQgZG93biBzaW5jZSBzZXRUaW1lb3V0IHJlcXVpcmVzIGludFxuXHR2YXIgdGltZSA9IDE2XG5cdHZhciBsYXN0ID0gMCwgcGVuZGluZyA9IG51bGxcblx0dmFyIHRpbWVvdXQgPSB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSBcImZ1bmN0aW9uXCIgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgOiBzZXRUaW1lb3V0XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHR2YXIgbm93ID0gRGF0ZS5ub3coKVxuXHRcdGlmIChsYXN0ID09PSAwIHx8IG5vdyAtIGxhc3QgPj0gdGltZSkge1xuXHRcdFx0bGFzdCA9IG5vd1xuXHRcdFx0Y2FsbGJhY2soKVxuXHRcdH1cblx0XHRlbHNlIGlmIChwZW5kaW5nID09PSBudWxsKSB7XG5cdFx0XHRwZW5kaW5nID0gdGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0cGVuZGluZyA9IG51bGxcblx0XHRcdFx0Y2FsbGJhY2soKVxuXHRcdFx0XHRsYXN0ID0gRGF0ZS5ub3coKVxuXHRcdFx0fSwgdGltZSAtIChub3cgLSBsYXN0KSlcblx0XHR9XG5cdH1cbn1cbnZhciBfMTEgPSBmdW5jdGlvbigkd2luZG93KSB7XG5cdHZhciByZW5kZXJTZXJ2aWNlID0gY29yZVJlbmRlcmVyKCR3aW5kb3cpXG5cdHJlbmRlclNlcnZpY2Uuc2V0RXZlbnRDYWxsYmFjayhmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUucmVkcmF3ID09PSBmYWxzZSkgZS5yZWRyYXcgPSB1bmRlZmluZWRcblx0XHRlbHNlIHJlZHJhdygpXG5cdH0pXG5cdHZhciBjYWxsYmFja3MgPSBbXVxuXHRmdW5jdGlvbiBzdWJzY3JpYmUoa2V5MSwgY2FsbGJhY2spIHtcblx0XHR1bnN1YnNjcmliZShrZXkxKVxuXHRcdGNhbGxiYWNrcy5wdXNoKGtleTEsIHRocm90dGxlKGNhbGxiYWNrKSlcblx0fVxuXHRmdW5jdGlvbiB1bnN1YnNjcmliZShrZXkxKSB7XG5cdFx0dmFyIGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2Yoa2V5MSlcblx0XHRpZiAoaW5kZXggPiAtMSkgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMilcblx0fVxuXHRmdW5jdGlvbiByZWRyYXcoKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGNhbGxiYWNrc1tpXSgpXG5cdFx0fVxuXHR9XG5cdHJldHVybiB7c3Vic2NyaWJlOiBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSwgcmVkcmF3OiByZWRyYXcsIHJlbmRlcjogcmVuZGVyU2VydmljZS5yZW5kZXJ9XG59XG52YXIgcmVkcmF3U2VydmljZSA9IF8xMSh3aW5kb3cpXG5yZXF1ZXN0U2VydmljZS5zZXRDb21wbGV0aW9uQ2FsbGJhY2socmVkcmF3U2VydmljZS5yZWRyYXcpXG52YXIgXzE2ID0gZnVuY3Rpb24ocmVkcmF3U2VydmljZTApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKHJvb3QsIGNvbXBvbmVudCkge1xuXHRcdGlmIChjb21wb25lbnQgPT09IG51bGwpIHtcblx0XHRcdHJlZHJhd1NlcnZpY2UwLnJlbmRlcihyb290LCBbXSlcblx0XHRcdHJlZHJhd1NlcnZpY2UwLnVuc3Vic2NyaWJlKHJvb3QpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0XG5cdFx0aWYgKGNvbXBvbmVudC52aWV3ID09IG51bGwgJiYgdHlwZW9mIGNvbXBvbmVudCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJtLm1vdW50KGVsZW1lbnQsIGNvbXBvbmVudCkgZXhwZWN0cyBhIGNvbXBvbmVudCwgbm90IGEgdm5vZGVcIilcblx0XHRcblx0XHR2YXIgcnVuMCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVkcmF3U2VydmljZTAucmVuZGVyKHJvb3QsIFZub2RlKGNvbXBvbmVudCkpXG5cdFx0fVxuXHRcdHJlZHJhd1NlcnZpY2UwLnN1YnNjcmliZShyb290LCBydW4wKVxuXHRcdHJlZHJhd1NlcnZpY2UwLnJlZHJhdygpXG5cdH1cbn1cbm0ubW91bnQgPSBfMTYocmVkcmF3U2VydmljZSlcbnZhciBQcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG52YXIgcGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKHN0cmluZykge1xuXHRpZiAoc3RyaW5nID09PSBcIlwiIHx8IHN0cmluZyA9PSBudWxsKSByZXR1cm4ge31cblx0aWYgKHN0cmluZy5jaGFyQXQoMCkgPT09IFwiP1wiKSBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMSlcblx0dmFyIGVudHJpZXMgPSBzdHJpbmcuc3BsaXQoXCImXCIpLCBkYXRhMCA9IHt9LCBjb3VudGVycyA9IHt9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBlbnRyeSA9IGVudHJpZXNbaV0uc3BsaXQoXCI9XCIpXG5cdFx0dmFyIGtleTUgPSBkZWNvZGVVUklDb21wb25lbnQoZW50cnlbMF0pXG5cdFx0dmFyIHZhbHVlID0gZW50cnkubGVuZ3RoID09PSAyID8gZGVjb2RlVVJJQ29tcG9uZW50KGVudHJ5WzFdKSA6IFwiXCJcblx0XHRpZiAodmFsdWUgPT09IFwidHJ1ZVwiKSB2YWx1ZSA9IHRydWVcblx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB2YWx1ZSA9IGZhbHNlXG5cdFx0dmFyIGxldmVscyA9IGtleTUuc3BsaXQoL1xcXVxcWz98XFxbLylcblx0XHR2YXIgY3Vyc29yID0gZGF0YTBcblx0XHRpZiAoa2V5NS5pbmRleE9mKFwiW1wiKSA+IC0xKSBsZXZlbHMucG9wKClcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxldmVscy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGxldmVsID0gbGV2ZWxzW2pdLCBuZXh0TGV2ZWwgPSBsZXZlbHNbaiArIDFdXG5cdFx0XHR2YXIgaXNOdW1iZXIgPSBuZXh0TGV2ZWwgPT0gXCJcIiB8fCAhaXNOYU4ocGFyc2VJbnQobmV4dExldmVsLCAxMCkpXG5cdFx0XHR2YXIgaXNWYWx1ZSA9IGogPT09IGxldmVscy5sZW5ndGggLSAxXG5cdFx0XHRpZiAobGV2ZWwgPT09IFwiXCIpIHtcblx0XHRcdFx0dmFyIGtleTUgPSBsZXZlbHMuc2xpY2UoMCwgaikuam9pbigpXG5cdFx0XHRcdGlmIChjb3VudGVyc1trZXk1XSA9PSBudWxsKSBjb3VudGVyc1trZXk1XSA9IDBcblx0XHRcdFx0bGV2ZWwgPSBjb3VudGVyc1trZXk1XSsrXG5cdFx0XHR9XG5cdFx0XHRpZiAoY3Vyc29yW2xldmVsXSA9PSBudWxsKSB7XG5cdFx0XHRcdGN1cnNvcltsZXZlbF0gPSBpc1ZhbHVlID8gdmFsdWUgOiBpc051bWJlciA/IFtdIDoge31cblx0XHRcdH1cblx0XHRcdGN1cnNvciA9IGN1cnNvcltsZXZlbF1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGEwXG59XG52YXIgY29yZVJvdXRlciA9IGZ1bmN0aW9uKCR3aW5kb3cpIHtcblx0dmFyIHN1cHBvcnRzUHVzaFN0YXRlID0gdHlwZW9mICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPT09IFwiZnVuY3Rpb25cIlxuXHR2YXIgY2FsbEFzeW5jMCA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IHNldFRpbWVvdXRcblx0ZnVuY3Rpb24gbm9ybWFsaXplMShmcmFnbWVudDApIHtcblx0XHR2YXIgZGF0YSA9ICR3aW5kb3cubG9jYXRpb25bZnJhZ21lbnQwXS5yZXBsYWNlKC8oPzolW2EtZjg5XVthLWYwLTldKSsvZ2ltLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0aWYgKGZyYWdtZW50MCA9PT0gXCJwYXRobmFtZVwiICYmIGRhdGFbMF0gIT09IFwiL1wiKSBkYXRhID0gXCIvXCIgKyBkYXRhXG5cdFx0cmV0dXJuIGRhdGFcblx0fVxuXHR2YXIgYXN5bmNJZFxuXHRmdW5jdGlvbiBkZWJvdW5jZUFzeW5jKGNhbGxiYWNrMCkge1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChhc3luY0lkICE9IG51bGwpIHJldHVyblxuXHRcdFx0YXN5bmNJZCA9IGNhbGxBc3luYzAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGFzeW5jSWQgPSBudWxsXG5cdFx0XHRcdGNhbGxiYWNrMCgpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCwgcXVlcnlEYXRhLCBoYXNoRGF0YSkge1xuXHRcdHZhciBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKFwiP1wiKVxuXHRcdHZhciBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoXCIjXCIpXG5cdFx0dmFyIHBhdGhFbmQgPSBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4ID4gLTEgPyBoYXNoSW5kZXggOiBwYXRoLmxlbmd0aFxuXHRcdGlmIChxdWVyeUluZGV4ID4gLTEpIHtcblx0XHRcdHZhciBxdWVyeUVuZCA9IGhhc2hJbmRleCA+IC0xID8gaGFzaEluZGV4IDogcGF0aC5sZW5ndGhcblx0XHRcdHZhciBxdWVyeVBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcocGF0aC5zbGljZShxdWVyeUluZGV4ICsgMSwgcXVlcnlFbmQpKVxuXHRcdFx0Zm9yICh2YXIga2V5NCBpbiBxdWVyeVBhcmFtcykgcXVlcnlEYXRhW2tleTRdID0gcXVlcnlQYXJhbXNba2V5NF1cblx0XHR9XG5cdFx0aWYgKGhhc2hJbmRleCA+IC0xKSB7XG5cdFx0XHR2YXIgaGFzaFBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcocGF0aC5zbGljZShoYXNoSW5kZXggKyAxKSlcblx0XHRcdGZvciAodmFyIGtleTQgaW4gaGFzaFBhcmFtcykgaGFzaERhdGFba2V5NF0gPSBoYXNoUGFyYW1zW2tleTRdXG5cdFx0fVxuXHRcdHJldHVybiBwYXRoLnNsaWNlKDAsIHBhdGhFbmQpXG5cdH1cblx0dmFyIHJvdXRlciA9IHtwcmVmaXg6IFwiIyFcIn1cblx0cm91dGVyLmdldFBhdGggPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHlwZTIgPSByb3V0ZXIucHJlZml4LmNoYXJBdCgwKVxuXHRcdHN3aXRjaCAodHlwZTIpIHtcblx0XHRcdGNhc2UgXCIjXCI6IHJldHVybiBub3JtYWxpemUxKFwiaGFzaFwiKS5zbGljZShyb3V0ZXIucHJlZml4Lmxlbmd0aClcblx0XHRcdGNhc2UgXCI/XCI6IHJldHVybiBub3JtYWxpemUxKFwic2VhcmNoXCIpLnNsaWNlKHJvdXRlci5wcmVmaXgubGVuZ3RoKSArIG5vcm1hbGl6ZTEoXCJoYXNoXCIpXG5cdFx0XHRkZWZhdWx0OiByZXR1cm4gbm9ybWFsaXplMShcInBhdGhuYW1lXCIpLnNsaWNlKHJvdXRlci5wcmVmaXgubGVuZ3RoKSArIG5vcm1hbGl6ZTEoXCJzZWFyY2hcIikgKyBub3JtYWxpemUxKFwiaGFzaFwiKVxuXHRcdH1cblx0fVxuXHRyb3V0ZXIuc2V0UGF0aCA9IGZ1bmN0aW9uKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcblx0XHR2YXIgcXVlcnlEYXRhID0ge30sIGhhc2hEYXRhID0ge31cblx0XHRwYXRoID0gcGFyc2VQYXRoKHBhdGgsIHF1ZXJ5RGF0YSwgaGFzaERhdGEpXG5cdFx0aWYgKGRhdGEgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5NCBpbiBkYXRhKSBxdWVyeURhdGFba2V5NF0gPSBkYXRhW2tleTRdXG5cdFx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKC86KFteXFwvXSspL2csIGZ1bmN0aW9uKG1hdGNoMiwgdG9rZW4pIHtcblx0XHRcdFx0ZGVsZXRlIHF1ZXJ5RGF0YVt0b2tlbl1cblx0XHRcdFx0cmV0dXJuIGRhdGFbdG9rZW5dXG5cdFx0XHR9KVxuXHRcdH1cblx0XHR2YXIgcXVlcnkgPSBidWlsZFF1ZXJ5U3RyaW5nKHF1ZXJ5RGF0YSlcblx0XHRpZiAocXVlcnkpIHBhdGggKz0gXCI/XCIgKyBxdWVyeVxuXHRcdHZhciBoYXNoID0gYnVpbGRRdWVyeVN0cmluZyhoYXNoRGF0YSlcblx0XHRpZiAoaGFzaCkgcGF0aCArPSBcIiNcIiArIGhhc2hcblx0XHRpZiAoc3VwcG9ydHNQdXNoU3RhdGUpIHtcblx0XHRcdHZhciBzdGF0ZSA9IG9wdGlvbnMgPyBvcHRpb25zLnN0YXRlIDogbnVsbFxuXHRcdFx0dmFyIHRpdGxlID0gb3B0aW9ucyA/IG9wdGlvbnMudGl0bGUgOiBudWxsXG5cdFx0XHQkd2luZG93Lm9ucG9wc3RhdGUoKVxuXHRcdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXBsYWNlKSAkd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCB0aXRsZSwgcm91dGVyLnByZWZpeCArIHBhdGgpXG5cdFx0XHRlbHNlICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHRpdGxlLCByb3V0ZXIucHJlZml4ICsgcGF0aClcblx0XHR9XG5cdFx0ZWxzZSAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSByb3V0ZXIucHJlZml4ICsgcGF0aFxuXHR9XG5cdHJvdXRlci5kZWZpbmVSb3V0ZXMgPSBmdW5jdGlvbihyb3V0ZXMsIHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGZ1bmN0aW9uIHJlc29sdmVSb3V0ZSgpIHtcblx0XHRcdHZhciBwYXRoID0gcm91dGVyLmdldFBhdGgoKVxuXHRcdFx0dmFyIHBhcmFtcyA9IHt9XG5cdFx0XHR2YXIgcGF0aG5hbWUgPSBwYXJzZVBhdGgocGF0aCwgcGFyYW1zLCBwYXJhbXMpXG5cdFx0XHR2YXIgc3RhdGUgPSAkd2luZG93Lmhpc3Rvcnkuc3RhdGVcblx0XHRcdGlmIChzdGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGsgaW4gc3RhdGUpIHBhcmFtc1trXSA9IHN0YXRlW2tdXG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciByb3V0ZTAgaW4gcm91dGVzKSB7XG5cdFx0XHRcdHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChcIl5cIiArIHJvdXRlMC5yZXBsYWNlKC86W15cXC9dKz9cXC57M30vZywgXCIoLio/KVwiKS5yZXBsYWNlKC86W15cXC9dKy9nLCBcIihbXlxcXFwvXSspXCIpICsgXCJcXC8/JFwiKVxuXHRcdFx0XHRpZiAobWF0Y2hlci50ZXN0KHBhdGhuYW1lKSkge1xuXHRcdFx0XHRcdHBhdGhuYW1lLnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR2YXIga2V5cyA9IHJvdXRlMC5tYXRjaCgvOlteXFwvXSsvZykgfHwgW11cblx0XHRcdFx0XHRcdHZhciB2YWx1ZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgLTIpXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0cGFyYW1zW2tleXNbaV0ucmVwbGFjZSgvOnxcXC4vZywgXCJcIildID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlc1tpXSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJlc29sdmUocm91dGVzW3JvdXRlMF0sIHBhcmFtcywgcGF0aCwgcm91dGUwKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlamVjdChwYXRoLCBwYXJhbXMpXG5cdFx0fVxuXHRcdGlmIChzdXBwb3J0c1B1c2hTdGF0ZSkgJHdpbmRvdy5vbnBvcHN0YXRlID0gZGVib3VuY2VBc3luYyhyZXNvbHZlUm91dGUpXG5cdFx0ZWxzZSBpZiAocm91dGVyLnByZWZpeC5jaGFyQXQoMCkgPT09IFwiI1wiKSAkd2luZG93Lm9uaGFzaGNoYW5nZSA9IHJlc29sdmVSb3V0ZVxuXHRcdHJlc29sdmVSb3V0ZSgpXG5cdH1cblx0cmV0dXJuIHJvdXRlclxufVxudmFyIF8yMCA9IGZ1bmN0aW9uKCR3aW5kb3csIHJlZHJhd1NlcnZpY2UwKSB7XG5cdHZhciByb3V0ZVNlcnZpY2UgPSBjb3JlUm91dGVyKCR3aW5kb3cpXG5cdHZhciBpZGVudGl0eSA9IGZ1bmN0aW9uKHYpIHtyZXR1cm4gdn1cblx0dmFyIHJlbmRlcjEsIGNvbXBvbmVudCwgYXR0cnMzLCBjdXJyZW50UGF0aCwgbGFzdFVwZGF0ZVxuXHR2YXIgcm91dGUgPSBmdW5jdGlvbihyb290LCBkZWZhdWx0Um91dGUsIHJvdXRlcykge1xuXHRcdGlmIChyb290ID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgdGhhdCB3YXMgcGFzc2VkIHRvIGBtLnJvdXRlYCBpcyBub3QgdW5kZWZpbmVkXCIpXG5cdFx0dmFyIHJ1bjEgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChyZW5kZXIxICE9IG51bGwpIHJlZHJhd1NlcnZpY2UwLnJlbmRlcihyb290LCByZW5kZXIxKFZub2RlKGNvbXBvbmVudCwgYXR0cnMzLmtleSwgYXR0cnMzKSkpXG5cdFx0fVxuXHRcdHZhciBiYWlsID0gZnVuY3Rpb24ocGF0aCkge1xuXHRcdFx0aWYgKHBhdGggIT09IGRlZmF1bHRSb3V0ZSkgcm91dGVTZXJ2aWNlLnNldFBhdGgoZGVmYXVsdFJvdXRlLCBudWxsLCB7cmVwbGFjZTogdHJ1ZX0pXG5cdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZXNvbHZlIGRlZmF1bHQgcm91dGUgXCIgKyBkZWZhdWx0Um91dGUpXG5cdFx0fVxuXHRcdHJvdXRlU2VydmljZS5kZWZpbmVSb3V0ZXMocm91dGVzLCBmdW5jdGlvbihwYXlsb2FkLCBwYXJhbXMsIHBhdGgpIHtcblx0XHRcdHZhciB1cGRhdGUgPSBsYXN0VXBkYXRlID0gZnVuY3Rpb24ocm91dGVSZXNvbHZlciwgY29tcCkge1xuXHRcdFx0XHRpZiAodXBkYXRlICE9PSBsYXN0VXBkYXRlKSByZXR1cm5cblx0XHRcdFx0Y29tcG9uZW50ID0gY29tcCAhPSBudWxsICYmICh0eXBlb2YgY29tcC52aWV3ID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIGNvbXAgPT09IFwiZnVuY3Rpb25cIik/IGNvbXAgOiBcImRpdlwiXG5cdFx0XHRcdGF0dHJzMyA9IHBhcmFtcywgY3VycmVudFBhdGggPSBwYXRoLCBsYXN0VXBkYXRlID0gbnVsbFxuXHRcdFx0XHRyZW5kZXIxID0gKHJvdXRlUmVzb2x2ZXIucmVuZGVyIHx8IGlkZW50aXR5KS5iaW5kKHJvdXRlUmVzb2x2ZXIpXG5cdFx0XHRcdHJ1bjEoKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHBheWxvYWQudmlldyB8fCB0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB1cGRhdGUoe30sIHBheWxvYWQpXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKHBheWxvYWQub25tYXRjaCkge1xuXHRcdFx0XHRcdFByb21pc2UucmVzb2x2ZShwYXlsb2FkLm9ubWF0Y2gocGFyYW1zLCBwYXRoKSkudGhlbihmdW5jdGlvbihyZXNvbHZlZCkge1xuXHRcdFx0XHRcdFx0dXBkYXRlKHBheWxvYWQsIHJlc29sdmVkKVxuXHRcdFx0XHRcdH0sIGJhaWwpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB1cGRhdGUocGF5bG9hZCwgXCJkaXZcIilcblx0XHRcdH1cblx0XHR9LCBiYWlsKVxuXHRcdHJlZHJhd1NlcnZpY2UwLnN1YnNjcmliZShyb290LCBydW4xKVxuXHR9XG5cdHJvdXRlLnNldCA9IGZ1bmN0aW9uKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcblx0XHRpZiAobGFzdFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXHRcdFx0b3B0aW9ucy5yZXBsYWNlID0gdHJ1ZVxuXHRcdH1cblx0XHRsYXN0VXBkYXRlID0gbnVsbFxuXHRcdHJvdXRlU2VydmljZS5zZXRQYXRoKHBhdGgsIGRhdGEsIG9wdGlvbnMpXG5cdH1cblx0cm91dGUuZ2V0ID0gZnVuY3Rpb24oKSB7cmV0dXJuIGN1cnJlbnRQYXRofVxuXHRyb3V0ZS5wcmVmaXggPSBmdW5jdGlvbihwcmVmaXgwKSB7cm91dGVTZXJ2aWNlLnByZWZpeCA9IHByZWZpeDB9XG5cdHJvdXRlLmxpbmsgPSBmdW5jdGlvbih2bm9kZTEpIHtcblx0XHR2bm9kZTEuZG9tLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcm91dGVTZXJ2aWNlLnByZWZpeCArIHZub2RlMS5hdHRycy5ocmVmKVxuXHRcdHZub2RlMS5kb20ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUuc2hpZnRLZXkgfHwgZS53aGljaCA9PT0gMikgcmV0dXJuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGUucmVkcmF3ID0gZmFsc2Vcblx0XHRcdHZhciBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG5cdFx0XHRpZiAoaHJlZi5pbmRleE9mKHJvdXRlU2VydmljZS5wcmVmaXgpID09PSAwKSBocmVmID0gaHJlZi5zbGljZShyb3V0ZVNlcnZpY2UucHJlZml4Lmxlbmd0aClcblx0XHRcdHJvdXRlLnNldChocmVmLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcblx0XHR9XG5cdH1cblx0cm91dGUucGFyYW0gPSBmdW5jdGlvbihrZXkzKSB7XG5cdFx0aWYodHlwZW9mIGF0dHJzMyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Yga2V5MyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGF0dHJzM1trZXkzXVxuXHRcdHJldHVybiBhdHRyczNcblx0fVxuXHRyZXR1cm4gcm91dGVcbn1cbm0ucm91dGUgPSBfMjAod2luZG93LCByZWRyYXdTZXJ2aWNlKVxubS53aXRoQXR0ciA9IGZ1bmN0aW9uKGF0dHJOYW1lLCBjYWxsYmFjazEsIGNvbnRleHQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGUpIHtcblx0XHRjYWxsYmFjazEuY2FsbChjb250ZXh0IHx8IHRoaXMsIGF0dHJOYW1lIGluIGUuY3VycmVudFRhcmdldCA/IGUuY3VycmVudFRhcmdldFthdHRyTmFtZV0gOiBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSlcblx0fVxufVxudmFyIF8yOCA9IGNvcmVSZW5kZXJlcih3aW5kb3cpXG5tLnJlbmRlciA9IF8yOC5yZW5kZXJcbm0ucmVkcmF3ID0gcmVkcmF3U2VydmljZS5yZWRyYXdcbm0ucmVxdWVzdCA9IHJlcXVlc3RTZXJ2aWNlLnJlcXVlc3Rcbm0uanNvbnAgPSByZXF1ZXN0U2VydmljZS5qc29ucFxubS5wYXJzZVF1ZXJ5U3RyaW5nID0gcGFyc2VRdWVyeVN0cmluZ1xubS5idWlsZFF1ZXJ5U3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZ1xubS52ZXJzaW9uID0gXCIxLjEuM1wiXG5tLnZub2RlID0gVm5vZGVcbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSBtb2R1bGVbXCJleHBvcnRzXCJdID0gbVxuZWxzZSB3aW5kb3cubSA9IG1cbn0oKSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL21pdGhyaWwuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UsIG5vLXByb2Nlc3MtZXhpdCAqL1xuXCJ1c2Ugc3RyaWN0XCJcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgZnVuY3Rpb24gaW5pdChuYW1lKSB7XG5cdHZhciBzcGVjID0ge30sIHN1YmplY3RzID0gW10sIHJlc3VsdHMsIG9ubHkgPSBudWxsLCBjdHggPSBzcGVjLCBzdGFydCwgc3RhY2sgPSAwLCBuZXh0VGlja2lzaCwgaGFzUHJvY2VzcyA9IHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiLCBoYXNPd24gPSAoe30pLmhhc093blByb3BlcnR5XG5cblx0aWYgKG5hbWUgIT0gbnVsbCkgc3BlY1tuYW1lXSA9IGN0eCA9IHt9XG5cblx0ZnVuY3Rpb24gbyhzdWJqZWN0LCBwcmVkaWNhdGUpIHtcblx0XHRpZiAocHJlZGljYXRlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmIChyZXN1bHRzID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkFzc2VydGlvbnMgc2hvdWxkIG5vdCBvY2N1ciBvdXRzaWRlIHRlc3QgZGVmaW5pdGlvbnNcIilcblx0XHRcdHJldHVybiBuZXcgQXNzZXJ0KHN1YmplY3QpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKHJlc3VsdHMgPT0gbnVsbCkge1xuXHRcdFx0Y3R4W3VuaXF1ZShzdWJqZWN0KV0gPSBwcmVkaWNhdGVcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGVzdCBkZWZpbml0aW9uIHNob3VsZG4ndCBiZSBuZXN0ZWQuIFRvIGdyb3VwIHRlc3RzIHVzZSBgby5zcGVjKClgXCIpXG5cdFx0fVxuXHR9XG5cdG8uYmVmb3JlID0gaG9vayhcIl9fYmVmb3JlXCIpXG5cdG8uYWZ0ZXIgPSBob29rKFwiX19hZnRlclwiKVxuXHRvLmJlZm9yZUVhY2ggPSBob29rKFwiX19iZWZvcmVFYWNoXCIpXG5cdG8uYWZ0ZXJFYWNoID0gaG9vayhcIl9fYWZ0ZXJFYWNoXCIpXG5cdG8ubmV3ID0gaW5pdFxuXHRvLnNwZWMgPSBmdW5jdGlvbihzdWJqZWN0LCBwcmVkaWNhdGUpIHtcblx0XHR2YXIgcGFyZW50ID0gY3R4XG5cdFx0Y3R4ID0gY3R4W3VuaXF1ZShzdWJqZWN0KV0gPSB7fVxuXHRcdHByZWRpY2F0ZSgpXG5cdFx0Y3R4ID0gcGFyZW50XG5cdH1cblx0by5vbmx5ID0gZnVuY3Rpb24oc3ViamVjdCwgcHJlZGljYXRlLCBzaWxlbnQpIHtcblx0XHRpZiAoIXNpbGVudCkgY29uc29sZS5sb2coaGlnaGxpZ2h0KFwiLyFcXFxcIFdBUk5JTkcgLyFcXFxcIG8ub25seSgpIG1vZGVcIikpXG5cdFx0byhzdWJqZWN0LCBvbmx5ID0gcHJlZGljYXRlKVxuXHR9XG5cdG8uc3B5ID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgc3B5ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRzcHkudGhpcyA9IHRoaXNcblx0XHRcdHNweS5hcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cdFx0XHRzcHkuY2FsbENvdW50KytcblxuXHRcdFx0aWYgKGZuKSByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXHRcdH1cblx0XHRpZiAoZm4pXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzcHksIHtcblx0XHRcdFx0bGVuZ3RoOiB7dmFsdWU6IGZuLmxlbmd0aH0sXG5cdFx0XHRcdG5hbWU6IHt2YWx1ZTogZm4ubmFtZX1cblx0XHRcdH0pXG5cdFx0c3B5LmFyZ3MgPSBbXVxuXHRcdHNweS5jYWxsQ291bnQgPSAwXG5cdFx0cmV0dXJuIHNweVxuXHR9XG5cdG8ucnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0cmVzdWx0cyA9IFtdXG5cdFx0c3RhcnQgPSBuZXcgRGF0ZVxuXHRcdHRlc3Qoc3BlYywgW10sIFtdLCByZXBvcnQpXG5cblx0XHRmdW5jdGlvbiB0ZXN0KHNwZWMsIHByZSwgcG9zdCwgZmluYWxpemUpIHtcblx0XHRcdHByZSA9IFtdLmNvbmNhdChwcmUsIHNwZWNbXCJfX2JlZm9yZUVhY2hcIl0gfHwgW10pXG5cdFx0XHRwb3N0ID0gW10uY29uY2F0KHNwZWNbXCJfX2FmdGVyRWFjaFwiXSB8fCBbXSwgcG9zdClcblx0XHRcdHNlcmllcyhbXS5jb25jYXQoc3BlY1tcIl9fYmVmb3JlXCJdIHx8IFtdLCBPYmplY3Qua2V5cyhzcGVjKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbihkb25lLCB0aW1lb3V0KSB7XG5cdFx0XHRcdFx0dGltZW91dChJbmZpbml0eSlcblxuXHRcdFx0XHRcdGlmIChrZXkuc2xpY2UoMCwgMikgPT09IFwiX19cIikgcmV0dXJuIGRvbmUoKVxuXHRcdFx0XHRcdGlmIChvbmx5ICE9PSBudWxsICYmIHNwZWNba2V5XSAhPT0gb25seSAmJiB0eXBlb2Ygb25seSA9PT0gdHlwZW9mIHNwZWNba2V5XSkgcmV0dXJuIGRvbmUoKVxuXHRcdFx0XHRcdHN1YmplY3RzLnB1c2goa2V5KVxuXHRcdFx0XHRcdHZhciB0eXBlID0gdHlwZW9mIHNwZWNba2V5XVxuXHRcdFx0XHRcdGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB0ZXN0KHNwZWNba2V5XSwgcHJlLCBwb3N0LCBwb3ApXG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIikgc2VyaWVzKFtdLmNvbmNhdChwcmUsIHNwZWNba2V5XSwgcG9zdCwgcG9wKSlcblxuXHRcdFx0XHRcdGZ1bmN0aW9uIHBvcCgpIHtcblx0XHRcdFx0XHRcdHN1YmplY3RzLnBvcCgpXG5cdFx0XHRcdFx0XHRkb25lKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pLCBzcGVjW1wiX19hZnRlclwiXSB8fCBbXSwgZmluYWxpemUpKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNlcmllcyhmbnMpIHtcblx0XHRcdHZhciBjdXJzb3IgPSAwXG5cdFx0XHRuZXh0KClcblxuXHRcdFx0ZnVuY3Rpb24gbmV4dCgpIHtcblx0XHRcdFx0aWYgKGN1cnNvciA9PT0gZm5zLmxlbmd0aCkgcmV0dXJuXG5cblx0XHRcdFx0dmFyIGZuID0gZm5zW2N1cnNvcisrXVxuXHRcdFx0XHRpZiAoZm4ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHZhciB0aW1lb3V0ID0gMCwgZGVsYXkgPSAyMDAsIHMgPSBuZXcgRGF0ZVxuXHRcdFx0XHRcdHZhciBpc0RvbmUgPSBmYWxzZVxuXHRcdFx0XHRcdHZhciBib2R5ID0gZm4udG9TdHJpbmcoKVxuXHRcdFx0XHRcdHZhciBhcmcgPSAoYm9keS5tYXRjaCgvXFwoKFtcXHckXSspLykgfHwgYm9keS5tYXRjaCgvKFtcXHckXSspXFxzKj0+LykgfHwgW10pLnBvcCgpXG5cdFx0XHRcdFx0aWYgKGJvZHkuaW5kZXhPZihhcmcpID09PSBib2R5Lmxhc3RJbmRleE9mKGFyZykpIHRocm93IG5ldyBFcnJvcihcImBcIiArIGFyZyArIFwiKClgIHNob3VsZCBiZSBjYWxsZWQgYXQgbGVhc3Qgb25jZVwiKVxuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRmbihmdW5jdGlvbiBkb25lKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGltZW91dCA9IGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXHRcdFx0XHRcdFx0XHRcdGlmIChkZWxheSAhPT0gSW5maW5pdHkpIHJlY29yZChudWxsKVxuXHRcdFx0XHRcdFx0XHRcdGlmICghaXNEb25lKSBuZXh0KClcblx0XHRcdFx0XHRcdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcImBcIiArIGFyZyArIFwiKClgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbmNlXCIpXG5cdFx0XHRcdFx0XHRcdFx0aXNEb25lID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2UgY29uc29sZS5sb2coXCIjIGVsYXBzZWQ6IFwiICsgTWF0aC5yb3VuZChuZXcgRGF0ZSAtIHMpICsgXCJtcywgZXhwZWN0ZWQgdW5kZXIgXCIgKyBkZWxheSArIFwibXNcIilcblx0XHRcdFx0XHRcdH0sIGZ1bmN0aW9uKHQpIHtkZWxheSA9IHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmVjb3JkKGUubWVzc2FnZSwgZSlcblx0XHRcdFx0XHRcdHN1YmplY3RzLnBvcCgpXG5cdFx0XHRcdFx0XHRuZXh0KClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRpbWVvdXQgPT09IDApIHtcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR0aW1lb3V0ID0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRcdHJlY29yZChcImFzeW5jIHRlc3QgdGltZWQgb3V0XCIpXG5cdFx0XHRcdFx0XHRcdG5leHQoKVxuXHRcdFx0XHRcdFx0fSwgTWF0aC5taW4oZGVsYXksIDIxNDc0ODM2NDcpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRmbigpXG5cdFx0XHRcdFx0bmV4dFRpY2tpc2gobmV4dClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1bmlxdWUoc3ViamVjdCkge1xuXHRcdGlmIChoYXNPd24uY2FsbChjdHgsIHN1YmplY3QpKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJBIHRlc3Qgb3IgYSBzcGVjIG5hbWVkIGBcIiArIHN1YmplY3QgKyBcImAgd2FzIGFscmVhZHkgZGVmaW5lZFwiKVxuXHRcdFx0d2hpbGUgKGhhc093bi5jYWxsKGN0eCwgc3ViamVjdCkpIHN1YmplY3QgKz0gXCIqXCJcblx0XHR9XG5cdFx0cmV0dXJuIHN1YmplY3Rcblx0fVxuXHRmdW5jdGlvbiBob29rKG5hbWUpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24ocHJlZGljYXRlKSB7XG5cdFx0XHRpZiAoY3R4W25hbWVdKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGhvb2sgc2hvdWxkIGJlIGRlZmluZWQgb3V0c2lkZSBvZiBhIGxvb3Agb3IgaW5zaWRlIGEgbmVzdGVkIHRlc3QgZ3JvdXA6XFxuXCIgKyBwcmVkaWNhdGUpXG5cdFx0XHRjdHhbbmFtZV0gPSBwcmVkaWNhdGVcblx0XHR9XG5cdH1cblxuXHRkZWZpbmUoXCJlcXVhbHNcIiwgXCJzaG91bGQgZXF1YWxcIiwgZnVuY3Rpb24oYSwgYikge3JldHVybiBhID09PSBifSlcblx0ZGVmaW5lKFwibm90RXF1YWxzXCIsIFwic2hvdWxkIG5vdCBlcXVhbFwiLCBmdW5jdGlvbihhLCBiKSB7cmV0dXJuIGEgIT09IGJ9KVxuXHRkZWZpbmUoXCJkZWVwRXF1YWxzXCIsIFwic2hvdWxkIGRlZXAgZXF1YWxcIiwgZGVlcEVxdWFsKVxuXHRkZWZpbmUoXCJub3REZWVwRXF1YWxzXCIsIFwic2hvdWxkIG5vdCBkZWVwIGVxdWFsXCIsIGZ1bmN0aW9uKGEsIGIpIHtyZXR1cm4gIWRlZXBFcXVhbChhLCBiKX0pXG5cblx0ZnVuY3Rpb24gaXNBcmd1bWVudHMoYSkge1xuXHRcdGlmIChcImNhbGxlZVwiIGluIGEpIHtcblx0XHRcdGZvciAodmFyIGkgaW4gYSkgaWYgKGkgPT09IFwiY2FsbGVlXCIpIHJldHVybiBmYWxzZVxuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcblx0XHRpZiAoYSA9PT0gYikgcmV0dXJuIHRydWVcblx0XHRpZiAoYSA9PT0gbnVsbCBeIGIgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkIF4gYiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2Vcblx0XHRpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGIgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdHZhciBhSXNBcmdzID0gaXNBcmd1bWVudHMoYSksIGJJc0FyZ3MgPSBpc0FyZ3VtZW50cyhiKVxuXHRcdFx0aWYgKGEuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiBiLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgIWFJc0FyZ3MgJiYgIWJJc0FyZ3MpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBhKSB7XG5cdFx0XHRcdFx0aWYgKCghKGkgaW4gYikpIHx8ICFkZWVwRXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gYikge1xuXHRcdFx0XHRcdGlmICghKGkgaW4gYSkpIHJldHVybiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9XG5cdFx0XHRpZiAoYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIChhIGluc3RhbmNlb2YgQXJyYXkgJiYgYiBpbnN0YW5jZW9mIEFycmF5IHx8IGFJc0FyZ3MgJiYgYklzQXJncykpIHtcblx0XHRcdFx0dmFyIGFLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSksIGJLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYilcblx0XHRcdFx0aWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSByZXR1cm4gZmFsc2Vcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhS2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICghaGFzT3duLmNhbGwoYiwgYUtleXNbaV0pIHx8ICFkZWVwRXF1YWwoYVthS2V5c1tpXV0sIGJbYUtleXNbaV1dKSkgcmV0dXJuIGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1cblx0XHRcdGlmIChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuXHRcdFx0aWYgKHR5cGVvZiBCdWZmZXIgPT09IFwiZnVuY3Rpb25cIiAmJiBhIGluc3RhbmNlb2YgQnVmZmVyICYmIGIgaW5zdGFuY2VvZiBCdWZmZXIpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9XG5cdFx0XHRpZiAoYS52YWx1ZU9mKCkgPT09IGIudmFsdWVPZigpKSByZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdGZ1bmN0aW9uIEFzc2VydCh2YWx1ZSkge3RoaXMudmFsdWUgPSB2YWx1ZX1cblx0ZnVuY3Rpb24gZGVmaW5lKG5hbWUsIHZlcmIsIGNvbXBhcmUpIHtcblx0XHRBc3NlcnQucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gYXNzZXJ0KHZhbHVlKSB7XG5cdFx0XHRpZiAoY29tcGFyZSh0aGlzLnZhbHVlLCB2YWx1ZSkpIHJlY29yZChudWxsKVxuXHRcdFx0ZWxzZSByZWNvcmQoc2VyaWFsaXplKHRoaXMudmFsdWUpICsgXCJcXG5cIiArIHZlcmIgKyBcIlxcblwiICsgc2VyaWFsaXplKHZhbHVlKSlcblx0XHRcdHJldHVybiBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoIC0gMV1cblx0XHRcdFx0cmVzdWx0Lm1lc3NhZ2UgPSBtZXNzYWdlICsgXCJcXG5cXG5cIiArIHJlc3VsdC5tZXNzYWdlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlY29yZChtZXNzYWdlLCBlcnJvcikge1xuXHRcdHZhciByZXN1bHQgPSB7cGFzczogbWVzc2FnZSA9PT0gbnVsbH1cblx0XHRpZiAocmVzdWx0LnBhc3MgPT09IGZhbHNlKSB7XG5cdFx0XHRpZiAoZXJyb3IgPT0gbnVsbCkge1xuXHRcdFx0XHRlcnJvciA9IG5ldyBFcnJvclxuXHRcdFx0XHRpZiAoZXJyb3Iuc3RhY2sgPT09IHVuZGVmaW5lZCkgbmV3IGZ1bmN0aW9uKCkge3RyeSB7dGhyb3cgZXJyb3J9IGNhdGNoIChlKSB7ZXJyb3IgPSBlfX1cblx0XHRcdH1cblx0XHRcdHJlc3VsdC5jb250ZXh0ID0gc3ViamVjdHMuam9pbihcIiA+IFwiKVxuXHRcdFx0cmVzdWx0Lm1lc3NhZ2UgPSBtZXNzYWdlXG5cdFx0XHRyZXN1bHQuZXJyb3IgPSBlcnJvci5zdGFja1xuXHRcdH1cblx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KVxuXHR9XG5cdGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIFN0cmluZyh2YWx1ZSlcblx0XHRlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHZhbHVlLm5hbWUgfHwgXCI8YW5vbnltb3VzIGZ1bmN0aW9uPlwiXG5cdFx0dHJ5IHtyZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpfSBjYXRjaCAoZSkge3JldHVybiBTdHJpbmcodmFsdWUpfVxuXHR9XG5cdGZ1bmN0aW9uIGhpZ2hsaWdodChtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIGhhc1Byb2Nlc3MgPyBcIlxceDFiWzMxbVwiICsgbWVzc2FnZSArIFwiXFx4MWJbMG1cIiA6IFwiJWNcIiArIG1lc3NhZ2UgKyBcIiVjIFwiXG5cdH1cblxuXHRmdW5jdGlvbiByZXBvcnQoKSB7XG5cdFx0dmFyIHN0YXR1cyA9IDBcblx0XHRmb3IgKHZhciBpID0gMCwgcjsgciA9IHJlc3VsdHNbaV07IGkrKykge1xuXHRcdFx0aWYgKCFyLnBhc3MpIHtcblx0XHRcdFx0dmFyIHN0YWNrVHJhY2UgPSByLmVycm9yLm1hdGNoKC9eKD86KD8hRXJyb3J8W1xcL1xcXFxdb3NwZWNbXFwvXFxcXF1vc3BlY1xcLmpzKS4pKiQvbSlcblx0XHRcdFx0Y29uc29sZS5lcnJvcihyLmNvbnRleHQgKyBcIjpcXG5cIiArIGhpZ2hsaWdodChyLm1lc3NhZ2UpICsgKHN0YWNrVHJhY2UgPyBcIlxcblxcblwiICsgc3RhY2tUcmFjZSArIFwiXFxuXFxuXCIgOiBcIlwiKSwgaGFzUHJvY2VzcyA/IFwiXCIgOiBcImNvbG9yOnJlZFwiLCBoYXNQcm9jZXNzID8gXCJcIiA6IFwiY29sb3I6YmxhY2tcIilcblx0XHRcdFx0c3RhdHVzID0gMVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhcblx0XHRcdChuYW1lID8gbmFtZSArIFwiOiBcIiA6IFwiXCIpICtcblx0XHRcdHJlc3VsdHMubGVuZ3RoICsgXCIgYXNzZXJ0aW9ucyBjb21wbGV0ZWQgaW4gXCIgKyBNYXRoLnJvdW5kKG5ldyBEYXRlIC0gc3RhcnQpICsgXCJtcywgXCIgK1xuXHRcdFx0XCJvZiB3aGljaCBcIiArIHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uKHJlc3VsdCl7cmV0dXJuIHJlc3VsdC5lcnJvcn0pLmxlbmd0aCArIFwiIGZhaWxlZFwiXG5cdFx0KVxuXHRcdGlmIChoYXNQcm9jZXNzICYmIHN0YXR1cyA9PT0gMSkgcHJvY2Vzcy5leGl0KDEpXG5cdH1cblxuXHRpZihoYXNQcm9jZXNzKSB7XG5cdFx0bmV4dFRpY2tpc2ggPSBwcm9jZXNzLm5leHRUaWNrXG5cdH0gZWxzZSB7XG5cdFx0bmV4dFRpY2tpc2ggPSBmdW5jdGlvbiBmYWtlRmFzdE5leHRUaWNrKG5leHQpIHtcblx0XHRcdGlmIChzdGFjaysrIDwgNTAwMCkgbmV4dCgpXG5cdFx0XHRlbHNlIHNldFRpbWVvdXQobmV4dCwgc3RhY2sgPSAwKVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvb3NwZWMvb3NwZWMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyaW5nKSB7XG5cdGlmIChzdHJpbmcgPT09IFwiXCIgfHwgc3RyaW5nID09IG51bGwpIHJldHVybiB7fVxuXHRpZiAoc3RyaW5nLmNoYXJBdCgwKSA9PT0gXCI/XCIpIHN0cmluZyA9IHN0cmluZy5zbGljZSgxKVxuXG5cdHZhciBlbnRyaWVzID0gc3RyaW5nLnNwbGl0KFwiJlwiKSwgZGF0YSA9IHt9LCBjb3VudGVycyA9IHt9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBlbnRyeSA9IGVudHJpZXNbaV0uc3BsaXQoXCI9XCIpXG5cdFx0dmFyIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlbnRyeVswXSlcblx0XHR2YXIgdmFsdWUgPSBlbnRyeS5sZW5ndGggPT09IDIgPyBkZWNvZGVVUklDb21wb25lbnQoZW50cnlbMV0pIDogXCJcIlxuXG5cdFx0aWYgKHZhbHVlID09PSBcInRydWVcIikgdmFsdWUgPSB0cnVlXG5cdFx0ZWxzZSBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikgdmFsdWUgPSBmYWxzZVxuXG5cdFx0dmFyIGxldmVscyA9IGtleS5zcGxpdCgvXFxdXFxbP3xcXFsvKVxuXHRcdHZhciBjdXJzb3IgPSBkYXRhXG5cdFx0aWYgKGtleS5pbmRleE9mKFwiW1wiKSA+IC0xKSBsZXZlbHMucG9wKClcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxldmVscy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGxldmVsID0gbGV2ZWxzW2pdLCBuZXh0TGV2ZWwgPSBsZXZlbHNbaiArIDFdXG5cdFx0XHR2YXIgaXNOdW1iZXIgPSBuZXh0TGV2ZWwgPT0gXCJcIiB8fCAhaXNOYU4ocGFyc2VJbnQobmV4dExldmVsLCAxMCkpXG5cdFx0XHR2YXIgaXNWYWx1ZSA9IGogPT09IGxldmVscy5sZW5ndGggLSAxXG5cdFx0XHRpZiAobGV2ZWwgPT09IFwiXCIpIHtcblx0XHRcdFx0dmFyIGtleSA9IGxldmVscy5zbGljZSgwLCBqKS5qb2luKClcblx0XHRcdFx0aWYgKGNvdW50ZXJzW2tleV0gPT0gbnVsbCkgY291bnRlcnNba2V5XSA9IDBcblx0XHRcdFx0bGV2ZWwgPSBjb3VudGVyc1trZXldKytcblx0XHRcdH1cblx0XHRcdGlmIChjdXJzb3JbbGV2ZWxdID09IG51bGwpIHtcblx0XHRcdFx0Y3Vyc29yW2xldmVsXSA9IGlzVmFsdWUgPyB2YWx1ZSA6IGlzTnVtYmVyID8gW10gOiB7fVxuXHRcdFx0fVxuXHRcdFx0Y3Vyc29yID0gY3Vyc29yW2xldmVsXVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGF0YVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL3F1ZXJ5c3RyaW5nL3BhcnNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcHVzaFN0YXRlTW9jayA9IHJlcXVpcmUoXCIuL3B1c2hTdGF0ZU1vY2tcIilcbnZhciBkb21Nb2NrID0gcmVxdWlyZShcIi4vZG9tTW9ja1wiKVxudmFyIHhock1vY2sgPSByZXF1aXJlKFwiLi94aHJNb2NrXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZW52KSB7XG5cdGVudiA9IGVudiB8fCB7fVxuXHR2YXIgJHdpbmRvdyA9IGVudi53aW5kb3cgPSB7fVxuXG5cdHZhciBkb20gPSBkb21Nb2NrKClcblx0dmFyIHhociA9IHhock1vY2soKVxuXHRmb3IgKHZhciBrZXkgaW4gZG9tKSBpZiAoISR3aW5kb3dba2V5XSkgJHdpbmRvd1trZXldID0gZG9tW2tleV1cblx0Zm9yICh2YXIga2V5IGluIHhocikgaWYgKCEkd2luZG93W2tleV0pICR3aW5kb3dba2V5XSA9IHhocltrZXldXG5cdHB1c2hTdGF0ZU1vY2soZW52KVxuXG5cdHJldHVybiAkd2luZG93XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL3Rlc3QtdXRpbHMvYnJvd3Nlck1vY2suanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiXG5cbi8qXG5Lbm93biBsaW1pdGF0aW9uczpcblxuLSBgb3B0aW9uLnNlbGVjdGVkYCBjYW4ndCBiZSBzZXQvcmVhZCB3aGVuIHRoZSBvcHRpb24gZG9lc24ndCBoYXZlIGEgYHNlbGVjdGAgcGFyZW50XG4tIGBlbGVtZW50LmF0dHJpYnV0ZXNgIGlzIGp1c3QgYSBtYXAgb2YgYXR0cmlidXRlIG5hbWVzID0+IEF0dHIgb2JqZWN0cyBzdHVic1xuLSAuLi5cblxuKi9cblxuLypcbm9wdGlvbnM6XG4tIHNweTooZjogRnVuY3Rpb24pID0+IEZ1bmN0aW9uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblx0dmFyIHNweSA9IG9wdGlvbnMuc3B5IHx8IGZ1bmN0aW9uKGYpe3JldHVybiBmfVxuXHR2YXIgc3B5bWFwID0gW11cblx0ZnVuY3Rpb24gcmVnaXN0ZXJTcGllcyhlbGVtZW50LCBzcGllcykge1xuXHRcdGlmKG9wdGlvbnMuc3B5KSB7XG5cdFx0XHR2YXIgaSA9IHNweW1hcC5pbmRleE9mKGVsZW1lbnQpXG5cdFx0XHRpZiAoaSA9PT0gLTEpIHtcblx0XHRcdFx0c3B5bWFwLnB1c2goZWxlbWVudCwgc3BpZXMpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgZXhpc3RpbmcgPSBzcHltYXBbaSArIDFdXG5cdFx0XHRcdGZvciAodmFyIGsgaW4gc3BpZXMpIGV4aXN0aW5nW2tdID0gc3BpZXNba11cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZ2V0U3BpZXMoZWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50ID09IG51bGwgfHwgdHlwZW9mIGVsZW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgZXhwZWN0ZWRcIilcblx0XHRpZihvcHRpb25zLnNweSkgcmV0dXJuIHNweW1hcFtzcHltYXAuaW5kZXhPZihlbGVtZW50KSArIDFdXG5cdH1cblxuXHRmdW5jdGlvbiBpc01vZGVybkV2ZW50KHR5cGUpIHtcblx0XHRyZXR1cm4gdHlwZSA9PT0gXCJ0cmFuc2l0aW9uc3RhcnRcIiB8fCB0eXBlID09PSBcInRyYW5zaXRpb25lbmRcIiB8fCB0eXBlID09PSBcImFuaW1hdGlvbnN0YXJ0XCIgfHwgdHlwZSA9PT0gXCJhbmltYXRpb25lbmRcIlxuXHR9XG5cdGZ1bmN0aW9uIGFwcGVuZENoaWxkKGNoaWxkKSB7XG5cdFx0dmFyIGFuY2VzdG9yID0gdGhpc1xuXHRcdHdoaWxlIChhbmNlc3RvciAhPT0gY2hpbGQgJiYgYW5jZXN0b3IgIT09IG51bGwpIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZVxuXHRcdGlmIChhbmNlc3RvciA9PT0gY2hpbGQpIHRocm93IG5ldyBFcnJvcihcIk5vZGUgY2Fubm90IGJlIGluc2VydGVkIGF0IHRoZSBzcGVjaWZpZWQgcG9pbnQgaW4gdGhlIGhpZXJhcmNoeVwiKVxuXG5cdFx0aWYgKGNoaWxkLm5vZGVUeXBlID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IGlzIG5vdCBhIERPTSBlbGVtZW50XCIpXG5cblx0XHR2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZClcblx0XHRpZiAoaW5kZXggPiAtMSkgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSlcblx0XHRpZiAoY2hpbGQubm9kZVR5cGUgPT09IDExKSB7XG5cdFx0XHR3aGlsZSAoY2hpbGQuZmlyc3RDaGlsZCAhPSBudWxsKSB0aGlzLmFwcGVuZENoaWxkKGNoaWxkLmZpcnN0Q2hpbGQpXG5cdFx0XHRjaGlsZC5jaGlsZE5vZGVzID0gW11cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZClcblx0XHRcdGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwgJiYgY2hpbGQucGFyZW50Tm9kZSAhPT0gdGhpcykgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZClcblx0XHRcdGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG5cdFx0dmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpXG5cdFx0XHRjaGlsZC5wYXJlbnROb2RlID0gbnVsbFxuXHRcdH1cblx0XHRlbHNlIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAncmVtb3ZlQ2hpbGQnXCIpXG5cdH1cblx0ZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKGNoaWxkLCByZWZlcmVuY2UpIHtcblx0XHR2YXIgYW5jZXN0b3IgPSB0aGlzXG5cdFx0d2hpbGUgKGFuY2VzdG9yICE9PSBjaGlsZCAmJiBhbmNlc3RvciAhPT0gbnVsbCkgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlXG5cdFx0aWYgKGFuY2VzdG9yID09PSBjaGlsZCkgdGhyb3cgbmV3IEVycm9yKFwiTm9kZSBjYW5ub3QgYmUgaW5zZXJ0ZWQgYXQgdGhlIHNwZWNpZmllZCBwb2ludCBpbiB0aGUgaGllcmFyY2h5XCIpXG5cblx0XHRpZiAoY2hpbGQubm9kZVR5cGUgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgaXMgbm90IGEgRE9NIGVsZW1lbnRcIilcblxuXHRcdHZhciByZWZJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZmVyZW5jZSlcblx0XHR2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZClcblx0XHRpZiAocmVmZXJlbmNlICE9PSBudWxsICYmIHJlZkluZGV4IDwgMCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXJndW1lbnRcIilcblx0XHRpZiAoaW5kZXggPiAtMSkgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSlcblx0XHRpZiAocmVmZXJlbmNlID09PSBudWxsKSB0aGlzLmFwcGVuZENoaWxkKGNoaWxkKVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKGNoaWxkLm5vZGVUeXBlID09PSAxMSkge1xuXHRcdFx0XHR0aGlzLmNoaWxkTm9kZXMuc3BsaWNlLmFwcGx5KHRoaXMuY2hpbGROb2RlcywgW3JlZkluZGV4LCAwXS5jb25jYXQoY2hpbGQuY2hpbGROb2RlcykpXG5cdFx0XHRcdHdoaWxlIChjaGlsZC5maXJzdENoaWxkKSB7XG5cdFx0XHRcdFx0dmFyIHN1YmNoaWxkID0gY2hpbGQuZmlyc3RDaGlsZFxuXHRcdFx0XHRcdGNoaWxkLnJlbW92ZUNoaWxkKHN1YmNoaWxkKVxuXHRcdFx0XHRcdHN1YmNoaWxkLnBhcmVudE5vZGUgPSB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGQuY2hpbGROb2RlcyA9IFtdXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5jaGlsZE5vZGVzLnNwbGljZShyZWZJbmRleCwgMCwgY2hpbGQpXG5cdFx0XHRcdGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwgJiYgY2hpbGQucGFyZW50Tm9kZSAhPT0gdGhpcykgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZClcblx0XHRcdFx0Y2hpbGQucGFyZW50Tm9kZSA9IHRoaXNcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcblx0XHRpZiAodGhpcy5hdHRyaWJ1dGVzW25hbWVdID09IG51bGwpIHJldHVybiBudWxsXG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlc1tuYW1lXS52YWx1ZVxuXHR9XG5cdGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuXHRcdC8qZXNsaW50LWRpc2FibGUgbm8taW1wbGljaXQtY29lcmNpb24qL1xuXHRcdC8vIHRoaXMgaXMgdGhlIGNvcnJlY3Qga2luZCBvZiBjb252ZXJzaW9uLCBwYXNzaW5nIGEgU3ltYm9sIHRocm93cyBpbiBicm93c2VycyB0b28uXG5cdFx0dmFyIG5vZGVWYWx1ZSA9IFwiXCIgKyB2YWx1ZVxuXHRcdC8qZXNsaW50LWVuYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cblx0XHR0aGlzLmF0dHJpYnV0ZXNbbmFtZV0gPSB7XG5cdFx0XHRuYW1lc3BhY2VVUkk6IG51bGwsXG5cdFx0XHRnZXQgdmFsdWUoKSB7cmV0dXJuIG5vZGVWYWx1ZX0sXG5cdFx0XHRzZXQgdmFsdWUodmFsdWUpIHtcblx0XHRcdFx0Lyplc2xpbnQtZGlzYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0XHRcdG5vZGVWYWx1ZSA9IFwiXCIgKyB2YWx1ZVxuXHRcdFx0XHQvKmVzbGludC1lbmFibGUgbm8taW1wbGljaXQtY29lcmNpb24qL1xuXHRcdFx0fSxcblx0XHRcdGdldCBub2RlVmFsdWUoKSB7cmV0dXJuIG5vZGVWYWx1ZX0sXG5cdFx0XHRzZXQgbm9kZVZhbHVlKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBzZXRBdHRyaWJ1dGVOUyhucywgbmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSlcblx0XHR0aGlzLmF0dHJpYnV0ZXNbbmFtZV0ubmFtZXNwYWNlVVJJID0gbnNcblx0fVxuXHRmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkge1xuXHRcdGRlbGV0ZSB0aGlzLmF0dHJpYnV0ZXNbbmFtZV1cblx0fVxuXHRmdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkge1xuXHRcdHJldHVybiBuYW1lIGluIHRoaXMuYXR0cmlidXRlc1xuXHR9XG5cdHZhciBkZWNsTGlzdFRva2VuaXplciA9IC87fFwiKD86XFxcXC58W15cIlxcbl0pKlwifCcoPzpcXFxcLnxbXidcXG5dKSonL2dcblx0LyoqXG5cdCAqIFRoaXMgd2lsbCBzcGxpdCBhIHNlbWljb2xvbi1zZXBhcmF0ZWQgQ1NTIGRlY2xhcmF0aW9uIGxpc3QgaW50byBhbiBhcnJheSBvZlxuXHQgKiBpbmRpdmlkdWFsIGRlY2xhcmF0aW9ucywgaWdub3Jpbmcgc2VtaWNvbG9ucyBpbiBzdHJpbmdzLlxuXHQgKlxuXHQgKiBDb21tZW50cyBhcmUgYWxzbyBzdHJpcHBlZC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRlY2xMaXN0XG5cdCAqIEByZXR1cm4ge3N0cmluZ1tdfVxuXHQgKi9cblx0ZnVuY3Rpb24gc3BsaXREZWNsTGlzdChkZWNsTGlzdCkge1xuXHRcdHZhciBpbmRpY2VzID0gW10sIHJlcyA9IFtdLCBtYXRjaFxuXG5cdFx0Ly8gcmVtb3ZlIGNvbW1lbnRzLCBwcmVzZXJ2aW5nIGNvbW1lbnRzIGluIHN0cmluZ3MuXG5cdFx0ZGVjbExpc3QgPSBkZWNsTGlzdC5yZXBsYWNlKFxuXHRcdFx0LyhcIig/OlxcXFwufFteXCJcXG5dKSpcInwnKD86XFxcXC58W14nXFxuXSkqJyl8XFwvXFwqW1xcc1xcU10qP1xcKlxcLy9nLFxuXHRcdFx0ZnVuY3Rpb24obSwgc3RyKXtcblx0XHRcdFx0cmV0dXJuIHN0ciB8fCBcIlwiXG5cdFx0XHR9XG5cdFx0KVxuXHRcdC8qZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24qL1xuXHRcdHdoaWxlIChtYXRjaCA9IGRlY2xMaXN0VG9rZW5pemVyLmV4ZWMoZGVjbExpc3QpKSB7XG5cdFx0XHRpZiAobWF0Y2hbMF0gPT09IFwiO1wiKSBpbmRpY2VzLnB1c2gobWF0Y2guaW5kZXgpXG5cdFx0fVxuXHRcdC8qZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiovXG5cdFx0Zm9yICh2YXIgaSA9IGluZGljZXMubGVuZ3RoOyBpLS07KXtcblx0XHRcdHJlcy51bnNoaWZ0KGRlY2xMaXN0LnNsaWNlKGluZGljZXNbaV0gKyAxKSlcblx0XHRcdGRlY2xMaXN0ID0gZGVjbExpc3Quc2xpY2UoMCwgaW5kaWNlc1tpXSlcblx0XHR9XG5cdFx0cmVzLnVuc2hpZnQoZGVjbExpc3QpXG5cdFx0cmV0dXJuIHJlc1xuXHR9XG5cblx0dmFyIGFjdGl2ZUVsZW1lbnRcblx0dmFyICR3aW5kb3cgPSB7XG5cdFx0ZG9jdW1lbnQ6IHtcblx0XHRcdGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uKHRhZykge1xuXHRcdFx0XHR2YXIgY3NzVGV4dCA9IFwiXCJcblx0XHRcdFx0dmFyIHN0eWxlID0ge31cblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHN0eWxlLCBcImNzc1RleHRcIiwge1xuXHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7cmV0dXJuIGNzc1RleHR9LFxuXHRcdFx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHR2YXIgYnVmID0gW11cblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHN0eWxlKSBzdHlsZVtrZXldID0gXCJcIlxuXHRcdFx0XHRcdFx0XHR2YXIgcnVsZXMgPSBzcGxpdERlY2xMaXN0KHZhbHVlKVxuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJ1bGUgPSBydWxlc1tpXVxuXHRcdFx0XHRcdFx0XHRcdHZhciBjb2xvbkluZGV4ID0gcnVsZS5pbmRleE9mKFwiOlwiKVxuXHRcdFx0XHRcdFx0XHRcdGlmIChjb2xvbkluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciByYXdLZXkgPSBydWxlLnNsaWNlKDAsIGNvbG9uSW5kZXgpLnRyaW0oKVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGtleSA9IHJhd0tleS5yZXBsYWNlKC8tXFxEL2csIGZ1bmN0aW9uKG1hdGNoKSB7cmV0dXJuIG1hdGNoWzFdLnRvVXBwZXJDYXNlKCl9KVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHZhbHVlID0gcnVsZS5zbGljZShjb2xvbkluZGV4ICsgMSkudHJpbSgpXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoa2V5ICE9PSBcImNzc1RleHRcIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZVtrZXldID0gdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnVmLnB1c2gocmF3S2V5ICsgXCI6IFwiICsgdmFsdWUgKyBcIjtcIilcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y3NzVGV4dCA9IGJ1Zi5qb2luKFwiIFwiKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0dmFyIGV2ZW50cyA9IHt9XG5cdFx0XHRcdHZhciBlbGVtZW50ID0ge1xuXHRcdFx0XHRcdG5vZGVUeXBlOiAxLFxuXHRcdFx0XHRcdG5vZGVOYW1lOiB0YWcudG9VcHBlckNhc2UoKSxcblx0XHRcdFx0XHRuYW1lc3BhY2VVUkk6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLFxuXHRcdFx0XHRcdGFwcGVuZENoaWxkOiBhcHBlbmRDaGlsZCxcblx0XHRcdFx0XHRyZW1vdmVDaGlsZDogcmVtb3ZlQ2hpbGQsXG5cdFx0XHRcdFx0aW5zZXJ0QmVmb3JlOiBpbnNlcnRCZWZvcmUsXG5cdFx0XHRcdFx0aGFzQXR0cmlidXRlOiBoYXNBdHRyaWJ1dGUsXG5cdFx0XHRcdFx0Z2V0QXR0cmlidXRlOiBnZXRBdHRyaWJ1dGUsXG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlOiBzZXRBdHRyaWJ1dGUsXG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlTlM6IHNldEF0dHJpYnV0ZU5TLFxuXHRcdFx0XHRcdHJlbW92ZUF0dHJpYnV0ZTogcmVtb3ZlQXR0cmlidXRlLFxuXHRcdFx0XHRcdHBhcmVudE5vZGU6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGROb2RlczogW10sXG5cdFx0XHRcdFx0YXR0cmlidXRlczoge30sXG5cdFx0XHRcdFx0Z2V0IGZpcnN0Q2hpbGQoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdIHx8IG51bGxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGdldCBuZXh0U2libGluZygpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCkgcmV0dXJuIG51bGxcblx0XHRcdFx0XHRcdHZhciBpbmRleCA9IHRoaXMucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmluZGV4T2YodGhpcylcblx0XHRcdFx0XHRcdGlmIChpbmRleCA8IDApIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXJlbnQncyBjaGlsZE5vZGVzIGlzIG91dCBvZiBzeW5jXCIpXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXNbaW5kZXggKyAxXSB8fCBudWxsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXQgdGV4dENvbnRlbnQodmFsdWUpIHtcblx0XHRcdFx0XHRcdHRoaXMuY2hpbGROb2RlcyA9IFtdXG5cdFx0XHRcdFx0XHRpZiAodmFsdWUgIT09IFwiXCIpIHRoaXMuYXBwZW5kQ2hpbGQoJHdpbmRvdy5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXQgaW5uZXJIVE1MKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAodGhpcy5maXJzdENoaWxkKSB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZClcblxuXHRcdFx0XHRcdFx0dmFyIHN0YWNrID0gW3RoaXNdLCBkZXB0aCA9IDAsIHZvaWRFbGVtZW50cyA9IFtcImFyZWFcIiwgXCJiYXNlXCIsIFwiYnJcIiwgXCJjb2xcIiwgXCJjb21tYW5kXCIsIFwiZW1iZWRcIiwgXCJoclwiLCBcImltZ1wiLCBcImlucHV0XCIsIFwia2V5Z2VuXCIsIFwibGlua1wiLCBcIm1ldGFcIiwgXCJwYXJhbVwiLCBcInNvdXJjZVwiLCBcInRyYWNrXCIsIFwid2JyXCJdXG5cdFx0XHRcdFx0XHR2YWx1ZS5yZXBsYWNlKC88KFthLXowLTlcXC1dKz8pKCg/Olxccys/W149XSs/PSg/OlwiW15cIl0qP1wifCdbXiddKj8nfFteXFxzPl0qKSkqPykoXFxzKlxcLyk/Pnw8XFwvKFthLXowLTlcXC1dKz8pPnwoW148XSspL2csIGZ1bmN0aW9uKG1hdGNoLCBzdGFydFRhZywgYXR0cnMsIHNlbGZDbG9zZWQsIGVuZFRhZywgdGV4dCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoc3RhcnRUYWcpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZWxlbWVudCA9ICR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdGFydFRhZylcblx0XHRcdFx0XHRcdFx0XHRhdHRycy5yZXBsYWNlKC9cXHMrPyhbXj1dKz8pPSg/OlwiKFteXCJdKj8pXCJ8JyhbXiddKj8pJ3woW15cXHM+XSopKS9nLCBmdW5jdGlvbihtYXRjaCwga2V5LCBkb3VibGVRdW90ZWQsIHNpbmdsZVF1b3RlZCwgdW5xdW90ZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBrZXlQYXJ0cyA9IGtleS5zcGxpdChcIjpcIilcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBuYW1lID0ga2V5UGFydHMucG9wKClcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBucyA9IGtleVBhcnRzWzBdXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgdmFsdWUgPSBkb3VibGVRdW90ZWQgfHwgc2luZ2xlUXVvdGVkIHx8IHVucXVvdGVkIHx8IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChucyAhPSBudWxsKSBlbGVtZW50LnNldEF0dHJpYnV0ZU5TKG5zLCBuYW1lLCB2YWx1ZSlcblx0XHRcdFx0XHRcdFx0XHRcdGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRzdGFja1tkZXB0aF0uYXBwZW5kQ2hpbGQoZWxlbWVudClcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXNlbGZDbG9zZWQgJiYgdm9pZEVsZW1lbnRzLmluZGV4T2Yoc3RhcnRUYWcudG9Mb3dlckNhc2UoKSkgPCAwKSBzdGFja1srK2RlcHRoXSA9IGVsZW1lbnRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmIChlbmRUYWcpIHtcblx0XHRcdFx0XHRcdFx0XHRkZXB0aC0tXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZSBpZiAodGV4dCkge1xuXHRcdFx0XHRcdFx0XHRcdHN0YWNrW2RlcHRoXS5hcHBlbmRDaGlsZCgkd2luZG93LmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKSAvLyBGSVhNRSBoYW5kbGUgaHRtbCBlbnRpdGllc1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Z2V0IHN0eWxlKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHN0eWxlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXQgc3R5bGUoXyl7XG5cdFx0XHRcdFx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvc3R5bGUjU2V0dGluZ19zdHlsZVxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwic2V0dGluZyBlbGVtZW50LnN0eWxlIGlzIG5vdCBwb3J0YWJsZVwiKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Z2V0IGNsYXNzTmFtZSgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXNbXCJjbGFzc1wiXSA/IHRoaXMuYXR0cmlidXRlc1tcImNsYXNzXCJdLnZhbHVlIDogXCJcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2V0IGNsYXNzTmFtZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMubmFtZXNwYWNlVVJJID09PSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXQgcHJvcGVydHkgY2xhc3NOYW1lIG9mIFNWR0VsZW1lbnRcIilcblx0XHRcdFx0XHRcdGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB2YWx1ZSlcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZvY3VzOiBmdW5jdGlvbigpIHthY3RpdmVFbGVtZW50ID0gdGhpc30sXG5cdFx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdGlmIChldmVudHNbdHlwZV0gPT0gbnVsbCkgZXZlbnRzW3R5cGVdID0gW2NhbGxiYWNrXVxuXHRcdFx0XHRcdFx0ZWxzZSBldmVudHNbdHlwZV0ucHVzaChjYWxsYmFjaylcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRpZiAoZXZlbnRzW3R5cGVdICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGluZGV4ID0gZXZlbnRzW3R5cGVdLmluZGV4T2YoY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSBldmVudHNbdHlwZV0uc3BsaWNlKGluZGV4LCAxKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMubm9kZU5hbWUgPT09IFwiSU5QVVRcIiAmJiB0aGlzLmF0dHJpYnV0ZXNbXCJ0eXBlXCJdICE9IG51bGwgJiYgdGhpcy5hdHRyaWJ1dGVzW1widHlwZVwiXS52YWx1ZSA9PT0gXCJjaGVja2JveFwiICYmIGUudHlwZSA9PT0gXCJjbGlja1wiKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWRcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZS50YXJnZXQgPSB0aGlzXG5cdFx0XHRcdFx0XHRpZiAoZXZlbnRzW2UudHlwZV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50c1tlLnR5cGVdLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnRzW2UudHlwZV1baV0uY2FsbCh0aGlzLCBlKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNob3VsZCB0aGlzIGRvIHNvbWV0aGluZz9cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdGhpc1tcIm9uXCIgKyBlLnR5cGVdID09PSBcImZ1bmN0aW9uXCIgJiYgIWlzTW9kZXJuRXZlbnQoZS50eXBlKSkgdGhpc1tcIm9uXCIgKyBlLnR5cGVdKGUpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvbmNsaWNrOiBudWxsLFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGVsZW1lbnQubm9kZU5hbWUgPT09IFwiQVwiKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFwiaHJlZlwiLCB7XG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge3JldHVybiB0aGlzLmF0dHJpYnV0ZXNbXCJocmVmXCJdID09PSB1bmRlZmluZWQgPyBcIlwiIDogXCJbRklYTUUgaW1wbGVtZW50XVwifSxcblx0XHRcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHt0aGlzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdmFsdWUpfSxcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSBcIklOUFVUXCIpIHtcblx0XHRcdFx0XHR2YXIgY2hlY2tlZFxuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcImNoZWNrZWRcIiwge1xuXHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtyZXR1cm4gY2hlY2tlZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5hdHRyaWJ1dGVzW1wiY2hlY2tlZFwiXSAhPT0gdW5kZWZpbmVkIDogY2hlY2tlZH0sXG5cdFx0XHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7Y2hlY2tlZCA9IEJvb2xlYW4odmFsdWUpfSxcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IFwiXCJcblx0XHRcdFx0XHR2YXIgdmFsdWVTZXR0ZXIgPSBzcHkoZnVuY3Rpb24odikge1xuXHRcdFx0XHRcdFx0Lyplc2xpbnQtZGlzYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHYgPT09IG51bGwgPyBcIlwiIDogXCJcIiArIHZcblx0XHRcdFx0XHRcdC8qZXNsaW50LWVuYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgXCJ2YWx1ZVwiLCB7XG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRzZXQ6IHZhbHVlU2V0dGVyLFxuXHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0Ly8gd2UgY3VycmVudGx5IGVtdWxhdGUgdGhlIG5vbi1pZSBiZWhhdmlvciwgYnV0IGVtdWxhdGluZyBpZSBtYXkgYmUgbW9yZSB1c2VmdWwgKHRocm93IHdoZW4gYW4gaW52YWxpZCB0eXBlIGlzIHNldClcblx0XHRcdFx0XHR2YXIgdHlwZVNldHRlciA9IHNweShmdW5jdGlvbih2KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdilcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcInR5cGVcIiwge1xuXHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzLmhhc0F0dHJpYnV0ZShcInR5cGVcIikpIHJldHVybiBcInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YXIgdHlwZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwidHlwZVwiKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKC9eKD86cmFkaW98YnV0dG9ufGNoZWNrYm94fGNvbG9yfGRhdGV8ZGF0ZXRpbWV8ZGF0ZXRpbWUtbG9jYWx8ZW1haWx8ZmlsZXxoaWRkZW58bW9udGh8bnVtYmVyfHBhc3N3b3JkfHJhbmdlfHJlc2VhcmNofHNlYXJjaHxzdWJtaXR8dGVsfHRleHR8dXJsfHdlZWt8aW1hZ2UpJC8pXG5cdFx0XHRcdFx0XHRcdC50ZXN0KHR5cGUpXG5cdFx0XHRcdFx0XHRcdD8gdHlwZVxuXHRcdFx0XHRcdFx0XHQ6IFwidGV4dFwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0c2V0OiB0eXBlU2V0dGVyLFxuXHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJlZ2lzdGVyU3BpZXMoZWxlbWVudCwge1xuXHRcdFx0XHRcdFx0dmFsdWVTZXR0ZXI6IHZhbHVlU2V0dGVyLFxuXHRcdFx0XHRcdFx0dHlwZVNldHRlcjogdHlwZVNldHRlclxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSBcIlRFWFRBUkVBXCIpIHtcblx0XHRcdFx0XHR2YXIgd2FzTmV2ZXJTZXQgPSB0cnVlXG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gXCJcIlxuXHRcdFx0XHRcdHZhciB2YWx1ZVNldHRlciA9IHNweShmdW5jdGlvbih2KSB7XG5cdFx0XHRcdFx0XHR3YXNOZXZlclNldCA9IGZhbHNlXG5cdFx0XHRcdFx0XHQvKmVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0XHRcdHZhbHVlID0gdiA9PT0gbnVsbCA/IFwiXCIgOiBcIlwiICsgdlxuXHRcdFx0XHRcdFx0Lyplc2xpbnQtZW5hYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcInZhbHVlXCIsIHtcblx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB3YXNOZXZlclNldCAmJiB0aGlzLmZpcnN0Q2hpbGQgPyB0aGlzLmZpcnN0Q2hpbGQubm9kZVZhbHVlIDogdmFsdWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRzZXQ6IHZhbHVlU2V0dGVyLFxuXHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJlZ2lzdGVyU3BpZXMoZWxlbWVudCwge1xuXHRcdFx0XHRcdFx0dmFsdWVTZXR0ZXI6IHZhbHVlU2V0dGVyXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIHJhZGl4ICovXG5cblx0XHRcdFx0aWYgKGVsZW1lbnQubm9kZU5hbWUgPT09IFwiQ0FOVkFTXCIpIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgXCJ3aWR0aFwiLCB7XG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge3JldHVybiB0aGlzLmF0dHJpYnV0ZXNbXCJ3aWR0aFwiXSA/IE1hdGguZmxvb3IocGFyc2VJbnQodGhpcy5hdHRyaWJ1dGVzW1wid2lkdGhcIl0udmFsdWUpIHx8IDApIDogMzAwfSxcblx0XHRcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHt0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSB8fCAwKS50b1N0cmluZygpKX0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgXCJoZWlnaHRcIiwge1xuXHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW1wiaGVpZ2h0XCJdID8gTWF0aC5mbG9vcihwYXJzZUludCh0aGlzLmF0dHJpYnV0ZXNbXCJoZWlnaHRcIl0udmFsdWUpIHx8IDApIDogMzAwfSxcblx0XHRcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHt0aGlzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkgfHwgMCkudG9TdHJpbmcoKSl9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIHJhZGl4ICovXG5cblx0XHRcdFx0ZnVuY3Rpb24gZ2V0T3B0aW9ucyhlbGVtZW50KSB7XG5cdFx0XHRcdFx0dmFyIG9wdGlvbnMgPSBbXVxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5jaGlsZE5vZGVzW2ldLm5vZGVOYW1lID09PSBcIk9QVElPTlwiKSBvcHRpb25zLnB1c2goZWxlbWVudC5jaGlsZE5vZGVzW2ldKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAoZWxlbWVudC5jaGlsZE5vZGVzW2ldLm5vZGVOYW1lID09PSBcIk9QVEdST1VQXCIpIG9wdGlvbnMgPSBvcHRpb25zLmNvbmNhdChnZXRPcHRpb25zKGVsZW1lbnQuY2hpbGROb2Rlc1tpXSkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdFx0ZnVuY3Rpb24gZ2V0T3B0aW9uVmFsdWUoZWxlbWVudCkge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50LmF0dHJpYnV0ZXNbXCJ2YWx1ZVwiXSAhPSBudWxsID9cblx0XHRcdFx0XHRcdGVsZW1lbnQuYXR0cmlidXRlc1tcInZhbHVlXCJdLnZhbHVlIDpcblx0XHRcdFx0XHRcdGVsZW1lbnQuZmlyc3RDaGlsZCAhPSBudWxsID8gZWxlbWVudC5maXJzdENoaWxkLm5vZGVWYWx1ZSA6IFwiXCJcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJTRUxFQ1RcIikge1xuXHRcdFx0XHRcdC8vIHZhciBzZWxlY3RlZFZhbHVlXG5cdFx0XHRcdFx0dmFyIHNlbGVjdGVkSW5kZXggPSAwXG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFwic2VsZWN0ZWRJbmRleFwiLCB7XG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge3JldHVybiBnZXRPcHRpb25zKHRoaXMpLmxlbmd0aCA+IDAgPyBzZWxlY3RlZEluZGV4IDogLTF9LFxuXHRcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgb3B0aW9ucyA9IGdldE9wdGlvbnModGhpcylcblx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlID49IDAgJiYgdmFsdWUgPCBvcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHNlbGVjdGVkVmFsdWUgPSBnZXRPcHRpb25WYWx1ZShvcHRpb25zW3NlbGVjdGVkSW5kZXhdKVxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkSW5kZXggPSB2YWx1ZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHNlbGVjdGVkVmFsdWUgPSBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRJbmRleCA9IC0xXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0dmFyIHZhbHVlU2V0dGVyID0gc3B5KGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRJbmRleCA9IC0xXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgb3B0aW9ucyA9IGdldE9wdGlvbnModGhpcylcblx0XHRcdFx0XHRcdFx0Lyplc2xpbnQtZGlzYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0XHRcdFx0XHRcdHZhciBzdHJpbmdWYWx1ZSA9IFwiXCIgKyB2YWx1ZVxuXHRcdFx0XHRcdFx0XHQvKmVzbGludC1lbmFibGUgbm8taW1wbGljaXQtY29lcmNpb24qL1xuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZ2V0T3B0aW9uVmFsdWUob3B0aW9uc1tpXSkgPT09IHN0cmluZ1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBzZWxlY3RlZFZhbHVlID0gc3RyaW5nVmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkSW5kZXggPSBpXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gc2VsZWN0ZWRWYWx1ZSA9IHN0cmluZ1ZhbHVlXG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkSW5kZXggPSAtMVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFwidmFsdWVcIiwge1xuXHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IC0xKSByZXR1cm4gZ2V0T3B0aW9uVmFsdWUoZ2V0T3B0aW9ucyh0aGlzKVt0aGlzLnNlbGVjdGVkSW5kZXhdKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHNldDogdmFsdWVTZXR0ZXIsXG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmVnaXN0ZXJTcGllcyhlbGVtZW50LCB7XG5cdFx0XHRcdFx0XHR2YWx1ZVNldHRlcjogdmFsdWVTZXR0ZXJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSBcIk9QVElPTlwiKSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlU2V0dGVyID0gc3B5KGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHQvKmVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUgPT09IG51bGwgPyBcIlwiIDogXCJcIiArIHZhbHVlKVxuXHRcdFx0XHRcdFx0Lyplc2xpbnQtZW5hYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcInZhbHVlXCIsIHtcblx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7cmV0dXJuIGdldE9wdGlvblZhbHVlKHRoaXMpfSxcblx0XHRcdFx0XHRcdHNldDogdmFsdWVTZXR0ZXIsXG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmVnaXN0ZXJTcGllcyhlbGVtZW50LCB7XG5cdFx0XHRcdFx0XHR2YWx1ZVNldHRlcjogdmFsdWVTZXR0ZXJcblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFwic2VsZWN0ZWRcIiwge1xuXHRcdFx0XHRcdFx0Ly8gVE9ETz8gaGFuZGxlIGBzZWxlY3RlZGAgd2l0aG91dCBhIHBhcmVudCAod29ya3MgaW4gYnJvd3NlcnMpXG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgb3B0aW9ucyA9IGdldE9wdGlvbnModGhpcy5wYXJlbnROb2RlKVxuXHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBvcHRpb25zLmluZGV4T2YodGhpcylcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSB0aGlzLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG9wdGlvbnMgPSBnZXRPcHRpb25zKHRoaXMucGFyZW50Tm9kZSlcblx0XHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBvcHRpb25zLmluZGV4T2YodGhpcylcblx0XHRcdFx0XHRcdFx0XHRpZiAoaW5kZXggPiAtMSkgdGhpcy5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2UgdGhpcy5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXggPSAwXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBlbGVtZW50XG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlRWxlbWVudE5TOiBmdW5jdGlvbihucywgdGFnLCBpcykge1xuXHRcdFx0XHR2YXIgZWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCh0YWcsIGlzKVxuXHRcdFx0XHRlbGVtZW50Lm5vZGVOYW1lID0gdGFnXG5cdFx0XHRcdGVsZW1lbnQubmFtZXNwYWNlVVJJID0gbnNcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnRcblx0XHRcdH0sXG5cdFx0XHRjcmVhdGVUZXh0Tm9kZTogZnVuY3Rpb24odGV4dCkge1xuXHRcdFx0XHQvKmVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0dmFyIG5vZGVWYWx1ZSA9IFwiXCIgKyB0ZXh0XG5cdFx0XHRcdC8qZXNsaW50LWVuYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0bm9kZVR5cGU6IDMsXG5cdFx0XHRcdFx0bm9kZU5hbWU6IFwiI3RleHRcIixcblx0XHRcdFx0XHRwYXJlbnROb2RlOiBudWxsLFxuXHRcdFx0XHRcdGdldCBub2RlVmFsdWUoKSB7cmV0dXJuIG5vZGVWYWx1ZX0sXG5cdFx0XHRcdFx0c2V0IG5vZGVWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0Lyplc2xpbnQtZGlzYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0XHRcdFx0XHRub2RlVmFsdWUgPSBcIlwiICsgdmFsdWVcblx0XHRcdFx0XHRcdC8qZXNsaW50LWVuYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG5vZGVUeXBlOiAxMSxcblx0XHRcdFx0XHRub2RlTmFtZTogXCIjZG9jdW1lbnQtZnJhZ21lbnRcIixcblx0XHRcdFx0XHRhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQsXG5cdFx0XHRcdFx0aW5zZXJ0QmVmb3JlOiBpbnNlcnRCZWZvcmUsXG5cdFx0XHRcdFx0cmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuXHRcdFx0XHRcdHBhcmVudE5vZGU6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGROb2RlczogW10sXG5cdFx0XHRcdFx0Z2V0IGZpcnN0Q2hpbGQoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdIHx8IG51bGxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlRXZlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGluaXRFdmVudDogZnVuY3Rpb24odHlwZSkge3RoaXMudHlwZSA9IHR5cGV9LFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0IGFjdGl2ZUVsZW1lbnQoKSB7cmV0dXJuIGFjdGl2ZUVsZW1lbnR9LFxuXHRcdH0sXG5cdH1cblx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPSAkd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIpXG5cdCR3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKCR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRcIikpXG5cdCR3aW5kb3cuZG9jdW1lbnQuYm9keSA9ICR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJvZHlcIilcblx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoJHdpbmRvdy5kb2N1bWVudC5ib2R5KVxuXHRhY3RpdmVFbGVtZW50ID0gJHdpbmRvdy5kb2N1bWVudC5ib2R5XG5cblx0aWYgKG9wdGlvbnMuc3B5KSAkd2luZG93Ll9fZ2V0U3BpZXMgPSBnZXRTcGllc1xuXG5cdHJldHVybiAkd2luZG93XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy9kb21Nb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcGFyc2VVUkwgPSByZXF1aXJlKFwiLi4vdGVzdC11dGlscy9wYXJzZVVSTFwiKVxudmFyIGNhbGxBc3luYyA9IHJlcXVpcmUoXCIuLi90ZXN0LXV0aWxzL2NhbGxBc3luY1wiKVxuXG5mdW5jdGlvbiBkZWJvdW5jZWRBc3luYyhmKSB7XG5cdHZhciByZWZcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdGlmIChyZWYgIT0gbnVsbCkgcmV0dXJuXG5cdFx0cmVmID0gY2FsbEFzeW5jKGZ1bmN0aW9uKCl7XG5cdFx0XHRyZWYgPSBudWxsXG5cdFx0XHRmKClcblx0XHR9KVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXHRpZiAob3B0aW9ucyA9PSBudWxsKSBvcHRpb25zID0ge31cblxuXHR2YXIgJHdpbmRvdyA9IG9wdGlvbnMud2luZG93IHx8IHt9XG5cdHZhciBwcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2wgfHwgXCJodHRwOlwiXG5cdHZhciBob3N0bmFtZSA9IG9wdGlvbnMuaG9zdG5hbWUgfHwgXCJsb2NhbGhvc3RcIlxuXHR2YXIgcG9ydCA9IFwiXCJcblx0dmFyIHBhdGhuYW1lID0gXCIvXCJcblx0dmFyIHNlYXJjaCA9IFwiXCJcblx0dmFyIGhhc2ggPSBcIlwiXG5cblx0dmFyIHBhc3QgPSBbe3VybDogZ2V0VVJMKCksIGlzTmV3OiB0cnVlLCBzdGF0ZTogbnVsbCwgdGl0bGU6IG51bGx9XSwgZnV0dXJlID0gW11cblxuXHRmdW5jdGlvbiBnZXRVUkwoKSB7XG5cdFx0aWYgKHByb3RvY29sID09PSBcImZpbGU6XCIpIHJldHVybiBwcm90b2NvbCArIFwiLy9cIiArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaFxuXHRcdHJldHVybiBwcm90b2NvbCArIFwiLy9cIiArIGhvc3RuYW1lICsgcHJlZml4KFwiOlwiLCBwb3J0KSArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaFxuXHR9XG5cdGZ1bmN0aW9uIHNldFVSTCh2YWx1ZSkge1xuXHRcdHZhciBkYXRhID0gcGFyc2VVUkwodmFsdWUsIHtwcm90b2NvbDogcHJvdG9jb2wsIGhvc3RuYW1lOiBob3N0bmFtZSwgcG9ydDogcG9ydCwgcGF0aG5hbWU6IHBhdGhuYW1lfSlcblx0XHR2YXIgaXNOZXcgPSBmYWxzZVxuXHRcdGlmIChkYXRhLnByb3RvY29sICE9IG51bGwgJiYgZGF0YS5wcm90b2NvbCAhPT0gcHJvdG9jb2wpIHByb3RvY29sID0gZGF0YS5wcm90b2NvbCwgaXNOZXcgPSB0cnVlXG5cdFx0aWYgKGRhdGEuaG9zdG5hbWUgIT0gbnVsbCAmJiBkYXRhLmhvc3RuYW1lICE9PSBob3N0bmFtZSkgaG9zdG5hbWUgPSBkYXRhLmhvc3RuYW1lLCBpc05ldyA9IHRydWVcblx0XHRpZiAoZGF0YS5wb3J0ICE9IG51bGwgJiYgZGF0YS5wb3J0ICE9PSBwb3J0KSBwb3J0ID0gZGF0YS5wb3J0LCBpc05ldyA9IHRydWVcblx0XHRpZiAoZGF0YS5wYXRobmFtZSAhPSBudWxsICYmIGRhdGEucGF0aG5hbWUgIT09IHBhdGhuYW1lKSBwYXRobmFtZSA9IGRhdGEucGF0aG5hbWUsIGlzTmV3ID0gdHJ1ZVxuXHRcdGlmIChkYXRhLnNlYXJjaCAhPSBudWxsICYmIGRhdGEuc2VhcmNoICE9PSBzZWFyY2gpIHNlYXJjaCA9IGRhdGEuc2VhcmNoLCBpc05ldyA9IHRydWVcblx0XHRpZiAoZGF0YS5oYXNoICE9IG51bGwgJiYgZGF0YS5oYXNoICE9PSBoYXNoKSB7XG5cdFx0XHRoYXNoID0gZGF0YS5oYXNoXG5cdFx0XHRpZiAoIWlzTmV3KSB7XG5cdFx0XHRcdGhhc2hjaGFuZ2UoKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaXNOZXdcblx0fVxuXG5cdGZ1bmN0aW9uIHByZWZpeChwcmVmaXgsIHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBcIlwiKSByZXR1cm4gXCJcIlxuXHRcdHJldHVybiAodmFsdWUuY2hhckF0KDApICE9PSBwcmVmaXggPyBwcmVmaXggOiBcIlwiKSArIHZhbHVlXG5cdH1cblx0ZnVuY3Rpb24gX2hhc2hjaGFuZ2UoKSB7XG5cdFx0aWYgKHR5cGVvZiAkd2luZG93Lm9uaGFzaGNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSAkd2luZG93Lm9uaGFzaGNoYW5nZSh7dHlwZTogXCJoYXNoY2hhbmdlXCJ9KVxuXHR9XG5cdHZhciBoYXNoY2hhbmdlID0gZGVib3VuY2VkQXN5bmMoX2hhc2hjaGFuZ2UpXG5cdGZ1bmN0aW9uIHBvcHN0YXRlKCkge1xuXHRcdGlmICh0eXBlb2YgJHdpbmRvdy5vbnBvcHN0YXRlID09PSBcImZ1bmN0aW9uXCIpICR3aW5kb3cub25wb3BzdGF0ZSh7dHlwZTogXCJwb3BzdGF0ZVwiLCBzdGF0ZTogJHdpbmRvdy5oaXN0b3J5LnN0YXRlfSlcblx0fVxuXHRmdW5jdGlvbiB1bmxvYWQoKSB7XG5cdFx0aWYgKHR5cGVvZiAkd2luZG93Lm9udW5sb2FkID09PSBcImZ1bmN0aW9uXCIpICR3aW5kb3cub251bmxvYWQoe3R5cGU6IFwidW5sb2FkXCJ9KVxuXHR9XG5cblx0JHdpbmRvdy5sb2NhdGlvbiA9IHtcblx0XHRnZXQgcHJvdG9jb2woKSB7XG5cdFx0XHRyZXR1cm4gcHJvdG9jb2xcblx0XHR9LFxuXHRcdGdldCBob3N0bmFtZSgpIHtcblx0XHRcdHJldHVybiBob3N0bmFtZVxuXHRcdH0sXG5cdFx0Z2V0IHBvcnQoKSB7XG5cdFx0XHRyZXR1cm4gcG9ydFxuXHRcdH0sXG5cdFx0Z2V0IHBhdGhuYW1lKCkge1xuXHRcdFx0cmV0dXJuIHBhdGhuYW1lXG5cdFx0fSxcblx0XHRnZXQgc2VhcmNoKCkge1xuXHRcdFx0cmV0dXJuIHNlYXJjaFxuXHRcdH0sXG5cdFx0Z2V0IGhhc2goKSB7XG5cdFx0XHRyZXR1cm4gaGFzaFxuXHRcdH0sXG5cdFx0Z2V0IG9yaWdpbigpIHtcblx0XHRcdGlmIChwcm90b2NvbCA9PT0gXCJmaWxlOlwiKSByZXR1cm4gXCJudWxsXCJcblx0XHRcdHJldHVybiBwcm90b2NvbCArIFwiLy9cIiArIGhvc3RuYW1lICsgcHJlZml4KFwiOlwiLCBwb3J0KVxuXHRcdH0sXG5cdFx0Z2V0IGhvc3QoKSB7XG5cdFx0XHRpZiAocHJvdG9jb2wgPT09IFwiZmlsZTpcIikgcmV0dXJuIFwiXCJcblx0XHRcdHJldHVybiBob3N0bmFtZSArIHByZWZpeChcIjpcIiwgcG9ydClcblx0XHR9LFxuXHRcdGdldCBocmVmKCkge1xuXHRcdFx0cmV0dXJuIGdldFVSTCgpXG5cdFx0fSxcblxuXHRcdHNldCBwcm90b2NvbCh2YWx1ZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvdG9jb2wgaXMgcmVhZC1vbmx5XCIpXG5cdFx0fSxcblx0XHRzZXQgaG9zdG5hbWUodmFsdWUpIHtcblx0XHRcdHVubG9hZCgpXG5cdFx0XHRwYXN0LnB1c2goe3VybDogZ2V0VVJMKCksIGlzTmV3OiB0cnVlfSlcblx0XHRcdGZ1dHVyZSA9IFtdXG5cdFx0XHRob3N0bmFtZSA9IHZhbHVlXG5cdFx0fSxcblx0XHRzZXQgcG9ydCh2YWx1ZSkge1xuXHRcdFx0aWYgKHByb3RvY29sID09PSBcImZpbGU6XCIpIHRocm93IG5ldyBFcnJvcihcIlBvcnQgaXMgcmVhZC1vbmx5IHVuZGVyIGBmaWxlOi8vYCBwcm90b2NvbFwiKVxuXHRcdFx0dW5sb2FkKClcblx0XHRcdHBhc3QucHVzaCh7dXJsOiBnZXRVUkwoKSwgaXNOZXc6IHRydWV9KVxuXHRcdFx0ZnV0dXJlID0gW11cblx0XHRcdHBvcnQgPSB2YWx1ZVxuXHRcdH0sXG5cdFx0c2V0IHBhdGhuYW1lKHZhbHVlKSB7XG5cdFx0XHRpZiAocHJvdG9jb2wgPT09IFwiZmlsZTpcIikgdGhyb3cgbmV3IEVycm9yKFwiUGF0aG5hbWUgaXMgcmVhZC1vbmx5IHVuZGVyIGBmaWxlOi8vYCBwcm90b2NvbFwiKVxuXHRcdFx0dW5sb2FkKClcblx0XHRcdHBhc3QucHVzaCh7dXJsOiBnZXRVUkwoKSwgaXNOZXc6IHRydWV9KVxuXHRcdFx0ZnV0dXJlID0gW11cblx0XHRcdHBhdGhuYW1lID0gcHJlZml4KFwiL1wiLCB2YWx1ZSlcblx0XHR9LFxuXHRcdHNldCBzZWFyY2godmFsdWUpIHtcblx0XHRcdHVubG9hZCgpXG5cdFx0XHRwYXN0LnB1c2goe3VybDogZ2V0VVJMKCksIGlzTmV3OiB0cnVlfSlcblx0XHRcdGZ1dHVyZSA9IFtdXG5cdFx0XHRzZWFyY2ggPSBwcmVmaXgoXCI/XCIsIHZhbHVlKVxuXHRcdH0sXG5cdFx0c2V0IGhhc2godmFsdWUpIHtcblx0XHRcdHZhciBvbGRIYXNoID0gaGFzaFxuXHRcdFx0cGFzdC5wdXNoKHt1cmw6IGdldFVSTCgpLCBpc05ldzogZmFsc2V9KVxuXHRcdFx0ZnV0dXJlID0gW11cblx0XHRcdGhhc2ggPSBwcmVmaXgoXCIjXCIsIHZhbHVlKVxuXHRcdFx0aWYgKG9sZEhhc2ggIT0gaGFzaCkgaGFzaGNoYW5nZSgpXG5cdFx0fSxcblxuXHRcdHNldCBvcmlnaW4odmFsdWUpIHtcblx0XHRcdC8vb3JpZ2luIGlzIHdyaXRhYmxlIGJ1dCBpZ25vcmVkXG5cdFx0fSxcblx0XHRzZXQgaG9zdCh2YWx1ZSkge1xuXHRcdFx0Ly9ob3N0IGlzIHdyaXRhYmxlIGJ1dCBpZ25vcmVkIGluIENocm9tZVxuXHRcdH0sXG5cdFx0c2V0IGhyZWYodmFsdWUpIHtcblx0XHRcdHZhciB1cmwgPSBnZXRVUkwoKVxuXHRcdFx0dmFyIGlzTmV3ID0gc2V0VVJMKHZhbHVlKVxuXHRcdFx0aWYgKGlzTmV3KSB7XG5cdFx0XHRcdHNldFVSTCh1cmwpXG5cdFx0XHRcdHVubG9hZCgpXG5cdFx0XHRcdHNldFVSTCh2YWx1ZSlcblx0XHRcdH1cblx0XHRcdHBhc3QucHVzaCh7dXJsOiB1cmwsIGlzTmV3OiBpc05ld30pXG5cdFx0XHRmdXR1cmUgPSBbXVxuXHRcdH0sXG5cdH1cblx0JHdpbmRvdy5oaXN0b3J5ID0ge1xuXHRcdHB1c2hTdGF0ZTogZnVuY3Rpb24oc3RhdGUsIHRpdGxlLCB1cmwpIHtcblx0XHRcdHBhc3QucHVzaCh7dXJsOiBnZXRVUkwoKSwgaXNOZXc6IGZhbHNlLCBzdGF0ZTogc3RhdGUsIHRpdGxlOiB0aXRsZX0pXG5cdFx0XHRmdXR1cmUgPSBbXVxuXHRcdFx0c2V0VVJMKHVybClcblx0XHR9LFxuXHRcdHJlcGxhY2VTdGF0ZTogZnVuY3Rpb24oc3RhdGUsIHRpdGxlLCB1cmwpIHtcblx0XHRcdHZhciBlbnRyeSA9IHBhc3RbcGFzdC5sZW5ndGggLSAxXVxuXHRcdFx0ZW50cnkuc3RhdGUgPSBzdGF0ZVxuXHRcdFx0ZW50cnkudGl0bGUgPSB0aXRsZVxuXHRcdFx0c2V0VVJMKHVybClcblx0XHR9LFxuXHRcdGJhY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHBhc3QubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR2YXIgZW50cnkgPSBwYXN0LnBvcCgpXG5cdFx0XHRcdGlmIChlbnRyeS5pc05ldykgdW5sb2FkKClcblx0XHRcdFx0ZnV0dXJlLnB1c2goe3VybDogZ2V0VVJMKCksIGlzTmV3OiBmYWxzZSwgc3RhdGU6IGVudHJ5LnN0YXRlLCB0aXRsZTogZW50cnkudGl0bGV9KVxuXHRcdFx0XHRzZXRVUkwoZW50cnkudXJsKVxuXHRcdFx0XHRpZiAoIWVudHJ5LmlzTmV3KSBwb3BzdGF0ZSgpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRmb3J3YXJkOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlbnRyeSA9IGZ1dHVyZS5wb3AoKVxuXHRcdFx0aWYgKGVudHJ5ICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKGVudHJ5LmlzTmV3KSB1bmxvYWQoKVxuXHRcdFx0XHRwYXN0LnB1c2goe3VybDogZ2V0VVJMKCksIGlzTmV3OiBmYWxzZSwgc3RhdGU6IGVudHJ5LnN0YXRlLCB0aXRsZTogZW50cnkudGl0bGV9KVxuXHRcdFx0XHRzZXRVUkwoZW50cnkudXJsKVxuXHRcdFx0XHRpZiAoIWVudHJ5LmlzTmV3KSBwb3BzdGF0ZSgpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRnZXQgc3RhdGUoKSB7XG5cdFx0XHRyZXR1cm4gcGFzdC5sZW5ndGggPT09IDAgPyBudWxsIDogcGFzdFtwYXN0Lmxlbmd0aCAtIDFdLnN0YXRlXG5cdFx0fSxcblx0fVxuXHQkd2luZG93Lm9ucG9wc3RhdGUgPSBudWxsLFxuXHQkd2luZG93Lm9uaGFzaGNoYW5nZSA9IG51bGwsXG5cdCR3aW5kb3cub251bmxvYWQgPSBudWxsXG5cblx0cmV0dXJuICR3aW5kb3dcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vbWl0aHJpbC90ZXN0LXV0aWxzL3B1c2hTdGF0ZU1vY2suanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBjYWxsQXN5bmMgPSByZXF1aXJlKFwiLi4vdGVzdC11dGlscy9jYWxsQXN5bmNcIilcbnZhciBwYXJzZVVSTCA9IHJlcXVpcmUoXCIuLi90ZXN0LXV0aWxzL3BhcnNlVVJMXCIpXG52YXIgcGFyc2VRdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuLi9xdWVyeXN0cmluZy9wYXJzZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcm91dGVzID0ge31cblx0Ly8gdmFyIGNhbGxiYWNrID0gXCJjYWxsYmFja1wiXG5cdHZhciBzZXJ2ZXJFcnJvckhhbmRsZXIgPSBmdW5jdGlvbih1cmwpIHtcblx0XHRyZXR1cm4ge3N0YXR1czogNTAwLCByZXNwb25zZVRleHQ6IFwic2VydmVyIGVycm9yLCBtb3N0IGxpa2VseSB0aGUgVVJMIHdhcyBub3QgZGVmaW5lZCBcIiArIHVybH1cblx0fVxuXG5cdHZhciAkd2luZG93ID0ge1xuXHRcdFhNTEh0dHBSZXF1ZXN0OiBmdW5jdGlvbiBYTUxIdHRwUmVxdWVzdCgpIHtcblx0XHRcdHZhciBhcmdzID0ge31cblx0XHRcdHZhciBoZWFkZXJzID0ge31cblx0XHRcdHZhciBhYm9ydGVkID0gZmFsc2Vcblx0XHRcdHRoaXMuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlciwgdmFsdWUpIHtcblx0XHRcdFx0aGVhZGVyc1toZWFkZXJdID0gdmFsdWVcblx0XHRcdH1cblx0XHRcdHRoaXMuZ2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlcikge1xuXHRcdFx0XHRyZXR1cm4gaGVhZGVyc1toZWFkZXJdXG5cdFx0XHR9XG5cdFx0XHR0aGlzLm9wZW4gPSBmdW5jdGlvbihtZXRob2QsIHVybCwgYXN5bmMsIHVzZXIsIHBhc3N3b3JkKSB7XG5cdFx0XHRcdHZhciB1cmxEYXRhID0gcGFyc2VVUkwodXJsLCB7cHJvdG9jb2w6IFwiaHR0cDpcIiwgaG9zdG5hbWU6IFwibG9jYWxob3N0XCIsIHBvcnQ6IFwiXCIsIHBhdGhuYW1lOiBcIi9cIn0pXG5cdFx0XHRcdGFyZ3MubWV0aG9kID0gbWV0aG9kXG5cdFx0XHRcdGFyZ3MucGF0aG5hbWUgPSB1cmxEYXRhLnBhdGhuYW1lXG5cdFx0XHRcdGFyZ3Muc2VhcmNoID0gdXJsRGF0YS5zZWFyY2hcblx0XHRcdFx0YXJncy5hc3luYyA9IGFzeW5jICE9IG51bGwgPyBhc3luYyA6IHRydWVcblx0XHRcdFx0YXJncy51c2VyID0gdXNlclxuXHRcdFx0XHRhcmdzLnBhc3N3b3JkID0gcGFzc3dvcmRcblx0XHRcdH1cblx0XHRcdHRoaXMuc2VuZCA9IGZ1bmN0aW9uKGJvZHkpIHtcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzXG5cdFx0XHRcdGlmKCFhYm9ydGVkKSB7XG5cdFx0XHRcdFx0dmFyIGhhbmRsZXIgPSByb3V0ZXNbYXJncy5tZXRob2QgKyBcIiBcIiArIGFyZ3MucGF0aG5hbWVdIHx8IHNlcnZlckVycm9ySGFuZGxlci5iaW5kKG51bGwsIGFyZ3MucGF0aG5hbWUpXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBoYW5kbGVyKHt1cmw6IGFyZ3MucGF0aG5hbWUsIHF1ZXJ5OiBhcmdzLnNlYXJjaCB8fCB7fSwgYm9keTogYm9keSB8fCBudWxsfSlcblx0XHRcdFx0XHRzZWxmLnN0YXR1cyA9IGRhdGEuc3RhdHVzXG5cdFx0XHRcdFx0c2VsZi5yZXNwb25zZVRleHQgPSBkYXRhLnJlc3BvbnNlVGV4dFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNlbGYuc3RhdHVzID0gMFxuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYucmVhZHlTdGF0ZSA9IDRcblx0XHRcdFx0aWYgKGFyZ3MuYXN5bmMgPT09IHRydWUpIHtcblx0XHRcdFx0XHRjYWxsQXN5bmMoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIHNlbGYub25yZWFkeXN0YXRlY2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHNlbGYub25yZWFkeXN0YXRlY2hhbmdlKClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFib3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGFib3J0ZWQgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkb2N1bWVudDoge1xuXHRcdFx0Y3JlYXRlRWxlbWVudDogZnVuY3Rpb24odGFnKSB7XG5cdFx0XHRcdHJldHVybiB7bm9kZU5hbWU6IHRhZy50b1VwcGVyQ2FzZSgpLCBwYXJlbnROb2RlOiBudWxsfVxuXHRcdFx0fSxcblx0XHRcdGRvY3VtZW50RWxlbWVudDoge1xuXHRcdFx0XHRhcHBlbmRDaGlsZDogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQucGFyZW50Tm9kZSA9IHRoaXNcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJTQ1JJUFRcIikge1xuXHRcdFx0XHRcdFx0dmFyIHVybERhdGEgPSBwYXJzZVVSTChlbGVtZW50LnNyYywge3Byb3RvY29sOiBcImh0dHA6XCIsIGhvc3RuYW1lOiBcImxvY2FsaG9zdFwiLCBwb3J0OiBcIlwiLCBwYXRobmFtZTogXCIvXCJ9KVxuXHRcdFx0XHRcdFx0dmFyIGhhbmRsZXIgPSByb3V0ZXNbXCJHRVQgXCIgKyB1cmxEYXRhLnBhdGhuYW1lXSB8fCBzZXJ2ZXJFcnJvckhhbmRsZXIuYmluZChudWxsLCBlbGVtZW50LnNyYylcblx0XHRcdFx0XHRcdHZhciBkYXRhID0gaGFuZGxlcih7dXJsOiB1cmxEYXRhLnBhdGhuYW1lLCBxdWVyeTogdXJsRGF0YS5zZWFyY2gsIGJvZHk6IG51bGx9KVxuXHRcdFx0XHRcdFx0cGFyc2VRdWVyeVN0cmluZyh1cmxEYXRhLnNlYXJjaClcblx0XHRcdFx0XHRcdGNhbGxBc3luYyhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRuZXcgRnVuY3Rpb24oXCIkd2luZG93XCIsIFwid2l0aCAoJHdpbmRvdykgcmV0dXJuIFwiICsgZGF0YS5yZXNwb25zZVRleHQpLmNhbGwoJHdpbmRvdywgJHdpbmRvdylcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5vbmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50Lm9uZXJyb3Ioe3R5cGU6IFwiZXJyb3JcIn0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVDaGlsZDogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQucGFyZW50Tm9kZSA9IG51bGxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQkZGVmaW5lUm91dGVzOiBmdW5jdGlvbihydWxlcykge1xuXHRcdFx0cm91dGVzID0gcnVsZXNcblx0XHR9LFxuXHRcdCRkZWZpbmVKU09OUENhbGxiYWNrS2V5OiBmdW5jdGlvbigvKiBrZXkgKi8pIHtcblx0XHRcdC8vIGNhbGxiYWNrID0ga2V5XG5cdFx0fSxcblx0fVxuXHRyZXR1cm4gJHdpbmRvd1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL3Rlc3QtdXRpbHMveGhyTW9jay5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9