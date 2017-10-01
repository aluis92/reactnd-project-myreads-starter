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
            searchResults,
            updateBook,
        } = this.props;

        return (
            <div>
                <SearchBooksBar onSearch={this.onSearch} />
                {
                    !this.state.emptyQuery && (
                        <Bookshelf
                            title={`${searchResults.length || '0'} Results`}
                            books={searchResults}
                            onChangeShelf={updateBook}
                        />
                    )
                }
            </div>
        );
    }
}

Search.defaultProps = {
    searchResults: [],
};

Search.propTypes = {
    onSearch: func.isRequired,
    searchResults: arrayOf(object),
    updateBook: func.isRequired,
};

export default Search;
