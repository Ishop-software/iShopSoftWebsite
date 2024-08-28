import React from 'react';
import "./Portfolio.css";
import Slider from "react-slick";
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import imgfirst from "../../Assets/PortfolioImages/imgfirst.png";
import imgsecond from "../../Assets/PortfolioImages/imgsecond.png";
import imgthird from "../../Assets/PortfolioImages/imgthird.png";
import imgfour from "../../Assets/PortfolioImages/imgfour.png";

const portfolioList = [
    {
        image: imgfirst,
        title: "Web Design",
        para: "Lizards are a widespread group of squamate reptiles, with over 6000 species, ranging across all continents except Antarctica"
    },
    {
        image: imgsecond,
        title: "Web Applications",
        para: "Lizards are a widespread group of squamate reptiles, with over 6000 species, ranging across all continents except Antarctica"
    },
    {
        image: imgthird,
        title: "System Software",
        para: "Lizards are a widespread group of squamate reptiles, with over 6000 species, ranging across all continents except Antarctica"
    },
    {
        image: imgfour,
        title: "Mobile Application",
        para: "Lizards are a widespread group of squamate reptiles, with over 6000 species, ranging across all continents except Antarctica"
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
        <Box className="portfolio-container">
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
