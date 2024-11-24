import React from 'react';
import './layout.css';
import SummaryTable from '../components/SummaryTable';
import { testSummary } from '../models/TestData';

const Summary = () => {
    return (
        <div className='padding-20'>
            <SummaryTable summary={testSummary}></SummaryTable>
        </div>
    );
};

export default Summary;