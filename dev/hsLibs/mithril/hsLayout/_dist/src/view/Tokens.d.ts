export declare abstract class LayoutToken {
    private size;
    constructor(size: number);
    getSize(): number;
}
export declare abstract class DefinedToken extends LayoutToken {
    constructor(size: number);
}
export declare class FillToken extends LayoutToken {
    constructor();
}
export declare class PixelToken extends DefinedToken {
    constructor(size: number);
}
export declare class PercentToken extends DefinedToken {
    constructor(size: number);
}
export declare function px(px: number): PixelToken;
export declare function pc(pc: number): PercentToken;
export declare const FILL: FillToken;
