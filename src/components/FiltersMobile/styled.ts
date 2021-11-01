import styled from 'styled-components';
import { device } from '../../config/breakpoints';

export const FiltersMobileContainer = styled.div`
    display: block;
    position: relative;

    @media ${device.tablet} {
        display: none;
    }
`;
export const FilterIconContainer = styled.div`
    width: 30px;
    & button {
        height: 30px;
    }
`;

export const CloseButtonContainer = styled.div`
    width: 15px;
    position: absolute;
    top: -6.5rem;
    right: 1rem;
    z-index: 9999;
`;

export const FiltersWrapper = styled.div`
    background: ${(props) => props.theme.background.main};

    padding: 1rem;
    z-index: 9999;
    position: absolute;
    top: -2em;
    left: -19px;
    width: 100vw;
`;
