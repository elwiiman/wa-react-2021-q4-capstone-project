import styled from 'styled-components';

export interface IButton {
    enablePaperBackground?: boolean;
}

export const StyledButton = styled.button<IButton>`
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.text.primary};
    background-color: ${(props) =>
        props.enablePaperBackground ? props.theme.background.paper : ''};
`;
