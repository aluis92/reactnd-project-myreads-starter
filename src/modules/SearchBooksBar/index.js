import React from 'react';
import { func } from 'prop-types';

import {
    Container,
    SearchInput,
    CloseSearch,
    SearchInputWrapper,
} from './styles';

function SearchBooksBar({
    onSearch,
}) {
    return (
        <Container>
            <CloseSearch to="/">Close</CloseSearch>
            <SearchInputWrapper>
                <SearchInput
                    type="text"
                    placeholder="Search by title or author"
                    onChange={e => onSearch(e.target.value)}
                />
            </SearchInputWrapper>
        </Container>
    );
}

SearchBooksBar.propTypes = {
    onSearch: func.isRequired,
};

export default SearchBooksBar;
