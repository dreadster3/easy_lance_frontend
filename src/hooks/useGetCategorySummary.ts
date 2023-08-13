import { useQuery } from 'react-query';
import { summaryClient } from '../clients';

function useGetCategorySummary() {
    const { data, isLoading, refetch } = useQuery(['summary', 'category'], () =>
        summaryClient.get_category_total_async(),
    );

    return { data, isLoading, refetch };
}

export default useGetCategorySummary;
