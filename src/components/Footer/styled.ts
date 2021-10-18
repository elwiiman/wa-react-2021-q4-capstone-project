import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';

export const StyledFooter = styled.footer`
    background-color: ${(props) => props.theme.background.secondary};
    color: ${(props) => props.theme.text.secondary};
    text-align: center;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;

    ${fontTypes.caption}
`;
