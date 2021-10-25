import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

export const SliderContainer = styled.div`
    position: relative;
`;
export const StyledImage = styled.img`
    display: block;
    width: 100%;
    max-height: 70vh;
    object-fit: cover;
`;

export const Description = styled.p`
    position: absolute;
    top: 20%;
    left: 10%;
    z-index: 999999;
    color: ${(props) => props.theme.text.secondary};
    padding: 0.5em;
    background-color: ${(props) => props.theme.background.secondary_opac};
    ${fontTypes.paragraphBold}

    @media ${device.tablet} {
        ${fontTypes.titleDesktop}
    }
`;
