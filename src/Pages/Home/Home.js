import React, { useState, useEffect } from 'react';
import './Home.css';
import img1 from '../../Assets/PortfolioImages/HomeImages/image1.jpg';
import img2 from '../../Assets/PortfolioImages/HomeImages/image2.jpg';

const images = [
  { src: img1, text1: 'Exclusive Range of', text2: 'Laptop Accessories At Affordable Cost' },
  { src: img2, text1: 'Latest range of', text2: 'Computers, Laptops, and Accessories' },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container" id="home">
      <div className="slide-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={img.src} alt={`Slide ${index}`} className="zoom-effect" style={{ height: "100vh" }} />
            <div className="text-overlay">
              <div className="text-title">{img.text1}</div>
              <div className="text-subtitle">{img.text2}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
