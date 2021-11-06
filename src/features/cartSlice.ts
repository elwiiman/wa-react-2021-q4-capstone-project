import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../config/app/store';
import { Cart, CartProduct } from '../types/cart';

const initialState: Cart = {
    products: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            //in order to substite same product and don't duplicate.
            const filtered = state.products.filter(
                (product) => product.id !== action.payload.id
            );
            //setting new state
            state.products = [...filtered, action.payload];
        },
        deleteFromCart: (state, action: PayloadAction<CartProduct>) => {
            //in order to substite same product and don't duplicate.
            const filtered = state.products.filter(
                (product) => product.id !== action.payload.id
            );
            //setting new state
            state.products = [...filtered];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;

///SELECTORS
export const selectTotalProductsInCart = (state: RootState) => {
    return state.cart.products.reduce((accum, product) => {
        return product.quantity + accum;
    }, 0);
};

export const selectTotalAmount = (state: RootState) => {
    return state.cart.products.reduce((accum, product) => {
        return product.quantity * product.data.price + accum;
    }, 0);
};
