import React from 'react';
import {
    arrayOf,
    shape,
    string,
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
    authors,
    id,
    imageLinks,
    onChangeShelf,
    title,
}) {
    return (
        <li>
            <Container className="book">
                <BookTop>
                    <BookCover style={{ backgroundImage: `url(${imageLinks.thumbnail})` }} />
                    <ShelfChanger onChangeShelf={value => onChangeShelf(id, value)} />
                </BookTop>
                <BookTitle>{title}</BookTitle>
                <BookAuthors>{authors.join(', ')}</BookAuthors>
            </Container>
        </li>
    );
}

Book.defaultProps = {
    authors: [],
    imageLinks: {},
    title: '',
};

Book.propTypes = {
    authors: arrayOf(string),
    id: string.isRequired,
    imageLinks: shape({
        thumbnail: string,
    }).isRequired,
    title: string.isRequired,
    ...ShelfChanger.propTypes,
};

export default Book;
