import React from 'react';
import Book from '../../elements/Book';
import {
    arrayOf,
    shape
} from 'prop-types';

import {
    Container,
    BookshelfTitle,
    BookshelfBooks,
    BooksGrid,
} from './styles';

function Bookshelf({
    books,
    title
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
    books: []
};

Bookshelf.propTypes = {
    books: arrayOf(
        shape(Book.propTypes)
    )
};

export default Bookshelf;