import React, { useState } from 'react';
import './layout.css';
import TransactionGrid from '../components/TransactionGrid';
import { testTransactions } from '../models/TestData';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';

const Transactions = () => {
    const [transactions, setTransactions] = useState(testTransactions);
    const [transactionsToDisplay, setTransactionsToDisplay] = useState(testTransactions);
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [month, setMonth] = useState<number>(new Date().getMonth());
    const [financialMonth, setFinancialMonth] = useState<string>('');

    //TODO: fetch transactions here

    //TODO: month and year filter
    const currentYear = new Date().getFullYear();
    const yearList: number[] = Array.from({ length: 11 }, (_, i) => currentYear - i);
    const monthList: number[] = Array.from({length: 12}, (_, i) => i + 1);

    const handleYearChange = (event: SelectChangeEvent) => {
        setYear(Number(event.target.value));
        const updatedFinancialMonth = `${event.target.value}${month.toString().padStart(2, '0')}`;
        setFinancialMonth(updatedFinancialMonth);
        //TODO: fetch new data if year is changed
        filterTransactions(updatedFinancialMonth);
    };
    const handleMonthChange = (event: SelectChangeEvent) => {
        const rawValue = String(event.target.value);
        const paddedMonth = rawValue.padStart(2, '0');
        setMonth(Number(event.target.value));
        const updatedFinancialMonth = `${year.toString()}${paddedMonth}`;
        setFinancialMonth(updatedFinancialMonth);
        filterTransactions(updatedFinancialMonth);
    };

    const filterTransactions = (finMonth: string) => {
        setTransactionsToDisplay(transactions.filter((t) => t.financialMonth === finMonth));
    };

    return (
        <div className='padding-20'>
            <div className='dropdown-container'>
                <FormControl size="small">
                    <InputLabel id="select-year-label">Year</InputLabel>
                    <Select
                        labelId="select-year"
                        id="select-year"
                        value={year.toString()}
                        label="Year"
                        onChange={handleYearChange}>
                        {yearList.map((year) => (
                            <MenuItem key={year} value={year}>{year}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl size="small" style={{ minWidth: '70px' }}>
                    <InputLabel id="select-month-label">Month</InputLabel>
                    <Select
                        labelId="select-month"
                        id="select-month"
                        value={month.toString()}
                        label="Month"
                        onChange={handleMonthChange}>
                        {monthList.map((month) => (
                            <MenuItem key={month} value={month}>{month}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <TransactionGrid transactions={transactionsToDisplay}/>
        </div>
    );
};

export default Transactions;