import daygrid from '@fullcalendar/daygrid';
import timegrid from '@fullcalendar/timegrid';
import interaction from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import useGetJobs from '../../hooks/useGetJobs';
import { DateSelectArg, EventClickArg } from '@fullcalendar/core';
import useCreateJob from '../../hooks/useCreateJob';
import useDeleteJob from '../../hooks/useDeleteJob';
import LoadingScreenWrapper from '../../components/LoadingScreenWrapper';

function Home() {
    const { delete_job } = useDeleteJob();
    const { data, isLoading, refetch } = useGetJobs();
    const { create_job } = useCreateJob();

    const events = data?.map((job) => {
        return {
            id: job.id.toString(),
            title: job.name,
            start: job.start_date,
            end: job.end_date,
        };
    });

    const handleSelect = (arg: DateSelectArg) => {
        let title = prompt('Please enter a new title for your event');

        if (title) {
            create_job(
                {
                    name: title,
                    description: '',
                    start_date: arg.start,
                    end_date: arg.end,
                    job_type_id: 1,
                    job_rate_curve_id: 1,
                },
                {
                    onSuccess: () => refetch(),
                },
            );
        }
    };

    const handleClick = (arg: EventClickArg) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            const id = parseInt(arg.event.id);

            delete_job(id, {
                onSuccess: () => refetch(),
            });
        }
    };

    return (
        <LoadingScreenWrapper isLoading={isLoading}>
            <FullCalendar
                plugins={[daygrid, timegrid, interaction]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                editable={false}
                selectable={true}
                select={handleSelect}
                initialView="timeGridWeek"
                events={events}
                eventClick={handleClick}
            />
        </LoadingScreenWrapper>
    );
}

export default Home;
