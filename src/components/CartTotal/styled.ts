import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';

export const TotalContainer = styled.section`
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.text.primary};
`;

export const TotalLabel = styled.div`
    ${fontTypes.subtitle2Mobile}
`;

export const TotalQuantity = styled.div`
    ${fontTypes.paragraphBold}
`;
