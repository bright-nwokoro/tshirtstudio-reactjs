import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import DesignHoodie from './pages/DesignHoodie/DesignHoodie';
import Join from './pages/Authenticate/Join';
import SignIn from './pages/Authenticate/SignIn';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import CartProvider from './context/cart';
import { shopItems } from './data/shopItem';

function App() {
  console.log(shopItems)

  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/design-hoodie' element={<DesignHoodie />} />
          <Route path='/join' element={<Join />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
