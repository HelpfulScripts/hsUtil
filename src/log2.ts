/**
 * Logging convenience functions.
 * ## Usage
 * 
 * ### Using the global log object 
 * Settings in `log` are shared across modules
 * ```
 * import { log } from 'hsutil'; 
 * log.info('by the way:'); // -> 20160817 09:59:08.032 info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 error *** oh dear!
 * ```
 * 
 * ### Using a local log object 
 * Settings in `log` remain local to the module 
 * ```
 * import { log as gLog } from 'hsutil'; const log = gLog('myModule')
 * log.info('by the way:'); // -> 20160817 09:59:08.032 myModule info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 myModule error *** oh dear!
 * ```
 * 
 * ### Using the `format` template:
 * ```
 * log.format('%MMM %DD %hh%mm%ss');
 * log.info('by the way:');  // -> Aug 17 095908 info by the way:
 * log.error('oh dear!');    // -> Aug 17 095908 error *** oh dear!
 * ```
 * 
 * ### Change the module prefix:
 * ```
 * log.prefix('Main');
 * log.format('%hh%mm%ss');
 * log.info('by the way:');  // -> 09:59:08.032 Main info by the way:
 * log.error('oh dear!');    // -> 09:59:08.045 Main error *** oh dear!
 * ```
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
 * 
 * ## Inspection support:
 * - &nbsp; {@link log.LogType.inspect log.inspect()}
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
export interface LevelDesc { importance:number; sym:symbol; desc:string; }

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
let gColors = false;

/** shell color escape codes */
const color = {
    red:    '\x1b[31m',
    yellow: '\x1b[33m',
    blue:   '\x1b[36m',
    green:  '\x1b[32m',
    bold:   '\x1b[1m',
    clear:  '\x1b[0m'
};


export interface LogType {
    (_prefix:string, logToFile?:ltfType, pathExists?:peType): LogType;
    DEBUG:  symbol;
    INFO:   symbol;
    WARN:   symbol;
    ERROR:  symbol;

    /**
     * sets the reporting level according to `newLevel`. 
     * Valid values are {@link log.DEBUG log.DEBUG}, {@link log.INFO log.INFO}, 
     * {@link log.WARN log.WARN}, {@link log.ERROR log.ERROR}, or `null`.
     * Subsequent reporting calls will be filtered such that only calls with an importance 
     * at least the same as `newLevel` will be written to the log.<br>
     * 
     * By default, `newLevel` sets the reporting level for the module only, and takes precedence over
     * any global level setting. Providing `null` as level value passes precedence back to the global setting.
     * This allows for simple per-module settings, for example in debugging scenarios.
     * @param newLevelSym the new reporting level to set. 
     * If omitted, the method returns the currently set reporting level. 
     * If set to `null`, the module's local reporting level defaults to the global reporting level; `setGlobalLevel` is ignored.
     * @param setGlobalLevel defaults to `false`. If `true`, sets the global reporting level for all modules. 
     * @return the new reporting level (DEBUG, INFO, WARN, ERROR)
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
    debug(msg:any, log?:boolean):Promise<string>;

    /**
     * reports an informational message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is INFO or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    info(msg:any, log?:boolean):Promise<string>;

    /**
     * reports an warning message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is WARN or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    warn(msg:any, log?:boolean):Promise<string>;

    /**
     * reports an error message to the log. 
     * The message will always be reported to the log.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    error(msg:any, log?:boolean):Promise<string>;

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
     * Usage:
     * - `logFile()`: return the current logfile name
     * - `logFile(null)`: disable log file
     * - `logFile('')`: set default log file template `log-%YYYY-%MM-%DD.txt`
     * - `logFile('log%D/%M/%Y.log')`: set new log file template
     * @param file a template to use for log file names. Options for calling:
     * @return promise to return the current logfile, or `undefined` if loggimng is disabled.
     */
    logFile(file?:string):Promise<string>;

    /**
     * sets the format string to use for logging. If no parameter is specified,
     * the function returns the currently set format string. The preset is '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
     * For supported formats see {@link date date}.
     * Usage
     * - `format(null)` sets the format to `defDateFormat` 
     * - `format()` returns the current format without changing it.
     * @param fmtStr optional format string to use; 
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
     * returns a string representation of an object literal, similar to the Node `util.inspect` call.
     * 
     * Usage: `log.info(log.inspect(struct, 1))`
     * 
     * The call returns a raw formatted text string, or a HTM formatted string if `colors` is defined.
     * @param struct the object literal to inspect
     * @param depth depth of recursion, defaults to 1. Use `null` for infinite depth
     * @param indent the indent string to use, will accumulate for each level of indentation, defaults to ''
     * @param colors an array of css color values to apply to keywords in the inspected structure;
     * if present, `inspect` will generate HTML content instead of raw text, substituting any `space` characters
     * (' ') with `&nbsp;`. The color applied to each keyword cycles through the array with each increasing level, 
     * and restarts at index 0 when the level exceeds the length of the array.
     */
    inspect(struct:any, depth?:number, indent?:string, colors?:string[]):string;
}

type ltfType = (filename:string, msg:string)=>Promise<string>;
type peType  = (path:string)=>Promise<boolean>;

/** the global log object */
export const log:LogType = create('', 
    (filename:string, msg:string):Promise<string> => Promise.resolve(undefined), 
    /** default implementation for browser usage: don't allow '/' in log file name */
    (path:string):Promise<boolean> =>Promise.resolve(path.indexOf('/')>=0? false : true)
);

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

    async function debug(msg:any, log2File=true):Promise<string> { return await out(DEBUG, msg, log2File); }
    async function info(msg:any, log2File=true):Promise<string> { return await out(INFO, msg, log2File); }
    async function warn(msg:any, log2File=true):Promise<string> { return await out(WARN, msg, log2File); }
    async function error(msg:any, log2File=true):Promise<string> { return await out(ERROR, msg, log2File); }

    function format(fmtStr?:string):string { 
        if (fmtStr === null) { gDateFormat = defDateFormat; }
        else if (fmtStr)     { gDateFormat = fmtStr; }
        return gDateFormat;
    }

    function prefix(prf?:string):string {
        if (prf) { context.prefix = prf; }
        return context.prefix;
    }

    async function out(lvl:symbol, msg:any, log2File=true): Promise<string> {	
        const colors = { [ERROR]: color.red+color.bold, [WARN]: color.yellow+color.bold, [DEBUG]: color.blue, [INFO]: color.green };
        let desc = gLevels[lvl];
        const filterLevel = context.level || gGlobalLevel;
        if (desc.importance >= filterLevel.importance) {
            const dateStr = date(gDateFormat);
            let line = (typeof msg === 'string')? msg : inspect(msg, 0);
            const logLine   =                    `${dateStr} ${context.prefix} ${desc.desc} ${line}`;
            const colorLine = `${colors[lvl]||''} ${dateStr} ${context.prefix} ${desc.desc} ${color.clear} ${line}`;
            console.log(gColors? colorLine : logLine);
            if (msg && msg.stack) { console.log(msg.stack); }
            if (gLogFile && log2File) {
                return await context.logToFile(date(gLogFile), logLine);
            }
        }
        return undefined;
    }

    async function logFile(file?:string):Promise<string> {
        if (file === null) {                    // disable logging in file
            gLogFile = undefined; 
            return await info("disabling logfile");
        } else if (file === undefined) {        // leave gLogFile unchanged, return promise for logfile name
            return date(gLogFile);
        } else if (file.indexOf('/')>=0) { 
            return await context.pathExists(file)
                .then(async (exists:boolean) => { 
                    if (!exists) {
                        gLogFile = undefined;
                        return await warn(`path '${file}' doesn't exists; logfile disabled`);
                    }
                    gLogFile = file;
                    return await info("now logging to file " + date(file));
                })
                .catch(async () => { 
                    gLogFile = undefined; 
                    return await error(`checking path ${file}; logfile disabled`);
                });
        } else if (file === '') {
            file = 'log-%YYYY-%MM-%DD.txt';
        } else {
        }
        gLogFile=file;
        return await info(gLogFile? `now logging to file ${date(gLogFile)}` : 'logfile disbaled');
    }

    function config(cfg:{colors?:boolean, format?:string, level?:symbol }) {
        if (cfg.colors!==undefined) { gColors = cfg.colors; }   // true / false
        if (cfg.format!==undefined) { format(cfg.format); }     // e.g. '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
        if (cfg.level!==undefined)  { level(cfg.level); }       // e.g. INFO
    }

    function inspect(msg:any, depth=3, indent='   ', colors?:string[]):string {
        function _inspect(msg:any, depth:number, level:number, currIndent:string):string {
            if (msg === null)               { return 'null'; }
            if (msg === undefined)          { return 'undefined'; }
            if (typeof msg === 'function')  { return 'function'; }
            if (typeof msg === 'string')    { return `'${msg}'`; }
            if (typeof msg === 'object')    {
                if (depth<0) { return (msg.length===undefined)? '{...}' : '[...]'; }
                if (msg.map !== undefined) { 
                    return `[${msg.map((e:any)=>(e===undefined)?'':_inspect(e, depth-1, level+1, currIndent)).join(', ')}]`;
                 }
                const c  = colors? `<b><span style='color:${colors[level % colors.length]};'>` : '';
                const prefix = `${c}${currIndent}${indent}`;
                const postfix = colors? '</span></b>' : '';
                return '{\n' + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${
                        _inspect(msg[k], depth-1, level+1, currIndent+indent)
                    }`).join(',\n') + `\n${currIndent}}`;
            } 
            return msg.toString();
        }
        if (colors) { indent = indent.replace(/ /g, '&nbsp;'); }
        return _inspect(msg, depth===null? 999 : depth, 0, '');
    }

    const newLog:any = (prefix:string, logToFile:ltfType=context.logToFile, pathExists:peType=context.pathExists) => create(prefix, logToFile, pathExists);
  
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

