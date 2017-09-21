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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jU2V0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2NTZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7O0FBRUgsTUFBTTtBQUNOLHVDQUFnQztBQUVoQzs7O0dBR0c7QUFDSCxNQUFNLElBQUksR0FBVSxtQkFBbUIsQ0FBQztBQUd4Qzs7O0dBR0c7QUFDSDtJQUtJLGtEQUFrRDtJQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQVc7UUFDekIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQVk7UUFDL0IsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBaUIsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFXO1FBQ25DLE1BQU0sQ0FBQyxZQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDekMsSUFBSSxDQUFDLENBQUMsTUFBVTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFRLEtBQUssVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR00sTUFBTSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0FBOURoRCx5RkFBeUY7QUFDMUUsYUFBSyxHQUE2QixFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBQyxDQUFDO0FBRnhFLDBCQWdFQztBQUFBLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILG9CQUFvQixHQUFVLEVBQUUsSUFBVztJQUN2QyxNQUFNLENBQUMsWUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFLO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsd0JBQXdCLE9BQVcsRUFBRSxLQUFTLEVBQUUsR0FBVSxFQUFFLElBQUksR0FBQyxFQUFFO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUUsaUJBQWlCO1FBQ3JGLE1BQU0sTUFBTSxHQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWlCLDJCQUEyQjtRQUMvRixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBRyxFQUFFLENBQUMsR0FBRSxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksTUFBTSxFQUFFLENBQUM7UUFDeEQsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDM0IsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7UUFBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSyxLQUFLLGNBQWMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUNEOzs7OztHQUtHO0FBQ0g7Ozs7Ozs7Ozs7O0VBV0UifQ==

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
 * - '{@link hsdoc: Doc Overview}' -> {@link hsdoc: Doc Overview}
 * - '{@link hsdoc:DocSets.DocSets.add the `adds` function}' --> {@link hsdoc:DocSets.DocSets.add the `adds` function}
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
        return (module === '' || module === '0' || module === 'overview') ?
            ` <a href="#!/api/${lib}/0">${text}</a>` :
            ` <a href="#!/api/${lib}/${lib}.${module}">${text}</a>`;
    });
    return comment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFFBQVEsR0FBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdEM7Ozs7O0dBS0c7QUFDSCxrQkFBeUIsSUFBVyxFQUFFLFFBQWMsS0FBSyxFQUFFLFlBQW1CO0lBQzFFLE1BQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxNQUFNLEVBQWtCLElBQUk7UUFDNUIsb0JBQW9CLEVBQUksSUFBSTtRQUM1QixtQkFBbUIsRUFBSyxJQUFJO1FBQzVCLFNBQVMsRUFBZSxJQUFJO1FBQzVCLGFBQWEsRUFBVyxJQUFJLENBQUksbUJBQW1CO0tBQ3RELENBQUMsQ0FBQztJQUNILElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1IsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQWZELDRCQWVDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0gseUJBQXlCLE9BQWMsRUFBRSxZQUFtQjtJQUM1RDs7Ozs7Ozs7OztNQVVFO0lBQ0UsMEJBQTBCLEtBQVk7UUFDbEMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUk7WUFDdkQsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELG1CQUFtQixJQUFXO1FBQzFCLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBRSxDQUFDO1lBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNiLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUU5QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUk7UUFDdkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxLQUFLLFVBQVUsQ0FBQztZQUN6RCxvQkFBb0IsR0FBRyxPQUFPLElBQUksTUFBTTtZQUN4QyxvQkFBb0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUM7SUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO0FBRW5CLENBQUMifQ==

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
 *   default is used as specified in the {@link hsdoc:DocSets.FILE DocSets FILE} setting.
 * - DocsMenu retrieves all available docSets via {@link hsdoc:DocSets.DocSets.get DocSets.get}.
 * - DocsMenu creates a `MenuDesc` structure with a {@link hsGraph:hsMenu.MenuDesc.select `select`} callback that initiates a route change
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L01haW5EZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBd0M7QUFDeEMsdUNBQXdDO0FBQ3hDLHdDQUEwQztBQUMxQywrQ0FBc0Q7QUFDdEQsbUNBQ3VDO0FBR3ZDOztHQUVHO0FBQ0gsZ0JBQXdCLFNBQVEsb0JBQVM7SUFDckMsYUFBYSxDQUFDLElBQVU7UUFDcEIsSUFBSSxHQUFHLEVBQUUsS0FBSyxDQUFDO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBRTdCLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvRSxNQUFNLENBQUMsWUFBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFaRCxnQ0FZQztBQUVEOzs7OztHQUtHO0FBQ0gscUJBQXFCLEdBQVUsRUFBRSxHQUFVO0lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsR0FBRyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxpQkFBaUIsR0FBTztJQUNwQixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxHQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3BELE1BQU0sQ0FBQyxZQUFDLENBQUMsY0FBYyxFQUFFO1FBQ3JCLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2YseUJBQVcsQ0FBQyxHQUFHLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7S0FDcEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVEOzs7R0FHRztBQUNILHFCQUFxQixHQUFPO0lBQ3hCLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDcEQsTUFBTSxDQUFDLFlBQUMsQ0FBQyxjQUFjLEVBQUU7UUFDckIseUJBQVcsQ0FBQyxHQUFHLENBQUM7S0FDbkIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxlQUFlLEdBQU8sRUFBRSxHQUFPO0lBQzNCLE1BQU0sQ0FBQyxZQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxFQUFFLEVBQUUsY0FBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBQyxFQUFFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRUQsaUJBQWlCLEdBQU8sRUFBRSxHQUFPO0lBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxDQUFDLFlBQUMsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsWUFBQyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxZQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0FBQ0wsQ0FBQztBQUVELG1CQUFtQixDQUFPLEVBQUUsR0FBVTtJQUNsQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSyxLQUFLLFlBQUMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLEVBQUUsRUFBQyxjQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQUMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUMsRUFBRSxZQUFDLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RixNQUFNLENBQUMsWUFBQyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxnQkFBZ0IsS0FBUyxFQUFFLEdBQVU7SUFDakMsTUFBTSxRQUFRLEdBQUc7UUFDYixrQkFBa0IsRUFBRSwwQkFBMEI7UUFDOUMsY0FBYyxFQUFNLHNCQUFzQjtRQUMxQyxTQUFTLEVBQVcsZ0JBQWdCO1FBQ3BDLFlBQVksRUFBUSxvQkFBb0I7UUFDeEMsV0FBVyxFQUFTLG1CQUFtQjtRQUN2QyxTQUFTLEVBQVcsaUJBQWlCO1FBQ3JDLFdBQVcsRUFBUyxtQkFBbUI7UUFDdkMsaUJBQWlCLEVBQUcseUJBQXlCO1FBQzdDLFlBQVksRUFBUSxtQkFBbUI7UUFDdkMsY0FBYyxFQUFNLGdCQUFnQjtLQUN2QyxDQUFDO0lBQ0YsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSx5QkFBeUIsQ0FBQztJQUM5RCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVE7UUFDbEMsSUFBSSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxZQUFDLENBQUMsRUFBRSxFQUFFLEVBQUMsRUFBRSxFQUFDLGNBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUNKLENBQUM7SUFFRixPQUFPLENBQUMsT0FBTyxDQUFDLFlBQUMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFDLEVBQUUsWUFBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sQ0FBQyxZQUFDLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELHdCQUF3QixHQUFPLEVBQUUsR0FBTztJQUNwQyxJQUFJLENBQUM7UUFBQyxNQUFNLENBQUMsWUFBQyxDQUFDLGVBQWUsRUFBRTtZQUNwQywyQ0FBMkM7WUFDL0IsYUFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3BCLGtCQUFVLENBQUMsR0FBRyxDQUFDO1lBQ2Ysb0JBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3RCLGlCQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDdkIsWUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUN4QixtQkFBVyxDQUFDLEdBQUcsQ0FBQztZQUNoQixrQkFBVSxDQUFDLEdBQUcsQ0FBQztTQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsbUJBQW1CLEdBQU8sRUFBRSxHQUFHLEdBQUMsR0FBRztJQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVU7UUFDakIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFLLEtBQUssWUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUscUJBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLHFCQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDIn0=

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Comment sections may contain code examples that are placed within &lt;example&gt; tags.
 *
 * `hsdoc` will interpret and execute Javascript instructions within a &lt;`file name='script.js'`&gt; tag.
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
 * main hsdoc site menu and navigation.
 *
 * hsdoc internally uses the [global `Function` object][Function] to parse and execute the script.
 * Thus the script has access only to global objects and to objects provided
 * as parameters in the `Function` constructor. hsdoc currently provides the following namespaces as parameters
 * for use in the scripts:
 * - **m**: the `Mithril` m function
 * - **layout**: the {@link hsLayout: `hsLayout`} namespace, providing functions to layout the browser window.
 * - **widget**: the {@link hsGraph: `hsGraph`} namespace, providing various UI widget functions.
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
 * The modules `m`, `hsLayout`, and `hsGraph` will be added by default as
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlsbGFyZWRMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9QaWxsYXJlZExheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQTJDQSxxQ0FBd0M7QUFDeEMscUNBQW9FO0FBZ0J2RCxRQUFBLGFBQWEsR0FBRztJQUN6QixTQUFTLEVBQUUsTUFBTTtDQUNwQixDQUFDO0FBS0YsTUFBTSxPQUFPLEdBQUc7SUFDWixPQUFPLEVBQWdCO1FBQ25CLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7S0FDaEU7SUFDRCxJQUFJLEVBQWdCO1FBQ2hCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7S0FDaEU7Q0FDSixDQUFDO0FBT0YsYUFBdUIsU0FBUSxlQUFNO0lBYWpDLFlBQVksTUFBbUIsRUFBUyxRQUFzQjtRQUMxRCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEb0IsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUUxRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRWhDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxHQUFJLENBQUMsQ0FBQztRQUVkLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQWdCLEtBQUssQ0FBQyxJQUFJLFlBQVksbUJBQVUsQ0FBQyxDQUFDLEdBQUUs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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDdjODMxNzI4Zjc5MjlmMjJmOGEiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL0RvY1NldHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvdmlldy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvdmlldy9Ub2tlbnMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc2xheW91dC9taXRocmlsLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzd2lkZ2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL19kaXN0L3NyYy92aWV3L1BhcnRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy9jYWxsQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vbWl0aHJpbC90ZXN0LXV0aWxzL3BhcnNlVVJMLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9zaG93ZG93bi9kaXN0L3Nob3dkb3duLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL1NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL19kaXN0L3NyYy9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9fZGlzdC9zcmMvdmlldy9Eb2NzTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9fZGlzdC9zcmMvdmlldy9MZWZ0TmF2LmpzIiwid2VicGFjazovLy8uL19kaXN0L3NyYy92aWV3L01haW5Db21tZW50LmpzIiwid2VicGFjazovLy8uL19kaXN0L3NyYy92aWV3L01haW5EZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL3ZpZXcvTWFpbkV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rpc3Qvc3JjL3ZpZXcvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L2hzQ29uZmlnLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L3ZpZXcvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L3ZpZXcvUGlsbGFyZWRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvdmlldy9UaWxlTGF5b3V0LmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzdXRpbC9oc0NoZWNrc3VtLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzdXRpbC9oc1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHN1dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzdXRpbC9zaG93ZG93bi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc3dpZGdldC9oc01lbnUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvbWl0aHJpbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL29zcGVjL29zcGVjLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvcXVlcnlzdHJpbmcvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vbWl0aHJpbC90ZXN0LXV0aWxzL2Jyb3dzZXJNb2NrLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy9kb21Nb2NrLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy9wdXNoU3RhdGVNb2NrLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy94aHJNb2NrLmpzIiwid2VicGFjazovLy8vVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L3NldGltbWVkaWF0ZS9z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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7OztBQ25MdEMsbUNBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUMsRUFBRTtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FB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O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLElBQUk7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLEVBQUUsb0JBQW9CLElBQUk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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RUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtQkFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEhBQTRIO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxDQUFDIiwiZmlsZSI6ImhzRG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDdjODMxNzI4Zjc5MjlmMjJmOGEiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBpbGxhcnMgPSByZXF1aXJlKFwiLi92aWV3L1BpbGxhcmVkTGF5b3V0XCIpO1xuaWYgKHBpbGxhcnMpIHsgfVxuY29uc3QgdGlsZXMgPSByZXF1aXJlKFwiLi92aWV3L1RpbGVMYXlvdXRcIik7XG5pZiAodGlsZXMpIHsgfVxudmFyIENvbnRhaW5lcl8xID0gcmVxdWlyZShcIi4vdmlldy9Db250YWluZXJcIik7XG5leHBvcnRzLkNvbnRhaW5lciA9IENvbnRhaW5lcl8xLkNvbnRhaW5lcjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29udGFpbmVyXzEuQ29tcG9uZW50O1xudmFyIFRva2Vuc18xID0gcmVxdWlyZShcIi4vdmlldy9Ub2tlbnNcIik7XG5leHBvcnRzLkZJTEwgPSBUb2tlbnNfMS5GSUxMO1xuZXhwb3J0cy5weCA9IFRva2Vuc18xLnB4O1xuZXhwb3J0cy5wYyA9IFRva2Vuc18xLnBjO1xuZXhwb3J0cy5MYXlvdXRUb2tlbiA9IFRva2Vuc18xLkxheW91dFRva2VuO1xudmFyIExheW91dF8xID0gcmVxdWlyZShcIi4vdmlldy9MYXlvdXRcIik7XG5leHBvcnRzLkxheW91dCA9IExheW91dF8xLkxheW91dDtcbnZhciBoc0NvbmZpZ18xID0gcmVxdWlyZShcIi4vaHNDb25maWdcIik7XG5leHBvcnRzLkhzQ29uZmlnID0gaHNDb25maWdfMS5Ic0NvbmZpZztcbnZhciBtaXRocmlsXzEgPSByZXF1aXJlKFwiLi9taXRocmlsXCIpO1xuZXhwb3J0cy5tID0gbWl0aHJpbF8xLm07XG5leHBvcnRzLm8gPSBtaXRocmlsXzEubztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4cFJFRkJhMFU3UVVGQlRTeEZRVUZGTEVOQlFVRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF6dEJRVU4wUml3eVEwRkJPRVE3UVVGQlZTeEZRVUZGTEVOQlFVRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF6dEJRVVZ3Uml3NFEwRkJOa1E3UVVGQmNFUXNaME5CUVVFc1UwRkJVeXhEUVVGQk8wRkJRVVVzWjBOQlFVRXNVMEZCVXl4RFFVRkJPMEZCUXpkQ0xIZERRVUV3UkR0QlFVRnFSQ3gzUWtGQlFTeEpRVUZKTEVOQlFVRTdRVUZCUlN4elFrRkJRU3hGUVVGRkxFTkJRVUU3UVVGQlJTeHpRa0ZCUVN4RlFVRkZMRU5CUVVFN1FVRkJSU3dyUWtGQlFTeFhRVUZYTEVOQlFVRTdRVUZEYkVNc2QwTkJRVEJFTzBGQlFXcEVMREJDUVVGQkxFMUJRVTBzUTBGQlFUdEJRVU5tTEhWRFFVRjFSRHRCUVVFNVF5dzRRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRha0lzY1VOQlFYRkVPMEZCUVRWRExITkNRVUZCTEVOQlFVTXNRMEZCUVR0QlFVRlRMSE5DUVVGQkxFTkJRVU1zUTBGQlFTSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogRG9jU2V0cy50cy4gTG9hZHMgdGhlIGRvYy5qc29uIGZpbGVzIHRvIHByb2Nlc3MgYW5kIGRpc3BsYXkgYXMgZG9jdW1lbnRhdGlvbi5cbiAqIFByb2Nlc3Npbmcgb2NjdXJzIGluIHRoZXNlIHN0ZXBzOlxuICogMS4gTG9hZCB0aGUgaW5kZXguanNvbiBmaWxlIHRoYXQgY29udGFpbnMgYSBsaXN0IG9mIGRvYy5qc29uIGZpbGVzIHRvIGxvYWQsIG9uZSBmb3IgZWFjaCBsaWJyYXJ5IHRvIHNob3dcbiAqIDIuIExvYWQgZWFjaCBkb2MuanNvbiBmaWxlLCB3aGljaCBkZXNjcmliZXMgYSBsaWJyYXJ5XG4gKiAzLiBDYWxsIERvY1NldHMuYWRkIHRvIGFkZCB0aGUgbGlicmFyeSBuYW1lIHRvIHRoZSByZWdpc3RyeSBhbmQgY3JlYXRlIGFuIGluZGV4IG9mIGVudHJpZXMgZm9yIHRoZSBsaWJyYXJ5XG4gKi9cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqICovXG5jb25zdCBoc2xheW91dF8xID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuLyoqXG4gKiB0aGUgZGVmYXVsdCBsb2NhdGlvbiBmb3IgdGhlIGluZGV4IC5qc29uIGZpbGVzLCByZWxhdGl2ZSB0byB0aGUgd2ViIHBhZ2U6XG4gKiBgJy4vZGF0YS9pbmRleC5qc29uJ2BcbiAqL1xuY29uc3QgRklMRSA9ICcuL2RhdGEvaW5kZXguanNvbic7XG4vKipcbiAqIERvY1NldHMgb2JqZWN0LiBLZWVwcyBhIGxpc3Qgb2YgcmVnaXN0ZXJlZCBkb2NzZXRzIGFuZFxuICogcHJvdmlkZXMgYWNjZXNzIHRvIGVsZW1lbnRzIG9mIGVhY2ggZG9jc2V0LlxuICovXG5jbGFzcyBEb2NTZXRzIHtcbiAgICAvKiogQWRkcyB0aGUgZG9jc2V0IGluIGBjb250ZW50YCB0byB0aGUgYGdMaXN0YCAqL1xuICAgIHN0YXRpYyBhZGQoY29udGVudCkge1xuICAgICAgICBjb25zdCBsaWIgPSBjb250ZW50Lm5hbWU7XG4gICAgICAgIERvY1NldHMuZ0xpc3Quc2V0LnB1c2gobGliKTtcbiAgICAgICAgRG9jU2V0cy5nTGlzdC5zZXQuc29ydCgpO1xuICAgICAgICBEb2NTZXRzLmdMaXN0LmluZGV4W2xpYl0gPSB7fTtcbiAgICAgICAgcmVjdXJzaXZlSW5kZXgoY29udGVudCwgRG9jU2V0cy5nTGlzdC5pbmRleFtsaWJdLCBsaWIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBsb2FkcyBhbiBpbmRleCBzZXQgYW5kIHRoZSBkb2NzZXRzIGl0IGNvbnRhaW5zIGZyb20gZHJpZWN0b3J5IGBkaXJgLlxuICAgICAqIEBwYXJhbSBmaWxlIHRoZSBvcHRpb25hbCBkaXJlY3RvcnkgdG8gcmVhZCBmcm9tLiBJZiB1bnNwZWNpZmllZCxcbiAgICAgKiByZWFkIGZyb20gdGhlIGluZGV4IGZpbGUgc3BlY2lmaWVkIGJ5IHtAbGluayBEb2NTZXRzLkZJTEUgYEZJTEVgfS5cbiAgICAgKi9cbiAgICBzdGF0aWMgbG9hZExpc3QoZmlsZSkge1xuICAgICAgICBmaWxlID0gZmlsZSB8fCBGSUxFO1xuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdGluZyBkb2NTZXQgJyArIGZpbGUpO1xuICAgICAgICByZXR1cm4gRG9jU2V0cy5sb2FkSW5kZXhTZXQoZmlsZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIHNwZWNpZmllZCBkb2N1bWVudGF0aW9uIGVsZW1lbnQuXG4gICAgICogV2hlbiBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzLCBhIHN0cmluZ1tdIG9mIGF2YWlsYWJsZSBkb2NTZXRzIGlzIHJldHVybmVkLlxuICAgICAqIFdoZW4gY2FsbGVkIHdpdGggb25seSBgbGliYCBzcGVjaWZpZWQsIHRoZSBjb3JyZXNwb25kaW5nIGRvY1NldCBvdmVydmlldyBpcyByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0gbGliIHNwZWNpZmllcyB0aGUgZG9jc2V0IHRvIHNjYW4uXG4gICAgICogQHBhcmFtIGlkIHNwZWNpZmllcyB0aGUgZWxlbWVudCB3aXRoaW4gdGhlIGRvY1NldCwgZWl0aGVyIGJ5IGl0cyBpZCBudW1iZXIsIG9yIGJ5IGl0cyBwYXRoXG4gICAgICovXG4gICAgc3RhdGljIGdldChsaWIsIGlkID0gMCkge1xuICAgICAgICBpZiAobGliKSB7XG4gICAgICAgICAgICBpZiAoRG9jU2V0cy5nTGlzdC5pbmRleFtsaWJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERvY1NldHMuZ0xpc3QuaW5kZXhbbGliXVtpZCArICcnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBEb2NTZXRzLmdMaXN0LnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBEb2NTZXRzLmdMaXN0LnNldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkcyBgaW5kZXguanNvbmAgZnJvbSB0aGUgZGlyZWN0b3J5IHNwZWNpZmllZCBpbiBgZGlyYC5cbiAgICAgKiBFYWNoIGVudHJ5IGluIHRoZSBpbmRleCBpcyBpbnRlcnByZXRlZCBhcyBhIGRvY3NldCBhbmQgbG9hZGVkLlxuICAgICAqIEBwYXJhbSBkaXIgdGhlIGRpcmVjdG9yeSB0byByZWFkIGZyb21cbiAgICAgKiBAcGFyYW0gZmlsZSB0aGUgaW5kZXggZmlsZSB0byByZWFkXG4gICAgICovXG4gICAgc3RhdGljIGxvYWRJbmRleFNldChmaWxlKSB7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0ucmVxdWVzdCh7IG1ldGhvZDogXCJHRVRcIiwgdXJsOiBmaWxlIH0pXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2ZWQgaW5kZXgnKTtcbiAgICAgICAgICAgIERvY1NldHMuZ1RpdGxlID0gcmVzdWx0LnRpdGxlO1xuICAgICAgICAgICAgbGV0IGkgPSBmaWxlLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICAgICAgICBjb25zdCBkaXIgPSBmaWxlLnN1YnN0cmluZygwLCBpICsgMSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0LmRvY3MubWFwKChmKSA9PiBsb2FkRG9jU2V0KGRpciwgZikpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgfVxuICAgIHN0YXRpYyB0aXRsZSgpIHsgcmV0dXJuIERvY1NldHMuZ1RpdGxlOyB9XG59XG4vKiogQ29udGFpbnMgcmVmZXJlbmNlcyB0byB0aGUgZG9jc2V0cyBhbmQgYWxsIGVsZW1lbnRzIHBlciBkb2NzZXQsIGFjY2Vzc2libGUgcGVyIElELiAqL1xuRG9jU2V0cy5nTGlzdCA9IHsgc2V0OiBbXSwgaW5kZXg6IHt9IH07XG5leHBvcnRzLkRvY1NldHMgPSBEb2NTZXRzO1xuO1xuLyoqXG4gKiBMb2FkcyBhIGRvY3NldCBzcGVjaWZpZWQgYnkgZmlsZSBmcm9tIHRoZSBkaXJlY3RvcnkgYGRpcmAuXG4gKiBPbmNlIHJlY2VpdmVkLCB0aGUgZG9jc2V0IGlzIHJlZ2lzdGVyZWQgaW4gYG1vZHVsZXNgIHZpYSB0aGUgYGFkZGAgbWV0aG9kLlxuICogQHBhcmFtIGRpciB0aGUgZGlyZWN0b3J5IHRvIHJlYWQgZnJvbVxuICogQHBhcmFtIGZpbGUgdGhlIGBqc29uYCBmaWxlIHRvIGxvYWQgYXMgZG9jc2V0XG4gKi9cbmZ1bmN0aW9uIGxvYWREb2NTZXQoZGlyLCBmaWxlKSB7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubS5yZXF1ZXN0KHsgbWV0aG9kOiBcIkdFVFwiLCB1cmw6IGRpciArIGZpbGUgfSlcbiAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmVkICcgKyBkaXIgKyBmaWxlKTtcbiAgICAgICAgRG9jU2V0cy5hZGQocik7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbn1cbi8qKlxuICogcmVjdXJzZXMgdGhyb3VnaCB0aGUgZG9jc2V0IGFuZCByZWdpc3RlcnMgYWxsIGBjaGlsZHJlbmAgZW50cmllcyBvZiBhbiBlbnRyeSBieSBpZCxcbiAqIHN0YXJ0aW5nIHdpdGggdGhlIHJvb3QgZW50cnkuXG4gKiBAcGFyYW0gY29udGVudCB0aGUgZG9jc2V0IG9iamVjdCBsaXRlcmFsIHRvIHRyYXZlcnNlXG4gKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IGluIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBlbnRyaWVzXG4gKiBAcGFyYW0gbGliIHRoZSBkb2NzZXQgbmFtZSwgdXNlZCBmb3IgbmFtZSB2YWxpZGF0aW9uXG4gKi9cbmZ1bmN0aW9uIHJlY3Vyc2l2ZUluZGV4KGNvbnRlbnQsIGluZGV4LCBsaWIsIHBhdGggPSAnJykge1xuICAgIGNvbnRlbnQubGliID0gbGliO1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgY29udGVudC5uYW1lKSB7XG4gICAgICAgIGNvbnRlbnQubmFtZSA9IGNvbnRlbnQubmFtZS5yZXBsYWNlKC9bXCInXSguKylbXCInXXwoLispL2csIFwiJDEkMlwiKTsgLy8gcmVtb3ZlIHF1b3RlcyBcbiAgICAgICAgY29uc3QgZWxOYW1lID0gY29udGVudC5uYW1lLm1hdGNoKC8oW15cXC9dKykkLylbMV07IC8vIG5hbWUgPSBwYXJ0IGFmdGVyIGxhc3QgL1xuICAgICAgICBsZXQgbmV3UGF0aCA9IChwYXRoID09PSAnJykgPyBlbE5hbWUgOiBgJHtwYXRofS4ke2VsTmFtZX1gO1xuICAgICAgICBjb250ZW50LmZ1bGxQYXRoID0gbmV3UGF0aDtcbiAgICAgICAgY29udGVudC5uYW1lID0gZWxOYW1lO1xuICAgICAgICBpbmRleFtjb250ZW50LmlkICsgJyddID0gY29udGVudDtcbiAgICAgICAgaWYgKG5ld1BhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW5kZXhbbmV3UGF0aF0gPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb250ZW50LmNoaWxkcmVuLm1hcCgoYykgPT4gcmVjdXJzaXZlSW5kZXgoYywgaW5kZXgsIGxpYiwgbmV3UGF0aCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhlIGBuYW1lYCBvZiBgRXh0ZXJuYWwgbW9kdWxlYHMuIElmIHRoZSBgbmFtZWAgc3RhcnRzIHdpdGggdGhlIGBsaWJgIG5hbWVcbiAqIHRoZW4gdHJ1bmNhdGUgdGhlIG5hbWUgYnkgcmVtb3ZpbmcgJ2BsaWJgL3NyYy8nIGZyb20gdGhlIGxlZnQgc2lkZSBvZiB0aGUgbmFtZS5cbiAqIEBwYXJhbSBjb250ZW50IHRoZSBkb2NzZXQgdG8gZXZhbHVhdGVcbiAqIEBwYXJhbSBsaWIgdGhlIGxpYnJhcnkgbmFtZVxuICovXG4vKlxuZnVuY3Rpb24gdmFsaWRFeHRlcm5hbE1vZHVsZU5hbWUoY29udGVudDphbnksIGxpYjpzdHJpbmcpOmJvb2xlYW4ge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICBpZiAoY29udGVudC5raW5kU3RyaW5nICE9PSAnRXh0ZXJuYWwgbW9kdWxlJykgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIGVsc2UgaWYgKGNvbnRlbnQubmFtZS5pbmRleE9mKCcvJyk+MCAmJiBjb250ZW50Lm5hbWUuaW5kZXhPZihsaWIrJy9zcmMvJyk9PT0wKSB7XG4gICAgICAgIGxldCBqID0gKGxpYisnL3NyYy8nKS5sZW5ndGg7XG4gICAgICAgIGNvbnRlbnQubmFtZSA9IGNvbnRlbnQubmFtZS5zdWJzdHJpbmcoaik7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkc5alUyVjBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OUViMk5UWlhSekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdSMEZOUnpzN08wRkJSVWdzVFVGQlRUdEJRVU5PTEhWRFFVRm5RenRCUVVWb1F6czdPMGRCUjBjN1FVRkRTQ3hOUVVGTkxFbEJRVWtzUjBGQlZTeHRRa0ZCYlVJc1EwRkJRenRCUVVkNFF6czdPMGRCUjBjN1FVRkRTRHRKUVV0SkxHdEVRVUZyUkR0SlFVTXpReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFWYzdVVUZEZWtJc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTjZRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE5VSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEZWtJc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRemxDTEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRE0wUXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVms3VVVGREwwSXNTVUZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU03VVVGRGNFSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXh2UWtGQmIwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVONlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRlhMRVZCUVVVc1MwRkJhVUlzUTBGQlF6dFJRVU0zUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEwNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU16UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6TkRMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEU2l4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTTdXVUZETjBJc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTTNRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwc3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGWE8xRkJRMjVETEUxQlFVMHNRMEZCUXl4WlFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU03WVVGRGVrTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJWVHRaUVVOaUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dFpRVU01UWl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZET1VJc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNNVFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRlJMRXRCUVVzc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVVVzUTBGQlF5eERRVUZETzJGQlEwUXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUjAwc1RVRkJUU3hEUVVGRExFdEJRVXNzUzBGQlN5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQk9VUm9SQ3g1UmtGQmVVWTdRVUZETVVVc1lVRkJTeXhIUVVFMlFpeEZRVUZETEVkQlFVY3NSVUZCUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETzBGQlJuaEZMREJDUVdkRlF6dEJRVUZCTEVOQlFVTTdRVUZGUmpzN096czdSMEZMUnp0QlFVTklMRzlDUVVGdlFpeEhRVUZWTEVWQlFVVXNTVUZCVnp0SlFVTjJReXhOUVVGTkxFTkJRVU1zV1VGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRUUVVNM1F5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkxPMUZCUTFJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVkQlFVY3NSMEZCUnl4SFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM0JETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGJrSXNRMEZCUXl4RFFVRkRPMU5CUTBRc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTTFRaXhEUVVGRE8wRkJSVVE3T3pzN096dEhRVTFITzBGQlEwZ3NkMEpCUVhkQ0xFOUJRVmNzUlVGQlJTeExRVUZUTEVWQlFVVXNSMEZCVlN4RlFVRkZMRWxCUVVrc1IwRkJReXhGUVVGRk8wbEJReTlFTEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRMnhDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzU1VGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNNVF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEc5Q1FVRnZRaXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVVXNhVUpCUVdsQ08xRkJRM0pHTEUxQlFVMHNUVUZCVFN4SFFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRV2xDTERKQ1FVRXlRanRSUVVNdlJpeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJTeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1RVRkJUU3hGUVVGRkxFTkJRVU03VVVGRGVFUXNUMEZCVHl4RFFVRkRMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRE0wSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGRFSXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUXk5Q0xFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGQlF5eERRVUZETzFGQlEyNUVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJTeXhMUVVGTExHTkJRV01zUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkZMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wRkJRMHdzUTBGQlF6dEJRVU5FT3pzN096dEhRVXRITzBGQlEwZzdPenM3T3pzN096czdPMFZCVjBVaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL19kaXN0L3NyYy9Eb2NTZXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVG9rZW5zXzEgPSByZXF1aXJlKFwiLi9Ub2tlbnNcIik7XG5jbGFzcyBMYXlvdXQge1xuICAgIGNvbnN0cnVjdG9yKGFyZWFEZXNjKSB7XG4gICAgICAgIHRoaXMuYXJlYURlc2MgPSBhcmVhRGVzYztcbiAgICAgICAgdGhpcy5zcGFjaW5nID0gMDtcbiAgICB9XG4gICAgc3RhdGljIHRyYW5zbGF0ZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUb2tlbnNfMS5weChwYXJzZUludChwYXJhbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyYW0uZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVG9rZW5zXzEucGMocGFyc2VJbnQocGFyYW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLnRvTG93ZXJDYXNlKCkgPT09ICdmaWxsJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVG9rZW5zXzEuRklMTDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVnaXN0ZXIoa2V5d29yZCwgc3R5bGUpIHtcbiAgICAgICAgTGF5b3V0LmxheW91dFN0eWxlc1trZXl3b3JkXSA9IHN0eWxlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlTGF5b3V0KGF0dHJzLCBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjc3MgPSAnJztcbiAgICAgICAgT2JqZWN0LmtleXMoTGF5b3V0LmxheW91dFN0eWxlcykuc29tZShrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dHJzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjc3MgPSBuZXcgTGF5b3V0LmxheW91dFN0eWxlc1trZXldKExheW91dC50cmFuc2xhdGUoYXR0cnNba2V5XSkpLmdldFN0eWxlcyhjb21wb25lbnRzKTtcbiAgICAgICAgICAgICAgICBhdHRyc1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG4gICAgO1xufVxuTGF5b3V0LmxheW91dFN0eWxlcyA9IHt9O1xuZXhwb3J0cy5MYXlvdXQgPSBMYXlvdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUR0Y1YjNWMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZMaTR2YzNKakwzWnBaWGN2VEdGNWIzVjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlowSkJMSEZEUVVGM1F6dEJRWGxDZUVNN1NVRnpSVWtzV1VGQmJVSXNVVUZCYzBJN1VVRkJkRUlzWVVGQlVTeEhRVUZTTEZGQlFWRXNRMEZCWXp0UlFWSjZReXhaUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlVXZERMRU5CUVVNN1NVRjBSSEpETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJkMEk3VVVGRE4wTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVRkRMRU5CUVVNN1VVRkROME1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGblFqdFpRVU12UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFdEJRVXNzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNMVFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkJReXhOUVVGTkxFTkJRVU1zVjBGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVUZETEVOQlFVTTdaMEpCUTNwRUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVRkRMRTFCUVUwc1EwRkJReXhYUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRVU1zUTBGQlF6dG5Ra0ZEZUVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4TFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlFVTXNUVUZCVFN4RFFVRkRMR0ZCUVVrc1EwRkJRenRuUWtGQlFTeERRVUZETzFsQlEzSkVMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEU2l4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRMnBDTEVOQlFVTTdVVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU03U1VGUFRTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVdNc1JVRkJSU3hMUVVGdFFqdFJRVVYwUkN4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjZReXhEUVVGRE8wbEJWVTBzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRlRMRVZCUVVVc1ZVRkJkVUk3VVVGRGVrUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMklzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVYzdXVUZEY2tNc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRllpeEhRVUZITEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlEzWkdMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdaMEpCUTNaQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdXVUZEYUVJc1EwRkJRenRaUVVORUxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZEYWtJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenRKUVZjMFF5eERRVUZET3p0QlFXcEZka01zYlVKQlFWa3NSMEZCY1VJc1JVRkJSU3hEUVVGRE8wRkJUQzlETEhkQ1FYVkdReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc2xheW91dC92aWV3L0xheW91dC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIExheW91dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuICAgIGdldFNpemUoKSB7IHJldHVybiB0aGlzLnNpemU7IH1cbn1cbmV4cG9ydHMuTGF5b3V0VG9rZW4gPSBMYXlvdXRUb2tlbjtcbmNsYXNzIERlZmluZWRUb2tlbiBleHRlbmRzIExheW91dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7IHN1cGVyKHNpemUpOyB9XG59XG5leHBvcnRzLkRlZmluZWRUb2tlbiA9IERlZmluZWRUb2tlbjtcbmNsYXNzIEZpbGxUb2tlbiBleHRlbmRzIExheW91dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoLTEpOyB9XG59XG5leHBvcnRzLkZpbGxUb2tlbiA9IEZpbGxUb2tlbjtcbmNsYXNzIFBpeGVsVG9rZW4gZXh0ZW5kcyBEZWZpbmVkVG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgc3VwZXIoc2l6ZSk7IH1cbn1cbmV4cG9ydHMuUGl4ZWxUb2tlbiA9IFBpeGVsVG9rZW47XG5jbGFzcyBQZXJjZW50VG9rZW4gZXh0ZW5kcyBEZWZpbmVkVG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgc3VwZXIoc2l6ZSk7IH1cbn1cbmV4cG9ydHMuUGVyY2VudFRva2VuID0gUGVyY2VudFRva2VuO1xuZnVuY3Rpb24gcHgocHgpIHsgcmV0dXJuIG5ldyBQaXhlbFRva2VuKHB4KTsgfVxuZXhwb3J0cy5weCA9IHB4O1xuZnVuY3Rpb24gcGMocGMpIHsgcmV0dXJuIG5ldyBQZXJjZW50VG9rZW4ocGMpOyB9XG5leHBvcnRzLnBjID0gcGM7XG5leHBvcnRzLkZJTEwgPSBuZXcgRmlsbFRva2VuKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWRzlyWlc1ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZMaTR2YzNKakwzWnBaWGN2Vkc5clpXNXpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRTdTVUZEU1N4WlFVRnZRaXhKUVVGWk8xRkJRVm9zVTBGQlNTeEhRVUZLTEVsQlFVa3NRMEZCVVR0SlFVRkhMRU5CUVVNN1NVRkROMElzVDBGQlR5eExRVUZMTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dERRVU42UXp0QlFVaEVMR3REUVVkRE8wRkJTMFFzYTBKQlFXMURMRk5CUVZFc1YwRkJWenRKUVVOc1JDeFpRVUZaTEVsQlFWa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBOQlF6ZERPMEZCUmtRc2IwTkJSVU03UVVGTFJDeGxRVUYxUWl4VFFVRlJMRmRCUVZjN1NVRkRkRU1zWjBKQlFXZENMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0RFFVTXZRanRCUVVaRUxEaENRVVZETzBGQlMwUXNaMEpCUVhkQ0xGTkJRVkVzV1VGQldUdEpRVU40UXl4WlFVRlpMRWxCUVZjc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUXpWRE8wRkJSa1FzWjBOQlJVTTdRVUZMUkN4clFrRkJNRUlzVTBGQlVTeFpRVUZaTzBsQlF6RkRMRmxCUVZrc1NVRkJWeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1EwRkROVU03UVVGR1JDeHZRMEZGUXp0QlFVMUVMRmxCUVcxQ0xFVkJRVk1zU1VGQlRTeE5RVUZOTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlFUbEVMR2RDUVVFNFJEdEJRVTA1UkN4WlFVRnRRaXhGUVVGVExFbEJRVTBzVFVGQlRTeERRVUZETEVsQlFVa3NXVUZCV1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVUZvUlN4blFrRkJaMFU3UVVGTGJrUXNVVUZCUVN4SlFVRkpMRWRCUVVjc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzbGF5b3V0L3ZpZXcvVG9rZW5zLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmlmICghZ2xvYmFsWyd3aW5kb3cnXSkge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBub24tYnJvd3NlciBwb2x5ZmlsbCcpO1xuICAgIGdsb2JhbFsnd2luZG93J10gPSByZXF1aXJlKFwibWl0aHJpbC90ZXN0LXV0aWxzL2Jyb3dzZXJNb2NrLmpzXCIpKCk7XG4gICAgZ2xvYmFsWydkb2N1bWVudCddID0gd2luZG93LmRvY3VtZW50O1xufVxuZXhwb3J0cy5tID0gcmVxdWlyZShcIm1pdGhyaWxcIik7XG5jb25zdCBvID0gcmVxdWlyZShcIm1pdGhyaWwvb3NwZWMvb3NwZWNcIik7XG5leHBvcnRzLm8gPSBvO1xuby5yb290ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV2wwYUhKcGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5dGFYUm9jbWxzTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzQkNMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zSzBKQlFTdENMRU5CUVVNc1EwRkJRenRKUVVVM1F5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExHMURRVUZ0UXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOc1JTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF6dEJRVVY2UXl4RFFVRkRPMEZCUzFrc1VVRkJRU3hEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMEZCVDNCRExFMUJRVTBzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzBGQlIyaERMR05CUVVNN1FVRkdWaXhEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvbWl0aHJpbC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBoc01lbnVfMSA9IHJlcXVpcmUoXCIuL2hzTWVudVwiKTtcbmV4cG9ydHMuTWVudSA9IGhzTWVudV8xLk1lbnU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUFFTeHRRMEZCTWtNN1FVRkJiRU1zZDBKQlFVRXNTVUZCU1N4RFFVRkJJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc3dpZGdldC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhzbGF5b3V0XzEgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jb25zdCBUb29sdGlwXzEgPSByZXF1aXJlKFwiLi9Ub29sdGlwXCIpO1xuY29uc3QgRG9jU2V0c18xID0gcmVxdWlyZShcIi4uL0RvY1NldHNcIik7XG5jb25zdCBTb3VyY2VCYXNlID0gJ3NyYy8nO1xuLy8gVE9ETzogc29ydCBmbGFncyBpbiBhcnJheSB0byBnYXJhbnRlZSBzZXF1ZW5jZSBvZiBwcmludGluZ1xuZnVuY3Rpb24gZmxhZ3MoZmxhZ3MsIGlnbm9yZSA9IFtdKSB7XG4gICAgY29uc3Qga25vd25GbGFncyA9IHtcbiAgICAgICAgaXNFeHBvcnRlZDogJ2V4cG9ydCcsXG4gICAgICAgIGlzRXh0ZXJuYWw6ICcnLFxuICAgICAgICBpc1B1YmxpYzogJ3B1YmxpYycsXG4gICAgICAgIGlzUHJpdmF0ZTogJ3ByaXZhdGUnLFxuICAgICAgICBpc1Byb3RlY3RlZDogJ3Byb3RlY3RlZCcsXG4gICAgICAgIGlzQ29uc3RydWN0b3JQcm9wZXJ0eTogJ2NvbnN0cnVjdG9yUHJvcGVydHknLFxuICAgICAgICBpc1N0YXRpYzogJ3N0YXRpYycsXG4gICAgICAgIGlzT3B0aW9uYWw6ICdvcHRpb25hbCdcbiAgICB9O1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4nLCAhZmxhZ3MgPyBbXSA6XG4gICAgICAgIE9iamVjdC5rZXlzKGZsYWdzKS5tYXAoKGYpID0+IHtcbiAgICAgICAgICAgIGxldCBpZ24gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBmbGFnID0ga25vd25GbGFnc1tmXTtcbiAgICAgICAgICAgIGlmIChmbGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZ24gPSAoaWdub3JlLmluZGV4T2YoZmxhZykgPj0gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbGFnID0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oYHNwYW4uaHMtaXRlbS0ke2lnbiA/ICdpZ25vcmUnIDogKGZsYWcgPT09IGYgPyAndW5rbm93bicgOiBmbGFnKX0tZmxhZ2AsIGlnbiA/IHVuZGVmaW5lZCA6IGZsYWcpO1xuICAgICAgICB9KSk7XG59XG5leHBvcnRzLmZsYWdzID0gZmxhZ3M7XG5mdW5jdGlvbiBraW5kU3RyaW5nKG1kbCkge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1raW5kJywgbWRsLmtpbmRTdHJpbmcpO1xufVxuZXhwb3J0cy5raW5kU3RyaW5nID0ga2luZFN0cmluZztcbmZ1bmN0aW9uIGl0ZW1OYW1lKG1kbCwgc3ViKSB7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLW5hbWUnLCBsaWJMaW5rKCdhJywgbWRsLmxpYiwgc3ViLmZ1bGxQYXRoLCBzdWIubmFtZSkpO1xufVxuZXhwb3J0cy5pdGVtTmFtZSA9IGl0ZW1OYW1lO1xuZnVuY3Rpb24gaXRlbUxvbmdOYW1lKG1kbCwgc3ViKSB7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLW5hbWUnLCBsaWJMaW5rKCdhJywgbWRsLmxpYiwgbWRsLmZ1bGxQYXRoLCBzdWIubmFtZSkpO1xufVxuZXhwb3J0cy5pdGVtTG9uZ05hbWUgPSBpdGVtTG9uZ05hbWU7XG5mdW5jdGlvbiBpdGVtVG9vbHRpcChtZGwpIHtcbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tbmFtZScsIFRvb2x0aXBfMS50b29sdGlwKG1kbC5uYW1lLCAnY2xhc3MgbmFtZSBhbmQgdGhlbiBzb21lJywgJ2JvdHRvbScpKTtcbn1cbmV4cG9ydHMuaXRlbVRvb2x0aXAgPSBpdGVtVG9vbHRpcDtcbmZ1bmN0aW9uIGV4dGVuc2lvbk9mKG1kbCkge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1leHRlbnNpb25zJywgIW1kbC5leHRlbmRlZFR5cGVzID8gdW5kZWZpbmVkIDogW1xuICAgICAgICBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1leHRlbmRzJywgJ2V4dGVuZHMnKSxcbiAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuJywgbWRsLmV4dGVuZGVkVHlwZXMubWFwKCh0LCBpKSA9PiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1leHRlbnNpb24nLCBbXG4gICAgICAgICAgICBsaWJMaW5rKCdhJywgbWRsLmxpYiwgRG9jU2V0c18xLkRvY1NldHMuZ2V0KG1kbC5saWIsIHQuaWQpLmZ1bGxQYXRoLCB0Lm5hbWUpLFxuICAgICAgICAgICAgbWRsLmV4dGVuZGVkVHlwZXMubWFwLmxlbmd0aCA+IChpICsgMSkgPyAnLCAnIDogJydcbiAgICAgICAgXSkpKSxcbiAgICBdKTtcbn1cbmV4cG9ydHMuZXh0ZW5zaW9uT2YgPSBleHRlbnNpb25PZjtcbmZ1bmN0aW9uIHNvdXJjZUxpbmsobWRsKSB7XG4gICAgY29uc3Qgc291cmNlID0gbWRsLnNvdXJjZXMgPyBtZGwuc291cmNlc1swXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGxldCBmaWxlID0gKHNvdXJjZSAmJiBzb3VyY2UuZmlsZU5hbWUpID8gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoJy50cycsICcuaHRtbCcpIDogJyc7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmlsZS5pbmRleE9mKG1kbC5saWIpO1xuICAgICAgICBmaWxlID0gZmlsZS5zdWJzdHIoaW5kZXgpOyAvLyBvbmx5IGNvbnNpZGVyIGxpbmtzIHdpdGhpbiB0aGUgZG9jU2V0IChldmVyeXRoaW5nIGFmdGVyIHRoZSBsaWIgbmFtZSlcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLW1lbWJlci1zb3VyY2UnLCBoc2xheW91dF8xLm0oJ2EnLCB7IGhyZWY6IGAke1NvdXJjZUJhc2V9JHtmaWxlfSMke01hdGgubWF4KDAsIHNvdXJjZS5saW5lIC0gNSl9YCwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sICdbc291cmNlXScpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1tZW1iZXItc291cmNlJywgJycpO1xuICAgIH1cbn1cbmV4cG9ydHMuc291cmNlTGluayA9IHNvdXJjZUxpbms7XG4vKipcbiAqIGNyZWF0ZXMgYSBsaWJyYXJ5IGxpbmsgb24gdGhlIHNwZWNpZmllZCBgbmFtZWAuXG4gKiBUaGUgbGluayBwb2ludHMgdG8gYC9hcGkvPGxpYj4vPGlkPmBcbiAqIEBwYXJhbSBjc3MgdGhlIGNzcyB0YWcgc2VsZWN0b3IgdG8gdXNlXG4gKiBAcGFyYW0gY2xzIHRoZSBjc3MgY2xhc3Mgc2VsZWN0b3IgdG8gdXNlXG4gKiBAcGFyYW0gbGliIHRoZSBsaWIgc3RyaW5nIHRvIHBvaW50IHRvXG4gKiBAcGFyYW0gaWQgdGhlIGlkIG51bWJlciB0byBwb2ludCB0b1xuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb24gd2hpY2ggdG8gZm9ybXQgaGUgbGlua1xuICovXG5mdW5jdGlvbiBsaWJMaW5rKGNzcywgbGliLCBpZCwgbmFtZSkge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oY3NzLCB7IGhyZWY6IGAvYXBpLyR7bGlifS8ke2lkfWAsIG9uY3JlYXRlOiBoc2xheW91dF8xLm0ucm91dGUubGluaywgb251cGRhdGU6IGhzbGF5b3V0XzEubS5yb3V0ZS5saW5rIH0sIG5hbWUpO1xufVxuZXhwb3J0cy5saWJMaW5rID0gbGliTGluaztcbjtcbmZ1bmN0aW9uIHR5cGUodCwgbGliKSB7XG4gICAgZnVuY3Rpb24gX3R5cGUodCkge1xuICAgICAgICBzd2l0Y2ggKHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW5zdHJpbmN0JzogcmV0dXJuIHQuaWQgPyBsaWJMaW5rKCdzcGFuJywgbGliLCB0LmZ1bGxQYXRoLCB0Lm5hbWUpIDogdC5uYW1lO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nTGl0ZXJhbCc6IHJldHVybiB0LnR5cGU7XG4gICAgICAgICAgICBjYXNlICd1bmlvbic6IHJldHVybiB0LnR5cGVzLm1hcChfdHlwZSkuam9pbignIHwgJyk7XG4gICAgICAgICAgICBjYXNlICdyZWZlcmVuY2UnOiByZXR1cm4gdC50eXBlQXJndW1lbnRzID8gdC5uYW1lICsgJzwnICsgdC50eXBlQXJndW1lbnRzLm1hcChfdHlwZSkuam9pbignLCAnKSArICc+JyA6XG4gICAgICAgICAgICAgICAgdC5pZCA/IGxpYkxpbmsoJ3NwYW4nLCBsaWIsIHQuZnVsbFBhdGgsIHQubmFtZSkgOiB0Lm5hbWU7XG4gICAgICAgICAgICBjYXNlICdyZWZsZWN0aW9uJzogcmV0dXJuIHQuZGVjbGFyYXRpb24gPyB0LmRlY2xhcmF0aW9uLmtpbmRTdHJpbmcgOiAnVU5LTk9XTic7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmtub3duIHR5cGUgJyArIHQudHlwZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQudHlwZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCdzcGFuJywgdCA/IFtcbiAgICAgICAgICAgIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLW5hbWUnLCAnOicpLFxuICAgICAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tc2lnLXR5cGUnLCBfdHlwZSh0KSlcbiAgICAgICAgXSA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRyYWNlKTtcbiAgICB9XG59XG5leHBvcnRzLnR5cGUgPSB0eXBlO1xuLyoqXG4gKiBjcmVhdGVzIGEgZnVuY3Rpb24gb3IgbWV0aG9kIHNpZ25hdHVyZVxuICovXG5mdW5jdGlvbiBzaWduYXR1cmUocywgbGliKSB7XG4gICAgZnVuY3Rpb24gY29tbWEoaSkgeyByZXR1cm4gKGkgPiAwKSA/ICcsICcgOiAnJzsgfVxuICAgIGZ1bmN0aW9uIG9wdGlvbmFsKGZsYWdzKSB7XG4gICAgICAgIHJldHVybiAoZmxhZ3MgJiYgZmxhZ3MuaXNPcHRpb25hbCkgPyAnLmhzLWl0ZW0tb3B0aW9uYWwnIDogJyc7XG4gICAgfVxuICAgIGxldCBzaWc7XG4gICAgaWYgKHMgJiYgcy5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHNpZyA9IHMucGFyYW1ldGVycy5tYXAoKHAsIGkpID0+IGhzbGF5b3V0XzEubSgnc3BhbicsIFtcbiAgICAgICAgICAgIGNvbW1hKGkpLFxuICAgICAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tc2lnLXBhcmFtJywgW1xuICAgICAgICAgICAgICAgIGhzbGF5b3V0XzEubShgc3Bhbi5ocy1pdGVtLW5hbWUke29wdGlvbmFsKHAuZmxhZ3MpfWAsIHAubmFtZSksXG4gICAgICAgICAgICAgICAgdHlwZShwLnR5cGUsIGxpYilcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pKTtcbiAgICAgICAgc2lnLnVuc2hpZnQoaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tbmFtZScsICcoJykpO1xuICAgICAgICBzaWcucHVzaChoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1uYW1lJywgJyknKSk7XG4gICAgfVxuICAgIHJldHVybiBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1zaWduYXR1cmUnLCBzaWcpO1xufVxuZXhwb3J0cy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG5mdW5jdGlvbiBtYWtlSUQoc2VjdGlvbiwgbWRsKSB7XG4gICAgbGV0IHJlc3VsdCA9IHNlY3Rpb24gPyBzZWN0aW9uICsgJ18nIDogJyc7XG4gICAgcmVzdWx0ID0gKHJlc3VsdCArIChtZGwubmFtZSB8fCAnJykpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIChyZXN1bHQgIT09ICcnKSA/IHJlc3VsdCA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMubWFrZUlEID0gbWFrZUlEO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUdGeWRITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5emNtTXZkbWxsZHk5UVlYSjBjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMSFZEUVVGdFF6dEJRVU51UXl4MVEwRkJiME03UVVGRGNFTXNkME5CUVhGRE8wRkJSWEpETEUxQlFVMHNWVUZCVlN4SFFVRkhMRTFCUVUwc1EwRkJRenRCUVVjeFFpdzJSRUZCTmtRN1FVRkROMFFzWlVGQmMwSXNTMEZCVXl4RlFVRkZMRk5CUVdkQ0xFVkJRVVU3U1VGREwwTXNUVUZCVFN4VlFVRlZMRWRCUVVjN1VVRkRaaXhWUVVGVkxFVkJRV01zVVVGQlVUdFJRVU5vUXl4VlFVRlZMRVZCUVdNc1JVRkJSVHRSUVVNeFFpeFJRVUZSTEVWQlFXZENMRkZCUVZFN1VVRkRhRU1zVTBGQlV5eEZRVUZsTEZOQlFWTTdVVUZEYWtNc1YwRkJWeXhGUVVGaExGZEJRVmM3VVVGRGJrTXNjVUpCUVhGQ0xFVkJRVWNzY1VKQlFYRkNPMUZCUXpkRExGRkJRVkVzUlVGQlowSXNVVUZCVVR0UlFVTm9ReXhWUVVGVkxFVkJRV01zVlVGQlZUdExRVU55UXl4RFFVRkRPMGxCUTBZc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4TFFVRkxMRWRCUVVVc1JVRkJSVHRSUVVOMlFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFWRTdXVUZETlVJc1NVRkJTU3hIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETzFsQlEyaENMRWxCUVVrc1NVRkJTU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUVVNc1EwRkJRenRaUVVNNVJDeEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzFsQlFVTXNRMEZCUXp0WlFVTnNRaXhOUVVGTkxFTkJRVU1zV1VGQlF5eERRVUZETEdkQ1FVRm5RaXhIUVVGSExFZEJRVU1zVVVGQlVTeEhRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkhMRU5CUVVNc1IwRkJReXhUUVVGVExFZEJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRWRCUVVVc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEyNUhMRU5CUVVNc1EwRkJReXhEUVVOTUxFTkJRVU03UVVGRFRpeERRVUZETzBGQmNFSkVMSE5DUVc5Q1F6dEJRVVZFTEc5Q1FVRXlRaXhIUVVGUE8wbEJRemxDTEUxQlFVMHNRMEZCUXl4WlFVRkRMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8wRkJRMnhFTEVOQlFVTTdRVUZHUkN4blEwRkZRenRCUVVWRUxHdENRVUY1UWl4SFFVRlBMRVZCUVVVc1IwRkJUenRKUVVOeVF5eE5RVUZOTEVOQlFVTXNXVUZCUXl4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEycEdMRU5CUVVNN1FVRkdSQ3cwUWtGRlF6dEJRVVZFTEhOQ1FVRTJRaXhIUVVGUExFVkJRVVVzUjBGQlR6dEpRVU42UXl4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJwR0xFTkJRVU03UVVGR1JDeHZRMEZGUXp0QlFVZEVMSEZDUVVFMFFpeEhRVUZQTzBsQlF5OUNMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc2FVSkJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMREJDUVVFd1FpeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRNMFlzUTBGQlF6dEJRVVpFTEd0RFFVVkRPMEZCUlVRc2NVSkJRVFJDTEVkQlFVODdTVUZETDBJc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eDVRa0ZCZVVJc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEVkQlFVVXNVMEZCVXl4SFFVRkhPMUZCUTJoRkxGbEJRVU1zUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hUUVVGVExFTkJRVU03VVVGRGNFTXNXVUZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVzc1JVRkJSU3hEUVVGUkxFdEJRelZETEZsQlFVTXNRMEZCUXl4M1FrRkJkMElzUlVGQlJUdFpRVU40UWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNhVUpCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRiRVVzUjBGQlJ5eERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkZMRWxCUVVrc1IwRkJSU3hGUVVGRk8xTkJReTlETEVOQlFVTXNRMEZEVEN4RFFVRkRPMHRCUTB3c1EwRkJReXhEUVVGRE8wRkJRMUFzUTBGQlF6dEJRVlpFTEd0RFFWVkRPMEZCUlVRc2IwSkJRVEpDTEVkQlFVODdTVUZET1VJc1RVRkJUU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEU5QlFVOHNSMEZCUlN4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0SlFVTjJSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFRc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGRkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEY2tZc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGNFTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4M1JVRkJkMFU3VVVGRGJrY3NUVUZCVFN4RFFVRkRMRmxCUVVNc1EwRkJReXcwUWtGQk5FSXNSVUZEYWtNc1dVRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUXl4SFFVRkhMRlZCUVZVc1IwRkJSeXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJReXhSUVVGUkxFVkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZEYmtjc1EwRkJRenRKUVVOT0xFTkJRVU03U1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTktMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zTkVKQlFUUkNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0QlFVTk1MRU5CUVVNN1FVRmFSQ3huUTBGWlF6dEJRVVZFT3pzN096czdPenRIUVZGSE8wRkJRMGdzYVVKQlFYZENMRWRCUVZVc1JVRkJSU3hIUVVGVkxFVkJRVVVzUlVGQlV5eEZRVUZGTEVsQlFWYzdTVUZEYkVVc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMRmxCUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNSVUZCUlN4WlFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNSSExFTkJRVU03UVVGR1JDd3dRa0ZGUXp0QlFVRkJMRU5CUVVNN1FVRkZSaXhqUVVGeFFpeERRVUZMTEVWQlFVVXNSMEZCVlR0SlFVTnNReXhsUVVGbExFTkJRVXM3VVVGRGFFSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWWl4TFFVRkxMRmRCUVZjc1JVRkJVU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTNaR0xFdEJRVXNzWlVGQlpTeEZRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRM1JETEV0QlFVc3NUMEZCVHl4RlFVRlpMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZET1VRc1MwRkJTeXhYUVVGWExFVkJRVkVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4aFFVRmhMRWRCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlF5eEhRVUZITEVkQlFVVXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWM3WjBKQlEzaEZMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU4yUml4TFFVRkxMRmxCUVZrc1JVRkJUeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSMEZCUlN4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExGVkJRVlVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdXVUZEYmtZN1owSkJRVk1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4bFFVRmxMRWRCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTnlReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVObUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUXpOQ0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNTVUZCU1N4RFFVRkRPMUZCUTBZc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkRPMWxCUTJZc1dVRkJReXhEUVVGRExHMUNRVUZ0UWl4RlFVRkRMRWRCUVVjc1EwRkJRenRaUVVNeFFpeFpRVUZETEVOQlFVTXNkVUpCUVhWQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNSRExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVGRExFdEJRVXNzUTBGQlFTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkJReXhEUVVGRE8wRkJRM2hFTEVOQlFVTTdRVUZ5UWtRc2IwSkJjVUpETzBGQlJVUTdPMGRCUlVjN1FVRkRTQ3h0UWtGQk1FSXNRMEZCU3l4RlFVRkZMRWRCUVZVN1NVRkRka01zWlVGQlpTeERRVUZSTEVsQlFWTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZGTEVsQlFVa3NSMEZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BFTEd0Q1FVRnJRaXhMUVVGVk8xRkJRM2hDTEUxQlFVMHNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVVXNiVUpCUVcxQ0xFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEycEZMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFZEJRVWNzUTBGQlF6dEpRVU5TTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGTExFVkJRVVVzUTBGQlVTeExRVUZMTEZsQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRiRVFzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRmxCUVVNc1EwRkJReXgzUWtGQmQwSXNSVUZCUlR0blFrRkRlRUlzV1VGQlF5eERRVUZETEc5Q1FVRnZRaXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dG5Ra0ZEYkVRc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRPMkZCUTNCQ0xFTkJRVU03VTBGRFRDeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTktMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQlF5eERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZWtNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZETEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXhReXhEUVVGRE8wbEJRMFFzVFVGQlRTeERRVUZETEZsQlFVTXNRMEZCUXl4M1FrRkJkMElzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTTFReXhEUVVGRE8wRkJia0pFTERoQ1FXMUNRenRCUVVWRUxHZENRVUYxUWl4UFFVRmpMRVZCUVVVc1IwRkJUenRKUVVNeFF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4UFFVRlBMRWRCUVVVc1QwRkJUeXhIUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEZGtNc1RVRkJUU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMGxCUTI1RUxFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNTMEZCUnl4RlFVRkZMRU5CUVVNc1IwRkJSU3hOUVVGTkxFZEJRVWNzVTBGQlV5eERRVUZETzBGQlF6ZERMRU5CUVVNN1FVRktSQ3gzUWtGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL19kaXN0L3NyYy92aWV3L1BhcnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogc2V0VGltZW91dFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL3Rlc3QtdXRpbHMvY2FsbEFzeW5jLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VVUkwodXJsLCByb290KSB7XG5cdHZhciBkYXRhID0ge31cblx0dmFyIHByb3RvY29sSW5kZXggPSB1cmwuaW5kZXhPZihcIjovL1wiKVxuXHR2YXIgcGF0aG5hbWVJbmRleCA9IHByb3RvY29sSW5kZXggPiAtMSA/IHVybC5pbmRleE9mKFwiL1wiLCBwcm90b2NvbEluZGV4ICsgMykgOiB1cmwuaW5kZXhPZihcIi9cIilcblx0dmFyIHNlYXJjaEluZGV4ID0gdXJsLmluZGV4T2YoXCI/XCIpXG5cdHZhciBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIilcblx0aWYgKChwYXRobmFtZUluZGV4ID4gc2VhcmNoSW5kZXggJiYgc2VhcmNoSW5kZXggPiAtMSkgfHwgKHBhdGhuYW1lSW5kZXggPiBoYXNoSW5kZXggJiYgaGFzaEluZGV4ID4gLTEpKSBwYXRobmFtZUluZGV4ID0gLTFcblx0aWYgKHNlYXJjaEluZGV4ID4gaGFzaEluZGV4ICYmIGhhc2hJbmRleCA+IC0xKSBzZWFyY2hJbmRleCA9IC0xXG5cdHZhciBwYXRobmFtZUVuZCA9IHNlYXJjaEluZGV4ID4gLTEgPyBzZWFyY2hJbmRleCA6IGhhc2hJbmRleCA+IC0xID8gaGFzaEluZGV4IDogdXJsLmxlbmd0aFxuXHRpZiAocHJvdG9jb2xJbmRleCA+IC0xKSB7XG5cdFx0Ly9pdCdzIGEgZnVsbCBVUkxcblx0XHRpZiAocGF0aG5hbWVJbmRleCA8IDApIHBhdGhuYW1lSW5kZXggPSB1cmwubGVuZ3RoXG5cdFx0dmFyIHBvcnRJbmRleCA9IHVybC5pbmRleE9mKFwiOlwiLCBwcm90b2NvbEluZGV4ICsgMSlcblx0XHRpZiAocG9ydEluZGV4IDwgMCkgcG9ydEluZGV4ID0gcGF0aG5hbWVJbmRleFxuXHRcdGRhdGEucHJvdG9jb2wgPSB1cmwuc2xpY2UoMCwgcHJvdG9jb2xJbmRleCArIDEpXG5cdFx0ZGF0YS5ob3N0bmFtZSA9IHVybC5zbGljZShwcm90b2NvbEluZGV4ICsgMywgcG9ydEluZGV4KVxuXHRcdGRhdGEucG9ydCA9IHVybC5zbGljZShwb3J0SW5kZXggKyAxLCBwYXRobmFtZUluZGV4KVxuXHRcdGRhdGEucGF0aG5hbWUgPSB1cmwuc2xpY2UocGF0aG5hbWVJbmRleCwgcGF0aG5hbWVFbmQpIHx8IFwiL1wiXG5cdH1cblx0ZWxzZSB7XG5cdFx0ZGF0YS5wcm90b2NvbCA9IHJvb3QucHJvdG9jb2xcblx0XHRkYXRhLmhvc3RuYW1lID0gcm9vdC5ob3N0bmFtZVxuXHRcdGRhdGEucG9ydCA9IHJvb3QucG9ydFxuXHRcdGlmIChwYXRobmFtZUluZGV4ID09PSAwKSB7XG5cdFx0XHQvL2l0J3MgYW4gYWJzb2x1dGUgcGF0aFxuXHRcdFx0ZGF0YS5wYXRobmFtZSA9IHVybC5zbGljZShwYXRobmFtZUluZGV4LCBwYXRobmFtZUVuZCkgfHwgXCIvXCJcblx0XHR9XG5cdFx0ZWxzZSBpZiAoc2VhcmNoSW5kZXggIT09IDAgJiYgaGFzaEluZGV4ICE9PSAwKSB7XG5cdFx0XHQvL2l0J3MgYSByZWxhdGl2ZSBwYXRoXG5cdFx0XHR2YXIgc2xhc2hJbmRleCA9IHJvb3QucGF0aG5hbWUubGFzdEluZGV4T2YoXCIvXCIpXG5cdFx0XHR2YXIgcGF0aCA9IHNsYXNoSW5kZXggPiAtMSA/IHJvb3QucGF0aG5hbWUuc2xpY2UoMCwgc2xhc2hJbmRleCArIDEpIDogXCIuL1wiXG5cdFx0XHR2YXIgbm9ybWFsaXplZCA9IHVybC5zbGljZSgwLCBwYXRobmFtZUVuZCkucmVwbGFjZSgvXlxcLiQvLCByb290LnBhdGhuYW1lLnNsaWNlKHNsYXNoSW5kZXggKyAxKSkucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpXG5cdFx0XHR2YXIgZG90ZG90ID0gL1xcL1teXFwvXSs/XFwvXFwuezJ9L2dcblx0XHRcdHZhciBwYXRobmFtZSA9IHBhdGggKyBub3JtYWxpemVkXG5cdFx0XHRwYXRobmFtZSA9IHBhdGggKyBub3JtYWxpemVkXG5cdFx0XHR3aGlsZSAoZG90ZG90LnRlc3QocGF0aG5hbWUpKSBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoZG90ZG90LCBcIlwiKVxuXHRcdFx0cGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9cXC9cXC5cXC8vZywgXCIvXCIpLnJlcGxhY2UoL14oXFwvXFwuezJ9KSsvLCBcIlwiKSB8fCBcIi9cIlxuXHRcdFx0ZGF0YS5wYXRobmFtZSA9IHBhdGhuYW1lXG5cdFx0fVxuXHR9XG5cdHZhciBzZWFyY2hFbmQgPSBoYXNoSW5kZXggPiAtMSA/IGhhc2hJbmRleCA6IHVybC5sZW5ndGhcblx0ZGF0YS5zZWFyY2ggPSBzZWFyY2hJbmRleCA+IC0xID8gdXJsLnNsaWNlKHNlYXJjaEluZGV4LCBzZWFyY2hFbmQpIDogXCJcIlxuXHRkYXRhLmhhc2ggPSBoYXNoSW5kZXggPiAtMSA/IHVybC5zbGljZShoYXNoSW5kZXgpIDogXCJcIlxuXHRyZXR1cm4gZGF0YVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL3Rlc3QtdXRpbHMvcGFyc2VVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI7LyohIHNob3dkb3duIDAyLTA2LTIwMTcgKi9cclxuKGZ1bmN0aW9uKCl7XHJcbi8qKlxuICogQ3JlYXRlZCBieSBUaXZpZSBvbiAxMy0wNy0yMDE1LlxuICovXG5cbmZ1bmN0aW9uIGdldERlZmF1bHRPcHRzIChzaW1wbGUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBvbWl0RXh0cmFXTEluQ29kZUJsb2Nrczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnT21pdCB0aGUgZGVmYXVsdCBleHRyYSB3aGl0ZWxpbmUgYWRkZWQgdG8gY29kZSBibG9ja3MnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBub0hlYWRlcklkOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdUdXJuIG9uL29mZiBnZW5lcmF0ZWQgaGVhZGVyIGlkJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgcHJlZml4SGVhZGVySWQ6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ1NwZWNpZnkgYSBwcmVmaXggdG8gZ2VuZXJhdGVkIGhlYWRlciBpZHMnLFxuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIGdoQ29tcGF0aWJsZUhlYWRlcklkOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdHZW5lcmF0ZSBoZWFkZXIgaWRzIGNvbXBhdGlibGUgd2l0aCBnaXRodWIgc3R5bGUgKHNwYWNlcyBhcmUgcmVwbGFjZWQgd2l0aCBkYXNoZXMsIGEgYnVuY2ggb2Ygbm9uIGFscGhhbnVtZXJpYyBjaGFycyBhcmUgcmVtb3ZlZCknLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBoZWFkZXJMZXZlbFN0YXJ0OiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdUaGUgaGVhZGVyIGJsb2NrcyBsZXZlbCBzdGFydCcsXG4gICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICB9LFxuICAgIHBhcnNlSW1nRGltZW5zaW9uczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnVHVybiBvbi9vZmYgaW1hZ2UgZGltZW5zaW9uIHBhcnNpbmcnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBzaW1wbGlmaWVkQXV0b0xpbms6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ1R1cm4gb24vb2ZmIEdGTSBhdXRvbGluayBzdHlsZScsXG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9LFxuICAgIGV4Y2x1ZGVUcmFpbGluZ1B1bmN0dWF0aW9uRnJvbVVSTHM6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ0V4Y2x1ZGVzIHRyYWlsaW5nIHB1bmN0dWF0aW9uIGZyb20gbGlua3MgZ2VuZXJhdGVkIHdpdGggYXV0b0xpbmtpbmcnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBsaXRlcmFsTWlkV29yZFVuZGVyc2NvcmVzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdQYXJzZSBtaWR3b3JkIHVuZGVyc2NvcmVzIGFzIGxpdGVyYWwgdW5kZXJzY29yZXMnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBsaXRlcmFsTWlkV29yZEFzdGVyaXNrczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnUGFyc2UgbWlkd29yZCBhc3Rlcmlza3MgYXMgbGl0ZXJhbCBhc3Rlcmlza3MnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBzdHJpa2V0aHJvdWdoOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6ICdUdXJuIG9uL29mZiBzdHJpa2V0aHJvdWdoIHN1cHBvcnQnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICB0YWJsZXM6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ1R1cm4gb24vb2ZmIHRhYmxlcyBzdXBwb3J0JyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgdGFibGVzSGVhZGVySWQ6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmliZTogJ0FkZCBhbiBpZCB0byB0YWJsZSBoZWFkZXJzJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgZ2hDb2RlQmxvY2tzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IHRydWUsXG4gICAgICBkZXNjcmliZTogJ1R1cm4gb24vb2ZmIEdGTSBmZW5jZWQgY29kZSBibG9ja3Mgc3VwcG9ydCcsXG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9LFxuICAgIHRhc2tsaXN0czoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnVHVybiBvbi9vZmYgR0ZNIHRhc2tsaXN0IHN1cHBvcnQnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBzbW9vdGhMaXZlUHJldmlldzoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaWJlOiAnUHJldmVudHMgd2VpcmQgZWZmZWN0cyBpbiBsaXZlIHByZXZpZXdzIGR1ZSB0byBpbmNvbXBsZXRlIGlucHV0JyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgc21hcnRJbmRlbnRhdGlvbkZpeDoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVHJpZXMgdG8gc21hcnRseSBmaXggaW5kZW50YXRpb24gaW4gZXM2IHN0cmluZ3MnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBkaXNhYmxlRm9yY2VkNFNwYWNlc0luZGVudGVkU3VibGlzdHM6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHRoZSByZXF1aXJlbWVudCBvZiBpbmRlbnRpbmcgbmVzdGVkIHN1Ymxpc3RzIGJ5IDQgc3BhY2VzJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgc2ltcGxlTGluZUJyZWFrczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGFyc2VzIHNpbXBsZSBsaW5lIGJyZWFrcyBhcyA8YnI+IChHRk0gU3R5bGUpJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgcmVxdWlyZVNwYWNlQmVmb3JlSGVhZGluZ1RleHQ6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ01ha2VzIGFkZGluZyBhIHNwYWNlIGJldHdlZW4gYCNgIGFuZCB0aGUgaGVhZGVyIHRleHQgbWFuZGF0b3J5IChHRk0gU3R5bGUpJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgZ2hNZW50aW9uczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW5hYmxlcyBnaXRodWIgQG1lbnRpb25zJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgZ2hNZW50aW9uc0xpbms6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS97dX0nLFxuICAgICAgZGVzY3JpcHRpb246ICdDaGFuZ2VzIHRoZSBsaW5rIGdlbmVyYXRlZCBieSBAbWVudGlvbnMuIE9ubHkgYXBwbGllcyBpZiBnaE1lbnRpb25zIG9wdGlvbiBpcyBlbmFibGVkLicsXG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgZW5jb2RlRW1haWxzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IHRydWUsXG4gICAgICBkZXNjcmlwdGlvbjogJ0VuY29kZSBlLW1haWwgYWRkcmVzc2VzIHRocm91Z2ggdGhlIHVzZSBvZiBDaGFyYWN0ZXIgRW50aXRpZXMsIHRyYW5zZm9ybWluZyBBU0NJSSBlLW1haWwgYWRkcmVzc2VzIGludG8gaXRzIGVxdWl2YWxlbnQgZGVjaW1hbCBlbnRpdGllcycsXG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9LFxuICAgIG9wZW5MaW5rc0luTmV3V2luZG93OiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdPcGVuIGFsbCBsaW5rcyBpbiBuZXcgd2luZG93cycsXG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9XG4gIH07XG4gIGlmIChzaW1wbGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGVmYXVsdE9wdGlvbnMpKTtcbiAgfVxuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIG9wdCBpbiBkZWZhdWx0T3B0aW9ucykge1xuICAgIGlmIChkZWZhdWx0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHQpKSB7XG4gICAgICByZXRbb3B0XSA9IGRlZmF1bHRPcHRpb25zW29wdF0uZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhbGxPcHRpb25zT24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBvcHRpb25zID0gZ2V0RGVmYXVsdE9wdHModHJ1ZSksXG4gICAgICByZXQgPSB7fTtcbiAgZm9yICh2YXIgb3B0IGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHQpKSB7XG4gICAgICByZXRbb3B0XSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cclxuLyoqXG4gKiBDcmVhdGVkIGJ5IFRpdmllIG9uIDA2LTAxLTIwMTUuXG4gKi9cblxuLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG52YXIgc2hvd2Rvd24gPSB7fSxcbiAgICBwYXJzZXJzID0ge30sXG4gICAgZXh0ZW5zaW9ucyA9IHt9LFxuICAgIGdsb2JhbE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0cyh0cnVlKSxcbiAgICBzZXRGbGF2b3IgPSAndmFuaWxsYScsXG4gICAgZmxhdm9yID0ge1xuICAgICAgZ2l0aHViOiB7XG4gICAgICAgIG9taXRFeHRyYVdMSW5Db2RlQmxvY2tzOiAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgc2ltcGxpZmllZEF1dG9MaW5rOiAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICBleGNsdWRlVHJhaWxpbmdQdW5jdHVhdGlvbkZyb21VUkxzOiAgIHRydWUsXG4gICAgICAgIGxpdGVyYWxNaWRXb3JkVW5kZXJzY29yZXM6ICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgc3RyaWtldGhyb3VnaDogICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICB0YWJsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIHRhYmxlc0hlYWRlcklkOiAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgZ2hDb2RlQmxvY2tzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICB0YXNrbGlzdHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIGRpc2FibGVGb3JjZWQ0U3BhY2VzSW5kZW50ZWRTdWJsaXN0czogdHJ1ZSxcbiAgICAgICAgc2ltcGxlTGluZUJyZWFrczogICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICByZXF1aXJlU3BhY2VCZWZvcmVIZWFkaW5nVGV4dDogICAgICAgIHRydWUsXG4gICAgICAgIGdoQ29tcGF0aWJsZUhlYWRlcklkOiAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgZ2hNZW50aW9uczogICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICB9LFxuICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgbm9IZWFkZXJJZDogICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICBnaENvZGVCbG9ja3M6ICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICB9LFxuICAgICAgZ2hvc3Q6IHtcbiAgICAgICAgb21pdEV4dHJhV0xJbkNvZGVCbG9ja3M6ICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICBwYXJzZUltZ0RpbWVuc2lvbnM6ICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIHNpbXBsaWZpZWRBdXRvTGluazogICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgZXhjbHVkZVRyYWlsaW5nUHVuY3R1YXRpb25Gcm9tVVJMczogICB0cnVlLFxuICAgICAgICBsaXRlcmFsTWlkV29yZFVuZGVyc2NvcmVzOiAgICAgICAgICAgIHRydWUsXG4gICAgICAgIHN0cmlrZXRocm91Z2g6ICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgdGFibGVzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICB0YWJsZXNIZWFkZXJJZDogICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIGdoQ29kZUJsb2NrczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgdGFza2xpc3RzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICBzbW9vdGhMaXZlUHJldmlldzogICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgIHNpbXBsZUxpbmVCcmVha3M6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgcmVxdWlyZVNwYWNlQmVmb3JlSGVhZGluZ1RleHQ6ICAgICAgICB0cnVlLFxuICAgICAgICBnaE1lbnRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICBlbmNvZGVFbWFpbHM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgIH0sXG4gICAgICB2YW5pbGxhOiBnZXREZWZhdWx0T3B0cyh0cnVlKSxcbiAgICAgIGFsbE9uOiBhbGxPcHRpb25zT24oKVxuICAgIH07XG5cbi8qKlxuICogaGVscGVyIG5hbWVzcGFjZVxuICogQHR5cGUge3t9fVxuICovXG5zaG93ZG93bi5oZWxwZXIgPSB7fTtcblxuLyoqXG4gKiBUT0RPIExFR0FDWSBTVVBQT1JUIENPREVcbiAqIEB0eXBlIHt7fX1cbiAqL1xuc2hvd2Rvd24uZXh0ZW5zaW9ucyA9IHt9O1xuXG4vKipcbiAqIFNldCBhIGdsb2JhbCBvcHRpb25cbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtzaG93ZG93bn1cbiAqL1xuc2hvd2Rvd24uc2V0T3B0aW9uID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBnbG9iYWxPcHRpb25zW2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEdldCBhIGdsb2JhbCBvcHRpb25cbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHsqfVxuICovXG5zaG93ZG93bi5nZXRPcHRpb24gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIGdsb2JhbE9wdGlvbnNba2V5XTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBnbG9iYWwgb3B0aW9uc1xuICogQHN0YXRpY1xuICogQHJldHVybnMge3t9fVxuICovXG5zaG93ZG93bi5nZXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHJldHVybiBnbG9iYWxPcHRpb25zO1xufTtcblxuLyoqXG4gKiBSZXNldCBnbG9iYWwgb3B0aW9ucyB0byB0aGUgZGVmYXVsdCB2YWx1ZXNcbiAqIEBzdGF0aWNcbiAqL1xuc2hvd2Rvd24ucmVzZXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIGdsb2JhbE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0cyh0cnVlKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBmbGF2b3Igc2hvd2Rvd24gc2hvdWxkIHVzZSBhcyBkZWZhdWx0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5zaG93ZG93bi5zZXRGbGF2b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmICghZmxhdm9yLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgdGhyb3cgRXJyb3IobmFtZSArICcgZmxhdm9yIHdhcyBub3QgZm91bmQnKTtcbiAgfVxuICBzaG93ZG93bi5yZXNldE9wdGlvbnMoKTtcbiAgdmFyIHByZXNldCA9IGZsYXZvcltuYW1lXTtcbiAgc2V0Rmxhdm9yID0gbmFtZTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIHByZXNldCkge1xuICAgIGlmIChwcmVzZXQuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgZ2xvYmFsT3B0aW9uc1tvcHRpb25dID0gcHJlc2V0W29wdGlvbl07XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudGx5IHNldCBmbGF2b3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnNob3dkb3duLmdldEZsYXZvciA9IGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICByZXR1cm4gc2V0Rmxhdm9yO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG9wdGlvbnMgb2YgYSBzcGVjaWZpZWQgZmxhdm9yLiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGUgZmxhdm9yIHdhcyBub3QgZm91bmRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGZsYXZvclxuICogQHJldHVybnMge3t9fHVuZGVmaW5lZH1cbiAqL1xuc2hvd2Rvd24uZ2V0Rmxhdm9yT3B0aW9ucyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKGZsYXZvci5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHJldHVybiBmbGF2b3JbbmFtZV07XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NpbXBsZT10cnVlXVxuICogQHJldHVybnMge3t9fVxuICovXG5zaG93ZG93bi5nZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIChzaW1wbGUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICByZXR1cm4gZ2V0RGVmYXVsdE9wdHMoc2ltcGxlKTtcbn07XG5cbi8qKlxuICogR2V0IG9yIHNldCBhIHN1YlBhcnNlclxuICpcbiAqIHN1YlBhcnNlcihuYW1lKSAgICAgICAtIEdldCBhIHJlZ2lzdGVyZWQgc3ViUGFyc2VyXG4gKiBzdWJQYXJzZXIobmFtZSwgZnVuYykgLSBSZWdpc3RlciBhIHN1YlBhcnNlclxuICogQHN0YXRpY1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmdW5jXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnNob3dkb3duLnN1YlBhcnNlciA9IGZ1bmN0aW9uIChuYW1lLCBmdW5jKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKHNob3dkb3duLmhlbHBlci5pc1N0cmluZyhuYW1lKSkge1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhcnNlcnNbbmFtZV0gPSBmdW5jO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyc2Vycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICByZXR1cm4gcGFyc2Vyc1tuYW1lXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKCdTdWJQYXJzZXIgbmFtZWQgJyArIG5hbWUgKyAnIG5vdCByZWdpc3RlcmVkIScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBHZXRzIG9yIHJlZ2lzdGVycyBhbiBleHRlbnNpb25cbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbj19IGV4dFxuICogQHJldHVybnMgeyp9XG4gKi9cbnNob3dkb3duLmV4dGVuc2lvbiA9IGZ1bmN0aW9uIChuYW1lLCBleHQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmICghc2hvd2Rvd24uaGVscGVyLmlzU3RyaW5nKG5hbWUpKSB7XG4gICAgdGhyb3cgRXJyb3IoJ0V4dGVuc2lvbiBcXCduYW1lXFwnIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIG5hbWUgPSBzaG93ZG93bi5oZWxwZXIuc3RkRXh0TmFtZShuYW1lKTtcblxuICAvLyBHZXR0ZXJcbiAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChleHQpKSB7XG4gICAgaWYgKCFleHRlbnNpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICB0aHJvdyBFcnJvcignRXh0ZW5zaW9uIG5hbWVkICcgKyBuYW1lICsgJyBpcyBub3QgcmVnaXN0ZXJlZCEnKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVuc2lvbnNbbmFtZV07XG5cbiAgICAvLyBTZXR0ZXJcbiAgfSBlbHNlIHtcbiAgICAvLyBFeHBhbmQgZXh0ZW5zaW9uIGlmIGl0J3Mgd3JhcHBlZCBpbiBhIGZ1bmN0aW9uXG4gICAgaWYgKHR5cGVvZiBleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV4dCA9IGV4dCgpO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSBleHRlbnNpb24gaXMgYW4gYXJyYXlcbiAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc0FycmF5KGV4dCkpIHtcbiAgICAgIGV4dCA9IFtleHRdO1xuICAgIH1cblxuICAgIHZhciB2YWxpZEV4dGVuc2lvbiA9IHZhbGlkYXRlKGV4dCwgbmFtZSk7XG5cbiAgICBpZiAodmFsaWRFeHRlbnNpb24udmFsaWQpIHtcbiAgICAgIGV4dGVuc2lvbnNbbmFtZV0gPSBleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKHZhbGlkRXh0ZW5zaW9uLmVycm9yKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2V0cyBhbGwgZXh0ZW5zaW9ucyByZWdpc3RlcmVkXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbnNob3dkb3duLmdldEFsbEV4dGVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIGV4dGVuc2lvbnM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBleHRlbnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnNob3dkb3duLnJlbW92ZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgZGVsZXRlIGV4dGVuc2lvbnNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGV4dGVuc2lvbnNcbiAqL1xuc2hvd2Rvd24ucmVzZXRFeHRlbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIGV4dGVuc2lvbnMgPSB7fTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgZXh0ZW5zaW9uXG4gKiBAcGFyYW0ge2FycmF5fSBleHRlbnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7e3ZhbGlkOiBib29sZWFuLCBlcnJvcjogc3RyaW5nfX1cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGUgKGV4dGVuc2lvbiwgbmFtZSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGVyck1zZyA9IChuYW1lKSA/ICdFcnJvciBpbiAnICsgbmFtZSArICcgZXh0ZW5zaW9uLT4nIDogJ0Vycm9yIGluIHVubmFtZWQgZXh0ZW5zaW9uJyxcbiAgICAgIHJldCA9IHtcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIGVycm9yOiAnJ1xuICAgICAgfTtcblxuICBpZiAoIXNob3dkb3duLmhlbHBlci5pc0FycmF5KGV4dGVuc2lvbikpIHtcbiAgICBleHRlbnNpb24gPSBbZXh0ZW5zaW9uXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9uLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJhc2VNc2cgPSBlcnJNc2cgKyAnIHN1Yi1leHRlbnNpb24gJyArIGkgKyAnOiAnLFxuICAgICAgICBleHQgPSBleHRlbnNpb25baV07XG4gICAgaWYgKHR5cGVvZiBleHQgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXQudmFsaWQgPSBmYWxzZTtcbiAgICAgIHJldC5lcnJvciA9IGJhc2VNc2cgKyAnbXVzdCBiZSBhbiBvYmplY3QsIGJ1dCAnICsgdHlwZW9mIGV4dCArICcgZ2l2ZW4nO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc1N0cmluZyhleHQudHlwZSkpIHtcbiAgICAgIHJldC52YWxpZCA9IGZhbHNlO1xuICAgICAgcmV0LmVycm9yID0gYmFzZU1zZyArICdwcm9wZXJ0eSBcInR5cGVcIiBtdXN0IGJlIGEgc3RyaW5nLCBidXQgJyArIHR5cGVvZiBleHQudHlwZSArICcgZ2l2ZW4nO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9IGV4dC50eXBlID0gZXh0LnR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIG5vcm1hbGl6ZSBleHRlbnNpb24gdHlwZVxuICAgIGlmICh0eXBlID09PSAnbGFuZ3VhZ2UnKSB7XG4gICAgICB0eXBlID0gZXh0LnR5cGUgPSAnbGFuZyc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdodG1sJykge1xuICAgICAgdHlwZSA9IGV4dC50eXBlID0gJ291dHB1dCc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09ICdsYW5nJyAmJiB0eXBlICE9PSAnb3V0cHV0JyAmJiB0eXBlICE9PSAnbGlzdGVuZXInKSB7XG4gICAgICByZXQudmFsaWQgPSBmYWxzZTtcbiAgICAgIHJldC5lcnJvciA9IGJhc2VNc2cgKyAndHlwZSAnICsgdHlwZSArICcgaXMgbm90IHJlY29nbml6ZWQuIFZhbGlkIHZhbHVlczogXCJsYW5nL2xhbmd1YWdlXCIsIFwib3V0cHV0L2h0bWxcIiBvciBcImxpc3RlbmVyXCInO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2xpc3RlbmVyJykge1xuICAgICAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChleHQubGlzdGVuZXJzKSkge1xuICAgICAgICByZXQudmFsaWQgPSBmYWxzZTtcbiAgICAgICAgcmV0LmVycm9yID0gYmFzZU1zZyArICcuIEV4dGVuc2lvbnMgb2YgdHlwZSBcImxpc3RlbmVyXCIgbXVzdCBoYXZlIGEgcHJvcGVydHkgY2FsbGVkIFwibGlzdGVuZXJzXCInO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2hvd2Rvd24uaGVscGVyLmlzVW5kZWZpbmVkKGV4dC5maWx0ZXIpICYmIHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChleHQucmVnZXgpKSB7XG4gICAgICAgIHJldC52YWxpZCA9IGZhbHNlO1xuICAgICAgICByZXQuZXJyb3IgPSBiYXNlTXNnICsgdHlwZSArICcgZXh0ZW5zaW9ucyBtdXN0IGRlZmluZSBlaXRoZXIgYSBcInJlZ2V4XCIgcHJvcGVydHkgb3IgYSBcImZpbHRlclwiIG1ldGhvZCc7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV4dC5saXN0ZW5lcnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZXh0Lmxpc3RlbmVycyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0LnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldC5lcnJvciA9IGJhc2VNc2cgKyAnXCJsaXN0ZW5lcnNcIiBwcm9wZXJ0eSBtdXN0IGJlIGFuIG9iamVjdCBidXQgJyArIHR5cGVvZiBleHQubGlzdGVuZXJzICsgJyBnaXZlbic7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBsbiBpbiBleHQubGlzdGVuZXJzKSB7XG4gICAgICAgIGlmIChleHQubGlzdGVuZXJzLmhhc093blByb3BlcnR5KGxuKSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZXh0Lmxpc3RlbmVyc1tsbl0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldC52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0LmVycm9yID0gYmFzZU1zZyArICdcImxpc3RlbmVyc1wiIHByb3BlcnR5IG11c3QgYmUgYW4gaGFzaCBvZiBbZXZlbnQgbmFtZV06IFtjYWxsYmFja10uIGxpc3RlbmVycy4nICsgbG4gK1xuICAgICAgICAgICAgICAnIG11c3QgYmUgYSBmdW5jdGlvbiBidXQgJyArIHR5cGVvZiBleHQubGlzdGVuZXJzW2xuXSArICcgZ2l2ZW4nO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXh0LmZpbHRlcikge1xuICAgICAgaWYgKHR5cGVvZiBleHQuZmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldC52YWxpZCA9IGZhbHNlO1xuICAgICAgICByZXQuZXJyb3IgPSBiYXNlTXNnICsgJ1wiZmlsdGVyXCIgbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgJyArIHR5cGVvZiBleHQuZmlsdGVyICsgJyBnaXZlbic7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChleHQucmVnZXgpIHtcbiAgICAgIGlmIChzaG93ZG93bi5oZWxwZXIuaXNTdHJpbmcoZXh0LnJlZ2V4KSkge1xuICAgICAgICBleHQucmVnZXggPSBuZXcgUmVnRXhwKGV4dC5yZWdleCwgJ2cnKTtcbiAgICAgIH1cbiAgICAgIGlmICghKGV4dC5yZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgICAgcmV0LnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldC5lcnJvciA9IGJhc2VNc2cgKyAnXCJyZWdleFwiIHByb3BlcnR5IG11c3QgZWl0aGVyIGJlIGEgc3RyaW5nIG9yIGEgUmVnRXhwIG9iamVjdCwgYnV0ICcgKyB0eXBlb2YgZXh0LnJlZ2V4ICsgJyBnaXZlbic7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd2Rvd24uaGVscGVyLmlzVW5kZWZpbmVkKGV4dC5yZXBsYWNlKSkge1xuICAgICAgICByZXQudmFsaWQgPSBmYWxzZTtcbiAgICAgICAgcmV0LmVycm9yID0gYmFzZU1zZyArICdcInJlZ2V4XCIgZXh0ZW5zaW9ucyBtdXN0IGltcGxlbWVudCBhIHJlcGxhY2Ugc3RyaW5nIG9yIGZ1bmN0aW9uJztcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBleHRlbnNpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBleHRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5zaG93ZG93bi52YWxpZGF0ZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIChleHQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciB2YWxpZGF0ZUV4dGVuc2lvbiA9IHZhbGlkYXRlKGV4dCwgbnVsbCk7XG4gIGlmICghdmFsaWRhdGVFeHRlbnNpb24udmFsaWQpIHtcbiAgICBjb25zb2xlLndhcm4odmFsaWRhdGVFeHRlbnNpb24uZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cclxuLyoqXG4gKiBzaG93ZG93bmpzIGhlbHBlciBmdW5jdGlvbnNcbiAqL1xuXG5pZiAoIXNob3dkb3duLmhhc093blByb3BlcnR5KCdoZWxwZXInKSkge1xuICBzaG93ZG93bi5oZWxwZXIgPSB7fTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YXIgaXMgc3RyaW5nXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge3N0cmluZ30gYVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnNob3dkb3duLmhlbHBlci5pc1N0cmluZyA9IGZ1bmN0aW9uIChhKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuICh0eXBlb2YgYSA9PT0gJ3N0cmluZycgfHwgYSBpbnN0YW5jZW9mIFN0cmluZyk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHZhciBpcyBhIGZ1bmN0aW9uXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5zaG93ZG93bi5oZWxwZXIuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChhKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGdldFR5cGUgPSB7fTtcbiAgcmV0dXJuIGEgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGEpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuLyoqXG4gKiBpc0FycmF5IGhlbHBlciBmdW5jdGlvblxuICogQHN0YXRpY1xuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuc2hvd2Rvd24uaGVscGVyLmlzQXJyYXkgPSBmdW5jdGlvbiAoYSkge1xuICAndXNlIHN0cmljdCc7XG4gIHJldHVybiBhLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKi9cbnNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAndXNlIHN0cmljdCc7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBGb3JFYWNoIGhlbHBlciBmdW5jdGlvblxuICogSXRlcmF0ZXMgb3ZlciBBcnJheXMgYW5kIE9iamVjdHMgKG93biBwcm9wZXJ0aWVzIG9ubHkpXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQWNjZXB0cyAzIHBhcmFtczogMS4gdmFsdWUsIDIuIGtleSwgMy4gdGhlIG9yaWdpbmFsIGFycmF5L29iamVjdFxuICovXG5zaG93ZG93bi5oZWxwZXIuZm9yRWFjaCA9IGZ1bmN0aW9uIChvYmosIGNhbGxiYWNrKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gY2hlY2sgaWYgb2JqIGlzIGRlZmluZWRcbiAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChvYmopKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdvYmogcGFyYW0gaXMgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGlmIChzaG93ZG93bi5oZWxwZXIuaXNVbmRlZmluZWQoY2FsbGJhY2spKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBwYXJhbSBpcyByZXF1aXJlZCcpO1xuICB9XG5cbiAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIHBhcmFtIG11c3QgYmUgYSBmdW5jdGlvbi9jbG9zdXJlJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iai5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2JqLmZvckVhY2goY2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKHNob3dkb3duLmhlbHBlci5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2sob2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgKG9iaikgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgY2FsbGJhY2sob2JqW3Byb3BdLCBwcm9wLCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29iaiBkb2VzIG5vdCBzZWVtIHRvIGJlIGFuIGFycmF5IG9yIGFuIGl0ZXJhYmxlIG9iamVjdCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YW5kYXJkaWRpemUgZXh0ZW5zaW9uIG5hbWVcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzIGV4dGVuc2lvbiBuYW1lXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5zaG93ZG93bi5oZWxwZXIuc3RkRXh0TmFtZSA9IGZ1bmN0aW9uIChzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIHMucmVwbGFjZSgvW18/KitcXC9cXFxcLl4tXS9nLCAnJykucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrICh3aG9sZU1hdGNoLCBtMSkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBjaGFyQ29kZVRvRXNjYXBlID0gbTEuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuICfCqEUnICsgY2hhckNvZGVUb0VzY2FwZSArICdFJztcbn1cblxuLyoqXG4gKiBDYWxsYmFjayB1c2VkIHRvIGVzY2FwZSBjaGFyYWN0ZXJzIHdoZW4gcGFzc2luZyB0aHJvdWdoIFN0cmluZy5yZXBsYWNlXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge3N0cmluZ30gd2hvbGVNYXRjaFxuICogQHBhcmFtIHtzdHJpbmd9IG0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5zaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrID0gZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrO1xuXG4vKipcbiAqIEVzY2FwZSBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJzVG9Fc2NhcGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWZ0ZXJCYWNrc2xhc2hcbiAqIEByZXR1cm5zIHtYTUx8c3RyaW5nfHZvaWR8Kn1cbiAqL1xuc2hvd2Rvd24uaGVscGVyLmVzY2FwZUNoYXJhY3RlcnMgPSBmdW5jdGlvbiAodGV4dCwgY2hhcnNUb0VzY2FwZSwgYWZ0ZXJCYWNrc2xhc2gpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyBGaXJzdCB3ZSBoYXZlIHRvIGVzY2FwZSB0aGUgZXNjYXBlIGNoYXJhY3RlcnMgc28gdGhhdFxuICAvLyB3ZSBjYW4gYnVpbGQgYSBjaGFyYWN0ZXIgY2xhc3Mgb3V0IG9mIHRoZW1cbiAgdmFyIHJlZ2V4U3RyaW5nID0gJyhbJyArIGNoYXJzVG9Fc2NhcGUucmVwbGFjZSgvKFtcXFtcXF1cXFxcXSkvZywgJ1xcXFwkMScpICsgJ10pJztcblxuICBpZiAoYWZ0ZXJCYWNrc2xhc2gpIHtcbiAgICByZWdleFN0cmluZyA9ICdcXFxcXFxcXCcgKyByZWdleFN0cmluZztcbiAgfVxuXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTdHJpbmcsICdnJyk7XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UocmVnZXgsIGVzY2FwZUNoYXJhY3RlcnNDYWxsYmFjayk7XG5cbiAgcmV0dXJuIHRleHQ7XG59O1xuXG52YXIgcmd4RmluZE1hdGNoUG9zID0gZnVuY3Rpb24gKHN0ciwgbGVmdCwgcmlnaHQsIGZsYWdzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGYgPSBmbGFncyB8fCAnJyxcbiAgICAgIGcgPSBmLmluZGV4T2YoJ2cnKSA+IC0xLFxuICAgICAgeCA9IG5ldyBSZWdFeHAobGVmdCArICd8JyArIHJpZ2h0LCAnZycgKyBmLnJlcGxhY2UoL2cvZywgJycpKSxcbiAgICAgIGwgPSBuZXcgUmVnRXhwKGxlZnQsIGYucmVwbGFjZSgvZy9nLCAnJykpLFxuICAgICAgcG9zID0gW10sXG4gICAgICB0LCBzLCBtLCBzdGFydCwgZW5kO1xuXG4gIGRvIHtcbiAgICB0ID0gMDtcbiAgICB3aGlsZSAoKG0gPSB4LmV4ZWMoc3RyKSkpIHtcbiAgICAgIGlmIChsLnRlc3QobVswXSkpIHtcbiAgICAgICAgaWYgKCEodCsrKSkge1xuICAgICAgICAgIHMgPSB4Lmxhc3RJbmRleDtcbiAgICAgICAgICBzdGFydCA9IHMgLSBtWzBdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0KSB7XG4gICAgICAgIGlmICghLS10KSB7XG4gICAgICAgICAgZW5kID0gbS5pbmRleCArIG1bMF0ubGVuZ3RoO1xuICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICBsZWZ0OiB7c3RhcnQ6IHN0YXJ0LCBlbmQ6IHN9LFxuICAgICAgICAgICAgbWF0Y2g6IHtzdGFydDogcywgZW5kOiBtLmluZGV4fSxcbiAgICAgICAgICAgIHJpZ2h0OiB7c3RhcnQ6IG0uaW5kZXgsIGVuZDogZW5kfSxcbiAgICAgICAgICAgIHdob2xlTWF0Y2g6IHtzdGFydDogc3RhcnQsIGVuZDogZW5kfVxuICAgICAgICAgIH07XG4gICAgICAgICAgcG9zLnB1c2gob2JqKTtcbiAgICAgICAgICBpZiAoIWcpIHtcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IHdoaWxlICh0ICYmICh4Lmxhc3RJbmRleCA9IHMpKTtcblxuICByZXR1cm4gcG9zO1xufTtcblxuLyoqXG4gKiBtYXRjaFJlY3Vyc2l2ZVJlZ0V4cFxuICpcbiAqIChjKSAyMDA3IFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBBY2NlcHRzIGEgc3RyaW5nIHRvIHNlYXJjaCwgYSBsZWZ0IGFuZCByaWdodCBmb3JtYXQgZGVsaW1pdGVyXG4gKiBhcyByZWdleCBwYXR0ZXJucywgYW5kIG9wdGlvbmFsIHJlZ2V4IGZsYWdzLiBSZXR1cm5zIGFuIGFycmF5XG4gKiBvZiBtYXRjaGVzLCBhbGxvd2luZyBuZXN0ZWQgaW5zdGFuY2VzIG9mIGxlZnQvcmlnaHQgZGVsaW1pdGVycy5cbiAqIFVzZSB0aGUgXCJnXCIgZmxhZyB0byByZXR1cm4gYWxsIG1hdGNoZXMsIG90aGVyd2lzZSBvbmx5IHRoZVxuICogZmlyc3QgaXMgcmV0dXJuZWQuIEJlIGNhcmVmdWwgdG8gZW5zdXJlIHRoYXQgdGhlIGxlZnQgYW5kXG4gKiByaWdodCBmb3JtYXQgZGVsaW1pdGVycyBwcm9kdWNlIG11dHVhbGx5IGV4Y2x1c2l2ZSBtYXRjaGVzLlxuICogQmFja3JlZmVyZW5jZXMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aGluIHRoZSByaWdodCBkZWxpbWl0ZXJcbiAqIGR1ZSB0byBob3cgaXQgaXMgaW50ZXJuYWxseSBjb21iaW5lZCB3aXRoIHRoZSBsZWZ0IGRlbGltaXRlci5cbiAqIFdoZW4gbWF0Y2hpbmcgc3RyaW5ncyB3aG9zZSBmb3JtYXQgZGVsaW1pdGVycyBhcmUgdW5iYWxhbmNlZFxuICogdG8gdGhlIGxlZnQgb3IgcmlnaHQsIHRoZSBvdXRwdXQgaXMgaW50ZW50aW9uYWxseSBhcyBhXG4gKiBjb252ZW50aW9uYWwgcmVnZXggbGlicmFyeSB3aXRoIHJlY3Vyc2lvbiBzdXBwb3J0IHdvdWxkXG4gKiBwcm9kdWNlLCBlLmcuIFwiPDx4PlwiIGFuZCBcIjx4Pj5cIiBib3RoIHByb2R1Y2UgW1wieFwiXSB3aGVuIHVzaW5nXG4gKiBcIjxcIiBhbmQgXCI+XCIgYXMgdGhlIGRlbGltaXRlcnMgKGJvdGggc3RyaW5ncyBjb250YWluIGEgc2luZ2xlLFxuICogYmFsYW5jZWQgaW5zdGFuY2Ugb2YgXCI8eD5cIikuXG4gKlxuICogZXhhbXBsZXM6XG4gKiBtYXRjaFJlY3Vyc2l2ZVJlZ0V4cChcInRlc3RcIiwgXCJcXFxcKFwiLCBcIlxcXFwpXCIpXG4gKiByZXR1cm5zOiBbXVxuICogbWF0Y2hSZWN1cnNpdmVSZWdFeHAoXCI8dDw8ZT4+PHM+PnQ8PlwiLCBcIjxcIiwgXCI+XCIsIFwiZ1wiKVxuICogcmV0dXJuczogW1widDw8ZT4+PHM+XCIsIFwiXCJdXG4gKiBtYXRjaFJlY3Vyc2l2ZVJlZ0V4cChcIjxkaXYgaWQ9XFxcInhcXFwiPnRlc3Q8L2Rpdj5cIiwgXCI8ZGl2XFxcXGJbXj5dKj5cIiwgXCI8L2Rpdj5cIiwgXCJnaVwiKVxuICogcmV0dXJuczogW1widGVzdFwiXVxuICovXG5zaG93ZG93bi5oZWxwZXIubWF0Y2hSZWN1cnNpdmVSZWdFeHAgPSBmdW5jdGlvbiAoc3RyLCBsZWZ0LCByaWdodCwgZmxhZ3MpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtYXRjaFBvcyA9IHJneEZpbmRNYXRjaFBvcyAoc3RyLCBsZWZ0LCByaWdodCwgZmxhZ3MpLFxuICAgICAgcmVzdWx0cyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hQb3MubGVuZ3RoOyArK2kpIHtcbiAgICByZXN1bHRzLnB1c2goW1xuICAgICAgc3RyLnNsaWNlKG1hdGNoUG9zW2ldLndob2xlTWF0Y2guc3RhcnQsIG1hdGNoUG9zW2ldLndob2xlTWF0Y2guZW5kKSxcbiAgICAgIHN0ci5zbGljZShtYXRjaFBvc1tpXS5tYXRjaC5zdGFydCwgbWF0Y2hQb3NbaV0ubWF0Y2guZW5kKSxcbiAgICAgIHN0ci5zbGljZShtYXRjaFBvc1tpXS5sZWZ0LnN0YXJ0LCBtYXRjaFBvc1tpXS5sZWZ0LmVuZCksXG4gICAgICBzdHIuc2xpY2UobWF0Y2hQb3NbaV0ucmlnaHQuc3RhcnQsIG1hdGNoUG9zW2ldLnJpZ2h0LmVuZClcbiAgICBdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSByZXBsYWNlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGxlZnRcbiAqIEBwYXJhbSB7c3RyaW5nfSByaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IGZsYWdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5zaG93ZG93bi5oZWxwZXIucmVwbGFjZVJlY3Vyc2l2ZVJlZ0V4cCA9IGZ1bmN0aW9uIChzdHIsIHJlcGxhY2VtZW50LCBsZWZ0LCByaWdodCwgZmxhZ3MpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmICghc2hvd2Rvd24uaGVscGVyLmlzRnVuY3Rpb24ocmVwbGFjZW1lbnQpKSB7XG4gICAgdmFyIHJlcFN0ciA9IHJlcGxhY2VtZW50O1xuICAgIHJlcGxhY2VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlcFN0cjtcbiAgICB9O1xuICB9XG5cbiAgdmFyIG1hdGNoUG9zID0gcmd4RmluZE1hdGNoUG9zKHN0ciwgbGVmdCwgcmlnaHQsIGZsYWdzKSxcbiAgICAgIGZpbmFsU3RyID0gc3RyLFxuICAgICAgbG5nID0gbWF0Y2hQb3MubGVuZ3RoO1xuXG4gIGlmIChsbmcgPiAwKSB7XG4gICAgdmFyIGJpdHMgPSBbXTtcbiAgICBpZiAobWF0Y2hQb3NbMF0ud2hvbGVNYXRjaC5zdGFydCAhPT0gMCkge1xuICAgICAgYml0cy5wdXNoKHN0ci5zbGljZSgwLCBtYXRjaFBvc1swXS53aG9sZU1hdGNoLnN0YXJ0KSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG5nOyArK2kpIHtcbiAgICAgIGJpdHMucHVzaChcbiAgICAgICAgcmVwbGFjZW1lbnQoXG4gICAgICAgICAgc3RyLnNsaWNlKG1hdGNoUG9zW2ldLndob2xlTWF0Y2guc3RhcnQsIG1hdGNoUG9zW2ldLndob2xlTWF0Y2guZW5kKSxcbiAgICAgICAgICBzdHIuc2xpY2UobWF0Y2hQb3NbaV0ubWF0Y2guc3RhcnQsIG1hdGNoUG9zW2ldLm1hdGNoLmVuZCksXG4gICAgICAgICAgc3RyLnNsaWNlKG1hdGNoUG9zW2ldLmxlZnQuc3RhcnQsIG1hdGNoUG9zW2ldLmxlZnQuZW5kKSxcbiAgICAgICAgICBzdHIuc2xpY2UobWF0Y2hQb3NbaV0ucmlnaHQuc3RhcnQsIG1hdGNoUG9zW2ldLnJpZ2h0LmVuZClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGlmIChpIDwgbG5nIC0gMSkge1xuICAgICAgICBiaXRzLnB1c2goc3RyLnNsaWNlKG1hdGNoUG9zW2ldLndob2xlTWF0Y2guZW5kLCBtYXRjaFBvc1tpICsgMV0ud2hvbGVNYXRjaC5zdGFydCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWF0Y2hQb3NbbG5nIC0gMV0ud2hvbGVNYXRjaC5lbmQgPCBzdHIubGVuZ3RoKSB7XG4gICAgICBiaXRzLnB1c2goc3RyLnNsaWNlKG1hdGNoUG9zW2xuZyAtIDFdLndob2xlTWF0Y2guZW5kKSk7XG4gICAgfVxuICAgIGZpbmFsU3RyID0gYml0cy5qb2luKCcnKTtcbiAgfVxuICByZXR1cm4gZmluYWxTdHI7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGluZGV4IHdpdGhpbiB0aGUgcGFzc2VkIFN0cmluZyBvYmplY3Qgb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlIHNwZWNpZmllZCByZWdleCxcbiAqIHN0YXJ0aW5nIHRoZSBzZWFyY2ggYXQgZnJvbUluZGV4LiBSZXR1cm5zIC0xIGlmIHRoZSB2YWx1ZSBpcyBub3QgZm91bmQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBzdHJpbmcgdG8gc2VhcmNoXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXggUmVndWxhciBleHByZXNzaW9uIHRvIHNlYXJjaFxuICogQHBhcmFtIHtpbnR9IFtmcm9tSW5kZXggPSAwXSBJbmRleCB0byBzdGFydCB0aGUgc2VhcmNoXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQHRocm93cyBJbnZhbGlkQXJndW1lbnRFcnJvclxuICovXG5zaG93ZG93bi5oZWxwZXIucmVnZXhJbmRleE9mID0gZnVuY3Rpb24gKHN0ciwgcmVnZXgsIGZyb21JbmRleCkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmICghc2hvd2Rvd24uaGVscGVyLmlzU3RyaW5nKHN0cikpIHtcbiAgICB0aHJvdyAnSW52YWxpZEFyZ3VtZW50RXJyb3I6IGZpcnN0IHBhcmFtZXRlciBvZiBzaG93ZG93bi5oZWxwZXIucmVnZXhJbmRleE9mIGZ1bmN0aW9uIG11c3QgYmUgYSBzdHJpbmcnO1xuICB9XG4gIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyAnSW52YWxpZEFyZ3VtZW50RXJyb3I6IHNlY29uZCBwYXJhbWV0ZXIgb2Ygc2hvd2Rvd24uaGVscGVyLnJlZ2V4SW5kZXhPZiBmdW5jdGlvbiBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIFJlZ0V4cCc7XG4gIH1cbiAgdmFyIGluZGV4T2YgPSBzdHIuc3Vic3RyaW5nKGZyb21JbmRleCB8fCAwKS5zZWFyY2gocmVnZXgpO1xuICByZXR1cm4gKGluZGV4T2YgPj0gMCkgPyAoaW5kZXhPZiArIChmcm9tSW5kZXggfHwgMCkpIDogaW5kZXhPZjtcbn07XG5cbi8qKlxuICogU3BsaXRzIHRoZSBwYXNzZWQgc3RyaW5nIG9iamVjdCBhdCB0aGUgZGVmaW5lZCBpbmRleCwgYW5kIHJldHVybnMgYW4gYXJyYXkgY29tcG9zZWQgb2YgdGhlIHR3byBzdWJzdHJpbmdzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIHN0cmluZyB0byBzcGxpdFxuICogQHBhcmFtIHtpbnR9IGluZGV4IGluZGV4IHRvIHNwbGl0IHN0cmluZyBhdFxuICogQHJldHVybnMge1tzdHJpbmcsc3RyaW5nXX1cbiAqIEB0aHJvd3MgSW52YWxpZEFyZ3VtZW50RXJyb3JcbiAqL1xuc2hvd2Rvd24uaGVscGVyLnNwbGl0QXRJbmRleCA9IGZ1bmN0aW9uIChzdHIsIGluZGV4KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNTdHJpbmcoc3RyKSkge1xuICAgIHRocm93ICdJbnZhbGlkQXJndW1lbnRFcnJvcjogZmlyc3QgcGFyYW1ldGVyIG9mIHNob3dkb3duLmhlbHBlci5yZWdleEluZGV4T2YgZnVuY3Rpb24gbXVzdCBiZSBhIHN0cmluZyc7XG4gIH1cbiAgcmV0dXJuIFtzdHIuc3Vic3RyaW5nKDAsIGluZGV4KSwgc3RyLnN1YnN0cmluZyhpbmRleCldO1xufTtcblxuLyoqXG4gKiBPYmZ1c2NhdGUgYW4gZS1tYWlsIGFkZHJlc3MgdGhyb3VnaCB0aGUgdXNlIG9mIENoYXJhY3RlciBFbnRpdGllcyxcbiAqIHRyYW5zZm9ybWluZyBBU0NJSSBjaGFyYWN0ZXJzIGludG8gdGhlaXIgZXF1aXZhbGVudCBkZWNpbWFsIG9yIGhleCBlbnRpdGllcy5cbiAqXG4gKiBTaW5jZSBpdCBoYXMgYSByYW5kb20gY29tcG9uZW50LCBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoaXMgZnVuY3Rpb24gcHJvZHVjZSBkaWZmZXJlbnQgcmVzdWx0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYWlsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5zaG93ZG93bi5oZWxwZXIuZW5jb2RlRW1haWxBZGRyZXNzID0gZnVuY3Rpb24gKG1haWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgZW5jb2RlID0gW1xuICAgIGZ1bmN0aW9uIChjaCkge1xuICAgICAgcmV0dXJuICcmIycgKyBjaC5jaGFyQ29kZUF0KDApICsgJzsnO1xuICAgIH0sXG4gICAgZnVuY3Rpb24gKGNoKSB7XG4gICAgICByZXR1cm4gJyYjeCcgKyBjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSArICc7JztcbiAgICB9LFxuICAgIGZ1bmN0aW9uIChjaCkge1xuICAgICAgcmV0dXJuIGNoO1xuICAgIH1cbiAgXTtcblxuICBtYWlsID0gbWFpbC5yZXBsYWNlKC8uL2csIGZ1bmN0aW9uIChjaCkge1xuICAgIGlmIChjaCA9PT0gJ0AnKSB7XG4gICAgICAvLyB0aGlzICptdXN0KiBiZSBlbmNvZGVkLiBJIGluc2lzdC5cbiAgICAgIGNoID0gZW5jb2RlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXShjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKTtcbiAgICAgIC8vIHJvdWdobHkgMTAlIHJhdywgNDUlIGhleCwgNDUlIGRlY1xuICAgICAgY2ggPSAoXG4gICAgICAgIHIgPiAwLjkgPyBlbmNvZGVbMl0oY2gpIDogciA+IDAuNDUgPyBlbmNvZGVbMV0oY2gpIDogZW5jb2RlWzBdKGNoKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoO1xuICB9KTtcblxuICByZXR1cm4gbWFpbDtcbn07XG5cbi8qKlxuICogUE9MWUZJTExTXG4gKi9cbi8vIHVzZSB0aGlzIGluc3RlYWQgb2YgYnVpbHRpbiBpcyB1bmRlZmluZWQgZm9yIElFOCBjb21wYXRpYmlsaXR5XG5pZiAodHlwZW9mKGNvbnNvbGUpID09PSAndW5kZWZpbmVkJykge1xuICBjb25zb2xlID0ge1xuICAgIHdhcm46IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGFsZXJ0KG1zZyk7XG4gICAgfSxcbiAgICBsb2c6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGFsZXJ0KG1zZyk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKG1zZykge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgdGhyb3cgbXNnO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDb21tb24gcmVnZXhlcy5cbiAqIFdlIGRlY2xhcmUgc29tZSBjb21tb24gcmVnZXhlcyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gKi9cbnNob3dkb3duLmhlbHBlci5yZWdleGVzID0ge1xuICBhc3Rlcmlza0FuZERhc2g6IC8oWypfXSkvZ1xufTtcblxyXG4vKipcbiAqIENyZWF0ZWQgYnkgRXN0ZXZhbyBvbiAzMS0wNS0yMDE1LlxuICovXG5cbi8qKlxuICogU2hvd2Rvd24gQ29udmVydGVyIGNsYXNzXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udmVydGVyT3B0aW9uc11cbiAqIEByZXR1cm5zIHtDb252ZXJ0ZXJ9XG4gKi9cbnNob3dkb3duLkNvbnZlcnRlciA9IGZ1bmN0aW9uIChjb252ZXJ0ZXJPcHRpb25zKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXJcbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyB1c2VkIGJ5IHRoaXMgY29udmVydGVyXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge3t9fVxuICAgICAgICovXG4gICAgICBvcHRpb25zID0ge30sXG5cbiAgICAgIC8qKlxuICAgICAgICogTGFuZ3VhZ2UgZXh0ZW5zaW9ucyB1c2VkIGJ5IHRoaXMgY29udmVydGVyXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICovXG4gICAgICBsYW5nRXh0ZW5zaW9ucyA9IFtdLFxuXG4gICAgICAvKipcbiAgICAgICAqIE91dHB1dCBtb2RpZmllcnMgZXh0ZW5zaW9ucyB1c2VkIGJ5IHRoaXMgY29udmVydGVyXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICovXG4gICAgICBvdXRwdXRNb2RpZmllcnMgPSBbXSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBsaXN0ZW5lcnNcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7e319XG4gICAgICAgKi9cbiAgICAgIGxpc3RlbmVycyA9IHt9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBmbGF2b3Igc2V0IGluIHRoaXMgY29udmVydGVyXG4gICAgICAgKi9cbiAgICAgIHNldENvbnZGbGF2b3IgPSBzZXRGbGF2b3I7XG5cbiAgX2NvbnN0cnVjdG9yKCk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnRlciBjb25zdHJ1Y3RvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2NvbnN0cnVjdG9yICgpIHtcbiAgICBjb252ZXJ0ZXJPcHRpb25zID0gY29udmVydGVyT3B0aW9ucyB8fCB7fTtcblxuICAgIGZvciAodmFyIGdPcHQgaW4gZ2xvYmFsT3B0aW9ucykge1xuICAgICAgaWYgKGdsb2JhbE9wdGlvbnMuaGFzT3duUHJvcGVydHkoZ09wdCkpIHtcbiAgICAgICAgb3B0aW9uc1tnT3B0XSA9IGdsb2JhbE9wdGlvbnNbZ09wdF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2Ugb3B0aW9uc1xuICAgIGlmICh0eXBlb2YgY29udmVydGVyT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAodmFyIG9wdCBpbiBjb252ZXJ0ZXJPcHRpb25zKSB7XG4gICAgICAgIGlmIChjb252ZXJ0ZXJPcHRpb25zLmhhc093blByb3BlcnR5KG9wdCkpIHtcbiAgICAgICAgICBvcHRpb25zW29wdF0gPSBjb252ZXJ0ZXJPcHRpb25zW29wdF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ0NvbnZlcnRlciBleHBlY3RzIHRoZSBwYXNzZWQgcGFyYW1ldGVyIHRvIGJlIGFuIG9iamVjdCwgYnV0ICcgKyB0eXBlb2YgY29udmVydGVyT3B0aW9ucyArXG4gICAgICAnIHdhcyBwYXNzZWQgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5leHRlbnNpb25zKSB7XG4gICAgICBzaG93ZG93bi5oZWxwZXIuZm9yRWFjaChvcHRpb25zLmV4dGVuc2lvbnMsIF9wYXJzZUV4dGVuc2lvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGV4dGVuc2lvblxuICAgKiBAcGFyYW0geyp9IGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9JyddXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfcGFyc2VFeHRlbnNpb24gKGV4dCwgbmFtZSkge1xuXG4gICAgbmFtZSA9IG5hbWUgfHwgbnVsbDtcbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB0aGUgZXh0ZW5zaW9uIHdhcyBwcmV2aW91c2x5IGxvYWRlZFxuICAgIGlmIChzaG93ZG93bi5oZWxwZXIuaXNTdHJpbmcoZXh0KSkge1xuICAgICAgZXh0ID0gc2hvd2Rvd24uaGVscGVyLnN0ZEV4dE5hbWUoZXh0KTtcbiAgICAgIG5hbWUgPSBleHQ7XG5cbiAgICAgIC8vIExFR0FDWV9TVVBQT1JUIENPREVcbiAgICAgIGlmIChzaG93ZG93bi5leHRlbnNpb25zW2V4dF0pIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdERVBSRUNBVElPTiBXQVJOSU5HOiAnICsgZXh0ICsgJyBpcyBhbiBvbGQgZXh0ZW5zaW9uIHRoYXQgdXNlcyBhIGRlcHJlY2F0ZWQgbG9hZGluZyBtZXRob2QuJyArXG4gICAgICAgICAgJ1BsZWFzZSBpbmZvcm0gdGhlIGRldmVsb3BlciB0aGF0IHRoZSBleHRlbnNpb24gc2hvdWxkIGJlIHVwZGF0ZWQhJyk7XG4gICAgICAgIGxlZ2FjeUV4dGVuc2lvbkxvYWRpbmcoc2hvd2Rvd24uZXh0ZW5zaW9uc1tleHRdLCBleHQpO1xuICAgICAgICByZXR1cm47XG4gICAgICAvLyBFTkQgTEVHQUNZIFNVUFBPUlQgQ09ERVxuXG4gICAgICB9IGVsc2UgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNVbmRlZmluZWQoZXh0ZW5zaW9uc1tleHRdKSkge1xuICAgICAgICBleHQgPSBleHRlbnNpb25zW2V4dF07XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKCdFeHRlbnNpb24gXCInICsgZXh0ICsgJ1wiIGNvdWxkIG5vdCBiZSBsb2FkZWQuIEl0IHdhcyBlaXRoZXIgbm90IGZvdW5kIG9yIGlzIG5vdCBhIHZhbGlkIGV4dGVuc2lvbi4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXh0ID0gZXh0KCk7XG4gICAgfVxuXG4gICAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNBcnJheShleHQpKSB7XG4gICAgICBleHQgPSBbZXh0XTtcbiAgICB9XG5cbiAgICB2YXIgdmFsaWRFeHQgPSB2YWxpZGF0ZShleHQsIG5hbWUpO1xuICAgIGlmICghdmFsaWRFeHQudmFsaWQpIHtcbiAgICAgIHRocm93IEVycm9yKHZhbGlkRXh0LmVycm9yKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dC5sZW5ndGg7ICsraSkge1xuICAgICAgc3dpdGNoIChleHRbaV0udHlwZSkge1xuXG4gICAgICAgIGNhc2UgJ2xhbmcnOlxuICAgICAgICAgIGxhbmdFeHRlbnNpb25zLnB1c2goZXh0W2ldKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvdXRwdXQnOlxuICAgICAgICAgIG91dHB1dE1vZGlmaWVycy5wdXNoKGV4dFtpXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoZXh0W2ldLmhhc093blByb3BlcnR5KCdsaXN0ZW5lcnMnKSkge1xuICAgICAgICBmb3IgKHZhciBsbiBpbiBleHRbaV0ubGlzdGVuZXJzKSB7XG4gICAgICAgICAgaWYgKGV4dFtpXS5saXN0ZW5lcnMuaGFzT3duUHJvcGVydHkobG4pKSB7XG4gICAgICAgICAgICBsaXN0ZW4obG4sIGV4dFtpXS5saXN0ZW5lcnNbbG5dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBMRUdBQ1lfU1VQUE9SVFxuICAgKiBAcGFyYW0geyp9IGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gbGVnYWN5RXh0ZW5zaW9uTG9hZGluZyAoZXh0LCBuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV4dCA9IGV4dChuZXcgc2hvd2Rvd24uQ29udmVydGVyKCkpO1xuICAgIH1cbiAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc0FycmF5KGV4dCkpIHtcbiAgICAgIGV4dCA9IFtleHRdO1xuICAgIH1cbiAgICB2YXIgdmFsaWQgPSB2YWxpZGF0ZShleHQsIG5hbWUpO1xuXG4gICAgaWYgKCF2YWxpZC52YWxpZCkge1xuICAgICAgdGhyb3cgRXJyb3IodmFsaWQuZXJyb3IpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBzd2l0Y2ggKGV4dFtpXS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2xhbmcnOlxuICAgICAgICAgIGxhbmdFeHRlbnNpb25zLnB1c2goZXh0W2ldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb3V0cHV0JzpcbiAgICAgICAgICBvdXRwdXRNb2RpZmllcnMucHVzaChleHRbaV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0Oi8vIHNob3VsZCBuZXZlciByZWFjaCBoZXJlXG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ0V4dGVuc2lvbiBsb2FkZXIgZXJyb3I6IFR5cGUgdW5yZWNvZ25pemVkISEhJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbiB0byBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgZnVuY3Rpb24gbGlzdGVuIChuYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghc2hvd2Rvd24uaGVscGVyLmlzU3RyaW5nKG5hbWUpKSB7XG4gICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBpbiBjb252ZXJ0ZXIubGlzdGVuKCkgbWV0aG9kOiBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIGJ1dCAnICsgdHlwZW9mIG5hbWUgKyAnIGdpdmVuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgaW4gY29udmVydGVyLmxpc3RlbigpIG1ldGhvZDogY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgJyArIHR5cGVvZiBjYWxsYmFjayArICcgZ2l2ZW4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWxpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgbGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuICAgIGxpc3RlbmVyc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJUcmltSW5wdXRUZXh0ICh0ZXh0KSB7XG4gICAgdmFyIHJzcCA9IHRleHQubWF0Y2goL15cXHMqLylbMF0ubGVuZ3RoLFxuICAgICAgICByZ3ggPSBuZXcgUmVnRXhwKCdeXFxcXHN7MCwnICsgcnNwICsgJ30nLCAnZ20nKTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJneCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGFuIGV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnROYW1lIEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGV4dFxuICAgKiBAcGFyYW0ge3t9fSBvcHRpb25zIENvbnZlcnRlciBPcHRpb25zXG4gICAqIEBwYXJhbSB7e319IGdsb2JhbHNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHRoaXMuX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2ggKGV2dE5hbWUsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgICBpZiAobGlzdGVuZXJzLmhhc093blByb3BlcnR5KGV2dE5hbWUpKSB7XG4gICAgICBmb3IgKHZhciBlaSA9IDA7IGVpIDwgbGlzdGVuZXJzW2V2dE5hbWVdLmxlbmd0aDsgKytlaSkge1xuICAgICAgICB2YXIgblRleHQgPSBsaXN0ZW5lcnNbZXZ0TmFtZV1bZWldKGV2dE5hbWUsIHRleHQsIHRoaXMsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICBpZiAoblRleHQgJiYgdHlwZW9mIG5UZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRleHQgPSBuVGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICAvKipcbiAgICogTGlzdGVuIHRvIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtzaG93ZG93bi5Db252ZXJ0ZXJ9XG4gICAqL1xuICB0aGlzLmxpc3RlbiA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIGxpc3RlbihuYW1lLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgbWFya2Rvd24gc3RyaW5nIGludG8gSFRNTFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHRoaXMubWFrZUh0bWwgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIC8vY2hlY2sgaWYgdGV4dCBpcyBub3QgZmFsc3lcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIHZhciBnbG9iYWxzID0ge1xuICAgICAgZ0h0bWxCbG9ja3M6ICAgICBbXSxcbiAgICAgIGdIdG1sTWRCbG9ja3M6ICAgW10sXG4gICAgICBnSHRtbFNwYW5zOiAgICAgIFtdLFxuICAgICAgZ1VybHM6ICAgICAgICAgICB7fSxcbiAgICAgIGdUaXRsZXM6ICAgICAgICAge30sXG4gICAgICBnRGltZW5zaW9uczogICAgIHt9LFxuICAgICAgZ0xpc3RMZXZlbDogICAgICAwLFxuICAgICAgaGFzaExpbmtDb3VudHM6ICB7fSxcbiAgICAgIGxhbmdFeHRlbnNpb25zOiAgbGFuZ0V4dGVuc2lvbnMsXG4gICAgICBvdXRwdXRNb2RpZmllcnM6IG91dHB1dE1vZGlmaWVycyxcbiAgICAgIGNvbnZlcnRlcjogICAgICAgdGhpcyxcbiAgICAgIGdoQ29kZUJsb2NrczogICAgW11cbiAgICB9O1xuXG4gICAgLy8gVGhpcyBsZXRzIHVzIHVzZSDCqCB0cmVtYSBhcyBhbiBlc2NhcGUgY2hhciB0byBhdm9pZCBtZDUgaGFzaGVzXG4gICAgLy8gVGhlIGNob2ljZSBvZiBjaGFyYWN0ZXIgaXMgYXJiaXRyYXJ5OyBhbnl0aGluZyB0aGF0IGlzbid0XG4gICAgLy8gbWFnaWMgaW4gTWFya2Rvd24gd2lsbCB3b3JrLlxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoL2csICfCqFQnKTtcblxuICAgIC8vIFJlcGxhY2UgJCB3aXRoIMKoRFxuICAgIC8vIFJlZ0V4cCBpbnRlcnByZXRzICQgYXMgYSBzcGVjaWFsIGNoYXJhY3RlclxuICAgIC8vIHdoZW4gaXQncyBpbiBhIHJlcGxhY2VtZW50IHN0cmluZ1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcJC9nLCAnwqhEJyk7XG5cbiAgICAvLyBTdGFuZGFyZGl6ZSBsaW5lIGVuZGluZ3NcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHJcXG4vZywgJ1xcbicpOyAvLyBET1MgdG8gVW5peFxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcci9nLCAnXFxuJyk7IC8vIE1hYyB0byBVbml4XG5cbiAgICAvLyBTdGFyZGFyZGl6ZSBsaW5lIHNwYWNlcyAobmJzcCBjYXVzZXMgdHJvdWJsZSBpbiBvbGRlciBicm93c2VycyBhbmQgc29tZSByZWdleCBmbGF2b3JzKVxuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcdTAwQTAvZywgJyAnKTtcblxuICAgIGlmIChvcHRpb25zLnNtYXJ0SW5kZW50YXRpb25GaXgpIHtcbiAgICAgIHRleHQgPSByVHJpbUlucHV0VGV4dCh0ZXh0KTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgdGV4dCBiZWdpbnMgYW5kIGVuZHMgd2l0aCBhIGNvdXBsZSBvZiBuZXdsaW5lczpcbiAgICB0ZXh0ID0gJ1xcblxcbicgKyB0ZXh0ICsgJ1xcblxcbic7XG5cbiAgICAvLyBkZXRhYlxuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2RldGFiJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgICAvKipcbiAgICAgKiBTdHJpcCBhbnkgbGluZXMgY29uc2lzdGluZyBvbmx5IG9mIHNwYWNlcyBhbmQgdGFicy5cbiAgICAgKiBUaGlzIG1ha2VzIHN1YnNlcXVlbnQgcmVnZXhzIGVhc2llciB0byB3cml0ZSwgYmVjYXVzZSB3ZSBjYW5cbiAgICAgKiBtYXRjaCBjb25zZWN1dGl2ZSBibGFuayBsaW5lcyB3aXRoIC9cXG4rLyBpbnN0ZWFkIG9mIHNvbWV0aGluZ1xuICAgICAqIGNvbnRvcnRlZCBsaWtlIC9bIFxcdF0qXFxuKy9cbiAgICAgKi9cbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eWyBcXHRdKyQvbWcsICcnKTtcblxuICAgIC8vcnVuIGxhbmd1YWdlRXh0ZW5zaW9uc1xuICAgIHNob3dkb3duLmhlbHBlci5mb3JFYWNoKGxhbmdFeHRlbnNpb25zLCBmdW5jdGlvbiAoZXh0KSB7XG4gICAgICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdydW5FeHRlbnNpb24nKShleHQsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIH0pO1xuXG4gICAgLy8gcnVuIHRoZSBzdWIgcGFyc2Vyc1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hQcmVDb2RlVGFncycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2dpdGh1YkNvZGVCbG9ja3MnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoSFRNTEJsb2NrcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hDb2RlVGFncycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3N0cmlwTGlua0RlZmluaXRpb25zJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignYmxvY2tHYW11dCcpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3VuaGFzaEhUTUxTcGFucycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3VuZXNjYXBlU3BlY2lhbENoYXJzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgICAvLyBhdHRhY2tsYWI6IFJlc3RvcmUgZG9sbGFyIHNpZ25zXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqhEL2csICckJCcpO1xuXG4gICAgLy8gYXR0YWNrbGFiOiBSZXN0b3JlIHRyZW1hc1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoVC9nLCAnwqgnKTtcblxuICAgIC8vIFJ1biBvdXRwdXQgbW9kaWZpZXJzXG4gICAgc2hvd2Rvd24uaGVscGVyLmZvckVhY2gob3V0cHV0TW9kaWZpZXJzLCBmdW5jdGlvbiAoZXh0KSB7XG4gICAgICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdydW5FeHRlbnNpb24nKShleHQsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBhbiBvcHRpb24gb2YgdGhpcyBDb252ZXJ0ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqL1xuICB0aGlzLnNldE9wdGlvbiA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgb3B0aW9uc1trZXldID0gdmFsdWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3B0aW9uIG9mIHRoaXMgQ29udmVydGVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICB0aGlzLmdldE9wdGlvbiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gb3B0aW9uc1trZXldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9wdGlvbnMgb2YgdGhpcyBDb252ZXJ0ZXIgaW5zdGFuY2VcbiAgICogQHJldHVybnMge3t9fVxuICAgKi9cbiAgdGhpcy5nZXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgZXh0ZW5zaW9uIHRvIFRISVMgY29udmVydGVyXG4gICAqIEBwYXJhbSB7e319IGV4dGVuc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9bnVsbF1cbiAgICovXG4gIHRoaXMuYWRkRXh0ZW5zaW9uID0gZnVuY3Rpb24gKGV4dGVuc2lvbiwgbmFtZSkge1xuICAgIG5hbWUgPSBuYW1lIHx8IG51bGw7XG4gICAgX3BhcnNlRXh0ZW5zaW9uKGV4dGVuc2lvbiwgbmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVzZSBhIGdsb2JhbCByZWdpc3RlcmVkIGV4dGVuc2lvbiB3aXRoIFRISVMgY29udmVydGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbnNpb25OYW1lIE5hbWUgb2YgdGhlIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCBleHRlbnNpb25cbiAgICovXG4gIHRoaXMudXNlRXh0ZW5zaW9uID0gZnVuY3Rpb24gKGV4dGVuc2lvbk5hbWUpIHtcbiAgICBfcGFyc2VFeHRlbnNpb24oZXh0ZW5zaW9uTmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZmxhdm9yIFRISVMgY29udmVydGVyIHNob3VsZCB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIHRoaXMuc2V0Rmxhdm9yID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoIWZsYXZvci5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgdGhyb3cgRXJyb3IobmFtZSArICcgZmxhdm9yIHdhcyBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgdmFyIHByZXNldCA9IGZsYXZvcltuYW1lXTtcbiAgICBzZXRDb252Rmxhdm9yID0gbmFtZTtcbiAgICBmb3IgKHZhciBvcHRpb24gaW4gcHJlc2V0KSB7XG4gICAgICBpZiAocHJlc2V0Lmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gcHJlc2V0W29wdGlvbl07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnRseSBzZXQgZmxhdm9yIG9mIHRoaXMgY29udmVydGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB0aGlzLmdldEZsYXZvciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2V0Q29udkZsYXZvcjtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV4dGVuc2lvbiBmcm9tIFRISVMgY29udmVydGVyLlxuICAgKiBOb3RlOiBUaGlzIGlzIGEgY29zdGx5IG9wZXJhdGlvbi4gSXQncyBiZXR0ZXIgdG8gaW5pdGlhbGl6ZSBhIG5ldyBjb252ZXJ0ZXJcbiAgICogYW5kIHNwZWNpZnkgdGhlIGV4dGVuc2lvbnMgeW91IHdpc2ggdG8gdXNlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4dGVuc2lvblxuICAgKi9cbiAgdGhpcy5yZW1vdmVFeHRlbnNpb24gPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XG4gICAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNBcnJheShleHRlbnNpb24pKSB7XG4gICAgICBleHRlbnNpb24gPSBbZXh0ZW5zaW9uXTtcbiAgICB9XG4gICAgZm9yICh2YXIgYSA9IDA7IGEgPCBleHRlbnNpb24ubGVuZ3RoOyArK2EpIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb25bYV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhbmdFeHRlbnNpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChsYW5nRXh0ZW5zaW9uc1tpXSA9PT0gZXh0KSB7XG4gICAgICAgICAgbGFuZ0V4dGVuc2lvbnNbaV0uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgb3V0cHV0TW9kaWZpZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChvdXRwdXRNb2RpZmllcnNbaWldID09PSBleHQpIHtcbiAgICAgICAgICBvdXRwdXRNb2RpZmllcnNbaWldLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogR2V0IGFsbCBleHRlbnNpb24gb2YgVEhJUyBjb252ZXJ0ZXJcbiAgICogQHJldHVybnMge3tsYW5ndWFnZTogQXJyYXksIG91dHB1dDogQXJyYXl9fVxuICAgKi9cbiAgdGhpcy5nZXRBbGxFeHRlbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogbGFuZ0V4dGVuc2lvbnMsXG4gICAgICBvdXRwdXQ6IG91dHB1dE1vZGlmaWVyc1xuICAgIH07XG4gIH07XG59O1xuXHJcbi8qKlxuICogVHVybiBNYXJrZG93biBsaW5rIHNob3J0Y3V0cyBpbnRvIFhIVE1MIDxhPiB0YWdzLlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2FuY2hvcnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnYW5jaG9ycy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB2YXIgd3JpdGVBbmNob3JUYWcgPSBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbGlua1RleHQsIGxpbmtJZCwgdXJsLCBtNSwgbTYsIHRpdGxlKSB7XG4gICAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZCh0aXRsZSkpIHtcbiAgICAgIHRpdGxlID0gJyc7XG4gICAgfVxuICAgIGxpbmtJZCA9IGxpbmtJZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciBleHBsaWNpdCBlbXB0eSB1cmxcbiAgICBpZiAod2hvbGVNYXRjaC5zZWFyY2goL1xcKDw/XFxzKj4/ID8oWydcIl0uKlsnXCJdKT9cXCkkL20pID4gLTEpIHtcbiAgICAgIHVybCA9ICcnO1xuICAgIH0gZWxzZSBpZiAoIXVybCkge1xuICAgICAgaWYgKCFsaW5rSWQpIHtcbiAgICAgICAgLy8gbG93ZXItY2FzZSBhbmQgdHVybiBlbWJlZGRlZCBuZXdsaW5lcyBpbnRvIHNwYWNlc1xuICAgICAgICBsaW5rSWQgPSBsaW5rVGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyA/XFxuL2csICcgJyk7XG4gICAgICB9XG4gICAgICB1cmwgPSAnIycgKyBsaW5rSWQ7XG5cbiAgICAgIGlmICghc2hvd2Rvd24uaGVscGVyLmlzVW5kZWZpbmVkKGdsb2JhbHMuZ1VybHNbbGlua0lkXSkpIHtcbiAgICAgICAgdXJsID0gZ2xvYmFscy5nVXJsc1tsaW5rSWRdO1xuICAgICAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChnbG9iYWxzLmdUaXRsZXNbbGlua0lkXSkpIHtcbiAgICAgICAgICB0aXRsZSA9IGdsb2JhbHMuZ1RpdGxlc1tsaW5rSWRdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd2hvbGVNYXRjaDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL3VybCA9IHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzKHVybCwgJypfJywgZmFsc2UpOyAvLyByZXBsYWNlZCBsaW5lIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICB1cmwgPSB1cmwucmVwbGFjZShzaG93ZG93bi5oZWxwZXIucmVnZXhlcy5hc3Rlcmlza0FuZERhc2gsIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuXG4gICAgdmFyIHJlc3VsdCA9ICc8YSBocmVmPVwiJyArIHVybCArICdcIic7XG5cbiAgICBpZiAodGl0bGUgIT09ICcnICYmIHRpdGxlICE9PSBudWxsKSB7XG4gICAgICB0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICAgIC8vdGl0bGUgPSBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVycyh0aXRsZSwgJypfJywgZmFsc2UpOyAvLyByZXBsYWNlZCBsaW5lIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICAgIHRpdGxlID0gdGl0bGUucmVwbGFjZShzaG93ZG93bi5oZWxwZXIucmVnZXhlcy5hc3Rlcmlza0FuZERhc2gsIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuICAgICAgcmVzdWx0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9wZW5MaW5rc0luTmV3V2luZG93KSB7XG4gICAgICAvLyBlc2NhcGVkIF9cbiAgICAgIHJlc3VsdCArPSAnIHRhcmdldD1cIsKoRTk1RWJsYW5rXCInO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSAnPicgKyBsaW5rVGV4dCArICc8L2E+JztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gRmlyc3QsIGhhbmRsZSByZWZlcmVuY2Utc3R5bGUgbGlua3M6IFtsaW5rIHRleHRdIFtpZF1cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxbKCg/OlxcW1teXFxdXSpdfFteXFxbXFxdXSkqKV0gPyg/OlxcbiAqKT9cXFsoLio/KV0oKSgpKCkoKS9nLCB3cml0ZUFuY2hvclRhZyk7XG5cbiAgLy8gTmV4dCwgaW5saW5lLXN0eWxlIGxpbmtzOiBbbGluayB0ZXh0XSh1cmwgXCJvcHRpb25hbCB0aXRsZVwiKVxuICAvLyBjYXNlcyB3aXRoIGNyYXp5IHVybHMgbGlrZSAuL2ltYWdlL2NhdDEpLnBuZ1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXFsoKD86XFxbW15cXF1dKl18W15cXFtcXF1dKSopXSgpWyBcXHRdKlxcKFsgXFx0XT88KFtePl0qKT4oPzpbIFxcdF0qKChbXCInXSkoW15cIl0qPylcXDUpKT9bIFxcdF0/XFwpL2csXG4gICAgd3JpdGVBbmNob3JUYWcpO1xuXG4gIC8vIG5vcm1hbCBjYXNlc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXFsoKD86XFxbW15cXF1dKl18W15cXFtcXF1dKSopXSgpWyBcXHRdKlxcKFsgXFx0XT88PyhbXFxTXSs/KD86XFwoW1xcU10qP1xcKVtcXFNdKj8pPyk+Pyg/OlsgXFx0XSooKFtcIiddKShbXlwiXSo/KVxcNSkpP1sgXFx0XT9cXCkvZyxcbiAgICAgICAgICAgICAgICAgICAgICB3cml0ZUFuY2hvclRhZyk7XG5cbiAgLy8gaGFuZGxlIHJlZmVyZW5jZS1zdHlsZSBzaG9ydGN1dHM6IFtsaW5rIHRleHRdXG4gIC8vIFRoZXNlIG11c3QgY29tZSBsYXN0IGluIGNhc2UgeW91J3ZlIGFsc28gZ290IFtsaW5rIHRlc3RdWzFdXG4gIC8vIG9yIFtsaW5rIHRlc3RdKC9mb28pXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcWyhbXlxcW1xcXV0rKV0oKSgpKCkoKSgpL2csIHdyaXRlQW5jaG9yVGFnKTtcblxuICAvLyBMYXN0bHkgaGFuZGxlIEdpdGh1Yk1lbnRpb25zIGlmIG9wdGlvbiBpcyBlbmFibGVkXG4gIGlmIChvcHRpb25zLmdoTWVudGlvbnMpIHtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXnxcXHMpKFxcXFwpPyhAKFthLXpcXGRcXC1dKykpKD89Wy4hPzssW1xcXSgpXXxcXHN8JCkvZ21pLCBmdW5jdGlvbiAod20sIHN0LCBlc2NhcGUsIG1lbnRpb25zLCB1c2VybmFtZSkge1xuICAgICAgaWYgKGVzY2FwZSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIHJldHVybiBzdCArIG1lbnRpb25zO1xuICAgICAgfVxuXG4gICAgICAvL2NoZWNrIGlmIG9wdGlvbnMuZ2hNZW50aW9uc0xpbmsgaXMgYSBzdHJpbmdcbiAgICAgIGlmICghc2hvd2Rvd24uaGVscGVyLmlzU3RyaW5nKG9wdGlvbnMuZ2hNZW50aW9uc0xpbmspKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2hNZW50aW9uc0xpbmsgb3B0aW9uIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cbiAgICAgIHZhciBsbmsgPSBvcHRpb25zLmdoTWVudGlvbnNMaW5rLnJlcGxhY2UoL1xce3V9L2csIHVzZXJuYW1lKTtcbiAgICAgIHJldHVybiBzdCArICc8YSBocmVmPVwiJyArIGxuayArICdcIj4nICsgbWVudGlvbnMgKyAnPC9hPic7XG4gICAgfSk7XG4gIH1cblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdhbmNob3JzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLy8gdXJsIGFsbG93ZWQgY2hhcnMgW2EtelxcZF8ufjovPyNbXUAhJCYnKCkqKyw7PS1dXG5cbnZhciBzaW1wbGVVUkxSZWdleCAgPSAvXFxiKCgoaHR0cHM/fGZ0cHxkaWN0KTpcXC9cXC98d3d3XFwuKVteJ1wiPlxcc10rXFwuW14nXCI+XFxzXSspKCkoPz1cXHN8JCkoPyFbXCI8Pl0pL2dpLFxuICAgIHNpbXBsZVVSTFJlZ2V4MiA9IC9cXGIoKChodHRwcz98ZnRwfGRpY3QpOlxcL1xcL3x3d3dcXC4pW14nXCI+XFxzXStcXC5bXidcIj5cXHNdKz8pKFsuIT8sKClcXFtcXF1dPykoPz1cXHN8JCkoPyFbXCI8Pl0pL2dpLFxuICAgIC8vc2ltcGxlVVJMUmVnZXgzID0gL1xcYigoKGh0dHBzP3xmdHApOlxcL1xcL3x3d3dcXC4pW2EtelxcZC4tXStcXC5bYS16XFxkXy5+Oi8/I1xcW1xcXUAhJCYnKCkqKyw7PS1dKz8pKFsuIT8oKV0/KSg/PVxcc3wkKSg/IVtcIjw+XSkvZ2ksXG4gICAgZGVsaW1VcmxSZWdleCAgID0gLzwoKChodHRwcz98ZnRwfGRpY3QpOlxcL1xcL3x3d3dcXC4pW14nXCI+XFxzXSspKCk+L2dpLFxuICAgIHNpbXBsZU1haWxSZWdleCA9IC8oXnxcXHMpKD86bWFpbHRvOik/KFtBLVphLXowLTkhIyQlJicqKy0vPT9eX2B7fH1+Ll0rQFstYS16MC05XSsoXFwuWy1hLXowLTldKykqXFwuW2Etel0rKSg/PSR8XFxzKS9nbWksXG4gICAgZGVsaW1NYWlsUmVnZXggID0gLzwoKSg/Om1haWx0bzopPyhbLS5cXHddK0BbLWEtejAtOV0rKFxcLlstYS16MC05XSspKlxcLlthLXpdKyk+L2dpLFxuXG4gICAgcmVwbGFjZUxpbmsgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHdtLCBsaW5rLCBtMiwgbTMsIHRyYWlsaW5nUHVuY3R1YXRpb24pIHtcbiAgICAgICAgdmFyIGxua1R4dCA9IGxpbmssXG4gICAgICAgICAgICBhcHBlbmQgPSAnJyxcbiAgICAgICAgICAgIHRhcmdldCA9ICcnO1xuICAgICAgICBpZiAoL153d3dcXC4vaS50ZXN0KGxpbmspKSB7XG4gICAgICAgICAgbGluayA9IGxpbmsucmVwbGFjZSgvXnd3d1xcLi9pLCAnaHR0cDovL3d3dy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5leGNsdWRlVHJhaWxpbmdQdW5jdHVhdGlvbkZyb21VUkxzICYmIHRyYWlsaW5nUHVuY3R1YXRpb24pIHtcbiAgICAgICAgICBhcHBlbmQgPSB0cmFpbGluZ1B1bmN0dWF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm9wZW5MaW5rc0luTmV3V2luZG93KSB7XG4gICAgICAgICAgdGFyZ2V0ID0gJyB0YXJnZXQ9XCLCqEU5NUVibGFua1wiJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzxhIGhyZWY9XCInICsgbGluayArICdcIicgKyB0YXJnZXQgKyAnPicgKyBsbmtUeHQgKyAnPC9hPicgKyBhcHBlbmQ7XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICByZXBsYWNlTWFpbCA9IGZ1bmN0aW9uIChvcHRpb25zLCBnbG9iYWxzKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHdob2xlTWF0Y2gsIGIsIG1haWwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSAnbWFpbHRvOic7XG4gICAgICAgIGIgPSBiIHx8ICcnO1xuICAgICAgICBtYWlsID0gc2hvd2Rvd24uc3ViUGFyc2VyKCd1bmVzY2FwZVNwZWNpYWxDaGFycycpKG1haWwsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICBpZiAob3B0aW9ucy5lbmNvZGVFbWFpbHMpIHtcbiAgICAgICAgICBocmVmID0gc2hvd2Rvd24uaGVscGVyLmVuY29kZUVtYWlsQWRkcmVzcyhocmVmICsgbWFpbCk7XG4gICAgICAgICAgbWFpbCA9IHNob3dkb3duLmhlbHBlci5lbmNvZGVFbWFpbEFkZHJlc3MobWFpbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHJlZiA9IGhyZWYgKyBtYWlsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiICsgJzxhIGhyZWY9XCInICsgaHJlZiArICdcIj4nICsgbWFpbCArICc8L2E+JztcbiAgICAgIH07XG4gICAgfTtcblxuc2hvd2Rvd24uc3ViUGFyc2VyKCdhdXRvTGlua3MnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnYXV0b0xpbmtzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoZGVsaW1VcmxSZWdleCwgcmVwbGFjZUxpbmsob3B0aW9ucykpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGRlbGltTWFpbFJlZ2V4LCByZXBsYWNlTWFpbChvcHRpb25zLCBnbG9iYWxzKSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnYXV0b0xpbmtzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59KTtcblxuc2hvd2Rvd24uc3ViUGFyc2VyKCdzaW1wbGlmaWVkQXV0b0xpbmtzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmICghb3B0aW9ucy5zaW1wbGlmaWVkQXV0b0xpbmspIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3NpbXBsaWZpZWRBdXRvTGlua3MuYmVmb3JlJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgaWYgKG9wdGlvbnMuZXhjbHVkZVRyYWlsaW5nUHVuY3R1YXRpb25Gcm9tVVJMcykge1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2Uoc2ltcGxlVVJMUmVnZXgyLCByZXBsYWNlTGluayhvcHRpb25zKSk7XG4gIH0gZWxzZSB7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZShzaW1wbGVVUkxSZWdleCwgcmVwbGFjZUxpbmsob3B0aW9ucykpO1xuICB9XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2Uoc2ltcGxlTWFpbFJlZ2V4LCByZXBsYWNlTWFpbChvcHRpb25zLCBnbG9iYWxzKSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnc2ltcGxpZmllZEF1dG9MaW5rcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBUaGVzZSBhcmUgYWxsIHRoZSB0cmFuc2Zvcm1hdGlvbnMgdGhhdCBmb3JtIGJsb2NrLWxldmVsXG4gKiB0YWdzIGxpa2UgcGFyYWdyYXBocywgaGVhZGVycywgYW5kIGxpc3QgaXRlbXMuXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignYmxvY2tHYW11dCcsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdibG9ja0dhbXV0LmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIHdlIHBhcnNlIGJsb2NrcXVvdGVzIGZpcnN0IHNvIHRoYXQgd2UgY2FuIGhhdmUgaGVhZGluZ3MgYW5kIGhyc1xuICAvLyBpbnNpZGUgYmxvY2txdW90ZXNcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignYmxvY2tRdW90ZXMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignaGVhZGVycycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIERvIEhvcml6b250YWwgUnVsZXM6XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hvcml6b250YWxSdWxlJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignbGlzdHMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignY29kZUJsb2NrcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCd0YWJsZXMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBXZSBhbHJlYWR5IHJhbiBfSGFzaEhUTUxCbG9ja3MoKSBiZWZvcmUsIGluIE1hcmtkb3duKCksIGJ1dCB0aGF0XG4gIC8vIHdhcyB0byBlc2NhcGUgcmF3IEhUTUwgaW4gdGhlIG9yaWdpbmFsIE1hcmtkb3duIHNvdXJjZS4gVGhpcyB0aW1lLFxuICAvLyB3ZSdyZSBlc2NhcGluZyB0aGUgbWFya3VwIHdlJ3ZlIGp1c3QgY3JlYXRlZCwgc28gdGhhdCB3ZSBkb24ndCB3cmFwXG4gIC8vIDxwPiB0YWdzIGFyb3VuZCBibG9jay1sZXZlbCB0YWdzLlxuICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoSFRNTEJsb2NrcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdwYXJhZ3JhcGhzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnYmxvY2tHYW11dC5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuc2hvd2Rvd24uc3ViUGFyc2VyKCdibG9ja1F1b3RlcycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdibG9ja1F1b3Rlcy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oKF4gezAsM30+WyBcXHRdPy4rXFxuKC4rXFxuKSpcXG4qKSspL2dtLCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEpIHtcbiAgICB2YXIgYnEgPSBtMTtcblxuICAgIC8vIGF0dGFja2xhYjogaGFjayBhcm91bmQgS29ucXVlcm9yIDMuNS40IGJ1ZzpcbiAgICAvLyBcIi0tLS0tLS0tLS1idWdcIi5yZXBsYWNlKC9eLS9nLFwiXCIpID09IFwiYnVnXCJcbiAgICBicSA9IGJxLnJlcGxhY2UoL15bIFxcdF0qPlsgXFx0XT8vZ20sICfCqDAnKTsgLy8gdHJpbSBvbmUgbGV2ZWwgb2YgcXVvdGluZ1xuXG4gICAgLy8gYXR0YWNrbGFiOiBjbGVhbiB1cCBoYWNrXG4gICAgYnEgPSBicS5yZXBsYWNlKC/CqDAvZywgJycpO1xuXG4gICAgYnEgPSBicS5yZXBsYWNlKC9eWyBcXHRdKyQvZ20sICcnKTsgLy8gdHJpbSB3aGl0ZXNwYWNlLW9ubHkgbGluZXNcbiAgICBicSA9IHNob3dkb3duLnN1YlBhcnNlcignZ2l0aHViQ29kZUJsb2NrcycpKGJxLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICBicSA9IHNob3dkb3duLnN1YlBhcnNlcignYmxvY2tHYW11dCcpKGJxLCBvcHRpb25zLCBnbG9iYWxzKTsgLy8gcmVjdXJzZVxuXG4gICAgYnEgPSBicS5yZXBsYWNlKC8oXnxcXG4pL2csICckMSAgJyk7XG4gICAgLy8gVGhlc2UgbGVhZGluZyBzcGFjZXMgc2NyZXcgd2l0aCA8cHJlPiBjb250ZW50LCBzbyB3ZSBuZWVkIHRvIGZpeCB0aGF0OlxuICAgIGJxID0gYnEucmVwbGFjZSgvKFxccyo8cHJlPlteXFxyXSs/PFxcL3ByZT4pL2dtLCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEpIHtcbiAgICAgIHZhciBwcmUgPSBtMTtcbiAgICAgIC8vIGF0dGFja2xhYjogaGFjayBhcm91bmQgS29ucXVlcm9yIDMuNS40IGJ1ZzpcbiAgICAgIHByZSA9IHByZS5yZXBsYWNlKC9eICAvbWcsICfCqDAnKTtcbiAgICAgIHByZSA9IHByZS5yZXBsYWNlKC/CqDAvZywgJycpO1xuICAgICAgcmV0dXJuIHByZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycpKCc8YmxvY2txdW90ZT5cXG4nICsgYnEgKyAnXFxuPC9ibG9ja3F1b3RlPicsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICB9KTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdibG9ja1F1b3Rlcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICByZXR1cm4gdGV4dDtcbn0pO1xuXHJcbi8qKlxuICogUHJvY2VzcyBNYXJrZG93biBgPHByZT48Y29kZT5gIGJsb2Nrcy5cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdjb2RlQmxvY2tzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2NvZGVCbG9ja3MuYmVmb3JlJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgLy8gc2VudGluZWwgd29ya2Fyb3VuZHMgZm9yIGxhY2sgb2YgXFxBIGFuZCBcXFosIHNhZmFyaVxca2h0bWwgYnVnXG4gIHRleHQgKz0gJ8KoMCc7XG5cbiAgdmFyIHBhdHRlcm4gPSAvKD86XFxuXFxufF4pKCg/Oig/OlsgXXs0fXxcXHQpLipcXG4rKSspKFxcbipbIF17MCwzfVteIFxcdFxcbl18KD89wqgwKSkvZztcbiAgdGV4dCA9IHRleHQucmVwbGFjZShwYXR0ZXJuLCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEsIG0yKSB7XG4gICAgdmFyIGNvZGVibG9jayA9IG0xLFxuICAgICAgICBuZXh0Q2hhciA9IG0yLFxuICAgICAgICBlbmQgPSAnXFxuJztcblxuICAgIGNvZGVibG9jayA9IHNob3dkb3duLnN1YlBhcnNlcignb3V0ZGVudCcpKGNvZGVibG9jaywgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgY29kZWJsb2NrID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVDb2RlJykoY29kZWJsb2NrLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICBjb2RlYmxvY2sgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2RldGFiJykoY29kZWJsb2NrLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICBjb2RlYmxvY2sgPSBjb2RlYmxvY2sucmVwbGFjZSgvXlxcbisvZywgJycpOyAvLyB0cmltIGxlYWRpbmcgbmV3bGluZXNcbiAgICBjb2RlYmxvY2sgPSBjb2RlYmxvY2sucmVwbGFjZSgvXFxuKyQvZywgJycpOyAvLyB0cmltIHRyYWlsaW5nIG5ld2xpbmVzXG5cbiAgICBpZiAob3B0aW9ucy5vbWl0RXh0cmFXTEluQ29kZUJsb2Nrcykge1xuICAgICAgZW5kID0gJyc7XG4gICAgfVxuXG4gICAgY29kZWJsb2NrID0gJzxwcmU+PGNvZGU+JyArIGNvZGVibG9jayArIGVuZCArICc8L2NvZGU+PC9wcmU+JztcblxuICAgIHJldHVybiBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycpKGNvZGVibG9jaywgb3B0aW9ucywgZ2xvYmFscykgKyBuZXh0Q2hhcjtcbiAgfSk7XG5cbiAgLy8gc3RyaXAgc2VudGluZWxcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqgwLywgJycpO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2NvZGVCbG9ja3MuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqXG4gKiAgICogIEJhY2t0aWNrIHF1b3RlcyBhcmUgdXNlZCBmb3IgPGNvZGU+PC9jb2RlPiBzcGFucy5cbiAqXG4gKiAgICogIFlvdSBjYW4gdXNlIG11bHRpcGxlIGJhY2t0aWNrcyBhcyB0aGUgZGVsaW1pdGVycyBpZiB5b3Ugd2FudCB0b1xuICogICAgIGluY2x1ZGUgbGl0ZXJhbCBiYWNrdGlja3MgaW4gdGhlIGNvZGUgc3Bhbi4gU28sIHRoaXMgaW5wdXQ6XG4gKlxuICogICAgICAgICBKdXN0IHR5cGUgYGBmb28gYGJhcmAgYmF6YGAgYXQgdGhlIHByb21wdC5cbiAqXG4gKiAgICAgICBXaWxsIHRyYW5zbGF0ZSB0bzpcbiAqXG4gKiAgICAgICAgIDxwPkp1c3QgdHlwZSA8Y29kZT5mb28gYGJhcmAgYmF6PC9jb2RlPiBhdCB0aGUgcHJvbXB0LjwvcD5cbiAqXG4gKiAgICBUaGVyZSdzIG5vIGFyYml0cmFyeSBsaW1pdCB0byB0aGUgbnVtYmVyIG9mIGJhY2t0aWNrcyB5b3VcbiAqICAgIGNhbiB1c2UgYXMgZGVsaW10ZXJzLiBJZiB5b3UgbmVlZCB0aHJlZSBjb25zZWN1dGl2ZSBiYWNrdGlja3NcbiAqICAgIGluIHlvdXIgY29kZSwgdXNlIGZvdXIgZm9yIGRlbGltaXRlcnMsIGV0Yy5cbiAqXG4gKiAgKiAgWW91IGNhbiB1c2Ugc3BhY2VzIHRvIGdldCBsaXRlcmFsIGJhY2t0aWNrcyBhdCB0aGUgZWRnZXM6XG4gKlxuICogICAgICAgICAuLi4gdHlwZSBgYCBgYmFyYCBgYCAuLi5cbiAqXG4gKiAgICAgICBUdXJucyB0bzpcbiAqXG4gKiAgICAgICAgIC4uLiB0eXBlIDxjb2RlPmBiYXJgPC9jb2RlPiAuLi5cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdjb2RlU3BhbnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnY29kZVNwYW5zLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIGlmICh0eXBlb2YodGV4dCkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGV4dCA9ICcnO1xuICB9XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhefFteXFxcXF0pKGArKShbXlxccl0qP1teYF0pXFwyKD8hYCkvZ20sXG4gICAgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG0xLCBtMiwgbTMpIHtcbiAgICAgIHZhciBjID0gbTM7XG4gICAgICBjID0gYy5yZXBsYWNlKC9eKFsgXFx0XSopL2csICcnKTtcdC8vIGxlYWRpbmcgd2hpdGVzcGFjZVxuICAgICAgYyA9IGMucmVwbGFjZSgvWyBcXHRdKiQvZywgJycpO1x0Ly8gdHJhaWxpbmcgd2hpdGVzcGFjZVxuICAgICAgYyA9IHNob3dkb3duLnN1YlBhcnNlcignZW5jb2RlQ29kZScpKGMsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgcmV0dXJuIG0xICsgJzxjb2RlPicgKyBjICsgJzwvY29kZT4nO1xuICAgIH1cbiAgKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdjb2RlU3BhbnMuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIENvbnZlcnQgYWxsIHRhYnMgdG8gc3BhY2VzXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignZGV0YWInLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2RldGFiLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIGV4cGFuZCBmaXJzdCBuLTEgdGFic1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHQoPz1cXHQpL2csICcgICAgJyk7IC8vIGdfdGFiX3dpZHRoXG5cbiAgLy8gcmVwbGFjZSB0aGUgbnRoIHdpdGggdHdvIHNlbnRpbmVsc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHQvZywgJ8KoQcKoQicpO1xuXG4gIC8vIHVzZSB0aGUgc2VudGluZWwgdG8gYW5jaG9yIG91ciByZWdleCBzbyBpdCBkb2Vzbid0IGV4cGxvZGVcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqhCKC4rPynCqEEvZywgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG0xKSB7XG4gICAgdmFyIGxlYWRpbmdUZXh0ID0gbTEsXG4gICAgICAgIG51bVNwYWNlcyA9IDQgLSBsZWFkaW5nVGV4dC5sZW5ndGggJSA0OyAgLy8gZ190YWJfd2lkdGhcblxuICAgIC8vIHRoZXJlICptdXN0KiBiZSBhIGJldHRlciB3YXkgdG8gZG8gdGhpczpcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVNwYWNlczsgaSsrKSB7XG4gICAgICBsZWFkaW5nVGV4dCArPSAnICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYWRpbmdUZXh0O1xuICB9KTtcblxuICAvLyBjbGVhbiB1cCBzZW50aW5lbHNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqhBL2csICcgICAgJyk7ICAvLyBnX3RhYl93aWR0aFxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/CqEIvZywgJycpO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2RldGFiLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBTbWFydCBwcm9jZXNzaW5nIGZvciBhbXBlcnNhbmRzIGFuZCBhbmdsZSBicmFja2V0cyB0aGF0IG5lZWQgdG8gYmUgZW5jb2RlZC5cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVBbXBzQW5kQW5nbGVzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdlbmNvZGVBbXBzQW5kQW5nbGVzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIEFtcGVyc2FuZC1lbmNvZGluZyBiYXNlZCBlbnRpcmVseSBvbiBOYXQgSXJvbnMncyBBbXB1dGF0b3IgTVQgcGx1Z2luOlxuICAvLyBodHRwOi8vYnVtcHBvLm5ldC9wcm9qZWN0cy9hbXB1dGF0b3IvXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyYoPyEjP1t4WF0/KD86WzAtOWEtZkEtRl0rfFxcdyspOykvZywgJyZhbXA7Jyk7XG5cbiAgLy8gRW5jb2RlIG5ha2VkIDwnc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88KD8hW2EtelxcLz8kIV0pL2dpLCAnJmx0OycpO1xuXG4gIC8vIEVuY29kZSA8XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcblxuICAvLyBFbmNvZGUgPlxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnZW5jb2RlQW1wc0FuZEFuZ2xlcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICByZXR1cm4gdGV4dDtcbn0pO1xuXHJcbi8qKlxuICogUmV0dXJucyB0aGUgc3RyaW5nLCB3aXRoIGFmdGVyIHByb2Nlc3NpbmcgdGhlIGZvbGxvd2luZyBiYWNrc2xhc2ggZXNjYXBlIHNlcXVlbmNlcy5cbiAqXG4gKiBhdHRhY2tsYWI6IFRoZSBwb2xpdGUgd2F5IHRvIGRvIHRoaXMgaXMgd2l0aCB0aGUgbmV3IGVzY2FwZUNoYXJhY3RlcnMoKSBmdW5jdGlvbjpcbiAqXG4gKiAgICB0ZXh0ID0gZXNjYXBlQ2hhcmFjdGVycyh0ZXh0LFwiXFxcXFwiLHRydWUpO1xuICogICAgdGV4dCA9IGVzY2FwZUNoYXJhY3RlcnModGV4dCxcImAqX3t9W10oKT4jKy0uIVwiLHRydWUpO1xuICpcbiAqIC4uLmJ1dCB3ZSdyZSBzaWRlc3RlcHBpbmcgaXRzIHVzZSBvZiB0aGUgKHNsb3cpIFJlZ0V4cCBjb25zdHJ1Y3RvclxuICogYXMgYW4gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiAgVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhIExPVC5cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVCYWNrc2xhc2hFc2NhcGVzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdlbmNvZGVCYWNrc2xhc2hFc2NhcGVzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFwoXFxcXCkvZywgc2hvd2Rvd24uaGVscGVyLmVzY2FwZUNoYXJhY3RlcnNDYWxsYmFjayk7XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFwoW2AqX3t9XFxbXFxdKCk+IysuIX49fC1dKS9nLCBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdlbmNvZGVCYWNrc2xhc2hFc2NhcGVzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBFbmNvZGUvZXNjYXBlIGNlcnRhaW4gY2hhcmFjdGVycyBpbnNpZGUgTWFya2Rvd24gY29kZSBydW5zLlxuICogVGhlIHBvaW50IGlzIHRoYXQgaW4gY29kZSwgdGhlc2UgY2hhcmFjdGVycyBhcmUgbGl0ZXJhbHMsXG4gKiBhbmQgbG9zZSB0aGVpciBzcGVjaWFsIE1hcmtkb3duIG1lYW5pbmdzLlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2VuY29kZUNvZGUnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnZW5jb2RlQ29kZS5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBFbmNvZGUgYWxsIGFtcGVyc2FuZHM7IEhUTUwgZW50aXRpZXMgYXJlIG5vdFxuICAvLyBlbnRpdGllcyB3aXRoaW4gYSBNYXJrZG93biBjb2RlIHNwYW4uXG4gIHRleHQgPSB0ZXh0XG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgLy8gRG8gdGhlIGFuZ2xlIGJyYWNrZXQgc29uZyBhbmQgZGFuY2U6XG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgLy8gTm93LCBlc2NhcGUgY2hhcmFjdGVycyB0aGF0IGFyZSBtYWdpYyBpbiBNYXJrZG93bjpcbiAgICAucmVwbGFjZSgvKFsqX3t9XFxbXFxdXFxcXD1+LV0pL2csIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2VuY29kZUNvZGUuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIFdpdGhpbiB0YWdzIC0tIG1lYW5pbmcgYmV0d2VlbiA8IGFuZCA+IC0tIGVuY29kZSBbXFwgYCAqIF8gfiA9XSBzbyB0aGV5XG4gKiBkb24ndCBjb25mbGljdCB3aXRoIHRoZWlyIHVzZSBpbiBNYXJrZG93biBmb3IgY29kZSwgaXRhbGljcyBhbmQgc3Ryb25nLlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2VzY2FwZVNwZWNpYWxDaGFyc1dpdGhpblRhZ0F0dHJpYnV0ZXMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2VzY2FwZVNwZWNpYWxDaGFyc1dpdGhpblRhZ0F0dHJpYnV0ZXMuYmVmb3JlJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgLy8gQnVpbGQgYSByZWdleCB0byBmaW5kIEhUTUwgdGFncyBhbmQgY29tbWVudHMuICBTZWUgRnJpZWRsJ3NcbiAgLy8gXCJNYXN0ZXJpbmcgUmVndWxhciBFeHByZXNzaW9uc1wiLCAybmQgRWQuLCBwcC4gMjAwLTIwMS5cbiAgdmFyIHJlZ2V4ID0gLyg8W2EtelxcLyEkXShcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPnw8ISgtLS4qPy0tXFxzKikrPikvZ2k7XG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZShyZWdleCwgZnVuY3Rpb24gKHdob2xlTWF0Y2gpIHtcbiAgICByZXR1cm4gd2hvbGVNYXRjaFxuICAgICAgLnJlcGxhY2UoLyguKTxcXC8/Y29kZT4oPz0uKS9nLCAnJDFgJylcbiAgICAgIC5yZXBsYWNlKC8oW1xcXFxgKl9+PXxdKS9nLCBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrKTtcbiAgfSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnZXNjYXBlU3BlY2lhbENoYXJzV2l0aGluVGFnQXR0cmlidXRlcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICByZXR1cm4gdGV4dDtcbn0pO1xuXHJcbi8qKlxuICogSGFuZGxlIGdpdGh1YiBjb2RlYmxvY2tzIHByaW9yIHRvIHJ1bm5pbmcgSGFzaEhUTUwgc28gdGhhdFxuICogSFRNTCBjb250YWluZWQgd2l0aGluIHRoZSBjb2RlYmxvY2sgZ2V0cyBlc2NhcGVkIHByb3Blcmx5XG4gKiBFeGFtcGxlOlxuICogYGBgcnVieVxuICogICAgIGRlZiBoZWxsb193b3JsZCh4KVxuICogICAgICAgcHV0cyBcIkhlbGxvLCAje3h9XCJcbiAqICAgICBlbmRcbiAqIGBgYFxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2dpdGh1YkNvZGVCbG9ja3MnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gZWFybHkgZXhpdCBpZiBvcHRpb24gaXMgbm90IGVuYWJsZWRcbiAgaWYgKCFvcHRpb25zLmdoQ29kZUJsb2Nrcykge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnZ2l0aHViQ29kZUJsb2Nrcy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB0ZXh0ICs9ICfCqDAnO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxuKWBgYCguKilcXG4oW1xcc1xcU10qPylcXG5gYGAvZywgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIGxhbmd1YWdlLCBjb2RlYmxvY2spIHtcbiAgICB2YXIgZW5kID0gKG9wdGlvbnMub21pdEV4dHJhV0xJbkNvZGVCbG9ja3MpID8gJycgOiAnXFxuJztcblxuICAgIC8vIEZpcnN0IHBhcnNlIHRoZSBnaXRodWIgY29kZSBibG9ja1xuICAgIGNvZGVibG9jayA9IHNob3dkb3duLnN1YlBhcnNlcignZW5jb2RlQ29kZScpKGNvZGVibG9jaywgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgY29kZWJsb2NrID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdkZXRhYicpKGNvZGVibG9jaywgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgY29kZWJsb2NrID0gY29kZWJsb2NrLnJlcGxhY2UoL15cXG4rL2csICcnKTsgLy8gdHJpbSBsZWFkaW5nIG5ld2xpbmVzXG4gICAgY29kZWJsb2NrID0gY29kZWJsb2NrLnJlcGxhY2UoL1xcbiskL2csICcnKTsgLy8gdHJpbSB0cmFpbGluZyB3aGl0ZXNwYWNlXG5cbiAgICBjb2RlYmxvY2sgPSAnPHByZT48Y29kZScgKyAobGFuZ3VhZ2UgPyAnIGNsYXNzPVwiJyArIGxhbmd1YWdlICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2UgKyAnXCInIDogJycpICsgJz4nICsgY29kZWJsb2NrICsgZW5kICsgJzwvY29kZT48L3ByZT4nO1xuXG4gICAgY29kZWJsb2NrID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoQmxvY2snKShjb2RlYmxvY2ssIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gICAgLy8gU2luY2UgR0hDb2RlYmxvY2tzIGNhbiBiZSBmYWxzZSBwb3NpdGl2ZXMsIHdlIG5lZWQgdG9cbiAgICAvLyBzdG9yZSB0aGUgcHJpbWl0aXZlIHRleHQgYW5kIHRoZSBwYXJzZWQgdGV4dCBpbiBhIGdsb2JhbCB2YXIsXG4gICAgLy8gYW5kIHRoZW4gcmV0dXJuIGEgdG9rZW5cbiAgICByZXR1cm4gJ1xcblxcbsKoRycgKyAoZ2xvYmFscy5naENvZGVCbG9ja3MucHVzaCh7dGV4dDogd2hvbGVNYXRjaCwgY29kZWJsb2NrOiBjb2RlYmxvY2t9KSAtIDEpICsgJ0dcXG5cXG4nO1xuICB9KTtcblxuICAvLyBhdHRhY2tsYWI6IHN0cmlwIHNlbnRpbmVsXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoMC8sICcnKTtcblxuICByZXR1cm4gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdnaXRodWJDb2RlQmxvY2tzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaGFzaEJsb2NrLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXlxcbit8XFxuKyQpL2csICcnKTtcbiAgdGV4dCA9ICdcXG5cXG7CqEsnICsgKGdsb2JhbHMuZ0h0bWxCbG9ja3MucHVzaCh0ZXh0KSAtIDEpICsgJ0tcXG5cXG4nO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoQmxvY2suYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIEhhc2ggYW5kIGVzY2FwZSA8Y29kZT4gZWxlbWVudHMgdGhhdCBzaG91bGQgbm90IGJlIHBhcnNlZCBhcyBtYXJrZG93blxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hDb2RlVGFncycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaGFzaENvZGVUYWdzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHZhciByZXBGdW5jID0gZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG1hdGNoLCBsZWZ0LCByaWdodCkge1xuICAgIHZhciBjb2RlYmxvY2sgPSBsZWZ0ICsgc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVDb2RlJykobWF0Y2gsIG9wdGlvbnMsIGdsb2JhbHMpICsgcmlnaHQ7XG4gICAgcmV0dXJuICfCqEMnICsgKGdsb2JhbHMuZ0h0bWxTcGFucy5wdXNoKGNvZGVibG9jaykgLSAxKSArICdDJztcbiAgfTtcblxuICAvLyBIYXNoIG5ha2VkIDxjb2RlPlxuICB0ZXh0ID0gc2hvd2Rvd24uaGVscGVyLnJlcGxhY2VSZWN1cnNpdmVSZWdFeHAodGV4dCwgcmVwRnVuYywgJzxjb2RlXFxcXGJbXj5dKj4nLCAnPC9jb2RlPicsICdnaW0nKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoQ29kZVRhZ3MuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hFbGVtZW50JywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHJldHVybiBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEpIHtcbiAgICB2YXIgYmxvY2tUZXh0ID0gbTE7XG5cbiAgICAvLyBVbmRvIGRvdWJsZSBsaW5lc1xuICAgIGJsb2NrVGV4dCA9IGJsb2NrVGV4dC5yZXBsYWNlKC9cXG5cXG4vZywgJ1xcbicpO1xuICAgIGJsb2NrVGV4dCA9IGJsb2NrVGV4dC5yZXBsYWNlKC9eXFxuLywgJycpO1xuXG4gICAgLy8gc3RyaXAgdHJhaWxpbmcgYmxhbmsgbGluZXNcbiAgICBibG9ja1RleHQgPSBibG9ja1RleHQucmVwbGFjZSgvXFxuKyQvZywgJycpO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgZWxlbWVudCB0ZXh0IHdpdGggYSBtYXJrZXIgKFwiwqhLeEtcIiB3aGVyZSB4IGlzIGl0cyBrZXkpXG4gICAgYmxvY2tUZXh0ID0gJ1xcblxcbsKoSycgKyAoZ2xvYmFscy5nSHRtbEJsb2Nrcy5wdXNoKGJsb2NrVGV4dCkgLSAxKSArICdLXFxuXFxuJztcblxuICAgIHJldHVybiBibG9ja1RleHQ7XG4gIH07XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hIVE1MQmxvY2tzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoSFRNTEJsb2Nrcy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB2YXIgYmxvY2tUYWdzID0gW1xuICAgICAgICAncHJlJyxcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICdoMScsXG4gICAgICAgICdoMicsXG4gICAgICAgICdoMycsXG4gICAgICAgICdoNCcsXG4gICAgICAgICdoNScsXG4gICAgICAgICdoNicsXG4gICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgJ3RhYmxlJyxcbiAgICAgICAgJ2RsJyxcbiAgICAgICAgJ29sJyxcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgJ3NjcmlwdCcsXG4gICAgICAgICdub3NjcmlwdCcsXG4gICAgICAgICdmb3JtJyxcbiAgICAgICAgJ2ZpZWxkc2V0JyxcbiAgICAgICAgJ2lmcmFtZScsXG4gICAgICAgICdtYXRoJyxcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2Zvb3RlcicsXG4gICAgICAgICduYXYnLFxuICAgICAgICAnYXJ0aWNsZScsXG4gICAgICAgICdhc2lkZScsXG4gICAgICAgICdhZGRyZXNzJyxcbiAgICAgICAgJ2F1ZGlvJyxcbiAgICAgICAgJ2NhbnZhcycsXG4gICAgICAgICdmaWd1cmUnLFxuICAgICAgICAnaGdyb3VwJyxcbiAgICAgICAgJ291dHB1dCcsXG4gICAgICAgICd2aWRlbycsXG4gICAgICAgICdwJ1xuICAgICAgXSxcbiAgICAgIHJlcEZ1bmMgPSBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbWF0Y2gsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHZhciB0eHQgPSB3aG9sZU1hdGNoO1xuICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGh0bWwgZWxlbWVudCBpcyBtYXJrZWQgYXMgbWFya2Rvd25cbiAgICAgICAgLy8gaWYgc28sIGl0J3MgY29udGVudHMgc2hvdWxkIGJlIHBhcnNlZCBhcyBtYXJrZG93blxuICAgICAgICBpZiAobGVmdC5zZWFyY2goL1xcYm1hcmtkb3duXFxiLykgIT09IC0xKSB7XG4gICAgICAgICAgdHh0ID0gbGVmdCArIGdsb2JhbHMuY29udmVydGVyLm1ha2VIdG1sKG1hdGNoKSArIHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnXFxuXFxuwqhLJyArIChnbG9iYWxzLmdIdG1sQmxvY2tzLnB1c2godHh0KSAtIDEpICsgJ0tcXG5cXG4nO1xuICAgICAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrVGFncy5sZW5ndGg7ICsraSkge1xuXG4gICAgdmFyIG9wVGFnUG9zLFxuICAgICAgICByZ3gxICAgICA9IG5ldyBSZWdFeHAoJ14gezAsM308JyArIGJsb2NrVGFnc1tpXSArICdcXFxcYltePl0qPicsICdpbScpLFxuICAgICAgICBwYXRMZWZ0ICA9ICc8JyArIGJsb2NrVGFnc1tpXSArICdcXFxcYltePl0qPicsXG4gICAgICAgIHBhdFJpZ2h0ID0gJzwvJyArIGJsb2NrVGFnc1tpXSArICc+JztcbiAgICAvLyAxLiBMb29rIGZvciB0aGUgZmlyc3QgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9wZW5pbmcgSFRNTCB0YWcgaW4gdGhlIHRleHRcbiAgICB3aGlsZSAoKG9wVGFnUG9zID0gc2hvd2Rvd24uaGVscGVyLnJlZ2V4SW5kZXhPZih0ZXh0LCByZ3gxKSkgIT09IC0xKSB7XG4gICAgICAvLzIuIFNwbGl0IHRoZSB0ZXh0IGluIHRoYXQgcG9zaXRpb25cbiAgICAgIHZhciBzdWJUZXh0cyA9IHNob3dkb3duLmhlbHBlci5zcGxpdEF0SW5kZXgodGV4dCwgb3BUYWdQb3MpLFxuICAgICAgLy8zLiBNYXRjaCByZWN1cnNpdmVseVxuICAgICAgICAgIG5ld1N1YlRleHQxID0gc2hvd2Rvd24uaGVscGVyLnJlcGxhY2VSZWN1cnNpdmVSZWdFeHAoc3ViVGV4dHNbMV0sIHJlcEZ1bmMsIHBhdExlZnQsIHBhdFJpZ2h0LCAnaW0nKTtcblxuICAgICAgLy8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICBpZiAobmV3U3ViVGV4dDEgPT09IHN1YlRleHRzWzFdKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGV4dCA9IHN1YlRleHRzWzBdLmNvbmNhdChuZXdTdWJUZXh0MSk7XG4gICAgfVxuICB9XG4gIC8vIEhSIFNQRUNJQUwgQ0FTRVxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFxuIHswLDN9KDwoaHIpXFxiKFtePD5dKSo/XFwvPz4pWyBcXHRdKig/PVxcbnsyLH0pKS9nLFxuICAgIHNob3dkb3duLnN1YlBhcnNlcignaGFzaEVsZW1lbnQnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSk7XG5cbiAgLy8gU3BlY2lhbCBjYXNlIGZvciBzdGFuZGFsb25lIEhUTUwgY29tbWVudHNcbiAgdGV4dCA9IHNob3dkb3duLmhlbHBlci5yZXBsYWNlUmVjdXJzaXZlUmVnRXhwKHRleHQsIGZ1bmN0aW9uICh0eHQpIHtcbiAgICByZXR1cm4gJ1xcblxcbsKoSycgKyAoZ2xvYmFscy5nSHRtbEJsb2Nrcy5wdXNoKHR4dCkgLSAxKSArICdLXFxuXFxuJztcbiAgfSwgJ14gezAsM308IS0tJywgJy0tPicsICdnbScpO1xuXG4gIC8vIFBIUCBhbmQgQVNQLXN0eWxlIHByb2Nlc3NvciBpbnN0cnVjdGlvbnMgKDw/Li4uPz4gYW5kIDwlLi4uJT4pXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyg/OlxcblxcbikoIHswLDN9KD86PChbPyVdKVteXFxyXSo/XFwyPilbIFxcdF0qKD89XFxuezIsfSkpL2csXG4gICAgc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoRWxlbWVudCcpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoSFRNTEJsb2Nrcy5hZnRlcicsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICByZXR1cm4gdGV4dDtcbn0pO1xuXHJcbi8qKlxuICogSGFzaCBzcGFuIGVsZW1lbnRzIHRoYXQgc2hvdWxkIG5vdCBiZSBwYXJzZWQgYXMgbWFya2Rvd25cbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCdoYXNoSFRNTFNwYW5zJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoSFRNTFNwYW5zLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIGZ1bmN0aW9uIGhhc2hIVE1MU3BhbiAoaHRtbCkge1xuICAgIHJldHVybiAnwqhDJyArIChnbG9iYWxzLmdIdG1sU3BhbnMucHVzaChodG1sKSAtIDEpICsgJ0MnO1xuICB9XG5cbiAgLy8gSGFzaCBTZWxmIENsb3NpbmcgdGFnc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88W14+XSs/XFwvPi9naSwgZnVuY3Rpb24gKHdtKSB7XG4gICAgcmV0dXJuIGhhc2hIVE1MU3Bhbih3bSk7XG4gIH0pO1xuXG4gIC8vIEhhc2ggdGFncyB3aXRob3V0IHByb3BlcnRpZXNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvPChbXj5dKz8pPltcXHNcXFNdKj88XFwvXFwxPi9nLCBmdW5jdGlvbiAod20pIHtcbiAgICByZXR1cm4gaGFzaEhUTUxTcGFuKHdtKTtcbiAgfSk7XG5cbiAgLy8gSGFzaCB0YWdzIHdpdGggcHJvcGVydGllc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88KFtePl0rPylcXHNbXj5dKz8+W1xcc1xcU10qPzxcXC9cXDE+L2csIGZ1bmN0aW9uICh3bSkge1xuICAgIHJldHVybiBoYXNoSFRNTFNwYW4od20pO1xuICB9KTtcblxuICAvLyBIYXNoIHNlbGYgY2xvc2luZyB0YWdzIHdpdGhvdXQgLz5cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvPFtePl0rPz4vZ2ksIGZ1bmN0aW9uICh3bSkge1xuICAgIHJldHVybiBoYXNoSFRNTFNwYW4od20pO1xuICB9KTtcblxuICAvKnNob3dkb3duLmhlbHBlci5tYXRjaFJlY3Vyc2l2ZVJlZ0V4cCh0ZXh0LCAnPGNvZGVcXFxcYltePl0qPicsICc8L2NvZGU+JywgJ2dpJyk7Ki9cblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoSFRNTFNwYW5zLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cbi8qKlxuICogVW5oYXNoIEhUTUwgc3BhbnNcbiAqL1xuc2hvd2Rvd24uc3ViUGFyc2VyKCd1bmhhc2hIVE1MU3BhbnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3VuaGFzaEhUTUxTcGFucy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGdsb2JhbHMuZ0h0bWxTcGFucy5sZW5ndGg7ICsraSkge1xuICAgIHZhciByZXBUZXh0ID0gZ2xvYmFscy5nSHRtbFNwYW5zW2ldLFxuICAgICAgICAvLyBsaW1pdGVyIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCAoYXNzdW1lIDEwIGFzIGxpbWl0IGZvciByZWN1cnNlKVxuICAgICAgICBsaW1pdCA9IDA7XG5cbiAgICB3aGlsZSAoL8KoQyhcXGQrKUMvLnRlc3QocmVwVGV4dCkpIHtcbiAgICAgIHZhciBudW0gPSBSZWdFeHAuJDE7XG4gICAgICByZXBUZXh0ID0gcmVwVGV4dC5yZXBsYWNlKCfCqEMnICsgbnVtICsgJ0MnLCBnbG9iYWxzLmdIdG1sU3BhbnNbbnVtXSk7XG4gICAgICBpZiAobGltaXQgPT09IDEwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgKytsaW1pdDtcbiAgICB9XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgnwqhDJyArIGkgKyAnQycsIHJlcFRleHQpO1xuICB9XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgndW5oYXNoSFRNTFNwYW5zLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBIYXNoIGFuZCBlc2NhcGUgPHByZT48Y29kZT4gZWxlbWVudHMgdGhhdCBzaG91bGQgbm90IGJlIHBhcnNlZCBhcyBtYXJrZG93blxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hQcmVDb2RlVGFncycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaGFzaFByZUNvZGVUYWdzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHZhciByZXBGdW5jID0gZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG1hdGNoLCBsZWZ0LCByaWdodCkge1xuICAgIC8vIGVuY29kZSBodG1sIGVudGl0aWVzXG4gICAgdmFyIGNvZGVibG9jayA9IGxlZnQgKyBzaG93ZG93bi5zdWJQYXJzZXIoJ2VuY29kZUNvZGUnKShtYXRjaCwgb3B0aW9ucywgZ2xvYmFscykgKyByaWdodDtcbiAgICByZXR1cm4gJ1xcblxcbsKoRycgKyAoZ2xvYmFscy5naENvZGVCbG9ja3MucHVzaCh7dGV4dDogd2hvbGVNYXRjaCwgY29kZWJsb2NrOiBjb2RlYmxvY2t9KSAtIDEpICsgJ0dcXG5cXG4nO1xuICB9O1xuXG4gIC8vIEhhc2ggPHByZT48Y29kZT5cbiAgdGV4dCA9IHNob3dkb3duLmhlbHBlci5yZXBsYWNlUmVjdXJzaXZlUmVnRXhwKHRleHQsIHJlcEZ1bmMsICdeIHswLDN9PHByZVxcXFxiW14+XSo+XFxcXHMqPGNvZGVcXFxcYltePl0qPicsICdeIHswLDN9PC9jb2RlPlxcXFxzKjwvcHJlPicsICdnaW0nKTtcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoYXNoUHJlQ29kZVRhZ3MuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2hlYWRlcnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaGVhZGVycy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB2YXIgaGVhZGVyTGV2ZWxTdGFydCA9IChpc05hTihwYXJzZUludChvcHRpb25zLmhlYWRlckxldmVsU3RhcnQpKSkgPyAxIDogcGFyc2VJbnQob3B0aW9ucy5oZWFkZXJMZXZlbFN0YXJ0KSxcbiAgICAgIGdoSGVhZGVySWQgPSBvcHRpb25zLmdoQ29tcGF0aWJsZUhlYWRlcklkLFxuXG4gIC8vIFNldCB0ZXh0LXN0eWxlIGhlYWRlcnM6XG4gIC8vXHRIZWFkZXIgMVxuICAvL1x0PT09PT09PT1cbiAgLy9cbiAgLy9cdEhlYWRlciAyXG4gIC8vXHQtLS0tLS0tLVxuICAvL1xuICAgICAgc2V0ZXh0UmVnZXhIMSA9IChvcHRpb25zLnNtb290aExpdmVQcmV2aWV3KSA/IC9eKC4rKVsgXFx0XSpcXG49ezIsfVsgXFx0XSpcXG4rL2dtIDogL14oLispWyBcXHRdKlxcbj0rWyBcXHRdKlxcbisvZ20sXG4gICAgICBzZXRleHRSZWdleEgyID0gKG9wdGlvbnMuc21vb3RoTGl2ZVByZXZpZXcpID8gL14oLispWyBcXHRdKlxcbi17Mix9WyBcXHRdKlxcbisvZ20gOiAvXiguKylbIFxcdF0qXFxuLStbIFxcdF0qXFxuKy9nbTtcblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHNldGV4dFJlZ2V4SDEsIGZ1bmN0aW9uICh3aG9sZU1hdGNoLCBtMSkge1xuXG4gICAgdmFyIHNwYW5HYW11dCA9IHNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JykobTEsIG9wdGlvbnMsIGdsb2JhbHMpLFxuICAgICAgICBoSUQgPSAob3B0aW9ucy5ub0hlYWRlcklkKSA/ICcnIDogJyBpZD1cIicgKyBoZWFkZXJJZChtMSkgKyAnXCInLFxuICAgICAgICBoTGV2ZWwgPSBoZWFkZXJMZXZlbFN0YXJ0LFxuICAgICAgICBoYXNoQmxvY2sgPSAnPGgnICsgaExldmVsICsgaElEICsgJz4nICsgc3BhbkdhbXV0ICsgJzwvaCcgKyBoTGV2ZWwgKyAnPic7XG4gICAgcmV0dXJuIHNob3dkb3duLnN1YlBhcnNlcignaGFzaEJsb2NrJykoaGFzaEJsb2NrLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgfSk7XG5cbiAgdGV4dCA9IHRleHQucmVwbGFjZShzZXRleHRSZWdleEgyLCBmdW5jdGlvbiAobWF0Y2hGb3VuZCwgbTEpIHtcbiAgICB2YXIgc3BhbkdhbXV0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdzcGFuR2FtdXQnKShtMSwgb3B0aW9ucywgZ2xvYmFscyksXG4gICAgICAgIGhJRCA9IChvcHRpb25zLm5vSGVhZGVySWQpID8gJycgOiAnIGlkPVwiJyArIGhlYWRlcklkKG0xKSArICdcIicsXG4gICAgICAgIGhMZXZlbCA9IGhlYWRlckxldmVsU3RhcnQgKyAxLFxuICAgICAgICBoYXNoQmxvY2sgPSAnPGgnICsgaExldmVsICsgaElEICsgJz4nICsgc3BhbkdhbXV0ICsgJzwvaCcgKyBoTGV2ZWwgKyAnPic7XG4gICAgcmV0dXJuIHNob3dkb3duLnN1YlBhcnNlcignaGFzaEJsb2NrJykoaGFzaEJsb2NrLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgfSk7XG5cbiAgLy8gYXR4LXN0eWxlIGhlYWRlcnM6XG4gIC8vICAjIEhlYWRlciAxXG4gIC8vICAjIyBIZWFkZXIgMlxuICAvLyAgIyMgSGVhZGVyIDIgd2l0aCBjbG9zaW5nIGhhc2hlcyAjI1xuICAvLyAgLi4uXG4gIC8vICAjIyMjIyMgSGVhZGVyIDZcbiAgLy9cbiAgdmFyIGF0eFN0eWxlID0gKG9wdGlvbnMucmVxdWlyZVNwYWNlQmVmb3JlSGVhZGluZ1RleHQpID8gL14oI3sxLDZ9KVsgXFx0XSsoLis/KVsgXFx0XSojKlxcbisvZ20gOiAvXigjezEsNn0pWyBcXHRdKiguKz8pWyBcXHRdKiMqXFxuKy9nbTtcblxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGF0eFN0eWxlLCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEsIG0yKSB7XG4gICAgdmFyIGhUZXh0ID0gbTI7XG4gICAgaWYgKG9wdGlvbnMuY3VzdG9taXplZEhlYWRlcklkKSB7XG4gICAgICBoVGV4dCA9IG0yLnJlcGxhY2UoL1xccz9cXHsoW157XSs/KX1cXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICB2YXIgc3BhbiA9IHNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JykoaFRleHQsIG9wdGlvbnMsIGdsb2JhbHMpLFxuICAgICAgICBoSUQgPSAob3B0aW9ucy5ub0hlYWRlcklkKSA/ICcnIDogJyBpZD1cIicgKyBoZWFkZXJJZChtMikgKyAnXCInLFxuICAgICAgICBoTGV2ZWwgPSBoZWFkZXJMZXZlbFN0YXJ0IC0gMSArIG0xLmxlbmd0aCxcbiAgICAgICAgaGVhZGVyID0gJzxoJyArIGhMZXZlbCArIGhJRCArICc+JyArIHNwYW4gKyAnPC9oJyArIGhMZXZlbCArICc+JztcblxuICAgIHJldHVybiBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycpKGhlYWRlciwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhlYWRlcklkIChtKSB7XG4gICAgdmFyIHRpdGxlO1xuXG4gICAgLy8gSXQgaXMgc2VwYXJhdGUgZnJvbSBvdGhlciBvcHRpb25zIHRvIGFsbG93IGNvbWJpbmluZyBwcmVmaXggYW5kIGN1c3RvbWl6ZWRcbiAgICBpZiAob3B0aW9ucy5jdXN0b21pemVkSGVhZGVySWQpIHtcbiAgICAgIHZhciBtYXRjaCA9IG0ubWF0Y2goL1xceyhbXntdKz8pfVxccyokLyk7XG4gICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgbSA9IG1hdGNoWzFdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByZWZpeCBpZCB0byBwcmV2ZW50IGNhdXNpbmcgaW5hZHZlcnRlbnQgcHJlLWV4aXN0aW5nIHN0eWxlIG1hdGNoZXMuXG4gICAgaWYgKHNob3dkb3duLmhlbHBlci5pc1N0cmluZyhvcHRpb25zLnByZWZpeEhlYWRlcklkKSkge1xuICAgICAgdGl0bGUgPSBvcHRpb25zLnByZWZpeEhlYWRlcklkICsgbTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucHJlZml4SGVhZGVySWQgPT09IHRydWUpIHtcbiAgICAgIHRpdGxlID0gJ3NlY3Rpb24gJyArIG07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gbTtcbiAgICB9XG5cbiAgICBpZiAoZ2hIZWFkZXJJZCkge1xuICAgICAgdGl0bGUgPSB0aXRsZVxuICAgICAgICAucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgICAgIC8vIHJlcGxhY2UgcHJldmlvdXNseSBlc2NhcGVkIGNoYXJzICgmLCDCqCBhbmQgJClcbiAgICAgICAgLnJlcGxhY2UoLyZhbXA7L2csICcnKVxuICAgICAgICAucmVwbGFjZSgvwqhUL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvwqhEL2csICcnKVxuICAgICAgICAvLyByZXBsYWNlIHJlc3Qgb2YgdGhlIGNoYXJzICgmfiQgYXJlIHJlcGVhdGVkIGFzIHRoZXkgbWlnaHQgaGF2ZSBiZWVuIGVzY2FwZWQpXG4gICAgICAgIC8vIGJvcnJvd2VkIGZyb20gZ2l0aHViJ3MgcmVkY2FycGV0IChzb21lIHRoZXkgc2hvdWxkIHByb2R1Y2Ugc2ltaWxhciByZXN1bHRzKVxuICAgICAgICAucmVwbGFjZSgvWyYrJCxcXC86Oz0/QFwiI3t9fF7CqH5cXFtcXF1gXFxcXCopKCUuISc8Pl0vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZSA9IHRpdGxlXG4gICAgICAgIC5yZXBsYWNlKC9bXlxcd10vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWxzLmhhc2hMaW5rQ291bnRzW3RpdGxlXSkge1xuICAgICAgdGl0bGUgPSB0aXRsZSArICctJyArIChnbG9iYWxzLmhhc2hMaW5rQ291bnRzW3RpdGxlXSsrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFscy5oYXNoTGlua0NvdW50c1t0aXRsZV0gPSAxO1xuICAgIH1cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdoZWFkZXJzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBUdXJuIE1hcmtkb3duIGxpbmsgc2hvcnRjdXRzIGludG8gWEhUTUwgPGE+IHRhZ3MuXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignaG9yaXpvbnRhbFJ1bGUnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2hvcml6b250YWxSdWxlLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHZhciBrZXkgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hCbG9jaycpKCc8aHIgLz4nLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXiB7MCwyfSggPy0pezMsfVsgXFx0XSokL2dtLCBrZXkpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eIHswLDJ9KCA/XFwqKXszLH1bIFxcdF0qJC9nbSwga2V5KTtcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXiB7MCwyfSggP18pezMsfVsgXFx0XSokL2dtLCBrZXkpO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2hvcml6b250YWxSdWxlLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBUdXJuIE1hcmtkb3duIGltYWdlIHNob3J0Y3V0cyBpbnRvIDxpbWc+IHRhZ3MuXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignaW1hZ2VzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ2ltYWdlcy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICB2YXIgaW5saW5lUmVnRXhwICAgICAgPSAvIVxcWyhbXlxcXV0qPyldWyBcXHRdKigpXFwoWyBcXHRdPzw/KFtcXFNdKz8oPzpcXChbXFxTXSo/XFwpW1xcU10qPyk/KT4/KD86ID0oWypcXGRdK1tBLVphLXolXXswLDR9KXgoWypcXGRdK1tBLVphLXolXXswLDR9KSk/WyBcXHRdKig/OihbXCInXSkoW15cIl0qPylcXDYpP1sgXFx0XT9cXCkvZyxcbiAgICAgIGNyYXp5UmVnRXhwICAgICAgID0gLyFcXFsoW15cXF1dKj8pXVsgXFx0XSooKVxcKFsgXFx0XT88KFtePl0qKT4oPzogPShbKlxcZF0rW0EtWmEteiVdezAsNH0peChbKlxcZF0rW0EtWmEteiVdezAsNH0pKT9bIFxcdF0qKD86KD86KFtcIiddKShbXlwiXSo/KVxcNikpP1sgXFx0XT9cXCkvZyxcbiAgICAgIHJlZmVyZW5jZVJlZ0V4cCAgID0gLyFcXFsoW15cXF1dKj8pXSA/KD86XFxuICopP1xcWyguKj8pXSgpKCkoKSgpKCkvZyxcbiAgICAgIHJlZlNob3J0Y3V0UmVnRXhwID0gLyFcXFsoW15cXFtcXF1dKyldKCkoKSgpKCkoKS9nO1xuXG4gIGZ1bmN0aW9uIHdyaXRlSW1hZ2VUYWcgKHdob2xlTWF0Y2gsIGFsdFRleHQsIGxpbmtJZCwgdXJsLCB3aWR0aCwgaGVpZ2h0LCBtNSwgdGl0bGUpIHtcblxuICAgIHZhciBnVXJscyAgID0gZ2xvYmFscy5nVXJscyxcbiAgICAgICAgZ1RpdGxlcyA9IGdsb2JhbHMuZ1RpdGxlcyxcbiAgICAgICAgZ0RpbXMgICA9IGdsb2JhbHMuZ0RpbWVuc2lvbnM7XG5cbiAgICBsaW5rSWQgPSBsaW5rSWQudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID0gJyc7XG4gICAgfVxuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgZXhwbGljaXQgZW1wdHkgdXJsXG4gICAgaWYgKHdob2xlTWF0Y2guc2VhcmNoKC9cXCg8P1xccyo+PyA/KFsnXCJdLipbJ1wiXSk/XFwpJC9tKSA+IC0xKSB7XG4gICAgICB1cmwgPSAnJztcblxuICAgIH0gZWxzZSBpZiAodXJsID09PSAnJyB8fCB1cmwgPT09IG51bGwpIHtcbiAgICAgIGlmIChsaW5rSWQgPT09ICcnIHx8IGxpbmtJZCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBsb3dlci1jYXNlIGFuZCB0dXJuIGVtYmVkZGVkIG5ld2xpbmVzIGludG8gc3BhY2VzXG4gICAgICAgIGxpbmtJZCA9IGFsdFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gP1xcbi9nLCAnICcpO1xuICAgICAgfVxuICAgICAgdXJsID0gJyMnICsgbGlua0lkO1xuXG4gICAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChnVXJsc1tsaW5rSWRdKSkge1xuICAgICAgICB1cmwgPSBnVXJsc1tsaW5rSWRdO1xuICAgICAgICBpZiAoIXNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChnVGl0bGVzW2xpbmtJZF0pKSB7XG4gICAgICAgICAgdGl0bGUgPSBnVGl0bGVzW2xpbmtJZF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaG93ZG93bi5oZWxwZXIuaXNVbmRlZmluZWQoZ0RpbXNbbGlua0lkXSkpIHtcbiAgICAgICAgICB3aWR0aCA9IGdEaW1zW2xpbmtJZF0ud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gZ0RpbXNbbGlua0lkXS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB3aG9sZU1hdGNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFsdFRleHQgPSBhbHRUZXh0XG4gICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLy9hbHRUZXh0ID0gc2hvd2Rvd24uaGVscGVyLmVzY2FwZUNoYXJhY3RlcnMoYWx0VGV4dCwgJypfJywgZmFsc2UpO1xuICAgICAgLnJlcGxhY2Uoc2hvd2Rvd24uaGVscGVyLnJlZ2V4ZXMuYXN0ZXJpc2tBbmREYXNoLCBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVyc0NhbGxiYWNrKTtcbiAgICAvL3VybCA9IHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzKHVybCwgJypfJywgZmFsc2UpO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKHNob3dkb3duLmhlbHBlci5yZWdleGVzLmFzdGVyaXNrQW5kRGFzaCwgc2hvd2Rvd24uaGVscGVyLmVzY2FwZUNoYXJhY3RlcnNDYWxsYmFjayk7XG4gICAgdmFyIHJlc3VsdCA9ICc8aW1nIHNyYz1cIicgKyB1cmwgKyAnXCIgYWx0PVwiJyArIGFsdFRleHQgKyAnXCInO1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHRpdGxlXG4gICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAgIC8vdGl0bGUgPSBzaG93ZG93bi5oZWxwZXIuZXNjYXBlQ2hhcmFjdGVycyh0aXRsZSwgJypfJywgZmFsc2UpO1xuICAgICAgICAucmVwbGFjZShzaG93ZG93bi5oZWxwZXIucmVnZXhlcy5hc3Rlcmlza0FuZERhc2gsIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuICAgICAgcmVzdWx0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICAgIH1cblxuICAgIGlmICh3aWR0aCAmJiBoZWlnaHQpIHtcbiAgICAgIHdpZHRoICA9ICh3aWR0aCA9PT0gJyonKSA/ICdhdXRvJyA6IHdpZHRoO1xuICAgICAgaGVpZ2h0ID0gKGhlaWdodCA9PT0gJyonKSA/ICdhdXRvJyA6IGhlaWdodDtcblxuICAgICAgcmVzdWx0ICs9ICcgd2lkdGg9XCInICsgd2lkdGggKyAnXCInO1xuICAgICAgcmVzdWx0ICs9ICcgaGVpZ2h0PVwiJyArIGhlaWdodCArICdcIic7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9ICcgLz4nO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIEZpcnN0LCBoYW5kbGUgcmVmZXJlbmNlLXN0eWxlIGxhYmVsZWQgaW1hZ2VzOiAhW2FsdCB0ZXh0XVtpZF1cbiAgdGV4dCA9IHRleHQucmVwbGFjZShyZWZlcmVuY2VSZWdFeHAsIHdyaXRlSW1hZ2VUYWcpO1xuXG4gIC8vIE5leHQsIGhhbmRsZSBpbmxpbmUgaW1hZ2VzOiAgIVthbHQgdGV4dF0odXJsID08d2lkdGg+eDxoZWlnaHQ+IFwib3B0aW9uYWwgdGl0bGVcIilcbiAgLy8gY2FzZXMgd2l0aCBjcmF6eSB1cmxzIGxpa2UgLi9pbWFnZS9jYXQxKS5wbmdcbiAgdGV4dCA9IHRleHQucmVwbGFjZShjcmF6eVJlZ0V4cCwgd3JpdGVJbWFnZVRhZyk7XG5cbiAgLy8gbm9ybWFsIGNhc2VzXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoaW5saW5lUmVnRXhwLCB3cml0ZUltYWdlVGFnKTtcblxuICAvLyBoYW5kbGUgcmVmZXJlbmNlLXN0eWxlIHNob3J0Y3V0czogfFtpbWcgdGV4dF1cbiAgdGV4dCA9IHRleHQucmVwbGFjZShyZWZTaG9ydGN1dFJlZ0V4cCwgd3JpdGVJbWFnZVRhZyk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaW1hZ2VzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuc2hvd2Rvd24uc3ViUGFyc2VyKCdpdGFsaWNzQW5kQm9sZCcsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdpdGFsaWNzQW5kQm9sZC5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBpdCdzIGZhc3RlciB0byBoYXZlIDMgc2VwYXJhdGUgcmVnZXhlcyBmb3IgZWFjaCBjYXNlIHRoYW4gaGF2ZSBqdXN0IG9uZVxuICAvLyBiZWNhdXNlIG9mIGJhY2t0cmFjaW5nLCBpbiBzb21lIGNhc2VzLCBpdCBjb3VsZCBsZWFkIHRvIGFuIGV4cG9uZW50aWFsIGVmZmVjdFxuICAvLyBjYWxsZWQgXCJjYXRhc3Ryb3BoaWMgYmFja3RyYWNlXCIuIE9taW5vdXMhXG5cbiAgZnVuY3Rpb24gcGFyc2VJbnNpZGUgKHR4dCwgbGVmdCwgcmlnaHQpIHtcbiAgICBpZiAob3B0aW9ucy5zaW1wbGlmaWVkQXV0b0xpbmspIHtcbiAgICAgIHR4dCA9IHNob3dkb3duLnN1YlBhcnNlcignc2ltcGxpZmllZEF1dG9MaW5rcycpKHR4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0ICsgdHh0ICsgcmlnaHQ7XG4gIH1cblxuICAvLyBQYXJzZSB1bmRlcnNjb3Jlc1xuICBpZiAob3B0aW9ucy5saXRlcmFsTWlkV29yZFVuZGVyc2NvcmVzKSB7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxiX19fKFxcU1tcXHNcXFNdKilfX19cXGIvZywgZnVuY3Rpb24gKHdtLCB0eHQpIHtcbiAgICAgIHJldHVybiBwYXJzZUluc2lkZSAodHh0LCAnPHN0cm9uZz48ZW0+JywgJzwvZW0+PC9zdHJvbmc+Jyk7XG4gICAgfSk7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxiX18oXFxTW1xcc1xcU10qKV9fXFxiL2csIGZ1bmN0aW9uICh3bSwgdHh0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnNpZGUgKHR4dCwgJzxzdHJvbmc+JywgJzwvc3Ryb25nPicpO1xuICAgIH0pO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcYl8oXFxTW1xcc1xcU10qPylfXFxiL2csIGZ1bmN0aW9uICh3bSwgdHh0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnNpZGUgKHR4dCwgJzxlbT4nLCAnPC9lbT4nKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9fX18oXFxTW1xcc1xcU10qPylfX18vZywgZnVuY3Rpb24gKHdtLCBtKSB7XG4gICAgICByZXR1cm4gKC9cXFMkLy50ZXN0KG0pKSA/IHBhcnNlSW5zaWRlIChtLCAnPHN0cm9uZz48ZW0+JywgJzwvZW0+PC9zdHJvbmc+JykgOiB3bTtcbiAgICB9KTtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9fXyhcXFNbXFxzXFxTXSo/KV9fL2csIGZ1bmN0aW9uICh3bSwgbSkge1xuICAgICAgcmV0dXJuICgvXFxTJC8udGVzdChtKSkgPyBwYXJzZUluc2lkZSAobSwgJzxzdHJvbmc+JywgJzwvc3Ryb25nPicpIDogd207XG4gICAgfSk7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXyhbXlxcc19dW1xcc1xcU10qPylfL2csIGZ1bmN0aW9uICh3bSwgbSkge1xuICAgICAgLy8gIS9eX1teX10vLnRlc3QobSkgLSB0ZXN0IGlmIGl0IGRvZXNuJ3Qgc3RhcnQgd2l0aCBfXyAoc2luY2UgaXQgc2VlbXMgcmVkdW5kYW50LCB3ZSByZW1vdmVkIGl0KVxuICAgICAgcmV0dXJuICgvXFxTJC8udGVzdChtKSkgPyBwYXJzZUluc2lkZSAobSwgJzxlbT4nLCAnPC9lbT4nKSA6IHdtO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTm93IHBhcnNlIGFzdGVyaXNrc1xuICBpZiAob3B0aW9ucy5saXRlcmFsTWlkV29yZEFzdGVyaXNrcykge1xuICAgIHRleHQgPSB0ZXh0LnRyaW0oKS5yZXBsYWNlKC8oPzpefCArKVxcKnszfShcXFNbXFxzXFxTXSo/KVxcKnszfSg/OiArfCQpL2csIGZ1bmN0aW9uICh3bSwgdHh0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnNpZGUgKHR4dCwgJyA8c3Ryb25nPjxlbT4nLCAnPC9lbT48L3N0cm9uZz4gJyk7XG4gICAgfSk7XG4gICAgdGV4dCA9IHRleHQudHJpbSgpLnJlcGxhY2UoLyg/Ol58ICspXFwqezJ9KFxcU1tcXHNcXFNdKj8pXFwqezJ9KD86ICt8JCkvZywgZnVuY3Rpb24gKHdtLCB0eHQpIHtcbiAgICAgIHJldHVybiBwYXJzZUluc2lkZSAodHh0LCAnIDxzdHJvbmc+JywgJzwvc3Ryb25nPiAnKTtcbiAgICB9KTtcbiAgICB0ZXh0ID0gdGV4dC50cmltKCkucmVwbGFjZSgvKD86XnwgKylcXCp7MX0oXFxTW1xcc1xcU10qPylcXCp7MX0oPzogK3wkKS9nLCBmdW5jdGlvbiAod20sIHR4dCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW5zaWRlICh0eHQsICcgPGVtPicsICc8L2VtPicgKyAod20uc2xpY2UoLTEpID09PSAnICcgPyAnICcgOiAnJykpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcKlxcKlxcKihcXFNbXFxzXFxTXSo/KVxcKlxcKlxcKi9nLCBmdW5jdGlvbiAod20sIG0pIHtcbiAgICAgIHJldHVybiAoL1xcUyQvLnRlc3QobSkpID8gcGFyc2VJbnNpZGUgKG0sICc8c3Ryb25nPjxlbT4nLCAnPC9lbT48L3N0cm9uZz4nKSA6IHdtO1xuICAgIH0pO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcKlxcKihcXFNbXFxzXFxTXSo/KVxcKlxcKi9nLCBmdW5jdGlvbiAod20sIG0pIHtcbiAgICAgIHJldHVybiAoL1xcUyQvLnRlc3QobSkpID8gcGFyc2VJbnNpZGUgKG0sICc8c3Ryb25nPicsICc8L3N0cm9uZz4nKSA6IHdtO1xuICAgIH0pO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcKihbXlxccypdW1xcc1xcU10qPylcXCovZywgZnVuY3Rpb24gKHdtLCBtKSB7XG4gICAgICAvLyAhL15cXCpbXipdLy50ZXN0KG0pIC0gdGVzdCBpZiBpdCBkb2Vzbid0IHN0YXJ0IHdpdGggKiogKHNpbmNlIGl0IHNlZW1zIHJlZHVuZGFudCwgd2UgcmVtb3ZlZCBpdClcbiAgICAgIHJldHVybiAoL1xcUyQvLnRlc3QobSkpID8gcGFyc2VJbnNpZGUgKG0sICc8ZW0+JywgJzwvZW0+JykgOiB3bTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnaXRhbGljc0FuZEJvbGQuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIEZvcm0gSFRNTCBvcmRlcmVkIChudW1iZXJlZCkgYW5kIHVub3JkZXJlZCAoYnVsbGV0ZWQpIGxpc3RzLlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ2xpc3RzJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdsaXN0cy5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvKipcbiAgICogUHJvY2VzcyB0aGUgY29udGVudHMgb2YgYSBzaW5nbGUgb3JkZXJlZCBvciB1bm9yZGVyZWQgbGlzdCwgc3BsaXR0aW5nIGl0XG4gICAqIGludG8gaW5kaXZpZHVhbCBsaXN0IGl0ZW1zLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlzdFN0clxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRyaW1UcmFpbGluZ1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gcHJvY2Vzc0xpc3RJdGVtcyAobGlzdFN0ciwgdHJpbVRyYWlsaW5nKSB7XG4gICAgLy8gVGhlICRnX2xpc3RfbGV2ZWwgZ2xvYmFsIGtlZXBzIHRyYWNrIG9mIHdoZW4gd2UncmUgaW5zaWRlIGEgbGlzdC5cbiAgICAvLyBFYWNoIHRpbWUgd2UgZW50ZXIgYSBsaXN0LCB3ZSBpbmNyZW1lbnQgaXQ7IHdoZW4gd2UgbGVhdmUgYSBsaXN0LFxuICAgIC8vIHdlIGRlY3JlbWVudC4gSWYgaXQncyB6ZXJvLCB3ZSdyZSBub3QgaW4gYSBsaXN0IGFueW1vcmUuXG4gICAgLy9cbiAgICAvLyBXZSBkbyB0aGlzIGJlY2F1c2Ugd2hlbiB3ZSdyZSBub3QgaW5zaWRlIGEgbGlzdCwgd2Ugd2FudCB0byB0cmVhdFxuICAgIC8vIHNvbWV0aGluZyBsaWtlIHRoaXM6XG4gICAgLy9cbiAgICAvLyAgICBJIHJlY29tbWVuZCB1cGdyYWRpbmcgdG8gdmVyc2lvblxuICAgIC8vICAgIDguIE9vcHMsIG5vdyB0aGlzIGxpbmUgaXMgdHJlYXRlZFxuICAgIC8vICAgIGFzIGEgc3ViLWxpc3QuXG4gICAgLy9cbiAgICAvLyBBcyBhIHNpbmdsZSBwYXJhZ3JhcGgsIGRlc3BpdGUgdGhlIGZhY3QgdGhhdCB0aGUgc2Vjb25kIGxpbmUgc3RhcnRzXG4gICAgLy8gd2l0aCBhIGRpZ2l0LXBlcmlvZC1zcGFjZSBzZXF1ZW5jZS5cbiAgICAvL1xuICAgIC8vIFdoZXJlYXMgd2hlbiB3ZSdyZSBpbnNpZGUgYSBsaXN0IChvciBzdWItbGlzdCksIHRoYXQgbGluZSB3aWxsIGJlXG4gICAgLy8gdHJlYXRlZCBhcyB0aGUgc3RhcnQgb2YgYSBzdWItbGlzdC4gV2hhdCBhIGtsdWRnZSwgaHVoPyBUaGlzIGlzXG4gICAgLy8gYW4gYXNwZWN0IG9mIE1hcmtkb3duJ3Mgc3ludGF4IHRoYXQncyBoYXJkIHRvIHBhcnNlIHBlcmZlY3RseVxuICAgIC8vIHdpdGhvdXQgcmVzb3J0aW5nIHRvIG1pbmQtcmVhZGluZy4gUGVyaGFwcyB0aGUgc29sdXRpb24gaXMgdG9cbiAgICAvLyBjaGFuZ2UgdGhlIHN5bnRheCBydWxlcyBzdWNoIHRoYXQgc3ViLWxpc3RzIG11c3Qgc3RhcnQgd2l0aCBhXG4gICAgLy8gc3RhcnRpbmcgY2FyZGluYWwgbnVtYmVyOyBlLmcuIFwiMS5cIiBvciBcImEuXCIuXG4gICAgZ2xvYmFscy5nTGlzdExldmVsKys7XG5cbiAgICAvLyB0cmltIHRyYWlsaW5nIGJsYW5rIGxpbmVzOlxuICAgIGxpc3RTdHIgPSBsaXN0U3RyLnJlcGxhY2UoL1xcbnsyLH0kLywgJ1xcbicpO1xuXG4gICAgLy8gYXR0YWNrbGFiOiBhZGQgc2VudGluZWwgdG8gZW11bGF0ZSBcXHpcbiAgICBsaXN0U3RyICs9ICfCqDAnO1xuXG4gICAgdmFyIHJneCA9IC8oXFxuKT8oXiB7MCwzfSkoWyorLV18XFxkK1suXSlbIFxcdF0rKChcXFsoeHxYfCApP10pP1sgXFx0XSpbXlxccl0rPyhcXG57MSwyfSkpKD89XFxuKijCqDB8IHswLDN9KFsqKy1dfFxcZCtbLl0pWyBcXHRdKykpL2dtLFxuICAgICAgICBpc1BhcmFncmFwaGVkID0gKC9cXG5bIFxcdF0qXFxuKD8hwqgwKS8udGVzdChsaXN0U3RyKSk7XG5cbiAgICAvLyBTaW5jZSB2ZXJzaW9uIDEuNSwgbmVzdGluZyBzdWJsaXN0cyByZXF1aXJlcyA0IHNwYWNlcyAob3IgMSB0YWIpIGluZGVudGF0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGEgc3ludGF4IGJyZWFraW5nIGNoYW5nZVxuICAgIC8vIGFjdGl2YXRpbmcgdGhpcyBvcHRpb24gcmV2ZXJ0cyB0byBvbGQgYmVoYXZpb3JcbiAgICBpZiAob3B0aW9ucy5kaXNhYmxlRm9yY2VkNFNwYWNlc0luZGVudGVkU3VibGlzdHMpIHtcbiAgICAgIHJneCA9IC8oXFxuKT8oXiB7MCwzfSkoWyorLV18XFxkK1suXSlbIFxcdF0rKChcXFsoeHxYfCApP10pP1sgXFx0XSpbXlxccl0rPyhcXG57MSwyfSkpKD89XFxuKijCqDB8XFwyKFsqKy1dfFxcZCtbLl0pWyBcXHRdKykpL2dtO1xuICAgIH1cblxuICAgIGxpc3RTdHIgPSBsaXN0U3RyLnJlcGxhY2Uocmd4LCBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbTEsIG0yLCBtMywgbTQsIHRhc2tidG4sIGNoZWNrZWQpIHtcbiAgICAgIGNoZWNrZWQgPSAoY2hlY2tlZCAmJiBjaGVja2VkLnRyaW0oKSAhPT0gJycpO1xuXG4gICAgICB2YXIgaXRlbSA9IHNob3dkb3duLnN1YlBhcnNlcignb3V0ZGVudCcpKG00LCBvcHRpb25zLCBnbG9iYWxzKSxcbiAgICAgICAgICBidWxsZXRTdHlsZSA9ICcnO1xuXG4gICAgICAvLyBTdXBwb3J0IGZvciBnaXRodWIgdGFza2xpc3RzXG4gICAgICBpZiAodGFza2J0biAmJiBvcHRpb25zLnRhc2tsaXN0cykge1xuICAgICAgICBidWxsZXRTdHlsZSA9ICcgY2xhc3M9XCJ0YXNrLWxpc3QtaXRlbVwiIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiJztcbiAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvXlsgXFx0XSpcXFsoeHxYfCApP10vbSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBvdHAgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRpc2FibGVkIHN0eWxlPVwibWFyZ2luOiAwcHggMC4zNWVtIDAuMjVlbSAtMS42ZW07IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCInO1xuICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICBvdHAgKz0gJyBjaGVja2VkJztcbiAgICAgICAgICB9XG4gICAgICAgICAgb3RwICs9ICc+JztcbiAgICAgICAgICByZXR1cm4gb3RwO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSVNTVUUgIzMxMlxuICAgICAgLy8gVGhpcyBpbnB1dDogLSAtIC0gYVxuICAgICAgLy8gY2F1c2VzIHRyb3VibGUgdG8gdGhlIHBhcnNlciwgc2luY2UgaXQgaW50ZXJwcmV0cyBpdCBhczpcbiAgICAgIC8vIDx1bD48bGk+PGxpPjxsaT5hPC9saT48L2xpPjwvbGk+PC91bD5cbiAgICAgIC8vIGluc3RlYWQgb2Y6XG4gICAgICAvLyA8dWw+PGxpPi0gLSBhPC9saT48L3VsPlxuICAgICAgLy8gU28sIHRvIHByZXZlbnQgaXQsIHdlIHdpbGwgcHV0IGEgbWFya2VyICjCqEEpaW4gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGluZVxuICAgICAgLy8gS2luZCBvZiBoYWNraXNoL21vbmtleSBwYXRjaGluZywgYnV0IHNlZW1zIG1vcmUgZWZmZWN0aXZlIHRoYW4gb3ZlcmNvbXBsaWNhdGluZyB0aGUgbGlzdCBwYXJzZXJcbiAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL14oWy0qK118XFxkXFwuKVsgXFx0XStbXFxTXFxuIF0qL2csIGZ1bmN0aW9uICh3bTIpIHtcbiAgICAgICAgcmV0dXJuICfCqEEnICsgd20yO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIG0xIC0gTGVhZGluZyBsaW5lIG9yXG4gICAgICAvLyBIYXMgYSBkb3VibGUgcmV0dXJuIChtdWx0aSBwYXJhZ3JhcGgpIG9yXG4gICAgICAvLyBIYXMgc3VibGlzdFxuICAgICAgaWYgKG0xIHx8IChpdGVtLnNlYXJjaCgvXFxuezIsfS8pID4gLTEpKSB7XG4gICAgICAgIGl0ZW0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2dpdGh1YkNvZGVCbG9ja3MnKShpdGVtLCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICAgICAgaXRlbSA9IHNob3dkb3duLnN1YlBhcnNlcignYmxvY2tHYW11dCcpKGl0ZW0sIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVjdXJzaW9uIGZvciBzdWItbGlzdHM6XG4gICAgICAgIGl0ZW0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2xpc3RzJykoaXRlbSwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL1xcbiQvLCAnJyk7IC8vIGNob21wKGl0ZW0pXG4gICAgICAgIGl0ZW0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hIVE1MQmxvY2tzJykoaXRlbSwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgICAgIC8vIENvbGFwc2UgZG91YmxlIGxpbmVicmVha3NcbiAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvXFxuXFxuKy9nLCAnXFxuXFxuJyk7XG4gICAgICAgIC8vIHJlcGxhY2UgZG91YmxlIGxpbmVicmVha3Mgd2l0aCBhIHBsYWNlaG9sZGVyXG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL1xcblxcbi9nLCAnwqhCJyk7XG4gICAgICAgIGlmIChpc1BhcmFncmFwaGVkKSB7XG4gICAgICAgICAgaXRlbSA9IHNob3dkb3duLnN1YlBhcnNlcigncGFyYWdyYXBocycpKGl0ZW0sIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3NwYW5HYW11dCcpKGl0ZW0sIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL8KoQi9nLCAnXFxuXFxuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgbWFya2VyICjCqEEpXG4gICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKCfCqEEnLCAnJyk7XG4gICAgICAvLyB3ZSBjYW4gZmluYWxseSB3cmFwIHRoZSBsaW5lIGluIGxpc3QgaXRlbSB0YWdzXG4gICAgICBpdGVtID0gICc8bGknICsgYnVsbGV0U3R5bGUgKyAnPicgKyBpdGVtICsgJzwvbGk+XFxuJztcblxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICAvLyBhdHRhY2tsYWI6IHN0cmlwIHNlbnRpbmVsXG4gICAgbGlzdFN0ciA9IGxpc3RTdHIucmVwbGFjZSgvwqgwL2csICcnKTtcblxuICAgIGdsb2JhbHMuZ0xpc3RMZXZlbC0tO1xuXG4gICAgaWYgKHRyaW1UcmFpbGluZykge1xuICAgICAgbGlzdFN0ciA9IGxpc3RTdHIucmVwbGFjZSgvXFxzKyQvLCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RTdHI7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYW5kIHBhcnNlIGNvbnNlY3V0aXZlIGxpc3RzIChiZXR0ZXIgZml4IGZvciBpc3N1ZSAjMTQyKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlzdFR5cGVcbiAgICogQHBhcmFtIHtib29sZWFufSB0cmltVHJhaWxpbmdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlQ29uc2VjdXRpdmVMaXN0cyAobGlzdCwgbGlzdFR5cGUsIHRyaW1UcmFpbGluZykge1xuICAgIC8vIGNoZWNrIGlmIHdlIGNhdWdodCAyIG9yIG1vcmUgY29uc2VjdXRpdmUgbGlzdHMgYnkgbWlzdGFrZVxuICAgIC8vIHdlIHVzZSB0aGUgY291bnRlclJneCwgbWVhbmluZyBpZiBsaXN0VHlwZSBpcyBVTCB3ZSBsb29rIGZvciBPTCBhbmQgdmljZSB2ZXJzYVxuICAgIHZhciBvbFJneCA9IChvcHRpb25zLmRpc2FibGVGb3JjZWQ0U3BhY2VzSW5kZW50ZWRTdWJsaXN0cykgPyAvXiA/XFxkK1xcLlsgXFx0XS9nbSA6IC9eIHswLDN9XFxkK1xcLlsgXFx0XS9nbSxcbiAgICAgICAgdWxSZ3ggPSAob3B0aW9ucy5kaXNhYmxlRm9yY2VkNFNwYWNlc0luZGVudGVkU3VibGlzdHMpID8gL14gP1sqKy1dWyBcXHRdL2dtIDogL14gezAsM31bKistXVsgXFx0XS9nbSxcbiAgICAgICAgY291bnRlclJ4ZyA9IChsaXN0VHlwZSA9PT0gJ3VsJykgPyBvbFJneCA6IHVsUmd4LFxuICAgICAgICByZXN1bHQgPSAnJztcblxuICAgIGlmIChsaXN0LnNlYXJjaChjb3VudGVyUnhnKSAhPT0gLTEpIHtcbiAgICAgIChmdW5jdGlvbiBwYXJzZUNMICh0eHQpIHtcbiAgICAgICAgdmFyIHBvcyA9IHR4dC5zZWFyY2goY291bnRlclJ4Zyk7XG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XG4gICAgICAgICAgLy8gc2xpY2VcbiAgICAgICAgICByZXN1bHQgKz0gJ1xcbjwnICsgbGlzdFR5cGUgKyAnPlxcbicgKyBwcm9jZXNzTGlzdEl0ZW1zKHR4dC5zbGljZSgwLCBwb3MpLCAhIXRyaW1UcmFpbGluZykgKyAnPC8nICsgbGlzdFR5cGUgKyAnPlxcbic7XG5cbiAgICAgICAgICAvLyBpbnZlcnQgY291bnRlclR5cGUgYW5kIGxpc3RUeXBlXG4gICAgICAgICAgbGlzdFR5cGUgPSAobGlzdFR5cGUgPT09ICd1bCcpID8gJ29sJyA6ICd1bCc7XG4gICAgICAgICAgY291bnRlclJ4ZyA9IChsaXN0VHlwZSA9PT0gJ3VsJykgPyBvbFJneCA6IHVsUmd4O1xuXG4gICAgICAgICAgLy9yZWN1cnNlXG4gICAgICAgICAgcGFyc2VDTCh0eHQuc2xpY2UocG9zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ICs9ICdcXG48JyArIGxpc3RUeXBlICsgJz5cXG4nICsgcHJvY2Vzc0xpc3RJdGVtcyh0eHQsICEhdHJpbVRyYWlsaW5nKSArICc8LycgKyBsaXN0VHlwZSArICc+XFxuJztcbiAgICAgICAgfVxuICAgICAgfSkobGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9ICdcXG48JyArIGxpc3RUeXBlICsgJz5cXG4nICsgcHJvY2Vzc0xpc3RJdGVtcyhsaXN0LCAhIXRyaW1UcmFpbGluZykgKyAnPC8nICsgbGlzdFR5cGUgKyAnPlxcbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGFkZCBzZW50aW5lbCB0byBoYWNrIGFyb3VuZCBraHRtbC9zYWZhcmkgYnVnOlxuICAvLyBodHRwOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMTIzMVxuICB0ZXh0ICs9ICfCqDAnO1xuXG4gIGlmIChnbG9iYWxzLmdMaXN0TGV2ZWwpIHtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eKCggezAsM30oWyorLV18XFxkK1suXSlbIFxcdF0rKVteXFxyXSs/KMKoMHxcXG57Mix9KD89XFxTKSg/IVsgXFx0XSooPzpbKistXXxcXGQrWy5dKVsgXFx0XSspKSkvZ20sXG4gICAgICBmdW5jdGlvbiAod2hvbGVNYXRjaCwgbGlzdCwgbTIpIHtcbiAgICAgICAgdmFyIGxpc3RUeXBlID0gKG0yLnNlYXJjaCgvWyorLV0vZykgPiAtMSkgPyAndWwnIDogJ29sJztcbiAgICAgICAgcmV0dXJuIHBhcnNlQ29uc2VjdXRpdmVMaXN0cyhsaXN0LCBsaXN0VHlwZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFxuXFxufF5cXG4/KSgoIHswLDN9KFsqKy1dfFxcZCtbLl0pWyBcXHRdKylbXlxccl0rPyjCqDB8XFxuezIsfSg/PVxcUykoPyFbIFxcdF0qKD86WyorLV18XFxkK1suXSlbIFxcdF0rKSkpL2dtLFxuICAgICAgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG0xLCBsaXN0LCBtMykge1xuICAgICAgICB2YXIgbGlzdFR5cGUgPSAobTMuc2VhcmNoKC9bKistXS9nKSA+IC0xKSA/ICd1bCcgOiAnb2wnO1xuICAgICAgICByZXR1cm4gcGFyc2VDb25zZWN1dGl2ZUxpc3RzKGxpc3QsIGxpc3RUeXBlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8vIHN0cmlwIHNlbnRpbmVsXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoMC8sICcnKTtcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnbGlzdHMuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIFJlbW92ZSBvbmUgbGV2ZWwgb2YgbGluZS1sZWFkaW5nIHRhYnMgb3Igc3BhY2VzXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignb3V0ZGVudCcsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgnb3V0ZGVudC5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBhdHRhY2tsYWI6IGhhY2sgYXJvdW5kIEtvbnF1ZXJvciAzLjUuNCBidWc6XG4gIC8vIFwiLS0tLS0tLS0tLWJ1Z1wiLnJlcGxhY2UoL14tL2csXCJcIikgPT0gXCJidWdcIlxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eKFxcdHxbIF17MSw0fSkvZ20sICfCqDAnKTsgLy8gYXR0YWNrbGFiOiBnX3RhYl93aWR0aFxuXG4gIC8vIGF0dGFja2xhYjogY2xlYW4gdXAgaGFja1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC/CqDAvZywgJycpO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ291dGRlbnQuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcigncGFyYWdyYXBocycsIGZ1bmN0aW9uICh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdwYXJhZ3JhcGhzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAvLyBTdHJpcCBsZWFkaW5nIGFuZCB0cmFpbGluZyBsaW5lczpcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXlxcbisvZywgJycpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXG4rJC9nLCAnJyk7XG5cbiAgdmFyIGdyYWZzID0gdGV4dC5zcGxpdCgvXFxuezIsfS9nKSxcbiAgICAgIGdyYWZzT3V0ID0gW10sXG4gICAgICBlbmQgPSBncmFmcy5sZW5ndGg7IC8vIFdyYXAgPHA+IHRhZ3NcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdmFyIHN0ciA9IGdyYWZzW2ldO1xuICAgIC8vIGlmIHRoaXMgaXMgYW4gSFRNTCBtYXJrZXIsIGNvcHkgaXRcbiAgICBpZiAoc3RyLnNlYXJjaCgvwqgoS3xHKShcXGQrKVxcMS9nKSA+PSAwKSB7XG4gICAgICBncmFmc091dC5wdXNoKHN0cik7XG5cbiAgICAvLyB0ZXN0IGZvciBwcmVzZW5jZSBvZiBjaGFyYWN0ZXJzIHRvIHByZXZlbnQgZW1wdHkgbGluZXMgYmVpbmcgcGFyc2VkXG4gICAgLy8gYXMgcGFyYWdyYXBocyAocmVzdWx0aW5nIGluIHVuZGVzaXJlZCBleHRyYSBlbXB0eSBwYXJhZ3JhcGhzKVxuICAgIH0gZWxzZSBpZiAoc3RyLnNlYXJjaCgvXFxTLykgPj0gMCkge1xuICAgICAgc3RyID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdzcGFuR2FtdXQnKShzdHIsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL14oWyBcXHRdKikvZywgJzxwPicpO1xuICAgICAgc3RyICs9ICc8L3A+JztcbiAgICAgIGdyYWZzT3V0LnB1c2goc3RyKTtcbiAgICB9XG4gIH1cblxuICAvKiogVW5oYXNoaWZ5IEhUTUwgYmxvY2tzICovXG4gIGVuZCA9IGdyYWZzT3V0Lmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdmFyIGJsb2NrVGV4dCA9ICcnLFxuICAgICAgICBncmFmc091dEl0ID0gZ3JhZnNPdXRbaV0sXG4gICAgICAgIGNvZGVGbGFnID0gZmFsc2U7XG4gICAgLy8gaWYgdGhpcyBpcyBhIG1hcmtlciBmb3IgYW4gaHRtbCBibG9jay4uLlxuICAgIC8vIHVzZSBSZWdFeHAudGVzdCBpbnN0ZWFkIG9mIHN0cmluZy5zZWFyY2ggYmVjYXVzZSBvZiBRTUwgYnVnXG4gICAgd2hpbGUgKC/CqChLfEcpKFxcZCspXFwxLy50ZXN0KGdyYWZzT3V0SXQpKSB7XG4gICAgICB2YXIgZGVsaW0gPSBSZWdFeHAuJDEsXG4gICAgICAgICAgbnVtICAgPSBSZWdFeHAuJDI7XG5cbiAgICAgIGlmIChkZWxpbSA9PT0gJ0snKSB7XG4gICAgICAgIGJsb2NrVGV4dCA9IGdsb2JhbHMuZ0h0bWxCbG9ja3NbbnVtXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgZ2hCbG9jayBpcyBhIGZhbHNlIHBvc2l0aXZlXG4gICAgICAgIGlmIChjb2RlRmxhZykge1xuICAgICAgICAgIC8vIHVzZSBlbmNvZGVkIHZlcnNpb24gb2YgYWxsIHRleHRcbiAgICAgICAgICBibG9ja1RleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2VuY29kZUNvZGUnKShnbG9iYWxzLmdoQ29kZUJsb2Nrc1tudW1dLnRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJsb2NrVGV4dCA9IGdsb2JhbHMuZ2hDb2RlQmxvY2tzW251bV0uY29kZWJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBibG9ja1RleHQgPSBibG9ja1RleHQucmVwbGFjZSgvXFwkL2csICckJCQkJyk7IC8vIEVzY2FwZSBhbnkgZG9sbGFyIHNpZ25zXG5cbiAgICAgIGdyYWZzT3V0SXQgPSBncmFmc091dEl0LnJlcGxhY2UoLyhcXG5cXG4pP8KoKEt8RylcXGQrXFwyKFxcblxcbik/LywgYmxvY2tUZXh0KTtcbiAgICAgIC8vIENoZWNrIGlmIGdyYWZzT3V0SXQgaXMgYSBwcmUtPmNvZGVcbiAgICAgIGlmICgvXjxwcmVcXGJbXj5dKj5cXHMqPGNvZGVcXGJbXj5dKj4vLnRlc3QoZ3JhZnNPdXRJdCkpIHtcbiAgICAgICAgY29kZUZsYWcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBncmFmc091dFtpXSA9IGdyYWZzT3V0SXQ7XG4gIH1cbiAgdGV4dCA9IGdyYWZzT3V0LmpvaW4oJ1xcbicpO1xuICAvLyBTdHJpcCBsZWFkaW5nIGFuZCB0cmFpbGluZyBsaW5lczpcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXlxcbisvZywgJycpO1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXG4rJC9nLCAnJyk7XG4gIHJldHVybiBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3BhcmFncmFwaHMuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbn0pO1xuXHJcbi8qKlxuICogUnVuIGV4dGVuc2lvblxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ3J1bkV4dGVuc2lvbicsIGZ1bmN0aW9uIChleHQsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChleHQuZmlsdGVyKSB7XG4gICAgdGV4dCA9IGV4dC5maWx0ZXIodGV4dCwgZ2xvYmFscy5jb252ZXJ0ZXIsIG9wdGlvbnMpO1xuXG4gIH0gZWxzZSBpZiAoZXh0LnJlZ2V4KSB7XG4gICAgLy8gVE9ETyByZW1vdmUgdGhpcyB3aGVuIG9sZCBleHRlbnNpb24gbG9hZGluZyBtZWNoYW5pc20gaXMgZGVwcmVjYXRlZFxuICAgIHZhciByZSA9IGV4dC5yZWdleDtcbiAgICBpZiAoIShyZSBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgIHJlID0gbmV3IFJlZ0V4cChyZSwgJ2cnKTtcbiAgICB9XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZShyZSwgZXh0LnJlcGxhY2UpO1xuICB9XG5cbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIFRoZXNlIGFyZSBhbGwgdGhlIHRyYW5zZm9ybWF0aW9ucyB0aGF0IG9jY3VyICp3aXRoaW4qIGJsb2NrLWxldmVsXG4gKiB0YWdzIGxpa2UgcGFyYWdyYXBocywgaGVhZGVycywgYW5kIGxpc3QgaXRlbXMuXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3NwYW5HYW11dC5iZWZvcmUnLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignY29kZVNwYW5zJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2VzY2FwZVNwZWNpYWxDaGFyc1dpdGhpblRhZ0F0dHJpYnV0ZXMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignZW5jb2RlQmFja3NsYXNoRXNjYXBlcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIFByb2Nlc3MgYW5jaG9yIGFuZCBpbWFnZSB0YWdzLiBJbWFnZXMgbXVzdCBjb21lIGZpcnN0LFxuICAvLyBiZWNhdXNlICFbZm9vXVtmXSBsb29rcyBsaWtlIGFuIGFuY2hvci5cbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignaW1hZ2VzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2FuY2hvcnMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBNYWtlIGxpbmtzIG91dCBvZiB0aGluZ3MgbGlrZSBgPGh0dHA6Ly9leGFtcGxlLmNvbS8+YFxuICAvLyBNdXN0IGNvbWUgYWZ0ZXIgYW5jaG9ycywgYmVjYXVzZSB5b3UgY2FuIHVzZSA8IGFuZCA+XG4gIC8vIGRlbGltaXRlcnMgaW4gaW5saW5lIGxpbmtzIGxpa2UgW3RoaXNdKDx1cmw+KS5cbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignYXV0b0xpbmtzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2l0YWxpY3NBbmRCb2xkJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ3N0cmlrZXRocm91Z2gnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgdGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignc2ltcGxpZmllZEF1dG9MaW5rcycpKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIHdlIG5lZWQgdG8gaGFzaCBIVE1MIHRhZ3MgaW5zaWRlIHNwYW5zXG4gIHRleHQgPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2hhc2hIVE1MU3BhbnMnKSh0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAvLyBub3cgd2UgZW5jb2RlIGFtcHMgYW5kIGFuZ2xlc1xuICB0ZXh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdlbmNvZGVBbXBzQW5kQW5nbGVzJykodGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgLy8gRG8gaGFyZCBicmVha3NcbiAgaWYgKG9wdGlvbnMuc2ltcGxlTGluZUJyZWFrcykge1xuICAgIC8vIEdGTSBzdHlsZSBoYXJkIGJyZWFrc1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+XFxuJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVmFuaWxsYSBoYXJkIGJyZWFrc1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyAgK1xcbi9nLCAnPGJyIC8+XFxuJyk7XG4gIH1cblxuICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdzcGFuR2FtdXQuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG5zaG93ZG93bi5zdWJQYXJzZXIoJ3N0cmlrZXRocm91Z2gnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gcGFyc2VJbnNpZGUgKHR4dCkge1xuICAgIGlmIChvcHRpb25zLnNpbXBsaWZpZWRBdXRvTGluaykge1xuICAgICAgdHh0ID0gc2hvd2Rvd24uc3ViUGFyc2VyKCdzaW1wbGlmaWVkQXV0b0xpbmtzJykodHh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgICB9XG4gICAgcmV0dXJuICc8ZGVsPicgKyB0eHQgKyAnPC9kZWw+JztcbiAgfVxuXG4gIGlmIChvcHRpb25zLnN0cmlrZXRocm91Z2gpIHtcbiAgICB0ZXh0ID0gZ2xvYmFscy5jb252ZXJ0ZXIuX2Rpc3BhdGNoKCdzdHJpa2V0aHJvdWdoLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyg/On4pezJ9KFtcXHNcXFNdKz8pKD86fil7Mn0vZywgZnVuY3Rpb24gKHdtLCB0eHQpIHsgcmV0dXJuIHBhcnNlSW5zaWRlKHR4dCk7IH0pO1xuICAgIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3N0cmlrZXRocm91Z2guYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuLyoqXG4gKiBTdHJpcHMgbGluayBkZWZpbml0aW9ucyBmcm9tIHRleHQsIHN0b3JlcyB0aGUgVVJMcyBhbmQgdGl0bGVzIGluXG4gKiBoYXNoIHJlZmVyZW5jZXMuXG4gKiBMaW5rIGRlZnMgYXJlIGluIHRoZSBmb3JtOiBeW2lkXTogdXJsIFwib3B0aW9uYWwgdGl0bGVcIlxuICovXG5zaG93ZG93bi5zdWJQYXJzZXIoJ3N0cmlwTGlua0RlZmluaXRpb25zJywgZnVuY3Rpb24gKHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciByZWdleCA9IC9eIHswLDN9XFxbKC4rKV06WyBcXHRdKlxcbj9bIFxcdF0qPD8oW14+XFxzXSspPj8oPzogPShbKlxcZF0rW0EtWmEteiVdezAsNH0peChbKlxcZF0rW0EtWmEteiVdezAsNH0pKT9bIFxcdF0qXFxuP1sgXFx0XSooPzooXFxuKilbXCJ8JyhdKC4rPylbXCJ8JyldWyBcXHRdKik/KD86XFxuK3woPz3CqDApKS9nbTtcblxuICAvLyBhdHRhY2tsYWI6IHNlbnRpbmVsIHdvcmthcm91bmRzIGZvciBsYWNrIG9mIFxcQSBhbmQgXFxaLCBzYWZhcmlcXGtodG1sIGJ1Z1xuICB0ZXh0ICs9ICfCqDAnO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UocmVnZXgsIGZ1bmN0aW9uICh3aG9sZU1hdGNoLCBsaW5rSWQsIHVybCwgd2lkdGgsIGhlaWdodCwgYmxhbmtMaW5lcywgdGl0bGUpIHtcbiAgICBsaW5rSWQgPSBsaW5rSWQudG9Mb3dlckNhc2UoKTtcbiAgICBnbG9iYWxzLmdVcmxzW2xpbmtJZF0gPSBzaG93ZG93bi5zdWJQYXJzZXIoJ2VuY29kZUFtcHNBbmRBbmdsZXMnKSh1cmwsIG9wdGlvbnMsIGdsb2JhbHMpOyAgLy8gTGluayBJRHMgYXJlIGNhc2UtaW5zZW5zaXRpdmVcblxuICAgIGlmIChibGFua0xpbmVzKSB7XG4gICAgICAvLyBPb3BzLCBmb3VuZCBibGFuayBsaW5lcywgc28gaXQncyBub3QgYSB0aXRsZS5cbiAgICAgIC8vIFB1dCBiYWNrIHRoZSBwYXJlbnRoZXRpY2FsIHN0YXRlbWVudCB3ZSBzdG9sZS5cbiAgICAgIHJldHVybiBibGFua0xpbmVzICsgdGl0bGU7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGdsb2JhbHMuZ1RpdGxlc1tsaW5rSWRdID0gdGl0bGUucmVwbGFjZSgvXCJ8Jy9nLCAnJnF1b3Q7Jyk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5wYXJzZUltZ0RpbWVuc2lvbnMgJiYgd2lkdGggJiYgaGVpZ2h0KSB7XG4gICAgICAgIGdsb2JhbHMuZ0RpbWVuc2lvbnNbbGlua0lkXSA9IHtcbiAgICAgICAgICB3aWR0aDogIHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENvbXBsZXRlbHkgcmVtb3ZlIHRoZSBkZWZpbml0aW9uIGZyb20gdGhlIHRleHRcbiAgICByZXR1cm4gJyc7XG4gIH0pO1xuXG4gIC8vIGF0dGFja2xhYjogc3RyaXAgc2VudGluZWxcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvwqgwLywgJycpO1xuXG4gIHJldHVybiB0ZXh0O1xufSk7XG5cclxuc2hvd2Rvd24uc3ViUGFyc2VyKCd0YWJsZXMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKCFvcHRpb25zLnRhYmxlcykge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdmFyIHRhYmxlUmd4ID0gL14gezAsM31cXHw/LitcXHwuK1xcblsgXFx0XXswLDN9XFx8P1sgXFx0XSo6P1sgXFx0XSooPzotfD0pezIsfVsgXFx0XSo6P1sgXFx0XSpcXHxbIFxcdF0qOj9bIFxcdF0qKD86LXw9KXsyLH1bXFxzXFxTXSs/KD86XFxuXFxufMKoMCkvZ207XG5cbiAgZnVuY3Rpb24gcGFyc2VTdHlsZXMgKHNMaW5lKSB7XG4gICAgaWYgKC9eOlsgXFx0XSotLSokLy50ZXN0KHNMaW5lKSkge1xuICAgICAgcmV0dXJuICcgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7XCInO1xuICAgIH0gZWxzZSBpZiAoL14tLSpbIFxcdF0qOlsgXFx0XSokLy50ZXN0KHNMaW5lKSkge1xuICAgICAgcmV0dXJuICcgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O1wiJztcbiAgICB9IGVsc2UgaWYgKC9eOlsgXFx0XSotLSpbIFxcdF0qOiQvLnRlc3Qoc0xpbmUpKSB7XG4gICAgICByZXR1cm4gJyBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyAoaGVhZGVyLCBzdHlsZSkge1xuICAgIHZhciBpZCA9ICcnO1xuICAgIGhlYWRlciA9IGhlYWRlci50cmltKCk7XG4gICAgaWYgKG9wdGlvbnMudGFibGVIZWFkZXJJZCkge1xuICAgICAgaWQgPSAnIGlkPVwiJyArIGhlYWRlci5yZXBsYWNlKC8gL2csICdfJykudG9Mb3dlckNhc2UoKSArICdcIic7XG4gICAgfVxuICAgIGhlYWRlciA9IHNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JykoaGVhZGVyLCBvcHRpb25zLCBnbG9iYWxzKTtcblxuICAgIHJldHVybiAnPHRoJyArIGlkICsgc3R5bGUgKyAnPicgKyBoZWFkZXIgKyAnPC90aD5cXG4nO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDZWxscyAoY2VsbCwgc3R5bGUpIHtcbiAgICB2YXIgc3ViVGV4dCA9IHNob3dkb3duLnN1YlBhcnNlcignc3BhbkdhbXV0JykoY2VsbCwgb3B0aW9ucywgZ2xvYmFscyk7XG4gICAgcmV0dXJuICc8dGQnICsgc3R5bGUgKyAnPicgKyBzdWJUZXh0ICsgJzwvdGQ+XFxuJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVGFibGUgKGhlYWRlcnMsIGNlbGxzKSB7XG4gICAgdmFyIHRiID0gJzx0YWJsZT5cXG48dGhlYWQ+XFxuPHRyPlxcbicsXG4gICAgICAgIHRibExnbiA9IGhlYWRlcnMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YmxMZ247ICsraSkge1xuICAgICAgdGIgKz0gaGVhZGVyc1tpXTtcbiAgICB9XG4gICAgdGIgKz0gJzwvdHI+XFxuPC90aGVhZD5cXG48dGJvZHk+XFxuJztcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSkge1xuICAgICAgdGIgKz0gJzx0cj5cXG4nO1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHRibExnbjsgKytpaSkge1xuICAgICAgICB0YiArPSBjZWxsc1tpXVtpaV07XG4gICAgICB9XG4gICAgICB0YiArPSAnPC90cj5cXG4nO1xuICAgIH1cbiAgICB0YiArPSAnPC90Ym9keT5cXG48L3RhYmxlPlxcbic7XG4gICAgcmV0dXJuIHRiO1xuICB9XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgndGFibGVzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIC8vIGZpbmQgZXNjYXBlZCBwaXBlIGNoYXJhY3RlcnNcbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxcXChcXHwpL2csIHNob3dkb3duLmhlbHBlci5lc2NhcGVDaGFyYWN0ZXJzQ2FsbGJhY2spO1xuXG4gIC8vIHBhcnNlIHRhYmxlc1xuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHRhYmxlUmd4LCBmdW5jdGlvbiAocmF3VGFibGUpIHtcblxuICAgIHZhciBpLCB0YWJsZUxpbmVzID0gcmF3VGFibGUuc3BsaXQoJ1xcbicpO1xuXG4gICAgLy8gc3RyaXAgd3JvbmcgZmlyc3QgYW5kIGxhc3QgY29sdW1uIGlmIHdyYXBwZWQgdGFibGVzIGFyZSB1c2VkXG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmxlTGluZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICgvXiB7MCwzfVxcfC8udGVzdCh0YWJsZUxpbmVzW2ldKSkge1xuICAgICAgICB0YWJsZUxpbmVzW2ldID0gdGFibGVMaW5lc1tpXS5yZXBsYWNlKC9eIHswLDN9XFx8LywgJycpO1xuICAgICAgfVxuICAgICAgaWYgKC9cXHxbIFxcdF0qJC8udGVzdCh0YWJsZUxpbmVzW2ldKSkge1xuICAgICAgICB0YWJsZUxpbmVzW2ldID0gdGFibGVMaW5lc1tpXS5yZXBsYWNlKC9cXHxbIFxcdF0qJC8sICcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmF3SGVhZGVycyA9IHRhYmxlTGluZXNbMF0uc3BsaXQoJ3wnKS5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudHJpbSgpO30pLFxuICAgICAgICByYXdTdHlsZXMgPSB0YWJsZUxpbmVzWzFdLnNwbGl0KCd8JykubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnRyaW0oKTt9KSxcbiAgICAgICAgcmF3Q2VsbHMgPSBbXSxcbiAgICAgICAgaGVhZGVycyA9IFtdLFxuICAgICAgICBzdHlsZXMgPSBbXSxcbiAgICAgICAgY2VsbHMgPSBbXTtcblxuICAgIHRhYmxlTGluZXMuc2hpZnQoKTtcbiAgICB0YWJsZUxpbmVzLnNoaWZ0KCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFibGVMaW5lcy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRhYmxlTGluZXNbaV0udHJpbSgpID09PSAnJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJhd0NlbGxzLnB1c2goXG4gICAgICAgIHRhYmxlTGluZXNbaV1cbiAgICAgICAgICAuc3BsaXQoJ3wnKVxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocmF3SGVhZGVycy5sZW5ndGggPCByYXdTdHlsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmF3VGFibGU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHJhd1N0eWxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgc3R5bGVzLnB1c2gocGFyc2VTdHlsZXMocmF3U3R5bGVzW2ldKSk7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHJhd0hlYWRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChzaG93ZG93bi5oZWxwZXIuaXNVbmRlZmluZWQoc3R5bGVzW2ldKSkge1xuICAgICAgICBzdHlsZXNbaV0gPSAnJztcbiAgICAgIH1cbiAgICAgIGhlYWRlcnMucHVzaChwYXJzZUhlYWRlcnMocmF3SGVhZGVyc1tpXSwgc3R5bGVzW2ldKSk7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHJhd0NlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgcm93ID0gW107XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaGVhZGVycy5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgaWYgKHNob3dkb3duLmhlbHBlci5pc1VuZGVmaW5lZChyYXdDZWxsc1tpXVtpaV0pKSB7XG5cbiAgICAgICAgfVxuICAgICAgICByb3cucHVzaChwYXJzZUNlbGxzKHJhd0NlbGxzW2ldW2lpXSwgc3R5bGVzW2lpXSkpO1xuICAgICAgfVxuICAgICAgY2VsbHMucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiBidWlsZFRhYmxlKGhlYWRlcnMsIGNlbGxzKTtcbiAgfSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgndGFibGVzLmFmdGVyJywgdGV4dCwgb3B0aW9ucywgZ2xvYmFscyk7XG5cbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG4vKipcbiAqIFN3YXAgYmFjayBpbiBhbGwgdGhlIHNwZWNpYWwgY2hhcmFjdGVycyB3ZSd2ZSBoaWRkZW4uXG4gKi9cbnNob3dkb3duLnN1YlBhcnNlcigndW5lc2NhcGVTcGVjaWFsQ2hhcnMnLCBmdW5jdGlvbiAodGV4dCwgb3B0aW9ucywgZ2xvYmFscykge1xuICAndXNlIHN0cmljdCc7XG4gIHRleHQgPSBnbG9iYWxzLmNvbnZlcnRlci5fZGlzcGF0Y2goJ3VuZXNjYXBlU3BlY2lhbENoYXJzLmJlZm9yZScsIHRleHQsIG9wdGlvbnMsIGdsb2JhbHMpO1xuXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL8KoRShcXGQrKUUvZywgZnVuY3Rpb24gKHdob2xlTWF0Y2gsIG0xKSB7XG4gICAgdmFyIGNoYXJDb2RlVG9SZXBsYWNlID0gcGFyc2VJbnQobTEpO1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlVG9SZXBsYWNlKTtcbiAgfSk7XG5cbiAgdGV4dCA9IGdsb2JhbHMuY29udmVydGVyLl9kaXNwYXRjaCgndW5lc2NhcGVTcGVjaWFsQ2hhcnMuYWZ0ZXInLCB0ZXh0LCBvcHRpb25zLCBnbG9iYWxzKTtcbiAgcmV0dXJuIHRleHQ7XG59KTtcblxyXG52YXIgcm9vdCA9IHRoaXM7XG5cbi8vIENvbW1vbkpTL25vZGVKUyBMb2FkZXJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHNob3dkb3duO1xuXG4vLyBBTUQgTG9hZGVyXG59IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByZXR1cm4gc2hvd2Rvd247XG4gIH0pO1xuXG4vLyBSZWd1bGFyIEJyb3dzZXIgbG9hZGVyXG59IGVsc2Uge1xuICByb290LnNob3dkb3duID0gc2hvd2Rvd247XG59XG59KS5jYWxsKHRoaXMpO1xyXG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNob3dkb3duLmpzLm1hcFxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L3Nob3dkb3duL2Rpc3Qvc2hvd2Rvd24uanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFNpdGUgZG9jdW1lbnRhdGlvblxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiAqL1xuY29uc3QgbGF5b3V0ID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuY29uc3QgaGVhZGVyID0gcmVxdWlyZShcIi4vdmlldy9Eb2NzTWVudVwiKTtcbmNvbnN0IGxlZnQgPSByZXF1aXJlKFwiLi92aWV3L0xlZnROYXZcIik7XG5jb25zdCBtYWluID0gcmVxdWlyZShcIi4vdmlldy9NYWluRGV0YWlsXCIpO1xuY29uc3QgVGl0bGVIZWlnaHQgPSAnMzBweCc7XG5jb25zdCBGb290ZXJIZWlnaHQgPSAnMTBweCc7XG5jb25zdCBMZWZ0TmF2V2lkdGggPSAnMjAwcHgnO1xuY29uc3QgU2l0ZU5hbWUgPSAnSFNEb2NzJztcbmNvbnN0IG15Q29uZmlnID0ge1xuICAgIENvbnRhaW5lcjoge1xuICAgICAgICByb3dzOiBbVGl0bGVIZWlnaHQsIFwiZmlsbFwiLCBGb290ZXJIZWlnaHRdLFxuICAgICAgICBjc3M6ICcuaHMtc2l0ZScsXG4gICAgICAgIGNvbnRlbnQ6IFt7XG4gICAgICAgICAgICAgICAgQ29udGFpbmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtMZWZ0TmF2V2lkdGgsIFwiZmlsbFwiXSxcbiAgICAgICAgICAgICAgICAgICAgY3NzOiAnLmhzLXNpdGUtaGVhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiAnLmhzLXNpdGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBTaXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9hcGkvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgRG9jc01lbnU6IHsgZG9jU2V0OiBcIi4vZGF0YS9pbmRleC5qc29uXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgQ29udGFpbmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtMZWZ0TmF2V2lkdGgsIFwiZmlsbFwiXSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBMZWZ0TmF2OiB7fSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBNYWluRGV0YWlsOiB7fSB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgY3NzOiAnLmhzLXNpdGUtZm9vdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyhjKSBIZWxwZnVsIFNjcmlwdHMnXG4gICAgICAgICAgICAgICAgfSB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHJvdXRlOiB7XG4gICAgICAgIGRlZmF1bHQ6ICcvYXBpJyxcbiAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICAgICcvYXBpJyxcbiAgICAgICAgICAgICcvYXBpLzpsaWInLFxuICAgICAgICAgICAgJy9hcGkvOmxpYi86ZmllbGQnIC8vIGRlZmluZXMgYGh0dHA6Ly9sb2NhbGhvc3QvIyEvYXBpLzpoc0xpYi86aWQgICAgICAgIFxuICAgICAgICBdXG4gICAgfVxufTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbmV3IGxheW91dC5Ic0NvbmZpZyhbbGF5b3V0LCBoZWFkZXIsIGxlZnQsIG1haW5dKS5hdHRhY2hOb2RlVHJlZShteUNvbmZpZywgZG9jdW1lbnQuYm9keSk7XG59XG5leHBvcnRzLmluaXQgPSBpbml0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVTJsMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5VGFYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96dEhRVVZIT3pzN1FVRkZTQ3hOUVVGTk8wRkJRMDRzYlVOQlFXOURPMEZCUTNCRExEQkRRVUV5UXp0QlFVTXpReXgxUTBGQk1FTTdRVUZETVVNc01FTkJRVFpETzBGQlJ6ZERMRTFCUVUwc1YwRkJWeXhIUVVGTExFMUJRVTBzUTBGQlF6dEJRVU0zUWl4TlFVRk5MRmxCUVZrc1IwRkJTU3hOUVVGTkxFTkJRVU03UVVGRE4wSXNUVUZCVFN4WlFVRlpMRWRCUVVrc1QwRkJUeXhEUVVGRE8wRkJRemxDTEUxQlFVMHNVVUZCVVN4SFFVRlJMRkZCUVZFc1EwRkJRenRCUVVVdlFpeE5RVUZOTEZGQlFWRXNSMEZCUnp0SlFVTmlMRk5CUVZNc1JVRkJSVHRSUVVOUUxFbEJRVWtzUlVGQlJ5eERRVUZETEZkQlFWY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1dVRkJXU3hEUVVGRE8xRkJRekZETEVkQlFVY3NSVUZCUlN4VlFVRlZPMUZCUTJZc1QwRkJUeXhGUVVGRkxFTkJRVU03WjBKQlEwNHNVMEZCVXl4RlFVRkRPMjlDUVVOT0xFOUJRVThzUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TlFVRk5MRU5CUVVNN2IwSkJReTlDTEVkQlFVY3NSVUZCUlN4cFFrRkJhVUk3YjBKQlEzUkNMRTlCUVU4c1JVRkJSVHQzUWtGRFRDeEZRVUZGTEZOQlFWTXNSVUZCU3p0blEwRkRXaXhIUVVGSExFVkJRVVVzWjBKQlFXZENPMmREUVVOeVFpeFBRVUZQTEVWQlFVVXNVVUZCVVR0blEwRkRha0lzU1VGQlNTeEZRVUZETEU5QlFVODdOa0pCUTJZc1JVRkJRenQzUWtGRFJpeEZRVUZGTEZGQlFWRXNSVUZCU3l4RlFVRkZMRTFCUVUwc1JVRkJReXh0UWtGQmJVSXNSVUZCUXl4RlFVRkRPM0ZDUVVOb1JEdHBRa0ZEU2p0aFFVRkRMRVZCUVVNN1owSkJRMGdzVTBGQlV5eEZRVUZETzI5Q1FVTk9MRTlCUVU4c1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeE5RVUZOTEVOQlFVTTdiMEpCUXk5Q0xFOUJRVThzUlVGQlJUdDNRa0ZEVEN4RlFVRkZMRTlCUVU4c1JVRkJTeXhGUVVGRkxFVkJRVU03ZDBKQlEycENMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFVkJRVVVzUlVGQlF6dHhRa0ZEY0VJN2FVSkJRMG83WVVGQlF6dFpRVU5HTEVWQlFVVXNVMEZCVXl4RlFVRkZPMjlDUVVOVUxFZEJRVWNzUlVGQlJTeHBRa0ZCYVVJN2IwSkJRM1JDTEU5QlFVOHNSVUZCUlN4eFFrRkJjVUk3YVVKQlEycERMRVZCUVVNN1UwRkRURHRMUVVOS08wbEJRMFFzUzBGQlN5eEZRVUZGTzFGQlEwZ3NUMEZCVHl4RlFVRkZMRTFCUVUwN1VVRkRaaXhMUVVGTExFVkJRVVU3V1VGRFNDeE5RVUZOTzFsQlEwNHNWMEZCVnp0WlFVTllMR3RDUVVGclFpeERRVUZGTEhORVFVRnpSRHRUUVVNM1JUdExRVU5LTzBOQlEwb3NRMEZCUXp0QlFVZEdPMGxCUTBrc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTTVSaXhEUVVGRE8wRkJSa1FzYjBKQlJVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9fZGlzdC9zcmMvU2l0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQcm9nYW0gZW50cnkgcG9pbnQuIEluaXRpYXRlcyBsb2FkaW5nIHRoZSBkb2NzZXRzIGFuZCBzZXR0aW5nIHVwIGEgcm91dGVyIHN0cnVjdHVyZVxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiAqL1xuY29uc3QgU2l0ZV8xID0gcmVxdWlyZShcIi4vU2l0ZVwiKTtcblNpdGVfMS5pbml0KCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN08wZEJSVWM3T3p0QlFVVklMRTFCUVUwN1FVRkRUaXhwUTBGQk9FSTdRVUZGT1VJc1YwRkJTU3hGUVVGRkxFTkJRVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vX2Rpc3Qvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHNob3dkb3duID0gcmVxdWlyZSgnc2hvd2Rvd24nKTtcbi8qKlxuICogcHJvY2VzcyBhIG1hcmtkb3duIGNvbW1lbnQgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBlcXVpdmFsZW50IGh0bWwgc3ludGF4LlxuICogQHBhcmFtIHRleHQgdGhlIGNvbW1lbnQgdG8gbWFya2Rvd25cbiAqIEBwYXJhbSBzaG9ydCBpZiB0cnVlLCBvbmx5IHRoZSBmaXJzdCBwYXJhZ3JhcGggaXMgcmV0dXJuZWRcbiAqIEByZXR1cm4gdGhlIG1hcmtlZCBkb3duIGNvbW1lbnRcbiAqL1xuZnVuY3Rpb24gbWFya0Rvd24odGV4dCwgc2hvcnQgPSBmYWxzZSwgY3VycmVudFJvdXRlKSB7XG4gICAgY29uc3QgY29udmVydGVyID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcih7XG4gICAgICAgIHRhYmxlczogdHJ1ZSxcbiAgICAgICAgZ2hDb21wYXRpYmxlSGVhZGVySWQ6IHRydWUsXG4gICAgICAgIHNtYXJ0SW5kZW50YXRpb25GaXg6IHRydWUsXG4gICAgICAgIHRha3NsaXN0czogdHJ1ZSxcbiAgICAgICAgc3RyaWtldGhyb3VnaDogdHJ1ZSAvLyBlbmFibGVzIH5+dGV4dH5+XG4gICAgfSk7XG4gICAgbGV0IHJlc3VsdCA9ICghdGV4dCkgPyAnJyA6IGNvbnZlcnRlci5tYWtlSHRtbCh0ZXh0KTtcbiAgICBpZiAoc2hvcnQpIHtcbiAgICAgICAgY29uc3QgaSA9IHJlc3VsdC5pbmRleE9mKCc8L3A+Jyk7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBzdWJzdGl0dXRlTGlua3MocmVzdWx0LCBjdXJyZW50Um91dGUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLm1hcmtEb3duID0gbWFya0Rvd247XG4vKipcbiAqIHJlcGxhY2VzIGxpbmsgc3RhdGVtZW50cyBpbiB0aGUgY29tbWVudCB3aXRoIGh5cGVybGluayByZWZlcmVuY2VzLlxuICogVGhlIGZvcm1hdCBvZiBhIGxpbmsgc3RhdGVtZW50IGlzIFwie0BsaW5rICpkb2NzZXQqOipwYXRoKiBsaW5rZWQgdGV4dH1cIiwgd2hlcmVcbiAqIC0gKmRvY3NldCogaXMgdGhlIG5hbWUgb2YgdGhlIGRvY3NldFxuICogLSAqcGF0aCogaXMgdGhlIHN0cnVjdHVyYWwgcGF0aCBvZiBhIGNvbXBvbmVudCB3aXRoIHN0ZXBzIG9uIHRoZSBwYXRoIHNlcGFyYXRlZCBieSBhIHBlcmlvZCxcbiAqICAgIGZvbGxvd2luZyB0aGUgcGF0dGVybiAqbW9kdWxlKi4qZW50aXR5Ki4qbWVtYmVyKiB3aXRoXG4gKiAgICAgLSAqbW9kdWxlKiA9IHRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgZmlsZVxuICogICAgIC0gKmVudGl0eSogPSBbKmNsYXNzKiB8ICpmdW5jdGlvbiogfCAqdmFyaWFibGUqXVxuICogICAgIC0gKm1lbWJlciogPSBbKm1ldGhvZCogfCAqdmFyaWFibGUqXVxuICogLSBpZiAqcGF0aCogaXMgb21pdHRpZWQsIG9yIGlzIGBvdmVydmlld2AsIHRoZSBsaWJyYXJ5IG92ZXJ2aWV3IHdpbGwgYmUgc2hvd24uXG4gKlxuICogRXhhbXBsZXM6XG4gKiAtICd7QGxpbmsgaHNkb2M6IERvYyBPdmVydmlld30nIC0+IHtAbGluayBoc2RvYzogRG9jIE92ZXJ2aWV3fVxuICogLSAne0BsaW5rIGhzZG9jOkRvY1NldHMuRG9jU2V0cy5hZGQgdGhlIGBhZGRzYCBmdW5jdGlvbn0nIC0tPiB7QGxpbmsgaHNkb2M6RG9jU2V0cy5Eb2NTZXRzLmFkZCB0aGUgYGFkZHNgIGZ1bmN0aW9ufVxuICpcbiAqIEBwYXJhbSBjb21tZW50IHRoZSBjb21tZW50IGluIHdoaWNoIHRvIHJlcGxhY2UgdGhlIGxpbmtzXG4gKiBAcmV0dXJuIHRoZSBjb21tZW50IHdpdGggc3Vic3RpdHV0ZWQgbGlua3NcbiAqL1xuZnVuY3Rpb24gc3Vic3RpdHV0ZUxpbmtzKGNvbW1lbnQsIGN1cnJlbnRSb3V0ZSkge1xuICAgIC8qXG4gICAgICAgIGNvbW1lbnQgPSBjb21tZW50LnJlcGxhY2UoL1teXCJgJ117QGxpbmsgKFtcXFNdKik6KFtcXFNdKilcXHMqKC4rKX0vZ2ksIChtYXRjaCwgLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGliID0gYXJnc1swXTtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGFyZ3NbMV07XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXJnc1syXTtcbiAgICAgICAgICAgIHJldHVybiAobW9kdWxlID09PSAnJyB8fCBtb2R1bGUgPT09ICdvdmVydmlldycpP1xuICAgICAgICAgICAgICAgICAgICBgIDxhIGhyZWY9XCIjIS9hcGkvJHtsaWJ9LzBcIj4ke3RleHR9PC9hPmAgOlxuICAgICAgICAgICAgICAgICAgICBgIDxhIGhyZWY9XCIjIS9hcGkvJHtsaWJ9LyR7bGlifS4ke21vZHVsZX1cIj4ke3RleHR9PC9hPmA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tbWVudDtcbiAgICAqL1xuICAgIGZ1bmN0aW9uIGRlY29uc3RydWN0Um91dGUocm91dGUpIHtcbiAgICAgICAgbGV0IGxpYiwgbW9kO1xuICAgICAgICByb3V0ZS5yZXBsYWNlKC9cXC8oW15cXC8uXSopXFwvKFteXFwvXFxzXSokKS9naSwgKG1hdGNoLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBsaWIgPSBhcmdzWzBdO1xuICAgICAgICAgICAgbW9kID0gYXJnc1sxXTtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbbGliLCBtb2RdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRMaWJNb2QocGF0aCkge1xuICAgICAgICBsZXQgbGliLCBtb2QsIGZyYWc7XG4gICAgICAgIGlmIChwYXRoLmluZGV4T2YoJzonKSA+IDApIHtcbiAgICAgICAgICAgIFtsaWIsIG1vZF0gPSBwYXRoLnNwbGl0KCc6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsaWIgPSBkZWZMaWI7XG4gICAgICAgICAgICBtb2QgPSBwYXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2QuaW5kZXhPZignIycpID4gMCkge1xuICAgICAgICAgICAgW21vZCwgZnJhZ10gPSBtb2Quc3BsaXQoJyMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2xpYiwgbW9kLCBmcmFnXTtcbiAgICB9XG4gICAgbGV0IFtkZWZMaWJdID0gZGVjb25zdHJ1Y3RSb3V0ZShjdXJyZW50Um91dGUpO1xuICAgIGNvbW1lbnQgPSBjb21tZW50LnJlcGxhY2UoL1teXCJgJ117QGxpbmsgKFtcXFNdKilcXHMqKC4rKX0vZ2ksIChtYXRjaCwgLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBwYXRoID0gYXJnc1swXTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGFyZ3NbMV07XG4gICAgICAgIGxldCBbbGliLCBtb2R1bGVdID0gZ2V0TGliTW9kKHBhdGgpO1xuICAgICAgICByZXR1cm4gKG1vZHVsZSA9PT0gJycgfHwgbW9kdWxlID09PSAnMCcgfHwgbW9kdWxlID09PSAnb3ZlcnZpZXcnKSA/XG4gICAgICAgICAgICBgIDxhIGhyZWY9XCIjIS9hcGkvJHtsaWJ9LzBcIj4ke3RleHR9PC9hPmAgOlxuICAgICAgICAgICAgYCA8YSBocmVmPVwiIyEvYXBpLyR7bGlifS8ke2xpYn0uJHttb2R1bGV9XCI+JHt0ZXh0fTwvYT5gO1xuICAgIH0pO1xuICAgIHJldHVybiBjb21tZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGeWEyUnZkMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZiV0Z5YTJSdmQyNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCU1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRmRFTTdPenM3TzBkQlMwYzdRVUZEU0N4clFrRkJlVUlzU1VGQlZ5eEZRVUZGTEZGQlFXTXNTMEZCU3l4RlFVRkZMRmxCUVcxQ08wbEJRekZGTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU55UXl4TlFVRk5MRVZCUVd0Q0xFbEJRVWs3VVVGRE5VSXNiMEpCUVc5Q0xFVkJRVWtzU1VGQlNUdFJRVU0xUWl4dFFrRkJiVUlzUlVGQlN5eEpRVUZKTzFGQlF6VkNMRk5CUVZNc1JVRkJaU3hKUVVGSk8xRkJRelZDTEdGQlFXRXNSVUZCVnl4SlFVRkpMRU5CUVVrc2JVSkJRVzFDTzB0QlEzUkVMRU5CUVVNc1EwRkJRenRKUVVOSUxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSU3hGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOd1JDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMUlzVFVGQlRTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVGRExFTkJRVU03U1VGRGFrUXNRMEZCUXp0SlFVTkVMRTFCUVUwc1IwRkJSeXhsUVVGbExFTkJRVU1zVFVGQlRTeEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXk5RExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEYkVJc1EwRkJRenRCUVdaRUxEUkNRV1ZETzBGQlJVUTdPenM3T3pzN096czdPenM3T3pzN08wZEJhVUpITzBGQlEwZ3NlVUpCUVhsQ0xFOUJRV01zUlVGQlJTeFpRVUZ0UWp0SlFVTTFSRHM3T3pzN096czdPenROUVZWRk8wbEJRMFVzTUVKQlFUQkNMRXRCUVZrN1VVRkRiRU1zU1VGQlNTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMUZCUTJJc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5dzBRa0ZCTkVJc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVsQlFVazdXVUZEZGtRc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTmtMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWkN4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRMlFzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVWRUxHMUNRVUZ0UWl4SlFVRlhPMUZCUXpGQ0xFbEJRVWtzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNN1VVRkRia0lzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSQ0xFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYWtNc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlJTeERRVUZETzFsQlEwd3NSMEZCUnl4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVOaUxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEWml4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkNMRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFrTXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRKUVVVNVF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhuUTBGQlowTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFbEJRVWs3VVVGRGRrVXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU53UXl4TlFVRk5MRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzUlVGQlJTeEpRVUZKTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1RVRkJUU3hMUVVGTExGVkJRVlVzUTBGQlF6dFpRVU42UkN4dlFrRkJiMElzUjBGQlJ5eFBRVUZQTEVsQlFVa3NUVUZCVFR0WlFVTjRReXh2UWtGQmIwSXNSMEZCUnl4SlFVRkpMRWRCUVVjc1NVRkJTU3hOUVVGTkxFdEJRVXNzU1VGQlNTeE5RVUZOTEVOQlFVTTdTVUZEY0VVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFNDeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRPMEZCUlc1Q0xFTkJRVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vX2Rpc3Qvc3JjL21hcmtkb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhzbGF5b3V0XzEgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jb25zdCBEb2NTZXRzXzEgPSByZXF1aXJlKFwiLi4vRG9jU2V0c1wiKTtcbmNvbnN0IGhzd2lkZ2V0XzEgPSByZXF1aXJlKFwiaHN3aWRnZXRcIik7XG4vKipcbiAqIENyZWF0ZXMgdGhlIHRpdGxlIG1lbnUgZm9yIHNlbGVjdGluZyBiZXR3ZWVuIHRoZSBkaWZmZXJlbnQgZG9jc2V0cy5cbiAqIEluc3RhbnRpYXRlIHRoZSBEb2NzTWVudSB2aWEgYSBzdGFuZGFyZCBgbWl0aHJpbGAgY2FsbDpgYGBcbiAqICAgIG0oRG9jc01lbnUsIHsgZG9jU2V0OjxwYXRoVG9JbmRleEZpbGU+fSlcbiAqIGBgYFxuICogRG9jc01lbnUgcGVyZm9ybXMgdGhlIGZvbGxvd2luZyBhY3Rpb25zOlxuICogLSBmb3IgdGhlIGZpcnN0IGNhbGwgb2YgdGhlIHZpZXcgbGlmZWN5Y2xlIGhvb2ssIHRoZSBhdmFpbGFibGUgZG9jU2V0cyBhcmUgbG9hZGVkLlxuICogICBEb2NzTWVudSBzZWFyY2hlcyBmb3IgYW4gaW5kZXggYGpzb25gIGZpbGUgYXQgdGhlIGxvY2F0aW9uIHNwZWNpZmllZCBpbiB0aGVcbiAqICAgYGRvY1NldGAgZmllbGQgb2YgdGhlIGBub2RlLmF0dHJzYCBwYXJhbWV0ZXIuIElmIG5vbmUgaXMgc3BlY2lmaWVkLCB0aGVcbiAqICAgZGVmYXVsdCBpcyB1c2VkIGFzIHNwZWNpZmllZCBpbiB0aGUge0BsaW5rIGhzZG9jOkRvY1NldHMuRklMRSBEb2NTZXRzIEZJTEV9IHNldHRpbmcuXG4gKiAtIERvY3NNZW51IHJldHJpZXZlcyBhbGwgYXZhaWxhYmxlIGRvY1NldHMgdmlhIHtAbGluayBoc2RvYzpEb2NTZXRzLkRvY1NldHMuZ2V0IERvY1NldHMuZ2V0fS5cbiAqIC0gRG9jc01lbnUgY3JlYXRlcyBhIGBNZW51RGVzY2Agc3RydWN0dXJlIHdpdGggYSB7QGxpbmsgaHNHcmFwaDpoc01lbnUuTWVudURlc2Muc2VsZWN0IGBzZWxlY3RgfSBjYWxsYmFjayB0aGF0IGluaXRpYXRlcyBhIHJvdXRlIGNoYW5nZVxuICogICB0byB0aGUgc2VsZWN0ZWQgZG9jU2V0XG4gKi9cbmNsYXNzIERvY3NNZW51IGV4dGVuZHMgaHNsYXlvdXRfMS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRvY1NldCA9ICcnO1xuICAgIH1cbiAgICBnZXREZXNjKGF0dHJzKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY1NldCAhPT0gYXR0cnMuZG9jU2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRvY1NldCA9IGF0dHJzLmRvY1NldDtcbiAgICAgICAgICAgIERvY1NldHNfMS5Eb2NTZXRzLmxvYWRMaXN0KGF0dHJzLmRvY1NldCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBEb2NTZXRzXzEuRG9jU2V0cy5nZXQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGMpID0+IGMpLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiAoYXR0cnMucm91dGUgJiYgYXR0cnMucm91dGUubGliKSA/IGF0dHJzLnJvdXRlLmxpYiA6IGl0ZW1zWzBdLFxuICAgICAgICAgICAgc2VsZWN0OiAoaXRlbSkgPT4gaHNsYXlvdXRfMS5tLnJvdXRlLnNldCgnL2FwaS86bGliLzAnLCB7IGxpYjogaXRlbSB9KVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRDb21wb25lbnRzKG5vZGUpIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHRoaXMuZ2V0RGVzYyhub2RlLmF0dHJzKTtcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubShoc3dpZGdldF8xLk1lbnUsIHsgZGVzYzogZGVzYyB9KTtcbiAgICB9XG59XG5leHBvcnRzLkRvY3NNZW51ID0gRG9jc01lbnU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSRzlqYzAxbGJuVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5emNtTXZkbWxsZHk5RWIyTnpUV1Z1ZFM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhWRFFVRm5SRHRCUVVOb1JDeDNRMEZCYTBRN1FVRkRiRVFzZFVOQlFXZEVPMEZCUldoRU96czdPenM3T3pzN096czdPMGRCWVVjN1FVRkRTQ3hqUVVGelFpeFRRVUZSTEc5Q1FVRlRPMGxCUVhaRE96dFJRVU5KTEZkQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRnRRbWhDTEVOQlFVTTdTVUZxUWxjc1QwRkJUeXhEUVVGRExFdEJRVk03VVVGRGNrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRE0wSXNhVUpCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTI1RExFTkJRVU03VVVGRFJDeE5RVUZOTEV0QlFVc3NSMEZCUnl4cFFrRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlF6VkNMRTFCUVUwc1EwRkJRenRaUVVOSUxFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU01UWl4WlFVRlpMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UlN4TlFVRk5MRVZCUVVVc1EwRkJReXhKUVVGWExFdEJRVXNzV1VGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hGUVVGRkxFVkJRVU1zUjBGQlJ5eEZRVUZETEVsQlFVa3NSVUZCUXl4RFFVRkRPMU5CUTJ4RkxFTkJRVU03U1VGRFRpeERRVUZETzBsQlJVUXNZVUZCWVN4RFFVRkRMRWxCUVZVN1VVRkRjRUlzVFVGQlRTeEpRVUZKTEVkQlFWa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETDBNc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eGxRVUZKTEVWQlFVVXNSVUZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5xUXl4RFFVRkRPME5CUTBvN1FVRndRa1FzTkVKQmIwSkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9fZGlzdC9zcmMvdmlldy9Eb2NzTWVudS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBMZWZ0TmF2OiBSZXNwb25zaWJsZSBmb3IgY29uc3RydWN0aW5nIHRoZSBsZWZ0LWhhbmQgbmF2aWdhdGlvbiBwYW5lLlxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiAqL1xuY29uc3QgaHNsYXlvdXRfMSA9IHJlcXVpcmUoXCJoc2xheW91dFwiKTtcbmNvbnN0IGhzbGF5b3V0XzIgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jb25zdCBEb2NTZXRzXzEgPSByZXF1aXJlKFwiLi4vRG9jU2V0c1wiKTtcbmNvbnN0IFBhcnRzXzEgPSByZXF1aXJlKFwiLi9QYXJ0c1wiKTtcbi8qKlxuICogQ29uc3RydWN0cyB0aGUgbGVmdC1oYW5kIG5hdmlnYXRpb24gcGFuZVxuICovXG5jbGFzcyBMZWZ0TmF2IGV4dGVuZHMgaHNsYXlvdXRfMi5Db250YWluZXIge1xuICAgIGdldENvbXBvbmVudHMobm9kZSkge1xuICAgICAgICBsZXQgbGliO1xuICAgICAgICBsZXQgZmllbGQ7XG4gICAgICAgIGlmIChub2RlLmF0dHJzICYmIG5vZGUuYXR0cnMucm91dGUpIHtcbiAgICAgICAgICAgIGxpYiA9IG5vZGUuYXR0cnMucm91dGUubGliO1xuICAgICAgICAgICAgZmllbGQgPSBub2RlLmF0dHJzLnJvdXRlLmZpZWxkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1kbCA9IERvY1NldHNfMS5Eb2NTZXRzLmdldChsaWIsIDApIHx8IHsgbmFtZTogJ3Vua25vd24nLCBpZDogMCB9O1xuICAgICAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCcuaHMtbGVmdCcsIFtoc2xheW91dF8xLm0oJy5ocy1sZWZ0LW5hdicsIG5hdkxpc3QobWRsLCBmaWVsZCkpXSk7XG4gICAgfVxufVxuZXhwb3J0cy5MZWZ0TmF2ID0gTGVmdE5hdjtcbi8qKiBjcmVhdGVzIHRoZSBsaXN0IGlmIG1vZHVsZXMgKGAqLnRzYCBmaWxlcykgKi9cbmZ1bmN0aW9uIG5hdkxpc3QobWRsLCBmaWVsZCkge1xuICAgIGlmIChtZGwua2luZCA9PT0gMCkge1xuICAgICAgICBjb25zdCBtb2R1bGVzID0gbWRsLmNoaWxkcmVuID8gbWRsLmNoaWxkcmVuLm1hcCgoYykgPT4gZXh0ZXJuYWxNb2R1bGUoYywgZmllbGQpKSA6IFsnbm8gY2hpbGRyZW4nXTtcbiAgICAgICAgbW9kdWxlcy51bnNoaWZ0KGhzbGF5b3V0XzEubSgnLmhzLWxlZnQtbmF2LWhlYWRlcicsICdNb2R1bGVzJykpO1xuICAgICAgICByZXR1cm4gW2hzbGF5b3V0XzEubSgnLmhzLWxlZnQtbmF2LWNvbnRlbnQnLCBtb2R1bGVzKV07XG4gICAgICAgIC8vICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IG5vdCBhIGhlYWQgbm9kZScpO1xuICAgIH1cbn1cbi8qKlxuICogbW9kdWxlcyB0byBpZ25vcmUgaW4gdGhlIGxpc3RcbiAqL1xuY29uc3QgaWdub3JlTW9kdWxlcyA9IHtcbiAgICBvdmVydmlldzogdHJ1ZSxcbiAgICBpbmRleDogdHJ1ZSAvLyB0aGUgaW5kZXgudHMgZmlsZVxufTtcbmNvbnN0IGV4cGFuZGVkID0ge307XG4vKipcbiAqIHByb2Nlc3NlcyBhIG1vZHVsZSwgaS5lLiBhIGAudHNgIGZpbGUuXG4gKi9cbmZ1bmN0aW9uIGV4dGVybmFsTW9kdWxlKG1kbCwgZmllbGQpIHtcbiAgICBjb25zdCB0b2dnbGVFeHBhbmRlZCA9ICgpID0+IHsgZXhwYW5kZWRbbWRsLmZ1bGxQYXRoXSA9ICFleHBhbmRlZFttZGwuZnVsbFBhdGhdOyB9O1xuICAgIGNvbnN0IHNlbGVjdGVkID0gKGZpZWxkID09PSAnJyArIG1kbC5pZCB8fCBmaWVsZC5pbmRleE9mKG1kbC5mdWxsUGF0aCkgPT09IDApID9cbiAgICAgICAgJy5ocy1sZWZ0LW5hdi1zZWxlY3RlZCcgOiAnJztcbiAgICAvLyBpZiBmaWVsZC5sZW5ndGggY29uZGl0aW9uIGlzIGNvbW1lbnRlZCBvdXQsIHRoZSBwYW5lbCB3aWxsIGFsd2F5cyBzdGF5IG9wZW5cbiAgICBpZiAoc2VsZWN0ZWQgLyomJiBmaWVsZC5sZW5ndGggPiBtZGwuZnVsbFBhdGgubGVuZ3RoKi8pIHtcbiAgICAgICAgZXhwYW5kZWRbbWRsLmZ1bGxQYXRoXSA9IHRydWU7XG4gICAgfVxuICAgIC8vIGRvbid0IHNob3cgbW9kdWxlcyBmcm9tIG90aGVyIHByb2plY3RzIChpc0V4cG9ydGVkIGZsYWcpIG9yIG1vZHVsZXMgb24gdGhlIGlnbm9yZSBsaXN0XG4gICAgY29uc3Qgc2tpcCA9IChtZGwuZmxhZ3MgJiYgbWRsLmZsYWdzLmlzRXh0ZXJuYWwpIHx8IGlnbm9yZU1vZHVsZXNbbWRsLm5hbWVdO1xuICAgIHJldHVybiBza2lwID8gaHNsYXlvdXRfMS5tKCcnKSA6IGhzbGF5b3V0XzEubShgLmhzLWxlZnQtbmF2LW1vZHVsZWAsIHsgb25jbGljazogdG9nZ2xlRXhwYW5kZWQgfSwgW1xuICAgICAgICBQYXJ0c18xLmxpYkxpbmsoYGEuaHMtbGVmdC1uYXYtbW9kdWxlLW5hbWUgJHtzZWxlY3RlZH1gLCBtZGwubGliLCBtZGwuZnVsbFBhdGgsIG1kbC5uYW1lKSxcbiAgICAgICAgIW1kbC5ncm91cHMgPyB1bmRlZmluZWQgOiBoc2xheW91dF8xLm0oJy5ocy1sZWZ0LW5hdi1tb2R1bGUtY29udGVudCcsIHsgY2xhc3M6IGV4cGFuZGVkW21kbC5mdWxsUGF0aF0gPyAnJyA6ICdocy1jb2xsYXBzZWQnIH0sIG1kbC5ncm91cHMubWFwKChnKSA9PiBlbnRyaWVzKGcsIG1kbCwgZmllbGQpKSlcbiAgICBdKTtcbn1cbi8qKlxuICogcHJvY2Vzc2VzIGEgZ3JvdXAgb2YgZW50cmllcywgZS5nLiBWYXJpYWJsZXMsIEZ1bmN0aW9ucywgb3IgQ2xhc3Nlcy5cbiAqIEBwYXJhbSBncm91cCB0aGUgZ3JvdXAgc3RydWN0dXJlIHdpdGhpbiB0aGUgZG9jc2V0XG4gKiBAcGFyYW0gbWRsIHRoZSBlbnRpcmUgbW9kdWxlIGRvY3NldFxuICogQHBhcmFtIGZpZWxkIHRoZSBmaWVsZCBJRCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1haW4gcGFuZWxcbiAqL1xuZnVuY3Rpb24gZW50cmllcyhncm91cCwgbWRsLCBmaWVsZCkge1xuICAgIGZ1bmN0aW9uIG1vZHVsZUdldChjKSB7XG4gICAgICAgIHJldHVybiBEb2NTZXRzXzEuRG9jU2V0cy5nZXQobWRsLmxpYiwgYyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHByb2Nlc3NlcyBvbmUgZW50cnkgd2l0aGluIGEgZ3JvdXAsIGUuZy4gb25lIHZhcmlhYmxlLCBmdW5jdGlvbiwgb3IgY2xhc3MuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZW50cnkobW9kKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gKGZpZWxkID09PSAnJyArIG1vZC5pZCB8fCBmaWVsZCA9PT0gbW9kLmZ1bGxQYXRoKSA/ICcuaHMtbGVmdC1uYXYtc2VsZWN0ZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGV4cG9ydGVkID0gKG1vZC5mbGFncyAmJiBtb2QuZmxhZ3MuaXNFeHBvcnRlZCk7XG4gICAgICAgIGNvbnN0IHN0YXRpayA9IChtb2QuZmxhZ3MgJiYgbW9kLmZsYWdzLmlzU3RhdGljKTtcbiAgICAgICAgY29uc3QgY3NzID0gYGEuaHMtbGVmdC1uYXYtZW50cnkgJHtzZWxlY3RlZH0gJHtleHBvcnRlZCA/ICcuaHMtbGVmdC1uYXYtZXhwb3J0ZWQnIDogJyd9YDtcbiAgICAgICAgcmV0dXJuICghZXhwb3J0ZWQgJiYgZ3JvdXAudGl0bGUgPT09ICdWYXJpYWJsZXMnKSA/ICcnIDpcbiAgICAgICAgICAgIGhzbGF5b3V0XzEubSgnJywgW1xuICAgICAgICAgICAgICAgIHN0YXRpayA/ICdzdGF0aWMnIDogJycsXG4gICAgICAgICAgICAgICAgUGFydHNfMS5saWJMaW5rKGNzcywgbW9kLmxpYiwgbW9kLmZ1bGxQYXRoLCBtb2QubmFtZSlcbiAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbXB0eShtb2QpIHsgcmV0dXJuIG1vZCAhPT0gJyc7IH1cbiAgICBsZXQgZ3JwID0gW107XG4gICAgaWYgKGdyb3VwICYmIGdyb3VwLmNoaWxkcmVuKSB7XG4gICAgICAgIGdycCA9IGdyb3VwLmNoaWxkcmVuXG4gICAgICAgICAgICAubWFwKG1vZHVsZUdldCkgLy8gcmVwbGFjZSBpZCByZWZlcmVuY2UgYnkgbW9kdWxlXG4gICAgICAgICAgICAuc29ydChleHBvcnRBc2NlbmRpbmcpIC8vIHNvcnQ6IGV4cG9ydGVkIGZpcnN0LCB0aGVuIGFscGhhYmV0aWNhbGx5XG4gICAgICAgICAgICAubWFwKGVudHJ5KSAvLyByZXBsYWNlIG1vZHVsZSBieSB2bm9kZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgIC5maWx0ZXIoZW1wdHkpOyAvLyBmaWx0ZXIgZW1wdHkgZWxlbWVudHNcbiAgICAgICAgaWYgKGdycC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBncnAudW5zaGlmdChoc2xheW91dF8xLm0oJy5ocy1sZWZ0LW5hdi1oZWFkZXInLCBncm91cC50aXRsZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoZ3JwLmxlbmd0aCA+IDEpID8gaHNsYXlvdXRfMS5tKGAuaHMtbGVmdC1uYXYtZW50cmllc2AsIGdycCkgOiAnJztcbn1cbi8qKlxuICogc29ydGluZyBmdW5jdGlvbjogc29ydCBmaXJzdCBieSBleHBvcnRlZCBzdGF0dXMsIHRoZW4gYWxwaGFiZXRpY2FsbHkuXG4gKi9cbmZ1bmN0aW9uIGV4cG9ydEFzY2VuZGluZyhhLCBiKSB7XG4gICAgaWYgKGEuZmxhZ3MgJiYgYi5mbGFncykge1xuICAgICAgICBpZiAoYS5mbGFncy5pc0V4cG9ydGVkICYmIGIuZmxhZ3MuaXNFeHBvcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhLmZsYWdzLmlzRXhwb3J0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiLmZsYWdzLmlzRXhwb3J0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUR1ZtZEU1aGRpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OTJhV1YzTDB4bFpuUk9ZWFl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMGRCUlVjN096dEJRVVZJTEUxQlFVMDdRVUZEVGl4MVEwRkJiME03UVVGRGNFTXNkVU5CUVc5RE8wRkJRM0JETEhkRFFVRnhRenRCUVVOeVF5eHRRMEZCYTBNN1FVRkhiRU03TzBkQlJVYzdRVUZEU0N4aFFVRnhRaXhUUVVGUkxHOUNRVUZUTzBsQlEyeERMR0ZCUVdFc1EwRkJReXhKUVVGWE8xRkJRM0pDTEVsQlFVa3NSMEZCVlN4RFFVRkRPMUZCUTJZc1NVRkJTU3hMUVVGWkxFTkJRVU03VVVGRGFrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXp0WlFVTXpRaXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRMjVETEVOQlFVTTdVVUZEUkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhwUWtGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlF5eEpRVUZKTEVWQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1JVRkJReXhEUVVGRExFVkJRVU1zUTBGQlF6dFJRVU14UkN4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEZsQlFVTXNRMEZCUXl4alFVRmpMRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOdVJTeERRVUZETzBOQlEwbzdRVUZZUkN3d1FrRlhRenRCUVVWRUxHbEVRVUZwUkR0QlFVTnFSQ3hwUWtGQmFVSXNSMEZCVHl4RlFVRkZMRXRCUVZrN1NVRkRiRU1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycENMRTFCUVUwc1QwRkJUeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVkQlFVVXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZMTEV0QlFVc3NZMEZCWXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkRkRWNzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRkRMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVJDeE5RVUZOTEVOQlFVTXNRMEZCUXl4WlFVRkRMRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1JDeGpRVUZqTzFGQlEyUXNaMFJCUVdkRU8wbEJRelZETEVOQlFVTTdRVUZEVEN4RFFVRkRPMEZCUlVRN08wZEJSVWM3UVVGRFNDeE5RVUZOTEdGQlFXRXNSMEZCUnp0SlFVTnNRaXhSUVVGUkxFVkJRVWtzU1VGQlNUdEpRVU5vUWl4TFFVRkxMRVZCUVU4c1NVRkJTU3hEUVVGSkxHOUNRVUZ2UWp0RFFVTXpReXhEUVVGRE8wRkJSVVlzVFVGQlRTeFJRVUZSTEVkQlFYTkNMRVZCUVVVc1EwRkJRenRCUVVWMlF6czdSMEZGUnp0QlFVTklMSGRDUVVGM1FpeEhRVUZQTEVWQlFVVXNTMEZCV1R0SlFVTjZReXhOUVVGTkxHTkJRV01zUjBGQlJ5eFJRVUZSTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyNUdMRTFCUVUwc1VVRkJVU3hIUVVGSExFTkJRVU1zUzBGQlN5eExRVUZITEVWQlFVVXNSMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU55UlN4MVFrRkJkVUlzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZGYWtNc09FVkJRVGhGTzBsQlF6bEZMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eDVRMEZCZVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dEpRVUZETEVOQlFVTTdTVUZGTVVZc2VVWkJRWGxHTzBsQlEzcEdMRTFCUVUwc1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NTVUZCU1N4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEdGQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE5VVXNUVUZCVFN4RFFVRkRMRWxCUVVrc1IwRkJSU3haUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NXVUZCUXl4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkRMR05CUVdNc1JVRkJSU3hGUVVGRk8xRkJRM1JGTEdWQlFVOHNRMEZCUXl3MlFrRkJOa0lzVVVGQlVTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRha1lzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkZMRk5CUVZNc1IwRkJSeXhaUVVGRExFTkJRVU1zTmtKQlFUWkNMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJReXhGUVVGRkxFZEJRVU1zWTBGQll5eEZRVUZETEVWQlEzaEhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCU3l4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRla1FzUTBGQlF5eERRVUZETzBGQlExQXNRMEZCUXp0QlFVVkVPenM3T3p0SFFVdEhPMEZCUTBnc2FVSkJRV2xDTEV0QlFWTXNSVUZCUlN4SFFVRlBMRVZCUVVVc1MwRkJXVHRKUVVNM1F5eHRRa0ZCYlVJc1EwRkJTenRSUVVOd1FpeE5RVUZOTEVOQlFVTXNhVUpCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBsQlEwUTdPMDlCUlVjN1NVRkRTQ3hsUVVGbExFZEJRVTg3VVVGRGJFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkJReXhMUVVGTExFdEJRVWNzUlVGQlJTeEhRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1MwRkJTeXhMUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUlN4MVFrRkJkVUlzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZETTBZc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEY2tRc1RVRkJUU3hOUVVGTkxFZEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEYmtRc1RVRkJUU3hIUVVGSExFZEJRVWNzZFVKQlFYVkNMRkZCUVZFc1NVRkJTU3hSUVVGUkxFZEJRVU1zZFVKQlFYVkNMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGRrWXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFbEJRVWtzUzBGQlN5eERRVUZETEV0QlFVc3NTMEZCUnl4WFFVRlhMRU5CUVVNc1IwRkJSU3hGUVVGRk8xbEJReTlETEZsQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRMFlzVFVGQlRTeEhRVUZGTEZGQlFWRXNSMEZCUlN4RlFVRkZPMmRDUVVOd1FpeGxRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRE8yRkJRMmhFTEVOQlFVTXNRMEZCUXp0SlFVTllMRU5CUVVNN1NVRkZSQ3hsUVVGbExFZEJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRk9VTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMklzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkNMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVUdGhRVU5tTEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJVeXhwUTBGQmFVTTdZVUZEZUVRc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZGTERSRFFVRTBRenRoUVVOdVJTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVdFc2IwTkJRVzlETzJGQlF6TkVMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZUTEhkQ1FVRjNRanRSUVVOd1JDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtJc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZETEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRka1FzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZEUkN4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkZMRmxCUVVNc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGFrVXNRMEZCUXp0QlFVVkVPenRIUVVWSE8wRkJRMGdzZVVKQlFYbENMRU5CUVVzc1JVRkJSU3hEUVVGTE8wbEJRMnBETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRja0lzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFJRVUZETEVOQlFVTTdVVUZEZWtVc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVGRExFTkJRVU03VVVGRE0wTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZCUXl4RFFVRkRPMUZCUXpGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0UlFVRkRMRU5CUVVNN1NVRkRjRU1zUTBGQlF6dEpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVGRExFTkJRVU03UVVGRGRFTXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vX2Rpc3Qvc3JjL3ZpZXcvTGVmdE5hdi5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQcm9jZXNzaW5nIG9mIGNvbW1lbnRzLlxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiAqL1xuY29uc3QgaHNsYXlvdXRfMSA9IHJlcXVpcmUoXCJoc2xheW91dFwiKTtcbmNvbnN0IG1hcmtkb3duXzEgPSByZXF1aXJlKFwiLi4vbWFya2Rvd25cIik7XG5jb25zdCBNYWluRXhhbXBsZV8xID0gcmVxdWlyZShcIi4vTWFpbkV4YW1wbGVcIik7XG4vKipcbiAqIE1haW4gY29tbWVudCBwcm9jZXNzaW5nLiBUaGUgcmVzdWx0IGFwcGVhcnMgZGlyZWN0bHkgYmVsb3cgdGhlIHRpdGxlIGluIHRoZSBtYWluIHBhbmVsLlxuICogRnVuY3Rpb24gcGFyYW1ldGVycyBhcmUgbm90IHJlcG9ydGVkIGluIHNob3J0IGZvcm0gaGVyZSBzaW5jZSBpdCBpcyBhc3N1bWVkIHRoZXkgd2lsbCBiZSBsaXN0ZWRcbiAqIGluZGl2aWR1YWxseSBiZWxvdyB0aGUgbWFpbiBjb21tZW50XG4gKiBAcGFyYW0gbWRsIHRoZSBtb2R1bGUgdG8gc2NhbiBmb3IgY29tbWVudHNcbiAqIEByZXR1cm4gYSB2bm9kZSByZXByZXNlbnRpbmcgdGhlIGNvbW1lbnQgZW50cmllc1xuICovXG5mdW5jdGlvbiBjb21tZW50TG9uZyhtZGwpIHtcbiAgICBsZXQgY29udGVudCA9IFtdO1xuICAgIGlmIChtZGwuY29tbWVudCkge1xuICAgICAgICBjb250ZW50LnB1c2godGV4dE9yU2hvcnRUZXh0T3JEZXNjcmlwdGlvbihtZGwuY29tbWVudCwgZmFsc2UpKTtcbiAgICAgICAgY29udGVudC5wdXNoKHJldHVybnMobWRsLmNvbW1lbnQsIGZhbHNlKSk7XG4gICAgICAgIGNvbnRlbnQucHVzaChjb21tZW50UmVtYWluZGVyKG1kbC5jb21tZW50KSk7XG4gICAgfVxuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWNvbW1lbnQnLCBjb250ZW50KTtcbn1cbmV4cG9ydHMuY29tbWVudExvbmcgPSBjb21tZW50TG9uZztcbi8qKlxuICogU2hvcnRlbmRlZCBjb21tZW50IHByb2Nlc3NpbmcuIFRoaXMgZm9ybSBpcyB1c2VkIHRvIHJlcG9ydCBvbiBzdWJpdGVtcyBiZWxvdyB0aGUgbWFpbiBwYW5lbCBpdGVtLlxuICogSWYgYHNob3J0YCBpcyB0cnVlLCBvbmx5IHRoZSBmaXJzdCBwYXJhZ3JhcGggb2YgdGhlIG1haW4gY29tbWVudCB3aWxsIGJlIHJldHVybmVkLiBPdGhlcndpc2UsXG4gKiB0aGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBmdWxsIGNvbW1lbnQgaW5jbHVkaW5nIGFuIGlubGluZSBsaXN0IG9mIHBhcmFtZXRlcnMgYW5kIHRoZSByZXR1cm4gdmFsdWVcbiAqIEBwYXJhbSBtZGwgdGhlIG1vZHVsZSB0byBzY2FuIGZvciBjb21tZW50c1xuICogQHBhcmFtIHNob3J0IGlmIHRydWUsIG9ubHkgdGhlIGZpcnN0IHBhcmFncmFwaCBvZiB0aGUgbWFpbiBjb21tZW50IGlzIHByb2Nlc3NlZC5cbiAqIEByZXR1cm4gYSB2bm9kZSByZXByZXNlbnRpbmcgdGhlIGNvbW1lbnQgZW50cmllc1xuICovXG5mdW5jdGlvbiBjb21tZW50KG1kbCwgc2hvcnQgPSBmYWxzZSkge1xuICAgIGxldCBjb250ZW50ID0gW107XG4gICAgaWYgKG1kbC5jb21tZW50KSB7XG4gICAgICAgIGNvbnRlbnQucHVzaCh0ZXh0T3JTaG9ydFRleHRPckRlc2NyaXB0aW9uKG1kbC5jb21tZW50LCBzaG9ydCkpO1xuICAgICAgICBpZiAoIXNob3J0KSB7XG4gICAgICAgICAgICBjb250ZW50LnB1c2gob3RoZXJDb21tZW50VGFncyhtZGwuY29tbWVudCkpO1xuICAgICAgICAgICAgaWYgKG1kbC5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuY29uY2F0KG1haW5Db21tZW50UGFyYW1zKG1kbC5wYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5wdXNoKHJldHVybnMobWRsLmNvbW1lbnQsIGZhbHNlKSk7XG4gICAgICAgIGNvbnRlbnQucHVzaChjb21tZW50UmVtYWluZGVyKG1kbC5jb21tZW50KSk7XG4gICAgfVxuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWNvbW1lbnQnLCBjb250ZW50KTtcbn1cbmV4cG9ydHMuY29tbWVudCA9IGNvbW1lbnQ7XG4vKipcbiAqIFJlcG9ydCB0aGUgaXRlbSdzIGRlc2NyaXB0aW9uLiBUaGlzIGNhbiBjb21lIGluIGRpZmZlcmVudCBmb3JtcyB0aGF0IGFyZSBhbGwgaGFuZGxlZCBoZXJlOlxuICogLSBjb21tZW50LnNob3J0VGV4dDogPGRlc2NyaXB0aW9uPlxuICogLSBjb21tZW50LnRleHQ6IDxkZXNjcmlwdGlvbj5cbiAqIC0gY29tbWVudC50YWdzW3t0YWc6J2Rlc2NyaXB0aW9ufSwgdGV4dDo8ZGVzY3JpcHRpb24+XVxuICogQW55IHJlc3VsdGluZyBjb21tZW50IHdpbGwgYmUgdHJhbnNsYXRlZCBmcm9tIG1hcmtkb3duIHRvIGh0bWwgYW5kIHJldHVybmVkIGFzIGEgYFZub2RlYC5cbiAqIEBwYXJhbSBjb21tZW50IHRoZSBjb21tZW50IG9iamVjdCB0byBwYXJzZVxuICogQHBhcmFtIHNob3J0IGJvb2xlYW47IGlmIHRydWUsIG9ubHkgdGhlIGZpcnN0IHBhcmFncmFwaCBvZiB0aGUgZGVzY3JpcHRpb24gd2lsbCBiZSByZXR1cm5lZFxuICovXG5mdW5jdGlvbiB0ZXh0T3JTaG9ydFRleHRPckRlc2NyaXB0aW9uKGNvbW1lbnQsIHNob3J0KSB7XG4gICAgbGV0IHRleHQgPSAoY29tbWVudC5zaG9ydFRleHQgfHwgJycpO1xuICAgIGlmIChjb21tZW50LnRleHQpIHtcbiAgICAgICAgdGV4dCArPSAnXFxuJyArIChjb21tZW50LnRleHQgfHwgJycpO1xuICAgIH1cbiAgICBpZiAoY29tbWVudC50YWdzKSB7XG4gICAgICAgIGNvbW1lbnQudGFncy5tYXAoKHRhZykgPT4geyBpZiAodGFnLnRhZyA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdGV4dCA9IHRhZy50ZXh0O1xuICAgICAgICB9IH0pO1xuICAgIH1cbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC88ZXhhbXBsZT4oW1xcU1xcc10qPyk8XFwvZXhhbXBsZT4vZ2ksIE1haW5FeGFtcGxlXzEuZXhhbXBsZSh7fSkpO1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWNvbW1lbnQtZGVzYycsIHByZXR0aWZ5Q29kZSh0ZXh0LCBzaG9ydCkpO1xufVxuZnVuY3Rpb24gcmV0dXJucyhjb21tZW50LCBzaG9ydCkge1xuICAgIGxldCB0ZXh0ID0gY29tbWVudC5yZXR1cm5zO1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWNvbW1lbnQtcmV0dXJuJywgIXRleHQgPyAnJyA6IFtcbiAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tY29tbWVudC10YWcnLCAncmV0dXJuczonKSxcbiAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tY29tbWVudC10ZXh0JywgdGV4dClcbiAgICBdKTtcbn1cbmZ1bmN0aW9uIGNvbW1lbnRSZW1haW5kZXIoY29tbWVudCkge1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJycsIE9iamVjdC5rZXlzKGNvbW1lbnQpLm1hcCgodGFnKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICAgICAgICBjYXNlICd0YWdzJzogLy8gYWxyZWFkeSBoYW5kbGVkXG4gICAgICAgICAgICBjYXNlICdzaG9ydFRleHQnOiAvLyBhbHJlYWR5IGhhbmRsZWRcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOiAvLyBhbHJlYWR5IGhhbmRsZWRcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzogLy8gYWxyZWFkeSBoYW5kbGVkXG4gICAgICAgICAgICBjYXNlICdyZXR1cm5zJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLWNvbW1lbnQtc3BlY2lhbCcsIFtcbiAgICAgICAgICAgICAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tY29tbWVudC10YWcnLCB0YWcpLFxuICAgICAgICAgICAgICAgICAgICBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1jb21tZW50LXRleHQnLCBjb21tZW50W3RhZ10pXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgfSkpO1xufVxuZnVuY3Rpb24gb3RoZXJDb21tZW50VGFncyhjb21tZW50KSB7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnJywgIWNvbW1lbnQudGFncyA/IFtdIDogY29tbWVudC50YWdzLm1hcCgodGFnKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGFnLnRhZykge1xuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOiByZXR1cm4gJyc7IC8vIHNraXAgc2luY2UgYWxyZWFkeSBoYW5kbGVkXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1jb21tZW50LXNwZWNpYWwnLCBbXG4gICAgICAgICAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tY29tbWVudC10YWcnLCB0YWcudGFnKSxcbiAgICAgICAgICAgICAgICBoc2xheW91dF8xLm0oJ3NwYW4uaHMtaXRlbS1jb21tZW50LXRleHQnLCB0YWcudGV4dClcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgfSkpO1xufVxuZnVuY3Rpb24gbWFpbkNvbW1lbnRQYXJhbXMocGFyYW1zKSB7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tY29tbWVudC1wYXJhbXMnLCBwYXJhbXMubWFwKChwYXIpID0+IGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tY29tbWVudC1wYXJhbScsIFtcbiAgICAgICAgaHNsYXlvdXRfMS5tKCdzcGFuLmhzLWl0ZW0tY29tbWVudC10YWcnLCBwYXIubmFtZSArICc6JyksXG4gICAgICAgIGhzbGF5b3V0XzEubSgnc3Bhbi5ocy1pdGVtLWNvbW1lbnQtdGV4dCcsICFwYXIuY29tbWVudCA/ICcnIDpcbiAgICAgICAgICAgICgocGFyLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSA/IGBbZGVmYXVsdDogJHtwYXIuZGVmYXVsdFZhbHVlfV0gYCA6ICcnKSArIHBhci5jb21tZW50LnRleHQpXG4gICAgXSkpKTtcbn1cbi8qKlxuICogZmluZHMgc2VnbWVudHMgb2YgYDxjb2RlPi4uLjwvY29kZT5gIGluIGBjb21tZW50YCBhbmQgcmVwbGFjZXMgdGhlbSB3aXRoIGEgcHJldHRpZmllZCB2ZXJzaW9uLlxuICogQ3VycmVudGx5IHRoZSBmdW5jdGlvbiBwZXJmb3JtcyB0d28gb3BlcmF0aW9uczpcbiAqIC0gYWRkIGluZGVudGF0aW9uIGZvciBicmFja2V0cyB7Li4ufVxuICogLSB3cmFwIHRoZSAmbHQ7Y29kZSZndDsuLi4mbHQ7L2NvZGUmZ3Q7IHBhcnQgd2l0aGluICZsdDtwcmUmZ3Q7Li4uJmx0Oy9wcmUmZ3Q7IGJyYWNrZXRzXG4gKiBAcGFyYW0gY29tbWVudCB0aGUgY29tbWVudCBjb21tZW50XG4gKi9cbmZ1bmN0aW9uIHByZXR0aWZ5Q29kZShjb21tZW50LCBzaG9ydCkge1xuICAgIC8vICAgIGNvbnN0IGluZGVudFNwYWNlcyA9IDI7XG4gICAgbGV0IHJlc3VsdCA9IGNvbW1lbnQ7XG4gICAgZnVuY3Rpb24gYnJhY2VJbmRlbnRpbmcodGV4dCkge1xuICAgICAgICBsZXQgaW5kZW50ID0gMDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGV4dFxuICAgICAgICAgICAgLnN1YnN0cmluZyg2LCB0ZXh0Lmxlbmd0aCAtIDcpIC8vIHJlbW92ZSA8Y29kZT4gYW5kIDwvY29kZT5cbiAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oPCkvZywgJyZsdDsnKS5yZXBsYWNlKC8oPikvZywgJyZndDsnKVxuICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgLm1hcCgobCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9sZEluZGVudCA9IGluZGVudDtcbiAgICAgICAgICAgIGxldCBrID0gbC50cmltKCk7XG4gICAgICAgICAgICBpbmRlbnQgKz0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGsuc3BsaXQoJ3snKS5sZW5ndGggLSBrLnNwbGl0KCd9JykubGVuZ3RoKSk7XG4gICAgICAgICAgICBpbmRlbnQgKz0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGsuc3BsaXQoJ1snKS5sZW5ndGggLSBrLnNwbGl0KCddJykubGVuZ3RoKSk7XG4gICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiaHMtY29kZS1pbmRlbnRcIj48L3NwYW4+Jy5yZXBlYXQoKChpbmRlbnQgPCBvbGRJbmRlbnQpID8gaW5kZW50IDogb2xkSW5kZW50KSkgKyBrO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJ1xcbicpXG4gICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICByZXR1cm4gJzxwcmU+PGNvZGU+JyArIHJlc3VsdCArICc8L2NvZGU+PC9wcmU+JztcbiAgICB9XG4gICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoLzxjb2RlPihbXFxTXFxzXSo/KTxcXC9jb2RlPi9naSwgYnJhY2VJbmRlbnRpbmcpO1xuICAgIHJldHVybiBoc2xheW91dF8xLm0udHJ1c3QobWFya2Rvd25fMS5tYXJrRG93bihyZXN1bHQsIHNob3J0LCBoc2xheW91dF8xLm0ucm91dGUuZ2V0KCkpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXRnBia052YlcxbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5emNtTXZkbWxsZHk5TllXbHVRMjl0YldWdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN1IwRkZSenM3TzBGQlJVZ3NUVUZCVFR0QlFVTk9MSFZEUVVGdlF6dEJRVU53UXl3d1EwRkJkVU03UVVGRGRrTXNLME5CUVhsRE8wRkJSWHBET3pzN096czdSMEZOUnp0QlFVTklMSEZDUVVFMFFpeEhRVUZQTzBsQlF5OUNMRWxCUVVrc1QwRkJUeXhIUVVGVExFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTmtMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zTkVKQlFUUkNMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXk5RUxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGRFJDeE5RVUZOTEVOQlFVTXNXVUZCUXl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUXpGRExFTkJRVU03UVVGU1JDeHJRMEZSUXp0QlFVVkVPenM3T3pzN08wZEJUMGM3UVVGRFNDeHBRa0ZCZDBJc1IwRkJUeXhGUVVGRkxFdEJRVXNzUjBGQlF5eExRVUZMTzBsQlEzaERMRWxCUVVrc1QwRkJUeXhIUVVGVExFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTmtMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zTkVKQlFUUkNMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXk5RUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOVUxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycENMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRkxFTkJRVU03VVVGRFRDeERRVUZETzFGQlEwUXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRE1VTXNRMEZCUXp0QlFXUkVMREJDUVdORE8wRkJSVVE3T3pzN096czdPMGRCVVVjN1FVRkRTQ3h6UTBGQmMwTXNUMEZCVnl4RlFVRkZMRXRCUVdFN1NVRkROVVFzU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzSkRMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzUjBGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGQlF5eERRVUZETzBsQlEzcEVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJZc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRlBMRTlCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTMEZCUnl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRVU1zU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZGTEVOQlFVTTdTVUZEZGtZc1EwRkJRenRKUVVORUxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR3REUVVGclF5eEZRVUZGTEhGQ1FVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU55UlN4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExIVkNRVUYxUWl4RlFVRkZMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnFSU3hEUVVGRE8wRkJSVVFzYVVKQlFXbENMRTlCUVZjc1JVRkJSU3hMUVVGaE8wbEJRM1pETEVsQlFVa3NTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU03U1VGRE0wSXNUVUZCVFN4RFFVRkRMRmxCUVVNc1EwRkJReXg1UWtGQmVVSXNSVUZCUlN4RFFVRkRMRWxCUVVrc1IwRkJSU3hGUVVGRkxFZEJRVVU3VVVGRE0wTXNXVUZCUXl4RFFVRkRMREJDUVVFd1FpeEZRVUZGTEZWQlFWVXNRMEZCUXp0UlFVTjZReXhaUVVGRExFTkJRVU1zTWtKQlFUSkNMRVZCUVVVc1NVRkJTU3hEUVVGRE8wdEJRM1pETEVOQlFVTXNRMEZCUXp0QlFVTlFMRU5CUVVNN1FVRkZSQ3d3UWtGQk1FSXNUMEZCVnp0SlFVTnFReXhOUVVGTkxFTkJRVU1zV1VGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVU4N1VVRkRkRU1zVFVGQlRTeERRVUZCTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOVUxFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFWRXNhMEpCUVd0Q08xbEJRM1JETEV0QlFVc3NWMEZCVnl4RFFVRkRMRU5CUVVjc2EwSkJRV3RDTzFsQlEzUkRMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVkVzYTBKQlFXdENPMWxCUTNSRExFdEJRVXNzWVVGQllTeERRVUZETEVOQlFVTXNhMEpCUVd0Q08xbEJRM1JETEV0QlFVc3NVMEZCVXp0blFrRkRUaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzFsQlEyeENPMmRDUVVGVExFMUJRVTBzUTBGQlF5eFpRVUZETEVOQlFVTXNNRUpCUVRCQ0xFVkJRVVU3YjBKQlF6RkRMRmxCUVVNc1EwRkJReXd3UWtGQk1FSXNSVUZCUlN4SFFVRkhMRU5CUVVNN2IwSkJRMnhETEZsQlFVTXNRMEZCUXl3eVFrRkJNa0lzUlVGQlJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJReTlETEVOQlFVTXNRMEZCUXp0blFrRkJRU3hEUVVGRE8xRkJRMUlzUTBGQlF6dEpRVU5VTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRVaXhEUVVGRE8wRkJSVVFzTUVKQlFUQkNMRTlCUVZjN1NVRkRha01zVFVGQlRTeERRVUZETEZsQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEhRVUZGTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVODdVVUZEZEVRc1RVRkJUU3hEUVVGQkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRZaXhMUVVGTExHRkJRV0VzUlVGQlJTeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc05rSkJRVFpDTzFsQlF6VkVMRk5CUVZNc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5d3dRa0ZCTUVJc1JVRkJSVHRuUWtGRE1VTXNXVUZCUXl4RFFVRkRMREJDUVVFd1FpeEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNN1owSkJRM1JETEZsQlFVTXNRMEZCUXl3eVFrRkJNa0lzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRPMkZCUXpORExFTkJRVU1zUTBGQlF6dFJRVU5RTEVOQlFVTTdTVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMUlzUTBGQlF6dEJRVVZFTERKQ1FVRXlRaXhOUVVGVk8wbEJRMnBETEUxQlFVMHNRMEZCUXl4WlFVRkRMRU5CUVVNc2VVSkJRWGxDTEVWQlFVY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVThzUzBGRGNFUXNXVUZCUXl4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTzFGQlEzaENMRmxCUVVNc1EwRkJReXd3UWtGQk1FSXNSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hIUVVGRExFZEJRVWNzUTBGQlF6dFJRVU16UXl4WlFVRkRMRU5CUVVNc01rSkJRVEpDTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhIUVVGRkxFVkJRVVU3V1VGRE0wTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhaUVVGWkxFdEJRVWNzVTBGQlV5eERRVUZETEVkQlFVVXNZVUZCWVN4SFFVRkhMRU5CUVVNc1dVRkJXU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRemxHTzB0QlEwb3NRMEZCUXl4RFFVTk1MRU5CUVVNc1EwRkJRenRCUVVOUUxFTkJRVU03UVVGRlJEczdPenM3TzBkQlRVYzdRVUZEU0N4elFrRkJjMElzVDBGQll5eEZRVUZGTEV0QlFXRTdTVUZEYmtRc05rSkJRVFpDTzBsQlEzcENMRWxCUVVrc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF6dEpRVVZ5UWl4M1FrRkJkMElzU1VGQlZ6dFJRVU12UWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFppeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpPMkZCUTJRc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGSkxEUkNRVUUwUWp0aFFVTXpSQ3hKUVVGSkxFVkJRVVU3WVVGRFRpeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRPMkZCUXk5RExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTTdZVUZEV0N4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGUk8xbEJRMVlzU1VGQlNTeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUTNaQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVOcVFpeE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGREwwVXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OUZMRTFCUVUwc1EwRkJReXh6UTBGQmMwTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eFRRVUZUTEVOQlFVTXNSMEZCUXl4TlFVRk5MRWRCUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVjc1EwRkJReXhEUVVGRE8yRkJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0aFFVTldMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMW9zVFVGQlRTeERRVUZETEdGQlFXRXNSMEZCUnl4TlFVRk5MRWRCUVVjc1pVRkJaU3hEUVVGRE8wbEJRM0JFTEVOQlFVTTdTVUZGUkN4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5dzBRa0ZCTkVJc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dEpRVU4wUlN4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eHRRa0ZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzV1VGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE0wUXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vX2Rpc3Qvc3JjL3ZpZXcvTWFpbkNvbW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaHNsYXlvdXRfMSA9IHJlcXVpcmUoXCJoc2xheW91dFwiKTtcbmNvbnN0IGhzbGF5b3V0XzIgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5jb25zdCBEb2NTZXRzXzEgPSByZXF1aXJlKFwiLi4vRG9jU2V0c1wiKTtcbmNvbnN0IE1haW5Db21tZW50XzEgPSByZXF1aXJlKFwiLi9NYWluQ29tbWVudFwiKTtcbmNvbnN0IFBhcnRzXzEgPSByZXF1aXJlKFwiLi9QYXJ0c1wiKTtcbi8qKlxuICogQ3JlYXRlcyBEb2N1bWVudGF0aW9uIG9uIHRoZSBtYWluIHBhbmVsXG4gKi9cbmNsYXNzIE1haW5EZXRhaWwgZXh0ZW5kcyBoc2xheW91dF8yLkNvbnRhaW5lciB7XG4gICAgZ2V0Q29tcG9uZW50cyhub2RlKSB7XG4gICAgICAgIGxldCBsaWIsIGZpZWxkO1xuICAgICAgICBpZiAobm9kZS5hdHRycy5yb3V0ZSkge1xuICAgICAgICAgICAgbGliID0gbm9kZS5hdHRycy5yb3V0ZS5saWI7XG4gICAgICAgICAgICBmaWVsZCA9IG5vZGUuYXR0cnMucm91dGUuZmllbGQ7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5hdHRycy5yb3V0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGdldE92ZXJ2aWV3KGxpYiwgZmllbGQpIHx8IGl0ZW1Eb2MoRG9jU2V0c18xLkRvY1NldHMuZ2V0KGxpYiwgZmllbGQpIHx8ICcnKTtcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLW1haW4tZGV0YWlsJywgW3Jlc3VsdF0pO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFpbkRldGFpbCA9IE1haW5EZXRhaWw7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgcHJvamVjdCBvdmVydmlldyBpcyBiZWluZyByZXF1ZXN0ZWQgYW5kIHJldHVybnMgdGhlIG92ZXJ2aWV3LFxuICogb3IgYHVuZGVmaW5lZGAgaWYgbm90IGF2YWlsYWJsZVxuICogQHBhcmFtIG1kbCB0aGUgbW9kdWxlIG5hbWUgdG8gY2hlY2tcbiAqIEByZXR1cm4gVm5vZGUgY29udGFpbmluZyB0aGUgb3ZlcnZpZXcgZmlsZSwgb3IgYHVuZGVmaW5lZGBcbiAqL1xuZnVuY3Rpb24gZ2V0T3ZlcnZpZXcobGliLCBtZGwpIHtcbiAgICBpZiAobWRsID09PSAnMCcgfHwgbWRsID09PSAnJykge1xuICAgICAgICBtZGwgPSBEb2NTZXRzXzEuRG9jU2V0cy5nZXQobGliLCBgJHtsaWJ9Lm92ZXJ2aWV3YCk7XG4gICAgICAgIGlmIChtZGwpIHtcbiAgICAgICAgICAgIHJldHVybiBvdmVydmlld0RvYyhtZGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG4vKipcbiAqIENyZWF0ZXMgZG9jdW1lbnRhdGlvbiBmb3Igc3RhbmRhcmQgaXRlbXMgaW4gdGhlIG1haW4gcGFuZWxcbiAqIEBwYXJhbSBtZGwgdGhlIG1vZHVsZSB0byBkb2N1bWVudCBvbiB0aGUgbWFpbiBwYW5lbFxuICovXG5mdW5jdGlvbiBpdGVtRG9jKG1kbCkge1xuICAgIGNvbnN0IHNpZyA9IG1kbC5zaWduYXR1cmVzID8gbWRsLnNpZ25hdHVyZXNbMF0gOiBtZGw7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tZG9jJywgW1xuICAgICAgICB0aXRsZShtZGwsIHNpZyksXG4gICAgICAgIE1haW5Db21tZW50XzEuY29tbWVudExvbmcoc2lnKSxcbiAgICAgICAgbWVtYmVycyhzaWcsIHNpZylcbiAgICBdKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBkb2N1bWVudGF0aW9uIGZvciB0aGUgcHJvamVjdCBvdmVydmlldyBpbiB0aGUgbWFpbiBwYW5lbFxuICogQHBhcmFtIG1kbCB0aGUgbW9kdWxlIHRvIGRvY3VtZW50IG9uIHRoZSBtYWluIHBhbmVsXG4gKi9cbmZ1bmN0aW9uIG92ZXJ2aWV3RG9jKG1kbCkge1xuICAgIGNvbnN0IHNpZyA9IG1kbC5zaWduYXR1cmVzID8gbWRsLnNpZ25hdHVyZXNbMF0gOiBtZGw7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tZG9jJywgW1xuICAgICAgICBNYWluQ29tbWVudF8xLmNvbW1lbnRMb25nKHNpZyksXG4gICAgXSk7XG59XG4vKipcbiAqIHJlbmRlcnMgdGhlIHRpdGxlIG9mIHRoZSBtYWluIHBhbmVsXG4gKiBAcGFyYW0gbWRsIHRoZSBtb2R1bGUgdG8gZG9jdW1lbnRcbiAqIEBwYXJhbSBzaWcgYSBzaWduYXR1cmUgb2YgdGhlIG1vZHVsZSwgb3IgdGhlIHRoZSBtb2R1bGUgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIHRpdGxlKG1kbCwgc2lnKSB7XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tdGl0bGUnLCB7IGlkOiBQYXJ0c18xLm1ha2VJRCgndGl0bGUnLCBtZGwpIH0sIGl0ZW1EZXNjcmlwdG9yKG1kbCwgc2lnKSk7XG59XG5mdW5jdGlvbiBtZW1iZXJzKG1kbCwgc2lnKSB7XG4gICAgaWYgKG1kbC5ncm91cHMpIHtcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tbWVtYmVycycsIG1kbC5ncm91cHMubWFwKChnKSA9PiBtZW1iZXIoZywgbWRsLmxpYikpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWRsLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tbWVtYmVycycsIHBhcmFtZXRlcihtZGwucGFyYW1ldGVycywgbWRsLmxpYikpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tbWVtYmVycycpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcmFtZXRlcihnLCBsaWIpIHtcbiAgICBsZXQgY29udGVudCA9IGcubWFwKChjKSA9PiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLXBhcmFtZXRlcicsIHsgaWQ6IFBhcnRzXzEubWFrZUlEKCdwYXJhbWV0ZXInLCBjKSB9LCBpdGVtQ2hpbGQoYykpKTtcbiAgICBjb250ZW50LnVuc2hpZnQoaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1tZW1iZXItdGl0bGUnLCB7IGlkOiAncGFyYW1ldGVycycgfSwgaHNsYXlvdXRfMS5tKCdzcGFuJywgJ1BhcmFtZXRlcnMnKSkpO1xuICAgIHJldHVybiBoc2xheW91dF8xLm0oJy5ocy1pdGVtLW1lbWJlcicsIGNvbnRlbnQpO1xufVxuZnVuY3Rpb24gbWVtYmVyKGdyb3VwLCBsaWIpIHtcbiAgICBjb25zdCBncm91cE1hcCA9IHtcbiAgICAgICAgJ0V4dGVybmFsIG1vZHVsZXMnOiAnLmhzLWl0ZW0tZXh0ZXJuYWwtbW9kdWxlJyxcbiAgICAgICAgJ0NvbnN0cnVjdG9ycyc6ICcuaHMtaXRlbS1jb25zdHJ1Y3RvcicsXG4gICAgICAgICdDbGFzc2VzJzogJy5ocy1pdGVtLWNsYXNzJyxcbiAgICAgICAgJ0ludGVyZmFjZXMnOiAnLmhzLWl0ZW0taW50ZXJmYWNlJyxcbiAgICAgICAgJ0Z1bmN0aW9ucyc6ICcuaHMtaXRlbS1mdW5jdGlvbicsXG4gICAgICAgICdNZXRob2RzJzogJy5ocy1pdGVtLW1ldGhvZCcsXG4gICAgICAgICdWYXJpYWJsZXMnOiAnLmhzLWl0ZW0tdmFyaWFibGUnLFxuICAgICAgICAnT2JqZWN0IGxpdGVyYWxzJzogJy5ocy1pdGVtLW9iamVjdC1saXRlcmFsJyxcbiAgICAgICAgJ1Byb3BlcnRpZXMnOiAnLmhzLWl0ZW0tcHJvcGVydHknLFxuICAgICAgICAnVHlwZSBhbGlhc2VzJzogJy5ocy1pdGVtLWFsaWFzJyxcbiAgICB9O1xuICAgIGNvbnN0IGZuID0gZ3JvdXBNYXBbZ3JvdXAudGl0bGVdIHx8ICcuaHMtaXRlbS11bmtub3duLW1lbWJlcic7XG4gICAgbGV0IGNvbnRlbnQgPSBncm91cC5jaGlsZHJlbi5tYXAoKGMpID0+IHtcbiAgICAgICAgbGV0IG1kbCA9IERvY1NldHNfMS5Eb2NTZXRzLmdldChsaWIsIGMpO1xuICAgICAgICByZXR1cm4gaHNsYXlvdXRfMS5tKGZuLCB7IGlkOiBQYXJ0c18xLm1ha2VJRChncm91cC50aXRsZSwgbWRsKSB9LCBpdGVtQ2hpbGQobWRsKSk7XG4gICAgfSk7XG4gICAgY29udGVudC51bnNoaWZ0KGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tbWVtYmVyLXRpdGxlJywgeyBpZDogZ3JvdXAudGl0bGUudG9Mb3dlckNhc2UoKSB9LCBoc2xheW91dF8xLm0oJ3NwYW4nLCBncm91cC50aXRsZSkpKTtcbiAgICByZXR1cm4gaHNsYXlvdXRfMS5tKCcuaHMtaXRlbS1tZW1iZXInLCBjb250ZW50KTtcbn1cbmZ1bmN0aW9uIGl0ZW1EZXNjcmlwdG9yKG1kbCwgc2lnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLWl0ZW0tZGVzYycsIFtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgZmxhZ3MobWRsLmZsYWdzLCBbJ2V4cG9ydCddKSxcbiAgICAgICAgICAgIFBhcnRzXzEuZmxhZ3MobWRsLmZsYWdzLCBbXSksXG4gICAgICAgICAgICBQYXJ0c18xLmtpbmRTdHJpbmcobWRsKSxcbiAgICAgICAgICAgIFBhcnRzXzEuaXRlbUxvbmdOYW1lKG1kbCwgbWRsKSxcbiAgICAgICAgICAgIFBhcnRzXzEuc2lnbmF0dXJlKHNpZywgbWRsLmxpYiksXG4gICAgICAgICAgICBQYXJ0c18xLnR5cGUoc2lnLnR5cGUsIG1kbC5saWIpLFxuICAgICAgICAgICAgUGFydHNfMS5leHRlbnNpb25PZihtZGwpLFxuICAgICAgICAgICAgUGFydHNfMS5zb3VyY2VMaW5rKG1kbClcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZGwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGl0ZW1DaGlsZChtZGwsIHNpZyA9IG1kbCkge1xuICAgIHJldHVybiBtZGwuc2lnbmF0dXJlcyA/XG4gICAgICAgIG1kbC5zaWduYXR1cmVzLm1hcCgocykgPT4gaHNsYXlvdXRfMS5tKCcnLCBbaXRlbURlc2NyaXB0b3IobWRsLCBzKSwgTWFpbkNvbW1lbnRfMS5jb21tZW50KHMpXSkpIDpcbiAgICAgICAgW2l0ZW1EZXNjcmlwdG9yKG1kbCwgc2lnKSwgTWFpbkNvbW1lbnRfMS5jb21tZW50KHNpZyldO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFdGcGJrUmxkR0ZwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5MmFXVjNMMDFoYVc1RVpYUmhhV3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3gxUTBGQmQwTTdRVUZEZUVNc2RVTkJRWGRETzBGQlEzaERMSGREUVVFd1F6dEJRVU14UXl3clEwRkJjMFE3UVVGRGRFUXNiVU5CUTNWRE8wRkJSM1pET3p0SFFVVkhPMEZCUTBnc1owSkJRWGRDTEZOQlFWRXNiMEpCUVZNN1NVRkRja01zWVVGQllTeERRVUZETEVsQlFWVTdVVUZEY0VJc1NVRkJTU3hIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETzFGQlEyWXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU03V1VGRE0wSXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTnVReXhEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJSVGRDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRmRCUVZjc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVsQlFVa3NUMEZCVHl4RFFVRkRMR2xDUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU12UlN4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UXl4RFFVRkRPME5CUTBvN1FVRmFSQ3huUTBGWlF6dEJRVVZFT3pzN096dEhRVXRITzBGQlEwZ3NjVUpCUVhGQ0xFZEJRVlVzUlVGQlJTeEhRVUZWTzBsQlEzWkRMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NSMEZCUnl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VSXNSMEZCUnl4SFFVRkhMR2xDUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRE1VTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5PTEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE5VSXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkRSQ3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETzBGQlEzSkNMRU5CUVVNN1FVRkZSRHM3TzBkQlIwYzdRVUZEU0N4cFFrRkJhVUlzUjBGQlR6dEpRVU53UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVlVGQlZTeEhRVUZGTEVkQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzBsQlEzQkVMRTFCUVUwc1EwRkJReXhaUVVGRExFTkJRVU1zWTBGQll5eEZRVUZGTzFGQlEzSkNMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzFGQlEyWXNlVUpCUVZjc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRGFFSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03UzBGRGNFSXNRMEZCUXl4RFFVRkRPMEZCUTFBc1EwRkJRenRCUVVWRU96czdSMEZIUnp0QlFVTklMSEZDUVVGeFFpeEhRVUZQTzBsQlEzaENMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eFZRVUZWTEVkQlFVVXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdTVUZEY0VRc1RVRkJUU3hEUVVGRExGbEJRVU1zUTBGQlF5eGpRVUZqTEVWQlFVVTdVVUZEY2tJc2VVSkJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTTdTMEZEYmtJc1EwRkJReXhEUVVGRE8wRkJRMUFzUTBGQlF6dEJRVVZFT3pzN08wZEJTVWM3UVVGRFNDeGxRVUZsTEVkQlFVOHNSVUZCUlN4SFFVRlBPMGxCUXpOQ0xFMUJRVTBzUTBGQlF5eFpRVUZETEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUlVGQlF5eEZRVUZGTEVWQlFVVXNZMEZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlF5eEZRVUZGTEdOQlFXTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU55Uml4RFFVRkRPMEZCUlVRc2FVSkJRV2xDTEVkQlFVOHNSVUZCUlN4SFFVRlBPMGxCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMklzVFVGQlRTeERRVUZETEZsQlFVTXNRMEZCUXl4clFrRkJhMElzUlVGQlJTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVXNzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVZc1EwRkJRenRKUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU40UWl4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0pGTEVOQlFVTTdTVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOS0xFMUJRVTBzUTBGQlF5eFpRVUZETEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dEpRVU5xUXl4RFFVRkRPMEZCUTB3c1EwRkJRenRCUVVWRUxHMUNRVUZ0UWl4RFFVRlBMRVZCUVVVc1IwRkJWVHRKUVVOc1F5eEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlN5eExRVUZMTEZsQlFVTXNRMEZCUXl4dlFrRkJiMElzUlVGQlJTeEZRVUZETEVWQlFVVXNSVUZCUXl4alFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZETEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU51Unl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVU1zUTBGQlF5eDFRa0ZCZFVJc1JVRkJSU3hGUVVGRExFVkJRVVVzUlVGQlF5eFpRVUZaTEVWQlFVTXNSVUZCUlN4WlFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRSaXhOUVVGTkxFTkJRVU1zV1VGQlF5eERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlEzcERMRU5CUVVNN1FVRkZSQ3huUWtGQlowSXNTMEZCVXl4RlFVRkZMRWRCUVZVN1NVRkRha01zVFVGQlRTeFJRVUZSTEVkQlFVYzdVVUZEWWl4clFrRkJhMElzUlVGQlJTd3dRa0ZCTUVJN1VVRkRPVU1zWTBGQll5eEZRVUZOTEhOQ1FVRnpRanRSUVVNeFF5eFRRVUZUTEVWQlFWY3NaMEpCUVdkQ08xRkJRM0JETEZsQlFWa3NSVUZCVVN4dlFrRkJiMEk3VVVGRGVFTXNWMEZCVnl4RlFVRlRMRzFDUVVGdFFqdFJRVU4yUXl4VFFVRlRMRVZCUVZjc2FVSkJRV2xDTzFGQlEzSkRMRmRCUVZjc1JVRkJVeXh0UWtGQmJVSTdVVUZEZGtNc2FVSkJRV2xDTEVWQlFVY3NlVUpCUVhsQ08xRkJRemRETEZsQlFWa3NSVUZCVVN4dFFrRkJiVUk3VVVGRGRrTXNZMEZCWXl4RlFVRk5MR2RDUVVGblFqdExRVU4yUXl4RFFVRkRPMGxCUTBZc1RVRkJUU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3g1UWtGQmVVSXNRMEZCUXp0SlFVTTVSQ3hKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVkU3VVVGRGJFTXNTVUZCU1N4SFFVRkhMRWRCUVVjc2FVSkJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxDTEUxQlFVMHNRMEZCUXl4WlFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVU1zUlVGQlJTeEZRVUZETEdOQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZETEVWQlFVVXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFVXNRMEZCUXl4RFFVTktMRU5CUVVNN1NVRkZSaXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFVTXNRMEZCUXl4MVFrRkJkVUlzUlVGQlJTeEZRVUZETEVWQlFVVXNSVUZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZETEVWQlFVVXNXVUZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNCSExFMUJRVTBzUTBGQlF5eFpRVUZETEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdRVUZEZWtNc1EwRkJRenRCUVVWRUxIZENRVUYzUWl4SFFVRlBMRVZCUVVVc1IwRkJUenRKUVVOd1F5eEpRVUZKTEVOQlFVTTdVVUZCUXl4TlFVRk5MRU5CUVVNc1dVRkJReXhEUVVGRExHVkJRV1VzUlVGQlJUdFpRVU53UXl3eVEwRkJNa003V1VGREwwSXNZVUZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlEzQkNMR3RDUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETzFsQlEyWXNiMEpCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzFsQlEzUkNMR2xDUVVGVExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNN1dVRkRka0lzV1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF6dFpRVU40UWl4dFFrRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF6dFpRVU5vUWl4clFrRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF6dFRRVU5zUWl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJRMFFzUzBGQlN5eERRVUZCTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUVVNc1EwRkJRenRCUVVOc1JDeERRVUZETzBGQlJVUXNiVUpCUVcxQ0xFZEJRVThzUlVGQlJTeEhRVUZITEVkQlFVTXNSMEZCUnp0SlFVTXZRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVTdVVUZEYWtJc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkxMRXRCUVVzc1dVRkJReXhEUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzY1VKQlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrVXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEhGQ1FVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUkN4RFFVRkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9fZGlzdC9zcmMvdmlldy9NYWluRGV0YWlsLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbW1lbnQgc2VjdGlvbnMgbWF5IGNvbnRhaW4gY29kZSBleGFtcGxlcyB0aGF0IGFyZSBwbGFjZWQgd2l0aGluICZsdDtleGFtcGxlJmd0OyB0YWdzLlxuICpcbiAqIGBoc2RvY2Agd2lsbCBpbnRlcnByZXQgYW5kIGV4ZWN1dGUgSmF2YXNjcmlwdCBpbnN0cnVjdGlvbnMgd2l0aGluIGEgJmx0O2BmaWxlIG5hbWU9J3NjcmlwdC5qcydgJmd0OyB0YWcuXG4gKiBhbmQgc3R5bGVzaGVldCBpbnN0cnVjdGlvbnMgd2l0aCBhICZsdDtgZmlsZSBuYW1lPSdzdHlsZS5jc3MnYCZndDsgdGFnLCBhcyBpbiBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqIDxjb2RlPlxuICogICAgICZsdDtleGFtcGxlJmd0O1xuICogICAgIDxmaWxlIG5hbWU9J3NjcmlwdC5qcyc+XG4gKiAgICAgbS5tb3VudChyb290LCB7XG4gKiAgICAgICAgIHZpZXc6KCkgPT4gbShsYXlvdXQuQ29udGFpbmVyLCB7IGNvbHVtbnM6W10sXG4gKiAgICAgICAgICAgICBjb250ZW50OlsnZmlyc3QgbGluZScsJ3NlY29uZCBsaW5lJyldXG4gKiAgICAgICAgIH0pXG4gKiAgICAgfSk7XG4gKiAgICAgPC9maWxlPlxuICpcbiAqICAgICA8ZmlsZSBuYW1lPSdzdHlsZS5jc3MnPlxuICogICAgIC5oc0xlYWYge1xuICogICAgICAgICBjb2xvcjogYmx1ZTtcbiAqICAgICB9XG4gKiAgICAgPC9maWxlPlxuICogICAgICZsdDsvZXhhbXBsZSZndDtcbiAqIDwvY29kZT5cbiAqXG4gKiAjIyMgU2NyaXB0c1xuICogU2NyaXB0cyBhcmUgZXhwZWN0ZWQgdG8gbW91bnQgYSBgbWl0aHJpbCBWbm9kZWAgb24gYSByb290IERPTSBlbGVtZW50IHVzaW5nIGBtLm1vdW50YCBvciBgbS5yZW5kZXJgLlxuICogRG8gbm90IHVzZSBgbS5yb3V0ZWAgYXMgb25seSBhIHNpbmdsZSBjYWxsIGlzIGFsbG93ZWQgcGVyIHdlYiBhcHAgYW5kIHRoYXQgaXMgdXNlZCB0byBtYW5hZ2UgdGhlXG4gKiBtYWluIGhzZG9jIHNpdGUgbWVudSBhbmQgbmF2aWdhdGlvbi5cbiAqXG4gKiBoc2RvYyBpbnRlcm5hbGx5IHVzZXMgdGhlIFtnbG9iYWwgYEZ1bmN0aW9uYCBvYmplY3RdW0Z1bmN0aW9uXSB0byBwYXJzZSBhbmQgZXhlY3V0ZSB0aGUgc2NyaXB0LlxuICogVGh1cyB0aGUgc2NyaXB0IGhhcyBhY2Nlc3Mgb25seSB0byBnbG9iYWwgb2JqZWN0cyBhbmQgdG8gb2JqZWN0cyBwcm92aWRlZFxuICogYXMgcGFyYW1ldGVycyBpbiB0aGUgYEZ1bmN0aW9uYCBjb25zdHJ1Y3Rvci4gaHNkb2MgY3VycmVudGx5IHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgbmFtZXNwYWNlcyBhcyBwYXJhbWV0ZXJzXG4gKiBmb3IgdXNlIGluIHRoZSBzY3JpcHRzOlxuICogLSAqKm0qKjogdGhlIGBNaXRocmlsYCBtIGZ1bmN0aW9uXG4gKiAtICoqbGF5b3V0Kio6IHRoZSB7QGxpbmsgaHNMYXlvdXQ6IGBoc0xheW91dGB9IG5hbWVzcGFjZSwgcHJvdmlkaW5nIGZ1bmN0aW9ucyB0byBsYXlvdXQgdGhlIGJyb3dzZXIgd2luZG93LlxuICogLSAqKndpZGdldCoqOiB0aGUge0BsaW5rIGhzR3JhcGg6IGBoc0dyYXBoYH0gbmFtZXNwYWNlLCBwcm92aWRpbmcgdmFyaW91cyBVSSB3aWRnZXQgZnVuY3Rpb25zLlxuICogLSBhZGRpdGlvbmFsbHksIHRoZSBwYXJhbWV0ZXIgKipyb290KiogaXMgcHJvdmlkZWQgYXMgdGhlIERPTSBlbGVtZW50IHRvIG1vdW50IHRvLlxuICpcbiAqIFtGdW5jdGlvbl06aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb25cbiAqXG4gKiAjIyMgU3R5bGVzXG4gKiBTdHlsZXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHNhbmRib3hlZCBzbyB0aGV5IGFyZSB2YWxpZCBvbmx5IHdpdGhpbiB0aGUgZW5jbG9zaW5nIGV4YW1wbGUgdGFncy5cbiAqIFRoaXMgYWxsb3dzIG11bHRpcGxlIGV4YW1wbGVzIHRvIGNvLWV4aXN0IG9uIHRoZSBzYW1lIHBhZ2UuXG4gKlxuICogPGV4YW1wbGU+XG4gKiA8ZmlsZSBuYW1lPSdzY3JpcHQuanMnPlxuICogbS5tb3VudChyb290LCB7XG4gKiAgICAgdmlldzooKSA9PiBtKGxheW91dC5Db250YWluZXIsIHtcbiAqICAgICAgICAgY3NzOicubXlFeGFtcGxlJyxcbiAqICAgICAgICAgY29sdW1uczpbXSxcbiAqICAgICAgICAgY29udGVudDpbXG4gKiAgICAgICAgICAgICAndGhpcmQgbGluZScsXG4gKiAgICAgICAgICAgICAnZm91cnRoIGxpbmUnXG4gKiAgICAgICAgIF1cbiAqICAgICB9KVxuICogfSk7XG4gKiA8L2ZpbGU+XG4gKiA8ZmlsZSBuYW1lPSdzdHlsZS5jc3MnPlxuICogLmhzLWxheW91dCB7XG4gKiAgICAgbWFyZ2luOjA7XG4gKiB9XG4gKiAubXlFeGFtcGxlPi5ocy1sYXlvdXQge1xuICogICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICogfVxuICogLm15RXhhbXBsZSB7XG4gKiAgICAgY29sb3I6IHJlZDtcbiAqICAgICBmb250LXdlaWdodDpib2xkO1xuICogfVxuICogPC9maWxlPlxuICogPC9leGFtcGxlPlxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiAqL1xuY29uc3QgaHNsYXlvdXRfMSA9IHJlcXVpcmUoXCJoc2xheW91dFwiKTtcbmNvbnN0IGhzd2lkZ2V0XzEgPSByZXF1aXJlKFwiaHN3aWRnZXRcIik7XG5jb25zdCBoc2xheW91dF8yID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuY29uc3QgaHN1dGlsXzEgPSByZXF1aXJlKFwiaHN1dGlsXCIpO1xuY29uc3QgbGF5b3V0ID0gcmVxdWlyZShcImhzbGF5b3V0XCIpO1xuY29uc3Qgd2lkZ2V0ID0gcmVxdWlyZShcImhzd2lkZ2V0XCIpO1xuLyoqXG4gKiBNYXAgY29udGFpbmluZyB2YXJpb3VzIGV4YW1wa2xlIGNvbmZpZ3VyYXRpb25zXG4gKi9cbmNvbnN0IGdJbml0aWFsaXplZCA9IHt9O1xuLyoqXG4gKiBjcmVhdGVzIHRoZSBleGFtcGxlIGNvbmZpZ3VyYXRpb24sIGdlbmVyYXRlcyB0aGUgRE9NIGhvb2ssIGFuZCBzZXRzIHVwIHRoZSBleGFtcGxlIGV4ZWN1dGlvbi5cbiAqIGBleGFtcGxlYCB0YWtlcyBhIGNvbnRleHQgbWFwIG9mIHRoZSBmb3JtIGB7IG5hbWU6bW9kdWxlLCAuLi59YCBhbmQgcmV0dXJuIGEgZnVuY3Rpb25cbiAqIHRoYXQgY2FuIGJlIHVzZWQgaW4gY2FsbHMgdG8gYHN0cmluZy5yZXBsYWNlYGFzIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqIDxjb2RlPjxwcmU+XG4gKiBpbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcImxheW91dFwiO1xuICogdGV4dCA9IHRleHQucmVwbGFjZSgvPGV4YW1wbGU+KFtcXFNcXHNdKj8pPFxcL2V4YW1wbGU+L2dpLCBleGFtcGxlKHtsYXlvdXQ6bGF5b3V0fSkpO1xuICogPC9wcmU+PC9jb2RlPlxuICogVGhlIG1vZHVsZXMgYG1gLCBgaHNMYXlvdXRgLCBhbmQgYGhzR3JhcGhgIHdpbGwgYmUgYWRkZWQgYnkgZGVmYXVsdCBhc1xuICogYCB7IG06IG0sIGxheW91dDogbGF5b3V0LCB3aWRnZXQ6IHdpZGdldCB9IGBcbiAqIEBwYXJhbSBleGFtcGxlIHRoZSBleGFtcGxlIHN0cmluZyBleHRyYWN0ZWQgZnJvbSB0aGUgY29tbWVudCwgaW5jbHVkaW5nIHRoZSBgPGV4YW1wbGU+YCB0YWdzLlxuICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIGV4YW1wbGUgc2NyaXB0IHNob3VsZCBiZSBydW4sIGV4cHJlc3NlZCBhcyBgbmFtZWA6YG5hbWVzcGFjZWAgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIGV4YW1wbGUoY29udGV4dCkge1xuICAgIGNvbnRleHQubSA9IGhzbGF5b3V0XzEubTtcbiAgICBjb250ZXh0LmxheW91dCA9IGxheW91dDtcbiAgICBjb250ZXh0LndpZGdldCA9IHdpZGdldDtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNvbnRleHQpO1xuICAgIGNvbnN0IG1vZHVsZXMgPSBuYW1lcy5tYXAobiA9PiBjb250ZXh0W25dKTtcbiAgICByZXR1cm4gKGV4YW1wbGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBoc3V0aWxfMS5zaG9ydENoZWNrU3VtKGV4YW1wbGUpO1xuICAgICAgICBsZXQgSURzID0gZ0luaXRpYWxpemVkW2luc3RhbmNlXTtcbiAgICAgICAgaWYgKCFJRHMpIHtcbiAgICAgICAgICAgIElEcyA9IGdJbml0aWFsaXplZFtpbnN0YW5jZV0gPSBpbml0RGVzYygoKSA9PiBhZGRFeGFtcGxlKElEcykudGhlbihleGVjdXRlU2NyaXB0KSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IG5ldyBGdW5jdGlvbigncm9vdCcsIC4uLm5hbWVzLCBnZXRDb21tZW50RGVzY3JpcHRvcihJRHMsIGV4YW1wbGUpKTtcbiAgICAgICAgICAgICAgICBJRHMuZXhlY3V0ZVNjcmlwdCA9IChyb290KSA9PiBzY3JpcHQocm9vdCwgLi4ubW9kdWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBzY3JpcHQ6JyArIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSURzLm1pZCkpIHtcbiAgICAgICAgICAgIGFkZEV4YW1wbGUoSURzKS50aGVuKGhzdXRpbF8xLmRlbGF5KDEpKS50aGVuKGV4ZWN1dGVTY3JpcHQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IElEcy5wYWdlc1snY3NzJ107XG4gICAgICAgIC8vIHByZWZpeCBjc3Mgc2VsZWN0b3JzIHdpdGggSUQgb2YgbWFpbiBleGVjdXRpb24gYXJlYSB0byBzYW5kYm94IHRoZSBzY29wZVxuICAgICAgICBjb25zdCBzdHlsZSA9IChzdHlsZXMgPT09IHVuZGVmaW5lZCkgPyAnJyA6IHN0eWxlcy5yZXBsYWNlKC8oXnx9KVxccyo/KFxcUyo/KVxccyo/ey9naSwgKHgsIC4uLmFyZ3MpID0+IHgucmVwbGFjZShhcmdzWzFdLCBgIyR7SURzLm1pZH0gJHthcmdzWzFdfWApKTtcbiAgICAgICAgcmV0dXJuIGA8c3R5bGU+JHtzdHlsZX08L3N0eWxlPjxleGFtcGxlIGlkPSR7SURzLmVpZH0gY2xhc3M9XCJocy1sYXlvdXQtZnJhbWVcIj48L2V4YW1wbGU+YDtcbiAgICB9O1xufVxuZXhwb3J0cy5leGFtcGxlID0gZXhhbXBsZTtcbi8qKlxuICogY3JlYXRlcyB0aGUgZXhhbXBsZSBjb25maWd1cmF0aW9uXG4gKi9cbmZ1bmN0aW9uIGluaXREZXNjKGZuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWlkOiBnZXROZXdJRCgpLFxuICAgICAgICBtaWQ6IGdldE5ld0lEKCksXG4gICAgICAgIGRlc2M6IHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogJ2pzJyxcbiAgICAgICAgICAgIHNlbGVjdDogZm4sXG4gICAgICAgICAgICBzaXplOiBbXCI1MHB4XCJdXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VzOiB7fVxuICAgIH07XG59XG4vKiogY3JlYXRlcyBhIG5ldyByYW5kb20gZXhhbXBsZSBJRCBmb3IgZWFjaCBjYWxsLiAqL1xuZnVuY3Rpb24gZ2V0TmV3SUQoKSB7XG4gICAgcmV0dXJuICdocycgKyBNYXRoLmZsb29yKDEwMDAwMDAgKiBNYXRoLnJhbmRvbSgpKTtcbn1cbi8qKiBhc3luY2hyb25vdXNseSBhZGRzIHRoZSBleGFtcGxlIHN0cnVjdHVyZSBvbiB0aGUgcGFnZSBhbmQgdGhlbiBleGVjdXRlZCB0aGUgc2NyaXB0LiAqL1xuZnVuY3Rpb24gYWRkRXhhbXBsZShJRHMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKElEcykudGhlbihhZGRFeGFtcGxlU3RydWN0dXJlKTtcbn1cbi8qKlxuICogcmV0dXJucyBhIHBhcmFtZXRlcmxlc3MgZnVuY3Rpb24gdGhhdCBjYW4gYmUgY2FsbGVkIHZpYSBzZXRUaW1lb3V0IHRvXG4gKiBtb3VudCB0aGUgbWVudSBhbmQgZXhlY3V0ZSB0aGUgc2NyaXB0IGZ1bmN0aW9uIHByb3ZpZGVkIGluIGBJRHNgLlxuICogQHBhcmFtIElEcyB0aGUgYENvbW1lbnREZXNjcmlwdG9yYCB0byBleGVjdXRlIG9uLlxuICovXG5mdW5jdGlvbiBhZGRFeGFtcGxlU3RydWN0dXJlKElEcykge1xuICAgIGNvbnN0IGl0ZW0gPSBJRHMuZGVzYy5zZWxlY3RlZEl0ZW07XG4gICAgY29uc3Qgc291cmNlID0gaHNsYXlvdXRfMS5tLnRydXN0KGA8Y29kZT48cHJlPiR7SURzLnBhZ2VzW2l0ZW1dfTwvcHJlPjwvY29kZT5gKTtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSURzLmVpZCk7XG4gICAgaHNsYXlvdXRfMS5tLm1vdW50KHJvb3QsIHsgdmlldzogKCkgPT4gaHNsYXlvdXRfMS5tKGhzbGF5b3V0XzIuQ29udGFpbmVyLCB7XG4gICAgICAgICAgICBjb2x1bW5zOiBbXCI1MCVcIl0sXG4gICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgaHNsYXlvdXRfMS5tKGhzbGF5b3V0XzIuQ29udGFpbmVyLCB7IGNvbnRlbnQ6IGhzbGF5b3V0XzEubSgnLmhzLWxheW91dCAuaHMtZXhlY3V0aW9uJywgeyBpZDogSURzLm1pZCB9KSB9KSxcbiAgICAgICAgICAgICAgICBoc2xheW91dF8xLm0oaHNsYXlvdXRfMi5Db250YWluZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogW1wiMzBweFwiLCBcImZpbGxcIl0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhzbGF5b3V0XzEubShoc3dpZGdldF8xLk1lbnUsIHsgZGVzYzogSURzLmRlc2MgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBoc2xheW91dF8xLm0oaHNsYXlvdXRfMi5Db250YWluZXIsIHsgY29udGVudDogaHNsYXlvdXRfMS5tKCcuaHMtbGF5b3V0IC5ocy1zb3VyY2UnLCBzb3VyY2UpIH0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiBJRHM7XG59XG4vKipcbiAqIGV4ZWN1dGUgdGhlIHByb3ZpZGVkIHNjcmlwdFxuICogQHBhcmFtIElEcyBwcm92aWRlcyB0aGUgY29udGV4dCBpbiB3aGljaCB0aGUgc2NyaXB0IGlzIGV4Y2V1dGVkL1xuICovXG5mdW5jdGlvbiBleGVjdXRlU2NyaXB0KElEcykge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChJRHMubWlkKTtcbiAgICBjb25zb2xlLmxvZyhyb290KTtcbiAgICB0cnkge1xuICAgICAgICBJRHMuZXhlY3V0ZVNjcmlwdChyb290KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJleGVjdXRpbmcgc2NyaXB0OiBcIiArIGUpO1xuICAgIH1cbiAgICBoc2xheW91dF8xLm0ucmVkcmF3KCk7XG4gICAgcmV0dXJuIElEcztcbn1cbi8qKlxuICogRmlsbHMgaW4gYWxsIGZpZWxkcyBvZiB0aGUgQ29tbWVudERlc2NyaXB0b3IgcHJvdmlkZWQgYXMgYElEc2AuXG4gKiBAcGFyYW0gSURzIHRoZSBDb21tZW50RGVzY3JpcHRvciB0byBjb21wbGV0ZVxuICogQHBhcmFtIGV4YW1wbGUgdGhlIGV4YW1wbGUgc3RyaW5nLCBpbmNsdWRpbmcgPGV4YW1wbGU+IHRhZ1xuICogQHJldHVybiB0aGUgc2NyaXB0IHRvIGV4ZWN1dGUsIGFzIGEgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldENvbW1lbnREZXNjcmlwdG9yKElEcywgZXhhbXBsZSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBleGFtcGxlLnJlcGxhY2UoLzxmaWxlW1xcc10qbmFtZT1bXFxTXSo/XFwuKFtcXHNcXFNdKj8pWyd8XCJdPihbXFxTXFxzXSo/KTxcXC9maWxlPi9naSwgZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYXJnc1syXS50cmltKCk7XG4gICAgICAgIElEcy5kZXNjLml0ZW1zLnB1c2goYXJnc1sxXSk7XG4gICAgICAgIElEcy5wYWdlc1thcmdzWzFdXSA9IGNvbnRlbnQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIElEcy5wYWdlc1snanMnXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXRnBia1Y0WVcxd2JHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5emNtTXZkbWxsZHk5TllXbHVSWGhoYlhCc1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMGRCY1VWSE96czdRVUZGU0N4TlFVRk5PMEZCUTA0c2RVTkJRV2RFTzBGQlEyaEVMSFZEUVVGblJEdEJRVU5vUkN4MVEwRkJaMFE3UVVGRGFFUXNiVU5CUVRoRE8wRkJRemxETEcxRFFVRm5SRHRCUVVOb1JDeHRRMEZCWjBRN1FVRlhhRVE3TzBkQlJVYzdRVUZEU0N4TlFVRk5MRmxCUVZrc1IwRkJLMElzUlVGQlJTeERRVUZETzBGQlJYQkVPenM3T3pzN096czdPenM3UjBGWlJ6dEJRVU5JTEdsQ1FVRjNRaXhQUVVGWE8wbEJReTlDTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVZFc1dVRkJReXhEUVVGRE8wbEJRMjVDTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8wbEJRM2hDTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8wbEJRM2hDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEYmtNc1RVRkJUU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBNc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQll6dFJRVU5zUWl4TlFVRk5MRkZCUVZFc1IwRkJSeXh6UWtGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUjBGQlJ5eEhRVUZITEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOcVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVDeEhRVUZITEVkQlFVY3NXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVSaXhKUVVGSkxFTkJRVU03WjBKQlEwUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RlFVRkZMRzlDUVVGdlFpeERRVUZETEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5zUml4SFFVRkhMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zU1VGQlVTeExRVUZMTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU12UkN4RFFVRkRPMWxCUTBRc1MwRkJTeXhEUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEd0Q1FVRnJRaXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlFVTXNRMEZCUXp0UlFVTnlSQ3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRGRrUXNRMEZCUXp0UlFVTkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZhRU1zTWtWQlFUSkZPMUZCUXpORkxFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNUVUZCVFN4TFFVRkhMRk5CUVZNc1EwRkJReXhIUVVGRkxFVkJRVVVzUjBGQlJTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTEVOQlFVTXNRMEZCVVN4RlFVRkZMRWRCUVVjc1NVRkJWU3hMUVVOeVJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZETDBNc1EwRkJRenRSUVVOR0xFMUJRVTBzUTBGQlF5eFZRVUZWTEV0QlFVc3NkVUpCUVhWQ0xFZEJRVWNzUTBGQlF5eEhRVUZITEhGRFFVRnhReXhEUVVGRE8wbEJRemxHTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRTFRa1FzTUVKQk5FSkRPMEZCUlVRN08wZEJSVWM3UVVGRFNDeHJRa0ZCYTBJc1JVRkJUVHRKUVVOd1FpeE5RVUZOTEVOQlFVTTdVVUZEU0N4SFFVRkhMRVZCUVUwc1VVRkJVU3hGUVVGRk8xRkJRMjVDTEVkQlFVY3NSVUZCVFN4UlFVRlJMRVZCUVVVN1VVRkRia0lzU1VGQlNTeEZRVUZYTzFsQlExZ3NTMEZCU3l4RlFVRlhMRVZCUVVVN1dVRkRiRUlzV1VGQldTeEZRVUZGTEVsQlFVazdXVUZEYkVJc1RVRkJUU3hGUVVGRkxFVkJRVVU3V1VGRFZpeEpRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNN1UwRkRha0k3VVVGRFJDeExRVUZMTEVWQlFVTXNSVUZCUlR0TFFVTllMRU5CUVVNN1FVRkRUaXhEUVVGRE8wRkJSVVFzY1VSQlFYRkVPMEZCUTNKRU8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUjBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVOc1JDeERRVUZETzBGQlJVUXNNRVpCUVRCR08wRkJRekZHTEc5Q1FVRnZRaXhIUVVGeFFqdEpRVU55UXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0QlFVTXhSQ3hEUVVGRE8wRkJSVVE3T3pzN1IwRkpSenRCUVVOSUxEWkNRVUUyUWl4SFFVRnhRanRKUVVNNVF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dEpRVU51UXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhaUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEdOQlFXTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdTVUZEY2tVc1RVRkJUU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRk9VTXNXVUZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4WlFVRkRMRU5CUVVNc2IwSkJRVk1zUlVGQlJUdFpRVU53UXl4UFFVRlBMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU03V1VGRGFFSXNUMEZCVHl4RlFVRkZPMmRDUVVOTUxGbEJRVU1zUTBGQlF5eHZRa0ZCVXl4RlFVRkZMRVZCUVVNc1QwRkJUeXhGUVVGRkxGbEJRVU1zUTBGQlF5d3dRa0ZCTUVJc1JVRkJSU3hGUVVGRExFVkJRVVVzUlVGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkRMRU5CUVVNc1JVRkJReXhEUVVGRE8yZENRVU53UlN4WlFVRkRMRU5CUVVNc2IwSkJRVk1zUlVGQlJUdHZRa0ZEVkN4SlFVRkpMRVZCUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETzI5Q1FVTnlRaXhQUVVGUExFVkJRVU03ZDBKQlEwb3NXVUZCUXl4RFFVRkRMR1ZCUVVrc1JVRkJSU3hGUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkRMRU5CUVVNN2QwSkJRM3BDTEZsQlFVTXNRMEZCUXl4dlFrRkJVeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZsQlFVTXNRMEZCUXl4MVFrRkJkVUlzUlVGQlJTeE5RVUZOTEVOQlFVTXNSVUZCUXl4RFFVRkRPM0ZDUVVNdlJEdHBRa0ZEU2l4RFFVRkRPMkZCUTB3N1UwRkJReXhEUVVGRE8wdEJRMDRzUTBGQlF5eERRVUZETzBsQlEwZ3NUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJRenRCUVVObUxFTkJRVU03UVVGRlJEczdPMGRCUjBjN1FVRkRTQ3gxUWtGQmRVSXNSMEZCY1VJN1NVRkRlRU1zVFVGQlRTeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEYkVRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTmtMRWxCUVVrc1EwRkJRenRSUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkJReXhEUVVGRE8wbEJRMmhETEV0QlFVc3NRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRzlDUVVGdlFpeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUVVNc1EwRkJRenRKUVVOdVJDeFpRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETzBGQlEyWXNRMEZCUXp0QlFVVkVPenM3T3p0SFFVdEhPMEZCUTBnc09FSkJRVGhDTEVkQlFYRkNMRVZCUVVVc1QwRkJZenRKUVVNdlJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRhRUlzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl3MlJFRkJOa1FzUlVGQlJTeFZRVUZUTEVsQlFWYzdVVUZETDBZc1RVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU12UWl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wSXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkROMElzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5JTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlF6TkNMRU5CUVVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL19kaXN0L3NyYy92aWV3L01haW5FeGFtcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhzbGF5b3V0XzEgPSByZXF1aXJlKFwiaHNsYXlvdXRcIik7XG5mdW5jdGlvbiB0b29sdGlwKHRleHQsIHRpcCwgcG9zaXRpb24pIHtcbiAgICAvLyBwb3NpdGlvbjogdG9wLCBsZWZ0LCBib3R0b24sIHJpZ2h0XG4gICAgcmV0dXJuIGhzbGF5b3V0XzEubSgnLmhzLXRvb2x0aXBbaHJlZj0jXScsIFt0ZXh0LCBoc2xheW91dF8xLm0oYHNwYW4uaHMtdG9vbHRpcC0ke3Bvc2l0aW9ufWAsIHRpcCldKTtcbn1cbmV4cG9ydHMudG9vbHRpcCA9IHRvb2x0aXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWRzl2YkhScGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OTJhV1YzTDFSdmIyeDBhWEF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3gxUTBGQmJVTTdRVUZGYmtNc2FVSkJRWGRDTEVsQlFWY3NSVUZCUlN4SFFVRlZMRVZCUVVVc1VVRkJaVHRKUVVNMVJDeHhRMEZCY1VNN1NVRkRja01zVFVGQlRTeERRVUZETEZsQlFVTXNRMEZCUXl4eFFrRkJjVUlzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4WlFVRkRMRU5CUVVNc2JVSkJRVzFDTEZGQlFWRXNSVUZCUlN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU51Uml4RFFVRkRPMEZCU0VRc01FSkJSME1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vX2Rpc3Qvc3JjL3ZpZXcvVG9vbHRpcC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gcGxhY2VIb2xkZXJzQ291bnQgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcbiAgLy8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuICAvLyByZXByZXNlbnQgb25lIGJ5dGVcbiAgLy8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG4gIC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2VcbiAgcmV0dXJuIGI2NFtsZW4gLSAyXSA9PT0gJz0nID8gMiA6IGI2NFtsZW4gLSAxXSA9PT0gJz0nID8gMSA6IDBcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuICByZXR1cm4gYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzQ291bnQoYjY0KVxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG4gIHBsYWNlSG9sZGVycyA9IHBsYWNlSG9sZGVyc0NvdW50KGI2NClcblxuICBhcnIgPSBuZXcgQXJyKGxlbiAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgbCA9IHBsYWNlSG9sZGVycyA+IDAgPyBsZW4gLSA0IDogbGVuXG5cbiAgdmFyIEwgPSAwXG5cbiAgZm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfCByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltMKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICsgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICsgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gKyBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgb3V0cHV0ID0gJydcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDJdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz09J1xuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyAodWludDhbbGVuIC0gMV0pXG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMTBdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXVxuICAgIG91dHB1dCArPSAnPSdcbiAgfVxuXG4gIHBhcnRzLnB1c2gob3V0cHV0KVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9iYXNlNjQtanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1pdGhyaWxfMSA9IHJlcXVpcmUoXCIuL21pdGhyaWxcIik7XG5jb25zdCBsYXlvdXQgPSByZXF1aXJlKFwiLi9cIik7XG5mdW5jdGlvbiBjb3B5KHN0cnVjdCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3RydWN0KSkge1xuICAgICAgICByZXN1bHQgPSBbXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHN0cnVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVzdWx0ID0ge307XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RydWN0O1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhzdHJ1Y3QpLm1hcCgoaykgPT4gcmVzdWx0W2tdID0gY29weShzdHJ1Y3Rba10pKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcmVzb2x2ZShzeW0sIGNvbnRleHQpIHtcbiAgICBsZXQgY2w7XG4gICAgY29udGV4dC5jb25jYXQobGF5b3V0KS5zb21lKChjKSA9PiBjbCA9IGNbc3ltXSk7XG4gICAgcmV0dXJuIGNsO1xufVxuZnVuY3Rpb24gcmVjdXJzZShjb25maWcsIGNvbnRleHQpIHtcbiAgICBpZiAoWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nLCAnZnVuY3Rpb24nXS5pbmRleE9mKHR5cGVvZiBjb25maWcpID49IDApIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gICAgbGV0IHJlc3VsdCA9IGNvbmZpZy5sZW5ndGggPyBbXSA6IHt9O1xuICAgIGtleXMubWFwKChrKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWN1cnNlKGNvbmZpZ1trXSwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGNsID0gcmVzb2x2ZShrLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKGNsKSB7XG4gICAgICAgICAgICBjb25zdCByID0ge1xuICAgICAgICAgICAgICAgIGNvbXBDbGFzczogY2wsXG4gICAgICAgICAgICAgICAgYXR0cnM6IGNvbnRlbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAoIUFycmF5LmlzQXJyYXkoY29uZmlnKSAmJiBrZXlzLmxlbmd0aCA9PT0gMSkgP1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHIgOlxuICAgICAgICAgICAgICAgIHJlc3VsdFtrXSA9IHI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRba10gPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmNsYXNzIEhzQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuICAgIGF0dGFjaE5vZGVUcmVlKGNvbmZpZywgcm9vdCkge1xuICAgICAgICBmdW5jdGlvbiBkZWNvZGVSb3V0ZShyb3V0ZSkge1xuICAgICAgICAgICAgY29uc3QgcnAgPSByb3V0ZS5wYXJhbXMgPSBbXTtcbiAgICAgICAgICAgIHJvdXRlLnBhdGhzLm1hcCgocDApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBwMC5tYXRjaCgvOiguKz8pXFxiL2cpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm1hcCgocDEpID0+IHAxLnN1YnN0cigxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHAyKSA9PiBycC5pbmRleE9mKHAyKSA8IDAgPyBycC5wdXNoKHAyKSA6ICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZWNvZGUoY29uZmlnKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbXBDbGFzcyAmJiAhcmVzdWx0LnJvb3QpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucm9vdCA9IGNvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZykubWFwKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdba10uY29tcENsYXNzICYmICFyZXN1bHQucm9vdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJvb3QgPSBjb25maWdba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoayA9PT0gJ3JvdXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJvdXRlID0gZGVjb2RlUm91dGUoY29uZmlnLnJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrXSA9IGNvbmZpZ1trXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwcmVwYXJlUm91dGVzKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNyID0gY29udGVudC5yb290O1xuICAgICAgICAgICAgY2xhc3MgUm91dGVyIHtcbiAgICAgICAgICAgICAgICB2aWV3KG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3IuYXR0cnMucm91dGUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5yb3V0ZS5wYXJhbXMubWFwKChrKSA9PiBjci5hdHRycy5yb3V0ZVtrXSA9IG5vZGUuYXR0cnNba10pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWl0aHJpbF8xLm0oY3IuY29tcENsYXNzLCBjb3B5KGNyLmF0dHJzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudC5yb3V0ZS5yb3V0ZXMgPSB7fTtcbiAgICAgICAgICAgIGNvbnRlbnQucm91dGUucGF0aHMubWFwKChwYXRoKSA9PiBjb250ZW50LnJvdXRlLnJvdXRlc1twYXRoXSA9IFJvdXRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbW91bnRPclJvdXRlKGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkZWNvZGUoYyk7XG4gICAgICAgICAgICBjb25zdCBjciA9IGNvbnRlbnQucm9vdDtcbiAgICAgICAgICAgIGlmICghY3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqIG5vIHRvcCBsZXZlbCBjb21wb25lbnQgZGVmaW5lZCBpbiBjb25maWc6Jyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb250ZW50LnJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcHJlcGFyZVJvdXRlcyhjb250ZW50KTtcbiAgICAgICAgICAgICAgICBtaXRocmlsXzEubS5yb3V0ZShyb290LCBjb250ZW50LnJvdXRlLmRlZmF1bHQsIGNvbnRlbnQucm91dGUucm91dGVzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcgcm91dGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaXRocmlsXzEubS5tb3VudChyb290LCB7IHZpZXc6IChub2RlKSA9PiBtaXRocmlsXzEubShjci5jb21wQ2xhc3MsIGNvcHkoY3IuYXR0cnMpKSB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbW91bnRpbmcgY29tcG9uZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgdGhpcy5nZXRDb250ZW50KGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKChyKSA9PiByZWN1cnNlKHIsIGNvbnRleHQpKVxuICAgICAgICAgICAgLnRoZW4obW91bnRPclJvdXRlKTtcbiAgICB9XG4gICAgZ2V0Q29udGVudChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykgPyB0aGlzLmxvYWQoY29uZmlnKSA6IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuICAgIH1cbiAgICBsb2FkKGZpbGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3RpbmcgJyArIGZpbGUpO1xuICAgICAgICByZXR1cm4gbWl0aHJpbF8xLm0ucmVxdWVzdCh7IG1ldGhvZDogXCJHRVRcIiwgdXJsOiBmaWxlIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjonKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkhzQ29uZmlnID0gSHNDb25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhSE5EYjI1bWFXY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFITkRiMjVtYVdjdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUYzUTBFc2RVTkJRWEZETzBGQlEzSkRMRFpDUVVFMlFqdEJRVTAzUWl4alFVRmpMRTFCUVZVN1NVRkRjRUlzU1VGQlNTeE5RVUZWTEVOQlFVTTdTVUZEWml4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVGRExFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZCUXl4RFFVRkRPMGxCUXpORExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRTFCUVUwc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlFVTXNUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVGRExFTkJRVU03U1VGRGNrUXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlFVTXNRMEZCUXp0SlFVTjJRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVkVzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRia1VzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTnNRaXhEUVVGRE8wRkJWMFFzYVVKQlFXbENMRWRCUVZVc1JVRkJSU3hQUVVGaE8wbEJRM1JETEVsQlFVa3NSVUZCVFN4RFFVRkRPMGxCUTFnc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGTExFdEJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0pFTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNN1FVRkRaQ3hEUVVGRE8wRkJXVVFzYVVKQlFXbENMRTFCUVZVc1JVRkJSU3hQUVVGaE8wbEJRM1JETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFRRVUZUTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzVFVGQlRTeERRVUZETEVsQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZCUXl4RFFVRkRPMGxCUXpkR0xFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGFrTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTNCRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRlJPMUZCUTJRc1RVRkJUU3hQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU0xUXl4TlFVRk5MRVZCUVVVc1IwRkJUeXhQUVVGUExFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTI1RExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRUQ3hOUVVGTkxFTkJRVU1zUjBGQlJ6dG5Ra0ZEVGl4VFFVRlRMRVZCUVVNc1JVRkJSVHRuUWtGRFdpeExRVUZMTEVWQlFVTXNUMEZCVHp0aFFVTm9RaXhEUVVGRE8xbEJRMFlzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNN1owSkJRM3BETEUxQlFVMHNSMEZCUnl4RFFVRkRPMmRDUVVOV0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRkRUlzUTBGQlF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVRkRMRU5CUVVNN1NVRkRha01zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE8wRkJRMnhDTEVOQlFVTTdRVUZyUTBRN1NVRlJTU3haUVVGelFpeFBRVUZoTzFGQlFXSXNXVUZCVHl4SFFVRlFMRTlCUVU4c1EwRkJUVHRKUVVGSExFTkJRVU03U1VGUGRrTXNZMEZCWXl4RFFVRkRMRTFCUVZVc1JVRkJSU3hKUVVGUk8xRkJiMEl2UWl4eFFrRkJjVUlzUzBGQlV6dFpRVU14UWl4TlFVRk5MRVZCUVVVc1IwRkJXU3hMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjBReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVZNN1owSkJRM1JDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdaMEpCUTNKRExFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMVFzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVZNc1MwRkJTeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVNNVFpeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRk5MRXRCUVVzc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUXl4RFFVRkRMRWRCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGREwwUXNRMEZCUXp0WlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMGdzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTnFRaXhEUVVGRE8xRkJVVVFzWjBKQlFXZENMRTFCUVZVN1dVRkRkRUlzU1VGQlNTeE5RVUZOTEVkQlFVOHNSVUZCUnl4RFFVRkRPMWxCUTNKQ0xFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia01zVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNN1dVRkRla0lzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOS0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlN6dHZRa0ZETVVJc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPM2RDUVVOMFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETlVJc1EwRkJRenR2UWtGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdkMEpCUTNKQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dHZRa0ZETjBNc1EwRkJRenR2UWtGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0M1FrRkRTaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU14UWl4RFFVRkRPMmRDUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExQXNRMEZCUXp0WlFVTkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGJFSXNRMEZCUXp0UlFVVkVMSFZDUVVGMVFpeFBRVUZYTzFsQlF6bENMRTFCUVUwc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTTdXVUZEZUVJN1owSkJRMGtzU1VGQlNTeERRVUZETEVsQlFWVTdiMEpCUTFnc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMjlDUVVOd1FpeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZMTEV0QlF6TkNMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlEzQkRMRU5CUVVNN2IwSkJRMFlzVFVGQlRTeERRVUZETEZkQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE0wTXNRMEZCUXp0aFFVTktPMWxCUTBRc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUXpGQ0xFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVmNzUzBGQlN5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnNSaXhEUVVGRE8xRkJSVVFzYzBKQlFYTkNMRU5CUVVzN1dVRkRka0lzVFVGQlRTeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRekZDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU03V1VGRGVFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTk9MRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zSzBOQlFTdERMRU5CUVVNc1EwRkJRenRuUWtGRE4wUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU40UWl4RFFVRkRPMWxCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEdGQlFXRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRuUWtGRGRrSXNWMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRNMFFzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEU2l4WFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWxCUVZVc1MwRkJTU3hYUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOMFJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVOQlFVTTdXVUZEZEVNc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8xRkJRemRDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRE8yRkJRMnhDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVzc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMkZCUTNCRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVThzVlVGQlZTeERRVUZETEUxQlFWVTdVVUZEZWtJc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eE5RVUZOTEV0QlFVc3NVVUZCVVN4RFFVRkRMRWRCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzSkdMRU5CUVVNN1NVRkZUeXhKUVVGSkxFTkJRVU1zU1VGQlZ6dFJRVU53UWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnNReXhOUVVGTkxFTkJRVU1zVjBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPMkZCUTNwRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVczdXVUZEVkN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlEzUkNMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYmtJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFdDeERRVUZETzBOQlEwbzdRVUY2U0VRc05FSkJlVWhESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvaHNDb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWl0aHJpbF8xID0gcmVxdWlyZShcIi4uL21pdGhyaWxcIik7XG5jb25zdCBMYXlvdXRfMSA9IHJlcXVpcmUoXCIuL0xheW91dFwiKTtcbmNsYXNzIENvbXBvbmVudCB7XG59XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0Q29tcG9uZW50cyhub2RlKSB7XG4gICAgICAgIHJldHVybiAhQXJyYXkuaXNBcnJheShub2RlLmF0dHJzLmNvbnRlbnQpID8gbm9kZS5hdHRycy5jb250ZW50IDpcbiAgICAgICAgICAgIG5vZGUuYXR0cnMuY29udGVudC5tYXAoKGMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYy5jb21wQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5hdHRycy5yb3V0ZSA9IG5vZGUuYXR0cnMucm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtaXRocmlsXzEubShjLmNvbXBDbGFzcywgYy5hdHRycyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q1NTKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuYXR0cnMuY3NzIHx8ICcnO1xuICAgIH1cbiAgICBub3JtYWxpemVDb250ZW50KGNvbXBvbmVudHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIFttaXRocmlsXzEubSgnLmhzLWxlYWYnLCBtaXRocmlsXzEubS50cnVzdChjb21wb25lbnRzKSldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzLnNvbWUoKGMpID0+ICh0eXBlb2YgYyAhPT0gJ29iamVjdCcpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzLm1hcCgoY29tcCkgPT4gKGNvbXAgaW5zdGFuY2VvZiBDb250YWluZXIpID8gY29tcCA6IG1pdGhyaWxfMS5tKENvbnRhaW5lciwgeyBjb250ZW50OiBjb21wIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY29tcG9uZW50c107XG4gICAgfVxuICAgIHZpZXcobm9kZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5ub3JtYWxpemVDb250ZW50KHRoaXMuZ2V0Q29tcG9uZW50cyhub2RlKSk7XG4gICAgICAgIGxldCBjc3MgPSBMYXlvdXRfMS5MYXlvdXQuY3JlYXRlTGF5b3V0KG5vZGUuYXR0cnMsIGNvbnRlbnQpO1xuICAgICAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgICAgICAgIHN0eWxlOiBub2RlLnN0eWxlLFxuICAgICAgICAgICAgcm91dGU6IG5vZGUuYXR0cnMucm91dGUsXG4gICAgICAgICAgICBvbmNsaWNrOiBub2RlLmF0dHJzLm9uY2xpY2tcbiAgICAgICAgfTtcbiAgICAgICAgbm9kZS5hdHRycy5yb3V0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKG5vZGUuYXR0cnMuaHJlZikge1xuICAgICAgICAgICAgYXR0cnMuaHJlZiA9IG5vZGUuYXR0cnMuaHJlZjtcbiAgICAgICAgICAgIGF0dHJzLm9uY3JlYXRlID0gbWl0aHJpbF8xLm0ucm91dGUubGluaztcbiAgICAgICAgICAgIGF0dHJzLm9udXBkYXRlID0gbWl0aHJpbF8xLm0ucm91dGUubGluaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWl0aHJpbF8xLm0oYC5ocy1sYXlvdXQgJHtjc3N9ICR7dGhpcy5nZXRDU1Mobm9kZSl9YCwgYXR0cnMsIGNvbnRlbnQubWFwKChjKSA9PiBjKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Db250YWluZXIgPSBDb250YWluZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1ZEdGcGJtVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmMzSmpMM1pwWlhjdlEyOXVkR0ZwYm1WeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUzBFc2QwTkJRVEJETzBGQlJURkRMSEZEUVVGM1F6dEJRVkY0UXp0RFFVOURPMEZCVUVRc09FSkJUME03UVVGNVFrUXNaVUZCWjBNc1UwRkJVU3hUUVVGVE8wbEJiVUp1UXl4aFFVRmhMRU5CUVVNc1NVRkJWVHRSUVVNNVFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTzFsQlEzcEVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVzN1owSkJRM3BDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTmtMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRE8yOUNRVU5xUXl4TlFVRk5MRU5CUVVNc1YwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yZENRVU51UXl4RFFVRkRPMmRDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTktMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEySXNRMEZCUXp0WlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMWdzUTBGQlF6dEpRVkZUTEUxQlFVMHNRMEZCUXl4SlFVRlZPMUZCUTNaQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFTkJRVU03U1VGRGFFTXNRMEZCUXp0SlFVZFBMR2RDUVVGblFpeERRVUZETEZWQlFXZEVPMUZCUTNKRkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNWVUZCVlN4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1YwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeFhRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUkN4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZMTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRkRVFzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVFMFFpeExRVU12UXl4RFFVRkRMRWxCUVVrc1dVRkJXU3hUUVVGVExFTkJRVU1zUjBGQlJTeEpRVUZKTEVkQlFVY3NWMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRExFOUJRVThzUlVGQlF5eEpRVUZKTEVWQlFVTXNRMEZCUXl4RFFVTnVSU3hEUVVGRE8xbEJRMDRzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOS0xFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTTdXVUZEZEVJc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVONFFpeERRVUZETzBsQmNVSkVMRWxCUVVrc1EwRkJReXhKUVVGVk8xRkJRMWdzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUlN4SlFVRkpMRWRCUVVjc1IwRkJSeXhsUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGJrUXNUVUZCVFN4TFFVRkxMRWRCUVU4N1dVRkRaQ3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdXVUZEYWtJc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3p0WlFVTjJRaXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBPMU5CUXpsQ0xFTkJRVU03VVVGRFJpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRE4wSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4Q0xFdEJRVXNzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU03V1VGRE4wSXNTMEZCU3l4RFFVRkRMRkZCUVZFc1IwRkJSeXhYUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTTVRaXhMUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEZkQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRMnhETEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1YwRkJReXhEUVVGRExHTkJRV01zUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVXNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwR0xFTkJRVU03UTBGRFNqdEJRVGRHUkN3NFFrRTJSa01pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHNsYXlvdXQvdmlldy9Db250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTGF5b3V0XzEgPSByZXF1aXJlKFwiLi9MYXlvdXRcIik7XG5jb25zdCBUb2tlbnNfMSA9IHJlcXVpcmUoXCIuL1Rva2Vuc1wiKTtcbmV4cG9ydHMuUGlsbGFyTGF5b3V0cyA9IFtcbiAgICAnY29sdW1ucycsICdyb3dzJ1xuXTtcbmNvbnN0IGNQYXJhbXMgPSB7XG4gICAgY29sdW1uczoge1xuICAgICAgICBjc3NDbGFzczogJy5ocy1jb2x1bW4tbGF5b3V0JyxcbiAgICAgICAgZmllbGRzOiBbJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICdoZWlnaHQnLCAnd2lkdGgnXVxuICAgIH0sXG4gICAgcm93czoge1xuICAgICAgICBjc3NDbGFzczogJy5ocy1yb3ctbGF5b3V0JyxcbiAgICAgICAgZmllbGRzOiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbScsICd3aWR0aCcsICdoZWlnaHQnXVxuICAgIH1cbn07XG5jbGFzcyBQaWxsYXJzIGV4dGVuZHMgTGF5b3V0XzEuTGF5b3V0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMsIGFyZWFEZXNjKSB7XG4gICAgICAgIHN1cGVyKGFyZWFEZXNjKTtcbiAgICAgICAgdGhpcy5hcmVhRGVzYyA9IGFyZWFEZXNjO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IHBhcmFtcy5maWVsZHM7XG4gICAgICAgIHRoaXMuY3NzQ2xhc3MgPSBwYXJhbXMuY3NzQ2xhc3M7XG4gICAgICAgIGxldCBuID0gYXJlYURlc2MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGZpcnN0ID0gMDtcbiAgICAgICAgbGV0IGxhc3QgPSAwO1xuICAgICAgICB0aGlzLnVuaXQgPSBhcmVhRGVzYy5zb21lKChhcmVhKSA9PiAoYXJlYSBpbnN0YW5jZW9mIFRva2Vuc18xLlBpeGVsVG9rZW4pKSA/IHRoaXMudW5pdFBpeGVsIDogdGhpcy51bml0UGVyY2VudDtcbiAgICAgICAgYXJlYURlc2Muc29tZSgoYXJlYSwgaSkgPT4gKChhcmVhRGVzY1tpXSBpbnN0YW5jZW9mIFRva2Vuc18xLkRlZmluZWRUb2tlbikgPyArK2ZpcnN0IDwgMCA6IHRydWUpKTtcbiAgICAgICAgYXJlYURlc2Muc29tZSgoYXJlYSwgaSkgPT4gKChhcmVhRGVzY1tuIC0gaV0gaW5zdGFuY2VvZiBUb2tlbnNfMS5EZWZpbmVkVG9rZW4pID8gKytsYXN0IDwgMCA6IHRydWUpKTtcbiAgICAgICAgdGhpcy5maXJzdEZpeGVkID0gZmlyc3Q7XG4gICAgICAgIHRoaXMubGFzdEZpeGVkID0gTWF0aC5taW4obGFzdCwgYXJlYURlc2MubGVuZ3RoIC0gZmlyc3QpO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0U2l6ZXMobnVtKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5maXJzdEZpeGVkO1xuICAgICAgICBjb25zdCBsYXN0ID0gdGhpcy5sYXN0Rml4ZWQ7XG4gICAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLmFyZWFEZXNjO1xuICAgICAgICBjb25zdCBsZW4gPSBkZXNjLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIFsuLi5BcnJheShudW0pLmtleXMoKV0ubWFwKChpKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgdCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaSA+IG51bSAtIDEgLSBsYXN0KSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGRlc2NbbGVuIC0gKG51bSAtIGkpXS5nZXRTaXplKCk7XG4gICAgICAgICAgICAgICAgdCA9ICdlbmQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA8IGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGRlc2NbaV0uZ2V0U2l6ZSgpO1xuICAgICAgICAgICAgICAgIHQgPSAnc3RhcnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGVuID4gMCAmJiBsZW4gPT09IGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGRlc2NbbGVuIC0gMV0uZ2V0U2l6ZSgpO1xuICAgICAgICAgICAgICAgIHQgPSAnc3RhcnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc2l6ZTogc2l6ZSwgY29kZTogdCwgZmllbGRzOiB7fSB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW5pdFBlcmNlbnQobnVtKSB7XG4gICAgICAgIGxldCBmID0gdGhpcy5maWVsZHM7XG4gICAgICAgIGxldCBtYXggPSAxMDAuMDtcbiAgICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuZ2V0U2l6ZXMobnVtKTtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goc3R5bGUgPT4geyBpZiAoc3R5bGUuc2l6ZSkge1xuICAgICAgICAgICAgbWF4ID0gbWF4IC0gc3R5bGUuc2l6ZTtcbiAgICAgICAgICAgIG51bS0tO1xuICAgICAgICB9IH0pO1xuICAgICAgICBsZXQgZGVmRGltID0gbWF4IC8gbnVtO1xuICAgICAgICBmdW5jdGlvbiBwYXNzKHN0eWxlcywgaXgwLCBpeDEsIGJyZWFrQ29uZCkge1xuICAgICAgICAgICAgbGV0IHN1bURpbSA9IDA7XG4gICAgICAgICAgICBzdHlsZXMuc29tZShzdHlsZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNpemUgPSBzdHlsZS5zaXplIHx8IGRlZkRpbTtcbiAgICAgICAgICAgICAgICBpZiAoYnJlYWtDb25kKHN0eWxlLmNvZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbaXgwXSA9IHN1bURpbSArICclJztcbiAgICAgICAgICAgICAgICBzdW1EaW0gKz0gc2l6ZTtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbaXgxXSA9ICgxMDAgLSBzdW1EaW0pICsgJyUnO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzVdXSA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwYXNzKHN0eWxlcywgZlsyXSwgZlszXSwgKGUpID0+IGUgPT09ICdlbmQnKTtcbiAgICAgICAgcGFzcyhzdHlsZXMucmV2ZXJzZSgpLCBmWzNdLCBmWzJdLCAoZSkgPT4gZSAhPT0gJ2VuZCcpO1xuICAgICAgICByZXR1cm4gc3R5bGVzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgO1xuICAgIHVuaXRQaXhlbChudW0pIHtcbiAgICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuZ2V0U2l6ZXMobnVtKTtcbiAgICAgICAgbGV0IGYgPSB0aGlzLmZpZWxkcztcbiAgICAgICAgbGV0IGRlZkRpbSA9IDEwMC4wIC8gbnVtO1xuICAgICAgICBsZXQgc3VtRGltID0gMDtcbiAgICAgICAgc3R5bGVzLnNvbWUoKHN0eWxlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3R5bGUuY29kZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzJdXSA9IHN1bURpbSArICdweCc7XG4gICAgICAgICAgICAgICAgc3VtRGltICs9IHN0eWxlLnNpemUgKyAodGhpcy5zcGFjaW5nIHx8IDApICsgKHRoaXMuc3BhY2luZyB8fCAwKTtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZlszXV0gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbNV1dID0gc3R5bGUuc2l6ZSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZS5jb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbMl1dID0gKHN1bURpbSA+IDApID8gKHN1bURpbSArICdweCcpIDogKGkgKiBkZWZEaW0gKyAnJScpO1xuICAgICAgICAgICAgICAgIHN1bURpbSA9IC0xO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzNdXSA9ICgxMDAgLSAoaSArIDEpICogZGVmRGltKSArICclJztcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZls1XV0gPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZS5jb2RlID09PSAnZW5kJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgc3VtRGltID0gMDtcbiAgICAgICAgc3R5bGVzLnNsaWNlKCkucmV2ZXJzZSgpLnNvbWUoKHN0eWxlLCBpKSA9PiB7XG4gICAgICAgICAgICBzdHlsZS5maWVsZHNbZlszXV0gPSBzdW1EaW0gKyAncHgnO1xuICAgICAgICAgICAgaWYgKHN0eWxlLmNvZGUgPT09ICdlbmQnKSB7XG4gICAgICAgICAgICAgICAgc3VtRGltICs9IHN0eWxlLnNpemUgKyAodGhpcy5zcGFjaW5nIHx8IDApICsgKHRoaXMuc3BhY2luZyB8fCAwKTtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZlsyXV0gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbNV1dID0gc3R5bGUuc2l6ZSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3VtRGltID4gMCAmJiBzdHlsZS5jb2RlICE9PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzVdXSA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0U3R5bGVzKGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGYgPSB0aGlzLmZpZWxkcztcbiAgICAgICAgbGV0IHN0eWxlcyA9IHRoaXMudW5pdChjb21wb25lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbXBvbmVudHMubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICBjLnN0eWxlID0gYCR7ZlswXX06MCU7ICR7ZlsxXX06MCU7IGA7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXNbaV0uZmllbGRzKS5mb3JFYWNoKChzdCkgPT4geyBjLnN0eWxlICs9IGAke3N0fTogJHtzdHlsZXNbaV0uZmllbGRzW3N0XX07YDsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jc3NDbGFzcztcbiAgICB9XG4gICAgO1xufVxuO1xuY2xhc3MgQ29sdW1ucyBleHRlbmRzIFBpbGxhcnMge1xuICAgIGNvbnN0cnVjdG9yKGFyZWFEZXNjKSB7XG4gICAgICAgIHN1cGVyKGNQYXJhbXNbZXhwb3J0cy5QaWxsYXJMYXlvdXRzWzBdXSwgYXJlYURlc2MpO1xuICAgICAgICB0aGlzLmFyZWFEZXNjID0gYXJlYURlc2M7XG4gICAgfVxuICAgIDtcbn1cbjtcbmNsYXNzIFJvd3MgZXh0ZW5kcyBQaWxsYXJzIHtcbiAgICBjb25zdHJ1Y3RvcihhcmVhRGVzYykge1xuICAgICAgICBzdXBlcihjUGFyYW1zW2V4cG9ydHMuUGlsbGFyTGF5b3V0c1sxXV0sIGFyZWFEZXNjKTtcbiAgICAgICAgdGhpcy5hcmVhRGVzYyA9IGFyZWFEZXNjO1xuICAgIH1cbiAgICA7XG59XG47XG5MYXlvdXRfMS5MYXlvdXQucmVnaXN0ZXIoZXhwb3J0cy5QaWxsYXJMYXlvdXRzWzBdLCBDb2x1bW5zKTtcbkxheW91dF8xLkxheW91dC5yZWdpc3RlcihleHBvcnRzLlBpbGxhckxheW91dHNbMV0sIFJvd3MpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUdsc2JHRnlaV1JNWVhsdmRYUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5emNtTXZkbWxsZHk5UWFXeHNZWEpsWkV4aGVXOTFkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFUSkRRU3h4UTBGQmQwTTdRVUZEZUVNc2NVTkJRVzlGTzBGQlowSjJSQ3hSUVVGQkxHRkJRV0VzUjBGQlJ6dEpRVU42UWl4VFFVRlRMRVZCUVVVc1RVRkJUVHREUVVOd1FpeERRVUZETzBGQlMwWXNUVUZCVFN4UFFVRlBMRWRCUVVjN1NVRkRXaXhQUVVGUExFVkJRV2RDTzFGQlEyNUNMRkZCUVZFc1JVRkJSU3h0UWtGQmJVSTdVVUZETjBJc1RVRkJUU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFBRVUZQTEVOQlFVTTdTMEZEYUVVN1NVRkRSQ3hKUVVGSkxFVkJRV2RDTzFGQlEyaENMRkZCUVZFc1JVRkJSU3huUWtGQlowSTdVVUZETVVJc1RVRkJUU3hGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRkxFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTTdTMEZEYUVVN1EwRkRTaXhEUVVGRE8wRkJUMFlzWVVGQmRVSXNVMEZCVVN4bFFVRk5PMGxCWVdwRExGbEJRVmtzVFVGQmJVSXNSVUZCVXl4UlFVRnpRanRSUVVNeFJDeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkViMElzWVVGQlVTeEhRVUZTTEZGQlFWRXNRMEZCWXp0UlFVVXhSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJSV2hETEVsQlFVa3NRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFZEJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkNMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5rTEVsQlFVa3NTVUZCU1N4SFFVRkpMRU5CUVVNc1EwRkJRenRSUVVWa0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRV2RDTEV0QlFVc3NRMEZCUXl4SlFVRkpMRmxCUVZrc2JVSkJRVlVzUTBGQlF5eERRVUZETEVkQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlIycElMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZuUWl4RlFVRkZMRU5CUVZFc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRmpMSEZDUVVGWkxFTkJRVU1zUjBGQlJTeEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVWN6Unl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlowSXNSVUZCUlN4RFFVRlJMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc2NVSkJRVmtzUTBGQlF5eEhRVUZGTEVWQlFVVXNTVUZCU1N4SFFVRkRMRU5CUVVNc1IwRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJUTkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzaENMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExFMUJRVTBzUjBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTFSQ3hEUVVGRE8wbEJRVUVzUTBGQlF6dEpRVk5OTEZGQlFWRXNRMEZCUXl4SFFVRlZPMUZCUTNaQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNN1VVRkRPVUlzVFVGQlRTeEpRVUZKTEVkQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJRenRSUVVNM1FpeE5RVUZOTEVsQlFVa3NSMEZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRelZDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRmVFSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZSTzFsQlEzWkRMRWxCUVVrc1NVRkJTU3hIUVVGVkxFbEJRVWtzUTBGQlF6dFpRVU4yUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRFlpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGRExFTkJRVU1zUjBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUlN4RFFVRkRPMmRDUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1owSkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0WlFVRkRMRU5CUVVNN1dVRkRla1VzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlJTeERRVUZETzJkQ1FVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1owSkJRVU1zUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXp0WlFVRkRMRU5CUVVNN1dVRkRMMFFzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eExRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkJMRU5CUVVNN1owSkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdaMEpCUVVNc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dFpRVUZETEVOQlFVTTdXVUZETlVVc1RVRkJUU3hEUVVGRExFVkJRVU1zU1VGQlNTeEZRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUlVGQlF5eEZRVUZGTEVWQlFVTXNRMEZCUXp0UlFVTXhReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdTVUZGVHl4WFFVRlhMRU5CUVVNc1IwRkJWVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM0JDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOb1FpeEpRVUZKTEUxQlFVMHNSMEZCWjBJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVTNReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoR0xFbEJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkZka0lzWTBGQll5eE5RVUZ0UWl4RlFVRkZMRWRCUVZVc1JVRkJSU3hIUVVGVkxFVkJRVVVzVTBGQlowTTdXVUZEZGtZc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEyWXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTE8yZENRVU5pTEVsQlFVa3NTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFbEJRVWtzVFVGQlRTeERRVUZETzJkQ1FVTm9ReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVUZETEVOQlFVTTdaMEpCUXpORExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1RVRkJUU3hIUVVGRExFZEJRVWNzUTBGQlF6dG5Ra0ZETDBJc1RVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF6dG5Ra0ZEWml4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGRExFZEJRVWNzUTBGQlF6dG5Ra0ZEY2tNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU03WjBKQlF6VkNMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03V1VGRGFrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hEUVVGRE8xRkJSVVFzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJVU3hMUVVGTExFTkJRVU1zUzBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTnNSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGUkxFdEJRVXNzUTBGQlF5eExRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVUZCTEVOQlFVTTdTVUZGVFN4VFFVRlRMRU5CUVVNc1IwRkJWVHRSUVVONFFpeEpRVUZKTEUxQlFVMHNSMEZCWjBJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUlhCQ0xFbEJRVWtzVFVGQlRTeEhRVUZITEV0QlFVc3NSMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkhka0lzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJZc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTJwQ0xFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVjc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtJc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFZEJRVVVzU1VGQlNTeERRVUZETzJkQ1FVTnNReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnFSU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF6dG5Ra0ZETlVJc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeEhRVUZGTEVsQlFVa3NRMEZCUXp0WlFVTXhReXhEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkROMElzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSU3hEUVVGRExFMUJRVTBzUjBGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTI1RkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRXaXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0blFrRkRPVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdXVUZEYUVNc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dFpRVUZETEVOQlFVTTdXVUZETDBNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU5xUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVkSUxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV0N4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03V1VGRGJrTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRMjVETEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRka0lzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRha1VzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdaMEpCUXpWQ0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NSMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRla01zUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOS0xFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXp0blFrRkRhRU1zUTBGQlF6dG5Ra0ZEUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRMmhDTEVOQlFVTTdXVUZEUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRMnBDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCUVVFc1EwRkJRenRKUVZGUkxGTkJRVk1zUTBGQlF5eFZRVUZwUXp0UlFVTnFSQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzVFVGQlRTeEhRVUZuUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCYVVJc1JVRkJSU3hEUVVGUk8xbEJRM1pETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03V1VGRGNrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlV5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1IwRkJSeXhGUVVGRkxFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUVVFc1EwRkJRenREUVVOTU8wRkJRVUVzUTBGQlF6dEJRWFZFUml4aFFVRmpMRk5CUVZFc1QwRkJUenRKUVVONlFpeFpRVUZ0UWl4UlFVRnpRanRSUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNjVUpCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUVhKRkxHRkJRVkVzUjBGQlVpeFJRVUZSTEVOQlFXTTdTVUZCYVVRc1EwRkJRenRKUVVGQkxFTkJRVU03UTBGREwwWTdRVUZCUVN4RFFVRkRPMEZCZFVSR0xGVkJRVmNzVTBGQlVTeFBRVUZQTzBsQlEzUkNMRmxCUVcxQ0xGRkJRWE5DTzFGQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXh4UWtGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGQmNrVXNZVUZCVVN4SFFVRlNMRkZCUVZFc1EwRkJZenRKUVVGcFJDeERRVUZETzBsQlFVRXNRMEZCUXp0RFFVTXZSanRCUVVGQkxFTkJRVU03UVVGRlJpeGxRVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMSEZDUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1FVRkRNME1zWlVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4eFFrRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc2xheW91dC92aWV3L1BpbGxhcmVkTGF5b3V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IExheW91dF8xID0gcmVxdWlyZShcIi4vTGF5b3V0XCIpO1xuY29uc3QgVG9rZW5zXzEgPSByZXF1aXJlKFwiLi9Ub2tlbnNcIik7XG5jbGFzcyBUaWxlcyBleHRlbmRzIExheW91dF8xLkxheW91dCB7XG4gICAgY29uc3RydWN0b3IoYXJlYURlc2MpIHtcbiAgICAgICAgc3VwZXIoYXJlYURlc2MpO1xuICAgICAgICB0aGlzLmFyZWFEZXNjID0gYXJlYURlc2M7XG4gICAgICAgIHRoaXMudW5pdCA9IGFyZWFEZXNjLnNvbWUoKGFyZWEpID0+IChhcmVhIGluc3RhbmNlb2YgVG9rZW5zXzEuUGl4ZWxUb2tlbikpID9cbiAgICAgICAgICAgIHRoaXMudW5pdFBpeGVsIDogdGhpcy51bml0UGVyY2VudDtcbiAgICB9XG4gICAgO1xuICAgIHVuaXRQZXJjZW50KG51bSkge1xuICAgICAgICBjb25zdCBkZXNjID0gdGhpcy5hcmVhRGVzYztcbiAgICAgICAgY29uc3QgZmlsbCA9IHRoaXMuYXJlYURlc2Muc29tZShhID0+IChhIGluc3RhbmNlb2YgVG9rZW5zXzEuRmlsbFRva2VuKSk7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBNYXRoLnNxcnQobnVtKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IE1hdGgucm91bmQocm9vdCk7XG4gICAgICAgIGxldCBjb2xzID0gTWF0aC5mbG9vcihyb290KTtcbiAgICAgICAgaWYgKHJvb3QgPiBjb2xzKSB7XG4gICAgICAgICAgICBjb2xzKys7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdpZHRoID0gKGRlc2NbMF0gaW5zdGFuY2VvZiBUb2tlbnNfMS5EZWZpbmVkVG9rZW4pID8gZGVzY1swXS5nZXRTaXplKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBoZWlnaHQgPSAoZGVzY1sxXSBpbnN0YW5jZW9mIFRva2Vuc18xLkRlZmluZWRUb2tlbikgPyBkZXNjWzFdLmdldFNpemUoKSA6IHdpZHRoO1xuICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IDEwMCAvIGNvbHM7XG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAxMDAgLyByb3dzO1xuICAgICAgICBsZXQgbGVmdCA9IDA7XG4gICAgICAgIGxldCB0b3AgPSAwO1xuICAgICAgICBsZXQgc3R5bGVzID0gWy4uLkFycmF5KG51bSkua2V5cygpXS5tYXAoaSA9PiB7XG4gICAgICAgICAgICBsZXQgciA9ICdhdXRvJztcbiAgICAgICAgICAgIGxldCB3ID0gd2lkdGggKyAnJSc7XG4gICAgICAgICAgICBsZXQgYiA9ICdhdW90JztcbiAgICAgICAgICAgIGxldCBoID0gaGVpZ2h0ICsgJyUnO1xuICAgICAgICAgICAgaWYgKChsZWZ0ICsgMiAqIHdpZHRoKSA+IDEwMCAmJiBmaWxsKSB7XG4gICAgICAgICAgICAgICAgciA9ICcwJSc7XG4gICAgICAgICAgICAgICAgdyA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodG9wICsgMiAqIGhlaWdodCkgPiAxMDAgJiYgZmlsbCkge1xuICAgICAgICAgICAgICAgIGIgPSAnMCUnO1xuICAgICAgICAgICAgICAgIGggPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGBcbiAgICAgICAgICAgICAgICB0b3A6ICR7TWF0aC5mbG9vcih0b3ApfSU7IGJvdHRvbToke2J9O1xuICAgICAgICAgICAgICAgIGxlZnQ6ICR7bGVmdH0lOyAgICAgICAgICAgcmlnaHQ6JHtyfTtcbiAgICAgICAgICAgICAgICB3aWR0aDogJHt3fTsgICAgICAgICAgICAgIGhlaWdodDogJHtofTtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZChsZWZ0ICs9IHdpZHRoKSA+IDEwMCAtIE1hdGguZmxvb3Iod2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgdG9wICs9IGhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuICAgIDtcbiAgICB1bml0UGl4ZWwobnVtKSB7XG4gICAgfVxuICAgIDtcbiAgICBnZXRTdHlsZXMoY29tcG9uZW50cykge1xuICAgICAgICBsZXQgc3R5bGVzID0gdGhpcy51bml0KGNvbXBvbmVudHMubGVuZ3RoKTtcbiAgICAgICAgY29tcG9uZW50cy5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgIGMuc3R5bGUgPSBzdHlsZXNbaV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gJy5ocy10aWxlLWxheW91dCc7XG4gICAgfVxuICAgIDtcbn1cbjtcbkxheW91dF8xLkxheW91dC5yZWdpc3RlcigndGlsZXMnLCBUaWxlcyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR2xzWlV4aGVXOTFkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTkyYVdWM0wxUnBiR1ZNWVhsdmRYUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVFMlJFRXNjVU5CUVhkRE8wRkJRM2hETEhGRFFVRXJSVHRCUVU4dlJTeFhRVUZaTEZOQlFWRXNaVUZCVFR0SlFWTjBRaXhaUVVGdFFpeFJRVUZ6UWp0UlFVTnlReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZFUkN4aFFVRlJMRWRCUVZJc1VVRkJVU3hEUVVGak8xRkJTWEpETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFXZENMRXRCUVVzc1EwRkJReXhKUVVGSkxGbEJRVmtzYlVKQlFWVXNRMEZCUXl4RFFVRkRPMWxCUTNwRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVNeFF5eERRVUZETzBsQlFVRXNRMEZCUXp0SlFVVk5MRmRCUVZjc1EwRkJReXhIUVVGVk8xRkJRekZDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRE0wSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhaUVVGWkxHdENRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXk5RUxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE5VSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhKUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemxDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkJReXhEUVVGRE8xRkJRelZDTEVsQlFVa3NTMEZCU3l4SFFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEhGQ1FVRlpMRU5CUVVNc1IwRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRemxGTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEhGQ1FVRlpMRU5CUVVNc1IwRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSVEZGTEV0QlFVc3NSMEZCU1N4TFFVRkxMRWxCUVVzc1IwRkJSeXhIUVVGRExFbEJRVWtzUTBGQlF6dFJRVU0xUWl4TlFVRk5MRWRCUVVjc1RVRkJUU3hKUVVGSkxFZEJRVWNzUjBGQlF5eEpRVUZKTEVOQlFVTTdVVUZETlVJc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEySXNTVUZCU1N4SFFVRkhMRWRCUVVrc1EwRkJReXhEUVVGRE8xRkJSMklzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM0pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVGSkxFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUXl4SFFVRkhMRU5CUVVNN1dVRkRja01zU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeEhRVUZETEVkQlFVY3NRMEZCUXp0WlFVTjBReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRWRCUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0blFrRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzFsQlFVTXNRMEZCUXp0WlFVTTNSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0blFrRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzFsQlFVTXNRMEZCUXp0WlFVTTNSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ6dDFRa0ZEU0N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTTdkMEpCUXpWQ0xFbEJRVWtzYzBKQlFYTkNMRU5CUVVNN2VVSkJRekZDTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU03WVVGRGVFTXNRMEZCUXp0WlFVTkdMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVUZETEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNN1dVRkJReXhEUVVGRE8xbEJRMjVHTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRhRUlzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU2l4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZCUVN4RFFVRkRPMGxCUlUwc1UwRkJVeXhEUVVGRExFZEJRVlU3U1VGRE5VSXNRMEZCUXp0SlFVRkJMRU5CUVVNN1NVRlJVU3hUUVVGVExFTkJRVU1zVlVGQmFVTTdVVUZEYWtRc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE1VTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRV2xDTEVWQlFVVXNRMEZCVVR0WlFVTjJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFFpeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJRVUVzUTBGQlF6dERRVU5NTzBGQlFVRXNRMEZCUXp0QlFVZEdMR1ZCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc2xheW91dC92aWV3L1RpbGVMYXlvdXQuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gc2hvcnRDaGVja1N1bShzKSB7XG4gICAgdmFyIGNoayA9IDB4MTIzNDU2Nzg7XG4gICAgdmFyIGxlbiA9IHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hrICs9IChzLmNoYXJDb2RlQXQoaSkgKiAoaSArIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIChjaGsgJiAweGZmZmZmZmZmKS50b1N0cmluZygxNik7XG59XG5leHBvcnRzLnNob3J0Q2hlY2tTdW0gPSBzaG9ydENoZWNrU3VtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUhORGFHVmphM04xYlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvYzBOb1pXTnJjM1Z0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJVVU1zZFVKQlFUaENMRU5CUVZFN1NVRkRia01zU1VGQlNTeEhRVUZITEVkQlFVY3NWVUZCVlN4RFFVRkRPMGxCUTNKQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRia0lzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVNelFpeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGRrTXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRE1VTXNRMEZCUXp0QlFWQkVMSE5EUVU5REluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L2hzdXRpbC9oc0NoZWNrc3VtLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyBzZXRUaW1lb3V0KHJlamVjdCwgbXMpOyB9KTtcbn1cbmV4cG9ydHMudGltZW91dCA9IHRpbWVvdXQ7XG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKGFyZ3MpOyB9LCBtcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnRzLmRlbGF5ID0gZGVsYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhSE5WZEdsc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJoelZYUnBiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFXVkJMR2xDUVVGM1FpeEZRVUZUTzBsQlF6ZENMRTFCUVUwc1EwRkJReXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRTlCUVU4c1ZVRkJWU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM3BGTEVOQlFVTTdRVUZHUkN3d1FrRkZRenRCUVZkRUxHVkJRWE5DTEVWQlFWTTdTVUZETTBJc1RVRkJUU3hEUVVGRExFTkJRVU1zU1VGQlVUdFJRVU5hTEUxQlFVMHNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVmM3V1VGRE0wSXNWVUZCVlN4RFFVRkRMRkZCUVZFc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemRETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRE8wRkJRMDRzUTBGQlF6dEJRVTVFTEhOQ1FVMURJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc3V0aWwvaHNVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBoc1V0aWxfMSA9IHJlcXVpcmUoXCIuL2hzVXRpbFwiKTtcbmV4cG9ydHMudGltZW91dCA9IGhzVXRpbF8xLnRpbWVvdXQ7XG5leHBvcnRzLmRlbGF5ID0gaHNVdGlsXzEuZGVsYXk7XG52YXIgc2hvd2Rvd25fMSA9IHJlcXVpcmUoXCIuL3Nob3dkb3duXCIpO1xuZXhwb3J0cy5tYXJrRG93biA9IHNob3dkb3duXzEubWFya0Rvd247XG52YXIgaHNDaGVja3N1bV8xID0gcmVxdWlyZShcIi4vaHNDaGVja3N1bVwiKTtcbmV4cG9ydHMuc2hvcnRDaGVja1N1bSA9IGhzQ2hlY2tzdW1fMS5zaG9ydENoZWNrU3VtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3h0UTBGQk1FTTdRVUZCYWtNc01rSkJRVUVzVDBGQlR5eERRVUZCTzBGQlFVVXNlVUpCUVVFc1MwRkJTeXhEUVVGQk8wRkJRM1pDTEhWRFFVRTBRenRCUVVGdVF5dzRRa0ZCUVN4UlFVRlJMRU5CUVVFN1FVRkRha0lzTWtOQlFUaERPMEZCUVhKRExIRkRRVUZCTEdGQlFXRXNRMEZCUVNKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaHN1dGlsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHNob3dkb3duID0gcmVxdWlyZSgnc2hvd2Rvd24nKTtcbmNvbnN0IGNvbnZlcnRlciA9IG5ldyBzaG93ZG93bi5Db252ZXJ0ZXIoKTtcbmZ1bmN0aW9uIG1hcmtEb3duKHRleHQpIHtcbiAgICByZXR1cm4gY29udmVydGVyLm1ha2VIdG1sKHRleHQpO1xufVxuZXhwb3J0cy5tYXJrRG93biA9IG1hcmtEb3duO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJodmQyUnZkMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMmh2ZDJSdmQyNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCU1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRmRFTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdRVUZGTTBNc2EwSkJRWGxDTEVsQlFWYzdTVUZEYUVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRjRU1zUTBGQlF6dEJRVVpFTERSQ1FVVkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc3V0aWwvc2hvd2Rvd24uanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaHNsYXlvdXRfMSA9IHJlcXVpcmUoXCJoc2xheW91dFwiKTtcbmNsYXNzIE1lbnUgZXh0ZW5kcyBoc2xheW91dF8xLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWVudSA9IHtcbiAgICAgICAgICAgIGl0ZW1zOiB7fSxcbiAgICAgICAgICAgIHNlbGVjdDogKHRpdGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZW51Lml0ZW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51Lml0ZW1zW2tleV0uaXNTZWxlY3RlZCA9IChrZXkgPT09IHRpdGxlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50cyhub2RlKSB7XG4gICAgICAgIGNvbnN0IF9tZW51ID0gdGhpcy5tZW51O1xuICAgICAgICBjb25zdCBkZXNjID0gbm9kZS5hdHRycy5kZXNjO1xuICAgICAgICBub2RlLmF0dHJzLmRlc2MgPSB1bmRlZmluZWQ7XG4gICAgICAgIGRlc2Muc2VsZWN0ZWRJdGVtID0gZGVzYy5zZWxlY3RlZEl0ZW0gfHwgZGVzYy5pdGVtc1swXTtcbiAgICAgICAgbm9kZS5hdHRycy5jb2x1bW5zID0gZGVzYy5zaXplIHx8IFtdO1xuICAgICAgICBub2RlLmF0dHJzLmNzcyA9ICcuaHMtbWVudSc7XG4gICAgICAgIHJldHVybiBkZXNjLml0ZW1zLm1hcCgobCkgPT4ge1xuICAgICAgICAgICAgX21lbnUuaXRlbXNbbF0gPSBfbWVudS5pdGVtc1tsXSB8fCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGwsXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogbCA9PT0gZGVzYy5zZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICAgICAgY2xpY2tlZDogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzYy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICBfbWVudS5zZWxlY3QoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzYy5zZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2Muc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBoc2xheW91dF8xLm0oTWVudUl0ZW0sIHsgZGVzYzogX21lbnUuaXRlbXNbbF0gfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVudSA9IE1lbnU7XG47XG5jbGFzcyBNZW51SXRlbSBleHRlbmRzIGhzbGF5b3V0XzEuQ29udGFpbmVyIHtcbiAgICBnZXRDb21wb25lbnRzKG5vZGUpIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IG5vZGUuYXR0cnMuZGVzYztcbiAgICAgICAgbm9kZS5hdHRycy5kZXNjID0gdW5kZWZpbmVkO1xuICAgICAgICBub2RlLmF0dHJzLmNzcyA9IGAuaHMtbWVudS1pdGVtICR7ZGVzYy5pc1NlbGVjdGVkID8gJ2hzLW1lbnUtaXRlbS1zZWxlY3RlZCcgOiAnJ31gO1xuICAgICAgICBub2RlLmF0dHJzLm9uY2xpY2sgPSAoKSA9PiB7IGRlc2MuY2xpY2tlZChkZXNjLnRpdGxlKTsgfTtcbiAgICAgICAgcmV0dXJuIGRlc2MudGl0bGU7XG4gICAgfVxufVxuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUhOTlpXNTFMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaHpUV1Z1ZFM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRV2RFUVN4MVEwRkJLME03UVVFeVFpOURMRlZCUVd0Q0xGTkJRVkVzYjBKQlFWTTdTVUZCYmtNN08xRkJSVWtzVTBGQlNTeEhRVUZITzFsQlEwZ3NTMEZCU3l4RlFVRjVRaXhGUVVGRk8xbEJRMmhETEUxQlFVMHNSVUZCUlN4RFFVRkRMRXRCUVZrN1owSkJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGVk8yOUNRVU0xUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4VlFVRlZMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTTdaMEpCUTNCRUxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExQXNRMEZCUXp0VFFVTktMRU5CUVVNN1NVRjVRazRzUTBGQlF6dEpRWFpDUnl4aFFVRmhMRU5CUVVNc1NVRkJWenRSUVVOeVFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRM2hDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETzFGQlF6ZENMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVVTFRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU55UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZETlVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJVVHRaUVVNelFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrN1owSkJReTlDTEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVOU0xGVkJRVlVzUlVGQlJTeERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRmxCUVZrN1owSkJRMjVETEU5QlFVOHNSVUZCUXl4RFFVRkRMRWxCUVZjN2IwSkJRMmhDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRE8yOUNRVU42UWl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTnVRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6dDNRa0ZEY0VNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRkRUlzUTBGQlF6dG5Ra0ZEVEN4RFFVRkRPMkZCUTBvc1EwRkJRenRaUVVOR0xFMUJRVTBzUTBGQlF5eFpRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMmhFTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenREUVVOS08wRkJiRU5FTEc5Q1FXdERRenRCUVVGQkxFTkJRVU03UVVGTFJpeGpRVUZsTEZOQlFWRXNiMEpCUVZNN1NVRkROVUlzWVVGQllTeERRVUZETEVsQlFWYzdVVUZEY2tJc1RVRkJUU3hKUVVGSkxFZEJRV2RDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRekZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUjBGQlJ5eHBRa0ZCYVVJc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlF5eDFRa0ZCZFVJc1IwRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVU5vUml4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNwRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03UTBGRFNqdEJRVUZCTEVOQlFVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9oc3dpZGdldC9oc01lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9pZWVlNzU0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vaXNhcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiOyhmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiXG5mdW5jdGlvbiBWbm9kZSh0YWcsIGtleSwgYXR0cnMwLCBjaGlsZHJlbiwgdGV4dCwgZG9tKSB7XG5cdHJldHVybiB7dGFnOiB0YWcsIGtleToga2V5LCBhdHRyczogYXR0cnMwLCBjaGlsZHJlbjogY2hpbGRyZW4sIHRleHQ6IHRleHQsIGRvbTogZG9tLCBkb21TaXplOiB1bmRlZmluZWQsIHN0YXRlOiB1bmRlZmluZWQsIF9zdGF0ZTogdW5kZWZpbmVkLCBldmVudHM6IHVuZGVmaW5lZCwgaW5zdGFuY2U6IHVuZGVmaW5lZCwgc2tpcDogZmFsc2V9XG59XG5Wbm9kZS5ub3JtYWxpemUgPSBmdW5jdGlvbihub2RlKSB7XG5cdGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSByZXR1cm4gVm5vZGUoXCJbXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihub2RlKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG5cdGlmIChub2RlICE9IG51bGwgJiYgdHlwZW9mIG5vZGUgIT09IFwib2JqZWN0XCIpIHJldHVybiBWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG5vZGUgPT09IGZhbHNlID8gXCJcIiA6IG5vZGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXHRyZXR1cm4gbm9kZVxufVxuVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4gPSBmdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRyZW5baV0gPSBWbm9kZS5ub3JtYWxpemUoY2hpbGRyZW5baV0pXG5cdH1cblx0cmV0dXJuIGNoaWxkcmVuXG59XG52YXIgc2VsZWN0b3JQYXJzZXIgPSAvKD86KF58I3xcXC4pKFteI1xcLlxcW1xcXV0rKSl8KFxcWyguKz8pKD86XFxzKj1cXHMqKFwifCd8KSgoPzpcXFxcW1wiJ1xcXV18LikqPylcXDUpP1xcXSkvZ1xudmFyIHNlbGVjdG9yQ2FjaGUgPSB7fVxudmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5XG5mdW5jdGlvbiBjb21waWxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcblx0dmFyIG1hdGNoLCB0YWcgPSBcImRpdlwiLCBjbGFzc2VzID0gW10sIGF0dHJzID0ge31cblx0d2hpbGUgKG1hdGNoID0gc2VsZWN0b3JQYXJzZXIuZXhlYyhzZWxlY3RvcikpIHtcblx0XHR2YXIgdHlwZSA9IG1hdGNoWzFdLCB2YWx1ZSA9IG1hdGNoWzJdXG5cdFx0aWYgKHR5cGUgPT09IFwiXCIgJiYgdmFsdWUgIT09IFwiXCIpIHRhZyA9IHZhbHVlXG5cdFx0ZWxzZSBpZiAodHlwZSA9PT0gXCIjXCIpIGF0dHJzLmlkID0gdmFsdWVcblx0XHRlbHNlIGlmICh0eXBlID09PSBcIi5cIikgY2xhc3Nlcy5wdXNoKHZhbHVlKVxuXHRcdGVsc2UgaWYgKG1hdGNoWzNdWzBdID09PSBcIltcIikge1xuXHRcdFx0dmFyIGF0dHJWYWx1ZSA9IG1hdGNoWzZdXG5cdFx0XHRpZiAoYXR0clZhbHVlKSBhdHRyVmFsdWUgPSBhdHRyVmFsdWUucmVwbGFjZSgvXFxcXChbXCInXSkvZywgXCIkMVwiKS5yZXBsYWNlKC9cXFxcXFxcXC9nLCBcIlxcXFxcIilcblx0XHRcdGlmIChtYXRjaFs0XSA9PT0gXCJjbGFzc1wiKSBjbGFzc2VzLnB1c2goYXR0clZhbHVlKVxuXHRcdFx0ZWxzZSBhdHRyc1ttYXRjaFs0XV0gPSBhdHRyVmFsdWUgPT09IFwiXCIgPyBhdHRyVmFsdWUgOiBhdHRyVmFsdWUgfHwgdHJ1ZVxuXHRcdH1cblx0fVxuXHRpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSBhdHRycy5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oXCIgXCIpXG5cdHJldHVybiBzZWxlY3RvckNhY2hlW3NlbGVjdG9yXSA9IHt0YWc6IHRhZywgYXR0cnM6IGF0dHJzfVxufVxuZnVuY3Rpb24gZXhlY1NlbGVjdG9yKHN0YXRlLCBhdHRycywgY2hpbGRyZW4pIHtcblx0dmFyIGhhc0F0dHJzID0gZmFsc2UsIGNoaWxkTGlzdCwgdGV4dFxuXHR2YXIgY2xhc3NOYW1lID0gYXR0cnMuY2xhc3NOYW1lIHx8IGF0dHJzLmNsYXNzXG5cdGZvciAodmFyIGtleSBpbiBzdGF0ZS5hdHRycykge1xuXHRcdGlmIChoYXNPd24uY2FsbChzdGF0ZS5hdHRycywga2V5KSkge1xuXHRcdFx0YXR0cnNba2V5XSA9IHN0YXRlLmF0dHJzW2tleV1cblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGF0dHJzLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGF0dHJzLmNsYXNzID0gdW5kZWZpbmVkXG5cdFx0XHRhdHRycy5jbGFzc05hbWUgPSBjbGFzc05hbWVcblx0XHR9XG5cdFx0aWYgKHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG5cdFx0XHRhdHRycy5jbGFzc05hbWUgPSBzdGF0ZS5hdHRycy5jbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZVxuXHRcdH1cblx0fVxuXHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRpZiAoaGFzT3duLmNhbGwoYXR0cnMsIGtleSkgJiYga2V5ICE9PSBcImtleVwiKSB7XG5cdFx0XHRoYXNBdHRycyA9IHRydWVcblx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG5cdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgY2hpbGRyZW5bMF0gIT0gbnVsbCAmJiBjaGlsZHJlblswXS50YWcgPT09IFwiI1wiKSB7XG5cdFx0dGV4dCA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuXG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRMaXN0ID0gY2hpbGRyZW5cblx0fVxuXHRyZXR1cm4gVm5vZGUoc3RhdGUudGFnLCBhdHRycy5rZXksIGhhc0F0dHJzID8gYXR0cnMgOiB1bmRlZmluZWQsIGNoaWxkTGlzdCwgdGV4dClcbn1cbmZ1bmN0aW9uIGh5cGVyc2NyaXB0KHNlbGVjdG9yKSB7XG5cdC8vIEJlY2F1c2Ugc2xvcHB5IG1vZGUgc3Vja3Ncblx0dmFyIGF0dHJzID0gYXJndW1lbnRzWzFdLCBzdGFydCA9IDIsIGNoaWxkcmVuXG5cdGlmIChzZWxlY3RvciA9PSBudWxsIHx8IHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygc2VsZWN0b3IgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygc2VsZWN0b3IudmlldyAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJUaGUgc2VsZWN0b3IgbXVzdCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBjb21wb25lbnQuXCIpO1xuXHR9XG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcblx0XHR2YXIgY2FjaGVkID0gc2VsZWN0b3JDYWNoZVtzZWxlY3Rvcl0gfHwgY29tcGlsZVNlbGVjdG9yKHNlbGVjdG9yKVxuXHR9XG5cdGlmIChhdHRycyA9PSBudWxsKSB7XG5cdFx0YXR0cnMgPSB7fVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBhdHRycyAhPT0gXCJvYmplY3RcIiB8fCBhdHRycy50YWcgIT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuXHRcdGF0dHJzID0ge31cblx0XHRzdGFydCA9IDFcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gc3RhcnQgKyAxKSB7XG5cdFx0Y2hpbGRyZW4gPSBhcmd1bWVudHNbc3RhcnRdXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgY2hpbGRyZW4gPSBbY2hpbGRyZW5dXG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4gPSBbXVxuXHRcdHdoaWxlIChzdGFydCA8IGFyZ3VtZW50cy5sZW5ndGgpIGNoaWxkcmVuLnB1c2goYXJndW1lbnRzW3N0YXJ0KytdKVxuXHR9XG5cdHZhciBub3JtYWxpemVkID0gVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pXG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gZXhlY1NlbGVjdG9yKGNhY2hlZCwgYXR0cnMsIG5vcm1hbGl6ZWQpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIFZub2RlKHNlbGVjdG9yLCBhdHRycy5rZXksIGF0dHJzLCBub3JtYWxpemVkKVxuXHR9XG59XG5oeXBlcnNjcmlwdC50cnVzdCA9IGZ1bmN0aW9uKGh0bWwpIHtcblx0aWYgKGh0bWwgPT0gbnVsbCkgaHRtbCA9IFwiXCJcblx0cmV0dXJuIFZub2RlKFwiPFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaHRtbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG59XG5oeXBlcnNjcmlwdC5mcmFnbWVudCA9IGZ1bmN0aW9uKGF0dHJzMSwgY2hpbGRyZW4pIHtcblx0cmV0dXJuIFZub2RlKFwiW1wiLCBhdHRyczEua2V5LCBhdHRyczEsIFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG59XG52YXIgbSA9IGh5cGVyc2NyaXB0XG4vKiogQGNvbnN0cnVjdG9yICovXG52YXIgUHJvbWlzZVBvbHlmaWxsID0gZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VQb2x5ZmlsbCkpIHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgbXVzdCBiZSBjYWxsZWQgd2l0aCBgbmV3YFwiKVxuXHRpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb25cIilcblx0dmFyIHNlbGYgPSB0aGlzLCByZXNvbHZlcnMgPSBbXSwgcmVqZWN0b3JzID0gW10sIHJlc29sdmVDdXJyZW50ID0gaGFuZGxlcihyZXNvbHZlcnMsIHRydWUpLCByZWplY3RDdXJyZW50ID0gaGFuZGxlcihyZWplY3RvcnMsIGZhbHNlKVxuXHR2YXIgaW5zdGFuY2UgPSBzZWxmLl9pbnN0YW5jZSA9IHtyZXNvbHZlcnM6IHJlc29sdmVycywgcmVqZWN0b3JzOiByZWplY3RvcnN9XG5cdHZhciBjYWxsQXN5bmMgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBzZXRUaW1lb3V0XG5cdGZ1bmN0aW9uIGhhbmRsZXIobGlzdCwgc2hvdWxkQWJzb3JiKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGUodmFsdWUpIHtcblx0XHRcdHZhciB0aGVuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoc2hvdWxkQWJzb3JiICYmIHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikgJiYgdHlwZW9mICh0aGVuID0gdmFsdWUudGhlbikgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gc2VsZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgdy8gaXRzZWxmXCIpXG5cdFx0XHRcdFx0ZXhlY3V0ZU9uY2UodGhlbi5iaW5kKHZhbHVlKSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRjYWxsQXN5bmMoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXNob3VsZEFic29yYiAmJiBsaXN0Lmxlbmd0aCA9PT0gMCkgY29uc29sZS5lcnJvcihcIlBvc3NpYmxlIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbjpcIiwgdmFsdWUpXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIGxpc3RbaV0odmFsdWUpXG5cdFx0XHRcdFx0XHRyZXNvbHZlcnMubGVuZ3RoID0gMCwgcmVqZWN0b3JzLmxlbmd0aCA9IDBcblx0XHRcdFx0XHRcdGluc3RhbmNlLnN0YXRlID0gc2hvdWxkQWJzb3JiXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5yZXRyeSA9IGZ1bmN0aW9uKCkge2V4ZWN1dGUodmFsdWUpfVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdHJlamVjdEN1cnJlbnQoZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZXhlY3V0ZU9uY2UodGhlbikge1xuXHRcdHZhciBydW5zID0gMFxuXHRcdGZ1bmN0aW9uIHJ1bihmbikge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGlmIChydW5zKysgPiAwKSByZXR1cm5cblx0XHRcdFx0Zm4odmFsdWUpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciBvbmVycm9yID0gcnVuKHJlamVjdEN1cnJlbnQpXG5cdFx0dHJ5IHt0aGVuKHJ1bihyZXNvbHZlQ3VycmVudCksIG9uZXJyb3IpfSBjYXRjaCAoZSkge29uZXJyb3IoZSl9XG5cdH1cblx0ZXhlY3V0ZU9uY2UoZXhlY3V0b3IpXG59XG5Qcm9taXNlUG9seWZpbGwucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3Rpb24pIHtcblx0dmFyIHNlbGYgPSB0aGlzLCBpbnN0YW5jZSA9IHNlbGYuX2luc3RhbmNlXG5cdGZ1bmN0aW9uIGhhbmRsZShjYWxsYmFjaywgbGlzdCwgbmV4dCwgc3RhdGUpIHtcblx0XHRsaXN0LnB1c2goZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgbmV4dCh2YWx1ZSlcblx0XHRcdGVsc2UgdHJ5IHtyZXNvbHZlTmV4dChjYWxsYmFjayh2YWx1ZSkpfSBjYXRjaCAoZSkge2lmIChyZWplY3ROZXh0KSByZWplY3ROZXh0KGUpfVxuXHRcdH0pXG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZS5yZXRyeSA9PT0gXCJmdW5jdGlvblwiICYmIHN0YXRlID09PSBpbnN0YW5jZS5zdGF0ZSkgaW5zdGFuY2UucmV0cnkoKVxuXHR9XG5cdHZhciByZXNvbHZlTmV4dCwgcmVqZWN0TmV4dFxuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7cmVzb2x2ZU5leHQgPSByZXNvbHZlLCByZWplY3ROZXh0ID0gcmVqZWN0fSlcblx0aGFuZGxlKG9uRnVsZmlsbGVkLCBpbnN0YW5jZS5yZXNvbHZlcnMsIHJlc29sdmVOZXh0LCB0cnVlKSwgaGFuZGxlKG9uUmVqZWN0aW9uLCBpbnN0YW5jZS5yZWplY3RvcnMsIHJlamVjdE5leHQsIGZhbHNlKVxuXHRyZXR1cm4gcHJvbWlzZVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG5cdHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pXG59XG5Qcm9taXNlUG9seWZpbGwucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2VQb2x5ZmlsbCkgcmV0dXJuIHZhbHVlXG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUpIHtyZXNvbHZlKHZhbHVlKX0pXG59XG5Qcm9taXNlUG9seWZpbGwucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7cmVqZWN0KHZhbHVlKX0pXG59XG5Qcm9taXNlUG9seWZpbGwuYWxsID0gZnVuY3Rpb24obGlzdCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgdG90YWwgPSBsaXN0Lmxlbmd0aCwgY291bnQgPSAwLCB2YWx1ZXMgPSBbXVxuXHRcdGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmVzb2x2ZShbXSlcblx0XHRlbHNlIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcblx0XHRcdFx0ZnVuY3Rpb24gY29uc3VtZSh2YWx1ZSkge1xuXHRcdFx0XHRcdGNvdW50Kytcblx0XHRcdFx0XHR2YWx1ZXNbaV0gPSB2YWx1ZVxuXHRcdFx0XHRcdGlmIChjb3VudCA9PT0gdG90YWwpIHJlc29sdmUodmFsdWVzKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsaXN0W2ldICE9IG51bGwgJiYgKHR5cGVvZiBsaXN0W2ldID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBsaXN0W2ldID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiBsaXN0W2ldLnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGxpc3RbaV0udGhlbihjb25zdW1lLCByZWplY3QpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBjb25zdW1lKGxpc3RbaV0pXG5cdFx0XHR9KShpKVxuXHRcdH1cblx0fSlcbn1cblByb21pc2VQb2x5ZmlsbC5yYWNlID0gZnVuY3Rpb24obGlzdCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RbaV0udGhlbihyZXNvbHZlLCByZWplY3QpXG5cdFx0fVxuXHR9KVxufVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0aWYgKHR5cGVvZiB3aW5kb3cuUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikgd2luZG93LlByb21pc2UgPSBQcm9taXNlUG9seWZpbGxcblx0dmFyIFByb21pc2VQb2x5ZmlsbCA9IHdpbmRvdy5Qcm9taXNlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWwuUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikgZ2xvYmFsLlByb21pc2UgPSBQcm9taXNlUG9seWZpbGxcblx0dmFyIFByb21pc2VQb2x5ZmlsbCA9IGdsb2JhbC5Qcm9taXNlXG59IGVsc2Uge1xufVxudmFyIGJ1aWxkUXVlcnlTdHJpbmcgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gXCJcIlxuXHR2YXIgYXJncyA9IFtdXG5cdGZvciAodmFyIGtleTAgaW4gb2JqZWN0KSB7XG5cdFx0ZGVzdHJ1Y3R1cmUoa2V5MCwgb2JqZWN0W2tleTBdKVxuXHR9XG5cdHJldHVybiBhcmdzLmpvaW4oXCImXCIpXG5cdGZ1bmN0aW9uIGRlc3RydWN0dXJlKGtleTAsIHZhbHVlKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRlc3RydWN0dXJlKGtleTAgKyBcIltcIiArIGkgKyBcIl1cIiwgdmFsdWVbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdGZvciAodmFyIGkgaW4gdmFsdWUpIHtcblx0XHRcdFx0ZGVzdHJ1Y3R1cmUoa2V5MCArIFwiW1wiICsgaSArIFwiXVwiLCB2YWx1ZVtpXSlcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBhcmdzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleTApICsgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IFwiXCIgPyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiBcIlwiKSlcblx0fVxufVxudmFyIEZJTEVfUFJPVE9DT0xfUkVHRVggPSBuZXcgUmVnRXhwKFwiXmZpbGU6Ly9cIiwgXCJpXCIpXG52YXIgXzggPSBmdW5jdGlvbigkd2luZG93LCBQcm9taXNlKSB7XG5cdHZhciBjYWxsYmFja0NvdW50ID0gMFxuXHR2YXIgb25jb21wbGV0aW9uXG5cdGZ1bmN0aW9uIHNldENvbXBsZXRpb25DYWxsYmFjayhjYWxsYmFjaykge29uY29tcGxldGlvbiA9IGNhbGxiYWNrfVxuXHRmdW5jdGlvbiBmaW5hbGl6ZXIoKSB7XG5cdFx0dmFyIGNvdW50ID0gMFxuXHRcdGZ1bmN0aW9uIGNvbXBsZXRlKCkge2lmICgtLWNvdW50ID09PSAwICYmIHR5cGVvZiBvbmNvbXBsZXRpb24gPT09IFwiZnVuY3Rpb25cIikgb25jb21wbGV0aW9uKCl9XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGZpbmFsaXplKHByb21pc2UwKSB7XG5cdFx0XHR2YXIgdGhlbjAgPSBwcm9taXNlMC50aGVuXG5cdFx0XHRwcm9taXNlMC50aGVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvdW50Kytcblx0XHRcdFx0dmFyIG5leHQgPSB0aGVuMC5hcHBseShwcm9taXNlMCwgYXJndW1lbnRzKVxuXHRcdFx0XHRuZXh0LnRoZW4oY29tcGxldGUsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRjb21wbGV0ZSgpXG5cdFx0XHRcdFx0aWYgKGNvdW50ID09PSAwKSB0aHJvdyBlXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybiBmaW5hbGl6ZShuZXh0KVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHByb21pc2UwXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZShhcmdzLCBleHRyYSkge1xuXHRcdGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0dmFyIHVybCA9IGFyZ3Ncblx0XHRcdGFyZ3MgPSBleHRyYSB8fCB7fVxuXHRcdFx0aWYgKGFyZ3MudXJsID09IG51bGwpIGFyZ3MudXJsID0gdXJsXG5cdFx0fVxuXHRcdHJldHVybiBhcmdzXG5cdH1cblx0ZnVuY3Rpb24gcmVxdWVzdChhcmdzLCBleHRyYSkge1xuXHRcdHZhciBmaW5hbGl6ZSA9IGZpbmFsaXplcigpXG5cdFx0YXJncyA9IG5vcm1hbGl6ZShhcmdzLCBleHRyYSlcblx0XHR2YXIgcHJvbWlzZTAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdGlmIChhcmdzLm1ldGhvZCA9PSBudWxsKSBhcmdzLm1ldGhvZCA9IFwiR0VUXCJcblx0XHRcdGFyZ3MubWV0aG9kID0gYXJncy5tZXRob2QudG9VcHBlckNhc2UoKVxuXHRcdFx0dmFyIHVzZUJvZHkgPSAoYXJncy5tZXRob2QgPT09IFwiR0VUXCIgfHwgYXJncy5tZXRob2QgPT09IFwiVFJBQ0VcIikgPyBmYWxzZSA6ICh0eXBlb2YgYXJncy51c2VCb2R5ID09PSBcImJvb2xlYW5cIiA/IGFyZ3MudXNlQm9keSA6IHRydWUpXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3Muc2VyaWFsaXplICE9PSBcImZ1bmN0aW9uXCIpIGFyZ3Muc2VyaWFsaXplID0gdHlwZW9mIEZvcm1EYXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGFyZ3MuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhID8gZnVuY3Rpb24odmFsdWUpIHtyZXR1cm4gdmFsdWV9IDogSlNPTi5zdHJpbmdpZnlcblx0XHRcdGlmICh0eXBlb2YgYXJncy5kZXNlcmlhbGl6ZSAhPT0gXCJmdW5jdGlvblwiKSBhcmdzLmRlc2VyaWFsaXplID0gZGVzZXJpYWxpemVcblx0XHRcdGlmICh0eXBlb2YgYXJncy5leHRyYWN0ICE9PSBcImZ1bmN0aW9uXCIpIGFyZ3MuZXh0cmFjdCA9IGV4dHJhY3Rcblx0XHRcdGFyZ3MudXJsID0gaW50ZXJwb2xhdGUoYXJncy51cmwsIGFyZ3MuZGF0YSlcblx0XHRcdGlmICh1c2VCb2R5KSBhcmdzLmRhdGEgPSBhcmdzLnNlcmlhbGl6ZShhcmdzLmRhdGEpXG5cdFx0XHRlbHNlIGFyZ3MudXJsID0gYXNzZW1ibGUoYXJncy51cmwsIGFyZ3MuZGF0YSlcblx0XHRcdHZhciB4aHIgPSBuZXcgJHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpLFxuXHRcdFx0XHRhYm9ydGVkID0gZmFsc2UsXG5cdFx0XHRcdF9hYm9ydCA9IHhoci5hYm9ydFxuXHRcdFx0eGhyLmFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG5cdFx0XHRcdGFib3J0ZWQgPSB0cnVlXG5cdFx0XHRcdF9hYm9ydC5jYWxsKHhocilcblx0XHRcdH1cblx0XHRcdHhoci5vcGVuKGFyZ3MubWV0aG9kLCBhcmdzLnVybCwgdHlwZW9mIGFyZ3MuYXN5bmMgPT09IFwiYm9vbGVhblwiID8gYXJncy5hc3luYyA6IHRydWUsIHR5cGVvZiBhcmdzLnVzZXIgPT09IFwic3RyaW5nXCIgPyBhcmdzLnVzZXIgOiB1bmRlZmluZWQsIHR5cGVvZiBhcmdzLnBhc3N3b3JkID09PSBcInN0cmluZ1wiID8gYXJncy5wYXNzd29yZCA6IHVuZGVmaW5lZClcblx0XHRcdGlmIChhcmdzLnNlcmlhbGl6ZSA9PT0gSlNPTi5zdHJpbmdpZnkgJiYgdXNlQm9keSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIilcblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLmRlc2VyaWFsaXplID09PSBkZXNlcmlhbGl6ZSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvKlwiKVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFyZ3Mud2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gYXJncy53aXRoQ3JlZGVudGlhbHNcblx0XHRcdGZvciAodmFyIGtleSBpbiBhcmdzLmhlYWRlcnMpIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3MuaGVhZGVycywga2V5KSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGFyZ3MuaGVhZGVyc1trZXldKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLmNvbmZpZyA9PT0gXCJmdW5jdGlvblwiKSB4aHIgPSBhcmdzLmNvbmZpZyh4aHIsIGFyZ3MpIHx8IHhoclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBEb24ndCB0aHJvdyBlcnJvcnMgb24geGhyLmFib3J0KCkuXG5cdFx0XHRcdGlmKGFib3J0ZWQpIHJldHVyblxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0gKGFyZ3MuZXh0cmFjdCAhPT0gZXh0cmFjdCkgPyBhcmdzLmV4dHJhY3QoeGhyLCBhcmdzKSA6IGFyZ3MuZGVzZXJpYWxpemUoYXJncy5leHRyYWN0KHhociwgYXJncykpXG5cdFx0XHRcdFx0XHRpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT09IDMwNCB8fCBGSUxFX1BST1RPQ09MX1JFR0VYLnRlc3QoYXJncy51cmwpKSB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoY2FzdChhcmdzLnR5cGUsIHJlc3BvbnNlKSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoeGhyLnJlc3BvbnNlVGV4dClcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHJlc3BvbnNlKSBlcnJvcltrZXldID0gcmVzcG9uc2Vba2V5XVxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh1c2VCb2R5ICYmIChhcmdzLmRhdGEgIT0gbnVsbCkpIHhoci5zZW5kKGFyZ3MuZGF0YSlcblx0XHRcdGVsc2UgeGhyLnNlbmQoKVxuXHRcdH0pXG5cdFx0cmV0dXJuIGFyZ3MuYmFja2dyb3VuZCA9PT0gdHJ1ZSA/IHByb21pc2UwIDogZmluYWxpemUocHJvbWlzZTApXG5cdH1cblx0ZnVuY3Rpb24ganNvbnAoYXJncywgZXh0cmEpIHtcblx0XHR2YXIgZmluYWxpemUgPSBmaW5hbGl6ZXIoKVxuXHRcdGFyZ3MgPSBub3JtYWxpemUoYXJncywgZXh0cmEpXG5cdFx0dmFyIHByb21pc2UwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tOYW1lID0gYXJncy5jYWxsYmFja05hbWUgfHwgXCJfbWl0aHJpbF9cIiArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTYpICsgXCJfXCIgKyBjYWxsYmFja0NvdW50Kytcblx0XHRcdHZhciBzY3JpcHQgPSAkd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcblx0XHRcdCR3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZXNvbHZlKGNhc3QoYXJncy50eXBlLCBkYXRhKSlcblx0XHRcdFx0ZGVsZXRlICR3aW5kb3dbY2FsbGJhY2tOYW1lXVxuXHRcdFx0fVxuXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiSlNPTlAgcmVxdWVzdCBmYWlsZWRcIikpXG5cdFx0XHRcdGRlbGV0ZSAkd2luZG93W2NhbGxiYWNrTmFtZV1cblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLmRhdGEgPT0gbnVsbCkgYXJncy5kYXRhID0ge31cblx0XHRcdGFyZ3MudXJsID0gaW50ZXJwb2xhdGUoYXJncy51cmwsIGFyZ3MuZGF0YSlcblx0XHRcdGFyZ3MuZGF0YVthcmdzLmNhbGxiYWNrS2V5IHx8IFwiY2FsbGJhY2tcIl0gPSBjYWxsYmFja05hbWVcblx0XHRcdHNjcmlwdC5zcmMgPSBhc3NlbWJsZShhcmdzLnVybCwgYXJncy5kYXRhKVxuXHRcdFx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXHRcdH0pXG5cdFx0cmV0dXJuIGFyZ3MuYmFja2dyb3VuZCA9PT0gdHJ1ZT8gcHJvbWlzZTAgOiBmaW5hbGl6ZShwcm9taXNlMClcblx0fVxuXHRmdW5jdGlvbiBpbnRlcnBvbGF0ZSh1cmwsIGRhdGEpIHtcblx0XHRpZiAoZGF0YSA9PSBudWxsKSByZXR1cm4gdXJsXG5cdFx0dmFyIHRva2VucyA9IHVybC5tYXRjaCgvOlteXFwvXSsvZ2kpIHx8IFtdXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBrZXkgPSB0b2tlbnNbaV0uc2xpY2UoMSlcblx0XHRcdGlmIChkYXRhW2tleV0gIT0gbnVsbCkge1xuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZSh0b2tlbnNbaV0sIGRhdGFba2V5XSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHVybFxuXHR9XG5cdGZ1bmN0aW9uIGFzc2VtYmxlKHVybCwgZGF0YSkge1xuXHRcdHZhciBxdWVyeXN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmcoZGF0YSlcblx0XHRpZiAocXVlcnlzdHJpbmcgIT09IFwiXCIpIHtcblx0XHRcdHZhciBwcmVmaXggPSB1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIlxuXHRcdFx0dXJsICs9IHByZWZpeCArIHF1ZXJ5c3RyaW5nXG5cdFx0fVxuXHRcdHJldHVybiB1cmxcblx0fVxuXHRmdW5jdGlvbiBkZXNlcmlhbGl6ZShkYXRhKSB7XG5cdFx0dHJ5IHtyZXR1cm4gZGF0YSAhPT0gXCJcIiA/IEpTT04ucGFyc2UoZGF0YSkgOiBudWxsfVxuXHRcdGNhdGNoIChlKSB7dGhyb3cgbmV3IEVycm9yKGRhdGEpfVxuXHR9XG5cdGZ1bmN0aW9uIGV4dHJhY3QoeGhyKSB7cmV0dXJuIHhoci5yZXNwb25zZVRleHR9XG5cdGZ1bmN0aW9uIGNhc3QodHlwZTAsIGRhdGEpIHtcblx0XHRpZiAodHlwZW9mIHR5cGUwID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGRhdGFbaV0gPSBuZXcgdHlwZTAoZGF0YVtpXSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSByZXR1cm4gbmV3IHR5cGUwKGRhdGEpXG5cdFx0fVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblx0cmV0dXJuIHtyZXF1ZXN0OiByZXF1ZXN0LCBqc29ucDoganNvbnAsIHNldENvbXBsZXRpb25DYWxsYmFjazogc2V0Q29tcGxldGlvbkNhbGxiYWNrfVxufVxudmFyIHJlcXVlc3RTZXJ2aWNlID0gXzgod2luZG93LCBQcm9taXNlUG9seWZpbGwpXG52YXIgY29yZVJlbmRlcmVyID0gZnVuY3Rpb24oJHdpbmRvdykge1xuXHR2YXIgJGRvYyA9ICR3aW5kb3cuZG9jdW1lbnRcblx0dmFyICRlbXB0eUZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0dmFyIG5hbWVTcGFjZSA9IHtcblx0XHRzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcblx0XHRtYXRoOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIlxuXHR9XG5cdHZhciBvbmV2ZW50XG5cdGZ1bmN0aW9uIHNldEV2ZW50Q2FsbGJhY2soY2FsbGJhY2spIHtyZXR1cm4gb25ldmVudCA9IGNhbGxiYWNrfVxuXHRmdW5jdGlvbiBnZXROYW1lU3BhY2Uodm5vZGUpIHtcblx0XHRyZXR1cm4gdm5vZGUuYXR0cnMgJiYgdm5vZGUuYXR0cnMueG1sbnMgfHwgbmFtZVNwYWNlW3Zub2RlLnRhZ11cblx0fVxuXHQvL2NyZWF0ZVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIHRhZyA9IHZub2RlLnRhZ1xuXHRcdGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IHt9XG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgaW5pdExpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0c3dpdGNoICh0YWcpIHtcblx0XHRcdFx0Y2FzZSBcIiNcIjogcmV0dXJuIGNyZWF0ZVRleHQocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdGNhc2UgXCI8XCI6IHJldHVybiBjcmVhdGVIVE1MKHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRjYXNlIFwiW1wiOiByZXR1cm4gY3JlYXRlRnJhZ21lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdFx0ZGVmYXVsdDogcmV0dXJuIGNyZWF0ZUVsZW1lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gY3JlYXRlQ29tcG9uZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlVGV4dChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZykge1xuXHRcdHZub2RlLmRvbSA9ICRkb2MuY3JlYXRlVGV4dE5vZGUodm5vZGUuY2hpbGRyZW4pXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIHZub2RlLmRvbSwgbmV4dFNpYmxpbmcpXG5cdFx0cmV0dXJuIHZub2RlLmRvbVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgbWF0Y2gxID0gdm5vZGUuY2hpbGRyZW4ubWF0Y2goL15cXHMqPzwoXFx3KykvaW0pIHx8IFtdXG5cdFx0dmFyIHBhcmVudDEgPSB7Y2FwdGlvbjogXCJ0YWJsZVwiLCB0aGVhZDogXCJ0YWJsZVwiLCB0Ym9keTogXCJ0YWJsZVwiLCB0Zm9vdDogXCJ0YWJsZVwiLCB0cjogXCJ0Ym9keVwiLCB0aDogXCJ0clwiLCB0ZDogXCJ0clwiLCBjb2xncm91cDogXCJ0YWJsZVwiLCBjb2w6IFwiY29sZ3JvdXBcIn1bbWF0Y2gxWzFdXSB8fCBcImRpdlwiXG5cdFx0dmFyIHRlbXAgPSAkZG9jLmNyZWF0ZUVsZW1lbnQocGFyZW50MSlcblx0XHR0ZW1wLmlubmVySFRNTCA9IHZub2RlLmNoaWxkcmVuXG5cdFx0dm5vZGUuZG9tID0gdGVtcC5maXJzdENoaWxkXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IHRlbXAuY2hpbGROb2Rlcy5sZW5ndGhcblx0XHR2YXIgZnJhZ21lbnQgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdHZhciBjaGlsZFxuXHRcdHdoaWxlIChjaGlsZCA9IHRlbXAuZmlyc3RDaGlsZCkge1xuXHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG5cdFx0fVxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnbWVudCwgbmV4dFNpYmxpbmcpXG5cdFx0cmV0dXJuIGZyYWdtZW50XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0aWYgKHZub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRjcmVhdGVOb2RlcyhmcmFnbWVudCwgY2hpbGRyZW4sIDAsIGNoaWxkcmVuLmxlbmd0aCwgaG9va3MsIG51bGwsIG5zKVxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBmcmFnbWVudC5maXJzdENoaWxkXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWdtZW50LCBuZXh0U2libGluZylcblx0XHRyZXR1cm4gZnJhZ21lbnRcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0dmFyIGF0dHJzMiA9IHZub2RlLmF0dHJzXG5cdFx0dmFyIGlzID0gYXR0cnMyICYmIGF0dHJzMi5pc1xuXHRcdG5zID0gZ2V0TmFtZVNwYWNlKHZub2RlKSB8fCBuc1xuXHRcdHZhciBlbGVtZW50ID0gbnMgP1xuXHRcdFx0aXMgPyAkZG9jLmNyZWF0ZUVsZW1lbnROUyhucywgdGFnLCB7aXM6IGlzfSkgOiAkZG9jLmNyZWF0ZUVsZW1lbnROUyhucywgdGFnKSA6XG5cdFx0XHRpcyA/ICRkb2MuY3JlYXRlRWxlbWVudCh0YWcsIHtpczogaXN9KSA6ICRkb2MuY3JlYXRlRWxlbWVudCh0YWcpXG5cdFx0dm5vZGUuZG9tID0gZWxlbWVudFxuXHRcdGlmIChhdHRyczIgIT0gbnVsbCkge1xuXHRcdFx0c2V0QXR0cnModm5vZGUsIGF0dHJzMiwgbnMpXG5cdFx0fVxuXHRcdGluc2VydE5vZGUocGFyZW50LCBlbGVtZW50LCBuZXh0U2libGluZylcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB2bm9kZS5hdHRycy5jb250ZW50ZWRpdGFibGUgIT0gbnVsbCkge1xuXHRcdFx0c2V0Q29udGVudEVkaXRhYmxlKHZub2RlKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKHZub2RlLnRleHQgIT09IFwiXCIpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB2bm9kZS50ZXh0XG5cdFx0XHRcdGVsc2Ugdm5vZGUuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2bm9kZS50ZXh0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCldXG5cdFx0XHR9XG5cdFx0XHRpZiAodm5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0XHRjcmVhdGVOb2RlcyhlbGVtZW50LCBjaGlsZHJlbiwgMCwgY2hpbGRyZW4ubGVuZ3RoLCBob29rcywgbnVsbCwgbnMpXG5cdFx0XHRcdHNldExhdGVBdHRycyh2bm9kZSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGVsZW1lbnRcblx0fVxuXHRmdW5jdGlvbiBpbml0Q29tcG9uZW50KHZub2RlLCBob29rcykge1xuXHRcdHZhciBzZW50aW5lbFxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnLnZpZXcgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHZub2RlLnRhZylcblx0XHRcdHNlbnRpbmVsID0gdm5vZGUuc3RhdGUudmlld1xuXHRcdFx0aWYgKHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkICE9IG51bGwpIHJldHVybiAkZW1wdHlGcmFnbWVudFxuXHRcdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSB0cnVlXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZub2RlLnN0YXRlID0gdm9pZCAwXG5cdFx0XHRzZW50aW5lbCA9IHZub2RlLnRhZ1xuXHRcdFx0aWYgKHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkICE9IG51bGwpIHJldHVybiAkZW1wdHlGcmFnbWVudFxuXHRcdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSB0cnVlXG5cdFx0XHR2bm9kZS5zdGF0ZSA9ICh2bm9kZS50YWcucHJvdG90eXBlICE9IG51bGwgJiYgdHlwZW9mIHZub2RlLnRhZy5wcm90b3R5cGUudmlldyA9PT0gXCJmdW5jdGlvblwiKSA/IG5ldyB2bm9kZS50YWcodm5vZGUpIDogdm5vZGUudGFnKHZub2RlKVxuXHRcdH1cblx0XHR2bm9kZS5fc3RhdGUgPSB2bm9kZS5zdGF0ZVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0aW5pdExpZmVjeWNsZSh2bm9kZS5fc3RhdGUsIHZub2RlLCBob29rcylcblx0XHR2bm9kZS5pbnN0YW5jZSA9IFZub2RlLm5vcm1hbGl6ZSh2bm9kZS5fc3RhdGUudmlldy5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSkpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlID09PSB2bm9kZSkgdGhyb3cgRXJyb3IoXCJBIHZpZXcgY2Fubm90IHJldHVybiB0aGUgdm5vZGUgaXQgcmVjZWl2ZWQgYXMgYXJndW1lbnRcIilcblx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IG51bGxcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHR2YXIgZWxlbWVudCA9IGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdHZub2RlLmRvbSA9IHZub2RlLmluc3RhbmNlLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IHZub2RlLmRvbSAhPSBudWxsID8gdm5vZGUuaW5zdGFuY2UuZG9tU2l6ZSA6IDBcblx0XHRcdGluc2VydE5vZGUocGFyZW50LCBlbGVtZW50LCBuZXh0U2libGluZylcblx0XHRcdHJldHVybiBlbGVtZW50XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IDBcblx0XHRcdHJldHVybiAkZW1wdHlGcmFnbWVudFxuXHRcdH1cblx0fVxuXHQvL3VwZGF0ZVxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlcyhwYXJlbnQsIG9sZCwgdm5vZGVzLCByZWN5Y2xpbmcsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHRpZiAob2xkID09PSB2bm9kZXMgfHwgb2xkID09IG51bGwgJiYgdm5vZGVzID09IG51bGwpIHJldHVyblxuXHRcdGVsc2UgaWYgKG9sZCA9PSBudWxsKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2RlcywgMCwgdm5vZGVzLmxlbmd0aCwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRlbHNlIGlmICh2bm9kZXMgPT0gbnVsbCkgcmVtb3ZlTm9kZXMob2xkLCAwLCBvbGQubGVuZ3RoLCB2bm9kZXMpXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAob2xkLmxlbmd0aCA9PT0gdm5vZGVzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaXNVbmtleWVkID0gZmFsc2Vcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodm5vZGVzW2ldICE9IG51bGwgJiYgb2xkW2ldICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGlzVW5rZXllZCA9IHZub2Rlc1tpXS5rZXkgPT0gbnVsbCAmJiBvbGRbaV0ua2V5ID09IG51bGxcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc1Vua2V5ZWQpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9sZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKG9sZFtpXSA9PT0gdm5vZGVzW2ldKSBjb250aW51ZVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAob2xkW2ldID09IG51bGwgJiYgdm5vZGVzW2ldICE9IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZXNbaV0sIGhvb2tzLCBucywgZ2V0TmV4dFNpYmxpbmcob2xkLCBpICsgMSwgbmV4dFNpYmxpbmcpKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAodm5vZGVzW2ldID09IG51bGwpIHJlbW92ZU5vZGVzKG9sZCwgaSwgaSArIDEsIHZub2Rlcylcblx0XHRcdFx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG9sZFtpXSwgdm5vZGVzW2ldLCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBpICsgMSwgbmV4dFNpYmxpbmcpLCByZWN5Y2xpbmcsIG5zKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmVjeWNsaW5nID0gcmVjeWNsaW5nIHx8IGlzUmVjeWNsYWJsZShvbGQsIHZub2Rlcylcblx0XHRcdGlmIChyZWN5Y2xpbmcpIHtcblx0XHRcdFx0dmFyIHBvb2wgPSBvbGQucG9vbFxuXHRcdFx0XHRvbGQgPSBvbGQuY29uY2F0KG9sZC5wb29sKVxuXHRcdFx0fVxuXHRcdFx0dmFyIG9sZFN0YXJ0ID0gMCwgc3RhcnQgPSAwLCBvbGRFbmQgPSBvbGQubGVuZ3RoIC0gMSwgZW5kID0gdm5vZGVzLmxlbmd0aCAtIDEsIG1hcFxuXHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0dmFyIG8gPSBvbGRbb2xkU3RhcnRdLCB2ID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0XHRpZiAobyA9PT0gdiAmJiAhcmVjeWNsaW5nKSBvbGRTdGFydCsrLCBzdGFydCsrXG5cdFx0XHRcdGVsc2UgaWYgKG8gPT0gbnVsbCkgb2xkU3RhcnQrK1xuXHRcdFx0XHRlbHNlIGlmICh2ID09IG51bGwpIHN0YXJ0Kytcblx0XHRcdFx0ZWxzZSBpZiAoby5rZXkgPT09IHYua2V5KSB7XG5cdFx0XHRcdFx0dmFyIHNob3VsZFJlY3ljbGUgPSAocG9vbCAhPSBudWxsICYmIG9sZFN0YXJ0ID49IG9sZC5sZW5ndGggLSBwb29sLmxlbmd0aCkgfHwgKChwb29sID09IG51bGwpICYmIHJlY3ljbGluZylcblx0XHRcdFx0XHRvbGRTdGFydCsrLCBzdGFydCsrXG5cdFx0XHRcdFx0dXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZFN0YXJ0LCBuZXh0U2libGluZyksIHNob3VsZFJlY3ljbGUsIG5zKVxuXHRcdFx0XHRcdGlmIChyZWN5Y2xpbmcgJiYgby50YWcgPT09IHYudGFnKSBpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudChvKSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG8gPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHRcdGlmIChvID09PSB2ICYmICFyZWN5Y2xpbmcpIG9sZEVuZC0tLCBzdGFydCsrXG5cdFx0XHRcdFx0ZWxzZSBpZiAobyA9PSBudWxsKSBvbGRFbmQtLVxuXHRcdFx0XHRcdGVsc2UgaWYgKHYgPT0gbnVsbCkgc3RhcnQrK1xuXHRcdFx0XHRcdGVsc2UgaWYgKG8ua2V5ID09PSB2LmtleSkge1xuXHRcdFx0XHRcdFx0dmFyIHNob3VsZFJlY3ljbGUgPSAocG9vbCAhPSBudWxsICYmIG9sZEVuZCA+PSBvbGQubGVuZ3RoIC0gcG9vbC5sZW5ndGgpIHx8ICgocG9vbCA9PSBudWxsKSAmJiByZWN5Y2xpbmcpXG5cdFx0XHRcdFx0XHR1cGRhdGVOb2RlKHBhcmVudCwgbywgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkRW5kICsgMSwgbmV4dFNpYmxpbmcpLCBzaG91bGRSZWN5Y2xlLCBucylcblx0XHRcdFx0XHRcdGlmIChyZWN5Y2xpbmcgfHwgc3RhcnQgPCBlbmQpIGluc2VydE5vZGUocGFyZW50LCB0b0ZyYWdtZW50KG8pLCBnZXROZXh0U2libGluZyhvbGQsIG9sZFN0YXJ0LCBuZXh0U2libGluZykpXG5cdFx0XHRcdFx0XHRvbGRFbmQtLSwgc3RhcnQrK1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdHZhciBvID0gb2xkW29sZEVuZF0sIHYgPSB2bm9kZXNbZW5kXVxuXHRcdFx0XHRpZiAobyA9PT0gdiAmJiAhcmVjeWNsaW5nKSBvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0ZWxzZSBpZiAobyA9PSBudWxsKSBvbGRFbmQtLVxuXHRcdFx0XHRlbHNlIGlmICh2ID09IG51bGwpIGVuZC0tXG5cdFx0XHRcdGVsc2UgaWYgKG8ua2V5ID09PSB2LmtleSkge1xuXHRcdFx0XHRcdHZhciBzaG91bGRSZWN5Y2xlID0gKHBvb2wgIT0gbnVsbCAmJiBvbGRFbmQgPj0gb2xkLmxlbmd0aCAtIHBvb2wubGVuZ3RoKSB8fCAoKHBvb2wgPT0gbnVsbCkgJiYgcmVjeWNsaW5nKVxuXHRcdFx0XHRcdHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRFbmQgKyAxLCBuZXh0U2libGluZyksIHNob3VsZFJlY3ljbGUsIG5zKVxuXHRcdFx0XHRcdGlmIChyZWN5Y2xpbmcgJiYgby50YWcgPT09IHYudGFnKSBpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudChvKSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0aWYgKG8uZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gby5kb21cblx0XHRcdFx0XHRvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRpZiAoIW1hcCkgbWFwID0gZ2V0S2V5TWFwKG9sZCwgb2xkRW5kKVxuXHRcdFx0XHRcdGlmICh2ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdHZhciBvbGRJbmRleCA9IG1hcFt2LmtleV1cblx0XHRcdFx0XHRcdGlmIChvbGRJbmRleCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBtb3ZhYmxlID0gb2xkW29sZEluZGV4XVxuXHRcdFx0XHRcdFx0XHR2YXIgc2hvdWxkUmVjeWNsZSA9IChwb29sICE9IG51bGwgJiYgb2xkSW5kZXggPj0gb2xkLmxlbmd0aCAtIHBvb2wubGVuZ3RoKSB8fCAoKHBvb2wgPT0gbnVsbCkgJiYgcmVjeWNsaW5nKVxuXHRcdFx0XHRcdFx0XHR1cGRhdGVOb2RlKHBhcmVudCwgbW92YWJsZSwgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkRW5kICsgMSwgbmV4dFNpYmxpbmcpLCByZWN5Y2xpbmcsIG5zKVxuXHRcdFx0XHRcdFx0XHRpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudChtb3ZhYmxlKSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdG9sZFtvbGRJbmRleF0uc2tpcCA9IHRydWVcblx0XHRcdFx0XHRcdFx0aWYgKG1vdmFibGUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gbW92YWJsZS5kb21cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgZG9tID0gY3JlYXRlTm9kZShwYXJlbnQsIHYsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdG5leHRTaWJsaW5nID0gZG9tXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVuZC0tXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVuZCA8IHN0YXJ0KSBicmVha1xuXHRcdFx0fVxuXHRcdFx0Y3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQgKyAxLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0cmVtb3ZlTm9kZXMob2xkLCBvbGRTdGFydCwgb2xkRW5kICsgMSwgdm5vZGVzKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlKHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCByZWN5Y2xpbmcsIG5zKSB7XG5cdFx0dmFyIG9sZFRhZyA9IG9sZC50YWcsIHRhZyA9IHZub2RlLnRhZ1xuXHRcdGlmIChvbGRUYWcgPT09IHRhZykge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSBvbGQuc3RhdGVcblx0XHRcdHZub2RlLl9zdGF0ZSA9IG9sZC5fc3RhdGVcblx0XHRcdHZub2RlLmV2ZW50cyA9IG9sZC5ldmVudHNcblx0XHRcdGlmICghcmVjeWNsaW5nICYmIHNob3VsZE5vdFVwZGF0ZSh2bm9kZSwgb2xkKSkgcmV0dXJuXG5cdFx0XHRpZiAodHlwZW9mIG9sZFRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChyZWN5Y2xpbmcpIHtcblx0XHRcdFx0XHRcdHZub2RlLnN0YXRlID0ge31cblx0XHRcdFx0XHRcdGluaXRMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB1cGRhdGVMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKG9sZFRhZykge1xuXHRcdFx0XHRcdGNhc2UgXCIjXCI6IHVwZGF0ZVRleHQob2xkLCB2bm9kZSk7IGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBcIjxcIjogdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0XHRjYXNlIFwiW1wiOiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIHJlY3ljbGluZywgaG9va3MsIG5leHRTaWJsaW5nLCBucyk7IGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDogdXBkYXRlRWxlbWVudChvbGQsIHZub2RlLCByZWN5Y2xpbmcsIGhvb2tzLCBucylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB1cGRhdGVDb21wb25lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIHJlY3ljbGluZywgbnMpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmVtb3ZlTm9kZShvbGQsIG51bGwpXG5cdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVRleHQob2xkLCB2bm9kZSkge1xuXHRcdGlmIChvbGQuY2hpbGRyZW4udG9TdHJpbmcoKSAhPT0gdm5vZGUuY2hpbGRyZW4udG9TdHJpbmcoKSkge1xuXHRcdFx0b2xkLmRvbS5ub2RlVmFsdWUgPSB2bm9kZS5jaGlsZHJlblxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0aWYgKG9sZC5jaGlsZHJlbiAhPT0gdm5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdHRvRnJhZ21lbnQob2xkKVxuXHRcdFx0Y3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZylcblx0XHR9XG5cdFx0ZWxzZSB2bm9kZS5kb20gPSBvbGQuZG9tLCB2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIHJlY3ljbGluZywgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHVwZGF0ZU5vZGVzKHBhcmVudCwgb2xkLmNoaWxkcmVuLCB2bm9kZS5jaGlsZHJlbiwgcmVjeWNsaW5nLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdHZhciBkb21TaXplID0gMCwgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdHZub2RlLmRvbSA9IG51bGxcblx0XHRpZiAoY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCAmJiBjaGlsZC5kb20gIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmICh2bm9kZS5kb20gPT0gbnVsbCkgdm5vZGUuZG9tID0gY2hpbGQuZG9tXG5cdFx0XHRcdFx0ZG9tU2l6ZSArPSBjaGlsZC5kb21TaXplIHx8IDFcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbVNpemUgIT09IDEpIHZub2RlLmRvbVNpemUgPSBkb21TaXplXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkLCB2bm9kZSwgcmVjeWNsaW5nLCBob29rcywgbnMpIHtcblx0XHR2YXIgZWxlbWVudCA9IHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRucyA9IGdldE5hbWVTcGFjZSh2bm9kZSkgfHwgbnNcblx0XHRpZiAodm5vZGUudGFnID09PSBcInRleHRhcmVhXCIpIHtcblx0XHRcdGlmICh2bm9kZS5hdHRycyA9PSBudWxsKSB2bm9kZS5hdHRycyA9IHt9XG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdHZub2RlLmF0dHJzLnZhbHVlID0gdm5vZGUudGV4dCAvL0ZJWE1FIGhhbmRsZTAgbXVsdGlwbGUgY2hpbGRyZW5cblx0XHRcdFx0dm5vZGUudGV4dCA9IHVuZGVmaW5lZFxuXHRcdFx0fVxuXHRcdH1cblx0XHR1cGRhdGVBdHRycyh2bm9kZSwgb2xkLmF0dHJzLCB2bm9kZS5hdHRycywgbnMpXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwgJiYgdm5vZGUuYXR0cnMuY29udGVudGVkaXRhYmxlICE9IG51bGwpIHtcblx0XHRcdHNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSlcblx0XHR9XG5cdFx0ZWxzZSBpZiAob2xkLnRleHQgIT0gbnVsbCAmJiB2bm9kZS50ZXh0ICE9IG51bGwgJiYgdm5vZGUudGV4dCAhPT0gXCJcIikge1xuXHRcdFx0aWYgKG9sZC50ZXh0LnRvU3RyaW5nKCkgIT09IHZub2RlLnRleHQudG9TdHJpbmcoKSkgb2xkLmRvbS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZub2RlLnRleHRcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAob2xkLnRleHQgIT0gbnVsbCkgb2xkLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgb2xkLnRleHQsIHVuZGVmaW5lZCwgb2xkLmRvbS5maXJzdENoaWxkKV1cblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHZub2RlLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdm5vZGUudGV4dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXVxuXHRcdFx0dXBkYXRlTm9kZXMoZWxlbWVudCwgb2xkLmNoaWxkcmVuLCB2bm9kZS5jaGlsZHJlbiwgcmVjeWNsaW5nLCBob29rcywgbnVsbCwgbnMpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgcmVjeWNsaW5nLCBucykge1xuXHRcdGlmIChyZWN5Y2xpbmcpIHtcblx0XHRcdGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2bm9kZS5pbnN0YW5jZSA9IFZub2RlLm5vcm1hbGl6ZSh2bm9kZS5fc3RhdGUudmlldy5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSkpXG5cdFx0XHRpZiAodm5vZGUuaW5zdGFuY2UgPT09IHZub2RlKSB0aHJvdyBFcnJvcihcIkEgdmlldyBjYW5ub3QgcmV0dXJuIHRoZSB2bm9kZSBpdCByZWNlaXZlZCBhcyBhcmd1bWVudFwiKVxuXHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0dXBkYXRlTGlmZWN5Y2xlKHZub2RlLl9zdGF0ZSwgdm5vZGUsIGhvb2tzKVxuXHRcdH1cblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0aWYgKG9sZC5pbnN0YW5jZSA9PSBudWxsKSBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRlbHNlIHVwZGF0ZU5vZGUocGFyZW50LCBvbGQuaW5zdGFuY2UsIHZub2RlLmluc3RhbmNlLCBob29rcywgbmV4dFNpYmxpbmcsIHJlY3ljbGluZywgbnMpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5pbnN0YW5jZS5kb21TaXplXG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9sZC5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRyZW1vdmVOb2RlKG9sZC5pbnN0YW5jZSwgbnVsbClcblx0XHRcdHZub2RlLmRvbSA9IHVuZGVmaW5lZFxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IDBcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaXNSZWN5Y2xhYmxlKG9sZCwgdm5vZGVzKSB7XG5cdFx0aWYgKG9sZC5wb29sICE9IG51bGwgJiYgTWF0aC5hYnMob2xkLnBvb2wubGVuZ3RoIC0gdm5vZGVzLmxlbmd0aCkgPD0gTWF0aC5hYnMob2xkLmxlbmd0aCAtIHZub2Rlcy5sZW5ndGgpKSB7XG5cdFx0XHR2YXIgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRbMF0gJiYgb2xkWzBdLmNoaWxkcmVuICYmIG9sZFswXS5jaGlsZHJlbi5sZW5ndGggfHwgMFxuXHRcdFx0dmFyIHBvb2xDaGlsZHJlbkxlbmd0aCA9IG9sZC5wb29sWzBdICYmIG9sZC5wb29sWzBdLmNoaWxkcmVuICYmIG9sZC5wb29sWzBdLmNoaWxkcmVuLmxlbmd0aCB8fCAwXG5cdFx0XHR2YXIgdm5vZGVzQ2hpbGRyZW5MZW5ndGggPSB2bm9kZXNbMF0gJiYgdm5vZGVzWzBdLmNoaWxkcmVuICYmIHZub2Rlc1swXS5jaGlsZHJlbi5sZW5ndGggfHwgMFxuXHRcdFx0aWYgKE1hdGguYWJzKHBvb2xDaGlsZHJlbkxlbmd0aCAtIHZub2Rlc0NoaWxkcmVuTGVuZ3RoKSA8PSBNYXRoLmFicyhvbGRDaGlsZHJlbkxlbmd0aCAtIHZub2Rlc0NoaWxkcmVuTGVuZ3RoKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHRmdW5jdGlvbiBnZXRLZXlNYXAodm5vZGVzLCBlbmQpIHtcblx0XHR2YXIgbWFwID0ge30sIGkgPSAwXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmQ7IGkrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW2ldXG5cdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIga2V5MiA9IHZub2RlLmtleVxuXHRcdFx0XHRpZiAoa2V5MiAhPSBudWxsKSBtYXBba2V5Ml0gPSBpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBtYXBcblx0fVxuXHRmdW5jdGlvbiB0b0ZyYWdtZW50KHZub2RlKSB7XG5cdFx0dmFyIGNvdW50MCA9IHZub2RlLmRvbVNpemVcblx0XHRpZiAoY291bnQwICE9IG51bGwgfHwgdm5vZGUuZG9tID09IG51bGwpIHtcblx0XHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0XHRpZiAoY291bnQwID4gMCkge1xuXHRcdFx0XHR2YXIgZG9tID0gdm5vZGUuZG9tXG5cdFx0XHRcdHdoaWxlICgtLWNvdW50MCkgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9tLm5leHRTaWJsaW5nKVxuXHRcdFx0XHRmcmFnbWVudC5pbnNlcnRCZWZvcmUoZG9tLCBmcmFnbWVudC5maXJzdENoaWxkKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuIHZub2RlLmRvbVxuXHR9XG5cdGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKHZub2RlcywgaSwgbmV4dFNpYmxpbmcpIHtcblx0XHRmb3IgKDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHZub2Rlc1tpXSAhPSBudWxsICYmIHZub2Rlc1tpXS5kb20gIT0gbnVsbCkgcmV0dXJuIHZub2Rlc1tpXS5kb21cblx0XHR9XG5cdFx0cmV0dXJuIG5leHRTaWJsaW5nXG5cdH1cblx0ZnVuY3Rpb24gaW5zZXJ0Tm9kZShwYXJlbnQsIGRvbSwgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcucGFyZW50Tm9kZSkgcGFyZW50Lmluc2VydEJlZm9yZShkb20sIG5leHRTaWJsaW5nKVxuXHRcdGVsc2UgcGFyZW50LmFwcGVuZENoaWxkKGRvbSlcblx0fVxuXHRmdW5jdGlvbiBzZXRDb250ZW50RWRpdGFibGUodm5vZGUpIHtcblx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdGlmIChjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlblswXS50YWcgPT09IFwiPFwiKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuXG5cdFx0XHRpZiAodm5vZGUuZG9tLmlubmVySFRNTCAhPT0gY29udGVudCkgdm5vZGUuZG9tLmlubmVySFRNTCA9IGNvbnRlbnRcblx0XHR9XG5cdFx0ZWxzZSBpZiAodm5vZGUudGV4dCAhPSBudWxsIHx8IGNoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZCBub2RlIG9mIGEgY29udGVudGVkaXRhYmxlIG11c3QgYmUgdHJ1c3RlZFwiKVxuXHR9XG5cdC8vcmVtb3ZlXG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHZub2Rlcywgc3RhcnQsIGVuZCwgY29udGV4dCkge1xuXHRcdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5za2lwKSB2bm9kZS5za2lwID0gZmFsc2Vcblx0XHRcdFx0ZWxzZSByZW1vdmVOb2RlKHZub2RlLCBjb250ZXh0KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVOb2RlKHZub2RlLCBjb250ZXh0KSB7XG5cdFx0dmFyIGV4cGVjdGVkID0gMSwgY2FsbGVkID0gMFxuXHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25iZWZvcmVyZW1vdmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHZub2RlLmF0dHJzLm9uYmVmb3JlcmVtb3ZlLmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKVxuXHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdGV4cGVjdGVkKytcblx0XHRcdFx0cmVzdWx0LnRoZW4oY29udGludWF0aW9uLCBjb250aW51YXRpb24pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5fc3RhdGUub25iZWZvcmVyZW1vdmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHZub2RlLl9zdGF0ZS5vbmJlZm9yZXJlbW92ZS5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSlcblx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRleHBlY3RlZCsrXG5cdFx0XHRcdHJlc3VsdC50aGVuKGNvbnRpbnVhdGlvbiwgY29udGludWF0aW9uKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb250aW51YXRpb24oKVxuXHRcdGZ1bmN0aW9uIGNvbnRpbnVhdGlvbigpIHtcblx0XHRcdGlmICgrK2NhbGxlZCA9PT0gZXhwZWN0ZWQpIHtcblx0XHRcdFx0b25yZW1vdmUodm5vZGUpXG5cdFx0XHRcdGlmICh2bm9kZS5kb20pIHtcblx0XHRcdFx0XHR2YXIgY291bnQwID0gdm5vZGUuZG9tU2l6ZSB8fCAxXG5cdFx0XHRcdFx0aWYgKGNvdW50MCA+IDEpIHtcblx0XHRcdFx0XHRcdHZhciBkb20gPSB2bm9kZS5kb21cblx0XHRcdFx0XHRcdHdoaWxlICgtLWNvdW50MCkge1xuXHRcdFx0XHRcdFx0XHRyZW1vdmVOb2RlRnJvbURPTShkb20ubmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlbW92ZU5vZGVGcm9tRE9NKHZub2RlLmRvbSlcblx0XHRcdFx0XHRpZiAoY29udGV4dCAhPSBudWxsICYmIHZub2RlLmRvbVNpemUgPT0gbnVsbCAmJiAhaGFzSW50ZWdyYXRpb25NZXRob2RzKHZub2RlLmF0dHJzKSAmJiB0eXBlb2Ygdm5vZGUudGFnID09PSBcInN0cmluZ1wiKSB7IC8vVE9ETyB0ZXN0IGN1c3RvbSBlbGVtZW50c1xuXHRcdFx0XHRcdFx0aWYgKCFjb250ZXh0LnBvb2wpIGNvbnRleHQucG9vbCA9IFt2bm9kZV1cblx0XHRcdFx0XHRcdGVsc2UgY29udGV4dC5wb29sLnB1c2godm5vZGUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGVGcm9tRE9NKG5vZGUpIHtcblx0XHR2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlXG5cdFx0aWYgKHBhcmVudCAhPSBudWxsKSBwYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSlcblx0fVxuXHRmdW5jdGlvbiBvbnJlbW92ZSh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgdm5vZGUuYXR0cnMub25yZW1vdmUuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUpXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLl9zdGF0ZS5vbnJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSB2bm9kZS5fc3RhdGUub25yZW1vdmUuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIG9ucmVtb3ZlKHZub2RlLmluc3RhbmNlKVxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblx0XHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCkgb25yZW1vdmUoY2hpbGQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9hdHRyczJcblx0ZnVuY3Rpb24gc2V0QXR0cnModm5vZGUsIGF0dHJzMiwgbnMpIHtcblx0XHRmb3IgKHZhciBrZXkyIGluIGF0dHJzMikge1xuXHRcdFx0c2V0QXR0cih2bm9kZSwga2V5MiwgbnVsbCwgYXR0cnMyW2tleTJdLCBucylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gc2V0QXR0cih2bm9kZSwga2V5Miwgb2xkLCB2YWx1ZSwgbnMpIHtcblx0XHR2YXIgZWxlbWVudCA9IHZub2RlLmRvbVxuXHRcdGlmIChrZXkyID09PSBcImtleVwiIHx8IGtleTIgPT09IFwiaXNcIiB8fCAob2xkID09PSB2YWx1ZSAmJiAhaXNGb3JtQXR0cmlidXRlKHZub2RlLCBrZXkyKSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpc0xpZmVjeWNsZU1ldGhvZChrZXkyKSkgcmV0dXJuXG5cdFx0dmFyIG5zTGFzdEluZGV4ID0ga2V5Mi5pbmRleE9mKFwiOlwiKVxuXHRcdGlmIChuc0xhc3RJbmRleCA+IC0xICYmIGtleTIuc3Vic3RyKDAsIG5zTGFzdEluZGV4KSA9PT0gXCJ4bGlua1wiKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBrZXkyLnNsaWNlKG5zTGFzdEluZGV4ICsgMSksIHZhbHVlKVxuXHRcdH1cblx0XHRlbHNlIGlmIChrZXkyWzBdID09PSBcIm9cIiAmJiBrZXkyWzFdID09PSBcIm5cIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikgdXBkYXRlRXZlbnQodm5vZGUsIGtleTIsIHZhbHVlKVxuXHRcdGVsc2UgaWYgKGtleTIgPT09IFwic3R5bGVcIikgdXBkYXRlU3R5bGUoZWxlbWVudCwgb2xkLCB2YWx1ZSlcblx0XHRlbHNlIGlmIChrZXkyIGluIGVsZW1lbnQgJiYgIWlzQXR0cmlidXRlKGtleTIpICYmIG5zID09PSB1bmRlZmluZWQgJiYgIWlzQ3VzdG9tRWxlbWVudCh2bm9kZSkpIHtcblx0XHRcdGlmIChrZXkyID09PSBcInZhbHVlXCIpIHtcblx0XHRcdFx0dmFyIG5vcm1hbGl6ZWQwID0gXCJcIiArIHZhbHVlIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cblx0XHRcdFx0Ly9zZXR0aW5nIGlucHV0W3ZhbHVlXSB0byBzYW1lIHZhbHVlIGJ5IHR5cGluZyBvbiBmb2N1c2VkIGVsZW1lbnQgbW92ZXMgY3Vyc29yIHRvIGVuZCBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKCh2bm9kZS50YWcgPT09IFwiaW5wdXRcIiB8fCB2bm9kZS50YWcgPT09IFwidGV4dGFyZWFcIikgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBub3JtYWxpemVkMCAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuXG5cdFx0XHRcdC8vc2V0dGluZyBzZWxlY3RbdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGlmICh2bm9kZS5kb20uc2VsZWN0ZWRJbmRleCA9PT0gLTEgJiYgdm5vZGUuZG9tID09PSAkZG9jLmFjdGl2ZUVsZW1lbnQpIHJldHVyblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkICE9PSBudWxsICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gbm9ybWFsaXplZDAgJiYgdm5vZGUuZG9tID09PSAkZG9jLmFjdGl2ZUVsZW1lbnQpIHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvL3NldHRpbmcgb3B0aW9uW3ZhbHVlXSB0byBzYW1lIHZhbHVlIHdoaWxlIGhhdmluZyBzZWxlY3Qgb3BlbiBibGlua3Mgc2VsZWN0IGRyb3Bkb3duIGluIENocm9tZVxuXHRcdFx0XHRpZiAodm5vZGUudGFnID09PSBcIm9wdGlvblwiICYmIG9sZCAhPSBudWxsICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gbm9ybWFsaXplZDApIHJldHVyblxuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgeW91IGFzc2lnbiBhbiBpbnB1dCB0eXBlMSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUgMTEgd2l0aCBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24sIGFuIGVycm9yMCB3aWxsIG9jY3VyLlxuXHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiICYmIGtleTIgPT09IFwidHlwZVwiKSB7XG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleTIsIHZhbHVlKVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGVsZW1lbnRba2V5Ml0gPSB2YWx1ZVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5MiwgXCJcIilcblx0XHRcdFx0ZWxzZSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkyKVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXkyID09PSBcImNsYXNzTmFtZVwiID8gXCJjbGFzc1wiIDoga2V5MiwgdmFsdWUpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldExhdGVBdHRycyh2bm9kZSkge1xuXHRcdHZhciBhdHRyczIgPSB2bm9kZS5hdHRyc1xuXHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIgJiYgYXR0cnMyICE9IG51bGwpIHtcblx0XHRcdGlmIChcInZhbHVlXCIgaW4gYXR0cnMyKSBzZXRBdHRyKHZub2RlLCBcInZhbHVlXCIsIG51bGwsIGF0dHJzMi52YWx1ZSwgdW5kZWZpbmVkKVxuXHRcdFx0aWYgKFwic2VsZWN0ZWRJbmRleFwiIGluIGF0dHJzMikgc2V0QXR0cih2bm9kZSwgXCJzZWxlY3RlZEluZGV4XCIsIG51bGwsIGF0dHJzMi5zZWxlY3RlZEluZGV4LCB1bmRlZmluZWQpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUF0dHJzKHZub2RlLCBvbGQsIGF0dHJzMiwgbnMpIHtcblx0XHRpZiAoYXR0cnMyICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGtleTIgaW4gYXR0cnMyKSB7XG5cdFx0XHRcdHNldEF0dHIodm5vZGUsIGtleTIsIG9sZCAmJiBvbGRba2V5Ml0sIGF0dHJzMltrZXkyXSwgbnMpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChvbGQgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5MiBpbiBvbGQpIHtcblx0XHRcdFx0aWYgKGF0dHJzMiA9PSBudWxsIHx8ICEoa2V5MiBpbiBhdHRyczIpKSB7XG5cdFx0XHRcdFx0aWYgKGtleTIgPT09IFwiY2xhc3NOYW1lXCIpIGtleTIgPSBcImNsYXNzXCJcblx0XHRcdFx0XHRpZiAoa2V5MlswXSA9PT0gXCJvXCIgJiYga2V5MlsxXSA9PT0gXCJuXCIgJiYgIWlzTGlmZWN5Y2xlTWV0aG9kKGtleTIpKSB1cGRhdGVFdmVudCh2bm9kZSwga2V5MiwgdW5kZWZpbmVkKVxuXHRcdFx0XHRcdGVsc2UgaWYgKGtleTIgIT09IFwia2V5XCIpIHZub2RlLmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5Milcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpc0Zvcm1BdHRyaWJ1dGUodm5vZGUsIGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJ2YWx1ZVwiIHx8IGF0dHIgPT09IFwiY2hlY2tlZFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRJbmRleFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRcIiAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGlzTGlmZWN5Y2xlTWV0aG9kKGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJvbmluaXRcIiB8fCBhdHRyID09PSBcIm9uY3JlYXRlXCIgfHwgYXR0ciA9PT0gXCJvbnVwZGF0ZVwiIHx8IGF0dHIgPT09IFwib25yZW1vdmVcIiB8fCBhdHRyID09PSBcIm9uYmVmb3JlcmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXVwZGF0ZVwiXG5cdH1cblx0ZnVuY3Rpb24gaXNBdHRyaWJ1dGUoYXR0cikge1xuXHRcdHJldHVybiBhdHRyID09PSBcImhyZWZcIiB8fCBhdHRyID09PSBcImxpc3RcIiB8fCBhdHRyID09PSBcImZvcm1cIiB8fCBhdHRyID09PSBcIndpZHRoXCIgfHwgYXR0ciA9PT0gXCJoZWlnaHRcIi8vIHx8IGF0dHIgPT09IFwidHlwZVwiXG5cdH1cblx0ZnVuY3Rpb24gaXNDdXN0b21FbGVtZW50KHZub2RlKXtcblx0XHRyZXR1cm4gdm5vZGUuYXR0cnMuaXMgfHwgdm5vZGUudGFnLmluZGV4T2YoXCItXCIpID4gLTFcblx0fVxuXHRmdW5jdGlvbiBoYXNJbnRlZ3JhdGlvbk1ldGhvZHMoc291cmNlKSB7XG5cdFx0cmV0dXJuIHNvdXJjZSAhPSBudWxsICYmIChzb3VyY2Uub25jcmVhdGUgfHwgc291cmNlLm9udXBkYXRlIHx8IHNvdXJjZS5vbmJlZm9yZXJlbW92ZSB8fCBzb3VyY2Uub25yZW1vdmUpXG5cdH1cblx0Ly9zdHlsZVxuXHRmdW5jdGlvbiB1cGRhdGVTdHlsZShlbGVtZW50LCBvbGQsIHN0eWxlKSB7XG5cdFx0aWYgKG9sZCA9PT0gc3R5bGUpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCIsIG9sZCA9IG51bGxcblx0XHRpZiAoc3R5bGUgPT0gbnVsbCkgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdGVsc2UgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJzdHJpbmdcIikgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcblx0XHRlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkID09PSBcInN0cmluZ1wiKSBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiXG5cdFx0XHRmb3IgKHZhciBrZXkyIGluIHN0eWxlKSB7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGVba2V5Ml0gPSBzdHlsZVtrZXkyXVxuXHRcdFx0fVxuXHRcdFx0aWYgKG9sZCAhPSBudWxsICYmIHR5cGVvZiBvbGQgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5MiBpbiBvbGQpIHtcblx0XHRcdFx0XHRpZiAoIShrZXkyIGluIHN0eWxlKSkgZWxlbWVudC5zdHlsZVtrZXkyXSA9IFwiXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL2V2ZW50XG5cdGZ1bmN0aW9uIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXkyLCB2YWx1ZSkge1xuXHRcdHZhciBlbGVtZW50ID0gdm5vZGUuZG9tXG5cdFx0dmFyIGNhbGxiYWNrID0gdHlwZW9mIG9uZXZlbnQgIT09IFwiZnVuY3Rpb25cIiA/IHZhbHVlIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHZhbHVlLmNhbGwoZWxlbWVudCwgZSlcblx0XHRcdG9uZXZlbnQuY2FsbChlbGVtZW50LCBlKVxuXHRcdFx0cmV0dXJuIHJlc3VsdFxuXHRcdH1cblx0XHRpZiAoa2V5MiBpbiBlbGVtZW50KSBlbGVtZW50W2tleTJdID0gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBjYWxsYmFjayA6IG51bGxcblx0XHRlbHNlIHtcblx0XHRcdHZhciBldmVudE5hbWUgPSBrZXkyLnNsaWNlKDIpXG5cdFx0XHRpZiAodm5vZGUuZXZlbnRzID09PSB1bmRlZmluZWQpIHZub2RlLmV2ZW50cyA9IHt9XG5cdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleTJdID09PSBjYWxsYmFjaykgcmV0dXJuXG5cdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleTJdICE9IG51bGwpIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHZub2RlLmV2ZW50c1trZXkyXSwgZmFsc2UpXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleTJdID0gY2FsbGJhY2tcblx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdm5vZGUuZXZlbnRzW2tleTJdLCBmYWxzZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9saWZlY3ljbGVcblx0ZnVuY3Rpb24gaW5pdExpZmVjeWNsZShzb3VyY2UsIHZub2RlLCBob29rcykge1xuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9uaW5pdCA9PT0gXCJmdW5jdGlvblwiKSBzb3VyY2Uub25pbml0LmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKVxuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9uY3JlYXRlID09PSBcImZ1bmN0aW9uXCIpIGhvb2tzLnB1c2goc291cmNlLm9uY3JlYXRlLmJpbmQodm5vZGUuc3RhdGUsIHZub2RlKSlcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMaWZlY3ljbGUoc291cmNlLCB2bm9kZSwgaG9va3MpIHtcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbnVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSBob29rcy5wdXNoKHNvdXJjZS5vbnVwZGF0ZS5iaW5kKHZub2RlLnN0YXRlLCB2bm9kZSkpXG5cdH1cblx0ZnVuY3Rpb24gc2hvdWxkTm90VXBkYXRlKHZub2RlLCBvbGQpIHtcblx0XHR2YXIgZm9yY2VWbm9kZVVwZGF0ZSwgZm9yY2VDb21wb25lbnRVcGRhdGVcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25iZWZvcmV1cGRhdGUgPT09IFwiZnVuY3Rpb25cIikgZm9yY2VWbm9kZVVwZGF0ZSA9IHZub2RlLmF0dHJzLm9uYmVmb3JldXBkYXRlLmNhbGwodm5vZGUuc3RhdGUsIHZub2RlLCBvbGQpXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLl9zdGF0ZS5vbmJlZm9yZXVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSBmb3JjZUNvbXBvbmVudFVwZGF0ZSA9IHZub2RlLl9zdGF0ZS5vbmJlZm9yZXVwZGF0ZS5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSwgb2xkKVxuXHRcdGlmICghKGZvcmNlVm5vZGVVcGRhdGUgPT09IHVuZGVmaW5lZCAmJiBmb3JjZUNvbXBvbmVudFVwZGF0ZSA9PT0gdW5kZWZpbmVkKSAmJiAhZm9yY2VWbm9kZVVwZGF0ZSAmJiAhZm9yY2VDb21wb25lbnRVcGRhdGUpIHtcblx0XHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdFx0dm5vZGUuaW5zdGFuY2UgPSBvbGQuaW5zdGFuY2Vcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cdGZ1bmN0aW9uIHJlbmRlcihkb20sIHZub2Rlcykge1xuXHRcdGlmICghZG9tKSB0aHJvdyBuZXcgRXJyb3IoXCJFbnN1cmUgdGhlIERPTSBlbGVtZW50IGJlaW5nIHBhc3NlZCB0byBtLnJvdXRlL20ubW91bnQvbS5yZW5kZXIgaXMgbm90IHVuZGVmaW5lZC5cIilcblx0XHR2YXIgaG9va3MgPSBbXVxuXHRcdHZhciBhY3RpdmUgPSAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0XHR2YXIgbmFtZXNwYWNlID0gZG9tLm5hbWVzcGFjZVVSSVxuXHRcdC8vIEZpcnN0IHRpbWUwIHJlbmRlcmluZyBpbnRvIGEgbm9kZSBjbGVhcnMgaXQgb3V0XG5cdFx0aWYgKGRvbS52bm9kZXMgPT0gbnVsbCkgZG9tLnRleHRDb250ZW50ID0gXCJcIlxuXHRcdGlmICghQXJyYXkuaXNBcnJheSh2bm9kZXMpKSB2bm9kZXMgPSBbdm5vZGVzXVxuXHRcdHVwZGF0ZU5vZGVzKGRvbSwgZG9tLnZub2RlcywgVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4odm5vZGVzKSwgZmFsc2UsIGhvb2tzLCBudWxsLCBuYW1lc3BhY2UgPT09IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiID8gdW5kZWZpbmVkIDogbmFtZXNwYWNlKVxuXHRcdGRvbS52bm9kZXMgPSB2bm9kZXNcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSBob29rc1tpXSgpXG5cdFx0aWYgKCRkb2MuYWN0aXZlRWxlbWVudCAhPT0gYWN0aXZlKSBhY3RpdmUuZm9jdXMoKVxuXHR9XG5cdHJldHVybiB7cmVuZGVyOiByZW5kZXIsIHNldEV2ZW50Q2FsbGJhY2s6IHNldEV2ZW50Q2FsbGJhY2t9XG59XG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaykge1xuXHQvLzYwZnBzIHRyYW5zbGF0ZXMgdG8gMTYuNm1zLCByb3VuZCBpdCBkb3duIHNpbmNlIHNldFRpbWVvdXQgcmVxdWlyZXMgaW50XG5cdHZhciB0aW1lID0gMTZcblx0dmFyIGxhc3QgPSAwLCBwZW5kaW5nID0gbnVsbFxuXHR2YXIgdGltZW91dCA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09IFwiZnVuY3Rpb25cIiA/IHJlcXVlc3RBbmltYXRpb25GcmFtZSA6IHNldFRpbWVvdXRcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBub3cgPSBEYXRlLm5vdygpXG5cdFx0aWYgKGxhc3QgPT09IDAgfHwgbm93IC0gbGFzdCA+PSB0aW1lKSB7XG5cdFx0XHRsYXN0ID0gbm93XG5cdFx0XHRjYWxsYmFjaygpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKHBlbmRpbmcgPT09IG51bGwpIHtcblx0XHRcdHBlbmRpbmcgPSB0aW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRwZW5kaW5nID0gbnVsbFxuXHRcdFx0XHRjYWxsYmFjaygpXG5cdFx0XHRcdGxhc3QgPSBEYXRlLm5vdygpXG5cdFx0XHR9LCB0aW1lIC0gKG5vdyAtIGxhc3QpKVxuXHRcdH1cblx0fVxufVxudmFyIF8xMSA9IGZ1bmN0aW9uKCR3aW5kb3cpIHtcblx0dmFyIHJlbmRlclNlcnZpY2UgPSBjb3JlUmVuZGVyZXIoJHdpbmRvdylcblx0cmVuZGVyU2VydmljZS5zZXRFdmVudENhbGxiYWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoZS5yZWRyYXcgPT09IGZhbHNlKSBlLnJlZHJhdyA9IHVuZGVmaW5lZFxuXHRcdGVsc2UgcmVkcmF3KClcblx0fSlcblx0dmFyIGNhbGxiYWNrcyA9IFtdXG5cdGZ1bmN0aW9uIHN1YnNjcmliZShrZXkxLCBjYWxsYmFjaykge1xuXHRcdHVuc3Vic2NyaWJlKGtleTEpXG5cdFx0Y2FsbGJhY2tzLnB1c2goa2V5MSwgdGhyb3R0bGUoY2FsbGJhY2spKVxuXHR9XG5cdGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGtleTEpIHtcblx0XHR2YXIgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihrZXkxKVxuXHRcdGlmIChpbmRleCA+IC0xKSBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAyKVxuXHR9XG5cdGZ1bmN0aW9uIHJlZHJhdygpIHtcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0Y2FsbGJhY2tzW2ldKClcblx0XHR9XG5cdH1cblx0cmV0dXJuIHtzdWJzY3JpYmU6IHN1YnNjcmliZSwgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlLCByZWRyYXc6IHJlZHJhdywgcmVuZGVyOiByZW5kZXJTZXJ2aWNlLnJlbmRlcn1cbn1cbnZhciByZWRyYXdTZXJ2aWNlID0gXzExKHdpbmRvdylcbnJlcXVlc3RTZXJ2aWNlLnNldENvbXBsZXRpb25DYWxsYmFjayhyZWRyYXdTZXJ2aWNlLnJlZHJhdylcbnZhciBfMTYgPSBmdW5jdGlvbihyZWRyYXdTZXJ2aWNlMCkge1xuXHRyZXR1cm4gZnVuY3Rpb24ocm9vdCwgY29tcG9uZW50KSB7XG5cdFx0aWYgKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdFx0cmVkcmF3U2VydmljZTAucmVuZGVyKHJvb3QsIFtdKVxuXHRcdFx0cmVkcmF3U2VydmljZTAudW5zdWJzY3JpYmUocm9vdClcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRcblx0XHRpZiAoY29tcG9uZW50LnZpZXcgPT0gbnVsbCAmJiB0eXBlb2YgY29tcG9uZW50ICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcIm0ubW91bnQoZWxlbWVudCwgY29tcG9uZW50KSBleHBlY3RzIGEgY29tcG9uZW50LCBub3QgYSB2bm9kZVwiKVxuXHRcdFxuXHRcdHZhciBydW4wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZWRyYXdTZXJ2aWNlMC5yZW5kZXIocm9vdCwgVm5vZGUoY29tcG9uZW50KSlcblx0XHR9XG5cdFx0cmVkcmF3U2VydmljZTAuc3Vic2NyaWJlKHJvb3QsIHJ1bjApXG5cdFx0cmVkcmF3U2VydmljZTAucmVkcmF3KClcblx0fVxufVxubS5tb3VudCA9IF8xNihyZWRyYXdTZXJ2aWNlKVxudmFyIFByb21pc2UgPSBQcm9taXNlUG9seWZpbGxcbnZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oc3RyaW5nKSB7XG5cdGlmIChzdHJpbmcgPT09IFwiXCIgfHwgc3RyaW5nID09IG51bGwpIHJldHVybiB7fVxuXHRpZiAoc3RyaW5nLmNoYXJBdCgwKSA9PT0gXCI/XCIpIHN0cmluZyA9IHN0cmluZy5zbGljZSgxKVxuXHR2YXIgZW50cmllcyA9IHN0cmluZy5zcGxpdChcIiZcIiksIGRhdGEwID0ge30sIGNvdW50ZXJzID0ge31cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGVudHJ5ID0gZW50cmllc1tpXS5zcGxpdChcIj1cIilcblx0XHR2YXIga2V5NSA9IGRlY29kZVVSSUNvbXBvbmVudChlbnRyeVswXSlcblx0XHR2YXIgdmFsdWUgPSBlbnRyeS5sZW5ndGggPT09IDIgPyBkZWNvZGVVUklDb21wb25lbnQoZW50cnlbMV0pIDogXCJcIlxuXHRcdGlmICh2YWx1ZSA9PT0gXCJ0cnVlXCIpIHZhbHVlID0gdHJ1ZVxuXHRcdGVsc2UgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHZhbHVlID0gZmFsc2Vcblx0XHR2YXIgbGV2ZWxzID0ga2V5NS5zcGxpdCgvXFxdXFxbP3xcXFsvKVxuXHRcdHZhciBjdXJzb3IgPSBkYXRhMFxuXHRcdGlmIChrZXk1LmluZGV4T2YoXCJbXCIpID4gLTEpIGxldmVscy5wb3AoKVxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGV2ZWxzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgbGV2ZWwgPSBsZXZlbHNbal0sIG5leHRMZXZlbCA9IGxldmVsc1tqICsgMV1cblx0XHRcdHZhciBpc051bWJlciA9IG5leHRMZXZlbCA9PSBcIlwiIHx8ICFpc05hTihwYXJzZUludChuZXh0TGV2ZWwsIDEwKSlcblx0XHRcdHZhciBpc1ZhbHVlID0gaiA9PT0gbGV2ZWxzLmxlbmd0aCAtIDFcblx0XHRcdGlmIChsZXZlbCA9PT0gXCJcIikge1xuXHRcdFx0XHR2YXIga2V5NSA9IGxldmVscy5zbGljZSgwLCBqKS5qb2luKClcblx0XHRcdFx0aWYgKGNvdW50ZXJzW2tleTVdID09IG51bGwpIGNvdW50ZXJzW2tleTVdID0gMFxuXHRcdFx0XHRsZXZlbCA9IGNvdW50ZXJzW2tleTVdKytcblx0XHRcdH1cblx0XHRcdGlmIChjdXJzb3JbbGV2ZWxdID09IG51bGwpIHtcblx0XHRcdFx0Y3Vyc29yW2xldmVsXSA9IGlzVmFsdWUgPyB2YWx1ZSA6IGlzTnVtYmVyID8gW10gOiB7fVxuXHRcdFx0fVxuXHRcdFx0Y3Vyc29yID0gY3Vyc29yW2xldmVsXVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGF0YTBcbn1cbnZhciBjb3JlUm91dGVyID0gZnVuY3Rpb24oJHdpbmRvdykge1xuXHR2YXIgc3VwcG9ydHNQdXNoU3RhdGUgPSB0eXBlb2YgJHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9PT0gXCJmdW5jdGlvblwiXG5cdHZhciBjYWxsQXN5bmMwID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogc2V0VGltZW91dFxuXHRmdW5jdGlvbiBub3JtYWxpemUxKGZyYWdtZW50MCkge1xuXHRcdHZhciBkYXRhID0gJHdpbmRvdy5sb2NhdGlvbltmcmFnbWVudDBdLnJlcGxhY2UoLyg/OiVbYS1mODldW2EtZjAtOV0pKy9naW0sIGRlY29kZVVSSUNvbXBvbmVudClcblx0XHRpZiAoZnJhZ21lbnQwID09PSBcInBhdGhuYW1lXCIgJiYgZGF0YVswXSAhPT0gXCIvXCIpIGRhdGEgPSBcIi9cIiArIGRhdGFcblx0XHRyZXR1cm4gZGF0YVxuXHR9XG5cdHZhciBhc3luY0lkXG5cdGZ1bmN0aW9uIGRlYm91bmNlQXN5bmMoY2FsbGJhY2swKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKGFzeW5jSWQgIT0gbnVsbCkgcmV0dXJuXG5cdFx0XHRhc3luY0lkID0gY2FsbEFzeW5jMChmdW5jdGlvbigpIHtcblx0XHRcdFx0YXN5bmNJZCA9IG51bGxcblx0XHRcdFx0Y2FsbGJhY2swKClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoLCBxdWVyeURhdGEsIGhhc2hEYXRhKSB7XG5cdFx0dmFyIHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoXCI/XCIpXG5cdFx0dmFyIGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZihcIiNcIilcblx0XHR2YXIgcGF0aEVuZCA9IHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXggPiAtMSA/IGhhc2hJbmRleCA6IHBhdGgubGVuZ3RoXG5cdFx0aWYgKHF1ZXJ5SW5kZXggPiAtMSkge1xuXHRcdFx0dmFyIHF1ZXJ5RW5kID0gaGFzaEluZGV4ID4gLTEgPyBoYXNoSW5kZXggOiBwYXRoLmxlbmd0aFxuXHRcdFx0dmFyIHF1ZXJ5UGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZyhwYXRoLnNsaWNlKHF1ZXJ5SW5kZXggKyAxLCBxdWVyeUVuZCkpXG5cdFx0XHRmb3IgKHZhciBrZXk0IGluIHF1ZXJ5UGFyYW1zKSBxdWVyeURhdGFba2V5NF0gPSBxdWVyeVBhcmFtc1trZXk0XVxuXHRcdH1cblx0XHRpZiAoaGFzaEluZGV4ID4gLTEpIHtcblx0XHRcdHZhciBoYXNoUGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZyhwYXRoLnNsaWNlKGhhc2hJbmRleCArIDEpKVxuXHRcdFx0Zm9yICh2YXIga2V5NCBpbiBoYXNoUGFyYW1zKSBoYXNoRGF0YVtrZXk0XSA9IGhhc2hQYXJhbXNba2V5NF1cblx0XHR9XG5cdFx0cmV0dXJuIHBhdGguc2xpY2UoMCwgcGF0aEVuZClcblx0fVxuXHR2YXIgcm91dGVyID0ge3ByZWZpeDogXCIjIVwifVxuXHRyb3V0ZXIuZ2V0UGF0aCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0eXBlMiA9IHJvdXRlci5wcmVmaXguY2hhckF0KDApXG5cdFx0c3dpdGNoICh0eXBlMikge1xuXHRcdFx0Y2FzZSBcIiNcIjogcmV0dXJuIG5vcm1hbGl6ZTEoXCJoYXNoXCIpLnNsaWNlKHJvdXRlci5wcmVmaXgubGVuZ3RoKVxuXHRcdFx0Y2FzZSBcIj9cIjogcmV0dXJuIG5vcm1hbGl6ZTEoXCJzZWFyY2hcIikuc2xpY2Uocm91dGVyLnByZWZpeC5sZW5ndGgpICsgbm9ybWFsaXplMShcImhhc2hcIilcblx0XHRcdGRlZmF1bHQ6IHJldHVybiBub3JtYWxpemUxKFwicGF0aG5hbWVcIikuc2xpY2Uocm91dGVyLnByZWZpeC5sZW5ndGgpICsgbm9ybWFsaXplMShcInNlYXJjaFwiKSArIG5vcm1hbGl6ZTEoXCJoYXNoXCIpXG5cdFx0fVxuXHR9XG5cdHJvdXRlci5zZXRQYXRoID0gZnVuY3Rpb24ocGF0aCwgZGF0YSwgb3B0aW9ucykge1xuXHRcdHZhciBxdWVyeURhdGEgPSB7fSwgaGFzaERhdGEgPSB7fVxuXHRcdHBhdGggPSBwYXJzZVBhdGgocGF0aCwgcXVlcnlEYXRhLCBoYXNoRGF0YSlcblx0XHRpZiAoZGF0YSAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBrZXk0IGluIGRhdGEpIHF1ZXJ5RGF0YVtrZXk0XSA9IGRhdGFba2V5NF1cblx0XHRcdHBhdGggPSBwYXRoLnJlcGxhY2UoLzooW15cXC9dKykvZywgZnVuY3Rpb24obWF0Y2gyLCB0b2tlbikge1xuXHRcdFx0XHRkZWxldGUgcXVlcnlEYXRhW3Rva2VuXVxuXHRcdFx0XHRyZXR1cm4gZGF0YVt0b2tlbl1cblx0XHRcdH0pXG5cdFx0fVxuXHRcdHZhciBxdWVyeSA9IGJ1aWxkUXVlcnlTdHJpbmcocXVlcnlEYXRhKVxuXHRcdGlmIChxdWVyeSkgcGF0aCArPSBcIj9cIiArIHF1ZXJ5XG5cdFx0dmFyIGhhc2ggPSBidWlsZFF1ZXJ5U3RyaW5nKGhhc2hEYXRhKVxuXHRcdGlmIChoYXNoKSBwYXRoICs9IFwiI1wiICsgaGFzaFxuXHRcdGlmIChzdXBwb3J0c1B1c2hTdGF0ZSkge1xuXHRcdFx0dmFyIHN0YXRlID0gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdGUgOiBudWxsXG5cdFx0XHR2YXIgdGl0bGUgPSBvcHRpb25zID8gb3B0aW9ucy50aXRsZSA6IG51bGxcblx0XHRcdCR3aW5kb3cub25wb3BzdGF0ZSgpXG5cdFx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlcGxhY2UpICR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsIHRpdGxlLCByb3V0ZXIucHJlZml4ICsgcGF0aClcblx0XHRcdGVsc2UgJHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHJvdXRlci5wcmVmaXggKyBwYXRoKVxuXHRcdH1cblx0XHRlbHNlICR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJvdXRlci5wcmVmaXggKyBwYXRoXG5cdH1cblx0cm91dGVyLmRlZmluZVJvdXRlcyA9IGZ1bmN0aW9uKHJvdXRlcywgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ZnVuY3Rpb24gcmVzb2x2ZVJvdXRlKCkge1xuXHRcdFx0dmFyIHBhdGggPSByb3V0ZXIuZ2V0UGF0aCgpXG5cdFx0XHR2YXIgcGFyYW1zID0ge31cblx0XHRcdHZhciBwYXRobmFtZSA9IHBhcnNlUGF0aChwYXRoLCBwYXJhbXMsIHBhcmFtcylcblx0XHRcdHZhciBzdGF0ZSA9ICR3aW5kb3cuaGlzdG9yeS5zdGF0ZVxuXHRcdFx0aWYgKHN0YXRlICE9IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgayBpbiBzdGF0ZSkgcGFyYW1zW2tdID0gc3RhdGVba11cblx0XHRcdH1cblx0XHRcdGZvciAodmFyIHJvdXRlMCBpbiByb3V0ZXMpIHtcblx0XHRcdFx0dmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKFwiXlwiICsgcm91dGUwLnJlcGxhY2UoLzpbXlxcL10rP1xcLnszfS9nLCBcIiguKj8pXCIpLnJlcGxhY2UoLzpbXlxcL10rL2csIFwiKFteXFxcXC9dKylcIikgKyBcIlxcLz8kXCIpXG5cdFx0XHRcdGlmIChtYXRjaGVyLnRlc3QocGF0aG5hbWUpKSB7XG5cdFx0XHRcdFx0cGF0aG5hbWUucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHZhciBrZXlzID0gcm91dGUwLm1hdGNoKC86W15cXC9dKy9nKSB8fCBbXVxuXHRcdFx0XHRcdFx0dmFyIHZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAtMilcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRwYXJhbXNba2V5c1tpXS5yZXBsYWNlKC86fFxcLi9nLCBcIlwiKV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWVzW2ldKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVzb2x2ZShyb3V0ZXNbcm91dGUwXSwgcGFyYW1zLCBwYXRoLCByb3V0ZTApXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmVqZWN0KHBhdGgsIHBhcmFtcylcblx0XHR9XG5cdFx0aWYgKHN1cHBvcnRzUHVzaFN0YXRlKSAkd2luZG93Lm9ucG9wc3RhdGUgPSBkZWJvdW5jZUFzeW5jKHJlc29sdmVSb3V0ZSlcblx0XHRlbHNlIGlmIChyb3V0ZXIucHJlZml4LmNoYXJBdCgwKSA9PT0gXCIjXCIpICR3aW5kb3cub25oYXNoY2hhbmdlID0gcmVzb2x2ZVJvdXRlXG5cdFx0cmVzb2x2ZVJvdXRlKClcblx0fVxuXHRyZXR1cm4gcm91dGVyXG59XG52YXIgXzIwID0gZnVuY3Rpb24oJHdpbmRvdywgcmVkcmF3U2VydmljZTApIHtcblx0dmFyIHJvdXRlU2VydmljZSA9IGNvcmVSb3V0ZXIoJHdpbmRvdylcblx0dmFyIGlkZW50aXR5ID0gZnVuY3Rpb24odikge3JldHVybiB2fVxuXHR2YXIgcmVuZGVyMSwgY29tcG9uZW50LCBhdHRyczMsIGN1cnJlbnRQYXRoLCBsYXN0VXBkYXRlXG5cdHZhciByb3V0ZSA9IGZ1bmN0aW9uKHJvb3QsIGRlZmF1bHRSb3V0ZSwgcm91dGVzKSB7XG5cdFx0aWYgKHJvb3QgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiRW5zdXJlIHRoZSBET00gZWxlbWVudCB0aGF0IHdhcyBwYXNzZWQgdG8gYG0ucm91dGVgIGlzIG5vdCB1bmRlZmluZWRcIilcblx0XHR2YXIgcnVuMSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHJlbmRlcjEgIT0gbnVsbCkgcmVkcmF3U2VydmljZTAucmVuZGVyKHJvb3QsIHJlbmRlcjEoVm5vZGUoY29tcG9uZW50LCBhdHRyczMua2V5LCBhdHRyczMpKSlcblx0XHR9XG5cdFx0dmFyIGJhaWwgPSBmdW5jdGlvbihwYXRoKSB7XG5cdFx0XHRpZiAocGF0aCAhPT0gZGVmYXVsdFJvdXRlKSByb3V0ZVNlcnZpY2Uuc2V0UGF0aChkZWZhdWx0Um91dGUsIG51bGwsIHtyZXBsYWNlOiB0cnVlfSlcblx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlc29sdmUgZGVmYXVsdCByb3V0ZSBcIiArIGRlZmF1bHRSb3V0ZSlcblx0XHR9XG5cdFx0cm91dGVTZXJ2aWNlLmRlZmluZVJvdXRlcyhyb3V0ZXMsIGZ1bmN0aW9uKHBheWxvYWQsIHBhcmFtcywgcGF0aCkge1xuXHRcdFx0dmFyIHVwZGF0ZSA9IGxhc3RVcGRhdGUgPSBmdW5jdGlvbihyb3V0ZVJlc29sdmVyLCBjb21wKSB7XG5cdFx0XHRcdGlmICh1cGRhdGUgIT09IGxhc3RVcGRhdGUpIHJldHVyblxuXHRcdFx0XHRjb21wb25lbnQgPSBjb21wICE9IG51bGwgJiYgKHR5cGVvZiBjb21wLnZpZXcgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgY29tcCA9PT0gXCJmdW5jdGlvblwiKT8gY29tcCA6IFwiZGl2XCJcblx0XHRcdFx0YXR0cnMzID0gcGFyYW1zLCBjdXJyZW50UGF0aCA9IHBhdGgsIGxhc3RVcGRhdGUgPSBudWxsXG5cdFx0XHRcdHJlbmRlcjEgPSAocm91dGVSZXNvbHZlci5yZW5kZXIgfHwgaWRlbnRpdHkpLmJpbmQocm91dGVSZXNvbHZlcilcblx0XHRcdFx0cnVuMSgpXG5cdFx0XHR9XG5cdFx0XHRpZiAocGF5bG9hZC52aWV3IHx8IHR5cGVvZiBwYXlsb2FkID09PSBcImZ1bmN0aW9uXCIpIHVwZGF0ZSh7fSwgcGF5bG9hZClcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAocGF5bG9hZC5vbm1hdGNoKSB7XG5cdFx0XHRcdFx0UHJvbWlzZS5yZXNvbHZlKHBheWxvYWQub25tYXRjaChwYXJhbXMsIHBhdGgpKS50aGVuKGZ1bmN0aW9uKHJlc29sdmVkKSB7XG5cdFx0XHRcdFx0XHR1cGRhdGUocGF5bG9hZCwgcmVzb2x2ZWQpXG5cdFx0XHRcdFx0fSwgYmFpbClcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHVwZGF0ZShwYXlsb2FkLCBcImRpdlwiKVxuXHRcdFx0fVxuXHRcdH0sIGJhaWwpXG5cdFx0cmVkcmF3U2VydmljZTAuc3Vic2NyaWJlKHJvb3QsIHJ1bjEpXG5cdH1cblx0cm91dGUuc2V0ID0gZnVuY3Rpb24ocGF0aCwgZGF0YSwgb3B0aW9ucykge1xuXHRcdGlmIChsYXN0VXBkYXRlICE9IG51bGwpIHtcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cdFx0XHRvcHRpb25zLnJlcGxhY2UgPSB0cnVlXG5cdFx0fVxuXHRcdGxhc3RVcGRhdGUgPSBudWxsXG5cdFx0cm91dGVTZXJ2aWNlLnNldFBhdGgocGF0aCwgZGF0YSwgb3B0aW9ucylcblx0fVxuXHRyb3V0ZS5nZXQgPSBmdW5jdGlvbigpIHtyZXR1cm4gY3VycmVudFBhdGh9XG5cdHJvdXRlLnByZWZpeCA9IGZ1bmN0aW9uKHByZWZpeDApIHtyb3V0ZVNlcnZpY2UucHJlZml4ID0gcHJlZml4MH1cblx0cm91dGUubGluayA9IGZ1bmN0aW9uKHZub2RlMSkge1xuXHRcdHZub2RlMS5kb20uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCByb3V0ZVNlcnZpY2UucHJlZml4ICsgdm5vZGUxLmF0dHJzLmhyZWYpXG5cdFx0dm5vZGUxLmRvbS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0aWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgZS5zaGlmdEtleSB8fCBlLndoaWNoID09PSAyKSByZXR1cm5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0ZS5yZWRyYXcgPSBmYWxzZVxuXHRcdFx0dmFyIGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIilcblx0XHRcdGlmIChocmVmLmluZGV4T2Yocm91dGVTZXJ2aWNlLnByZWZpeCkgPT09IDApIGhyZWYgPSBocmVmLnNsaWNlKHJvdXRlU2VydmljZS5wcmVmaXgubGVuZ3RoKVxuXHRcdFx0cm91dGUuc2V0KGhyZWYsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXHRcdH1cblx0fVxuXHRyb3V0ZS5wYXJhbSA9IGZ1bmN0aW9uKGtleTMpIHtcblx0XHRpZih0eXBlb2YgYXR0cnMzICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBrZXkzICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gYXR0cnMzW2tleTNdXG5cdFx0cmV0dXJuIGF0dHJzM1xuXHR9XG5cdHJldHVybiByb3V0ZVxufVxubS5yb3V0ZSA9IF8yMCh3aW5kb3csIHJlZHJhd1NlcnZpY2UpXG5tLndpdGhBdHRyID0gZnVuY3Rpb24oYXR0ck5hbWUsIGNhbGxiYWNrMSwgY29udGV4dCkge1xuXHRyZXR1cm4gZnVuY3Rpb24oZSkge1xuXHRcdGNhbGxiYWNrMS5jYWxsKGNvbnRleHQgfHwgdGhpcywgYXR0ck5hbWUgaW4gZS5jdXJyZW50VGFyZ2V0ID8gZS5jdXJyZW50VGFyZ2V0W2F0dHJOYW1lXSA6IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpKVxuXHR9XG59XG52YXIgXzI4ID0gY29yZVJlbmRlcmVyKHdpbmRvdylcbm0ucmVuZGVyID0gXzI4LnJlbmRlclxubS5yZWRyYXcgPSByZWRyYXdTZXJ2aWNlLnJlZHJhd1xubS5yZXF1ZXN0ID0gcmVxdWVzdFNlcnZpY2UucmVxdWVzdFxubS5qc29ucCA9IHJlcXVlc3RTZXJ2aWNlLmpzb25wXG5tLnBhcnNlUXVlcnlTdHJpbmcgPSBwYXJzZVF1ZXJ5U3RyaW5nXG5tLmJ1aWxkUXVlcnlTdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nXG5tLnZlcnNpb24gPSBcIjEuMS4zXCJcbm0udm5vZGUgPSBWbm9kZVxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIG1vZHVsZVtcImV4cG9ydHNcIl0gPSBtXG5lbHNlIHdpbmRvdy5tID0gbVxufSgpKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvbWl0aHJpbC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSwgbm8tcHJvY2Vzcy1leGl0ICovXG5cInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBmdW5jdGlvbiBpbml0KG5hbWUpIHtcblx0dmFyIHNwZWMgPSB7fSwgc3ViamVjdHMgPSBbXSwgcmVzdWx0cywgb25seSA9IG51bGwsIGN0eCA9IHNwZWMsIHN0YXJ0LCBzdGFjayA9IDAsIG5leHRUaWNraXNoLCBoYXNQcm9jZXNzID0gdHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIsIGhhc093biA9ICh7fSkuaGFzT3duUHJvcGVydHlcblxuXHRpZiAobmFtZSAhPSBudWxsKSBzcGVjW25hbWVdID0gY3R4ID0ge31cblxuXHRmdW5jdGlvbiBvKHN1YmplY3QsIHByZWRpY2F0ZSkge1xuXHRcdGlmIChwcmVkaWNhdGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHJlc3VsdHMgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiQXNzZXJ0aW9ucyBzaG91bGQgbm90IG9jY3VyIG91dHNpZGUgdGVzdCBkZWZpbml0aW9uc1wiKVxuXHRcdFx0cmV0dXJuIG5ldyBBc3NlcnQoc3ViamVjdClcblx0XHR9XG5cdFx0ZWxzZSBpZiAocmVzdWx0cyA9PSBudWxsKSB7XG5cdFx0XHRjdHhbdW5pcXVlKHN1YmplY3QpXSA9IHByZWRpY2F0ZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUZXN0IGRlZmluaXRpb24gc2hvdWxkbid0IGJlIG5lc3RlZC4gVG8gZ3JvdXAgdGVzdHMgdXNlIGBvLnNwZWMoKWBcIilcblx0XHR9XG5cdH1cblx0by5iZWZvcmUgPSBob29rKFwiX19iZWZvcmVcIilcblx0by5hZnRlciA9IGhvb2soXCJfX2FmdGVyXCIpXG5cdG8uYmVmb3JlRWFjaCA9IGhvb2soXCJfX2JlZm9yZUVhY2hcIilcblx0by5hZnRlckVhY2ggPSBob29rKFwiX19hZnRlckVhY2hcIilcblx0by5uZXcgPSBpbml0XG5cdG8uc3BlYyA9IGZ1bmN0aW9uKHN1YmplY3QsIHByZWRpY2F0ZSkge1xuXHRcdHZhciBwYXJlbnQgPSBjdHhcblx0XHRjdHggPSBjdHhbdW5pcXVlKHN1YmplY3QpXSA9IHt9XG5cdFx0cHJlZGljYXRlKClcblx0XHRjdHggPSBwYXJlbnRcblx0fVxuXHRvLm9ubHkgPSBmdW5jdGlvbihzdWJqZWN0LCBwcmVkaWNhdGUsIHNpbGVudCkge1xuXHRcdGlmICghc2lsZW50KSBjb25zb2xlLmxvZyhoaWdobGlnaHQoXCIvIVxcXFwgV0FSTklORyAvIVxcXFwgby5vbmx5KCkgbW9kZVwiKSlcblx0XHRvKHN1YmplY3QsIG9ubHkgPSBwcmVkaWNhdGUpXG5cdH1cblx0by5zcHkgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBzcHkgPSBmdW5jdGlvbigpIHtcblx0XHRcdHNweS50aGlzID0gdGhpc1xuXHRcdFx0c3B5LmFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcblx0XHRcdHNweS5jYWxsQ291bnQrK1xuXG5cdFx0XHRpZiAoZm4pIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG5cdFx0fVxuXHRcdGlmIChmbilcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHNweSwge1xuXHRcdFx0XHRsZW5ndGg6IHt2YWx1ZTogZm4ubGVuZ3RofSxcblx0XHRcdFx0bmFtZToge3ZhbHVlOiBmbi5uYW1lfVxuXHRcdFx0fSlcblx0XHRzcHkuYXJncyA9IFtdXG5cdFx0c3B5LmNhbGxDb3VudCA9IDBcblx0XHRyZXR1cm4gc3B5XG5cdH1cblx0by5ydW4gPSBmdW5jdGlvbigpIHtcblx0XHRyZXN1bHRzID0gW11cblx0XHRzdGFydCA9IG5ldyBEYXRlXG5cdFx0dGVzdChzcGVjLCBbXSwgW10sIHJlcG9ydClcblxuXHRcdGZ1bmN0aW9uIHRlc3Qoc3BlYywgcHJlLCBwb3N0LCBmaW5hbGl6ZSkge1xuXHRcdFx0cHJlID0gW10uY29uY2F0KHByZSwgc3BlY1tcIl9fYmVmb3JlRWFjaFwiXSB8fCBbXSlcblx0XHRcdHBvc3QgPSBbXS5jb25jYXQoc3BlY1tcIl9fYWZ0ZXJFYWNoXCJdIHx8IFtdLCBwb3N0KVxuXHRcdFx0c2VyaWVzKFtdLmNvbmNhdChzcGVjW1wiX19iZWZvcmVcIl0gfHwgW10sIE9iamVjdC5rZXlzKHNwZWMpLm1hcChmdW5jdGlvbihrZXkpIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGRvbmUsIHRpbWVvdXQpIHtcblx0XHRcdFx0XHR0aW1lb3V0KEluZmluaXR5KVxuXG5cdFx0XHRcdFx0aWYgKGtleS5zbGljZSgwLCAyKSA9PT0gXCJfX1wiKSByZXR1cm4gZG9uZSgpXG5cdFx0XHRcdFx0aWYgKG9ubHkgIT09IG51bGwgJiYgc3BlY1trZXldICE9PSBvbmx5ICYmIHR5cGVvZiBvbmx5ID09PSB0eXBlb2Ygc3BlY1trZXldKSByZXR1cm4gZG9uZSgpXG5cdFx0XHRcdFx0c3ViamVjdHMucHVzaChrZXkpXG5cdFx0XHRcdFx0dmFyIHR5cGUgPSB0eXBlb2Ygc3BlY1trZXldXG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHRlc3Qoc3BlY1trZXldLCBwcmUsIHBvc3QsIHBvcClcblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSBzZXJpZXMoW10uY29uY2F0KHByZSwgc3BlY1trZXldLCBwb3N0LCBwb3ApKVxuXG5cdFx0XHRcdFx0ZnVuY3Rpb24gcG9wKCkge1xuXHRcdFx0XHRcdFx0c3ViamVjdHMucG9wKClcblx0XHRcdFx0XHRcdGRvbmUoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSksIHNwZWNbXCJfX2FmdGVyXCJdIHx8IFtdLCBmaW5hbGl6ZSkpXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gc2VyaWVzKGZucykge1xuXHRcdFx0dmFyIGN1cnNvciA9IDBcblx0XHRcdG5leHQoKVxuXG5cdFx0XHRmdW5jdGlvbiBuZXh0KCkge1xuXHRcdFx0XHRpZiAoY3Vyc29yID09PSBmbnMubGVuZ3RoKSByZXR1cm5cblxuXHRcdFx0XHR2YXIgZm4gPSBmbnNbY3Vyc29yKytdXG5cdFx0XHRcdGlmIChmbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dmFyIHRpbWVvdXQgPSAwLCBkZWxheSA9IDIwMCwgcyA9IG5ldyBEYXRlXG5cdFx0XHRcdFx0dmFyIGlzRG9uZSA9IGZhbHNlXG5cdFx0XHRcdFx0dmFyIGJvZHkgPSBmbi50b1N0cmluZygpXG5cdFx0XHRcdFx0dmFyIGFyZyA9IChib2R5Lm1hdGNoKC9cXCgoW1xcdyRdKykvKSB8fCBib2R5Lm1hdGNoKC8oW1xcdyRdKylcXHMqPT4vKSB8fCBbXSkucG9wKClcblx0XHRcdFx0XHRpZiAoYm9keS5pbmRleE9mKGFyZykgPT09IGJvZHkubGFzdEluZGV4T2YoYXJnKSkgdGhyb3cgbmV3IEVycm9yKFwiYFwiICsgYXJnICsgXCIoKWAgc2hvdWxkIGJlIGNhbGxlZCBhdCBsZWFzdCBvbmNlXCIpXG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGZuKGZ1bmN0aW9uIGRvbmUoKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aW1lb3V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRlbGF5ICE9PSBJbmZpbml0eSkgcmVjb3JkKG51bGwpXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFpc0RvbmUpIG5leHQoKVxuXHRcdFx0XHRcdFx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiYFwiICsgYXJnICsgXCIoKWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uY2VcIilcblx0XHRcdFx0XHRcdFx0XHRpc0RvbmUgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZSBjb25zb2xlLmxvZyhcIiMgZWxhcHNlZDogXCIgKyBNYXRoLnJvdW5kKG5ldyBEYXRlIC0gcykgKyBcIm1zLCBleHBlY3RlZCB1bmRlciBcIiArIGRlbGF5ICsgXCJtc1wiKVxuXHRcdFx0XHRcdFx0fSwgZnVuY3Rpb24odCkge2RlbGF5ID0gdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZWNvcmQoZS5tZXNzYWdlLCBlKVxuXHRcdFx0XHRcdFx0c3ViamVjdHMucG9wKClcblx0XHRcdFx0XHRcdG5leHQoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGltZW91dCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHRpbWVvdXQgPSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdFx0cmVjb3JkKFwiYXN5bmMgdGVzdCB0aW1lZCBvdXRcIilcblx0XHRcdFx0XHRcdFx0bmV4dCgpXG5cdFx0XHRcdFx0XHR9LCBNYXRoLm1pbihkZWxheSwgMjE0NzQ4MzY0NykpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGZuKClcblx0XHRcdFx0XHRuZXh0VGlja2lzaChuZXh0KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVuaXF1ZShzdWJqZWN0KSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKGN0eCwgc3ViamVjdCkpIHtcblx0XHRcdGNvbnNvbGUud2FybihcIkEgdGVzdCBvciBhIHNwZWMgbmFtZWQgYFwiICsgc3ViamVjdCArIFwiYCB3YXMgYWxyZWFkeSBkZWZpbmVkXCIpXG5cdFx0XHR3aGlsZSAoaGFzT3duLmNhbGwoY3R4LCBzdWJqZWN0KSkgc3ViamVjdCArPSBcIipcIlxuXHRcdH1cblx0XHRyZXR1cm4gc3ViamVjdFxuXHR9XG5cdGZ1bmN0aW9uIGhvb2sobmFtZSkge1xuXHRcdHJldHVybiBmdW5jdGlvbihwcmVkaWNhdGUpIHtcblx0XHRcdGlmIChjdHhbbmFtZV0pIHRocm93IG5ldyBFcnJvcihcIlRoaXMgaG9vayBzaG91bGQgYmUgZGVmaW5lZCBvdXRzaWRlIG9mIGEgbG9vcCBvciBpbnNpZGUgYSBuZXN0ZWQgdGVzdCBncm91cDpcXG5cIiArIHByZWRpY2F0ZSlcblx0XHRcdGN0eFtuYW1lXSA9IHByZWRpY2F0ZVxuXHRcdH1cblx0fVxuXG5cdGRlZmluZShcImVxdWFsc1wiLCBcInNob3VsZCBlcXVhbFwiLCBmdW5jdGlvbihhLCBiKSB7cmV0dXJuIGEgPT09IGJ9KVxuXHRkZWZpbmUoXCJub3RFcXVhbHNcIiwgXCJzaG91bGQgbm90IGVxdWFsXCIsIGZ1bmN0aW9uKGEsIGIpIHtyZXR1cm4gYSAhPT0gYn0pXG5cdGRlZmluZShcImRlZXBFcXVhbHNcIiwgXCJzaG91bGQgZGVlcCBlcXVhbFwiLCBkZWVwRXF1YWwpXG5cdGRlZmluZShcIm5vdERlZXBFcXVhbHNcIiwgXCJzaG91bGQgbm90IGRlZXAgZXF1YWxcIiwgZnVuY3Rpb24oYSwgYikge3JldHVybiAhZGVlcEVxdWFsKGEsIGIpfSlcblxuXHRmdW5jdGlvbiBpc0FyZ3VtZW50cyhhKSB7XG5cdFx0aWYgKFwiY2FsbGVlXCIgaW4gYSkge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiBhKSBpZiAoaSA9PT0gXCJjYWxsZWVcIikgcmV0dXJuIGZhbHNlXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuXHRcdGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZVxuXHRcdGlmIChhID09PSBudWxsIF4gYiA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQgXiBiID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZVxuXHRcdGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYiA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0dmFyIGFJc0FyZ3MgPSBpc0FyZ3VtZW50cyhhKSwgYklzQXJncyA9IGlzQXJndW1lbnRzKGIpXG5cdFx0XHRpZiAoYS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIGIuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiAhYUlzQXJncyAmJiAhYklzQXJncykge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIGEpIHtcblx0XHRcdFx0XHRpZiAoKCEoaSBpbiBiKSkgfHwgIWRlZXBFcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBiKSB7XG5cdFx0XHRcdFx0aWYgKCEoaSBpbiBhKSkgcmV0dXJuIGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1cblx0XHRcdGlmIChhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgKGEgaW5zdGFuY2VvZiBBcnJheSAmJiBiIGluc3RhbmNlb2YgQXJyYXkgfHwgYUlzQXJncyAmJiBiSXNBcmdzKSkge1xuXHRcdFx0XHR2YXIgYUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKSwgYktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKVxuXHRcdFx0XHRpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHJldHVybiBmYWxzZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFLZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKCFoYXNPd24uY2FsbChiLCBhS2V5c1tpXSkgfHwgIWRlZXBFcXVhbChhW2FLZXlzW2ldXSwgYlthS2V5c1tpXV0pKSByZXR1cm4gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0aWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpXG5cdFx0XHRpZiAodHlwZW9mIEJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIGEgaW5zdGFuY2VvZiBCdWZmZXIgJiYgYiBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1cblx0XHRcdGlmIChhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCkpIHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cblx0ZnVuY3Rpb24gQXNzZXJ0KHZhbHVlKSB7dGhpcy52YWx1ZSA9IHZhbHVlfVxuXHRmdW5jdGlvbiBkZWZpbmUobmFtZSwgdmVyYiwgY29tcGFyZSkge1xuXHRcdEFzc2VydC5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbiBhc3NlcnQodmFsdWUpIHtcblx0XHRcdGlmIChjb21wYXJlKHRoaXMudmFsdWUsIHZhbHVlKSkgcmVjb3JkKG51bGwpXG5cdFx0XHRlbHNlIHJlY29yZChzZXJpYWxpemUodGhpcy52YWx1ZSkgKyBcIlxcblwiICsgdmVyYiArIFwiXFxuXCIgKyBzZXJpYWxpemUodmFsdWUpKVxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXVxuXHRcdFx0XHRyZXN1bHQubWVzc2FnZSA9IG1lc3NhZ2UgKyBcIlxcblxcblwiICsgcmVzdWx0Lm1lc3NhZ2Vcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVjb3JkKG1lc3NhZ2UsIGVycm9yKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHtwYXNzOiBtZXNzYWdlID09PSBudWxsfVxuXHRcdGlmIChyZXN1bHQucGFzcyA9PT0gZmFsc2UpIHtcblx0XHRcdGlmIChlcnJvciA9PSBudWxsKSB7XG5cdFx0XHRcdGVycm9yID0gbmV3IEVycm9yXG5cdFx0XHRcdGlmIChlcnJvci5zdGFjayA9PT0gdW5kZWZpbmVkKSBuZXcgZnVuY3Rpb24oKSB7dHJ5IHt0aHJvdyBlcnJvcn0gY2F0Y2ggKGUpIHtlcnJvciA9IGV9fVxuXHRcdFx0fVxuXHRcdFx0cmVzdWx0LmNvbnRleHQgPSBzdWJqZWN0cy5qb2luKFwiID4gXCIpXG5cdFx0XHRyZXN1bHQubWVzc2FnZSA9IG1lc3NhZ2Vcblx0XHRcdHJlc3VsdC5lcnJvciA9IGVycm9yLnN0YWNrXG5cdFx0fVxuXHRcdHJlc3VsdHMucHVzaChyZXN1bHQpXG5cdH1cblx0ZnVuY3Rpb24gc2VyaWFsaXplKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSByZXR1cm4gU3RyaW5nKHZhbHVlKVxuXHRcdGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdmFsdWUubmFtZSB8fCBcIjxhbm9ueW1vdXMgZnVuY3Rpb24+XCJcblx0XHR0cnkge3JldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSl9IGNhdGNoIChlKSB7cmV0dXJuIFN0cmluZyh2YWx1ZSl9XG5cdH1cblx0ZnVuY3Rpb24gaGlnaGxpZ2h0KG1lc3NhZ2UpIHtcblx0XHRyZXR1cm4gaGFzUHJvY2VzcyA/IFwiXFx4MWJbMzFtXCIgKyBtZXNzYWdlICsgXCJcXHgxYlswbVwiIDogXCIlY1wiICsgbWVzc2FnZSArIFwiJWMgXCJcblx0fVxuXG5cdGZ1bmN0aW9uIHJlcG9ydCgpIHtcblx0XHR2YXIgc3RhdHVzID0gMFxuXHRcdGZvciAodmFyIGkgPSAwLCByOyByID0gcmVzdWx0c1tpXTsgaSsrKSB7XG5cdFx0XHRpZiAoIXIucGFzcykge1xuXHRcdFx0XHR2YXIgc3RhY2tUcmFjZSA9IHIuZXJyb3IubWF0Y2goL14oPzooPyFFcnJvcnxbXFwvXFxcXF1vc3BlY1tcXC9cXFxcXW9zcGVjXFwuanMpLikqJC9tKVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKHIuY29udGV4dCArIFwiOlxcblwiICsgaGlnaGxpZ2h0KHIubWVzc2FnZSkgKyAoc3RhY2tUcmFjZSA/IFwiXFxuXFxuXCIgKyBzdGFja1RyYWNlICsgXCJcXG5cXG5cIiA6IFwiXCIpLCBoYXNQcm9jZXNzID8gXCJcIiA6IFwiY29sb3I6cmVkXCIsIGhhc1Byb2Nlc3MgPyBcIlwiIDogXCJjb2xvcjpibGFja1wiKVxuXHRcdFx0XHRzdGF0dXMgPSAxXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0KG5hbWUgPyBuYW1lICsgXCI6IFwiIDogXCJcIikgK1xuXHRcdFx0cmVzdWx0cy5sZW5ndGggKyBcIiBhc3NlcnRpb25zIGNvbXBsZXRlZCBpbiBcIiArIE1hdGgucm91bmQobmV3IERhdGUgLSBzdGFydCkgKyBcIm1zLCBcIiArXG5cdFx0XHRcIm9mIHdoaWNoIFwiICsgcmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24ocmVzdWx0KXtyZXR1cm4gcmVzdWx0LmVycm9yfSkubGVuZ3RoICsgXCIgZmFpbGVkXCJcblx0XHQpXG5cdFx0aWYgKGhhc1Byb2Nlc3MgJiYgc3RhdHVzID09PSAxKSBwcm9jZXNzLmV4aXQoMSlcblx0fVxuXG5cdGlmKGhhc1Byb2Nlc3MpIHtcblx0XHRuZXh0VGlja2lzaCA9IHByb2Nlc3MubmV4dFRpY2tcblx0fSBlbHNlIHtcblx0XHRuZXh0VGlja2lzaCA9IGZ1bmN0aW9uIGZha2VGYXN0TmV4dFRpY2sobmV4dCkge1xuXHRcdFx0aWYgKHN0YWNrKysgPCA1MDAwKSBuZXh0KClcblx0XHRcdGVsc2Ugc2V0VGltZW91dChuZXh0LCBzdGFjayA9IDApXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vbWl0aHJpbC9vc3BlYy9vc3BlYy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCJcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHJpbmcpIHtcblx0aWYgKHN0cmluZyA9PT0gXCJcIiB8fCBzdHJpbmcgPT0gbnVsbCkgcmV0dXJuIHt9XG5cdGlmIChzdHJpbmcuY2hhckF0KDApID09PSBcIj9cIikgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDEpXG5cblx0dmFyIGVudHJpZXMgPSBzdHJpbmcuc3BsaXQoXCImXCIpLCBkYXRhID0ge30sIGNvdW50ZXJzID0ge31cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGVudHJ5ID0gZW50cmllc1tpXS5zcGxpdChcIj1cIilcblx0XHR2YXIga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVudHJ5WzBdKVxuXHRcdHZhciB2YWx1ZSA9IGVudHJ5Lmxlbmd0aCA9PT0gMiA/IGRlY29kZVVSSUNvbXBvbmVudChlbnRyeVsxXSkgOiBcIlwiXG5cblx0XHRpZiAodmFsdWUgPT09IFwidHJ1ZVwiKSB2YWx1ZSA9IHRydWVcblx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB2YWx1ZSA9IGZhbHNlXG5cblx0XHR2YXIgbGV2ZWxzID0ga2V5LnNwbGl0KC9cXF1cXFs/fFxcWy8pXG5cdFx0dmFyIGN1cnNvciA9IGRhdGFcblx0XHRpZiAoa2V5LmluZGV4T2YoXCJbXCIpID4gLTEpIGxldmVscy5wb3AoKVxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGV2ZWxzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgbGV2ZWwgPSBsZXZlbHNbal0sIG5leHRMZXZlbCA9IGxldmVsc1tqICsgMV1cblx0XHRcdHZhciBpc051bWJlciA9IG5leHRMZXZlbCA9PSBcIlwiIHx8ICFpc05hTihwYXJzZUludChuZXh0TGV2ZWwsIDEwKSlcblx0XHRcdHZhciBpc1ZhbHVlID0gaiA9PT0gbGV2ZWxzLmxlbmd0aCAtIDFcblx0XHRcdGlmIChsZXZlbCA9PT0gXCJcIikge1xuXHRcdFx0XHR2YXIga2V5ID0gbGV2ZWxzLnNsaWNlKDAsIGopLmpvaW4oKVxuXHRcdFx0XHRpZiAoY291bnRlcnNba2V5XSA9PSBudWxsKSBjb3VudGVyc1trZXldID0gMFxuXHRcdFx0XHRsZXZlbCA9IGNvdW50ZXJzW2tleV0rK1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN1cnNvcltsZXZlbF0gPT0gbnVsbCkge1xuXHRcdFx0XHRjdXJzb3JbbGV2ZWxdID0gaXNWYWx1ZSA/IHZhbHVlIDogaXNOdW1iZXIgPyBbXSA6IHt9XG5cdFx0XHR9XG5cdFx0XHRjdXJzb3IgPSBjdXJzb3JbbGV2ZWxdXG5cdFx0fVxuXHR9XG5cdHJldHVybiBkYXRhXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvcXVlcnlzdHJpbmcvcGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBwdXNoU3RhdGVNb2NrID0gcmVxdWlyZShcIi4vcHVzaFN0YXRlTW9ja1wiKVxudmFyIGRvbU1vY2sgPSByZXF1aXJlKFwiLi9kb21Nb2NrXCIpXG52YXIgeGhyTW9jayA9IHJlcXVpcmUoXCIuL3hock1vY2tcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbnYpIHtcblx0ZW52ID0gZW52IHx8IHt9XG5cdHZhciAkd2luZG93ID0gZW52LndpbmRvdyA9IHt9XG5cblx0dmFyIGRvbSA9IGRvbU1vY2soKVxuXHR2YXIgeGhyID0geGhyTW9jaygpXG5cdGZvciAodmFyIGtleSBpbiBkb20pIGlmICghJHdpbmRvd1trZXldKSAkd2luZG93W2tleV0gPSBkb21ba2V5XVxuXHRmb3IgKHZhciBrZXkgaW4geGhyKSBpZiAoISR3aW5kb3dba2V5XSkgJHdpbmRvd1trZXldID0geGhyW2tleV1cblx0cHVzaFN0YXRlTW9jayhlbnYpXG5cblx0cmV0dXJuICR3aW5kb3dcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy9icm93c2VyTW9jay5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCJcblxuLypcbktub3duIGxpbWl0YXRpb25zOlxuXG4tIGBvcHRpb24uc2VsZWN0ZWRgIGNhbid0IGJlIHNldC9yZWFkIHdoZW4gdGhlIG9wdGlvbiBkb2Vzbid0IGhhdmUgYSBgc2VsZWN0YCBwYXJlbnRcbi0gYGVsZW1lbnQuYXR0cmlidXRlc2AgaXMganVzdCBhIG1hcCBvZiBhdHRyaWJ1dGUgbmFtZXMgPT4gQXR0ciBvYmplY3RzIHN0dWJzXG4tIC4uLlxuXG4qL1xuXG4vKlxub3B0aW9uczpcbi0gc3B5OihmOiBGdW5jdGlvbikgPT4gRnVuY3Rpb25cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXHR2YXIgc3B5ID0gb3B0aW9ucy5zcHkgfHwgZnVuY3Rpb24oZil7cmV0dXJuIGZ9XG5cdHZhciBzcHltYXAgPSBbXVxuXHRmdW5jdGlvbiByZWdpc3RlclNwaWVzKGVsZW1lbnQsIHNwaWVzKSB7XG5cdFx0aWYob3B0aW9ucy5zcHkpIHtcblx0XHRcdHZhciBpID0gc3B5bWFwLmluZGV4T2YoZWxlbWVudClcblx0XHRcdGlmIChpID09PSAtMSkge1xuXHRcdFx0XHRzcHltYXAucHVzaChlbGVtZW50LCBzcGllcylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBleGlzdGluZyA9IHNweW1hcFtpICsgMV1cblx0XHRcdFx0Zm9yICh2YXIgayBpbiBzcGllcykgZXhpc3Rpbmdba10gPSBzcGllc1trXVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBnZXRTcGllcyhlbGVtZW50KSB7XG5cdFx0aWYgKGVsZW1lbnQgPT0gbnVsbCB8fCB0eXBlb2YgZWxlbWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiRWxlbWVudCBleHBlY3RlZFwiKVxuXHRcdGlmKG9wdGlvbnMuc3B5KSByZXR1cm4gc3B5bWFwW3NweW1hcC5pbmRleE9mKGVsZW1lbnQpICsgMV1cblx0fVxuXG5cdGZ1bmN0aW9uIGlzTW9kZXJuRXZlbnQodHlwZSkge1xuXHRcdHJldHVybiB0eXBlID09PSBcInRyYW5zaXRpb25zdGFydFwiIHx8IHR5cGUgPT09IFwidHJhbnNpdGlvbmVuZFwiIHx8IHR5cGUgPT09IFwiYW5pbWF0aW9uc3RhcnRcIiB8fCB0eXBlID09PSBcImFuaW1hdGlvbmVuZFwiXG5cdH1cblx0ZnVuY3Rpb24gYXBwZW5kQ2hpbGQoY2hpbGQpIHtcblx0XHR2YXIgYW5jZXN0b3IgPSB0aGlzXG5cdFx0d2hpbGUgKGFuY2VzdG9yICE9PSBjaGlsZCAmJiBhbmNlc3RvciAhPT0gbnVsbCkgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlXG5cdFx0aWYgKGFuY2VzdG9yID09PSBjaGlsZCkgdGhyb3cgbmV3IEVycm9yKFwiTm9kZSBjYW5ub3QgYmUgaW5zZXJ0ZWQgYXQgdGhlIHNwZWNpZmllZCBwb2ludCBpbiB0aGUgaGllcmFyY2h5XCIpXG5cblx0XHRpZiAoY2hpbGQubm9kZVR5cGUgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgaXMgbm90IGEgRE9NIGVsZW1lbnRcIilcblxuXHRcdHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKVxuXHRcdGlmIChpbmRleCA+IC0xKSB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKVxuXHRcdGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMTEpIHtcblx0XHRcdHdoaWxlIChjaGlsZC5maXJzdENoaWxkICE9IG51bGwpIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQuZmlyc3RDaGlsZClcblx0XHRcdGNoaWxkLmNoaWxkTm9kZXMgPSBbXVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKVxuXHRcdFx0aWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCAmJiBjaGlsZC5wYXJlbnROb2RlICE9PSB0aGlzKSBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxuXHRcdFx0Y2hpbGQucGFyZW50Tm9kZSA9IHRoaXNcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcblx0XHR2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZClcblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0dGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSlcblx0XHRcdGNoaWxkLnBhcmVudE5vZGUgPSBudWxsXG5cdFx0fVxuXHRcdGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdyZW1vdmVDaGlsZCdcIilcblx0fVxuXHRmdW5jdGlvbiBpbnNlcnRCZWZvcmUoY2hpbGQsIHJlZmVyZW5jZSkge1xuXHRcdHZhciBhbmNlc3RvciA9IHRoaXNcblx0XHR3aGlsZSAoYW5jZXN0b3IgIT09IGNoaWxkICYmIGFuY2VzdG9yICE9PSBudWxsKSBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGVcblx0XHRpZiAoYW5jZXN0b3IgPT09IGNoaWxkKSB0aHJvdyBuZXcgRXJyb3IoXCJOb2RlIGNhbm5vdCBiZSBpbnNlcnRlZCBhdCB0aGUgc3BlY2lmaWVkIHBvaW50IGluIHRoZSBoaWVyYXJjaHlcIilcblxuXHRcdGlmIChjaGlsZC5ub2RlVHlwZSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCBpcyBub3QgYSBET00gZWxlbWVudFwiKVxuXG5cdFx0dmFyIHJlZkluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmZXJlbmNlKVxuXHRcdHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKVxuXHRcdGlmIChyZWZlcmVuY2UgIT09IG51bGwgJiYgcmVmSW5kZXggPCAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKVxuXHRcdGlmIChpbmRleCA+IC0xKSB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKVxuXHRcdGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQpXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoY2hpbGQubm9kZVR5cGUgPT09IDExKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UuYXBwbHkodGhpcy5jaGlsZE5vZGVzLCBbcmVmSW5kZXgsIDBdLmNvbmNhdChjaGlsZC5jaGlsZE5vZGVzKSlcblx0XHRcdFx0d2hpbGUgKGNoaWxkLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0XHR2YXIgc3ViY2hpbGQgPSBjaGlsZC5maXJzdENoaWxkXG5cdFx0XHRcdFx0Y2hpbGQucmVtb3ZlQ2hpbGQoc3ViY2hpbGQpXG5cdFx0XHRcdFx0c3ViY2hpbGQucGFyZW50Tm9kZSA9IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZC5jaGlsZE5vZGVzID0gW11cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHJlZkluZGV4LCAwLCBjaGlsZClcblx0XHRcdFx0aWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCAmJiBjaGlsZC5wYXJlbnROb2RlICE9PSB0aGlzKSBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxuXHRcdFx0XHRjaGlsZC5wYXJlbnROb2RlID0gdGhpc1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuXHRcdGlmICh0aGlzLmF0dHJpYnV0ZXNbbmFtZV0gPT0gbnVsbCkgcmV0dXJuIG51bGxcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW25hbWVdLnZhbHVlXG5cdH1cblx0ZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG5cdFx0Lyplc2xpbnQtZGlzYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0Ly8gdGhpcyBpcyB0aGUgY29ycmVjdCBraW5kIG9mIGNvbnZlcnNpb24sIHBhc3NpbmcgYSBTeW1ib2wgdGhyb3dzIGluIGJyb3dzZXJzIHRvby5cblx0XHR2YXIgbm9kZVZhbHVlID0gXCJcIiArIHZhbHVlXG5cdFx0Lyplc2xpbnQtZW5hYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblxuXHRcdHRoaXMuYXR0cmlidXRlc1tuYW1lXSA9IHtcblx0XHRcdG5hbWVzcGFjZVVSSTogbnVsbCxcblx0XHRcdGdldCB2YWx1ZSgpIHtyZXR1cm4gbm9kZVZhbHVlfSxcblx0XHRcdHNldCB2YWx1ZSh2YWx1ZSkge1xuXHRcdFx0XHQvKmVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0bm9kZVZhbHVlID0gXCJcIiArIHZhbHVlXG5cdFx0XHRcdC8qZXNsaW50LWVuYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0XHR9LFxuXHRcdFx0Z2V0IG5vZGVWYWx1ZSgpIHtyZXR1cm4gbm9kZVZhbHVlfSxcblx0XHRcdHNldCBub2RlVmFsdWUodmFsdWUpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5TKG5zLCBuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuXHRcdHRoaXMuYXR0cmlidXRlc1tuYW1lXS5uYW1lc3BhY2VVUkkgPSBuc1xuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7XG5cdFx0ZGVsZXRlIHRoaXMuYXR0cmlidXRlc1tuYW1lXVxuXHR9XG5cdGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG5cdFx0cmV0dXJuIG5hbWUgaW4gdGhpcy5hdHRyaWJ1dGVzXG5cdH1cblx0dmFyIGRlY2xMaXN0VG9rZW5pemVyID0gLzt8XCIoPzpcXFxcLnxbXlwiXFxuXSkqXCJ8Jyg/OlxcXFwufFteJ1xcbl0pKicvZ1xuXHQvKipcblx0ICogVGhpcyB3aWxsIHNwbGl0IGEgc2VtaWNvbG9uLXNlcGFyYXRlZCBDU1MgZGVjbGFyYXRpb24gbGlzdCBpbnRvIGFuIGFycmF5IG9mXG5cdCAqIGluZGl2aWR1YWwgZGVjbGFyYXRpb25zLCBpZ25vcmluZyBzZW1pY29sb25zIGluIHN0cmluZ3MuXG5cdCAqXG5cdCAqIENvbW1lbnRzIGFyZSBhbHNvIHN0cmlwcGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGVjbExpc3Rcblx0ICogQHJldHVybiB7c3RyaW5nW119XG5cdCAqL1xuXHRmdW5jdGlvbiBzcGxpdERlY2xMaXN0KGRlY2xMaXN0KSB7XG5cdFx0dmFyIGluZGljZXMgPSBbXSwgcmVzID0gW10sIG1hdGNoXG5cblx0XHQvLyByZW1vdmUgY29tbWVudHMsIHByZXNlcnZpbmcgY29tbWVudHMgaW4gc3RyaW5ncy5cblx0XHRkZWNsTGlzdCA9IGRlY2xMaXN0LnJlcGxhY2UoXG5cdFx0XHQvKFwiKD86XFxcXC58W15cIlxcbl0pKlwifCcoPzpcXFxcLnxbXidcXG5dKSonKXxcXC9cXCpbXFxzXFxTXSo/XFwqXFwvL2csXG5cdFx0XHRmdW5jdGlvbihtLCBzdHIpe1xuXHRcdFx0XHRyZXR1cm4gc3RyIHx8IFwiXCJcblx0XHRcdH1cblx0XHQpXG5cdFx0Lyplc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiovXG5cdFx0d2hpbGUgKG1hdGNoID0gZGVjbExpc3RUb2tlbml6ZXIuZXhlYyhkZWNsTGlzdCkpIHtcblx0XHRcdGlmIChtYXRjaFswXSA9PT0gXCI7XCIpIGluZGljZXMucHVzaChtYXRjaC5pbmRleClcblx0XHR9XG5cdFx0Lyplc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduKi9cblx0XHRmb3IgKHZhciBpID0gaW5kaWNlcy5sZW5ndGg7IGktLTspe1xuXHRcdFx0cmVzLnVuc2hpZnQoZGVjbExpc3Quc2xpY2UoaW5kaWNlc1tpXSArIDEpKVxuXHRcdFx0ZGVjbExpc3QgPSBkZWNsTGlzdC5zbGljZSgwLCBpbmRpY2VzW2ldKVxuXHRcdH1cblx0XHRyZXMudW5zaGlmdChkZWNsTGlzdClcblx0XHRyZXR1cm4gcmVzXG5cdH1cblxuXHR2YXIgYWN0aXZlRWxlbWVudFxuXHR2YXIgJHdpbmRvdyA9IHtcblx0XHRkb2N1bWVudDoge1xuXHRcdFx0Y3JlYXRlRWxlbWVudDogZnVuY3Rpb24odGFnKSB7XG5cdFx0XHRcdHZhciBjc3NUZXh0ID0gXCJcIlxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7fVxuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGUsIFwiY3NzVGV4dFwiLCB7XG5cdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtyZXR1cm4gY3NzVGV4dH0sXG5cdFx0XHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdHZhciBidWYgPSBbXVxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHN0eWxlW2tleV0gPSBcIlwiXG5cdFx0XHRcdFx0XHRcdHZhciBydWxlcyA9IHNwbGl0RGVjbExpc3QodmFsdWUpXG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcnVsZSA9IHJ1bGVzW2ldXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNvbG9uSW5kZXggPSBydWxlLmluZGV4T2YoXCI6XCIpXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNvbG9uSW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHJhd0tleSA9IHJ1bGUuc2xpY2UoMCwgY29sb25JbmRleCkudHJpbSgpXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIga2V5ID0gcmF3S2V5LnJlcGxhY2UoLy1cXEQvZywgZnVuY3Rpb24obWF0Y2gpIHtyZXR1cm4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKX0pXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgdmFsdWUgPSBydWxlLnNsaWNlKGNvbG9uSW5kZXggKyAxKS50cmltKClcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChrZXkgIT09IFwiY3NzVGV4dFwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlW2tleV0gPSB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRidWYucHVzaChyYXdLZXkgKyBcIjogXCIgKyB2YWx1ZSArIFwiO1wiKVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjc3NUZXh0ID0gYnVmLmpvaW4oXCIgXCIpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHR2YXIgZXZlbnRzID0ge31cblx0XHRcdFx0dmFyIGVsZW1lbnQgPSB7XG5cdFx0XHRcdFx0bm9kZVR5cGU6IDEsXG5cdFx0XHRcdFx0bm9kZU5hbWU6IHRhZy50b1VwcGVyQ2FzZSgpLFxuXHRcdFx0XHRcdG5hbWVzcGFjZVVSSTogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsXG5cdFx0XHRcdFx0YXBwZW5kQ2hpbGQ6IGFwcGVuZENoaWxkLFxuXHRcdFx0XHRcdHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcblx0XHRcdFx0XHRpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcblx0XHRcdFx0XHRoYXNBdHRyaWJ1dGU6IGhhc0F0dHJpYnV0ZSxcblx0XHRcdFx0XHRnZXRBdHRyaWJ1dGU6IGdldEF0dHJpYnV0ZSxcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGU6IHNldEF0dHJpYnV0ZSxcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVOUzogc2V0QXR0cmlidXRlTlMsXG5cdFx0XHRcdFx0cmVtb3ZlQXR0cmlidXRlOiByZW1vdmVBdHRyaWJ1dGUsXG5cdFx0XHRcdFx0cGFyZW50Tm9kZTogbnVsbCxcblx0XHRcdFx0XHRjaGlsZE5vZGVzOiBbXSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7fSxcblx0XHRcdFx0XHRnZXQgZmlyc3RDaGlsZCgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0gfHwgbnVsbFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Z2V0IG5leHRTaWJsaW5nKCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSByZXR1cm4gbnVsbFxuXHRcdFx0XHRcdFx0dmFyIGluZGV4ID0gdGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXMuaW5kZXhPZih0aGlzKVxuXHRcdFx0XHRcdFx0aWYgKGluZGV4IDwgMCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhcmVudCdzIGNoaWxkTm9kZXMgaXMgb3V0IG9mIHN5bmNcIilcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlc1tpbmRleCArIDFdIHx8IG51bGxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNldCB0ZXh0Q29udGVudCh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5jaGlsZE5vZGVzID0gW11cblx0XHRcdFx0XHRcdGlmICh2YWx1ZSAhPT0gXCJcIikgdGhpcy5hcHBlbmRDaGlsZCgkd2luZG93LmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSlcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNldCBpbm5lckhUTUwodmFsdWUpIHtcblx0XHRcdFx0XHRcdHdoaWxlICh0aGlzLmZpcnN0Q2hpbGQpIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKVxuXG5cdFx0XHRcdFx0XHR2YXIgc3RhY2sgPSBbdGhpc10sIGRlcHRoID0gMCwgdm9pZEVsZW1lbnRzID0gW1wiYXJlYVwiLCBcImJhc2VcIiwgXCJiclwiLCBcImNvbFwiLCBcImNvbW1hbmRcIiwgXCJlbWJlZFwiLCBcImhyXCIsIFwiaW1nXCIsIFwiaW5wdXRcIiwgXCJrZXlnZW5cIiwgXCJsaW5rXCIsIFwibWV0YVwiLCBcInBhcmFtXCIsIFwic291cmNlXCIsIFwidHJhY2tcIiwgXCJ3YnJcIl1cblx0XHRcdFx0XHRcdHZhbHVlLnJlcGxhY2UoLzwoW2EtejAtOVxcLV0rPykoKD86XFxzKz9bXj1dKz89KD86XCJbXlwiXSo/XCJ8J1teJ10qPyd8W15cXHM+XSopKSo/KShcXHMqXFwvKT8+fDxcXC8oW2EtejAtOVxcLV0rPyk+fChbXjxdKykvZywgZnVuY3Rpb24obWF0Y2gsIHN0YXJ0VGFnLCBhdHRycywgc2VsZkNsb3NlZCwgZW5kVGFnLCB0ZXh0KSB7XG5cdFx0XHRcdFx0XHRcdGlmIChzdGFydFRhZykge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlbGVtZW50ID0gJHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0YXJ0VGFnKVxuXHRcdFx0XHRcdFx0XHRcdGF0dHJzLnJlcGxhY2UoL1xccys/KFtePV0rPyk9KD86XCIoW15cIl0qPylcInwnKFteJ10qPyknfChbXlxccz5dKikpL2csIGZ1bmN0aW9uKG1hdGNoLCBrZXksIGRvdWJsZVF1b3RlZCwgc2luZ2xlUXVvdGVkLCB1bnF1b3RlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGtleVBhcnRzID0ga2V5LnNwbGl0KFwiOlwiKVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5hbWUgPSBrZXlQYXJ0cy5wb3AoKVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5zID0ga2V5UGFydHNbMF1cblx0XHRcdFx0XHRcdFx0XHRcdHZhciB2YWx1ZSA9IGRvdWJsZVF1b3RlZCB8fCBzaW5nbGVRdW90ZWQgfHwgdW5xdW90ZWQgfHwgXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG5zICE9IG51bGwpIGVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnMsIG5hbWUsIHZhbHVlKVxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSlcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdHN0YWNrW2RlcHRoXS5hcHBlbmRDaGlsZChlbGVtZW50KVxuXHRcdFx0XHRcdFx0XHRcdGlmICghc2VsZkNsb3NlZCAmJiB2b2lkRWxlbWVudHMuaW5kZXhPZihzdGFydFRhZy50b0xvd2VyQ2FzZSgpKSA8IDApIHN0YWNrWysrZGVwdGhdID0gZWxlbWVudFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYgKGVuZFRhZykge1xuXHRcdFx0XHRcdFx0XHRcdGRlcHRoLS1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmICh0ZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhY2tbZGVwdGhdLmFwcGVuZENoaWxkKCR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpIC8vIEZJWE1FIGhhbmRsZSBodG1sIGVudGl0aWVzXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRnZXQgc3R5bGUoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3R5bGVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNldCBzdHlsZShfKXtcblx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9zdHlsZSNTZXR0aW5nX3N0eWxlXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nIGVsZW1lbnQuc3R5bGUgaXMgbm90IHBvcnRhYmxlXCIpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRnZXQgY2xhc3NOYW1lKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlc1tcImNsYXNzXCJdID8gdGhpcy5hdHRyaWJ1dGVzW1wiY2xhc3NcIl0udmFsdWUgOiBcIlwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXQgY2xhc3NOYW1lKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5uYW1lc3BhY2VVUkkgPT09IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIikgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNldCBwcm9wZXJ0eSBjbGFzc05hbWUgb2YgU1ZHRWxlbWVudFwiKVxuXHRcdFx0XHRcdFx0ZWxzZSB0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHZhbHVlKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Zm9jdXM6IGZ1bmN0aW9uKCkge2FjdGl2ZUVsZW1lbnQgPSB0aGlzfSxcblx0XHRcdFx0XHRhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0aWYgKGV2ZW50c1t0eXBlXSA9PSBudWxsKSBldmVudHNbdHlwZV0gPSBbY2FsbGJhY2tdXG5cdFx0XHRcdFx0XHRlbHNlIGV2ZW50c1t0eXBlXS5wdXNoKGNhbGxiYWNrKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdGlmIChldmVudHNbdHlwZV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBldmVudHNbdHlwZV0uaW5kZXhPZihjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIGV2ZW50c1t0eXBlXS5zcGxpY2UoaW5kZXgsIDEpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5ub2RlTmFtZSA9PT0gXCJJTlBVVFwiICYmIHRoaXMuYXR0cmlidXRlc1tcInR5cGVcIl0gIT0gbnVsbCAmJiB0aGlzLmF0dHJpYnV0ZXNbXCJ0eXBlXCJdLnZhbHVlID09PSBcImNoZWNrYm94XCIgJiYgZS50eXBlID09PSBcImNsaWNrXCIpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZFxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRlLnRhcmdldCA9IHRoaXNcblx0XHRcdFx0XHRcdGlmIChldmVudHNbZS50eXBlXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzW2UudHlwZV0ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudHNbZS50eXBlXVtpXS5jYWxsKHRoaXMsIGUpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogc2hvdWxkIHRoaXMgZG8gc29tZXRoaW5nP1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzW1wib25cIiArIGUudHlwZV0gPT09IFwiZnVuY3Rpb25cIiAmJiAhaXNNb2Rlcm5FdmVudChlLnR5cGUpKSB0aGlzW1wib25cIiArIGUudHlwZV0oZSlcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG9uY2xpY2s6IG51bGwsXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJBXCIpIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgXCJocmVmXCIsIHtcblx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7cmV0dXJuIHRoaXMuYXR0cmlidXRlc1tcImhyZWZcIl0gPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBcIltGSVhNRSBpbXBsZW1lbnRdXCJ9LFxuXHRcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge3RoaXMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB2YWx1ZSl9LFxuXHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGVsZW1lbnQubm9kZU5hbWUgPT09IFwiSU5QVVRcIikge1xuXHRcdFx0XHRcdHZhciBjaGVja2VkXG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFwiY2hlY2tlZFwiLCB7XG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge3JldHVybiBjaGVja2VkID09PSB1bmRlZmluZWQgPyB0aGlzLmF0dHJpYnV0ZXNbXCJjaGVja2VkXCJdICE9PSB1bmRlZmluZWQgOiBjaGVja2VkfSxcblx0XHRcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtjaGVja2VkID0gQm9vbGVhbih2YWx1ZSl9LFxuXHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gXCJcIlxuXHRcdFx0XHRcdHZhciB2YWx1ZVNldHRlciA9IHNweShmdW5jdGlvbih2KSB7XG5cdFx0XHRcdFx0XHQvKmVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0XHRcdHZhbHVlID0gdiA9PT0gbnVsbCA/IFwiXCIgOiBcIlwiICsgdlxuXHRcdFx0XHRcdFx0Lyplc2xpbnQtZW5hYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcInZhbHVlXCIsIHtcblx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHNldDogdmFsdWVTZXR0ZXIsXG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHQvLyB3ZSBjdXJyZW50bHkgZW11bGF0ZSB0aGUgbm9uLWllIGJlaGF2aW9yLCBidXQgZW11bGF0aW5nIGllIG1heSBiZSBtb3JlIHVzZWZ1bCAodGhyb3cgd2hlbiBhbiBpbnZhbGlkIHR5cGUgaXMgc2V0KVxuXHRcdFx0XHRcdHZhciB0eXBlU2V0dGVyID0gc3B5KGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB2KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFwidHlwZVwiLCB7XG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMuaGFzQXR0cmlidXRlKFwidHlwZVwiKSkgcmV0dXJuIFwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhciB0eXBlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoL14oPzpyYWRpb3xidXR0b258Y2hlY2tib3h8Y29sb3J8ZGF0ZXxkYXRldGltZXxkYXRldGltZS1sb2NhbHxlbWFpbHxmaWxlfGhpZGRlbnxtb250aHxudW1iZXJ8cGFzc3dvcmR8cmFuZ2V8cmVzZWFyY2h8c2VhcmNofHN1Ym1pdHx0ZWx8dGV4dHx1cmx8d2Vla3xpbWFnZSkkLylcblx0XHRcdFx0XHRcdFx0LnRlc3QodHlwZSlcblx0XHRcdFx0XHRcdFx0PyB0eXBlXG5cdFx0XHRcdFx0XHRcdDogXCJ0ZXh0XCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRzZXQ6IHR5cGVTZXR0ZXIsXG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmVnaXN0ZXJTcGllcyhlbGVtZW50LCB7XG5cdFx0XHRcdFx0XHR2YWx1ZVNldHRlcjogdmFsdWVTZXR0ZXIsXG5cdFx0XHRcdFx0XHR0eXBlU2V0dGVyOiB0eXBlU2V0dGVyXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0aWYgKGVsZW1lbnQubm9kZU5hbWUgPT09IFwiVEVYVEFSRUFcIikge1xuXHRcdFx0XHRcdHZhciB3YXNOZXZlclNldCA9IHRydWVcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBcIlwiXG5cdFx0XHRcdFx0dmFyIHZhbHVlU2V0dGVyID0gc3B5KGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0XHRcdHdhc05ldmVyU2V0ID0gZmFsc2Vcblx0XHRcdFx0XHRcdC8qZXNsaW50LWRpc2FibGUgbm8taW1wbGljaXQtY29lcmNpb24qL1xuXHRcdFx0XHRcdFx0dmFsdWUgPSB2ID09PSBudWxsID8gXCJcIiA6IFwiXCIgKyB2XG5cdFx0XHRcdFx0XHQvKmVzbGludC1lbmFibGUgbm8taW1wbGljaXQtY29lcmNpb24qL1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFwidmFsdWVcIiwge1xuXHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHdhc05ldmVyU2V0ICYmIHRoaXMuZmlyc3RDaGlsZCA/IHRoaXMuZmlyc3RDaGlsZC5ub2RlVmFsdWUgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHNldDogdmFsdWVTZXR0ZXIsXG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmVnaXN0ZXJTcGllcyhlbGVtZW50LCB7XG5cdFx0XHRcdFx0XHR2YWx1ZVNldHRlcjogdmFsdWVTZXR0ZXJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgcmFkaXggKi9cblxuXHRcdFx0XHRpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJDQU5WQVNcIikge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcIndpZHRoXCIsIHtcblx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7cmV0dXJuIHRoaXMuYXR0cmlidXRlc1tcIndpZHRoXCJdID8gTWF0aC5mbG9vcihwYXJzZUludCh0aGlzLmF0dHJpYnV0ZXNbXCJ3aWR0aFwiXS52YWx1ZSkgfHwgMCkgOiAzMDB9LFxuXHRcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge3RoaXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpIHx8IDApLnRvU3RyaW5nKCkpfSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcImhlaWdodFwiLCB7XG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge3JldHVybiB0aGlzLmF0dHJpYnV0ZXNbXCJoZWlnaHRcIl0gPyBNYXRoLmZsb29yKHBhcnNlSW50KHRoaXMuYXR0cmlidXRlc1tcImhlaWdodFwiXS52YWx1ZSkgfHwgMCkgOiAzMDB9LFxuXHRcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge3RoaXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSB8fCAwKS50b1N0cmluZygpKX0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIGVzbGludC1lbmFibGUgcmFkaXggKi9cblxuXHRcdFx0XHRmdW5jdGlvbiBnZXRPcHRpb25zKGVsZW1lbnQpIHtcblx0XHRcdFx0XHR2YXIgb3B0aW9ucyA9IFtdXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmNoaWxkTm9kZXNbaV0ubm9kZU5hbWUgPT09IFwiT1BUSU9OXCIpIG9wdGlvbnMucHVzaChlbGVtZW50LmNoaWxkTm9kZXNbaV0pXG5cdFx0XHRcdFx0XHRlbHNlIGlmIChlbGVtZW50LmNoaWxkTm9kZXNbaV0ubm9kZU5hbWUgPT09IFwiT1BUR1JPVVBcIikgb3B0aW9ucyA9IG9wdGlvbnMuY29uY2F0KGdldE9wdGlvbnMoZWxlbWVudC5jaGlsZE5vZGVzW2ldKSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0XHRmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShlbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQuYXR0cmlidXRlc1tcInZhbHVlXCJdICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5hdHRyaWJ1dGVzW1widmFsdWVcIl0udmFsdWUgOlxuXHRcdFx0XHRcdFx0ZWxlbWVudC5maXJzdENoaWxkICE9IG51bGwgPyBlbGVtZW50LmZpcnN0Q2hpbGQubm9kZVZhbHVlIDogXCJcIlxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSBcIlNFTEVDVFwiKSB7XG5cdFx0XHRcdFx0Ly8gdmFyIHNlbGVjdGVkVmFsdWVcblx0XHRcdFx0XHR2YXIgc2VsZWN0ZWRJbmRleCA9IDBcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgXCJzZWxlY3RlZEluZGV4XCIsIHtcblx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7cmV0dXJuIGdldE9wdGlvbnModGhpcykubGVuZ3RoID4gMCA/IHNlbGVjdGVkSW5kZXggOiAtMX0sXG5cdFx0XHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBvcHRpb25zID0gZ2V0T3B0aW9ucyh0aGlzKVxuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgPj0gMCAmJiB2YWx1ZSA8IG9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gc2VsZWN0ZWRWYWx1ZSA9IGdldE9wdGlvblZhbHVlKG9wdGlvbnNbc2VsZWN0ZWRJbmRleF0pXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRJbmRleCA9IHZhbHVlXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gc2VsZWN0ZWRWYWx1ZSA9IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZEluZGV4ID0gLTFcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR2YXIgdmFsdWVTZXR0ZXIgPSBzcHkoZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZEluZGV4ID0gLTFcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBvcHRpb25zID0gZ2V0T3B0aW9ucyh0aGlzKVxuXHRcdFx0XHRcdFx0XHQvKmVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0XHRcdFx0dmFyIHN0cmluZ1ZhbHVlID0gXCJcIiArIHZhbHVlXG5cdFx0XHRcdFx0XHRcdC8qZXNsaW50LWVuYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiovXG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChnZXRPcHRpb25WYWx1ZShvcHRpb25zW2ldKSA9PT0gc3RyaW5nVmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHNlbGVjdGVkVmFsdWUgPSBzdHJpbmdWYWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRJbmRleCA9IGlcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyBzZWxlY3RlZFZhbHVlID0gc3RyaW5nVmFsdWVcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRJbmRleCA9IC0xXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgXCJ2YWx1ZVwiLCB7XG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gLTEpIHJldHVybiBnZXRPcHRpb25WYWx1ZShnZXRPcHRpb25zKHRoaXMpW3RoaXMuc2VsZWN0ZWRJbmRleF0pXG5cdFx0XHRcdFx0XHRcdHJldHVybiBcIlwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0c2V0OiB2YWx1ZVNldHRlcixcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRyZWdpc3RlclNwaWVzKGVsZW1lbnQsIHtcblx0XHRcdFx0XHRcdHZhbHVlU2V0dGVyOiB2YWx1ZVNldHRlclxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVsZW1lbnQubm9kZU5hbWUgPT09IFwiT1BUSU9OXCIpIHtcblx0XHRcdFx0XHR2YXIgdmFsdWVTZXR0ZXIgPSBzcHkoZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRcdC8qZXNsaW50LWRpc2FibGUgbm8taW1wbGljaXQtY29lcmNpb24qL1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSA9PT0gbnVsbCA/IFwiXCIgOiBcIlwiICsgdmFsdWUpXG5cdFx0XHRcdFx0XHQvKmVzbGludC1lbmFibGUgbm8taW1wbGljaXQtY29lcmNpb24qL1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFwidmFsdWVcIiwge1xuXHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtyZXR1cm4gZ2V0T3B0aW9uVmFsdWUodGhpcyl9LFxuXHRcdFx0XHRcdFx0c2V0OiB2YWx1ZVNldHRlcixcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRyZWdpc3RlclNwaWVzKGVsZW1lbnQsIHtcblx0XHRcdFx0XHRcdHZhbHVlU2V0dGVyOiB2YWx1ZVNldHRlclxuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgXCJzZWxlY3RlZFwiLCB7XG5cdFx0XHRcdFx0XHQvLyBUT0RPPyBoYW5kbGUgYHNlbGVjdGVkYCB3aXRob3V0IGEgcGFyZW50ICh3b3JrcyBpbiBicm93c2Vycylcblx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBvcHRpb25zID0gZ2V0T3B0aW9ucyh0aGlzLnBhcmVudE5vZGUpXG5cdFx0XHRcdFx0XHRcdHZhciBpbmRleCA9IG9wdGlvbnMuaW5kZXhPZih0aGlzKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IHRoaXMucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgb3B0aW9ucyA9IGdldE9wdGlvbnModGhpcy5wYXJlbnROb2RlKVxuXHRcdFx0XHRcdFx0XHRcdHZhciBpbmRleCA9IG9wdGlvbnMuaW5kZXhPZih0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB0aGlzLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCA9IGluZGV4XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZSB0aGlzLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCA9IDBcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGVsZW1lbnRcblx0XHRcdH0sXG5cdFx0XHRjcmVhdGVFbGVtZW50TlM6IGZ1bmN0aW9uKG5zLCB0YWcsIGlzKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KHRhZywgaXMpXG5cdFx0XHRcdGVsZW1lbnQubm9kZU5hbWUgPSB0YWdcblx0XHRcdFx0ZWxlbWVudC5uYW1lc3BhY2VVUkkgPSBuc1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudFxuXHRcdFx0fSxcblx0XHRcdGNyZWF0ZVRleHROb2RlOiBmdW5jdGlvbih0ZXh0KSB7XG5cdFx0XHRcdC8qZXNsaW50LWRpc2FibGUgbm8taW1wbGljaXQtY29lcmNpb24qL1xuXHRcdFx0XHR2YXIgbm9kZVZhbHVlID0gXCJcIiArIHRleHRcblx0XHRcdFx0Lyplc2xpbnQtZW5hYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRub2RlVHlwZTogMyxcblx0XHRcdFx0XHRub2RlTmFtZTogXCIjdGV4dFwiLFxuXHRcdFx0XHRcdHBhcmVudE5vZGU6IG51bGwsXG5cdFx0XHRcdFx0Z2V0IG5vZGVWYWx1ZSgpIHtyZXR1cm4gbm9kZVZhbHVlfSxcblx0XHRcdFx0XHRzZXQgbm9kZVZhbHVlKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHQvKmVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0XHRcdG5vZGVWYWx1ZSA9IFwiXCIgKyB2YWx1ZVxuXHRcdFx0XHRcdFx0Lyplc2xpbnQtZW5hYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uKi9cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlRG9jdW1lbnRGcmFnbWVudDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0bm9kZVR5cGU6IDExLFxuXHRcdFx0XHRcdG5vZGVOYW1lOiBcIiNkb2N1bWVudC1mcmFnbWVudFwiLFxuXHRcdFx0XHRcdGFwcGVuZENoaWxkOiBhcHBlbmRDaGlsZCxcblx0XHRcdFx0XHRpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcblx0XHRcdFx0XHRyZW1vdmVDaGlsZDogcmVtb3ZlQ2hpbGQsXG5cdFx0XHRcdFx0cGFyZW50Tm9kZTogbnVsbCxcblx0XHRcdFx0XHRjaGlsZE5vZGVzOiBbXSxcblx0XHRcdFx0XHRnZXQgZmlyc3RDaGlsZCgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0gfHwgbnVsbFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjcmVhdGVFdmVudDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aW5pdEV2ZW50OiBmdW5jdGlvbih0eXBlKSB7dGhpcy50eXBlID0gdHlwZX0sXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRnZXQgYWN0aXZlRWxlbWVudCgpIHtyZXR1cm4gYWN0aXZlRWxlbWVudH0sXG5cdFx0fSxcblx0fVxuXHQkd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA9ICR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh0bWxcIilcblx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoJHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiKSlcblx0JHdpbmRvdy5kb2N1bWVudC5ib2R5ID0gJHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm9keVwiKVxuXHQkd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCgkd2luZG93LmRvY3VtZW50LmJvZHkpXG5cdGFjdGl2ZUVsZW1lbnQgPSAkd2luZG93LmRvY3VtZW50LmJvZHlcblxuXHRpZiAob3B0aW9ucy5zcHkpICR3aW5kb3cuX19nZXRTcGllcyA9IGdldFNwaWVzXG5cblx0cmV0dXJuICR3aW5kb3dcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zdGgxcGFsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L25vZGUuanMvdHM2L34vbWl0aHJpbC90ZXN0LXV0aWxzL2RvbU1vY2suanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBwYXJzZVVSTCA9IHJlcXVpcmUoXCIuLi90ZXN0LXV0aWxzL3BhcnNlVVJMXCIpXG52YXIgY2FsbEFzeW5jID0gcmVxdWlyZShcIi4uL3Rlc3QtdXRpbHMvY2FsbEFzeW5jXCIpXG5cbmZ1bmN0aW9uIGRlYm91bmNlZEFzeW5jKGYpIHtcblx0dmFyIHJlZlxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHJlZiAhPSBudWxsKSByZXR1cm5cblx0XHRyZWYgPSBjYWxsQXN5bmMoZnVuY3Rpb24oKXtcblx0XHRcdHJlZiA9IG51bGxcblx0XHRcdGYoKVxuXHRcdH0pXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zID09IG51bGwpIG9wdGlvbnMgPSB7fVxuXG5cdHZhciAkd2luZG93ID0gb3B0aW9ucy53aW5kb3cgfHwge31cblx0dmFyIHByb3RvY29sID0gb3B0aW9ucy5wcm90b2NvbCB8fCBcImh0dHA6XCJcblx0dmFyIGhvc3RuYW1lID0gb3B0aW9ucy5ob3N0bmFtZSB8fCBcImxvY2FsaG9zdFwiXG5cdHZhciBwb3J0ID0gXCJcIlxuXHR2YXIgcGF0aG5hbWUgPSBcIi9cIlxuXHR2YXIgc2VhcmNoID0gXCJcIlxuXHR2YXIgaGFzaCA9IFwiXCJcblxuXHR2YXIgcGFzdCA9IFt7dXJsOiBnZXRVUkwoKSwgaXNOZXc6IHRydWUsIHN0YXRlOiBudWxsLCB0aXRsZTogbnVsbH1dLCBmdXR1cmUgPSBbXVxuXG5cdGZ1bmN0aW9uIGdldFVSTCgpIHtcblx0XHRpZiAocHJvdG9jb2wgPT09IFwiZmlsZTpcIikgcmV0dXJuIHByb3RvY29sICsgXCIvL1wiICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoXG5cdFx0cmV0dXJuIHByb3RvY29sICsgXCIvL1wiICsgaG9zdG5hbWUgKyBwcmVmaXgoXCI6XCIsIHBvcnQpICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoXG5cdH1cblx0ZnVuY3Rpb24gc2V0VVJMKHZhbHVlKSB7XG5cdFx0dmFyIGRhdGEgPSBwYXJzZVVSTCh2YWx1ZSwge3Byb3RvY29sOiBwcm90b2NvbCwgaG9zdG5hbWU6IGhvc3RuYW1lLCBwb3J0OiBwb3J0LCBwYXRobmFtZTogcGF0aG5hbWV9KVxuXHRcdHZhciBpc05ldyA9IGZhbHNlXG5cdFx0aWYgKGRhdGEucHJvdG9jb2wgIT0gbnVsbCAmJiBkYXRhLnByb3RvY29sICE9PSBwcm90b2NvbCkgcHJvdG9jb2wgPSBkYXRhLnByb3RvY29sLCBpc05ldyA9IHRydWVcblx0XHRpZiAoZGF0YS5ob3N0bmFtZSAhPSBudWxsICYmIGRhdGEuaG9zdG5hbWUgIT09IGhvc3RuYW1lKSBob3N0bmFtZSA9IGRhdGEuaG9zdG5hbWUsIGlzTmV3ID0gdHJ1ZVxuXHRcdGlmIChkYXRhLnBvcnQgIT0gbnVsbCAmJiBkYXRhLnBvcnQgIT09IHBvcnQpIHBvcnQgPSBkYXRhLnBvcnQsIGlzTmV3ID0gdHJ1ZVxuXHRcdGlmIChkYXRhLnBhdGhuYW1lICE9IG51bGwgJiYgZGF0YS5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHBhdGhuYW1lID0gZGF0YS5wYXRobmFtZSwgaXNOZXcgPSB0cnVlXG5cdFx0aWYgKGRhdGEuc2VhcmNoICE9IG51bGwgJiYgZGF0YS5zZWFyY2ggIT09IHNlYXJjaCkgc2VhcmNoID0gZGF0YS5zZWFyY2gsIGlzTmV3ID0gdHJ1ZVxuXHRcdGlmIChkYXRhLmhhc2ggIT0gbnVsbCAmJiBkYXRhLmhhc2ggIT09IGhhc2gpIHtcblx0XHRcdGhhc2ggPSBkYXRhLmhhc2hcblx0XHRcdGlmICghaXNOZXcpIHtcblx0XHRcdFx0aGFzaGNoYW5nZSgpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBpc05ld1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlZml4KHByZWZpeCwgdmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IFwiXCIpIHJldHVybiBcIlwiXG5cdFx0cmV0dXJuICh2YWx1ZS5jaGFyQXQoMCkgIT09IHByZWZpeCA/IHByZWZpeCA6IFwiXCIpICsgdmFsdWVcblx0fVxuXHRmdW5jdGlvbiBfaGFzaGNoYW5nZSgpIHtcblx0XHRpZiAodHlwZW9mICR3aW5kb3cub25oYXNoY2hhbmdlID09PSBcImZ1bmN0aW9uXCIpICR3aW5kb3cub25oYXNoY2hhbmdlKHt0eXBlOiBcImhhc2hjaGFuZ2VcIn0pXG5cdH1cblx0dmFyIGhhc2hjaGFuZ2UgPSBkZWJvdW5jZWRBc3luYyhfaGFzaGNoYW5nZSlcblx0ZnVuY3Rpb24gcG9wc3RhdGUoKSB7XG5cdFx0aWYgKHR5cGVvZiAkd2luZG93Lm9ucG9wc3RhdGUgPT09IFwiZnVuY3Rpb25cIikgJHdpbmRvdy5vbnBvcHN0YXRlKHt0eXBlOiBcInBvcHN0YXRlXCIsIHN0YXRlOiAkd2luZG93Lmhpc3Rvcnkuc3RhdGV9KVxuXHR9XG5cdGZ1bmN0aW9uIHVubG9hZCgpIHtcblx0XHRpZiAodHlwZW9mICR3aW5kb3cub251bmxvYWQgPT09IFwiZnVuY3Rpb25cIikgJHdpbmRvdy5vbnVubG9hZCh7dHlwZTogXCJ1bmxvYWRcIn0pXG5cdH1cblxuXHQkd2luZG93LmxvY2F0aW9uID0ge1xuXHRcdGdldCBwcm90b2NvbCgpIHtcblx0XHRcdHJldHVybiBwcm90b2NvbFxuXHRcdH0sXG5cdFx0Z2V0IGhvc3RuYW1lKCkge1xuXHRcdFx0cmV0dXJuIGhvc3RuYW1lXG5cdFx0fSxcblx0XHRnZXQgcG9ydCgpIHtcblx0XHRcdHJldHVybiBwb3J0XG5cdFx0fSxcblx0XHRnZXQgcGF0aG5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gcGF0aG5hbWVcblx0XHR9LFxuXHRcdGdldCBzZWFyY2goKSB7XG5cdFx0XHRyZXR1cm4gc2VhcmNoXG5cdFx0fSxcblx0XHRnZXQgaGFzaCgpIHtcblx0XHRcdHJldHVybiBoYXNoXG5cdFx0fSxcblx0XHRnZXQgb3JpZ2luKCkge1xuXHRcdFx0aWYgKHByb3RvY29sID09PSBcImZpbGU6XCIpIHJldHVybiBcIm51bGxcIlxuXHRcdFx0cmV0dXJuIHByb3RvY29sICsgXCIvL1wiICsgaG9zdG5hbWUgKyBwcmVmaXgoXCI6XCIsIHBvcnQpXG5cdFx0fSxcblx0XHRnZXQgaG9zdCgpIHtcblx0XHRcdGlmIChwcm90b2NvbCA9PT0gXCJmaWxlOlwiKSByZXR1cm4gXCJcIlxuXHRcdFx0cmV0dXJuIGhvc3RuYW1lICsgcHJlZml4KFwiOlwiLCBwb3J0KVxuXHRcdH0sXG5cdFx0Z2V0IGhyZWYoKSB7XG5cdFx0XHRyZXR1cm4gZ2V0VVJMKClcblx0XHR9LFxuXG5cdFx0c2V0IHByb3RvY29sKHZhbHVlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQcm90b2NvbCBpcyByZWFkLW9ubHlcIilcblx0XHR9LFxuXHRcdHNldCBob3N0bmFtZSh2YWx1ZSkge1xuXHRcdFx0dW5sb2FkKClcblx0XHRcdHBhc3QucHVzaCh7dXJsOiBnZXRVUkwoKSwgaXNOZXc6IHRydWV9KVxuXHRcdFx0ZnV0dXJlID0gW11cblx0XHRcdGhvc3RuYW1lID0gdmFsdWVcblx0XHR9LFxuXHRcdHNldCBwb3J0KHZhbHVlKSB7XG5cdFx0XHRpZiAocHJvdG9jb2wgPT09IFwiZmlsZTpcIikgdGhyb3cgbmV3IEVycm9yKFwiUG9ydCBpcyByZWFkLW9ubHkgdW5kZXIgYGZpbGU6Ly9gIHByb3RvY29sXCIpXG5cdFx0XHR1bmxvYWQoKVxuXHRcdFx0cGFzdC5wdXNoKHt1cmw6IGdldFVSTCgpLCBpc05ldzogdHJ1ZX0pXG5cdFx0XHRmdXR1cmUgPSBbXVxuXHRcdFx0cG9ydCA9IHZhbHVlXG5cdFx0fSxcblx0XHRzZXQgcGF0aG5hbWUodmFsdWUpIHtcblx0XHRcdGlmIChwcm90b2NvbCA9PT0gXCJmaWxlOlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJQYXRobmFtZSBpcyByZWFkLW9ubHkgdW5kZXIgYGZpbGU6Ly9gIHByb3RvY29sXCIpXG5cdFx0XHR1bmxvYWQoKVxuXHRcdFx0cGFzdC5wdXNoKHt1cmw6IGdldFVSTCgpLCBpc05ldzogdHJ1ZX0pXG5cdFx0XHRmdXR1cmUgPSBbXVxuXHRcdFx0cGF0aG5hbWUgPSBwcmVmaXgoXCIvXCIsIHZhbHVlKVxuXHRcdH0sXG5cdFx0c2V0IHNlYXJjaCh2YWx1ZSkge1xuXHRcdFx0dW5sb2FkKClcblx0XHRcdHBhc3QucHVzaCh7dXJsOiBnZXRVUkwoKSwgaXNOZXc6IHRydWV9KVxuXHRcdFx0ZnV0dXJlID0gW11cblx0XHRcdHNlYXJjaCA9IHByZWZpeChcIj9cIiwgdmFsdWUpXG5cdFx0fSxcblx0XHRzZXQgaGFzaCh2YWx1ZSkge1xuXHRcdFx0dmFyIG9sZEhhc2ggPSBoYXNoXG5cdFx0XHRwYXN0LnB1c2goe3VybDogZ2V0VVJMKCksIGlzTmV3OiBmYWxzZX0pXG5cdFx0XHRmdXR1cmUgPSBbXVxuXHRcdFx0aGFzaCA9IHByZWZpeChcIiNcIiwgdmFsdWUpXG5cdFx0XHRpZiAob2xkSGFzaCAhPSBoYXNoKSBoYXNoY2hhbmdlKClcblx0XHR9LFxuXG5cdFx0c2V0IG9yaWdpbih2YWx1ZSkge1xuXHRcdFx0Ly9vcmlnaW4gaXMgd3JpdGFibGUgYnV0IGlnbm9yZWRcblx0XHR9LFxuXHRcdHNldCBob3N0KHZhbHVlKSB7XG5cdFx0XHQvL2hvc3QgaXMgd3JpdGFibGUgYnV0IGlnbm9yZWQgaW4gQ2hyb21lXG5cdFx0fSxcblx0XHRzZXQgaHJlZih2YWx1ZSkge1xuXHRcdFx0dmFyIHVybCA9IGdldFVSTCgpXG5cdFx0XHR2YXIgaXNOZXcgPSBzZXRVUkwodmFsdWUpXG5cdFx0XHRpZiAoaXNOZXcpIHtcblx0XHRcdFx0c2V0VVJMKHVybClcblx0XHRcdFx0dW5sb2FkKClcblx0XHRcdFx0c2V0VVJMKHZhbHVlKVxuXHRcdFx0fVxuXHRcdFx0cGFzdC5wdXNoKHt1cmw6IHVybCwgaXNOZXc6IGlzTmV3fSlcblx0XHRcdGZ1dHVyZSA9IFtdXG5cdFx0fSxcblx0fVxuXHQkd2luZG93Lmhpc3RvcnkgPSB7XG5cdFx0cHVzaFN0YXRlOiBmdW5jdGlvbihzdGF0ZSwgdGl0bGUsIHVybCkge1xuXHRcdFx0cGFzdC5wdXNoKHt1cmw6IGdldFVSTCgpLCBpc05ldzogZmFsc2UsIHN0YXRlOiBzdGF0ZSwgdGl0bGU6IHRpdGxlfSlcblx0XHRcdGZ1dHVyZSA9IFtdXG5cdFx0XHRzZXRVUkwodXJsKVxuXHRcdH0sXG5cdFx0cmVwbGFjZVN0YXRlOiBmdW5jdGlvbihzdGF0ZSwgdGl0bGUsIHVybCkge1xuXHRcdFx0dmFyIGVudHJ5ID0gcGFzdFtwYXN0Lmxlbmd0aCAtIDFdXG5cdFx0XHRlbnRyeS5zdGF0ZSA9IHN0YXRlXG5cdFx0XHRlbnRyeS50aXRsZSA9IHRpdGxlXG5cdFx0XHRzZXRVUkwodXJsKVxuXHRcdH0sXG5cdFx0YmFjazogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAocGFzdC5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHZhciBlbnRyeSA9IHBhc3QucG9wKClcblx0XHRcdFx0aWYgKGVudHJ5LmlzTmV3KSB1bmxvYWQoKVxuXHRcdFx0XHRmdXR1cmUucHVzaCh7dXJsOiBnZXRVUkwoKSwgaXNOZXc6IGZhbHNlLCBzdGF0ZTogZW50cnkuc3RhdGUsIHRpdGxlOiBlbnRyeS50aXRsZX0pXG5cdFx0XHRcdHNldFVSTChlbnRyeS51cmwpXG5cdFx0XHRcdGlmICghZW50cnkuaXNOZXcpIHBvcHN0YXRlKClcblx0XHRcdH1cblx0XHR9LFxuXHRcdGZvcndhcmQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGVudHJ5ID0gZnV0dXJlLnBvcCgpXG5cdFx0XHRpZiAoZW50cnkgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoZW50cnkuaXNOZXcpIHVubG9hZCgpXG5cdFx0XHRcdHBhc3QucHVzaCh7dXJsOiBnZXRVUkwoKSwgaXNOZXc6IGZhbHNlLCBzdGF0ZTogZW50cnkuc3RhdGUsIHRpdGxlOiBlbnRyeS50aXRsZX0pXG5cdFx0XHRcdHNldFVSTChlbnRyeS51cmwpXG5cdFx0XHRcdGlmICghZW50cnkuaXNOZXcpIHBvcHN0YXRlKClcblx0XHRcdH1cblx0XHR9LFxuXHRcdGdldCBzdGF0ZSgpIHtcblx0XHRcdHJldHVybiBwYXN0Lmxlbmd0aCA9PT0gMCA/IG51bGwgOiBwYXN0W3Bhc3QubGVuZ3RoIC0gMV0uc3RhdGVcblx0XHR9LFxuXHR9XG5cdCR3aW5kb3cub25wb3BzdGF0ZSA9IG51bGwsXG5cdCR3aW5kb3cub25oYXNoY2hhbmdlID0gbnVsbCxcblx0JHdpbmRvdy5vbnVubG9hZCA9IG51bGxcblxuXHRyZXR1cm4gJHdpbmRvd1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3N0aDFwYWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvbm9kZS5qcy90czYvfi9taXRocmlsL3Rlc3QtdXRpbHMvcHVzaFN0YXRlTW9jay5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGNhbGxBc3luYyA9IHJlcXVpcmUoXCIuLi90ZXN0LXV0aWxzL2NhbGxBc3luY1wiKVxudmFyIHBhcnNlVVJMID0gcmVxdWlyZShcIi4uL3Rlc3QtdXRpbHMvcGFyc2VVUkxcIilcbnZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4uL3F1ZXJ5c3RyaW5nL3BhcnNlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciByb3V0ZXMgPSB7fVxuXHQvLyB2YXIgY2FsbGJhY2sgPSBcImNhbGxiYWNrXCJcblx0dmFyIHNlcnZlckVycm9ySGFuZGxlciA9IGZ1bmN0aW9uKHVybCkge1xuXHRcdHJldHVybiB7c3RhdHVzOiA1MDAsIHJlc3BvbnNlVGV4dDogXCJzZXJ2ZXIgZXJyb3IsIG1vc3QgbGlrZWx5IHRoZSBVUkwgd2FzIG5vdCBkZWZpbmVkIFwiICsgdXJsfVxuXHR9XG5cblx0dmFyICR3aW5kb3cgPSB7XG5cdFx0WE1MSHR0cFJlcXVlc3Q6IGZ1bmN0aW9uIFhNTEh0dHBSZXF1ZXN0KCkge1xuXHRcdFx0dmFyIGFyZ3MgPSB7fVxuXHRcdFx0dmFyIGhlYWRlcnMgPSB7fVxuXHRcdFx0dmFyIGFib3J0ZWQgPSBmYWxzZVxuXHRcdFx0dGhpcy5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyLCB2YWx1ZSkge1xuXHRcdFx0XHRoZWFkZXJzW2hlYWRlcl0gPSB2YWx1ZVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5nZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyKSB7XG5cdFx0XHRcdHJldHVybiBoZWFkZXJzW2hlYWRlcl1cblx0XHRcdH1cblx0XHRcdHRoaXMub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsLCBhc3luYywgdXNlciwgcGFzc3dvcmQpIHtcblx0XHRcdFx0dmFyIHVybERhdGEgPSBwYXJzZVVSTCh1cmwsIHtwcm90b2NvbDogXCJodHRwOlwiLCBob3N0bmFtZTogXCJsb2NhbGhvc3RcIiwgcG9ydDogXCJcIiwgcGF0aG5hbWU6IFwiL1wifSlcblx0XHRcdFx0YXJncy5tZXRob2QgPSBtZXRob2Rcblx0XHRcdFx0YXJncy5wYXRobmFtZSA9IHVybERhdGEucGF0aG5hbWVcblx0XHRcdFx0YXJncy5zZWFyY2ggPSB1cmxEYXRhLnNlYXJjaFxuXHRcdFx0XHRhcmdzLmFzeW5jID0gYXN5bmMgIT0gbnVsbCA/IGFzeW5jIDogdHJ1ZVxuXHRcdFx0XHRhcmdzLnVzZXIgPSB1c2VyXG5cdFx0XHRcdGFyZ3MucGFzc3dvcmQgPSBwYXNzd29yZFxuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZW5kID0gZnVuY3Rpb24oYm9keSkge1xuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXNcblx0XHRcdFx0aWYoIWFib3J0ZWQpIHtcblx0XHRcdFx0XHR2YXIgaGFuZGxlciA9IHJvdXRlc1thcmdzLm1ldGhvZCArIFwiIFwiICsgYXJncy5wYXRobmFtZV0gfHwgc2VydmVyRXJyb3JIYW5kbGVyLmJpbmQobnVsbCwgYXJncy5wYXRobmFtZSlcblx0XHRcdFx0XHR2YXIgZGF0YSA9IGhhbmRsZXIoe3VybDogYXJncy5wYXRobmFtZSwgcXVlcnk6IGFyZ3Muc2VhcmNoIHx8IHt9LCBib2R5OiBib2R5IHx8IG51bGx9KVxuXHRcdFx0XHRcdHNlbGYuc3RhdHVzID0gZGF0YS5zdGF0dXNcblx0XHRcdFx0XHRzZWxmLnJlc3BvbnNlVGV4dCA9IGRhdGEucmVzcG9uc2VUZXh0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2VsZi5zdGF0dXMgPSAwXG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5yZWFkeVN0YXRlID0gNFxuXHRcdFx0XHRpZiAoYXJncy5hc3luYyA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNhbGxBc3luYyhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygc2VsZi5vbnJlYWR5c3RhdGVjaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikgc2VsZi5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0YWJvcnRlZCA9IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRvY3VtZW50OiB7XG5cdFx0XHRjcmVhdGVFbGVtZW50OiBmdW5jdGlvbih0YWcpIHtcblx0XHRcdFx0cmV0dXJuIHtub2RlTmFtZTogdGFnLnRvVXBwZXJDYXNlKCksIHBhcmVudE5vZGU6IG51bGx9XG5cdFx0XHR9LFxuXHRcdFx0ZG9jdW1lbnRFbGVtZW50OiB7XG5cdFx0XHRcdGFwcGVuZENoaWxkOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXJlbnROb2RlID0gdGhpc1xuXHRcdFx0XHRcdGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSBcIlNDUklQVFwiKSB7XG5cdFx0XHRcdFx0XHR2YXIgdXJsRGF0YSA9IHBhcnNlVVJMKGVsZW1lbnQuc3JjLCB7cHJvdG9jb2w6IFwiaHR0cDpcIiwgaG9zdG5hbWU6IFwibG9jYWxob3N0XCIsIHBvcnQ6IFwiXCIsIHBhdGhuYW1lOiBcIi9cIn0pXG5cdFx0XHRcdFx0XHR2YXIgaGFuZGxlciA9IHJvdXRlc1tcIkdFVCBcIiArIHVybERhdGEucGF0aG5hbWVdIHx8IHNlcnZlckVycm9ySGFuZGxlci5iaW5kKG51bGwsIGVsZW1lbnQuc3JjKVxuXHRcdFx0XHRcdFx0dmFyIGRhdGEgPSBoYW5kbGVyKHt1cmw6IHVybERhdGEucGF0aG5hbWUsIHF1ZXJ5OiB1cmxEYXRhLnNlYXJjaCwgYm9keTogbnVsbH0pXG5cdFx0XHRcdFx0XHRwYXJzZVF1ZXJ5U3RyaW5nKHVybERhdGEuc2VhcmNoKVxuXHRcdFx0XHRcdFx0Y2FsbEFzeW5jKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRcdG5ldyBGdW5jdGlvbihcIiR3aW5kb3dcIiwgXCJ3aXRoICgkd2luZG93KSByZXR1cm4gXCIgKyBkYXRhLnJlc3BvbnNlVGV4dCkuY2FsbCgkd2luZG93LCAkd2luZG93KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50Lm9uZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQub25lcnJvcih7dHlwZTogXCJlcnJvclwifSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlbW92ZUNoaWxkOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXJlbnROb2RlID0gbnVsbFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdCRkZWZpbmVSb3V0ZXM6IGZ1bmN0aW9uKHJ1bGVzKSB7XG5cdFx0XHRyb3V0ZXMgPSBydWxlc1xuXHRcdH0sXG5cdFx0JGRlZmluZUpTT05QQ2FsbGJhY2tLZXk6IGZ1bmN0aW9uKC8qIGtleSAqLykge1xuXHRcdFx0Ly8gY2FsbGJhY2sgPSBrZXlcblx0XHR9LFxuXHR9XG5cdHJldHVybiAkd2luZG93XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L21pdGhyaWwvdGVzdC11dGlscy94aHJNb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc3RoMXBhbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9ub2RlLmpzL3RzNi9+L3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=