import styled from 'styled-components';
import { Link } from 'react-router-dom';
import addIcon from '../../assets/icons/add.svg';

export const Container = styled.header`
    position: fixed;
    right: 25px;
    bottom: 25px;
`;

export const OpenSearchLink = styled(Link)`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2e7d32;
    background-image: url(${addIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 0;
`;
