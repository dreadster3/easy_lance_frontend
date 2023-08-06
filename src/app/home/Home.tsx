import useGetJobs from '../../hooks/useGetJobs';

function Home() {
    const { data, isLoading } = useGetJobs();
    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {data?.map((job) => (
                        <div key={job.id}>{job.start_date.toUTCString()}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
