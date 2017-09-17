"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hslayout_1 = require("hslayout");
class Menu extends hslayout_1.Container {
    constructor() {
        super(...arguments);
        this.menu = {
            items: {},
            select: (title) => {
                Object.keys(this.menu.items).forEach((key) => {
                    this.menu.items[key].isSelected = (key === title);
                });
            }
        };
    }
    getComponents(node) {
        const _menu = this.menu;
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        desc.selectedItem = desc.selectedItem || desc.items[0];
        node.attrs.columns = desc.size || [];
        node.attrs.css = '.hs-menu';
        return desc.items.map((l) => {
            _menu.items[l] = _menu.items[l] || {
                title: l,
                isSelected: l === desc.selectedItem,
                clicked: (item) => {
                    desc.selectedItem = item;
                    _menu.select(item);
                    if (typeof desc.select === 'function') {
                        desc.select(item);
                    }
                }
            };
            return hslayout_1.m(MenuItem, { desc: _menu.items[l] });
        });
    }
}
exports.Menu = Menu;
;
class MenuItem extends hslayout_1.Container {
    getComponents(node) {
        const desc = node.attrs.desc;
        node.attrs.desc = undefined;
        node.attrs.css = `.hs-menu-item ${desc.isSelected ? 'hs-menu-item-selected' : ''}`;
        node.attrs.onclick = () => { desc.clicked(desc.title); };
        return desc.title;
    }
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNNZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hzTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdEQSx1Q0FBK0M7QUEyQi9DLFVBQWtCLFNBQVEsb0JBQVM7SUFBbkM7O1FBRUksU0FBSSxHQUFHO1lBQ0gsS0FBSyxFQUF5QixFQUFFO1lBQ2hDLE1BQU0sRUFBRSxDQUFDLEtBQVk7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFVO29CQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEtBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUM7SUF5Qk4sQ0FBQztJQXZCRyxhQUFhLENBQUMsSUFBVztRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUU1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBUTtZQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQy9CLEtBQUssRUFBRSxDQUFDO2dCQUNSLFVBQVUsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVk7Z0JBQ25DLE9BQU8sRUFBQyxDQUFDLElBQVc7b0JBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEIsQ0FBQztnQkFDTCxDQUFDO2FBQ0osQ0FBQztZQUNGLE1BQU0sQ0FBQyxZQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBbENELG9CQWtDQztBQUFBLENBQUM7QUFLRixjQUFlLFNBQVEsb0JBQVM7SUFDNUIsYUFBYSxDQUFDLElBQVc7UUFDckIsTUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsSUFBSSxDQUFDLFVBQVUsR0FBQyx1QkFBdUIsR0FBRSxFQUFFLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQUFBLENBQUMifQ==