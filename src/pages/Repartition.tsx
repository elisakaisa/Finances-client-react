import React, { useState } from 'react';
import RepartitionTable from '../components/RepartitionTable';
import './layout.css';
import { testRepartition } from '../models/TestData';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Repartition = () => {
    const [repartition, setRepartition] = useState(testRepartition);
    const [year, setYear] = useState<number>(new Date().getFullYear());

    const handleChange = (event: SelectChangeEvent) => {
        setYear(Number(event.target.value));
    };

    const currentYear = new Date().getFullYear();
    const yearList: number[] = Array.from({ length: 11 }, (_, i) => currentYear - i);

    //TODO: fetch repartition data based on year

    return (
        <div className='padding-20'>
            <FormControl>
                <InputLabel id="select-year-label">Year</InputLabel>
                <Select
                    labelId="select-year"
                    id="select-year"
                    value={year.toString()}
                    label="Year"
                    onChange={handleChange}
                >
                    {yearList.map((year) => (
                        <MenuItem key={year} value={year}>{year}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <RepartitionTable repartition={repartition} />
        </div>
    );
};

export default Repartition;