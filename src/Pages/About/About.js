// src/AboutUs.js
import React from 'react';
import '../About/About.css';
import { Typography } from '@mui/material';
import aboutImage from "../../Assets/AboutUsImages/aboutImage.png";

const AboutUs = () => {
  return (
    <div className="container" id="about">
      <Typography className="title" style={{ color: "#35AFFD", fontWeight: "bold", fontFamily: "Merriweather Sans" }} sx={{ fontSize: { lg: "30px", sm: "28px", xs: "20px" } }}>About Us</Typography>
      <div className='wrap' style={{ gap: "50px", height: "100%" }}>
        <Typography className="content" style={{ fontSize: "18px", textAlign: "justify", color: "black", }}>&nbsp;&nbsp;&nbsp;&nbsp;
          We specialize in delivering innovative digital solutions that help businesses grow and thrive in today's competitive landscape. With expertise in web design, web development, digital marketing, and mobile app development, we craft tailored strategies to meet your unique business needs. From stunning websites to powerful mobile apps, and effective marketing campaigns, we are committed to driving results and providing exceptional service that enhances your online presence. Our team of skilled designers and developers collaborates to create visually stunning and user-friendly websites tailored to your brand. We blend creativity with technical expertise, ensuring your website not only looks great but also delivers a seamless user experience. 
        </Typography>

        <img className="image" src={aboutImage} alt="" />
      </div>
    </div >
  );
};

export default AboutUs;
