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
        bookList: [],
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(bookshelfFactory)
            .then(bookList => this.setState({ bookList }));
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
                        render={() => <Home bookList={bookList} />}
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
