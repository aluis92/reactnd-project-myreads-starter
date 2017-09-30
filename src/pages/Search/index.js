import React from 'react';
import SearchBooksBar from '../../modules/SearchBooksBar';

function Search() {
    return (
        <div className="search-books">
            <SearchBooksBar />
            <div className="search-books-results">
                <ol className="books-grid" />
            </div>
        </div>
    );
}

export default Search;
