import React from 'react';
import {
    shallow,
} from 'enzyme';

import InfoText from './index';

describe('InfoText component', () => {
    it('should render if it has a child', () => {
        expect(shallow(
            <InfoText>something</InfoText>,
        )).toMatchSnapshot();
    });
});
