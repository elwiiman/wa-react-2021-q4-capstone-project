import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../config/theme_config';
import { useAppSelector } from '../../config/app/hooks';

interface IThemeProvider {
    children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {
    const dark = useAppSelector((state) => state.theme.dark);

    return (
        <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>
            {children}
        </StyledThemeProvider>
    );
};

export default ThemeProvider;
