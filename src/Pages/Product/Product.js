import React from 'react';
import "./Product.css";
import { Box, Card, CardContent, Typography } from '@mui/material';
import ImgFirst from "../../Assets/ProductImages/ImgFirst.png";
import ImgSecond from "../../Assets/ProductImages/ImgSecond.png";
import ImgThird from "../../Assets/ProductImages/ImgThird.png";
import ImgFour from "../../Assets/ProductImages/ImgFour.png";
import ImgFive from "../../Assets/ProductImages/ImgFive.png";
import ImgSix from "../../Assets/ProductImages/ImgSix.png";

const productNameList = [
  {
    Name: "KeyBoard And Mouse",
    image: ImgFirst,
  },
  {
    Name: "Laptop",
    image: ImgSecond,
  },
  {
    Name: "Wired HeadPhone",
    image: ImgThird,
  },
  {
    Name: "Printer",
    image: ImgFour,
  },
  {
    Name: "CPU",
    image: ImgFive,
  },
  {
    Name: "Hardisk And Ram",
    image: ImgSix,
  }
];

function Products() {
  return (
    <div id='products'>
      <Typography variant='h4' style={{ fontWeight: "bold", textAlign: "center", margin: "30px", color: "#35AFFD" }}>Products</Typography>
      <Box className="product-flexbox">
        {productNameList.map((item, index) => (
          <Card key={index} className="product-cardsection">
            <CardContent>
              <img className="img-section" src={item.image} alt={item.Name} />
            </CardContent>
            <Typography variant='subtitle1' style={{ padding: '10px', textAlign: "center", fontWeight: "bold" }}>{item.Name}</Typography>
          </Card>
        ))}
      </Box>
    </div>
  )
}

export default Products;
