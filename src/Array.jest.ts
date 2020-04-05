import { uniquefy }     from './Array';


const literals = [
    {id:0, value:'0'},
    {id:1, value:'1'},
    {id:2, value:'2'},
    {id:0, value:'0'},
    {id:1, value:'1'}
];

const elementals = [0, 1, 2, 0, 3, 4, 1];

describe('Array', () => {
    it('should remove duplicates literals', () => {
        const u = uniquefy(literals, 'id');
        expect(u).toHaveLength(3);
        expect(u).toContainEqual({id:0, value:'0'});
        expect(u).toContainEqual({id:1, value:'1'});
        expect(u).toContainEqual({id:2, value:'2'});
    });
    it('should remove duplicates elementals', () => {
        const u = uniquefy(elementals);
        expect(u).toHaveLength(5);
        expect(u).toContainEqual(0);
        expect(u).toContainEqual(1);
        expect(u).toContainEqual(2);
        expect(u).toContainEqual(3);
        expect(u).toContainEqual(4);
    });
});