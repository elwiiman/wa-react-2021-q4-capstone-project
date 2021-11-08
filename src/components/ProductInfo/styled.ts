import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

const marginTop = 'margin-top:5px;';

export const Name = styled.p`
    color: ${(props) => props.theme.text.primary};

    ${fontTypes.subtitleMobile}
    @media ${device.tablet} {
        ${fontTypes.subtitleDesktop}
    }
`;

export const Price = styled.p`
    color: ${(props) => props.theme.text.secondary};
    ${marginTop}

    ${fontTypes.paragraphBold}
    @media ${device.tablet} {
        ${fontTypes.subtitleMobile}
    }
`;

export const ShortDescription = styled.p`
    color: ${(props) => props.theme.text.hint};
    ${marginTop}
`;

export const ExtraDetails = styled.div`
    margin-top: 1.25em;
`;

export const Sku = styled.p`
    color: ${(props) => props.theme.text.primary};
    ${fontTypes.micro}
    ${marginTop}
`;

export const CategoryInfo = styled.p`
    color: ${(props) => props.theme.text.primary};
    ${fontTypes.micro}
    ${marginTop}
`;
