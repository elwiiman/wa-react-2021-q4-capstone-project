import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';

interface ArrowProps {
    side: 'left' | 'right';
    disabled?: boolean;
}

interface PaginatorItemProps {
    selected?: boolean;
    dots?: boolean;
    disabled?: boolean;
    isForArrow?: boolean;
}

export const PaginatorContainer = styled.ul`
    display: flex;
`;

export const PaginatorItem = styled.li<PaginatorItemProps>`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        cursor: pointer;
        ${(props) =>
            props.dots || props.disabled
                ? 'background-color: transparent;cursor: default;'
                : ''}
    }

    ${(props) =>
        props.selected ? 'background-color: rgba(0, 0, 0, 0.08);' : ''}

    ${(props) =>
        props.disabled
            ? 'pointer-events: none; background-color: transparent; cursor: default'
            : ''}

    ${fontTypes.paragraph}
`;

export const Arrow = styled.div<ArrowProps>`
    &::before {
        position: relative;
        /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
        content: '';
        /* By using an em scale, the arrows will size with the font */
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);

        ${(props) =>
            props.disabled
                ? `border-right: 0.12em solid rgba(0, 0, 0, 0.43);
                   border-top: 0.12em solid rgba(0, 0, 0, 0.43);`
                : ''}
    }

    ${(props) => {
        switch (props.side) {
            case 'left':
                return ' transform: rotate(-135deg) translate(-50%);';
            case 'right':
                return 'transform: rotate(45deg);';

            default:
                break;
        }
    }}
`;
