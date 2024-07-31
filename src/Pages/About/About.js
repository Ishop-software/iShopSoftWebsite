// src/AboutUs.js
import React from 'react';
import '../About/About.css';
import { Divider, Typography } from '@mui/material';
import image from "../../Assets/AboutUsImages/aboutimage.jpg";

const AboutUs = () => {
  return (
    <div className="container">
      <Typography className="title" style={{ color: "#35AFFD", fontWeight: "bold", fontFamily: "Merriweather Sans" }} sx={{ fontSize: { lg: "30px", sm: "28px", xs: "20px" } }}>About Us</Typography>
      <div className='wrap' style={{ gap: "50px", height: "100%" }}>
        <Typography className="content" style={{ fontSize: "18px", textAlign: "justify", color: "black", }}>&nbsp;&nbsp;&nbsp;&nbsp;
          We I Shop, situated at Thiruvarur H O, Tiruvarur, Tamil Nadu, is the home of the most useful technological devices in today's age. We deal in a wide range of computers, laptops and accessories that make the use of technology easier. We have the chance to gain a huge number of customers for ourselves by providing the best quality products and services. Prior to everything, we place top-quality products which have helped us to make a place for ourselves in the market. Our experience over the years in the industry aided us to make advancements and live up to industry norms and terms that guided us to make better progress. With uninterrupted efforts towards becoming what we want to and having an irreplaceable place in the market, has only helped us to be nothing but the best.
        </Typography>

        <img className="image" src={image} />
      </div>
    </div >
  );
};

export default AboutUs;
