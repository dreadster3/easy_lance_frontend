import { useMutation } from 'react-query';
import { jobClient } from '../clients';

function useDeleteJob() {
    const { mutate, isLoading } = useMutation((id: number) =>
        jobClient.remove_job_async(id),
    );

    return { delete_job: mutate, isLoading };
}

export default useDeleteJob;
