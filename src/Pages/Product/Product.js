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
    <Box class="product-flexbox">
      {productNameList.map((item, index) => (
        <Card key={index} class="product-cardsection">
          <CardContent>
            <img className="img-section" src={item.image} alt="" />
          </CardContent>
          <Typography variant='para'>{item.Name}</Typography>
        </Card>
      ))}
    </Box>
  )
}

export default Products;