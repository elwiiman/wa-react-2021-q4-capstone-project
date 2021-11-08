import styled from 'styled-components';
import { device } from '../../config/breakpoints';
import { fontTypes } from '../../config/baseFont';

export const OverallContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

export const HalfWithLimitContainer = styled.div`
    padding: 0.5em;
    width: 100%;

    @media ${device.tablet} {
        max-width: 350px;
        padding: 1em;
    }
`;

export const HalfContainer = styled.div`
    padding: 0.5em;
    width: 100%;
    @media ${device.tablet} {
        width: 80%;
        padding: 1em;
    }
`;

export const QuantityTag = styled.p`
    color: ${(props) => props.theme.text.primary};
`;

export const ActionButtonContainer = styled.div`
    margin-top: 1rem;
`;

export const TagsContainer = styled.div`
    padding-top: 0.2em;
    margin-bottom: 1em;
    color: ${(props) => props.theme.text.primary};
`;

export const Subtitle = styled.p`
    color: ${(props) => props.theme.text.primary};
    margin-top: 1em;
    margin-bottom: 0.2em;

    ${fontTypes.subtitleMobile}
    @media ${device.tablet} {
        ${fontTypes.subtitleDesktop}
    }
`;
