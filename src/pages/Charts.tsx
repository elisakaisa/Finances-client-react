import React from 'react';
import './layout.css';
import YearlyBarChart from '../components/YearlyBarChart';
import CategoryPieChart from '../components/CategoryPieChart';
import ExpenseTypeBarChart from '../components/ExpenseTypeBarChart';
import type { CategoryPieChartProps } from '../models/Props';
import type { YearlyBarChartProps } from '../models/Props';
import { MONTHS } from '../constants/constants';


const Charts = () => {

    // test data fro pie chart
    const labels = [ "Home", "Loans", "Groceries", "Food", "Pets", "Car", "Transport", "Shopping", "Leisure", "Vacation",];

    function generateRandomPieData(): CategoryPieChartProps["data"] {
    return labels.map((label, index) => ({
        id: index,
        label,
        value: parseFloat((Math.random() * 100).toFixed(2)),
    }));
    }
    const randomPieData = generateRandomPieData();

    // test data for yearly bar chart
    function generateRandomYearlyBarChartData(): YearlyBarChartProps {
    function generateRandomFloats() {
        return Array.from({ length: MONTHS.length }, () =>
            parseFloat((Math.random() * 100).toFixed(2))
            );
        }

        return {
            series: [
            { label: "Home", data: generateRandomFloats() },
            { label: "Loans", data: generateRandomFloats() },
            { label: "Groceries", data: generateRandomFloats() },
            ],
        };
    }
    const randomData = generateRandomYearlyBarChartData();


    return (
        <div className='padding-20'>
            <YearlyBarChart {...randomData}></YearlyBarChart>
            <CategoryPieChart data={randomPieData}></CategoryPieChart>
            <ExpenseTypeBarChart></ExpenseTypeBarChart>
        </div>
    );
};

export default Charts;