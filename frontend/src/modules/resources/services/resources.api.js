import axios from 'axios';

const API_URL = 'http://localhost:5000/api/resources';

// Basic wrapper to include token
const getAuthHeaders = () => {
    // In a real app, retrieve from localStorage
    const token = localStorage.getItem('token') || '';
    return { Authorization: `Bearer ${token}` };
};

export const fetchResources = async (status = 'APPROVED') => {
    const res = await axios.get(`${API_URL}?status=${status}`);
    return res.data;
};

export const uploadResource = async (formData) => {
    const res = await axios.post(API_URL, formData, {
        headers: {
            ...getAuthHeaders(),
            'Content-Type': 'multipart/form-data',
        }
    });
    return res.data;
};
