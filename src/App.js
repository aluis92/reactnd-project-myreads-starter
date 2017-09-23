import React, { Component } from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import * as BooksAPI from './services/BooksAPI';

import './App.css';

class BooksApp extends Component {
    state = {
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
        const {
            bookList
        } = this.state;
        
        return(
            <BrowserRouter>
                <div>
                    <Route exact
                        path="/"
                        render={() => <Home bookList={bookList} />}
                    />
                    <Route exact
                        path="/search"
                        component={Search}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default BooksApp
