import api from '../api/axios';

export const fetchUser = async data => {
    const res = await api.get('/user', { params: data });

    return res.data;
};
