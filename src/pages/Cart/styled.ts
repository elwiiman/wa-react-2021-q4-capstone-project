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
    min-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 140px;
    max-height: 140px;
    border-radius: 2px;

    @media ${device.tablet} {
        margin: 0 1em;
        min-height: 176px;
    }
`;

export const CartElementsContainer = styled.div`
    display: block;

    @media ${device.tablet} {
        display: flex;
    }
`;

export const ToCheckoutContainer = styled.div`
    margin-top: 1em;
    @media ${device.tablet} {
        margin-top: 0;
    }
`;

export const CardContainer = styled.div`
    margin-bottom: 0.8em;
`;
