import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

export const OveralContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.background.tertiary};
    width: 135px;
    border-radius: 5px;

    @media ${device.tablet} {
        width: 230px;
    }

    @media ${device.laptop} {
        width: 300px;
    }
`;
export const FeaturedProductImageContainer = styled.div`
    border-radius: 5px;
    & img {
        width: 100%;
        border: 1px solid ${(props) => props.theme.line.focus};
        border-radius: 5px 5px 0 0;
    }
`;

export const InfoContainer = styled.div`
    padding: 0.5em;
`;
export const ItemInfo = styled.p`
    color: ${(props) => props.theme.text.secondary};
    margin-top: 0.075em;
    ${fontTypes.microBold}

    @media ${device.tablet} {
        ${fontTypes.captionBold}
    }
`;

export const ItemInfoName = styled(ItemInfo)`
    color: ${(props) => props.theme.text.primary};
    margin-top: 0.385em;
    height: 2.5em;
    ${fontTypes.captionBold}

    @media ${device.tablet} {
        ${fontTypes.paragraphBold}
    }
`;

export const Price = styled(ItemInfo)`
    margin-top: 0.385em;
    ${fontTypes.caption}

    @media ${device.tablet} {
        ${fontTypes.paragraph}
    }
`;
