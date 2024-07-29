import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import img1 from "../../Assets/PortfolioImages/HomeImages/image1.jpg";
import img2 from "../../Assets/PortfolioImages/HomeImages/image2.jpg"


function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [{ src: (img1), text: "Latest range of" },
  { src: img2, text1: "Latest range of", text2: "Computers,Laptops and Accessories" }
  ];
  const menus = ["Home", "Services", "Portfolio", "Products", "Contact US"];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>

          {menus.map((menu, index) => (
            <Button
              style={{ fontSize: "15px", color: "black", fontFamily: "Gloria Hallelujah", fontWeight: "bold" }}
              key={index}>
              {menu}
            </Button>
          ))}


        </Toolbar>
      </AppBar>
      <div>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slide-container">
              <img src={img.src} alt={`Slide ${index}`} className="zoom-effect" style={{ height: "100vh" }} />
              <div className="slide-text">{img.text1}</div>
              <div className="text-overlay">{img.text2}</div>



            </div>
          ))}
        </Slider>
      </div >

    </Box >


  )
};

export default Home;
