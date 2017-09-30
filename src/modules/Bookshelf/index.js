import React from 'react';
import {
    arrayOf,
    object,
    string,
} from 'prop-types';
import Book from '../../elements/Book';
import ShelfChanger from '../../elements/ShelfChanger';

import {
    Container,
    BookshelfTitle,
    BookshelfBooks,
    BooksGrid,
} from './styles';

function Bookshelf({
    books,
    title,
    onChangeShelf,
}) {
    return (
        <Container>
            {
                title &&
                <BookshelfTitle>{title}</BookshelfTitle>
            }
            <BookshelfBooks>
                <BooksGrid>
                    {
                        books.map(book => (
                            <Book
                                key={book.id}
                                onChangeShelf={onChangeShelf}
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
    books: arrayOf(object),
    title: string,
    ...ShelfChanger.propTypes,
};

export default Bookshelf;
