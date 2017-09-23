import React from 'react';
import {
    arrayOf,
    string
} from 'prop-types';
import ShelfChanger from '../ShelfChanger';

import {
    BookAuthors,
    BookCover,
    BookTitle,
    BookTop,
    Container,
} from './styles';

function Book({
    imageLinks,
    authors,
    title
}) {
    return (
        <li>
            <Container className="book">
                <BookTop>
                    <BookCover style={{backgroundImage: `url(${imageLinks.thumbnail})` }} />
                    <ShelfChanger />
                </BookTop>
                <BookTitle>{title}</BookTitle>
                <BookAuthors>{authors.join(', ')}</BookAuthors>
            </Container>
        </li>
    );
}

Book.defaultProps = {
    imageLinks: '',
    authors: [],
    title: '',
};

Book.propTypes = {
    imageLinks: string.isRequired,
    authors: arrayOf(string),
    title: string.isRequired,
};

export default Book;