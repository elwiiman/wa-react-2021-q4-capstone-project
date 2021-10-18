import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

interface IStyledTitle {
    textColorType?: 'primary' | 'secondary';
    center?: boolean;
}

export const StyledTitle = styled.h1<IStyledTitle>`
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    color: ${(props) => {
        const textColorType = props.textColorType
            ? props.textColorType
            : 'primary';
        return props.theme.text[`${textColorType}`];
    }};

    ${fontTypes.titleMobile}
    @media ${device.tablet} {
        ${fontTypes.titleDesktop}
    }
    text-align: ${(props) => (props.center ? 'center' : '')};
`;
