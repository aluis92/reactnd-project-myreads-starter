import React from 'react';
import {
    shallow,
} from 'enzyme';

import ShelfChanger from './index';

describe('ShelfChanger component', () => {
    it('should render without crashing', () => {
        shallow(<ShelfChanger />);
    });
});
