export declare function timeout(ms: number): Promise<void>;
export declare function delay(ms: number): <T>(args?: T) => Promise<T>;
export declare class Pace {
    private pace;
    private waitUntil;
    constructor(pace?: number);
    add(fn: (msSinceAdding: number) => any): Promise<any>;
}
