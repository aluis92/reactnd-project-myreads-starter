import React from 'react';
import {
    shallow,
} from 'enzyme';

import InfoText from './index';

describe('InfoText component', () => {
    it('should render without crashing', () => {
        shallow(
            <InfoText>something</InfoText>,
        );
    });
});
