import bookshelfFactory from './bookshelfFactory';

describe('bookshelfFactory', () => {
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
});
