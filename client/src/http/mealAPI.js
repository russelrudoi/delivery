import axios from 'axios';

export const fetchMeals = async () => {
    const { data } = await axios.get('api/type');
    return data;
};
