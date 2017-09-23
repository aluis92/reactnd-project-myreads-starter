import React from 'react';
import { 
    shallow,
    mount
} from 'enzyme';

import Bookshelf from './index';

describe('Bookshelf component', () => {
    it('should render without crashing', () => {
        shallow(<Bookshelf />);
    });
});
