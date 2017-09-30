import React from 'react';
import {
    shape,
    array,
} from 'prop-types';
import ListBooks from '../../modules/ListBooks';
import Bookshelf from '../../modules/Bookshelf';

function Home({
    bookList,
}) {
    return (
        <ListBooks title="MyReads">
            <div>
                <Bookshelf
                    title="Currently Reading"
                    books={bookList.currentlyReading}
                />
                <Bookshelf
                    title="Want To Read"
                    books={bookList.wantToRead}
                />
                <Bookshelf
                    title="Read"
                    books={bookList.read}
                />
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
};

export default Home;
