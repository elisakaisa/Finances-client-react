import React from 'react';
import './layout.css';
import TransactionGrid from '../components/TransactionGrid';

const Transactions = () => {
    return (
        <div className='padding-20'>
            <>Add selector drop downs here for year & which transactions to show</>
            <TransactionGrid/>
        </div>
    );
};

export default Transactions;