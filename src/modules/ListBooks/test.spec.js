import React from 'react';
import {
    shallow,
} from 'enzyme';

import Bookshelf from './index';

describe('Bookshelf component', () => {
    it('should render without crashing', () => {
        shallow(<Bookshelf />);
    });
});
