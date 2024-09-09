import React from 'react';
import "./Footer.css";
import { Box, List, Typography } from '@mui/material';
// import insta from "../../Assets/SocialmediaImages/insta.png";
// import twiter from "../../Assets/SocialmediaImages/twiter.png";
import whatsapp from "../../Assets/SocialmediaImages/whatsapp.png";
import gmail from "../../Assets/SocialmediaImages/gmail.png";
import { Link } from 'react-scroll';

function Footer() {
  return (
    <Box>
      <Box className="footer-container">
        <Box className="logo-section">
          <Box className="company-info">
            <Typography variant="h4" className="footer-title">IshopSoftware</Typography>
            <Typography variant="h6" className="footer-para">
              Let us help you turn your digital dreams into reality. Whether you're a startup or an established brand, our solutions are designed to drive results and elevate your business to new heights.
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
          <Typography className="footer-title" variant="h5">Quick Links</Typography>
          <Typography variant="h6"><Link to="home" smooth={true} duration={500} className="footer-links">Home</Link></Typography>
          <Typography variant="h6"><Link to="about" smooth={true} duration={500} className="footer-links">About</Link></Typography>
          <Typography variant="h6"><Link to="services" smooth={true} duration={500} className="footer-links">Services</Link></Typography>
          <Typography variant="h6"><Link to="portfolio" smooth={true} duration={500} className="footer-links">Portfolio</Link></Typography>
          <Typography variant="h6"><Link to="contact" smooth={true} duration={500} className="footer-links">ContactUs</Link></Typography>
        </Box>
        <Box className="service-section">
          <Typography className="footer-title" variant="h5">Our Services</Typography>
          <Typography variant="h6" className="footer-list">Web Design</Typography>
          <Typography variant="h6" className="footer-list">Digital Marketting</Typography>
          <Typography variant="h6" className="footer-list">Web Development</Typography>
          <Typography variant="h6" className="footer-list">Mobile App Development</Typography>
        </Box>
        <Box className="address-section">
          <Typography className="footer-title" variant="h5">Location</Typography>
          <Typography variant="h6" className="footer-list">Address:</Typography>
          <Typography variant="h6" className="footer-list">Naalukal Mandabam Near,<br /> Mayiladuthurai Main Road,<br /> Thiruvarur-610001.</Typography>
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