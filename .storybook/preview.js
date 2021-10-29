import { GlobalStyles } from '../src/config/global.styles';
import { ThemeProvider } from 'styled-components';
import { withThemes } from '@react-theming/storybook-addon';
import { addDecorator } from '@storybook/react';
import { lightTheme, darkTheme } from '../src/config/theme_config';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../src/config/app/store';
import { Provider } from 'react-redux';

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [lightTheme, darkTheme]));

// Global decorator to apply the styles to all stories
export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <Provider store={store}>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </Provider>
        </>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
