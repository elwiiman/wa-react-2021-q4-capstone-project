import styled from 'styled-components';
import { device } from '../../config/breakpoints';

export const ProductListContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

export const DesktopFiltersContainer = styled.div`
    display: none;
    max-width: 150px;
    padding: 1rem;

    @media ${device.tablet} {
        display: block;
    }
`;

export const MobileFiltersContainer = styled.div`
    display: block;
    padding: 1rem 0.2rem;

    @media ${device.tablet} {
        display: none;
    }
`;

export const GridContainer = styled.div`
    margin: 0 auto;
    padding: 0;

    @media ${device.tablet} {
        padding: 1rem;
    }
`;
