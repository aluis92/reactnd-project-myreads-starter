import React from 'react';
import {
    shape,
    array,
    func,
} from 'prop-types';
import ListBooks from '../../modules/ListBooks';
import Bookshelf from '../../modules/Bookshelf';
import parseCamelCase from '../../utils/parseCamelCase';

function Home({
    bookList,
    updateBook,
}) {
    const shelves = Object.keys(bookList);

    return (
        <ListBooks title="MyReads">
            <div>
                {
                    shelves.map(shelf => bookList[shelf].length > 0 && (
                        <Bookshelf
                            key={shelf}
                            title={parseCamelCase(shelf)}
                            books={bookList[shelf]}
                            onChangeShelf={updateBook}
                        />
                    ))
                }
            </div>
        </ListBooks>
    );
}

Home.defaultProps = {
    bookList: null,
};

Home.propTypes = {
    bookList: shape({
        currentlyReading: array,
        wantToRead: array,
        read: array,
    }),
    updateBook: func.isRequired,
};

export default Home;
