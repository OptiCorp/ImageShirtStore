import React from 'react';
import { useState, useEffect } from 'react';
import '././styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Shop } from './Pages/Shop/Shop';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Login } from './Pages/Login/Login';
import { About } from './Pages/About/About';

function App(): JSX.Element {
	const [viewCart, setViewCart] = useState(false);

	return (
		<div className='App'>
			<section className='gridheader'>
				<Header viewCart={viewCart} />
			</section>
			<section className='gridpages'>
				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='Shop' element={<Shop />} />

					<Route path='About' element={<About />} />
					<Route path='Login' element={<Login />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</section>
			<section className='gridfot'>
				<Footer />
			</section>
		</div>
	);
}

export default App;
