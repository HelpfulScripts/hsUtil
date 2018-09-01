/**
 * Logging convenience functions.
 * ## Usage
 * 
 * ### Using the global log object 
 * Settings in `log` are shared across modules
 * <pre>
 * import { log } from 'hsnode'; 
 * log.info('by the way:'); // -> 20160817 09:59:08.032 info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 error *** oh dear!
 * </pre>
 * 
 * ### Using a local log object 
 * Settings in `log` remain local to the module 
 * <pre>
 * import { log as gLog } from 'hsnode'; const log = gLog('myModule')
 * log.info('by the way:'); // -> 20160817 09:59:08.032 myModule info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 myModule error *** oh dear!
 * </pre>
 * 
 * ### Using the `format` template:
 * <pre>
 * log.format('%MMM %DD %hh%mm%ss');
 * log.info('by the way:');  // -> Aug 17 095908 info by the way:
 * log.error('oh dear!');    // -> Aug 17 095908 error *** oh dear!
 * </pre>
 * 
 * ### Change the module prefix:
 * <pre>
 * log.prefix('Main');
 * log.format('%hh%mm%ss');
 * log.info('by the way:');  // -> 09:59:08.032 Main info by the way:
 * log.error('oh dear!');    // -> 09:59:08.045 Main error *** oh dear!
 * </pre>
 * 
 * ### Setting the Log level locally for the module
 * ```
 * log.level(log.WARN);
 * log.info('this will not be reported');
 * ``` 
 * 
 * ### Setting the Log level globally
 * Will be used if no local level is set
 * ```
 * log.level(log.WARN, true);               // set global log level
 * log.info('this will be reported');       // because local level defaults to INFORM
 * log.level(null);                         // unset the local level
 * log.info('this will not be reported');   // because no local level is defined and global level is set to WARN
 * ``` 
 * 
 * ### log.inspect utility
 * returns a string representing a deep inspection of `myObj`.
 * ```
 * log.info(log.inspect(myObj, null));      // prints the structure to inifinite depth
 * ``` 
 * 
 * ## Reporting Levels:
 * - &nbsp; {@link log.DEBUG log.DEBUG}
 * - &nbsp; {@link log.INFO  log.INFO}
 * - &nbsp; {@link log.WARN  log.WARN}
 * - &nbsp; {@link log.ERROR log.ERROR}
 * 
 * ## Reporting methods
 * - &nbsp; {@link log.LogType.debug log.debug()}
 * - &nbsp; {@link log.LogType.info  log.info()}
 * - &nbsp; {@link log.LogType.warn  log.warn()}
 * - &nbsp; {@link log.LogType.error log.error()}
 * 
 * ## Configurations:
 * - &nbsp; {@link log.LogType.level   log.level()}
 * - &nbsp; {@link log.LogType.format  log.format()}
 * - &nbsp; {@link log.LogType.prefix  log.prefix()}
 * - &nbsp; {@link log.LogType.logFile log.logFile()}
 */

/** importing nodejs file system function; needed to create logfiles */
import { date }     from './Date';

/** Debug reporting level with importance 0 */
const DEBUG = Symbol('DEBUG');

/** Info reporting level with importance 1 */
const INFO   = Symbol('INFO');

/** Info reporting level with importance 2 */
const WARN   = Symbol('WARN');

/** Warning reporting level with importance 3 */
const ERROR  = Symbol('ERROR');

/** name of the current log file, or undefined */
let gLogFile: string;	// initially disabled


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
let gGlobalLevel:LevelDesc = gLevels[INFO]; 

/** current date format string. See [date module]('_date_.html') */
const defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
let gDateFormat     = defDateFormat;

/** boolean determining if log will be printed in color */
let gColors = true;

/** shell color escape codes */
const color = {
    red:    '\x1b[31m',
    yellow: '\x1b[33m',
    blue:   '\x1b[36m',
    green:  '\x1b[32m',
    bold:   '\x1b[1m',
    clear:  '\x1b[0m'
};


export type LogType = {
    (_prefix:string, logToFile?:ltfType, pathExists?:peType): LogType;
    DEBUG:  symbol;
    INFO:   symbol;
    WARN:   symbol;
    ERROR:  symbol;

    /**
     * sets the reporting level according to `newLevel`. 
     * Valid values are {@link hsNode.log.DEBUG DEBUG}, {@link hsNode.log.INFO INFO}, 
     * {@link hsNode.log.WARN WARN}, {@link hsNode.log.ERROR ERROR}, or `null`.
     * Subsequent reporting calls will be filtered such that only calls with an importance 
     * at least the same as `newLevel` will be written to the log.
     * 
     * By default, `newLevel` sets the reporting level for the module only, and takes precedence over
     * any global level setting. Providing `null` as level value passes precedence back to the global setting.\
     * THis allows for simple per-module settings, for example in debugging scenarios.
     * @param newLevelSym the new reporting level to set. 
     * If omitted, the method returns the currently set reporting level. 
     * If set to `null`, the module's local reporting level defaults to the global reporting level; `setGlobalLevel` is ignored.
     * @param setGlobalLevel if true, sets the global reporting level for all modules. 
     * @return the new reporting level (DEBUG, INFO, ERROR)
     */
    level(newLevelSym?:symbol, setGlobalLevel?:boolean):symbol;

    /**
     * reports an debug message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is DEBUG or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    debug(msg:string, log?:boolean):Promise<string>;

    /**
     * reports an informational message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is INFO or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    info(msg:string, log?:boolean):Promise<string>;

    /**
     * reports an warning message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is WARN or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    warn(msg:string, log?:boolean):Promise<string>;

    /**
     * reports an error message to the log. 
     * The message will always be reported to the log.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    error(msg:string, log?:boolean):Promise<string>;

    /**
     * reports an error message to the log. 
     * The message will be reported to the log if `lvl` meets or exceeds the current reporting level.
     * @param lvl the reporting level of `msg`
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    out(lvl:symbol, msg:any, log?:boolean): Promise<string>;	

    /**
     * sets a new logfile name template. Logfiles are created using this template 
     * at the time of each log entry call. If the file exists, the log entry will be appended.
     * This is a global setting that affects reporting in all modules.
     * @param file a template to use for log file names. Options for calling:
     * - `logFile()`: return current logfile template without changing the template
     * - `logFile(null)`: disable log file
     * - `logFile('')`: set default log file template `log-%YYYY-%MM-%DD.txt`
     * - `logFile('log%D/%M/%Y.log')`: set new log file template
     * @return promise to return the current logfile, or `undefined` if loggimng is disabled.
     */
    logFile(file?:string):Promise<string>;

    /**
     * sets the format string to use for logging. If no parameter is specified,
     * the function returns the currently set format string. The preset is '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
     * For supported formats see {@link date date}.
     * @param fmtStr optional format string to use; 
     * - `format(null)` sets the format to `defDateFormat` 
     * - `format()` returns the current format without changing it.
     * @return the currently set format string
     */
    format(fmtStr?:string):string;

    /**
     * defines a prefix to be printed for each call to a log function. 
     * @param prf the prefix to prepend. Defaults to '';
     * @return the new prefix
     */
    prefix(prf?:string):string;

    /**
     * configures the log facility.
     * - cfg.colors: boolean, determines if output is colored
     * - cfg.logfile: sets the naming template for the logfile. Set logFile=null to disable.
     * - cfg.format: sets the format for the timestamp for each log entry
     * - cfg.level: sets the reporting level (same as calling log.level())
     * @param cfg 
     */
    config(cfg:{colors?:boolean, format?:string, level?:symbol }):void;

    /**
     * Simplifies node `util.examine` call.
     * Usage: `log.info(log.examine(struct, 1))`
     * @param msg the object literal to examine
     * @param depth depth of recursion, defaults to 1. Use `null` for infinite depth
     */
    inspect(msg:any, depth?:number):string;
};

type ltfType = (filename:string, msg:string)=>Promise<string>;
type peType  = (path:string)=>Promise<boolean>;

function utils_logToFile(filename:string, msg:string):Promise<string> { return Promise.resolve(undefined); }
function utils_pathExists(path:string):Promise<boolean> { return Promise.resolve(true); }


/** the global log object */
export const log:LogType = create('', utils_logToFile, utils_pathExists);


function create(_prefix:string, logToFile:ltfType, pathExists:peType):LogType {
    const context = {
        level:      <LevelDesc>undefined,
        prefix:     _prefix,
        logToFile:  <ltfType>logToFile,
        pathExists: <peType>pathExists
    };

    function level(newLevelSym?:symbol, setGlobalLevel=false):symbol {
        let newLevel = gLevels[newLevelSym] || gGlobalLevel;    // new level is newLevelSym unless undefined
        let oldLevel = context.level || gGlobalLevel;           // old level is level unless undefined
        if (newLevelSym === undefined) {                        // do nothing, return current level
            newLevel = oldLevel;
        } else if (newLevelSym === null) {
            context.level = undefined;                          // deactivate local level
        } else if (gLevels[newLevelSym]) { 
            if (setGlobalLevel) { gGlobalLevel = newLevel; }    // set new global level
                           else { context.level = newLevel; }     // set new local level
            const msg = `new ${setGlobalLevel? 'global' : context.prefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            out((newLevel.sym === oldLevel.sym)?DEBUG : INFO, msg);
        } else { 
            out(ERROR, `unkown level ${newLevelSym.toString()}; log level remains ${oldLevel.sym.toString()}`);
        }
        return newLevel.sym;
    }

    function debug(msg:string, log2File=true):Promise<string> { return out(DEBUG, msg, log2File); }
    function info(msg:any, log2File=true):Promise<string> { return out(INFO, msg, log2File); }
    function warn(msg:any, log2File=true):Promise<string> { return out(WARN, msg, log2File); }
    function error(msg:any, log2File=true):Promise<string> { return out(ERROR, msg, log2File); }

    function format(fmtStr?:string):string { 
        if (fmtStr === null) { gDateFormat = defDateFormat; }
        else if (fmtStr)     { gDateFormat = fmtStr; }
        return gDateFormat;
    }

    function prefix(prf?:string):string {
        if (prf) { context.prefix = prf; }
        return context.prefix;
    }

    function out(lvl:symbol, msg:any, log2File=true): Promise<string> {	
        const colors = { [ERROR]: color.red+color.bold, [WARN]: color.yellow+color.bold, [DEBUG]: color.blue, [INFO]: color.green };
        let desc = gLevels[lvl];
        const filterLevel = context.level || gGlobalLevel;
        if (desc.importance >= filterLevel.importance) {
            const dateStr = date(gDateFormat);
            let line = (typeof msg === 'string')? msg : inspect(msg, 0);
            const logLine = (dateStr + ' ' + context.prefix + desc.desc + ' ' + line);
            const colorLine = `${colors[lvl]||''} ${dateStr} ${context.prefix} ${desc.desc} ${color.clear} ${line}`;
            console.log(gColors? colorLine : logLine);
            if (msg && msg.stack) { console.log(msg.stack); }
            if (gLogFile && log2File) {
                return context.logToFile(date(gLogFile), logLine);
            }
        }
        return Promise.resolve(undefined);
    }

    function logFile(file?:string):Promise<string> {
        if (file === null) {                    // disable logging in file
            gLogFile = undefined; 
            return info("disabling logfile");
        } else if (file === undefined) {        // leave gLogFile unchanged, return promise for logfile name
            return Promise.resolve(date(gLogFile));
        } else if (file.indexOf('/')>=0) { 
            return context.pathExists(file)
                .then((exists:boolean) => { 
                    if (!exists) {
                        gLogFile = undefined;
                        return warn(`path '${file}' doesn't exists; logfile disabled`);
                    }
                    gLogFile = file;
                    return info("now logging to file " + date(file));
                })
                .catch(() => { 
                    gLogFile = undefined; 
                    return error(`checking path ${file}; logfile disabled`);
                });
        } else if (file === '') {
            file = 'log-%YYYY-%MM-%DD.txt';
        } else {
        }
        gLogFile=file;
        return info(gLogFile? `now logging to file ${date(gLogFile)}` : 'logfile disbaled');
    }

    function config(cfg:{colors?:boolean, format?:string, level?:symbol }) {
        let colors = true;
        if (cfg.colors!==undefined) { gColors = colors = cfg.colors; }  // true / false
        if (cfg.format!==undefined) { format(cfg.format); }             // e.g. '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
        if (cfg.level!==undefined)  { level(cfg.level); }               // e.g. INFO
    }

    function inspect(msg:any, depth=1, indent=''):string {
        if (depth===null) { depth = 999; }
        if (msg === null) { return 'null'; }
        if (typeof msg === 'function') { return 'function'; }
        if (typeof msg === 'string') { return `'${msg}'`; }
        if (typeof msg === 'object') {
            if (depth<0) { return (msg.length===undefined)? '{...}' : '[...]'; }
            if (msg.length !== undefined) { return `[${msg.map((e:any)=>(e===undefined)?'':inspect(e, depth-1, indent)).join(', ')}]`; }
            return '{\n' + Object.keys(msg).map(k => `   ${indent}${k}: ${
                inspect(msg[k], depth-1, indent+'   ')
            }`).join(',\n') + `\n${indent}}`;
        } 
        return msg.toString();
    }

    const newLog:any = function(prefix:string, logToFile=context.logToFile, pathExists=context.pathExists) { 
        return create(prefix, logToFile, pathExists);
    };
    newLog.DEBUG    = DEBUG;
    newLog.INFO     = INFO;
    newLog.WARN     = WARN;
    newLog.ERROR    = ERROR;
    newLog.level    = level;
    newLog.debug    = debug;
    newLog.info     = info;
    newLog.warn     = warn;
    newLog.error    = error;
    newLog.format   = format;
    newLog.prefix   = prefix;
    newLog.out      = out;
    newLog.logFile  = logFile;
    newLog.config   = config;
    newLog.inspect  = inspect;
    return newLog;
}

