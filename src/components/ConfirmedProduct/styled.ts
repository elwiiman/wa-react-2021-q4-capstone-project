import styled from 'styled-components';
import { device } from '../../config/breakpoints';
import { fontTypes } from '../../config/baseFont';

export const ConfirmedProductContainer = styled.div`
    display: flex;
    padding: 1em;
    background-color: ${(props) => props.theme.background.main};

    @media ${device.tablet} {
        max-width: 60%;
    }
`;

export const ProductImageContainer = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 5px;

    @media ${device.tablet} {
        width: 140px;
        height: 140px;
    }
`;

export const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 5px;

    @media ${device.tablet} {
        width: 140px;
        height: 140px;
    }
`;

export const OveralInfoContainer = styled.div`
    display: block;
    width: 100%;
    @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1em;
`;

export const ProductAndInfoContainer = styled.div`
    display: flex;
`;

export const PriceInfoContainer = styled.div`
    background-color: ${(props) => props.theme.background.secondary};
    margin-left: 1em;
    padding: 0.5em;
    border-radius: 5px;
    margin-top: 1em;
    height: max-content;
    min-width: 160px;
    @media ${device.tablet} {
        margin-top: 0;
    }
`;

export const Name = styled.p`
    color: ${(props) => props.theme.text.primary};
    ${fontTypes.paragraphBold}
`;

export const Price = styled.p`
    color: ${(props) => props.theme.text.hint};
    ${fontTypes.paragraphBold}
`;

export const Quantity = styled.p`
    color: ${(props) => props.theme.text.secondary};

    ${fontTypes.micro}
    & span {
        ${fontTypes.paragraphBold}
        display: block;
        @media ${device.tablet} {
            display: inline;
        }
    }
`;

export const Subtotal = styled(Quantity)`
    color: ${(props) => props.theme.text.secondary};
`;
