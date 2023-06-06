import { combineReducers, configureStore } from '@reduxjs/toolkit';
import shopReducer from './shops/shopSlice';
import cartReducer from './cart/cartSlice';

const rootReducer = combineReducers({
    shopReducer,
    cartReducer
});

export const store = configureStore({
    reducer: rootReducer
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: ['shops/fetchShops/rejected'],
    //         }
    //     })
});
