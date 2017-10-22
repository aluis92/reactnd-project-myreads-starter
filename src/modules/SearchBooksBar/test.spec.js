import React from 'react';
import {
    shallow,
} from 'enzyme';

import { SearchInput } from './styles';

import SearchBooksBar from './index';

describe('SearchBooksBar component', () => {
    const defaultSearchBooksBar = {
        onSearch: jest.fn(),
    };

    it('should render without crashing if it has onSearch prop', () => {
        expect(shallow(
            <SearchBooksBar {...defaultSearchBooksBar} />,
        )).toMatchSnapshot();
    });

    it('should call onSearch prop if input value changes', () => {
        const searchBooksBarProps = {
            onSearch: jest.fn(),
        };

        const searchBooksBar = shallow(
            <SearchBooksBar {...searchBooksBarProps} />,
        );

        searchBooksBar
            .find(SearchInput)
            .simulate('change', { target: { value: 'test' } });

        expect(searchBooksBarProps.onSearch).toHaveBeenCalled();
    });
});
