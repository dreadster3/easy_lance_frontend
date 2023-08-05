import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IJob, Job } from '../models/Job';

export class JobClient {
    private _axiosInstance: AxiosInstance;

    constructor(axiosInstance?: AxiosInstance) {
        this._axiosInstance = axiosInstance ?? axios.create();
    }

    async get_jobs_async(): Promise<IJob[]> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'jobs',
        };

        const response = await this._axiosInstance.request(options);

        return response.data.map((item: any) => Job.fromJson(item));
    }

    async get_job_async(id: number): Promise<IJob> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: `jobs/${id}`,
        };

        const response = await this._axiosInstance.request(options);

        return Job.fromJson(response.data);
    }
}
