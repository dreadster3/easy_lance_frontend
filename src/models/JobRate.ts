export interface IJobRate {
    id: number;
    rate: number;
    threshold: number;
    job_rate_curve_id: number;
}

export class JobRate implements IJobRate {
    id!: number;
    rate!: number;
    threshold!: number;
    job_rate_curve_id!: number;

    constructor(data?: IJobRate) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }

    init(data: any) {
        if (data) {
            this.id = data['id'];
            this.rate = data['rate'];
            this.threshold = data['threshold'];
            this.job_rate_curve_id = data['job_rate_curve_id'];
        }
    }

    static fromJson(data: any): IJobRate {
        data = typeof data === 'object' ? data : {};

        let result = new JobRate();
        result.init(data);

        return result;
    }

    toJson() {
        const result: any = {
            id: this.id,
            rate: this.rate,
            threshold: this.threshold,
            job_rate_curve_id: this.job_rate_curve_id,
        };

        return result;
    }
}
