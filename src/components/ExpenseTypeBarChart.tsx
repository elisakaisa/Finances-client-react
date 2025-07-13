import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const ExpenseTypeBarChart = () => {
    // TODO: data needs to be passed as props, and needed datastrcuture needs to be defined
    var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV']
    var incomeData = generateRandomFloats();
    var expenseData = generateRandomFloats();
    var savingsData = generateRandomFloats();

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
            { data: savingsData, label: 'Income', stack: 'out' },
        ]}
        xAxis={[{ data: months }]}
        yAxis={[{ width: 50 }]}
        />
    );
};

export default ExpenseTypeBarChart;