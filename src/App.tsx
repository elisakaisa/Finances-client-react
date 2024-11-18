import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Transactions from './pages/Transactions';
import Header from './pages/pageComponents/Header';
import Charts from './pages/Charts';
import Repartition from './pages/Repartition';
import Summary from './pages/Summary';

function App() {

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	return (
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<Header />
				<Routes>
					<Route path="transactions" element={<Transactions />} />
					<Route path='charts' element={<Charts />} />
					<Route path='repartition' element={<Repartition />} />
					<Route path='summary' element={<Summary />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
