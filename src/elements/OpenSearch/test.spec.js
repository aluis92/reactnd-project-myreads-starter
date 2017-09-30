import React from 'react';
import {
    shallow,
} from 'enzyme';

import BookListTitle from './index';

describe('BookListTitle component', () => {
    const props = {
        title: 'ok',
    };

    it('should render without crashing', () => {
        shallow(
            <BookListTitle
                {...props}
            />,
        );
    });
});
