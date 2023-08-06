export interface IJobDto {
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    job_rate_curve_id: number;
    job_type_id: number;
}

export class JobDto implements IJobDto {
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    job_rate_curve_id: number;
    job_type_id: number;

    constructor(
        name: string,
        description: string,
        start_date: Date,
        end_date: Date,
        job_rate_curve_id: number,
        job_type_id: number,
    ) {
        this.name = name;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
        this.job_rate_curve_id = job_rate_curve_id;
        this.job_type_id = job_type_id;
    }
}
