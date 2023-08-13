import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Job } from '../models/Job';
import { IJobRate } from '../models/JobRate';

export class JobRateCurveClient {
    private _axiosInstance: AxiosInstance;

    constructor(axiosInstance?: AxiosInstance) {
        this._axiosInstance = axiosInstance ?? axios.create();
    }

    async get_rates_async(id: number): Promise<IJobRate[]> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: `jobratecurves/${id}/rates`,
        };

        const response = await this._axiosInstance.request(options);

        return response.data.map((item: any) => Job.fromJson(item));
    }
}
