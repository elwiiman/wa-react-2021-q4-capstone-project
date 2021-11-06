import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

export const OverallContainer = styled.div`
    @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
    }
`;

export const ImageAndInfoWrapper = styled.div`
    display: flex;
`;

export const Name = styled.p`
    color: ${(props) => props.theme.text.primary};
    ${fontTypes.paragraphBold}

    @media ${device.tablet} {
        ${fontTypes.paragraphBold}
    }
`;

export const Price = styled.p`
    color: ${(props) => props.theme.text.hint};
    ${fontTypes.paragraphBold}

    @media ${device.tablet} {
        ${fontTypes.paragraphBold}
    }
`;

export const PriceAndNameContainer = styled.div`
    margin-bottom: 0.5em;
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin-top: 0;
    }
`;

export const RightContainer = styled.div`
    margin-left: 1em;
`;

export const SubTotalContainer = styled.div`
    color: ${(props) => props.theme.text.primary};
    margin-top: 0;
    @media ${device.tablet} {
        margin-top: 1em;
    }
`;

export const SubTotallabel = styled.p`
    color: ${(props) => props.theme.text.primary};
    ${fontTypes.micro}
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 5px;

    @media ${device.tablet} {
        width: 140px;
        height: 140px;
    }
`;

export const DeleteContainer = styled.div`
    ${fontTypes.micro}
    @media ${device.tablet} {
        ${fontTypes.paragraph}
    }
`;
