import axios from 'axios';

export const fetchMeals = async () => {
    const { data } = await axios.get('http://localhost:5000/api/type');
    return data;
};
