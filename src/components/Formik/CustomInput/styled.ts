import styled from 'styled-components';
import { fontTypes } from '../../../config/baseFont';

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
