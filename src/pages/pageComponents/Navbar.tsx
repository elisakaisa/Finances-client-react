import {Link} from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <Link to="/charts">Charts</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/repartition">Repartition</Link>
            <Link to="/summary">Summary</Link>
        </>
    );
};

export default Navbar;