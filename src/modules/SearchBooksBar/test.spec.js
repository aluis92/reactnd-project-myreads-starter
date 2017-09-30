import React from 'react';
import {
    shallow,
} from 'enzyme';

import SearchBooksBar from './index';

describe('SearchBooksBar component', () => {
    it('should render without crashing', () => {
        shallow(
            <SearchBooksBar />,
        );
    });
});
