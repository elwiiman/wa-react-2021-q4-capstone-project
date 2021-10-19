import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';

export interface IStyledButton {
    color?: 'primary' | 'secondary' | 'tertiary';
}

export const StyledButton = styled.button<IStyledButton>`
    width: 100%;
    padding: 0.8em;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    transition: ease 0.3s;
    height: 3.438rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    ${(props) =>
        props.disabled ? ' opacity: 0.5; cursor: not-allowed;' : null}

    ${(props) => {
        const color = props.color ? props.color : 'primary';

        return `background: ${props['theme'][color]['main']};  
               color: ${props.theme[color]['contrastText']};
               border: 2px solid ${props.theme[color]['contrastText']}`;
    }};

    ${fontTypes.paragraphBold}

    /* On hover */
    :hover:not(:disabled) {
        cursor: pointer;
        &::before {
            opacity: 0.5;
        }
    }

    &::before {
        opacity: 0;
        transition: 0.3s ease;
        display: block;
        content: '';
        position: absolute;
        background-color: rgba(22, 22, 22, 0.1);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    /*On press*/
    &::after {
        display: none;
        content: '';
        position: absolute;
        border-radius: 50%;
        background-color: rgba(22, 22, 22, 0.15);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
        /* Center the ripple */
        top: 50%;
        left: 50%;
        animation: ripple 1s;
        opacity: 0;
    }
    &:focus:not(:active)::after {
        display: block;
    }

    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(10);
        }
    }
`;
