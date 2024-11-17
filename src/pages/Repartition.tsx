import React from 'react';
import RepartitionTable from '../components/RepartitionTable';
import './layout.css';

const Repartition = () => {
    return (
        <div className='padding-20'>
            Insert dropdown to select year
            <RepartitionTable></RepartitionTable>
        </div>
    );
};

export default Repartition;