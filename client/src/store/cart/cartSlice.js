import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGoodToCart: (state, { payload }) => {
            let newCart = [...state.cart];
            const found = state.cart.find(({ _id }) => _id === payload._id);

            if (found) {
                newCart = newCart.map(item => {
                    return item._id === payload._id
                        ? {
                              ...item,
                              quantity: payload.quantity || item.quantity + 1
                          }
                        : item;
                });
            } else newCart.push({ ...payload, quantity: 1 });

            state.cart = newCart;
        },
        deleteGoodFromCart: (state, action) => {
            const newCart = state.cart.filter(
                ({ id }) => id !== action.payload.id
            );

            state.cart = newCart;
        },
        clearCart: state => {
            state.cart = [];
        }
    }
});

export const { addGoodToCart, clearCart, deleteGoodFromCart } =
    cartSlice.actions;

export default cartSlice.reducer;
