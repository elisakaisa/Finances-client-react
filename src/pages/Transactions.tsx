import React, { useState } from 'react';
import './layout.css';
import TransactionGrid from '../components/TransactionGrid';
import { testTransactions } from '../models/TestData';

import YearMonthDropdown from './pageComponents/YearMonthDropDown';

const Transactions = () => {
    const [transactions, setTransactions] = useState(testTransactions);
    const [transactionsToDisplay, setTransactionsToDisplay] = useState(testTransactions);
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [month, setMonth] = useState<number>(new Date().getMonth());
    const [financialMonth, setFinancialMonth] = useState<string>('');

    //TODO: fetch transactions here

    //TODO: month and year filter
    const handleYearChange = (newYear: number) => {
        setYear(newYear);
        const updatedFinancialMonth = `${newYear}${month.toString().padStart(2, '0')}`;
        setFinancialMonth(updatedFinancialMonth);
        filterTransactions(updatedFinancialMonth);
    };

    const handleMonthChange = (newMonth: number) => {
        const paddedMonth = newMonth.toString().padStart(2, '0');
        setMonth(newMonth);
        const updatedFinancialMonth = `${year.toString()}${paddedMonth}`;
        setFinancialMonth(updatedFinancialMonth);
        filterTransactions(updatedFinancialMonth);
    };

    const filterTransactions = (finMonth: string) => {
        setTransactionsToDisplay(transactions.filter((t) => t.financialMonth === finMonth));
    };

    return (
        <div className='padding-20'>
            <YearMonthDropdown
                year={year}
                month={month}
                onYearChange={handleYearChange}
                onMonthChange={handleMonthChange}
            />
            <TransactionGrid transactions={transactionsToDisplay}/>
        </div>
    );
};

export default Transactions;