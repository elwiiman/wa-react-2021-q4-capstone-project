import styled from 'styled-components';
import { device } from '../../config/breakpoints';
import { fontTypes } from '../../config/baseFont';

export const LeftSideContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const RightSideContainer = styled.div``;

export const StyledSecureNav = styled.nav`
    background-color: ${(props) => props.theme.background.main};
    color: ${(props) => props.theme.text.primary};
    height: 60px;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${fontTypes.paragraphBold}

    @media ${device.tablet} {
        ${fontTypes.titleMobile}
    }
`;

export const IconContainer = styled.div`
    margin-top: 0.5em;
    margin-left: 1em;
    width: 30px;
`;
