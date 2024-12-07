import axios from 'axios';

const axiosInstance = axios.create({
    //TODO
    baseURL: 'http://127.0.0.1:8080',
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return;
    },
);

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response && error.response.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
            }

            return Promise.reject(error);
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
