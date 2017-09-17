import { Vnode } from '../mithril';
export declare abstract class Component {
    abstract view(vnode?: Vnode): Vnode;
}
export declare abstract class Container extends Component {
    style: string;
    protected getComponents(node: Vnode): Vnode;
    protected getCSS(node: Vnode): string;
    private normalizeContent(components);
    view(node: Vnode): Vnode;
}
