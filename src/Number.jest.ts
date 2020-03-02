import { round } from './Number';


describe('Number', () => {
    it('should round up', () => expect(round(3.5)).toEqual('4'));
    it('should round down', () => expect(round(3.49)).toEqual('3'));

    describe('with specified digits', () => {
        it('should round up', () => expect(round(3.56, 1)).toEqual('3.6'));
        it('should round down', () => expect(round(3.549, 1)).toEqual('3.5'));
    });
});