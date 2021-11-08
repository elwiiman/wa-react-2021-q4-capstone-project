import styled from 'styled-components';
import { fontTypes } from '../../../config/baseFont';

export interface Iinput {
    /**
     * Radius shoud be expressed with a number and units. Example: 5px, 1em, etc.
     */
    radius?: string;
    /**
     * If an error exists this should be true
     */
    error?: boolean;
}

export default styled.input<Iinput>`
    border-radius: ${(props) => (props.radius ? props.radius : '5px')};
    color: ${(props) => props.theme.input.text};
    border: 1px solid
        ${(props) =>
            props.error ? props.theme.line.error : props.theme.line.primary};
    &:focus {
        border: 1px solid
            ${(props) =>
                props.error ? props.theme.line.error : props.theme.line.focus};
    }
    height: 43px;
    width: 100%;
    padding: 1em;
    outline: none;
    background-color: ${(props) => props.theme.input.background};
    ${fontTypes.paragraph};
`;
