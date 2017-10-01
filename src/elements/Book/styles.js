import styled, { css } from 'styled-components';

const bookFontSize = css`
    font-size: 0.8em;
`;

export const Container = styled.div`
    width: 140px;
`;

export const BookTitle = styled.h3`
    ${bookFontSize}

    margin-top: 10px;
`;

export const BookAuthors = styled.p`
    ${bookFontSize}

    color: #999;
`;

export const BookTop = styled.div`
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
`;

export const BookCover = styled.div`
    position: relative;
    width: 128px;
    height: 193px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background: #eee;
`;

export const BookCondition = styled.p`
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    bottom: 0;
    color: white;
    display: flex;
    font-weight: bold;
    justify-content: center;
    left:0;
    margin: 0;
    padding: 15px;
    position: absolute;
    right: 0;
    text-align: center;
    text-transform: uppercase;
    top: 0;
`;
