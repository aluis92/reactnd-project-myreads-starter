import React from 'react';
import {
    shape,
    array,
} from 'prop-types';
import BookListTitle from '../../elements/BookListTitle';
import OpenSearch from '../../elements/OpenSearch';
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

            <OpenSearch
                to="/search"
                text="Add a book"
            />
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
