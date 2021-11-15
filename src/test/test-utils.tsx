import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { storeTest } from '../config/app/storeTests';
import type { AppStore, RootState } from '../config/app/storeTests';
import type { PreloadedState } from '@reduxjs/toolkit';
import ThemeProvider from '../context/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
}

function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = storeTest,
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return (
            <MemoryRouter>
                <Provider store={store}>
                    <ThemeProvider>{children}</ThemeProvider>
                </Provider>
            </MemoryRouter>
        );
    }
    return {
        store,
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    };
}

export { renderWithProviders };
