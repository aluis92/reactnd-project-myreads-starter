import React, { Component } from 'react';
import {
    arrayOf,
    func,
    object,
} from 'prop-types';
import InfoText from '../../elements/InfoText';
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
            onSearch,
            state: {
                emptyQuery,
            },
            props: {
                allBooks,
                searchResults,
                updateBook,
            },
        } = this;

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
                <SearchBooksBar onSearch={onSearch} />
                {
                    !emptyQuery && (
                        <Bookshelf
                            title={`${searchResultsWithAddedBooks.length || '0'} Results`}
                            books={searchResultsWithAddedBooks}
                            onChangeShelf={updateBook}
                        />
                    )
                }

                {
                    emptyQuery && (
                        <InfoText>Type a title or author name to display books...</InfoText>
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
