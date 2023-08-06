export interface IJob {
    id: number;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    job_rate_curve_id: number;
    job_type_id: number;
}

export class Job implements IJob {
    id!: number;
    name!: string;
    description!: string;
    start_date!: Date;
    end_date!: Date;
    job_rate_curve_id!: number;
    job_type_id!: number;

    constructor(data?: IJob) {
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
            this.name = data['name'];
            this.description = data['description'];
            this.start_date = new Date(data['start_date'] * 1000);
            this.end_date = new Date(data['end_date'] * 1000);
            this.job_rate_curve_id = data['job_rate_curve_id'];
            this.job_type_id = data['job_type_id'];
        }
    }

    static fromJson(data: any): IJob {
        data = typeof data === 'object' ? data : {};

        let result = new Job();
        result.init(data);

        return result;
    }

    toJson() {
        const result: any = {
            id: this.id,
            name: this.name,
            description: this.description,
            start_date: this.start_date,
            end_date: this.end_date,
            job_rate_curve_id: this.job_rate_curve_id,
            job_type_id: this.job_type_id,
        };

        return result;
    }
}
