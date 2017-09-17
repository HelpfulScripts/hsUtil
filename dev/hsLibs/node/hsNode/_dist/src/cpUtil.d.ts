declare function exec(command: string, options?: any): Promise<{
    out: string;
    err: string;
}>;
export { exec };
