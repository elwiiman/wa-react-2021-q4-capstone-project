import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../config/theme_config';

interface IThemeProvider {
    children: ReactNode;
}

export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
});

const ThemeProvider = ({ children }: IThemeProvider) => {
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        setDark(!dark);
    };

    return (
        <ThemeContext.Provider
            value={{
                isDarkTheme: dark,
                toggleTheme,
            }}
        >
            <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
