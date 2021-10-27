import {
    configureStore,
    combineReducers,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { furnitureApi } from '../../services/api/apiSlice';

const rootReducer = combineReducers({
    // Add the generated reducer as a specific top-level slice
    [furnitureApi.reducerPath]: furnitureApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
            getDefaultMiddleware().concat(furnitureApi.middleware),
        preloadedState,
    });
};

export const store = setupStore();

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(setupStore().dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
