import { GlobalStyles } from '../src/config/global.styles';
import { ThemeProvider } from 'styled-components';
import { withThemes } from '@react-theming/storybook-addon';
import { addDecorator } from '@storybook/react';
import { lightTheme, darkTheme } from '../src/config/theme_config';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../src/config/app/store';
import { Provider } from 'react-redux';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css';

// swiper core styles
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

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
