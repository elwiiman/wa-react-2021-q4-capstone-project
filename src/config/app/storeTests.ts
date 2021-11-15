import {
    configureStore,
    combineReducers,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import cartSlice from '../../features/cartSlice';
import themeSlice from '../../features/themeSlice';
import { furnitureApi } from '../../services/api/apiSlice';

const rootReducer = combineReducers({
    // Add the generated reducer as a specific top-level slice
    [furnitureApi.reducerPath]: furnitureApi.reducer,
    cart: cartSlice,
    theme: themeSlice,
});

export const storeTest = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(furnitureApi.middleware),
    // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`

    devTools: true,
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(storeTest.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof storeTest;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
