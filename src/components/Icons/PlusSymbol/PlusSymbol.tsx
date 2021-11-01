import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const PlusSymbol = (props: any) => {
    const { inStock, ...rest } = props;
    const themeContext = useContext(ThemeContext);
    return (
        <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            data-name={'plus'}
            {...rest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9258 8.5258C15.9093 8.91787 15.578 9.22227 15.186 9.20571L8.71564 9.16493L8.71564 15.4625C8.7322 15.8546 8.4278 16.1858 8.03573 16.2024C7.64367 16.2189 7.31242 15.9145 7.29585 15.5225L7.29077 9.10474L0.872996 9.16494C0.480933 9.14837 0.176529 8.48582 0.193091 8.09375C0.209653 8.03299 0.54091 7.72859 0.932973 7.74515L7.23058 7.67988L7.23565 1.34355C7.21909 0.951491 7.5235 0.620235 7.91556 0.603673C8.30762 0.587111 8.63888 0.891515 8.65544 1.28358L8.65545 7.74007L15.2459 7.78592C15.638 7.80248 15.9424 8.13374 15.9258 8.5258Z"
                fill={
                    inStock
                        ? `${themeContext.text.primary}`
                        : `${themeContext.text.disabled}`
                }
                data-name={'plus'}
            />
        </svg>
    );
};

export default PlusSymbol;
