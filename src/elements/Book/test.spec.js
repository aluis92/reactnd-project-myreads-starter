import React from 'react';
import {
    shallow,
    mount,
} from 'enzyme';

import { BookCondition } from './styles';

import Book from './index';

describe('Book component', () => {
    const defaultBookProps = {
        id: '',
        imageLinks: {},
        authors: [],
        title: '',
        onChangeShelf: jest.fn(),
    };

    it('should render without crashing', () => {
        expect(shallow(
            <Book
                {...defaultBookProps}
            />,
        )).toMatchSnapshot();
    });

    it('should to show added category', () => {
        const bookProps = {
            ...defaultBookProps,
            added: 'read',
        };

        const book = shallow(<Book {...bookProps} />);

        expect(book.find(BookCondition).dive().text()).toEqual('read');
    });

    it('should call onChangeShelf prop when ShelfChanger trigger onChangeShelf function', () => {
        const bookProps = {
            ...defaultBookProps,
            onChangeShelf: jest.fn(),
        };

        const book = mount(<Book {...bookProps} />);

        book.find('ShelfChanger').instance().props.onChangeShelf();

        expect(bookProps.onChangeShelf).toHaveBeenCalled();
    });
});
