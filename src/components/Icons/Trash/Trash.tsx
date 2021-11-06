import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

interface TrashProps {
    widthAndHeight?: number;
}

const Trash = ({ widthAndHeight = 41.336 }: TrashProps) => {
    const themeContext = useContext(ThemeContext);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${widthAndHeight}`}
            height={`${widthAndHeight}`}
            x="0"
            y="0"
            enableBackground="new 0 0 0 0"
            version="1.1"
            viewBox="0 0 41.336 41.336"
            xmlSpace="preserve"
        >
            <path
                d="M36.335 5.668h-8.167V1.5a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5v4.168H5.001a2 2 0 000 4h2.001v29.168a2.5 2.5 0 002.5 2.5h22.332a2.5 2.5 0 002.5-2.5V9.668h2.001a2 2 0 000-4zM14.168 35.67a1.5 1.5 0 01-3 0v-21a1.5 1.5 0 013 0v21zm8 0a1.5 1.5 0 01-3 0v-21a1.5 1.5 0 013 0v21zm3-30.002h-9V3h9v2.668zm5 30.002a1.5 1.5 0 01-3 0v-21a1.5 1.5 0 013 0v21z"
                fill={themeContext.text.primary}
            ></path>
        </svg>
    );
};

export default Trash;
