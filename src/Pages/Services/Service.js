import React from 'react'
import '../Services/Service.css'
import sellingImage from "../../Assets/Serviceimages/Selling.png";
import webDevImage from "../../Assets/Serviceimages/web.png";
import BillingImage from "../../Assets/Serviceimages/billing.png";
import MobDevImage from "../../Assets/Serviceimages/web.png";
import { Typography } from '@material-ui/core';


function ServiceCard({ title, description, image }) {
  return (

    <div className="service-card">
      <img className='service-image' src={image}></img>
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
    </div>
  )
}
function Service() {
  const services = [
    {
      title: 'Selling Products',
      description: 'We offer a wide range of products for sale, ensuring quality and value for our customers.',
      image: sellingImage
    },
    {
      title: 'Web Development',
      description: 'Our team provides professional web development services to create stunning and functional websites.',
      image: webDevImage
    },
    {
      title: 'Billing Software',
      description: 'We develop billing software tailored to your business needs, making invoicing and payment tracking easy.',
      image: BillingImage
    },
    {
      title: 'Mobile App Development',
      description: 'We specialize in mobile app development, creating user-friendly and innovative applications for various platforms.',
      image: MobDevImage
    }
  ];

  return (
    <div className='main'>
      <Typography variant='h4' style={{ fontWeight: "bold", textAlign: "center", margin: "80px", color: "#35AFFD" }}>What We Do ?</Typography>
      <div className="services-container" >

        {services.map((service, index) => (
          <ServiceCard className="service" key={index} image={service.image} title={service.title} description={service.description} />
        ))}
        <div className='shadowOne'></div>
        <div className='shadowTwo'></div>
      </div>
    </div>



  );
}

export default Service