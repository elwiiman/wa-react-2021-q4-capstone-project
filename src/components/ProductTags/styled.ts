import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';

export const PillContainer = styled.ul`
    display: flex;
`;

export const Pill = styled.li`
    border-radius: 8px;
    background-color: ${(props) => props.theme.background.main};
    text-align: center;
    width: fit-content;
    padding: 0.4em;
    margin-right: 0.3em;

    ${fontTypes.micro}
`;
