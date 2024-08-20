import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import About from '../src/Pages/About/About';
import Service from './Pages/Services/Service';
import Product from './Pages/Product/Product';
import Portfolio from './Pages/Portfolio/Portfolio';
import ContactUs from './Pages/ContactUs/ContactUs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/products' element={<Product />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>

      <About />
      <Service />
      <Product />
      <Portfolio />
      <ContactUs />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
