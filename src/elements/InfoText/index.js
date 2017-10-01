import React from 'react';
import { node } from 'prop-types';

import {
    Container,
    Text,
} from './styles';

function InfoText({
    children,
}) {
    return (
        <Container>
            <Text>{children}</Text>
        </Container>
    );
}

InfoText.propTypes = {
    children: node.isRequired,
};

export default InfoText;
