import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { Link } from 'react-router-dom';
import CartIcon from '../Icons/Cart';

export const StyledDot = styled.div`
    position: absolute;
    top: -15px;
    left: 15px;
    height: 1rem;
    width: fit-content;
    padding: 0.35em;
    background-color: ${(props) => props.theme.background.secondary};
    border-radius: 30%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    ${fontTypes.microBold};
`;

export const StyledLink = styled(Link)`
    position: relative;

    &:hover {
        svg {
            transition: 0.45s;
            transform: scale(1.2);
            filter: brightness(1.5);
        }
    }
`;

export const StyledCartIcon = styled(CartIcon)`
    &:hover {
        transition: 0.5s;
        transform: scale(1.9);
        filter: brightness(1.3);
    }
`;
