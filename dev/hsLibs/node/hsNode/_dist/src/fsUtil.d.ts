export declare const fsUtil: {
    realPath: (thePath: string) => Promise<string>;
    pathExists: (thePath: string) => Promise<any>;
    isFile: (thePath: string) => Promise<any>;
    isDirectory: (thePath: string) => Promise<any>;
    isLink: (thePath: string) => Promise<any>;
    readDir: (thePath: string) => Promise<string>;
    readFile: (thePath: string, isText?: boolean) => Promise<any>;
    readTextFile: (thePath: string) => Promise<any>;
    readJsonFile: (thePath: string) => Promise<any>;
    writeFile: (thePath: string, content: string, isText?: boolean) => Promise<{}>;
    writeStream: (thePath: string, content: string) => Promise<{}>;
    writeTextFile: (thePath: string, content: string) => Promise<{}>;
    writeJsonFile: (thePath: string, obj: any) => Promise<any>;
    appendFile: (thePath: string, content: string, isText?: boolean) => Promise<{}>;
    remove: (thePath: string) => Promise<{}>;
};
