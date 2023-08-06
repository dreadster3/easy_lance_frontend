import { useMutation } from 'react-query';
import { jobClient } from '../clients';
import { IJobDto } from '../dtos/JobDto';

function useCreateJob() {
    const { mutate, isLoading } = useMutation(
        'job-create',
        (job: IJobDto) => jobClient.create_job_async(job),
        {},
    );

    return { create_job: mutate, isLoading };
}

export default useCreateJob;
