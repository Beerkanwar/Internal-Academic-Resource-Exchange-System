import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admin';

const getAuthHeaders = () => {
    const token = localStorage.getItem('token') || '';
    return { Authorization: `Bearer ${token}` };
};

export const fetchUsers = async () => {
    const res = await axios.get(`${API_URL}/users`, { headers: getAuthHeaders() });
    return res.data;
};

export const deleteUser = async (id) => {
    const res = await axios.delete(`${API_URL}/users/${id}`, { headers: getAuthHeaders() });
    return res.data;
};
