import { BarChart } from '@mui/x-charts/BarChart';
import { MONTHS } from '../constants/constants';
import type { TransactionTypeBarChartProps } from '../models/Props';

const TransactionTypeBarChart = ({data} : TransactionTypeBarChartProps) => {
    

    return (
        <BarChart
            height={300}
            series={[
                { data: data.income, label: 'Income', stack: 'in' },
                { data: data.expenses, label: 'Expenses', stack: 'out' },
                { data: data.savings, label: 'Savings', stack: 'out' },
            ]}
            xAxis={[{ data: MONTHS }]}
            yAxis={[{ width: 50 }]}
        />
    );
};

export default TransactionTypeBarChart;