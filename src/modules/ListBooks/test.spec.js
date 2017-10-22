import React from 'react';
import {
    shallow,
} from 'enzyme';

import ListBooks from './index';

describe('ListBooks component', () => {
    it('should render without crashing', () => {
        expect(shallow(
            <ListBooks />,
        )).toMatchSnapshot();
    });
});
