import { JobClient } from './JobClient';
import axios from 'axios';
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

const authClient = new AuthClient(axiosInstance);
const jobClient = new JobClient(axiosInstance);

export { jobClient };
export { authClient };
