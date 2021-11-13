import {
    configureStore,
    combineReducers,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartSlice from '../../features/cartSlice';
import themeSlice from '../../features/themeSlice';
import { furnitureApi } from '../../services/api/apiSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['furnitureApi'],
};

const rootReducer = combineReducers({
    // Add the generated reducer as a specific top-level slice
    [furnitureApi.reducerPath]: furnitureApi.reducer,
    cart: cartSlice,
    theme: themeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER,
                    ],
                },
                // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
            }).concat(furnitureApi.middleware),

        preloadedState,
        devTools: true,
    });
};

export const store = setupStore();
export const persistor = persistStore(store);

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
