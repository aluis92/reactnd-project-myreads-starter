import React from 'react'
import './App.css'
import Bookshelf from './modules/Bookshelf'
import * as BooksAPI from './services/BooksAPI'

class BooksApp extends React.Component {
    state = {
        showSearchPage: false,
        bookList: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(this.bookshelfFactory)
            .then(bookList => this.setState({ bookList }))
    }

    bookshelfFactory(books) {
        return books.reduce((storedBooks, nextBook) => {
            storedBooks[nextBook.shelf] && storedBooks[nextBook.shelf].push(nextBook);
            return storedBooks;
        },
        {
            currentlyReading: [],
            wantToRead: [],
            read: [],
        });
    }

    render() {
        const { bookList } = this.state;

        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                            <div className="search-books-input-wrapper">
                                <input type="text" placeholder="Search by title or author" />
                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                ) : (
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
                                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

export default BooksApp
