import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

export const FiltersTitle = styled.h4`
    color: ${(props) => props.theme.text.primary};
    ${fontTypes.micro}
    @media ${device.tablet} {
        ${fontTypes.paragraph}
    }
`;

export const CheckboxContainer = styled.div`
    margin-top: 1em;
    margin-bottom: 1em;
`;
