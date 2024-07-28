import logo from './logo.svg';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Home';
import About from './Pages/About/About';
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
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
