import { Cell, Pie } from 'recharts';
import { Tooltip } from 'recharts';
import { PieChart } from 'recharts';
import useGetCategorySummary from '../../hooks/useGetCategorySummary';

function Summary() {
    const { data } = useGetCategorySummary();

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <PieChart width={400} height={400} data={data}>
                <Pie data={data} dataKey="total" cx="50%" cy="50%">
                    {data?.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            name={entry.category}
                            fill={colors[index % colors.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
}

export default Summary;
