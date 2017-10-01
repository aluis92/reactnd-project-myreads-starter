import React, { Component } from 'react';
import {
    arrayOf,
    func,
    object,
} from 'prop-types';
import SearchBooksBar from '../../modules/SearchBooksBar';
import Bookshelf from '../../modules/Bookshelf';

class Search extends Component {
    state = {
        emptyQuery: true,
    }

    onSearch = (query) => {
        if (query && query.length > 0) {
            this.props.onSearch(query)
                .then(() => this.setState({ emptyQuery: false }));
        } else {
            this.setState({ emptyQuery: true });
        }
    }

    render() {
        const {
            allBooks,
            searchResults,
            updateBook,
        } = this.props;

        const searchResultsWithAddedBooks = searchResults.map((searchResult) => {
            const allBookInstance = allBooks.find(book => book.id === searchResult.id);

            return (
                {
                    ...searchResult,
                    added: allBookInstance && allBookInstance.shelf,
                }
            );
        });

        return (
            <div>
                <SearchBooksBar onSearch={this.onSearch} />
                {
                    !this.state.emptyQuery && (
                        <Bookshelf
                            title={`${searchResultsWithAddedBooks.length || '0'} Results`}
                            books={searchResultsWithAddedBooks}
                            onChangeShelf={updateBook}
                        />
                    )
                }
            </div>
        );
    }
}

Search.defaultProps = {
    allBooks: [],
    searchResults: [],
};

Search.propTypes = {
    onSearch: func.isRequired,
    allBooks: arrayOf(object),
    searchResults: arrayOf(object),
    updateBook: func.isRequired,
};

export default Search;
