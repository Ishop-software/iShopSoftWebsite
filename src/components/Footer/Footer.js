import React from 'react';
import "./Footer.css";
import { Box, List, Typography } from '@mui/material';
import insta from "../../Assets/SocialmediaImages/insta.png";
import twiter from "../../Assets/SocialmediaImages/twiter.png";
import whatsapp from "../../Assets/SocialmediaImages/whatsapp.png";


function Footer() {
  return (
    <Box>
      <Box className="footer-container">
        <Box className="logo-section">
          <Box className="company-info">
            <Typography variant="h4">IshopSoftware</Typography>
            <Typography variant="p" className="footer-para">
              Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam aenean quisque rhoncus nullam massa maecenas. Dui varius at vel dignissim.
            </Typography>
          </Box>
          <Box className="social-media">
            <img src={insta} alt="" className="media-images" />
            <img src={twiter} alt="" className="media-images" />
            <img src={whatsapp} alt="" className="media-images" />
          </Box>
        </Box>
        <Box className="our-pages">
          <Typography variant="h5">Quick Links</Typography>
          <List>Home</List>
          <List>About</List>
          <List>Services</List>
          <List>Products</List>
          <List>Portfolio</List>
          <List>ContactUs</List>
        </Box>
        <Box className="service-section">
          <Typography variant="h5">Services</Typography>
          <List>Web Design</List>
          <List>Digital Marketting</List>
          <List>Web Development</List>
          <List>Mobile App Development</List>
        </Box>
        <Box className="address-section">
          <Typography variant="h5">Location</Typography>
          <List>Address:</List>
          <List>Naalukal Mandabam Near, Mayiladuthurai Main Road, Thiruvarur-610001.</List>
          <a href="tel:+9865161714" style={{ color: '#000000', textDecoration: 'none' }}>Contact: +919865161714,<br /> +919865161716.</a>
        </Box>
      </Box>
      <Box className="copyright-section">
        <Typography className="copyright-text" variant="h6">©2023 Copyrights @ Ishop Software Solutions.</Typography>
      </Box>
    </Box>
  )
}

export default Footer;