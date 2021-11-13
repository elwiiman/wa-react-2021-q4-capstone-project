import styled from 'styled-components';

import { device } from '../../config/breakpoints';
import { fontTypes } from '../../config/baseFont';

interface HeadOfSectionProps {
    marginLeft?: string;
}

export const HeadOfSection = styled.h3<HeadOfSectionProps>`
    color: ${(props) => props.theme.text.primary};
    margin-top: 1em;
    ${fontTypes.paragraphBold}

    @media ${device.tablet} {
        ${fontTypes.subtitle2Mobile}
        margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '')};
        margin-top: 0;
    }
`;

export const OverallContainer = styled.div`
    background-color: ${(props) => props.theme.background.paper};
    padding: 1em;
    display: block;
    min-height: 100vh;

    @media ${device.tablet} {
        display: flex;
    }
`;

export const FormContainer = styled.div`
    width: 100%;

    @media ${device.tablet} {
        width: 40%;
    }
`;

export const RightWrapper = styled.div`
    width: 100%;

    @media ${device.tablet} {
        width: 60%;
    }
`;

export const ConfirmedProductContainer = styled.div`
    &:not(:last-child) {
        border-bottom: 1px solid ${(props) => props.theme.line.tertiary};
    }
`;

export const ConfirmedProductsContainer = styled.div`
    @media ${device.tablet} {
        height: calc(172px * 2);
        margin: 0 0 0 1em;
        overflow: scroll;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0;
    margin-top: 2em;
    @media ${device.tablet} {
        margin-left: 1em;
    }

    height: 140px;
`;

export const ButtonGoBackContainer = styled.div`
    & button {
        max-width: 165px;
    }
`;
