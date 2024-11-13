import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Transactions from './pages/Transactions';
import Header from './pages/pageComponents/Header';
import Charts from './pages/Charts';
import Repartition from './pages/Repartition';
import Summary from './pages/Summary';

function App() {
  return (
    <BrowserRouter>
			<Header />
			<Routes>
				<Route path="transactions" element={<Transactions/>} />
				<Route path='charts' element={<Charts/>} />
				<Route path='repartition' element={<Repartition/>} />
        <Route path='summary' element={<Summary/>} />
			</Routes>
		</BrowserRouter>
  );
};

export default App;
