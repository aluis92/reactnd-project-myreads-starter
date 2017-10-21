import parseCamelCase from './parseCamelCase';

describe('parseCamelCase', () => {
    it('should not change one-word string', () => {
        expect(parseCamelCase('text')).toEqual('text');
    });

    it('should parse cammel case string to spaced phrase', () => {
        expect(parseCamelCase('someText')).toEqual('some text');
    });

    it('should parse long cammel case string to spaced phrase', () => {
        expect(parseCamelCase('someLongPhraseToParse')).toEqual('some long phrase to parse');
    });
});
