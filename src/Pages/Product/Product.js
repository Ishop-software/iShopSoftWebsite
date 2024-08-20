import React from 'react';
import "./Product.css";
import { Box, Card, CardContent, Typography } from '@mui/material';
import Productfirst from "../../Assets/ProductImages/Productfirst.png";
import Productsecond from "../../Assets/ProductImages/Productsecond.png";
import Productthird from "../../Assets/ProductImages/Productthird.png";
import Productfour from "../../Assets/ProductImages/Productfour.png";
import Productfive from "../../Assets/ProductImages/Productfive.png";
import Productsix from "../../Assets/ProductImages/Productsix.png";

const productNameList = [
  {
    Name: "Product One",
    image: Productfirst,
  },
  {
    Name: "Product Two",
    image: Productsecond,
  },
  {
    Name: "Product Three",
    image: Productthird,
  },
  {
    Name: "Product Four",
    image: Productfour,
  },
  {
    Name: "Product Five",
    image: Productfive,
  },
  {
    Name: "Product Six",
    image: Productsix,
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
