import styled from 'styled-components';
export interface StyledSpinnerProps {
    widthAndHeight?: string;
}

export const StyledSpinner = styled.div<StyledSpinnerProps>`
    position: relative;
    margin: 0 auto;
    border: 4px solid ${(props) => props.theme.spinner.back};
    border-radius: 50%;
    border-top: 4px solid ${(props) => props.theme.spinner.main};
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 1s linear infinite;

    ${(props) =>
        props.widthAndHeight
            ? `width: ${props.widthAndHeight}; height: ${props.widthAndHeight};`
            : 'width: 30px; height: 30px'};

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
