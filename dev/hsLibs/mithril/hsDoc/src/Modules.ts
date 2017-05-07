
export interface Module {
    id:     number;
    name:   string;
}

export const Modules = {
    list: <Module[]>[],
    loadList() {
        this.list.push({id:0, name:'m1'});
        this.list.push({id:1, name:'m2'});
        this.list.push({id:2, name:'m3'});
    }
};