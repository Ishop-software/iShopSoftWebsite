import React from 'react';
import "./Footer.css";
import { Box, Link, List, Typography } from '@mui/material';
// import insta from "../../Assets/SocialmediaImages/insta.png";
// import twiter from "../../Assets/SocialmediaImages/twiter.png";
import whatsapp from "../../Assets/SocialmediaImages/whatsapp.png";
import gmail from "../../Assets/SocialmediaImages/gmail.png";
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box>
      <Box className="footer-container">
        <Box className="logo-section">
          <Box className="company-info">
            <Typography variant="h4" className="footer-title">IshopSoftware</Typography>
            <Typography variant="p" className="footer-para">
              Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam aenean quisque rhoncus nullam massa maecenas. Dui varius at vel dignissim.
            </Typography>
          </Box>
          <Box className="social-media">
            {/* <Link href="https://www.instagram.com/your-instagram-username" arget="_blank" rel="noopener noreferrer">
              <img src={insta} alt="" className="media-images" />
            </Link>
            <img src={twiter} alt="" className="media-images" />
            */}
            <Box className="mail-logo">
              <Link href="mailto:ishoptvr@example.com">
                <img src={gmail} alt=""  className="media-images" />
              </Link>
            </Box>
            <Box className="whatsapp-logo">
              <Link href="https://wa.me/+919865161714" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: '#fff' }} >
                <img src={whatsapp} alt="" className="media-images" />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className="our-pages">
          <Typography variant="h5">Quick Links</Typography>
          <List><Link to="/" component={RouterLink} className="footer-links">Home</Link></List>
          <List><Link to="/about" component={RouterLink} className="footer-links">About</Link></List>
          <List><Link to="/services" component={RouterLink} className="footer-links">Services</Link></List>
          <List><Link to="/products" component={RouterLink} className="footer-links">Products</Link></List>
          <List><Link to="/portfolio" component={RouterLink} className="footer-links">Portfolio</Link></List>
          <List><Link to="/contactus" component={RouterLink} className="footer-links">ContactUs</Link></List>
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
          <Link href="tel:+9865161714" className="contact-link">Contact: +919865161714,<br /> +919865161716.</Link>
        </Box>
      </Box>
      <Box className="copyright-section">
        <Typography className="copyright-text" variant="h6">©2023 Copyrights @ Ishop Software Solutions.</Typography>
      </Box>
    </Box>
  )
}

export default Footer;