import React from 'react';
import './HomePage.css';
import Footer from '../components/Footer'; 

const Home = () => {
  const handleAddToCart = (itemName) => {
    console.log(`${itemName} added to cart!`);
  };

  return (
    <div className="coffee-section">
      <div className="coffee-banner-with-bg">
        <div className="coffee-banner-content">
          
          <div className="coffee-item">
            <img 
              src="https://c.ndtvimg.com/2020-01/3l8ja418_espresso-shot-_625x300_23_January_20.jpg" 
              alt="Espresso" 
              className="coffee-image"
            />
            <h3>Espresso</h3>
            <p className="coffee-price">₹120</p>
            <p className="coffee-rating">⭐️⭐️⭐️⭐️☆</p>
            <button 
              className="add-to-cart-btn"
              onClick={() => handleAddToCart("Espresso")}
            >
              Add to Cart
            </button>
          </div>

         
          <div className="coffee-item">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/034/222/060/small_2x/pumpkin-spice-latte-iced-coffee-background-generative-ai-free-photo.jpg" 
              alt="Pumpkin Spice Latte" 
              className="coffee-image"
            />
            <h3>Pumpkin Spice Latte</h3>
            <p className="coffee-price">₹180</p>
            <p className="coffee-rating">⭐️⭐️⭐️⭐️⭐️</p>
            <button 
              className="add-to-cart-btn"
              onClick={() => handleAddToCart("Pumpkin Spice Latte")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
