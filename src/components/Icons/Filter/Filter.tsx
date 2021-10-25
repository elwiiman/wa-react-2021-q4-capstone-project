import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface FilterProps {
    width?: number;
    height?: number;
}

const Filter = ({ width = 256, height = 256 }: FilterProps) => {
    const themeContext = useContext(ThemeContext);
    const {
        text: { primary: color },
    } = themeContext;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            viewBox="0 0 256 256"
            xmlSpace="preserve"
        >
            <desc>{'Created with Fabric.js 1.7.22'}</desc>
            <defs />
            <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                <g
                    style={{
                        stroke: 'none',
                        strokeWidth: 0,
                        strokeDasharray: 'none',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        strokeMiterlimit: 10,
                        fill: 'none',
                        fillRule: 'nonzero',
                        opacity: 1,
                    }}
                    transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                >
                    <path
                        d="M 87.271 58.489 H 55.952 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 31.318 c 0.828 0 1.5 0.672 1.5 1.5 S 88.099 58.489 87.271 58.489 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 48.42 66.021 c -4.98 0 -9.033 -4.052 -9.033 -9.032 s 4.052 -9.033 9.033 -9.033 s 9.032 4.053 9.032 9.033 S 53.4 66.021 48.42 66.021 z M 48.42 50.956 c -3.327 0 -6.033 2.706 -6.033 6.033 c 0 3.326 2.706 6.032 6.033 6.032 c 3.326 0 6.032 -2.706 6.032 -6.032 C 54.452 53.662 51.746 50.956 48.42 50.956 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 40.887 58.489 H 2.73 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 38.157 c 0.829 0 1.5 0.672 1.5 1.5 S 41.716 58.489 40.887 58.489 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 87.271 34.511 H 27.416 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 59.854 c 0.828 0 1.5 0.671 1.5 1.5 S 88.099 34.511 87.271 34.511 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 19.883 42.043 c -4.98 0 -9.033 -4.052 -9.033 -9.033 s 4.052 -9.033 9.033 -9.033 s 9.033 4.052 9.033 9.033 S 24.864 42.043 19.883 42.043 z M 19.883 26.978 c -3.327 0 -6.033 2.706 -6.033 6.033 s 2.706 6.033 6.033 6.033 s 6.033 -2.706 6.033 -6.033 S 23.21 26.978 19.883 26.978 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 12.351 34.511 H 2.73 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 9.621 c 0.829 0 1.5 0.671 1.5 1.5 S 13.179 34.511 12.351 34.511 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 58.088 10.533 H 2.73 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 55.358 c 0.828 0 1.5 0.671 1.5 1.5 S 58.916 10.533 58.088 10.533 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 65.62 18.065 c -4.98 0 -9.032 -4.052 -9.032 -9.033 S 60.64 0 65.62 0 s 9.033 4.052 9.033 9.033 S 70.601 18.065 65.62 18.065 z M 65.62 3 c -3.326 0 -6.032 2.706 -6.032 6.033 s 2.706 6.033 6.032 6.033 c 3.327 0 6.033 -2.706 6.033 -6.033 S 68.947 3 65.62 3 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 87.271 10.533 H 73.153 c -0.828 0 -1.5 -0.671 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 14.117 c 0.828 0 1.5 0.671 1.5 1.5 S 88.099 10.533 87.271 10.533 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 87.271 82.468 H 27.416 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 59.854 c 0.828 0 1.5 0.672 1.5 1.5 S 88.099 82.468 87.271 82.468 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 19.883 90 c -4.98 0 -9.033 -4.052 -9.033 -9.032 s 4.052 -9.033 9.033 -9.033 s 9.033 4.053 9.033 9.033 S 24.864 90 19.883 90 z M 19.883 74.935 c -3.327 0 -6.033 2.706 -6.033 6.033 c 0 3.326 2.706 6.032 6.033 6.032 s 6.033 -2.706 6.033 -6.032 C 25.916 77.641 23.21 74.935 19.883 74.935 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                    <path
                        d="M 12.351 82.468 H 2.73 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 9.621 c 0.829 0 1.5 0.672 1.5 1.5 S 13.179 82.468 12.351 82.468 z"
                        style={{
                            stroke: 'none',
                            strokeWidth: 1,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: color,
                            fillRule: 'nonzero',
                            opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                    />
                </g>
            </g>
        </svg>
    );
};

export default Filter;
