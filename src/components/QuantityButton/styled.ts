import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

export const StyledDivButtonContainer = styled.div`
    border: 1px solid ${(props) => props.theme.line.focus};
    display: flex;
    justify-content: space-between;
    width: 120px;
    min-width: 120px;
    height: 2.438rem;
    min-height: 2.438rem;
    overflow: hidden;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    margin-right: 0.5em;
    background-color: ${(props) => props.theme.background.paper};

    @media ${device.tablet} {
        height: 45px;
        min-height: 45px;
    }
`;

export const StyledButton = styled.button`
    background-color: ${(props) => props.theme.background.paper};
    display: flex;
    align-items: center;
    border: none;
    text-align: center;
    padding: 0;
    margin: 0 0.5em;
    font-size: 1em;
    min-width: 19px;
    cursor: pointer;
`;

export const StyledInput = styled.input`
    color: ${(props) => props.theme.text.primary};
    background-color: ${(props) => props.theme.background.paper};
    border: none;
    padding: 0;
    width: 32px;
    min-width: 30px;
    text-align: center;
    outline: none;
    ${fontTypes.subtitle2Desktop}
`;
