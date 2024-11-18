import React, { useState } from 'react';
import './layout.css';
import TransactionGrid from '../components/TransactionGrid';
import { testTransactions } from '../models/TestData';

const Transactions = () => {
    const [transactions, setTransactions] = useState(testTransactions);

    //TODO: fetch transactions here

    //TODO: month and year filter

    return (
        <div className='padding-20'>
            <>Add selector drop downs here for year & which transactions to show</>
            <TransactionGrid transactions={transactions}/>
        </div>
    );
};

export default Transactions;