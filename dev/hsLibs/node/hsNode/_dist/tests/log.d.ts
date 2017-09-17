declare var _default: {
    DEBUG: symbol;
    INFO: symbol;
    WARN: symbol;
    ERROR: symbol;
    level: (newLevel?: symbol) => symbol;
    debug: (msg: string) => void;
    info: (msg: string) => void;
    warn: (msg: string) => void;
    error: (msg: string) => void;
    dateFormat: (fmtStr?: string) => string;
    prefix: (prf?: string) => void;
    logFile: (file?: string) => Promise<string>;
    config: (cfg: {
        colors?: boolean;
        logFile?: string;
        dateFormat?: string;
        level?: symbol;
    }) => void;
};
export default _default;
