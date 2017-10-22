import React from 'react';
import {
    shallow,
} from 'enzyme';

import Home from './index';

describe('Home component', () => {
    const defaultHomeProps = {
        updateBook: jest.fn(),
    };

    it('should render without crashing', () => {
        expect(shallow(
            <Home {...defaultHomeProps} />,
        )).toMatchSnapshot();
    });

    it('should render shelves if there is one or more books inside bookShelf', () => {
        const homeProps = {
            bookShelves: {
                read: [{}, {}],
                wantToRead: [{}],
                anotherShelf: [],
            },
            updateBook: jest.fn(),
        };

        const home = shallow(
            <Home {...homeProps} />,
        );

        expect(home.find('Bookshelf').length).toBe(2);
    });
});
