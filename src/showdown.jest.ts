import { markDown } from './showdown';

describe('showdown', () => {
    test('markDown should exist', () => {
        expect(markDown).toBeDefined();
    });
    const markup = '*make this bold*';
    it(`should convert ${markup}`, () => {
        expect(markDown(markup)).toBe('<p><em>make this bold</em></p>');
    });
});
