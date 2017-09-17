"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = require("../mithril");
const _1 = require("../");
const myConfig = {
    Rows: {
        columns: [''],
        maxCount: 5,
        leafCSS: 'leaf',
        content: [
            { Rows: {
                    rows: [''],
                    content: [
                        { aLeaf: { css: 'leaf', columns: [''] } },
                        { aLeaf: { css: 'leaf', columns: ['100px'] } },
                        { aLeaf: { css: 'leaf', columns: ['100px', '200px'] } },
                        { aLeaf: { css: 'leaf', columns: ['20%'] } },
                        { aLeaf: { css: 'leaf', columns: ['20%', 'fill'] } }
                    ]
                } },
            { Rows: {
                    columns: [''],
                    content: [
                        { aLeaf: { css: 'leaf', rows: [''] } },
                        { aLeaf: { css: 'leaf', rows: ['100px'] } },
                        { aLeaf: { css: 'leaf', rows: ['100px', '200px'] } },
                        { aLeaf: { css: 'leaf', rows: ['20%'] } },
                        { aLeaf: { css: 'leaf', rows: ['20%', 'fill'] } }
                    ]
                } }
        ]
    }
};
function next(fn) {
    return setTimeout(() => {
        fn();
        next(fn);
    }, 2000);
}
const example = {
    Rows: class extends _1.Container {
        getComponents(node) {
            node.attrs.content.forEach((c) => c.attrs.maxCount = node.attrs.maxCount);
            return super.getComponents(node);
        }
    },
    aLeaf: class extends _1.Container {
        constructor() {
            super();
            this.count = 1;
            this.maxCount = 0;
            next(() => {
                this.count = (this.count >= this.maxCount) ? 0 : this.count + 1;
                mithril_1.m.redraw();
            });
        }
        getComponents(node) {
            this.maxCount = this.maxCount = node.attrs.maxCount || 3;
            const dims = node.attrs.columns || node.attrs.rows;
            const content = [...Array(this.count).keys()].map((c) => `${node.attrs.columns ? 'Columns' : 'Rows'}<br>${c + 1}<br>[${dims.join()}]`);
            return content;
        }
    }
};
exports.cfg = new _1.HsConfig([example]).attachNodeTree(myConfig, document.body);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy54LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGUvY29sdW1ucy54LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQWtEO0FBQ2xELDBCQUEyQztBQUczQyxNQUFNLFFBQVEsR0FBRztJQUNiLElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRyxDQUFDLEVBQUUsQ0FBQztRQUNkLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUU7WUFDTCxFQUFFLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFO3dCQUNMLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFDO3dCQUN0QyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQzt3QkFDNUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFDO3dCQUNyRCxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQzt3QkFDMUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFDO3FCQUNyRDtpQkFDSixFQUFDO1lBQ0YsRUFBRSxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNiLE9BQU8sRUFBRTt3QkFDTCxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBQyxNQUFNLEVBQUUsSUFBSSxF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