import { BarChart } from '@mui/x-charts/BarChart';
import { MONTHS } from '../constants/constants';
import type { TransactionTypeBarChartProps } from '../models/Props';

const TransactionTypeBarChart = ({income, expenses, savings} : TransactionTypeBarChartProps) => {
    

    return (
        <BarChart
            height={300}
            series={[
                { data: income, label: 'Income', stack: 'in' },
                { data: expenses, label: 'Expenses', stack: 'out' },
                { data: savings, label: 'Savings', stack: 'out' },
            ]}
            xAxis={[{ data: MONTHS }]}
            yAxis={[{ width: 50 }]}
        />
    );
};

export default TransactionTypeBarChart;