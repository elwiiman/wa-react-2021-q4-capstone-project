import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';

export interface LabelContainerProps {
    fontType: 'paragraph' | 'caption';
    disabled: boolean;
}

export const StyledCheckboxInput = styled.input.attrs((props) => ({
    cursor: props.disabled ? 'not-allowed' : 'pointer',
}))``;

export const Checkmark = styled.span`
    border-radius: 5px;
    position: absolute;
    top: 1px;
    left: 0px;
    height: 1em;
    width: 1em;
    border: 1.5px solid ${(props) => props.theme.line.focus};
    &::after {
        content: '';
        position: absolute;
        display: none;
    }
    ${fontTypes.paragraph}
`;

export const LabelContainer = styled.label<LabelContainerProps>`
    color: ${(props) => props.theme.text.primary};
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${(props) => {
        let fontType = '';
        switch (props.fontType) {
            case 'paragraph':
                fontType = fontTypes.paragraph;
                break;

            case 'caption':
                fontType = fontTypes.caption;
                break;

            default:
                fontType = '';
                break;
        }

        return fontType;
    }}

    /* Hide the browser's default checkbox */
    & ${StyledCheckboxInput} {
        position: relative;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    & ${StyledCheckboxInput}:checked ~ ${Checkmark} {
        background-color: ${(props) => props.theme.background.secondary};
        border: 1px solid ${(props) => props.theme.background.secondary};
    }

    & ${StyledCheckboxInput}:checked ~ ${Checkmark}:after {
        display: block;
    }

    & ${Checkmark}:after {
        position: absolute;
        left: 4.5px;
        top: 1px;
        width: 3px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        border-radius: 71px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;
