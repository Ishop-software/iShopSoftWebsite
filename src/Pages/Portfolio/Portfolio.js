import React from 'react';
import "./Portfolio.css";
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
]

function Portfolio() {
  return (
    <Box className="portfolio-container">
        <Typography variant="h4" className="portfolio-title">Portfolios</Typography>
        <Box className="portfolio-flexbox">
            {portfolioList.map((item, index) => (
                <Card key={index} className="portfolio-cardsection">
                    <CardMedia className="portfolio-imgsection"
                        component="img"
                        alt="portfolio image"
                        height="140"
                        image={item.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.para}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    </Box>
  )
}

export default Portfolio;