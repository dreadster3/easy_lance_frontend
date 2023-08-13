import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { CategoryTotal, ICategoryTotal } from '../models/CategoryTotal';
import { Job } from '../models/Job';
import { IJobRate } from '../models/JobRate';

export class SummaryClient {
    private _axiosInstance: AxiosInstance;

    constructor(axiosInstance?: AxiosInstance) {
        this._axiosInstance = axiosInstance ?? axios.create();
    }

    async get_category_total_async(): Promise<ICategoryTotal[]> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: `summary/category`,
        };

        const response = await this._axiosInstance.request(options);

        return response.data.map((item: any) => CategoryTotal.fromJson(item));
    }
}
