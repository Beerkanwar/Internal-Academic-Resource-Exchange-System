import axios from 'axios';

const API_URL = 'http://localhost:5000/api/search';

export const performSearch = async (query) => {
    const res = await axios.get(`${API_URL}?q=${encodeURIComponent(query)}`);
    return res.data;
};
