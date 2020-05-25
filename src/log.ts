/**
 * Logging convenience functions.
 * ## Usage
 * 
 * ### Using the global `Log` instance 
 * Settings in `Log.log` are shared across modules
 * ```
 * import { Log } from 'hsutil'; const log = Log.log;
 * log.level(Log.INFO);         // sets the reporting level on the global instance 
 * log.info('by the way:');     // -> 20160817 09:59:08.032 info by the way:
 * log.info(()=>'by the way:'); // -> 20160817 09:59:08.032 info by the way:
 * log.error('oh dear!');       // -> 20160817 09:59:08.045 error *** oh dear!
 * ```
 * 
 * ### Using a local `Log` instance 
 * Create a new `Log` instance to keep changes local to the current module:
 * ```
 * import { Log } from 'hsutil'; 
 * const log = new Log('myModule');
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
 * log.info(log.inspect(myObj));                    // prints the structure to first depth
 * log.info(log.inspect(myObj), {});                // prints the structure to inifinite depth
 * log.info(log.inspect(myObj), {colors:null});     // prints the structure without colors
 * log.info(myObj);                                 // equivalent to `log.info(log.inspect(myObj));`
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



const COLOR = {
    clear:      'color:#000; background-color:inherit; font-weight:normal;',

    bold:       'font-weight:bold;',
    dim:        '',
    underscore: '',
    blink:      '',
    reverse:    '',
    hidden:     '',

    black:      'color:#000;',
    red:        'color:#f00;',
    green:      'color:#0f0;',
    yellow:     'color:#ff0;',    
    blue:       'color:#00f;',
    magenta:    'color:#f0f;',
    cyan:       'color:#0ff;',
    white:      'color:#fff;',
    
    darkred:    'color:#800;',
    darkgreen:  'color:#080;',
    darkyellow: 'color:#880;',    
    darkblue:   'color:#008;',
    darkmagenta:'color:#808;',
    darkcyan:   'color:#088;',
    gray:       'color:#888;',
    
    bgBlack:    'background-color:#000;',
    bgRed:      'background-color:#f00;',
    bgGreen:    'background-color:#0f0;',
    bgYellow:   'background-color:#ff0;',
    bgBlue:     'background-color:#00f;',
    bgMagenta:  'background-color:#f0f;',
    bgCyan:     'background-color:#0ff;',
    bgWhite:    'background-color:#fff;'
};

/**
 * Type definition for level descriptors
 */
export interface LevelDesc { importance:number; sym:string; desc:string; }

interface Msg {
    color: string[];
    msg:   any;
}

/**
 * main logging class. See {@link log log overview} for usage.
 */
export class Log {
    protected static INDENT_COLORS = ['darkblue', 'darkgreen', 'darkred', 'darkcyan', 'darkyellow', 'darkmagenta'];
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

    protected reportLevel   = <LevelDesc>undefined;
    protected reportPrefix  = '';
    protected maxLength     = -1;
    protected colors        = true;

    constructor(prefix:string) { this.reportPrefix = prefix; }

    /** 
     * sets the maximum length of a message. 
     * If messages exceed this length, the middle of the message will be replaced by ellipses (...) such that the 
     * overall message does not exceed this length
     * Negative values avoid shortening.
     * */
    public set messageLength(max:number) { this.maxLength = max; }
    
    /** gets the current maximum length of a message */
    public get messageLength() { return this.maxLength; }
    

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
    public level(newLevelSym?:string, setGlobalLevel?:boolean):string {
        let newLevel = Log.levels[newLevelSym] || Log.globalLevel;  // new level is newLevelSym unless undefined
        let oldLevel = this.reportLevel || Log.globalLevel;         // old level is level unless undefined
        if (newLevelSym === undefined) {                            // do nothing, return current level
            newLevel = oldLevel;
        } else if (newLevelSym === null) {
            this.reportLevel = undefined;                           // deactivate local level
        } else if (Log.levels[newLevelSym]) { 
            if (setGlobalLevel) { Log.globalLevel = newLevel; }     // set new global level
                           else { this.reportLevel = newLevel; }    // set new local level
            const msg = `new ${setGlobalLevel? 'global' : this.reportPrefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            (newLevel.sym === oldLevel.sym)? this.debug(msg) : this.info(msg);
        } else { 
            this.error(`unkown level ${newLevelSym}; log level remains ${oldLevel.sym}`);
        }
        return newLevel.sym;
    }

    /**
     * reports an debug message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is DEBUG or lower.
     * @param msg the message to report. For msg types, refer to {@link Log.info `info()`}.
     * @return the message printed
     */
    public debug(msg:any):string { return this.out(Log.DEBUG, { color: ['gray'], msg:msg }); }

    /**
     * reports an debug message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is DEBUG or lower.
     * @param msg the message to report. For msg types, refer to {@link Log.info `info()`}.
     * @return the message printed
     */
    public transient(msg:any):string { return this.out(Log.INFO, { color: ['darkgreen'], msg:msg+'\r' }); }

    /**
     * reports an informational message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is INFO or lower.
     * @param msg the message to report. For msg types, refer to {@link Log.info `info()`}.
     * @return the message printed
     */
    public progress(msg:any):string { return this.out(Log.INFO, { color: ['darkblue'], msg:msg }); }

    /**
     * reports an informational message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is INFO or lower.
     * @param msg the message to report. The following types are supported:
     * - `string` - `'...'`: prints the string
     * - `function` - `() => '...'`: if the message level is above the threshold level, calls the function 
     *    to produce the string to be printed
     * - `object literal` - `{...}`:  prints a deep inspection of the object.
     * @return the message printed
     */
    public info(msg:any):string { return this.out(Log.INFO, { color: ['darkgreen'], msg:msg }); }

    /**
     * reports an warning message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is WARN or lower.
     * @param msg the message to report. For msg types, refer to {@link Log.info `info()`}.
     * @return the message printed
     */
    public warn(msg:any):string { return this.out(Log.WARN, { color: ['darkyellow', 'bold'], msg:msg }); }

    /**
     * reports an error message to the log. 
     * The message will always be reported to the log.
     * @param msg the message to report. For msg types, For msg types, refer to {@link Log.info `info()`}. 
     * In addition:
     * - `Error` - if msg is an Error (e.g. from a catch statement), prints the error message as well as a stack trace.
     * @return the message printed
     */
    public error(msg:any):string { 
        const color = ['darkred', 'bold'];
        if (msg.message) { // special treatment for Errors
            this.out(Log.ERROR, { color: color, msg:msg.message });
            this.out(Log.ERROR, { color: color, msg:msg.stack });
            return msg.message;
        } else {
            return this.out(Log.ERROR, { color: color, msg:msg }); 
        } 
    }

    /**
     * reports an error message to the log. 
     * The message will be reported to the log if `lvl` meets or exceeds the current reporting level.
     * @param lvl the reporting level of `msg`
     * @param msg the message to report. If `msg` is an object literal, a deep inspection will be printed. 
     * Else if `msg` is a function, it will be called to return the string to print or object to inspect. This 
     * avoids constructing a potentially expensive message string if the level is below the current reporting level.
     * Finally, if `msg` is a string, it will be printed with appropriate decoration, e.g. a date string and 
     * prefix.
     * @return the message printed
     */
    protected out(lvl:string, msg:Msg): string {	
        let desc:LevelDesc = Log.levels[lvl];
        const filterLevel = this.reportLevel || Log.globalLevel;
        if (desc.importance >= filterLevel.importance) {
            let line;
            switch(typeof msg.msg) {
                case 'function': line = msg.msg(); break;
                case 'string':   line = msg.msg; break;
                case 'object':
                default: line = this.inspect(msg.msg); 
            }
            const dateStr = date(Log.dateFormat);
            if (line.length > this.maxLength && this.maxLength>0) { 
                line = `${line.slice(0, this.maxLength/2-2)}...${line.slice(-this.maxLength/2+2)}`
            }
            if (msg && msg.msg.stack) { line = `${line}\n${msg.msg.stack}`; }
            const header = `${dateStr} ${this.reportPrefix} ${desc.desc}`;
            this.output(msg.color, header, line);
            return line;
        }
        return undefined;
    }

    /** 
     */
    protected output(color:string[], header:string, line:string) {
        console.log(`%c${header}%c ${line}`, color.map(c =>COLOR[c]).join(' '), COLOR['clear']);
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
    public format(fmtStr?:string):string { 
        if (fmtStr === null) { Log.dateFormat = Log.defDateFormat; }
        else if (fmtStr)     { Log.dateFormat = fmtStr; }
        return Log.dateFormat;
    }

    /**
     * defines a prefix to be printed for each call to a log function. 
     * @param prf the prefix to prepend. Defaults to '';
     * @return the new prefix
     */
    public prefix(prf?:string):string {
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
    public config(cfg:{colors?:boolean, format?:string, level?:string }) {
        if (cfg.format!==undefined) { this.format(cfg.format); }    // e.g. '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
        if (cfg.level!==undefined)  { this.level(cfg.level); }      // e.g. INFO
        if (cfg.colors!==undefined) { this.colors = cfg.colors; }   // true / false
    }

    /**
     * Usage: 
     * - `log.info(log.inspect(struct))`     -> `depth=0`, `indent='   '`, with html-coded colors
     * - `log.info(log.inspect(struct, {}))` -> `depth=-1` (inf), `indent='   '`, with html-coded colors
     * - `log.info(log.inspect(struct, {colors:null}))` -> no colors
     * <p>
     * The call returns a raw formatted text string, or a HTML formatted string if `colors` is defined.
     * @param struct the object literal to inspect
     * @param depth depth of recursion, defaults to 3. Use `null` or negative values for infinite depth
     * @param indent the indent string to use, will accumulate for each level of indentation, defaults to four spaces.
     * @param colors an array of `css` color values: if defined, the output will be `HTML` formatted, with indentation 
     * levels indicated by colors in ascending sequence from the array, restarting at index 0 if the array is shorter than the maximum indentation level.
     * `colors` defaults to the static `COLORS` array. To disable, provide a value of `null`.
     * @return a string representation of an object literal, similar to the Node `util.inspect` call
     */
    public inspect(msg:any, {depth=-1, indent='   ', colors=Log.INDENT_COLORS}={depth:0, indent:'   ', colors:Log.INDENT_COLORS}):string {
        function _inspect(msg:any, depth:number, level:number, currIndent:string):string {
            if (msg === null)               { return 'null'; }
            if (msg === undefined)          { return 'undefined'; }
            if (typeof msg === 'function')  { return 'function'; }
            if (typeof msg === 'string')    { return `'${msg}'`; }
            if (typeof msg === 'object')    {
                if (depth<0) { 
                    return (msg.length===undefined)? '{...}' : '[...]'; 
                }
                if (msg.map !== undefined) { // --> an array
                    return `[${msg.map((e:any)=>(e===undefined)?'':_inspect(e, depth-1, level+1, currIndent)).join(', ')}]`;
                }
                const [prefix, postfix, lf, postIndent] = log.getPrePostfix(indent, level, currIndent, colors);
                return `{${lf}` + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${
                    _inspect(msg[k], depth-1, level+1, currIndent+indent)
                }`).join(`,${lf}`) + `${lf}${postIndent}}`;
            } 
            return msg.toString();
        }
        const log = this;
        // if (colors) { indent = indent.replace(/ /g, '&nbsp;'); }
        return _inspect(msg, (depth!==undefined && depth!==null && depth>=0) ? depth : 999, 0, '');
    }

    protected getPrePostfix(indent:string, level:number, currIndent:string, colors:string[]):[string,string,string,string] {
        let cstart = '', cstop = '', lf = '\n';
        if (colors) {
            indent = indent.replace(/ /g, '&nbsp;');
            currIndent = currIndent.replace(/ /g, '&nbsp;');
            // try <color name> first, then assume '#...' code
            const color = COLOR[colors[level % colors.length]] || colors[level % colors.length];
            cstart  = `<b><span style='${color}'>`; 
            cstop   = `</span></b>`; 
            lf      = '<br>';
        }
        return [`${currIndent}${indent}${cstart}`, `${cstop}`, colors? '<br>' : '\n', currIndent];
    }
}

