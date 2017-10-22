import React from 'react';
import {
    shallow,
    mount,
} from 'enzyme';

import { MemoryRouter } from 'react-router-dom';

import Search from './index';

describe('Search component', () => {
    const defaultSearchProps = {
        onSearch: jest.fn(),
        updateBook: jest.fn(),
    };

    it('should render without crashing', () => {
        expect(shallow(
            <Search {...defaultSearchProps} />,
        )).toMatchSnapshot();
    });

    it('should display InfoText if there is no books to show', () => {
        const searchProps = {
            onSearch: jest.fn(),
            updateBook: jest.fn(),
            allBooks: [],
            searchResults: [],
        };

        const search = shallow(
            <Search {...searchProps} />,
        );

        expect(search.find('InfoText').length).toBe(1);
    });

    describe('onSearch method', () => {
        let searchProps;
        let search;

        beforeEach(() => {
            searchProps = {
                onSearch: jest.fn(() => ({
                    then: success => success(),
                })),
                updateBook: jest.fn(),
                allBooks: [{ id: 'a' }],
                searchResults: [{ id: 'a' }],
            };

            search = mount(
                <MemoryRouter>
                    <div>
                        <Search {...searchProps} />,
                    </div>
                </MemoryRouter>,
            );
        });

        it('should change emptyQuery state to false when call onSearch with text string', () => {
            const searchInstance = search.find('Search').instance();

            expect(searchInstance.state.emptyQuery).toBe(true);
            search.find('Search').instance().onSearch('abc');
            expect(searchInstance.state.emptyQuery).toBe(false);
        });

        it('should change emptyQuery state to true when call onSearch with text string', () => {
            const searchInstance = search.find('Search').instance();

            expect(searchInstance.state.emptyQuery).toBe(true);
            search.find('Search').instance().onSearch();
            expect(searchInstance.state.emptyQuery).toBe(true);
        });
    });
});
