import React from 'react';

import '././styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Shop } from './Pages/Store/Shop';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Login } from './Pages/Login/Login';
import { About } from './Pages/About/About';
import { Cart } from './components/Cart/CartItems';
import 'react-toastify/dist/ReactToastify.css';

import CartPreview from './components/Cart/CartPreview/CartPreview';
function App(): JSX.Element {
	return (
		<div className='App'>
			<section className='gridheader'>
				<Header />
			</section>
			<section className='gridpages'>
				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='Shop' element={<Shop />} />
					<Route path='CartItems' element={<Cart />} />
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
