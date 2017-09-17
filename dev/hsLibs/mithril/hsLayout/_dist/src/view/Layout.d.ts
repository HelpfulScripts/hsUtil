import { Vnode } from '../mithril';
import { LayoutToken } from './Tokens';
import { Container } from './Container';
export declare abstract class Layout {
    areaDesc: LayoutToken[];
    static layoutStyles: {
        string?: Layout;
    };
    private static translate(params);
    static register(keyword: string, style: typeof Layout): void;
    static createLayout(attrs: any, components: Array<Vnode>): string;
    spacing: number;
    constructor(areaDesc: LayoutToken[]);
    protected abstract getStyles(components: Array<Vnode | Container>): string;
}
