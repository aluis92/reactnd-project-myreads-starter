import React from 'react';
import {
    shallow,
} from 'enzyme';

import BookListTitle from './index';

describe('BookListTitle component', () => {
    it('should render if it has a child', () => {
        expect(shallow(
            <BookListTitle>something</BookListTitle>,
        )).toMatchSnapshot();
    });
});
