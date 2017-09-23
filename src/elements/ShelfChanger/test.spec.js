import React from 'react';
import { 
    shallow,
    mount
} from 'enzyme';

import ShelfChanger from './index';

describe('ShelfChanger component', () => {
    it('should render without crashing', () => {
        shallow(<ShelfChanger />);
    });
});
