import React from 'react';
import { func } from 'prop-types';

import {
    Container,
    Select,
} from './styles';

function ShelfChanger({
    onChangeShelf,
}) {
    return (
        <Container>
            <Select defaultValue="" onChange={e => onChangeShelf(e.target.value)}>
                <option value="" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </Select>
        </Container>
    );
}

ShelfChanger.propTypes = {
    onChangeShelf: func.isRequired,
};

export default ShelfChanger;
