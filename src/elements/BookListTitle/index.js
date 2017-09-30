import React from 'react';
import { node } from 'prop-types';

import {
    Container,
    Title,
} from './styles';

function BookListTitle({
    children,
}) {
    return (
        <Container>
            <Title>{children}</Title>
        </Container>
    );
}

BookListTitle.propTypes = {
    children: node.isRequired,
};

export default BookListTitle;
