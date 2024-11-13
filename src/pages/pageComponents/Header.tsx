import React from 'react';
import Navbar from './Navbar';
import './pageComponents.css';
import '../layout.css';

const Header = () => {

	return (
		<header className='background-color padding-20'>
            <h1>The finances app</h1>
            <Navbar/>
        </header>
	);
};

export default Header;