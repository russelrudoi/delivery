import api from '../api/axios';

export const getShops = async () => {
    const { data } = await api.get('/shop');
    return data;
};
