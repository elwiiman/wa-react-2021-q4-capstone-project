import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const MinusSymbol = (props: any) => {
    const { inStock, ...rest } = props;
    const themeContext = useContext(ThemeContext);

    return (
        <svg
            width={16}
            height={3}
            viewBox="0 0 16 3"
            fill="none"
            data-name={'minus'}
            {...rest}
        >
            <path
                d="M15.9259 1.52609C15.9093 1.91816 15.5781 2.22256 15.186 2.206L8.71568 2.16522L0.87304 2.16522C0.480977 2.14866 0.176573 1.48611 0.193135 1.09404C0.209697 1.03328 0.540953 0.728875 0.933016 0.745437L8.65549 0.74036L15.246 0.78621C15.638 0.802773 15.9424 1.13403 15.9259 1.52609Z"
                fill={
                    inStock
                        ? `${themeContext.text.primary}`
                        : `${themeContext.text.disabled}`
                }
                data-name={'minus'}
            />
        </svg>
    );
};

export default MinusSymbol;
