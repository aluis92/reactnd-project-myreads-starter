import React from 'react';
import {
    shallow,
} from 'enzyme';

import { Select } from './styles';

import ShelfChanger from './index';

describe('ShelfChanger component', () => {
    const defaultShelfChangerProps = {
        defaultValue: '',
        onChangeShelf: jest.fn(),
    };

    it('should render if it has onChangeShelf prop', () => {
        expect(shallow(
            <ShelfChanger
                {...defaultShelfChangerProps}
            />,
        )).toMatchSnapshot();
    });

    it('should call onChangeShelf prop if select value changes', () => {
        const shelfChangerProps = {
            onChangeShelf: jest.fn(() => ({
                then: jest.fn((success) => {
                    success();

                    return {
                        catch: failure => failure(),
                    };
                }),
            })),
        };

        const shelfChanger = shallow(
            <ShelfChanger
                {...shelfChangerProps}
            />,
        );

        shelfChanger.find(Select).simulate('change', {
            target: {
                value: 'read',
            },
        });

        expect(shelfChangerProps.onChangeShelf).toHaveBeenCalled();
    });
});
