/**
 * ## Layout Tokens
 * Used to specify layout sizes
 */

/**
 * Abstract token for a layout area. It is defined by a single number available via the constructor. 
 */
export abstract class LayoutToken {
    constructor(private size: number) {}
    public getSize() { return this.size; }
}

/**
 * A layout token that is defined in size.
 */
export abstract class DefinedToken extends LayoutToken{
    constructor(size: number) { super(size); } 
}

/**
 * A layout token that is undefined in size, and that fill will     the available space.
 */
export class FillToken extends LayoutToken {
    constructor() { super(-1); }
}

/**
 * A defined token that sets a size in pixel.
 */
export class PixelToken extends DefinedToken {
    constructor(size:number) { super(size); }
}

/**
 * A defined token that sets a size in percent of available space.
 */
export class PercentToken extends DefinedToken {
    constructor(size:number) { super(size); }
}

/**
 * A convenience function that returns a defined pixel-sized token
 * @param px the number of pixels in the token
 */
export function px(px:number)   { return new PixelToken(px); }

/**
 * A convenience function that returns a defined percent-sized token
 * @param pc the percentage in the token
 */
export function pc(pc:number)   { return new PercentToken(pc); }

/**
 * Convenience constant, standing for an undefined fill token.
 */
export const FILL = new FillToken();
