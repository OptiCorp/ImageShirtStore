import React from 'react';
import { useState } from 'react';
import '././styles/App.css';
import { ApiData } from './ApiData';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './Pages/Home/Home';
import { Store } from './Pages/Store/Store';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App(): JSX.Element {
    // const [images, setImages] = React.useState([]);
    // const [activeImage, setActiveImage] = React.useState("");
    const [viewCart, setViewCart] = useState(false);

    return (
        <div className='App'>
            <Container>
                <Header viewCart={viewCart} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/' element={<Store />} />

                    {/* <Route path="/" element={<Login />} /> */}
                </Routes>
                <Footer />
            </Container>
        </div>
    );
}

export default App;
