import styled from 'styled-components';
import arrowDropDown from '../../assets/icons/arrow-drop-down.svg'

export const Container = styled.div`
    padding: 0 10px 20px;

    @media (min-width: 600px) {
        .bookshelf {
            padding: 0 20px 40px;
        }
    }
`;

export const BookshelfTitle = styled.h2`
    border-bottom: 1px solid #dedede;
`;

export const BookshelfBooks = styled.div`
    text-align: center;
`;

export const BooksGrid = styled.ol`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    li {
        padding: 10px 15px;
        text-align: left;
    }
`;
