import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { MONTHS } from '../constants/constants';

const ExpenseTypeBarChart = () => {
    // TODO: data needs to be passed as props, and needed datastrcuture needs to be defined
    const incomeData = generateRandomFloats();
    const expenseData = generateRandomFloats();
    const savingsData = generateRandomFloats();

    function generateRandomFloats() {
        return Array.from({ length: 12 }, () =>
            parseFloat((Math.random() * 100).toFixed(2))
        );
    }

    return (
    <BarChart
        height={300}
        series={[
            { data: incomeData, label: 'Income', stack: 'in' },
            { data: expenseData, label: 'Expenses', stack: 'out' },
            { data: savingsData, label: 'Savings', stack: 'out' },
        ]}
        xAxis={[{ data: MONTHS }]}
        yAxis={[{ width: 50 }]}
        />
    );
};

export default ExpenseTypeBarChart;