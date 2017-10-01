import React, { Component } from 'react';
import {
    func,
    string,
} from 'prop-types';

import {
    Container,
    Select,
} from './styles';

class ShelfChanger extends Component {
    state = {
        isLoading: false,
    }

    onChange = (e) => {
        this.toggleLoading(true);

        this.props.onChangeShelf(e.target.value)
            .then(() => this.toggleLoading())
            .catch(() => this.toggleLoading());
    }

    toggleLoading(isLoading) {
        this.setState({ isLoading });
    }

    render() {
        const {
            onChange,
            state: { isLoading },
            props: { defaultValue },
        } = this;

        return (
            <Container isLoading={isLoading}>
                <Select defaultValue={defaultValue || 'none'} onChange={onChange}>
                    <option value="" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </Select>
            </Container>
        );
    }
}

ShelfChanger.defaultProps = {
    defaultValue: 'none',
};

ShelfChanger.propTypes = {
    defaultValue: string,
    onChangeShelf: func.isRequired,
};

export default ShelfChanger;
