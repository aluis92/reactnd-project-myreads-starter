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
    bookShelves,
    updateBook,
}) {
    const shelves = Object.keys(bookShelves);

    return (
        <ListBooks title="MyReads">
            <div>
                {
                    shelves.map(shelf => bookShelves[shelf].length > 0 && (
                        <Bookshelf
                            key={shelf}
                            title={parseCamelCase(shelf)}
                            books={bookShelves[shelf]}
                            onChangeShelf={updateBook}
                        />
                    ))
                }
            </div>
        </ListBooks>
    );
}

Home.defaultProps = {
    bookShelves: null,
};

Home.propTypes = {
    bookShelves: shape({
        currentlyReading: array,
        read: array,
        wantToRead: array,
    }),
    updateBook: func.isRequired,
};

export default Home;
