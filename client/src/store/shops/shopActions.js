import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

export const fetchShops = createAsyncThunk(
    'shops/fetchShops',
    async (_, thunkAPI) => {
        try {
            const res = await api.get('/shop');
            return res.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response);
        }
    }
);
