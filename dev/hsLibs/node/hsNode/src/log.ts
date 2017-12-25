/**
 * @ngdoc object
 * @name hsNode.log
 * @description Logging convenience functions.
 * ## Usage
 * <pre>
 * import log from './log';
 * log.info('by the way:'); // -> 20160817 09:59:08.032 info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 error *** oh dear!
 * </pre>
 * 
 * ### Using the format template:
 * <pre>
 * log.format('%MMM %DD %hh%mm%ss');
 * log.info('by the way:');  // -> Aug 17 095908 info by the way:
 * log.error('oh dear!');    // -> Aug 17 095908 error *** oh dear!
 * </pre>
 * 
 * ### With module prefix:
 * <pre>
 * import log from './log';
 * log.prefix('Main');
 * log.format('%hh%mm%ss');
 * log.info('by the way:');  // -> 09:59:08.032 Main info by the way:
 * log.error('oh dear!');    // -> 09:59:08.045 Main error *** oh dear!
 * </pre>
 * 
 * ### Using a log file
 * <pre>
 * log.format('%MM%DD');
 * log.info('by the way:'); // -> 0817 info by the way:
 * log.logFile('l%YY%MM');  // -> 0817 info now logging to file l1608.txt
 * log.error('oh dear!');   // -> 0817 error *** oh dear!
 * </pre>
 * 
 * ## Reporting Levels:
 * - [DEBUG](#debug)
 * - [INFO](#info)
 * - [WARN](#warn)
 * - [ERROR](#error)
 * 
 * ## Reporting methods
 * - {@link hsNode.log#methods_debug debug()}
 * - {@link hsNode.log#methods_info info()}
 * - {@link hsNode.log#methods_warn warn()}
 * - {@link hsNode.log#methods_error error()}
 * 
 * ## Configurations:
 * - {@link hsNode.log#methods_level level()}
 * - {@link hsNode.log#methods_format format()}
 * - {@link hsNode.log#methods_prefix prefix()}
 * - {@link hsNode.log#methods_logFile logFile()}
 */

/** importing nodejs file system function; needed to create logfiles */
import { date, hsNode, fsUtil } from "./";

/**
 * @ngdoc property
 * @propertyOf hsNode.log 
 * @name DEBUG
 * @description Debug reporting level with importance 0
 */
const DEBUG         = Symbol('DEBUG');
/**
 * @ngdoc property
 * @name INFO
 * @propertyOf hsNode.log 
 * @description Info reporting level with importance 1
 */
const INFO          = Symbol('INFO');
/**
 * @ngdoc property
 * @name WARN
 * @propertyOf hsNode.log 
 * @description Info reporting level with importance 2
 */
const WARN          = Symbol('WARN');
/**
 * @ngdoc property
 * @propertyOf hsNode.log 
 * @name ERROR
 * @description Warning reporting level with importance 3
 */
const ERROR         = Symbol('ERROR');

/**
 * Type definition for level descriptors
 */
interface LevelDesc { importance:number; sym:symbol; desc:string; };

/** map of valid reporting levels */
const gLevels = {
    [DEBUG]:    {importance: 0, sym: DEBUG, desc: 'DEBUG'},
    [INFO]:     {importance: 1, sym: INFO,  desc: 'INFO'},
    [WARN]:     {importance: 2, sym: WARN,  desc: 'WARN'},
    [ERROR]:    {importance: 3, sym: ERROR, desc: 'ERROR'}
};

/** current reporting level, same across all modules */
var gLevel:LevelDesc = (gLevel===undefined)? gLevels[INFO] : gLevel; 
console.log('set log level to ' + gLevel.sym.toString());

/** current date format string. See [date module]('_date_.html') */
let gDateFormat   = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';

/** name of the current log file, or undefined */
let gLogFile: string;	// initially disabled


function log() {
	let gPrefix = '';
    let gColors = true;

	/**
	 * @ngdoc object
	 * @name level
	 * @methodOf hsNode.log 
	 * @param {String=} newLevel the new reporting level to set. 
	 * If omitted, the method returns the currently set reporting level. 
	 * @description sets the reporting level according to `newLevel`. 
	 * Valid values are {@link hsNode.log.DEBUG DEBUG}, {@link hsNode.log.INFO INFO}, {@link hsNode.log.WARN WARN}, or {@link hsNode.log.ERROR ERROR}.
	 * Subsequent reporting calls
	 * will be filtered such that only calls with an importance at least the same as 
	 * `newLevel` will be written to the log.
	 * @return {Symbol} the new reporting level (DEBUG, INFO, ERROR)
	 */
	function level(newLevel?:symbol):symbol {
	    if (newLevel) { 
	        if (gLevels[newLevel]) { 
	        	let oldLevel = gLevel;
	            gLevel = gLevels[newLevel];
	            let msg = 'new log level \'' + gLevel.desc.toUpperCase() + '\' (was ' + oldLevel.desc.toUpperCase() + ')';
	            out((gLevel.sym === oldLevel.sym)?DEBUG : INFO, msg);
	        }
	        else { out(ERROR, "unkown level " + newLevel.toString() + '; log level remains ' + gLevel.sym.toString()); }
	    }
	    return gLevel.sym;
	}

	/**
	 * @ngdoc object
	 * @name debug
	 * @methodOf hsNode.log 
	 * @param {string} msg the message to report.
	 * @description reports an debug message to the log. 
	 * The message will actually be reported to the log only if the current 
	 * reporting level is DEBUG or lower.
	 */
	function debug(msg:string) { out(DEBUG, msg); }

	/**
	 * @ngdoc object
	 * @name info
	 * @methodOf hsNode.log 
	 * @param {string} msg the message to report.
	 * @description reports an informational message to the log. 
	 * The message will actually be reported to the log only if the current 
	 * reporting level is INFO or lower.
	 */
	function info(msg:string)  { out(INFO, msg); }

	/**
	 * @ngdoc object
	 * @name warn
	 * @methodOf hsNode.log 
	 * @param {string} msg the message to report.
	 * @description reports an warning message to the log. 
	 * The message will actually be reported to the log only if the current 
	 * reporting level is WARN or lower.
	 */
	function warn(msg:string) { out(WARN, msg); }

	/**
	 * @ngdoc object
	 * @name error
	 * @methodOf hsNode.log 
	 * @param {string} msg the message to report.
	 * @description reports an error message to the log. 
	 * The message will always be reported to the log.
	 */
	function error(msg:string) { out(ERROR, msg); }

	/**
	 * @ngdoc function
	 * @name dateFormat
	 * @methodOf hsNode.log 
	 * @param {String=} fmtStr the format string to use. 
	 * @return {String} the currently set format string
	 * @description sets the format string to use for logging. If no parameter is specified,
	 * the function returns the currently set format string. The preset is '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
     * For supported formats see {@link date date}.
	 */
	function dateFormat(fmtStr?:string):string { 
	    if (fmtStr) { gDateFormat = fmtStr; }
	    return gDateFormat;
	}

	/**
	 * @ngdoc function
	 * @name prefix
	 * @methodOf hsNode.log 
	 * @param {String=} prf the prefix to prepend. 
	 * @description defines a prefix to be printed for each call to a log function. 
	 * The return object contains all functions defined for export. 
	 */
	function prefix(prf=''):void {
        gPrefix = prf? prf + ' ' : '';
	}

	/**
	 * @ngdoc function
	 * @name logFile
	 * @methodOf hsNode.log 
	 * @param {String} [fileNameTemplate='log-%YYYY-%MM-%DD.txt'] a template to use for log file names. 
	 * To disable logging, use file=''.
	 * @description sets a new logfile name template. Logfiles are created using this template 
	 * at the time of each log entry call. If the file exists, the log entry will be appended.
	 * @return {Promise} promise to return the current logfile name template
	 */
	function logFile(file='log-%YYYY-%MM-%DD.txt'):Promise<string> {
        return Promise.resolve(file)
            .then(file => {
                if (file !== gLogFile) {
                    gLogFile = (file==='')? undefined : file;
                }
                if (!gLogFile) { info("disabling logfile"); return gLogFile; }
                if (gLogFile.indexOf('/')>=0) { 
                    const dir = gLogFile.substring(0, gLogFile.lastIndexOf('/'));
                    return fsUtil.pathExists(dir).then(exists => {
                        if (!exists) { 
                            gLogFile = undefined; 
                            warn(`path ${dir} doesn't exists; logfile disabled`); 
                        }
                        else { info(gLogFile? "now logging to file " + date(gLogFile) : "disabling logfile"); }
                        return gLogFile;
                    });
                }
                info("now logging to file " + date(gLogFile));
                return gLogFile;
            });
	}
	
	function out(sym:symbol, msg:any) {	
        const color = { ERROR: '\x1b[31m\x1b[1m', WARN: '\x1b[33m', DEBUG: '\x1b[36m', INFO: '\x1b[32m' };
		let desc = gLevels[sym];
	    if (desc.importance >= gLevel.importance) {
	        const dateStr = date(gDateFormat);
	        let line = (typeof msg === 'string')? msg : hsNode.inspect(msg, null, gColors);
	        line = gColors? ((color[sym]||"") + dateStr + ' ' + gPrefix + desc.desc + '\x1b[0m ' + line) :
                            (dateStr + ' ' + gPrefix + desc.desc + ' ' + line);
	        console.log(line);
	        if (msg.stack) { console.log(msg.stack); }
	        if (gLogFile) {
	        	const filename = date(gLogFile);
	        	fsUtil.appendFile(filename, line+'\n').catch(e => { 
                    console.log(`error appending to file ${gLogFile}: ${e}`); 
                    throw new Error(e); });
	        }
	    }
	}

    function defaultConfig(cfg:{colors?:boolean, logFile?:string, dateFormat?:string, level?:symbol }) {
        let colors = true;
        if (cfg.colors!==undefined)     { gColors = colors = cfg.colors; }     // true / false
        if (cfg.logFile!==undefined)    { logFile(cfg.logFile||undefined); }   // {logFile:null} => logFile(undefined)
        if (cfg.dateFormat!==undefined) { dateFormat(cfg.dateFormat); }        // e.g. '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
        if (cfg.level!==undefined)      { level(cfg.level); }                  // e.g. INFO
     }

	return {
		DEBUG:	    DEBUG,
		INFO:	    INFO,
		WARN:	    WARN,
		ERROR:	    ERROR,
		level:	    level,
		debug:	    debug,
		info: 	    info,
		warn:	    warn,
		error:	    error,
		dateFormat: dateFormat,
		prefix:	    prefix,
		logFile:    logFile,
        config:     defaultConfig
	};
}
    
export default log();


