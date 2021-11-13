import styled from 'styled-components';
import { fontTypes } from '../../../config/baseFont';

interface StyledTextAreaProps {
    /**
     * Radius shoud be expressed with a number and units. Example: 5px, 1em, etc.
     */
    radius?: string;
    /**
     * If an error exists this should be true
     */
    error?: boolean;
}

export const ReusableFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5em;
`;

export const Label = styled.label`
    color: ${(props) => props.theme.text.primary};
    margin-bottom: 0.5em;
    ${fontTypes.paragraph}
`;

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
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
    width: 100%;
    padding: 1em;
    outline: none;
    background-color: ${(props) => props.theme.input.background};
    resize: none;
    height: 70px;
    ${fontTypes.paragraph};
`;

export const ErrorLabel = styled.div`
    color: ${(props) => props.theme.error.main};
    margin-bottom: 0.5em;
    margin: 0.75em 0 0;
    ${fontTypes.caption}
`;

export const ExtraMessage = styled.div`
    color: ${(props) => props.theme.text.hint};
    margin: 0.75em 0 0;
    ${fontTypes.caption}
`;

export const WarnMessage = styled.div`
    color: ${(props) => props.theme.warn.main};
    margin-bottom: 0.5em;
    margin: 0.75em 0 0;
    ${fontTypes.caption}
`;

export const ChartsContainer = styled.div`
    text-align: end;
    margin: 0.75em 0 0;
`;

export const ChartsContainerFixedWidth = styled(ChartsContainer)`
    width: 33.33%;
`;

interface ChartsParagraphProps {
    status: 'warning' | 'danger' | undefined;
}

export const ChartsParagraph = styled.p<ChartsParagraphProps>`
    ${fontTypes.caption}
    color: ${(props) => {
        let color = '';
        switch (props.status) {
            case 'warning':
                color = props.theme.warn.main;
                break;

            case 'danger':
                color = props.theme.error.main;
                break;

            default:
                color = props.theme.text.hint;
                break;
        }

        return color;
    }};
`;

export const ErrorsAndMessagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ErrorContainer = styled.div`
    width: 66.67%;
`;
