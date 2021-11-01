import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';

interface TableData {
    bold?: boolean;
}

export const StyledTable = styled.table`
    border-collapse: separate;
    border: 1px solid ${(props) => props.theme.line.primary};
    border-radius: 6px;
    -moz-border-radius: 6px;
    color: ${(props) => props.theme.text.primary};
`;

export const StyledTh = styled.th`
    border-top: 1px solid ${(props) => props.theme.line.primary};
    border-right: 1px solid ${(props) => props.theme.line.primary};
    padding: 0.5em;
    text-align: left;
`;

export const StyledTr = styled.tr``;

export const StyledTd = styled.td<TableData>`
    border-top: 1px solid ${(props) => props.theme.line.primary};
    padding: 0.5em;
`;
