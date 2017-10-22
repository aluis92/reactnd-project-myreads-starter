import React from 'react';
import {
    shallow,
    mount,
} from 'enzyme';

import App from './App';

jest.mock('./services/BooksAPI', () => ({
    getAll: () => ({
        then: success => success(
            [
                {
                    id: '1',
                    shelf: 'currentlyReading',
                },
                {
                    id: '2',
                    shelf: 'wantToRead',
                },
                {
                    id: '3',
                    shelf: 'read',
                },
            ],
        ),
    }),
    update: () => ({
        then: (success) => { success(); },
    }),
    search: (query) => {
        let response = null;

        if (query === 'valid query') {
            response = [
                {
                    id: 'searchResp',
                },
            ];
        }

        return ({
            then: (success) => {
                success(response);
            },
        });
    },
}), { virtual: true });

describe('App component', () => {
    const APIResult = [
        {
            id: '1',
            shelf: 'currentlyReading',
        },
        {
            id: '2',
            shelf: 'wantToRead',
        },
        {
            id: '3',
            shelf: 'read',
        },
    ];

    it('should render without crashing', () => {
        expect(shallow(
            <App />,
        )).toMatchSnapshot();
    });


    it('should call getAllBooks when it mounts', () => {
        const spy = jest.spyOn(App.prototype, 'getAllBooks');

        mount(
            <App />,
        );

        expect(spy).toHaveBeenCalled();
    });

    it('should call getAllBooks when it mounts', () => {
        const spy = jest.spyOn(App.prototype, 'getAllBooks');

        mount(
            <App />,
        );

        expect(spy).toHaveBeenCalled();
    });

    it('should have allBooks array state as same as the result of API when it mounts', () => {
        const app = mount(
            <App />,
        );

        expect(app.instance().state.allBooks).toEqual(APIResult);
    });

    it('should have call App´s getAllBooks method when updateBook is triggered', () => {
        const spy = jest.spyOn(App.prototype, 'getAllBooks');

        const app = mount(
            <App />,
        );

        app.instance().updateBook('1', 'read');

        expect(spy).toHaveBeenCalled();
    });

    it('should update App´s searchResults state when searchBooks is called with valid query', () => {
        const app = mount(
            <App />,
        );

        app.instance().searchBooks('valid query');

        expect(app.instance().state.searchResults).toEqual([{ id: 'searchResp' }]);
    });

    it('should set App´s searchResults state with empty array when searchBooks is called with invalid query', () => {
        const app = mount(
            <App />,
        );

        app.instance().searchBooks('invalid query');

        expect(app.instance().state.searchResults).toEqual([]);
    });
});
