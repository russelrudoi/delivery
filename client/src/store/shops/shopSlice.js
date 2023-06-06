import { createSlice } from '@reduxjs/toolkit';
import { fetchShops } from './shopActions';

const initialState = { shops: [], loading: false, error: null };

export const shopSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchShops.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchShops.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.shops = payload;
        });
        builder.addCase(fetchShops.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload.data;
        });
    }
});

export default shopSlice.reducer;
