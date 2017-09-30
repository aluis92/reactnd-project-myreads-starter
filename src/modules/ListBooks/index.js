import React from 'react';
import {
    node,
    string,
} from 'prop-types';
import BookListTitle from '../../elements/BookListTitle';
import OpenSearch from '../../elements/OpenSearch';

import {
    Container,
    Content,
} from './styles';

function ListBooks({
    title,
    children,
}) {
    return (
        <Container>
            <Content>
                <BookListTitle>{title}</BookListTitle>
                <div>
                    {children}
                </div>
            </Content>

            <OpenSearch
                to="/search"
                text="Add a book"
            />
        </Container>
    );
}

ListBooks.defaultProps = {
    children: null,
    title: '',
};

ListBooks.propTypes = {
    children: node,
    title: string,
};

export default ListBooks;
