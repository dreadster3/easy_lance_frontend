import { JobClient } from './JobClient';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthClient } from './AuthClient';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {},
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers['Authorization'] =
            'Bearer ' + localStorage.getItem('token');
    }

    return config;
});

axiosInstance.interceptors.response.use(null, async (error) => {
    const originalConfig = error.config;
    const url = originalConfig.url;

    if (url === 'users/refresh' && error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
    } else if (error.response.status === 401) {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'users/refresh',
            withCredentials: true,
        };

        try {
            const response = await axiosInstance.request(options);

            localStorage.setItem('token', response.data.access_token);
            originalConfig._retry = true;
        } catch (error) {
            console.error(error);
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
    }

    return Promise.reject(error);
});

const authClient = new AuthClient(axiosInstance);
const jobClient = new JobClient(axiosInstance);

export { jobClient };
export { authClient };
