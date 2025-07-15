import React, { useState } from 'react';
import RepartitionTable from '../components/RepartitionTable';
import './layout.css';
import { testRepartition } from '../models/TestData';

import YearDropdown from './pageComponents/YearDropDown';

const Repartition = () => {
    const [repartition, setRepartition] = useState(testRepartition);
    const [year, setYear] = useState<number>(new Date().getFullYear());

    const handleYearChange = (year: number) => {
        setYear(year);
        //TODO: fetch new data here
    };

    //TODO: fetch repartition data based on year

    return (
        <div className='padding-20'>
            <YearDropdown
                year={year}
                onYearChange={handleYearChange}
            />
            <RepartitionTable repartition={repartition} />
        </div>
    );
};

export default Repartition;