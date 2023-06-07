import { createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../../http/axios';
import { getShops } from '../../http/shopApi';

export const fetchShops = createAsyncThunk(
    'shops/fetchShops',
    async (_, thunkAPI) => {
        try {
            const res = await getShops();

            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
    }
);
