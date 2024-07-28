import logo from './logo.svg';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import About from '../src/Pages/About/About';
import Service from './Pages/Services/Service';
import Products from './Pages/Products/Product';
import Portfolio from './Pages/Portfolio/Portfolio';
import ContactUs from './Pages/ContactUs/ContactUs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/products' element={<Products />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>

      <Home />
      <About />
      <Service />
      <Products />
      <Portfolio />
      <ContactUs />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
