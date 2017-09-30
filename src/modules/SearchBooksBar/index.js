import React from 'react';
import { node } from 'prop-types';

import {
    Container,
    SearchInput,
    CloseSearch,
    SearchInputWrapper,
} from './styles';

function SearchBooksBar() {
    return (
        <Container>
            <CloseSearch to="/">Close</CloseSearch>
            <SearchInputWrapper>
                <SearchInput type="text" placeholder="Search by title or author" />
            </SearchInputWrapper>
        </Container>
    );
}

export default SearchBooksBar;
