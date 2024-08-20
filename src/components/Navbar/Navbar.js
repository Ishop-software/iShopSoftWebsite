import React from 'react';
import "./Navbar.css";
import {
  AppBar, Toolbar
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (

    <AppBar className="appBar" style={{ position: "fixed", height: "12vh", backgroundColor: "white" }}>
      <Toolbar>
        {/* <img className="logo" src={""} style={{ width: "15vh", height: "5vh" }}></img> */}
        <ul className={isMobile ? "nav-links-mobile" : "navlinks"}
          onClick={() => setIsMobile(false)}>
          <Link to='home' spy={true} smooth duration={500} className='home'>
            <li>Home</li>
          </Link>
          <Link to='about' spy={true} smooth duration={500} offset={-200} className='about'>
            <li>About</li>
          </Link>
          <Link to='services' spy={true} smooth duration={500} offset={-100} className='services'>
            <li>Services</li>
          </Link>
          <Link to='products' spy={true} smooth duration={500} offset={-100} className='product'>
            <li>Products</li>
          </Link>
          <Link to='portfolio' spy={true} smooth duration={500} offset={-100} className='portfolio'>
            <li>Portfolio</li>
          </Link>
          <Link to='contact' spy={true} smooth duration={500} offset={-100} className='contact'>
            <li>Contact Us</li>
          </Link>
        </ul>

        <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <i className='fas fa-times'></i>
            : <i className='fas fa-bars'></i>}
        </button>

      </Toolbar>
    </AppBar>

  )
}

export default Navbar;
