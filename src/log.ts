/**
 * Logging convenience functions.
 * ## Usage
 * 
 * ### Using the global `Log` instance 
 * Settings in `Log.log` are shared across modules
 * ```
 * import { Log } from 'hsutil'; const log = Log.log;
 * log.level(Log.INFO);     // sets the reporting level on the global instance 
 * log.info('by the way:'); // -> 20160817 09:59:08.032 info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 error *** oh dear!
 * ```
 * 
 * ### Using a local `Log` instance 
 * Create a new `Log` instance to keep changes local to the current module:
 * ```
 * import { Log } from 'hsutil'; const log = new Log('myModule')
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
 * - &nbsp; {@link log.Log.DEBUG Log.DEBUG}
 * - &nbsp; {@link log.Log.INFO  Log.INFO}
 * - &nbsp; {@link log.Log.WARN  Log.WARN}
 * - &nbsp; {@link log.Log.ERROR Log.ERROR}
 * 
 * ## Reporting methods
 * - &nbsp; {@link log.Log.debug log.debug()}
 * - &nbsp; {@link log.Log.info  log.info()}
 * - &nbsp; {@link log.Log.warn  log.warn()}
 * - &nbsp; {@link log.Log.error log.error()}
 * 
 * ## Configurations:
 * - &nbsp; {@link log.Log.level   log.level()}
 * - &nbsp; {@link log.Log.format  log.format()}
 * - &nbsp; {@link log.Log.prefix  log.prefix()}
 * 
 * ## Inspection support:
 * - &nbsp; {@link log.Log.inspect log.inspect()}
 */

/** importing nodejs file system function; needed to create logfiles */
import { date } from './Date';


// export interface LogFnResult { (_prefix:string): LogFn; }

// export interface LogFn {
//     (_prefix:string): LogFn;
//     DEBUG: string;
//     INFO:  string;
//     WARN:  string;
//     ERROR: string;
//     level:  (newLevelSym?:string, setGlobalLevel?:boolean)=>string;
//     debug:  (msg:any, log2File?:boolean) => Promise<string>;
//     info:   (msg:any, log2File?:boolean) => Promise<string>;
//     warn:   (msg:any, log2File?:boolean) => Promise<string>;
//     error:  (msg:any, log2File?:boolean) => Promise<string>;
//     format: (fmtStr?:string) => string;
//     prefix: (prf?:string) => string;
//     out:    (lvl:string, msg:any) => Promise<string>;
//     config: (cfg:{colors?:boolean, format?:string, level?:string}) => void;
//     inspect:(msg:any, depth?:number, indent?:string) => string;
// }


/**
 * Type definition for level descriptors
 */
export interface LevelDesc { importance:number; sym:string; desc:string; }


export class Log {
    /** current date format string. See [date module]('_date_.html') */
    protected static defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
    protected static dateFormat    = Log.defDateFormat;

    /** Debug reporting level with importance 0 */
    public static DEBUG = 'DEBUG';

    /** Info reporting level with importance 1 */
    public static INFO   = 'INFO';

    /** Info reporting level with importance 2 */
    public static WARN   = 'WARN';

    /** Warning reporting level with importance 3 */
    public static ERROR  = 'ERROR';
    
    /** map of valid reporting levels */
    protected static levels = {
        [Log.DEBUG]:    {importance: 0, sym: Log.DEBUG, desc: 'DEBUG'},
        [Log.INFO]:     {importance: 1, sym: Log.INFO,  desc: 'INFO'},
        [Log.WARN]:     {importance: 2, sym: Log.WARN,  desc: 'WARN'},
        [Log.ERROR]:    {importance: 3, sym: Log.ERROR, desc: 'ERROR'}
    };

    /** the global `log` object. */
    public static log = new Log('');

    /** current reporting level, same across all modules */
    protected static globalLevel:LevelDesc = Log.levels[Log.INFO]; 


    protected reportLevel     = <LevelDesc>undefined;
    protected reportPrefix    = '';

    constructor(prefix:string) { this.reportPrefix = prefix; }

    

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
    level(newLevelSym?:string, setGlobalLevel?:boolean):string {
        let newLevel = Log.levels[newLevelSym] || Log.globalLevel;    // new level is newLevelSym unless undefined
        let oldLevel = this.reportLevel || Log.globalLevel;        // old level is level unless undefined
        if (newLevelSym === undefined) {                        // do nothing, return current level
            newLevel = oldLevel;
        } else if (newLevelSym === null) {
            this.reportLevel = undefined;                       // deactivate local level
        } else if (Log.levels[newLevelSym]) { 
            if (setGlobalLevel) { Log.globalLevel = newLevel; }    // set new global level
                           else { this.reportLevel = newLevel; }// set new local level
            const msg = `new ${setGlobalLevel? 'global' : this.reportPrefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            this.out((newLevel.sym === oldLevel.sym)?Log.DEBUG : Log.INFO, msg);
        } else { 
            this.out(Log.ERROR, `unkown level ${newLevelSym}; log level remains ${oldLevel.sym}`);
        }
        return newLevel.sym;
    }

    /**
     * reports an debug message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is DEBUG or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    async debug(msg:any, log2File=true):Promise<string> { return await this.out(Log.DEBUG, msg); }

    /**
     * reports an informational message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is INFO or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    async info(msg:any, log2File=true):Promise<string> { return await this.out(Log.INFO, msg); }

    /**
     * reports an warning message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is WARN or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    async warn(msg:any, log2File=true):Promise<string> { return await this.out(Log.WARN, msg); }

    /**
     * reports an error message to the log. 
     * The message will always be reported to the log.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    async error(msg:any, log2File=true):Promise<string> { 
        if (msg.message) { // special treatment for Errors
            await this.out(Log.ERROR, msg.message);
            await this.out(Log.ERROR, msg.stack);
            return msg.message;
        } else {
            return await this.out(Log.ERROR, msg); 
        } 
    }

    /**
     * reports an error message to the log. 
     * The message will be reported to the log if `lvl` meets or exceeds the current reporting level.
     * @param lvl the reporting level of `msg`
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the message written
     */
    async out(lvl:string, msg:any): Promise<string> {	
        let desc:LevelDesc = Log.levels[lvl];
        const filterLevel = this.reportLevel || Log.globalLevel;
        if (desc.importance >= filterLevel.importance) {
            const dateStr = date(Log.dateFormat);
            let line = (typeof msg === 'string')? msg : this.inspect(msg, 0);
            const logLine = this.makeMessage(line, lvl, dateStr, desc.desc);
            console.log(logLine);
            if (msg && msg.stack) { console.log(msg.stack); }
            return Promise.resolve(line);
        }
        return undefined;
    }

    /** 
     * Creates the core format of the reported message. This method is 
     * called within `out` to allow for format extensions of the message printed, 
     * e.g. by color codes.
     */
    protected makeMessage(line:string, lvl:string, dateStr:string, desc:string):string {
        return `${dateStr} ${this.reportPrefix} ${desc} ${line}`;
    }

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
    format(fmtStr?:string):string { 
        if (fmtStr === null) { Log.dateFormat = Log.defDateFormat; }
        else if (fmtStr)     { Log.dateFormat = fmtStr; }
        return Log.dateFormat;
    }

    /**
     * defines a prefix to be printed for each call to a log function. 
     * @param prf the prefix to prepend. Defaults to '';
     * @return the new prefix
     */
    prefix(prf?:string):string {
        if (prf) { this.reportPrefix = prf; }
        return this.reportPrefix;
    }

    /**
     * configures the log facility.
     * - cfg.colors: boolean, determines if output is colored
     * - cfg.logfile: sets the naming template for the logfile. Set logFile=null to disable.
     * - cfg.format: sets the format for the timestamp for each log entry
     * - cfg.level: sets the reporting level (same as calling log.level())
     * @param cfg 
     */
    config(cfg:{colors?:boolean, format?:string, level?:string }) {
        if (cfg.format!==undefined) { this.format(cfg.format); }     // e.g. '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
        if (cfg.level!==undefined)  { this.level(cfg.level); }       // e.g. INFO
    }

    /**
     * returns a string representation of an object literal, similar to the Node `util.inspect` call.
     * 
     * Usage: `log.info(log.inspect(struct, 1))`
     * 
     * The call returns a raw formatted text string, or a HTM formatted string if `colors` is defined.
     * @param struct the object literal to inspect
     * @param depth depth of recursion, defaults to 1. Use `null` for infinite depth
     * @param indent the indent string to use, will accumulate for each level of indentation, defaults to ''
     */
    inspect(msg:any, depth=3, indent='   '):string {
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
                const [prefix, postfix] = log.getPrePostfix(indent, level, currIndent);
                return '{\n' + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${
                        _inspect(msg[k], depth-1, level+1, currIndent+indent)
                    }`).join(',\n') + `\n${currIndent}}`;
            } 
            return msg.toString();
        }
        const log = this;
        return _inspect(msg, depth===null? 999 : depth, 0, '');
    }

    protected getPrePostfix(indent:string, level:number, currIndent:string):[string,string] {
        return [`${currIndent}${indent}`, ''];
    }

    /** factory method to create instances of callable `Log` */
    // public static makeLogFn(prefix:string):LogFn { 
    //     const instance = new Log(prefix);
    //     const newLog = <LogFn>((prefix:string) => Log.makeLogFn(prefix));
    //     return instance.addPoperties(newLog);
    // }

    // protected addPoperties(logFn:LogFn):LogFn {
    //     logFn.DEBUG    = Log.DEBUG;
    //     logFn.INFO     = Log.INFO;
    //     logFn.WARN     = Log.WARN;
    //     logFn.ERROR    = Log.ERROR;
    //     logFn.level    = this.level.bind(this);
    //     logFn.debug    = this.debug.bind(this);
    //     logFn.info     = this.info.bind(this);
    //     logFn.warn     = this.warn.bind(this);
    //     logFn.error    = this.error.bind(this);
    //     logFn.format   = this.format.bind(this);
    //     logFn.prefix   = this.prefix.bind(this);
    //     logFn.out      = this.out.bind(this);
    //     logFn.config   = this.config.bind(this);
    //     logFn.inspect  = this.inspect.bind(this);
    //     return logFn;
    // }
}

