import parseCamelCase from './parseCamelCase';

describe('parseCamelCase', () => {
    it('should parse cammel case string to spaced phrase', () => {
        expect(parseCamelCase('someLongPhraseToParse')).toBe('some Long Phrase To Parse');
    });
});
