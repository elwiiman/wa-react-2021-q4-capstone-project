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
            //find the  index where product is
            const index = state.products.findIndex(
                (product) => product.id === action.payload.id
            );

            //if index is found...  (-1 is equal to not found in the cart):
            if (index !== -1) {
                //removing product
                state.products.splice(index, 1);

                //adding new product in same index we removed before
                state.products.splice(index, 0, action.payload);

                //add the product to the tail of the array
            } else {
                state.products = [...state.products, action.payload];
            }
        },
        deleteFromCart: (state, action: PayloadAction<CartProduct>) => {
            //filter the array to delete product with the id dicted from de action payload
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
        return accum + product.quantity * product.data.price;
    }, 0);
};
