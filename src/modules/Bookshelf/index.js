import React from 'react';
import {
    arrayOf,
    shape,
    string,
} from 'prop-types';
import Book from '../../elements/Book';

import {
    Container,
    BookshelfTitle,
    BookshelfBooks,
    BooksGrid,
} from './styles';

function Bookshelf({
    books,
    title,
}) {
    return (
        <Container>
            <BookshelfTitle>{title}</BookshelfTitle>
            <BookshelfBooks>
                <BooksGrid>
                    {
                        books.map(book => (
                            <Book
                                key={book.id}
                                {...book}
                            />
                        ))
                    }

                </BooksGrid>
            </BookshelfBooks>
        </Container>
    );
}

Bookshelf.defaultProps = {
    books: [],
    title: '',
};

Bookshelf.propTypes = {
    books: arrayOf(
        shape(Book.propTypes),
    ),
    title: string,
};

export default Bookshelf;
