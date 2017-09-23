import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from '../../modules/Bookshelf';

function Home ({
    bookList
}) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
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

export default Home;
