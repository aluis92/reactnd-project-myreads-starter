import React from 'react';
import {
    shallow,
} from 'enzyme';

import {
    BookshelfTitle,
} from './styles';

import Bookshelf from './index';

describe('Bookshelf component', () => {
    const defaultBookshelfProps = {
        books: [],
        onChangeShelf: jest.fn(),
        title: '',
    };

    it('should render without crashing', () => {
        expect(shallow(
            <Bookshelf {...defaultBookshelfProps} />,
        )).toMatchSnapshot();
    });

    it('should books component if there is one or more books in array', () => {
        const bookshelfProps = {
            onChangeShelf: jest.fn(),
            books: [
                {
                    id: '1',
                },
                {
                    id: '2',
                },
            ],
        };

        expect(shallow(
            <Bookshelf {...bookshelfProps} />,
        ).find('Book').length).toBe(2);
    });

    it('should render shelf title if it has title prop', () => {
        const bookshelfProps = {
            title: 'shelf-title',
            onChangeShelf: jest.fn(),
        };

        expect(
            shallow(
                <Bookshelf {...bookshelfProps} />,
            ).find(BookshelfTitle).dive().find('h2')
                .text(),
        ).toEqual('shelf-title');
    });
});
