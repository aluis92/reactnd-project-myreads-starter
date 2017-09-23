import React from 'react';

import {
    Container,
    Select
} from './styles'

function ShelfChanger() {
    return (
        <Container>
            <Select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </Select>
        </Container>
    );
}

export default ShelfChanger;