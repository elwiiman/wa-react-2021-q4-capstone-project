import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

export const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-gap: 10px;
`;

// 1r_3r means from 1st row to 5th row
export const GridItem1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
`;

export const GridItem2 = styled.div`
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
`;

export const GridItem3 = styled.div`
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 3;
`;

export const GridItem4 = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 7;
`;

export const GridItem5 = styled.div`
    grid-column-start: 4;
    grid-column-end: 7;
    grid-row-start: 3;
    grid-row-end: 7;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transition: transform 1s;

    &:hover {
        transform: scale(1.2);
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const TextImage = styled.h3`
    padding: 0.2em;
    color: ${(props) => props.theme.text.primary};
    background-color: ${(props) => props.theme.background.paper};
    position: absolute;
    ${fontTypes.microBold}

    @media ${device.tablet} {
        ${fontTypes.subtitle2Mobile}
    }

    @media ${device.laptop} {
        ${fontTypes.subtitleDesktop}
    }
`;
