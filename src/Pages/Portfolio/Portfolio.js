import React from 'react';
import "./Portfolio.css";
import Slider from "react-slick";
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import webDesign from "../../Assets/PortfolioImages/webDesign.jpeg";
import webApplication from "../../Assets/PortfolioImages/webApplication.jpeg";
import systemSoftware from "../../Assets/PortfolioImages/systemSoftware.jpeg";
import mobileDesign from "../../Assets/PortfolioImages/mobileDesign.jpeg";


const portfolioList = [
    {
        image: webDesign,
        title: "Web Design",
        para: "At Ishop, our website is more than just a digital presence—it's a reflection of our commitment to delivering cutting-edge software solutions tailored to your business needs. Our clean, modern design emphasizes usability, making it easy for clients to navigate through our services, explore our expertise, and engage with our team."
    },
    {
        image: webApplication,
        title: "Web Applications",
        para: "We creating robust, scalable & intuitive web applications expert team of developers leverages the latest technologies to build secure, high-performance. You're looking to develop a custom solution from scratch or enhance an existing platform, we ensure a seamless & user-friendly experience across all devices."
    },
    {
        image: systemSoftware,
        title: "System Software",
        para: "System software solutions are designed to enhance the performance, security, and scalability of your IT infrastructure. We specialize in developing and integrating system software that forms the backbone of your computing environment, including operating systems, device drivers, utility programs and more."
    },
    {
        image: mobileDesign,
        title: "Mobile Application",
        para: "At Ishop, we specialize in creating innovative, user-friendly mobile applications tailored to meet the unique needs of your business. Our expert team of developers and designers work closely with you to build custom mobile solutions that enhance user engagement, streamline operations, and drive business growth."
    }
];

const settings = {
    infinite: "true",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function Portfolio() {
    return (
        <Box className="portfolio-container" id="portfolio">
            <Box className="title-container">
                <Typography variant="h4" className="portfolio-title">Portfolio</Typography>
            </Box>
            <Box className="slider-container">
                <Slider {...settings}>
                    {portfolioList.map((item, index) => (
                        <Card key={index} className="portfolio-cardsection">
                            <CardMedia
                                component="img"
                                alt="portfolio image"
                                height="140"
                                image={item.image}
                                className="portfolio-imgsection"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ fontSize: "16px" }}>
                                    {item.para}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}

export default Portfolio;
