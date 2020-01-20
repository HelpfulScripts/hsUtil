import { shortCheckSum } from './Checksum';

describe('Checksum', () => {
   it('should create correct checksum', () => {
        expect(shortCheckSum('make checksum for this text')).toEqual('1234e6cd');
    });
});
