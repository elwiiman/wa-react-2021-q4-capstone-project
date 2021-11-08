import React from 'react';
import { StyledSpinner } from './styled';

export interface SpinnerProps {
    widthAndHeight?: string;
}
const Spinner = ({ widthAndHeight }: SpinnerProps) => {
    return <StyledSpinner widthAndHeight={widthAndHeight} />;
};

export default Spinner;
