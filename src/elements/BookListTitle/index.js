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
        <Container className="list-books-title">
            <Title>{title}</Title>
        </Container>
    );
}

BookListTitle.defaultProps = {
    title: '',
};

BookListTitle.propTypes = {
    title: string.isRequired,
};

export default BookListTitle;
