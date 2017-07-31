import { m, Vnode } from '../../mithril'; 
import { Container, Leaf } from './view/Container';
import { px, pc, FILL } from './view/Tokens';
import { Layout } from './view/Layout';

/**
 * A Container that can be configured via a Layout and a set of Vnodes.
 * The ConfigContainer is typically not created created directly but via the 
 * {@link hsConfig:hsConfig hsConfig} mecahnism via the pattern
 * `m(ConfigContainer, {layout: [...], content: [<Vnode[]>]})`
 */
export class ConfigContainer extends Container {
    /**
     * Translates `string` params to {@link hsLayout:Tokens.LayoutToken LayoutTokens}.
     * The `params` are expected to either
     * - end in 'px'
     * - end in '%'
     * - be equal to 'fill' (case insensitive)
     * @param params an Array of strings that will be converted to an array of LayourTokens.
     * 
     */
    private static translate(params:string[]) {
        return params.map((param:string) => {
            if (param.endsWith('px')) { return px(parseInt(param)); }
            if (param.endsWith('%')) { return pc(parseInt(param)); }
            if (param.toLowerCase()==='fill') { return FILL;}
        });
    }

    /**
     * Filters and translates the parts of the provided config relevant to hsLayout
     * @param config 
     */
    public static configFilter(config:any) {
        let result = {};
        Object.keys(config).map((k:string) => {
            if (Layout.layoutStyles[k]) {
                result[k] = ConfigContainer.translate(config[k]);
            }
        });
        return result;
    }

    /** standard Mithril view method. */
    view(node:Vnode) {
        const layout = node.attrs.layout;
        const content= node.attrs.content.map((c:Vnode) => m(Leaf, { content:c } ));
        return this.layout('.h1', layout, content);
    } 
}
