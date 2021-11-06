import styled from 'styled-components';
import { device } from '../../config/breakpoints';

export const CartWrapper = styled.div`
    background-color: ${(props) => props.theme.background.paper};
    padding: 1em;
    min-height: calc(100vh - 200px);

    @media ${device.tablet} {
        min-height: calc(100vh - 170px);
    }
`;

export const CartOverallContainer = styled.div`
    width: 100%;
    @media ${device.tablet} {
        width: 60%;
    }
`;

export const TotalContainer = styled.div`
    background-color: ${(props) => props.theme.background.main};
    padding: 1em;
    margin: 0;
    margin-top: 1em;
    max-height: 3.5em;
    min-width: 40%;

    @media ${device.tablet} {
        margin: 0 1em;
    }
`;

export const CartElementsContainer = styled.div`
    display: block;

    @media ${device.tablet} {
        display: flex;
    }
`;
