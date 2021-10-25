import styled from 'styled-components';
import { device } from '../../config/breakpoints';

export const StyledNav = styled.nav`
    z-index: 99;
    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme.background.main};
    padding: 1em;
    display: block;

    @media ${device.laptop} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const StyledForm = styled.form`
    width: 100%;
    margin-left: 0;
    margin-top: 0.25em;
    position: relative;

    & button {
        position: absolute;
        top: 1px;
        right: 1px;
    }

    @media ${device.laptop} {
        margin-left: 1em;
        margin-top: 0;
        width: 70%;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    @media ${device.laptop} {
        display: block;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    background: ${(props) => props.theme.background.main};
    width: 150px;
    height: 50px;
`;

export const CartContainer = styled.div`
    display: none;
    padding: 1em;

    & button {
        margin-right: 0.5em;
    }

    @media ${device.laptop} {
        display: flex;
    }
`;

export const CartContainerMobile = styled.div`
    display: flex;
    & button {
        margin-right: 0.5em;
    }

    @media ${device.laptop} {
        display: none;
    }
`;
