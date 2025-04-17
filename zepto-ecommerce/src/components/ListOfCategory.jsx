import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListOfCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    axios.get('https://67ff8cce58f18d7209f1ad50.mockapi.io/api/v1/products')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching categories. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Product Categories</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      ) : (
        <div className="row">
          {categories.map((category) => (
            <div className="col-md-4 col-lg-3 mb-4" key={category.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="card-img-top"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{category.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListOfCategory;
