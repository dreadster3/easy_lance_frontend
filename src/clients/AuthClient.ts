import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class AuthClient {
    private _axiosInstance: AxiosInstance;

    constructor(axiosInstance?: AxiosInstance) {
        this._axiosInstance = axiosInstance ?? axios.create();
    }

    async login_async(username: string, password: string): Promise<string> {
        const options: AxiosRequestConfig = {
            method: 'POST',
            url: 'users/login',
            data: {
                username,
                password,
            },
        };

        const response = await this._axiosInstance.request(options);

        return response.data.token;
    }

    async register_async(
        username: string,
        email: string,
        password: string,
    ): Promise<void> {
        const options: AxiosRequestConfig = {
            method: 'POST',
            url: 'users/register',
            data: {
                username,
                email,
                password,
            },
        };

        await this._axiosInstance.request(options);
    }
}
