import bookshelfFactory from './bookshelfFactory';

describe('bookshelfFactory', () => {
    it('should return empty object if receive empty value', () => {
        expect(bookshelfFactory()).toEqual({});
    });

    it('should return empty object if receive empty array', () => {
        expect(bookshelfFactory([])).toEqual({});
    });

    it('should parse book request', () => {
        const booksToParse = [
            {
                id: '231',
                shelf: 'currentlyReading',
            },
            {
                id: '43',
                shelf: 'wantToRead',
            },
            {
                id: '54',
                shelf: 'read',
            },
        ];

        const expected = {
            currentlyReading: [
                {
                    id: '231',
                    shelf: 'currentlyReading',
                },
            ],
            wantToRead: [
                {
                    id: '43',
                    shelf: 'wantToRead',
                },
            ],
            read: [
                {
                    id: '54',
                    shelf: 'read',
                },
            ],
        };

        expect(bookshelfFactory(booksToParse)).toEqual(expected);
    });

    it('should parse book request with more than 1 book per shelf', () => {
        const booksToParse = [
            {
                id: '43',
                shelf: 'wantToRead',
            },
            {
                id: '44',
                shelf: 'wantToRead',
            },
            {
                id: '11',
                shelf: 'read',
            },
            {
                id: '22',
                shelf: 'read',
            },
        ];

        const expected = {
            wantToRead: [
                {
                    id: '43',
                    shelf: 'wantToRead',
                },
                {
                    id: '44',
                    shelf: 'wantToRead',
                },
            ],
            read: [
                {
                    id: '11',
                    shelf: 'read',
                },
                {
                    id: '22',
                    shelf: 'read',
                },
            ],
        };

        expect(bookshelfFactory(booksToParse)).toEqual(expected);
    });
});
