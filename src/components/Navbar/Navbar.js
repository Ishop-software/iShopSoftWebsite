import React, { useState } from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from "../../Assets/Logo/Logo.png";
import Home from '../../Pages/Home/Home.js';
import About from '../../Pages/About/About.js';
import Service from '../../Pages/Services/Service.js';
import Portfolio from '../../Pages/Portfolio/Portfolio.js';
import ContactUs from '../../Pages/ContactUs/ContactUs.js';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const pages = [
    { name: 'Home', component: <Home /> },
    { name: 'About Us', component: <About /> },
    { name: 'Services', component: <Service /> },
    { name: 'Portfolio', component: <Portfolio /> },
    { name: 'Contact Us', component: <ContactUs /> }
  ];

  const renderPage = () => (
    <>
      {pages.map((page, index) => (
        <div
          key={index}
          id={`${page.name.toLowerCase().replace(' ', '-')}-section`}
          style={{ minHeight: '100vh' }}
        >
          {page.component}
        </div>
      ))}
    </>
  );

  const handlePageChange = (page) => {
    setActivePage(page);
    closeDrawer();
    document
      .getElementById(`${page.toLowerCase().replace(' ', '-')}-section`)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar position="sticky" className="appbar">
        {/* <Toolbar> */}
          <Box className="app-box">
            <img src={Logo} alt="" className="app-logo" />
          </Box>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-evenly' }}>
              <List sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', columnGap: "normal" }}>
                {pages.map((page, index) => (
                  <ListItem
                    key={index}
                    button
                    onClick={() => handlePageChange(page.name)}
                    sx={{ textAlign: 'center', flex: 1 }}
                  >
                    <ListItemText primary={page.name} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        {/* </Toolbar> */}
      </AppBar>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <List onClick={closeDrawer}>
            {pages.map((page, index) => (
              <ListItem className="mobile-menu" 
                key={index}
                button  
                onClick={() => handlePageChange(page.name)}
              >
                <ListItemText primary={page.name}/>
              </ListItem>
            ))}
          </List>
        </Drawer>
      {/* <Toolbar /> */}
      <div className="content">{renderPage()}</div>
    </>
  );
};

export default Navbar;