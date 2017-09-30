import React from 'react';
import { string } from 'prop-types';

import {
    Container,
    OpenSearchLink,
} from './styles';

function OpenSearch({
    text,
    to,
}) {
    return (
        <Container>
            <OpenSearchLink to={to}>{text}</OpenSearchLink>
        </Container>
    );
}

OpenSearch.propTypes = {
    text: string.isRequired,
    to: string.isRequired,
};

export default OpenSearch;
