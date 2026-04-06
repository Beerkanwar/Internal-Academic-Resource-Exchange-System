import axios from 'axios';

const API_URL = 'http://localhost:5000/api/verification';

const getAuthHeaders = () => {
    const token = localStorage.getItem('token') || '';
    return { Authorization: `Bearer ${token}` };
};

export const fetchPending = async () => {
    const res = await axios.get(`${API_URL}/pending`, { headers: getAuthHeaders() });
    return res.data;
};

export const approveResource = async (id) => {
    const res = await axios.post(`${API_URL}/approve/${id}`, {}, { headers: getAuthHeaders() });
    return res.data;
};

export const rejectResource = async (id) => {
    const res = await axios.post(`${API_URL}/reject/${id}`, {}, { headers: getAuthHeaders() });
    return res.data;
};
