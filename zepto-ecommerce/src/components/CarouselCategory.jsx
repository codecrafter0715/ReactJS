import React, { useEffect, useState } from 'react';

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const categoryData = [
      { name: 'Dairy & Beverages', image: 'https://mir-s3-cdn-cf.behance.net/projects/404/c6cb44209817149.6706407744341.png' },
      { name: 'Dairy & Beverages', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJBGyD9YZcztJnhZSpYUH0LnHXQKpgwXIRQ&s' },
      { name: 'Snacks', image: 'https://rukminim3.flixcart.com/image/850/1000/xif0q/chips/d/b/w/270-classic-salted-potato-3-lay-s-original-imagxz9fq9h58yzh.jpeg?q=90&crop=false' },
      { name: 'Bakery & Cookies', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJBGyD9YZcztJnhZSpYUH0LnHXQKpgwXIRQ&s' },
      { name: 'Frozen Food', image: 'https://www.smc-madhusudan.co.in/cdn/shop/files/FrozenPea5KGBULKBAGPACK.jpg?v=1714575762' },
      { name: 'Frozen Food', image: 'https://www.allrecipes.com/thmb/w8Ily738cHkQp6wIEAoDk0pYHY4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-frozen-chicken-nuggets-4x3-eeaaabdc3ad34636a83992df20feb476.jpg' },
      { name: 'Packaged Food', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxVU7iKYRveHuwh9s-6zEdJYmWWJOcO7t_Q&s' },
      { name: 'Masala & Dry Fruits', image: 'https://happilo.com/cdn/shop/files/Packof2_dabee52b-a3ce-490f-a0f3-771c6193ee02.jpg?v=1743492157' },
      { name: 'Meat, Fish & Eggs', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc5urnUSLIGykd-RtczR6qOUbLzUmoIOGMQ&s' },
      { name: 'Zepto Cafe', image: 'https://static.vecteezy.com/system/resources/thumbnails/034/222/060/small_2x/pumpkin-spice-latte-iced-coffee-background-generative-ai-free-photo.jpg' },
      { name: 'Frozen Food', image: 'https://m.media-amazon.com/images/I/51u2kmO5wWL._AC_UF1000,1000_QL80_.jpg' },
      { name: 'Packaged Food', image: 'https://m.media-amazon.com/images/I/51lV3g1JR0L._AC_UF1000,1000_QL80_.jpg' },
      { name: 'Masala & Dry Fruits', image: 'https://nuttygritties.com/cdn/shop/files/Artboard6_66b49457-1032-4406-b6fe-f39d8d90ee04.jpg?v=1687942372' },
      { name: 'Meat, Fish & Eggs', image: 'https://www.sanjayfarmproducts.com/img/brown.jpg' },
      { name: 'Zepto Cafe', image: 'https://c.ndtvimg.com/2020-01/3l8ja418_espresso-shot-_625x300_23_January_20.jpg' },
    ];
    
    setCategories(categoryData);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseDetails = () => {
    setSelectedCategory(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Category Carousel</h2>
      
      {/* Carousel */}
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '20px',
          padding: '10px',
          scrollbarWidth: 'none',
        }}
      >
        {categories.map((category, idx) => (
          <div key={idx} style={{ textAlign: 'center' }} onClick={() => handleCategoryClick(category)}>
            <div
              style={{
                flex: '0 0 auto',
                width: '140px',
                backdropFilter: 'blur(5px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                padding: '8px',
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: '100%',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
            <p style={{ fontSize: '14px', fontWeight: '500', marginTop: '8px' }}>{category.name}</p>
          </div>
        ))}
      </div>

      {/* Detail Container (Modal) */}
      {selectedCategory && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              width: '300px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
            }}
          >
            <h3>{selectedCategory.name}</h3>
            <img
              src={selectedCategory.image}
              alt={selectedCategory.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            />
            <p>{selectedCategory.description}</p>
            <p style={{ fontWeight: 'bold' }}>{selectedCategory.price}</p>
            <p>Rating: {selectedCategory.rating}</p>
            <div style={{ marginTop: '10px' }}>
              <button style={{ padding: '10px', marginRight: '10px' }}>Add to Cart</button>
              <button style={{ padding: '10px' }}>Buy Now</button>
            </div>
            <br />
            <button
              onClick={handleCloseDetails}
              style={{
                marginTop: '10px',
                padding: '10px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryCarousel;