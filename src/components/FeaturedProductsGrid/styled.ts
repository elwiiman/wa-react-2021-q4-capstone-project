import styled from 'styled-components';
import { device } from '../../config/breakpoints';

export const OverallGridContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;

    @media ${device.mobileL} {
        grid-template-columns: auto auto auto;
    }
`;

export const GridItem = styled.div``;
