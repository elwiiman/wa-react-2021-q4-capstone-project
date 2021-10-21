import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Close = () => {
    const themeContext = useContext(ThemeContext);
    const {
        text: { primary: color },
    } = themeContext;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={256}
            height={256}
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
                        d="M 6 90 c -1.536 0 -3.071 -0.586 -4.243 -1.758 c -2.343 -2.343 -2.343 -6.142 0 -8.484 l 78 -78 c 2.342 -2.343 6.143 -2.343 8.484 0 c 2.344 2.343 2.344 6.142 0 8.485 l -78 78 C 9.071 89.414 7.536 90 6 90 z"
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
                        d="M 84 90 c -1.535 0 -3.071 -0.586 -4.242 -1.758 l -78 -78 c -2.343 -2.343 -2.343 -6.142 0 -8.485 c 2.343 -2.343 6.143 -2.343 8.485 0 l 78 78 c 2.344 2.343 2.344 6.142 0 8.484 C 87.071 89.414 85.535 90 84 90 z"
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

export default Close;
