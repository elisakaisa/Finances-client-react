import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const YearlyChart = () => {
    // TODO: data needs to be passed as props, and needed datastrcuture needs to be defined
    var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV']
    var homeData = generateRandomFloats();
    var loanData = generateRandomFloats();
    var groceriesData = generateRandomFloats();

    function generateRandomFloats() {
        return Array.from({ length: 12 }, () =>
            parseFloat((Math.random() * 100).toFixed(2))
        );
    }

    return (
    <BarChart
        xAxis={[{ data: months }]}
        series={[
            { data: homeData, stack: 'A', label: "Home" }, 
            { data: loanData, stack: 'A', label: "Loans"  }, 
            { data: groceriesData, stack: 'A', label: "Groceries" }]}
        height={300}
    />
    );
};

export default YearlyChart;