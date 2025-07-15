import React, { useState } from 'react';
import './layout.css';
import SummaryTable from '../components/SummaryTable';
import { testSummary } from '../models/TestData';
import YearDropdown from './pageComponents/YearDropDown';

const Summary = () => {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    
    const handleYearChange = (year: number) => {
        setYear(year);
        //TODO: fetch new data here
    };

    return (
        <div className='padding-20'>
            <YearDropdown
                year={year}
                onYearChange={handleYearChange}
            />
            <SummaryTable summary={testSummary}></SummaryTable>
        </div>
    );
};

export default Summary;