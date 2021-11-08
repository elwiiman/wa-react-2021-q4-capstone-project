import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

export const SearchedTerm = styled.div`
    color: ${(props) => props.theme.text.primary};

    ${fontTypes.subtitleMobile}
    @media ${device.tablet} {
        ${fontTypes.subtitleDesktop}
    }

    margin-bottom: 1em;
`;

export const PaginatorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
`;
