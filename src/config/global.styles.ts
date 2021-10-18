import { createGlobalStyle } from 'styled-components';
import './fonts/styles.css';

export const GlobalStyles = createGlobalStyle`

* {
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
     margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
}

ol,
ul {
    list-style: none;
}

button {
    outline: none;
}

a,
a:hover,
a:active,
a:visited,
a:focus {
    text-decoration: none;
}
`;
