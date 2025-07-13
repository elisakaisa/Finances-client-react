import React from 'react';
import './layout.css';
import YearlyChart from '../components/YearlyChart';
import CategoryPieChart from '../components/CategoryPieChart';
import ExpenseTypeBarChart from '../components/ExpenseTypeBarChart';


const Charts = () => {
    return (
        <div className='padding-20'>
            <YearlyChart></YearlyChart>
            <CategoryPieChart></CategoryPieChart>
            <ExpenseTypeBarChart></ExpenseTypeBarChart>
        </div>
    );
};

export default Charts;