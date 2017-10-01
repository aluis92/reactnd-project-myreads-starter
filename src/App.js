import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import bookshelfFactory from './utils/bookshelfFactory';

import * as BooksAPI from './services/BooksAPI';

class App extends Component {
    state = {
        allBooks: [],
        searchResults: [],
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks() {
        BooksAPI.getAll()
            .then(allBooks => this.setState({ allBooks }));
    }

    updateBook = (bookId, shelf) => (
        BooksAPI.update(bookId, shelf)
            .then(() => this.getAllBooks())
    )

    searchBooks = query => (
        BooksAPI.search(query)
            .then((searchResults) => {
                if (Array.isArray(searchResults)) {
                    return searchResults;
                }
                return [];
            })
            .then(searchResults => this.setState({ searchResults }))
    )

    render() {
        const {
            allBooks,
            searchResults,
        } = this.state;

        const bookShelves = bookshelfFactory(allBooks);

        return (
            <BrowserRouter>
                <div>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Home
                                bookShelves={bookShelves}
                                updateBook={this.updateBook}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/search"
                        render={() => (
                            <Search
                                onSearch={this.searchBooks}
                                searchResults={searchResults}
                                updateBook={this.updateBook}
                            />
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
