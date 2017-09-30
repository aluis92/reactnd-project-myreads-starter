import React from 'react';
import {
    shallow,
} from 'enzyme';

import Book from './index';

describe('Book component', () => {
    const bookProps = {
        imageLinks: '',
        authors: [],
        title: '',
    };

    it('should render without crashing', () => {
        shallow(
            <Book
                {...bookProps}
            />,
        );
    });
});
