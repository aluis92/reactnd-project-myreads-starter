import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import bookshelfFactory from './utils/bookshelfFactory';

import * as BooksAPI from './services/BooksAPI';

import './App.css';

class App extends Component {
    state = {
        allBooks: [],
        bookList: {
            currentlyReading: [],
            read: [],
            wantToRead: [],
        },
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks() {
        BooksAPI.getAll()
            .then(bookshelfFactory)
            .then(bookList => this.setState({ bookList }));
    }

    updateBook = (bookId, shelf) => {
        BooksAPI.update(bookId, shelf)
            .then(() => this.getAllBooks());
    }

    render() {
        const {
            bookList,
        } = this.state;

        return (
            <BrowserRouter>
                <div>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Home
                                bookList={bookList}
                                updateBook={this.updateBook}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/search"
                        component={Search}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
