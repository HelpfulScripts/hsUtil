export declare class HsConfig {
    protected context: any[];
    constructor(context: any[]);
    attachNodeTree(config: any, root: any): void;
    private getContent(config);
    private load(file);
}
