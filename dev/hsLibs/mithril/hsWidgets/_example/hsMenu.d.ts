import { Container, Vnode } from 'hslayout';
export interface MenuDesc {
    items: string[];
    selectedItem?: string;
    select: (item: string) => void;
    size?: string[];
}
export interface MenuItemDesc {
    title: string;
    isSelected: boolean;
    clicked: (item: string) => void;
}
export declare class Menu extends Container {
    menu: {
        items: {
            string: MenuItemDesc;
        };
        select: (title: string) => void;
    };
    getComponents(node: Vnode): Vnode;
}
