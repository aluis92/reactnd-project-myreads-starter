import React from 'react';
import {
    arrayOf,
    shape,
    string,
} from 'prop-types';
import ShelfChanger from '../ShelfChanger';
import parseCamelCase from '../../utils/parseCamelCase';

import {
    BookAuthors,
    BookCover,
    BookTitle,
    BookTop,
    Container,
    BookCondition,
} from './styles';

function Book({
    authors,
    added,
    id,
    imageLinks,
    onChangeShelf,
    title,
    shelf,
}) {
    return (
        <li>
            <Container className="book">
                <BookTop>
                    <BookCover
                        style={{ backgroundImage: `url(${imageLinks.thumbnail})` }}
                    >
                        {
                            added &&
                            <BookCondition>{parseCamelCase(added)}</BookCondition>
                        }
                    </BookCover>
                    <ShelfChanger
                        defaultValue={shelf || added}
                        onChangeShelf={value => onChangeShelf(id, value)}
                    />
                </BookTop>
                <BookTitle>{title}</BookTitle>
                <BookAuthors>{authors.join(', ')}</BookAuthors>
            </Container>
        </li>
    );
}

Book.defaultProps = {
    authors: [],
    added: null,
    imageLinks: {},
    title: '',
    shelf: null,
};

Book.propTypes = {
    authors: arrayOf(string),
    added: string,
    id: string.isRequired,
    imageLinks: shape({
        thumbnail: string,
    }).isRequired,
    title: string.isRequired,
    ...ShelfChanger.propTypes,
    shelf: string,
};

export default Book;
