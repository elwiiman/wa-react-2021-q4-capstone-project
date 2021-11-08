import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

export const NoResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: calc(100vh - 209px);

    @media ${device.tablet} {
        height: calc(100vh - 173px);
    }
`;

export const Message = styled.p`
    color: ${(props) => props.theme.text.primary};
    text-align: center;

    ${fontTypes.subtitleMobile}
    @media ${device.tablet} {
        ${fontTypes.subtitleDesktop}
    }
`;
