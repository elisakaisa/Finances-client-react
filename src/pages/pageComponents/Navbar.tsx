import {Link} from 'react-router-dom';
import React from 'react';
import '../layout.css';

const Navbar = () => {
    return (
        <>
            <Link to="/charts" className='padding-5'>Charts</Link>
            <Link to="/transactions" className='padding-5'>Transactions</Link>
            <Link to="/repartition" className='padding-5'>Repartition</Link>
            <Link to="/summary" className='padding-5'>Summary</Link>
        </>
    );
};

export default Navbar;