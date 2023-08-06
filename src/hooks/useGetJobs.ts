import { useQuery } from 'react-query';
import { jobClient } from '../clients';

function useGetJobs() {
    const { data, isLoading, refetch } = useQuery('jobs', () =>
        jobClient.get_jobs_async(),
    );

    return { data, isLoading, refetch };
}

export default useGetJobs;
