import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryDetailPage = () => {
  const { categoryName } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        // Fetch products from the API
        const response = await fetch(`https://67ff8cce58f18d7209f1ad50.mockapi.io/api/v1/products?category=${categoryName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCategoryData(data); // Set the fetched data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or if there's an error
      }
    };

    fetchCategoryData();
  }, [categoryName]);

  // Show loading message or error if any
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Check if we have any data
  if (categoryData.length === 0) {
    return <p>No products found for this category.</p>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{categoryName}</h2>
      {categoryData.map((product) => (
        <div key={product.id} style={{ marginBottom: '20px' }}>
          {/* Link component to make image clickable and navigate to product detail page */}
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            />
          </Link>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p style={{ fontWeight: 'bold' }}>${product.price}</p>
          <p>Rating: {product.rating}</p>
          <div style={{ marginTop: '10px' }}>
            <button style={{ padding: '10px', marginRight: '10px' }}>Add to Cart</button>
            <button style={{ padding: '10px' }}>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetailPage;
