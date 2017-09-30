import React from 'react';
import {
    shape,
    array,
} from 'prop-types';
import { Link } from 'react-router-dom';
import BookListTitle from '../../elements/BookListTitle';
import Bookshelf from '../../modules/Bookshelf';

function Home({
    bookList,
}) {
    return (
        <div className="list-books">
            <div className="list-books-content">
                <BookListTitle title="MyReads" />
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
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
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
