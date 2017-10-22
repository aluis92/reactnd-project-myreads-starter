import React from 'react';
import {
    shallow,
} from 'enzyme';

import OpenSearch from './index';

describe('OpenSearch component', () => {
    const props = {
        text: 'ok',
        to: '/',
    };

    it('should render if it has text and to props', () => {
        expect(shallow(
            <OpenSearch
                {...props}
            />,
        )).toMatchSnapshot();
    });
});
