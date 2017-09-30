import React from 'react';
import { string } from 'prop-types';

import {
    Container,
    Title,
} from './styles';

function BookListTitle({
    title,
}) {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    );
}

BookListTitle.propTypes = {
    title: string.isRequired,
};

export default BookListTitle;
