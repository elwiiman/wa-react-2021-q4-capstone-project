import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const LockCard = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <svg
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
        >
            <style type="text/css">
                {`\n\t.st0{fill:none;stroke:${themeContext.text.primary};stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st1{fill:none;stroke:${themeContext.text.primary};stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}\n`}
            </style>
            <line className="st0" x1={1} y1={12} x2={27} y2={12} />
            <line className="st0" x1={5} y1={21} x2={7} y2={21} />
            <line className="st0" x1={5} y1={18} x2={10} y2={18} />
            <path
                className="st0"
                d="M29,31h-8c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v4C31,30.1,30.1,31,29,31z"
            />
            <path
                className="st0"
                d="M29,23h-8v-4c0-2.2,1.8-4,4-4h0c2.2,0,4,1.8,4,4V23z"
            />
            <line className="st0" x1={25} y1={26} x2={25} y2={28} />
            <path
                className="st0"
                d="M19,25H3c-1.1,0-2-0.9-2-2V10c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v5.5"
            />
            <path
                className="st0"
                d="M21.3,17.5c-0.2-0.2-0.5-0.3-0.8-0.4C20.3,17,20.2,17,20,17c-0.6,0-1.1,0.3-1.5,0.7C18.1,17.3,17.6,17,17,17 c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c0.6,0,1.1-0.3,1.5-0.7c0.4,0.4,0.9,0.7,1.5,0.7c0.4,0,0.7-0.1,1-0.3"
            />
        </svg>
    );
};

export default LockCard;
