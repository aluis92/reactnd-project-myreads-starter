import React from 'react';
import {
    shallow,
} from 'enzyme';

import OpenSearch from './index';

describe('OpenSearch component', () => {
    const props = {
        title: 'ok',
        to: '/',
    };

    it('should render without crashing', () => {
        shallow(
            <OpenSearch
                {...props}
            />,
        );
    });
});
